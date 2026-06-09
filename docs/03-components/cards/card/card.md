---
sidebar_custom_props:
  shortDescription: A card is intended to be used as a layout design element to help group related content together into sections.
  thumbnail: ./img/all-components/card-mini.png
---

# Card

<ComponentVisual storybookUrl="https://forge.tylerdev.io/main/?path=/docs/components-card--docs">

![](./images/card.png)

</ComponentVisual>

## Overview

Cards are surfaces that display content and actions on a single topic.

They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.

## Use when

- Organizing related information into a single container.
- Previewing summary information about a record that links to the full record.
- Displaying information that includes imagery or illustrations. 
- Displaying information with non homogenous data. 

## Don't use when

- Information contained within the card is not related. 
- Scannability is key.
- Comparing or ordering homogenous data is important. 

---

## Styling

### Basic

Being containers for objects on your page, the content in cards can be styled in a multitude of ways, but the card itself generally remains consistent.

<ImageBlock>

![Image of the app bar with labeled sections.](./images/simple-card.png)

</ImageBlock>

<ImageBlock>

![Image of the app bar with labeled sections.](./images/simple-card-margin.png)

</ImageBlock>

:::note 
Cards apply a padding of 16px to the entire internal container by default.
:::

### Complex

Card content can be as simple or as complex as needed. A common example of a more complext card follows a style with a header (including actionable icon buttons), body content, and footer for primary actions. These are all optional and dependant on the needs of your design and application.

<ImageBlock>

![Image of the app bar with labeled sections.](./images/styled-card.png)

</ImageBlock>

---

## Best practices 


<DoDontGrid>
  <DoDontTextSection>
    <DoDontText type="dont">Don't use inconsistent alignment for content within a card. Center or left align it instead.</DoDontText>
  </DoDontTextSection>
    <DoDontTextSection>
    <DoDontText type="caution">If a card is interactive (clickable or draggable) use the appropriate interaction state on hover to indicate interactibility.</DoDontText>
  </DoDontTextSection>
</DoDontGrid>

---

## Examples

<ImageBlock padded={false} caption="Left: An example of cards being used as informational tiles. <br>Right: Cards are used to show quick information for different sources of information.">

![Two images of app layouts utilizing cards to display information to the user.](./images/cards-example-1.png)

</ImageBlock>

<ImageBlock padded={false} caption="A card can be used to house large amounts of data, in this case housing a data table.">

![ Card and grid with padding.](./images/cards-example-2.png)

</ImageBlock>

<ImageBlock padded={false} caption="Cards can contain any other components and can be styled in a multitude of ways. Here it includes a toolbar with a tab structure inside, as well as more details under it consisting of label value pairs.">

![ Card and grid with padding.](./images/cards-example-3.png)

</ImageBlock>

---

## Related

### Components
- [Buttons](/components/buttons/button) and [icon buttons](/components/buttons/icon-button) are typically used in cards.
- Use a [list](/components/lists/list) for search results or scannable data. 
- Use a [table](/components/table/table) for records that need to be compared or filtered by a single column.

### Recipes

- [Card recipes](/recipes/card/generic)

