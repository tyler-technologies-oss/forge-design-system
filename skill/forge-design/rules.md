# Tyler Forge rules and workflow

You build Forge UI with the Forge MCP server. Every generation must be grounded in tools (blocks, plans, validators) and the Forge guidance — never memory. The guidance is generated from the Forge docs site (https://tylerforge.design), so it is the source of truth. The index of every guidance page is at https://tylerforge.design/skill/forge-design/manifest.json.

## Top-level rules (always apply)

1. **URL-only chaining.** You may only use component tag names, block IDs, and icon names returned by a prior tool call this turn. Do not invent names. If unsure, call `find_components`, `list_components`, `find_icons`, or `get_forge_blocks` first.
2. **Start from a block.** Before writing any `<forge-*>` markup, call `get_forge_blocks`. Extract the pattern; adapt content only. See [anti-patterns.md](https://tylerforge.design/skill/forge-design/references/anti-patterns.md).
3. **Plan before writing.** For any UI larger than a single component, call `generate_ui_plan`, then `validate_ui_plan`. Only write markup after the plan validates. See [ui-plan.md](https://tylerforge.design/skill/forge-design/references/ui-plan.md).
4. **Prefer `forge-scaffold` over custom CSS** for layout inside cards, drawers, dialogs, and page regions. See [layout](https://tylerforge.design/skill/forge-design/references/design/layout.md).
5. **Keep the block's visual styles; choose heading elements from the app.** Title styles (`text-heading4` for page and dialog titles, `text-heading3` for card and drawer titles) are fixed. The `h1`–`h6` element follows the app's own outline. See [typography](https://tylerforge.design/skill/forge-design/references/design/typography.md).
6. **Icons only from the `@tylertech/tyler-icons` root.** There are no `/standard`, `/extended`, or `/custom` subpaths. See [icons](https://tylerforge.design/skill/forge-design/references/development/icons.md).
7. **Subpath-only components need their own import.** Some components aren't registered by `import '@tylertech/forge'`. See [installation](https://tylerforge.design/skill/forge-design/references/development/installation.md).
8. **Classes on `<forge-*>` elements only reach the host.** Use them for layout and custom properties, not to restyle internals. See [usage](https://tylerforge.design/skill/forge-design/references/development/usage.md).
9. **No custom colors, typography, shadows, or gradients** unless explicitly requested. Use design tokens. See [color](https://tylerforge.design/skill/forge-design/references/design/color.md) and [spacing](https://tylerforge.design/skill/forge-design/references/design/spacing.md).
10. **Validate before finalizing.** Call `validate_component_api` for every Forge component you emit. Do not skip.

## Workflow

### Step 0. Detect scope
- **Full app / prototype** ("build a dashboard", "create an admin panel", new project) → Step 1.
- **Single feature** ("add a login form", "update the header") → Step 2.

### Step 1. Application layout (full apps only)
Ask two questions before writing markup:
1. **Styling approach:** "Tailwind with `@tylertech/forge-tailwind`, or plain CSS with Forge tokens?"
2. **Layout choice:** `get_forge_blocks(category: "application-layout")` → present the list → let the user pick.

Then read [installation](https://tylerforge.design/skill/forge-design/references/development/installation.md) for setup, and [tailwind](https://tylerforge.design/skill/forge-design/references/development/tailwind.md) if they chose Tailwind.

### Step 2. Ask clarifying questions
Before implementing any feature, confirm requirements, framework, and expected behavior. Never assume.

### Step 3. Generate the UI plan
Call `generate_ui_plan` with a description of the target UI, then `validate_ui_plan` with the plan. **If validation fails**, fix the plan and re-validate. Do not proceed to markup. See [ui-plan.md](https://tylerforge.design/skill/forge-design/references/ui-plan.md).

### Step 4. Fetch the block
Call `get_forge_blocks(query: "...")` or `get_forge_blocks(component: "forge-...")`. Blocks are the authoritative structural reference and **always take precedence** over prose.

### Step 5. Load references and API contracts
Open the component, design, and developer references below that apply to the task. For any component's API (slots, attributes, events), call `get_component_docs(component: "forge-X", format: "summary")`. **`get_component_docs` never returns HTML** — markup always comes from `get_forge_blocks`.

### Step 6. Write the markup
Use the block as the structural template. Adapt content only. Do not invent slots, wrappers, or hierarchy.

### Step 7. Validate
Call `validate_component_api` for each Forge component you emitted, and fix any reported issues before delivering.

## MCP tools

- `generate_ui_plan` / `validate_ui_plan` — plan the scaffold, regions, typography, and icons, then verify it. **Call before any non-trivial markup.**
- `get_forge_blocks` — pre-built patterns. **The only source of Forge markup.**
- `get_component_docs` — component API contract only. Never returns HTML.
- `validate_component_api` — post-generation API check. **Call for every Forge component.**
- `find_components` / `list_components` — component discovery.
- `find_icons` — Tyler Icons search.
- `get_design_tokens` — color, spacing, typography, elevation, and shape tokens.
- `setup_framework` / `setup_typography` / `setup_icons` / `get_usage_guide` — project setup.
