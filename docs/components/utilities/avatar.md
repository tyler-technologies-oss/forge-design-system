---
description: Avatars are used to identify users, vendors, organizations or other entities.
keywords: ['avatar', 'icon']
---

# Avatar

<ComponentVisual
  figmaUrl=""
  storybookUrl="https://forge.tylerdev.io/main/?path=/story/components-avatar--default" />

## Overview

Avatars can be used in lists, tables, cards or navigation headers.  When no image is available for a user avatar, user initials are used in place of an image. 

Avatars are not interactive.

Avatars are available in default and larger sizes.  

<ImageBlock padded={false} caption="1. An image avatar can customize a profile header in a navigation drawer. 2. When no image is available, initials are used instead.">

![Image of an auto-suggest providing suggested searches.](/img/components/avatar/avatar-types.png)

</ImageBlock>

<ImageBlock padded={false} caption="1. Larger avatars may be used in cards. Use images when they are likely to be available and the profiles are likely to be familiar. 2. Smaller avatars may be used in lists and tables.">

![Image of an auto-suggest providing suggested searches.](/img/components/avatar/avatar-pages.png)

</ImageBlock>

### Use when 

- Displaying lists of people.
- Displaying data with images.
- Records may be identified by image or by description.
- Displaying account information in a navigation drawer for a citizen app. 

### Don't use when 

- Images or avatars don't provide additional information to users, such as a list of businesses with avatars pulling in the letters from the business name. 

---

<DoDontGrid>
  <DoDontRow>
  <DoDontImage>

![Forge logo](/img/components/avatar/avatar-dont.png)

  </DoDontImage>
  </DoDontRow>
  <DoDontRow>
    <DoDont type="dont">
      Don’t use avatars for category names. The avatars in this list don’t provide additional information and could be better represented by icons or omitted altogether.
    </DoDont>
  </DoDontRow>
</DoDontGrid>

---

## Related

### Components

Avatars may be used in:

- [Lists](/components/list)
- [Table](/components/table)
- [Navigation drawer](/components/drawer)
