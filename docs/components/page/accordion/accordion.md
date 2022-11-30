---
sidebar_custom_props:
  shortDescription: The accordion ensures that only one, at most, child expansion panel is open at a given time.
---

# Accordion

<ComponentVisual
  figmaUrl="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FIdggENYSDwzrwgdvTD96KO%2FAccordion%3Fnode-id%3D1%253A790%26scaling%3Dmin-zoom%26page-id%3D0%253A1"
  storybookUrl="https://forge.tylerdev.io/main/?path=/story/components-accordion--default" />

## Overview

Accordions are vertically grouped sections with headers and associated expandable content areas. The accordion ensures that only one section at most can be expanded at any given time.

An accordion is intended to be used with a set of expansion panels where only **one** panel should be
expanded at a time. When expanding a panel, the accordion is responsible for collapsing any other open
panels.

An accordion does not provide any visual styling, it is purely used to manage a set of expansion panels.
It is common to use an accordion with expandable list items, cards, sections... etc. where the user should
be focused on a single section of information at a time.

:::info
The accordion is used together with the [expansion-panel](/components/page/expansion-panel) component.
If your design requires multiple panels to be open at a time, just remove the use of an accordion to allow
for the user to control which expansion panel is open at any given time.
:::

---

## Related components

- [Expansion panel](/components/page/expansion-panel)
