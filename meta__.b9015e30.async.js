"use strict";(self.webpackChunkcy_hooks_docs=self.webpackChunkcy_hooks_docs||[]).push([[390],{60334:function(p,t,e){e.r(t),e.d(t,{demos:function(){return o}});var r=e(92379),s=e(31995),o={}},68537:function(p,t,e){var r;e.r(t),e.d(t,{demos:function(){return g}});var s=e(29008),o=e.n(s),x=e(70958),m=e.n(x),l=e(92379),E=e(78515),u=e(97353),g={"packages-hooks-src-use-toggle-demo-demo1":{component:l.memo(l.lazy(function(){return e.e(433).then(e.bind(e,19239))})),asset:{type:"BLOCK",id:"packages-hooks-src-use-toggle-demo-demo1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(30581).Z},react:{type:"NPM",value:"18.3.1"},"@cy-group/react-use":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",description:"\u9ED8\u8BA4\u4E3A boolean \u5207\u6362\uFF0C\u57FA\u7840\u7528\u6CD5\u4E0E useBoolean \u4E00\u81F4\u3002",title:"\u57FA\u7840\u7528\u6CD5"},context:{react:r||(r=e.t(l,2)),"@cy-group/react-use":u},renderOpts:{compile:function(){var c=m()(o()().mark(function v(){var n,d=arguments;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(609).then(e.bind(e,31609));case 2:return a.abrupt("return",(n=a.sent).default.apply(n,d));case 3:case"end":return a.stop()}},v)}));function I(){return c.apply(this,arguments)}return I}()}},"packages-hooks-src-use-toggle-demo-demo2":{component:l.memo(l.lazy(function(){return e.e(433).then(e.bind(e,82083))})),asset:{type:"BLOCK",id:"packages-hooks-src-use-toggle-demo-demo2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(65956).Z},react:{type:"NPM",value:"18.3.1"},"@cy-group/react-use":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",description:"\u63A5\u53D7\u4E24\u4E2A\u53EF\u9009\u53C2\u6570\uFF0C\u5728\u5B83\u4EEC\u4E4B\u95F4\u8FDB\u884C\u5207\u6362\u3002",title:"\u5728\u4EFB\u610F\u4E24\u4E2A\u503C\u4E4B\u95F4\u5207\u6362"},context:{react:r||(r=e.t(l,2)),"@cy-group/react-use":u},renderOpts:{compile:function(){var c=m()(o()().mark(function v(){var n,d=arguments;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(609).then(e.bind(e,31609));case 2:return a.abrupt("return",(n=a.sent).default.apply(n,d));case 3:case"end":return a.stop()}},v)}));function I(){return c.apply(this,arguments)}return I}()}}}},97353:function(p,t,e){e.r(t),e.d(t,{useBoolean:function(){return E},useToggle:function(){return m}});var r=e(28633),s=e.n(r),o=e(92379);function x(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,g=arguments.length>1?arguments[1]:void 0,c=(0,o.useState)(u),I=s()(c,2),v=I[0],n=I[1],d=(0,o.useMemo)(function(){var i=g===void 0?!u:g,a=function(){return n(function(y){return y===u?i:u})},_=function(y){return n(y)},f=function(){return n(u)},h=function(){return n(i)};return{toggle:a,set:_,setLeft:f,setRight:h}},[]);return[v,d]}var m=x;function l(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,g=m(u),c=s()(g,2),I=c[0],v=c[1],n=v.toggle,d=v.set,i=(0,o.useMemo)(function(){var a=function(){return d(!0)},_=function(){return d(!1)};return{set:function(h){return d(h)},setTrue:a,setFalse:_,toggle:n}},[]);return[I,i]}var E=l},46704:function(p,t,e){e.r(t),e.d(t,{texts:function(){return s}});var r=e(31995);const s=[{value:"\u4F18\u96C5\u7684\u7BA1\u7406 boolean \u72B6\u6001\u7684 Hook\u3002",paraId:0,tocIndex:0},{value:`const [state, { set, setTrue, setFalse, toggle }] = useBoolean(
  defaultValue?: boolean,
);
`,paraId:1,tocIndex:3},{value:"\u53C2\u6570",paraId:2,tocIndex:4},{value:"\u8BF4\u660E",paraId:2,tocIndex:4},{value:"\u7C7B\u578B",paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"defaultValue",paraId:2,tocIndex:4},{value:"\u53EF\u9009\u9879\uFF0C\u4F20\u5165\u9ED8\u8BA4\u7684\u72B6\u6001\u503C",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"\u53C2\u6570",paraId:3,tocIndex:5},{value:"\u8BF4\u660E",paraId:3,tocIndex:5},{value:"\u7C7B\u578B",paraId:3,tocIndex:5},{value:"state",paraId:3,tocIndex:5},{value:"\u72B6\u6001\u503C",paraId:3,tocIndex:5},{value:"boolean",paraId:3,tocIndex:5},{value:"actions",paraId:3,tocIndex:5},{value:"\u64CD\u4F5C\u96C6\u5408",paraId:3,tocIndex:5},{value:"Actions",paraId:3,tocIndex:5},{value:"\u53C2\u6570",paraId:4,tocIndex:6},{value:"\u8BF4\u660E",paraId:4,tocIndex:6},{value:"\u7C7B\u578B",paraId:4,tocIndex:6},{value:"set",paraId:4,tocIndex:6},{value:"\u8BBE\u7F6E state",paraId:4,tocIndex:6},{value:"(value: boolean) => void",paraId:4,tocIndex:6},{value:"setTrue",paraId:4,tocIndex:6},{value:"\u8BBE\u7F6E\u4E3A true",paraId:4,tocIndex:6},{value:"() => void",paraId:4,tocIndex:6},{value:"setFalse",paraId:4,tocIndex:6},{value:"\u8BBE\u7F6E\u4E3A false",paraId:4,tocIndex:6},{value:"() => void",paraId:4,tocIndex:6},{value:"toggle",paraId:4,tocIndex:6},{value:"\u5207\u6362 state",paraId:4,tocIndex:6},{value:"() => void",paraId:4,tocIndex:6}]},35399:function(p,t,e){e.r(t),e.d(t,{texts:function(){return s}});var r=e(78515);const s=[{value:"\u7528\u4E8E\u5728\u4E24\u4E2A\u72B6\u6001\u503C\u95F4\u5207\u6362\u7684 Hook\u3002",paraId:0,tocIndex:0},{value:`const [state, { toggle, set, setLeft, setRight }] = useToggle(defaultValue?: boolean);

const [state, { toggle, set, setLeft, setRight }] = useToggle<T>(defaultValue: T);

const [state, { toggle, set, setLeft, setRight }] = useToggle<T, U>(defaultValue: T, reverseValue: U);
`,paraId:1,tocIndex:4},{value:"\u53C2\u6570",paraId:2,tocIndex:5},{value:"\u8BF4\u660E",paraId:2,tocIndex:5},{value:"\u7C7B\u578B",paraId:2,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:5},{value:"defaultValue",paraId:2,tocIndex:5},{value:"\u53EF\u9009\u9879\uFF0C\u4F20\u5165\u9ED8\u8BA4\u7684\u72B6\u6001\u503C",paraId:2,tocIndex:5},{value:"T",paraId:2,tocIndex:5},{value:"false",paraId:2,tocIndex:5},{value:"reverseValue",paraId:2,tocIndex:5},{value:"\u53EF\u9009\u9879\uFF0C\u4F20\u5165\u53D6\u53CD\u7684\u72B6\u6001\u503C",paraId:2,tocIndex:5},{value:"U",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"\u53C2\u6570",paraId:3,tocIndex:6},{value:"\u8BF4\u660E",paraId:3,tocIndex:6},{value:"\u7C7B\u578B",paraId:3,tocIndex:6},{value:"state",paraId:3,tocIndex:6},{value:"\u72B6\u6001\u503C",paraId:3,tocIndex:6},{value:"-",paraId:3,tocIndex:6},{value:"actions",paraId:3,tocIndex:6},{value:"\u64CD\u4F5C\u96C6\u5408",paraId:3,tocIndex:6},{value:"Actions",paraId:3,tocIndex:6},{value:"\u53C2\u6570",paraId:4,tocIndex:7},{value:"\u8BF4\u660E",paraId:4,tocIndex:7},{value:"\u7C7B\u578B",paraId:4,tocIndex:7},{value:"toggle",paraId:4,tocIndex:7},{value:"\u5207\u6362 state",paraId:4,tocIndex:7},{value:"() => void",paraId:4,tocIndex:7},{value:"set",paraId:4,tocIndex:7},{value:"\u4FEE\u6539 state",paraId:4,tocIndex:7},{value:"(state: T | U) => void",paraId:4,tocIndex:7},{value:"setLeft",paraId:4,tocIndex:7},{value:"\u8BBE\u7F6E\u4E3A defaultValue",paraId:4,tocIndex:7},{value:"() => void",paraId:4,tocIndex:7},{value:"setRight",paraId:4,tocIndex:7},{value:"\u5982\u679C\u4F20\u5165\u4E86 reverseValue, \u5219\u8BBE\u7F6E\u4E3A reverseValue\u3002 \u5426\u5219\u8BBE\u7F6E\u4E3A defaultValue \u7684\u53CD\u503C",paraId:4,tocIndex:7},{value:"() => void",paraId:4,tocIndex:7}]},30581:function(p,t){t.Z=`import React from 'react';
import { useToggle } from '@cy-group/react-use';

export default () => {
  const [state, { toggle, setLeft, setRight }] = useToggle();

  return (
    <div>
      <p>Effects\uFF1A{\`\${state}\`}</p>
      <p>
        <button type="button" onClick={toggle}>
          Toggle
        </button>
        <button type="button" onClick={setLeft} style={{ margin: '0 8px' }}>
          Toggle False
        </button>
        <button type="button" onClick={setRight}>
          Toggle True
        </button>
      </p>
    </div>
  );
};
`},65956:function(p,t){t.Z=`import React from 'react';
import { useToggle } from '@cy-group/react-use';

export default () => {
  const [state, { toggle, set, setLeft, setRight }] = useToggle('Hello', 'World');

  return (
    <div>
      <p>Effects\uFF1A{state}</p>
      <p>
        <button type="button" onClick={toggle}>
          Toggle
        </button>
        <button type="button" onClick={() => set('Hello')} style={{ margin: '0 8px' }}>
          Set Hello
        </button>
        <button type="button" onClick={() => set('World')}>
          Set World
        </button>
        <button type="button" onClick={setLeft} style={{ margin: '0 8px' }}>
          Set Left
        </button>
        <button type="button" onClick={setRight}>
          Set Right
        </button>
      </p>
    </div>
  );
};
`}}]);
