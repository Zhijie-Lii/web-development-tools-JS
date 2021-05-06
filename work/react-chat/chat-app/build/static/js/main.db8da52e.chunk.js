(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{12:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(6),o=n.n(s),i=(n(12),n(4)),a=n(3),u={DEFAULT:"Oh no! Something went wrong, please try again",USERNAME_REQUIRED:"Username is required",NETWORK_ERROR:"There was a problem reaching your network, please try again",LOGIN_REQUIRED:"You must be logged in to view this content",LOGIN_UNAUTHORIZED:"You are not permitted to view this content"},j=n(0),h=function(e){var t=e.user,n=e.username,r=e.onTheme,c=e.onLogout;return t.isLoggedIn?Object(j.jsx)("div",{className:"nav",children:Object(j.jsxs)("ul",{className:"nav-link",children:[Object(j.jsxs)("li",{children:['"Username": ',n]}),Object(j.jsx)("li",{children:Object(j.jsxs)("button",{className:!0,onClick:r,children:["Change Theme",Object(j.jsx)("img",{})]})}),Object(j.jsx)("li",{className:"logout",children:Object(j.jsx)("a",{href:"#logout",onClick:c,children:"Logout"})})]})}):null},d=function(e){var t=e.userList,n=e.messageList.map((function(e){return Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{className:"sender",children:e.sender},e.sender),Object(j.jsx)("span",{className:"time-stamp",children:e.timeStamp},e.timeStamp),Object(j.jsx)("br",{}),Object(j.jsx)("span",{className:"text",children:e.text},e.text)]})}));return Object(j.jsxs)("div",{className:"chat-page",children:["Group chat: Jennie, Deepika, ",t,Object(j.jsx)("ul",{children:n})]})},l=function(e){var t=e.username,n=e.theme,c=e.showError,s=Object(r.useState)([]),o=Object(a.a)(s,2),i=o[0],h=o[1],l=Object(r.useState)([]),m=Object(a.a)(l,2),b=m[0],O=m[1],f=Object(r.useState)(""),g=Object(a.a)(f,2),p=g[0],x=g[1],L=Object(r.useState)(""),v=Object(a.a)(L,2),E=v[0],P=v[1];return Object(r.useEffect)((function(){fetch("/api/userList",{method:"GET"}).catch((function(){return Promise.reject({error:"network-error"})})).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(e){return h(e)})).catch((function(e){return x(u[e.code||"DEFAULT"])})),fetch("/api/messageList",{method:"GET"}).catch((function(){return Promise.reject({error:"network-error"})})).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(e){O(e)})).catch((function(e){c(u[e.code||"DEFAULT"])}))}),[]),Object(j.jsxs)("ul",{className:n,children:[Object(j.jsx)(d,{userList:i,messageList:b}),Object(j.jsx)("p",{className:"error-msg",children:p}),Object(j.jsxs)("div",{className:"outgoing",children:[Object(j.jsx)("textarea",{rows:"5",cols:"30",onChange:function(e){return P(e.target.value)},value:E}),Object(j.jsx)("button",{onClick:function(){(function(e,t){return fetch("/api/messages",{method:"POST",headers:new Headers({"content-type":"application/json"}),body:JSON.stringify({sender:e,text:t,timeStamp:(new Date).toLocaleTimeString()})}).catch((function(){return Promise.reject({error:"network-error"})})).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))})(t,E).then((function(e){console.log(e),O(e),P("")})).catch((function(e){return c(u[e.code||"DEFAULT"])}))},children:"Send"})]})]})},m=function(e){var t=e.onLogin,n=Object(r.useState)(""),c=Object(a.a)(n,2),s=c[0],o=c[1],i=Object(r.useState)(!0),h=Object(a.a)(i,2),d=h[0],l=h[1],m=Object(r.useState)(!1),b=Object(a.a)(m,2),O=b[0],f=b[1],g=Object(r.useState)(""),p=Object(a.a)(g,2),x=p[0],L=p[1];return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("h1",{children:"Chat-app"}),x&&Object(j.jsx)("div",{class:"status",children:x}),Object(j.jsxs)("label",{children:["Username:",Object(j.jsx)("input",{disabled:O,onChange:function(e){o(e.target.value),l(!e.target.value)},value:s})]}),Object(j.jsx)("button",{onClick:function(){f(!0),function(e){var t=e.username;return fetch("/api/session",{method:"POST",headers:new Headers({"content-type":"application/json"}),body:JSON.stringify({username:t})}).catch((function(){return Promise.reject({error:"network-error"})})).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))}({username:s}).then((function(e){L(""),f(!1),t({username:s,info:e.info})})).catch((function(e){L(u[e.code||"DEFAULT"]),f(!1)}))},disabled:d||O,children:O?"...":"Login"})]})},b=n(7),O=n.n(b);n(34);var f=function(){var e=Object(r.useState)({isLoggedIn:!1,isPending:!0}),t=Object(a.a)(e,2),n=t[0],c=t[1];function s(){var e="light"===n.theme?"dark":"light";c(Object(i.a)(Object(i.a)({},n),{},{theme:e}))}var o,d=Object(r.useState)(""),b=Object(a.a)(d,2),f=b[0],g=b[1];return Object(r.useEffect)((function(){fetch("/api/session",{method:"GET"}).catch((function(){return Promise.reject({error:"network-error"})})).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(e){c({isLoggedIn:!0,isPending:!1,username:e.username,theme:"light",lastActive:Date.now()})})).catch((function(){c({isLoggedIn:!1,isPending:!1})}))}),[]),n.isPending?Object(j.jsx)("div",{className:"app",children:Object(j.jsx)(O.a,{type:"Circles",color:"#00BFFF",height:20,width:20})}):(o=n.isLoggedIn?Object(j.jsx)(l,{username:n.username,showError:g,theme:n.theme,onTheme:s}):Object(j.jsx)("div",{children:Object(j.jsx)(m,{onLogin:function(e){var t=e.username,n=e.info;c({isLoggedIn:!0,isPending:!1,username:t,info:n})}})}),Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(h,{user:n,onTheme:s,username:n.username,onLogout:function(){c(Object(i.a)(Object(i.a)({},n),{},{isPending:!0})),fetch("/api/session",{method:"DELETE"}).catch((function(){return Promise.reject({error:"network-error"})})).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(){c({isLoggedIn:!1,isPending:!1})})).catch((function(e){g(u[e.code||"DEFAULT"]),c(Object(i.a)(Object(i.a)({},n),{},{isPending:!1}))}))}}),o,Object(j.jsx)("p",{className:"error",children:f})]}))},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),g()}},[[35,1,2]]]);
//# sourceMappingURL=main.db8da52e.chunk.js.map