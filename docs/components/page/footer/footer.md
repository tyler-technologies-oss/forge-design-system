---
sidebar_custom_props:
  shortDescription: The footer is used in resident apps to display links pertaining to a specific municipality.
---

# Footer

<ComponentVisual storybookUrl="https://forge.tylerdev.io/main/?path=/story/components-footer--default">

![](./images/footer.png)

</ComponentVisual>

## Overview

Resident apps use a footer that refers to the client / municipality. The footer is used on landing pages only.

The footer is comprised of slotted text or hyperlinks that can be customized by the client / municipality. By default, the footer displays the "Empowered by Tyler" logo, but the graphic may be customized as needed. Links open in a new tab.

**Use when**

- Use on landing pages. 
- Use in resident apps. 

**Don't use when**

- Don't use on pages that have persistent controls at the bottom of a screen, such as forms. 
- Don't use in workforce apps. Footers are optional in workforce apps; refer to the [workforce branding guidance: footers](/get-started/branding-workforce) for styling and content.

---

## Variants 

Click "Forge Design Library" link below to open the preview in Figma, or click the preview to enlarge it. 

<ComponentVisual
  height="750"
  figmaUrl="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FJYOhQlzc4Yhln2S8WVoi6S%2FForge-Design-Library-11-3-20%3Fnode-id%3D2933%253A26982" />

---

## Best practices 

<DoDontGrid title-text=" ">
  <DoDontTextSection>
    <DoDontText type="do">Footers should move as the page scrolls.</DoDontText>
    <DoDontText type="do">When body content is shorter than the visible viewport, place footer at the bottom of the viewport.</DoDontText>
      <DoDontText type="do">Footer links open in a new tab.</DoDontText>
  </DoDontTextSection>
  <DoDontTextSection>
    <DoDontText type="dont">Don't fix a footer to be peristently visible.</DoDontText>
  </DoDontTextSection>
</DoDontGrid>

<ImageBlock max-width="700px" caption="When body content is shorter than the visible viewport, place footer at the bottom of the viewport.">

![Alt text](./images/footer-bottom.png)

</ImageBlock>

---

## Responsive

On desktop, items are left aligned and logo is right aligned; on desktop, the items are centered and display vertically. The footer is responsive by default and will display in its mobile format at a breakpoint of 900px, but its breakpoint can be customized. 

Additionally, teams can set the footer to display in its default (standard) or mobile (alternative) mode using the layout attribute. 

Click "Forge Design Library" link below to open the preview in Figma, or click the preview to enlarge it. 

<ComponentVisual
  height="450"
  figmaUrl="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FJYOhQlzc4Yhln2S8WVoi6S%2FForge-Design-Library-11-3-20%3Fnode-id%3D2933%253A27003" />
