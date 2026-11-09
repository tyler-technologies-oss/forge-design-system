# Tyler Forge™ Design System website — deploy target

> [!IMPORTANT]
> **This repository no longer contains any source code.** It exists only to host the
> built Forge documentation site on GitHub Pages at **[tylerforge.design](https://tylerforge.design)**.

## Where the source lives

The website source now lives in the Forge monorepo:

- **Repository:** [tyler-technologies-oss/forge](https://github.com/tyler-technologies-oss/forge)
- **Site source:** [`docs/`](https://github.com/tyler-technologies-oss/forge/tree/main/docs)
- **Deploy workflow:** [`.github/workflows/deploy-docs.yml`](https://github.com/tyler-technologies-oss/forge/blob/main/.github/workflows/deploy-docs.yml)

Please open issues and pull requests for the website in the **forge** repository, not here.

## How deployment works

1. A change merges to `main` in `tyler-technologies-oss/forge` (under `docs/` or one of the Forge packages).
2. The `Deploy Docs` workflow there builds the site and pushes the output (`docs/dist`) to the
   **`gh-pages`** branch of this repository as a single commit.
3. GitHub Pages serves the `gh-pages` branch at [tylerforge.design](https://tylerforge.design).

**Don't commit to `gh-pages` by hand.** The next deploy overwrites that branch completely.

## Branches

| Branch                    | Purpose                                                                  |
| ------------------------- | ------------------------------------------------------------------------ |
| `main`                    | This README only.                                                        |
| `gh-pages`                | Built site output, managed by the forge monorepo. Served by GitHub Pages.|
| `archive/docusaurus-site` | Read-only snapshot of the previous Docusaurus-based website source.      |

## The previous website

Before the move to the monorepo, this repository held the Docusaurus 3 source for the Forge
documentation site. That code is preserved on the
[`archive/docusaurus-site`](https://github.com/tyler-technologies-oss/forge-design-system/tree/archive/docusaurus-site)
branch for reference. It is no longer maintained or deployed.
