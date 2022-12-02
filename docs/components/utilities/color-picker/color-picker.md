---
sidebar_custom_props:
  shortDescription: The color picker allows users to select a color visually. It can produce values in formats such as Hex, RGBA and HSV.
---

# Color picker

<ComponentVisual storybookUrl="https://forge.tylerdev.io/main/?path=/story/components-color-picker--default">

![](./images/color-picker.png)

</ComponentVisual>

## Overview

Use the color picker when a user needs to select a color to make the selection a visual task rather than a technical one.

---

<DoDontGrid>
  <DoDontTextSection>
    <DoDontText type="do">Allow users to enter colors in multiple formats (RGBA, HSVA, HEX) only if appropriate - if they'll be copying existing RGBA values from another product, for instance. Otherwise, hex values should suffice.  </DoDontText>
    <DoDontText type="do">Provide an option to enter text as RGBA if users should be able to select a transparent color. </DoDontText>
    <DoDontText type="do">If possible, allow users to select from a Material palette of colors to ensure harmony, consistency, and ADA compliance.</DoDontText>
  </DoDontTextSection>
  <DoDontTextSection>
    <DoDontText type="dont">Avoid providing too much customization, it can create unnecessary complexity. Consider allowing customization to support an expression of branding, such as public facing pages for a city.</DoDontText>
  </DoDontTextSection>
</DoDontGrid>

---

## Related

### Components

- [Text fields](/components/fields/text-field)

### Patterns

- [Forms](#) (Coming soon!)
