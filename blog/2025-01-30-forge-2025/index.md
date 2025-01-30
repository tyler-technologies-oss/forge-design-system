---
title: Forge 2025 Update
description: What's coming to Forge in 2025!
authors: [kieran.nichols]
tags: [forge]
---

As we move into 2025 and look ahead, we wanted to share what we have planned for Forge in the coming year. We have a
lot of exciting updates and features on deck, and we can't wait to share them with you. Let's dive in!

<!-- truncate -->

## Forge v3

Before we get into the details of what's coming in 2025, we wanted to remind everyone that Forge v3 is available, and
we encourage you to upgrade to take advantage of the latest features and improvements as soon as possible.

Please refer to the [Forge v3 announcement](/blog/2024/06/10/forge-3-generally-available) for detailed instructions on how
to upgrade your projects.

:::note
While we encourage everyone to upgrade to Forge v3 as soon as they can, we understand that upgrading can sometimes be a
significant effort. We have documentation, an automated upgrade utility, and resources to help you through the upgrade
process. If you have any questions or need assistance, please don't hesitate to reach out to us on Teams!

It's very important that we all work together to keep our applications up to date and consistent. Upgrading to the latest
version of Forge is a key part of that effort and the larger Tyler 2030 vision.
:::

## Major Version Updates

We understand that major version updates can be disruptive, so we wanted to share our plans for future major version
updates to help give you confidence in Forge. We are committed to providing a smooth upgrade path and clear documentation
to make the transition as seamless as possible in future versions.

Here's what you can expect:

- **Limited or No Breaking Changes**: We will do our best to avoid breaking changes in future major version updates by
instead deprecating features/components and replacing them with a new implementation. If breaking changes are necessary,
we will provide clear guidance on how to migrate your code seamlessly and do our best to provide tooling to automate it
if possible.

- **Long-Term Support**: We will provide long-term support for the "current - 1" major versions of Forge. This means that
we will continue to provide bug fixes and security updates for the previous major version for a period of time after a
new major version is released. This will give you more time to upgrade to the latest version without worrying about
missing out on important updates.

- **Upgrade Guides**: We will provide detailed upgrade guides for each major version update to help you understand what
has changed and how to update your code. These guides will include information on breaking changes (if any), new features,
and best practices to help you make the transition as smooth as possible.

:::note
While we have an idea of what a Forge v4 might look like, we have not even reached the planning phase yet. We do not intend
to release a new major version of Forge in 2025. We want to get Forge v3 into the hands of as many developers as possible
and ensure that it meets the needs of our users before we start planning for the next major version to ensure a seamless
upgrade path.

We want to introduce stability in the Forge ecosystem and ensure that developers can rely on Forge as a long-term solution
without worrying about frustrating breaking changes.
:::

## Forge Extended

We're investing time into extending Forge's capabilities to make it even more powerful, by creating a new library of
composite components that implement common patterns and best practices. This will make it faster and easier to build
complex applications by utilizing larger blocks/components that are already built and tested.

Examples of these types of components might include:

- Filter Sidesheet
- Confirmation Dialog
- Side Navigation
- Table Header
- Responsive Toolbar
- ... and many more!

Any time you find yourself building a component that is a common pattern across applications, you can look to Forge
Extended to see if there is a component that already exists that you can use. If you find that a component is missing,
you can contribute to the Forge Extended library by creating a new component and submitting a pull request.

We believe that this will help developers build applications faster and more efficiently, as well improve consistency
and maintainability across projects.

This new library will be built on top of the primitive components that are already available in Forge v3, and will
provide a higher level of abstraction to help you build applications more quickly.

We're excited to share more details about Forge Extended in the coming months, so stay tuned for updates!

## Lit-based Components

We're also investing time into improving the developer experience in Forge by adopting [Lit][lit] as the base for
all new Forge components. Lit is a lightweight library for building web components using modern web standards,
and it provides a simple and efficient way to create reusable components with a framework-like feel.

Forge has always been built as web components, but does not rely on any abstraction libraries or frameworks which
meant we needed to write and maintain more boilerplate code, leading to larger and more inefficient production
bundles. By adopting Lit, we hope to provide a more performant, consistent, and modern development experience for
maintainers and ease the barrier to entry for new contributors.

:::note
This change will be transparent to developers using Forge, and you will not need to make any changes to your code.
:::

[lit]: https://lit.dev/

## New Components

We're also planning to release a number of new components in 2025 to help fill in some of the gaps that have been
identified by the community.

Some of the components we're planning to release include:

- **Tree**: A tree component that can be used to display hierarchical data in a tree-like structure with expandable
  and collapsible nodes. This component will be highly customizable and provide a flexible way to display complex data
  structures.

- **Breadcrumbs**: A breadcrumbs component that can be used to display a breadcrumb trail for navigation purposes. This
  component will provide a simple and intuitive way to navigate through a hierarchy of pages or sections in your
  application.

- **Inline Dropdowns**: This is the next evolution of how Forge handles dropdowns. This pattern will allow you to
  configure a dropdown declaratively and inline with the flow of your page. Built on top of the new Forge v3 popover,
  this will provide a more flexible and developer-friendly way to create your own dropdowns, as well as improve the
  ergonomics of existing dropdown-based components.

