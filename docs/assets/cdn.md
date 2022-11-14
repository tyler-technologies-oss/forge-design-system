# CDN

Here you will find information about the Tyler Forge CDN, what it is, and how to get started using it.

> **TL;DR**
>
> If you’re just looking to find assets, please see one of the following pages to get CDN URLs:
> 
> * [Icons](/assets/icons)
> * [Illustrations](/assets/illustrations)
>
> Looking for the standard Tyler font and icon URLs to reference in your applications?
> 
> * Tyler font: https://cdn.forge.tylertech.com/v1/css/tyler-font.css
>   * This loads the Roboto font and is required for the proper typography.
> * Tyler icons
>   * Standard: https://cdn.forge.tylertech.com/v1/css/tyler-icons-standard.css
>     * Loads the customized Tyler icon set from the standard material icons.
>     * Use the `tyler-icons` class when referencing icons from this pack.
>   * Extended: https://cdn.forge.tylertech.com/v1/css/tyler-icons-extended.css
>     * Loads the customized icon set from the community material design icons.
>     * Use the `tyler-icons-ext` class when referencing icons from this pack.
>   * Custom: https://cdn.forge.tylertech.com/v1/css/tyler-icons-custom.css
>     * These are custom icons created by Tyler.
>     * Use the `tyler-icons-custom` class when referencing icons from this pack.
>   * Tyler logo favicon: https://cdn.forge.tylertech.com/favicon.ico

## What is it?

A content delivery network (CDN) provides a static URL to host and access commonly used assets such as CSS
stylesheets, fonts, icons, images, JavaScript files… etc. It provides a lightning fast response time to aid
in performance, and removes the need to host many of these assets within each application.

CDNs are just servers that host static content public to the internet, with a static URL. This means you can
safely rely on this URL never changing, and use it while building your application, and when it’s in production.

Need to use a Forge-approved icon or image? You will find all of these assets, and more, in the Forge CDN.

## How do I use it?

As mentioned above, a CDN is just a server that is accessed via a static URL.

Say we wanted to display a 404 error page for instance, we could use the CDN to get access to a common 404 image
using the following URL: [https://cdn.forge.tylertech.com/v1/images/spot-hero/404-error-spot-hero-desktop.svg]

Here is an example of loading the above image from the CDN:

<img style={{width: '256px'}} src="https://cdn.forge.tylertech.com/v1/images/spot-hero/404-error-spot-hero-desktop.svg" />


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
