#################################################
# Providers
#################################################

# Primary AWS provider (for resources in var.region)
provider "aws" {
  region = var.region

  default_tags {
    tags = local.tags
  }
}

provider "aws" {
  alias  = "cloudfront"
  region = "us-east-1"

  default_tags {
    tags = local.tags
  }
}

provider "aws" {
  alias  = "failover"
  region = "us-west-2"

  default_tags {
    tags = local.tags
  }
}

provider "github" {
  token = var.GITHUB_TOKEN
  owner = "tyler-technologies-oss"
}

data "aws_caller_identity" "current" {}

#################################################
# Locals
#################################################

locals {
  repo = "forge-docs"
  tags = {
    environment = "forge-docs"
    product     = "forge-website"
    project     = "tyler-forge"
    team        = "corpdev"
    managedby   = "terraform"
    repo        = local.repo
  }
}

#################################################
# Lambda Functions
#################################################

data "archive_file" "auth_zip" {
  type        = "zip"
  source_dir  = "${path.module}/auth"
  output_path = "${path.module}/build/auth.zip"
}

data "archive_file" "forward_index_zip" {
  type        = "zip"
  source_dir  = "${path.module}/forward_index/"
  output_path = "${path.module}/build/forward_index.zip"
}

module "auth_lambda" {
  source  = "terraform-aws-modules/lambda/aws"
  version = "8.0.1"

  lambda_at_edge = true

  function_name = "${var.domain_name}-authlambda"
  description   = "Auth Lambda@Edge"
  handler       = "index.handler"
  runtime       = "nodejs22.x"
  publish       = true
  memory_size   = 128
  timeout       = 5

  create_role = true
  role_name   = "${var.domain_name}-authlambdaServiceRole"
  attach_policy_json = true
  policy_json = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect   = "Allow"
        Action   = [
          "secretsmanager:GetSecretValue",
          "secretsmanager:DescribeSecret"
        ]
        Resource = var.auth_secret_arn
      }
    ]
  })

  create_package         = false
  local_existing_package = data.archive_file.auth_zip.output_path
  tracing_mode = "Active"
  tags         = merge(local.tags, { component = "auth-lambda" })

  providers = {
    aws = aws.cloudfront
  }
}

module "forward_index_lambda" {
  source  = "terraform-aws-modules/lambda/aws"
  version = "8.0.1"

  lambda_at_edge = true

  function_name = "${var.domain_name}-forwardindexlambda"
  description   = "Forward Index Lambda@Edge"
  handler       = "index.handler"
  runtime       = "nodejs22.x"
  publish       = true
  memory_size   = 128
  timeout       = 5

  create_role = true
  role_name   = "${var.domain_name}-forwardindexlambdaServiceRole"

  create_package         = false
  local_existing_package = data.archive_file.forward_index_zip.output_path

  tracing_mode = "Active"
  tags         = merge(local.tags, { component = "forward-index-lambda" })

  providers = {
    aws = aws.cloudfront
  }
}

module "forge_docs_spa" {
  source  = "app.terraform.io/tyler-corp/cloudfront/tyl//modules/spa-s3"
  version = "0.8.3"

  providers = {
    aws.cloudfront = aws.cloudfront
    aws.default    = aws
    aws.failover   = aws.failover
  }

  # Domain setup
  route53_root_domain       = var.parent_zone_name
  route53_subdomains        = [var.domain_name]
  alias_route53_root_domain = false

  # ACM and SSL
  create_acm_cert                     = true
  allow_wildcard_acm                  = true
  cloudfront_ssl_support_method       = "sni-only"
  cloudfront_minimum_protocol_version = "TLSv1.2_2019"

  # S3/CloudFront
  default_root_object = "index.html"
  cloudfront_enabled  = true
  http_version        = "http2"

  default_s3_origin_bucket_names = {
    primary_bucket_name  = "${var.s3_docs_bucket_name_prefix}-${var.domain_name}-${var.region}"
    failover_bucket_name = "${var.s3_docs_bucket_name_prefix}-${var.domain_name}-${var.region}-failover"
  }

