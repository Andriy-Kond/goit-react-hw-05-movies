"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{597:function(e,a,c){c.r(a);var t=c(439),r=c(791),s=c(689),n=c(66),o=c(909),i=c(184);a.default=function(){var e=(0,r.useState)(null),a=(0,t.Z)(e,2),c=a[0],l=a[1],d=(0,r.useState)(""),h=(0,t.Z)(d,2),p=h[0],m=h[1],x=(0,s.UO)().currentMovie,u="movie/".concat(x,"/credits"),g=(0,r.useState)([]),j=(0,t.Z)(g,2),f=j[0],w=j[1];return(0,r.useEffect)((function(){(0,n.p)(u).then((function(e){w(e.cast)})).catch((function(e){l(e),m("rejected")}))}),[u]),"rejected"===p?(0,i.jsx)("h1",{children:"\u041f\u043e\u043c\u0438\u043b\u043a\u0430: ".concat(c.message)}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h3",{children:"THE CAST"}),0!==f.length?(0,i.jsx)("div",{className:"accordion",id:"accordionExample",children:f.map((function(e){return(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"accordion-item",children:[(0,i.jsx)("h2",{className:"accordion-header",children:(0,i.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapse-".concat(e.id,"-").concat(e.character.toLowerCase().replace(/[^a-zA-Z0-9-_]/g,"").trim()),"aria-expanded":"false","aria-controls":"collapse-".concat(e.id,"-").concat(e.character.toLowerCase().replace(/[^a-zA-Z0-9-_]/g,"").trim()),style:{fontSize:"1.2rem"},children:e.name})}),(0,i.jsx)("div",{id:"collapse-".concat(e.id,"-").concat(e.character.toLowerCase().replace(/[^a-zA-Z0-9-_]/g,"").trim()),className:"accordion-collapse collapse","data-bs-parent":"#accordionExample",children:(0,i.jsxs)("div",{className:"accordion-body",style:{width:"100%",display:"flex"},children:[(0,i.jsx)("img",{src:e.profile_path?"https://image.tmdb.org/t/p/w500".concat(e.profile_path):o,className:"card-img-top",alt:"...",style:{minWidth:"150px",maxWidth:"150px",height:"100%",marginRight:"20px"}}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,i.jsxs)("h2",{children:[(0,i.jsx)("strong",{children:"Name: "}),(0,i.jsx)("p",{children:e.original_name})]}),(0,i.jsxs)("h3",{children:[(0,i.jsx)("strong",{children:"Role: "}),(0,i.jsx)("p",{children:e.character})]})]})]})})]})},"".concat(e.id,"-").concat(e.character.toLowerCase().toLowerCase().replace(/[^a-zA-Z0-9-_]/g,"").trim()))}))}):"The cast is unknown :("]})}},909:function(e,a,c){e.exports=c.p+"static/media/noUser.949669730a3e16f9c421.jpg"}}]);
//# sourceMappingURL=597.e5476588.chunk.js.map