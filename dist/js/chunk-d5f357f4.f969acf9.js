(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d5f357f4"],{"174f":function(t,e,i){},"2013d":function(t,e,i){"use strict";var n=i("9838"),a=i.n(n);a.a},"29d6":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"table-header"},[t.noButton?t._e():i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[i("v-icon",t._g(t._b({staticClass:"add__btn ml-2",attrs:{fab:""},on:{click:function(e){return t.$emit("click")}}},"v-icon",a,!1),n),[t._v(" mdi-plus-circle-outline ")])]}}],null,!1,1461341858)},[i("span",[t._v("Create new")])]),t.noSortButton?t._e():i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[i("v-icon",t._g(t._b({staticClass:"add__btn ml-2",attrs:{fab:""},on:{click:function(e){return t.$emit("click-sort-by")}}},"v-icon",a,!1),n),[t._v("sort")])]}}],null,!1,1131913180)},[i("span",[t._v("Sort")])]),t.noListButton?t._e():i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[i("v-icon",t._g(t._b({staticClass:"add__btn ml-2",attrs:{fab:""},on:{click:function(e){return t.$emit("click-list-view")}}},"v-icon",a,!1),n),[t._v(" mdi-view-sequential ")])]}}],null,!1,3485260972)},[i("span",[t._v("List view")])]),t.noGridButton?t._e():i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[i("v-icon",t._g(t._b({staticClass:"add__btn ml-2",attrs:{fab:""},on:{click:function(e){return t.$emit("click-grid-view")}}},"v-icon",a,!1),n),[t._v(" mdi-view-module ")])]}}],null,!1,1778849189)},[i("span",[t._v("Grid view")])]),t._t("form-btn")],2)},a=[],o={name:"TableHeader",props:{noButton:{type:Boolean,default:!1},noListButton:{type:Boolean,default:!0},noGridButton:{type:Boolean,default:!0},noSortButton:{type:Boolean,default:!0}},data:function(){return{fab:!0}}},s=o,l=(i("41d8"),i("2877")),d=Object(l["a"])(s,n,a,!1,null,"e62af32a",null);e["a"]=d.exports},"31b2":function(t,e,i){},"41d8":function(t,e,i){"use strict";var n=i("bd74"),a=i.n(n);a.a},"492a":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"milestone-task"},[i("task-dialog",{ref:"add_dialog",attrs:{dialog:t.add_dialog,"dialog-title":"Add Task"},on:{"update:dialog":function(e){t.add_dialog=e},save:function(e){return t.add_item("add_new_task",e,t.dynamic_api)}}}),i("task-dialog",{ref:"edit_dialog",attrs:{dialog:t.edit_dialog,"dialog-title":"Edit Task","is-edit-dialog":t.edit_dialog,fieldsToEdit:t.edit_item},on:{"update:dialog":function(e){t.edit_dialog=e},save:function(e){return t.update_item("edit_task",e,t.dynamic_api)}}}),i("delete-dialog",{attrs:{"open-dialog":t.delete_dialog,title:"Delete Task","text-content":"Are you sure you want to delete this task?"},on:{"update:openDialog":function(e){t.delete_dialog=e},"update:open-dialog":function(e){t.delete_dialog=e},delete:function(e){return t.delete_item("delete_task",t.dynamic_api)}}}),i("delete-dialog",{attrs:{"open-dialog":t.bulk_delete_dialog,title:"Delete Milestone Task","text-content":"Are you sure you want to delete these milestone tasks? This can't be undone."},on:{"update:openDialog":function(e){t.bulk_delete_dialog=e},"update:open-dialog":function(e){t.bulk_delete_dialog=e},delete:function(e){return t.bulk_delete_via_url(t.dynamic_bulk_delete_api)}}}),i("v-layout",[i("v-flex",{attrs:{xs12:""}},[i("VueTable",{key:t.componentKey,attrs:{items:t.items,headers:t.headers,showRowActions:!0,loading:t.loading,title:t.table_title,noMoreData:t.noMoreData},on:{"load-more":t.load_more,"delete-selected":function(e){return t.open_bulk_delete_dialog(e)}},scopedSlots:t._u([{key:"row-slot",fn:function(e){var n=e.item;return[i("td",{staticClass:"text-xs-left text-cap"},[t._v(t._s(t._f("ucwords")(n.title)))]),i("td",{staticClass:"text-xs-left textarea-cap desc",domProps:{innerHTML:t._s(t.short_description_text(n.description))}}),i("td",{staticClass:"text-xs-left text-cap"},[t._v(t._s(n.status))]),i("td",{staticClass:"text-xs-left"},[t._v(t._s(0!==n.days&&n.days?n.days:"Not set"))]),i("Actions",{attrs:{item:n,hasView:!1,permissions:t.$_permissions.get("hq_milestone_tasks")},on:{edit:function(e){return t.open_edit_dialog(n)},delete:function(e){return t.open_delete_dialog(n)},view:function(e){return t.navigate_to_milestone_page(n)}}})]}},{key:"empty-slot",fn:function(){return[i("v-btn",{attrs:{dark:"",color:"#3b589e"},on:{click:function(e){t.add_dialog=!0}}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-plus-circle-outline")]),t._v(" Add Task ")],1)]},proxy:!0}])},[i("template",{slot:"header-toolbar"},[i("table-header",{on:{click:function(e){t.add_dialog=!0}}})],1)],2)],1)],1)],1)},a=[],o=(i("7f7f"),i("c5f6"),i("e06e")),s=i("0ebe"),l=i("ee09"),d=i("5b70"),c=i("29d6"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("custom-dialog",{ref:"dialog",attrs:{title:t.dialogTitle,open:t.open,"button2-text":"Save"},on:{"update:open":function(e){t.open=e},button1:t.cancel,button2:t.save}},[i("template",{slot:"content"},[i("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{"hide-details":"auto",dense:"",label:"Task Title *",color:"#667187",filled:"",counter:"",maxlength:"30"},model:{value:t.title,callback:function(e){t.title="string"===typeof e?e.trim():e},expression:"title"}}),i("Editor",{ref:"editor",attrs:{hasFloatingTools:!1,content:t.quill_editor.description,placeholder:"Task Description"},model:{value:t.quill_editor.description,callback:function(e){t.$set(t.quill_editor,"description",e)},expression:"quill_editor.description"}}),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"6"}},[i("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{filled:"",dense:"",label:"Days",type:"number",min:"0",color:"#667187","hide-details":"auto",disabled:t.disabled},model:{value:t.days,callback:function(e){t.days=t._n(e)},expression:"days"}})],1),i("v-col",{attrs:{cols:"6"}},[i("v-checkbox",{staticClass:"mx-2",attrs:{label:"No Specific Days"},model:{value:t.disabled,callback:function(e){t.disabled=e},expression:"disabled"}})],1)],1)],1)],2)},u=[],_=i("1be9"),p=i("57e5"),f=i("5d98"),m={name:"TasksDialog",components:{CustomDialog:p["a"],Editor:f["a"]},props:{dialog:Boolean,dialogTitle:String,isEditDialog:Boolean,fieldsToEdit:{type:Object,default:function(){}}},data:function(){return{open:!1,title:null,quill_editor:{description:""},status:"open",selected_group:null,group_items:[],days_init_value:1,disabled:!1}},computed:{dynamic_api:function(){return"api/projects/".concat(this.id,"/member")},days:{get:function(){return this.days_init_value},set:function(t){parseInt(t)<1?this.days_init_value=1:this.days_init_value=t}}},watch:{dialog:function(t){var e=this;t&&_["a"].get("api/groups?all=true").then((function(t){var i=t.data;return e.group_items=i})),this.open=t},open:function(t){this.$emit("update:dialog",t)},fieldsToEdit:{handler:function(t){this.isEditDialog&&this.update_fields(t)},deep:!0}},methods:{cancel:function(){this.open=!1},save:function(){var t={title:this.title,description:this.quill_editor.description,status:this.status,days:this.disabled?0:this.days,role_id:this.selected_group};this.$emit("save",t)},update_fields:function(t){var e=t.fields,i=Object.assign({},e);this.title=i.title,this.$set(this.quill_editor,"description",i.description),this.status=i.status,this.days=this.disabled?0:i.days,this.selected_group=i.role_id,this.$refs.editor&&this.$refs.editor.setValue(i.description)},clear_and_close:function(){Object.assign(this.$data,this.$options.data.apply(this)),this.cancel()}}},v=m,h=(i("2013d"),i("2877")),g=Object(h["a"])(v,r,u,!1,null,"26edd2f2",null),b=g.exports,y=i("d4e9"),k={mixins:[o["a"]],components:{VueTable:s["a"],DeleteDialog:d["a"],TaskDialog:b,TableHeader:c["a"],Actions:l["a"]},props:{template_id:[Number,String],milestone_id:[Number,String]},data:function(){return{template_name:"",milestone_name:"",headers:[{text:"Title",value:"title"},{text:"Description",value:"description"},{text:"Status",value:"status"},{text:"Days",value:"days"},{text:"Action",value:"action",width:"140px",align:"center"}],table_config:{route_name:"templates/milestone/task",add_message:"New Task added successfully!",update_message:"Task updated successfully!",delete_message:"Task deleted successfully!"}}},computed:{dynamic_api:function(){return"api/milestone/".concat(this.milestone_id,"/task")},dynamic_bulk_delete_api:function(){return"api/milestone/".concat(this.milestone_id,"/task/bulk-delete")},paths:function(){return[{text:"Dashboard",disabled:!1,router_name:"default-content"},{text:"Templates",disabled:!1,router_name:"templates"},{text:"Milestones",disabled:!1,router_name:null,path:"/dashboard/templates/".concat(this.template_id,"/milestone")},{text:"Tasks",disabled:!0,router_name:null}]},table_title:function(){return this.milestone_name&&this.template_name?this.template_name+": "+this.milestone_name:""}},mounted:function(){this.$event.$emit("path-change",this.paths)},created:function(){var t=this;this.fill_table_via_url(this.dynamic_api,!0),y["a"].get_milestones("api/template/".concat(this.template_id)).then((function(e){var i=e.data;t.template_name=i.name})).finally((function(){return t.loading=!1})),y["a"].get_milestones("api/template/".concat(this.template_id,"/milestone/").concat(this.milestone_id)).then((function(e){var i=e.data;t.milestone_name=i.title})).finally((function(){return t.loading=!1}))},methods:{short_description_text:function(t){return t&&"undefined"!==typeof t?t.length>20?t.slice(0,19)+"...":t:""},load_more:function(){this.load_more_via_url(this.dynamic_api)}}},x=k,w=(i("cdd9"),i("6142"),Object(h["a"])(x,n,a,!1,null,"d3649d68",null));e["default"]=w.exports},"5b70":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("custom-dialog",{attrs:{title:t.title,content:t.textContent,"button1-text":t.cancelButtonText,"button2-text":t.deleteButtonText,open:t.open},on:{"update:open":function(e){t.open=e},button1:t.cancel_clicked,button2:t.delete_clicked},scopedSlots:t._u([{key:"content",fn:function(){return[i("v-banner",{attrs:{"two-line":"",outlined:"",tile:"",flat:""}},[i("v-avatar",{attrs:{slot:"icon",color:"red accent-4",size:"40"},slot:"icon"},[i("v-icon",{attrs:{icon:"mdi-lock",color:"white"}},[t._v(" mdi-shield-alert-outline ")])],1),i("p",{staticClass:"title",domProps:{innerHTML:t._s(t.textContent)}})],1)]},proxy:!0}])})],1)},a=[],o=i("57e5"),s={components:{CustomDialog:o["a"]},props:{title:{type:String,default:"Default Modal Title"},textContent:{type:String,default:"Default Modal Text Content"},cancelButtonText:{type:String,default:"Cancel"},deleteButtonText:{type:String,default:"Yes, Delete"},openDialog:Boolean},data:function(){return{open:!1}},watch:{openDialog:function(t){this.open=t},open:function(t){this.$emit("update:openDialog",t)}},methods:{cancel_clicked:function(){this.open=!1},delete_clicked:function(){this.$emit("delete")},showDialog:function(){this.open=!0},closeDialog:function(){this.open=!1}}},l=s,d=i("2877"),c=Object(d["a"])(l,n,a,!1,null,null,null);e["a"]=c.exports},6142:function(t,e,i){"use strict";var n=i("31b2"),a=i.n(n);a.a},"7e7e":function(t,e,i){"use strict";var n=i("174f"),a=i.n(n);a.a},"87ac":function(t,e,i){},9838:function(t,e,i){},bd74:function(t,e,i){},cdd9:function(t,e,i){"use strict";var n=i("87ac"),a=i.n(n);a.a},ee09:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("td",{staticClass:"table-actions",attrs:{align:"center"}},[t.hasEdit?i("v-tooltip",{directives:[{name:"show",rawName:"v-show",value:t.can_edit,expression:"can_edit"}],attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-btn",t._g({attrs:{dense:"",icon:""},on:{click:function(e){return t.handle_action("edit")}}},n),[i("v-icon",[t._v(t._s(t.editIcon))])],1)]}}],null,!1,4170341451)},[i("span",[t._v("Edit")])]):t._e(),t.hasDelete?i("v-tooltip",{directives:[{name:"show",rawName:"v-show",value:t.can_delete,expression:"can_delete"}],attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-btn",t._g({attrs:{dense:"",icon:""},on:{click:function(e){return t.handle_action("delete")}}},n),[i("v-icon",[t._v(t._s(t.deleteIcon))])],1)]}}],null,!1,4164065227)},[i("span",[t._v("Delete")])]):t._e(),t.hasView?i("v-tooltip",{directives:[{name:"show",rawName:"v-show",value:t.can_view,expression:"can_view"}],attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-btn",t._g({attrs:{dense:"",icon:""},on:{click:function(e){return t.handle_action("view")}}},n),[i("v-icon",[t._v(t._s(t.viewIcon))])],1)]}}],null,!1,701816587)},[i("span",[t._v("View")])]):t._e(),t._t("extra")],2)},a=[],o={props:{item:{type:Object,default:null},permissions:{type:Object,default:function(){return{delete:!0,update:!0,create:!0,view:!0}}},editIcon:{type:String,default:"mdi-circle-edit-outline"},viewIcon:{type:String,default:"mdi-eye-circle-outline"},deleteIcon:{type:String,default:"mdi-delete-circle-outline"},hasDelete:{type:Boolean,default:!0},hasEdit:{type:Boolean,default:!0},hasView:{type:Boolean,default:!0}},computed:{logged_user:function(){return this.$store.getters.user}},methods:{handle_action:function(t){this.item&&this.$emit(t,this.item)},can_delete:function(){return!!this.logged_user.is_admin||this.permissions&&this.permissions.delete},can_edit:function(){return!!this.logged_user.is_admin||this.permissions&&this.permissions.update},can_view:function(){return!!this.logged_user.is_admin||this.permissions&&this.permissions.view}}},s=o,l=(i("7e7e"),i("2877")),d=Object(l["a"])(s,n,a,!1,null,null,null);e["a"]=d.exports}}]);
//# sourceMappingURL=chunk-d5f357f4.f969acf9.js.map