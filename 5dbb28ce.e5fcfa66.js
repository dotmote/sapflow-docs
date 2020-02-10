(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{102:function(e,o,r){"use strict";r.r(o),r.d(o,"frontMatter",(function(){return i})),r.d(o,"metadata",(function(){return c})),r.d(o,"rightToc",(function(){return d})),r.d(o,"default",(function(){return s}));var t=r(1),a=r(6),n=(r(0),r(123)),i={id:"software",title:"Software",sidebar_label:"Software"},c={id:"software",title:"Software",description:"## Microcontroller Firmware",source:"@site/docs/software.md",permalink:"/docs/software",editUrl:"https://github.com/dotmote/sapflow-docs/docs/software.md",sidebar_label:"Software",sidebar:"someSidebar",previous:{title:"Hardware",permalink:"/docs/hardware"},next:{title:"Data Visualization",permalink:"/docs/data-visualization"}},d=[{value:"Microcontroller Firmware",id:"microcontroller-firmware",children:[]},{value:"Edge Compute Node",id:"edge-compute-node",children:[]}],l={rightToc:d};function s(e){var o=e.components,r=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(t.a)({},l,r,{components:o,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"microcontroller-firmware"},"Microcontroller Firmware"),Object(n.b)("p",null,"You'll need software running on your microcontroller to read data from the connected sapflow gauge. See ",Object(n.b)("a",Object(t.a)({parentName:"p"},{href:"/software/microcontroller/d32_pro"}),"here")," for the Arduino code we used for the D32 Pro."),Object(n.b)("h2",{id:"edge-compute-node"},"Edge Compute Node"),Object(n.b)("p",null,"If you're using microcontrollers with WiFi connectivity, it's very convenient to have all of the data streaming into a single place. We like using a Raspberry Pi as an ",Object(n.b)("a",Object(t.a)({parentName:"p"},{href:"https://mosquitto.org/"}),"MQTT")," broker, collecting data points from all of the networked sensor devices. See ",Object(n.b)("a",Object(t.a)({parentName:"p"},{href:"/software/edge_compute_node/raspberry_pi"}),"here")," for more info."))}s.isMDXComponent=!0}}]);