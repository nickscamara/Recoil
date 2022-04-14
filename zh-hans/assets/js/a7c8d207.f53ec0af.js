"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[6988],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8070:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={title:"useRecoilState(state)",sidebar_label:"useRecoilState()"},l=void 0,s={unversionedId:"api-reference/core/useRecoilState",id:"api-reference/core/useRecoilState",title:"useRecoilState(state)",description:"\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u7b2c\u4e00\u4e2a\u5143\u7d20\u662f state \u7684\u503c\uff0c\u7b2c\u4e8c\u4e2a\u5143\u7d20\u662f\u4e00\u4e2a setter \u51fd\u6570\uff0c\u8c03\u7528\u8be5\u51fd\u6570\u65f6\u4f1a\u66f4\u65b0\u4e3a\u7ed9\u5b9a state \u7684\u503c\u3002",source:"@site/i18n/zh-hans/docusaurus-plugin-content-docs/current/api-reference/core/useRecoilState.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/useRecoilState",permalink:"/zh-hans/docs/api-reference/core/useRecoilState",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/zh-hans/docusaurus-plugin-content-docs/current/api-reference/core/useRecoilState.md",tags:[],version:"current",frontMatter:{title:"useRecoilState(state)",sidebar_label:"useRecoilState()"},sidebar:"docs",previous:{title:"Loadable",permalink:"/zh-hans/docs/api-reference/core/Loadable"},next:{title:"useRecoilValue()",permalink:"/zh-hans/docs/api-reference/core/useRecoilValue"}},u=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[],level:3}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u7b2c\u4e00\u4e2a\u5143\u7d20\u662f state \u7684\u503c\uff0c\u7b2c\u4e8c\u4e2a\u5143\u7d20\u662f\u4e00\u4e2a setter \u51fd\u6570\uff0c\u8c03\u7528\u8be5\u51fd\u6570\u65f6\u4f1a\u66f4\u65b0\u4e3a\u7ed9\u5b9a state \u7684\u503c\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528\u6b64 hook \u4f1a\u4f7f\u7ec4\u4ef6\u9690\u5f0f\u5730\u8ba2\u9605\u7ed9\u5b9a\u7684 state\u3002"),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function useRecoilState<T>(state: RecoilState<T>): [T, SetterOrUpdater<T>];\n\ntype SetterOrUpdater<T> = (T | (T => T)) => void;\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"state"),": \u4e00\u4e2a ",(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/atom"},(0,o.kt)("inlineCode",{parentName:"a"},"atom"))," \u6216\u4e00\u4e2a ",(0,o.kt)("em",{parentName:"li"},"\u53ef\u5199")," \u7684 ",(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/selector"},(0,o.kt)("inlineCode",{parentName:"a"},"selector")),"\u3002\u53ef\u5199\u7684 selector \u5728\u5176\u5b9a\u4e49\u7684\u540c\u65f6\u5177\u6709 ",(0,o.kt)("inlineCode",{parentName:"li"},"get")," \u548c ",(0,o.kt)("inlineCode",{parentName:"li"},"set")," \u51fd\u6570\uff0c\u800c\u53ea\u8bfb selector \u53ea\u6709\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"li"},"get"),"\u3002")),(0,o.kt)("p",null,"\u672c API \u548c React \u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#usestate"},(0,o.kt)("inlineCode",{parentName:"a"},"useState()"))," hook \u7c7b\u4f3c\uff0c\u533a\u522b\u5728\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"useRecoilState")," \u7684\u53c2\u6570\u4f7f\u7528 Recoil state \u4ee3\u66ff\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"useState()")," \u7684\u9ed8\u8ba4\u503c\u3002\u5b83\u8fd4\u56de\u7531 state \u7684\u5f53\u524d\u503c\u548c setter \u51fd\u6570\u7ec4\u6210\u7684\u5143\u7ec4\u3002Setter \u51fd\u6570\u7684\u53c2\u6570\u53ef\u4ee5\u662f\u65b0\u503c\uff0c\u4e5f\u53ef\u4ee5\u662f\u4e00\u4e2a\u4ee5\u4e4b\u524d\u7684\u503c\u4e3a\u53c2\u6570\u7684\u66f4\u65b0\u5668\u51fd\u6570\u3002"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\u5f53\u7ec4\u4ef6\u540c\u65f6\u9700\u8981\u8bfb\u5199\u72b6\u6001\u65f6\uff0c\u63a8\u8350\u4f7f\u7528\u8be5 hook\u3002"),(0,o.kt)("p",null,"\u5728 React \u7ec4\u4ef6\u4e2d\uff0c\u4f7f\u7528\u672c hook \u5c06\u4f1a\u8ba2\u9605\u8be5\u7ec4\u4ef6\uff0c\u5e76\u4e14\u5728 state \u66f4\u65b0\u65f6\u91cd\u65b0\u6e32\u67d3\u8be5\u7ec4\u4ef6\u3002\u8be5 hook \u5728 state \u5f02\u5e38\u6216\u8005\u5728\u5f02\u6b65\u89e3\u6790\u65f6\u629b\u51fa\u5f02\u5e38\u3002\u8be6\u7ec6\u53ef\u4ee5\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/asynchronous-data-queries"},"\u6307\u5357"),"\u3002"),(0,o.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import {atom, selector, useRecoilState} from 'recoil';\n\nconst tempFahrenheit = atom({\n  key: 'tempFahrenheit',\n  default: 32,\n});\n\nconst tempCelsius = selector({\n  key: 'tempCelsius',\n  get: ({get}) => ((get(tempFahrenheit) - 32) * 5) / 9,\n  set: ({set}, newValue) => set(tempFahrenheit, (newValue * 9) / 5 + 32),\n});\n\nfunction TempCelsius() {\n  const [tempF, setTempF] = useRecoilState(tempFahrenheit);\n  const [tempC, setTempC] = useRecoilState(tempCelsius);\n\n  const addTenCelsius = () => setTempC(tempC + 10);\n  const addTenFahrenheit = () => setTempF(tempF + 10);\n\n  return (\n    <div>\n      Temp (Celsius): {tempC}\n      <br />\n      Temp (Fahrenheit): {tempF}\n      <br />\n      <button onClick={addTenCelsius}>Add 10 Celsius</button>\n      <br />\n      <button onClick={addTenFahrenheit}>Add 10 Fahrenheit</button>\n    </div>\n  );\n}\n")))}m.isMDXComponent=!0}}]);