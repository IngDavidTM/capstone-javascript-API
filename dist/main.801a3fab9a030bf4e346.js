(()=>{"use strict";var r,n,e,t,a,i,o,d,s,c,l,p,u,f,m={424:(r,n,e)=>{e.d(n,{Z:()=>d});var t=e(81),a=e.n(t),i=e(645),o=e.n(i)()(a());o.push([r.id,"* {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  background-color: rgb(237, 236, 241);\r\n}\r\n\r\n.container {\r\n  height: 100vh;\r\n  max-width: 60rem;\r\n  margin: 0 auto;\r\n  display: grid;\r\n  grid-template-columns: 0.3fr 2.4fr 0.3fr;\r\n  grid-template-rows: 0.3fr 2.4fr 0.3fr;\r\n  gap: 0.125rem 0.0125rem;\r\n  grid-auto-flow: row;\r\n  grid-template-areas:\r\n    '. header .'\r\n    '. main .'\r\n    '. footer .';\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  align-items: center;\r\n  grid-area: header;\r\n  justify-content: space-around;\r\n}\r\n\r\n.nav-bar {\r\n  display: flex;\r\n  width: 60%;\r\n}\r\n\r\n.nav-bar-list {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: space-around;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n  cursor: pointer;\r\n}\r\n\r\nmain {\r\n  margin-top: 1rem;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  grid-template-rows: 1fr 1fr 1fr;\r\n  gap: 0.5rem 0.5rem;\r\n  grid-auto-flow: row;\r\n  grid-template-areas:\r\n    '. . .'\r\n    '. . .'\r\n    '. . .';\r\n  grid-area: main;\r\n}\r\n\r\n.card-food {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1.4fr 0.6fr;\r\n  grid-template-rows: 2fr 0.4fr 0.2fr;\r\n  gap: 0;\r\n  grid-template-areas:\r\n    'card-img card-img card-img'\r\n    'card-title card-title card-title'\r\n    'btn-recipe . btn-liked';\r\n  border: #dbdbdb 1px solid;\r\n}\r\n\r\n.card-img {\r\n  overflow: hidden;\r\n  box-sizing: border-box;\r\n  grid-area: card-img;\r\n}\r\n\r\n.img-food {\r\n  width: 100%;\r\n  min-height: 250px;\r\n  object-fit: cover;\r\n}\r\n\r\n.card-title {\r\n  grid-area: card-title;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n  padding: 0.2rem;\r\n}\r\n\r\n.btn-recipe {\r\n  grid-area: btn-recipe;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: flex-end;\r\n  padding: 0.2rem;\r\n}\r\n\r\n.btn-recipe > button {\r\n  background: rgb(226, 157, 8);\r\n  border: none;\r\n  color: white;\r\n  font-weight: bold;\r\n  padding: 0.1rem 0.4rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-liked > button {\r\n  background: white;\r\n  border: 1px solid #dbdbdb;\r\n  color: rgb(36, 39, 230);\r\n  font-weight: bold;\r\n  padding: 0.1rem 0.4rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-recipe > button:hover {\r\n  transform: scale(1.08);\r\n}\r\n\r\n.btn-liked {\r\n  grid-area: btn-liked;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: flex-end;\r\n  padding: 0.2rem;\r\n}\r\n\r\n.btn-liked > button:hover {\r\n  transform: scale(1.08);\r\n}\r\n",""]);const d=o},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,a,i){"string"==typeof r&&(r=[[null,r,void 0]]);var o={};if(t)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(o[s]=!0)}for(var c=0;c<r.length;c++){var l=[].concat(r[c]);t&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var i={},o=[],d=0;d<r.length;d++){var s=r[d],c=t.base?s[0]+t.base:s[0],l=i[c]||0,p="".concat(c," ").concat(l);i[c]=l+1;var u=e(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=a(f,t);t.byIndex=d,n.splice(d,0,{identifier:p,updater:m,references:1})}o.push(p)}return o}function a(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,a){var i=t(r=r||[],a=a||{});return function(r){r=r||[];for(var o=0;o<i.length;o++){var d=e(i[o]);n[d].references--}for(var s=t(r,a),c=0;c<i.length;c++){var l=e(i[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=s}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var a=void 0!==e.layer;a&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,a&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},g={};function b(r){var n=g[r];if(void 0!==n)return n.exports;var e=g[r]={id:r,exports:{}};return m[r](e,e.exports,b),e.exports}b.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return b.d(n,{a:n}),n},b.d=(r,n)=>{for(var e in n)b.o(n,e)&&!b.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},b.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),b.nc=void 0,r=b(379),n=b.n(r),e=b(795),t=b.n(e),a=b(569),i=b.n(a),o=b(565),d=b.n(o),s=b(216),c=b.n(s),l=b(589),p=b.n(l),u=b(424),(f={}).styleTagTransform=p(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=t(),f.insertStyleElement=c(),n()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,(async r=>{const n=new Request("https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"),e=await fetch(n);(r=>{const n=document.querySelector(".container-food-cards");n.innerHTML="",r.forEach((r=>{const e=document.createElement("article");e.classList.add("card-food"),e.innerHTML=`\n          <div class='card-title'>\n            <h5>${r.strMeal}</h5>\n          </div>\n          <div class=btn-recipe>\n            <button type='button'>Recipe</button>\n          </div>\n          <div class='btn-liked'>\n            <button type='button'>Like</button>\n          </div>\n          <div class='card-img'>\n           <img src="${r.strMealThumb}" class='img-food'>        \n          </div>     \n      `,e.id=r.idMeal,n.appendChild(e)}))})((await e.json()).meals)})()})();