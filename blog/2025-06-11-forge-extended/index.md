---
title: Introducing Forge Extended
description: Prebuilt Forge patterns as components for Tyler Forge.
authors: [kieran.nichols]
tags: [forge, extended, patterns, components]
---

We are excited to announce the release of **Forge Extended**, a new library of prebuilt Forge patterns as components for Tyler Forge!
This new library of components is designed to help you build applications faster and more efficiently by providing a set of prebuilt components
that can easily be integrated into your projects. Forge Extended will help to reduce development time and effort, while increasing consistency and quality.

<!-- truncate -->

## What is Forge Extended?

Forge Extended is a collection of components that implement common Forge design patterns, and is built on top of the core Tyler Forge component library.
These components are designed to be more opinionated and provide a higher level of abstraction with low volatility, allowing you to quickly and easily add functionality to your application without having to worry about the underlying implementation or design details.

You can think of Forge Extended as a set of "batteries included" components that you can drop into your application that take care of the heavy lifting of
implementing common layouts, interactions, and behaviors that are common across many Tyler applications.

## Getting Started

You can get started by navigating to the Forge Extended documentation site, where you will find detailed information on how to install the library, use the
components, and view detailed API documentation for each component:
<div>https://tyler-technologies-oss.github.io/forge-extended</div>

You can also find the source code for Forge Extended on GitHub:
<div>https://github.com/tyler-technologies-oss/forge-extended</div>

## Components

The initial release of Forge Extended includes just a few components, but we are actively working on adding more in the near future.

Some of the components available initially include:

- **Busy Indicator**: Displays a loading indicator dialog while the application is performing long running operations.
- **Confirmation Dialog**: A standardized dialog for confirming or canceling an action.
- **Quantity Field**: Allows users to input a quantity alongside built-in increment and decrement buttons.
- **Responsive Toolbar**: Built on top of the Forge toolbar component, this component provides responsive features for adapting the layout and slotted content based on the available space in the layout.

### Accessibility

Another important aspect of Forge Extended is that all components are designed with accessibility in mind. These components will handle most (if not all) of the accessibility concerns for you, while still giving you hooks to override accessibility features as needed.

### Future Components

We are actively working on more components that will be added to Forge Extended in the near future. These components will cover a wide range of common patterns, features, and layouts that are typically seen across most Tyler applications.

Some of the components that are in the pipeline include:

- **Profile Menu**: Designed to replace the legacy App Bar Profile Button component, this will provide a more modern and flexible profile menu for user accounts, including a built-in theme toggle.
- **App Launcher**: A modern component that provides a standardized way to launch applications from within a Tyler application.
- **Filter Sidesheet**: A component that provides a standardized way to filter data in a side sheet, allowing users to easily apply filters to data sets.
- **Application Shell**: A standardized application layout that provides a consistent layout and structure for Tyler applications, including a header, navigation menu sidebar, scrollable content area, and built-in support for responsive design.
- **Data Grid**: A robust table component built on top of the headless Tanstack Table library.
- **Rich Text Editor**: We're currently prototyping and evaluating a flexible rich text editor component built on top of the popular headless Tiptap library.
- ... and many more!

Stay tuned for updates on these components as we continue to develop and refine them.

## Governance

Each of these components are reviewed by the Tyler Forge governance board, which is responsible for approving new components and patterns for inclusion in the Forge ecosystem. The governance board is made up of members of the Tyler Forge core team, as well as representatives from divisions across the company who have demonstrated a commitment to the project and its goals.

If you're interested in influencing the direction of Forge, we encourage you to get involved with the governance board. You can do this by participating in discussions, providing feedback on proposed components, and contributing to the development of new components.

## Contributing

We welcome contributions to Forge Extended! If you have a pattern or component that you think would be a good fit for the library, please open a GitHub issue or pull request. We can work together to get it approved by the governance board and added to the library.

We want this library to be community-driven, so we encourage you to contribute your ideas and components!

## Blocks

In addition to Forge Extended, we are also working on a new "blocks" concept (formerly known as "recipes"). You can think of blocks as code snippets, examples, and demos of larger chunks of UI or even full application layouts with a high level of volatility. The idea behind blocks is to create a
repository of common patterns and layouts that can easily be adapted and molded to your application's needs with minimal effort.

Blocks are not intended to be full blown components, or a final product, but rather a starting point for which you can modify and adapt to your needs.
We'll have more information on blocks in a future blog post, but we wanted to mention it here as Forge Extended will be used within blocks to encapsulate redundant design patterns!

## Conclusion

We believe that Forge Extended is the next step in the evolution of Tyler Forge, and we are excited to see how it will help developers build better applications as it continues to grow. We encourage you to try it out and provide feedback on your experience.

Eventually our hope is that this library will expand to cover a wide range of common patterns, eliminating the need for developers to reinvent the wheel
when building standardized UI patterns and layouts. Along with the blocks concept, we hope to provide a comprehensive set of tools that will make it easier than ever to build high-quality applications with Tyler Forge.
