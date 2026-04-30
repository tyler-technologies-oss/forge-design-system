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

## Typography Utilities

Forge's type scale is available as utility classes like `text-heading1`, `text-body1`, and `text-label2`. Each class applies the complete typographic style—font size, line height, and weight—ensuring consistent text rendering across your application:

<iframe
  src="https://forge.tylerdev.io/forge/pr-1141/iframe.html?id=recipes-tailwind-layouts-typography--docs&viewMode=docs&shortcuts=false&singleStory=true"
  width="100%"
  height="450"
></iframe>

## Vertical Rhythm with space-y

The `space-y-*` utility adds consistent spacing between child elements without wrapper components. Use numeric values like `space-y-6` or semantic names like `space-y-large` — both resolve to the same Forge token.

<iframe
  src="https://forge.tylerdev.io/forge/pr-1141/iframe.html?id=recipes-tailwind-layouts-vertical-rhythm--docs&viewMode=docs&shortcuts=false&singleStory=true"
  width="100%"
  height="450"
></iframe>

## Responsive Design with Container Queries

Responsive behavior becomes declarative using container queries. The `@container` class establishes a query context, and `@min-[500px]:block` shows the third box only when the container reaches 500px wide—responding to the component's size rather than the viewport. Resize your browser window to see the third box appear and disappear:

<iframe
  src="https://forge.tylerdev.io/forge/pr-1141/iframe.html?id=recipes-tailwind-layouts-responsive-breakpoints--docs&viewMode=docs&shortcuts=false&singleStory=true"
  width="100%"
  height="450"
></iframe>

## Pre-Built Forge Utilities

Beyond the standard Tailwind mappings, the Forge team is building a collection of **pre-built combination utility classes** for common patterns across Tyler products. These encapsulate best practices into single, reusable classes.

One example is `.grid-min-120`—a truly responsive grid that doesn't need breakpoints at all. Items are at least 120px wide (or 100% if the container is smaller), automatically wrap when they can't fit, and stretch equally to fill available space. The magic is in `auto-fill` and `minmax()`: instead of manually specifying column counts at different breakpoints, the browser figures it out based on available space. Resize your browser window to see the grid adapt:

<iframe
  src="https://forge.tylerdev.io/forge/pr-1141/iframe.html?id=recipes-tailwind-layouts-grid-min--docs&viewMode=docs&shortcuts=false&singleStory=true"
  width="100%"
  height="450"
></iframe>

We'll be adding more of these Forge-specific utilities over time—patterns we see repeated across products, distilled into single classes that teams can use without reinventing the wheel.

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
