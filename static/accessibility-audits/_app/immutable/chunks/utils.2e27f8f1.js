/**
 * @license
 * Copyright 2023 Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function v(e,{capture:r=!0,pointerenter:t=!0,focusin:o=!0}={}){let i;const f=()=>{typeof i=="function"&&i()};return{userInteraction:new Promise(u=>{const n={once:!0,capture:r},s=a=>{o&&e.removeEventListener("focusin",c,n),u(a)},c=a=>{t&&e.removeEventListener("pointerenter",s,n),u(a)};i=()=>{t&&e.removeEventListener("pointerenter",s,n),o&&e.removeEventListener("focusin",c,n)},t&&e.addEventListener("pointerenter",s,n),o&&e.addEventListener("focusin",c,n)}),destroy:f}}function E(e,r){let t=null;return r&&(t=d(e,r)),t||e.parentElement}function d(e,r){const t=e.getRootNode();return r===":host"&&t instanceof ShadowRoot?t.host:t.querySelector(`#${r}`)}function L(e,r,t=!0){return t&&r.append(...e.childNodes),e.insertAdjacentElement("beforebegin",r),e.remove(),r}function h(e,r=","){return e.split(r).map(t=>t.trim())}export{v as a,E as b,h as c,d as l,L as r};
