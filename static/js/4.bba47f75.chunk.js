(this["webpackJsonpwish-kart"]=this["webpackJsonpwish-kart"]||[]).push([[4],{183:function(t,e,i){"use strict";i.r(e);var a=i(145),c=i(143),r=i(172),n=i(174),s=i(173),l=i(171),o=i(150),d=i(175),j=i(0),u=i(22),b=i(3),p=Object(j.createContext)();function h(){return Object(j.useContext)(p)}var x=function(t){var e=Object(j.useState)([]),i=Object(u.a)(e,2),a=i[0],c=i[1],r=Object(j.useState)([]),n=Object(u.a)(r,2),s={cartData:a,setCartData:c,productList:n[0],setProductList:n[1]};return Object(b.jsx)(p.Provider,{value:s,children:t.children})},O=Object(a.a)((function(t){return{root:{flexGrow:1,border:"1px solid #e0e0e0",height:"calc(100% - 90px)",overflow:"auto",position:"fixed",width:"inherit","& .MuiTypography-displayBlock":{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",width:"62%",fontSize:14},"& .MuiListItem-secondaryAction":{paddingBottom:0}},content:{backgroundColor:t.palette.background.paper,textAlign:"center"},title:{margin:t.spacing(4,0,2),textAlign:"center"},total:{padding:"0px 16px",fontSize:13},emptyCart:{margin:"52px 10px",textAlign:"center",fontSize:14}}})),m=function(t){t.productData;var e=O(),i=h().cartData,a=i.reduce((function(t,e){return t+e.price*e.quantity}),0),u=i.reduce((function(t,e){return t+e.quantity}),0);return Object(b.jsx)("div",{className:e.root,children:Object(b.jsxs)(l.a,{children:[Object(b.jsx)(o.a,{variant:"h5",className:e.title,children:"My Wish-Kart"}),i&&i.length>0&&Object(b.jsxs)(j.Fragment,{children:[Object(b.jsxs)("div",{className:e.content,children:[Object(b.jsxs)("span",{className:e.total,children:["Total items: ",u]}),Object(b.jsx)(c.a,{children:i.map((function(t,e){return Object(b.jsxs)(r.a,{children:[Object(b.jsx)(s.a,{primary:t.title,secondary:t.quantity+" x "+t.desc}),Object(b.jsxs)(n.a,{children:["Rs. ",t.price]})]},e)}))})]}),Object(b.jsx)(d.a,{}),Object(b.jsx)(c.a,{children:Object(b.jsxs)(r.a,{children:[Object(b.jsx)(s.a,{primary:"Total Amount"}),Object(b.jsxs)(n.a,{children:["Rs. ",a]})]})})]}),i&&0===i.length&&Object(b.jsx)("div",{className:e.emptyCart,children:"Add items to see the Magic!"})]})})},f=i(63),v=i(176),y=i(184),g=i(185),w=i(159),N=i.n(w),C=Object(a.a)({root:{width:"90%","& .MuiListItemIcon-root":{minWidth:"auto"},"& .MuiSvgIcon-colorPrimary":{color:"#ffbc00"}}}),k=[4,3,2,1];function S(){var t=C(),e=Object(j.useState)([0]),i=Object(u.a)(e,2),a=i[0],n=i[1],s=function(t){return function(){var e=a.indexOf(t),i=Object(f.a)(a);-1===e?i.push(t):i.splice(e,1),n(i)}};return Object(b.jsxs)("div",{className:t.root,children:[Object(b.jsx)(o.a,{variant:"subtitle2",children:"Rating"}),Object(b.jsx)(c.a,{children:k.map((function(t){return Object(b.jsxs)(r.a,{disableRipple:!0,dense:!0,button:!0,onClick:s(t),children:[Object(b.jsx)(v.a,{children:Object(b.jsx)(y.a,{edge:"start",checked:-1!==a.indexOf(t),tabIndex:-1,color:"primary",disableRipple:!0})}),Object(f.a)(Array(t)).map((function(t,e){return Object(b.jsx)(N.a,{color:"primary"},e)})),Object(b.jsx)(o.a,{variant:"caption",children:"& Up"})]},t)}))})]})}var R=Object(a.a)({root:{width:"90%","& .MuiListItemIcon-root":{minWidth:"auto"}}}),M=function(t){var e=t.results,i=R(),a=Object(j.useState)([]),n=Object(u.a)(a,2),l=n[0],d=n[1],p=h().setProductList;Object(j.useEffect)((function(){p(e)}),[]);var x=function(t){return function(){var e=l.indexOf(t),i=Object(f.a)(l);-1===e?i.push(t):i.splice(e,1),d(i)}};return Object(b.jsxs)("div",{className:"filter-container",children:[Object(b.jsx)(o.a,{gutterBottom:!0,variant:"h6",paragraph:!0,children:"Filters"}),Object(b.jsx)(S,{}),Object(b.jsxs)("div",{className:i.root,children:[Object(b.jsx)(o.a,{id:"discrete-slider",variant:"subtitle2",children:"Brand"}),Object(b.jsx)(c.a,{children:[0,1,2,3].map((function(t){var e="checkbox-list-label-".concat(t);return Object(b.jsxs)(r.a,{disableRipple:!0,dense:!0,button:!0,onClick:x(t),children:[Object(b.jsx)(v.a,{children:Object(b.jsx)(y.a,{edge:"start",checked:-1!==l.indexOf(t),tabIndex:-1,color:"primary",disableRipple:!0})}),Object(b.jsx)(s.a,{id:e,primary:"Brand Name ".concat(t+1)})]},t)}))}),Object(b.jsx)(o.a,{id:"discrete-slider",gutterBottom:!0,variant:"subtitle2",children:"Price (Rs.)"})]}),Object(b.jsx)("div",{style:{width:"76%"},children:Object(b.jsx)(g.a,{defaultValue:1e3,valueLabelDisplay:"auto",step:500,marks:!0,min:1e3,max:3e3,onChangeCommitted:function(t,i){p(e.filter((function(t){return t.price<=i})))}})})]})},T=i(40),P=i(144),U=i(177),A=i(178),q=i(181),I=i(180),Q=i(179),L=Object(a.a)({root:{margin:5,"& .MuiTypography-root":{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},"& .MuiTypography-h6":{fontSize:"1rem"},"& .MuiCardMedia-img":{height:300},"& .MuiCardActions-root":{justifyContent:"center",height:30}}});var B=function(t){var e=t.data,i=e.title,a=e.desc,c=e.imgUrl,r=e.price,n=t.children,s=L();return Object(b.jsxs)(U.a,{className:s.root,variant:"outlined",children:[Object(b.jsxs)(A.a,{disableRipple:!0,disabled:!0,children:[Object(b.jsx)(Q.a,{component:"img",alt:i,height:"240",image:c,title:i}),Object(b.jsxs)(I.a,{children:[Object(b.jsx)(o.a,{variant:"h6",component:"h2",children:i}),Object(b.jsx)(o.a,{variant:"caption",color:"textSecondary",component:"p",children:a}),Object(b.jsxs)(o.a,{variant:"subtitle2",component:"p",children:["Rs. ",r]})]})]}),Object(b.jsx)(q.a,{children:n})]})},z=i(160),D=i.n(z),F=i(161),K=i.n(F),W=function(){var t=h(),e=t.productList,i=t.setProductList,a=h().setCartData;return 0===e.length?Object(b.jsx)("div",{style:{margin:"0 auto"},children:"No products avaialble. Kindly relax your filter preferences."}):Object(b.jsx)(j.Fragment,{children:e.map((function(t,c){return Object(b.jsxs)(B,{data:t,children:[!t.quantity&&Object(b.jsx)(P.a,{size:"small",color:"primary",variant:"outlined",onClick:function(){return function(t){var c=Object(f.a)(e),r=Object(T.a)({},c[t]);r.quantity=1,c[t]=r,i(c),a((function(t){return[].concat(Object(f.a)(t),[r])}))}(c)},children:"Add to Cart"}),t.quantity>0&&Object(b.jsxs)("div",{className:"quantity-button",children:[Object(b.jsx)(P.a,{size:"small",color:"primary",variant:"outlined",onClick:function(){return function(t){var c=Object(f.a)(e),r=Object(T.a)({},c[t]);r.quantity+=1,c[t]=r,i(c),a((function(t){var e=Object(f.a)(t),i=e.findIndex((function(t){return t.id===r.id}));return e[i]=r,e}))}(c)},children:Object(b.jsx)(D.a,{})}),t.quantity,Object(b.jsx)(P.a,{size:"small",color:"secondary",variant:"outlined",onClick:function(){return function(t){var c=Object(f.a)(e),r=Object(T.a)({},c[t]);r.quantity-=1,c[t]=r,i(c),a((function(t){var e=Object(f.a)(t),i=e.findIndex((function(t){return t.id===r.id}));return r.quantity>0?e[i]=r:e.splice(i,1),e}))}(c)},children:Object(b.jsx)(K.a,{})})]})]},c)}))})},H=i.p+"static/media/1.32d53198.webp",J=i.p+"static/media/2.ac621d77.webp",E=i.p+"static/media/3.0ab7b48a.webp",G=i.p+"static/media/4.fff764b1.webp",V=i.p+"static/media/5.2c794558.webp",X=[{id:"1",title:"Moda Rapido",desc:"Printed Round Neck T-shirt",imgUrl:H,price:1320,availableQuantity:10},{id:"2",title:"Roadster",desc:"Solid Round Neck T-shirt",imgUrl:J,price:920,availableQuantity:10},{id:"3",title:"Here&Now",desc:"Solid Polo Collar T-shirt",imgUrl:E,price:720,availableQuantity:10},{id:"4",title:"Nautica",desc:"Solid Polo Collar T-shirt",imgUrl:G,price:965,availableQuantity:10},{id:"5",title:"Allen Solly Sport",desc:"Colourblocked Polo Collar T-shirt",imgUrl:V,price:678,availableQuantity:10},{id:"6",title:"Moda Rapido",desc:"Printed Round Neck T-shirt",imgUrl:H,price:2320,availableQuantity:10},{id:"7",title:"Roadster",desc:"Solid Round Neck T-shirt",imgUrl:J,price:910,availableQuantity:10},{id:"8",title:"Here&Now",desc:"Solid Polo Collar T-shirt",imgUrl:E,price:999,availableQuantity:10},{id:"9",title:"Nautica",desc:"Solid Polo Collar T-shirt",imgUrl:G,price:1220,availableQuantity:10},{id:"10",title:"Allen Solly Sport",desc:"Colourblocked Polo Collar T-shirt",imgUrl:V,price:820,availableQuantity:10},{id:"11",title:"Munchkin Cat",desc:"A Playful Munchkin Kitty",imgUrl:"https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",price:2520,availableQuantity:10}],Y=i(104),Z=i(153),$=i(149),_=i(162),tt=i.n(_),et=Object(a.a)((function(t){return{root:{padding:"2px 4px",display:"flex",alignItems:"center",width:400},input:{marginLeft:t.spacing(2),flex:1},iconButton:{padding:10}}}));function it(){var t=et();return Object(b.jsxs)(Y.a,{variant:"outlined",component:"form",className:t.root,children:[Object(b.jsx)(Z.a,{className:t.input,placeholder:"Find your wish..."}),Object(b.jsx)($.a,{type:"submit",className:t.iconButton,"aria-label":"search",children:Object(b.jsx)(tt.a,{})})]})}e.default=function(t){return Object(b.jsx)(x,{children:Object(b.jsxs)("div",{className:"products-container",children:[Object(b.jsx)("section",{className:"filter-wrapper",children:Object(b.jsx)(M,{results:X})}),Object(b.jsxs)("section",{className:"results-wrapper",children:[Object(b.jsxs)("div",{className:"search-bar",children:[Object(b.jsxs)(o.a,{variant:"subtitle1",children:["Men's T Shirts",Object(b.jsx)("span",{className:"product-subtitle",children:"(Showing 1 \u2013 40 products of 84,131 products)"})]}),Object(b.jsx)(it,{})]}),Object(b.jsx)("section",{className:"results-container",children:Object(b.jsx)(W,{})})]}),Object(b.jsx)("section",{className:"cart-container",children:Object(b.jsx)(m,{})})]})})}}}]);
//# sourceMappingURL=4.bba47f75.chunk.js.map