import{C as e}from"./base-component.2bf7bdb1.js";/**
 * @license
 * Copyright 2023 Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const o=`${e}state-layer`,E={TARGET:"target",DISABLED:"disabled"},A=Object.assign({},E),r={SURFACE:".forge-state-layer"},N={HOVERED:"forge-state-layer--hovered",PRESSED:"forge-state-layer--pressed"},C={elementName:o,attributes:A,selectors:r,classes:N};class c{constructor(t,I){this.x=t,this.y=I}static fromPointerEvent(t){return new c(t.pageX,t.pageY)}}const S=150,R=450,D=225,L=.2,i=10,l=75,b=.35,M="::after",u="forwards",G="cubic-bezier(0.2, 0, 0, 1)";var a;(function(s){s[s.INACTIVE=0]="INACTIVE",s[s.TOUCH_DELAY=1]="TOUCH_DELAY",s[s.HOLDING=2]="HOLDING",s[s.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(a||(a={}));/**
 * @license
 * Copyright 2023 Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const _=`${e}focus-indicator`,n={TARGET:"target",ACTIVE:"active",INWARD:"inward",CIRCULAR:"circular",ALLOW_FOCUS:"allow-focus"},T=Object.assign({},n),f={elementName:_,attributes:T};export{u as A,G as E,f as F,L as I,D as M,i as P,C as S,S as T,c as a,b,l as c,M as d,R as e,a as f};
