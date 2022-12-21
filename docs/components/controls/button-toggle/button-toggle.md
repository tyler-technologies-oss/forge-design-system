---
sidebar_custom_props:
  shortDescription: Button toggles provide a group of interactive button elements that are related to one another.
  thumbnail: ./img/all-components/button-toggle-mini.png
---

# Button toggle

<ComponentVisual storybookUrl="https://forge.tylerdev.io/main/?path=/story/components-button-toggle--default">

![](./images/button-toggle.png)

</ComponentVisual>

## Overview

A button toggle groups related options. To emphasize groups of related toggle buttons, a group should share a common container. 

In general only one option in a group of toggle buttons can be selected and active at a time. Selecting one option deselects any other.

The button toggle can also be used to create an icon toolbar. 

<ImageBlock caption="A button toggle can be used to create an icon toolbar." max-width="400px" padded="{false}">

![Image of a toolbar with document viewer actions inside.](./images/button-toggle-example.png)

</ImageBlock>

### Use when

- Users can select a single option from a group.

### Don't use when

- Users can select multiple options from a group. Use choice [chips](/components/utilities/chips) or [checkboxes](/components/controls/checkbox) instead.
- There are more than four options. Use a [select](/components/fields/select) instead.

---

## Related

### Components

- Use choice [chips](/components/utilities/chips) to display options where users can choose more than one.
- Use a [select](/components/fields/select) to display a large number of options where screen real estate is limited. 
- Use [radios](/components/controls/radio-button) to allow users to select a single option from a list. 
- Use [checkboxes](/components/controls/checkbox) to allow users to select multiple options from a list. 
- [Buttons](/components/buttons/button)

### Patterns

- Forms (Coming soon!)
