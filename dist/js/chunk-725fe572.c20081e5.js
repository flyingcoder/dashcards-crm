(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-725fe572"],{"15b0":function(t,e,i){"use strict";var a=i("dae0"),n=i.n(a);n.a},"174f":function(t,e,i){},"259d":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"breadcrumb-wrapper"},[i("v-breadcrumbs",{attrs:{items:t.paths},scopedSlots:t._u([{key:"item",fn:function(e){var a=e.item;return[i("v-breadcrumbs-item",{staticClass:"page__title",attrs:{disabled:a.disabled}},[i("span",{on:{click:function(e){return t.navigate_from_breadcrumb(a)}}},[t._v(" "+t._s(a.text)+" ")])])]}}])},[i("v-icon",{attrs:{slot:"divider"},slot:"divider"},[t._v("chevron_right")])],1)],1)},n=[],s={name:"Breadcrumb",props:{paths:{type:Array,default:function(){return[]}}},methods:{navigate_from_breadcrumb:function(t){if(t.hasOwnProperty("path"))t.path&&this.$router.push({path:t.path});else{var e=t.router_name;e&&this.$router.push({name:e})}}}},o=s,l=(i("15b0"),i("edab"),i("2877")),d=Object(l["a"])(o,a,n,!1,null,"adf165fe",null);e["a"]=d.exports},"29d6":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-layout",{staticClass:"table-header",attrs:{wrap:""}},[i("breadcrumb",{attrs:{paths:t.paths}}),i("v-flex",[t.noButton?t._e():i("v-btn",{staticClass:"add__btn mr-2",attrs:{fab:"",small:""},on:{click:function(e){return t.$emit("click")}}},[i("v-icon",[t._v("add")])],1),t.noSortButton?t._e():i("v-btn",{staticClass:"add__btn mr-2",attrs:{fab:"",small:""},on:{click:function(e){return t.$emit("click-sort-by")}}},[i("v-icon",[t._v("sort")])],1),t.noListButton?t._e():i("v-btn",{staticClass:"add__btn mr-2",attrs:{fab:"",small:""},on:{click:function(e){return t.$emit("click-list-view")}}},[i("v-icon",[t._v("list")])],1),t.noGridButton?t._e():i("v-btn",{staticClass:"add__btn mr-2",attrs:{fab:"",small:""},on:{click:function(e){return t.$emit("click-grid-view")}}},[i("v-icon",[t._v("mdi-view-dashboard")])],1),t._t("form-btn")],2)],1)},n=[],s=i("259d"),o={name:"TableHeader",props:{paths:{type:Array,default:[]},noButton:{type:Boolean,default:!1},noListButton:{type:Boolean,default:!0},noGridButton:{type:Boolean,default:!0},noSortButton:{type:Boolean,default:!0}},data:function(){return{fab:!0}},components:{Breadcrumb:s["a"]}},l=o,d=(i("ff3c"),i("2877")),c=Object(d["a"])(l,a,n,!1,null,"0910c4a8",null);e["a"]=c.exports},"492a":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"milestone-task"},[i("task-dialog",{ref:"add_dialog",attrs:{dialog:t.add_dialog,"dialog-title":"Add Task"},on:{"update:dialog":function(e){t.add_dialog=e},save:function(e){return t.add_item("add_new_task",e,t.dynamic_api)}}}),i("task-dialog",{ref:"edit_dialog",attrs:{dialog:t.edit_dialog,"dialog-title":"Edit Task","is-edit-dialog":t.edit_dialog,"fields-to-edit":t.edit_item},on:{"update:dialog":function(e){t.edit_dialog=e},save:function(e){return t.update_item("edit_task",e,t.dynamic_api)}}}),i("delete-dialog",{attrs:{"open-dialog":t.delete_dialog,title:"Delete Task","text-content":"Are you sure you want to delete this task?"},on:{"update:openDialog":function(e){t.delete_dialog=e},"update:open-dialog":function(e){t.delete_dialog=e},delete:function(e){return t.delete_item("delete_task",t.dynamic_api)}}}),i("delete-dialog",{attrs:{"open-dialog":t.bulk_delete_dialog,title:"Delete Milestone Task","text-content":"Are you sure you want to delete these milestone tasks? This can't be undone."},on:{"update:openDialog":function(e){t.bulk_delete_dialog=e},"update:open-dialog":function(e){t.bulk_delete_dialog=e},delete:function(e){return t.bulk_delete_via_url(t.dynamic_bulk_delete_api)}}}),i("v-layout",[i("v-flex",{attrs:{xs12:""}},[i("table-header",{attrs:{paths:t.paths},on:{click:function(e){t.add_dialog=!0}}}),i("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{indeterminate:!0}}),i("VueTable",{key:t.componentKey,attrs:{items:t.items,headers:t.headers,showRowActions:!0,title:"Task",noMoreData:t.noMoreData},on:{"load-more":t.load_more,"delete-selected":function(e){return t.open_bulk_delete_dialog(e)}},scopedSlots:t._u([{key:"row-slot",fn:function(e){var a=e.item;return[i("td",{staticClass:"text-xs-left text-cap"},[t._v(t._s(a.title))]),i("td",{staticClass:"text-xs-left textarea-cap"},[t._v(" "+t._s(t.short_description_text(a.description))+" ")]),i("td",{staticClass:"text-xs-left text-cap"},[t._v(t._s(a.status))]),i("td",{staticClass:"text-xs-left"},[t._v(t._s(a.days))]),i("Actions",{attrs:{item:a,hasView:!1,permissions:t.$_permissions.get("hq_milestone_tasks")},on:{edit:function(e){return t.open_edit_dialog(a)},delete:function(e){return t.open_delete_dialog(a)},view:function(e){return t.navigate_to_milestone_page(a)}}})]}},{key:"empty-slot",fn:function(){return[i("v-btn",{attrs:{tile:"",text:"",outlined:""},on:{click:function(e){t.add_dialog=!0}}},[i("v-icon",{attrs:{left:""}},[t._v("add")]),t._v(" Add Task")],1)]},proxy:!0}])})],1)],1)],1)},n=[],s=(i("c5f6"),i("e06e")),o=i("0ebe"),l=i("ee09"),d=i("5b70"),c=i("29d6"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("custom-dialog",{ref:"dialog",attrs:{title:t.dialogTitle,open:t.open,"button2-text":"Save"},on:{"update:open":function(e){t.open=e},button1:t.cancel,button2:t.save}},[i("template",{slot:"content"},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{label:"Add task title",color:"#667187",box:"","hide-details":""},model:{value:t.title,callback:function(e){t.title="string"===typeof e?e.trim():e},expression:"title"}})],1),i("v-flex",{attrs:{xs6:""}},[i("v-select",{staticClass:"dialog__selectfield d-field",attrs:{label:"Select Group",items:t.group_items,"item-text":"name","item-value":"id",color:"#667187",box:"","hide-details":""},model:{value:t.selected_group,callback:function(e){t.selected_group="string"===typeof e?e.trim():e},expression:"selected_group"}})],1),i("v-flex",{attrs:{xs6:""}},[i("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{label:"Add days",type:"number",min:"0",color:"#667187",box:"","hide-details":""},model:{value:t.days,callback:function(e){t.days=t._n(e)},expression:"days"}})],1),i("v-flex",{attrs:{xs12:""}},[i("v-textarea",{staticClass:"dialog__textarea d-field",attrs:{label:"Add task description",color:"#667187",box:"","hide-details":""},model:{value:t.description,callback:function(e){t.description="string"===typeof e?e.trim():e},expression:"description"}})],1)],1)],1)],2)},u=[],_=i("1be9"),p=i("57e5"),f={name:"TasksDialog",components:{CustomDialog:p["a"]},props:{dialog:Boolean,dialogTitle:String,isEditDialog:Boolean,fieldsToEdit:{type:Object,default:function(){}}},data:function(){return{open:!1,title:null,description:null,status:"open",selected_group:null,group_items:[],days_init_value:1}},computed:{dynamic_api:function(){return"api/projects/".concat(this.id,"/member")},days:{get:function(){return this.days_init_value},set:function(t){parseInt(t)<1?this.days_init_value=1:this.days_init_value=t}}},watch:{dialog:function(t){var e=this;t&&_["a"].get("api/groups?all=true").then((function(t){var i=t.data;return e.group_items=i})),this.open=t},open:function(t){this.$emit("update:dialog",t)},fieldsToEdit:{handler:function(t){this.isEditDialog&&this.update_fields(t)},deep:!0}},methods:{cancel:function(){this.open=!1},save:function(){var t={title:this.title,description:this.description,status:this.status,days:this.days,role_id:this.selected_group};this.$emit("save",t)},update_fields:function(t){var e=t.fields,i=Object.assign({},e);this.title=i.title,this.description=i.description,this.status=i.status,this.days=i.days,this.selected_group=i.role_id},clear_and_close:function(){Object.assign(this.$data,this.$options.data.apply(this)),this.cancel()}}},m=f,h=(i("62cc"),i("2877")),v=Object(h["a"])(m,r,u,!1,null,"2f4ac73c",null),g=v.exports,b={mixins:[s["a"]],components:{VueTable:o["a"],DeleteDialog:d["a"],TaskDialog:g,TableHeader:c["a"],Actions:l["a"]},props:{template_id:[Number,String],milestone_id:[Number,String]},data:function(){return{headers:[{text:"Title",value:"title"},{text:"Description",value:"description"},{text:"Status",value:"status"},{text:"Days",value:"days"},{text:"Action",value:"action",width:"140px",align:"center"}],table_config:{route_name:"templates/milestone/task",add_message:"New Task added successfully!",update_message:"Task updated successfully!",delete_message:"Task deleted successfully!"}}},computed:{dynamic_api:function(){return"api/milestone/".concat(this.milestone_id,"/task")},dynamic_bulk_delete_api:function(){return"api/milestone/".concat(this.milestone_id,"/task/bulk-delete")},paths:function(){return[{text:"Dashboard",disabled:!1,router_name:"default-content"},{text:"Templates",disabled:!1,router_name:"templates"},{text:"Milestones",disabled:!1,router_name:null,path:"/dashboard/templates/".concat(this.template_id,"/milestone")},{text:"Tasks",disabled:!0,router_name:null}]}},created:function(){this.fill_table_via_url(this.dynamic_api,!0)},methods:{short_description_text:function(t){return t.length>12?t.slice(0,11)+"...":t},load_more:function(){this.load_more_via_url(this.dynamic_api)}}},x=b,y=(i("db52"),Object(h["a"])(x,a,n,!1,null,"5f886c39",null));e["default"]=y.exports},"4c37":function(t,e,i){},"579d8":function(t,e,i){},"57e5":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-layout",{attrs:{"justify-center":""}},[i("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.loading?i("v-progress-linear",{attrs:{slot:"progress",color:"blue",indeterminate:""},slot:"progress"}):i("v-card",{staticClass:"custom__dialog"},[i("v-card-title",{staticClass:"dialog__header"},[t._t("entire-header",[t._t("title",[i("span",{staticClass:"dialog__title"},[t._v(t._s(t.title))])]),t._t("cancel-icon",[i("v-btn",{staticClass:"close__dialog",attrs:{fab:"",small:""},on:{click:t.close_dialog}},[i("v-icon",[t._v("close")])],1)])])],2),i("v-card-text",{staticClass:"dialog__body"},[t._t("content",[t._v(" "+t._s(t.content)+" ")])],2),i("v-card-actions",{staticClass:"dialog__actions"},[t._t("entire-actions",[t._t("button1",[i("v-btn",{on:{click:t.button1clicked}},[t._v(t._s(t.button1Text))])]),t._t("button2",[i("v-btn",{attrs:{loading:t.btnloading},on:{click:t.button2clicked}},[t._v(t._s(t.button2Text))])])])],2)],1)],1)],1)},n=[],s={props:{title:{type:String,default:"Default Modal Title"},content:{type:String,default:"Default Modal Text Content"},button1Text:{type:String,default:"Cancel"},button2Text:{type:String,default:"Delete"},open:Boolean,value:Boolean},data:function(){return{dialog:!1,loading:!1,btnloading:!1}},mounted:function(){var t=this;this.$event.$on("btnloading_off",(function(e){return t.btnloading=e}))},watch:{value:{handler:function(t){this.dialog=t},immediate:!0},open:function(t){this.dialog=t},dialog:function(t){this.$emit("update:open",t),this.$emit("input",t)}},methods:{button1clicked:function(){this.$emit("button1")},button2clicked:function(){this.btnloading=!0,this.$emit("button2")},open_dialog:function(){this.dialog=!0},close_dialog:function(){this.dialog=!1},clear_and_close:function(){Object.assign(this.$data,this.$options.data.apply(this)),this.close_dialog()},activate_loading:function(){this.loading=!0},disable_loading:function(){this.loading=!1}}},o=s,l=(i("aab6"),i("5bdc"),i("2877")),d=Object(l["a"])(o,a,n,!1,null,"37adf598",null);e["a"]=d.exports},"5b70":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("custom-dialog",{attrs:{title:t.title,content:t.textContent,"button1-text":t.cancelButtonText,"button2-text":t.deleteButtonText,open:t.open},on:{"update:open":function(e){t.open=e},button1:t.cancel_clicked,button2:t.delete_clicked}})],1)},n=[],s=i("57e5"),o={components:{CustomDialog:s["a"]},props:{title:{type:String,default:"Default Modal Title"},textContent:{type:String,default:"Default Modal Text Content"},cancelButtonText:{type:String,default:"Cancel"},deleteButtonText:{type:String,default:"Delete"},openDialog:Boolean},data:function(){return{open:!1}},watch:{openDialog:function(t){this.open=t},open:function(t){this.$emit("update:openDialog",t)}},methods:{cancel_clicked:function(){this.open=!1},delete_clicked:function(){this.$emit("delete")},showDialog:function(){this.open=!0},closeDialog:function(){this.open=!1}}},l=o,d=i("2877"),c=Object(d["a"])(l,a,n,!1,null,null,null);e["a"]=c.exports},"5bdc":function(t,e,i){"use strict";var a=i("877e"),n=i.n(a);n.a},"62cc":function(t,e,i){"use strict";var a=i("579d8"),n=i.n(a);n.a},"781e":function(t,e,i){},"7e7e":function(t,e,i){"use strict";var a=i("174f"),n=i.n(a);n.a},"877e":function(t,e,i){},aab6:function(t,e,i){"use strict";var a=i("781e"),n=i.n(a);n.a},d95a:function(t,e,i){},dae0:function(t,e,i){},db52:function(t,e,i){"use strict";var a=i("d95a"),n=i.n(a);n.a},edab:function(t,e,i){"use strict";var a=i("f3a9"),n=i.n(a);n.a},ee09:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("td",{staticClass:"table-actions",attrs:{align:"center"}},[t.hasEdit?i("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.can_edit,expression:"can_edit"}],attrs:{dense:"",dense:"",icon:""},on:{click:function(e){return t.handle_action("edit")}}},[i("v-icon",{attrs:{small:""}},[t._v(" mdi-pencil ")])],1):t._e(),t.hasDelete?i("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.can_delete,expression:"can_delete"}],attrs:{dense:"",icon:""},on:{click:function(e){return t.handle_action("delete")}}},[i("v-icon",{attrs:{small:""}},[t._v("mdi-delete")])],1):t._e(),t.hasView?i("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.can_view,expression:"can_view"}],attrs:{dense:"",icon:""},on:{click:function(e){return t.handle_action("view")}}},[i("v-icon",{attrs:{small:""}},[t._v("pageview")])],1):t._e()],1)},n=[],s={props:{item:{type:Object,default:null},permissions:{type:Object,default:function(){return{delete:!0,update:!0,create:!0,view:!0}}},hasDelete:{type:Boolean,default:!0},hasEdit:{type:Boolean,default:!0},hasView:{type:Boolean,default:!0}},computed:{logged_user:function(){return this.$store.getters.user}},methods:{handle_action:function(t){this.item&&this.$emit(t,this.item)},can_delete:function(){return!!this.logged_user.is_admin||this.permissions&&this.permissions.can.delete},can_edit:function(){return!!this.logged_user.is_admin||this.permissions&&this.permissions.can.update},can_view:function(){return!!this.logged_user.is_admin||this.permissions&&this.permissions.can.view}}},o=s,l=(i("7e7e"),i("2877")),d=Object(l["a"])(o,a,n,!1,null,null,null);e["a"]=d.exports},f3a9:function(t,e,i){},ff3c:function(t,e,i){"use strict";var a=i("4c37"),n=i.n(a);n.a}}]);
//# sourceMappingURL=chunk-725fe572.c20081e5.js.map