(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-542f6663"],{"13ea":function(e,t,i){var n=i("03dd"),s=i("42a2"),o=i("d370"),a=i("6747"),l=i("30c9"),r=i("0d24"),c=i("eac5"),u=i("73ac"),d="[object Map]",p="[object Set]",f=Object.prototype,g=f.hasOwnProperty;function _(e){if(null==e)return!0;if(l(e)&&(a(e)||"string"==typeof e||"function"==typeof e.splice||r(e)||u(e)||o(e)))return!e.length;var t=s(e);if(t==d||t==p)return!e.size;if(c(e))return!n(e).length;for(var i in e)if(g.call(e,i))return!1;return!0}e.exports=_},"174f":function(e,t,i){},"259d":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"breadcrumb-wrapper"},[i("v-breadcrumbs",{attrs:{items:e.paths},scopedSlots:e._u([{key:"item",fn:function(t){var n=t.item;return[i("v-breadcrumbs-item",{staticClass:"page__title",attrs:{disabled:n.disabled}},[i("span",{on:{click:function(t){return e.navigate_from_breadcrumb(n)}}},[e._v(" "+e._s(n.text)+" ")])])]}}])},[i("v-icon",{attrs:{slot:"divider"},slot:"divider"},[e._v("chevron_right")])],1),e._t("extra")],2)},s=[],o={name:"Breadcrumb",props:{paths:{type:Array,default:function(){return[]}}},methods:{navigate_from_breadcrumb:function(e){if(e.hasOwnProperty("path"))e.path&&this.$router.push({path:e.path});else{var t=e.router_name;t&&this.$router.push({name:t})}}}},a=o,l=(i("fe54"),i("573a"),i("2877")),r=Object(l["a"])(a,n,s,!1,null,"5c807bcd",null);t["a"]=r.exports},"2ab4":function(e,t,i){},"2fac":function(e,t,i){},"573a":function(e,t,i){"use strict";var n=i("c5c4"),s=i.n(n);s.a},"57e5":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-layout",{attrs:{"justify-center":""}},[i("v-dialog",{attrs:{persistent:"","max-width":e.maxWidth,scrollable:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e.loading?i("v-progress-linear",{attrs:{slot:"progress",color:"blue",indeterminate:""},slot:"progress"}):i("v-card",{staticClass:"custom__dialog"},[i("div",{staticClass:"dialog__header"},[e._t("entire-header",[e._t("title",[i("h3",{staticClass:"dialog__title"},[e._v(e._s(e.title))])]),e._t("extra-buttons"),e._t("cancel-icon",[i("v-btn",{staticClass:"close__dialog",attrs:{fab:"",small:"",depressed:""},on:{click:e.close_dialog}},[i("v-icon",[e._v("close")])],1)])]),e._t("below-title")],2),i("v-card-text",{staticClass:"dialog__body"},[e._t("content",[i("div",{domProps:{innerHTML:e._s(e.content)}})])],2),e.hasFooter?i("v-card-actions",{staticClass:"dialog__actions"},[e._t("entire-actions",[e._t("extras"),e._t("button1",[i("v-btn",{attrs:{disabled:e.btnloading},on:{click:e.button1clicked}},[e._v(e._s(e.button1Text))])]),e._t("button2",[i("v-btn",{attrs:{loading:e.btnloading,disabled:e.mainBtnDisabled},on:{click:e.button2clicked}},[e._v(e._s(e.button2Text))])])])],2):e._e()],1)],1)],1)},s=[],o=(i("c5f6"),{props:{title:{type:String,default:""},content:{type:String,default:""},button1Text:{type:String,default:"Cancel"},button2Text:{type:String,default:"Delete"},open:Boolean,value:Boolean,mainBtnDisabled:{type:Boolean,default:!1},hasFooter:{type:Boolean,default:!0},maxWidth:{type:[Number,String],default:"600px"}},data:function(){return{dialog:!1,loading:!1,btnloading:!1}},mounted:function(){var e=this;this.$event.$on("btnloading_off",(function(t){e.btnloading=!1}))},watch:{value:{handler:function(e){this.dialog=e},immediate:!0},open:function(e){this.dialog=e,this.btnloading=!1},dialog:function(e){this.$emit("update:open",e),this.$emit("input",e)}},methods:{button1clicked:function(){this.$emit("button1"),this.close_dialog()},button2clicked:function(){this.btnloading=!0,this.$emit("button2")},open_dialog:function(){this.dialog=!0},close_dialog:function(){this.dialog=!1,this.btnloading=!1,this.$emit("click:close",!0)},clear_and_close:function(){Object.assign(this.$data,this.$options.data.apply(this)),this.close_dialog()},activate_loading:function(){this.loading=!0},disable_loading:function(){this.loading=!1}}}),a=o,l=(i("f436"),i("5882"),i("2877")),r=Object(l["a"])(a,n,s,!1,null,"17401548",null);t["a"]=r.exports},5882:function(e,t,i){"use strict";var n=i("5c1e"),s=i.n(n);s.a},"5b70":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("custom-dialog",{attrs:{title:e.title,content:e.textContent,"button1-text":e.cancelButtonText,"button2-text":e.deleteButtonText,open:e.open},on:{"update:open":function(t){e.open=t},button1:e.cancel_clicked,button2:e.delete_clicked},scopedSlots:e._u([{key:"content",fn:function(){return[i("v-banner",{attrs:{"two-line":"",outlined:"",tile:"",flat:""}},[i("v-icon",{attrs:{slot:"icon","x-large":"",color:"red accent-4"},slot:"icon"},[e._v(" mdi-alert-octagram ")]),i("p",{staticClass:"subtitle-1",domProps:{innerHTML:e._s(e.textContent)}})],1)]},proxy:!0}])})],1)},s=[],o=i("57e5"),a={components:{CustomDialog:o["a"]},props:{title:{type:String,default:"Default Modal Title"},textContent:{type:String,default:"Default Modal Text Content"},cancelButtonText:{type:String,default:"Cancel"},deleteButtonText:{type:String,default:"Yes, Delete"},openDialog:Boolean},data:function(){return{open:!1}},watch:{openDialog:function(e){this.open=e},open:function(e){this.$emit("update:openDialog",e)}},methods:{cancel_clicked:function(){this.open=!1},delete_clicked:function(){this.$emit("delete")},showDialog:function(){this.open=!0},closeDialog:function(){this.open=!1}}},l=a,r=i("2877"),c=Object(r["a"])(l,n,s,!1,null,null,null);t["a"]=c.exports},"5c1e":function(e,t,i){},6557:function(e,t,i){},"7e7e":function(e,t,i){"use strict";var n=i("174f"),s=i.n(n);s.a},b709:function(e,t,i){},be33:function(e,t,i){"use strict";var n=i("6557"),s=i.n(n);s.a},c5c4:function(e,t,i){},cbd8:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"permissions-table"},[i("permissions-dialog",{ref:"add_dialog",attrs:{dialog:e.add_dialog,title:"Add Permission"},on:{"update:dialog":function(t){e.add_dialog=t},save:function(t){return e.add_item("add_new_permission",t)}}}),i("permissions-dialog",{ref:"edit_dialog",attrs:{dialog:e.edit_dialog,title:"Edit Permission","is-edit-dialog":e.edit_dialog,"fields-to-edit":e.edit_item},on:{"update:dialog":function(t){e.edit_dialog=t},save:function(t){return e.update_item("update_permission",t)}}}),i("delete-dialog",{attrs:{"open-dialog":e.delete_dialog,title:"Delete Permission","text-content":"Are you sure you want to delete this permission?"},on:{"update:openDialog":function(t){e.delete_dialog=t},"update:open-dialog":function(t){e.delete_dialog=t},delete:function(t){return e.delete_item("delete_permission")}}}),i("VueTable",{key:e.componentKey,attrs:{items:e.items,headers:e.headers,showRowActions:!0,icon:"widgets",title:"Permissions",noMoreData:e.noMoreData,showSelect:!1,loading:e.loading,hasFooter:!1},scopedSlots:e._u([{key:"header-toolbar",fn:function(){return[i("v-select",{staticClass:"col-md-3 permissions-selection",attrs:{solo:"",flat:"",outlined:"",dense:"","hide-details":"",label:"Select Group",items:e.groups},model:{value:e.selected_group,callback:function(t){e.selected_group=t},expression:"selected_group"}})]},proxy:!0},{key:"row-slot",fn:function(t){var n=t.item;return[i("td",[e._v(e._s(e._f("removeSlug")(n.name)))]),i("td",[e._v(e._s(n.description))]),i("td",[e._v(e._s(e.capability_column(n.slug)))]),i("Actions",{attrs:{item:n,hasDelete:!1,hasView:!1,permissions:e.$_permissions.get("permissions")},on:{edit:function(t){return e.open_edit_dialog(n)}}})]}}])})],1)},s=[],o=(i("8e6e"),i("ac6a"),i("456d"),i("28a5"),i("6b54"),i("7f7f"),i("ade3")),a=(i("386d"),i("a481"),i("c5f6"),i("e06e")),l=i("13ea"),r=i.n(l),c=i("1be9"),u={get_permissions:function(){return c["a"].get("api/permission?all=true")},get_default_permissions:function(){return c["a"].get("api/permission/defaults")},get_role_permissions:function(){return c["a"].get("api/roles/permissions")},get_default_roles:function(){return c["a"].get("api/roles/defaults")},get_company_roles:function(){return c["a"].get("api/roles/company")}},d=i("259d"),p=i("5b70"),f=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-layout",{attrs:{"justify-center":""}},[i("custom-dialog",{ref:"dialog",attrs:{title:e.title,open:e.open,"button2-text":"Save"},on:{"update:open":function(t){e.open=t},button1:function(t){e.open=!1},button2:e.save}},[i("template",{slot:"content"},[i("v-row",{staticClass:"custom-dialog",attrs:{"no-gutters":""}},[e.fieldsToEdit?e._e():i("v-col",{attrs:{xs:"12",sm:"6"}},[i("v-select",{staticClass:"dialog__selectfield",attrs:{placeholder:"Select Group",items:e.group_items,solo:"","hide-details":"",color:"#657186","item-text":"name","item-value":"slug"},model:{value:e.selected_group,callback:function(t){e.selected_group="string"===typeof t?t.trim():t},expression:"selected_group"}})],1),e.fieldsToEdit?e._e():i("v-col",{attrs:{xs:"12",sm:"6"}},[i("v-autocomplete",{staticClass:"dialog__selectfield",attrs:{items:e.permissions,loading:e.loading_permissions,placeholder:"Select Permission","item-text":"name","item-value":"id",solo:"","hide-details":"",color:"#657186"},model:{value:e.selected_permission,callback:function(t){e.selected_permission="string"===typeof t?t.trim():t},expression:"selected_permission"}})],1),e.fieldsToEdit?i("v-col",{attrs:{xs:"12",sm:"12"}},[i("label",[e._v("Edit permission for "),i("strong",[e._v(e._s(e.permission_name))])])]):e._e(),i("div",{staticClass:"permissions"},[i("div",{staticClass:"title"},[i("div",{staticClass:"left-line line"}),i("h4",[e._v("Permissions")]),i("div",{staticClass:"right-line line"})]),i("v-row",{staticClass:"items",attrs:{"no-gutters":""}},[i("v-col",[i("v-switch",{staticClass:"mx-auto",attrs:{label:"View"},model:{value:e.slug.view,callback:function(t){e.$set(e.slug,"view",t)},expression:"slug.view"}})],1),i("v-col",[i("v-switch",{staticClass:"mx-auto",attrs:{label:"Create"},model:{value:e.slug.create,callback:function(t){e.$set(e.slug,"create",t)},expression:"slug.create"}})],1),i("v-col",[i("v-switch",{staticClass:"mx-auto",attrs:{label:"Update"},model:{value:e.slug.update,callback:function(t){e.$set(e.slug,"update",t)},expression:"slug.update"}})],1),i("v-col",[i("v-switch",{staticClass:"mx-auto",attrs:{label:"Delete"},model:{value:e.slug.delete,callback:function(t){e.$set(e.slug,"delete",t)},expression:"slug.delete"}})],1)],1)],1),i("v-col",{attrs:{xs:"12"}},[i("v-textarea",{staticClass:"dialog__textarea",attrs:{flat:"",label:"Description",solo:"","hide-details":"",color:"#657186"},model:{value:e.description,callback:function(t){e.description="string"===typeof t?t.trim():t},expression:"description"}})],1)],1)],1)],2)],1)},g=[],_=i("0644"),m=i.n(_),h=i("57e5"),v=i("d4e9"),b={name:"PermissionDialog",components:{CustomDialog:h["a"]},props:{dialog:Boolean,title:String,isEditDialog:Boolean,fieldsToEdit:{type:Object,default:function(){}}},data:function(){return{open:!1,description:null,permission_name:null,selected_permission:null,selected_group:null,permissions:[],group_items:[],loading_permissions:!1,slug:{create:!1,view:!1,update:!1,delete:!1}}},watch:{dialog:{handler:function(e){this.open=e,e&&this.fill_group_items()},immediate:!0},open:function(e){this.$emit("update:dialog",e)},fieldsToEdit:{handler:function(e){this.isEditDialog&&this.update_fields(e)},deep:!0},"slug.create":function(e){e?this.slug.view=!0:this.slug.update=!1},"slug.update":function(e){e?this.slug.create=!0:this.slug.delete=!1},"slug.delete":function(e){e&&(this.slug.update=!0)},"slug.view":function(e){e||(this.slug={create:!1,view:!1,update:!1,delete:!1})}},created:function(){var e=this;this.loading_permissions=!0,u.get_default_permissions().then((function(t){var i=t.data;return e.permissions=i})).finally((function(){return e.loading_permissions=!1}))},methods:{fill_group_items:function(){var e=this;this.loading=!1,v["a"].get_all_groups().then((function(t){var i=t.data;return e.group_items=i})).finally((function(){return e.loading=!1}))},cancel:function(){this.open=!1},save:function(){var e={permission_id:this.selected_permission,group:this.selected_group,description:this.description,slug:this.slug};this.$emit("save",e)},update_fields:function(e){var t=e.fields,i=m()(t);this.selected_group=i.selected_group,this.description=i.description,this.slug=i.slug,this.permission_name=i.name},clear_and_close:function(){Object.assign(this.$data,this.$options.data.apply(this)),this.cancel()}}},y=b,w=(i("eb39"),i("2877")),x=Object(w["a"])(y,f,g,!1,null,"390413fc",null),k=x.exports,C=i("0ebe"),D=i("ee09");function $(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function O(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?$(Object(i),!0).forEach((function(t){Object(o["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):$(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var S={name:"PermissionsTable",mixins:[a["a"]],components:{VueTable:C["a"],Breadcrumb:d["a"],PermissionsDialog:k,DeleteDialog:p["a"],Actions:D["a"]},data:function(){return{headers:[{text:"Name",value:"name",sortable:!0,align:"left"},{text:"Description",value:"description",sortable:!0,align:"left"},{text:"Capability",value:"capability",sortable:!1,align:"left"},{text:"Action",sortable:!1,value:"action",width:"120px",align:"center"}],table_config:{route_name:"settings",add_message:"New Permission added successfully!",update_message:"Permission updated successfully!",delete_message:"Permission deleted successfully!",refresh_table_message:"Table refreshed",refresh_table_api_name:"paginate_permissions_table"},groups:[],selected_group:null,paths:[{text:"Settings",disabled:!1,router_name:"settings"},{text:"Permission",disabled:!0,router_name:null}]}},watch:{api_query:function(e,t){var i=Number(this.extract_per_page(e)),n=Number(this.extract_per_page(t))||null;this.items_response&&this.rows_per_page===this.items.length&&i!==n||(this.$router.replace({name:this.table_config.route_name,query:{tab:"permissions",page:this.page,per_page:this.rows_per_page,search:this.search,sort:this.query_for_sorting,role:this.selected_group}}),this.loading=!0,this.refresh_table(e))},selected_group:function(e){this.fill_table("get_role_permissions",!0,e)}},mounted:function(){this.$event.$emit("path-change",this.paths),this.fill_groups();var e=O({},this.$route.query);r()(e)||this.update_table_actions(e)},methods:{toggleAll:function(){this.selected.length?this.selected=[]:this.selected=this.items.slice()},capability_column:function(e){switch(!0){case e.view&&!e.create&&!e.update&&!e.delete:return 1;case e.view&&e.create&&!e.update&&!e.delete:return 2;case e.view&&e.create&&e.update&&!e.delete:return 3;case e.view&&e.create&&e.update&&e.delete:return 4;default:return 0}},fill_groups:function(){var e=this;u.get_company_roles().then((function(t){var i=t.data;e.groups=i.map((function(e){return{value:e.id,text:e.name}}))})).finally((function(){e.selected_group=e.groups[0].value}))}},filters:{removeSlug:function(e){return e?(e=e.toString(),e.split(".")[0]):""}}},j=S,P=(i("be33"),Object(w["a"])(j,n,s,!1,null,"c7c6eb38",null));t["default"]=P.exports},eb39:function(e,t,i){"use strict";var n=i("2fac"),s=i.n(n);s.a},ee09:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("td",{staticClass:"table-actions",attrs:{align:"center"}},[e.hasEdit?i("v-tooltip",{directives:[{name:"show",rawName:"v-show",value:e.can_edit,expression:"can_edit"}],attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[i("v-btn",e._g({attrs:{dense:"",icon:""},on:{click:function(t){return e.handle_action("edit")}}},n),[i("v-icon",[e._v(e._s(e.editIcon))])],1)]}}],null,!1,4170341451)},[i("span",[e._v("Edit")])]):e._e(),e.hasDelete?i("v-tooltip",{directives:[{name:"show",rawName:"v-show",value:e.can_delete,expression:"can_delete"}],attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[i("v-btn",e._g({attrs:{dense:"",icon:""},on:{click:function(t){return e.handle_action("delete")}}},n),[i("v-icon",[e._v(e._s(e.deleteIcon))])],1)]}}],null,!1,4164065227)},[i("span",[e._v("Delete")])]):e._e(),e.hasView?i("v-tooltip",{directives:[{name:"show",rawName:"v-show",value:e.can_view,expression:"can_view"}],attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[i("v-btn",e._g({attrs:{dense:"",icon:""},on:{click:function(t){return e.handle_action("view")}}},n),[i("v-icon",[e._v(e._s(e.viewIcon))])],1)]}}],null,!1,701816587)},[i("span",[e._v("View")])]):e._e(),e._t("extra")],2)},s=[],o={props:{item:{type:Object,default:null},permissions:{type:Object,default:function(){return{delete:!0,update:!0,create:!0,view:!0}}},editIcon:{type:String,default:"mdi-circle-edit-outline"},viewIcon:{type:String,default:"mdi-eye-circle-outline"},deleteIcon:{type:String,default:"mdi-delete-circle-outline"},hasDelete:{type:Boolean,default:!0},hasEdit:{type:Boolean,default:!0},hasView:{type:Boolean,default:!0}},computed:{logged_user:function(){return this.$store.getters.user}},methods:{handle_action:function(e){this.item&&this.$emit(e,this.item)},can_delete:function(){return!!this.logged_user.is_admin||this.permissions&&this.permissions.delete},can_edit:function(){return!!this.logged_user.is_admin||this.permissions&&this.permissions.update},can_view:function(){return!!this.logged_user.is_admin||this.permissions&&this.permissions.view}}},a=o,l=(i("7e7e"),i("2877")),r=Object(l["a"])(a,n,s,!1,null,null,null);t["a"]=r.exports},f436:function(e,t,i){"use strict";var n=i("b709"),s=i.n(n);s.a},fe54:function(e,t,i){"use strict";var n=i("2ab4"),s=i.n(n);s.a}}]);
//# sourceMappingURL=chunk-542f6663.c894d94a.js.map