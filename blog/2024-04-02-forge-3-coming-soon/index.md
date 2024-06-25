---
title: Forge 3.0 - Coming Soon
description: A brief update on the status of Forge 3.0 components.
authors: [kieran.nichols]
tags: [forge, components]
---

As we near completion of development work on Forge 3.0, we wanted to give everyone a brief update about
what this next major version is, what you can expect from it, and when you can start using it. We know
many of you are eager to get your hands on it, and hopefully this post will help answer any questions
you may have.

<!-- truncate -->

We're really excited about this version and a lot of work has gone into it. It has been a long time coming,
with many delays and roadblocks along the way, but we're really looking forward to sharing it with everyone
very soon!

:::info TL;DR
Forge 3.0 is a major update that improves accessibility, introduces design tokens, and provides improved
developer usage patterns. It no longer depends directly on Material and introduces inline usage of
"floating" elements. The upgrade will focus on backwards compatibility, but some components and APIs will
be removed or deprecated. We are looking to sunset TCW 1.x when Forge 3.0 is released. Early adopters are
welcome to try Forge 3.0. Stay tuned for more updates!
:::

## Why Forge 3.0?

Before we answer the burning question that everyone has been asking about regarding the release date for Forge
3.0, let's discuss _why_ we're creating this version and how everyone will benefit from it.

Let's first take a look at where we came from to help frame where we're going:

### TCW 1.x

The first iteration of Forge components. It was initially a very strict set of UI components that didn't allow
for much visual flexibility, it needed to support IE 11 and ES5, and it was the first pass for Tyler as a
company to try to align on a design system to improve our consistency and cohesiveness across products. It worked,
it had its shortcomings, but it was a great step in the right direction and served as a learning experience for everyone.

:::info Goodbye TCW...
We are planning to officially sunset TCW when Forge 3.0 is released.

While TCW has been deprecated for quite some time, this won't be immediate...
We'll announce a plan and timeline to allow for this transition, and we're always
available to assist teams that have questions/concerns about the upgrade process.
:::

### Forge 2.x

This was a stepping stone version that was all about rebranding from TCW to Forge so that we have an official
implementation for our design system. We understand that it was a disruption for everyone to have to migrate from
TCW to Forge, along with the various breaking API changes we introduced during that effort. We're focusing more on
the types of breaking changes we introduce this time around. We had many more plans/ideas we wanted to introduce with
2.0, but we decided to defer those to a future release.

### Forge 3.0

Fast forward to today and we're on to that next phase. Forge 3.0 is a modernization of the library with a deep focus on
accessibility, design tokens, and developer usage pattern updates to take advantage of new browser APIs. This version
completes most of the plans we envisioned for Forge 2.

## What is Forge 3.0?

At a high level, Forge 3.0 is the following:

- No longer directly depends on Material
- Fixes critical accessibility issues
- Allows for inline usage of “floating” elements (tooltips, dialogs, popovers... etc.)
- Introduces design tokens to better support branding requirements
- Fixes the core theming system
- Provides a new and improved typography scale
- Separates the focus state from the interaction (hover, pressed) states
- Removes unnecessary global styles
- Reduces and improves setup requirements
- Pays down technical debt
- Uses modern browser APIs
- Improves performance

More details about these items will be provided in the full 3.0 upgrade guide to come upon release, but these changes affect every
component in the library in one way or another.

As mentioned above, we are trying to better support backwards compatibility as much as we can this time around. This means that
certain components and APIs are going to be deprecated in favor of new patterns with a plan to remove them in a future version.
Hopefully this will allow you to upgrade to 3.0 without it causing a major disruption and gradually update your applications on your
own timeline.

We will also be updating the Forge upgrade utility with any necessary automation that we can provide to assist (as well as making
it easier to install/use). There will of course be some breaking changes as with any major version release, but we're doing our best
to reduce the upgrade friction as much as we can.

## When will Forge 3.0 be released?

We've been intentionally quiet on this topic due to delays, resourcing, and unexpected road blocks that just took more time to solve
than we anticipated... We didn't want to commit to a timeline that we couldn't deliver on, and while we don't have an exact release
date to announce, we are getting very close to being done. We are looking for early adopters that are willing to use Forge 3.0 and help
us work out any final kinks and finalize the upgrade utility.

:::info Get Involved!
If you're interested in becoming an early adopter please let us know!

This part of the process is very important as it will help us identify which areas are causing upgrade problems, as well as ensure
that we can fix any bugs that show up in more real world usages.
:::

We still have a lot more work to do before release to sweep various changes across the library, testing, updating documentation,
and sweeping the framework adapter libraries. Things should come together fairly quickly over the next few weeks to a month so stay
tuned for another announcement!

## Future

Forge 3.0 opens the door for many new components & patterns to be built, and providing new patterns for using existing components.
Various components have already been refactored to utilize these new tools/patterns, where others will require more careful planning
and research first.

For example, now that we can reliably provide inline usage of the `<forge-popover>` (renders above everything else, but lives in the
DOM where it is defined), we have the ability to re-imagine elements such as the `<forge-select>` and `<forge-menu>` (any element that
presents a dropdown essentially) so that developers are no longer required to use JavaScript to provide custom content! This is something
we are very excited about, and while it won't make it into the initial 3.0 release due to time constraints, we are planning to provide
these new components in a feature release later this year.

While building 3.0 we have already started to gather a list of items that would make sense for a 4.0 release. These are things that would
either be too much of a disruption to the ecosystem to introduce right now, or because we're waiting on new browser APIs to allow us
to provide a better implementation in the future. If you have any ideas, please feel free to pass them along!

:::info Feature Requests
For anyone who missed the announcement earlier this year, we are now using a tool called Canny to allow for everyone to request
new features and vote/comment on existing requests. Please use Canny to help bring your ideas for Forge to life!

https://tylerforge.canny.io/feature-requests
:::