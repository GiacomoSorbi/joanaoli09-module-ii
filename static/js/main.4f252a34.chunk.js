(this["webpackJsonpweb-project"]=this["webpackJsonpweb-project"]||[]).push([[0],{103:function(e,a,t){},105:function(e,a,t){},106:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(17),c=t.n(r),o=(t(71),t(16)),i=t(5),s=(t(72),t(46)),m=t.n(s),u=t(47),d=t.n(u),p=t(48),E=t.n(p),h=t(50),b=t(49),f=t.n(b),g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"homepage"},l.a.createElement("h3",null,"We help you create healthy recipes in a easy and quick way, for a variety of breakfasts and snacks"),l.a.createElement("div",{className:"images-hm"},l.a.createElement("img",{className:"mobile-img",src:m.a,alt:"breakfast bowl"}),l.a.createElement("img",{className:"mobile-img",src:d.a,alt:"breakfast bowl"}),l.a.createElement("img",{src:E.a,alt:"breakfast bowl"})),l.a.createElement("div",{className:"presentation"},"We provide easy and beautifully prepared breakfast and snacks for any occasions: a picnic, weekly breakfasts for the kids, a last minute party, or just because you\u2019re feeling like it.",l.a.createElement("p",null,"We deliver at your house or location. In addition, we also have planned meals for the whole week. We provide the recipes and the ingredients necessary."),l.a.createElement(h.a,{variant:"outline-dark",href:"/products"},"See our Products")),l.a.createElement("div",{className:"about-section"},l.a.createElement("div",{className:"about-image"},l.a.createElement("img",{src:f.a,alt:"about-us"})),l.a.createElement("div",{className:"about-us"},l.a.createElement("h1",null,"Whant to know  more about us? "),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),l.a.createElement(h.a,{variant:"outline-dark",className:"btn-about",href:"/about"},"Know More"))),l.a.createElement("div",{className:"contact-section"},l.a.createElement("h1",null," GET IN TOUCH "),l.a.createElement("p",null,"Send us a message regarding your order or other enquires you might have"),l.a.createElement(h.a,{variant:"dark",href:"/contact"},"Contact us!"))))},v=t(51),k=t.n(v),N=(t(73),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"about-page"},l.a.createElement("h2",null,"About us"),l.a.createElement("div",{className:"about-us-section"},l.a.createElement("div",{className:"about-image"},l.a.createElement("img",{src:k.a,alt:"breakfast bowl"})),l.a.createElement("div",{className:"about-text"},l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec ullamcorper sit amet risus nullam eget. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Quis vel eros donec ac odio tempor orci dapibus ultrices. At urna condimentum mattis pellentesque id nibh tortor. Sem fringilla ut morbi tincidunt augue interdum velit. Eu sem integer vitae justo eget magna fermentum iaculis. Et ligula ullamcorper malesuada proin libero nunc consequat. Posuere ac ut consequat semper viverra nam libero justo laoreet. Arcu felis bibendum ut tristique et. Ut morbi tincidunt augue interdum velit euismod. At augue eget arcu dictum. Arcu non sodales neque sodales ut etiam sit. Amet venenatis urna cursus eget nunc scelerisque viverra."))),l.a.createElement("div",{className:"contact-section"},l.a.createElement("h1",null," GET IN TOUCH "),l.a.createElement("p",null,"Send us a message regarding your order or other enquires you might have"),l.a.createElement(h.a,{variant:"dark",href:"/contact"},"Contact us!"))))}),y=t(24),w=t(52),j=t(53),x=t(65),C=t(63),S=t(10),q=(t(74),t(54)),O=t.n(q),I=function(e){Object(x.a)(t,e);var a=Object(C.a)(t);function t(e){var n;return Object(w.a)(this,t),(n=a.call(this,e)).handleChange=function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,l=a.name;n.setState(Object(y.a)({},l,t))},n.handleSubmit=function(e){e.preventDefault(),n.setState({disbaled:!0,emailSent:!1}),O.a.post("http://localhost:3000/api/email",n.state).then((function(e){e.data.success?n.setState({disbaled:!1,emailSent:!0}):n.setState({disbaled:!1,emailSent:!1})})).catch((function(e){n.setState({disbaled:!1,emailSent:!1})}))},n.state={name:"",email:"",message:"",disabled:!1,emailSent:null},n}return Object(j.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"form"},l.a.createElement(S.a,{onSubmit:this.handleSubmit},l.a.createElement(S.a.Group,null,l.a.createElement(S.a.Label,{htmlFor:"full-name",className:"label"},"Full Name"),l.a.createElement(S.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})),l.a.createElement(S.a.Group,null,l.a.createElement(S.a.Label,{htmlFor:"email",className:"label"},"Email"),l.a.createElement(S.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement(S.a.Group,null,l.a.createElement(S.a.Label,{htmlFor:"message",className:"label"},"Message"),l.a.createElement(S.a.Control,{id:"message",name:"message",as:"textarea",rows:"3",value:this.state.message,onChange:this.handleChange})),l.a.createElement(h.a,{className:"d-inline-block",variant:"outline-dark",type:"submit",disabled:this.state.disabled},"Send"),!0===this.state.emailSent&&l.a.createElement("p",{className:"d-inline success-msg"},"Email Sent"),!1===this.state.emailSent&&l.a.createElement("p",{className:"d-inline err-msg"},"Email Not Sent")))}}]),t}(l.a.Component),W=(t(95),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"contact-page"},l.a.createElement("h2",null," Contact us"),l.a.createElement("p",null,"If you have an enquire regarding your order or want to contact us for a partnership, send us a message and we'll get back to you as soon as we can."),l.a.createElement(I,null),l.a.createElement("p",null),l.a.createElement("p",{className:"latest"},"Checkout the latest products"),l.a.createElement(h.a,{className:"btn-products",variant:"dark",href:"/products"},"Go to Products")))}),F=t(55),A=t(64),B=t(21);t(96),t(97);var T=function(e){var a=e.addToCart,t=Object(n.useState)([{name:"Breakfast box",cost:"5.99$",image:"https://images.unsplash.com/photo-1569420067112-b57b4f024595?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},{name:"Breakfast box",cost:"5.99$",image:"https://images.unsplash.com/photo-1569419910356-f63064754fc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"},{name:"Snack box ",cost:"6.99$",image:"https://images.unsplash.com/photo-1569419882964-7db5d339951b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},{name:"Small breakfast bowls",cost:"9.99$",image:"https://images.unsplash.com/photo-1570649857669-4ad9f896435d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=703&q=80"},{name:"Weekly breakfasts",cost:"15.99$",image:"https://images.unsplash.com/photo-1585735119301-232c1633d439?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"},{name:"Snack recipe+ingredients",cost:"15.99$",image:"https://images.unsplash.com/photo-1585735119407-b037131a352b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"}]),r=Object(B.a)(t,1)[0];return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"products-title"},"Products"),l.a.createElement("div",{className:"products"},r.map((function(e,t){return l.a.createElement("div",{className:"product",key:t},l.a.createElement("h3",null,e.name),l.a.createElement("h4",null,e.cost),l.a.createElement("img",{src:e.image,alt:e.name}),l.a.createElement("p",null),l.a.createElement(h.a,{variant:"outline-dark",className:"add-btn",onClick:function(){return a(e)}},"Add to Cart"))}))))};var G=function(e){var a=e.cart,t=e.removeFromCart;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Cart"),l.a.createElement("div",{className:"products"},a.map((function(e,a){return l.a.createElement("div",{className:"product",key:a},l.a.createElement("h3",null,e.name),l.a.createElement("h4",null,e.cost),l.a.createElement("img",{src:e.image,alt:e.name}),l.a.createElement("div",null,l.a.createElement("p",null),l.a.createElement(h.a,{variant:"dark",onClick:function(){return t(e)}},"Remove")))}))),l.a.createElement("div",null,l.a.createElement("h3",null," Total :",a.reduce((function(e,a){var t=a.cost;return e+parseFloat(t)}),0))))};var H=function(){var e=Object(n.useState)([]),a=Object(B.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)("products"),o=Object(B.a)(c,2),i=o[0],s=o[1],m=function(e){s(e)};return l.a.createElement("div",{className:"productspage"},l.a.createElement("header",null,l.a.createElement(h.a,{className:"cart-btn",variant:"light",size:"lg",onClick:function(){return m("cart")}},"Go to Cart (",t.length,")"),l.a.createElement(h.a,{className:"products-btn",variant:"light",size:"lg",onClick:function(){return m("products")}},"View Products")),"products"===i&&l.a.createElement(T,{addToCart:function(e){r([].concat(Object(A.a)(t),[Object(F.a)({},e)]))}}),"cart"===i&&l.a.createElement(G,{cart:t,removeFromCart:function(e){r(t.filter((function(a){return a!==e})))}}))},J=(t(98),t(109)),M=t(110),$=(t(99),function(){return l.a.createElement(J.a,{expand:"lg"},l.a.createElement(J.a.Brand,{href:"/"},"Incredibowls"),l.a.createElement(M.a,{className:"ml-auto"},l.a.createElement(M.a.Item,null,l.a.createElement(o.b,{className:"nav-links",to:"/"},"Home")),l.a.createElement(M.a.Item,null,l.a.createElement(o.b,{className:"nav-links",to:"/about"},"About")),l.a.createElement(M.a.Item,null,l.a.createElement(o.b,{className:"nav-links",to:"/contact"},"Contact")),l.a.createElement(M.a.Item,null,l.a.createElement(o.b,{className:"nav-links",to:"/products"},"Products"))))}),D=t(108),P=t(61),L=(t(103),function(){return l.a.createElement(D.a,{fluid:!0,className:"jumbo"},l.a.createElement("div",{className:"overlay"}),l.a.createElement(P.a,null,l.a.createElement("h1",null,"Are you hungry?"),l.a.createElement("h3",null,"We save you time, money and stress")))}),Q=t(62),U=t(18),z=(t(104),t(105),function(){return l.a.createElement("footer",{className:"footer mt-5"},l.a.createElement(P.a,{fluid:!0},l.a.createElement(Q.a,{className:"border-top justify-content-between p-3"},l.a.createElement(U.a,{className:"brand p-0 d-flex justify-content-start"},"\xa9Incredibowls"),l.a.createElement(U.a,{className:"copyright",md:3},"This site was made by Joana Oliveira."))))});var K=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(o.a,{basename:"/joanaoli09-module-ii"},l.a.createElement($,null),l.a.createElement(L,null),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:g}),l.a.createElement(i.a,{path:"/about",component:N}),l.a.createElement(i.a,{path:"/contact",component:W}),l.a.createElement(i.a,{path:"/products",component:H}),l.a.createElement(i.a,{path:"*",render:function(){return l.a.createElement("img",{alt:"alt",src:"https://i1.wp.com/saedx.com/blog/wp-content/uploads/2019/01/saedx-blog-featured-70.jpg?fit=1200%2C500&ssl=1",style:{justifyContent:"center",alignItems:"center"}})}}))),l.a.createElement(z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},46:function(e,a,t){e.exports=t.p+"static/media/homeImage1.eb5ab899.jpg"},47:function(e,a,t){e.exports=t.p+"static/media/homeImage2.14a16db6.jpg"},48:function(e,a,t){e.exports=t.p+"static/media/homeImage3.981e5399.jpg"},49:function(e,a,t){e.exports=t.p+"static/media/aboutImage.3184f13b.jpg"},51:function(e,a,t){e.exports=t.p+"static/media/aboutus.44e68205.jpg"},66:function(e,a,t){e.exports=t(106)},71:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},95:function(e,a,t){},96:function(e,a,t){},97:function(e,a,t){},98:function(e,a,t){},99:function(e,a,t){}},[[66,1,2]]]);
//# sourceMappingURL=main.4f252a34.chunk.js.map