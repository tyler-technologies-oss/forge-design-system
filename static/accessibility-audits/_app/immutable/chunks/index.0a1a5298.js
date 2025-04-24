import{g as a,B as p,a as c,c as m,_ as n,b as h,d as l}from"./base-component.5f558236.js";import{t as d,a as _}from"./index.6fcde760.js";import{O as e}from"./open-icon-constants.901804ce.js";import{B as O,F as r}from"./base-adapter.4d7c1daa.js";import{a as f,c as I,I as g}from"./icon.e06b3d95.js";import{t as N}from"./dom-utils.d7d8610c.js";/**
 * @license
 * Copyright 2023 Tyler Technologies, Inc. 
 * License: Apache-2.0
 */class b{constructor(t){this._adapter=t,this._open=!1,this._orientation=e.strings.ORIENTATION_VERTICAL}initialize(){this._adapter.setOrientation(this._orientation),this._adapter.setOpenState(this._open)}get open(){return this._open}set open(t){t=!!t,this._open!==t&&(this._open=t,this._adapter.setOpenState(this._open))}get orientation(){return this._orientation}set orientation(t){this._orientation=t,this._adapter.setOrientation(this._orientation)}}/**
 * @license
 * Copyright 2023 Tyler Technologies, Inc. 
 * License: Apache-2.0
 */class u extends O{constructor(t){super(t),this._openIcon=a(t,`.${e.classes.ICON}`),this._iconElement=a(t,f.elementName)}setOrientation(t){t===e.strings.ORIENTATION_HORIZONTAL?this._iconElement.name="keyboard_arrow_right":this._iconElement.name="keyboard_arrow_down"}setOpenState(t){N(this._openIcon,t,e.classes.ICON_OPEN)}}/**
 * @license
 * Copyright 2023 Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const C='<template><span class="forge-open-icon" part="root"><forge-icon class="icon" part="icon"></forge-icon></span></template>',w=".forge-open-icon{color:#757575;color:var(--forge-theme-icon-color,#757575)}.forge-open-icon .icon{-webkit-transition:-webkit-transform .4s;transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s}.forge-open-icon.forge-open-icon--open .icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host{line-height:.5}:host([hidden]){display:none}";let o=class extends p{static get observedAttributes(){return[e.attributes.OPEN,e.attributes.ORIENTATION]}constructor(){super(),I.define([d,_]),c(this,C,w),this._foundation=new b(new u(this))}initializedCallback(){this._foundation.initialize()}attributeChangedCallback(t,E,s){switch(t){case e.attributes.OPEN:this.open=m(s);break;case e.attributes.ORIENTATION:this.orientation=s;break}}};n([r()],o.prototype,"open",void 0);n([r()],o.prototype,"orientation",void 0);o=n([h({name:e.elementName,dependencies:[g]})],o);/**
 * @license
 * Copyright 2023 Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function P(){l(o)}export{e as OPEN_ICON_CONSTANTS,u as OpenIconAdapter,o as OpenIconComponent,b as OpenIconFoundation,P as defineOpenIconComponent};
