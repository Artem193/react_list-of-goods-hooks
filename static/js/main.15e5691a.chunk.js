(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c,o=n(7),r=n.n(o),s=n(1),a=n(6),l=(n(12),n(13),n(2)),i=n(0),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.rev="reverse",t.alphabet="alphabet",t.alphabetRev="alphabet reverse",t.length="length",t.lengthRev="length reverse"}(c||(c={}));var b=function(){var t=Object(l.useState)(u),e=Object(a.a)(t,2),n=e[0],o=e[1],r=Object(l.useState)(""),b=Object(a.a)(r,2),h=b[0],j=b[1],p=function(t){return!!t.includes(c.rev)},g=function(t,e){return h.includes(t)?e:"".concat(e," is-light")};return Object(i.jsxs)("div",{className:"section content",children:[Object(i.jsxs)("div",{className:"buttons",children:[Object(i.jsx)("button",{type:"button",className:g(c.alphabet,"button is-info"),onClick:function(){o((function(t){return p(h)?Object(s.a)(t).sort((function(t,e){return e.localeCompare(t)})):Object(s.a)(t).sort((function(t,e){return t.localeCompare(e)}))})),j(p(h)?c.alphabetRev:c.alphabet)},children:"Sort alphabetically"}),Object(i.jsx)("button",{type:"button",className:g(c.length,"button is-success"),onClick:function(){o((function(t){return p(h)?Object(s.a)(t).sort((function(t,e){return e.length-t.length})):Object(s.a)(t).sort((function(t,e){return t.length-e.length}))})),j(p(h)?c.lengthRev:c.length)},children:"Sort by length"}),Object(i.jsx)("button",{type:"button",className:g(c.rev,"button is-warning"),onClick:function(){o((function(t){return Object(s.a)(t).reverse()})),j((function(t){return p(t)?t.split(" ")[0]:"".concat(t," ").concat(c.rev)}))},children:"Reverse"}),h.length>0&&Object(i.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){o(u),j("")},children:"Reset"})]}),Object(i.jsx)("ul",{children:n.map((function(t){return Object(i.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};r.a.render(Object(i.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.15e5691a.chunk.js.map