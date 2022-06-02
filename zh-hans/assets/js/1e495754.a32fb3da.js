"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[7535],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(t),f=a,y=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return t?n.createElement(y,l(l({ref:r},p),{},{components:t})):n.createElement(y,l({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2159:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return p},toc:function(){return u},default:function(){return f}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],i={title:"Recoil Relay 0.1.0"},c=void 0,s={permalink:"/zh-hans/blog/2022/06/02/recoil-relay-0.1.0-release",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/blog/blog/2022-06-02-recoil-relay-0.1.0-release.md",source:"@site/blog/2022-06-02-recoil-relay-0.1.0-release.md",title:"Recoil Relay 0.1.0",description:"Initial open source release for the recoil-relay library for using GraphQL!",date:"2022-06-02T00:00:00.000Z",formattedDate:"2022\u5e746\u67082\u65e5",tags:[],readingTime:.72,truncated:!1,authors:[],nextItem:{title:"Recoil 0.7.3",permalink:"/zh-hans/blog/2022/06/01/recoil-0.7.3-release"}},p={authorsImageUrls:[]},u=[{value:"Example",id:"example",children:[],level:3}],m={toc:u};function f(e){var r=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Initial open source release for the ",(0,o.kt)("a",{parentName:"p",href:"/docs/recoil-relay/introduction"},(0,o.kt)("inlineCode",{parentName:"a"},"recoil-relay"))," library for using ",(0,o.kt)("strong",{parentName:"p"},"GraphQL"),"!"),(0,o.kt)("p",null,"This library helps Recoil perform type safe and efficient queries using ",(0,o.kt)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL")," with the ",(0,o.kt)("a",{parentName:"p",href:"https://relay.dev"},"Relay")," library.  It provides selectors which can easily query with GraphQL.  The queries are synced with the Recoil data-flow graph so downstream selectors can derive state from them, they can depend on upstream Recoil state, and they are automatically subscribed to any changes in the graph from Relay.  Everything stays in sync automatically."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"A GraphQL query is as simple as defining a ",(0,o.kt)("a",{parentName:"p",href:"/docs/recoil-relay/graphql-selectors"},"GraphQL selector"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const userNameQuery = graphQLSelector({\n  key: 'UserName',\n  environment: myEnvironment,\n  query: graphql`\n    query UserQuery($id: ID!) {\n      user(id: $id) {\n        name\n      }\n    }\n  `,\n  variables: ({get}) => ({id: get(currentIDAtom)}),\n  mapResponse: data => data.user?.name,\n});\n")),(0,o.kt)("p",null,"Then use it like any other Recoil ",(0,o.kt)("a",{parentName:"p",href:"/docs/introduction/core-concepts#selectors"},"selector"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function MyComponent() {\n  const userName = useRecoilValue(userNameQuery);\n  return <span>{userName}</span>;\n}\n")))}f.isMDXComponent=!0}}]);