"use strict";(self.webpackChunkaem_maven_archetype=self.webpackChunkaem_maven_archetype||[]).push([[181],{"./src/main/webpack/site/js/helper.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{camelToDashed:function(){return camelToDashed},debounce:function(){return debounce},formToJSON:function(){return formToJSON},setInnerHtml:function(){return setInnerHtml},throttle:function(){return throttle},trapFocus:function(){return trapFocus}});__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js");var formToJSON=function formToJSON(elements){return[].reduce.call(elements,(function(data,element){return"submit"!=element.type&&(data[element.name]=element.value),data}),{})},camelToDashed=function camelToDashed(str){return str.replace(/[A-Z]/g,(function(m){return"-"+m.toLowerCase()}))},throttle=function throttle(callback,limit){var wait=!1;return function(){wait||(callback.call(),wait=!0,setTimeout((function(){wait=!1}),limit))}},debounce=function debounce(func,wait){var timeout;return function executedFunction(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];var later=function later(){clearTimeout(timeout),func.apply(void 0,args)};clearTimeout(timeout),timeout=setTimeout(later,wait)}},setInnerHtml=function setInnerHtml(htmlStr){return{__html:htmlStr}},trapFocus=function trapFocus(element){var focusableEls=element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'),firstFocusableEl=focusableEls[0],lastFocusableEl=focusableEls[focusableEls.length-1];element.addEventListener("keydown",(function(e){("Tab"===e.key||9===e.keyCode)&&(e.shiftKey?document.activeElement===firstFocusableEl&&(lastFocusableEl.focus(),e.preventDefault()):document.activeElement===lastFocusableEl&&(firstFocusableEl.focus(),e.preventDefault()))}))}}}]);