# Color

The Forge color system serves as a meaningful expression of our brand.

## Overview 

Color serves as an expression of the Tyler brand and a strong visual indicator of consistency across our products. Our colors are based in the [Material Design color system](https://material.io/design/color/the-color-system.html).

Tyler is committed to meeting AA WCAG contrast ratios. To this end, we've chosen a primary, secondary, and tertiary colors that support usability across a variety of experiences. Our primary and secondary color support our Tyler brand and our tertiary color is chosen specifically for controls in order to ensure sufficient contrast so that users with low vision can use our products well. 

---

## Parts 

The Tyler Forge color system is comprised of five parts: 1. Main palette, 2. Icon colors, 3. Surface colors, 4.Informational colors 5. Additional palettes. 

### 1. Main palette 

The main palette is used to establish Tyler’s theme and primary look & feel. It’s derived from Material’s color system. Tyler uses Indigo 500 as its primary color [feel associations] and amber 500 for its secondary color, used for visual accents [feel association]. The omnibar takes a darker hue of the primary indigo. Controls use our tertiary color of Indigo A200 to provide sufficient contrast for controls. 
In general, the Forge components are already themed correctly to provide the appropriate colors needed. 

<!-- <div class="color-swatches">
    <div> 
        <div class="color-block" style="background-color: var(--tyl-omnibar-background-color, #283593);"></div>
        <p class="tyl-typography--body1">Omnibar color</p>
        <span class="tyl-typography--body2" style="color: var(--mdc-theme-text-secondary-on-light);">Indigo 800</span><br />
        <span class="tyl-typography--body2" style="color: var(--mdc-theme-text-secondary-on-light);">#283593</span>
    </div>
    <div> 
        <div class="color-block" style="background-color: var(--mdc-theme-primary);"></div>
        <p class="tyl-typography--body1">Primary color</p>
        <span class="tyl-typography--body2" style="color: var(--mdc-theme-text-secondary-on-light);">--mdc-theme-primary</span><br />
        <span class="tyl-typography--body2" style="color: var(--mdc-theme-text-secondary-on-light);">#3f51b5</span>
    </div>
    <div> 
        <div class="color-block" style="background-color: var(--mdc-theme-secondary);"></div>
        <p class="tyl-typography--body1">Secondary color</p>
        <span class="tyl-typography--body2" style="color: var(--mdc-theme-text-secondary-on-light);">--mdc-theme-secondary</span><br />
       <span class="tyl-typography--body2" style="color: var(--mdc-theme-text-secondary-on-light);">#ffc107</span>
    </div>
    <div> 
        <div class="color-block" style="background-color: var(--mdc-theme-tertiary);"></div>
        <p class="tyl-typography--body1">Tertiary color</p>
        <span class="tyl-typography--body2" style="color: var(--mdc-theme-text-secondary-on-light);">--mdc-theme-tertiary</span><br />
        <span class="tyl-typography--body2" style="color: var(--mdc-theme-text-secondary-on-light);">#536dfe</span>
    </div>
</div> -->


### 2. Icon colors 

Icon colors are meant to provide consistent visual cues around interactivity. The Tyler Forge system provides colors for “active + focused” (user is currently interacting with the icon), “resting” (icon is interactive but isn’t currently being used), and “disabled” (icon isn’t interactive). 

On light

<!-- <div class="color-swatches">
    <div> 
        <div class="color-block" style="background-color: var(--mdc-theme-text-primary-on-light);"></div>
        <p class="tyl-typography--body1">Active + focused</p>
        <span class="tyl-typography--body2" style="color: var(--mdc-theme-text-secondary-on-light);">--mdc-theme-text-primary-on-light</span><br />
        <span class="tyl-typography--body2" style="color: var(--mdc-theme-text-secondary-on-light);">rgba(0, 0, 0, 0.87)</span>
    </div>
    <div> 
        <div class="color-block" style="background-color: var(--mdc-theme-text-secondary-on-light);"></div>
        <p class="tyl-typography--body1">Resting</p>
        <span class="tyl-typography--body2" style="color: var(--mdc-theme-text-secondary-on-light);">--mdc-theme-text-secondary-on-light</span><br />
        <span class="tyl-typography--body2" style="color: var(--mdc-theme-text-secondary-on-light);">rgba(0, 0, 0, 0.54)</span>
    </div>
    <div> 
        <div class="color-block" style="background-color: var(--mdc-theme-text-icon-on-background);"></div>
        <p class="tyl-typography--body1">Disabled</p>
        <span class="tyl-typography--body2" style="color: var(--mdc-theme-text-secondary-on-light);">--mdc-theme-text-icon-on-background</span><br />
       <span class="tyl-typography--body2" style="color: var(--mdc-theme-text-secondary-on-light);">rgba(0, 0, 0, 0.38)</span>
    </div>
</div> -->

On dark

<!-- <div class="color-swatches">
    <div> 
        <div class="color-block" style="background-color: var(--mdc-theme-primary); display: flex">
            <div class="color-block-alt" style="background-color: var(--mdc-theme-text-primary-on-dark)"></div>
        </div>
        <p class="tyl-typography--body1">Active + focused</p>
        <span class="tyl-typography--body2" style="color: var(--mdc-theme-text-secondary-on-light);">--mdc-theme-text-primary-on-dark</span><br />
        <span class="tyl-typography--body2" style="color: var(--mdc-theme-text-secondary-on-light);">rgba(255,255,255,1)</span>
    </div>
    <div> 
        <div class="color-block" style="background-color: var(--mdc-theme-primary); display: flex">
            <div class="color-block-alt" style="background-color: var(--mdc-theme-text-secondary-on-dark)"></div>
        </div>
        <p class="tyl-typography--body1">Resting</p>
        <span class="tyl-typography--body2" style="color: var(--mdc-theme-text-secondary-on-light);">--mdc-theme-text-secondary-on-dark</span><br />
        <span class="tyl-typography--body2" style="color: var(--mdc-theme-text-secondary-on-light);">rgba(255,255,255,.7)</span>
    </div>
    <div> 
        <div class="color-block" style="background-color: var(--mdc-theme-primary); display: flex">
            <div class="color-block-alt" style="background-color: var(--mdc-theme-text-icon-on-dark)"></div>
        </div>
        <p class="tyl-typography--body1">Disabled</p>
        <span class="tyl-typography--body2" style="color: var(--mdc-theme-text-secondary-on-light);">--mdc-theme-text-icon-on-dark</span><br />
       <span class="tyl-typography--body2" style="color: var(--mdc-theme-text-secondary-on-light);">rgba(255,255,255,.5)
</span>
    </div>
</div> -->


### 3. Surface colors

Surface colors are intended to provide contrast against the content that sits on them. Tyler Forge uses a light grey on app backgrounds to provide contrast to white surfaces that contain content. Surfaces containing text are generally white to create sufficient contrast against black text. 

<!-- <div class="color-swatches">
    <div> 
        <div class="color-block" style="background-color: var(--mdc-theme-background); border: 2px solid #e5e5e5"></div>
        <p class="tyl-typography--body1">Background</p>
        <span class="tyl-typography--body2" style="color: var(--mdc-theme-text-secondary-on-light);">--mdc-theme-background</span><br />
        <span class="tyl-typography--body2" style="color: var(--mdc-theme-text-secondary-on-light);">#fafafa</span>
    </div>
    <div> 
        <div class="color-block" style="background-color: var(--mdc-theme-surface); border: 2px solid #e5e5e5"></div>
        <p class="tyl-typography--body1">Surface</p>
        <span class="tyl-typography--body2" style="color: var(--mdc-theme-text-secondary-on-light);">--mdc-theme-surface</span><br />
        <span class="tyl-typography--body2" style="color: var(--mdc-theme-text-secondary-on-light);">rgba(0, 0, 0, 0.54)</span>
    </div>
</div> -->


### 4. Informational colors

Informational colors communicate additional information and should be used somewhat sparingly. **To be ADA compliant, statuses such as “success,” “warning,” and “error” should not be communicated by color only.** Use text in addition to color, or an icon in addition to color to communicate these states. 

“Success” and “warn” may be used part of workflow states or in badges to communicate statuses. “Danger” is used by default in the error state on inputs.

<!-- <div class="color-swatches">
    <div> 
        <div class="color-block" style="background-color: var(--mdc-theme-success);"></div>
        <p class="tyl-typography--body1">Success</p>
        <span class="tyl-typography--body2" style="color: var(--mdc-theme-text-secondary-on-light);">--mdc-theme-success</span><br />
        <span class="tyl-typography--body2" style="color: var(--mdc-theme-text-secondary-on-light);">#2E7D32</span>
    </div>
    <div> 
        <div class="color-block" style="background-color: var(--mdc-theme-warning);"></div>
        <p class="tyl-typography--body1">Warning</p>
        <span class="tyl-typography--body2" style="color: var(--mdc-theme-text-secondary-on-light);">--mdc-theme-warning</span><br />
        <span class="tyl-typography--body2" style="color: var(--mdc-theme-text-secondary-on-light);">#D14900</span>
    </div>
    <div> 
        <div class="color-block" style="background-color: var(--mdc-theme-error);"></div>
        <p class="tyl-typography--body1">Error</p>
        <span class="tyl-typography--body2" style="color: var(--mdc-theme-text-secondary-on-light);">--mdc-theme-danger</span><br />
       <span class="tyl-typography--body2" style="color: var(--mdc-theme-text-secondary-on-light);">#B00020</span>
    </div>
</div> -->

## 5. Additional palettes

Colors may be used in additional parts of Tyler apps. Specifically, [badges](/components/notifications-and-messages/badge), [inline messages](/components/notifications-and-messages/inline-message), and [page banners](/components/notifications-and-messages/banner) have their own palettes to communicate specific statues. Additionally, data visualization uses its own palettes to ensure ADA compliance. 

---

## Themes 

Tyler Forge currently supports two additional themes:
-  Dark theme: used for aesthetic preferences
-  Surveillance theme: used for covert operations, especially in law enforcement apps

More themes may be supported in the future.

---

## Related 

### Components 

The following components have their own color palettes:

- [Badges](/components/notifications-and-messages/badge)
- [Inline messages](/components/notifications-and-messages/inline-message)
- [Banners](/components/notifications-and-messages/banner)

### Patterns

Coming soon...
