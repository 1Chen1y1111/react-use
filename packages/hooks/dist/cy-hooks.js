!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react")):"function"==typeof define&&define.amd?define(["react"],r):"object"==typeof exports?exports["@cy-group/react-use"]=r(require("react")):e["@cy-group/react-use"]=r(e.react)}(this,(e=>(()=>{"use strict";var r={155:r=>{r.exports=e}},t={};function o(e){var n=t[e];if(void 0!==n)return n.exports;var u=t[e]={exports:{}};return r[e](u,u.exports,o),u.exports}o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};o.r(n),o.d(n,{useToggle:()=>c}),Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;var u=o(155);const c=function(e,r){void 0===e&&(e=!1);var t=function(e,r){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var o,n,u=t.call(e),c=[];try{for(;(void 0===r||r-- >0)&&!(o=u.next()).done;)c.push(o.value)}catch(e){n={error:e}}finally{try{o&&!o.done&&(t=u.return)&&t.call(u)}finally{if(n)throw n.error}}return c}((0,u.useState)(e),2),o=t[0],n=t[1];return[o,(0,u.useMemo)((function(){var t=void 0===r?!e:r;return{toggle:function(){return n((function(r){return r===e?t:e}))},set:function(e){return n(e)},setLeft:function(){return n(e)},setRight:function(){return n(t)}}}),[])]};return n})()));