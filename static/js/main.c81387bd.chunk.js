(this["webpackJsonpwish-kart"]=this["webpackJsonpwish-kart"]||[]).push([[0],{102:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(12),o=r.n(c),i=(r(91),r(92),r(33)),s=r(11),u=r(41),l=r.n(u),b=r(53),d=r(22),j=r(40),h=r(63),O=r(5),p=r(151),f=r(144),x=r(3),g=Object(O.a)({root:{"& .MuiFormLabel-root":{color:"white"},"& .MuiInput-underline:after":{borderBottomColor:"white"},"& .MuiInputBase-root":{color:"white"}}})(p.a),m=Object(O.a)({root:{boxShadow:"none",textTransform:"none",fontSize:16,padding:"6px 12px",border:"1px solid",lineHeight:1.5,backgroundColor:"#0022ff59",borderColor:"#0022ff59","&:hover":{backgroundColor:"#0069d9",borderColor:"#0062cc",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"#0062cc",borderColor:"#005cbf"},"&:focus":{boxShadow:"0 0 0 0.2rem rgba(0,123,255,.5)"},"&:disabled":{color:"#e0e0e0b5",backgroundColor:"#0022ff59",borderColor:"#0022ff59"}}})(f.a),v=function(e){var t=Object(h.a)(e.fields);return Object(x.jsxs)("form",{onSubmit:function(r){r.preventDefault(),e.sendForm(t)},className:"form-container",children:[Object(x.jsx)("h1",{children:e.title}),e.fields.map((function(e,r){return Object(x.jsx)(g,{label:e.name,style:{margin:8},fullWidth:!0,type:e.type,defaultValue:e.value,helperText:e.hasError?e.errorMsg:"",required:e.required,error:e.hasError,onChange:function(e){return function(e,r){var n=e.target,a="checkbox"===n.type?n.checked:n.value,c=Object(j.a)({},t[r]);c.value=a,t[r]=c}(e,r)}},r)})),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)(m,{variant:"contained",type:"submit",disableElevation:!0,color:"primary",fullWidth:!0,disabled:e.disableButton,children:e.buttonLabel}),e.children]})},w=r(72),k=(r(98),w.a.initializeApp({apiKey:"AIzaSyB2S2N-lfd6y9hFiIqNOy6VnClsKRdmQ6g",authDomain:"wish-kart-app.firebaseapp.com",projectId:"wish-kart-app",storageBucket:"wish-kart-app.appspot.com",messagingSenderId:"677506068189",appId:"1:677506068189:web:ff01bdb0096e910bdc7534"})),C=Object(n.createContext)();function y(){return Object(n.useContext)(C)}function S(e){var t=e.children,r=Object(n.useState)(!1),a=Object(d.a)(r,2),c={loader:a[0],showLoader:a[1]};return Object(x.jsx)(C.Provider,{value:c,children:t})}var E=Object(n.createContext)();function N(){return Object(n.useContext)(E)}var L=function(e){var t=e.children,r=Object(n.useState)(),a=Object(d.a)(r,2),c=a[0],o=a[1],i=Object(n.useState)(!0),s=Object(d.a)(i,2),u=s[0],l=s[1],b=y().showLoader,j={currentUser:c,register:function(e,t){return k.auth().createUserWithEmailAndPassword(e,t)},login:function(e,t){return k.auth().signInWithEmailAndPassword(e,t)},logout:function(){return k.auth().signOut()}};return Object(n.useEffect)((function(){return b(!0),k.auth().onAuthStateChanged((function(e){o(e),l(!1),b(!1)}))}),[]),Object(x.jsx)(E.Provider,{value:j,children:u?null:t})},I=[{name:"Email",type:"email",value:"",hasError:!1,required:!0},{name:"Password",type:"password",hasError:!1,required:!0}];var P=function(){var e=Object(n.useState)(I),t=Object(d.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(!1),o=Object(d.a)(c,2),u=o[0],j=o[1],h=N(),O=h.currentUser,p=h.login,f=y().showLoader,g=Object(s.g)(),m=function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(t),j(!0),e.prev=2,f(!0),e.next=6,p(t[0].value,t[1].value);case 6:g.push("/"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),j(!1),alert(e.t0.message);case 13:return e.prev=13,f(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,9,13,16]])})));return function(t){return e.apply(this,arguments)}}();return O?Object(x.jsx)(s.a,{to:"/"}):Object(x.jsx)(v,{title:"Login",fields:r,buttonLabel:"Login",disableButton:u,sendForm:m,children:Object(x.jsx)("div",{className:"login-register-link",children:Object(x.jsx)(i.b,{to:"/register",children:"New to Wishkart? Create an account"})})})},B=[{name:"Username",type:"text",value:"",hasError:!1},{name:"Email",type:"email",hasError:!1,required:!0},{name:"Password",type:"password",hasError:!1,required:!0},{name:"Confirm Password",type:"password",hasError:!1,required:!0,errorMsg:"Passwords do not match!"}],F=function(e){var t=Object(n.useState)(B),r=Object(d.a)(t,2),a=r[0],c=r[1],o=Object(n.useState)(!1),u=Object(d.a)(o,2),j=u[0],h=u[1],O=N().register,p=y().showLoader,f=Object(s.g)(),g=function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t[2].value===t[3].value){e.next=5;break}t[3].hasError=!0,c(t),e.next=22;break;case 5:return t[3].hasError=!1,c(t),h(!0),e.prev=8,p(!0),e.next=12,O(t[1].value,t[2].value);case 12:f.push("/login"),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(8),alert(e.t0.message),h(!1);case 19:return e.prev=19,p(!1),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[8,15,19,22]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)(v,{title:"Register",fields:a,buttonLabel:"Register",disableButton:j,sendForm:g,children:Object(x.jsx)("div",{className:"login-register-link",children:Object(x.jsx)(i.b,{to:"/login",children:"Existing User? Login here"})})})},q=r.p+"static/media/wish-cover.9d6f01d0.jpg",z={paperContainer:{display:"flex",backgroundImage:"url(".concat(q,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",position:"relative",height:"100vh",justifyContent:"space-between",userSelect:"none"}},M=function(e){var t=e.children;return Object(x.jsxs)("div",{style:z.paperContainer,children:[Object(x.jsx)("div",{className:"banner-container",children:Object(x.jsxs)("div",{className:"wish-banner",children:[Object(x.jsx)("strong",{children:"Wish-Kart"}),Object(x.jsxs)("div",{className:"sub-section",children:["Making your ",Object(x.jsx)("strong",{children:"Wish"})," come true!"]})]})}),Object(x.jsx)("div",{className:"side-panel",children:t})]})},W=r(75);var U=function(e){var t=e.component,r=Object(W.a)(e,["component"]),n=N().currentUser;return Object(x.jsx)(s.b,Object(j.a)(Object(j.a)({},r),{},{render:function(e){return n?Object(x.jsx)(t,Object(j.a)({},e)):Object(x.jsx)(s.a,{to:"/login"})}}))},A=r(145),R=r(146),T=r(147),D=r(149),K=r(148),G=r(74),J=r.n(G),V=Object(A.a)((function(e){return{root:{flexGrow:1},background:{background:"linear-gradient(0.25turn, #4791db, #4caf50);"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),H=Object(n.lazy)((function(){return Promise.all([r.e(3),r.e(4)]).then(r.bind(null,183))}));var Q=function(e){var t=V(),r=N().logout;return Object(x.jsxs)("div",{className:t.root,children:[Object(x.jsx)(R.a,{position:"fixed",className:t.background,children:Object(x.jsxs)(T.a,{children:[Object(x.jsx)(K.a,{edge:"start",className:t.menuButton,color:"inherit",children:Object(x.jsx)(J.a,{})}),Object(x.jsx)(D.a,{variant:"h6",className:t.title,children:"Products"}),Object(x.jsx)(f.a,{color:"inherit",onClick:r,children:"Logout"})]})}),Object(x.jsx)(n.Suspense,{fallback:"",children:Object(x.jsx)(H,{})})]})},X=r(152),Y=r(150),Z=Object(A.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));function $(){var e=Z(),t=y().loader;return Object(x.jsx)("div",{children:Object(x.jsx)(X.a,{className:e.backdrop,open:t,children:Object(x.jsx)(Y.a,{color:"inherit"})})})}var _=function(){return Object(x.jsxs)(S,{children:[Object(x.jsx)($,{}),Object(x.jsx)(L,{children:Object(x.jsx)(i.a,{children:Object(x.jsxs)(s.d,{children:[Object(x.jsx)(U,{exact:!0,path:"/",component:Q}),Object(x.jsx)(s.b,{exact:!0,path:"/login",children:Object(x.jsx)(M,{children:Object(x.jsx)(P,{})})}),Object(x.jsx)(s.b,{exact:!0,path:"/register",children:Object(x.jsx)(M,{children:Object(x.jsx)(F,{})})})]})})})]})},ee=function(e){e&&e instanceof Function&&r.e(5).then(r.bind(null,182)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;r(e),n(e),a(e),c(e),o(e)}))};o.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(_,{})}),document.getElementById("root")),ee()},91:function(e,t,r){},92:function(e,t,r){}},[[102,1,2]]]);
//# sourceMappingURL=main.c81387bd.chunk.js.map