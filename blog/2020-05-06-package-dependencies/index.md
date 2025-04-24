---
tags: ['tcw', 'forge', 'components', 'npm']
authors: [ross.blakeney]
---

# Forge and package dependencies

In order to optimize Forge use, teams should avoid creating libraries from Forge components and should ensure that the components are kept up to date. 

:::info TL;DR
* Never set Forge as a dependency of a package. Set Forge as a peer dependency only.
* Always keep Forge within the same major version in all your apps and packages.

It's worth noting that this concept applies to **any** package that you want as a dependency of your library, but you want to allow for the consumer/dependent to control the version for compatibility with multiple versions of the library in question.
:::

<!-- truncate -->

---

## Overview

**Never list Forge in the `dependencies` array for your own library package. Use `peerDependencies` instead.**

There are a few key points we need to review.

### NPM jargon

- Package - any npm package. Typically, a library.
- Dependency - an external package that will be *copied into your package* at the version you specify in the `package.json`.
- Peer dependency - an external package that must be *provided by the dependent*.
  - A peer dependency is *not* copied into your package.
  - The application that your package is included in **must** provide the peer dependency.

### Custom elements

- Custom elements are one of the three main pieces of what makes up a Web Component. Web components are at the core of Forge.
- The `CustomElementRegistry` is a dictionary (useful oversimplification) of all of the custom elements registered in the browser. The custom element’s name acts as the key, and the `class` is the value.
  - All keys/element names must be unique.

### What not to do

:::info
Let’s say you created a new library package to use across a few of your apps. We’ll call it `fooLib`. In this example, `fooLib` declares `Forge v2.0.0` as a dependency. So `Forge v2.0.0` is *copied* into `fooLib`.

In your app, `barApp`, you declare `Forge v3.5.0` as a dependency. `barApp` also declares `fooLib` as a dependency.

This results in Forge being included in your app *twice*. Once for your app at `v2.0.0` and once for your library at `v3.5.0`.
:::

### Why it’s a problem

There are several reasons you wouldn’t want to do this. First of all, your application is needlessly bloated by including Forge twice. But that is outside the scope of this document. We’ll focus on the issue this causes with custom elements.

Since `barApp` now runs with 2 copies of Forge, that means it will potentially attempt to register 2 different versions of each component in Forge. Remember the browser's `CustomElementRegistry` is effectively a dictionary. So you can’t register two different custom elements under the same key. So what happens is that whatever version registers first “wins”.

As an example, let’s say `forge-selector v2.0.0` gets registered first for `fooLib`. Then later, `forge-selector v3.5.0` attempts to register for `barApp`. The key "forge-selector" is already registered, so the second registration attempt fails silently. But now `barApp` is stuck with `forge-selector v2.0.0`. Let’s say the newer version of `forge-selector` had added type-ahead functionality that we’re utilizing in `barApp`. However, now that the older version registered first, anywhere we’re using that new type-ahead feature is now broken with little to no leads as to what happened.

Hopefully, that illustrates the reason you wouldn’t ever want to set Forge as a dependency of a package.

---

## Peer dependencies

So how do we safely manage Forge versions?

If you need to create a library that utilizes Forge, declare it as a peer dependency for the reasons mentioned above.

This means that your new library will need to implement Forge according to the version dictated by your dependent applications.

Going back to our earlier example involving `fooLib` and `barApp`. This time, `fooLib` declares Forge as a peer dependency.

:::info
In this case, Forge is only included once in the application at `v3.5.0`. Since it’s included only once (by the application) there are no registration conflicts with any of the custom elements. But now `fooLib` is using `Forge v3.5.0` when it was originally implemented using `Forge v2.0.0`. Obviously, this can still lead to breaking changes in the Forge components since `fooLib` could be using features that no longer exist in `Forge v3.5.0`.
:::

The solution is that both `fooLib` and `barApp` need to be kept within the same major version.

Forge follows [semver](https://semver.org/) versioning practices. So we will not (intentionally) introduce any breaking changes within the same major version of Forge.

So if `fooLib` had a *peer* dependency of `Forge v1.0.1` and `barApp` had a dependency of `Forge v3.5.0`, there would be no breaking changes and both would work as expected.

---

## In summary

- When possible, avoid including `dependencies` (of any kind) in your packages.
- Use `peerDependencies` where it cannot be avoided.
- Always keep your apps and packages within the same major version of Forge.
