"use strict";(self.webpackChunkcy_hooks_docs=self.webpackChunkcy_hooks_docs||[]).push([[390],{68537:function(p,n,e){var r;e.r(n),e.d(n,{demos:function(){return i}});var l=e(29008),s=e.n(l),m=e(70958),v=e.n(m),a=e(92379),f=e(78515),I=e(57254),i={"packages-hooks-src-use-toggle-demo-demo1":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,19239))})),asset:{type:"BLOCK",id:"packages-hooks-src-use-toggle-demo-demo1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(30581).Z},react:{type:"NPM",value:"18.3.1"},"@cy-group/react-use":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",description:"\u9ED8\u8BA4\u4E3A boolean \u5207\u6362\uFF0C\u57FA\u7840\u7528\u6CD5\u4E0E useBoolean \u4E00\u81F4\u3002",title:"\u57FA\u7840\u7528\u6CD5"},context:{react:r||(r=e.t(a,2)),"@cy-group/react-use":I},renderOpts:{compile:function(){var d=v()(s()().mark(function c(){var u,g=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(609).then(e.bind(e,31609));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,g));case 3:case"end":return t.stop()}},c)}));function o(){return d.apply(this,arguments)}return o}()}},"packages-hooks-src-use-toggle-demo-demo2":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,82083))})),asset:{type:"BLOCK",id:"packages-hooks-src-use-toggle-demo-demo2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(65956).Z},react:{type:"NPM",value:"18.3.1"},"@cy-group/react-use":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",description:"\u63A5\u53D7\u4E24\u4E2A\u53EF\u9009\u53C2\u6570\uFF0C\u5728\u5B83\u4EEC\u4E4B\u95F4\u8FDB\u884C\u5207\u6362\u3002",title:"\u5728\u4EFB\u610F\u4E24\u4E2A\u503C\u4E4B\u95F4\u5207\u6362"},context:{react:r||(r=e.t(a,2)),"@cy-group/react-use":I},renderOpts:{compile:function(){var d=v()(s()().mark(function c(){var u,g=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(609).then(e.bind(e,31609));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,g));case 3:case"end":return t.stop()}},c)}));function o(){return d.apply(this,arguments)}return o}()}}}},57254:function(p,n,e){e.r(n),e.d(n,{useToggle:function(){return v}});var r=e(28633),l=e.n(r),s=e(92379);function m(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,f=arguments.length>1?arguments[1]:void 0,I=(0,s.useState)(a),i=l()(I,2),d=i[0],o=i[1],c=(0,s.useMemo)(function(){var u=f===void 0?!a:f,g=function(){return o(function(x){return x===a?u:a})},_=function(x){return o(x)},t=function(){return o(a)},y=function(){return o(u)};return{toggle:g,set:_,setLeft:t,setRight:y}},[]);return[d,c]}var v=m},35399:function(p,n,e){e.r(n),e.d(n,{texts:function(){return l}});var r=e(78515);const l=[{value:"\u7528\u4E8E\u5728\u4E24\u4E2A\u72B6\u6001\u503C\u95F4\u5207\u6362\u7684 Hook\u3002",paraId:0,tocIndex:0},{value:`const [state, { toggle, set, setLeft, setRight }] = useToggle(defaultValue?: boolean);

const [state, { toggle, set, setLeft, setRight }] = useToggle<T>(defaultValue: T);

const [state, { toggle, set, setLeft, setRight }] = useToggle<T, U>(defaultValue: T, reverseValue: U);
`,paraId:1,tocIndex:4},{value:"\u53C2\u6570",paraId:2,tocIndex:5},{value:"\u8BF4\u660E",paraId:2,tocIndex:5},{value:"\u7C7B\u578B",paraId:2,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:5},{value:"defaultValue",paraId:2,tocIndex:5},{value:"\u53EF\u9009\u9879\uFF0C\u4F20\u5165\u9ED8\u8BA4\u7684\u72B6\u6001\u503C",paraId:2,tocIndex:5},{value:"T",paraId:2,tocIndex:5},{value:"false",paraId:2,tocIndex:5},{value:"reverseValue",paraId:2,tocIndex:5},{value:"\u53EF\u9009\u9879\uFF0C\u4F20\u5165\u53D6\u53CD\u7684\u72B6\u6001\u503C",paraId:2,tocIndex:5},{value:"U",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"\u53C2\u6570",paraId:3,tocIndex:6},{value:"\u8BF4\u660E",paraId:3,tocIndex:6},{value:"\u7C7B\u578B",paraId:3,tocIndex:6},{value:"state",paraId:3,tocIndex:6},{value:"\u72B6\u6001\u503C",paraId:3,tocIndex:6},{value:"-",paraId:3,tocIndex:6},{value:"actions",paraId:3,tocIndex:6},{value:"\u64CD\u4F5C\u96C6\u5408",paraId:3,tocIndex:6},{value:"Actions",paraId:3,tocIndex:6},{value:"\u53C2\u6570",paraId:4,tocIndex:7},{value:"\u8BF4\u660E",paraId:4,tocIndex:7},{value:"\u7C7B\u578B",paraId:4,tocIndex:7},{value:"toggle",paraId:4,tocIndex:7},{value:"\u5207\u6362 state",paraId:4,tocIndex:7},{value:"() => void",paraId:4,tocIndex:7},{value:"set",paraId:4,tocIndex:7},{value:"\u4FEE\u6539 state",paraId:4,tocIndex:7},{value:"(state: T | U) => void",paraId:4,tocIndex:7},{value:"setLeft",paraId:4,tocIndex:7},{value:"\u8BBE\u7F6E\u4E3A defaultValue",paraId:4,tocIndex:7},{value:"() => void",paraId:4,tocIndex:7},{value:"setRight",paraId:4,tocIndex:7},{value:"\u5982\u679C\u4F20\u5165\u4E86 reverseValue, \u5219\u8BBE\u7F6E\u4E3A reverseValue\u3002 \u5426\u5219\u8BBE\u7F6E\u4E3A defaultValue \u7684\u53CD\u503C",paraId:4,tocIndex:7},{value:"() => void",paraId:4,tocIndex:7}]},30581:function(p,n){n.Z=`import React from 'react';
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
`},65956:function(p,n){n.Z=`import React from 'react';
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
