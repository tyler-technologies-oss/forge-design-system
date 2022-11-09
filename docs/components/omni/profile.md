---
title: Profile
description: The omnibar profile component provides a familiar location for users to access their profile information.
keywords: ['omnibar', 'profile']
---

# Omnibar profile

<ComponentVisual
  figmaUrl=""
  storybookUrl="https://forge.tylerdev.io/main/?path=/story/components-app-bar-profile--default" />

## Overview

The profile card features a user's personalized avatar if they've set one, their full name, and the email used to sign up with the app. Additionally, the card features a “Sign out” option as well as a link to their profile, if applicable.
For information about public facing profile patterns, check out this guidance. 

<ImageBlock maxWidth="600px">

![Image of three actions within the omnibar.](/img/components/omnibar-profile/desktop-omni-profile-card.png)

</ImageBlock>

For **unauthenticated users,** the avatar is replaced by a “sign in” button. Notifications are hidden; the help menu and app launcher remain.

<ImageBlock maxWidth="600px">

![Image of an omnibar with option to login.](/img/components/omnibar-profile/desktop-unauthenticated.png)

</ImageBlock>

---

## Related 

### Components

- [Omnibar](/components/omni/omnibar)

### Patterns

- For citizen apps, refer to the [branding](/core-patterns/branding/citizen) guidance.
