"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[681],{681:function(e,a,t){t.r(a);var c=t(439),s=t(791),n=t(66),r=t(909),i=t(184),l=t(87),o=l.useParams,d=l.Link;a.default=function(){var e=(0,s.useState)(null),a=(0,c.Z)(e,2),t=a[0],l=a[1],h=(0,s.useState)(""),m=(0,c.Z)(h,2),p=m[0],u=m[1],x=o().currentMovie,j="movie/".concat(x,"/reviews"),f=(0,s.useState)([]),g=(0,c.Z)(f,2),w=g[0],v=g[1];return(0,s.useEffect)((function(){(0,n.p)(j).then((function(e){v(e.results)})).catch((function(e){l(e),u("rejected")}))}),[j]),"rejected"===p?(0,i.jsx)("h2",{children:"\u041f\u043e\u043c\u0438\u043b\u043a\u0430: ".concat(t.message)}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h3",{children:"THE REVIEWS"}),0!==w.length?(0,i.jsx)("div",{className:"accordion",id:"accordionExample",children:w.map((function(e){var a=e.author_details.avatar_path;return a=a?a.includes("www")?a.replace("/https://www.","https://").trim():"https://image.tmdb.org/t/p/w500/".concat(a):r,(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"accordion-item",children:[(0,i.jsx)("h2",{className:"accordion-header",children:(0,i.jsxs)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo-".concat(e.id),"aria-expanded":"false","aria-controls":"collapseTwo-".concat(e.id),style:{fontSize:"1.2rem"},children:["Review from: \xa0",(0,i.jsxs)("strong",{children:[" ","".concat(e.author)," "]})]})}),(0,i.jsx)("div",{id:"collapseTwo-".concat(e.id),className:"accordion-collapse collapse","data-bs-parent":"#accordionExample",children:(0,i.jsxs)("div",{className:"accordion-body",style:{width:"100%",display:"flex"},children:[(0,i.jsx)("img",{src:a,className:"card-img-top",alt:"...",style:{minWidth:"150px",maxWidth:"150px",height:"100%",marginRight:"20px"}}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,i.jsxs)("h4",{children:[(0,i.jsx)("strong",{children:"Name: "}),(0,i.jsx)("p",{children:e.author_details.username})]}),(0,i.jsxs)("h5",{children:[(0,i.jsx)("strong",{children:"Message: "}),(0,i.jsx)("p",{style:{fontSize:"1rem"},children:"".concat(e.content.slice(0,300),"...")})]}),(0,i.jsx)(d,{to:"".concat(e.url),className:"btn btn-primary",target:"_blank",rel:"noreferrer",children:"Read more"})]})]})})]})},e.id)}))}):"No any review yet"]})}},909:function(e,a,t){e.exports=t.p+"static/media/noUser.949669730a3e16f9c421.jpg"}}]);
//# sourceMappingURL=681.b8e1bc2c.chunk.js.map