(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{103:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var o=r(1),n=r(6),a=(r(0),r(124)),c={id:"software",title:"Software",sidebar_label:"Software"},i={id:"software",title:"Software",description:"# Microcontroller Firmware",source:"@site/docs/software.md",permalink:"/sapflow-docs/docs/software",editUrl:"https://github.com/dotmote/sapflow-docs/docs/software.md",sidebar_label:"Software",sidebar:"someSidebar",previous:{title:"Hardware",permalink:"/sapflow-docs/docs/hardware"},next:{title:"Data Visualization",permalink:"/sapflow-docs/docs/data-visualization"}},l=[],p={rightToc:l};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"microcontroller-firmware"},"Microcontroller Firmware"),Object(a.b)("p",null,"You'll need software running on your microcontroller to read data from the connected sapflow gauge. See ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/dotmote/sapflow/tree/master/software/microcontroller/d32_pro"}),"here")," for the Arduino code we used for the D32 Pro."),Object(a.b)("h1",{id:"edge-compute-node"},"Edge Compute Node"),Object(a.b)("p",null,"If you're using microcontrollers with WiFi connectivity, it's very convenient to have all of the data streaming into a single place. We like using a Raspberry Pi as an ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://mosquitto.org/"}),"MQTT")," broker, collecting data points from all of the networked sensor devices. See ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/dotmote/sapflow/tree/master/software/edge_compute_node/raspberry_pi"}),"here")," for more info."))}s.isMDXComponent=!0},124:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},u=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(o.forwardRef)((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||a;return r?n.a.createElement(m,i({ref:t},p,{components:r})):n.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);