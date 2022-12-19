---
title: Forge Website Redesign
decription: Welcome to the new and improved Forge design system website.
authors: [nick.andrews,jay.mccormick,eric.wayne,kathy.wolf,kieran.nichols]
tags: [forge, design-system, welcome]
---

Welcome to the new and improved Forge design system website!

This is the first step toward a larger goal of open sourcing the design system so that it is publicly accessible. We are hoping to share the great work
that the Forge team has done with the public community, as well as provide a design system to go along with our open source Forge Web Component library.

<!-- truncate -->

Below are some highlights and information about what to expect with this update.

## Information architecture

The biggest change you'll notice is how the navigation structure and organization of pages has changed. This new IA is intended to simplify the navigation,
while also making it easier for everyone to locate the content that they need.

The same great content still exists, but we have reorganized it, improved naming conventions, and audited the content to correct our guidance.

## Development docs

As Forge grows and matures, we needed to change how we surface development documentation to our users. Previously we had development details embedded directly
in the Forge design system website. This was great for our users, but it falls down quickly when there are multiple versions of our component library and made
it very difficult from a maintenance perspective.

We were faced with this problem and needed to quickly determine how to best surface these important details. Our options were to either build a content versioning
system into our website, or link out to external documentation and keep the design system focused on, well, design. We opted to go for the latter which introduces
a distributed content model.

### Distributed content model

As you've likely already noticed and used, we have moved developer documentation details and demos to Storybook. This tool was designed for component libraries to
show live demos of components alongside API and usage documentation. This now allows for us to provide versioned component library documentation, and link to it 
from the design system.

We will continue to follow this format as Forge continues to grow!

## Tooling

You may have noticed that our website received a face lift, along with some new features! We learned over the past few years that maintaining
design system guidance and content can be daunting task, along with the task of maintaining various website features such as search, navigation,
layout, ...etc. In an effort to reduce our maintenance overhead and focus more on the content you need, we have made the decision to switch from 
a custom solution built with Gatsby to a configuration-based solution called [Docusaurus](https://docusaurus.io/docs)!

### Docusaurus

We believe that moving to Docusaurus will not only allow us to focus on what matters most, design system guidance and content, but also
enable us to make use of its great built-in features that will only provide benefits to our users that we were unable to provide without significant
effort in our old Gatsby-based solution.

A quote from the Docusaurus docs:

> Building a custom tech stack is expensive. Instead, focus on your content and just write Markdown files.

Docusaurus has many great benefits, but below are just a few that we'd like to highlight:

- Removes the need to build the website from scratch (aka site layout, navigation, search... etc.). It’s generated for us instead based on file structure and configuration.
- Supports markdown and MDX, as well as custom React components
- N-level navigation (supporting our new IA)
- Fully theme-able
- Content versioning
- Localization
- Built-in blogging functionality
- Built-in full-text search
- Supports headless CMS integration
- We **build less** and **focus more on content**

### Design

You'll notice if you inspect the site that we're no longer "eating our down dog food" if you will. This means that the site is no longer built with Forge components. We have learned
that Forge was not necessarily designed for building documentation websites, and although we certainly can, we'd prefer that folks use our guidance content to drive their design
decisions instead of using the documentation website itself. This allows us to tailor our website toward being great for providing documentation instead of being an example
of enterprise application design.

### Search

**We have heard you!** The search functionality in the old Gatsby-based Forge website was mediocre at best... Docusaurus provides various built-in search options for us, and we are happy to announce that we now offer a much improved full-text search function. Give it a try in the header above!

### Blog

We have struggled in the past with keeping our users up to date with the happenings of Forge, and we want to improve that. A blog is natural way to allow for us to make announcements,
and provide detailed information to you in a consistent location that you already use. We intend to use this blog section you're viewing right now to keep you up to date with everything from design to development as Forge grows and improves.

:::info Please share!
If you have any topics or announcements related to Forge, we would love for you to share it with everyone else! Please feel free to create posts here or reach out to us if you have questions.
:::

## Next steps

As mentioned above, this is a conversion/translation from our old website to our new and improved one. This is just the first step as we look forward to open sourcing the design system

Before we are able to do that, we have a few things need to take care of:

### Audit our content

There are portions of the Forge design system that we need to keep private, or things that just may not be valuable for people outside of Tyler to see. We need to audit
the website and determine what content needs to be kept private to Tyler employees.

### Forge "hub"

In an effort to keep the Forge ecosystem easy to navigate, we are looking into how to best surface everything Forge-related to Tyler employees, while still supporting our
new distributed content model. This is where the concept of a Forge "hub" comes in. This hub of sorts will live in what is now forge.tylertech.com, but it may look a bit
different. We're hoping to surface everything that you need to build Tyler applications here, and curating separate websites into a singular location that makes it easy 
to find what you're looking for.

More to come on this soon!

### Open source

Releasing our design system to the open source community also means we need to host the website publicly. We intend to secure a new domain for this public version of Forge,
while allowing contribution from both Tyler employees and the public open source community.

An important thing to highlight about open sourcing, is that our contribution process becomes much easier. We have some answers to more easily allow non-technical folks to
provide contributions to the design system content. More to come on this one as well in the future!
