(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{74:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(96)),i={id:"request_signatures",title:"Request Signatures"},s={unversionedId:"features/request_signatures",id:"version-6.1.x/features/request_signatures",isDocsHomePage:!1,title:"Request Signatures",description:"If signature_key is defined, proxied requests will be signed with the",source:"@site/versioned_docs/version-6.1.x/features/request_signatures.md",slug:"/features/request_signatures",permalink:"/oauth2-proxy/docs/6.1.x/features/request_signatures",editUrl:"https://github.com/oauth2-proxy/oauth2-proxy/edit/master/docs/versioned_docs/version-6.1.x/features/request_signatures.md",version:"6.1.x",sidebar:"version-6.1.x/docs",previous:{title:"Endpoints",permalink:"/oauth2-proxy/docs/6.1.x/features/endpoints"},next:{title:"Security",permalink:"/oauth2-proxy/docs/6.1.x/community/security"}},u=[],c={rightToc:u};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If ",Object(o.b)("inlineCode",{parentName:"p"},"signature_key")," is defined, proxied requests will be signed with the\n",Object(o.b)("inlineCode",{parentName:"p"},"GAP-Signature")," header, which is a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Hash-based_message_authentication_code"}),"Hash-based Message Authentication Code\n(HMAC)"),"\nof selected request information and the request body ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/oauth2-proxy/oauth2-proxy/blob/master/oauthproxy.go"}),"see ",Object(o.b)("inlineCode",{parentName:"a"},"SIGNATURE_HEADERS"),"\nin ",Object(o.b)("inlineCode",{parentName:"a"},"oauthproxy.go")),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"signature_key")," must be of the form ",Object(o.b)("inlineCode",{parentName:"p"},"algorithm:secretkey"),", (ie: ",Object(o.b)("inlineCode",{parentName:"p"},'signature_key = "sha1:secret0"'),")"),Object(o.b)("p",null,"For more information about HMAC request signature validation, read the\nfollowing:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html"}),"Amazon Web Services: Signing and Authenticating REST\nRequests")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"http://rc3.org/2011/12/02/using-hmac-to-authenticate-web-service-requests/"}),"rc3.org: Using HMAC to authenticate Web service\nrequests"))))}p.isMDXComponent=!0},96:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=p(r),d=n,f=l["".concat(i,".").concat(d)]||l[d]||b[d]||o;return r?a.a.createElement(f,s(s({ref:t},c),{},{components:r})):a.a.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);