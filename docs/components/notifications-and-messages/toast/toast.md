---
sidebar_custom_props:
  shortDescription: Toasts provide brief messages about app processes at the bottom of the screen.
---

# Toast

<ComponentVisual
  figmaUrl=""
  storybookUrl="https://forge.tylerdev.io/main/?path=/story/components-toast--default" />

## Overview

Toasts inform users of a process that an app has performed or will perform. They appear temporarily, towards the bottom of the screen. They shouldn’t interrupt the user experience, and they don’t require user input to disappear. 

On larger screens, they should be placed at the bottom left or bottom middle. Ensure that the toasts will not obscure key controls. On smaller screens, the toast should appear at the bottom middle. 

### Use when

- Use for low priority notifications that don't require user input.
- Use to confirm an action the user has just taken, such as creating a new record, moving a record to a new folder, or making changes to a record. 

### Don't use when

- Don't use for system errors that require user input to continue. Use a [dialog](/components/notifications-and-messages/dialog).
- Don't use to confirm whether a user would like to proceed. Use a [dialog](/components/notifications-and-messages/dialog) instead. 
- Don't use for municipal announcements on community apps, use a [banner](/components/notifications-and-messages/banner) instead.
- Don't use to display information that could be referenced multiple times, such as a helper information. Consider an [inline message](/components/notifications-and-messages/inline-message) instead.
- Don't use to display an interactive tour of multiple new features. Use a rich tooltip (coming soon!) or WalkMe (guidance coming soon!) instead. 

---

<DoDontGrid>
  <DoDontTextSection>
    <DoDontText type="do">Only one toast may be displayed at a time. Use successive toasts if more than one is needed.</DoDontText>
    <DoDontText type="do">A toast can contain a single action. Because a toast disappears automatically, the action shouldn’t be “Dismiss” or “Cancel.”</DoDontText>
    <DoDontText type="do">If there is a FAB on the page, toasts should appear above the FAB.</DoDontText>
    <DoDontText type="do">If the action is too long to be displayed inline with the toast message, it may be displayed on a new line below the text.</DoDontText>
  </DoDontTextSection>
</DoDontGrid>

--- 

## Related 

### Components

- For messages that require user input, use a [dialog](/components/notifications-and-messages/dialog).
- For municipal announcements, use a [banner](/components/notifications-and-messages/banner).

### Patterns

- [System communication](/core-patterns/system-communication)
