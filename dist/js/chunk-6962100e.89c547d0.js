(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6962100e"],{"15b0":function(t,e,a){"use strict";var i=a("dae0"),n=a.n(i);n.a},"259d":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"breadcrumb-wrapper"},[a("v-breadcrumbs",{attrs:{items:t.paths},scopedSlots:t._u([{key:"item",fn:function(e){var i=e.item;return[a("v-breadcrumbs-item",{staticClass:"page__title",attrs:{disabled:i.disabled}},[a("span",{on:{click:function(e){return t.navigate_from_breadcrumb(i)}}},[t._v(" "+t._s(i.text)+" ")])])]}}])},[a("v-icon",{attrs:{slot:"divider"},slot:"divider"},[t._v("chevron_right")])],1)],1)},n=[],s={name:"Breadcrumb",props:{paths:{type:Array,default:function(){return[]}}},methods:{navigate_from_breadcrumb:function(t){if(t.hasOwnProperty("path"))t.path&&this.$router.push({path:t.path});else{var e=t.router_name;e&&this.$router.push({name:e})}}}},o=s,l=(a("15b0"),a("edab"),a("2877")),r=Object(l["a"])(o,i,n,!1,null,"adf165fe",null);e["a"]=r.exports},"29d6":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{staticClass:"table-header",attrs:{wrap:""}},[a("breadcrumb",{attrs:{paths:t.paths}}),a("v-flex",[t.noButton?t._e():a("v-btn",{staticClass:"add__btn mr-2",attrs:{fab:"",small:""},on:{click:function(e){return t.$emit("click")}}},[a("v-icon",[t._v("add")])],1),t.noSortButton?t._e():a("v-btn",{staticClass:"add__btn mr-2",attrs:{fab:"",small:""},on:{click:function(e){return t.$emit("click-sort-by")}}},[a("v-icon",[t._v("sort")])],1),t.noListButton?t._e():a("v-btn",{staticClass:"add__btn mr-2",attrs:{fab:"",small:""},on:{click:function(e){return t.$emit("click-list-view")}}},[a("v-icon",[t._v("list")])],1),t.noGridButton?t._e():a("v-btn",{staticClass:"add__btn mr-2",attrs:{fab:"",small:""},on:{click:function(e){return t.$emit("click-grid-view")}}},[a("v-icon",[t._v("mdi-view-dashboard")])],1),t._t("form-btn")],2)],1)},n=[],s=a("259d"),o={name:"TableHeader",props:{paths:{type:Array,default:[]},noButton:{type:Boolean,default:!1},noListButton:{type:Boolean,default:!0},noGridButton:{type:Boolean,default:!0},noSortButton:{type:Boolean,default:!0}},data:function(){return{fab:!0}},components:{Breadcrumb:s["a"]}},l=o,r=(a("ff3c"),a("2877")),c=Object(r["a"])(l,i,n,!1,null,"0910c4a8",null);e["a"]=c.exports},"2f21":function(t,e,a){"use strict";var i=a("79e5");t.exports=function(t,e){return!!t&&i((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},"386d":function(t,e,a){"use strict";var i=a("cb7c"),n=a("83a1"),s=a("5f1b");a("214f")("search",1,(function(t,e,a,o){return[function(a){var i=t(this),n=void 0==a?void 0:a[e];return void 0!==n?n.call(a,i):new RegExp(a)[e](String(i))},function(t){var e=o(a,t,this);if(e.done)return e.value;var l=i(t),r=String(this),c=l.lastIndex;n(c,0)||(l.lastIndex=0);var d=s(l,r);return n(l.lastIndex,c)||(l.lastIndex=c),null===d?-1:d.index}]}))},"3d31":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a("386d"),a("a481"),a("c5f6"),a("55dd");var i={computed:{rows_per_page_items:function(){var t=this.items_response;if(!t)return[];var e=this.items.length,a=t.total-t.from+1,i=this.calc_per_page_items(e,t.total);return this.rows_per_page=e,i.filter((function(t){return t<=a}))},should_show_pagination:function(){return!!this.items_response&&this.items_response.total>this.rows_per_page},total_items:function(){return this.items_response?this.items_response.last_page:null},query_for_sorting:function(){return this.sort.sortBy?"".concat(this.sort.sortBy,"|").concat(this.sort.descending?"desc":"asc"):""},api_query:function(){return"page=".concat(this.page,"&\n\t\t\t\t\t\t\tper_page=").concat(this.rows_per_page,"&\n\t\t\t\t\t\t\tsearch=").concat(this.search,"&\n\t\t\t\t\t\t\tsort=").concat(this.query_for_sorting)}}},n=(a("28a5"),a("20d6"),a("6762"),a("ac6a"),a("b047c")),s=a.n(n),o=a("d4e9"),l={methods:{add_item:function(t,e){var a=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;o["a"][t](e,i).catch((function(){a.$event.$emit("btnloading_off",!1)})).then((function(t){var e=t.data;Array.isArray(e)?e.reverse().forEach((function(t){return a.items.unshift(t)})):a.items.unshift(e),a.$refs.add_dialog.clear_and_close(),a.$event.$emit("open_snackbar",a.table_config.add_message),a.$event.$emit("btnloading_off",!1)}))},extract_per_page:function(t){var e=t.search("per_page");return t.substring(e+9,e+10)},calc_per_page_items:function(t,e){var a=[5,10,15,20,25];return a.includes(t)||a.push(t),!a.includes(e)&&e<=25&&a.push(e),a},update_item:function(t,e){var a=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;o["a"][t](this.edit_item.id,e,i).catch((function(){a.$event.$emit("btnloading_off",!1)})).then((function(t){var e=a.items.findIndex((function(e){return e.id===t.data.id}));~e&&a.items.splice(e,1,t.data),a.edit_item={id:null,fields:null},a.edit_dialog=!1,a.$event.$emit("open_snackbar",a.table_config.update_message),a.$event.$emit("btnloading_off",!1)}))},delete_item:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;o["a"][t](this.delete_item_id,a).catch((function(){e.$event.$emit("btnloading_off",!1)})).then((function(){var t=e.items.findIndex((function(t){return t.id===e.delete_item_id}));~t&&e.items.splice(t,1),e.delete_item_id=null,e.delete_dialog=!1,e.$event.$emit("open_snackbar",e.table_config.delete_message),e.$event.$emit("btnloading_off",!1)}))},open_edit_dialog:function(t){this.edit_dialog=!0,this.$set(this.edit_item,"id",t.id),this.$set(this.edit_item,"fields",t)},open_delete_dialog:function(t){this.delete_dialog=!0,this.delete_item_id=t.id},fill_table:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.loading=!0,o["a"][t](i).then((function(t){e.items_response=t.data,e.loading=!1,e.items=a?t.data.data:t.data}))},fill_table_with_data:function(t){this.items=t},add_table_rows:function(t,e){this.items=t,this.items_response=e},changeSort:function(t){this.sort.sortBy===t?this.sort.descending=!this.sort.descending:(this.sort.sortBy=t,this.sort.descending=!1)},refresh_table:function(t){var e=this;o["a"][this.table_config.refresh_table_api_name](t).catch((function(){e.$event.$emit("btnloading_off",!1)})).then((function(t){e.$event.$emit("open_snackbar",e.table_config.refresh_table_message),e.loading=!1,e.items_response=t.data,e.items=t.data.data,e.$event.$emit("btnloading_off",!1)}))},update_table_actions:function(t){if(t.page&&(this.page=Number(t.page)),t.per_page&&(this.rows_per_page=Number(t.per_page)),t.search&&(this.search=t.search),t.sort){var e=t.sort.split("|");this.sort.sortBy=e[0],"asc"===e[1]?this.sort.descending=!1:"desc"===e[1]&&(this.sort.descending=!0)}},toggleAll:function(){this.selected.length?this.selected=[]:this.selected=this.items.slice()},debounce:s()((function(t){this.search=t}),500)}},r={mixins:[i,l],data:function(){return{edit_dialog:!1,add_dialog:!1,delete_dialog:!1,permissionDialog:!1,loading:!1,items:[],items_response:null,edit_item:{id:null,fields:null},delete_item_id:null,show_delete_selected:!1,selected_ids:[],rows_per_page:null,page:1,sort:{sortBy:null,descending:!1},search:""}},watch:{selected_ids:function(t){t.length>0?this.show_delete_selected=!0:this.show_delete_selected=!1},api_query:function(t,e){var a=Number(this.extract_per_page(t)),i=Number(this.extract_per_page(e))||null;this.items_response&&this.rows_per_page===this.items.length&&a!==i||(this.$router.replace({name:this.table_config.route_name,query:{page:this.page,per_page:this.rows_per_page,search:this.search,sort:this.query_for_sorting}}),this.loading=!0,this.refresh_table(t))}}}},"408c":function(t,e,a){var i=a("2b3e"),n=function(){return i.Date.now()};t.exports=n},"4c37":function(t,e,a){},"55dd":function(t,e,a){"use strict";var i=a("5ca1"),n=a("d8e8"),s=a("4bf8"),o=a("79e5"),l=[].sort,r=[1,2,3];i(i.P+i.F*(o((function(){r.sort(void 0)}))||!o((function(){r.sort(null)}))||!a("2f21")(l)),"Array",{sort:function(t){return void 0===t?l.call(s(this)):l.call(s(this),n(t))}})},"57e5":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{"justify-center":""}},[a("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.loading?a("v-progress-linear",{attrs:{slot:"progress",color:"blue",indeterminate:""},slot:"progress"}):a("v-card",{staticClass:"custom__dialog"},[a("v-card-title",{staticClass:"dialog__header"},[t._t("entire-header",[t._t("title",[a("span",{staticClass:"dialog__title"},[t._v(t._s(t.title))])]),t._t("cancel-icon",[a("v-btn",{staticClass:"close__dialog",attrs:{fab:"",small:""},on:{click:t.close_dialog}},[a("v-icon",[t._v("close")])],1)])])],2),a("v-card-text",{staticClass:"dialog__body"},[t._t("content",[t._v(" "+t._s(t.content)+" ")])],2),a("v-card-actions",{staticClass:"dialog__actions"},[t._t("entire-actions",[t._t("button1",[a("v-btn",{on:{click:t.button1clicked}},[t._v(t._s(t.button1Text))])]),t._t("button2",[a("v-btn",{attrs:{loading:t.btnloading},on:{click:t.button2clicked}},[t._v(t._s(t.button2Text))])])])],2)],1)],1)],1)},n=[],s={props:{title:{type:String,default:"Default Modal Title"},content:{type:String,default:"Default Modal Text Content"},button1Text:{type:String,default:"Cancel"},button2Text:{type:String,default:"Delete"},open:Boolean,value:Boolean},data:function(){return{dialog:!1,loading:!1,btnloading:!1}},mounted:function(){var t=this;this.$event.$on("btnloading_off",(function(e){return t.btnloading=e}))},watch:{value:{handler:function(t){this.dialog=t},immediate:!0},open:function(t){this.dialog=t},dialog:function(t){this.$emit("update:open",t),this.$emit("input",t)}},methods:{button1clicked:function(){this.$emit("button1")},button2clicked:function(){this.btnloading=!0,this.$emit("button2")},open_dialog:function(){this.dialog=!0},close_dialog:function(){this.dialog=!1},clear_and_close:function(){Object.assign(this.$data,this.$options.data.apply(this)),this.close_dialog()},activate_loading:function(){this.loading=!0},disable_loading:function(){this.loading=!1}}},o=s,l=(a("aab6"),a("5bdc"),a("2877")),r=Object(l["a"])(o,i,n,!1,null,"37adf598",null);e["a"]=r.exports},"5b70":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("custom-dialog",{attrs:{title:t.title,content:t.textContent,"button1-text":t.cancelButtonText,"button2-text":t.deleteButtonText,open:t.open},on:{"update:open":function(e){t.open=e},button1:t.cancel_clicked,button2:t.delete_clicked}})],1)},n=[],s=a("57e5"),o={components:{CustomDialog:s["a"]},props:{title:{type:String,default:"Default Modal Title"},textContent:{type:String,default:"Default Modal Text Content"},cancelButtonText:{type:String,default:"Cancel"},deleteButtonText:{type:String,default:"Delete"},openDialog:Boolean},data:function(){return{open:!1}},watch:{openDialog:function(t){this.open=t},open:function(t){this.$emit("update:openDialog",t)}},methods:{cancel_clicked:function(){this.open=!1},delete_clicked:function(){this.$emit("delete")},showDialog:function(){this.open=!0},closeDialog:function(){this.open=!1}}},l=o,r=a("2877"),c=Object(r["a"])(l,i,n,!1,null,null,null);e["a"]=c.exports},"5bdc":function(t,e,a){"use strict";var i=a("877e"),n=a.n(i);n.a},"781e":function(t,e,a){},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"877e":function(t,e,a){},9223:function(t,e,a){},97975:function(t,e,a){},"9f6e":function(t,e,a){"use strict";var i=a("9223"),n=a.n(i);n.a},aab6:function(t,e,a){"use strict";var i=a("781e"),n=a.n(i);n.a},b047c:function(t,e,a){var i=a("1a8c"),n=a("408c"),s=a("b4b0"),o="Expected a function",l=Math.max,r=Math.min;function c(t,e,a){var c,d,u,_,f,p,v=0,m=!1,h=!1,g=!0;if("function"!=typeof t)throw new TypeError(o);function b(e){var a=c,i=d;return c=d=void 0,v=e,_=t.apply(i,a),_}function C(t){return v=t,f=setTimeout(w,e),m?b(t):_}function x(t){var a=t-p,i=t-v,n=e-a;return h?r(n,u-i):n}function y(t){var a=t-p,i=t-v;return void 0===p||a>=e||a<0||h&&i>=u}function w(){var t=n();if(y(t))return $(t);f=setTimeout(w,x(t))}function $(t){return f=void 0,g&&c?b(t):(c=d=void 0,_)}function k(){void 0!==f&&clearTimeout(f),v=0,c=p=d=f=void 0}function T(){return void 0===f?_:$(n())}function D(){var t=n(),a=y(t);if(c=arguments,d=this,p=t,a){if(void 0===f)return C(p);if(h)return clearTimeout(f),f=setTimeout(w,e),b(p)}return void 0===f&&(f=setTimeout(w,e)),_}return e=s(e)||0,i(a)&&(m=!!a.leading,h="maxWait"in a,u=h?l(s(a.maxWait)||0,e):u,g="trailing"in a?!!a.trailing:g),D.cancel=k,D.flush=T,D}t.exports=c},b4b0:function(t,e,a){var i=a("1a8c"),n=a("ffd6"),s=NaN,o=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,c=/^0o[0-7]+$/i,d=parseInt;function u(t){if("number"==typeof t)return t;if(n(t))return s;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var a=r.test(t);return a||c.test(t)?d(t.slice(2),a?2:8):l.test(t)?s:+t}t.exports=u},dae0:function(t,e,a){},e277:function(t,e,a){},eb96:function(t,e,a){"use strict";var i=a("e277"),n=a.n(i);n.a},edab:function(t,e,a){"use strict";var i=a("f3a9"),n=a.n(i);n.a},f09b:function(t,e,a){"use strict";var i=a("97975"),n=a.n(i);n.a},f3a9:function(t,e,a){},fefe:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"calendar"},[a("calendar-dialog",{ref:"add_dialog",attrs:{dialog:t.add_dialog,dialogTitle:"Add New Calendar"},on:{"update:dialog":function(e){t.add_dialog=e},save:function(e){return t.add_item("add_new_calendar",e)}}}),a("calendar-dialog",{ref:"edit_dialog",attrs:{dialog:t.edit_dialog,dialogTitle:"Edit Calendar","is-edit-dialog":t.edit_dialog,"fields-to-edit":t.edit_item},on:{"update:dialog":function(e){t.edit_dialog=e},save:function(e){return t.update_item("edit_calendar",e)}}}),a("delete-dialog",{attrs:{"open-dialog":t.delete_dialog,title:"Delete Calendar","text-content":"Are you sure you want to delete this calendar?"},on:{"update:openDialog":function(e){t.delete_dialog=e},"update:open-dialog":function(e){t.delete_dialog=e},delete:function(e){return t.delete_item("delete_calendar")}}}),a("table-header",{attrs:{paths:t.paths},on:{click:function(e){t.add_dialog=!0}}}),a("div",{staticClass:"calendar-wrapper"},[a("div",{staticClass:"calendar-content"},[a("div",{staticClass:"calendar_header"},[a("div",{staticClass:"left_option"},[a("v-btn",{attrs:{dark:"",color:"#3b589e",large:""}},[t._v("Add Template")]),a("v-btn",{attrs:{dark:"",color:"#3b589e",large:""}},[t._v("Customize Event")]),a("span",{staticClass:"date_title"},[t._v(" March 12, 2020")])],1),a("div",{staticClass:"right_option"},[a("v-btn",{staticClass:"action",attrs:{fab:"",large:"",text:"",color:"#b3b7c3"}},[a("v-icon",[t._v("list")])],1),a("v-btn",{staticClass:"action",attrs:{fab:"",large:"",text:"",color:"#b3b7c3"}},[a("v-icon",[t._v("grid_on")])],1),a("div",{staticClass:"event_tab"},[a("v-tabs",{staticClass:"event_tab_items",attrs:{centered:"",grow:"","hide-slider":""},model:{value:t.active_tab,callback:function(e){t.active_tab=e},expression:"active_tab"}},[a("v-tab",[t._v("Today")]),a("v-tab",[t._v("All")])],1)],1)],1)]),a("div",{staticClass:"calendar_body"},[a("div",{staticClass:"left"},[a("div",{staticClass:"date"},[a("div",{staticClass:"date_icon"},[a("svg",{attrs:{viewBox:"0 0 250 250"}},[a("path",{staticClass:"icon",attrs:{d:"M29 26l32 0c1,0 1,1 2,1 1,0 2,1 3,2 0,0 1,1 1,2 1,1 1,2 1,3 0,1 0,1 -1,2 0,1 -1,2 -1,3l0 0c-1,0 -2,1 -3,1 -1,1 -1,1 -2,1l-32 0c-1,0 -2,0 -3,0 -1,0 -1,0 -2,1 -1,0 -2,1 -3,1 -1,1 -1,1 -2,2l0 0c-1,1 -1,1 -2,2 0,1 -1,2 -1,3 -1,1 -1,1 -1,2 0,1 0,2 0,3l0 115c0,1 0,2 0,3 0,1 0,1 1,2 0,1 1,2 1,3 1,1 1,1 2,2 1,1 1,1 2,2 1,0 2,1 3,1 1,1 1,1 2,1 1,0 2,0 3,0l80 0 0 0c1,0 1,1 2,1 1,0 2,1 2,1l0 0c1,1 1,2 2,3 0,1 0,1 0,2 0,1 0,2 0,3 -1,1 -1,2 -2,2l0 1c-1,0 -1,1 -2,1 -1,0 -2,1 -3,1l-79 0c-2,0 -4,-1 -5,-1 -2,0 -4,-1 -6,-2 -1,0 -3,-1 -5,-2 -1,-1 -3,-3 -4,-4 -1,-1 -3,-3 -4,-4 -1,-2 -2,-3 -2,-5 -1,-2 -2,-4 -2,-6 0,-1 -1,-3 -1,-5l0 -115c0,-2 1,-4 1,-5 0,-2 1,-4 2,-6 0,-2 1,-3 2,-5 1,-1 3,-3 4,-4 1,-1 3,-3 4,-4 2,-1 4,-2 5,-2 2,-1 4,-2 6,-2 1,0 3,-1 5,-1zm42 159l7 0 0 0 14 0c-7,0 -14,0 -21,0zm125 -18c1,1 2,2 3,4 0,1 1,3 1,4 0,3 -2,6 -4,8 -2,2 -4,3 -7,3l-18 22c-1,1 -3,2 -5,2 -1,0 -3,0 -5,-1 -1,-2 -2,-3 -2,-5 0,-2 0,-4 1,-5l18 -22 0 0c0,-1 0,-1 0,-2 0,-1 0,-3 1,-5 1,-1 2,-3 3,-4l0 -23c0,-2 1,-3 2,-5 1,-1 3,-2 5,-2 2,0 4,1 5,2 1,2 2,3 2,5l0 24zm-9 -54c8,0 17,2 24,5 8,3 14,8 20,14 6,5 11,12 14,20 3,7 5,15 5,24 0,8 -2,16 -5,24 -3,7 -8,14 -14,20 -6,6 -12,10 -20,14 -7,3 -16,4 -24,4 -8,0 -16,-1 -24,-4 -8,-4 -14,-8 -20,-14 -6,-6 -11,-13 -14,-20 -3,-8 -4,-16 -4,-24 0,-9 1,-17 4,-24 3,-8 8,-15 14,-20 6,-6 12,-11 20,-14 8,-3 16,-5 24,-5zm34 29c-9,-9 -21,-14 -34,-14 -7,0 -13,1 -18,3 -6,3 -12,6 -16,11 -5,4 -8,9 -11,15 -2,6 -3,12 -3,19 0,6 1,13 3,18 3,6 6,12 11,16 4,5 10,8 16,11 5,2 11,3 18,3 7,0 13,-1 19,-3 5,-3 11,-6 15,-11 5,-4 8,-10 11,-16 2,-5 3,-12 3,-18 0,-7 -1,-13 -3,-19 -3,-6 -6,-11 -11,-15zm5 -41c0,0 0,1 0,2 -1,1 -1,2 -2,3l0 0c-1,0 -1,1 -2,1 -1,0 -2,1 -3,1 -1,0 -2,-1 -3,-1 -1,0 -1,-1 -2,-1l0 -1c-1,0 -1,-1 -2,-2 0,-1 0,-2 0,-2l0 -46c0,-1 0,-2 0,-3 -1,-1 -1,-1 -1,-2 -1,-1 -1,-2 -2,-3 0,-1 -1,-1 -1,-2 -1,-1 -2,-1 -3,-2 0,0 -1,-1 -2,-1 -1,-1 -2,-1 -3,-1 -1,0 -2,0 -3,0 -2,0 -6,0 -9,0 -8,0 -16,0 -21,0 -1,0 -2,-1 -3,-1 -1,0 -1,-1 -2,-1 -1,-1 -1,-2 -1,-3 -1,-1 -1,-1 -1,-2 0,-1 0,-2 1,-3 0,-1 0,-2 1,-2l0 0c1,-1 1,-2 2,-2 1,0 2,0 3,-1 5,0 14,0 21,0 3,0 7,0 9,0 2,0 4,1 6,1 2,0 4,1 5,2 2,0 4,1 5,2 2,1 3,3 5,4 1,1 2,3 3,4 1,2 2,3 3,5 1,2 1,4 2,6 0,1 0,3 0,5l0 46zm-187 -11c-1,0 -1,0 -2,-1 -1,0 -2,0 -3,-1 0,-1 -1,-1 -1,-2 -1,-1 -1,-2 -1,-3 0,-1 0,-2 1,-3 0,-1 1,-1 1,-2l0 0c1,-1 2,-1 3,-2 1,0 1,0 2,0l79 0c1,0 2,0 3,0 1,1 2,1 3,2l0 0c0,1 1,1 1,2 0,1 1,2 1,3 0,1 -1,2 -1,3 0,1 -1,1 -1,2l-1 0c0,1 -1,1 -2,2 -1,0 -2,0 -3,0l-79 0zm0 66c-1,0 -1,0 -2,0 -1,-1 -2,-1 -3,-2l0 0c0,-1 -1,-2 -1,-2 -1,-1 -1,-2 -1,-3 0,-1 0,-2 1,-3 0,-1 1,-1 1,-2 1,-1 2,-1 3,-2 1,0 1,0 2,0l22 0c1,0 2,0 3,0 1,1 1,1 2,2l0 0c1,1 1,1 2,2 0,1 0,2 0,3 0,1 0,2 0,3 -1,1 -1,1 -2,2l0 0c-1,1 -1,1 -2,2 -1,0 -2,0 -3,0l-22 0zm0 -34c-1,0 -1,0 -2,0 -1,-1 -2,-1 -3,-2l0 0c0,0 -1,-1 -1,-2 -1,-1 -1,-2 -1,-3 0,-1 0,-2 1,-2 0,-1 1,-2 1,-3l0 0c1,0 2,-1 3,-1 1,-1 1,-1 2,-1l49 0c1,0 2,0 3,1 1,0 1,1 2,1 1,1 1,2 2,3 0,0 0,1 0,2 0,1 0,2 0,3 -1,1 -1,2 -2,2 -1,1 -1,1 -2,2 -1,0 -2,0 -3,0l-49 0zm115 -74c0,1 -1,2 -1,3 0,1 -1,2 -1,2l-1 0c0,1 -1,2 -2,2 -1,0 -2,1 -3,1 0,0 -1,-1 -2,-1 -1,0 -2,-1 -3,-2l0 0c0,0 -1,-1 -1,-2 0,-1 -1,-2 -1,-3l0 -29c0,-1 1,-2 1,-3 0,-1 1,-2 1,-2 1,-1 2,-1 3,-2 1,0 2,0 2,0 1,0 2,0 3,0 1,1 2,1 3,2l0 0c0,0 1,1 1,2 0,1 1,2 1,3l0 29zm-67 0c0,1 0,2 -1,3 0,1 -1,2 -1,2l0 0c-1,1 -2,2 -3,2 0,0 -1,1 -2,1 -1,0 -2,-1 -3,-1 -1,0 -2,-1 -2,-2l0 0c-1,0 -1,-1 -2,-2 0,-1 0,-2 0,-3l0 -29c0,-1 0,-2 0,-3 1,-1 1,-2 2,-2l0 0c0,-1 1,-1 2,-2 1,0 2,0 3,0 1,0 2,0 3,0 0,1 1,1 2,2 0,0 1,1 1,2 1,1 1,2 1,3l0 29zm10 -7c-1,0 -2,0 -2,-1 -1,0 -2,-1 -3,-1 0,-1 -1,-2 -1,-3 -1,-1 -1,-1 -1,-2 0,-1 0,-2 1,-3 0,-1 1,-2 1,-2l0 -1c1,0 2,-1 3,-1 0,0 1,-1 2,-1l30 0c1,0 2,1 3,1 1,0 1,1 2,2l0 0c1,0 1,1 2,2 0,1 0,2 0,3 0,1 0,1 0,2 -1,1 -1,2 -2,3 -1,0 -1,1 -2,1 -1,1 -2,1 -3,1l-30 0z"}})])]),t._m(0)]),a("vc-calendar",{staticClass:"px-3",attrs:{attributes:t.attributes,"nav-visibility":"visible","is-expanded":""}}),a("div",{staticClass:"calendar_label"},[a("div",{staticClass:"label_left"},[a("h3",[t._v("Events")]),t._l(t.eventlabels,(function(e){return a("div",{staticClass:"event-item"},[a("v-avatar",{attrs:{width:"15",height:"15","min-width":"15",color:e.color}},[a("span")]),a("div",{staticClass:"event-title"},[t._v(t._s(e.title))])],1)}))],2),a("div",{staticClass:"label_right"},[a("h3",[t._v("Calendars")]),a("v-checkbox",{attrs:{"hide-details":"",label:"Reports"}}),a("v-checkbox",{attrs:{"hide-details":"",label:"Local SEO"}}),a("v-checkbox",{attrs:{"hide-details":"",label:"Social Posts"}}),a("v-checkbox",{attrs:{"hide-details":"",label:"Questionnaires"}})],1)])],1),a("div",{staticClass:"right"},t._l(t.events,(function(e){return a("div",{staticClass:"event_card"},[a("div",{staticClass:"card_header"},[a("h3",{staticClass:"card_title"},[t._v(t._s(e.type))]),a("div",{staticClass:"card_actions"},[a("v-btn",{staticClass:"action",attrs:{fab:"",small:"",text:"",color:"#b3b7c3"}},[a("v-icon",[t._v("edit")])],1),a("v-btn",{staticClass:"action",attrs:{fab:"",small:"",text:"",color:"#b3b7c3"}},[a("v-icon",[t._v("delete")])],1),a("v-btn",{staticClass:"action",attrs:{fab:"",small:"",depressed:"",dark:"",color:"#1fb868"}},[a("v-icon",[t._v("add")])],1)],1)]),a("div",{staticClass:"card_body"},[a("v-avatar",{staticClass:"event_color",attrs:{width:"15",height:"15","min-width":"15",color:e.color}},[a("span")]),a("div",{staticClass:"event_time"},[t._v(t._s(e.time))]),a("h3",{staticClass:"event_title"},[t._v(t._s(e.title))]),a("div",{staticClass:"invited"},[a("div",{staticClass:"invited-inner"},[a("div",{staticClass:"invited-icon"},[t._l(e.users,(function(e){return[e.image_url?a("v-avatar",{staticClass:"user-icon responsive-img",attrs:{size:"40"}},[a("img",{staticClass:"atomic-icon",attrs:{src:e.image_url,alt:"user"}})]):a("v-avatar",{staticClass:"user-icon responsive-img",attrs:{color:"red",size:"40"}},[a("span",{staticClass:"white--text"},[t._v(" "+t._s(e.first_name.charAt(0)+e.last_name.charAt(0))+" ")])])]}))],2),a("div",{staticClass:"more"},[t._v("+2 more invited")])])]),a("v-btn",{attrs:{dark:"",color:e.color}},[t._v("Join Meeting")])],1),a("div",{staticClass:"card_footer"},[a("v-btn",{staticClass:"view_more",attrs:{text:"",color:"white"}},[t._v("View More")])],1)])})),0)])])])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"date_text"},[a("h3",[t._v("Today")]),a("div",[t._v("12 March")])])}],s=a("c1df"),o=a.n(s),l=a("3d31"),r=a("29d6"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("custom-dialog",{ref:"dialog",attrs:{dialogTitle:t.dialogTitle,open:t.open,"button2-text":"Save"},on:{"update:open":function(e){t.open=e},button1:t.cancel,button2:t.save}},[a("template",{slot:"content"},[a("v-text-field",{staticClass:"dialog__textfield d_field",attrs:{label:"Calendar Title",color:"#667187",filled:"","hide-details":""},model:{value:t.title,callback:function(e){t.title="string"===typeof e?e.trim():e},expression:"title"}}),a("v-textarea",{staticClass:"dialog__textfield d_field",attrs:{label:"Add short description",color:"#667187",filled:"","hide-details":""},model:{value:t.description,callback:function(e){t.description="string"===typeof e?e.trim():e},expression:"description"}}),a("v-color-picker",{staticClass:"ma-2 dialog__colorpicker d_field",attrs:{label:"Calendar Theme","dot-size":"30",width:"470px"},model:{value:t.properties,callback:function(e){t.properties="string"===typeof e?e.trim():e},expression:"properties"}})],1)],2)},d=[],u=a("57e5"),_={name:"CalendarDialog",components:{CustomDialog:u["a"]},props:{dialog:Boolean,dialogTitle:String,isEditDialog:Boolean,fieldsToEdit:{type:Object,default:function(){}}},data:function(){return{open:!1,title:null,description:null,properties:{}}},watch:{dialog:function(t){this.open=t},open:function(t){this.$emit("update:dialog",t)},fieldsToEdit:{handler:function(t){this.isEditDialog&&this.update_fields(t)},deep:!0}},methods:{cancel:function(){this.open=!1},save:function(){var t={title:this.title,description:this.description,properties:this.properties};this.$emit("save",t)},update_fields:function(t){var e=t.fields,a=Object.assign({},e);this.title=a.title,this.description=a.description,this.properties=a.properties},clear_and_close:function(){Object.assign(this.$data,this.$options.data.apply(this)),this.cancel()}}},f=_,p=(a("eb96"),a("2877")),v=Object(p["a"])(f,c,d,!1,null,"a66f31e0",null),m=v.exports,h=a("5b70"),g={name:"Calendar",mixins:[l["a"]],components:{TableHeader:r["a"],CalendarDialog:m,DeleteDialog:h["a"]},data:function(){return{paths:[{text:"Dashboard",disabled:!1,router_name:"default-content"},{text:"Calendar",disabled:!0,router_name:null}],table_config:{route_name:"templates",add_message:"New Template added successfully!",update_message:"Template updated successfully!",delete_message:"Template deleted successfully!"},start:o()().format("YYYY-MM-DD"),type:"month",active_tab:"",attributes:[{dot:!0,popover:{label:"Meeting with the team"},dates:[new Date(2020,2,1),new Date(2020,2,10),new Date(2020,2,22)]},{dot:"red",popover:{label:"Task 2 Time Line"},dates:[{start:new Date(2020,2,2),end:new Date(2020,2,9)},{start:new Date(2020,2,15),span:5}]}],eventlabels:[{title:"Default",color:"#ccc"},{title:"Ranking Report",color:"#515d93"},{title:"Video Marketing",color:"#f56c6c"},{title:"Local SEO",color:"#1fb868"},{title:"Social Post",color:"#00a7e5"},{title:"Report files",color:"#ed8564"},{title:"Others",color:"#088f81"}],events:[{type:"Event",color:"#f56c6c",time:"12:00PM - 1:30PM",title:"Video Product Roadmap 01",users:[{first_name:"Alvin",last_name:"Pacot",image_url:!1},{first_name:"Kirby",last_name:"Capangpangan",image_url:!1},{first_name:"Moe",last_name:"Alongan",image_url:!1}]},{type:"Event",color:"#f56c6c",time:"12:00PM - 1:30PM",title:"Video Product Roadmap 02",users:[{first_name:"Alvin",last_name:"Pacot",image_url:!1},{first_name:"Kirby",last_name:"Capangpangan",image_url:!1},{first_name:"Moe",last_name:"Alongan",image_url:!1}]},{type:"Event",color:"#f56c6c",time:"12:00PM - 1:30PM",title:"Video Product Roadmap 03",users:[{first_name:"Alvin",last_name:"Pacot",image_url:!1},{first_name:"Kirby",last_name:"Capangpangan",image_url:!1},{first_name:"Moe",last_name:"Alongan",image_url:!1}]},{type:"Event",color:"#f56c6c",time:"12:00PM - 1:30PM",title:"Video Product Roadmap 04",users:[{first_name:"Alvin",last_name:"Pacot",image_url:!1},{first_name:"Kirby",last_name:"Capangpangan",image_url:!1},{first_name:"Moe",last_name:"Alongan",image_url:!1}]}]}},computed:{date:function(){return o()(this.start,"YYYY-MM-DD").format("MMMM YYYY")}}},b=g,C=(a("9f6e"),a("f09b"),Object(p["a"])(b,i,n,!1,null,"00ceedc1",null));e["default"]=C.exports},ff3c:function(t,e,a){"use strict";var i=a("4c37"),n=a.n(i);n.a}}]);
//# sourceMappingURL=chunk-6962100e.89c547d0.js.map