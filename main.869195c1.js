parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector("table");function t(e){var t=!0,a="";return document.querySelector("table").addEventListener("click",function(r){var o=e.querySelector("tbody");a!==r.target.textContent&&(t=!0,a=r.target.textContent),Array.from(o.querySelectorAll("tr")).sort(n(Array.from(r.target.parentNode.children).indexOf(r.target),r.target.textContent,t)).forEach(function(e){return o.appendChild(e)}),t=!t})}function n(e,t,n){return function(r,o){var i=a(n?r:o,e),c=a(n?o:r,e);switch(t){case"Name":case"Position":case"Office":return i.toString().localeCompare(c);case"Age":return i-c;case"Salary":return parseInt(i.slice(1))-parseInt(c.slice(1))}}}function a(e,t){return e.children[t].textContent}function r(e){var t;e.querySelector("tbody").addEventListener("click",function(e){t&&t.classList.remove("active"),e.target.parentNode.classList.add("active"),t=e.target.parentNode})}function o(e){var t=document.createElement("form");t.classList.add("new-employee-form"),t.innerHTML='\n    <label>\n      Name: \n      <input \n        name="name" \n        type="text"\n        data-qa="name"\n        required\n      >\n    </label>\n\n    <label>\n      Position: \n      <input \n        name="position" \n        type="text"\n        data-qa="position"\n        required \n      >\n    </label>\n\n    <label>\n      Office:\n      <select \n        name="office" \n        data-qa="office"\n        required\n      >\n        <option>Tokyo</option>\n        <option>San Francisco</option>\n        <option>Singapore</option>\n        <option>New York</option>\n        <option>London</option>\n        <option>Edinburgh</option>\n      </select>\n    </label>\n    <label>\n      Age: \n      <input \n        name="age" \n        type="number"\n        data-qa="age"\n        required\n      >\n    </label>\n    <label>\n      Salary: \n      <input \n        name="salary" \n        type="number" \n        data-qa="salary"\n        required\n      >\n    </label>\n    <button type="submit">\n      Save to table\n    </button>\n  ',e.parentNode.insertBefore(t,e.nextSibling),i(t)}function i(e){e.querySelector("button").addEventListener("click",function(e){e.preventDefault();var t=document.querySelector('[name="name"]'),n=document.querySelector('[name="position"]'),a=document.querySelector('[name="office"]'),r=document.querySelector('[name="age"]'),o=document.querySelector('[name="salary"]');if(t.value.length<4)c(150,10,"Name input error","Name must not be less than 4 letters","error");else if(n.value.length<4)c(150,10,"Position input error","Position must not be less than 4 letters","error");else if(""===r.value.trim()||parseInt(r.value)<18||parseInt(r.value)>90)c(150,10,"Age input error","Age must not be less than 18 and more than 90","error");else if(""!==o.value.trim()){var i="\n      <tr>\n        <td>".concat(t.value,"</td>\n        <td>").concat(n.value,"</td>\n        <td>").concat(a.value,"</td>\n        <td>").concat(r.value,"</td>\n        <td>$").concat(parseInt(o.value).toLocaleString("en-US"),"</td>\n      </tr>\n    ");document.querySelector("tbody").insertAdjacentHTML("beforeend",i),c(150,10,"Success!","New employee successfully added to the table","success"),t.value="",n.value="",a.value="Tokyo",r.value="",o.value=""}else c(150,10,"Salary input error","Salary must not be empty","error")})}function c(e,t,n,a,r){var o=document.querySelector("body"),i=document.createElement("div");i.classList="notification ".concat(r),i.dataset.qa="notification",i.style.top=e+"px",i.style.right=t+"px";var c=document.createElement("h2");c.className="title",c.textContent=n;var l=document.createElement("p");l.textContent=a,i.append(c,l),o.append(i),setTimeout(function(){i.style.visibility="hidden"},2e3)}function l(e){var t,n=e.querySelector("tbody"),a=document.createElement("input"),r=!1,o="";function i(){if(r){var e=Array.from(t.parentNode.children).indexOf(t),n=a.value.trim();switch(!0){case n&&4===e:t.textContent="$"===n.slice(0,1)?"$".concat(parseInt(n.split(",").join("").slice(1)).toLocaleString("en-US")):"$".concat(parseInt(n.split(",").join("")).toLocaleString("en-US"));break;case n&&4!==e:t.textContent=n;break;case!n:t.textContent=o}r=!1}}n.addEventListener("dblclick",function(e){r||"TD"!==e.target.tagName||(r=!0,t=e.target,o=t.textContent,a.classList="cell-input",a.value=o,t.textContent="",t.appendChild(a),a.focus())}),n.addEventListener("keydown",function(e){"Enter"===e.code&&r&&i()}),a.addEventListener("blur",function(e){i()})}t(e),r(e),o(e),l(e);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.869195c1.js.map