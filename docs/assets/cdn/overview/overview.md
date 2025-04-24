---
sidebar_position: 1
---

# Overview

Here you will find information about the Tyler Forge CDN, what it is, and how to get started using it.

:::info
If you’re looking for icons and/or illustrations, head over to the following pages:

- [Icons](/assets/icon-library)
- [Illustrations](/assets/illustration-library)

Looking for other types of assets, see the menu and choose the type of asset you're looking for.
:::


## What is it?

A content delivery network (CDN) provides a static URL to host and access commonly used assets such as CSS
stylesheets, fonts, icons, images, JavaScript files… etc. It provides a lightning fast response time to aid
in performance, and removes the need to host many of these assets within each application.

CDNs are just servers that host static content public to the internet, with a static URL. These servers replicate
the assets across many servers situated around the world to make accessing and loading them very fast. You can safely
rely on this URL never changing, and use it while building your application, and when it’s in production.

## How do I use it?

As mentioned above, a CDN is just a server that is accessed via a static URL.

Say we wanted to display a 404 error page for instance, we could use the CDN to get access to a common 404 image
using the following URL: [https://cdn.forge.tylertech.com/v1/images/spot-hero/404-error-spot-hero-desktop.svg]

Here is an example of loading the above image from the CDN:

<img style={{width: '256px'}} src="https://cdn.forge.tylertech.com/v1/images/spot-hero/404-error-spot-hero-desktop.svg" />

The image above is displayed using the following HTML:

```html
<img src="https://cdn.forge.tylertech.com/v1/images/spot-hero/404-error-spot-hero-desktop.svg" />
```

## URL format

A CDN is great, but how do we know what files are hosted there? Let’s start by talking about the URL format:

```
https://cdn.forge.tylertech.com/<version>/<asset-type>/<filename>
```

Take this example URL for instance: https://cdn.forge.tylertech.com/v1/images/spot-hero/404-error-spot-hero-desktop.svg

You’ll notice a few things about it:

* Base URL: https://cdn.forge.tylertech.com/
  * **This is static and will never change.**
* Version identifier: `v1`
  * We version the content within the CDN in case we ever need to support multiple versions of the assets.
* Type: `images`
  * Could also be `css`, `fonts`, `libs`... etc.
* Image type: `spot-hero`
  * Underneath each type (in this case `images`), we separate the files based on their image type. This is a common
    pattern you’ll find for other asset types.
* Filename: `404-error-spot-hero-desktop.svg`

The URL is going to follow this format strictly. Forge will provide the means necessary to help you locate any
of the assets that you need to use.
