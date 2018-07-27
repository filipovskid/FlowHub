!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"hasClass",value:function(e,t){return new RegExp("\\b"+t+"\\b").test(e.className)}},{key:"addClass",value:function(e,t){this.hasClass(e,t)||(e.className+=" "+t)}},{key:"removeClass",value:function(e,t){this.hasClass(e,t)&&(e.className=e.className.replace(new RegExp("\\b"+t+"\\b","g"),"").trim())}},{key:"define",value:function(e,t,n){if(!(t in e))try{void 0!==n&&Object.defineProperty(e,t,{value:n})}catch(e){}}},{key:"createElement",value:function(e,t,n){var r=document.createElement(e);for(var i in t)r[i]=t[i];for(var s in n)r.style[s]=n[s];return r}}]),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"prepend",value:function(e,t){t.insertBefore(e,t.firstChild)}},{key:"before",value:function(e,t){t.parentNode.insertBefore(e,t)}},{key:"after",value:function(e,t){t.parentNode.insertBefore(e,t.nextSibling)}},{key:"unmount",value:function(e){e.parentNode.removeChild(e)}},{key:"replace",value:function(e,t){t.parentNode.replaceChild(e,t)}}]),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SELECT={CONTAINER:"fh-select",RESULT:"fh-select__result",RESULT_ITEM:"fh-select__result__item",RESULT_SELECTED_ITEM:"fh-select__result__item--selected",RESULT_ACTIVE_CHILD:"data-active-child"},t.AUTOCOMPLETE={CONTAINER:"fh-autocomplete"},t.SEQUENTIAL_ADD={CONTAINER:"fh-sequential-add",TRIGGER:"fh-sequential-add__trigger",ITEM_ADD_NEW:"fh-sequential-add__add-new",ITEM_ADDED:"fh-sequential-add__added",ITEM_REMOVE:"fh-sequential-add__added__remove"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(e){return e&&e.__esModule?e:{default:e}}(n(0));var s=Element.prototype,o="atchesSelector";i.default.define(Element.prototype,"matches",s.matches||s["m"+o]||s["mozM"+o]||s["oM"+o]||s["webkitM"+o]||["msM"+o]);var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"prev",value:function(e,t){if(t){for(var n=e;n=n.previousElementSibling;)if(n.matches(t))return n;return null}return e.previousElementSibling}},{key:"next",value:function(e,t){if(t){for(var n=e;n=n.nextElementSibling;)if(n.matches(t))return n;return null}return e.nextElementSibling}},{key:"parents",value:function(e,t){for(var n=e;n=n.parentNode;)if(n.matches(t))return n;return null}}]),e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.settings=t}return r(e,[{key:"attachEvents",value:function(){}},{key:"init",value:function(){}},{key:"detach",value:function(){}}]),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=u(n(4)),s=u(n(0)),o=u(n(3)),a=u(n(1)),l=n(2);function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.layout=n.layout=s.default.createElement("div",{className:l.SELECT.CONTAINER}),n.trigger=n.trigger=s.default.createElement("button",{type:"button"}),n.result=s.default.createElement("ul",{className:l.SELECT.RESULT}),n.selected=void 0,n.hasResult=!1,n.mouseDown=!1,n.selectable=!0,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default),r(t,[{key:"select",value:function(e){e&&(this.selected?(s.default.removeClass(this.selected,l.SELECT.RESULT_SELECTED_ITEM),s.default.addClass(e,l.SELECT.RESULT_SELECTED_ITEM)):s.default.addClass(e,l.SELECT.RESULT_SELECTED_ITEM),this.selected=e,this.result.setAttribute(l.SELECT.RESULT_ACTIVE_CHILD,e.id))}},{key:"deselect",value:function(){this.selected&&(s.default.removeClass(this.selected,l.SELECT.RESULT_SELECTED_ITEM),this.selected=void 0)}},{key:"registerSelected",value:function(e){e=s.default.hasClass(e,l.SELECT.RESULT_ITEM)?e:o.default.parents(e,"."+l.SELECT.RESULT_ITEM),this.select(e),this.settings.onRegisterSelected&&this.settings.onRegisterSelected(this,e)}},{key:"showResult",value:function(){this.hasResult||(a.default.after(this.result,this.trigger),this.hasResult=!0),this.result.style.display="block"}},{key:"hideResult",value:function(){this.result.style.display="none",this.result.removeAttribute(l.SELECT.RESULT_ACTIVE_CHILD)}},{key:"toggleResult",value:function(){"none"!==this.result.style.display?this.hideResult():this.showResult()}},{key:"attachEvents",value:function(){var e=this,t=!1;this.trigger.addEventListener("keydown",function(n){switch(n.key){case"ArrowUp":n.preventDefault(),"none"!==e.result.style.display&&(e.selected?e.select(e.selected.previousElementSibling):e.select(e.result.querySelector("li:last-of-type"))),t=!0;break;case"ArrowDown":n.preventDefault(),"none"!==e.result.style.display&&(e.selected?e.select(e.selected.nextElementSibling):e.select(e.result.querySelector("li"))),t=!0;break;case"Enter":n.preventDefault(),t?("none"!==e.result.style.display?(e.registerSelected(e.selected),e.hideResult()):e.selectable&&e.toggleResult(),t=!1):e.selectable&&e.toggleResult();break;case"Escape":e.hideResult()}}),"BUTTON"===this.trigger.tagName&&this.trigger.addEventListener("mousedown",function(t){t.stopImmediatePropagation(),e.toggleResult()}),this.trigger.addEventListener("blur",function(){return e.mouseDown||e.hideResult()}),this.result.addEventListener("mousedown",function(t){e.mouseDown=!0;var n=e;e.result.addEventListener("mouseup",function(){n.mouseDown=!1},{once:!0})}),this.result.addEventListener("click",function(t){return e.registerSelected(t.target)})}},{key:"init",value:function(){if(this.layout.appendChild(this.trigger),this.settings.customClass&&s.default.addClass(this.layout,this.settings.customClass),this.settings.displayData&&this.settings.displayData(this.result),this.result.style.display="none",this.layout.appendChild(this.result),this.hasResult=!0,this.settings.initialValue?(this.trigger.innerHTML=this.settings.initialValue,a.default.prepend(s.default.createElement("li",{id:"default",innerHTML:this.settings.initialValue,className:l.SELECT.RESULT_ITEM}),this.result)):this.trigger.innerHTML=this.result.firstElementChild.innerHTML,this.attachEvents(),this.settings.returnCreated)return this.layout}}]),t}();t.default=c},function(e,t,n){n(7),e.exports=n(13)},function(e,t,n){"use strict";var r=c(n(8)),i=c(n(10)),s=c(n(5)),o=c(n(12)),a=c(n(0)),l=c(n(1)),u=n(2);function c(e){return e&&e.__esModule?e:{default:e}}var f=document.querySelector(".create-team-btn"),d=new r.default({isBody:!0},{modalOverlay:!0,modalOverlayClose:!0,customClass:"fh-modal--create-team",width:700},{steps:[{stepTitle:"Team info"},{stepTitle:"Add members"},{stepTitle:"Everything looks good?"}]}),p=new i.default(null,{addElement:function(e){return new o.default({reference:e.trigger,customClass:u.SEQUENTIAL_ADD.ITEM_ADD_NEW,placeholder:"johnsmith@mail.com",onAdd:function(e){e.focus()},onInput:function(e,t){$.ajax({url:"/Dashboard/SearchUsers",data:"q="+e.value,dataType:"json"}).done(function(n){var r=document.createDocumentFragment();if(0!==n.result.length)for(var i=0;i<n.result.length;i++){var s=n.result[i].Name+" "+n.result[i].Surname,o=a.default.createElement("li",{innerHTML:"<div>"+s+"</div>\n                          <div>"+n.result[i].Email+"</div>",className:"fh-select__result__item",id:"result-option-"+i});r.appendChild(o)}else{var l=a.default.createElement("li",{innerHTML:e.value+" isn't a FlowHub user",className:"fh-select__result__item"});r.appendChild(l)}t.innerHTML="",t.appendChild(r)})},onRegisterSelected:function(e,t){var n=a.default.createElement("div",{innerHTML:"<div>"+t.innerHTML+"</div>",className:u.SEQUENTIAL_ADD.ITEM_ADDED+" "+u.SEQUENTIAL_ADD.ITEM_ADDED+"--custom"}),r=a.default.createElement("button",{type:"button",className:u.SEQUENTIAL_ADD.ITEM_REMOVE}),i=new s.default({returnCreated:!0,initialValue:"Select role",displayData:function(e){for(var t=["Administrator","Moderator","Editor"],n=document.createDocumentFragment(),r=0;r<t.length;r++){var i=a.default.createElement("li",{id:"result-option-"+r,className:u.SELECT.RESULT_ITEM,innerHTML:t[r]});n.appendChild(i)}e.appendChild(n)},onRegisterSelected:function(e,t){e.trigger.innerHTML=t.innerHTML,e.hideResult()}}).init();n.appendChild(i),n.appendChild(r),l.default.replace(n,e.layout)}}).init()}});f.addEventListener("click",function(){$.ajax({url:"/Dashboard/CreateTeam",dataType:"html"}).done(function(e){d.configure(function(t){t.html=e}),d.init(),d.open();var t=d.getModal().querySelector("."+u.SEQUENTIAL_ADD.TRIGGER);p.setTrigger(t),p.init()})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=l(n(1)),s=l(n(0)),o=l(n(3)),a=l(n(9));function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return i.steps=r,i.current=0,i.stepTitle=void 0,i.stepPoints=[],i.stepSections=[],i.actions=void 0,i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default),r(t,[{key:"configure",value:function(e){e(this.content,this.options,this.steps)}},{key:"prev",value:function(e){--this.current<0?this.current=0:(this.stepTitle.innerHTML=this.steps.steps[this.current].stepTitle,s.default.removeClass(this.stepPoints[this.current+1],"fh-multistep__progress__point--current"),s.default.addClass(this.stepPoints[this.current],"fh-multistep__progress__point--current"),this.stepSections[this.current+1].style.display="none",this.stepSections[this.current].style.display="block",o.default.next(e,".step-next").innerHTML="Next")}},{key:"next",value:function(e){++this.current>this.steps.steps.length-1?this.current=this.steps.steps.length-1:(this.current===this.steps.steps.length-1&&(e.innerHTML="Done"),this.stepTitle.innerHTML=this.steps.steps[this.current].stepTitle,s.default.removeClass(this.stepPoints[this.current-1],"fh-multistep__progress__point--current"),s.default.addClass(this.stepPoints[this.current],"fh-multistep__progress__point--current"),this.stepSections[this.current-1].style.display="none",this.stepSections[this.current].style.display="block")}},{key:"attachEvents",value:function(){var e=this;(function e(t,n,r){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var s=Object.getPrototypeOf(t);return null===s?void 0:e(s,n,r)}if("value"in i)return i.value;var o=i.get;return void 0!==o?o.call(r):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"attachEvents",this).call(this),this.actions.addEventListener("click",function(t){var n=t.target;s.default.hasClass(n,"step-next")?e.next(n):s.default.hasClass(n,"step-prev")&&e.prev(n)})}},{key:"init",value:function(){this.createModal(),this.current=0;var e=this.modal.querySelector(".fh-multistep__steps"),t=document.createDocumentFragment(),n=document.createElement("div");n.className="fh-multistep__progress",this.stepTitle||(this.stepTitle=s.default.createElement("div",{className:"fh-multistep__step-title"})),this.stepSections=e.querySelectorAll(".fh-multistep__steps__step"),this.actions=o.default.next(o.default.parents(e,".fh-modal__content__body"),".fh-modal__content__footer"),t.appendChild(n),t.appendChild(this.stepTitle),i.default.before(t,e);var r=n.offsetWidth;t=document.createDocumentFragment();var a=s.default.createElement("div",{className:"fh-multistep__progress__line"});t.appendChild(a),this.stepPoints=[];for(var l=0;l<this.steps.steps.length;l++){var u=s.default.createElement("div",{className:"fh-multistep__progress__point",innerHTML:l+1});l<this.steps.steps.length-1&&(u.style.marginRight=(r-25*this.steps.steps.length)/(this.steps.steps.length-1)+"px"),this.stepPoints.push(u),t.appendChild(u),this.stepSections[l]&&0!==l&&(this.stepSections[l].style.display="none")}this.stepTitle.innerHTML=this.steps.steps[this.current].stepTitle,s.default.addClass(this.stepPoints[this.current],"fh-multistep__progress__point--current"),n.appendChild(t),this.attachEvents()}}]),t}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=o(n(1)),s=o(n(0));function o(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.content=t,this.options=n,this.opened=!1,this.modal=void 0,this.modalOverlay=void 0,this.modalClose=void 0}return r(e,[{key:"getModal",value:function(){return this.modal}},{key:"configure",value:function(e){e(this.content,this.options)}},{key:"open",value:function(){this.opened||(this.modal.style.visibility="visible",this.opened=!0)}},{key:"close",value:function(){this.opened&&(i.default.unmount(this.modal),this.opened=!1)}},{key:"attachEvents",value:function(){var e=this;this.modalOverlay.addEventListener("click",function(){e.close()}),this.modalClose.addEventListener("click",function(){e.close()})}},{key:"createModal",value:function(){this.modal=s.default.createElement("div",{className:"fh-modal"+(this.options.customClass?" "+this.options.customClass:"")},{visibility:"hidden"}),i.default.prepend(this.modal,document.body);var e=void 0,t=document.createDocumentFragment();this.options.modalOverlay&&(this.modalOverlay=s.default.createElement("div",{className:"fh-modal__overlay"}),t.appendChild(this.modalOverlay)),(e=this.content.isBody?s.default.createElement("div",{className:"fh-modal__content",innerHTML:this.content.html}):this.content.html).style="width: "+(this.options.width||600)+"px; height: "+(this.options.height||450)+"px;",this.modalClose=s.default.createElement("button",{className:"fh-modal__close"}),e.appendChild(this.modalClose);var n=s.default.createElement("div",{className:"fh-modal__placeholder"});n.appendChild(e),t.appendChild(n),this.modal.appendChild(t);var r=e.querySelector(".fh-modal__content__body"),o=window.getComputedStyle(e.querySelector(".fh-modal__content__header")),a=window.getComputedStyle(e.querySelector(".fh-modal__content__footer")),l=parseInt(a.height)+parseInt(a.marginTop)+parseInt(a.marginBottom),u=parseInt(o.height)+parseInt(o.marginTop)+parseInt(o.marginBottom);r.style.height=e.offsetHeight-l-u+"px"}},{key:"init",value:function(){this.createModal(),this.attachEvents()}}]),e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=u(n(4)),s=u(n(3)),o=u(n(0)),a=u(n(1)),l=n(2);function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return r.trigger=e,r.container=void 0,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default),r(t,[{key:"setTrigger",value:function(e){this.trigger=e}},{key:"add",value:function(){this.settings.addElement(this)}},{key:"attachEvents",value:function(){var e=this;this.container.addEventListener("click",function(t){var n=t.target;if(o.default.hasClass(n,l.SEQUENTIAL_ADD.TRIGGER)&&e.add(),o.default.hasClass(n,l.SEQUENTIAL_ADD.ITEM_REMOVE)){var r=s.default.parents(t.target,"."+l.SEQUENTIAL_ADD.ITEM_ADDED);r&&a.default.unmount(r)}})}},{key:"init",value:function(){this.container=s.default.parents(this.trigger,".fh-sequential-add"),this.attachEvents()}}]),t}();t.default=c},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function e(t,n,r){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var s=Object.getPrototypeOf(t);return null===s?void 0:e(s,n,r)}if("value"in i)return i.value;var o=i.get;return void 0!==o?o.call(r):void 0},s=u(n(1)),o=u(n(0)),a=u(n(5)),l=n(2);function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.trigger=o.default.createElement("input",{type:"text",placeholder:n.settings.placeholder}),n.selectable=!1,n.persistSelected=!1,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default),r(t,[{key:"showResult",value:function(){(this.selectable||this.trigger.value.trim())&&i(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"showResult",this).call(this)}},{key:"hideResult",value:function(){i(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"hideResult",this).call(this),!this.persistSelected&&this.deselect()}},{key:"attachEvents",value:function(){var e=this,n=void 0;this.trigger.addEventListener("focus",function(){return e.showResult()}),this.trigger.addEventListener("input",function(){e.showResult(),clearTimeout(n),e.trigger.value.trim()?n=setTimeout(s,300):e.hideResult()});var r=this;function s(){r.settings.onInput(r.trigger,r.result),r.deselect()}i(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"attachEvents",this).call(this)}},{key:"init",value:function(){this.layout.className=l.AUTOCOMPLETE.CONTAINER+" form-group form-group--small form-group--no-validation",this.layout.appendChild(this.trigger),this.settings.customClass&&o.default.addClass(this.layout,this.settings.customClass),this.settings.context?s.default.prepend(this.layout,this.settings.context):this.settings.reference&&s.default.before(this.layout,this.settings.reference),this.settings.onAdd&&this.settings.onAdd(this.trigger),this.attachEvents()}}]),t}();t.default=c},function(e,t,n){e.exports=n.p+"css/dashboard.css"}]);