(()=>{"use strict";var n={424:(n,e,t)=>{t.d(e,{Z:()=>d});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"* {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  background-color: rgb(237, 236, 241);\n}\n\nform button {\n  align-self: center;\n  width: 40%;\n  padding: 10px;\n  background-color: #fff;\n  border: 1px solid #dbdbdb;\n  color: #000;\n  cursor: pointer;\n  font-weight: bold;\n}\n\n.container {\n  height: 100vh;\n  max-width: 60rem;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 0.3fr 2.4fr 0.3fr;\n  grid-template-rows: 0.3fr 2.4fr 0.3fr;\n  gap: 0.125rem 0.0125rem;\n  grid-auto-flow: row;\n  grid-template-areas:\n    '. header .'\n    '. main .'\n    '. footer .';\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  grid-area: header;\n  justify-content: space-around;\n}\n\n.nav-bar {\n  display: flex;\n  width: 60%;\n}\n\n.nav-bar-list {\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n}\n\nli {\n  list-style: none;\n  cursor: pointer;\n}\n\nmain {\n  margin-top: 1rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  gap: 0.5rem 0.5rem;\n  grid-auto-flow: row;\n  grid-template-areas:\n    '. . .'\n    '. . .'\n    '. . .';\n  grid-area: main;\n}\n\n.card-food {\n  display: grid;\n  grid-template-columns: 1fr 1.4fr 0.6fr;\n  grid-template-rows: 2fr 0.4fr 0.2fr;\n  gap: 0;\n  grid-template-areas:\n    'card-img card-img card-img'\n    'card-title card-title card-title'\n    'btn-recipe . btn-liked';\n  border: #dbdbdb 1px solid;\n}\n\n.card-img {\n  overflow: hidden;\n  box-sizing: border-box;\n  grid-area: card-img;\n}\n\n.img-food {\n  width: 100%;\n  min-height: 250px;\n  object-fit: cover;\n}\n\n.card-title {\n  grid-area: card-title;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 0.2rem;\n}\n\n.btn-recipe {\n  grid-area: btn-recipe;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-end;\n  padding: 0.2rem;\n}\n\n.btn-recipe > button {\n  background: rgb(226, 157, 8);\n  border: none;\n  color: white;\n  font-weight: bold;\n  padding: 0.1rem 0.4rem;\n  cursor: pointer;\n}\n\n.btn-liked > button {\n  background: white;\n  border: 1px solid #dbdbdb;\n  color: rgb(36, 39, 230);\n  font-weight: bold;\n  padding: 0.1rem 0.4rem;\n  cursor: pointer;\n}\n\nform button:hover {\n  transform: scale(1.03);\n  transition-duration: 0.5s;\n}\n\n.btn-recipe > button:hover {\n  transform: scale(1.08);\n}\n\n.btn-liked {\n  grid-area: btn-liked;\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n  padding: 0.2rem;\n}\n\n.btn-liked > button:hover {\n  transform: scale(1.08);\n}\n\nli:hover {\n  border-bottom: 2px solid #333;\n  font-weight: bold;\n}\n\nfooter {\n  grid-area: footer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-top: 20px #dbdbdb solid;\n}\n\n.selected {\n  font-weight: bold;\n  border-bottom: 2px solid #333;\n}\n\n.popUp {\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  width: 100%;\n  min-height: 100vh;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(75, 80, 67, 0.616);\n  backdrop-filter: blur(5px);\n}\n\n.popUpDiv {\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  align-items: center;\n  width: 80%;\n  max-height: 80vh;\n  max-width: 900px;\n  overflow: auto;\n  background-color: rgb(237, 236, 241);\n  border-radius: 10px;\n  scroll-behavior: smooth;\n  animation: apear 0.5s;\n}\n\n@keyframes apear {\n  0% {\n    transform: scale(0.5);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n\n.popUpDiv::-webkit-scrollbar {\n  display: none;\n}\n\n.popUpDiv > * {\n  padding: 20px;\n}\n\n.popUpDiv img {\n  transition-duration: 1s;\n  width: 50%;\n  height: 50%;\n  max-width: 490px;\n  max-height: 490px;\n  border-radius: 50px;\n}\n\n.popUpDiv img:hover {\n  transform: scale(1.1);\n  transition-duration: 1s;\n}\n\n.popUpDiv p {\n  text-align: center;\n  max-width: 80%;\n}\n\n.buttonX {\n  transition-duration: 0.5s;\n  position: sticky;\n  border: none;\n  font-size: 30px;\n  left: 90%;\n  top: 2%;\n  padding: 0;\n  background: none;\n  cursor: pointer;\n}\n\n.buttonX:hover {\n  color: red;\n  transition-duration: 0.5s;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 60%;\n}\n\ninput,\ntextarea {\n  padding: 8px;\n  border: 1px solid #000;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 16px;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  color: #000;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 14px;\n}\n\n.commentsContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 15px;\n  width: 70%;\n}\n\n.divComments {\n  background-color: #fff;\n  border: 1px solid #000;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 5px;\n  max-height: 150px;\n  overflow: auto;\n  padding: 10px;\n}\n\n.divComments p {\n  text-align: left;\n  min-width: 100%;\n}\n\n.scrollDown {\n  color: #000;\n  font-size: 30px;\n  cursor: pointer;\n}\n\n.scrollDown:hover {\n  transition-duration: 0.5s;\n  color: rgb(95, 94, 94);\n}\n\n.divP {\n  display: flex;\n  width: 80%;\n  justify-content: space-around;\n}\n\n.error {\n  padding: 10px 0;\n  align-self: center;\n  color: red;\n  animation-duration: 3s;\n  animation-name: fade-in;\n}\n\n@keyframes fade-in {\n  0% { opacity: 0; }\n  15% { opacity: 1; }\n  85% { opacity: 1; }\n  100% { opacity: 0; }\n}\n",""]);const d=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(i[s]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],d=0;d<n.length;d++){var s=n[d],c=r.base?s[0]+r.base:s[0],l=a[c]||0,m="".concat(c," ").concat(l);a[c]=l+1;var p=t(m),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var f=o(u,r);r.byIndex=d,e.splice(d,0,{identifier:m,updater:f,references:1})}i.push(m)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var d=t(a[i]);e[d].references--}for(var s=r(n,o),c=0;c<a.length;c++){var l=t(a[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),d=t(565),s=t.n(d),c=t(216),l=t.n(c),m=t(589),p=t.n(m),u=t(424),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;const h=async n=>{const e=await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/JGerHk43c1Y5J5m1thia/comments?item_id=item${n}`),t=await e.json(),r=document.getElementById("divComments");document.getElementById("divComments").innerHTML="",t.forEach((n=>{const e=document.createElement("p");e.className="listOfComment",e.innerHTML=`${n.creation_date}  ${n.username}: ${n.comment}`,r.appendChild(e)}));(async n=>{document.getElementById("numberOfComments").innerHTML=`Comments(${n})`})(document.querySelectorAll(".listOfComment").length)},g=document.getElementById("popSection"),b=async n=>{const e=await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"),t=await e.json(),{meals:r}=t,o=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${r[n].idMeal}`),a=(await o.json()).meals[0],i=document.createElement("section");i.className="popUp",g.appendChild(i);const d=document.createElement("div");d.className="popUpDiv",i.appendChild(d);const s=document.createElement("button");s.id="buttonX",s.className="buttonX",s.innerHTML='<i class="fa-solid fa-xmark" ></i>',d.appendChild(s);const c=document.createElement("img");c.src=r[n].strMealThumb,d.appendChild(c);const l=document.createElement("h3");l.innerHTML=r[n].strMeal,d.appendChild(l);const m=document.createElement("div");m.className="divP",d.appendChild(m);const p=document.createElement("p");p.innerHTML=`<strong>Area:</strong> ${a.strArea}`,m.appendChild(p);const u=document.createElement("p");u.innerHTML=`<strong>Category:</strong> ${a.strCategory}`,m.appendChild(u);const f=document.createElement("a");f.href="#instructions",f.className="scrollDown",f.innerHTML='<i class="fa-solid fa-circle-chevron-down"></i>',d.appendChild(f);const b=document.createElement("p");b.id="instructions",b.innerHTML=`<strong>Instructions:</strong> ${a.strInstructions}`,d.appendChild(b);const v=document.createElement("div");v.className="commentsContainer",d.appendChild(v);const y=document.createElement("h4");y.id="numberOfComments",y.innerHTML="Comments(0)",v.appendChild(y);const x=document.createElement("div");x.id="divComments",x.className="divComments",v.appendChild(x);const w=document.createElement("h4");w.innerHTML="Add a comment",d.appendChild(w);const C=document.createElement("form");C.innerHTML='<input type="text" name="name" id="nameF" placeholder="Your name" maxlength="30"><textarea name="comment" id="textComment" cols="30" rows="5" placeholder="Your insights" maxlength="250"></textarea><button id="submit" type="submit">Comment</button>',d.appendChild(C),s.addEventListener("click",(()=>{g.innerHTML=""})),document.getElementById("submit").addEventListener("click",(async e=>{e.preventDefault();const t=document.getElementById("nameF").value,r=document.getElementById("textComment").value;if(""!==t&&""!==r)document.getElementById("nameF").value="",document.getElementById("textComment").value="",(async(n,e,t)=>{await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/JGerHk43c1Y5J5m1thia/comments",{method:"POST",body:JSON.stringify({item_id:`item${n}`,username:e,comment:t}),headers:{"Content-type":"application/json; charset=UTF-8"}}),await h(n)})(n,t,r);else{const n=document.createElement("p");n.className="error",n.innerHTML="Please fill all the requirements",setTimeout((()=>{n.remove()}),3e3),C.appendChild(n),document.getElementById("textComment").insertAdjacentElement("afterend",n)}})),await h(n)},v=async(n,e)=>{const t=new Request(n),r=await fetch(t),o=(await r.json()).meals;await(async n=>{const e=document.querySelector(".container-food-cards");e.innerHTML="",n.forEach((n=>{const t=document.createElement("article");t.classList.add("card-food"),t.innerHTML=`\n          <div class='card-title'>\n            <h5>${n.strMeal}</h5>\n          </div>\n          <div class=btn-recipe>\n            <button type='button' class='comments'>Recipe</button>\n          </div>\n          <div class='btn-liked'>\n            <button type='button'>Like</button>\n          </div>\n          <div class='card-img'>\n           <img src="${n.strMealThumb}" class='img-food'>        \n          </div>     \n      `,t.id=n.idMeal,e.appendChild(t)})),document.querySelectorAll(".comments").forEach(((n,e)=>{n.addEventListener("click",(()=>{b(e)}))}))})(o);((n,e)=>{n.innerHTML=`${n.textContent} (${e})`})(e,document.querySelectorAll("article").length)},y="https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef",[x]=document.querySelectorAll("li");let w=x;x.addEventListener("click",(()=>{w=x,x.classList.add("selected"),w.textContent="Beef",v(y,w)})),v(y,w)})()})();