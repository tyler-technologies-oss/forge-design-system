---
title: Enhanced Angular Integration
decription: Using Forge components in Angular without CUSTOM_ELEMENTS_SCHEMA.
authors: [mike.matuszak]
tags: [forge, angular, custom-elements, web-components]
---

The Angular framework does a "pretty good" job of working with Web Components out of the box, but having to use `CUSTOM_ELEMENTS_SCHEMA`, weakens template type-checking overall, which can mask errors, and doesn't provide any autocomplete or IntelliSense.  As of v.2.1.0 of the `forge-angular` library, however, released in November 2022, it's no longer necessary to specify the schema, and if you import the associated modules, Forge components can be used as though they were Angular components!

<!-- truncate -->

## Proxy Components

There are a few moving parts, but the piece that actually enables the integration are Angular `@Component()` definitions that mirror the Forge Web Components without introducing any new DOM elements, which we're calling Proxy Components.  They provide just enough definition for Angular to recognize the component, and then do everything they can to get out of the way.  These components are all generated, so they can be more automatically kept up to date.  We'll get into more detail about how that works later on in this post.  Here's a simple example of a proxy component:

```ts
@Component({
  selector: 'forge-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class RadioComponent {

	/** Gets/sets whether the radio button is dense. */
	@Input()
	public set dense(value: RadioComponentCustomElement['dense'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.dense = value != null && `${value}` !== 'false';
		});
	}

	public get dense(): RadioComponentCustomElement['dense'] {
		return this.elementRef.nativeElement.dense;
	}


	public syncCheckedState(...args: Parameters<RadioComponentCustomElement['syncCheckedState']>): ReturnType<RadioComponentCustomElement['syncCheckedState']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.syncCheckedState(...args));
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<RadioComponentCustomElement>,
		protected zone: NgZone
	) {
		defineRadioComponent();
		changeDetectorRef.detach();
	}
}
```

As you can see by the selector, the Forge web component itself *is* the Angular component.  It has an `@Input()` for each public property of the Forge component, and a public method for each public method of the component.  And that's basically it.  It mirrors the types directly from the Forge type definitions, along with any JSDoc, and minimizes Angular's footprint by calling `runOutsideAngular` and `changeDetectorRef.detach()` along with `onPush` change detection.

Note also the boolean coercion for the `density` property, so that `dense="true"` or even just `dense` still works and you don't need `[dense]="true"`. The intention is that a template that was valid with `CUSTOM_ELEMENTS_SCHEMA` should also work without it using the proxy components.

You may wonder why there aren't any `@Output()` properties, but they're actually not necessary at all because the Forge library already provides typings for `HTMLElementEventMap`.  This means that they're already strongly typed and support auto-suggest, and Angular's built-in support for native HTML events actually works better here, because it supports bubbling.  The way Forge was already working here was optimal, so we didn't want the proxy components to get in the way.

Lastly, the component constructor invokes the `defineRadioComponent()` method, removing the need to call that explicitly in the application.  This is also done in the module constructor, to account for components that are rendered dynamically (e.g. by calling `document.createElement('forge-button');`), which would otherwise still require the application to ensure the custom element is defined.  We have also added these `define` calls to singleton services that show Forge components, such as `DialogService` and `ToastService`.

## Application Usage

