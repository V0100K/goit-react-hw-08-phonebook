"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[232],{232:function(t,n,e){e.r(n),e.d(n,{default:function(){return q}});var r=e(2791),a=e(885),u=e(4569),o=e.n(u),c=e(5142);o().defaults.baseURL="https://61c7adbb9031850017547497.mockapi.io";var i=e(6030),s={form:"ContactForm_form__ofD6A"},l="NOT_FOUND";var f=function(t,n){return t===n};function m(t,n){var e="object"===typeof n?n:{equalityCheck:n},r=e.equalityCheck,a=void 0===r?f:r,u=e.maxSize,o=void 0===u?1:u,c=e.resultEqualityCheck,i=function(t){return function(n,e){if(null===n||null===e||n.length!==e.length)return!1;for(var r=n.length,a=0;a<r;a++)if(!t(n[a],e[a]))return!1;return!0}}(a),s=1===o?function(t){var n;return{get:function(e){return n&&t(n.key,e)?n.value:l},put:function(t,e){n={key:t,value:e}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(i):function(t,n){var e=[];function r(t){var r=e.findIndex((function(e){return n(t,e.key)}));if(r>-1){var a=e[r];return r>0&&(e.splice(r,1),e.unshift(a)),a.value}return l}return{get:r,put:function(n,a){r(n)===l&&(e.unshift({key:n,value:a}),e.length>t&&e.pop())},getEntries:function(){return e},clear:function(){e=[]}}}(o,i);function m(){var n=s.get(arguments);if(n===l){if(n=t.apply(null,arguments),c){var e=s.getEntries(),r=e.find((function(t){return c(t.value,n)}));r&&(n=r.value)}s.put(arguments,n)}return n}return m.clearCache=function(){return s.clear()},m}function p(t){var n=Array.isArray(t[0])?t[0]:t;if(!n.every((function(t){return"function"===typeof t}))){var e=n.map((function(t){return"function"===typeof t?"function "+(t.name||"unnamed")+"()":typeof t})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return n}function v(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];var a=function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var u,o=0,c={memoizeOptions:void 0},i=r.pop();if("object"===typeof i&&(c=i,i=r.pop()),"function"!==typeof i)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof i+"]");var s=c,l=s.memoizeOptions,f=void 0===l?e:l,m=Array.isArray(f)?f:[f],v=p(r),d=t.apply(void 0,[function(){return o++,i.apply(null,arguments)}].concat(m)),h=t((function(){for(var t=[],n=v.length,e=0;e<n;e++)t.push(v[e].apply(null,arguments));return u=d.apply(null,t)}));return Object.assign(h,{resultFunc:i,memoizedResultFunc:d,dependencies:v,lastResult:function(){return u},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),h};return a}var d=v(m),h=function(t){return t.contacts.items},b=function(t){return t.contacts.filter},y=d([h,b],(function(t,n){var e=n.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(e)}))})),_=e(3027),x=e(6157),j=e(184),g=function(){var t=(0,i.I0)(),n=(0,i.v9)(h),e=(0,r.useState)(""),u=(0,a.Z)(e,2),l=u[0],f=u[1],m=(0,r.useState)(""),p=(0,a.Z)(m,2),v=p[0],d=p[1];return(0,j.jsxs)(_.Z,{onSubmit:function(e){e.preventDefault(),n.some((function(t){return t.name.toLowerCase()===l.toLowerCase()}))?alert("".concat(l," is already in contacts")):(t(function(t){var n=t.name,e=t.number;return function(t){t((0,c.md)()),o().post("/contacts",{name:n,number:e}).then((function(n){var e=n.data;return t((0,c.ff)(e))})).catch((function(n){return t((0,c.xZ)(n))}))}}({name:l,number:v})),f(""),d(""))},className:s.form,children:[(0,j.jsx)(_.Z.Group,{className:"mb-3",children:(0,j.jsxs)(_.Z.Label,{children:["Name",(0,j.jsx)(_.Z.Control,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432.",required:!0,value:l,className:s.own,onChange:function(t){f(t.currentTarget.value)}})]})}),(0,j.jsx)(_.Z.Group,{className:"mb-3",children:(0,j.jsxs)(_.Z.Label,{children:["Number",(0,j.jsx)(_.Z.Control,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 \u0446\u0438\u0444\u0440 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:v,className:s.own,onChange:function(t){d(t.currentTarget.value)}})]})}),(0,j.jsx)(x.Z,{variant:"warning",type:"submit",children:"Add contact"})]})},C="ContactListItem_contactListItem__tHIl4",Z="ContactListItem_contact__hH78z",w="ContactListItem_buttonDelete__0mpjM",N=function(t){var n=t.name,e=t.number,r=t.id,a=(0,i.I0)(),u=function(t){return a(function(t){return function(n){n((0,c.v$)()),o().delete("/contacts/".concat(t)).then((function(){return n((0,c.fJ)(t))})).catch((function(t){return n((0,c.TO)(t))}))}}(t))};return(0,j.jsxs)("li",{className:C,children:[(0,j.jsxs)("p",{className:Z,children:[" ",n,": ",e]}),(0,j.jsx)(x.Z,{variant:"danger",className:w,type:"button",onClick:function(){return u(r)},children:"Delete"})]})},k={list:"ContactList_list__j-BxW"},L=function(){var t=(0,i.v9)(y);return(0,j.jsx)("div",{className:k.contacts,children:(0,j.jsx)("ul",{className:k.list,children:t.map((function(t){var n=t.id,e=t.name,r=t.number;return(0,j.jsx)(N,{id:n,name:e,number:r},n)}))})})},A=(e(7632),{filter:"Filter_filter__jsq5P"}),I=function(){var t=(0,i.v9)(b),n=(0,i.I0)();return(0,j.jsx)(_.Z,{autoComplete:"off",className:A.form,children:(0,j.jsx)(_.Z.Group,{className:"mb-3",children:(0,j.jsxs)(_.Z.Label,{className:A.label,children:["Find contacts by name",(0,j.jsx)(_.Z.Control,{placeholder:"Enter the name you want to find",type:"text",name:"filter",className:A.filter,value:t,onChange:function(t){return n((0,c.W1)(t.target.value))}})]})})})},E=(e(3508),e(9033)),z=e(5700),q=function(){var t=(0,i.I0)();return(0,r.useEffect)((function(){t((function(t){t((0,c.$0)()),o().get("/contacts").then((function(n){var e=n.data;return t((0,c.v2)(e))})).catch((function(n){return t((0,c.I7)(n))}))}))}),[t]),(0,j.jsxs)(z.Z,{children:[(0,j.jsx)("h1",{className:E.Z.title,children:"Phonebook"}),(0,j.jsx)(g,{}),(0,j.jsx)("h2",{className:E.Z.title,children:"Contacts"}),(0,j.jsx)(I,{}),(0,j.jsx)(L,{})]})}},9033:function(t,n){n.Z={form:"pages_form__yq2EY",label:"pages_label__e0w1P",title:"pages_title__RY1GY"}}}]);
//# sourceMappingURL=232.cddb3784.chunk.js.map