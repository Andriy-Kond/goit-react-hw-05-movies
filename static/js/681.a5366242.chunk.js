"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[681],{681:function(e,a,t){t.r(a);var c=t(439),s=t(791),n=t(66),r=t(909),i=t(184),l=t(87),o=l.useParams,d=l.Link;a.default=function(){var e=(0,s.useState)(null),a=(0,c.Z)(e,2),t=a[0],l=a[1],h=(0,s.useState)(""),m=(0,c.Z)(h,2),p=m[0],u=m[1],x=o().currentMovie,j="movie/".concat(x,"/reviews"),f=(0,s.useState)([]),g=(0,c.Z)(f,2),w=g[0],b=g[1];return(0,s.useEffect)((function(){(0,n.p)(j).then((function(e){b(e.results)})).catch((function(e){l(e),u("rejected")}))}),[j]),"rejected"===p?(0,i.jsx)("h2",{children:"\u041f\u043e\u043c\u0438\u043b\u043a\u0430: ".concat(t.message)}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h3",{children:"THE REVIEWS"}),0!==w.length?(0,i.jsx)("div",{className:"accordion",id:"accordionExample",children:w.map((function(e){var a=e.author_details,t=e.id,c=e.author,s=e.content,n=e.url,l=a.avatar_path;return l=l?l.includes("www")?l.replace("/https://www.","https://").trim():"https://image.tmdb.org/t/p/w500/".concat(l):r,(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"accordion-item",children:[(0,i.jsx)("h2",{className:"accordion-header",children:(0,i.jsxs)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo-".concat(t),"aria-expanded":"false","aria-controls":"collapseTwo-".concat(t),style:{fontSize:"1.2rem"},children:["Review from: \xa0",(0,i.jsxs)("strong",{children:[" ","".concat(c)," "]})]})}),(0,i.jsx)("div",{id:"collapseTwo-".concat(t),className:"accordion-collapse collapse","data-bs-parent":"#accordionExample",children:(0,i.jsxs)("div",{className:"accordion-body",style:{width:"100%",display:"flex"},children:[(0,i.jsx)("img",{src:l,className:"card-img-top",alt:"...",style:{minWidth:"150px",maxWidth:"150px",height:"100%",marginRight:"20px"}}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,i.jsxs)("h4",{children:[(0,i.jsx)("strong",{children:"Name: "}),(0,i.jsx)("p",{children:a.username})]}),(0,i.jsxs)("h5",{children:[(0,i.jsx)("strong",{children:"Message: "}),(0,i.jsx)("p",{style:{fontSize:"1rem"},children:"".concat(s.slice(0,300),"...")})]}),(0,i.jsx)(d,{to:"".concat(n),className:"btn btn-primary",target:"_blank",rel:"noreferrer",children:"Read more"})]})]})})]})},t)}))}):"No any review yet"]})}},909:function(e,a,t){e.exports=t.p+"static/media/noUser.b0a201d67273e87b9359.jpg"}}]);
//# sourceMappingURL=681.a5366242.chunk.js.map