# Adaptive design

Determine what context and hardware to design for when planning your app. 

How complex is the task you intend users to work on when using your product? How does the task influence their context? How does their context influence the task? The device you design your product for depends on the answers to these questions.

**Task complexity:** how much information must a user process? How much information must a user produce? Higher information processing and production: desktop.

**Task-based context:** Does the task require the user to be in a particular context, for example in the field? Does it require the user to gather information from that context, for example by taking a picture of something in it? Does it require the user to change contexts, for example moving through different areas of an environment?

**Context-based task:** Do users tend to be in a particular context when part of a task arises, for example do they tend not to be near a desktop computer when they receive a notification that they can review or submit an item? What part of the task have they completed already and what will they complete after?

When choosing a task and context to design for, consider the hardware, software, and outcomes offered by different devices: monitors, keyboards, cameras, accelerometers; text, phone, email, and digital wallet applications; complex calculation and data analysis, mobility.

1. **I need mobile hardware.** I need native features such as geolocation, native camera abilities, etc to complete my work. 
2. **I need desktop hardware.** I need a larger screen or more robust input options to complete my task. 
3. **There is a mobile touchpoint.** I've gotten an email or text with a link to complete a small task.

---

## 1. Mobile devices

Designing for a fully mobile device is appropriate when a user is likely to download an app either for work or for personal reasons. Mobile apps make use of native affordances such as geolocation, real time notifications, built in camera, personalized experiences, and motion sensors / accelerometers. 

Mobile experiences can be characterized by fragmentation, interruption, and potential movement from place to place. They work well for interactions that tend to be shorter term and require less input. 

**Principles**

- **Consider orientation**: Design for both portrait and landscape layouts. 
- **Use native affordances**: Maximize native affordances such as geolocation, real time notifications, built in camera, personalized experiences, and motion sensors / accelerometers. 
- **Design for interruption**: Users are likely to multi-task on mobile devices or be interrupted by environmental factors. Ensure that data saves automatically. Persist a user's spot in the app when they open it again. 
- **Consider environmental factors**: Test your app in sunlight and shade and ensure that the device can still be used.
- **Design options for offline**: Prepare for interruptions in connectivity. Provide a way to incrementally save or cache changes to minimize loss of data in case the users loses connection. Design an offline mode that informs users they've lost connection and which features are still available to them. 
- **Simplify input sequences.** Mobile keyboards can be error prone and frustrating to use. Automate input as much as possible (perhaps using the user's current location or store information). Ensure that that numerical and alphanumeric keyboards are provided as needed. 
- **Battery life is precious.** Ensure that your app won't sap precious battery resources.
- **Focus on functions that fit the device.** Ensure that the key tasks can be completed with only the users' thumbs. Keep controls at the bottom of the device to keep them in reach. 

**Recommended approach**

- Build a native mobile app. 

---

## 2. Desktops & monitors

Designing for desktops and multi monitor experiences is appropriate when the persona is likely to interact with an app in an office or stationary setting, when they're likely to be in a stationary spot. 

Desktop experiences can be characterized as stationary and immersive, and are more geared for more complex data analysis or input. 

**Principles**

- **Know the context.** Determine what kind of setup is popular with your app's users. Are they likely to have multiple monitors? A single laptop? An outdated desktop?
- **Adapt for monitors.** If your users are likely to use multiple monitors, allow them to open multiple windows to compare across their monitors. For instance, if you have a list and a map, allow users to pop those out as separate windows across their windows.
- **Use a fluid grid.** Use a [fluid grid](https://alistapart.com/article/fluidgrids/) to adapt content to both smaller and larger screens. Make use of columns and page sections to adapt content for larger screens. Ensure that content flows in a predictable way as a window scales down. 
- **Consider the split screen experience.** Even for an app used primarily on desktop, it isn't uncommon for users to size down windows for comparison. Ensure that content resizes appropriately when scaling down within the browser. 

**Recommended approach**

- Responsive web design 

** Resources**

- [Forge responsive grid](/core-patterns/layout/grid)
- [Forge responsive page layouts](/core-patterns/layout/page-layouts)
- [CSS grid](https://css-tricks.com/snippets/css/complete-guide-grid/) (CSS Tricks)
- [Fluid Grids](https://alistapart.com/article/fluidgrids/) (A List Apart)

Refer to our [Page layout](/core-patterns/layout/page-layouts) for guidance around how standard page layouts should behave responsively. 

---

## 3. Mobile touchpoint 

Mobile touchpoints occur when a user receives a notification such as a text or email that prompts them to take action, whether by a link or because of the content itself. Because the initiating event occurs on a phone, the task should also be completed on a phone.

**Principles**

- **Mobile interactions may be smaller parts of greater user objectives.** Searching for an address is not a goal in its own right – getting to the address is. The easier the interaction with the device the more likely the user is to reach that greater objective. Apps may be used to support other tasks. 
- **Reduce friction.** If the text prompts the user to complete a specific task (pay a bill, approve time off, update a password), provide a simple, straightforward path to completing that task. 
- **Any needed information should be accessible via phone.** For a forgotten password, for example, consider texting a reset link instead of sending it to a work email that might not be activated on a user's phone. 

---

## Resources 

- Adaptive vs. Responsive Design (https://www.interaction-design.org/literature/article/adaptive-vs-responsive-design)  (Interaction Design Foundation) 
- [Fluid Grids](https://alistapart.com/article/fluidgrids/) (A List Apart)
