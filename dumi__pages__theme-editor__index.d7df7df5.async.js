"use strict";(self.webpackChunkfocus_pro=self.webpackChunkfocus_pro||[]).push([[797],{67358:function(p,r,e){e.r(r);var c=e(28152),n=e.n(c),D=e(40384),M=e(38751),v=e(66609),E=e(86865),P=e(7244),O=e(28136),g=e(54923),C=e(52719),a=e(50959),t=e(11527),d="antd-design-v5-theme-editor-theme",T=function(){var f=D.ZP.useMessage(),l=n()(f,2),A=l[0],S=l[1],I=(0,a.useState)("zh-CN"),u=n()(I,2),s=u[0],R=u[1],U=(0,a.useState)(!1),h=n()(U,2),B=h[0],j=h[1],L=(0,a.useState)({}),m=n()(L,2),o=m[0],i=m[1];(0,a.useEffect)(function(){var _=localStorage.getItem(d);_&&i(function(){return JSON.parse(_)})},[]);var K=function(){console.log(o),localStorage.setItem(d,JSON.stringify(o)),A.success("\u4FDD\u5B58\u6210\u529F")};return(0,t.jsxs)(t.Fragment,{children:[S,(0,t.jsx)(M.ZP,{locale:s==="zh-CN"?C.Z:void 0,theme:{hashed:!0,algorithm:B?v.Z.darkAlgorithm:void 0},children:(0,t.jsx)(P.Z,{theme:{name:"Antd Theme Editor",key:"test",config:o},onThemeChange:function(W){return i(W.config)},locale:s==="zh-CN"?O.Z:g.Z,advanced:!0,style:{height:"calc(100vh - 64px)"},actions:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(E.ZP,{type:"text",icon:s==="zh-CN"?"\u4E2D":"EN",onClick:function(){return R(s==="en-US"?"zh-CN":"en-US")},style:{marginRight:8}}),(0,t.jsx)(E.ZP,{type:"primary",onClick:K,children:"\u4FDD\u5B58"})]})})})]})};r.default=T}}]);
