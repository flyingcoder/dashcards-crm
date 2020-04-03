(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5396c0f7"],{1331:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=i},"23ca":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("custom-dialog",{ref:"dialog",attrs:{title:e.title,open:e.open,"button2-text":"Save"},on:{"update:open":function(t){e.open=t},button1:e.cancel}},[r("template",{slot:"content"},[e.loading?r("v-progress-linear",{attrs:{slot:"progress",color:"blue",indeterminate:""},slot:"progress"}):e._e(),r("v-layout",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:"",sm6:""}},[r("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{color:"#667187",filled:"","hide-details":"",error:e.$v.first_name.$error,label:"First Name"},on:{blur:function(t){return e.on_blur_field("first_name")}},model:{value:e.first_name,callback:function(t){e.first_name="string"===typeof t?t.trim():t},expression:"first_name"}})],1),r("v-flex",{attrs:{xs12:"",sm6:""}},[r("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{color:"#667187",filled:"","hide-details":"",error:e.$v.last_name.$error,label:"Last Name"},on:{blur:function(t){return e.on_blur_field("last_name")}},model:{value:e.last_name,callback:function(t){e.last_name="string"===typeof t?t.trim():t},expression:"last_name"}})],1),r("v-flex",{attrs:{xs12:"",sm6:""}},[r("v-select",{staticClass:"dialog__selectfield d-field",attrs:{color:"#667187",filled:"","hide-details":"",error:e.$v.group_name.$error,label:"Group Name",items:e.group_items,"item-text":"name","item-value":"id"},on:{blur:function(t){return e.on_blur_field("group_name")}},model:{value:e.group_name,callback:function(t){e.group_name="string"===typeof t?t.trim():t},expression:"group_name"}})],1),r("v-flex",{attrs:{xs12:"",sm6:""}},[r("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{color:"#667187",filled:"","hide-details":"",error:e.$v.job_title.$error,label:"Job Title"},on:{blur:function(t){return e.on_blur_field("job_title")}},model:{value:e.job_title,callback:function(t){e.job_title="string"===typeof t?t.trim():t},expression:"job_title"}})],1),r("v-flex",{attrs:{xs12:"",sm6:""}},[r("v-text-field",{staticClass:"dialog__email d-field",attrs:{color:"#667187",filled:"","hide-details":"",error:e.$v.email.$error,label:"Email",disabled:e.isEditDialog},on:{blur:function(t){return e.on_blur_field("email")}},model:{value:e.email,callback:function(t){e.email="string"===typeof t?t.trim():t},expression:"email"}})],1),r("v-flex",{attrs:{xs12:"",sm6:""}},[r("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{color:"#667187",filled:"","hide-details":"",error:e.$v.contact_number.$error,label:"Contact Number",mask:"phone"},on:{blur:function(t){return e.on_blur_field("contact_number")}},model:{value:e.contact_number,callback:function(t){e.contact_number="string"===typeof t?t.trim():t},expression:"contact_number"}})],1),e.isEditDialog?e._e():r("v-flex",{attrs:{xs12:"",sm12:""}},[r("v-checkbox",{staticClass:"shrink mx-2 my-1",attrs:{label:e.show_create_password_label,"hide-details":""},model:{value:e.show_create_password,callback:function(t){e.show_create_password=t},expression:"show_create_password"}})],1),!e.isEditDialog&&e.show_create_password?r("v-flex",{attrs:{xs12:"",sm6:""}},[r("v-text-field",{staticClass:"dialog__password d-field",attrs:{color:"#667187",solo:"","hide-details":"",error:e.$v.password.$error,"append-icon":e.show_password?"visibility_off":"visibility",label:"Password",type:e.show_password?"text":"password"},on:{blur:function(t){return e.on_blur_field("password")},"click:append":function(t){e.show_password=!e.show_password}},model:{value:e.password,callback:function(t){e.password="string"===typeof t?t.trim():t},expression:"password"}})],1):e._e(),!e.isEditDialog&&e.show_create_password?r("v-flex",{attrs:{xs12:"",sm6:""}},[r("v-text-field",{staticClass:"dialog__password d-field",attrs:{color:"#667187",solo:"","hide-details":"",error:e.$v.repeat_password.$error,"append-icon":e.show_repeat_password?"visibility_off":"visibility",label:"Repeat Password",type:e.show_repeat_password?"text":"password"},on:{blur:function(t){return e.on_blur_field("repeat_password")},"click:append":function(t){e.show_repeat_password=!e.show_repeat_password}},model:{value:e.repeat_password,callback:function(t){e.repeat_password="string"===typeof t?t.trim():t},expression:"repeat_password"}})],1):e._e()],1),r("div",{staticClass:"dialog-description"},[r("small",[e._v("Above fields are required")])]),r("v-layout",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:"",sm6:""}},[r("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{color:"#667187",filled:"","hide-details":"",label:"Address"},model:{value:e.address,callback:function(t){e.address="string"===typeof t?t.trim():t},expression:"address"}})],1),r("v-flex",{attrs:{xs12:"",sm6:""}},[r("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{color:"#667187",filled:"","hide-details":"",label:"Rate / Hour",suffix:"$",error:e.$v.rate.$error},on:{blur:function(t){return e.on_blur_field("rate")}},model:{value:e.rate,callback:function(t){e.rate="string"===typeof t?t.trim():t},expression:"rate"}})],1)],1)],1),r("template",{slot:"button2"},[r("v-btn",{attrs:{disabled:e.$v.$invalid,loading:e.btnloading},on:{click:e.save}},[e._v("Save")])],1)],2)},i=[],a=(r("28a5"),r("b5ae")),o=r("8103"),s=r.n(o),u={validations:{first_name:{required:a["required"]},last_name:{required:a["required"]},group_name:{required:a["required"]},job_title:{required:a["required"]},email:{required:a["required"],email:a["email"]},rate:{numeric:a["numeric"]},contact_number:{required:a["required"],numeric:a["numeric"]},password:{required:Object(a["requiredIf"])((function(){return this.show_create_password})),minLength:Object(a["minLength"])(6),containsNumber:function(e){return!e||e.length<6||/\d/.test(e)}},repeat_password:{required:Object(a["requiredIf"])((function(){return this.show_create_password})),matchPassword:function(e){return e===this.password}}},methods:{on_blur_field:function(e){if(this.$v[e].$touch(),this.$v[e].$invalid){var t=e.split("_").map(s.a).join(" ");this.$event.$emit("open_snackbar","".concat(t," is invalid"),"error")}},all_validations_passed:function(){return this.$v.$touch(),!this.$v.$invalid||(this.$event.$emit("open_snackbar","Please fill fields correctly!","error"),!1)}}},l=r("d4e9"),d=r("57e5"),f={name:"TeamsDialog",mixins:[u],props:{dialog:Boolean,title:String,isEditDialog:{type:Boolean,default:!1},fieldsToEdit:{type:Object,default:function(){}}},components:{CustomDialog:d["a"]},created:function(){var e=this;this.$event.$on("btnloading_off",(function(t){return e.btnloading=t})),this.show_create_password=this.isEditDialog},data:function(){return{btnloading:!1,open:!1,first_name:"",last_name:"",group_name:"",job_title:"",email:"",contact_number:"",rate:"",address:"",password:"",repeat_password:"",group_items:[],show_password:!1,show_repeat_password:!1,loading:!1,show_create_password:!1,show_create_password_label:"Let user set their password"}},watch:{dialog:function(e){this.open=e,e&&this.fill_group_items()},open:function(e){this.$emit("update:dialog",e)},fieldsToEdit:{handler:function(e){this.isEditDialog&&this.update_fields(e)},deep:!0},show_create_password:function(e){this.show_create_password||(this.password=this.repeat_password=""),this.show_create_password_label=this.show_create_password?"Let admin set their password":"Let user set their password"}},methods:{fill_group_items:function(){var e=this;this.loading=!1,l["a"].get_all_groups().then((function(t){var r=t.data;return e.group_items=r})).finally((function(){return e.loading=!1}))},cancel:function(){this.open=!1,this.btnloading=!1,this.$emit("close-dialog")},save:function(){if(this.all_validations_passed()){this.btnloading=!0;var e=this.get_fields();this.$emit("save",e)}},update_fields:function(e){var t=e.fields;t["rate"]="rate"in t.meta?t.meta.rate.value:"",t["address"]="address"in t.meta?t.meta.address.value:"",this.password="dummypassword1",this.repeat_password="dummypassword1";var r=Object.assign({},t);this.first_name=r.first_name,this.last_name=r.last_name,this.email=r.email,this.rate=r.rate,this.address=r.address,this.contact_number=r.telephone,this.group_name=r.group_name,this.job_title=r.job_title},get_fields:function(){var e={first_name:this.first_name,last_name:this.last_name,email:this.email,rate:this.rate,address:this.address,telephone:this.contact_number,group_name:this.group_name,job_title:this.job_title};return this.isEditDialog&&(e.id=this.fieldsToEdit.id),this.show_create_password&&!this.isEditDialog&&(e.password=this.password,e.password_confirmation=this.repeat_password),e},clear_and_close:function(){this.first_name=this.last_name=this.group_name="",this.job_title=this.email=this.contact_number="",this.password=this.repeat_password="",this.rate=this.address="",this.cancel()}}},c=f,p=(r("e4df"),r("2877")),_=Object(p["a"])(c,n,i,!1,null,"5f2a37d5",null);t["a"]=_.exports},"2a12":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))};t.default=i},3360:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))};t.default=i},"3a54":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=i},"45b8":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("numeric",/^[0-9]*$/);t.default=i},"46bc":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t.default=i},"5d75":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/,a=(0,n.regex)("email",i);t.default=a},"5db3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))};t.default=i},6235:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("alpha",/^[a-zA-Z]*$/);t.default=i},6417:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))};t.default=i},"65a1e":function(e,t,r){},"772d":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,a=(0,n.regex)("url",i);t.default=a},"78ef":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}}),t.regex=t.ref=t.len=t.req=void 0;var n=i(r("8750"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}var o=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===a(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=o;var s=function(e){return Array.isArray(e)?e.length:"object"===a(e)?Object.keys(e).length:String(e).length};t.len=s;var u=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]};t.ref=u;var l=function(e,t){return(0,n.default)({type:e},(function(e){return!o(e)||t.test(e)}))};t.regex=l},8750:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===Object({NODE_ENV:"production",BASE_URL:"/"}).BUILD?r("cb69").withParams:r("0234").withParams,i=n;t.default=i},"91d3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(a)}))};t.default=i;var a=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},aa82:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t.default=i},b5ae:function(e,t,r){"use strict";function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return x.default}}),t.helpers=void 0;var i=M(r("6235")),a=M(r("3a54")),o=M(r("45b8")),s=M(r("ec11")),u=M(r("5d75")),l=M(r("c99d")),d=M(r("91d3")),f=M(r("2a12")),c=M(r("5db3")),p=M(r("d4f4")),_=M(r("aa82")),m=M(r("e652")),b=M(r("b6cb")),v=M(r("772d")),h=M(r("d294")),y=M(r("3360")),g=M(r("6417")),w=M(r("eb66")),j=M(r("46bc")),P=M(r("1331")),x=M(r("c301")),O=q(r("78ef"));function $(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return $=function(){return e},e}function q(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var t=$();if(t&&t.has(e))return t.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=i?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}function M(e){return e&&e.__esModule?e:{default:e}}t.helpers=O},b6cb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))};t.default=i},c301:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=i},c99d:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(a)}));t.default=i;var a=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},cb69:function(e,t,r){"use strict";(function(e){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},i=function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))},a=n.vuelidate?n.vuelidate.withParams:i;t.withParams=a}).call(this,r("c8ba"))},d294:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))};t.default=i},d4f4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=i},e4df:function(e,t,r){"use strict";var n=r("65a1e"),i=r.n(n);i.a},e652:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t.default=i},eb66:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t.default=i},ec11:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))};t.default=i}}]);
//# sourceMappingURL=chunk-5396c0f7.7d64a2c3.js.map