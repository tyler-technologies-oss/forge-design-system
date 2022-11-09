---
description: Bottom sheets are supplementary surfaces primarily used on mobile.
keywords: ['bottom sheet', 'menu', 'actions', 'detail', 'modal', 'sheet', 'surface', 'list', 'system communication', 'confirmation']
---

# Bottom sheet

<ComponentVisual
  figmaUrl=""
  storybookUrl="https://forge.tylerdev.io/main/?path=/story/components-bottom-sheet--default" />

## Overview

Bottom sheets provide contextual information, options, or actions in a way that's easy to reach on a mobile device. 

### Use when

- displaying a list of actions on mobile devices (modal bottom sheet).
- displaying additional detail that could be referenced for a record, such as details for a location on a map (standard bottom sheet).

### Don't use when

- confirming destructive actions. Use a [dialog](/components/dialog) instead.
- displaying contextual information on a desktop form factor. Use a sidesheet instead.

> To learn about other components that display messages, such as toasts and banners, check out the [System Communication](/components/core-patterns/system-communication/) guidance.

---


## Types 

Forge supports two types of bottom sheets: 1. Standard and 2. Modal

### 1. Standard 

Standard bottom sheets display content that complements the screen's primary content and allow for simultaneously viewing and interacting with both regions.
They are commonly used to keep a feature or secondary content visible on screen when content in main UI region is frequently scrolled or panned. They remain
visible while users interact with the primary content. They're best for allowing users to reference contextual content, such as location details on a map.

On desktop, a standard bottom sheet may display as a [sidesheet](/components/drawer/#3-detail-panel) instead.

<ImageBlock padded={false} caption="Standard modal bottom sheets may contain additional information or a FAB. They may be expanded to full height to display additional information.">

![Modal bottom sheets.](/img/components/bottom-sheet/standard-bottom-sheet.png)

</ImageBlock>

<a href="https://www.figma.com/file/JYOhQlzc4Yhln2S8WVoi6S/Forge-Design-Library-11-3-20?node-id=3861%3A28365" rel="noopener noreferrer">View the bottom sheet component in Figma</a>

**Interactions**

Bottom sheets may contain more information than what's initially visible on the screen. Initially, a bottom sheet displays at a max height of 50% of the visible screen. A bottom sheet can be tapped, swiped, or dragged up to become full-screen. Once full screen, it may be scrolled for addiitonal information.

Ensure that bottom sheets can be minimized again so that users can interact with the rest of the screen - either by an X icon, or dragged back down. 

> **Interactive demo** 
>
> **Drag** the bottom sheet up to expand it. Once expanded, the bottom sheet may be **scrolled** for more information. **Drag down or tap** the X icon to minimize the bottom sheet. 

<iframe
  style={{border: '1px solid rgba(0, 0, 0, 0.1)'}}
  width="910"
  height="800"
  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJYOhQlzc4Yhln2S8WVoi6S%2FForge-Design-Library-11-3-20%3Fnode-id%3D4082%253A28632%26scaling%3Dscale-down%26page-id%3D3861%253A28365%26starting-point-node-id%3D4082%253A28632%26"
  allowfullscreen />

### 2. Modal

Modal bottom sheets include a [backdrop](/components/backdrop) (scrim) and prevent users from interacting with the rest of the screen. They're best used for menus or collections of actions. 

<ImageBlock padded={false} caption="Modal bottom sheets display actions either as a list or as a grid.">

![Modal bottom sheets.](/img/components/bottom-sheet/modal-bottom-sheet.png)

</ImageBlock>

<a href="https://www.figma.com/file/JYOhQlzc4Yhln2S8WVoi6S/Forge-Design-Library-11-3-20?node-id=3861%3A28365" rel="noopener noreferrer">View the bottom sheet component in Figma</a>

---

<DoDontGrid>
  <DoDontTextSection>
    <DoDontText type="do">Anchor bottom sheets to the bottom of the view.</DoDontText>
    <DoDontText type="do">Allow users to tap outside a modal bottom sheet to dismiss it.</DoDontText>
    <DoDontText type="do">Standard bottom sheets are elevated above the main UI region so their visibility is not affected by panning or scrolling.</DoDontText>
    <DoDontText type="do">Modal bottom sheets can be used instead of menus to present additional screen actions.</DoDontText>
    <DoDontText type="do">A bottom sheet takes up no more than 50% of the height of the visible screen by default. Users can swipe up for more information.</DoDontText>
  </DoDontTextSection>
    <DoDontTextSection>
    <DoDontText type="caution">Be careful adding buttons to a bottom sheet. Either use a modal bottom sheet to contain a collection of actions as a list or grid, or place action chips within a standard bottom sheet.</DoDontText>
  </DoDontTextSection>
  <DoDontTextSection>
    <DoDontText type="dont">Don't use bottom sheets for confirming destructive actions. Use a [dialog](/components/dialog) instead.</DoDontText>
    <DoDontText type="dont">Bottoms sheets do not detach from the bottom of a screen.</DoDontText>
    <DoDontText type="dont">Don't make tall bottom sheets full-screen upon opening. This places the top content immediately out of reach for users on mobile devices.</DoDontText>
  </DoDontTextSection>
</DoDontGrid>

---

## Related components 

### Components

- Use a [toast](/components/toast) to display low priority messages that disappear automatically. 
- Use a [banner](/components/banner) to display high priority messages that disappear after user interaction.
- Use [inline messages](/components/inline-message) to display persistent information related to a specific component. 
- Use [button](/components/button) inside of dialogs. 
- [Steppers](/components/steppers) may be used with dialogs. 

### Recipes

- [Dialog recipes](/recipes/dialog)
- [Toolbar recipes](/recipes/toolbar)

### Patterns

- [System communication](/core-patterns/system-communication)
- [Modality](/core-patterns/modality)
