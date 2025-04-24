import{m as o,x as u,s as l}from"./base-component.5f558236.js";import{a as c}from"./dom-utils.d7d8610c.js";/**
 * @license
 * Copyright 2023 Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function A(t){class e extends t{constructor(...r){super(...r),this[o]=this.attachInternals()}}return e}/**
 * @license
 * Copyright 2023 Tyler Technologies, Inc. 
 * License: Apache-2.0
 *//**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *
 * Adapted and influenced from [Material Web](https://github.com/material-components/material-web).
 * The original source code can be found at: [GitHub](https://github.com/material-components/material-web/blob/main/internal/aria/aria.ts)
 */function f(t){return t.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}function p(t,e,s,{setAttribute:r}={setAttribute:!0}){Object.entries(s).forEach(([a,n])=>{u()&&(e[a]=n);const i=f(a);(r||!t.hasAttribute(i))&&c(t,n!=null,i,n)})}/**
 * @license
 * Copyright 2023 Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function b(t){class e extends t{[l](r,a){p(this,this[o],r,a)}}return e}export{b as W,A as a};