- **Data Grid**: A powerful and flexible data grid component that will provide more advanced features than our current
 `<forge-table>` component.

- **Virtual Scroller**: A virtual scroller component that can be used to display large lists of items efficiently by
  only rendering the items that are currently visible on the screen.

## Web Features

Forge is constantly evolving, and so are the latest web APIs. We're always looking for ways to improve the
developer experience and provide new features and components.

This is only more true because Forge is built on top of web components, which are a rapidly evolving standard that
continues to introduce new features and capabilities on a regular basis. We're committed to staying up to date with
the latest web standards and providing you with the tools and components you need to build modern and performant
applications.

Some of the features we're looking at for the future include:

- **Custom States**: This new API is available on the `ElementInternals` interface and allows you to define custom
  states for your custom elements. This provides a more efficient and familiar way to use CSS for state-based
  customizations via the new `:state(<state name>)` pseudo-class.

  :::note
  This will also affect how we reflect certain JavaScript properties to attributes. We will no longer need to
  reflect properties to attributes for component state changes, which will improve performance and reduce the amount
  of boilerplate code needed to manage state changes within custom elements.
  :::

- **Cross-root ARIA**: Web components that make use of shadow DOM have always had a challenge with ARIA attributes
  that need to be applied to elements outside of the shadow root. The new Reference Target proposal aims to address
  this issue by providing a way for developers using web components to apply ARIA attributes to the internals of
  an element via IDREFs. We're very excited about this proposal and are looking forward to implementing it in Forge
  once it's supported in all browsers.

- **CSS Relative Colors**: This new syntax is already available in browsers and allows you to define colors
  relative to other colors in varying color formats. This will provide a more flexible and powerful way to theme
  Forge components and create dynamic color schemes that adapt to different contexts and environments.

- **CSS Anchor Positioning**: This is an exciting new feature that will allow us to use pure CSS to position
  floating elements around an anchor element. This will provide a more efficient and performant way to create
  tooltips, popovers, and other floating elements in Forge without relying on JavaScript for positioning.

and many more!

## State of Accessibility

In 2024 Tyler embarked on a journey to improve the accessibility compliance across all of our applications. This
initiative has been a great success, and we are seeing more and more applications becoming compliant with the
latest accessibility standards.

Automated scanning tools such as ARC Toolkit and Axe have been instrumental in identifying accessibility
issues and guiding developers on how to fix them.

Forge v3 made significant improvements to accessibility by providing better support for screen readers, keyboard
navigation, and other assistive technologies. We are committed to continuing to improve accessibility in Forge and
ensuring that all applications built with Forge are accessible to everyone.

:::warning
Keep in mind that automated tools can only catch a portion of accessibility issues, and manual testing is still
required to ensure that your applications are fully accessible. These tools can also produce false positives, so it's
important to review the results and verify that the issues are real before making changes.

Please reach out to our accessibility experts if you have any questions or need assistance with accessibility in your
applications.
:::

## Public Forge Website

A longer term goal for the Tyler Forge™ design system has been to make it publicly available to the world. We are excited
to announce that we are making progress towards this goal and are planning to launch a public Forge website in 2025.

### What does this mean for you?

Not much will change for you as a Forge user. The public Forge website will provide much of the same content you're used
to today, and you will still be able to access documentation, components, patterns, and other resources related to Forge
but without needing to log in to the Tyler network.

### How will this work?

We have secured a new domain for the public Forge website, and we are working on migrating the current documentation
and resources to the new site.

The https://forge.tylertech.com domain will continue to work as before and still require Tyler credentials. This will
allow for us to publish internal content that is only available to Tyler employees, such as case studies, application
demos/screenshots, relevant Confluence and Coda links, ...etc. Navigating to the public Forge website will be quick
and easy from this internal site and can be bookmarked separately for quick access.

We're excited to share the Forge design system with the world, and it will complement the already public and open source
Forge component library perfectly.

## Figma Library

Our Forge Figma library is continuing to evolve to set the foundation for our 2025 design vision. With a more streamlined
component system and scalable design tokens, we're ensuring consistency and efficiency across all our digital
experiences. This refined library empowers our team to prototype faster, collaborate seamlessly, and adapt effortlessly
to emerging design trends. As we look ahead, it will remain the cornerstone of our design innovation, enabling us to
craft user experiences that are not only visually compelling but also intuitive and inclusive.

We are also exploring the possibility of making our Figma library publicly available as well to further align with
the public Forge website and component library. This will allow anyone to access our design system and use it to create
their own designs and prototypes.

## Conclusion

As you can see, we have a lot of exciting updates and features planned for Forge in 2025, and we can't wait to share
them with you! We're committed to providing you with the tools and resources you need to build modern, performant,
and accessible applications with Forge, and we're always looking for ways to improve and evolve the platform.

We're excited to continue working with you to make Forge the best it can be, and we look forward to hearing your
feedback and suggestions as we move forward. Thank you for being a part of the Forge community, and we can't wait to
see what we can build together in 2025!

If you have any questions or feedback, please don't hesitate to reach out to us on Teams or via email. We're always
here to help and support you in any way we can.

Here's to a great year ahead with Forge! 🚀

