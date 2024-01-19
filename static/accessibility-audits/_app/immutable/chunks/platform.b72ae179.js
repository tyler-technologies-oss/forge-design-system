/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const t=typeof Intl<"u"&&Intl.v8BreakIterator;class e{static get isBrowser(){return typeof document=="object"&&!!document}static get isMobile(){return e.isBrowser&&/Mobi/.test(navigator.userAgent)}static get EDGE(){return e.isBrowser&&/(edge)/i.test(navigator.userAgent)}static get TRIDENT(){return e.isBrowser&&/(msie|trident)/i.test(navigator.userAgent)}static get BLINK(){return e.isBrowser&&!!(window.chrome||t)&&!!CSS&&!e.EDGE&&!e.TRIDENT}static get WEBKIT(){return e.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!e.BLINK&&!e.EDGE&&!e.TRIDENT}static get IOS(){return e.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static get FIREFOX(){return e.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent)}static get ANDROID(){return e.isBrowser&&/android/i.test(navigator.userAgent)&&!e.TRIDENT}SAFARI(){return e.isBrowser&&/safari/i.test(navigator.userAgent)&&e.WEBKIT}}export{e as P};