> A summary of the process is also noted in the [Forge v2.1.0 release notes](https://github.com/tyler-technologies-oss/forge-angular/releases/tag/v2.1.0) and [Framework Usage Guide](https://forge.tylerdev.io/main/?path=/docs/guides-framework-usage--page) on Storybook.

Ideally, you should be able to import the necessary modules for components in your templates (e.g. `ForgeRadioModule`), remove `CUSTOM_ELEMENTS_SCHEMA` and the `define***Element()` calls, and it will just work.  Or if there are any compilation errors, they'll represent actual issues with the correctness of the template.  As we've rolled this out in a number of apps, it has certainly turned up a number of very real defects that were obscured by `CUSTOM_ELEMENTS_SCHEMA`, but for the most part required very few changes.  The most common case where stricter typing caused a problem was providing an object to a boolean property, essentially using whether it was defined to determine truthiness, which can be coerced using `!!`.  Angular also allows the use of `$any()` to override usages that may not satisfy TypeScript, but you know are correct and want to defer or avoid changing them at the current time.

The easiest way to do this is usually to go module-by-module, remove `CUSTOM_ELEMENTS_SCHEMA`, and import the modules for each Forge web component used in the templates of components until they compile.  Then remove the `define***Element()` calls.

In Forge 2.0 we decided to make this entirely opt-in, to prevent upgrading a minor version of the `forge-angular` from behaving like a breaking change with stricter type-checking.  So, where the `forge-angular` library already provides modules for value accesor directives, for now you'll need to import a separate `Forge*ProxyModule` for those components.  In the future, most likley Forge 3.0, we intend to combine these so you get both the Proxy Component and value accesor in the same module.

Also, as much as possible, we've tried to roll up components that are always used together into the parent module.  For example, if you import `ForgeListModule`, it will provide proxy components for both `<forge-list>` and `<forge-list-item>`.  This is purely intended as a conveninence, and `ForgeListItemModule` still exists independently.

There is also a `ProxyComponentsModule` that includes all proxy components, similar to how `ForgeModule` contains all the value accessor modules.  Importing individual modules will provide better tree-shaking and is preferred, but if you were already using the roll-up module this will provide a similar experience in cases where the optimization isn't necessary.

Consider the following template from the `forge-angular` demo app, which will not need to change at all.:

```html
<forge-button type="raised">
	<button id="tooltip-demo-btn">Hover me</button>
</forge-button>
<forge-tooltip #tooltip target="#tooltip-demo-btn" [text]="text" [position]="position" [delay]="delay"></forge-tooltip>
<forge-text-field>
	<input type="text" id="tooltip-text" [(ngModel)]="text" />
	<label for="tooltip-text">Text</label>
</forge-text-field>
<forge-text-field>
	<input type="number" id="tooltip-delay" [(ngModel)]="delay" />
	<label for="tooltip-delay">Delay (ms)</label>
</forge-text-field>
<forge-select id="tooltip-position" label="Position" [(ngModel)]="position">
	<forge-option value="top">Top</forge-option>
	<forge-option value="right">Right</forge-option>
	<forge-option value="bottom">Bottom</forge-option>
	<forge-option value="left">Left</forge-option>
</forge-select>
<forge-checkbox>
	<input id="tooltip-builder" type="checkbox" [(ngModel)]="useBuilder" (change)="onUseBuilderChanged($event)" />
	<label for="tooltip-builder">Use Builder</label>
</forge-checkbox>
<forge-tooltip delay="500" text="Provides a builder function to render an HTML element in the tooltip instead of just text."></forge-tooltip>
```

The original module file called `define` for each component, specified `CUSTOM_ELEMENTS_SCHEMA` and also was using the `ForgeSelectModule` for the `[(ngModel)]` binding on the `<forge-select>` element.

```ts
defineButtonComponent();
defineTooltipComponent();
defineTextFieldComponent();
defineCheckboxComponent();
defineSelectComponent();

@NgModule({
  declarations: [TooltipComponent],
  imports: [
    CommonModule,
    TooltipRoutingModule,
    FormsModule,
    SharedModule,
    ForgeSelectModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TooltipModule { }
```

This was changed to the following:

```ts
@NgModule({
  declarations: [TooltipComponent],
  imports: [
    CommonModule,
    TooltipRoutingModule,
    FormsModule,
    SharedModule,
    ForgeButtonModule,
    ForgeCheckboxModule,
    ForgeSelectModule,
    ForgeSelectProxyModule,
    ForgeTextFieldModule,
    ForgeTooltipModule
  ]
})
export class TooltipModule { }
```

Note that we had to import both `ForgeSelectModule` and `ForgeSelectProxyModule`, and also that we did not need to import `ForgeOptionModule` for the `<forge-option` usages because the `ForgeSelectModule` already re-exports that.

## Generating the Proxy Components

In order to ensure the components could be kept up to date with the latest changes in Forge with minimal effort, the components are generated using the Angular Schematics in the [`forge-schematics`](https://github.com/tyler-technologies-oss/forge-schematics) repository.  For the most part, the process of updating `forge-angular` to reflect changes in `forge` is just:

```sh
npm i @tylertech/forge@latest
npm run generate-proxies
```

This will update existing components, generate proxy components for any new ones added (such as the recent `forge-split-view`) and even create modules where they don't exist.  For new components, it's currently still a manual process to update `index.ts` files and add them to `ProxyComponentsModule`.  It may also be desirable to add a demo to the app in order to exercise the types and showcase their usage.  Eventually we may automate the creation of a PR when new versions of Forge are published.

If you want to add an additional relationship to have one component's module export another as a convenience, such as only needing to import `ForgeSplitViewModule` and also be able to automatically use `forge-split-view-panel` in your template, these can be configured in the `generate-proxies.json` file, before running the above command, by adding to `componentDependencies`:

```json
{
    "manifest": "node_modules/@tylertech/forge/custom-elements.json",
    "importPath": "@tylertech/forge",
    "exclude": "",
    "outDir": "projects/forge-angular/src/lib",
    "outDirExcludePrefix": "forge-",
    "modulePrefix": "Forge",
    "useDefineFunction": true,
    "componentDependencies": {
        "forge-accordion": ["forge-expansion-panel"],
        "forge-button-toggle-group": ["forge-button-toggle"],
        "forge-chip-field": ["forge-chip"],
        "forge-chip-set": ["forge-chip"],
        "forge-expansion-panel": ["forge-open-icon"],
        "forge-icon-button": ["forge-icon"],
        "forge-list": ["forge-list-item"],
        "forge-select": ["forge-option"],
        "forge-split-view": ["forge-split-view-panel"],
        "forge-stepper": ["forge-step"],
        "forge-tab-bar": ["forge-tab"],
        "forge-view-switcher": ["forge-view"]
    }
}
```

As you can see from the configuration options, the schematic itself is fairly generic, and may work with other Web Component libraries besides Forge.  It does assume certain conventions are followed, such as the use of TypeScript and specifically `HTMLElementEventMap` typings, but could probably be modified with additional options if the need ever arose.  The most essential metadata the schematic relies on, however, is a JSON file now published by the Forge library known as a Custom Elements Manifest.

## The Custom Elements Manifest

The [Custom Elements Manifest](https://github.com/webcomponents/custom-elements-manifest) represents an effort to standardize on a common, machine-readable specification to describe custom elements. The schema is written in TypeScript and compiled to JSON Schema.

[Framework Integration](https://github.com/webcomponents/custom-elements-manifest#framework-integration) is a documented use case for consuming such a manifest. The example cited is automating the creation of wrapper components for React, but here we're using it for Angular.  This schema could also be used to generate documentation of attributes, slots, events, and other features of Web Components in Storybook or the Forge website that currently require a lot of manual effort to keep up to date.  There's also an existing plugin for the analyzer for creating React wrappers based on the manifest, which might be of interest to React developers here at Tyler.

The manifest is automatically generated as part of the build using the [`@custom-elements-manifest/analyzer`](https://www.npmjs.com/package/@custom-elements-manifest/analyzer) and included in the published npm package.

For the Angular component generation to work, the only requirement is that the tag name for each custom element be specified in the JSDoc for the component class:

```ts
/**
 * The custom element class behind the `<forge-radio>` element.
 * 
 * @tag forge-radio
 */
@CustomElement({ name: RADIO_CONSTANTS.elementName })
export class RadioComponent extends BaseComponent implements IRadioComponent {...}
```

[Other JSDoc tags](https://custom-elements-manifest.open-wc.org/analyzer/getting-started/#supported-jsdoc) exist for including metadata about slots, attributes, CSS Shadow Parts, CSS Custom Properties, events, and more.  Specifying these properties could be useful for generating documentation or perhaps even surfacing them to developers in their code editor.