(this["webpackJsonpcat-fact"]=this["webpackJsonpcat-fact"]||[]).push([[0],{14:function(t,e,c){},36:function(t,e,c){"use strict";c.r(e);var n=c(0),s=c.n(n),a=c(7),r=c.n(a),i=(c(14),c(3)),o=c(8),j=(c(6),c(1));var d=function(t){var e,c=t.facts,n=t.start,s=t.size,a=c.slice(n,n+s),r=[],i=Object(o.a)(a);try{for(i.s();!(e=i.n()).done;){var d=e.value;r.push(Object(j.jsx)("li",{children:d},d))}}catch(u){i.e(u)}finally{i.f()}var l="";return l=c?"Showing Cat Facts:":"0 fact loaded",Object(j.jsxs)("div",{id:"cat-facts",children:[Object(j.jsxs)("p",{className:"header",children:[l," "]}),Object(j.jsx)("ol",{className:"facts",children:r})]})},l=c(9),u=c.n(l);var b=function(){var t=Object(n.useState)(),e=Object(i.a)(t,2),c=e[0],s=e[1],a=Object(n.useState)(!1),r=Object(i.a)(a,2),o=r[0],l=r[1],b=Object(n.useState)(0),h=Object(i.a)(b,2),O=h[0],f=h[1],x=Object(n.useState)(5),v=Object(i.a)(x,2),p=v[0],g=v[1],m=Object(n.useState)(""),F=Object(i.a)(m,2),C=F[0],N=F[1],S="Show Facts ".concat(O+1,"-").concat(O+p);return c?Object(j.jsxs)("div",{id:"app",children:[Object(j.jsx)("div",{className:"fact-content",children:Object(j.jsx)(d,{facts:c,start:O,size:p})}),Object(j.jsxs)("select",{onChange:function(t){return g(parseInt(t.target.value))},children:[Object(j.jsx)("option",{value:"5",children:"5"}),Object(j.jsx)("option",{value:"10",children:"10"})]}),Object(j.jsxs)("div",{className:"factAdjust",children:[Object(j.jsx)("button",{disabled:O-p<0,onClick:function(){return f(O-p)},children:"Previous <"}),Object(j.jsxs)("span",{className:"fact-range",children:[" ",S," "]}),Object(j.jsx)("button",{disabled:O+2*p>c.length,onClick:function(){return f(O+p)},children:"> Next"})]}),Object(j.jsx)("p",{className:"errorMsg",children:C})]}):Object(j.jsxs)("div",{className:"notLoaded",children:["0 Fact Loaded",Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:"isLoading",children:o?Object(j.jsx)(u.a,{type:"Circles",color:"#00BFFF",height:30,width:30}):Object(j.jsx)("button",{onClick:function(){l(!0),fetch("/session",{method:"GET"}).catch((function(){return Promise.reject({error:"network-error"})})).then((function(t){return t.ok?t.json():t.json().then((function(t){return Promise.reject(t)}))})).then((function(t){s(t),l(!1)})).catch((function(t){N(t)}))},children:"Load Facts"})})]})},h=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(e){var c=e.getCLS,n=e.getFID,s=e.getFCP,a=e.getLCP,r=e.getTTFB;c(t),n(t),s(t),a(t),r(t)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),h()},6:function(t,e,c){}},[[36,1,2]]]);
//# sourceMappingURL=main.380ddf4d.chunk.js.map