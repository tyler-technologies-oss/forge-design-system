---
description: Accordions are vertically grouped sections with headers and associated expandable content areas. The accordion ensures that only one section at most can be expanded at any given time.
keywords: ['accordion', 'expansion panel', 'expansion', 'panel', 'expand', 'collapse']
---

# Accordion

<ComponentVisual
  figmaUrl=""
  storybookUrl="https://forge.tylerdev.io/main/?path=/story/components-accordion--default" />

## Overview

An accordion is intended to be used with a set of expansion panels where only **one** panel should be
expanded at a time. When expanding a panel, the accordion is responsible for collapsing any other open
panels.

An accordion does not provide any visual styling, it is purely used to manage a set of expansion panels.
It is common to use an accordion with expandable list items, cards, sections... etc. where the user should
be focused on a single section of information at a time.

> The accordion is used together with the [expansion-panel](/components/expansion-panel) component.
> If your design requires multiple panels to be open at a time, just remove the use of an accordion to allow
> for the user to control which expansion panel is open at any given time.

---

## Related components

- [Expansion panel](/components/expansion-panel)
