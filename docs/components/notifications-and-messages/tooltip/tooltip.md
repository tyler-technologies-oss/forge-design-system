---
sidebar_custom_props:
  shortDescription: A tooltip displays informative text when users hover over, focus on, or tap an element.
---

# Tooltip

<ComponentVisual
  figmaUrl="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FjIaSWZuuakVJeFlT4oz3XF%2FTooltip%3Fscaling%3Dmin-zoom%26page-id%3D0%253A1%26node-id%3D1%253A790"
  storybookUrl="https://forge.tylerdev.io/main/?path=/story/components-tooltip--default" />

## Overview

When activated, tooltips display a text label identifying an element, such as a description of its function.

### Use when

- An icon button is displayed without a label. 
- An icon or function needs additional explanation. 

### Don't use when

- Mobile is a primary context of use. Hover affordances won't work; a long press might work instead. 
- The description is more than a few words. Use a rich text tooltip instead. (Coming soon!)

---

<DoDontGrid>
  <DoDontTextSection>
    <DoDontText type="do">A tooltip is continuously displayed for as long as a user hovers over the element (desktop) or holds the element (mobile).</DoDontText>
    <DoDontText type="do">On desktop, tooltips appear in the center of click targets and stay in place while cursor moves within the target.</DoDontText>
  </DoDontTextSection>
</DoDontGrid>

<DoDontGrid>
  <DoDontRow>
  <DoDontImage>

![#](./images/tooltip-position-do.png)

  </DoDontImage>
  <DoDontImage>

![#](./images/tooltip-position-dont.png)

  </DoDontImage>
  </DoDontRow>
  <DoDontRow>
    <DoDont type="do">Keep the position of the tooltip visible.</DoDont>
    <DoDont type="dont">Don’t crop tooltips.</DoDont>
  </DoDontRow>
</DoDontGrid>

<DoDontGrid titleText=" ">
  <DoDontRow>
  <DoDontImage>

![#](./images/tooltip-dont.png)

  </DoDontImage>
    <DoDontImage>

![#](./images/tooltip-dont-2.png)

  </DoDontImage>
  </DoDontRow>
  <DoDontRow>
    <DoDont type="dont">Don’t use tooltips to restate visible UI text.</DoDont>
    <DoDont type="dont">Don’t display rich information and imagery on tooltips.</DoDont>
  </DoDontRow>
</DoDontGrid>

---

## Related 

### Components
- [Icon buttons](/components/buttons/icon-button) should be accompanied by a tooltip.
