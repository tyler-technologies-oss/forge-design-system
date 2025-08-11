output "cloudfront" {
    description = "CloudFront Distribution"
    value       = module.new_docs_spa.cloudfront_distribution_id
}
