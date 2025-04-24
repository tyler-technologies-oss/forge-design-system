# Common messages

This guide will help you craft consistent copy specific to the needs of your product teams that fit within the overarching voice and tone of Tyler Tech.

---

## Deleting records

### How to display

When users are deleting records, they should be informed about their actions with a [dialog modal](/components/notifications-and-messages/dialog/). 

Do not use inline messages, banners, or toasts, to inform users about deleting records.  

### Do's and Don'ts

<Columns columns="two" type="equal" denseSpacing={true}>
  <div>
    <DoDontGrid titleText="Do">
      <DoDontTextSection>
        <DoDontText type="do">Let the user know what will happen if they delete</DoDontText>
        <DoDontText type="do">Ask for confirmation of the action</DoDontText>
        <DoDontText type="do">Use sentence case and punctuation</DoDontText>
        <DoDontText type="do">Balance a formal/serious tone</DoDontText>
      </DoDontTextSection>
    </DoDontGrid>
  </div>

  <div>
    <DoDontGrid titleText="Don't">
      <DoDontTextSection>
        <DoDontText type="dont">Use multiple questions in the copy</DoDontText>
        <DoDontText type="dont">Use all caps or leave off punctuation</DoDontText>
        <DoDontText type="dont">Forget to confirm the delete action with the user</DoDontText>
        <DoDontText type="dont">Use a casual/lighthearted tone</DoDontText>
      </DoDontTextSection>
    </DoDontGrid>
  </div>
</Columns>

<Columns columns="two" type="equal" denseSpacing={true}>
<div>

  ### Correct

  - "Once deleted, you will no longer have access to this record. Delete this record?"
  - "Deleting this document will remove it from all linked accounts. Are you sure you want to delete?"
  - "Deleting this record will permanently remove it from all associated accounts. Do you want to delete?"

</div>

<div>

  ### Incorrect

  - "Delete file? Are you sure you want to delete this file?"
  - "PLEASE CONFIRM. Do you want to delete?"
  - "Ooops! Do you really want to delete this? There’s no going back."

</div>
</Columns>

---

## Empty states

### How to display

Empty states should follow the [page state guidance](/components/page/page-state/). Please review the examples and designs within the empty states section. 

### Do's and Don'ts

<Columns columns="two" type="equal" denseSpacing={true}>
  <div>
    <DoDontGrid titleText="Do">
      <DoDontTextSection>
        <DoDontText type="do">Tell the user what is missing, using “you.”</DoDontText>
        <DoDontText type="do">Tell the user how to move forward.</DoDontText>
        <DoDontText type="do">Use sentence case and punctuation for body copy.</DoDontText>
        <DoDontText type="do">Whenever possible, use a one verb for your button label.</DoDontText>
        <DoDontText type="do">Balance between serious and lighthearted tone.</DoDontText>
      </DoDontTextSection>
    </DoDontGrid>
  </div>

  <div>
    <DoDontGrid titleText="Don't">
      <DoDontTextSection>
        <DoDontText type="dont">Use all caps or leave off punctuation.</DoDontText>
        <DoDontText type="dont">Use “click” or “click here” for a button label.</DoDontText>
        <DoDontText type="dont">Don’t forget to be specific about how the user can move forward.</DoDontText>
        <DoDontText type="dont">Be too formal in tone.</DoDontText>
      </DoDontTextSection>
    </DoDontGrid>
  </div>
</Columns>

<Columns columns="two" type="equal" denseSpacing={true}>
<div>

  ### Correct

  - "You haven’t created any proposals. Click the button below to begin. (Create)"
  - "You don’t have any invoices. You can create or import invoices. (Create) (Import)"
  - "You haven’t entered a due date. Select or enter one for each proposal stage. (Select date)"

</div>

<div>

  ### Incorrect

  - "NO PROPOSALS EXIST! (Click here.)"
  - "There are no invoices in the system. (Click)"
  - "You did not enter a due date. We recommend that you enter one now. (PLEASE ENTER DUE DATE)"

