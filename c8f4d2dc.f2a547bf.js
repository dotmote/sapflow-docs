(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{113:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(1),a=r(6),i=(r(0),r(124)),o={id:"d32-pro-setup-checklist",title:"D32 Pro Setup Checklist",sidebar_label:"D32 Pro Setup Checklist"},c={id:"d32-pro-setup-checklist",title:"D32 Pro Setup Checklist",description:"# Setup",source:"@site/docs/d32-pro-setup-checklist.md",permalink:"/sapflow-docs/docs/d32-pro-setup-checklist",editUrl:"https://github.com/dotmote/sapflow-docs/docs/d32-pro-setup-checklist.md",sidebar_label:"D32 Pro Setup Checklist",sidebar:"someSidebar",previous:{title:"Raspberry Pi Setup Checklist",permalink:"/sapflow-docs/docs/raspberry-pi-setup-checklist"}},l=[],b={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"setup"},"Setup"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Follow Arduino-ESP32 installation instructions here: ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/espressif/arduino-esp32/blob/master/docs/arduino-ide/boards_manager.md"}),"https://github.com/espressif/arduino-esp32/blob/master/docs/arduino-ide/boards_manager.md")),Object(i.b)("li",{parentName:"ol"},"Install dependencies"),Object(i.b)("li",{parentName:"ol"},"Edit PubSubClient.h to increase its max packet size from 128 bytes to 512 bytes"),Object(i.b)("li",{parentName:"ol"},"Compile and upload to microcontroller")),Object(i.b)("h1",{id:"dependencies-install-on-arduino"},"Dependencies install on Arduino"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://arduinojson.org/"}),"ArduinoJSON")," by Benoit Blanchon, use Manage Libraries"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/wemos/LOLIN_EPD_Library"}),"LOLIN E-Paper Display Library")," (Optional - comment out applicable lines in firmware  if unused)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://pubsubclient.knolleary.net/"}),"PubSubClient")," by Nick O'Leary - NOTE: make sure to edit ",Object(i.b)("inlineCode",{parentName:"li"},"PubSubClient.h")," to increase its max packet size from 128 bytes to 512 bytes"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/Makuna/Rtc/wiki"}),"RTC by Makuna")," by Michael C. Miller, use Manage Libraries"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/wemos/WEMOS_SHT3x_Arduino_Library"}),"WEMOS SHT3x Arduino Library")," (Optional - comment out applicable lines in firmware if unused)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/lime-labs/HDC2080-Arduino"}),"HDC2080 Arduino Library")," by Lime Labs, use Manage Libraries"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/adafruit/Adafruit-GFX-Library"}),"Adafruit GFX")," use Manage Libraries in the Arduino IDE to install")),Object(i.b)("h1",{id:"note-re-rtc-library"},"Note re: RTC Library"),Object(i.b)("p",null,"Currently, the example code sets the time in the RTC module to match the local time of whatever machine you compiled the code in. As a result, ",Object(i.b)("inlineCode",{parentName:"p"},"rtcUnixTimestamp")," erroneously treats your local time as UTC. In order to adjust for this, you'll need to add an offset when analyzing the data later on. For example, if you're in Pacific Time, you'll need to add 8 hours to the ",Object(i.b)("inlineCode",{parentName:"p"},"rtcUnixTimestamp")," value to adjust for your timeszone."))}s.isMDXComponent=!0},124:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},u=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||i;return r?a.a.createElement(m,c({ref:t},b,{components:r})):a.a.createElement(m,c({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var b=2;b<i;b++)o[b]=r[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);