  # Lambda@Edge for default cache behavior
  default_behavior_lambda_function_association = {
    "viewer-request" = {
      lambda_arn   = module.auth_lambda.lambda_function_qualified_arn
      include_body = false
    }
    "origin-request" = {
      lambda_arn   = module.forward_index_lambda.lambda_function_qualified_arn
      include_body = false
    }
  }

  # Ordered cache behaviors
  ordered_cache_behavior = [
    {
      path_pattern           = "*.*"
      viewer_protocol_policy = "redirect-to-https"
      allowed_methods        = ["GET", "HEAD"]
      cached_methods         = ["GET", "HEAD"]
      compress               = true

      forwarded_values = {
        query_string = false
        cookies = { forward = "none" }
      }

      lambda_function_association = {
        "viewer-request" = {
          lambda_arn   = module.auth_lambda.lambda_function_qualified_arn
          include_body = false
        }
      }
    }
  ]

  # Error pages
  custom_error_response = {
    "404" = {
      error_code         = 404
      response_code      = 404
      response_page_path = "/404.html"
    }
    "403" = {
      error_code         = 403
      response_code      = 404
      response_page_path = "/404.html"
    }
  }

  # Logging (optional)
  cloudfront_logging_config = {
    enabled           = false
    create_log_bucket = false
  }

  # Tags
  tags = local.tags
}

#################################################
### ADD OIDC Github action
data "aws_iam_openid_connect_provider" "github" {
  url = "https://token.actions.githubusercontent.com"
}

data "aws_iam_policy_document" "github_oidc_assume_role" {
  statement {
    actions = ["sts:AssumeRoleWithWebIdentity"]
    effect  = "Allow"
    principals {
      type        = "Federated"
      identifiers = [data.aws_iam_openid_connect_provider.github.arn]
    }
    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:aud"
      values   = ["sts.amazonaws.com"]
    }
    condition {
      test     = "StringLike"
      variable = "token.actions.githubusercontent.com:sub"
      values   = ["repo:tyler-technologies/${local.repo}:*"]
    }
  }
}

data "aws_iam_policy_document" "github_oidc_s3_cloudfront" {
  statement {
    actions   = [
      "s3:PutObject",
      "s3:PutObjectAcl",
      "s3:ListBucket"
    ]
    effect    = "Allow"
    resources = [
      module.forge_docs_spa.s3_default_bucket_arn,
      "${module.forge_docs_spa.s3_default_bucket_arn}/*"
    ]
  }
  statement {
    actions   = [
      "cloudfront:CreateInvalidation",
      "cloudfront:GetDistribution",
      "cloudfront:GetInvalidation",
      "cloudfront:ListInvalidations"
    ]
    effect    = "Allow"
    resources = [module.forge_docs_spa.cloudfront_distribution_arn]
  }
}

resource "aws_iam_role" "github_oidc" {
  name                 = "${var.domain_name}-github-oidc"
  assume_role_policy   = data.aws_iam_policy_document.github_oidc_assume_role.json
  max_session_duration = 3600
  tags                 = merge(local.tags, { component = "github-oidc-role" })
}

resource "aws_iam_role_policy" "github_oidc_s3_cloudfront" {
  name   = "${var.domain_name}-github-oidc-s3-cloudfront"
  role   = aws_iam_role.github_oidc.id
  policy = data.aws_iam_policy_document.github_oidc_s3_cloudfront.json
}

/*
### Githbub variables and secrets
resource "github_actions_variable" "doc_s3_bucket" {
  repository      = local.repo
  variable_name   = "AWS_S3_BUCKET_PROD"
  value           = module.forge_docs_spa.s3_default_bucket_id
}

resource "github_actions_variable" "doc_distribution_id" {
  repository      = local.repo
  variable_name   = "AWS_CLOUDFRONT_DISTRIBUTION_ID_PROD"
  value           = module.forge_docs_spa.cloudfront_distribution_id
}

resource "github_actions_variable" "doc_bucket-region" {
  repository      = local.repo
  variable_name   = "AWS_S3_BUCKET_REGION"
  value           = var.region
}

resource "github_actions_variable" "aws_github_oidc_role" {
  repository      = local.repo
  variable_name   = "AWS_GITHUB_OIDC_ROLE"
  value           = aws_iam_role.github_oidc.name
}

resource "github_actions_secret" "aws_account_id" {
  repository  = local.repo
  secret_name = "AWS_ACCOUNT_ID"
  plaintext_value = data.aws_caller_identity.current.account_id
}
*/

