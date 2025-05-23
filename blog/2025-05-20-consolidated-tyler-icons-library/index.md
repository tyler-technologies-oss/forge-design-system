---
title: Consolidated Tyler Icons Library
description: The Tyler Icons library has been consolidated into a single icon set.
authors: [kieran.nichols]
tags: [icons]
---

The Tyler Icons library has been consolidated into a single icon set! This means that all of the icons
that were previously organized by a specific icon set name such as "standard", "extended", and
"custom" are now all available within a single icon set 🎉.

<!-- truncate -->

:::info tl;dr
This is great and all, but since both the 1.x and 2.x versions are compatible with the Forge `IconRegistry` and `<forge-icon>` component,
just show me what I need to do to [update my code](#how-to-update).
:::

## Acknowledgements

Special thanks to the following individuals for their contributions to make this release possible:

- **Rob Sturgill**: For his efforts to perform the bulk of the work to consolidate the icon library with a thorough evaluation of the differences. Rob also used AI to generate keywords for the over 9k+ icons to help improve searchability.
- **Nick Andrews**: For updating and organizing the package to use the new consolidated icon set. Nick also rebuilt the icon viewer from the ground up to be much more user friendly and easier to use.

Thank you both!

## Why did we do this?

The Tyler Icons library was originally organized into multiple icon sets to help with organization,
and to allow for distributing multiple different icon sets that may have conflicting names:

- **Standard**: Icons from the official Google Material Icons library.
- **Extended**: Icons from the open source community-based Material Design Icons library (now called Pictogrammers).
- **Custom**: Icons that were created by Tyler employees for specific use cases.

However, over time it became clear that this organization was causing confusion for developers. Many users were
unsure which icon set to use, and it was difficult to find specific icons when they were spread across multiple
sets. We decided to consolidate the library into a single set to simplify the experience for our users, and make
it easier to find and use the icons they need!

## Icon Library

The icon library viewer has also been updated to reflect the new organization. This new viewer allows you to
search for icons by name without worrying about which icon set they belong to. Additionally, we have also added
keywords to the icons to make it easier to find what you're looking for!

View the new icon library here: [Tyler Icons Library](/assets/icon-library)

## What has changed?

- **Simplified imports**: You can now import icons from a single icon set, rather than having to
  import multiple icon sets. For example, you can now use the following import statement format:

  ```javascript
  import { tylIconForgeLogo, tylIconCode } from '@tylertech/tyler-icons';
  ```

- **Updated documentation**: The documentation has been updated to reflect the new icon set organization.
- **New icons**: We updated the icon library to include new icons that were not previously available in the
  old icon sets. This means that you can now use the latest and greatest icons!
- **No more duplicates**: The new icon set has been cleaned up to remove any duplicate icons that
  existed across the old icon sets. This means that you can now use the same icon name without worrying
  about which icon set it belongs to.
- **Forge Core Library**: The core Tyler Forge component library has been updated to use the new
  consolidated icon set.

:::important
There are some icons that may look slightly different than they did in the old icon sets. This is because we needed to choose a single
icon where there were multiple icons with the same name. The changes are very minimal, and you likely won't even notice. We tried to
choose the most commonly used icon, but if you find an icon that you think should be updated, please let us know!

You can view the full list of icons that have changed [here](https://www.figma.com/design/2EaaEb2SPlhtYXUHOkM0P3/branch/N4WQhSTCOkrku5Eaq8hgPj/Forge-Icons-v1.18.1?node-id=4865-18&p=f&t=uAR8ks9nzEH3qu3C-0).
:::

## What happens if I don't update?

If you don't update your code to use the new consolidated icon set, everything will continue to work
as it did before. However, we recommend that you update your code over time to take advantage of any
new icons we add in the future, and to ensure that you don't end up loading multiple versions of the
Tyler Icons library in your project.

:::note
The 1.x and 2.x versions of the Tyler Icons library are both compatible with the Forge `IconRegistry` API,
so you can continue to use the same API to register and use icons in your Forge-based applications
interchangeably.
:::

## How to update

To update your code to use the new consolidated icon set, you will need to do the following:

1. Install the latest version of the Tyler Icons library:

   ```bash
   npm i @tylertech/tyler-icons@latest
   ```

   :::note
   It's important to have an explicit dependency on the `@tylertech/tyler-icons` package in your project, instead of relying on
   a transitive dependency via `@tylertech/forge`. This will ensure that you are in control of the version of the Tyler Icons library
   that is being used in your project.
   :::

2. Update your import statements to use the new icon set by removing the icon set name from the package path.

   For example, if you previously imported icons like this:

   ```javascript
   import { tylIconCode } from '@tylertech/tyler-icons/standard';
   import { tylIconForgeLogo } from '@tylertech/tyler-icons/custom';
   ```

   You will now import them like this, and you can even combine them into a single import statement:

   ```javascript
   import { tylIconForgeLogo, tylIconCode } from '@tylertech/tyler-icons';
   ```

To quickly find and replace all instances of the old icon set imports in your code, you can use
a tool like [VSCode's Find and Replace](https://code.visualstudio.com/docs/editor/codebasics#_find-and-replace) 
by enabling the regular expression matching to search for the old import statements and replace them with
the new ones.

For example, you can search for the following pattern:

```bash
(['"]@tylertech\/tyler-icons)\/(?:standard|extended|custom)(['"];)
```

And replace it with:

```bash
$1$2
```

This will replace **all** instances of the old import statements with the new ones.


:::note
Keep in mind that this will **not** group the imports into a single import statement. You will need to manually
combine the imports if that is important to you.
:::

## Update Forge components

The Forge component library has also been updated to use the new consolidated icon set. Use version [3.9.0](https://github.com/tyler-technologies-oss/forge/releases/tag/v3.9.0)
or later to ensure you don't inadvertently install two versions of the Tyler Icons library in your project.

:::info Important
It's important to note that both the 1.x and 2.x versions of the Tyler Icons library are compatible with the Forge `IconRegistry` API, so you can continue to use the same API to register and use icons in your Forge-based applications interchangeably.
:::

### Transitive dependencies

If you are using the Tyler Icons library as a transitive dependency in your project, meaning that you are importing from `@tylertech/tyler-icons` in your code
but you don't have it listed as a direct dependency in your `package.json` (this can happen because `@tylertech/forge` has it as a dependency), you will want to
make sure to update your `package.json` to explicitly include the `@tylertech/tyler-icons` package as a direct dependency.

### Forge Icon Component

The `<forge-icon>` component has also been updated to use the new consolidated icon set by default when the `external`
attribute is set. This will tell the component to fetch the icon from the new consolidated icon library in the Forge CDN.

For example, the icons are hosted under the following URL, just replace the icon name with the one you want to use:
https://cdn.forge.tylertech.com/v1/icons/svg/all/forge_logo.svg

:::note
If you're using the `external` attribute, the `external-type` attribute is no longer needed and can be removed. The `<forge-icon>` component will
automatically fetch the icon from the new consolidated icon set in the Forge CDN.

If you don't remove the `external-type` attribute, the component will still work as expected, but it will
use the old icon set URL to fetch the icon.
:::

## Icon Metadata

If you're using referencing the icon metadata in your application, the new consolidated icon metadata is also available in the CDN at the following URL:
https://cdn.forge.tylertech.com/v1/metadata/icons/tyler-icons-metadata-all.json

## Conclusion

We are excited to finally release this update! We believe that this new organization will make it easier
for developers to find and use the icons they need, and we hope that you will enjoy using the new library.

If you have any questions, concerns and/or feedback, please feel free to reach out to us on Teams or [GitHub](https://github.com/tyler-technologies-oss/tyler-icons/issues).
