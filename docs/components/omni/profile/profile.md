---
title: Profile
sidebar_custom_props:
  shortDescription: Profile button is used with a predefined avatar, and is responsible for displaying profile information within a popup.
---

# Omnibar profile

<ComponentVisual
  figmaUrl=""
  storybookUrl="https://forge.tylerdev.io/main/?path=/story/components-app-bar-profile--default" />

## Overview

The profile card features a user's personalized avatar if they've set one, their full name, and the email used to sign up with the app. Additionally, the card features a “Sign out” option as well as a link to their profile, if applicable.
For information about public facing profile patterns, check out this guidance. 

<ImageBlock maxWidth="600px">

![Image of three actions within the omnibar.](./images/desktop-omni-profile-card.png)

</ImageBlock>

For **unauthenticated users,** the avatar is replaced by a “sign in” button. Notifications are hidden; the help menu and app launcher remain.

<ImageBlock maxWidth="600px">

![Image of an omnibar with option to login.](./images/desktop-unauthenticated.png)

</ImageBlock>

---

## Related 

### Components

- [Omnibar](/components/omni/omnibar)

### Patterns

- For community apps, refer to the [branding](/core-patterns/branding/community) guidance.
