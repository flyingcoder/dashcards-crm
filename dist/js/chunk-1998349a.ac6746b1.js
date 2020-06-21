(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1998349a"],{"01cd":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"groups"},[i("groups-dialog",{ref:"add_dialog",attrs:{dialog:t.add_dialog,title:"Add Group"},on:{"update:dialog":function(e){t.add_dialog=e},save:function(e){return t.add_item("add_new_group",e)}}}),i("groups-dialog",{ref:"edit_dialog",attrs:{dialog:t.edit_dialog,title:"Edit Group","is-edit-dialog":t.edit_dialog,"fields-to-edit":t.edit_item},on:{"update:dialog":function(e){t.edit_dialog=e},save:function(e){return t.update_item("update_group",e)}}}),i("delete-dialog",{attrs:{"open-dialog":t.delete_dialog,title:"Delete Group","text-content":"Are you sure you want to delete this group?"},on:{"update:openDialog":function(e){t.delete_dialog=e},"update:open-dialog":function(e){t.delete_dialog=e},delete:function(e){return t.delete_item("delete_group")}}}),i("PermissionsDialog",{ref:"permissionDialog",attrs:{dialog:t.permissionDialog,title:"Permission Table Dialog","fields-to-edit":t.edit_item},on:{"update:dialog":function(e){t.permissionDialog=e},save:function(e){return t.update_permissions(e)}}}),i("v-layout",[i("v-flex",{attrs:{xs12:""}},[i("v-card",[i("VueTable",{key:t.componentKey,attrs:{items:t.indexes_items,headers:t.headers,showRowActions:!0,title:"User Groups",noMoreData:t.noMoreData,showSelect:!1,hasFooter:!1,loading:t.loading},scopedSlots:t._u([{key:"row-slot",fn:function(e){var n=e.item;return[i("td",[t._v(t._s(n.index))]),i("td",{staticClass:"text-cap"},[t._v(t._s(n.name))]),i("td",[t._v(t._s(n.description))]),i("Actions",{attrs:{item:n,hasView:!1,hasEdit:n.company_id>0,hasDelete:n.company_id>0,editIcon:"vpn_key",permissions:t.$_permissions.get("settings_group")},on:{delete:function(e){return t.open_delete_dialog(n)},edit:function(e){return t.open_permission_dialog(n)}}})]}}])},[i("template",{slot:"header-toolbar"},[i("table-header",{on:{click:function(e){t.add_dialog=!0}}})],1)],2)],1)],1)],1)],1)},s=[],o=(i("8e6e"),i("ac6a"),i("456d"),i("ade3")),a=(i("386d"),i("a481"),i("c5f6"),i("e06e")),r=i("0644"),l=i.n(r),c=i("13ea"),u=i.n(c),d=i("1be9"),p=(i("451f"),i("29d6")),f=i("5b70"),_=i("b7d7"),h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("CustomDialog",{ref:"dialog",attrs:{title:t.title,open:t.open,"button2-text":"Save"},on:{"update:open":function(e){t.open=e},button1:t.cancel,button2:t.save},scopedSlots:t._u([{key:"content",fn:function(){return[i("table",{staticClass:"bz-table"},[i("tr",{staticClass:"table-header"},[i("th",{staticClass:"text-xs-left"},[t._v("Title")]),i("th",[t._v("View Create Update Delete")])]),t._l(t.permissions,(function(e,n){return i("tr",{key:e.id,staticClass:"table-data"},[i("td",[t._v(t._s(t._f("removeSlug")(t.snakeCaseToNormal(e.name))))]),i("td",{staticClass:"switches"},[i("v-switch",{on:{change:function(e){return t.viewSlug(n,e)}},model:{value:e.slug.view,callback:function(i){t.$set(e.slug,"view",i)},expression:"permission.slug.view"}}),i("v-switch",{on:{change:function(e){return t.createSlug(n,e)}},model:{value:e.slug.create,callback:function(i){t.$set(e.slug,"create",i)},expression:"permission.slug.create"}}),i("v-switch",{on:{change:function(e){return t.updateSlug(n,e)}},model:{value:e.slug.update,callback:function(i){t.$set(e.slug,"update",i)},expression:"permission.slug.update"}}),i("v-switch",{on:{change:function(e){return t.deleteSlug(n,e)}},model:{value:e.slug.delete,callback:function(i){t.$set(e.slug,"delete",i)},expression:"permission.slug.delete"}})],1)])}))],2)]},proxy:!0}])})},m=[],g=(i("28a5"),i("2ef0")),v=i("57e5"),b={components:{CustomDialog:v["a"]},props:{dialog:Boolean,title:String,isEditDialog:Boolean,fieldsToEdit:{type:Object,default:function(){}}},data:function(){return{open:!1,permissions:[],originalPermissions:[]}},watch:{dialog:function(t){this.open=t},open:function(t){this.$emit("update:dialog",t)},"fieldsToEdit.id":function(t,e){var i=this;d["a"].get("api/roles/"+t+"/permissions").then((function(t){var e=t.data;i.permissions=e.data,i.originalPermissions=Object(g["cloneDeep"])(e.data)}))}},filters:{removeSlug:function(t){return t.split(".")[0]}},computed:{does_something_changed:function(){return!(JSON.stringify(this.permissions)===JSON.stringify(this.originalPermissions))}},methods:{cancel:function(){this.open=!1},save:function(){if(this.validation_passed()){var t={role_id:this.fieldsToEdit.id,permissions:this.get_updated_permissions()};this.$emit("save",t),this.cancel()}},validation_passed:function(){return!!this.does_something_changed||(this.$event.$emit("open_snackbar","Nothing Changed!","notification"),!1)},clearAndClose:function(){Object.assign(this.$data,this.$options.data.apply(this)),this.cancel()},snakeCaseToNormal:function(t){return t.split("_").join(" ")},viewSlug:function(t,e){e||this.$set(this.permissions[t],"slug",{view:!1,create:!1,update:!1,delete:!1})},createSlug:function(t,e){e?this.$set(this.permissions[t].slug,"view",!0):(this.$set(this.permissions[t].slug,"update",!1),this.$set(this.permissions[t].slug,"delete",!1))},updateSlug:function(t,e){e?(this.$set(this.permissions[t].slug,"create",!0),this.$set(this.permissions[t].slug,"view",!0)):this.$set(this.permissions[t].slug,"delete",!1)},deleteSlug:function(t,e){var i=Object(g["cloneDeep"])(this.permissions);e&&(i[t].slug={view:!0,create:!0,update:!0,delete:!0},this.permissions=i)},get_updated_permissions:function(){for(var t=Object(g["cloneDeep"])(this.permissions),e=Object(g["cloneDeep"])(this.originalPermissions),i=[],n=0;n<t.length;n++)t[n].slug.view===e[n].slug.view&&t[n].slug.create===e[n].slug.create&&t[n].slug.update===e[n].slug.update&&t[n].slug.delete===e[n].slug.delete||i.push(t[n]);return i}}},w=b,y=(i("d5d2"),i("2877")),x=Object(y["a"])(w,h,m,!1,null,"5679b87b",null),k=x.exports,$=i("0ebe"),C=i("ee09");function D(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function S(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?D(Object(i),!0).forEach((function(e){Object(o["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):D(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var O={name:"Groups",mixins:[a["a"]],components:{VueTable:$["a"],Actions:C["a"],GroupsDialog:_["a"],PermissionsDialog:k,TableHeader:p["a"],DeleteDialog:f["a"]},data:function(){return{group_id:null,paths:[{text:"Settings",disabled:!1,router_name:null},{text:"Groups",disabled:!0,router_name:null}],headers:[{text:"Index",value:"index",width:"10%"},{text:"Group Name",value:"group_name",width:"20%"},{text:"Description",value:"description",width:"40%"},{text:"Action",width:"30%",sortable:!1,align:"center"}],actions:[{value:"edit_settings",tooltip:"Edit Settings",icon:i("206b")},{value:"delete_group",tooltip:"Delete Group",icon:i("a5da")},{value:"",tooltip:"Key",icon:i("a5da")}],table_config:{route_name:"settings",add_message:"New Group added successfully!",update_message:"Group updated successfully!",delete_message:"Group deleted successfully!",refresh_table_message:"Table refreshed",refresh_table_api_name:"paginate_groups_table"}}},computed:{indexes_items:function(){var t=l()(this.items);return t.map((function(t,e){return t.index=e+1,t}))},user:function(){return this.$store.getters.user},permission:function(){return this.$_permissions.get("settings_group")},can_view:function(){return!!this.user.is_admin||this.permission&&this.permission.view},can_edit:function(){return!!this.user.is_admin||this.permission&&this.permission.update},can_delete:function(){return!!this.user.is_admin||this.permission&&this.permission.delete}},watch:{api_query:function(t,e){var i=Number(this.extract_per_page(t)),n=Number(this.extract_per_page(e))||null;this.items_response&&this.rows_per_page===this.items.length&&i!==n||(this.$router.replace({name:this.table_config.route_name,query:{tab:"groups",page:this.page,per_page:this.rows_per_page,search:this.search,sort:this.query_for_sorting}}),this.loading=!0,this.refresh_table(t))}},mounted:function(){this.$event.$emit("path-change",this.paths);var t=S({},this.$route.query);u()(t)?this.fill_table("get_groups",!0):this.update_table_actions(t)},methods:{open_permission_dialog:function(t){this.permissionDialog=!0,this.$set(this.edit_item,"id",t.id),this.$set(this.edit_item,"fields",t)},update_permissions:function(t){var e=this;d["a"].put("api/roles/"+t.role_id+"/permissions",t).then((function(t){e.$emit("open_snackbar",t.message,t.type),e.$event.$emit("btnloading_off",!1)}))}}},B=O,j=(i("99d4"),Object(y["a"])(B,n,s,!1,null,"514bac50",null));e["default"]=j.exports},"0745":function(t,e,i){},"0edc5":function(t,e,i){},1326:function(t,e,i){"use strict";var n=i("0745"),s=i.n(n);s.a},"13ea":function(t,e,i){var n=i("03dd"),s=i("42a2"),o=i("d370"),a=i("6747"),r=i("30c9"),l=i("0d24"),c=i("eac5"),u=i("73ac"),d="[object Map]",p="[object Set]",f=Object.prototype,_=f.hasOwnProperty;function h(t){if(null==t)return!0;if(r(t)&&(a(t)||"string"==typeof t||"function"==typeof t.splice||l(t)||u(t)||o(t)))return!t.length;var e=s(t);if(e==d||e==p)return!t.size;if(c(t))return!n(t).length;for(var i in t)if(_.call(t,i))return!1;return!0}t.exports=h},"174f":function(t,e,i){},"206b":function(t,e,i){t.exports=i.p+"img/edit.26f5333c.svg"},"259d":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"breadcrumb-wrapper"},[i("v-breadcrumbs",{attrs:{items:t.paths},scopedSlots:t._u([{key:"item",fn:function(e){var n=e.item;return[i("v-breadcrumbs-item",{staticClass:"page__title",attrs:{disabled:n.disabled}},[i("span",{on:{click:function(e){return t.navigate_from_breadcrumb(n)}}},[t._v(" "+t._s(n.text)+" ")])])]}}])},[i("v-icon",{attrs:{slot:"divider"},slot:"divider"},[t._v("chevron_right")])],1),t._t("extra")],2)},s=[],o={name:"Breadcrumb",props:{paths:{type:Array,default:function(){return[]}}},methods:{navigate_from_breadcrumb:function(t){if(t.hasOwnProperty("path"))t.path&&this.$router.push({path:t.path});else{var e=t.router_name;e&&this.$router.push({name:e})}}}},a=o,r=(i("5e17"),i("79a2"),i("2877")),l=Object(r["a"])(a,n,s,!1,null,"3cda09ee",null);e["a"]=l.exports},"29d6":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"table-header"},[t.noButton?t._e():i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,s=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"add__btn mr-2",attrs:{fab:"",small:"",dark:"",color:"#3b589e"},on:{click:function(e){return t.$emit("click")}}},"v-btn",s,!1),n),[i("v-icon",[t._v("mdi-plus")])],1)]}}],null,!1,1553216287)},[i("span",[t._v("Create new")])]),t.noSortButton?t._e():i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,s=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"add__btn mr-2",attrs:{fab:"",small:"",dark:"",color:"#3b589e"},on:{click:function(e){return t.$emit("click-sort-by")}}},"v-btn",s,!1),n),[i("v-icon",[t._v("sort")])],1)]}}],null,!1,2775766067)},[i("span",[t._v("Sort")])]),t.noListButton?t._e():i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,s=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"add__btn mr-2",attrs:{fab:"",small:"",dark:"",color:"#3b589e"},on:{click:function(e){return t.$emit("click-list-view")}}},"v-btn",s,!1),n),[i("v-icon",[t._v("mdi-view-sequential")])],1)]}}],null,!1,999989283)},[i("span",[t._v("List view")])]),t.noGridButton?t._e():i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,s=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"add__btn mr-2",attrs:{fab:"",small:"",dark:"",color:"#3b589e"},on:{click:function(e){return t.$emit("click-grid-view")}}},"v-btn",s,!1),n),[i("v-icon",[t._v("mdi-view-module")])],1)]}}],null,!1,2880532042)},[i("span",[t._v("Grid view")])]),t._t("form-btn")],2)},s=[],o=i("259d"),a={name:"TableHeader",props:{noButton:{type:Boolean,default:!1},noListButton:{type:Boolean,default:!0},noGridButton:{type:Boolean,default:!0},noSortButton:{type:Boolean,default:!0}},data:function(){return{fab:!0}},components:{Breadcrumb:o["a"]}},r=a,l=(i("7b61"),i("2877")),c=Object(l["a"])(r,n,s,!1,null,"7915ddae",null);e["a"]=c.exports},"3e12":function(t,e,i){},"451f":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__wrapper"},[n("div",{staticClass:"row buzz__tables"},[n("div",{staticClass:"buzz__tablesTwo"},[t._t("toolbar",[n("div",{staticClass:"table__toolbar"},[t._v(" "+t._s(t.toolbarTitle)+" ")])]),t._t("right_toolbar"),n("v-data-table",t._b({staticClass:"buzzooka__table",attrs:{headers:t.headers,items:t.items,loading:t.loading,"no-data-text":"","show-select":"","disable-sort":"","hide-default-footer":""},scopedSlots:t._u([{key:"headers",fn:function(e){return[n("tr",{staticClass:"table__head"},[t.$props.hasCheckbox&&!t.noRowDelete&&t.can_delete?n("th",[n("v-checkbox",{attrs:{"input-value":e.all,indeterminate:e.indeterminate,primary:"","hide-details":""},on:{click:function(e){return e.target!==e.currentTarget?null:t.toggleAll(e)}}})],1):t._e(),t._l(e.headers,(function(e){return n("th",{key:e.id,class:t.headerClasses(e),attrs:{width:e.width},on:{click:function(i){e.sortable&&t.changeSort(e.value)}}},["Icon"===e.text?[n("v-btn",{attrs:{fab:"",small:"",depressed:"",disabled:t.tableActionDisabled}},[n("img",{attrs:{src:i("a5da"),alt:""}})])]:e.is_action?[n("img",{attrs:{src:i("a130")}})]:[t._v(" "+t._s(e.text)+" "),e.sortable?n("v-icon",{attrs:{small:""}},[t._v("arrow_upward")]):t._e()]],2)})),t.hasHeaderIcon?n("th",[n("img",{attrs:{src:i("a130")}})]):t._e()],2)]}},{key:"item",fn:function(e){var i=e.item;return[t._t("custom-item",null,{item:i})]}},{key:"items",fn:function(e){return[n("tr",{staticClass:"table__body-row",attrs:{active:e.selected}},[t.$props.hasCheckbox&&!t.noRowDelete&&t.can_delete?n("td",{on:{click:function(t){e.selected=!e.selected}}},[n("v-checkbox",{attrs:{"input-value":e.selected,primary:"","hide-details":""}})],1):t._e(),t.showRowActions?t._t("row-actions",[n("td",{staticClass:"text-xs-center table__actions"},[!t.noRowEdit&&t.can_edit?t._t("row-edit",[n("v-btn",{attrs:{fab:"",small:"",flat:"",depressed:""},on:{click:function(i){return t.$emit("edit",e.item)}}},[n("img",{attrs:{src:i("206b"),alt:""}})])],{item:e.item}):t._e(),!t.noRowDelete&&t.can_delete?t._t("row-delete",[n("v-btn",{attrs:{fab:"",small:"",flat:"",depressed:""},on:{click:function(i){return t.$emit("delete",e.item)}}},[n("img",{attrs:{src:i("a5da"),alt:""}})])],{item:e.item}):t._e(),!t.noRowView&&t.can_view?t._t("row-view",[n("v-btn",{attrs:{fab:"",flat:"",small:"",depressed:""},on:{click:function(i){return t.$emit("view",e.item)}}},[n("v-icon",[t._v("pageview")])],1)],{item:e.item}):t._e()],2)],{item:e.item}):t._e()],2)]}}],null,!0),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},"v-data-table",t.$attrs,!1),[n("v-progress-linear",{attrs:{slot:"progress",color:"blue",indeterminate:""},slot:"progress"}),n("template",{slot:"no-data"},[n("Empty")],1),n("template",{slot:"footer"},[n("td",{staticStyle:{padding:"0"},attrs:{colspan:"100%"}},[t._t("table-actions")],2)])],2)],2)])])},s=[],o=(i("55dd"),i("4752")),a={name:"CustomTable",inheritAttrs:!1,components:{Empty:o["a"]},props:{headers:Array,items:Array,loading:Boolean,hasCheckbox:Boolean,hasHeaderIcon:Boolean,sort:Object,toolbarTitle:String,noRowEdit:Boolean,noRowDelete:Boolean,noRowView:Boolean,showRowActions:{type:Boolean,default:!0},permission:Object},data:function(){return{selected:[]}},computed:{user:function(){return this.$store.getters.user},can_view:function(){return!!this.user.is_admin||this.permission&&this.permission.view},can_edit:function(){return!!this.user.is_admin||this.permission&&this.permission.update},can_delete:function(){return!!this.user.is_admin||this.permission&&this.permission.delete}},watch:{selected:function(t){var e=t.map((function(t){return t.id}));this.$emit("items-selected",e)}},methods:{toggleAll:function(){this.selected.length?this.selected=[]:this.selected=this.items.slice()},changeSort:function(t){this.$emit("sorted",t)},headerClasses:function(t){var e=["column"];return"sortable"in t&&(e.push("sortable"),this.sort.descending?e.push("desc"):e.push("asc"),t.value===this.sort.sortBy&&e.push("active")),e}}},r=a,l=(i("5378"),i("6af0"),i("2877")),c=Object(l["a"])(r,n,s,!1,null,"6013032a",null);e["a"]=c.exports},5378:function(t,e,i){"use strict";var n=i("9f7b"),s=i.n(n);s.a},"57e5":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-layout",{attrs:{"justify-center":""}},[i("v-dialog",{attrs:{persistent:"","max-width":t.maxWidth,scrollable:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.loading?i("v-progress-linear",{attrs:{slot:"progress",color:"blue",indeterminate:""},slot:"progress"}):i("v-card",{staticClass:"custom__dialog"},[i("div",{staticClass:"dialog__header"},[t._t("entire-header",[t._t("title",[i("h3",{staticClass:"dialog__title"},[t._v(t._s(t.title))])]),t._t("extra-buttons"),t._t("cancel-icon",[i("v-btn",{staticClass:"close__dialog",attrs:{fab:"",small:"",depressed:""},on:{click:t.close_dialog}},[i("v-icon",[t._v("close")])],1)])]),t._t("below-title")],2),i("v-card-text",{staticClass:"dialog__body"},[t._t("content",[i("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t.hasFooter?i("v-card-actions",{staticClass:"dialog__actions"},[t._t("entire-actions",[t._t("extras"),t._t("button1",[i("v-btn",{attrs:{disabled:t.btnloading},on:{click:t.button1clicked}},[t._v(t._s(t.button1Text))])]),t._t("button2",[i("v-btn",{attrs:{loading:t.btnloading,disabled:t.mainBtnDisabled},on:{click:t.button2clicked}},[t._v(t._s(t.button2Text))])])])],2):t._e()],1)],1)],1)},s=[],o=(i("c5f6"),{props:{title:{type:String,default:""},content:{type:String,default:""},button1Text:{type:String,default:"Cancel"},button2Text:{type:String,default:"Delete"},open:Boolean,value:Boolean,mainBtnDisabled:{type:Boolean,default:!1},hasFooter:{type:Boolean,default:!0},maxWidth:{type:[Number,String],default:"600px"}},data:function(){return{dialog:!1,loading:!1,btnloading:!1}},mounted:function(){var t=this;this.$event.$on("btnloading_off",(function(e){t.btnloading=!1}))},watch:{value:{handler:function(t){this.dialog=t},immediate:!0},open:function(t){this.dialog=t,this.btnloading=!1},dialog:function(t){this.$emit("update:open",t),this.$emit("input",t)}},methods:{button1clicked:function(){this.$emit("button1"),this.close_dialog()},button2clicked:function(){this.btnloading=!0,this.$emit("button2")},open_dialog:function(){this.dialog=!0},close_dialog:function(){this.dialog=!1,this.btnloading=!1,this.$emit("click:close",!0)},clear_and_close:function(){Object.assign(this.$data,this.$options.data.apply(this)),this.close_dialog()},activate_loading:function(){this.loading=!0},disable_loading:function(){this.loading=!1}}}),a=o,r=(i("f436"),i("5882"),i("2877")),l=Object(r["a"])(a,n,s,!1,null,"17401548",null);e["a"]=l.exports},5882:function(t,e,i){"use strict";var n=i("5c1e"),s=i.n(n);s.a},"5b70":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("custom-dialog",{attrs:{title:t.title,content:t.textContent,"button1-text":t.cancelButtonText,"button2-text":t.deleteButtonText,open:t.open},on:{"update:open":function(e){t.open=e},button1:t.cancel_clicked,button2:t.delete_clicked},scopedSlots:t._u([{key:"content",fn:function(){return[i("v-alert",{staticClass:"my-4",attrs:{outlined:"",type:"warning",prominent:""}},[i("v-row",{attrs:{align:"center"}},[i("v-col",{staticClass:"grow",domProps:{innerHTML:t._s(t.textContent)}})],1)],1)]},proxy:!0}])})],1)},s=[],o=i("57e5"),a={components:{CustomDialog:o["a"]},props:{title:{type:String,default:"Default Modal Title"},textContent:{type:String,default:"Default Modal Text Content"},cancelButtonText:{type:String,default:"Cancel"},deleteButtonText:{type:String,default:"Yes, Delete"},openDialog:Boolean},data:function(){return{open:!1}},watch:{openDialog:function(t){this.open=t},open:function(t){this.$emit("update:openDialog",t)}},methods:{cancel_clicked:function(){this.open=!1},delete_clicked:function(){this.$emit("delete")},showDialog:function(){this.open=!0},closeDialog:function(){this.open=!1}}},r=a,l=i("2877"),c=Object(l["a"])(r,n,s,!1,null,null,null);e["a"]=c.exports},"5c1e":function(t,e,i){},"5e17":function(t,e,i){"use strict";var n=i("8c6e"),s=i.n(n);s.a},"64fe":function(t,e,i){},"6af0":function(t,e,i){"use strict";var n=i("7307"),s=i.n(n);s.a},7307:function(t,e,i){},"79a2":function(t,e,i){"use strict";var n=i("0edc5"),s=i.n(n);s.a},"7b61":function(t,e,i){"use strict";var n=i("3e12"),s=i.n(n);s.a},"7e7e":function(t,e,i){"use strict";var n=i("174f"),s=i.n(n);s.a},"8a21":function(t,e,i){},"8c6e":function(t,e,i){},"99d4":function(t,e,i){"use strict";var n=i("8a21"),s=i.n(n);s.a},"9f7b":function(t,e,i){},a130:function(t,e,i){t.exports=i.p+"img/menu.02d0eeb5.svg"},a5da:function(t,e,i){t.exports=i.p+"img/delete.ba632ac8.svg"},b709:function(t,e,i){},b7d7:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("custom-dialog",{ref:"dialog",attrs:{title:t.title,open:t.open,"button2-text":"Save"},on:{"update:open":function(e){t.open=e},button1:t.cancel,button2:t.save},scopedSlots:t._u([{key:"content",fn:function(){return[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{box:"",solo:"","hide-details":"",color:"#657186",label:"Name"},model:{value:t.name,callback:function(e){t.name="string"===typeof e?e.trim():e},expression:"name"}})],1),i("v-flex",{attrs:{xs12:""}},[i("v-select",{staticClass:"dialog__selectfield d-field",attrs:{box:"",solo:"","hide-details":"",color:"#657186",label:"Copy Permission",items:t.group_items,"item-text":"name","item-value":"id"},model:{value:t.selected_group,callback:function(e){t.selected_group="string"===typeof e?e.trim():e},expression:"selected_group"}})],1),i("v-flex",{attrs:{xs12:""}},[i("v-textarea",{staticClass:"dialog__textarea d-field",attrs:{box:"",solo:"","hide-details":"",color:"#657186",label:"Description"},model:{value:t.description,callback:function(e){t.description="string"===typeof e?e.trim():e},expression:"description"}})],1)],1)]},proxy:!0}])})},s=[],o=(i("7f7f"),i("0644")),a=i.n(o),r=i("1be9"),l=i("57e5"),c={name:"GroupsDialog",components:{CustomDialog:l["a"]},props:{dialog:Boolean,title:String,isEditDialog:{type:Boolean,default:!1},fieldsToEdit:{type:Object,default:function(){}}},data:function(){return{open:!1,name:"",description:"",selected_group:null,group_items:[]}},computed:{are_fields_valid:function(){return!(!this.name||!this.selected_group)&&this.does_something_changed},does_something_changed:function(){return!this.isEditDialog||(this.name!==this.fieldsToEdit.fields.name||this.description!==this.fieldsToEdit.fields.description||this.selected_group!==this.fieldsToEdit.fields.selected_group)}},watch:{dialog:function(t){t&&this.get_current_group(),this.open=t},open:function(t){this.$emit("update:dialog",t)},fieldsToEdit:{handler:function(t){this.isEditDialog&&this.update_fields(t)},deep:!0}},methods:{cancel:function(){this.open=!1},openDialog:function(){this.get_current_group(),this.open=!0},get_current_group:function(){var t=this;r["a"].get("api/groups?all=true").then((function(e){var i=e.data;return t.group_items=i}))},save:function(){if(this.validation_passed()){var t={name:this.name,description:this.description,selected_group:this.selected_group};this.$emit("save",t)}},validation_passed:function(){return!!(this.name&&this.selected_group&&this.does_something_changed)||(this.$event.$emit("open_snackbar","Fill in required fields!","error"),this.$event.$emit("btnloading_off",!1),!1)},update_fields:function(t){var e=t.fields,i=a()(e);this.name=i.name,this.description=i.description,this.selected_group=i.selected_group},clear_and_close:function(){Object.assign(this.$data,this.$options.data.apply(this)),this.cancel()}}},u=c,d=(i("1326"),i("2877")),p=Object(d["a"])(u,n,s,!1,null,"021b8c67",null);e["a"]=p.exports},d5d2:function(t,e,i){"use strict";var n=i("64fe"),s=i.n(n);s.a},ee09:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("td",{staticClass:"table-actions",attrs:{align:"center"}},[t.hasEdit?i("v-tooltip",{directives:[{name:"show",rawName:"v-show",value:t.can_edit,expression:"can_edit"}],attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-btn",t._g({attrs:{dense:"",dense:"",icon:""},on:{click:function(e){return t.handle_action("edit")}}},n),[i("v-icon",{attrs:{small:""}},[t._v(t._s(t.editIcon))])],1)]}}],null,!1,2293778615)},[i("span",[t._v("Edit")])]):t._e(),t.hasDelete?i("v-tooltip",{directives:[{name:"show",rawName:"v-show",value:t.can_delete,expression:"can_delete"}],attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-btn",t._g({attrs:{dense:"",icon:""},on:{click:function(e){return t.handle_action("delete")}}},n),[i("v-icon",{attrs:{small:""}},[t._v(t._s(t.deleteIcon))])],1)]}}],null,!1,1335204600)},[i("span",[t._v("Delete")])]):t._e(),t.hasView?i("v-tooltip",{directives:[{name:"show",rawName:"v-show",value:t.can_view,expression:"can_view"}],attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-btn",t._g({attrs:{dense:"",icon:""},on:{click:function(e){return t.handle_action("view")}}},n),[i("v-icon",{attrs:{small:""}},[t._v(t._s(t.viewIcon))])],1)]}}],null,!1,3967608504)},[i("span",[t._v("View")])]):t._e(),t._t("extra")],2)},s=[],o={props:{item:{type:Object,default:null},permissions:{type:Object,default:function(){return{delete:!0,update:!0,create:!0,view:!0}}},editIcon:{type:String,default:"mdi-content-save-edit"},viewIcon:{type:String,default:"mdi-file-search"},deleteIcon:{type:String,default:"mdi-delete-alert"},hasDelete:{type:Boolean,default:!0},hasEdit:{type:Boolean,default:!0},hasView:{type:Boolean,default:!0}},computed:{logged_user:function(){return this.$store.getters.user}},methods:{handle_action:function(t){this.item&&this.$emit(t,this.item)},can_delete:function(){return!!this.logged_user.is_admin||this.permissions&&this.permissions.delete},can_edit:function(){return!!this.logged_user.is_admin||this.permissions&&this.permissions.update},can_view:function(){return!!this.logged_user.is_admin||this.permissions&&this.permissions.view}}},a=o,r=(i("7e7e"),i("2877")),l=Object(r["a"])(a,n,s,!1,null,null,null);e["a"]=l.exports},f436:function(t,e,i){"use strict";var n=i("b709"),s=i.n(n);s.a}}]);
//# sourceMappingURL=chunk-1998349a.ac6746b1.js.map