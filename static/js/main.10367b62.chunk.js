(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,function(e,t,r){e.exports={container:"Message_container__eWnXW",first:"Message_first__1Sjli",avatar:"Message_avatar__3DPlV",second:"Message_second__3AmWY",a:"Message_a__2RSFl",name:"Message_name__3HQCm",message:"Message_message__1sA_c",time:"Message_time__3Ngk8"}},,,function(e,t,r){e.exports={container:"Affair_container__2JgfC",low:"Affair_low__v0kwd",middle:"Affair_middle__1plFM",high:"Affair_high__1h6U_"}},,,function(e,t,r){e.exports={container:"Affairs_container__2HWkw"}},function(e,t,r){e.exports={error:"Greeting_error__2uGcq",errorWord:"Greeting_errorWord__3EPHz"}},,function(e,t,r){e.exports={App:"App_App__Bgxzr"}},,,,,,function(e,t,r){},,function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),i=r(10),c=r.n(i),s=(r(17),r(11)),o=r.n(s),l=r(2),j=r.n(l),d=r(0);var u=function(e){return Object(d.jsxs)("div",{className:j.a.container,children:[Object(d.jsx)("div",{className:j.a.first,children:Object(d.jsx)("img",{className:j.a.avatar,src:e.avatar,alt:"avatar"})}),Object(d.jsxs)("div",{className:j.a.second,children:[Object(d.jsx)("div",{className:j.a.a}),Object(d.jsx)("div",{className:j.a.name,children:e.name}),Object(d.jsx)("div",{className:j.a.message,children:e.message}),Object(d.jsx)("span",{className:j.a.time,children:e.time})]})]})},b="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",m="Some Name",h="some text",f="22:00";var O=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)(u,{avatar:b,name:m,message:h,time:f}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},_=r(3),x=r(5),v=r.n(x);var g=function(e){return Object(d.jsxs)("div",{className:v.a.container,children:[Object(d.jsx)("div",{children:e.affair.name}),Object(d.jsx)("div",{className:"".concat("low"===e.affair.priority?v.a.low:"middle"===e.affair.priority?v.a.middle:v.a.high),children:e.affair.priority}),Object(d.jsx)("button",{onClick:function(){return e.deleteAffairCallback(e.affair._id)},children:"X"})]})},p=r(8),k=r.n(p);var w=function(e){var t=e.data.map((function(t){return Object(d.jsx)(g,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:k.a.container,children:t}),Object(d.jsxs)("div",{className:k.a.buttonsLine,children:[Object(d.jsx)("button",{onClick:function(){return e.setFilter("all")},children:"All"}),Object(d.jsx)("button",{onClick:function(){return e.setFilter("high")},children:"High"}),Object(d.jsx)("button",{onClick:function(){return e.setFilter("middle")},children:"Middle"}),Object(d.jsx)("button",{onClick:function(){return e.setFilter("low")},children:"Low"})]})]})},N=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var A=function(){var e=Object(a.useState)(N),t=Object(_.a)(e,2),r=t[0],n=t[1],i=Object(a.useState)("all"),c=Object(_.a)(i,2),s=c[0],o=c[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(r,s);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(w,{data:l,setFilter:o,deleteAffairCallback:function(e){return n(function(e,t){return e.filter((function(e){return e._id!==t}))}(r,e))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},C=r(12),S=r(21),y=r(9),M=r.n(y),W=function(e){var t=e.name,r=e.setNameCallback,a=e.addUser,n=e.error,i=e.totalUsers,c=n&&M.a.error,s=M.a.errorWord;return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:t,onChange:r,className:c}),Object(d.jsx)("span",{className:s,children:n}),Object(d.jsx)("button",{onClick:a,children:"add"}),Object(d.jsx)("span",{children:i})]})},F=function(e){var t=e.users,r=e.addUserCallback,n=Object(a.useState)(""),i=Object(_.a)(n,2),c=i[0],s=i[1],o=Object(a.useState)(""),l=Object(_.a)(o,2),j=l[0],u=l[1],b=c.trim(),m=t.length;return Object(d.jsx)(W,{name:c,setNameCallback:function(e){var t=e.currentTarget.value;s(t),t.trim()?u(""):u("Incorect name")},addUser:function(){alert("Hello ".concat(b,"!")),r(b),s("")},error:j,totalUsers:m})};var U=function(){var e=Object(a.useState)([]),t=Object(_.a)(e,2),r=t[0],n=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(F,{users:r,addUserCallback:function(e){n([].concat(Object(C.a)(r),[{_id:Object(S.a)(),name:e}]))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var H=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(O,{}),Object(d.jsx)(A,{}),Object(d.jsx)(U,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(H,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[19,1,2]]]);
//# sourceMappingURL=main.10367b62.chunk.js.map