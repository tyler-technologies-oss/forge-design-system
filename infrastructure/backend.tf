terraform {
  backend "remote" {
    organization = "tyler-corp"

    workspaces {
      name = "tcp-app-corpdev-infra-forge-docs-prod"
    }
  }
}

