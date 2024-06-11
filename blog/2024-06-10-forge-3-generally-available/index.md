---
title: Forge 3.0 is now available!
description: Forge 3.0 is now generally available for all to install and start using.
authors: [kieran.nichols]
tags: [forge, components]
---

Today we're excited to share the next major version of Tyler Forge™ components! It has been a monumental
effort, and we're extremely happy with where the final product ended up. This new version modernizes the
library, and opens the door to many new possibilities for developers building applications with Forge.
We're looking forward to seeing what you build with it!

<!-- truncate -->

Key highlights of this release include:

- A focus on core accessibility improvements
- Removal of our dependency on Material
- Revamped theming system
- Uniform typography scale and new type styles
- Introduction of design tokens
- Separation of focus and interaction states
- Usage pattern updates for accessible lists
- Improved dialog implementation
- Button and form control HTML structure updates
- New overlay primitive for all floating elements (popover, tooltip, toast... etc.)
- End of life for TCW 1.x (effective as of 6/10/2024)

... and much more! 🎉

:::info TL;DR
This release includes many new features and improvements, as well as some breaking changes. We've done our best to make
the upgrade process as smooth as possible, but there are some changes that you should be aware of. Please review the full
list of changes, and let us know if you run into any issues. We're here to help!

- Show me how to [upgrade](#how-do-i-upgrade).
- View the upgrade guide [here](https://github.com/tyler-technologies-oss/forge/wiki/Forge-3.0-Upgrade-Guide).
:::

## Shout Outs

We'd like to give a special shout out to the following who have contributed to this release in various ways:

- **Sam Richardson:**
  We wouldn't have been able to make the progress we did without Sam's tireless work on refactoring many
  of the core components such as the text field, checkbox, radio, and switch. Sam is also responsible for
  many of the accessibility improvements that have been made in this release, and we're extremely grateful
  for his hard work. Sam has been a key contributor to Forge for many years, and we're lucky to have him on
  the team.

- **Paul Lapczynski & Derek Moss**
  Documentation is always the most tedious and last thing to get done, but it's one of the most important
  aspects of any software project. Paul and Derek volunteered to help rebuild the Forge Storybook documentation
  site, and I'm sure I can speak for them in saying that it was no small task. They did an amazing job, and we're
  hoping this new documentation site will be a valuable resource for developers going forward. More improvements
  to come!

- **Rob Sturgill & Tyler McGowan:**
  Rob and Tyler were extremely helpful in the early stages of the theming and typography updates, as well as the
  introduction of design tokens. They directly influenced many of the great changes that were introduced in these
  areas, and were key to the success of these improvements.
  
  Rob also maintains the Forge Figma library for designers, and he has been keeping it up to date with the latest
  changes as 3.0 has progressed so that our designers and developers can stay in sync.
  
- **Nick Andrews, Paul Lapczynski, Ross Blakeney, Jonathan Earl, and Rob Jacobs:**
  These folks volunteered to help test various preview builds of Forge 3.0, and their feedback was invaluable
  in helping us identify and fix issues before the final release. Bugs in software are inevitable, but the work
  of these folks helped us to catch many of them early on.

### Governance

In addition to these folks, we'd also like to thank the Forge governance committees for their feedback on various
design and implementation decisions that were made in this release. We're hoping to strengthen the governance
process around Forge in the coming weeks, and we're looking forward to getting more folks involved in the
decision making process.

:::note Get involved!
If you're interested in getting involved with Forge or joining the governance process to voice your opinion,
please let us know!
:::

## Accessibility Improvements

We've made a concerted effort to improve the accessibility of Forge components. This effort included
a full audit of our components, many structural adjustments, and a focus on ensuring that all components
come with the necessary ARIA attributes and keyboard interactions while still allowing for customization
by developers when necessary.

Accessibility is going to be a key focus for all of Tyler in the coming months, and we want to make sure that
everyone who uses Forge can do so with confidence that is is accessible to all users. The accessibility
landscape is vast and complex, and we're committed to making sure that we're doing our part to make it
easier for developers to build accessible applications.

:::note We need your help!
Please let us know if you come across any accessibility issues. We'll do our best to address them as
quickly as possible. Accessibility issues are our top priority, and we want to make sure that we're
doing everything we can to make Forge components accessible to all users. 
:::

## Material Dependency

We've removed our dependency on Material in this release. This was a big step for us, and it allowed us
to make many improvements to the library that we wouldn't have been able to do otherwise. We're excited
to see how this change will allow us to move forward with new features and improvements in the future.

## Theming System

The Forge theming system was lacking in many ways, partially due to the Material dependency. With the 
removal of Material, we are now able to provide Forge-named CSS variables for theming, and the core
theming system across all components has been refactored for deep integration with these design tokens.

View the [Theming](https://forge.tylerdev.io/main/?path=/docs/getting-started-theming--docs) docs for
more information.

## Typography

We've introduced a uniform typography scale and a few new variations on our type styles. This should help
give your design more consistency, and reduce confusion when choosing the right type style for your content.

View the [Typography](https://forge.tylerdev.io/main/?path=/docs/getting-started-typography--docs) docs for
more information.

## Design Tokens

Design tokens are a new concept for Forge, and they are a key part of the theming and typography systems,
among other things. Design tokens are a way to define the core/primitive design values of our visual
design language in a way that can be shared across all components and design tools. This will allow us to
make changes to our design language in a more consistent and maintainable way between design and development.

Design tokens allow for consistent design across all components, while enabling branding and customization 
flexibility for those that need it without having to modify the core components. This is a big step forward
for Forge, and we're excited to see how it can be utilized!

:::note Use with Caution
It's worth noting that design tokens enable great flexibility and consistency, but they also require careful
understanding about _when_ to use them. They should not be used to override the core design language of Forge
components arbitrarily, but instead only when branding or customization is required.
:::

View the [Design Tokens](https://forge.tylerdev.io/main/?path=/docs/design-tokens-introduction--docs) docs
for more information.

## Focus and Interaction States

Previous versions of Forge had a single state that was used for both focus and interaction feedback. This
was implemented following Material's "ripple" pattern. In this release, we've separated these states to allow for
the focus state to act as a "ring" around the element, while the interaction state can be a more subtle effect
when hovered and pressed. This separation allows for improved accessibility and a more clear delineation between
focus and interaction states.

:::info Deep Integration
The focus indicator and state layer components are now deeply integrated into all Forge components that offer
user interaction. You will get this for free, but if you need to integrate these components into your own
custom components, you can do so easily with by utilizing these new primitives.
:::

View the [focus indicator](https://forge.tylerdev.io/main/?path=/docs/components-focus-indicator--docs) and
[state layer](https://forge.tylerdev.io/main/?path=/docs/components-state-layer--docs) docs for more information.

## Usage Patterns

One of the initial driving factors for this release was to improve the usage patterns of various Forge components.
The web is an ever evolving platform, and we want to make sure that Forge components are keeping up with the latest
features and best practices.

### Accessible Lists

The Forge list and list item components are core to many applications, and we've made some updates to ensure that
the can be used in a more accessible way, while still allowing for the flexibility that developers need.

View the [List](https://forge.tylerdev.io/main/?path=/docs/components-list--docs) docs for more information.

### Dialogs

The Forge dialog component has been completely rebuilt from scratch in this release. We've made many improvements
to the component, most notably in how it uses the native `<dialog>` element.

See the [Dialog](https://forge.tylerdev.io/main/?path=/docs/components-dialog--docs) docs for more information.

### Buttons and Form Controls

The Forge button, icon button, and floating action button components have been updated to use a new HTML structure.
This new structure removes the need to supply a native `<button>` element as a child of the component. In addition
to this, the API for these components has been altered slightly to make them more consistent and easier to use.

Much the same as buttons, the Forge form control components checkbox, radio, and switch have been rewritten from the
ground up and no longer require a native `<input>` element as a child. These elements will continue to participate
in HTML forms as expected.

These components themselves become the interactive and semantic elements, and this is a step in the right direction
for improving Forge and making it easier to use.

:::note Future
This pattern of removing the need to supply a native element as a child of the component is something we're looking
to do across other Forge components in the future such as the text field. This will make using Forge more concise and
easier to understand by reducing confusion about which elements to interact with.
:::

### Overlay

We've introduced a new "overlay" primitive that can be used to create floating elements such as popovers, tooltips,
toasts, etc. This new primitive is a key part of all elements that show dropdowns or other floating content
on your page. It's a simple component, but it's a powerful one! This new implementation is built on top of the 
new [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API) in the browser.

View the [Overlay](https://forge.tylerdev.io/main/?path=/docs/components-overlay--docs) docs for more information.

## How do I upgrade?

Alright, let's get to the details! We've done our best to make the upgrade process as smooth as possible,
but there are some breaking changes that you should be aware of. We've documented the process on the Forge
GitHub wiki, and we're here to help if you run into any issues.

View the [Forge 3.0 Upgrade Guide](https://github.com/tyler-technologies-oss/forge/wiki/Forge-3.0-Upgrade-Guide).

### Upgrade Utility

The Forge upgrade utility has been revamped to help you migrate your application to Forge 3.0. We know that
upgrading to a new version of a UI library can be a daunting task, and we wanted to make an attempt at improving
this process. The upgrade utility for Forge 3.0 is designed to help you automate as much of the upgrade process
as possible.

:::note Feedback is Welcome!
If you run into any issues with the upgrade utility, find any breaking changes that aren't documented or upgraded
correctly, or have any other feedback on the upgrade process, please let us know!
:::

## What's New?

Along with the various breaking changes, we've also introduced many new features and improvements in Forge 3.0 that
we think you'll love. Please review the full list of changes in detail to make sure you don't miss out on anything!

Here is a list of some of the key highlights:

- Buttons no longer require a native `<button>` element as a child
  - The button and icon button also offer more variants for different use cases
- Checkboxes and radios no longer require a native `<input>` element as a child
- Button toggles have received a design update to reduce emphasis
- A new `<forge-split-button>` component has been introduced to facilitate implementing the split button design pattern
- Dialogs have been completely rebuilt from scratch using the native `<dialog>` element
- Popups have been renamed to popover and have been updated to use the new overlay primitive
- Tabs have been rewritten from scratch for improved accessibility
- The slider has been rewritten from scratch and should now be more stable and accessible
- The list and list item components now require a new HTML structure for improved accessibility and more flexible usage
- Expansion panels no longer use JavaScript-based animations
- Tooltips received a minor design update to improve contrast and readability
- The text field and select components now share the same underlying `<forge-field>` element for consistency
  - These components now also allow for labels outside of the field as well via the `labelPosition` property.

This is only scratching the surface! There are many more smaller features that have been introduced in this
release, and the upgrade guide will help you understand how to take advantage of them.

:::info
Forge 3.0 is **not** a visual overhaul, but a modernization of the library. We've made many improvements under the hood
that will affect how you use Forge, but the visual appearance of the components should remain largely the same aside
from a few small tweaks here and there.
:::

View the full list of changes [here](https://github.com/tyler-technologies-oss/forge/wiki/Forge-3.0-Upgrade-Guide).

## Backwards Compatibility

Forge 3.0 is a major release, and as such there are some breaking changes to be aware of.

We've done our best to document these changes [here](https://github.com/tyler-technologies-oss/forge/wiki/Forge-3.0-Upgrade-Guide),
but if there are things that we missed, or if you run into any issues, please let us know so that we can address them
as quickly as possible.

:::info Please report any issues you find!
We're committed to making sure that Forge 3.0 is as stable and reliable as possible. If you run into any issues,
please let us know so that we can address them as quickly as possible. We're here to help!
:::

## Contribution

We're always looking for ways to improve Forge, and we're open to contributions from the community. If you have
an idea for a new feature, or if you've found a bug that you'd like to fix, please let us know!

Please use the following resources to get involved:

### GitHub Issues

If you find a bug in Forge, or if you have an idea for a new feature, please open an issue on the
[Forge GitHub](https://github.com/tyler-technologies-oss/forge/issues).

### Pull Requests

If you'd like to contribute to Forge, please open a pull request on the [Forge GitHub](https://github.com/tyler-technologies-oss/forge/pulls).
We're always looking for ways to improve the library, and we're open to contributions from the community.

:::info Forking the Repo
If you'd like to contribute to Forge, please fork the repo first and open a pull request with your changes.
:::

### Canny

We've introduced a new Canny board for feature requests and feedback. If you have an idea for a new feature,
please create a new post on the Canny board so that we can track it, vote on it, and prioritize it accordingly.

View the [Forge Canny board](https://tylerforge.canny.io/feature-requests) for more information.

### RFC Process

We're introducing a new RFC (Request for Comments) process for proposing new features and changes to Forge. This
process is designed to make it easier for developers to contribute to Forge, and to ensure that all changes are
thoroughly reviewed before they are implemented. If you're interested in making Forge better, please consider
participating in the RFC process!

### Documentation

We're always looking for ways to improve the Forge documentation. If you have an idea for a new demo, find a
typo in the documentation, or find something confusing that needs more context, please let us know so that we
can address it.

We're still in the process of updating and improving the Forge documentation, and we will continue to do so gradually
over the coming weeks. If you have any feedback on the new documentation site, please let us know!

## What's Next?

We're excited to see what you build with Forge 3.0! We've got many plans to introduce new features and improvements
over the coming months, and we're looking forward to sharing them with you as they become available.

See the [roadmap](https://forge.tylerdev.io/main/?path=/docs/about-roadmap--docs) to stay up to date with what's coming next for Forge.

### TCW 1.x End of Life

With the release of Forge 3.0, we're also announcing the end of life for TCW 1.x effective as of 6/10/2024. We know that many
of you have been using TCW 1.x for a long time, and we know it's not a trivial task to upgrade to Forge 3.0. TCW 1.x was a step in
the right direction, but it has many limitations and core flaws, and we've addressed many (if not all) of these between
Forge 2.x and 3.x.

**Please try to get an upgrade plan in place on your roadmap as soon as possible.**

:::info Automated Upgrade
The Forge upgrade utility is designed to help automate as much of the upgrade process as possible. When upgrading from
TCW 1.x to Forge 3.0, you'll need to upgrade to Forge 2.x **first**, and then to Forge 3.0. **There is not a direct migration
path in the utility for the direct jump to 3.0**.

See the [Forge 2.x upgrade guide](/blog/2022/05/02/upgrade-guide-forge-2) for more information.

Please use [this tool](https://github.com/tyler-technologies/forge-upgrade) to help you migrate your applications and
libraries to Forge 3.0, and reach out to us if you have any questions or need assistance.
:::

### Goals

As we continue to evolve Forge, we have a few key goals in mind:

- Solidify APIs, usage patterns, and implementation to reduce breaking changes in future versions. We want to get
  to a point where you can upgrade Forge easily with confidence that your application will continue to work as expected.

- Improve accessibility across all components. This is a key focus for us, and we want to make sure that all Forge
  components are accessible to all users.

- Introduce new components and features that make it easier to build applications with Forge. We're always looking
  for ways to improve the developer experience, and we're excited to see what new features we can introduce in the
  near future.

- Cultivate a strong community around Forge. We want to make sure that developers have the resources they need to
  build amazing applications with Forge, and we're always open to contribution and feedback from the community.

### Conclusion

We know many of you have been waiting a long time for this release, and we're extremely grateful for your patience
and support. We had originally intended for this project to be released much sooner, but due to the complexity of
the changes that were made, many roadblocks along the way, and the sheer amount of work that needed to be done, we
ended up taking a bit longer but we're extremely happy with where we ended up.

We hope the upgrade process goes smoothly for you, and we're here to help if you run into any issues. We're excited
to see what you build with Forge 3.0, and we're looking forward to sharing more updates with you in the coming months!

Alright, that's all for now. Thanks for reading, and happy coding! 🚀