</div>
</Columns>

---

## Error messages

### How to display

Use [inline messages](/components/notifications-and-messages/inline-message/), [dialogs](/components/notifications-and-messages/dialog/), or [banners](/components/notifications-and-messages/banner/) for error messages. Please review the specific message type guidance to determine which fits your use case best. 

**Do not use toast messages for errors.**

:::note
Consider the severity of the error. Critical errors or system failures may require a prominent display like a dialog. Banners and inline messages are appropriate for issues needing minimal user interaction.
:::

### Do's and Don'ts

<Columns columns="two" type="equal" denseSpacing={true}>
  <div>
    <DoDontGrid titleText="Do">
      <DoDontTextSection>
        <DoDontText type="do">Tell the user what has cause the error.</DoDontText>
        <DoDontText type="do">Tell the user how to fix the error or how to take next steps.</DoDontText>
        <DoDontText type="do">Use sentence case and punctuation.</DoDontText>
        <DoDontText type="do">Balance a formal/serious tone.</DoDontText>
      </DoDontTextSection>
    </DoDontGrid>
  </div>

  <div>
    <DoDontGrid titleText="Don't">
      <DoDontTextSection>
        <DoDontText type="dont">Use all caps or leave off punctuation.</DoDontText>
        <DoDontText type="dont">Whenever possible, avoid telling the user to contact software support. Instead, give them actionable next steps.</DoDontText>
        <DoDontText type="dont">Use a casual/lighthearted tone.</DoDontText>
      </DoDontTextSection>
    </DoDontGrid>
  </div>
</Columns>

<Columns columns="two" type="equal" denseSpacing={true}>
<div>

  ### Correct

  - "There was an error loading invoice data. Please refresh the page to try again."
  - "Sorry! There’s a problem on our end. The process you requested will take longer than usual. You can work in other programs while it finishes."
  - "Due to inactivity, we’ve logged you out. Please sign in to get back to your work."

</div>

<div>

  ### Incorrect

  - "ERROR! You can’t perform this action."
  - "Error w780-r5."
  - "Ooops! Something’s wrong. Please contact support."

</div>
</Columns>

---

## Onboarding

<Columns columns="two" type="equal" denseSpacing={true}>
  <div>
    <DoDontGrid titleText="Do">
      <DoDontTextSection>
        <DoDontText type="do">Use one to three words to greet the user.</DoDontText>
        <DoDontText type="do">Let the user know an action is in progress or complete.</DoDontText>
        <DoDontText type="do">Let the user know what they can do next.</DoDontText>
        <DoDontText type="do">Balance a casual/lighthearted tone.</DoDontText>
        <DoDontText type="do">Use sentence case and punctuation.</DoDontText>
      </DoDontTextSection>
    </DoDontGrid>
  </div>

  <div>
    <DoDontGrid titleText="Don't">
      <DoDontTextSection>
        <DoDontText type="dont">Use all caps or leave off punctuation.</DoDontText>
        <DoDontText type="dont">Don’t forget to let the user know when a process is complete and what they can do next.</DoDontText>
        <DoDontText type="dont">Use a serious/formal tone.</DoDontText>
      </DoDontTextSection>
    </DoDontGrid>
  </div>
</Columns>

<Columns columns="two" type="equal" denseSpacing={true}>
<div>

  ### Correct

  - "Welcome. We’re building your experience... You’re all set!"
  - "Welcome to Hub! Let’s start making Hub yours. Select the areas you work in.
Here’s the content you selected. Please choose a page as your home page. Nice work! Let’s see your new home page."
  - "Welcome to the ACA Command Center. This program organizes the steps for 1094/1095 reporting in compliance with the Affordable Care Act."

</div>

