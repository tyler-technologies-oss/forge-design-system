---
title: Introducing Forge Tailwind
description: Use Tailwind CSS utilities with Forge design tokens for rapid, consistent layout development.
authors: [nick.andrews]
tags: [forge, tailwind, css, layout]
---

We're excited to announce **@tylertech/forge-tailwind**, a new Tailwind CSS v4 theme package that brings the power of utility-first CSS to the Forge design system. If you've ever wanted to quickly scaffold layouts, manage spacing, or build responsive grids without writing custom CSS — while staying perfectly aligned with Forge's design tokens — this package is for you.

<!-- truncate -->

## The Consistency Challenge

Across Tyler, teams build similar layouts every day: card grids, form sections, page scaffolds, sidebars with content areas. Each team writes their own CSS. Each team makes their own spacing decisions. And despite everyone's best intentions, inconsistencies creep in.

One product uses 16px gaps between cards. Another uses 20px. A third uses 24px but only on desktop. None of these are wrong — but they're not the same, and users notice.

The problem isn't lack of skill. It's that writing layout CSS from scratch every time invites variation. When you're focused on shipping features, it's easy to eyeball a margin value or round to a convenient number.

## Utility-First: A Different Approach

Tailwind CSS popularized a different model: instead of writing custom CSS for every layout, you compose designs from a constrained set of utility classes. Need padding? Use `p-4`. Need a gap between items? Use `gap-4`. Need it to change on larger screens? Use `md:gap-6`.

The key insight is **constraint breeds consistency**. When your options are limited to a predefined scale, you can't accidentally pick an off-system value. There's no `p-17` or `gap-13px` — you work within the system.

This is powerful for design systems. Instead of hoping developers remember to use `--forge-spacing-medium`, you give them `p-4` or `p-medium` and it just works. The utility class handles the token mapping.

## Forge Tokens, Tailwind Workflow

**@tylertech/forge-tailwind** maps Tailwind's utility classes directly to Forge design tokens. Every spacing value, every color, every shadow references Forge's CSS custom properties under the hood.

This means:

- `p-4` uses `--forge-spacing-medium` (16px)
- `gap-6` uses `--forge-spacing-large` (24px)
- `rounded-lg` uses `--forge-shape-large`
- `shadow-lg` uses Forge's elevation tokens

You get the developer experience of Tailwind with the design consistency of Forge. Developers write familiar utility classes; the design system enforces the values.

## Less CSS, More Consistency

Consider a common pattern: a section with a heading and a list of cards.

**Traditional approach:**

```css
.activity-section {
  padding: 24px;
}

.activity-header {
  margin-bottom: 16px;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

@media (min-width: 768px) {
  .activity-section {
    padding: 32px;
  }

  .activity-list {
    gap: 16px;
  }
}
```

```html
<section class="activity-section">
  <h2 class="activity-header">Recent Activity</h2>
  <div class="activity-list">
    <forge-card>...</forge-card>
    <forge-card>...</forge-card>
  </div>
</section>
```

**With Forge Tailwind:**

```html
<section class="p-6 md:p-8">
  <h2 class="mb-4">Recent Activity</h2>
  <div class="flex flex-col gap-3 md:gap-4">
    <forge-card>...</forge-card>
    <forge-card>...</forge-card>
  </div>
</section>
```

No CSS file needed. The layout is declared right in the markup. And every value maps to a Forge token — there's no way to accidentally use 13px instead of 12px.

## Vertical Rhythm with space-y

The `space-y-*` utility is particularly useful. It adds consistent spacing between child elements without wrapper components:

```html
<div class="space-y-4">
  <forge-card>First item</forge-card>
  <forge-card>Second item</forge-card>
  <forge-card>Third item</forge-card>
</div>
```

This adds 16px of vertical space between each card. Clean, predictable, and token-aligned.

You can also use semantic naming if your team prefers explicit token references:

```html
<div class="space-y-medium">
  ...
</div>
```

Both `space-y-4` and `space-y-medium` resolve to the same Forge token.

## Responsive Design Without Media Queries

Responsive behavior becomes declarative. Instead of writing media queries, you prefix utilities with breakpoint modifiers:

```html
<div class="p-4 md:p-6 lg:p-8">
  <h1 class="text-heading5 md:text-heading4 lg:text-heading3">
    Dashboard
  </h1>

  <div class="space-y-4 md:space-y-6">
    <!-- Content that breathes more on larger screens -->
  </div>
</div>
```

On mobile: compact 16px padding, smaller heading. On medium screens: 24px padding, larger heading. On large screens: 32px padding, largest heading. No CSS files to maintain — just declare your intent.

## Responsive Grids

