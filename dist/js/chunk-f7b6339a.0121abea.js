(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f7b6339a"],{"10fc":function(e,t,n){"use strict";var i=n("65a1"),a=n.n(i);a.a},"13ea":function(e,t,n){var i=n("03dd"),a=n("42a2"),s=n("d370"),o=n("6747"),l=n("30c9"),c=n("0d24"),r=n("eac5"),d=n("73ac"),u="[object Map]",v="[object Set]",_=Object.prototype,f=_.hasOwnProperty;function p(e){if(null==e)return!0;if(l(e)&&(o(e)||"string"==typeof e||"function"==typeof e.splice||c(e)||d(e)||s(e)))return!e.length;var t=a(e);if(t==u||t==v)return!e.size;if(r(e))return!i(e).length;for(var n in e)if(f.call(e,n))return!1;return!0}e.exports=p},"174f":function(e,t,n){},"259d":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"breadcrumb-wrapper"},[n("v-breadcrumbs",{attrs:{items:e.paths},scopedSlots:e._u([{key:"item",fn:function(t){var i=t.item;return[n("v-breadcrumbs-item",{staticClass:"page__title",attrs:{disabled:i.disabled}},[n("span",{on:{click:function(t){return e.navigate_from_breadcrumb(i)}}},[e._v(" "+e._s(i.text)+" ")])])]}}])},[n("v-icon",{attrs:{slot:"divider"},slot:"divider"},[e._v("chevron_right")])],1)],1)},a=[],s={name:"Breadcrumb",props:{paths:{type:Array,default:function(){return[]}}},methods:{navigate_from_breadcrumb:function(e){if(e.hasOwnProperty("path"))e.path&&this.$router.push({path:e.path});else{var t=e.router_name;t&&this.$router.push({name:t})}}}},o=s,l=(n("87d8"),n("10fc"),n("2877")),c=Object(l["a"])(o,i,a,!1,null,"14ca3542",null);t["a"]=c.exports},"289a":function(e,t,n){},"29d6":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{staticClass:"table-header",attrs:{wrap:""}},[n("breadcrumb",{attrs:{paths:e.paths}}),n("v-flex",[e.noButton?e._e():n("v-btn",{staticClass:"add__btn mr-2",attrs:{fab:"",small:""},on:{click:function(t){return e.$emit("click")}}},[n("v-icon",[e._v("add")])],1),e.noSortButton?e._e():n("v-btn",{staticClass:"add__btn mr-2",attrs:{fab:"",small:""},on:{click:function(t){return e.$emit("click-sort-by")}}},[n("v-icon",[e._v("sort")])],1),e.noListButton?e._e():n("v-btn",{staticClass:"add__btn mr-2",attrs:{fab:"",small:""},on:{click:function(t){return e.$emit("click-list-view")}}},[n("v-icon",[e._v("list")])],1),e.noGridButton?e._e():n("v-btn",{staticClass:"add__btn mr-2",attrs:{fab:"",small:""},on:{click:function(t){return e.$emit("click-grid-view")}}},[n("v-icon",[e._v("mdi-view-dashboard")])],1),e._t("form-btn")],2)],1)},a=[],s=n("259d"),o={name:"TableHeader",props:{paths:{type:Array,default:[]},noButton:{type:Boolean,default:!1},noListButton:{type:Boolean,default:!0},noGridButton:{type:Boolean,default:!0},noSortButton:{type:Boolean,default:!0}},data:function(){return{fab:!0}},components:{Breadcrumb:s["a"]}},l=o,c=(n("8732"),n("2877")),r=Object(c["a"])(l,i,a,!1,null,"273c0570",null);t["a"]=r.exports},"2ffd":function(e,t,n){"use strict";var i=n("a9c4"),a=n.n(i);a.a},"48f9":function(e,t,n){},"53eb":function(e,t,n){},"57e5":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{"justify-center":""}},[n("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e.loading?n("v-progress-linear",{attrs:{slot:"progress",color:"blue",indeterminate:""},slot:"progress"}):n("v-card",{staticClass:"custom__dialog"},[n("v-card-title",{staticClass:"dialog__header"},[e._t("entire-header",[e._t("title",[n("span",{staticClass:"dialog__title"},[e._v(e._s(e.title))])]),e._t("cancel-icon",[n("v-btn",{staticClass:"close__dialog",attrs:{fab:"",small:""},on:{click:e.close_dialog}},[n("v-icon",[e._v("close")])],1)])])],2),n("v-card-text",{staticClass:"dialog__body"},[e._t("content",[e._v(" "+e._s(e.content)+" ")])],2),n("v-card-actions",{staticClass:"dialog__actions"},[e._t("entire-actions",[e._t("button1",[n("v-btn",{on:{click:e.button1clicked}},[e._v(e._s(e.button1Text))])]),e._t("button2",[n("v-btn",{attrs:{loading:e.btnloading},on:{click:e.button2clicked}},[e._v(e._s(e.button2Text))])])])],2)],1)],1)],1)},a=[],s={props:{title:{type:String,default:"Default Modal Title"},content:{type:String,default:"Default Modal Text Content"},button1Text:{type:String,default:"Cancel"},button2Text:{type:String,default:"Delete"},open:Boolean,value:Boolean},data:function(){return{dialog:!1,loading:!1,btnloading:!1}},mounted:function(){var e=this;this.$event.$on("btnloading_off",(function(t){return e.btnloading=t}))},watch:{value:{handler:function(e){this.dialog=e},immediate:!0},open:function(e){this.dialog=e},dialog:function(e){this.$emit("update:open",e),this.$emit("input",e)}},methods:{button1clicked:function(){this.$emit("button1")},button2clicked:function(){this.btnloading=!0,this.$emit("button2")},open_dialog:function(){this.dialog=!0},close_dialog:function(){this.dialog=!1},clear_and_close:function(){Object.assign(this.$data,this.$options.data.apply(this)),this.close_dialog()},activate_loading:function(){this.loading=!0},disable_loading:function(){this.loading=!1}}},o=s,l=(n("ed40"),n("dc8f"),n("2877")),c=Object(l["a"])(o,i,a,!1,null,"68307905",null);t["a"]=c.exports},"5b70":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("custom-dialog",{attrs:{title:e.title,content:e.textContent,"button1-text":e.cancelButtonText,"button2-text":e.deleteButtonText,open:e.open},on:{"update:open":function(t){e.open=t},button1:e.cancel_clicked,button2:e.delete_clicked}})],1)},a=[],s=n("57e5"),o={components:{CustomDialog:s["a"]},props:{title:{type:String,default:"Default Modal Title"},textContent:{type:String,default:"Default Modal Text Content"},cancelButtonText:{type:String,default:"Cancel"},deleteButtonText:{type:String,default:"Delete"},openDialog:Boolean},data:function(){return{open:!1}},watch:{openDialog:function(e){this.open=e},open:function(e){this.$emit("update:openDialog",e)}},methods:{cancel_clicked:function(){this.open=!1},delete_clicked:function(){this.$emit("delete")},showDialog:function(){this.open=!0},closeDialog:function(){this.open=!1}}},l=o,c=n("2877"),r=Object(c["a"])(l,i,a,!1,null,null,null);t["a"]=r.exports},"65a1":function(e,t,n){},"74b9":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{"justify-center":""}},[n("v-dialog",{attrs:{persistent:"",scrollable:"","max-width":"600px"},model:{value:e.open,callback:function(t){e.open=t},expression:"open"}},[n("v-card",{staticClass:"addService__dialog"},[n("v-card-title",{staticClass:"dialog__header"},[n("span",{staticClass:"dialog__title"},[e._v(e._s(e.title))]),n("v-btn",{staticClass:"close__dialog",attrs:{small:"",fab:""},on:{click:e.cancel}},[n("v-icon",{attrs:{dark:""}},[e._v("close")])],1)],1),n("v-card-text",{attrs:{scrollable:""}},[n("v-layout",{attrs:{wrap:""}},[n("v-layout",{staticClass:"service__field",attrs:{"align-center":"","justify-space-between":""}},[n("v-flex",{attrs:{xs10:""}},[n("v-combobox",{staticClass:"service__input",attrs:{label:"Untitled Service",solo:"","hide-details":"",color:"#657186",items:e.recommendedServices},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.add_service(t)}},nativeOn:{input:function(t){e.name=t.srcElement.value}},model:{value:e.name,callback:function(t){e.name="string"===typeof t?t.trim():t},expression:"name"}})],1),n("v-flex",{staticClass:"text-xs-right",attrs:{xs2:""}},[n("v-btn",{staticClass:"addService__btn",attrs:{depressed:!e.name},on:{click:e.add_service}},[n("v-icon",{attrs:{disabled:!e.name,dark:""}},[e._v("add")])],1)],1)],1),n("v-flex",{attrs:{xs12:""}},e._l(e.services,(function(t,i){return n("v-layout",{key:i,staticClass:"service__field",attrs:{"align-center":""}},[n("v-flex",{attrs:{xs10:""}},[n("v-text-field",{staticClass:"service__input",attrs:{label:"Service Name",solo:"","hide-details":"",color:"#657186"},model:{value:t.name,callback:function(n){e.$set(t,"name","string"===typeof n?n.trim():n)},expression:"service.name"}})],1),n("v-flex",{staticClass:"text-xs-right",attrs:{xs2:""}},[n("v-btn",{staticClass:"deleteService__btn",on:{click:function(t){return e.delete_service(i)}}},[n("v-icon",{attrs:{dark:""}},[e._v("delete")])],1)],1)],1)})),1)],1)],1),n("v-card-actions",{staticClass:"service__actions"},[n("v-btn",{staticClass:"service__actions_btn",attrs:{disabled:e.is_disabled},on:{click:e.save}},[e._v("Save")]),n("v-btn",{staticClass:"service__actions_btn",on:{click:e.cancel}},[e._v("Cancel")])],1)],1)],1)],1)},a=[],s=(n("7f7f"),n("28a5"),n("a2fd")),o={name:"ServicesAddDialog",props:{dialog:Boolean,title:String},data:function(){return{open:!1,name:"",services:[],recommendedServices:[]}},mounted:function(){this.services=[],this.recommendedServices=this.get_recommended_services()},computed:{is_disabled:function(){return!this.services.length}},watch:{dialog:function(e){this.open=e,!1===e&&(this.services=[])},open:function(e){this.$emit("update:dialog",e)}},methods:{get_recommended_services:function(){var e=s["default"].split("\n");return e.filter((function(e){return 0!=e.trim().length}))},add_service:function(){this.name?(this.services.unshift({name:this.name}),this.name=""):this.$event.$emit("open_snackbar","Service name required!","error")},delete_service:function(e){this.services.splice(e,1)},cancel:function(){this.open=!1},save:function(){var e=this.services;this.$emit("save",e)},clear_and_close:function(){this.name="",this.services=[],this.cancel()}}},l=o,c=(n("2ffd"),n("2877")),r=Object(c["a"])(l,i,a,!1,null,null,null);t["a"]=r.exports},"7e7e":function(e,t,n){"use strict";var i=n("174f"),a=n.n(i);a.a},8732:function(e,t,n){"use strict";var i=n("48f9"),a=n.n(i);a.a},"87d8":function(e,t,n){"use strict";var i=n("e403"),a=n.n(i);a.a},a2fd:function(e,t,n){"use strict";n.r(t),t["default"]="Search Engine Optimization (SEO)\r\nWebsite Design and Development\r\nSocial Media Marketing\r\nGoogle Analytics\r\nBusiness Blogging Services\r\nFull Internet Marketing\r\nGraphic Design Services\r\nContent Marketing"},a41c:function(e,t,n){"use strict";var i=n("53eb"),a=n.n(i);a.a},a953:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"services"},[n("table-header",{attrs:{paths:e.paths},on:{click:function(t){e.add_dialog=!0}}}),n("services-add-dialog",{ref:"add_dialog",attrs:{dialog:e.add_dialog,title:"Add New Service(s)"},on:{"update:dialog":function(t){e.add_dialog=t},save:function(t){return e.add_item("add_new_services",t)}}}),n("services-edit-dialog",{ref:"edit_dialog",attrs:{dialog:e.edit_dialog,title:"Edit Service","is-edit-dialog":e.edit_dialog,"fields-to-edit":e.edit_item},on:{"update:dialog":function(t){e.edit_dialog=t},save:function(t){return e.update_item("update_service",t)}}}),n("delete-dialog",{attrs:{"open-dialog":e.delete_dialog,title:"Delete Service","text-content":"Are you sure you want to delete this service?"},on:{"update:openDialog":function(t){e.delete_dialog=t},"update:open-dialog":function(t){e.delete_dialog=t},delete:function(t){return e.delete_item("delete_service")}}}),n("delete-dialog",{attrs:{"open-dialog":e.bulk_delete_dialog,title:"Delete Services","text-content":"Are you sure you want to delete these services? This can't be undone."},on:{"update:openDialog":function(t){e.bulk_delete_dialog=t},"update:open-dialog":function(t){e.bulk_delete_dialog=t},delete:function(t){return e.bulk_delete("bulk_delete_services")}}}),n("VueTable",{key:e.componentKey,attrs:{headers:e.headers,items:e.items,loading:e.loading,title:"Services",permission:e.$_permissions.get("services"),noMoreData:e.noMoreData,showSelect:!0},on:{"load-more":e.load_more_services,"delete-selected":function(t){return e.open_bulk_delete_dialog(t)}},scopedSlots:e._u([{key:"row-slot",fn:function(t){var i=t.item;return[n("td",{staticClass:"service__name text-cap"},[e._v(e._s(i.service_name))]),n("td",{staticClass:"text-cap"},[n("v-avatar",{attrs:{size:"30",color:"teal"}},[n("v-img",{attrs:{src:i.image_url,title:i.name},scopedSlots:e._u([{key:"placeholder",fn:function(){return[n("span",{staticClass:"white--text headline"},[e._v("U")])]},proxy:!0}],null,!0)})],1),e._v(" "+e._s(i.name)+" ")],1),n("td",[e._v(e._s(e._f("bzFromNow")(i.service_created_at)))]),n("Actions",{attrs:{item:i,hasView:!1,permissions:e.$_permissions.get("services")},on:{delete:function(t){return e.open_delete_dialog(i)},edit:function(t){return e.open_edit_dialog(i)}}})]}}])},[n("template",{slot:"empty-slot"},[n("v-btn",{attrs:{dark:"",color:"#3b589e"},on:{click:function(t){e.add_dialog=!0}}},[e._v("Add Service")])],1)],2)],1)},a=[],s=n("e06e"),o=(n("13ea"),n("1be9"),n("579d")),l=n("0ebe"),c=n("259d"),r=n("74b9"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"edit-service"},[n("CustomDialog",{ref:"dialog",attrs:{title:"Edit Service",open:e.open,"button2-text":"Save"},on:{"update:open":function(t){e.open=t},button1:function(t){e.open=!1},button2:e.save}},[n("template",{slot:"content"},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-combobox",{staticClass:"service__input",attrs:{label:"Service name",solo:"","hide-details":"",color:"#657186",items:e.recommendedServices},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.add_service(t)}},model:{value:e.name,callback:function(t){e.name="string"===typeof t?t.trim():t},expression:"name"}})],1)],1)],1)],2)],1)},u=[],v=(n("28a5"),n("7f7f"),n("57e5")),_=n("a2fd"),f={name:"ServicesEditDialog",props:{dialog:Boolean,title:String,isEditDialog:Boolean,fieldsToEdit:{type:Object,default:function(){}}},components:{CustomDialog:v["a"]},mounted:function(){this.recommendedServices=this.get_recommended_services()},data:function(){return{open:!1,name:null,recommendedServices:[]}},watch:{dialog:function(e){this.open=e},open:function(e){this.$emit("update:dialog",e)},fieldsToEdit:{handler:function(e){this.isEditDialog&&this.update_fields(e)},deep:!0}},methods:{cancel:function(){this.open=!1},save:function(){var e={name:this.name};this.$emit("save",e)},update_fields:function(e){var t=e.fields,n=Object.assign({},t);this.name=n.service_name},get_recommended_services:function(){var e=_["default"].split("\n");return e.filter((function(e){return 0!=e.trim().length}))}}},p=f,m=n("2877"),h=Object(m["a"])(p,d,u,!1,null,null,null),g=h.exports,b=n("5b70"),x=n("29d6"),y=n("ee09"),k={name:"Services",mixins:[s["a"],o["a"]],components:{VueTable:l["a"],Breadcrumb:c["a"],ServicesAddDialog:r["a"],ServicesEditDialog:g,DeleteDialog:b["a"],TableHeader:x["a"],Actions:y["a"]},data:function(){return{paths:[{text:"Dashboard",disabled:!1,router_name:"default-content"},{text:"Services",disabled:!0,router_name:null}],headers:[{text:"Service",value:"service_name",sortable:!0},{text:"Created By",value:"name",sortable:!0},{text:"Date Created",value:"service_created_at",sortable:!0},{text:"Actions",is_action:!0,sortable:!1,align:"center",width:"140px"}],table_config:{route_name:"services",add_message:"New Service(s) added successfully!",update_message:"Service updated successfully!",delete_message:"Service deleted successfully!",refresh_table_message:"Table refreshed",refresh_table_api_name:"paginate_services_table"}}},created:function(){this.load_services()},methods:{toggleAll:function(){this.selected.length?this.selected=[]:this.selected=this.items.slice()},load_services:function(){this.fill_table_via_url("api/services")},load_more_services:function(){this.load_more_via_url("api/services")}}},S=k,w=(n("a41c"),Object(m["a"])(S,i,a,!1,null,"1b188cf8",null));t["default"]=w.exports},a9c4:function(e,t,n){},dc8f:function(e,t,n){"use strict";var i=n("289a"),a=n.n(i);a.a},e2c0:function(e,t,n){},e403:function(e,t,n){},ed40:function(e,t,n){"use strict";var i=n("e2c0"),a=n.n(i);a.a},ee09:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("td",{staticClass:"table-actions",attrs:{align:"center"}},[e.hasEdit?n("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.can_edit,expression:"can_edit"}],attrs:{dense:"",dense:"",icon:""},on:{click:function(t){return e.handle_action("edit")}}},[n("v-icon",{attrs:{small:""}},[e._v(" mdi-pencil ")])],1):e._e(),e.hasDelete?n("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.can_delete,expression:"can_delete"}],attrs:{dense:"",icon:""},on:{click:function(t){return e.handle_action("delete")}}},[n("v-icon",{attrs:{small:""}},[e._v("mdi-delete")])],1):e._e(),e.hasView?n("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.can_view,expression:"can_view"}],attrs:{dense:"",icon:""},on:{click:function(t){return e.handle_action("view")}}},[n("v-icon",{attrs:{small:""}},[e._v("pageview")])],1):e._e()],1)},a=[],s={props:{item:{type:Object,default:null},permissions:{type:Object,default:function(){return{delete:!0,update:!0,create:!0,view:!0}}},hasDelete:{type:Boolean,default:!0},hasEdit:{type:Boolean,default:!0},hasView:{type:Boolean,default:!0}},computed:{logged_user:function(){return this.$store.getters.user}},methods:{handle_action:function(e){this.item&&this.$emit(e,this.item)},can_delete:function(){return!!this.logged_user.is_admin||this.permissions&&this.permissions.can.delete},can_edit:function(){return!!this.logged_user.is_admin||this.permissions&&this.permissions.can.update},can_view:function(){return!!this.logged_user.is_admin||this.permissions&&this.permissions.can.view}}},o=s,l=(n("7e7e"),n("2877")),c=Object(l["a"])(o,i,a,!1,null,null,null);t["a"]=c.exports}}]);
//# sourceMappingURL=chunk-f7b6339a.0121abea.js.map