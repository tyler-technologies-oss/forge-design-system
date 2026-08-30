# Typography

## Overview

Tyler Forge provides a purposeful set of typographic styles designed to create clear visual hierarchy and improve readability across applications. Consistently applying typographic styles to appropriate sections and functions creates familiar patterns and user expectations, enhancing the overall user experience.   

Forge uses Roboto as its primary typeface throughout the entire component library. Roboto was chosen for its excellent readability across different screen sizes and devices, making it ideal for both digital interfaces and accessibility requirements.

<p className="forge-typography--heading8">
Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp   
Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz   
0123456789 !@#$%^&*()[]{}
</p>

---

## Styles

The Forge typography system includes multiple style categories, each serving specific interface needs.

### Display

<Columns type="equal" columns="two">

<LeftColumn>

Large, prominent text for major headings, hero sections, and key messaging. Use sparingly for maximum impact.

</LeftColumn>

<RightColumn>
<div className="forge-typography--display1">Display 1</div>
<div className="forge-typography--display2">Display 2</div>
<div className="forge-typography--display3">Display 3</div>
<div className="forge-typography--display4">Display 4</div>
<div className="forge-typography--display5">Display 5</div>
<div className="forge-typography--display6">Display 6</div>
<div className="forge-typography--display7">Display 7</div>
<div className="forge-typography--display8">Display 8</div>
</RightColumn>

</Columns>



### Heading

<Columns type="equal" columns="two">

<LeftColumn>

These are standard headings for page titles and section organization. These create the primary content hierarchy.

</LeftColumn>

<RightColumn>

<div className="forge-typography--heading1">Heading 1</div>
<div className="forge-typography--heading2">Heading 2</div>
<div className="forge-typography--heading3">Heading 3</div>
<div className="forge-typography--heading4">Heading 4</div>
<div className="forge-typography--heading5">Heading 5</div>
<div className="forge-typography--heading6">Heading 6</div>
<div className="forge-typography--heading7">Heading 7</div>
<div className="forge-typography--heading8">Heading 8</div>

</RightColumn>

</Columns>


### Subheading
<Columns type="equal" columns="two">

<LeftColumn>

Subheadings are secondary headings that support main headings and create subsection organization.

</LeftColumn>

<RightColumn>

<div className="forge-typography--subheading1">Subeading 1</div>
<div className="forge-typography--subheading2">Subheading 2</div>
<div className="forge-typography--subheading3">Subheading 3</div>
<div className="forge-typography--subheading4">Subheading 4</div>
<div className="forge-typography--subheading5">Subheading 5</div>
<div className="forge-typography--subheading6">Subheading 6</div>
<div className="forge-typography--subheading7">Subheading 7</div>
<div className="forge-typography--subheading8">Subheading 8</div>

</RightColumn>

</Columns>


### Body
<Columns type="equal" columns="two">

<LeftColumn>

Standard text for paragraphs, descriptions, and general content reading.

</LeftColumn>

<RightColumn>

<div className="forge-typography--body1">Body 1</div>
<div className="forge-typography--body2">Body 2</div>
<div className="forge-typography--body3">Body 3</div>
<div className="forge-typography--body4">Body 4</div>

</RightColumn>

</Columns>


### Label
<Columns type="equal" columns="two">

<LeftColumn>

Small text for form labels, captions, and supplementary information.

</LeftColumn>

<RightColumn>

<div className="forge-typography--label1">Label 1</div>
<div className="forge-typography--label2">Label 2</div>
<div className="forge-typography--label3">Label 3</div>

</RightColumn>

</Columns>


### Button
<Columns type="equal" columns="two">

<LeftColumn>

Specialized text styling optimized for interactive button elements.

</LeftColumn>

<RightColumn>

<div className="forge-typography--button">Button</div>

</RightColumn>

</Columns>


### Overline
<Columns type="equal" columns="two">

<LeftColumn>

Small, uppercase text for section headers and categorical labels.

</LeftColumn>

<RightColumn>

<div className="forge-typography--overline">Overline</div>

</RightColumn>

</Columns>

---

## Accessibility

Proper typography implementation is crucial for accessibility and screen reader navigation.

**Semantic HTML structure**

- Use native HTML semantic headers (H1-H6) for proper screen reader navigation.
- Follow logical header hierarchy to create an accessible content structure.
- Reflect page relationships through heading levels rather than visual styling alone.

**Separation of structure and style**

- Don't use semantic headings for styling purposes - use them for logical content hierarchy.
- Apply Forge typography classes for visual styling while maintaining semantic structure.
- Ensure heading order follows content importance, not visual appearance.

```
<!-- Semantic structure -->
<h1>Main Page Title</h1>
<h2>Section Heading</h2>
<h3>Subsection Heading</h3>

<!-- With Forge styling -->
<h1 class="forge-typography--display-2">Main Page Title</h1>
<h2 class="forge-typography--heading-3">Section Heading</h2>
<h3 class="forge-typography--subheading-1">Subsection Heading</h3>
```

---

## Readability guidelines

### Line length optimization
Proper line length improves reading comprehension and reduces eye strain.

#### Desktop applications:

<ImageBlock padded={false} max-width="650px" caption="On desktop, aim to have your line length wrap at around 75 characters, including spaces.">

![Image of typography in a Forge app](./images/character-length-desktop.png)

</ImageBlock>

- Maximum line length: 75 characters (including spaces).
- Implementation: Use content containers, columns, or max-width properties.
- Benefits: Easier eye tracking from line end to beginning of next line.   

#### Mobile applications:

<ImageBlock padded={false} max-width="650px" caption="For mobile, aim to have your line length wrap at around 35 characters, including spaces.">

![Image of typography in a Forge app](./images/character-length-mobile.png)

</ImageBlock>

- Maximum line length: 35 characters (including spaces).
- Implementation: Responsive typography that adapts to smaller screens.
- Benefits: Improved readability on narrow viewports.

### Content organization
- Center content or use column layouts to constrain text width.
- Use white space effectively to separate content sections.
- Consider responsive behavior when setting line length constraints.

---

## Best practices

<DoDontGrid>
  <DoDontTextSection>
    <DoDontText type="do">Use semantic HTML headings to create logical content hierarchy.</DoDontText>
    <DoDontText type="do">Apply Forge typography classes for consistent visual styling.</DoDontText>
    <DoDontText type="do">Maintain appropriate line lengths for optimal readability.</DoDontText>
    <DoDontText type="do">Test typography across different screen sizes and devices.</DoDontText>
    <DoDontText type="do">Consider accessibility in all typography decisions.</DoDontText>
    <DoDontText type="do">Test with screen readers and accessibility tools.</DoDontText>
    <DoDontText type="do">Use typography hierarchy to guide user attention and content flow.</DoDontText>
  </DoDontTextSection>
  <DoDontTextSection>
    <DoDontText type="dont">Don’t use headings for styling purposes without considering semantic meaning.</DoDontText>
    <DoDontText type="dont">Don’t mix typography styles inconsistently across similar content types.</DoDontText>
  </DoDontTextSection>
</DoDontGrid>