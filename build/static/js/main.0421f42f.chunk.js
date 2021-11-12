(this["webpackJsonpvoting-frontend"]=this["webpackJsonpvoting-frontend"]||[]).push([[0],{89:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n(18),s=n.n(c),i=n(10),j=n(31),o=n(53),u=n(54),l=n(5),d=n.n(l),b=n(8),p=n(26),O=n(17),h=n.n(O),x="/api/users",f=function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(x);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post(x,t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m={getAll:f,create:v},g=function(e){return{type:"CREATE_USER",data:e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_USERS":return t.data;case"CREATE_USER":return[].concat(Object(p.a)(e),[t.data]);default:return e}},w=function(e){window.localStorage.setItem("user",JSON.stringify(e))},k=function(){var e=window.localStorage.getItem("user");return JSON.parse(e)},L=function(){window.localStorage.removeItem("user")},E=function(e){return{type:"LOGIN_USER",data:e}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_USER":return t.data;case"LOGOUT_USER":return null;default:return e}},T=function(e,t){return function(){var n=Object(b.a)(d.a.mark((function n(a){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a({type:"CREATE_NOTIFICATION",data:{notification:e,type:t}}),r&&A(),r=setTimeout((function(){a({type:"CLEAR_NOTIFICATION"})}),5e3);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},A=function(){return{type:"CLEAR_NOTIFICATION"}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_NOTIFICATION":return t.data;case"CLEAR_NOTIFICATION":return null;default:return e}},C="/api/players",R=function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(C);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post(C,t,{headers:{Authorization:"bearer ".concat(k().token)}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_={getAll:R,create:S},U=function(){return function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.getAll();case 2:n=e.sent,t({type:"INIT_PLAYERS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},P=function(e){return{type:"CREATE_PLAYER",data:e}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_PLAYERS":return t.data;case"CREATE_PLAYER":return[].concat(Object(p.a)(e),[t.data]);default:return e}},G="/api/votes",D=function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(G);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post(G,t,{headers:{Authorization:"bearer ".concat(k().token)}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J={getAll:D,create:F},Y=function(e){return{type:"CREATE_VOTE",data:e}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_VOTES":return t.data;case"CREATE_VOTE":return[].concat(Object(p.a)(e),[t.data]);default:return e}},B=Object(j.combineReducers)({users:y,user:N,notification:I,players:V,votes:z}),H=Object(j.createStore)(B,Object(o.composeWithDevTools)(Object(j.applyMiddleware)(u.a))),W=n(7),M=n(13),q=n(93),K=n(94),Q=n(95),X=n.p+"static/media/futsalBanner.bfd82c18.jpg",Z=n(1),$=function(){return Object(Z.jsx)("div",{className:"container",children:"Oi Suomi on"})},ee=function(){var e=Object(i.c)((function(e){return e.notification}));if(!e)return null;var t={background:"lightgrey",padding:10,color:e.type?"green":"red"};return Object(Z.jsx)("div",{style:t,children:e.notification})},te=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("/api/billGates");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne={reset:te},re=function(){var e=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne.reset();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(Z.jsx)("div",{children:Object(Z.jsx)("button",{onClick:e,children:"Reset"})})},ae=n(96),ce=n(91),se=function(){var e=Object(i.c)((function(e){return e.players})),t=Object(i.b)(),n=Object(W.f)(),r=function(){var e=Object(b.a)(d.a.mark((function e(r){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),a={first:r.target.first.value,second:r.target.second.value,third:r.target.third.value},e.prev=2,e.next=5,J.create(a);case 5:c=e.sent,t(Y(c)),t(U()),t(T("Vote counted",!0)),n("/players"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),t(T("".concat(e.t0.response.data.error),!1));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(Z.jsxs)("div",{children:[Object(Z.jsx)("h2",{children:"Voting"}),Object(Z.jsx)(ae.a,{onSubmit:r,children:Object(Z.jsxs)(ae.a.Group,{children:[Object(Z.jsxs)("div",{className:"container",children:[Object(Z.jsx)(ae.a.Label,{children:"3 Points: "}),Object(Z.jsx)("select",{name:"first",children:e.map((function(e){return Object(Z.jsx)("option",{children:e.name},e.id)}))})]}),Object(Z.jsxs)("div",{className:"container",children:[Object(Z.jsx)(ae.a.Label,{children:"2 Points: "}),Object(Z.jsx)("select",{name:"second",children:e.map((function(e){return Object(Z.jsx)("option",{children:e.name},e.id)}))})]}),Object(Z.jsxs)("div",{className:"container",children:[Object(Z.jsx)(ae.a.Label,{children:"1 Point: "}),Object(Z.jsx)("select",{name:"third",children:e.map((function(e){return Object(Z.jsx)("option",{children:e.name},e.id)}))})]}),Object(Z.jsx)(ce.a,{variant:"primary",type:"submit",children:"Add"})]})})]})},ie=n(92),je=function(){var e=Object(i.c)((function(e){return e.votes})).sort((function(e,t){return e.user.name.localeCompare(t.user.name)}));return Object(Z.jsxs)("div",{className:"container",children:[Object(Z.jsx)("h2",{children:"Votes"}),Object(Z.jsx)(ie.a,{striped:!0,children:Object(Z.jsxs)("tbody",{children:[Object(Z.jsxs)("tr",{children:[Object(Z.jsx)("th",{children:"Username"}),Object(Z.jsx)("th",{children:"3 Points"}),Object(Z.jsx)("th",{children:"2 Points"}),Object(Z.jsx)("th",{children:"1 Point"})]}),e.map((function(e){return Object(Z.jsxs)("tr",{children:[Object(Z.jsx)("td",{children:e.user.name}),Object(Z.jsx)("td",{children:e.first}),Object(Z.jsx)("td",{children:e.second}),Object(Z.jsx)("td",{children:e.third})]},e.id)}))]})})]})},oe=function(){var e=Object(i.b)(),t=Object(W.f)(),n=function(){var n=Object(b.a)(d.a.mark((function n(r){var a,c;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),a={name:r.target.name.value,username:r.target.username.value,password:r.target.password.value},n.prev=2,n.next=5,m.create(a);case 5:c=n.sent,e(g(c)),t("/login"),n.next=16;break;case 10:n.prev=10,n.t0=n.catch(2),e(T("".concat(n.t0.response.data.error),!1)),r.target.name.value="",r.target.username.value="",r.target.password.value="";case 16:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(e){return n.apply(this,arguments)}}();return Object(Z.jsxs)("div",{children:[Object(Z.jsx)("h2",{children:"Register"}),Object(Z.jsx)(ae.a,{onSubmit:n,children:Object(Z.jsxs)(ae.a.Group,{children:[Object(Z.jsx)(ae.a.Label,{children:"Name:"}),Object(Z.jsx)(ae.a.Control,{type:"text",name:"name"}),Object(Z.jsx)(ae.a.Label,{children:"Username:"}),Object(Z.jsx)(ae.a.Control,{type:"text",name:"username"}),Object(Z.jsx)(ae.a.Label,{children:"Password:"}),Object(Z.jsx)(ae.a.Control,{type:"text",name:"password"}),Object(Z.jsx)(ce.a,{variant:"primary",type:"submit",children:"Register"})]})})]})},ue=function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),le={login:ue},de=function(){var e=Object(i.b)(),t=Object(W.f)(),n=function(){var n=Object(b.a)(d.a.mark((function n(r){var a,c;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),a={username:r.target.username.value,password:r.target.password.value},n.prev=2,n.next=5,le.login(a);case 5:c=n.sent,e(E(c)),w(c),e(T("Welcome, ".concat(c.username),!0)),t("/"),n.next=17;break;case 12:n.prev=12,n.t0=n.catch(2),e(T("".concat(n.t0.response.data.error),!1)),r.target.username.value="",r.target.password.value="";case 17:case"end":return n.stop()}}),n,null,[[2,12]])})));return function(e){return n.apply(this,arguments)}}();return Object(Z.jsxs)("div",{children:[Object(Z.jsx)("h2",{children:"Login"}),Object(Z.jsx)(ae.a,{onSubmit:n,children:Object(Z.jsxs)(ae.a.Group,{children:[Object(Z.jsx)(ae.a.Label,{children:"Username:"}),Object(Z.jsx)(ae.a.Control,{type:"text",name:"username"}),Object(Z.jsx)(ae.a.Label,{children:"Password:"}),Object(Z.jsx)(ae.a.Control,{type:"password",name:"password"}),Object(Z.jsx)(ce.a,{variant:"primary",type:"submit",children:"Login"})]})})]})},be=function(){var e=Object(i.c)((function(e){return e.users})).sort((function(e,t){return e.name.localeCompare(t.name)}));return Object(Z.jsxs)("div",{className:"container",children:[Object(Z.jsx)("h2",{children:"Users"}),Object(Z.jsx)(ie.a,{striped:!0,children:Object(Z.jsxs)("tbody",{children:[Object(Z.jsxs)("tr",{children:[Object(Z.jsx)("td",{children:"Username"}),Object(Z.jsx)("td",{children:"Name"})]}),e.map((function(e){return Object(Z.jsxs)("tr",{children:[Object(Z.jsx)("td",{children:e.username}),Object(Z.jsx)("td",{children:e.name})]},e.id)}))]})})]})},pe=function(){var e=Object(i.b)(),t=function(){var t=Object(b.a)(d.a.mark((function t(n){var r,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r={name:n.target.name.value},t.prev=2,t.next=5,_.create(r);case 5:a=t.sent,e(P(a)),e(T("Added ".concat(a.name),!0)),n.target.name.value="",t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),e(T("".concat(t.t0.response.data.error),!1));case 14:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}();return Object(Z.jsxs)("div",{children:[Object(Z.jsx)("h2",{children:"Create player"}),Object(Z.jsx)(ae.a,{onSubmit:t,children:Object(Z.jsxs)(ae.a.Group,{children:[Object(Z.jsx)(ae.a.Label,{children:"Name:"}),Object(Z.jsx)(ae.a.Control,{type:"text",name:"name"}),Object(Z.jsx)(ce.a,{variant:"primary",type:"submit",children:"Add player"})]})})]})},Oe=function(){var e=Object(i.c)((function(e){return e.players})).sort((function(e,t){return t.votes-e.votes}));return Object(Z.jsxs)("div",{className:"container",children:[Object(Z.jsx)("h2",{children:"Players"}),Object(Z.jsx)(ie.a,{striped:!0,children:Object(Z.jsxs)("tbody",{children:[Object(Z.jsxs)("tr",{children:[Object(Z.jsx)("th",{children:"Name"}),Object(Z.jsx)("th",{children:"Votes"})]}),e.map((function(e){return Object(Z.jsxs)("tr",{children:[Object(Z.jsx)("td",{children:e.name}),Object(Z.jsx)("td",{children:e.votes})]},e.id)}))]})})]})},he=function(){var e=Object(i.c)((function(e){return e.user})),t=Object(W.f)(),n=Object(i.b)();Object(a.useEffect)((function(){n(function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.getAll();case 2:n=e.sent,t({type:"INIT_USERS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),n(U()),n(function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.getAll();case 2:n=e.sent,t({type:"INIT_VOTES",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var e=k();e&&n(E(e))}),[n]);var r=function(){n(function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:L(),t({type:"LOGOUT_USER"});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),L(),t("/")},c={padding:5};return e&&"Admin"===e.username?Object(Z.jsxs)("div",{className:"container",children:[Object(Z.jsx)(q.a,{src:X,fluid:!0}),Object(Z.jsxs)(K.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(Z.jsx)(K.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(Z.jsx)(K.a.Collapse,{id:"responsive-navbar-nav",children:Object(Z.jsxs)(Q.a,{className:"mr-auto",children:[Object(Z.jsx)(Q.a.Link,{href:"#",as:"span",children:Object(Z.jsx)(M.b,{style:c,to:"/",children:"Home"})}),Object(Z.jsx)(Q.a.Link,{href:"#",as:"span",children:Object(Z.jsx)(M.b,{style:c,to:"/players",children:"Players"})}),Object(Z.jsx)(Q.a.Link,{href:"#",as:"span",children:Object(Z.jsx)(M.b,{style:c,to:"/voting",children:"Voting"})}),Object(Z.jsx)(Q.a.Link,{href:"#",as:"span",children:Object(Z.jsx)(M.b,{style:c,to:"/users",children:"Users"})}),Object(Z.jsx)(Q.a.Link,{href:"#",as:"span",children:Object(Z.jsx)(M.b,{style:c,to:"/votes",children:"Votes"})}),Object(Z.jsx)(Q.a.Link,{href:"#",as:"span",children:Object(Z.jsx)(M.b,{style:c,to:"/register",children:"Register"})}),Object(Z.jsx)(Q.a.Link,{href:"#",as:"span",children:e&&Object(Z.jsx)(M.b,{style:c,to:"/players/new",children:"Add player"})}),Object(Z.jsx)(Q.a.Link,{href:"#",as:"span",children:e?Object(Z.jsxs)("span",{children:[Object(Z.jsxs)("em",{children:[e.username," logged in"]})," ",Object(Z.jsx)("button",{onClick:r,children:"Logout"})]}):Object(Z.jsx)(M.b,{style:c,to:"/login",children:"Login"})})]})})]}),Object(Z.jsx)(ee,{}),Object(Z.jsxs)(W.c,{children:[Object(Z.jsx)(W.a,{path:"/login",element:Object(Z.jsx)(de,{})}),Object(Z.jsx)(W.a,{path:"/register",element:Object(Z.jsx)(oe,{})}),Object(Z.jsx)(W.a,{path:"/players/new",element:Object(Z.jsx)(pe,{})}),Object(Z.jsx)(W.a,{path:"/players",element:Object(Z.jsx)(Oe,{})}),Object(Z.jsx)(W.a,{path:"/voting",element:Object(Z.jsx)(se,{})}),Object(Z.jsx)(W.a,{path:"/votes",element:Object(Z.jsx)(je,{})}),Object(Z.jsx)(W.a,{path:"/users",element:Object(Z.jsx)(be,{})}),Object(Z.jsx)(W.a,{path:"/billGates",element:Object(Z.jsx)(re,{})}),Object(Z.jsx)(W.a,{path:"/",element:Object(Z.jsx)($,{})})]})]}):Object(Z.jsxs)("div",{className:"container",children:[Object(Z.jsx)(q.a,{src:X,fluid:!0}),Object(Z.jsxs)(K.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(Z.jsx)(K.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(Z.jsx)(K.a.Collapse,{id:"responsive-navbar-nav",children:Object(Z.jsxs)(Q.a,{className:"mr-auto",children:[Object(Z.jsx)(Q.a.Link,{href:"#",as:"span",children:Object(Z.jsx)(M.b,{style:c,to:"/",children:"Home"})}),Object(Z.jsx)(Q.a.Link,{href:"#",as:"span",children:Object(Z.jsx)(M.b,{style:c,to:"/players",children:"Players"})}),Object(Z.jsx)(Q.a.Link,{href:"#",as:"span",children:Object(Z.jsx)(M.b,{style:c,to:"/voting",children:"Voting"})}),Object(Z.jsx)(Q.a.Link,{href:"#",as:"span",children:Object(Z.jsx)(M.b,{style:c,to:"/votes",children:"Votes"})}),Object(Z.jsx)(Q.a.Link,{href:"#",as:"span",children:Object(Z.jsx)(M.b,{style:c,to:"/register",children:"Register"})}),Object(Z.jsx)(Q.a.Link,{href:"#",as:"span",children:e?Object(Z.jsxs)("span",{children:[Object(Z.jsxs)("em",{children:[e.username," logged in"]})," ",Object(Z.jsx)("button",{onClick:r,children:"Logout"})]}):Object(Z.jsx)(M.b,{style:c,to:"/login",children:"Login"})})]})})]}),Object(Z.jsx)(ee,{}),Object(Z.jsxs)(W.c,{children:[Object(Z.jsx)(W.a,{path:"/login",element:Object(Z.jsx)(de,{})}),Object(Z.jsx)(W.a,{path:"/register",element:Object(Z.jsx)(oe,{})}),Object(Z.jsx)(W.a,{path:"/players/new",element:Object(Z.jsx)(pe,{})}),Object(Z.jsx)(W.a,{path:"/players",element:Object(Z.jsx)(Oe,{})}),Object(Z.jsx)(W.a,{path:"/voting",element:Object(Z.jsx)(se,{})}),Object(Z.jsx)(W.a,{path:"/votes",element:Object(Z.jsx)(je,{})}),Object(Z.jsx)(W.a,{path:"/users",element:Object(Z.jsx)(be,{})}),Object(Z.jsx)(W.a,{path:"/",element:Object(Z.jsx)($,{})})]})]})};s.a.render(Object(Z.jsx)(i.a,{store:H,children:Object(Z.jsx)(M.a,{children:Object(Z.jsx)(he,{})})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.0421f42f.chunk.js.map