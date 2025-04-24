# Icons

The Forge CDN hosts all Tyler-approved icons in the form of a web font as well as individual SVG files for each icon.

You can use the CDN to include icons within production applications.

## Icon sets

The Tyler icons project contains a large set of open source icons. We host icons from other open source projects that are approved for use
within Tyler applications.

We curate these icons into 3 different icon sets:

- "standard": Icons from the official Material icons.
- "extended": Icons from the community-based Material icons.
- "custom": Icons created and contributed by Tyler employees.

## SVG

We host the individual SVG files on the CDN for two reasons:

1. To support dynamically referencing icons via the icon component in the Forge component library.
2. To enable developers to download and host them elsewhere.


## Web Font



Each icon set is located at the following URLs:

- Standard: https://cdn.forge.tylertech.com/v1/css/tyler-icons-standard.css
  - Use the `tyler-icons` class when referencing icons from this set.
- Extended: https://cdn.forge.tylertech.com/v1/css/tyler-icons-extended.css
  - Use the `tyler-icons-ext` class when referencing icons from this set.
- Custom: https://cdn.forge.tylertech.com/v1/css/tyler-icons-custom.css
  - Use the `tyler-icons-custom` class when referencing icons from this set.

You include font icons on your page using a `<link>` tag:

```html
<!-- "standard" -->
<link rel="stylesheet" href="https://cdn.forge.tylertech.com/v1/css/tyler-icons-standard.css">

<!-- "extended" -->
<link rel="stylesheet" href="https://cdn.forge.tylertech.com/v1/css/tyler-icons-extended.css">

<!-- "custom" -->
<link rel="stylesheet" href="https://cdn.forge.tylertech.com/v1/css/tyler-icons-custom.css">
```

This will download the required font files which include ligatures for referencing icons as seen below:

```html
<!-- "standard" -->
<i class="tyler-icons">person</i>

<!-- "extended" -->
<i class="tyler-icons-ext">account</i>

<!-- "custom" -->
<i class="tyler-icons-custom">forge_logo</i>
```
