---
title: Notifications
description: The omnibar notification button component provides users a familiar location to access their system notifications.
keywords: ['omnibar', 'notifications', 'button', 'icon']
---

# Omnibar notifications

<ComponentVisual
  figmaUrl=""
  storybookUrl="https://forge.tylerdev.io/main/?path=/story/components-app-bar-notifications--default" />

## Overview

Notifications are standard across apps, and use tabs to display notifications from the current app as well as a summary of notifications from all apps. 

Example notifications include: “New time off request to approve,” “New package rejected,” “Time off request approved,” “Your bill is due in 5 days.”

A badge displays the total number of unread notifications individual to the user. Notifications are considered “read” when they have been clicked.  

Notifications may be clickable. Clickable notifications may deep link within an app or may link to an external resource such as a Tyler Community article. Read notifications should persist only for 14 days unless otherwise specified by a business requirement. 

Check out notifications in action in our gallery examples. (Coming soon)

:::info

Dot and numeric badges should use the secondary color when placed on an indigo background and the tertiary color when placed on a white background. See [color guidance](/core-components/color/guidance) for specific hex values.

:::

<ImageBlock maxWidth="600px">

![All notifications in the omnibar".](/img/components/omnibar-notifications/notification-anatomy.png)

</ImageBlock>

<ImageBlock maxWidth="450px" caption="The notification dropdown displays a tab for all a user's notifications.">

!["My" notifications in the omnibar".](/img/components/omnibar-notifications/desktop-omni-notifications-mine.png)

</ImageBlock>

<ImageBlock maxWidth="450px" caption="The notification dropdown displays a tab for all notifications in the app a user is currently working in.">

![All notifications in the omnibar".](/img/components/omnibar-notifications/desktop-omni-notifications-this-app.png)

</ImageBlock>

---

## Related 

### Components

- [Omnibar](/components/omnibar)

### Patterns

Coming soon...
