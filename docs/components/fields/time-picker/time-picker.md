---
sidebar_custom_props:
  shortDescription: Time pickers help users select and set a specific time.
---

# Time picker

<ComponentVisual
  figmaUrl=""
  storybookUrl="https://forge.tylerdev.io/main/?path=/story/components-time-picker--default" />

## Overview 

Time pickers allow users to enter a specific time value. They can be used for a wide range of scenarios.

### Use when

- Users are entering a specific time. 
- Users are entering a time range - use two inputs side by side. 
- Users are selecting from a set of suggested times or intervals. 
- Users are entering the time now.

### Don't use when

- Users can only select from time descriptions (ie, "now," "in thirty minnutes," "in an hour"). Use a [select](/components/fields/select) instead.
- Users can enter text or times. Use a [text field](/components/fields/text-field) instead.

:::info
Refer to the [data formatting guidance](/core-patterns/tone/data-formats) if using a custom mask. Both 12-hour and 24-hour time systems are allowed.
:::

---

## Variants

Click the preview below to open the Figma project for additional detail. 

<ComponentVisual height="450" figmaUrl="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FJYOhQlzc4Yhln2S8WVoi6S%2FForge-Design-Library-11-3-20%3Fnode-id%3D1984%253A23386" />

---

<DoDontGrid>
  <DoDontTextSection>
    <DoDontText type="do">Both 12-hour and 24-hour time systems are allowed.</DoDontText>
    <DoDontText type="do">If using the 12-hour format it must be accompanied by an AM/PM selection.</DoDontText>
    <DoDontText type="do">Use uppercase letters and no periods for the abbreviations AM and PM.</DoDontText>
    <DoDontText type="do">Specific times should specify a timezone.</DoDontText>
  </DoDontTextSection>
</DoDontGrid>
