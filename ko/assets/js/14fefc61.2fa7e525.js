(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{154:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return b}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var n=o.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},p=function(e){var n=s(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=t,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return r?o.a.createElement(b,c(c({ref:n},u),{},{components:r})):o.a.createElement(b,c({ref:n},u))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},76:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return l})),r.d(n,"default",(function(){return s}));var t=r(3),o=r(8),a=(r(0),r(154)),i={title:"waitForAll(dependencies)",sidebar_label:"waitForAll()"},c={unversionedId:"api-reference/utils/waitForAll",id:"api-reference/utils/waitForAll",isDocsHomePage:!1,title:"waitForAll(dependencies)",description:"\uc5ec\ub7ec \ube44\ub3d9\uae30 \uc885\uc18d\uc131\uc744 \ub3d9\uc2dc\uc5d0 \ud3c9\uac00\ud560 \uc218 \uc788\ub294 \ub3d9\uc2dc\uc131(concurrency) helper\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/utils/waitForAll.md",slug:"/api-reference/utils/waitForAll",permalink:"/ko/docs/api-reference/utils/waitForAll",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/utils/waitForAll.md",version:"current",sidebar_label:"waitForAll()",sidebar:"docs",previous:{title:"noWait(state)",permalink:"/ko/docs/api-reference/utils/noWait"},next:{title:"waitForAllSettled(dependencies)",permalink:"/ko/docs/api-reference/utils/waitForAllSettled"}},l=[{value:"Examples",id:"examples",children:[]}],u={toc:l};function s(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\uc5ec\ub7ec \ube44\ub3d9\uae30 \uc885\uc18d\uc131\uc744 \ub3d9\uc2dc\uc5d0 \ud3c9\uac00\ud560 \uc218 \uc788\ub294 \ub3d9\uc2dc\uc131(concurrency) helper\uc785\ub2c8\ub2e4."),Object(a.b)("p",null,"\uc885\uc18d\uc131\ub4e4\uc740 \ud29c\ud50c \ubc30\uc5f4 \ub610\ub294 \uac1d\uccb4\uc5d0 \uba85\uba85\ub41c \uc885\uc18d\uc131\uc73c\ub85c \uc81c\uacf5\ub429\ub2c8\ub2e4."),Object(a.b)("hr",null),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"function waitForAll(dependencies: Array<RecoilValue<>>):\n  RecoilValueReadOnly<UnwrappedArray>\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"function waitForAll(dependencies: {[string]: RecoilValue<>}):\n  RecoilValueReadOnly<UnwrappedObject>\n")),Object(a.b)("hr",null),Object(a.b)("p",null,"\ub3d9\uc2dc\uc131 helper\ub294 selector\ub85c \uc81c\uacf5\ub418\uae30 \ub54c\ubb38\uc5d0, React \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c Recoil hook\uc73c\ub85c, Recoil selector\uc758 \uc885\uc18d\uc131\uc73c\ub85c, Recoil state\uac00 \uc0ac\uc6a9\ub418\ub294 \ubaa8\ub4e0 \uacf3\uc5d0\uc11c \uc0ac\uc6a9\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"function FriendsInfo() {\n  const [friendA, friendB] = useRecoilValue(\n    waitForAll([friendAState, friendBState])\n  );\n  return (\n    <div>\n      Friend A Name: {friendA.name}\n      Friend B Name: {friendB.name}\n    </div>\n  );\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"const friendsInfoQuery = selector({\n  key: 'FriendsInfoQuery',\n  get: ({get}) => {\n    const {friendList} = get(currentUserInfoQuery);\n    const friends = get(waitForAll(\n      friendList.map(friendID => userInfoQuery(friendID))\n    ));\n    return friends;\n  },\n});\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"const customerInfoQuery = selectorFamily({\n  key: 'CustomerInfoQuery',\n  get: id => ({get}) => {\n    const {info, invoices, payments} = get(waitForAll({\n      info: customerInfoQuery(id),\n      invoices: invoicesQuery(id),\n      payments: paymentsQuery(id),\n    }));\n\n    return {\n      name: info.name,\n      transactions: [\n        ...invoices,\n        ...payments,\n      ],\n    };\n  },\n});\n")))}s.isMDXComponent=!0}}]);