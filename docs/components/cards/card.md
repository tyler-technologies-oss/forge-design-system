---
description: Cards contain content and actions about a single subject.
keywords: ['card', 'material', 'container']
---

# Card

<ComponentVisual
  figmaUrl=""
  storybookUrl="https://forge.tylerdev.io/main/?path=/story/components-card--default" />

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

> Cards should use the default 1dp elevation, for consistency and better usability.
> [Read more](https://www.nngroup.com/articles/flat-ui-less-attention-cause-uncertainty/) from NN Group on how flat design can attract less attention and cause uncertainty.

---

## Types

There are two types of cards: 1. Simple and 2. Complex

## 1. Simple 

Simple cards cards display summary or teaser content that may link to additional detail. Examples include: displaying data on dashboards, displaying employee profile summaries that link to a full detail record, displaying options for starting a new service order. 

Simple cards generally include a title, spot illustration, content, and one to two actions.

<ImageBlock caption="Simple cards may be used provide summary information that navigates to a full detail record.">

![ Summary cards.](/img/components/card/dashboard-cards.png)

</ImageBlock>

<ImageBlock caption="Simple cards may be used to indicate choices in a guided process.">

![ Choice cards.](/img/components/card/selection-cards.png)

</ImageBlock>

<ImageBlock caption="Simple cards may be used on dashboards to provide summary data.">

![ Coming soon!](#)

</ImageBlock>

## 2. Complex 

Complex cards are used to group related content. They may contain data, tables, or lists. 

Complex cards include a header with a divider to differentiate it from the body content. The header includes the card title (1) and may include actions that pertain to the card content (2), such as export, download, filter, etc. Complex cards may also include a footer, which containers navigation or confirming actions, such as "View more", "Save," "Cancel," "Next," "Finish."

<ImageBlock caption="Complex cards are comprised of five parts." padded={false}>

![ Anatomy of a complex card.](/img/components/card/complex-card-anatomy.png)

</ImageBlock>

<ImageBlock padded={false}>

![ Anatomy of a complex card.](/img/components/card/complex-cards-1.png)

</ImageBlock>

<ImageBlock padded={false}>

![ Anatomy of a complex card.](/img/components/card/complex-cards-2.png)

</ImageBlock>

--- 

<DoDontGrid>
  <DoDontRow>
  <DoDontImage>

![Card with centered content.](/img/components/card/card-align-do.png)

  </DoDontImage>
  <DoDontImage>

![Card with misaligned content.](/img/components/card/card-align-dont.png)

  </DoDontImage>
  <DoDontImage>

![Card with misaligned content.](/img/components/card/card-do-interaction.png)

  </DoDontImage>
  </DoDontRow>
  <DoDontRow>
    <DoDont type="do">Center or left align content within a simple card.</DoDont>
    <DoDont type="dont">Don't use inconsistent alignment for content within a simple card. Center or left align it instead.</DoDont>
    <DoDont type="caution">If a card is interactive (clickable or draggable) use the appropriate interaction state on hover to indicate interactibility.</DoDont>
  </DoDontRow>
</DoDontGrid>

---

## Specs

By default, cards in backoffice apps have 16px of padding. 

<ImageBlock padded={false} caption="1. Cards in backoffice apps have 16px of internal padding. <br>2. Default grid gutter is 16px in backoffice apps.">

![ Card and grid with padding.](/img/components/card/backoffice-padding.png)

</ImageBlock>

By default cards in citizen apps have 24px padding. 

<ImageBlock padded={false} caption="1. Cards in citizen apps have 24px of internal padding. <br>2. Default grid gutter is 24px in citizen apps.">

![ Card and grid with padding.](/img/components/card/citizen-padding.png)

</ImageBlock>

---

## Related

### Components
- [Buttons](/components/button) and [icon buttons](/components/icon-button) are typically used in cards.
- [Spot illustrations](/core-components/illustrations/guidance) may be used in cards. 
- Use a [list](/components/list) for search results or scannable data. 
- Use a [table](/components/table) for records that need to be compared or filtered by a single column.

### Recipes

- [Card recipes](/recipes/card)

### Patterns 

Coming soon!
