/**
 * @license
 * Copyright 2023 Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function v(e,{capture:t=!0,pointerenter:r=!0,focusin:n=!0}={}){let i;const f=()=>{typeof i=="function"&&i()};return{userInteraction:new Promise(a=>{const o={once:!0,capture:t},s=u=>{n&&e.removeEventListener("focusin",c,o),a(u)},c=u=>{r&&e.removeEventListener("pointerenter",s,o),a(u)};i=()=>{r&&e.removeEventListener("pointerenter",s,o),n&&e.removeEventListener("focusin",c,o)},r&&e.addEventListener("pointerenter",s,o),n&&e.addEventListener("focusin",c,o)}),destroy:f}}function p(e,t){let r=null;if(t){const n=e.getRootNode();if(t===":host"&&n instanceof ShadowRoot)return n.host;r=n.querySelector(`#${t}`)}return r||e.parentElement}function L(e,t,r=!0){return r&&t.append(...e.childNodes),e.insertAdjacentElement("beforebegin",t),e.remove(),t}export{v as c,p as l,L as r};
