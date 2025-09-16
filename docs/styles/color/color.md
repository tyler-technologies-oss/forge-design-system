# Color

## Overview 

The Forge color system serves as a meaningful expression of brand identity and provides visual consistency across applications. Color serves as a strong indicator of cohesion between products that use Forge components.

Forge is committed to meeting WCAG level AA contrast ratios for accessibility. The primary, secondary, and tertiary colors are chosen to support usability across a variety of experiences, ensuring users with low vision can effectively use applications built with Forge.

---

## Parts 

The Forge color system is comprised of three main parts that work together to create accessible, branded experiences: main palette, surface colors, and informational colors.

### Main palette 

![The four main palette colors are shown left to right: Primary, Secondary, Tertiary, and Branding.](./images/colors-header.png)

The main palette consists of the foundation colors that establish the primary theme and visual identity:

- **Primary:** Main interactive elements and key actions.
- **Secondary:** Supporting elements and secondary actions.
- **Tertiary:** Specifically chosen for controls to ensure sufficient contrast and accessibility.
- **Brand:** Represents organizational identity and branding.

The main palette establishes the core theme and primary look and feel. Forge components use these colors by default and are already themed to provide appropriate color application.

### Surface colors

![An example of the surface color overlaid on the background color is shown in light mode on the left half of the image, and in dark mode on the right half.](./images/surface-colors.png)

Background and container colors that provide proper contrast for content:

- **Background colors:** Light grey used on app backgrounds to provide contrast against white content surfaces.
- **Surface colors:** Generally white containers that hold content, creating sufficient contrast against dark text.
- **Contrast considerations:** Surface colors are specifically chosen to support readability and visual hierarchy.

Surface colors adapt between light and dark themes to maintain appropriate contrast ratios in different viewing contexts.   

### Informational colors

![The four informational colors are shown left to right: Success, Warning, Error, and Info.](./images/colors-informational.png)

Semantic colors that communicate system states and feedback:

- **Success:** Positive outcomes and completed actions.
- **Warning:** Caution states and items requiring attention.
- **Error:** Problems, failures, and critical issues.
- **Info:** General information and neutral status updates.

**Usage guidelines**

- Use informational colors somewhat sparingly for maximum impact.
- Commonly applied in banners, badges, inline messages, and form validation.
- Error color is used by default for input field error states.

:::info
To meet ADA compliance, statuses like "success," "warning," and "error" should not be communicated by color alone. Always include text labels or icons alongside color to ensure all users can understand the meaning.
:::

---

## Additional palettes

Additional colors are available when the main system colors are insufficient for specific design needs.

**Component-specific palettes**
Certain components have expanded color options:

- Badges: Extended palette for various status and category indicators.
- Inline messages: Additional colors for different message types.
- Page banners: Broader color range for different announcement types.

**Data visualization palettes**
Specialized color sets designed for charts and data representation.

- Categorical colors: Distinct colors for different data categories.
- Sequential colors: Gradual color progressions for ordered data.
- Accessibility-compliant: All visualization colors meet contrast requirements.

---

## Themes 

Forge components support flexible theming through a structured token system.

**Built-in themes**
- Light theme: Standard light background with dark text.
- Dark theme: Dark background with light text for reduced eye strain.

**Custom theming**
The token structure enables easy creation of custom branded themes.

- Brand customization: Apply organizational colors while maintaining accessibility.
- Flexible implementation: Modify colors without breaking component functionality.
- Consistent application: Themes apply systematically across all Forge components.

**Benefits**

- Users can switch between light and dark modes based on preference.
- Organizations can implement custom branding while maintaining usability.
- Consistent theming across all application components. 
