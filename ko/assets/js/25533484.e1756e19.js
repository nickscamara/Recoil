"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[1539],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,b=f["".concat(c,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(b,l(l({ref:t},u),{},{components:r})):n.createElement(b,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8678:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return u},toc:function(){return s},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),l=["components"],i={title:"Recoil 0.7.3"},c=void 0,p={permalink:"/ko/blog/2022/06/01/recoil-0.7.3-release",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/blog/blog/2022-06-01-recoil-0.7.3-release.md",source:"@site/blog/2022-06-01-recoil-0.7.3-release.md",title:"Recoil 0.7.3",description:"- Enable atoms and selectors to be used in family parameters (#1740)",date:"2022-06-01T00:00:00.000Z",formattedDate:"2022\ub144 6\uc6d4 1\uc77c",tags:[],readingTime:.245,truncated:!1,authors:[],prevItem:{title:"Recoil Relay 0.1.0",permalink:"/ko/blog/2022/06/02/recoil-relay-0.1.0-release"},nextItem:{title:"Recoil 0.7.2",permalink:"/ko/blog/2022/04/14/0.7.2-release"}},u={authorsImageUrls:[]},s=[],f={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Enable atoms and selectors to be used in ",(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/utils/selectorFamily#parameter-type"},"family parameters")," (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1740"},"#1740"),")"),(0,a.kt)("li",{parentName:"ul"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"parentStoreID_UNSTABLE")," to atom effects for the parent Recoil store the atom instance was cloned from.  This enables the ",(0,a.kt)("a",{parentName:"li",href:"/docs/recoil-relay/preloaded-queries#pre-fetch-graphql"},"pre-fetch pattern for GraphQL"),".  (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1744"},"#1744"),")"),(0,a.kt)("li",{parentName:"ul"},"Atom effects can initialize or set atoms to wrapped values (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1681"},"#1681"),")")))}m.isMDXComponent=!0}}]);