---
sidebar_custom_props:
  shortDescription: The paginator is used to “chunk” collections of logically sorted records into manageable pieces.
---

# Paginator

<ComponentVisual
  figmaUrl="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F11r81yDOApKfgiUISD15IM%2FPaginator%3Fscaling%3Dmin-zoom%26page-id%3D0%253A1%26node-id%3D1%253A790"
  storybookUrl="https://forge.tylerdev.io/main/?path=/story/components-paginator--default" />

## Overview

Use pagination when records are sorted in a logical way (ie, chronologically or alphabetically). Pagination allows users to mentally bookmark or orient where they are in an ordered result set. Pagination can be used with collections: tables, lists, and cards. 

- See an example of a paginator in the [TCP Manager Apps case study](/case-studies/tcp-manager-apps)!

### Infinite scroll vs pagination 

Infinite scroll is best used to encourage discovery or exploration when users are casually browsing content. Infinite scroll may also be a better option for mobile contexts. By contrast, pagination is best used for datasets that have been sorted in a logical way, as it allows users to jump to a specific page or mentally orient where they are in a set. 

---

<DoDontGrid>
  <DoDontTextSection>
    <DoDontText type="do">Allow users to set how many records they want to display per page.</DoDontText>
    <DoDontText type="do">If loading time is a consideration for larger data sets, consider using a default with fewer records per page and allowing users to choose how many records per page. </DoDontText>
    <DoDontText type="do">When a user navigates back from a detail page within a record set, return them to their previous spot in the collection, even if it wasn't on the first page. </DoDontText>
  </DoDontTextSection>
  <DoDontTextSection>
    <DoDontText type="dont">Don't use fixed positioning on a paginator - it should be displayed below the visible list. </DoDontText>
    <DoDontText type="dont">The paginator should not cover content on the page.</DoDontText>
  </DoDontTextSection>
</DoDontGrid>

---

## Related 

### Components

A paginator may be used with:

- [Table](/components/table-data/table-data/table)
- [List](/components/lists/list) 

### Examples

- See an example of a complex list in the [TCP Manager Apps case study](/case-studies/tcp-manager-apps)!


