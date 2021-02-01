(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(96)),i={id:"installation",title:"Installation",slug:"/"},c={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"1.  Choose how to deploy:",source:"@site/docs/installation.md",slug:"/",permalink:"/oauth2-proxy/docs/next/",editUrl:"https://github.com/oauth2-proxy/oauth2-proxy/edit/master/docs/docs/installation.md",version:"current",sidebar:"docs",next:{title:"Behaviour",permalink:"/oauth2-proxy/docs/next/behaviour"}},p=[],l={rightToc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Choose how to deploy:"),Object(o.b)("p",{parentName:"li"},"a. Download ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/oauth2-proxy/oauth2-proxy/releases"}),"Prebuilt Binary")," (current release is ",Object(o.b)("inlineCode",{parentName:"p"},"v7.0.0"),")"),Object(o.b)("p",{parentName:"li"},"b. Build with ",Object(o.b)("inlineCode",{parentName:"p"},"$ go get github.com/oauth2-proxy/oauth2-proxy/v7")," which will put the binary in ",Object(o.b)("inlineCode",{parentName:"p"},"$GOPATH/bin")),Object(o.b)("p",{parentName:"li"},"c. Using the prebuilt docker image ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://quay.io/oauth2-proxy/oauth2-proxy"}),"quay.io/oauth2-proxy/oauth2-proxy")," (AMD64, ARMv6 and ARM64 tags available)"))),Object(o.b)("p",null,"Prebuilt binaries can be validated by extracting the file and verifying it against the ",Object(o.b)("inlineCode",{parentName:"p"},"sha256sum.txt")," checksum file provided for each release starting with version ",Object(o.b)("inlineCode",{parentName:"p"},"v3.0.0"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ sha256sum -c sha256sum.txt 2>&1 | grep OK\noauth2-proxy-x.y.z.linux-amd64: OK\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/oauth2-proxy/docs/next/configuration/oauth_provider"}),"Select a Provider and Register an OAuth Application with a Provider")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/oauth2-proxy/docs/next/configuration/overview"}),"Configure OAuth2 Proxy using config file, command line options, or environment variables")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/oauth2-proxy/docs/next/configuration/tls"}),"Configure SSL or Deploy behind a SSL endpoint")," (example provided for Nginx)")))}u.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||s[d]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);