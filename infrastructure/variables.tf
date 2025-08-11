variable "region" {
  description = "AWS region to deploy into"
  type        = string
  default     = "us-east-1"
}

variable "domain_name" {
  description = "Domain name for the CloudFront distribution"
  type        = string
  default     = ""
}

variable "parent_zone_name" {
  description = "The root Route 53 zone to use for DNS records"
  type        = string
  default     = ""
}

variable "cdn_domain_name" {
  description = "Domain name for the CloudFront distribution"
  type        = string
  default     = ""
}

variable "cdn_parent_zone_name" {
  description = "The root Route 53 zone to use for DNS records"
  type        = string
  default     = ""
}

variable "s3_docs_bucket_name_prefix" {
  description = "S3 bucket name for the documentation"
  type        = string
  default     = "forge-docs-assets"
}


variable "auth_secret_arn" {
  description = "Secrets Manager ARN for the auth Lambda credentials"
  type        = string
  default     = ""
}

variable "aws_access_key_id" {
  description = "AWS access key ID"
  type        = string
  default     = ""
}

variable "aws_secret_access_key" {
  description = "AWS secret access key"
  type        = string
  sensitive   = true
  default     = ""
}

variable "GITHUB_TOKEN" {
  description = "GitHub token with repo and admin:org permissions"
  type        = string
  sensitive   = true
  default     = ""
}