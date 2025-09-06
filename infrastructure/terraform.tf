terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 6.0"
    }
    /*
    github = {
      source  = "integrations/github"
      version = "~> 5.0"
    }*/
  }
  required_version = ">= 1.0"
}
