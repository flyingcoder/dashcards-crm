(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c32fcd0"],{1331:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("78ef"),r=(0,i.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=r},"2a12":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("78ef"),r=function(e){return(0,i.withParams)({type:"maxLength",max:e},(function(t){return!(0,i.req)(t)||(0,i.len)(t)<=e}))};t.default=r},3360:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("78ef"),r=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,i.withParams)({type:"and"},(function(){for(var e=this,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return t.length>0&&t.reduce((function(t,n){return t&&n.apply(e,i)}),!0)}))};t.default=r},"3a54":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("78ef"),r=(0,i.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=r},"45b8":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("78ef"),r=(0,i.regex)("numeric",/^[0-9]*$/);t.default=r},"46bc":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("78ef"),r=function(e){return(0,i.withParams)({type:"maxValue",max:e},(function(t){return!(0,i.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t.default=r},"57e5":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{"justify-center":""}},[n("v-dialog",{attrs:{persistent:"","max-width":e.maxWidth},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e.loading?n("v-progress-linear",{attrs:{slot:"progress",color:"blue",indeterminate:""},slot:"progress"}):n("v-card",{staticClass:"custom__dialog"},[n("div",{staticClass:"dialog__header"},[e._t("entire-header",[e._t("title",[n("h3",{staticClass:"dialog__title"},[e._v(e._s(e.title))])]),e._t("extra-buttons"),e._t("cancel-icon",[n("v-btn",{staticClass:"close__dialog",attrs:{fab:"",small:"",depressed:""},on:{click:e.close_dialog}},[n("v-icon",[e._v("close")])],1)])]),e._t("below-title")],2),n("v-card-text",{staticClass:"dialog__body"},[e._t("content",[n("div",{domProps:{innerHTML:e._s(e.content)}})])],2),e.hasFooter?n("v-card-actions",{staticClass:"dialog__actions"},[e._t("entire-actions",[e._t("extras"),e._t("button1",[n("v-btn",{attrs:{disabled:e.btnloading},on:{click:e.button1clicked}},[e._v(e._s(e.button1Text))])]),e._t("button2",[n("v-btn",{attrs:{loading:e.btnloading,disabled:e.mainBtnDisabled},on:{click:e.button2clicked}},[e._v(e._s(e.button2Text))])])])],2):e._e()],1)],1)],1)},r=[],a=(n("c5f6"),{props:{title:{type:String,default:""},content:{type:String,default:""},button1Text:{type:String,default:"Cancel"},button2Text:{type:String,default:"Delete"},open:Boolean,value:Boolean,mainBtnDisabled:{type:Boolean,default:!1},hasFooter:{type:Boolean,default:!0},maxWidth:{type:[Number,String],default:"600px"}},data:function(){return{dialog:!1,loading:!1,btnloading:!1}},mounted:function(){var e=this;this.$event.$on("btnloading_off",(function(t){e.btnloading=!1}))},watch:{value:{handler:function(e){this.dialog=e},immediate:!0},open:function(e){this.dialog=e,this.btnloading=!1},dialog:function(e){this.$emit("update:open",e),this.$emit("input",e)}},methods:{button1clicked:function(){this.$emit("button1"),this.close_dialog()},button2clicked:function(){this.btnloading=!0,this.$emit("button2")},open_dialog:function(){this.dialog=!0},close_dialog:function(){this.dialog=!1,this.btnloading=!1,this.$emit("click:close",!0)},clear_and_close:function(){Object.assign(this.$data,this.$options.data.apply(this)),this.close_dialog()},activate_loading:function(){this.loading=!0},disable_loading:function(){this.loading=!1}}}),o=a,l=(n("ced6"),n("5a30"),n("2877")),s=Object(l["a"])(o,i,r,!1,null,"d7f4ccc6",null);t["a"]=s.exports},"5a30":function(e,t,n){"use strict";var i=n("d0eb"),r=n.n(i);r.a},"5b70":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("custom-dialog",{attrs:{title:e.title,content:e.textContent,"button1-text":e.cancelButtonText,"button2-text":e.deleteButtonText,open:e.open},on:{"update:open":function(t){e.open=t},button1:e.cancel_clicked,button2:e.delete_clicked},scopedSlots:e._u([{key:"content",fn:function(){return[n("v-alert",{staticClass:"my-4",attrs:{outlined:"",type:"warning",prominent:""}},[n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"grow",domProps:{innerHTML:e._s(e.textContent)}})],1)],1)]},proxy:!0}])})],1)},r=[],a=n("57e5"),o={components:{CustomDialog:a["a"]},props:{title:{type:String,default:"Default Modal Title"},textContent:{type:String,default:"Default Modal Text Content"},cancelButtonText:{type:String,default:"Cancel"},deleteButtonText:{type:String,default:"Yes, Delete"},openDialog:Boolean},data:function(){return{open:!1}},watch:{openDialog:function(e){this.open=e},open:function(e){this.$emit("update:openDialog",e)}},methods:{cancel_clicked:function(){this.open=!1},delete_clicked:function(){this.$emit("delete")},showDialog:function(){this.open=!0},closeDialog:function(){this.open=!1}}},l=o,s=n("2877"),u=Object(s["a"])(l,i,r,!1,null,null,null);t["a"]=u.exports},"5d1d":function(e,t,n){"use strict";var i=n("ac77"),r=n.n(i);r.a},"5d75":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("78ef"),r=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/,a=(0,i.regex)("email",r);t.default=a},"5db3":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("78ef"),r=function(e){return(0,i.withParams)({type:"minLength",min:e},(function(t){return!(0,i.req)(t)||(0,i.len)(t)>=e}))};t.default=r},6235:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("78ef"),r=(0,i.regex)("alpha",/^[a-zA-Z]*$/);t.default=r},6417:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("78ef"),r=function(e){return(0,i.withParams)({type:"not"},(function(t,n){return!(0,i.req)(t)||!e.call(this,t,n)}))};t.default=r},"772d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("78ef"),r=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,a=(0,i.regex)("url",r);t.default=a},7889:function(e,t,n){},"78ef":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return i.default}}),t.regex=t.ref=t.len=t.req=void 0;var i=r(n("8750"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}var o=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===a(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=o;var l=function(e){return Array.isArray(e)?e.length:"object"===a(e)?Object.keys(e).length:String(e).length};t.len=l;var s=function(e,t,n){return"function"===typeof e?e.call(t,n):n[e]};t.ref=s;var u=function(e,t){return(0,i.default)({type:e},(function(e){return!o(e)||t.test(e)}))};t.regex=u},8750:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i="web"===Object({NODE_ENV:"production",BASE_URL:"/"}).BUILD?n("cb69").withParams:n("0234").withParams,r=i;t.default=r},"91d3":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("78ef"),r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,i.withParams)({type:"macAddress"},(function(t){if(!(0,i.req)(t))return!0;if("string"!==typeof t)return!1;var n="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==n&&(6===n.length||8===n.length)&&n.every(a)}))};t.default=r;var a=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},aa82:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("78ef"),r=function(e){return(0,i.withParams)({type:"requiredIf",prop:e},(function(t,n){return!(0,i.ref)(e,this,n)||(0,i.req)(t)}))};t.default=r},ac77:function(e,t,n){},b5ae:function(e,t,n){"use strict";function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return P.default}}),t.helpers=void 0;var r=S(n("6235")),a=S(n("3a54")),o=S(n("45b8")),l=S(n("ec11")),s=S(n("5d75")),u=S(n("c99d")),d=S(n("91d3")),c=S(n("2a12")),f=S(n("5db3")),p=S(n("d4f4")),_=S(n("aa82")),m=S(n("e652")),b=S(n("b6cb")),v=S(n("772d")),g=S(n("d294")),h=S(n("3360")),y=S(n("6417")),w=S(n("eb66")),x=S(n("46bc")),j=S(n("1331")),P=S(n("c301")),O=k(n("78ef"));function $(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return $=function(){return e},e}function k(e){if(e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!==typeof e)return{default:e};var t=$();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}return n.default=e,t&&t.set(e,n),n}function S(e){return e&&e.__esModule?e:{default:e}}t.helpers=O},b6cb:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("78ef"),r=function(e){return(0,i.withParams)({type:"sameAs",eq:e},(function(t,n){return t===(0,i.ref)(e,this,n)}))};t.default=r},b8fa:function(e,t,n){},bbf9:function(e,t,n){"use strict";var i=n("7889"),r=n.n(i);r.a},c301:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("78ef"),r=(0,i.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=r},c99d:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("78ef"),r=(0,i.withParams)({type:"ipAddress"},(function(e){if(!(0,i.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(a)}));t.default=r;var a=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},cb69:function(e,t,n){"use strict";(function(e){function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var i="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},r=function(e,t){return"object"===n(e)&&void 0!==t?t:e((function(){}))},a=i.vuelidate?i.vuelidate.withParams:r;t.withParams=a}).call(this,n("c8ba"))},ced6:function(e,t,n){"use strict";var i=n("b8fa"),r=n.n(i);r.a},d0eb:function(e,t,n){},d294:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("78ef"),r=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,i.withParams)({type:"or"},(function(){for(var e=this,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return t.length>0&&t.reduce((function(t,n){return t||n.apply(e,i)}),!1)}))};t.default=r},d4f4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("78ef"),r=(0,i.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,i.req)(e.trim()):(0,i.req)(e)}));t.default=r},e652:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("78ef"),r=function(e){return(0,i.withParams)({type:"requiredUnless",prop:e},(function(t,n){return!!(0,i.ref)(e,this,n)||(0,i.req)(t)}))};t.default=r},eb66:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("78ef"),r=function(e){return(0,i.withParams)({type:"minValue",min:e},(function(t){return!(0,i.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t.default=r},ec11:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("78ef"),r=function(e,t){return(0,i.withParams)({type:"between",min:e,max:t},(function(n){return!(0,i.req)(n)||(!/\s/.test(n)||n instanceof Date)&&+e<=+n&&+t>=+n}))};t.default=r},f158:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"members-tab"},[n("v-layout",[n("v-flex",{staticClass:"text-xs-right",attrs:{xs12:""}},[n("v-btn",{staticClass:"add__btn",attrs:{fab:"",small:""},on:{click:function(t){e.add_dialog=!0}}},[n("v-icon",[e._v("add")])],1)],1)],1),n("staff-dialog",{ref:"add_dialog",attrs:{title:"Add New Staff",dialog:e.add_dialog},on:{"update:dialog":function(t){e.add_dialog=t},save:function(t){return e.add_item("add_new_team",t,e.dynamic_api)}}}),n("staff-dialog",{ref:"edit_dialog",attrs:{title:"Edit Staff",dialog:e.edit_dialog,"fields-to-edit":e.edit_item,"is-edit-dialog":e.edit_dialog},on:{"update:dialog":function(t){e.edit_dialog=t},save:function(t){return e.update_item("update_team",t)}}}),n("delete-dialog",{attrs:{"open-dialog":e.delete_dialog,title:"Delete Staffssss","text-content":"Are you sure you want to delete this staff?"},on:{"update:openDialog":function(t){e.delete_dialog=t},"update:open-dialog":function(t){e.delete_dialog=t},delete:function(t){return e.delete_item("delete_team",t)}}}),e.items.length?n("custom-table",{attrs:{headers:e.headers,items:e.items,loading:e.loading,sort:e.sort,"has-checkbox":!0,"hide-default-footer":"","toolbar-title":"Staffs",permission:e.$_permissions.get("hq_members")},on:{"items-selected":function(t){e.selected_ids=t},sorted:e.changeSort,edit:e.open_edit_dialog,delete:e.open_delete_dialog,view:function(t){return e.navigate_to_view_profile(t.id)}},scopedSlots:e._u([{key:"custom-item",fn:function(t){var i=t.item;return[n("td",{staticClass:"text-cap",on:{click:function(t){return e.navigate_to_view_profile(i.id)}}},[e._v(" "+e._s(i.first_name+" "+i.last_name)+" ")]),n("td",{staticClass:"email"},[e._v(e._s(i.email))]),n("td",[e._v(e._s(i.telephone))]),n("td",{staticClass:"text-cap"},[e._v(e._s(i.job_title))]),n("td",[e._v(e._s(i.tasks))])]}}],null,!1,913698183)}):n("div",{staticClass:"empty-member"},[n("div",{staticClass:"empty-content"},[n("div",{staticClass:"empty-svg"},[n("svg",{attrs:{viewBox:"0 0 250 250"}},[n("path",{attrs:{d:"M125 49c10,0 20,4 26,11 7,8 11,18 11,28 0,11 -4,21 -11,28 0,1 -1,2 -2,2 -3,18 36,10 36,42l0 12c0,8 -4,15 -9,21 -5,5 -13,8 -21,8l-12 0 0 0 -2 0 -34 0 0 0 -12 0c-8,0 -15,-3 -21,-8 -5,-6 -8,-13 -8,-21l0 -12c0,-32 39,-24 35,-42 0,0 -1,-1 -2,-2 -6,-7 -10,-17 -10,-28 0,-10 4,-20 10,-28 7,-7 16,-11 26,-11zm-74 14c-8,0 -16,4 -22,10 -5,6 -9,14 -9,24 0,9 4,17 9,23 1,0 1,1 2,1 -1,6 -6,8 -10,10 -10,4 -20,8 -20,29l0 9c0,0 0,0 0,1 0,3 2,14 18,19 1,0 1,1 2,1l30 0c1,0 1,-1 1,-1 1,0 1,1 2,1l11 0c-1,-2 -1,-3 -2,-5 -1,-2 -1,-3 -2,-5l-7 0c-1,0 -1,0 -2,0 0,0 0,0 -1,0l-30 0c-10,-3 -10,-9 -10,-11l0 0 0 -9c0,-15 7,-17 13,-20 7,-2 13,-5 15,-13 4,2 8,3 12,3 5,0 10,-1 14,-4 1,5 3,8 6,10 3,-3 7,-5 10,-6 -4,-2 -7,-4 -7,-11l0 0c5,-6 8,-14 8,-22 0,-10 -3,-18 -9,-24 -5,-6 -13,-10 -22,-10zm-14 17c3,-5 9,-7 14,-7 6,0 11,2 15,7 4,4 6,10 6,17 0,6 -2,12 -6,16 -4,5 -9,7 -15,7 -5,0 -11,-2 -14,-7 -4,-4 -7,-10 -7,-16 0,-7 3,-13 7,-17zm162 -17c8,0 16,4 22,10 5,6 9,14 9,24 0,9 -4,17 -9,23 -1,0 -1,1 -2,1 1,6 6,8 10,10 10,4 20,8 20,29l0 9c0,0 0,0 0,1 0,3 -2,14 -18,19 -1,0 -1,1 -2,1l-30 0c-1,0 -1,-1 -1,-1 -1,0 -1,1 -2,1l-11 0c1,-2 1,-3 2,-5 1,-2 1,-3 2,-5l7 0c1,0 1,0 2,0 0,0 0,0 1,0l30 0c10,-3 10,-9 10,-11l0 0 0 -9c0,-15 -7,-17 -13,-20 -7,-2 -13,-5 -15,-13 -4,2 -8,3 -12,3 -5,0 -10,-1 -14,-4 -1,5 -3,8 -6,10 -3,-3 -7,-5 -10,-6 4,-2 7,-4 7,-11l0 0c-5,-6 -8,-14 -8,-22 0,-10 3,-18 9,-24 5,-6 13,-10 22,-10zm14 17c-3,-5 -9,-7 -14,-7 -6,0 -11,2 -15,7 -4,4 -6,10 -6,17 0,6 2,12 6,16 4,5 9,7 15,7 5,0 11,-2 14,-7 4,-4 7,-10 7,-16 0,-7 -3,-13 -7,-17zm-58 112c6,0 11,-3 14,-6 4,-4 6,-9 6,-14l0 -12c0,-22 -30,-14 -35,-35 -5,2 -10,3 -15,3 -5,0 -10,-1 -14,-3 -6,22 -35,11 -35,35l0 12c0,5 2,10 5,14 4,3 9,6 14,6 20,0 40,0 60,0zm-11 -125c-5,-5 -11,-9 -19,-9 -7,0 -14,4 -18,9 -5,5 -8,13 -8,21 0,9 3,16 8,22 4,5 11,9 18,9 8,0 14,-4 19,-9 5,-6 8,-13 8,-22 0,-8 -3,-16 -8,-21z"}})])]),n("div",{staticClass:"empty-btn"},[n("v-btn",{attrs:{dark:"",color:"#3b589e"},on:{click:function(t){e.add_dialog=!0}}},[e._v("Add Member ")])],1)])])],1)},r=[],a=(n("a481"),n("c5f6"),n("451f")),o=n("5b70"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{"justify-center":""}},[n("CustomDialog",{ref:"dialog",attrs:{title:e.title,open:e.open,"button2-text":"Save"},on:{"update:open":function(t){e.open=t},button1:function(t){e.open=!1}}},[n("template",{slot:"content"},[n("v-layout",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],attrs:{wrap:"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm6:""}},[n("v-text-field",{staticClass:"dialog__textfield",attrs:{color:"#667187",solo:"","hide-details":"",error:e.$v.first_name.$error,label:"First Name"},on:{blur:function(t){return e.on_blur_field("first_name")}},model:{value:e.first_name,callback:function(t){e.first_name="string"===typeof t?t.trim():t},expression:"first_name"}})],1),n("v-flex",{attrs:{xs12:"",sm6:""}},[n("v-text-field",{staticClass:"dialog__textfield",attrs:{color:"#667187",solo:"","hide-details":"",error:e.$v.last_name.$error,label:"Last Name"},on:{blur:function(t){return e.on_blur_field("last_name")}},model:{value:e.last_name,callback:function(t){e.last_name="string"===typeof t?t.trim():t},expression:"last_name"}})],1),n("v-flex",{attrs:{xs12:"",sm6:""}},[n("v-select",{staticClass:"dialog__selectfield",attrs:{color:"#667187",solo:"","hide-details":"",error:e.$v.group_name.$error,label:"Group Name",items:e.group_items,"item-text":"name","item-value":"id"},on:{blur:function(t){return e.on_blur_field("group_name")}},model:{value:e.group_name,callback:function(t){e.group_name="string"===typeof t?t.trim():t},expression:"group_name"}})],1),n("v-flex",{attrs:{xs12:"",sm6:""}},[n("v-text-field",{staticClass:"dialog__textfield",attrs:{color:"#667187",solo:"","hide-details":"",error:e.$v.job_title.$error,label:"Job Title"},on:{blur:function(t){return e.on_blur_field("job_title")}},model:{value:e.job_title,callback:function(t){e.job_title="string"===typeof t?t.trim():t},expression:"job_title"}})],1),n("v-flex",{attrs:{xs12:"",sm6:""}},[n("v-text-field",{staticClass:"dialog__email",attrs:{color:"#667187",solo:"","hide-details":"",error:e.$v.email.$error,label:"Email"},on:{blur:function(t){return e.on_blur_field("email")}},model:{value:e.email,callback:function(t){e.email="string"===typeof t?t.trim():t},expression:"email"}})],1),n("v-flex",{attrs:{xs12:"",sm6:""}},[n("v-text-field",{staticClass:"dialog__textfield",attrs:{color:"#667187",solo:"","hide-details":"",error:e.$v.contact_number.$error,label:"Contact Number",mask:"phone"},on:{blur:function(t){return e.on_blur_field("contact_number")}},model:{value:e.contact_number,callback:function(t){e.contact_number="string"===typeof t?t.trim():t},expression:"contact_number"}})],1),e.isEditDialog?e._e():n("v-flex",{attrs:{xs12:"",sm6:""}},[n("v-text-field",{staticClass:"dialog__password",attrs:{color:"#667187",solo:"","hide-details":"",error:e.$v.password.$error,"append-icon":e.show_password?"visibility_off":"visibility",label:"Password",type:e.show_password?"text":"password"},on:{blur:function(t){return e.on_blur_field("password")},"click:append":function(t){e.show_password=!e.show_password}},model:{value:e.password,callback:function(t){e.password="string"===typeof t?t.trim():t},expression:"password"}})],1),e.isEditDialog?e._e():n("v-flex",{attrs:{xs12:"",sm6:""}},[n("v-text-field",{staticClass:"dialog__password",attrs:{color:"#667187",solo:"","hide-details":"",error:e.$v.repeat_password.$error,"append-icon":e.show_repeat_password?"visibility_off":"visibility",label:"Repeat Password",type:e.show_repeat_password?"text":"password"},on:{blur:function(t){return e.on_blur_field("repeat_password")},"click:append":function(t){e.show_repeat_password=!e.show_repeat_password}},model:{value:e.repeat_password,callback:function(t){e.repeat_password="string"===typeof t?t.trim():t},expression:"repeat_password"}})],1)],1),n("div",{staticClass:"dialog-description"},[n("small",[e._v("Password is at least 6 character with numbers and letters")]),n("br"),n("small",[e._v("All fields are required")])])],1),n("template",{slot:"button2"},[n("div",{staticClass:"dialog__actions"},[n("v-btn",{attrs:{disabled:e.$v.$invalid},on:{click:e.save}},[e._v("Save")])],1)])],2)],1)},s=[],u=(n("28a5"),n("b5ae")),d=n("8103"),c=n.n(d),f={validations:{first_name:{required:u["required"]},last_name:{required:u["required"]},group_name:{required:u["required"]},job_title:{required:u["required"]},email:{required:u["required"],email:u["email"]},contact_number:{required:u["required"],numeric:u["numeric"]},password:{required:u["required"],minLength:Object(u["minLength"])(6),containsNumber:function(e){return!e||e.length<6||/\d/.test(e)}},repeat_password:{required:u["required"],matchPassword:function(e){return e===this.password}}},methods:{on_blur_field:function(e){if(this.$v[e].$touch(),this.$v[e].$invalid){var t=e.split("_").map(c.a).join(" ");this.$event.$emit("open_snackbar","".concat(t," is invalid"),"error")}},all_validations_passed:function(){return this.$v.$touch(),!this.$v.$invalid||(this.$event.$emit("open_snackbar","Please fill fields correctly!","error"),!1)}}},p=n("d4e9"),_=n("57e5"),m={name:"TeamsDialog",mixins:[f],components:{CustomDialog:_["a"]},props:{dialog:Boolean,title:String,isEditDialog:Boolean,fieldsToEdit:{type:Object,default:function(){}}},data:function(){return{open:!1,first_name:"",last_name:"",group_name:"",job_title:"",email:"",contact_number:"",password:"",repeat_password:"",group_items:[],show_password:!1,show_repeat_password:!1,loading:!1}},watch:{dialog:function(e){this.open=e,e&&this.fill_group_items()},open:function(e){this.$emit("update:dialog",e)},fieldsToEdit:{handler:function(e){this.isEditDialog&&this.update_fields(e)},deep:!0}},methods:{fill_group_items:function(){var e=this;this.loading=!1,p["a"].get_all_groups().then((function(t){var n=t.data;return e.group_items=n})).finally((function(){return e.loading=!1}))},cancel:function(){this.open=!1},save:function(){if(this.all_validations_passed()){var e=this.get_fields();this.$emit("save",e)}},update_fields:function(e){var t=e.fields;this.password="dummypassword1",this.repeat_password="dummypassword1";var n=Object.assign({},t);this.first_name=n.first_name,this.last_name=n.last_name,this.email=n.email,this.contact_number=n.telephone,this.group_name=n.group_name,this.job_title=n.job_title},get_fields:function(){var e={first_name:this.first_name,last_name:this.last_name,email:this.email,telephone:this.contact_number,group_name:this.group_name,job_title:this.job_title};return this.isEditDialog||(e.password=this.password,e.password_confirmation=this.repeat_password),e},clear_and_close:function(){this.first_name=this.last_name=this.group_name="",this.job_title=this.email=this.contact_number="",this.password=this.repeat_password="",this.cancel()}}},b=m,v=(n("5d1d"),n("2877")),g=Object(v["a"])(b,l,s,!1,null,"7c202f48",null),h=g.exports,y=n("3d31"),w={name:"MembersTab",mixins:[y["a"]],components:{CustomTable:a["a"],StaffDialog:h,DeleteDialog:o["a"]},inheritAttrs:!1,props:{id:[Number,String]},data:function(){return{add_dialog:!1,staff_id:"",headers:[{text:"Member",value:"member"},{text:"Email",value:"email"},{text:"Telephone",value:"telephone"},{text:"Position",value:"position"},{text:"Tasks",value:"tasks"},{id:4,is_action:!0}],table_config:{route_name:"client_profile",add_message:"New Members(s) added successfully!",delete_message:"Members deleted successfully!",refresh_table_message:"Table refreshed",refresh_table_api_name:"paginate_tab_members_table"}}},computed:{dynamic_api:function(){return"api/clients/".concat(this.id,"/staffs")}},created:function(){this.$router.replace({name:"client_profile",query:{tab:"Staffs"}}),this.fill_table("get_members",!0,this.dynamic_api)},methods:{can_be_deleted:function(e){return!("Administrator"===e.job_title||"Client"===e.job_title)},navigate_to_view_profile:function(e){this.$router.push({name:"client_profile",params:{user_id:e}})}}},x=w,j=(n("bbf9"),Object(v["a"])(x,i,r,!1,null,"33dddccf",null));t["default"]=j.exports}}]);
//# sourceMappingURL=chunk-3c32fcd0.9e5a45b6.js.map