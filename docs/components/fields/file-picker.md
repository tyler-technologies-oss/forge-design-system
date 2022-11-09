---
description: The file picker is used to upload one or more files to an application.
keywords: ['upload', 'download', 'file', 'attach', 'import', "image", "doc"]
---

# File picker

<ComponentVisual
  figmaUrl=""
  storybookUrl="https://forge.tylerdev.io/main/?path=/story/components-file-picker--default" />

## Overview

File pickers are commonly founds in forms, but they can also live as stand alone elements. Users can drag files to a target area or hit a button to add from their local folder system. Default text for then button is "Select a file" (for a single file upload) or "Select files" (for multi file upload.)

The file picker supports uploading single or multiple files. Uploaded files display in a list or grid of thumbnails.

---

## Parts

The default file picker is comprised of six sections. 

<ImageBlock maxWidth="400px">

![Anatomy of the filepicker.](/img/components/file-picker/filepicker-anatomy.png)

</ImageBlock>

1. **Drag & drop target area.** The target into which users can drag files. 
2. **Primary text.** "Drag files here or" by default. 
3. **Button.** "Select file" or "Select files" by default. Text and button may be customized as needed. 
4. **Secondary text.** (Optional) If needed, use this text for any constraints or parameters, such as file type or size. 
5. **File count.** (Optional) If there is a maximum number of files, use this text to display how many files have been uploaded so far. 
6. **File list.** May be displayed as a list (recommended for text or data files) or a thumbnail grid (recommended for image files).

The dense version displays only the "Select" file button and is best used when space is limited and drag & drop is not needed.  

---

## Types 

### 1. Default - list 

<ImageBlock maxWidth="600px" caption="Display text or data files in a list.">

![ File uploader with a list](/img/components/file-picker/file-list-view.png)

</ImageBlock>

### 2. Thumbnail grid (images)

<ImageBlock maxWidth="600px" caption="Display images files in a grid.">

![ File uploader with a thumbnail grid](/img/components/file-picker/file-grid-view.png)

</ImageBlock>

### 3. Dense (limited space)

<ImageBlock maxWidth="550px">

  ![Dense file picker](/img/components/file-picker/dense-picker.gif)

</ImageBlock>

---

## Behavior

Uploaded files should:

- Indicate loading progress and completion.
- Display any errors, their cause, and the ability to remove the file.
- Allow users to edit filenames on double-click (if applicable)
- Allow files to be deleted.
- Truncate long file names with an ellipsis.

> Hit **Run project** and **Preview** to view the examples below.

<!-- 
<RecipeDemo
  header="Default file picker with file list"
  href="https://stackblitz.com/edit/forge-recipes-file-picker"
  component-list="tcw-file-picker tcw-list tcw-icon tcw-icon-button"
/>

<RecipeDemo
  header="Default file picker with image gallery"
  href="https://stackblitz.com/edit/forge-recipes-file-picker-gallery"
  component-list="tcw-file-picker tcw-icon tcw-icon-button"
/> -->

---

## Related

### Components

- Uploaded files display as a [list](/components/list).
- Uploaded files should use [progress spinners](/components/circular-progress) to indicate progress as files upload. 
- The [button](/components/button) in the file picker may be customized. 

### Patterns

- [Progress and loading](/core-patterns/progress-loading/)
