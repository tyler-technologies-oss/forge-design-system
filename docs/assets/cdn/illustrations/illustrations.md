# Illustrations

The Forge CDN hosts the Tyler illustration library for consumption by all Tyler applications.

These decorative images are part of the Tyler brand. Use the [illustration library](/assets/illustration-library) to find an illustration for your needs.

All illustrations are located at the following base URL within the Forge CDN:

```
https://cdn.forge.tylertech.com/v1/images/<type>/<filename>
```

Replace the `<type>` parameter above with one of the following:

- `spot`
- `spot-hero`
- `hero`

Here is an example of loading the "tyler-cloud-spot" illustration from the CDN:

<img style={{width: '256px'}} src="https://cdn.forge.tylertech.com/v1/images/spot/tyler-cloud-spot.svg" />

The image above is displayed using the following HTML:

```html
<img src="https://cdn.forge.tylertech.com/v1/images/spot/tyler-cloud-spot.svg" />
```
