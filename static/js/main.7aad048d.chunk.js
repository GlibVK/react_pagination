(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,t){},12:function(e,a,t){"use strict";t.r(a);var c=t(5),n=t.n(c),r=t(4),i=t(1);t(10);var l=t(2),s=t.n(l),o=t(0),u=function(e){for(var a=[],t=0;t<e;t+=1)a.push(t);return a},j=function(e){var a=e.total,t=e.currentPage,c=e.perPage,n=e.onPageChange;return Object(o.jsxs)("ul",{className:"pagination",children:[Object(o.jsx)("li",{className:s()("page-item",{disabled:1===t}),children:Object(o.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===t,onClick:function(){return t>1&&n(t-1,c)},children:"\xab"})}),u(a).map((function(e,a){return Object(o.jsx)("li",{className:s()("page-item",{active:t===a+1}),children:Object(o.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e+1),onClick:function(){return n(a+1,c)},children:a+1})},e)})),Object(o.jsx)("li",{className:s()("page-item",{disabled:t===a}),children:Object(o.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":t===a,onClick:function(){return t<a&&n(t+1,c)},children:"\xbb"})})]})},d=function(e,a){for(var t=[],c=e;c<=a;c+=1)t.push(c);return t}(1,42).map((function(e){return"Item ".concat(e)})),h=function(){var e=Object(i.useState)(1),a=Object(r.a)(e,2),t=a[0],c=a[1],n=[3,5,10,20],l=Object(i.useState)(n[1]),s=Object(r.a)(l,2),u=s[0],h=s[1],m=Math.ceil(d.length/u),p=d.slice((t-1)*u,t*u),b=u*t-u+1,g=u*t,f=function(e,a){c(e),h(a)};return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Items with Pagination"}),Object(o.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(t," (items ").concat(b," - ").concat(Math.min(g,d.length)," of ").concat(d.length,")")}),Object(o.jsxs)("div",{className:"form-group row",children:[Object(o.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(o.jsx)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",onChange:function(e){return f(1,Number(e.target.value))},value:u,children:n.map((function(e){return Object(o.jsx)("option",{value:e,children:e},e)}))})}),Object(o.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(o.jsx)(j,{total:m,currentPage:t,perPage:u,onPageChange:f}),Object(o.jsx)("ul",{children:p.map((function(e){return Object(o.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.7aad048d.chunk.js.map