Grid layouts showcase this best. A card grid that adapts from one column on mobile to three on desktop:

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
  <forge-card>...</forge-card>
  <forge-card>...</forge-card>
  <forge-card>...</forge-card>
</div>
```

The gap scales with the viewport. Items reflow naturally. This pattern — which traditionally requires a CSS file with media queries — is now a single line of utility classes.

## Pre-Built Forge Utilities

Beyond the standard Tailwind mappings, the Forge team is building a collection of **pre-built combination utility classes** for common patterns across Tyler products. These encapsulate best practices into single, reusable classes.

One example is a truly responsive grid that doesn't need breakpoints at all:

```css
.grid-min-320 {
  @apply grid grid-cols-[repeat(auto-fill,minmax(min(320px,100%),1fr))] gap-medium;
}
```

This creates a grid where:

- Items are **at least 320px wide** (or 100% if the container is smaller than 320px)
- Items **automatically wrap** to the next row when they can't fit
- The grid **fills available space** by stretching items equally
- Spacing uses Forge's `gap-medium` token

The magic is in `auto-fill` and `minmax()`. Instead of manually specifying "1 column on mobile, 2 on tablet, 3 on desktop," the browser figures it out based on available space. A 1000px container fits 3 items. A 700px container fits 2. A 400px container fits 1. No breakpoints, no media queries — just CSS that adapts to its container.

```html
<div class="grid-min-320">
  <forge-card>Adapts automatically</forge-card>
  <forge-card>No breakpoints needed</forge-card>
  <forge-card>Items wrap naturally</forge-card>
  <forge-card>Fills available space</forge-card>
</div>
```

We'll be adding more of these Forge-specific utilities over time — patterns we see repeated across products, distilled into single classes that teams can use without reinventing the wheel.

## A Complete Layout Example

Here's a realistic page layout combining these patterns:

```html
<main class="p-4 md:p-8 space-y-6 md:space-y-8">
  <!-- Page header -->
  <header class="space-y-2">
    <h1 class="text-heading3 md:text-heading2">Projects</h1>
    <p class="text-body2 text-medium">Manage your active projects</p>
  </header>

  <!-- Action bar -->
  <div class="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
    <forge-text-field placeholder="Search projects..."></forge-text-field>
    <forge-button variant="raised">New Project</forge-button>
  </div>

  <!-- Project grid - auto-responsive! -->
  <div class="grid-min-320">
    <forge-card>...</forge-card>
    <forge-card>...</forge-card>
    <forge-card>...</forge-card>
  </div>
</main>
```

This layout is fully responsive, uses Forge components for interactive elements, and relies on Tailwind purely for structure and spacing. The grid adapts to any container width without a single media query.

## The Compound Effect

The real benefit isn't any single layout — it's what happens across an organization.

When every team uses the same utility classes mapped to the same design tokens:

- **Spacing becomes predictable.** A `gap-4` in one product looks exactly like `gap-4` in another.
- **Code becomes portable.** Layout patterns can move between projects without CSS conflicts.
- **Reviews become easier.** Reviewers can verify design compliance by scanning class names.
- **Onboarding accelerates.** New developers learn one system that works everywhere.

This is how you scale consistency. Not by hoping everyone reads the documentation, but by making the right choice the easy choice.

## Our Recommendation

We recommend using Tailwind primarily for **layout** concerns:

- **Flexbox and Grid** — `flex`, `grid`, `inline-flex`
- **Spacing** — `p-*`, `m-*`, `gap-*`, `space-y-*`
- **Sizing** — `w-*`, `h-*`, `max-w-*`, `min-h-*`
- **Positioning** — `absolute`, `relative`, `top-*`, `left-*`
- **Responsive design** — `sm:`, `md:`, `lg:` breakpoint prefixes

For colors, typography, and component styling, continue using Forge components and CSS custom properties directly. This separation keeps your layouts portable and your styling consistent with the design system.

## Looking Ahead: Blocks

This package is the foundation for something bigger. We're building a library of **blocks** — shareable layout patterns and code snippets that teams can drop into their projects.

Think of blocks as battle-tested starting points: a settings page layout, a dashboard shell, a data table with filters. Built with Forge components and Forge Tailwind utilities, blocks will help teams ship faster while maintaining visual consistency across Tyler products.

More on blocks in a future post.

## Get Started

Ready to try it? Installation and setup instructions are available in the [Tailwind CSS guide](https://forge.tylerdev.io/forge/v3/?path=/docs/getting-started-tailwind-css--docs) on the Forge Storybook site.

This package is entirely optional — Forge components work perfectly without it. But if you want utility-first layout development with guaranteed token alignment, give it a try.

We're excited to see what you build.
