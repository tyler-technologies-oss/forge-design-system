output "cloudfront" {
    description = "CloudFront Distribution"
    value       = module.forge_docs_spa.cloudfront_distribution_id
}
