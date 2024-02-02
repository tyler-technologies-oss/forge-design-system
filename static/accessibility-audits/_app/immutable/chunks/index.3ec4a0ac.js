import{C as l,g,B as b,a as d,c as n,_ as a,b as _,d as f}from"./base-component.5f558236.js";import{B as k,F as o}from"./base-adapter.4d7c1daa.js";/**
 * @license
 * Copyright 2023 Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const m=`${l}stack`,p={DEFAULT:"forge-stack"},u={ROOT:`.${p.DEFAULT}`},A={INLINE:"inline",WRAP:"wrap",STRETCH:"stretch",GAP:"gap",ALIGNMENT:"alignment"},w={DEFAULT_GAP:"16"},e={elementName:m,classes:p,attributes:A,selectors:u,strings:w};var h;(function(i){i.Start="start",i.Center="center",i.End="end"})(h||(h={}));/**
 * @license
 * Copyright 2023 Tyler Technologies, Inc. 
 * License: Apache-2.0
 */class E extends k{constructor(t){super(t),this._rootElement=g(t,e.selectors.ROOT)}setGap(t){const c=/^\d+$/.test(t)?`${t}px`:t;this._rootElement.style.gap=`var(--forge-stack-gap, ${c})`}}/**
 * @license
 * Copyright 2023 Tyler Technologies, Inc. 
 * License: Apache-2.0
 */class N{constructor(t){this._adapter=t,this._inline=!1,this._wrap=!1,this._stretch=!1,this._gap=e.strings.DEFAULT_GAP,this._alignment="start"}get inline(){return this._inline}set inline(t){t=!!t,this._inline!==t&&(this._inline=t,this._adapter.toggleHostAttribute(e.attributes.INLINE,this._inline))}get wrap(){return this._wrap}set wrap(t){t=!!t,this._wrap!==t&&(this._wrap=t,this._adapter.toggleHostAttribute(e.attributes.WRAP,this._wrap))}get stretch(){return this._stretch}set stretch(t){t=!!t,this._stretch!==t&&(this._stretch=t,this._adapter.toggleHostAttribute(e.attributes.STRETCH,this._stretch))}get gap(){return this._gap}set gap(t){this._gap!==t&&(this._gap=t,this._adapter.setGap(this._gap),this._adapter.setHostAttribute(e.attributes.GAP,this._gap))}get alignment(){return this._alignment}set alignment(t){this._alignment!==t&&(this._alignment=t,this._adapter.setHostAttribute(e.attributes.ALIGNMENT,this._alignment))}}/**
 * @license
 * Copyright 2023 Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const T='<template><div class="forge-stack" part="root"><slot></slot></div></template>',x=".forge-stack{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:100%;gap:16px;gap:var(--forge-stack-gap,16px);height:100%;height:var(--forge-stack-height,100%)}.forge-stack ::slotted(*){-webkit-box-flex:var(--forge-stack-stretch,initial);flex:var(--forge-stack-stretch,initial)}:host{display:block}:host([inline]) .forge-stack{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;--forge-stack-height:auto}:host([inline][wrap]) .forge-stack{flex-wrap:wrap}:host([stretch]:not([inline])){height:100%}:host([stretch]){--forge-stack-stretch:1}:host([alignment=start]) .forge-stack{-webkit-box-pack:start;justify-content:start}:host([alignment=center]) .forge-stack{-webkit-box-pack:center;justify-content:center}:host([alignment=end]) .forge-stack{-webkit-box-pack:end;justify-content:end}";let s=class extends b{static get observedAttributes(){return[e.attributes.INLINE,e.attributes.WRAP,e.attributes.STRETCH,e.attributes.GAP,e.attributes.ALIGNMENT]}constructor(){super(),d(this,T,x),this._foundation=new N(new E(this))}attributeChangedCallback(t,c,r){switch(t){case e.attributes.INLINE:this.inline=n(r);break;case e.attributes.WRAP:this.wrap=n(r);break;case e.attributes.STRETCH:this.stretch=n(r);break;case e.attributes.GAP:this.gap=r;break;case e.attributes.ALIGNMENT:this.alignment=r;break}}};a([o()],s.prototype,"inline",void 0);a([o()],s.prototype,"wrap",void 0);a([o()],s.prototype,"stretch",void 0);a([o()],s.prototype,"gap",void 0);a([o()],s.prototype,"alignment",void 0);s=a([_({name:e.elementName})],s);/**
 * @license
 * Copyright 2023 Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function I(){f(s)}export{e as STACK_CONSTANTS,E as StackAdapter,h as StackAlignMode,s as StackComponent,N as StackFoundation,I as defineStackComponent};
