---
sidebar_custom_props:
  shortDescription: Linear indicators express an unspecified wait time or display the length of a process.
  thumbnail: ./img/all-components/linear-progress-mini.png
---

# Linear progress

<ComponentVisual storybookUrl="https://forge.tylerdev.io/main/?path=/story/components-linear-progress--default">

![](./images/linear-progress.png)

</ComponentVisual>

## Overview: Progress indicators

Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates. They communicate an app’s state and indicate available actions, such as whether users can navigate away from the current screen. Use a progress indicator for operations that take more than 1 second.

Progress indicators are used to:

- Assure the user that the system is working.
- Provide operational transparency.
- Communicate progress made vs progress pending.
- Reduce users perception of time elapsed.

### Types of progress indicators

| Context                        | Component                                                        | Guidance
| :------------------------------| :--------------------------------------------------------------- | :----------------
| Initial page load              | [Skeleton + progressive loading](/components/skeleton)           | Use skeleton loading when content size/shape is known. Load skeleton components, then fade in components as they become available.
| Initial page load              | Linear page progress                                             | Use when the content to be loaded is of unknown or variable size or quantity. Display a description of the process with a linear progress bar (see pattern below).
| Full page load or change       | Full page [busy indicator](/components/busy-indicator)           | Use an overlay to prevent users from interacting with content on a page due to a change, server error, or form submission.
| Multiple components            | [Skeleton + progressive loading](/components/skeleton)           | Load skeleton components, then fade in components as they become available.
| Single component within a page | [Inline circular progress spinner](/components/progress-and-loading/circular-progress) | Use a contextual circular progress indicator to communicate that either a component's state or data is changing.

---

## Overview: Linear progress indicator

Use a linear progress indicator to communicate that a specific component is loading. Specifically, linear progress indicators may be used at the bottom of text fields, in dropdowns, and in expansion panels. 

Use [circular progress spinners](/components/progress-and-loading/circular-progress) inside components like list items, buttons, and cards. 

---

## When to use: Linear vs circular progress indicators

Forge offers two visually distinct types of progress indicators: linear and [circular progress](/components/progress-and-loading/circular-progress) indicators. Only one type should represent each kind of activity in an app. For example, if a refresh action displays a circular indicator on one screen, that same action shouldn’t use a linear indicator elsewhere in the app.Researchers Gronier and Lallemend conducted an experiment to determine what the best metaphor to display during waiting time is. They measured a number of components (progress bar, countdown, text, etc) against perceived waiting time and satisfaction. They found that while a countdown yields the highest satisfaction level because it informs the user exactly how long they have to wait, **linear progress bars** were actually associated with the shortest perceived waiting time and a high satisfaction score (5.8 out of 7). [Read more](http://www.guillaumegronier.com/cv/resources/Articles/2013_WorkshopHCI_Gronier.pdf). For this reason, we recommend a heavier use of **linear progress indicators**. 

Because **circular progress indicators** fit better inside components, use them to communicate the state of a component or its data is changing. Use circular progress indicators for inline components; use linear progress indicators for other scenarios.

---

## Types 

There are two types of linear progress indicators: determinate and indeterminate. 

Determinate indicators display how long a process will take. They should be used when the process completion rate can be detected.

Determinate progress indicators fill from 0% to 100%.

Indeterminate progress indicators move along a fixed track, growing and shrinking in size.

---

## Best practices 

<DoDontGrid>
  <DoDontTextSection>
    <DoDontText type="do">Only show a progress indicator if the expected wait time is more than a second; for example, whenever making a request to the server.</DoDontText>
    <DoDontText type="do">Use animations to soften transitions between states. Motion focuses attention on what's important without creating unnecessary distraction. Check out the Material guidance on motion.</DoDontText>
  </DoDontTextSection>
</DoDontGrid>

---

## Related 

### Components

- Use [skeleton loading](/components/skeleton) when content size/shape is known.
- Use a [busy indicator](/components/notifications-and-messages/busy-indicator) to to prevent users from interacting with content on a page due to a change, server error, or form submission.
- Use a [circular progress](/components/progress-and-loading/circular-progress) spinner inside a component to communicate that either a component's state or data is changing.

### Patterns

- [Progress and loading](#) (Coming soon!)

---

## Resources

- [Wait Wait... Tell Me!](https://99percentinvisible.org/episode/wait-wait-tell-me/transcript/) (99% Invisible)
- [Everything you need to know about skeleton screens](https://uxdesign.cc/what-you-should-know-about-skeleton-screens-a820c45a571a) (Medium)
- [Progressive Loading](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Loading) (MDN Web Docs)
- [Improving the UX of Progress Indicators and Feedback Notifications](https://usersnap.com/blog/progress-indicators/) (Usersnap)
- [Mobile Design Details: Avoid The Spinner](https://www.lukew.com/ff/entry.asp?1797) (LukeW)
- [How to Improve Perceived Waiting Time in HCI: A Psychological Approach](http://www.guillaumegronier.com/cv/resources/Articles/2013_WorkshopHCI_Gronier.pdf) (Study)
- [The Illusion of Time](https://medium.com/swlh/the-illusion-of-time-8f321fa2f191) (Medium)
