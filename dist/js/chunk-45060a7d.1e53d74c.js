(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45060a7d"],{"1a4b":function(e,t,n){},"2ff6":function(e,t,n){var i,o;(function(r,a){i=a,o="function"===typeof i?i.call(t,n,t,e):i,void 0===o||(e.exports=o)})("undefined"!==typeof self&&self,(function(){"function"!==typeof Promise&&function(t){function n(e,t){return function(){e.apply(t,arguments)}}function i(e){if("object"!==typeof this)throw new TypeError("Promises must be constructed via new");if("function"!==typeof e)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],c(e,n(r,this),n(a,this))}function o(e){var t=this;return null===this._state?void this._deferreds.push(e):void d((function(){var n=t._state?e.onFulfilled:e.onRejected;if(null!==n){var i;try{i=n(t._value)}catch(r){return void e.reject(r)}e.resolve(i)}else(t._state?e.resolve:e.reject)(t._value)}))}function r(e){try{if(e===this)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"===typeof e||"function"===typeof e)){var t=e.then;if("function"===typeof t)return void c(n(t,e),n(r,this),n(a,this))}this._state=!0,this._value=e,s.call(this)}catch(o){a.call(this,o)}}function a(e){this._state=!1,this._value=e,s.call(this)}function s(){for(var e=0,t=this._deferreds.length;t>e;e++)o.call(this,this._deferreds[e]);this._deferreds=null}function l(e,t,n,i){this.onFulfilled="function"===typeof e?e:null,this.onRejected="function"===typeof t?t:null,this.resolve=n,this.reject=i}function c(e,t,n){var i=!1;try{e((function(e){i||(i=!0,t(e))}),(function(e){i||(i=!0,n(e))}))}catch(r){if(i)return;i=!0,n(r)}}var u=setTimeout,d="function"===typeof setImmediate&&setImmediate||function(e){u(e,1)},p=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};i.prototype["catch"]=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=this;return new i((function(i,r){o.call(n,new l(e,t,i,r))}))},i.all=function(){var e=Array.prototype.slice.call(1===arguments.length&&p(arguments[0])?arguments[0]:arguments);return new i((function(t,n){function i(r,a){try{if(a&&("object"===typeof a||"function"===typeof a)){var s=a.then;if("function"===typeof s)return void s.call(a,(function(e){i(r,e)}),n)}e[r]=a,0===--o&&t(e)}catch(c){n(c)}}if(0===e.length)return t([]);for(var o=e.length,r=0;r<e.length;r++)i(r,e[r])}))},i.resolve=function(e){return e&&"object"===typeof e&&e.constructor===i?e:new i((function(t){t(e)}))},i.reject=function(e){return new i((function(t,n){n(e)}))},i.race=function(e){return new i((function(t,n){for(var i=0,o=e.length;o>i;i++)e[i].then(t,n)}))},i._setImmediateFn=function(e){d=e},e.exports?e.exports=i:t.Promise||(t.Promise=i)}(this),"function"!==typeof window.CustomEvent&&function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}(),HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function(e,t,n){for(var i=atob(this.toDataURL(t,n).split(",")[1]),o=i.length,r=new Uint8Array(o),a=0;a<o;a++)r[a]=i.charCodeAt(a);e(new Blob([r],{type:t||"image/png"}))}});var t,n,i,o=["Webkit","Moz","ms"],r=document.createElement("div").style,a=[1,8,3,6],s=[2,7,4,5];function l(e){if(e in r)return e;var t=e[0].toUpperCase()+e.slice(1),n=o.length;while(n--)if(e=o[n]+t,e in r)return e}function c(e,t){var n=a.indexOf(e)>-1?a:s,i=n.indexOf(e),o=t/90%n.length;return n[(n.length+i+o%n.length)%n.length]}function u(e,t){for(var n in e=e||{},t)t[n]&&t[n].constructor&&t[n].constructor===Object?(e[n]=e[n]||{},u(e[n],t[n])):e[n]=t[n];return e}function d(e){return u({},e)}function p(e,t,n){var i;return function(){var o=this,r=arguments,a=function(){i=null,n||e.apply(o,r)},s=n&&!i;clearTimeout(i),i=setTimeout(a,t),s&&e.apply(o,r)}}function h(e){if("createEvent"in document){var t=document.createEvent("HTMLEvents");t.initEvent("change",!1,!0),e.dispatchEvent(t)}else e.fireEvent("onchange")}function m(e,t,n){if("string"===typeof t){var i=t;t={},t[i]=n}for(var o in t)e.style[o]=t[o]}function f(e,t){e.classList?e.classList.add(t):e.className+=" "+t}function v(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(t,"")}function w(e,t){for(var n in t)e.setAttribute(n,t[n])}function g(e){return parseInt(e,10)}function y(e,t){var n=new Image;return n.style.opacity="0",new Promise((function(i,o){function r(){n.style.opacity="1",setTimeout((function(){i(n)}),1)}n.removeAttribute("crossOrigin"),e.match(/^https?:\/\/|^\/\//)&&n.setAttribute("crossOrigin","anonymous"),n.onload=function(){t?EXIF.getData(n,(function(){r()})):r()},n.onerror=function(e){n.style.opacity=1,setTimeout((function(){o(e)}),1)},n.src=e}))}function b(e,t){var n=e.naturalWidth,i=e.naturalHeight,o=t||E(e);if(o&&o>=5){var r=n;n=i,i=r}return{width:n,height:i}}n=l("transform"),t=l("transformOrigin"),i=l("userSelect");var _={translate3d:{suffix:", 0px"},translate:{suffix:""}},x=function(e,t,n){this.x=parseFloat(e),this.y=parseFloat(t),this.scale=parseFloat(n)};x.parse=function(e){return e.style?x.parse(e.style[n]):e.indexOf("matrix")>-1||e.indexOf("none")>-1?x.fromMatrix(e):x.fromString(e)},x.fromMatrix=function(e){var t=e.substring(7).split(",");return t.length&&"none"!==e||(t=[1,0,0,1,0,0]),new x(g(t[4]),g(t[5]),parseFloat(t[0]))},x.fromString=function(e){var t=e.split(") "),n=t[0].substring(re.globals.translate.length+1).split(","),i=t.length>1?t[1].substring(6):1,o=n.length>1?n[0]:0,r=n.length>1?n[1]:0;return new x(o,r,i)},x.prototype.toString=function(){var e=_[re.globals.translate].suffix||"";return re.globals.translate+"("+this.x+"px, "+this.y+"px"+e+") scale("+this.scale+")"};var C=function(e){if(!e||!e.style[t])return this.x=0,void(this.y=0);var n=e.style[t].split(" ");this.x=parseFloat(n[0]),this.y=parseFloat(n[1])};function E(e){return e.exifdata&&e.exifdata.Orientation?g(e.exifdata.Orientation):1}function L(e,t,n){var i=t.width,o=t.height,r=e.getContext("2d");switch(e.width=t.width,e.height=t.height,r.save(),n){case 2:r.translate(i,0),r.scale(-1,1);break;case 3:r.translate(i,o),r.rotate(180*Math.PI/180);break;case 4:r.translate(0,o),r.scale(1,-1);break;case 5:e.width=o,e.height=i,r.rotate(90*Math.PI/180),r.scale(1,-1);break;case 6:e.width=o,e.height=i,r.rotate(90*Math.PI/180),r.translate(0,-o);break;case 7:e.width=o,e.height=i,r.rotate(-90*Math.PI/180),r.translate(-i,o),r.scale(1,-1);break;case 8:e.width=o,e.height=i,r.translate(0,i),r.rotate(-90*Math.PI/180);break}r.drawImage(t,0,0,i,o),r.restore()}function k(){var e,t,n,i,o,r,a=this,s="croppie-container",l=a.options.viewport.type?"cr-vp-"+a.options.viewport.type:null;a.options.useCanvas=a.options.enableOrientation||$.call(a),a.data={},a.elements={},e=a.elements.boundary=document.createElement("div"),n=a.elements.viewport=document.createElement("div"),t=a.elements.img=document.createElement("img"),i=a.elements.overlay=document.createElement("div"),a.options.useCanvas?(a.elements.canvas=document.createElement("canvas"),a.elements.preview=a.elements.canvas):a.elements.preview=t,f(e,"cr-boundary"),e.setAttribute("aria-dropeffect","none"),o=a.options.boundary.width,r=a.options.boundary.height,m(e,{width:o+(isNaN(o)?"":"px"),height:r+(isNaN(r)?"":"px")}),f(n,"cr-viewport"),l&&f(n,l),m(n,{width:a.options.viewport.width+"px",height:a.options.viewport.height+"px"}),n.setAttribute("tabindex",0),f(a.elements.preview,"cr-image"),w(a.elements.preview,{alt:"preview","aria-grabbed":"false"}),f(i,"cr-overlay"),a.element.appendChild(e),e.appendChild(a.elements.preview),e.appendChild(n),e.appendChild(i),f(a.element,s),a.options.customClass&&f(a.element,a.options.customClass),M.call(this),a.options.enableZoom&&Z.call(a),a.options.enableResize&&B.call(a)}function $(){return this.options.enableExif&&window.EXIF}function B(){var e,t,n,o,r,a,s,l=this,c=document.createElement("div"),u=!1,d=50;function p(a){if((void 0===a.button||0===a.button)&&(a.preventDefault(),!u)){var s=l.elements.overlay.getBoundingClientRect();if(u=!0,t=a.pageX,n=a.pageY,e=-1!==a.currentTarget.className.indexOf("vertical")?"v":"h",o=s.width,r=s.height,a.touches){var c=a.touches[0];t=c.pageX,n=c.pageY}window.addEventListener("mousemove",h),window.addEventListener("touchmove",h),window.addEventListener("mouseup",v),window.addEventListener("touchend",v),document.body.style[i]="none"}}function h(i){var a=i.pageX,s=i.pageY;if(i.preventDefault(),i.touches){var u=i.touches[0];a=u.pageX,s=u.pageY}var p=a-t,h=s-n,f=l.options.viewport.height+h,v=l.options.viewport.width+p;"v"===e&&f>=d&&f<=r?(m(c,{height:f+"px"}),l.options.boundary.height+=h,m(l.elements.boundary,{height:l.options.boundary.height+"px"}),l.options.viewport.height+=h,m(l.elements.viewport,{height:l.options.viewport.height+"px"})):"h"===e&&v>=d&&v<=o&&(m(c,{width:v+"px"}),l.options.boundary.width+=p,m(l.elements.boundary,{width:l.options.boundary.width+"px"}),l.options.viewport.width+=p,m(l.elements.viewport,{width:l.options.viewport.width+"px"})),j.call(l),S.call(l),I.call(l),F.call(l),n=s,t=a}function v(){u=!1,window.removeEventListener("mousemove",h),window.removeEventListener("touchmove",h),window.removeEventListener("mouseup",v),window.removeEventListener("touchend",v),document.body.style[i]=""}f(c,"cr-resizer"),m(c,{width:this.options.viewport.width+"px",height:this.options.viewport.height+"px"}),this.options.resizeControls.height&&(a=document.createElement("div"),f(a,"cr-resizer-vertical"),c.appendChild(a)),this.options.resizeControls.width&&(s=document.createElement("div"),f(s,"cr-resizer-horisontal"),c.appendChild(s)),a&&(a.addEventListener("mousedown",p),a.addEventListener("touchstart",p)),s&&(s.addEventListener("mousedown",p),s.addEventListener("touchstart",p)),this.elements.boundary.appendChild(c)}function R(e){if(this.options.enableZoom){var t=this.elements.zoomer,n=J(e,4);t.value=Math.max(parseFloat(t.min),Math.min(parseFloat(t.max),n)).toString()}}function Z(){var e=this,t=e.elements.zoomerWrap=document.createElement("div"),n=e.elements.zoomer=document.createElement("input");function i(){z.call(e,{value:parseFloat(n.value),origin:new C(e.elements.preview),viewportRect:e.elements.viewport.getBoundingClientRect(),transform:x.parse(e.elements.preview)})}function o(t){var n,o;if("ctrl"===e.options.mouseWheelZoom&&!0!==t.ctrlKey)return 0;n=t.wheelDelta?t.wheelDelta/1200:t.deltaY?t.deltaY/1060:t.detail?t.detail/-60:0,o=e._currentZoom+n*e._currentZoom,t.preventDefault(),R.call(e,o),i.call(e)}f(t,"cr-slider-wrap"),f(n,"cr-slider"),n.type="range",n.step="0.0001",n.value="1",n.style.display=e.options.showZoomer?"":"none",n.setAttribute("aria-label","zoom"),e.element.appendChild(t),t.appendChild(n),e._currentZoom=1,e.elements.zoomer.addEventListener("input",i),e.elements.zoomer.addEventListener("change",i),e.options.mouseWheelZoom&&(e.elements.boundary.addEventListener("mousewheel",o),e.elements.boundary.addEventListener("DOMMouseScroll",o))}function z(e){var i=this,o=e?e.transform:x.parse(i.elements.preview),r=e?e.viewportRect:i.elements.viewport.getBoundingClientRect(),a=e?e.origin:new C(i.elements.preview);function s(){var e={};e[n]=o.toString(),e[t]=a.toString(),m(i.elements.preview,e)}if(i._currentZoom=e?e.value:i._currentZoom,o.scale=i._currentZoom,i.elements.zoomer.setAttribute("aria-valuenow",i._currentZoom),s(),i.options.enforceBoundary){var l=O.call(i,r),c=l.translate,u=l.origin;o.x>=c.maxX&&(a.x=u.minX,o.x=c.maxX),o.x<=c.minX&&(a.x=u.maxX,o.x=c.minX),o.y>=c.maxY&&(a.y=u.minY,o.y=c.maxY),o.y<=c.minY&&(a.y=u.maxY,o.y=c.minY)}s(),P.call(i),F.call(i)}function O(e){var t=this,n=t._currentZoom,i=e.width,o=e.height,r=t.elements.boundary.clientWidth/2,a=t.elements.boundary.clientHeight/2,s=t.elements.preview.getBoundingClientRect(),l=s.width,c=s.height,u=i/2,d=o/2,p=-1*(u/n-r),h=p-(l*(1/n)-i*(1/n)),m=-1*(d/n-a),f=m-(c*(1/n)-o*(1/n)),v=1/n*u,w=l*(1/n)-v,g=1/n*d,y=c*(1/n)-g;return{translate:{maxX:p,minX:h,maxY:m,minY:f},origin:{maxX:w,minX:v,maxY:y,minY:g}}}function I(e){var i=this,o=i._currentZoom,r=i.elements.preview.getBoundingClientRect(),a=i.elements.viewport.getBoundingClientRect(),s=x.parse(i.elements.preview.style[n]),l=new C(i.elements.preview),c=a.top-r.top+a.height/2,u=a.left-r.left+a.width/2,d={},p={};if(e){var h=l.x,f=l.y,v=s.x,w=s.y;d.y=h,d.x=f,s.y=v,s.x=w}else d.y=c/o,d.x=u/o,p.y=(d.y-l.y)*(1-o),p.x=(d.x-l.x)*(1-o),s.x-=p.x,s.y-=p.y;var g={};g[t]=d.x+"px "+d.y+"px",g[n]=s.toString(),m(i.elements.preview,g)}function M(){var e,t,o,r,a,s=this,l=!1;function c(e,t){var n=s.elements.preview.getBoundingClientRect(),i=a.y+t,o=a.x+e;s.options.enforceBoundary?(r.top>n.top+t&&r.bottom<n.bottom+t&&(a.y=i),r.left>n.left+e&&r.right<n.right+e&&(a.x=o)):(a.y=i,a.x=o)}function u(e){s.elements.preview.setAttribute("aria-grabbed",e),s.elements.boundary.setAttribute("aria-dropeffect",e?"move":"none")}function d(e){var t,n=37,o=38,l=39,c=40;if(!e.shiftKey||e.keyCode!==o&&e.keyCode!==c){if(s.options.enableKeyMovement&&e.keyCode>=37&&e.keyCode<=40){e.preventDefault();var u=d(e.keyCode);a=x.parse(s.elements.preview),document.body.style[i]="none",r=s.elements.viewport.getBoundingClientRect(),p(u)}}else t=e.keyCode===o?parseFloat(s.elements.zoomer.value)+parseFloat(s.elements.zoomer.step):parseFloat(s.elements.zoomer.value)-parseFloat(s.elements.zoomer.step),s.setZoom(t);function d(e){switch(e){case n:return[1,0];case o:return[0,1];case l:return[-1,0];case c:return[0,-1]}}}function p(e){var t=e[0],r=e[1],l={};c(t,r),l[n]=a.toString(),m(s.elements.preview,l),j.call(s),document.body.style[i]="",I.call(s),F.call(s),o=0}function f(n){if((void 0===n.button||0===n.button)&&(n.preventDefault(),!l)){if(l=!0,e=n.pageX,t=n.pageY,n.touches){var o=n.touches[0];e=o.pageX,t=o.pageY}u(l),a=x.parse(s.elements.preview),window.addEventListener("mousemove",v),window.addEventListener("touchmove",v),window.addEventListener("mouseup",w),window.addEventListener("touchend",w),document.body.style[i]="none",r=s.elements.viewport.getBoundingClientRect()}}function v(i){i.preventDefault();var r=i.pageX,l=i.pageY;if(i.touches){var u=i.touches[0];r=u.pageX,l=u.pageY}var d=r-e,p=l-t,f={};if("touchmove"===i.type&&i.touches.length>1){var v=i.touches[0],w=i.touches[1],g=Math.sqrt((v.pageX-w.pageX)*(v.pageX-w.pageX)+(v.pageY-w.pageY)*(v.pageY-w.pageY));o||(o=g/s._currentZoom);var y=g/o;return R.call(s,y),void h(s.elements.zoomer)}c(d,p),f[n]=a.toString(),m(s.elements.preview,f),j.call(s),t=l,e=r}function w(){l=!1,u(l),window.removeEventListener("mousemove",v),window.removeEventListener("touchmove",v),window.removeEventListener("mouseup",w),window.removeEventListener("touchend",w),document.body.style[i]="",I.call(s),F.call(s),o=0}s.elements.overlay.addEventListener("mousedown",f),s.elements.viewport.addEventListener("keydown",d),s.elements.overlay.addEventListener("touchstart",f)}function j(){if(this.elements){var e=this,t=e.elements.boundary.getBoundingClientRect(),n=e.elements.preview.getBoundingClientRect();m(e.elements.overlay,{width:n.width+"px",height:n.height+"px",top:n.top-t.top+"px",left:n.left-t.left+"px"})}}C.prototype.toString=function(){return this.x+"px "+this.y+"px"};var P=p(j,500);function F(){var e,t=this,n=t.get();X.call(t)&&(t.options.update.call(t,n),t.$&&"undefined"===typeof Prototype?t.$(t.element).trigger("update.croppie",n):(window.CustomEvent?e=new CustomEvent("update",{detail:n}):(e=document.createEvent("CustomEvent"),e.initCustomEvent("update",!0,!0,n)),t.element.dispatchEvent(e)))}function X(){return this.elements.preview.offsetHeight>0&&this.elements.preview.offsetWidth>0}function Y(){var e,i=this,o=1,r={},a=i.elements.preview,s=new x(0,0,o),l=new C,c=X.call(i);c&&!i.data.bound&&(i.data.bound=!0,r[n]=s.toString(),r[t]=l.toString(),r["opacity"]=1,m(a,r),e=i.elements.preview.getBoundingClientRect(),i._originalImageWidth=e.width,i._originalImageHeight=e.height,i.data.orientation=E(i.elements.img),i.options.enableZoom?S.call(i,!0):i._currentZoom=o,s.scale=i._currentZoom,r[n]=s.toString(),m(a,r),i.data.points.length?W.call(i,i.data.points):q.call(i),I.call(i),j.call(i))}function S(e){var t,n,i,o,r=this,a=Math.max(r.options.minZoom,0)||0,s=r.options.maxZoom||1.5,l=r.elements.zoomer,c=parseFloat(l.value),u=r.elements.boundary.getBoundingClientRect(),d=b(r.elements.img,r.data.orientation),p=r.elements.viewport.getBoundingClientRect();r.options.enforceBoundary&&(i=p.width/d.width,o=p.height/d.height,a=Math.max(i,o)),a>=s&&(s=a+1),l.min=J(a,4),l.max=J(s,4),!e&&(c<l.min||c>l.max)?R.call(r,c<l.min?l.min:l.max):e&&(n=Math.max(u.width/d.width,u.height/d.height),t=null!==r.data.boundZoom?r.data.boundZoom:n,R.call(r,t)),h(l)}function W(e){if(4!==e.length)throw"Croppie - Invalid number of points supplied: "+e;var i=this,o=e[2]-e[0],r=i.elements.viewport.getBoundingClientRect(),a=i.elements.boundary.getBoundingClientRect(),s={left:r.left-a.left,top:r.top-a.top},l=r.width/o,c=e[1],u=e[0],d=-1*e[1]+s.top,p=-1*e[0]+s.left,h={};h[t]=u+"px "+c+"px",h[n]=new x(p,d,l).toString(),m(i.elements.preview,h),R.call(i,l),i._currentZoom=l}function q(){var e=this,t=e.elements.preview.getBoundingClientRect(),i=e.elements.viewport.getBoundingClientRect(),o=e.elements.boundary.getBoundingClientRect(),r=i.left-o.left,a=i.top-o.top,s=r-(t.width-i.width)/2,l=a-(t.height-i.height)/2,c=new x(s,l,e._currentZoom);m(e.elements.preview,n,c.toString())}function A(e){var t=this,n=t.elements.canvas,i=t.elements.img,o=n.getContext("2d");o.clearRect(0,0,n.width,n.height),n.width=i.width,n.height=i.height;var r=t.options.enableOrientation&&e||E(i);L(n,i,r)}function N(e){var t=this,n=e.points,i=g(n[0]),o=g(n[1]),r=g(n[2]),a=g(n[3]),s=r-i,l=a-o,c=e.circle,u=document.createElement("canvas"),d=u.getContext("2d"),p=e.outputWidth||s,h=e.outputHeight||l;u.width=p,u.height=h,e.backgroundColor&&(d.fillStyle=e.backgroundColor,d.fillRect(0,0,p,h));var m=i,f=o,v=s,w=l,y=0,b=0,_=p,x=h;return i<0&&(m=0,y=Math.abs(i)/s*p),v+m>t._originalImageWidth&&(v=t._originalImageWidth-m,_=v/s*p),o<0&&(f=0,b=Math.abs(o)/l*h),w+f>t._originalImageHeight&&(w=t._originalImageHeight-f,x=w/l*h),d.drawImage(this.elements.preview,m,f,v,w,y,b,_,x),c&&(d.fillStyle="#fff",d.globalCompositeOperation="destination-in",d.beginPath(),d.arc(u.width/2,u.height/2,u.width/2,0,2*Math.PI,!0),d.closePath(),d.fill()),u}function H(e){var t=e.points,n=document.createElement("div"),i=document.createElement("img"),o=t[2]-t[0],r=t[3]-t[1];return f(n,"croppie-result"),n.appendChild(i),m(i,{left:-1*t[0]+"px",top:-1*t[1]+"px"}),i.src=e.url,m(n,{width:o+"px",height:r+"px"}),n}function T(e){return N.call(this,e).toDataURL(e.format,e.quality)}function D(e){var t=this;return new Promise((function(n){N.call(t,e).toBlob((function(e){n(e)}),e.format,e.quality)}))}function U(e){this.elements.img.parentNode&&(Array.prototype.forEach.call(this.elements.img.classList,(function(t){e.classList.add(t)})),this.elements.img.parentNode.replaceChild(e,this.elements.img),this.elements.preview=e),this.elements.img=e}function K(e,t){var n,i=this,o=[],r=null,a=$.call(i);if("string"===typeof e)n=e,e={};else if(Array.isArray(e))o=e.slice();else{if("undefined"===typeof e&&i.data.url)return Y.call(i),F.call(i),null;n=e.url,o=e.points||[],r="undefined"===typeof e.zoom?null:e.zoom}return i.data.bound=!1,i.data.url=n||i.data.url,i.data.boundZoom=r,y(n,a).then((function(n){if(U.call(i,n),o.length)i.options.relative&&(o=[o[0]*n.naturalWidth/100,o[1]*n.naturalHeight/100,o[2]*n.naturalWidth/100,o[3]*n.naturalHeight/100]);else{var r,a,s=b(n),l=i.elements.viewport.getBoundingClientRect(),c=l.width/l.height,u=s.width/s.height;u>c?(a=s.height,r=a*c):(r=s.width,a=s.height/c);var d=(s.width-r)/2,p=(s.height-a)/2,h=d+r,m=p+a;i.data.points=[d,p,h,m]}i.data.points=o.map((function(e){return parseFloat(e)})),i.options.useCanvas&&A.call(i,e.orientation),Y.call(i),F.call(i),t&&t()}))}function J(e,t){return parseFloat(e).toFixed(t||0)}function Q(){var e=this,t=e.elements.preview.getBoundingClientRect(),n=e.elements.viewport.getBoundingClientRect(),i=n.left-t.left,o=n.top-t.top,r=(n.width-e.elements.viewport.offsetWidth)/2,a=(n.height-e.elements.viewport.offsetHeight)/2,s=i+e.elements.viewport.offsetWidth+r,l=o+e.elements.viewport.offsetHeight+a,c=e._currentZoom;(c===1/0||isNaN(c))&&(c=1);var u=e.options.enforceBoundary?0:Number.NEGATIVE_INFINITY;return i=Math.max(u,i/c),o=Math.max(u,o/c),s=Math.max(u,s/c),l=Math.max(u,l/c),{points:[J(i),J(o),J(s),J(l)],zoom:c,orientation:e.data.orientation}}var G={type:"canvas",format:"png",quality:1},V=["jpeg","webp","png"];function ee(e){var t,n=this,i=Q.call(n),o=u(d(G),d(e)),r="string"===typeof e?e:o.type||"base64",a=o.size||"viewport",s=o.format,l=o.quality,c=o.backgroundColor,p="boolean"===typeof o.circle?o.circle:"circle"===n.options.viewport.type,h=n.elements.viewport.getBoundingClientRect(),m=h.width/h.height;return"viewport"===a?(i.outputWidth=h.width,i.outputHeight=h.height):"object"===typeof a&&(a.width&&a.height?(i.outputWidth=a.width,i.outputHeight=a.height):a.width?(i.outputWidth=a.width,i.outputHeight=a.width/m):a.height&&(i.outputWidth=a.height*m,i.outputHeight=a.height)),V.indexOf(s)>-1&&(i.format="image/"+s,i.quality=l),i.circle=p,i.url=n.data.url,i.backgroundColor=c,t=new Promise((function(e){switch(r.toLowerCase()){case"rawcanvas":e(N.call(n,i));break;case"canvas":case"base64":e(T.call(n,i));break;case"blob":D.call(n,i).then(e);break;default:e(H.call(n,i));break}})),t}function te(){Y.call(this)}function ne(e){if(!this.options.useCanvas||!this.options.enableOrientation)throw"Croppie: Cannot rotate without enableOrientation && EXIF.js included";var t=this,n=t.elements.canvas;t.data.orientation=c(t.data.orientation,e),L(n,t.elements.img,t.data.orientation),I.call(t,!0),S.call(t)}function ie(){var e=this;e.element.removeChild(e.elements.boundary),v(e.element,"croppie-container"),e.options.enableZoom&&e.element.removeChild(e.elements.zoomerWrap),delete e.elements}if(window.jQuery){var oe=window.jQuery;oe.fn.croppie=function(e){var t=typeof e;if("string"===t){var n=Array.prototype.slice.call(arguments,1),i=oe(this).data("croppie");return"get"===e?i.get():"result"===e?i.result.apply(i,n):"bind"===e?i.bind.apply(i,n):this.each((function(){var t=oe(this).data("croppie");if(t){var i=t[e];if(!oe.isFunction(i))throw"Croppie "+e+" method not found";i.apply(t,n),"destroy"===e&&oe(this).removeData("croppie")}}))}return this.each((function(){var t=new re(this,e);t.$=oe,oe(this).data("croppie",t)}))}}function re(e,t){if(e.className.indexOf("croppie-container")>-1)throw new Error("Croppie: Can't initialize croppie more than once");if(this.element=e,this.options=u(d(re.defaults),t),"img"===this.element.tagName.toLowerCase()){var n=this.element;f(n,"cr-original-image"),w(n,{"aria-hidden":"true",alt:""});var i=document.createElement("div");this.element.parentNode.appendChild(i),i.appendChild(n),this.element=i,this.options.url=this.options.url||n.src}if(k.call(this),this.options.url){var o={url:this.options.url,points:this.options.points};delete this.options["url"],delete this.options["points"],K.call(this,o)}}return re.defaults={viewport:{width:100,height:100,type:"square"},boundary:{},orientationControls:{enabled:!0,leftClass:"",rightClass:""},resizeControls:{width:!0,height:!0},customClass:"",showZoomer:!0,enableZoom:!0,enableResize:!1,mouseWheelZoom:!0,enableExif:!1,enforceBoundary:!0,enableOrientation:!1,enableKeyMovement:!0,update:function(){}},re.globals={translate:"translate3d"},u(re.prototype,{bind:function(e,t){return K.call(this,e,t)},get:function(){var e=Q.call(this),t=e.points;return this.options.relative&&(t[0]/=this.elements.img.naturalWidth/100,t[1]/=this.elements.img.naturalHeight/100,t[2]/=this.elements.img.naturalWidth/100,t[3]/=this.elements.img.naturalHeight/100),e},result:function(e){return ee.call(this,e)},refresh:function(){return te.call(this)},setZoom:function(e){R.call(this,e),h(this.elements.zoomer)},rotate:function(e){ne.call(this,e)},destroy:function(){return ie.call(this)}}),re}))},"419a":function(e,t,n){"use strict";var i=n("4c2e"),o=n.n(i);o.a},"4c2e":function(e,t,n){},"7e6a":function(e,t,n){"use strict";var i=n("e992"),o=n.n(i);o.a},"854b":function(e,t,n){"use strict";var i=function(e,t){var n=t._c;return t.props.loading?n("transition",{attrs:{name:"fade"}},[n("div",{staticClass:"custom-loader"},[n("v-progress-circular",{attrs:{indeterminate:"",color:"primary",size:72}})],1)]):t._e()},o=[],r={props:{loading:Boolean}},a=r,s=(n("7e6a"),n("2877")),l=Object(s["a"])(a,i,o,!0,null,"0a16da3c",null);t["a"]=l.exports},"881c":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var i={computed:{is_screen_medium_and_down:function(){return this.$vuetify.breakpoint.mdAndDown}}}},"8c75":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"crop-image"},[n("div",{staticClass:"image"})])}],r=n("2ff6"),a=n.n(r),s=(n("dee1"),{props:["image","options","result"],data:function(){return{croppie:null}},mounted:function(){var e=document.querySelector(".image");this.croppie=new a.a(e,this.options),this.croppie.bind(this.image)},methods:{get_result:function(){return this.croppie.result(this.result)},clear_component:function(){this.croppie.destroy(),Object.assign(this.$data,this.$options.data.apply(this))}}}),l=s,c=n("2877"),u=Object(c["a"])(l,i,o,!1,null,null,null);t["a"]=u.exports},dee1:function(e,t,n){},e992:function(e,t,n){},ec05:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("custom-dialog",{ref:"dialog",attrs:{title:e.title,open:e.opendialog,"button2-text":"Save"},on:{"update:open":function(t){e.opendialog=t},button1:e.clear_and_close}},[n("template",{slot:"content"},[e.loading?n("v-progress-linear",{attrs:{slot:"progress",color:"blue",indeterminate:""},slot:"progress"}):e._e(),e.required_current_password?n("label",{staticClass:"mr-1"},[e._v("Current Password")]):e._e(),e.required_current_password?n("v-flex",{attrs:{xs12:"",sm12:""}},[n("v-text-field",{staticClass:"dialog__password d-field",attrs:{color:"#667187",solo:"","hide-details":"",disabled:e.disabled_all,error:e.$v.current_password.$error,"append-icon":e.show_current_password?"visibility_off":"visibility",label:"Current Password",type:e.show_current_password?"text":"password"},on:{blur:function(t){return e.on_blur_field("current_password")},"click:append":function(t){e.show_current_password=!e.show_current_password}},model:{value:e.current_password,callback:function(t){e.current_password="string"===typeof t?t.trim():t},expression:"current_password"}})],1):e._e(),n("label",{staticClass:"mr-1"},[e._v("New Password")]),n("v-flex",{attrs:{xs12:"",sm12:""}},[n("v-text-field",{staticClass:"dialog__password d-field",attrs:{color:"#667187",solo:"","hide-details":"",disabled:e.disabled_all,error:e.$v.password.$error,"append-icon":e.show_password?"visibility_off":"visibility",label:"Password",type:e.show_password?"text":"password"},on:{blur:function(t){return e.on_blur_field("password")},"click:append":function(t){e.show_password=!e.show_password}},model:{value:e.password,callback:function(t){e.password="string"===typeof t?t.trim():t},expression:"password"}})],1),n("label",{staticClass:"mr-1"},[e._v("Confirm Password")]),n("v-flex",{attrs:{xs12:"",sm12:""}},[n("v-text-field",{staticClass:"dialog__password d-field",attrs:{color:"#667187",solo:"","hide-details":"",disabled:e.disabled_all,error:e.$v.repeat_password.$error,"append-icon":e.show_repeat_password?"visibility_off":"visibility",label:"Repeat Password",type:e.show_repeat_password?"text":"password"},on:{blur:function(t){return e.on_blur_field("repeat_password")},"click:append":function(t){e.show_repeat_password=!e.show_repeat_password}},model:{value:e.repeat_password,callback:function(t){e.repeat_password="string"===typeof t?t.trim():t},expression:"repeat_password"}})],1)],1),n("template",{slot:"button2"},[n("v-btn",{attrs:{disabled:e.$v.$invalid,loading:e.btnloading},on:{click:e.save}},[e._v("Save")])],1)],2)},o=[],r=(n("28a5"),n("b5ae")),a=n("8103"),s=n.n(a),l={validations:{current_password:{required:Object(r["requiredIf"])((function(){return this.required_current_password}))},password:{required:r["required"],minLength:Object(r["minLength"])(6),containsNumber:function(e){return!e||e.length<6||/\d/.test(e)}},repeat_password:{required:r["required"],matchPassword:function(e){return e===this.password}}},methods:{on_blur_field:function(e){if(this.$v[e].$touch(),this.$v[e].$invalid){var t=e.split("_").map(s.a).join(" ");this.$event.$emit("open_snackbar","".concat(t," is invalid"),"error")}},all_validations_passed:function(){return this.$v.$touch(),!this.$v.$invalid||(this.$event.$emit("open_snackbar","Please fill fields correctly!","error"),!1)}}},c=n("1be9"),u=n("57e5"),d={name:"UpdatePasswordDialog",mixins:[l],props:{title:String,isEditDialog:{type:Boolean,default:!1},fieldsToEdit:{type:Object,default:function(){}}},components:{CustomDialog:u["a"]},created:function(){var e=this;this.$event.$on("btnloading_off",(function(t){return e.btnloading=t}))},data:function(){return{btnloading:!1,opendialog:!1,current_password:"",password:"",repeat_password:"",required_current_password:!0,show_current_password:!1,show_password:!1,show_repeat_password:!1,loading:!1,disabled_all:!1}},computed:{initiator:function(){return this.$store.getters.user}},methods:{open:function(){this.opendialog=!0,this.initiator.is_admin&&this.initiator.id!==this.fieldsToEdit.id&&(this.required_current_password=!1),this.initiator.is_admin||this.initiator.id===this.fieldsToEdit.id||(this.disabled_all=!0),this.initiator.is_admin||this.initiator.id!==this.fieldsToEdit.id||(this.disabled_all=!1)},cancel:function(){this.opendialog=!1,this.btnloading=!1,this.$emit("close-dialog")},clear_and_close:function(){this.password=this.repeat_password=this.current_password="",this.cancel()},save:function(){var e=this;if(this.all_validations_passed()){this.btnloading=!0;var t=this.get_fields();c["a"].post("api/user/update-password",t).then((function(t){var n=t.data;e.fieldsToEdit.fields=n.data,e.clear_and_close(),e.$event.$emit("open_snackbar","Password updated")})).finally((function(){e.btnloading=!1}))}},get_fields:function(){var e={user_id:this.fieldsToEdit.id,password:this.password,password_confirmation:this.repeat_password,required_current_password:this.required_current_password};return this.required_current_password&&(e.current_password=this.current_password),e}}},p=d,h=(n("f391d"),n("419a"),n("2877")),m=Object(h["a"])(p,i,o,!1,null,"1d2f293c",null);t["a"]=m.exports},f391d:function(e,t,n){"use strict";var i=n("1a4b"),o=n.n(i);o.a}}]);
//# sourceMappingURL=chunk-45060a7d.1e53d74c.js.map