(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4999517f"],{"0edc5":function(t,e,n){},"1a4b":function(t,e,n){},"259d":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"breadcrumb-wrapper"},[n("v-breadcrumbs",{attrs:{items:t.paths},scopedSlots:t._u([{key:"item",fn:function(e){var i=e.item;return[n("v-breadcrumbs-item",{staticClass:"page__title",attrs:{disabled:i.disabled}},[n("span",{on:{click:function(e){return t.navigate_from_breadcrumb(i)}}},[t._v(" "+t._s(i.text)+" ")])])]}}])},[n("v-icon",{attrs:{slot:"divider"},slot:"divider"},[t._v("chevron_right")])],1),t._t("extra")],2)},o=[],a={name:"Breadcrumb",props:{paths:{type:Array,default:function(){return[]}}},methods:{navigate_from_breadcrumb:function(t){if(t.hasOwnProperty("path"))t.path&&this.$router.push({path:t.path});else{var e=t.router_name;e&&this.$router.push({name:e})}}}},r=a,s=(n("5e17"),n("79a2"),n("2877")),l=Object(s["a"])(r,i,o,!1,null,"3cda09ee",null);e["a"]=l.exports},"29d6":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{staticClass:"table-header",attrs:{wrap:""}},[n("breadcrumb",{attrs:{paths:t.paths}}),n("v-flex",[t.noButton?t._e():n("v-btn",{staticClass:"add__btn mr-2",attrs:{fab:"",small:"",dark:"",color:"#3b589e"},on:{click:function(e){return t.$emit("click")}}},[n("v-icon",[t._v("add")])],1),t.noSortButton?t._e():n("v-btn",{staticClass:"add__btn mr-2",attrs:{fab:"",small:"",dark:"",color:"#3b589e"},on:{click:function(e){return t.$emit("click-sort-by")}}},[n("v-icon",[t._v("sort")])],1),t.noListButton?t._e():n("v-btn",{staticClass:"add__btn mr-2",attrs:{fab:"",small:"",dark:"",color:"#3b589e"},on:{click:function(e){return t.$emit("click-list-view")}}},[n("v-icon",[t._v("list")])],1),t.noGridButton?t._e():n("v-btn",{staticClass:"add__btn mr-2",attrs:{fab:"",small:"",dark:"",color:"#3b589e"},on:{click:function(e){return t.$emit("click-grid-view")}}},[n("v-icon",[t._v("mdi-view-dashboard")])],1),t._t("form-btn")],2)],1)},o=[],a=n("259d"),r={name:"TableHeader",props:{paths:{type:Array,default:[]},noButton:{type:Boolean,default:!1},noListButton:{type:Boolean,default:!0},noGridButton:{type:Boolean,default:!0},noSortButton:{type:Boolean,default:!0}},data:function(){return{fab:!0}},components:{Breadcrumb:a["a"]}},s=r,l=(n("337a"),n("2877")),c=Object(l["a"])(s,i,o,!1,null,"b8bfd1cc",null);e["a"]=c.exports},"2ff6":function(t,e,n){var i,o;(function(a,r){i=r,o="function"===typeof i?i.call(e,n,e,t):i,void 0===o||(t.exports=o)})("undefined"!==typeof self&&self,(function(){"function"!==typeof Promise&&function(e){function n(t,e){return function(){t.apply(e,arguments)}}function i(t){if("object"!==typeof this)throw new TypeError("Promises must be constructed via new");if("function"!==typeof t)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],c(t,n(a,this),n(r,this))}function o(t){var e=this;return null===this._state?void this._deferreds.push(t):void u((function(){var n=e._state?t.onFulfilled:t.onRejected;if(null!==n){var i;try{i=n(e._value)}catch(a){return void t.reject(a)}t.resolve(i)}else(e._state?t.resolve:t.reject)(e._value)}))}function a(t){try{if(t===this)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"===typeof t||"function"===typeof t)){var e=t.then;if("function"===typeof e)return void c(n(e,t),n(a,this),n(r,this))}this._state=!0,this._value=t,s.call(this)}catch(o){r.call(this,o)}}function r(t){this._state=!1,this._value=t,s.call(this)}function s(){for(var t=0,e=this._deferreds.length;e>t;t++)o.call(this,this._deferreds[t]);this._deferreds=null}function l(t,e,n,i){this.onFulfilled="function"===typeof t?t:null,this.onRejected="function"===typeof e?e:null,this.resolve=n,this.reject=i}function c(t,e,n){var i=!1;try{t((function(t){i||(i=!0,e(t))}),(function(t){i||(i=!0,n(t))}))}catch(a){if(i)return;i=!0,n(a)}}var d=setTimeout,u="function"===typeof setImmediate&&setImmediate||function(t){d(t,1)},p=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};i.prototype["catch"]=function(t){return this.then(null,t)},i.prototype.then=function(t,e){var n=this;return new i((function(i,a){o.call(n,new l(t,e,i,a))}))},i.all=function(){var t=Array.prototype.slice.call(1===arguments.length&&p(arguments[0])?arguments[0]:arguments);return new i((function(e,n){function i(a,r){try{if(r&&("object"===typeof r||"function"===typeof r)){var s=r.then;if("function"===typeof s)return void s.call(r,(function(t){i(a,t)}),n)}t[a]=r,0===--o&&e(t)}catch(c){n(c)}}if(0===t.length)return e([]);for(var o=t.length,a=0;a<t.length;a++)i(a,t[a])}))},i.resolve=function(t){return t&&"object"===typeof t&&t.constructor===i?t:new i((function(e){e(t)}))},i.reject=function(t){return new i((function(e,n){n(t)}))},i.race=function(t){return new i((function(e,n){for(var i=0,o=t.length;o>i;i++)t[i].then(e,n)}))},i._setImmediateFn=function(t){u=t},t.exports?t.exports=i:e.Promise||(e.Promise=i)}(this),"function"!==typeof window.CustomEvent&&function(){function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}t.prototype=window.Event.prototype,window.CustomEvent=t}(),HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function(t,e,n){for(var i=atob(this.toDataURL(e,n).split(",")[1]),o=i.length,a=new Uint8Array(o),r=0;r<o;r++)a[r]=i.charCodeAt(r);t(new Blob([a],{type:e||"image/png"}))}});var e,n,i,o=["Webkit","Moz","ms"],a=document.createElement("div").style,r=[1,8,3,6],s=[2,7,4,5];function l(t){if(t in a)return t;var e=t[0].toUpperCase()+t.slice(1),n=o.length;while(n--)if(t=o[n]+e,t in a)return t}function c(t,e){var n=r.indexOf(t)>-1?r:s,i=n.indexOf(t),o=e/90%n.length;return n[(n.length+i+o%n.length)%n.length]}function d(t,e){for(var n in t=t||{},e)e[n]&&e[n].constructor&&e[n].constructor===Object?(t[n]=t[n]||{},d(t[n],e[n])):t[n]=e[n];return t}function u(t){return d({},t)}function p(t,e,n){var i;return function(){var o=this,a=arguments,r=function(){i=null,n||t.apply(o,a)},s=n&&!i;clearTimeout(i),i=setTimeout(r,e),s&&t.apply(o,a)}}function h(t){if("createEvent"in document){var e=document.createEvent("HTMLEvents");e.initEvent("change",!1,!0),t.dispatchEvent(e)}else t.fireEvent("onchange")}function f(t,e,n){if("string"===typeof e){var i=e;e={},e[i]=n}for(var o in e)t.style[o]=e[o]}function m(t,e){t.classList?t.classList.add(e):t.className+=" "+e}function v(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(e,"")}function g(t,e){for(var n in e)t.setAttribute(n,e[n])}function w(t){return parseInt(t,10)}function b(t,e){var n=new Image;return n.style.opacity="0",new Promise((function(i,o){function a(){n.style.opacity="1",setTimeout((function(){i(n)}),1)}n.removeAttribute("crossOrigin"),t.match(/^https?:\/\/|^\/\//)&&n.setAttribute("crossOrigin","anonymous"),n.onload=function(){e?EXIF.getData(n,(function(){a()})):a()},n.onerror=function(t){n.style.opacity=1,setTimeout((function(){o(t)}),1)},n.src=t}))}function _(t,e){var n=t.naturalWidth,i=t.naturalHeight,o=e||E(t);if(o&&o>=5){var a=n;n=i,i=a}return{width:n,height:i}}n=l("transform"),e=l("transformOrigin"),i=l("userSelect");var y={translate3d:{suffix:", 0px"},translate:{suffix:""}},x=function(t,e,n){this.x=parseFloat(t),this.y=parseFloat(e),this.scale=parseFloat(n)};x.parse=function(t){return t.style?x.parse(t.style[n]):t.indexOf("matrix")>-1||t.indexOf("none")>-1?x.fromMatrix(t):x.fromString(t)},x.fromMatrix=function(t){var e=t.substring(7).split(",");return e.length&&"none"!==t||(e=[1,0,0,1,0,0]),new x(w(e[4]),w(e[5]),parseFloat(e[0]))},x.fromString=function(t){var e=t.split(") "),n=e[0].substring(at.globals.translate.length+1).split(","),i=e.length>1?e[1].substring(6):1,o=n.length>1?n[0]:0,a=n.length>1?n[1]:0;return new x(o,a,i)},x.prototype.toString=function(){var t=y[at.globals.translate].suffix||"";return at.globals.translate+"("+this.x+"px, "+this.y+"px"+t+") scale("+this.scale+")"};var C=function(t){if(!t||!t.style[e])return this.x=0,void(this.y=0);var n=t.style[e].split(" ");this.x=parseFloat(n[0]),this.y=parseFloat(n[1])};function E(t){return t.exifdata&&t.exifdata.Orientation?w(t.exifdata.Orientation):1}function k(t,e,n){var i=e.width,o=e.height,a=t.getContext("2d");switch(t.width=e.width,t.height=e.height,a.save(),n){case 2:a.translate(i,0),a.scale(-1,1);break;case 3:a.translate(i,o),a.rotate(180*Math.PI/180);break;case 4:a.translate(0,o),a.scale(1,-1);break;case 5:t.width=o,t.height=i,a.rotate(90*Math.PI/180),a.scale(1,-1);break;case 6:t.width=o,t.height=i,a.rotate(90*Math.PI/180),a.translate(0,-o);break;case 7:t.width=o,t.height=i,a.rotate(-90*Math.PI/180),a.translate(-i,o),a.scale(1,-1);break;case 8:t.width=o,t.height=i,a.translate(0,i),a.rotate(-90*Math.PI/180);break}a.drawImage(e,0,0,i,o),a.restore()}function B(){var t,e,n,i,o,a,r=this,s="croppie-container",l=r.options.viewport.type?"cr-vp-"+r.options.viewport.type:null;r.options.useCanvas=r.options.enableOrientation||$.call(r),r.data={},r.elements={},t=r.elements.boundary=document.createElement("div"),n=r.elements.viewport=document.createElement("div"),e=r.elements.img=document.createElement("img"),i=r.elements.overlay=document.createElement("div"),r.options.useCanvas?(r.elements.canvas=document.createElement("canvas"),r.elements.preview=r.elements.canvas):r.elements.preview=e,m(t,"cr-boundary"),t.setAttribute("aria-dropeffect","none"),o=r.options.boundary.width,a=r.options.boundary.height,f(t,{width:o+(isNaN(o)?"":"px"),height:a+(isNaN(a)?"":"px")}),m(n,"cr-viewport"),l&&m(n,l),f(n,{width:r.options.viewport.width+"px",height:r.options.viewport.height+"px"}),n.setAttribute("tabindex",0),m(r.elements.preview,"cr-image"),g(r.elements.preview,{alt:"preview","aria-grabbed":"false"}),m(i,"cr-overlay"),r.element.appendChild(t),t.appendChild(r.elements.preview),t.appendChild(n),t.appendChild(i),m(r.element,s),r.options.customClass&&m(r.element,r.options.customClass),M.call(this),r.options.enableZoom&&R.call(r),r.options.enableResize&&L.call(r)}function $(){return this.options.enableExif&&window.EXIF}function L(){var t,e,n,o,a,r,s,l=this,c=document.createElement("div"),d=!1,u=50;function p(r){if((void 0===r.button||0===r.button)&&(r.preventDefault(),!d)){var s=l.elements.overlay.getBoundingClientRect();if(d=!0,e=r.pageX,n=r.pageY,t=-1!==r.currentTarget.className.indexOf("vertical")?"v":"h",o=s.width,a=s.height,r.touches){var c=r.touches[0];e=c.pageX,n=c.pageY}window.addEventListener("mousemove",h),window.addEventListener("touchmove",h),window.addEventListener("mouseup",v),window.addEventListener("touchend",v),document.body.style[i]="none"}}function h(i){var r=i.pageX,s=i.pageY;if(i.preventDefault(),i.touches){var d=i.touches[0];r=d.pageX,s=d.pageY}var p=r-e,h=s-n,m=l.options.viewport.height+h,v=l.options.viewport.width+p;"v"===t&&m>=u&&m<=a?(f(c,{height:m+"px"}),l.options.boundary.height+=h,f(l.elements.boundary,{height:l.options.boundary.height+"px"}),l.options.viewport.height+=h,f(l.elements.viewport,{height:l.options.viewport.height+"px"})):"h"===t&&v>=u&&v<=o&&(f(c,{width:v+"px"}),l.options.boundary.width+=p,f(l.elements.boundary,{width:l.options.boundary.width+"px"}),l.options.viewport.width+=p,f(l.elements.viewport,{width:l.options.viewport.width+"px"})),z.call(l),W.call(l),Z.call(l),I.call(l),n=s,e=r}function v(){d=!1,window.removeEventListener("mousemove",h),window.removeEventListener("touchmove",h),window.removeEventListener("mouseup",v),window.removeEventListener("touchend",v),document.body.style[i]=""}m(c,"cr-resizer"),f(c,{width:this.options.viewport.width+"px",height:this.options.viewport.height+"px"}),this.options.resizeControls.height&&(r=document.createElement("div"),m(r,"cr-resizer-vertical"),c.appendChild(r)),this.options.resizeControls.width&&(s=document.createElement("div"),m(s,"cr-resizer-horisontal"),c.appendChild(s)),r&&(r.addEventListener("mousedown",p),r.addEventListener("touchstart",p)),s&&(s.addEventListener("mousedown",p),s.addEventListener("touchstart",p)),this.elements.boundary.appendChild(c)}function O(t){if(this.options.enableZoom){var e=this.elements.zoomer,n=G(t,4);e.value=Math.max(parseFloat(e.min),Math.min(parseFloat(e.max),n)).toString()}}function R(){var t=this,e=t.elements.zoomerWrap=document.createElement("div"),n=t.elements.zoomer=document.createElement("input");function i(){j.call(t,{value:parseFloat(n.value),origin:new C(t.elements.preview),viewportRect:t.elements.viewport.getBoundingClientRect(),transform:x.parse(t.elements.preview)})}function o(e){var n,o;if("ctrl"===t.options.mouseWheelZoom&&!0!==e.ctrlKey)return 0;n=e.wheelDelta?e.wheelDelta/1200:e.deltaY?e.deltaY/1060:e.detail?e.detail/-60:0,o=t._currentZoom+n*t._currentZoom,e.preventDefault(),O.call(t,o),i.call(t)}m(e,"cr-slider-wrap"),m(n,"cr-slider"),n.type="range",n.step="0.0001",n.value="1",n.style.display=t.options.showZoomer?"":"none",n.setAttribute("aria-label","zoom"),t.element.appendChild(e),e.appendChild(n),t._currentZoom=1,t.elements.zoomer.addEventListener("input",i),t.elements.zoomer.addEventListener("change",i),t.options.mouseWheelZoom&&(t.elements.boundary.addEventListener("mousewheel",o),t.elements.boundary.addEventListener("DOMMouseScroll",o))}function j(t){var i=this,o=t?t.transform:x.parse(i.elements.preview),a=t?t.viewportRect:i.elements.viewport.getBoundingClientRect(),r=t?t.origin:new C(i.elements.preview);function s(){var t={};t[n]=o.toString(),t[e]=r.toString(),f(i.elements.preview,t)}if(i._currentZoom=t?t.value:i._currentZoom,o.scale=i._currentZoom,i.elements.zoomer.setAttribute("aria-valuenow",i._currentZoom),s(),i.options.enforceBoundary){var l=S.call(i,a),c=l.translate,d=l.origin;o.x>=c.maxX&&(r.x=d.minX,o.x=c.maxX),o.x<=c.minX&&(r.x=d.maxX,o.x=c.minX),o.y>=c.maxY&&(r.y=d.minY,o.y=c.maxY),o.y<=c.minY&&(r.y=d.maxY,o.y=c.minY)}s(),P.call(i),I.call(i)}function S(t){var e=this,n=e._currentZoom,i=t.width,o=t.height,a=e.elements.boundary.clientWidth/2,r=e.elements.boundary.clientHeight/2,s=e.elements.preview.getBoundingClientRect(),l=s.width,c=s.height,d=i/2,u=o/2,p=-1*(d/n-a),h=p-(l*(1/n)-i*(1/n)),f=-1*(u/n-r),m=f-(c*(1/n)-o*(1/n)),v=1/n*d,g=l*(1/n)-v,w=1/n*u,b=c*(1/n)-w;return{translate:{maxX:p,minX:h,maxY:f,minY:m},origin:{maxX:g,minX:v,maxY:b,minY:w}}}function Z(t){var i=this,o=i._currentZoom,a=i.elements.preview.getBoundingClientRect(),r=i.elements.viewport.getBoundingClientRect(),s=x.parse(i.elements.preview.style[n]),l=new C(i.elements.preview),c=r.top-a.top+r.height/2,d=r.left-a.left+r.width/2,u={},p={};if(t){var h=l.x,m=l.y,v=s.x,g=s.y;u.y=h,u.x=m,s.y=v,s.x=g}else u.y=c/o,u.x=d/o,p.y=(u.y-l.y)*(1-o),p.x=(u.x-l.x)*(1-o),s.x-=p.x,s.y-=p.y;var w={};w[e]=u.x+"px "+u.y+"px",w[n]=s.toString(),f(i.elements.preview,w)}function M(){var t,e,o,a,r,s=this,l=!1;function c(t,e){var n=s.elements.preview.getBoundingClientRect(),i=r.y+e,o=r.x+t;s.options.enforceBoundary?(a.top>n.top+e&&a.bottom<n.bottom+e&&(r.y=i),a.left>n.left+t&&a.right<n.right+t&&(r.x=o)):(r.y=i,r.x=o)}function d(t){s.elements.preview.setAttribute("aria-grabbed",t),s.elements.boundary.setAttribute("aria-dropeffect",t?"move":"none")}function u(t){var e,n=37,o=38,l=39,c=40;if(!t.shiftKey||t.keyCode!==o&&t.keyCode!==c){if(s.options.enableKeyMovement&&t.keyCode>=37&&t.keyCode<=40){t.preventDefault();var d=u(t.keyCode);r=x.parse(s.elements.preview),document.body.style[i]="none",a=s.elements.viewport.getBoundingClientRect(),p(d)}}else e=t.keyCode===o?parseFloat(s.elements.zoomer.value)+parseFloat(s.elements.zoomer.step):parseFloat(s.elements.zoomer.value)-parseFloat(s.elements.zoomer.step),s.setZoom(e);function u(t){switch(t){case n:return[1,0];case o:return[0,1];case l:return[-1,0];case c:return[0,-1]}}}function p(t){var e=t[0],a=t[1],l={};c(e,a),l[n]=r.toString(),f(s.elements.preview,l),z.call(s),document.body.style[i]="",Z.call(s),I.call(s),o=0}function m(n){if((void 0===n.button||0===n.button)&&(n.preventDefault(),!l)){if(l=!0,t=n.pageX,e=n.pageY,n.touches){var o=n.touches[0];t=o.pageX,e=o.pageY}d(l),r=x.parse(s.elements.preview),window.addEventListener("mousemove",v),window.addEventListener("touchmove",v),window.addEventListener("mouseup",g),window.addEventListener("touchend",g),document.body.style[i]="none",a=s.elements.viewport.getBoundingClientRect()}}function v(i){i.preventDefault();var a=i.pageX,l=i.pageY;if(i.touches){var d=i.touches[0];a=d.pageX,l=d.pageY}var u=a-t,p=l-e,m={};if("touchmove"===i.type&&i.touches.length>1){var v=i.touches[0],g=i.touches[1],w=Math.sqrt((v.pageX-g.pageX)*(v.pageX-g.pageX)+(v.pageY-g.pageY)*(v.pageY-g.pageY));o||(o=w/s._currentZoom);var b=w/o;return O.call(s,b),void h(s.elements.zoomer)}c(u,p),m[n]=r.toString(),f(s.elements.preview,m),z.call(s),e=l,t=a}function g(){l=!1,d(l),window.removeEventListener("mousemove",v),window.removeEventListener("touchmove",v),window.removeEventListener("mouseup",g),window.removeEventListener("touchend",g),document.body.style[i]="",Z.call(s),I.call(s),o=0}s.elements.overlay.addEventListener("mousedown",m),s.elements.viewport.addEventListener("keydown",u),s.elements.overlay.addEventListener("touchstart",m)}function z(){if(this.elements){var t=this,e=t.elements.boundary.getBoundingClientRect(),n=t.elements.preview.getBoundingClientRect();f(t.elements.overlay,{width:n.width+"px",height:n.height+"px",top:n.top-e.top+"px",left:n.left-e.left+"px"})}}C.prototype.toString=function(){return this.x+"px "+this.y+"px"};var P=p(z,500);function I(){var t,e=this,n=e.get();T.call(e)&&(e.options.update.call(e,n),e.$&&"undefined"===typeof Prototype?e.$(e.element).trigger("update.croppie",n):(window.CustomEvent?t=new CustomEvent("update",{detail:n}):(t=document.createEvent("CustomEvent"),t.initCustomEvent("update",!0,!0,n)),e.element.dispatchEvent(t)))}function T(){return this.elements.preview.offsetHeight>0&&this.elements.preview.offsetWidth>0}function F(){var t,i=this,o=1,a={},r=i.elements.preview,s=new x(0,0,o),l=new C,c=T.call(i);c&&!i.data.bound&&(i.data.bound=!0,a[n]=s.toString(),a[e]=l.toString(),a["opacity"]=1,f(r,a),t=i.elements.preview.getBoundingClientRect(),i._originalImageWidth=t.width,i._originalImageHeight=t.height,i.data.orientation=E(i.elements.img),i.options.enableZoom?W.call(i,!0):i._currentZoom=o,s.scale=i._currentZoom,a[n]=s.toString(),f(r,a),i.data.points.length?X.call(i,i.data.points):Y.call(i),Z.call(i),z.call(i))}function W(t){var e,n,i,o,a=this,r=Math.max(a.options.minZoom,0)||0,s=a.options.maxZoom||1.5,l=a.elements.zoomer,c=parseFloat(l.value),d=a.elements.boundary.getBoundingClientRect(),u=_(a.elements.img,a.data.orientation),p=a.elements.viewport.getBoundingClientRect();a.options.enforceBoundary&&(i=p.width/u.width,o=p.height/u.height,r=Math.max(i,o)),r>=s&&(s=r+1),l.min=G(r,4),l.max=G(s,4),!t&&(c<l.min||c>l.max)?O.call(a,c<l.min?l.min:l.max):t&&(n=Math.max(d.width/u.width,d.height/u.height),e=null!==a.data.boundZoom?a.data.boundZoom:n,O.call(a,e)),h(l)}function X(t){if(4!==t.length)throw"Croppie - Invalid number of points supplied: "+t;var i=this,o=t[2]-t[0],a=i.elements.viewport.getBoundingClientRect(),r=i.elements.boundary.getBoundingClientRect(),s={left:a.left-r.left,top:a.top-r.top},l=a.width/o,c=t[1],d=t[0],u=-1*t[1]+s.top,p=-1*t[0]+s.left,h={};h[e]=d+"px "+c+"px",h[n]=new x(p,u,l).toString(),f(i.elements.preview,h),O.call(i,l),i._currentZoom=l}function Y(){var t=this,e=t.elements.preview.getBoundingClientRect(),i=t.elements.viewport.getBoundingClientRect(),o=t.elements.boundary.getBoundingClientRect(),a=i.left-o.left,r=i.top-o.top,s=a-(e.width-i.width)/2,l=r-(e.height-i.height)/2,c=new x(s,l,t._currentZoom);f(t.elements.preview,n,c.toString())}function A(t){var e=this,n=e.elements.canvas,i=e.elements.img,o=n.getContext("2d");o.clearRect(0,0,n.width,n.height),n.width=i.width,n.height=i.height;var a=e.options.enableOrientation&&t||E(i);k(n,i,a)}function q(t){var e=this,n=t.points,i=w(n[0]),o=w(n[1]),a=w(n[2]),r=w(n[3]),s=a-i,l=r-o,c=t.circle,d=document.createElement("canvas"),u=d.getContext("2d"),p=t.outputWidth||s,h=t.outputHeight||l;d.width=p,d.height=h,t.backgroundColor&&(u.fillStyle=t.backgroundColor,u.fillRect(0,0,p,h));var f=i,m=o,v=s,g=l,b=0,_=0,y=p,x=h;return i<0&&(f=0,b=Math.abs(i)/s*p),v+f>e._originalImageWidth&&(v=e._originalImageWidth-f,y=v/s*p),o<0&&(m=0,_=Math.abs(o)/l*h),g+m>e._originalImageHeight&&(g=e._originalImageHeight-m,x=g/l*h),u.drawImage(this.elements.preview,f,m,v,g,b,_,y,x),c&&(u.fillStyle="#fff",u.globalCompositeOperation="destination-in",u.beginPath(),u.arc(d.width/2,d.height/2,d.width/2,0,2*Math.PI,!0),u.closePath(),u.fill()),d}function H(t){var e=t.points,n=document.createElement("div"),i=document.createElement("img"),o=e[2]-e[0],a=e[3]-e[1];return m(n,"croppie-result"),n.appendChild(i),f(i,{left:-1*e[0]+"px",top:-1*e[1]+"px"}),i.src=t.url,f(n,{width:o+"px",height:a+"px"}),n}function N(t){return q.call(this,t).toDataURL(t.format,t.quality)}function D(t){var e=this;return new Promise((function(n){q.call(e,t).toBlob((function(t){n(t)}),t.format,t.quality)}))}function U(t){this.elements.img.parentNode&&(Array.prototype.forEach.call(this.elements.img.classList,(function(e){t.classList.add(e)})),this.elements.img.parentNode.replaceChild(t,this.elements.img),this.elements.preview=t),this.elements.img=t}function K(t,e){var n,i=this,o=[],a=null,r=$.call(i);if("string"===typeof t)n=t,t={};else if(Array.isArray(t))o=t.slice();else{if("undefined"===typeof t&&i.data.url)return F.call(i),I.call(i),null;n=t.url,o=t.points||[],a="undefined"===typeof t.zoom?null:t.zoom}return i.data.bound=!1,i.data.url=n||i.data.url,i.data.boundZoom=a,b(n,r).then((function(n){if(U.call(i,n),o.length)i.options.relative&&(o=[o[0]*n.naturalWidth/100,o[1]*n.naturalHeight/100,o[2]*n.naturalWidth/100,o[3]*n.naturalHeight/100]);else{var a,r,s=_(n),l=i.elements.viewport.getBoundingClientRect(),c=l.width/l.height,d=s.width/s.height;d>c?(r=s.height,a=r*c):(a=s.width,r=s.height/c);var u=(s.width-a)/2,p=(s.height-r)/2,h=u+a,f=p+r;i.data.points=[u,p,h,f]}i.data.points=o.map((function(t){return parseFloat(t)})),i.options.useCanvas&&A.call(i,t.orientation),F.call(i),I.call(i),e&&e()}))}function G(t,e){return parseFloat(t).toFixed(e||0)}function J(){var t=this,e=t.elements.preview.getBoundingClientRect(),n=t.elements.viewport.getBoundingClientRect(),i=n.left-e.left,o=n.top-e.top,a=(n.width-t.elements.viewport.offsetWidth)/2,r=(n.height-t.elements.viewport.offsetHeight)/2,s=i+t.elements.viewport.offsetWidth+a,l=o+t.elements.viewport.offsetHeight+r,c=t._currentZoom;(c===1/0||isNaN(c))&&(c=1);var d=t.options.enforceBoundary?0:Number.NEGATIVE_INFINITY;return i=Math.max(d,i/c),o=Math.max(d,o/c),s=Math.max(d,s/c),l=Math.max(d,l/c),{points:[G(i),G(o),G(s),G(l)],zoom:c,orientation:t.data.orientation}}var Q={type:"canvas",format:"png",quality:1},V=["jpeg","webp","png"];function tt(t){var e,n=this,i=J.call(n),o=d(u(Q),u(t)),a="string"===typeof t?t:o.type||"base64",r=o.size||"viewport",s=o.format,l=o.quality,c=o.backgroundColor,p="boolean"===typeof o.circle?o.circle:"circle"===n.options.viewport.type,h=n.elements.viewport.getBoundingClientRect(),f=h.width/h.height;return"viewport"===r?(i.outputWidth=h.width,i.outputHeight=h.height):"object"===typeof r&&(r.width&&r.height?(i.outputWidth=r.width,i.outputHeight=r.height):r.width?(i.outputWidth=r.width,i.outputHeight=r.width/f):r.height&&(i.outputWidth=r.height*f,i.outputHeight=r.height)),V.indexOf(s)>-1&&(i.format="image/"+s,i.quality=l),i.circle=p,i.url=n.data.url,i.backgroundColor=c,e=new Promise((function(t){switch(a.toLowerCase()){case"rawcanvas":t(q.call(n,i));break;case"canvas":case"base64":t(N.call(n,i));break;case"blob":D.call(n,i).then(t);break;default:t(H.call(n,i));break}})),e}function et(){F.call(this)}function nt(t){if(!this.options.useCanvas||!this.options.enableOrientation)throw"Croppie: Cannot rotate without enableOrientation && EXIF.js included";var e=this,n=e.elements.canvas;e.data.orientation=c(e.data.orientation,t),k(n,e.elements.img,e.data.orientation),Z.call(e,!0),W.call(e)}function it(){var t=this;t.element.removeChild(t.elements.boundary),v(t.element,"croppie-container"),t.options.enableZoom&&t.element.removeChild(t.elements.zoomerWrap),delete t.elements}if(window.jQuery){var ot=window.jQuery;ot.fn.croppie=function(t){var e=typeof t;if("string"===e){var n=Array.prototype.slice.call(arguments,1),i=ot(this).data("croppie");return"get"===t?i.get():"result"===t?i.result.apply(i,n):"bind"===t?i.bind.apply(i,n):this.each((function(){var e=ot(this).data("croppie");if(e){var i=e[t];if(!ot.isFunction(i))throw"Croppie "+t+" method not found";i.apply(e,n),"destroy"===t&&ot(this).removeData("croppie")}}))}return this.each((function(){var e=new at(this,t);e.$=ot,ot(this).data("croppie",e)}))}}function at(t,e){if(t.className.indexOf("croppie-container")>-1)throw new Error("Croppie: Can't initialize croppie more than once");if(this.element=t,this.options=d(u(at.defaults),e),"img"===this.element.tagName.toLowerCase()){var n=this.element;m(n,"cr-original-image"),g(n,{"aria-hidden":"true",alt:""});var i=document.createElement("div");this.element.parentNode.appendChild(i),i.appendChild(n),this.element=i,this.options.url=this.options.url||n.src}if(B.call(this),this.options.url){var o={url:this.options.url,points:this.options.points};delete this.options["url"],delete this.options["points"],K.call(this,o)}}return at.defaults={viewport:{width:100,height:100,type:"square"},boundary:{},orientationControls:{enabled:!0,leftClass:"",rightClass:""},resizeControls:{width:!0,height:!0},customClass:"",showZoomer:!0,enableZoom:!0,enableResize:!1,mouseWheelZoom:!0,enableExif:!1,enforceBoundary:!0,enableOrientation:!1,enableKeyMovement:!0,update:function(){}},at.globals={translate:"translate3d"},d(at.prototype,{bind:function(t,e){return K.call(this,t,e)},get:function(){var t=J.call(this),e=t.points;return this.options.relative&&(e[0]/=this.elements.img.naturalWidth/100,e[1]/=this.elements.img.naturalHeight/100,e[2]/=this.elements.img.naturalWidth/100,e[3]/=this.elements.img.naturalHeight/100),t},result:function(t){return tt.call(this,t)},refresh:function(){return et.call(this)},setZoom:function(t){O.call(this,t),h(this.elements.zoomer)},rotate:function(t){nt.call(this,t)},destroy:function(){return it.call(this)}}),at}))},"337a":function(t,e,n){"use strict";var i=n("9e25"),o=n.n(i);o.a},"419a":function(t,e,n){"use strict";var i=n("4c2e"),o=n.n(i);o.a},"43d6":function(t,e,n){},"4c2e":function(t,e,n){},"57e5":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"justify-center":""}},[n("v-dialog",{attrs:{persistent:"","max-width":t.maxWidth},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.loading?n("v-progress-linear",{attrs:{slot:"progress",color:"blue",indeterminate:""},slot:"progress"}):n("v-card",{staticClass:"custom__dialog",attrs:{tile:""}},[n("v-card-title",{staticClass:"dialog__header"},[t._t("entire-header",[t._t("title",[n("span",{staticClass:"dialog__title"},[t._v(t._s(t.title))])]),t._t("cancel-icon",[n("v-btn",{staticClass:"close__dialog",attrs:{fab:"",small:"",depressed:""},on:{click:t.close_dialog}},[n("v-icon",[t._v("close")])],1)])])],2),n("v-card-text",{staticClass:"dialog__body"},[t._t("content",[n("div",{domProps:{innerHTML:t._s(t.content)}})])],2),n("v-card-actions",{staticClass:"dialog__actions"},[t._t("entire-actions",[t._t("extras"),t._t("button1",[n("v-btn",{attrs:{disabled:t.btnloading},on:{click:t.button1clicked}},[t._v(t._s(t.button1Text))])]),t._t("button2",[n("v-btn",{attrs:{loading:t.btnloading,disabled:t.mainBtnDisabled},on:{click:t.button2clicked}},[t._v(t._s(t.button2Text))])])])],2)],1)],1)],1)},o=[],a=(n("c5f6"),{props:{title:{type:String,default:"Default Modal Title"},content:{type:String,default:"Default Modal Text Content"},button1Text:{type:String,default:"Cancel"},button2Text:{type:String,default:"Delete"},open:Boolean,value:Boolean,mainBtnDisabled:{type:Boolean,default:!1},maxWidth:{type:[Number,String],default:"600px"}},data:function(){return{dialog:!1,loading:!1,btnloading:!1}},mounted:function(){var t=this;this.$event.$on("btnloading_off",(function(e){t.btnloading=!1}))},watch:{value:{handler:function(t){this.dialog=t},immediate:!0},open:function(t){this.dialog=t,this.btnloading=!1},dialog:function(t){this.$emit("update:open",t),this.$emit("input",t)}},methods:{button1clicked:function(){this.$emit("button1"),this.close_dialog()},button2clicked:function(){this.btnloading=!0,this.$emit("button2")},open_dialog:function(){this.dialog=!0},close_dialog:function(){this.dialog=!1,this.btnloading=!1},clear_and_close:function(){Object.assign(this.$data,this.$options.data.apply(this)),this.close_dialog()},activate_loading:function(){this.loading=!0},disable_loading:function(){this.loading=!1}}}),r=a,s=(n("731a"),n("dd8e"),n("2877")),l=Object(s["a"])(r,i,o,!1,null,"37eed48a",null);e["a"]=l.exports},"5e17":function(t,e,n){"use strict";var i=n("8c6e"),o=n.n(i);o.a},"731a":function(t,e,n){"use strict";var i=n("9dcc"),o=n.n(i);o.a},"79a2":function(t,e,n){"use strict";var i=n("0edc5"),o=n.n(i);o.a},"7e6a":function(t,e,n){"use strict";var i=n("e992"),o=n.n(i);o.a},"854b":function(t,e,n){"use strict";var i=function(t,e){var n=e._c;return e.props.loading?n("transition",{attrs:{name:"fade"}},[n("div",{staticClass:"custom-loader"},[n("v-progress-circular",{attrs:{indeterminate:"",color:"primary",size:72}})],1)]):e._e()},o=[],a={props:{loading:Boolean}},r=a,s=(n("7e6a"),n("2877")),l=Object(s["a"])(r,i,o,!0,null,"0a16da3c",null);e["a"]=l.exports},"8c6e":function(t,e,n){},"8c75":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"crop-image"},[n("div",{staticClass:"image"})])}],a=n("2ff6"),r=n.n(a),s=(n("dee1"),{props:["image","options","result"],data:function(){return{croppie:null}},mounted:function(){var t=document.querySelector(".image");this.croppie=new r.a(t,this.options),this.croppie.bind(this.image)},methods:{get_result:function(){return this.croppie.result(this.result)},clear_component:function(){this.croppie.destroy(),Object.assign(this.$data,this.$options.data.apply(this))}}}),l=s,c=n("2877"),d=Object(c["a"])(l,i,o,!1,null,null,null);e["a"]=d.exports},"9dcc":function(t,e,n){},"9e25":function(t,e,n){},dd8e:function(t,e,n){"use strict";var i=n("43d6"),o=n.n(i);o.a},dee1:function(t,e,n){},e992:function(t,e,n){},ec05:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("custom-dialog",{ref:"dialog",attrs:{title:t.title,open:t.opendialog,"button2-text":"Save"},on:{"update:open":function(e){t.opendialog=e},button1:t.clear_and_close}},[n("template",{slot:"content"},[t.loading?n("v-progress-linear",{attrs:{slot:"progress",color:"blue",indeterminate:""},slot:"progress"}):t._e(),t.required_current_password?n("label",{staticClass:"mr-1"},[t._v("Current Password")]):t._e(),t.required_current_password?n("v-flex",{attrs:{xs12:"",sm12:""}},[n("v-text-field",{staticClass:"dialog__password d-field",attrs:{color:"#667187",solo:"","hide-details":"",disabled:t.disabled_all,error:t.$v.current_password.$error,"append-icon":t.show_current_password?"visibility_off":"visibility",label:"Current Password",type:t.show_current_password?"text":"password"},on:{blur:function(e){return t.on_blur_field("current_password")},"click:append":function(e){t.show_current_password=!t.show_current_password}},model:{value:t.current_password,callback:function(e){t.current_password="string"===typeof e?e.trim():e},expression:"current_password"}})],1):t._e(),n("label",{staticClass:"mr-1"},[t._v("New Password")]),n("v-flex",{attrs:{xs12:"",sm12:""}},[n("v-text-field",{staticClass:"dialog__password d-field",attrs:{color:"#667187",solo:"","hide-details":"",disabled:t.disabled_all,error:t.$v.password.$error,"append-icon":t.show_password?"visibility_off":"visibility",label:"Password",type:t.show_password?"text":"password"},on:{blur:function(e){return t.on_blur_field("password")},"click:append":function(e){t.show_password=!t.show_password}},model:{value:t.password,callback:function(e){t.password="string"===typeof e?e.trim():e},expression:"password"}})],1),n("label",{staticClass:"mr-1"},[t._v("Confirm Password")]),n("v-flex",{attrs:{xs12:"",sm12:""}},[n("v-text-field",{staticClass:"dialog__password d-field",attrs:{color:"#667187",solo:"","hide-details":"",disabled:t.disabled_all,error:t.$v.repeat_password.$error,"append-icon":t.show_repeat_password?"visibility_off":"visibility",label:"Repeat Password",type:t.show_repeat_password?"text":"password"},on:{blur:function(e){return t.on_blur_field("repeat_password")},"click:append":function(e){t.show_repeat_password=!t.show_repeat_password}},model:{value:t.repeat_password,callback:function(e){t.repeat_password="string"===typeof e?e.trim():e},expression:"repeat_password"}})],1)],1),n("template",{slot:"button2"},[n("v-btn",{attrs:{disabled:t.$v.$invalid,loading:t.btnloading},on:{click:t.save}},[t._v("Save")])],1)],2)},o=[],a=(n("28a5"),n("b5ae")),r=n("8103"),s=n.n(r),l={validations:{current_password:{required:Object(a["requiredIf"])((function(){return this.required_current_password}))},password:{required:a["required"],minLength:Object(a["minLength"])(6),containsNumber:function(t){return!t||t.length<6||/\d/.test(t)}},repeat_password:{required:a["required"],matchPassword:function(t){return t===this.password}}},methods:{on_blur_field:function(t){if(this.$v[t].$touch(),this.$v[t].$invalid){var e=t.split("_").map(s.a).join(" ");this.$event.$emit("open_snackbar","".concat(e," is invalid"),"error")}},all_validations_passed:function(){return this.$v.$touch(),!this.$v.$invalid||(this.$event.$emit("open_snackbar","Please fill fields correctly!","error"),!1)}}},c=n("1be9"),d=n("57e5"),u={name:"UpdatePasswordDialog",mixins:[l],props:{title:String,isEditDialog:{type:Boolean,default:!1},fieldsToEdit:{type:Object,default:function(){}}},components:{CustomDialog:d["a"]},created:function(){var t=this;this.$event.$on("btnloading_off",(function(e){return t.btnloading=e}))},data:function(){return{btnloading:!1,opendialog:!1,current_password:"",password:"",repeat_password:"",required_current_password:!0,show_current_password:!1,show_password:!1,show_repeat_password:!1,loading:!1,disabled_all:!1}},computed:{initiator:function(){return this.$store.getters.user}},methods:{open:function(){this.opendialog=!0,this.initiator.is_admin&&this.initiator.id!==this.fieldsToEdit.id&&(this.required_current_password=!1),this.initiator.is_admin||this.initiator.id===this.fieldsToEdit.id||(this.disabled_all=!0),this.initiator.is_admin||this.initiator.id!==this.fieldsToEdit.id||(this.disabled_all=!1)},cancel:function(){this.opendialog=!1,this.btnloading=!1,this.$emit("close-dialog")},clear_and_close:function(){this.password=this.repeat_password=this.current_password="",this.cancel()},save:function(){var t=this;if(this.all_validations_passed()){this.btnloading=!0;var e=this.get_fields();c["a"].post("api/user/update-password",e).then((function(e){var n=e.data;t.fieldsToEdit.fields=n.data,t.clear_and_close(),t.$event.$emit("open_snackbar","Password updated")})).finally((function(){t.btnloading=!1}))}},get_fields:function(){var t={user_id:this.fieldsToEdit.id,password:this.password,password_confirmation:this.repeat_password,required_current_password:this.required_current_password};return this.required_current_password&&(t.current_password=this.current_password),t}}},p=u,h=(n("f391"),n("419a"),n("2877")),f=Object(h["a"])(p,i,o,!1,null,"1d2f293c",null);e["a"]=f.exports},f391:function(t,e,n){"use strict";var i=n("1a4b"),o=n.n(i);o.a}}]);
//# sourceMappingURL=chunk-4999517f.e0620f97.js.map