(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e9cae944"],{"080e":function(t,e,n){"use strict";var a=n("8659"),o=n.n(a);o.a},"6f58":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("8e6e"),n("456d"),n("ac6a");var a=n("2909"),o=n("ade3"),s=n("2f62"),i=n("1be9");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var r={data:function(){return{loading:!1,panel:[]}},computed:l({},Object(s["c"])(["global_configs"])),methods:{all:function(){this.panel=Object(a["a"])(Array(this.panel_items).keys()).map((function(t,e){return e}))},none:function(){this.panel=[]},sendRequest:function(t,e){var n=this;this["".concat(t,"_btn")]=!0,i["a"].post("api/configs",e).then((function(e){var a=e.data;n[t]=a.value,n.$event.$emit("open_snackbar","Settings updated!")})).finally((function(){return n["".concat(t,"_btn")]=!1}))},getAllConfig:function(t){var e=this;this.loading=!0,i["a"].get("api/configs").then((function(e){var n=e.data;"function"===typeof t&&t(n)})).finally((function(){return e.loading=!1}))}}}},8659:function(t,e,n){},a755:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"api-configs"},[n("div",{staticClass:"api-configs-wrapper"},[n("div",{staticClass:"api-configs-content"},[n("v-row",{attrs:{"no-gutters":""}},[n("div",{staticClass:"page-title"},[t._v("API's Settings")]),n("v-spacer"),n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"mx-1",attrs:{icon:""},on:{click:t.all}},"v-btn",o,!1),a),[n("v-icon",[t._v("mdi-arrow-collapse-down")])],1)]}}])},[n("span",[t._v("Show All")])]),n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"mx-1",attrs:{icon:""},on:{click:t.none}},"v-btn",o,!1),a),[n("v-icon",[t._v("mdi-arrow-collapse-vertical")])],1)]}}])},[n("span",[t._v("Hide All")])])],1),n("div",{staticClass:"api-configs-body mt-2"},[[n("v-expansion-panels",{attrs:{focusable:"",multiple:"",flat:""},model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}},[n("v-expansion-panel",[n("v-expansion-panel-header",[n("div",[n("v-icon",{attrs:{left:""}},[t._v("mdi-battlenet")]),n("span",{staticClass:"subtitle-1"},[t._v("Connects")])],1)]),n("v-expansion-panel-content",[n("v-card",{staticClass:"mt-1 col-md-12",attrs:{flat:""}},[n("v-card-title",{staticClass:"subtitle-2"},[n("span",{staticClass:"subtitle-2"},[t._v("Connects")]),n("v-spacer"),n("v-btn",{attrs:{text:"",outlined:"",loading:t.connects_btn,disabled:t.connects_btn,small:""},on:{click:t.save_connects}},[t._v("save changes")])],1),n("v-card-text",[n("v-row",t._l(t.connectlist,(function(e){return n("v-col",{key:e.value,attrs:{md:"3"}},[n("v-checkbox",{attrs:{"on-icon":"mdi-puzzle","off-icon":"mdi-puzzle-outline",label:""+e.name,"hide-details":"auto"},model:{value:t.connects[e.value],callback:function(n){t.$set(t.connects,e.value,n)},expression:"connects[item.value]"}})],1)})),1)],1),n("v-divider")],1)],1)],1)],1)]],2)],1)])])},o=[],s=n("6f58"),i={name:"APIsConfonfigs",mixins:[s["a"]],data:function(){return{paths:[{text:"Admin",disabled:!1,router_name:"admin-dashboard"},{text:"API",disabled:!1,router_name:"admin-apis"}],panel_items:10,connectlist:[{name:"Google Drive",value:"google_drive"},{name:"Stripe",value:"stripe"},{name:"PayPal",value:"paypal"},{name:"Dropbox",value:"dropbox"},{name:"Google Meet",value:"google_meet"},{name:"Zoom",value:"zoom"},{name:"SEOprofiler",value:"seo_profiler"},{name:"Skype",value:"skype"},{name:"Google Calendar",value:"google_calendar"},{name:"SEMrush",value:"semrush"},{name:"BrightLocal",value:"brightlocal"},{name:"LastPass",value:"lastpass"}],connects:{google_drive:!0,stripe:!0,paypal:!1,dropbox:!1,google_meet:!1,zoom:!1,seo_profiler:!1,skype:!1,semrush:!1,brightlocal:!1,google_calendar:!1,lastpass:!1},connects_btn:!1}},mounted:function(){this.$event.$emit("path-change",this.paths),this.global_configs.connects&&(this.connects=this.global_configs.connects),this.all()},methods:{save_connects:function(){this.sendRequest("connects",{key:"connects",value:this.connects,type:"object"})}}},c=i,l=(n("080e"),n("2877")),r=Object(l["a"])(c,a,o,!1,null,"3706f58e",null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-e9cae944.85c891b0.js.map