##### add CDN domain
module "forge_cdn_spa" {
  source  = "app.terraform.io/tyler-corp/cloudfront/tyl//modules/spa-s3"
  version = "0.8.3"

  providers = {
    aws.cloudfront = aws.cloudfront
    aws.default    = aws
    aws.failover   = aws.failover
  }

  # Domain / DNS (assumes var.parent_zone_name = "tylertech.com"
  # and var.domain_name = "forge.tylertech.com")
  route53_root_domain       = "forge.tylertech.com"
  # Keep the original hostname AND add the CDN alias on the same distribution.
  route53_subdomains        = ["cdn-new"]
  alias_route53_root_domain = false

  # ACM / TLS
  create_acm_cert                     = true
  allow_wildcard_acm                  = true
  cloudfront_ssl_support_method       = "sni-only"
  cloudfront_minimum_protocol_version = "TLSv1.2_2019"

  # S3 / CloudFront (reuse the SAME buckets as before)
  default_root_object = "index.html"
  cloudfront_enabled  = true
  http_version        = "http2"
  
  default_s3_origin_bucket_names = {
    primary_bucket_name  = "${var.s3_docs_bucket_name_prefix}-${var.domain_name}-cdn-${var.region}"
    failover_bucket_name = "${var.s3_docs_bucket_name_prefix}-${var.domain_name}-cdn-${var.region}-failover"
  }


  # Ordered behaviors: put the specific asset paths BEFORE the catch-all "*.*"
  ordered_cache_behavior = [
    {
      path_pattern           = "*/fonts/*"
      viewer_protocol_policy = "redirect-to-https"
      allowed_methods        = ["GET", "HEAD", "OPTIONS"]
      cached_methods         = ["GET", "HEAD", "OPTIONS"]
      compress               = true
      forwarded_values = {
        query_string = false
        headers      = ["Origin", "Access-Control-Request-Headers", "Access-Control-Request-Method"]
        cookies      = { forward = "none" }
      }
    },
    {
      path_pattern           = "*/images/*"
      viewer_protocol_policy = "redirect-to-https"
      allowed_methods        = ["GET", "HEAD", "OPTIONS"]
      cached_methods         = ["GET", "HEAD", "OPTIONS"]
      compress               = true
      forwarded_values = {
        query_string = false
        headers      = ["Origin", "Access-Control-Request-Headers", "Access-Control-Request-Method"]
        cookies      = { forward = "none" }
      }
    },
    {
      path_pattern           = "*/metadata/*"
      viewer_protocol_policy = "redirect-to-https"
      allowed_methods        = ["GET", "HEAD", "OPTIONS"]
      cached_methods         = ["GET", "HEAD", "OPTIONS"]
      compress               = true
      forwarded_values = {
        query_string = false
        headers      = ["Origin", "Access-Control-Request-Headers", "Access-Control-Request-Method"]
        cookies      = { forward = "none" }
      }
    },
    {
      # Catch-all for direct file hits; keep auth here if you still want it on non-asset files.
      path_pattern           = "*.*"
      viewer_protocol_policy = "redirect-to-https"
      allowed_methods        = ["GET", "HEAD"]
      cached_methods         = ["GET", "HEAD"]
      compress               = true
      forwarded_values = {
        query_string = false
        cookies      = { forward = "none" }
      }
    }
  ]

  # No logging buckets
  cloudfront_logging_config = {
    enabled           = false
    create_log_bucket = false
  }

  tags = local.tags
}
