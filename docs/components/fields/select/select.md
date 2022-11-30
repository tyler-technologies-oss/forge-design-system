---
sidebar_custom_props:
  shortDescription: A select is a form field that displays selectable values via a dropdown list.
---

# Select

<ComponentVisual
  figmaUrl="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F2tPscC53OGwIWV5tLmvjRi%2FSelect%3Fscaling%3Dmin-zoom%26page-id%3D0%253A1%26node-id%3D101%253A587"
  storybookUrl="https://forge.tylerdev.io/main/?path=/story/components-select--default" />

## Overview

A dropdown menu is a compact way of displaying multiple choices. It appears upon interaction with an element (such as an icon or button) or when users perform a specific action.


### Use when 
- Choosing an option from a set of values 
- Recommending a default option 

### Don't use when 
- Displaying more than 10 options. Use an [autocomplete](/components/fields/autocomplete) instead.
- Selecting a single value is required. Use [radio buttons](/components/controls/radio-button) instead.
- Displaying "yes" or "no" options. Use [radio buttons](/components/controls/radio-button) instead.

---

<DoDontGrid>
  <DoDontTextSection>
    <DoDontText type="do">Use concise and consistent labels that describe the meaning of the select field.</DoDontText>
    <DoDontText type="do">Use sentence case only. Do not use all caps, title case, or lowercase</DoDontText>
    <DoDontText type="do">Use a logical order for the set of options: alphabetical, numeric, chronological, etc.</DoDontText>
  </DoDontTextSection>
  <DoDontTextSection>
    <DoDontText type="dont">Don't use colons after labels.</DoDontText>
    <DoDontText type="dont">Don't use all caps for the labels; it's harder to cognitively process.</DoDontText>
  </DoDontTextSection>
</DoDontGrid>

---

## Related

### Components

- Use [radio buttons](/components/controls/radio-button) to allow for the selection of a single option from a set.
- Use a [switch](/components/controls/switch) to turn an item on or off. 
- Use a [button toggle](/components/controls/button-toggle) to allow for the selection of a single option from a small set. 
- Use choice [chips](/components/utilities/chips) to allow for the selection of a single option from a small set, especially in mobile contexts. 
- Use [checkboxes](/components/controls/checkbox) to allow users to select multiple options from a set. 
- Use an [autocomplete](/components/fields/autocomplete) to allow users to search and select from long lists.

### Patterns 

- Forms (Coming soon!)
