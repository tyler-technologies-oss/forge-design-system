import{C as o,B as s,a as d,g as i,c as n,_ as c,b as l,d as p}from"./base-component.5f558236.js";import{t as b,a as h}from"./dom-utils.d7d8610c.js";/**
 * @license
 * Copyright 2023 Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const g=`${o}card`,m={RAISED:"raised"},f={RAISED:"forge-card--raised"},x={ROOT:".forge-card"},r={elementName:g,attributes:m,classes:f,selectors:x};/**
 * @license
 * Copyright 2023 Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const u='<template><div class="forge-card" part="root"><slot></slot></div></template>',_=".forge-card{background-color:#fff;background-color:var(--mdc-theme-surface,#fff);border-radius:4px;border-radius:var(--mdc-shape-medium,4px);border-width:1px;border-style:solid;border-color:#e0e0e0;height:100%;height:var(--forge-card-height,100%);width:100%;width:var(--forge-card-width,100%);padding:16px;padding:var(--forge-card-padding,16px);overflow:hidden;overflow:var(--forge-card-overflow,hidden);border-color:#e0e0e0;border-color:var(--forge-theme-border-color,#e0e0e0);-webkit-box-sizing:border-box;box-sizing:border-box}.forge-card--raised{-webkit-box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);border:none}:host{display:block}:host([hidden]){display:none}";let t=class extends s{static get observedAttributes(){return[r.attributes.RAISED]}constructor(){super(),this._raised=!1,d(this,u,_),this._rootElement=i(this,r.selectors.ROOT)}connectedCallback(){this._applyRaised()}attributeChangedCallback(e,w,a){switch(e){case r.attributes.RAISED:this.raised=n(a);break}}_applyRaised(){b(this._rootElement,this._raised,r.classes.RAISED)}get raised(){return this._raised}set raised(e){e=!!e,this._raised!==e&&(this._raised=e,this._applyRaised(),h(this,this._raised,r.attributes.RAISED,String(!!this._raised)))}};t=c([l({name:r.elementName})],t);/**
 * @license
 * Copyright 2023 Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function S(){p(t)}export{r as CARD_CONSTANTS,t as CardComponent,S as defineCardComponent};