<div>

  ### Incorrect

  - "HEY! Hang tight while we work...DONE! See your work."
  - "Yo. You can chill for a minute."
  - "Hi...almost there...one more sec...all done. Take a look."

</div>
</Columns>

---

## Success messages

### How to display

Use [toast messages](/components/notifications-and-messages/toast/), [banners](/components/notifications-and-messages/banner/), or [inline messages](/components/notifications-and-messages/inline-message/) to display success messages. 

Do not use dialogues to inform users of success messages. 

:::note
Toast messages should meet most success message use cases. Please use the links to the specific message type guidance to see which message type works best for your use case.
:::

### Do's and Don'ts

<Columns columns="two" type="equal" denseSpacing={true}>
  <div>
    <DoDontGrid titleText="Do">
      <DoDontTextSection>
        <DoDontText type="do">Use one to three words in an exclamatory sentence with punctuation.</DoDontText>
        <DoDontText type="do">Let the user know an action is in progress or complete.</DoDontText>
        <DoDontText type="do">Let the user know what they can do next.</DoDontText>
        <DoDontText type="do">Balance a casual/lighthearted tone.</DoDontText>
        <DoDontText type="do">Use sentence case and punctuation.</DoDontText>
      </DoDontTextSection>
    </DoDontGrid>
  </div>

  <div>
    <DoDontGrid titleText="Don't">
      <DoDontTextSection>
        <DoDontText type="dont">Use all caps or leave off punctuation.</DoDontText>
        <DoDontText type="dont">Use lengthy sentences or questions or two exclamatory sentences.</DoDontText>
        <DoDontText type="dont">Use a serious/formal tone.</DoDontText>
      </DoDontTextSection>
    </DoDontGrid>
  </div>
</Columns>

<Columns columns="two" type="equal" denseSpacing={true}>
<div>

  ### Correct

  - "Way to go! Make edits to your profile anytime by clicking on your name."
  - "Nice work! Drag and drop modules to continue building your teams."
  - "Great! You created your first journal entry."

</div>

<div>

  ### Incorrect
  
  - "SWEET! You did it!"
  - "Well done! You’re on your way!"
  - "Waaay to go."

</div>
</Columns>

---

## Unsaved changes

### How to display

When displaying unsaved changes, typically this will be done by using a [dialog modal](/components/notifications-and-messages/dialog/). It is important to stop the user from losing any unsaved changes, thus modals should always be used.  

Do not use inline messages, banners, or toasts, to inform users about unsaved changes. 

### Do's and Don'ts

<Columns columns="two" type="equal" denseSpacing={true}>
  <div>
    <DoDontGrid titleText="Do">
      <DoDontTextSection>
        <DoDontText type="do">Use one to three words in an exclamatory sentence with punctuation.</DoDontText>
        <DoDontText type="do">Let the user know what they can do next.</DoDontText>
        <DoDontText type="do">Balance a casual/serious tone.</DoDontText>
        <DoDontText type="do">Use sentence case and punctuation.</DoDontText>
      </DoDontTextSection>
    </DoDontGrid>
  </div>

  <div>
    <DoDontGrid titleText="Don't">
      <DoDontTextSection>
        <DoDontText type="dont">Use all caps or leave off punctuation.</DoDontText>
        <DoDontText type="dont">Use lengthy sentences or questions or two exclamatory sentences.</DoDontText>
        <DoDontText type="dont">Use a lighthearted tone.</DoDontText>
      </DoDontTextSection>
    </DoDontGrid>
  </div>
</Columns>

<Columns columns="two" type="equal" denseSpacing={true}>
<div>

  ### Correct

  - "Hold on! Save changes before you go?"
  - "Wait! Do you want to save your changes?"
  - "Stop! Please save your changes."
  
</div>
<div>

  ### Incorrect

  - "Hold Up! Do you want to save your changes?"
  - "YIKES! Your changes will not be saved if you go."
  - "Unsaved changes!"

</div>

</Columns>