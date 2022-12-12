# External libraries

For complex patterns and components, Forge endorses a number of external libraries that can be themed to be consistent with Forge styles. Reach out to the recommended contact for each library to learn about theming these libraries.

## Advanced table

The [table](/components/table-data/table-data/table) intends to cover features that are common to most Tyler products, including sorting, filtering, and selecting rows. It is intended to be a relatively simple UI component that displays data. For this reason, it is not intended to be comprehensive or fully featured.

If the team requires a table with complex table requirements, a fully featured third-party table  may be more appropriate.

Here are our recommendations:

| Tool              | Framework  | Description       | Use when          | Contact
| :-----------------| :--------- |:----------------- | :---------------- | :---------------
| <a target="_blank" rel="noopener noreferrer" href="https://www.ag-grid.com/">AG Grid</a>  | JS, React, Angular, Vue | A fully featured JavaScript table           |  Overall recommended | Coming soon
| <a target="_blank" rel="noopener noreferrer" href="https://www.primefaces.org/primeng/showcase/#/table/basic">PrimeNG Grid</a> | Angular | PrimeNG is a collection of rich UI components for Angular  | To optimize for performance when loading a large number of records | <a href="mailto:michael.matuszak@tylertech.com">Michael Matuszak (Developer)</a>
| <a target="_blank" rel="noopener noreferrer" href="https://handsontable.com/">Handsontable</a> | JavaScript | A JavaScript component that combines data grid features with spreadsheet-like UX | To create an Excel-like experience | Coming soon

---

## Calendar

Calendars allow users to view, schedule, and modify events, work, or other records. The calendar is not a Forge component as it isn't atomic or composable. Instead we recommend using Full Calendar, a fully featured JavaScript calendar, and skinning it to use our recommended <a rel="noopener noreferrer" href="https://www.figma.com/file/wF374tcYJHbFqKxvVx9fkV/Forge-Calendar-palettes?node-id=0%3A1">calendar color palette</a> and our [typography styles](/core/typography/).


### Examples

- See a responsive, Forge-skinned Full Calendar example in action in the [Employee Access Calendar case study](/case-studies/ess-calendar).
- Reach out to [Morgan Keenan](mailto:morgan.keenan@tylertech.com) (UX Designer) or [Sam Richardson](mailto:sam.richardson@tylertech.com) (Developer) for more information on skinning this component.

---

## Charts

Data visualizations tell a story through data. They are visual, often interactive representations of information to help people make sense of complex phenomena. Charts can improve people’s ability to identify average values and patterns over grids of numbers.

If your team is starting with data viz, you may benefit from a Forge consulting session! [Request low or medium engagement consulting](/consulting) and mention "data viz" in your request. We can help you apply best practices to share a clear story around your data.

Although apps may choose different charting libraries to meet different needs, charts can be given a cohesive look and feel by using consistent color palettes and typography. Check out our <a href="https://www.figma.com/file/rP8Of8bjVJUMpJIBFUJqQ3/Data-Viz?node-id=0%3A1">Data Viz theming guidance</a> in Figma or reach out to <a href="mailto:eric.wayne@tylertech.com">Eric Wayne</a> or <a href="mailto:mariah.kim@tylertech.com">Mariah Kim</a> for more information around theming charts. 

:::info
Selecting an appropriate charting library is heavily dependent on the frameworks used in an app and specific businesses requirements. We've provided some recommendations based on what Tyler teams have used, but the Forge team doesn't endorse a specific charting library.
:::

| Tool              | Framework  | Description       | Use when          | Contact
| :-----------------| :--------- |:----------------- | :---------------- | :---------------
| <a target="_blank" rel="noopener noreferrer" href="https://www.chartjs.org/">ChartsJS</a> | JavaScript | Simple yet flexible JavaScript charting for designers & developers; open source and free | Overall recommended | Coming soon
| <a target="_blank" rel="noopener noreferrer" href="https://echarts.apache.org/en/index.html">ECharts</a> | Apache | A free open source JavaScript visualization library | Overall recommended | <a href="mailto: ryan.sheehan@tylertech.com">Ryan Sheehan</a> (Team Lead, Infrastructure & Engineering)
| <a target="_blank" rel="noopener noreferrer" href="https://d3js.org/">D3</a>  | JavaScript | Robust libray with a steep learning curve  |  When custom, complex visualizations are needed | Coming soon
| <a target="_blank" rel="noopener noreferrer" href="https://www.highcharts.com/">HighCharts</a> | JavaScript | Robust libray with a steep learning curve  | When custom, complex visualizations are needed | <a href="mailto:rob.jacobs@tylertech.com">Rob Jacobs</a> (Architect)
| <a target="_blank" rel="noopener noreferrer" href="https://plotly.com/">Plotly</a> | Python, R, and Julia | Plotly is a user-friendly data visualization software that offers highly advanced visualization tools  | When custom, complex visualizations with high performance rendering are needed  | <a href="mailto: michaela.eaves@tylertech.com">Michaela Eaves</a> (Designer)

---

## Drag & drop

Drag and drop allows users to group, reorder, move, or resize objects by direct manipulation. Read more about our [guidance](/patterns/drag-drop/overview) on this pattern.

| Tool              | Framework  | Description       | Use when          | Contact
| :-----------------| :--------- |:----------------- | :---------------- | :---------------
| <a target="_blank" rel="noopener noreferrer" href="https://material.angular.io/cdk/drag-drop/overview">Angular Material CDK</a>  | Angular | Angular CDK for drag & drop   |  Recommended for angular | <a href="mailto:rob.jacobs@tylertech.com">Rob Jacobs</a> (Architect)
| <a target="_blank" rel="noopener noreferrer" href="https://react-dnd.github.io/react-dnd/about">react-dnd</a> | React | A set of React utilities to help you build complex drag and drop interfaces while keeping your components decoupled  | Recommended for React | <a href="mailto:michael.marchio@tylertech.com">Michael Marchio</a> (UX Architect)

---

## Email templates 

Email templates may be used to manage communication with users, from confirming a new user registration to sending receipts and bill reminders.

Our recommendation is to use <a href="https://postmarkapp.com/transactional-email-templates" target="_blank" rel="noreferrer noopener">Postmark</a>, a set of templates for transactional emails. If you're looking to use these templates, please [submit a request](/consulting) for "Low engagement consulting" from the Forge team and mention "Email templates" in your request.

---

## Text editor 

A text editor allows users to enter and format text and medi. We recommend <a target="_blank" rel="noreferrer noopener" href="https://quilljs.com/">Quill JS</a>, a free, open source WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need. Reach out to <a href="mailto:sam.richardson@tylertech.com">Sam Richardson</a> (Developer) for more information.

---

## Tree

A tree is a hierarchical list structure component. 

| Tool              | Framework  | Description       | Use when          | Contact
| :-----------------| :--------- |:----------------- | :---------------- | :---------------
| <a target="_blank" rel="noopener noreferrer" href="https://material.angular.io/cdk/tree/overview">Angular Material CDK</a>  | Angular | Angular CDK for a tree |  Recommended for angular | <a href="mailto:rob.jacobs@tylertech.com">Rob Jacobs</a> (Architect)
| <a target="_blank" rel="noopener noreferrer" href="https://react-accessible-treeview.netlify.app/">react-accessible-treeview</a> | React | A React component react component that implements the treeview pattern as described by the WAI-ARIA Authoring Practices | Recommended for React | <a href="mailto:michael.marchio.com">Michael Marchio</a> (UX Architect)
