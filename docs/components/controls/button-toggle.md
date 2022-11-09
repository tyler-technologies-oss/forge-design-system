---
description: A button toggle can be used to group related options.
keywords: ['button', 'choices', 'toggle', 'group']
---

# Button toggle

<ComponentVisual
  figmaUrl=""
  storybookUrl="https://forge.tylerdev.io/main/?path=/story/components-button-toggle--default" />

## Overview

A button toggle groups related options. To emphasize groups of related toggle buttons, a group should share a common container. 

In general only one option in a group of toggle buttons can be selected and active at a time. Selecting one option deselects any other.

The button toggle can also be used to create an icon toolbar. 

<ImageBlock caption="A button toggle can be used to create an icon toolbar." max-width="400px" padded="{false}">

![Image of a toolbar with document viewer actions inside.](/img/components/button-toggle/button-toggle.png)

</ImageBlock>

### Use when

- Users can select a single option from a group.

### Don't use when

- Users can select multiple options from a group. Use choice [chips](/components/chips) or [checkboxes](/components/checkbox) instead.
- There are more than four options. Use a [select](/components/select) instead.

---

## Related

### Components

- Use choice [chips](/components/chips) to display options where users can choose more than one.
- Use a [select](/components/select) to display a large number of options where screen real estate is limited. 
- Use [radios](/components/radio-button) to allow users to select a single option from a list. 
- Use [checkboxes](/components/checkbox) to allow users to select multiple options from a list. 
- [Buttons](/components/buttons/button)

### Patterns

- Forms (Coming soon!)
