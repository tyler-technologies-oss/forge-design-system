---
title: Adopting Container Queries
decription: Use container queries in your code with a fallback for unsupported browsers.
authors: [sam.richardson]
tags: [forge, css, responsive design]
---

As we move more and more toward responsive design there has been increasing interest in CSS container queries. For those of us who aren’t on the cutting edge of CSS development, container queries are a new feature that allows us to apply styles based on a containing element’s dimensions. This is conceptually similar to typical [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries), which are based instead on the qualities of the viewport as a whole.

<!-- truncate -->

It’s easy to see how container queries can make developing flexible layouts easier. The classic demonstration is a single card component that renders differently based on where it is on the page. There’s been enough written on it before that there's no need to repeat here, but check out [this older but still relevant example](https://ishadeed.com/article/say-hello-to-css-container-queries/), [this writeup in Smashing Magazine](https://www.smashingmagazine.com/2021/05/complete-guide-css-container-queries/), and [MDN’s docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries) for great, in-depth examples.

Now is a great time to start incorporating container queries into your code. However, this is still a very recent addition to browsers (supported in Firefox as of February 2023 and other major browsers from September 2022) so it’s smart to set a fallback for users still on older versions.

We can use the `ForgeResizeObserver` as that fallback. `ForgeResizeObserver` is a performant utility written around the native [Resize Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API) that notifies us whenever an observed element’s dimensions change.

:::info
View [the `ForgeResizeObserver` source code here](https://github.com/tyler-technologies-oss/forge-core/blob/main/src/resize/resize-observer.ts).
:::

Let's set up a function to handle this. First, we check to see whether the user agent supports container queries.

```ts
function checkSupportsContainerQueries(): void {
    if (CSS.supports('container-type', 'inline-size')) {
        return;
    }
}
```

If it doesn’t, we pass in the the container element and register it with the ResizeObserver, setting up a callback function to toggle a class on it when it crosses our breakpoint. Be sure to import `ForgeResizeObserver` from `@tylertech/forge-core`.

```ts
import { ForgeResizeObserver } from '@tylertech/forge-core';

function checkSupportsContainerQueries(el: HTMLElement): void {
    if (CSS.supports('container-type', 'inline-size')) {
        return;
    }

    ForgeResizeObserver.observe(el, entry => {
        // Set a 600px breakpoint
        const isSmall = entry.contentRect.width < 600;
        el.classList.toggle('small', isSmall);
    });
}
```

You might also want to debounce the callback if performance is a concern.

```ts
import { debounce, ForgeResizeObserver } from '@tylertech/forge-core';

function checkSupportsContainerQueries(el: HTMLElement): void {
    if (CSS.supports('container-type', 'inline-size')) {
        return;
    }

    ForgeResizeObserver.observe(el, entry => {
        // Run once then wait 100 milliseconds between executions
        debounce(() => {
            const isSmall = entry.contentRect.width < 600;
            el.classList.toggle('small', isSmall);
        }, 100, true)
    });
}
```

In the CSS we simply apply the same styles to this class that we use within the container query.

```scss
@mixin small-container-styles() {
    // Styles to apply when the container is narrow
}

.container {
    &.small {
        @include small-container-styles;
    }

    @container (inline-size < 600px) {
        @include small-container-styles;
    }
}
```

To avoid memory leaks it’s necessary to clean up the ResizeObserver when the targeted element leaves the DOM. This is simple if your app uses Angular, just call `ForgeResizeObserver.unobserve()` in your component’s ngOnDestroy lifecycle method.

```ts
@Component({})
class SomeComponent implements OnDestroy {
    el: HTMLElement;

    ngOnDestroy(): void {
        ForgeResizeObserver.unobserve(this.el);
    }
}
```

A full Angular component that treats a host element as the container could be written like this.

```ts
import { debounce, ForgeResizeObserver } from '@tylertech/forge-core';

@Component({})
export class SomeComponent implements OnInit, OnDestroy {
    constructor(private _el: ElementRef<HTMLElement>, private _renderer: Renderer2) {}

    ngOnInit(): void {
        this._checkSupportsContainerQueries();
    }

    ngOnDestroy(): void {
        ForgeResizeObserver.unobserve(this._el.nativeElement);
    }

    private _checkSupportsContainerQueries(): void {
        if (CSS.supports('container-type', 'inline-size')) {
            return;
        }

        ForgeResizeObserver.observe(el, entry => {
            debounce(() => {
                const isSmall = entry.contentRect.width < 600;
                el.classList.toggle('small', isSmall);
            }, 100, true)
        });
    }
}
```

:::info
Tyler Angular Core also exposes an Angular-specific `ResizeObserverDirective`, but since that can't be easily attached conditionally the frame agnostic `ForgeResizeObserver` is preferable in this case.

Learn [more about the directive here](https://github.com/tyler-technologies/tyler-angular-core/blob/main/projects/core/src/lib/directives/resize-observer/README.md).
:::

With this code in place, your users can enjoy a more fluid UI regardless of how up to date their browser is. Of course, this is just one way to use the ResizeObserver. Chances are you’ll run into other scenarios where these tools may be helpful.
