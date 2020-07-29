(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41da139c"],{"0725":function(t,e,i){"use strict";var a=i("efa8"),n=i.n(a);n.a},"137e":function(t,e,i){"use strict";var a=i("89f9"),n=i.n(a);n.a},"1dfd":function(t,e,i){},"3d8d":function(t,e,i){},4347:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("custom-dialog",{ref:"dialog",attrs:{title:t.dialogTitle,open:t.open,"button2-text":"Save"},on:{"update:open":function(e){t.open=e},button1:t.cancel,button2:t.save},scopedSlots:t._u([{key:"content",fn:function(){return[i("v-row",[i("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[i("v-text-field",{staticClass:"dialog__textfield",attrs:{filled:"","hide-details":"",color:"#657186",label:"Add milestone title"},model:{value:t.title,callback:function(e){t.title="string"===typeof e?e.trim():e},expression:"title"}})],1)],1),i("v-row",[i("v-col",{staticClass:"pt-0",attrs:{cols:"12",md:"6"}},[i("date-picker",{staticClass:"dialog__textfield",attrs:{filled:"","hide-details":"",color:"#657186",label:"Start Date","prepend-inner-icon":"event",readonly:"",value:t.start_date,max:t.end_date,hasButtons:!1},on:{input:t.start_date_changed}})],1),i("v-col",{staticClass:"pt-0",attrs:{cols:"12",md:"6"}},[i("date-picker",{staticClass:"dialog__textfield",attrs:{filled:"","hide-details":"",color:"#657186",label:"End Date","prepend-inner-icon":"event",readonly:"",value:t.end_date,min:t.start_date,hasButtons:!1},on:{input:t.end_date_changed}})],1)],1),i("v-row",[i("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[i("v-text-field",{staticClass:"dialog__textfield",attrs:{filled:"","hide-details":"",color:"#657186",label:"Add days",min:"0",type:"number"},model:{value:t.days,callback:function(e){t.days=t._n(e)},expression:"days"}})],1)],1)]},proxy:!0}])})},n=[],s=i("c97a"),o=i("c1df"),l=i.n(o),d=i("57e5"),r={name:"MilestoneTabDialog",components:{DatePicker:s["a"],CustomDialog:d["a"]},props:{dialog:Boolean,dialogTitle:String,isEditDialog:Boolean,fieldsToEdit:{type:Object,default:function(){}}},data:function(){return{open:!1,title:null,start_date:null,end_date:null,status:"active",days_init_value:0}},computed:{days:{get:function(){return this.start_date&&this.end_date?l()(this.end_date).diff(l()(this.start_date),"days"):this.days_init_value},set:function(t){this.start_date||this.end_date?(this.start_date?this.end_date=l()(this.start_date).add(t,"days").format("YYYY-MM-DD"):this.start_date=l()(this.end_date).subtract(t,"days").format("YYYY-MM-DD"),this.days_init_value=t):this.days_init_value=t}}},watch:{dialog:function(t){this.open=t},open:function(t){this.$emit("update:dialog",t)},fieldsToEdit:{handler:function(t){this.isEditDialog&&this.update_fields(t)},deep:!0}},methods:{end_date_changed:function(t){this.end_date=t,this.days&&t&&(this.start_date=l()(t).subtract(this.days,"days").format("YYYY-MM-DD"))},start_date_changed:function(t){this.start_date=t,this.days&&t&&(this.end_date=l()(t).add(this.days,"days").format("YYYY-MM-DD"))},cancel:function(){this.open=!1},save:function(){var t={title:this.title,status:this.status,days:this.days,started_at:this.start_date,end_at:this.end_date};this.$emit("save",t)},update_fields:function(t){var e=t.fields,i=Object.assign({},e);this.title=i.title,this.status=i.status,this.days=i.days,this.start_date=i.started_at,this.end_date=i.end_at},clear_and_close:function(){Object.assign(this.$data,this.$options.data.apply(this)),this.cancel()}}},c=r,u=(i("5bc2"),i("2877")),_=Object(u["a"])(c,a,n,!1,null,"73ac225a",null);e["a"]=_.exports},4469:function(t,e,i){},"48f6":function(t,e,i){},"4a21":function(t,e,i){"use strict";var a=i("a848"),n=i.n(a);n.a},"5b70":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("custom-dialog",{attrs:{title:t.title,content:t.textContent,"button1-text":t.cancelButtonText,"button2-text":t.deleteButtonText,open:t.open},on:{"update:open":function(e){t.open=e},button1:t.cancel_clicked,button2:t.delete_clicked},scopedSlots:t._u([{key:"content",fn:function(){return[i("v-banner",{attrs:{"two-line":"",outlined:"",tile:"",flat:""}},[i("v-avatar",{attrs:{slot:"icon",color:"red accent-4",size:"40"},slot:"icon"},[i("v-icon",{attrs:{icon:"mdi-lock",color:"white"}},[t._v(" mdi-shield-alert-outline ")])],1),i("p",{staticClass:"title",domProps:{innerHTML:t._s(t.textContent)}})],1)]},proxy:!0}])})],1)},n=[],s=i("57e5"),o={components:{CustomDialog:s["a"]},props:{title:{type:String,default:"Default Modal Title"},textContent:{type:String,default:"Default Modal Text Content"},cancelButtonText:{type:String,default:"Cancel"},deleteButtonText:{type:String,default:"Yes, Delete"},openDialog:Boolean},data:function(){return{open:!1}},watch:{openDialog:function(t){this.open=t},open:function(t){this.$emit("update:openDialog",t)}},methods:{cancel_clicked:function(){this.open=!1},delete_clicked:function(){this.$emit("delete")},showDialog:function(){this.open=!0},closeDialog:function(){this.open=!1}}},l=o,d=i("2877"),r=Object(d["a"])(l,a,n,!1,null,null,null);e["a"]=r.exports},"5bc2":function(t,e,i){"use strict";var a=i("1dfd"),n=i.n(a);n.a},6943:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dash__card"},[i("div",{staticClass:"card__header"},[i("h3",{staticClass:"card__title"},[t._v(t._s(t.title))]),t.dashboard?t._t("actions",[i("div",{staticClass:"actions"},[t.hasListView?i("v-icon",{staticClass:"action",attrs:{fab:""},on:{click:function(e){return t.$emit("list-view")}}},[t._v("list")]):t._e(),t.hasGridView?i("v-icon",{staticClass:"action",attrs:{fab:""},on:{click:function(e){return t.$emit("grid-view")}}},[t._v("grid_on")]):t._e(),t.hasRemove?i("v-icon",{staticClass:"action",attrs:{fab:""},on:{click:function(e){return t.$emit("remove")}}},[t._v("remove")]):t._e(),t.hasAdd?i("v-icon",{staticClass:"action",attrs:{fab:""},on:{click:function(e){return t.$emit("add")}}},[t._v("mdi-plus-circle-outline")]):t._e(),t.hasExpand?i("v-icon",{staticClass:"action",attrs:{fab:""},on:{click:function(e){return t.$emit("expand")}}},[t._v("zoom_out_map")]):t._e(),t.hasClose?i("v-icon",{staticClass:"action",attrs:{fab:""},on:{click:function(e){return t.$emit("close")}}},[t._v("close")]):t._e()],1)]):t._e()],2),i("div",{staticClass:"card__content"},[t._t("content")],2),i("v-row",{staticClass:"card__footer",attrs:{"no-gutters":""}},[t._t("footer",[t.viewMoreBtn?i("v-btn",{staticClass:"view__more_btn mx-auto",attrs:{text:"",loading:t.btnloading2},on:{click:function(e){return t.$emit("view-more")}}},[t._v(" VIEW MORE ")]):t._e()])],2)],1)},n=[],s={name:"DashCard",props:{title:String,viewMoreBtn:Boolean,dashboard:Boolean,hasListView:{type:Boolean,default:!1},hasGridView:{type:Boolean,default:!1},hasRemove:{type:Boolean,default:!1},hasAdd:{type:Boolean,default:!1},hasExpand:{type:Boolean,default:!0},hasClose:{type:Boolean,default:!0}},data:function(){return{btnloading2:!1}},created:function(){var t=this;this.$event.$on("btnloading_off",(function(){t.btnloading2=!1}))}},o=s,l=(i("ad81"),i("2877")),d=Object(l["a"])(o,a,n,!1,null,"636cac56",null);e["a"]=d.exports},"6f9b":function(t,e,i){"use strict";var a=i("f324"),n=i.n(a);n.a},7653:function(t,e,i){"use strict";var a=i("48f6"),n=i.n(a);n.a},"87f7":function(t,e,i){},"89f9":function(t,e,i){},"8dd1":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"milestones__tab"},[i("milestone-tab-dialog",{ref:"add_dialog",attrs:{dialog:t.add_dialog,"dialog-title":"Add Milestone"},on:{"update:dialog":function(e){t.add_dialog=e},save:t.add_new_milestone}}),i("delete-dialog",{attrs:{"open-dialog":t.delete_dialog,title:"Delete Milestone","text-content":"Are you sure you want to delete this milestone?"},on:{"update:openDialog":function(e){t.delete_dialog=e},"update:open-dialog":function(e){t.delete_dialog=e},delete:t.delete_milestone}}),i("milestone-tab-dialog",{ref:"edit_dialog",attrs:{dialog:t.edit_dialog,"dialog-title":"Edit Milestone","is-edit-dialog":t.edit_dialog,"fields-to-edit":t.edit_item},on:{"update:dialog":function(e){t.edit_dialog=e},save:t.update_milestone}}),i("select-template-dialog",{ref:"select_template_dialog",attrs:{"dialog-title":"Add Milestone Template"},on:{save:t.add_template}}),i("add-task-dialog",{ref:"add_task_dialog",attrs:{dialog:t.add_task_dialog,"dialog-title":"Add Task","milestone-start-date":t.add_task_start_date,id:t.id},on:{"update:dialog":function(e){t.add_task_dialog=e},save:t.add_new_task}}),i("add-task-dialog",{ref:"edit_task_dialog",attrs:{dialog:t.edit_task_dialog,"dialog-title":"Edit Task","is-edit-dialog":t.edit_task_dialog,"fields-to-edit":t.edit_task_item,id:t.id},on:{"update:dialog":function(e){t.edit_task_dialog=e},save:t.update_task}}),i("v-layout",{attrs:{"justify-end":""}},[i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"mx-2",attrs:{color:"#3b589e",dark:"",small:"",fab:""},on:{click:function(e){t.add_dialog=!0}}},"v-btn",n,!1),a),[i("v-icon",[t._v("mdi-bookmark-plus-outline")])],1)]}}])},[i("span",[t._v("Create New Milestone")])]),i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"mx-2",attrs:{color:"#3b589e",small:"",fab:""},on:{click:t.open_select_template_dialog}},"v-btn",n,!1),a),[i("v-icon",{attrs:{color:"white"}},[t._v("mdi-bookmark-multiple-outline")])],1)]}}])},[i("span",[t._v("Create Milestone From Templates")])])],1),i("v-layout",{staticClass:"boxes__wrapper",attrs:{wrap:""}},[i("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"my-5",attrs:{indeterminate:!0}}),t._l(t.boxes,(function(e,a){return i("v-flex",{key:e.id,staticClass:"milestone__box",attrs:{md6:"",xs12:""}},[i("div",{staticClass:"milestone__dynamic_box"},[i("dynamic-box",{attrs:{id:t.id,box:e,loading:e.id===t.boxIdInProgress},on:{edit:t.open_edit_dialog,delete:t.open_delete_confirmation,"edit-task":t.edit_task,"remove-task":function(e){return t.remove_task(a,e)},"add-task":t.open_add_task_dialog}})],1)])}))],2)],1)},n=[],s=(i("7514"),i("2909")),o=(i("20d6"),i("96cf"),i("1da1")),l=(i("c5f6"),i("1be9")),d=i("d4e9"),r=i("5b70"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dynamic-card"},[i("delete-dialog",{attrs:{"open-dialog":t.delete_dialog,title:"Delete Task","text-content":"Are you sure you want to delete this task?"},on:{"update:openDialog":function(e){t.delete_dialog=e},"update:open-dialog":function(e){t.delete_dialog=e},delete:function(e){return t.delete_task(t.item_to_delete)}}}),i("dash-card",{attrs:{title:t.validate_title(t.box.title),dashboard:!0}},[i("template",{slot:"actions"},[i("v-flex",{staticClass:"actions text-xs-right",attrs:{xs4:""}},[t._v(" "+t._s(t.box.tasks.filter((function(t){return"completed"===t.status})).length+"/"+t.box.tasks.length)+" "),i("v-icon",{staticClass:"action",on:{click:function(e){return t.$emit("edit",t.box)}}},[t._v("mdi-circle-edit-outline")]),i("v-icon",{staticClass:"action",on:{click:function(e){return t.$emit("delete",t.box.id)}}},[t._v("mdi-close-circle-outline")])],1)],1),i("div",{staticClass:"content",attrs:{slot:"content"},slot:"content"},[t.loading?i("v-progress-linear",{attrs:{indeterminate:!0}}):t._e(),i("div",{staticClass:"tasks-progress"},[i("div",{staticClass:"fill",style:{width:t.tasksProgress+"%"}})]),i("div",{staticClass:"task-custom-table"},[i("v-layout",{staticClass:"header"},[i("v-flex",{staticClass:"task__tableHead",attrs:{xs7:""}},[t._v("Task")]),i("v-flex",{staticClass:"task__tableHead",attrs:{xs3:""}},[t._v("Status")])],1),i("div",{staticClass:"body"},t._l(t.box.tasks,(function(e,a){return i("v-layout",{key:e.id,staticClass:"task__tableBody",attrs:{"align-center":""}},[i("v-flex",{staticClass:"project__col",attrs:{xs7:""}},[i("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on;return[i("span",t._g({attrs:{dark:""}},n),[t._v(t._s(t._f("truncate")(e.title,30)))])]}}],null,!0)},[i("span",[t._v(t._s(e.title))])])],1),i("v-flex",{staticClass:"status__col",attrs:{xs3:""}},[i("v-chip",{staticClass:"text-left fullwidth",attrs:{label:"",small:"",outlined:""}},["completed"===e.status.toLowerCase()?i("v-icon",{attrs:{small:"",left:"",color:"success"}},[t._v(" mdi-clipboard-check-outline ")]):"pending"===e.status.toLowerCase()?i("v-icon",{attrs:{small:"",left:"",color:"warning"}},[t._v(" mdi-clipboard-pulse-outline ")]):"behind"===e.status.toLowerCase()?i("v-icon",{attrs:{small:"",left:"",color:"danger"}},[t._v(" mdi-clipboard-alert-outline ")]):"open"===e.status.toLowerCase()?i("v-icon",{attrs:{small:"",left:"",color:"info"}},[t._v(" mdi-clipboard-text-play-outline ")]):t._e(),i("span",{staticClass:"caption text--grey"},[t._v(t._s(t._f("ucwords")(e.status)))])],1)],1),i("v-flex",{attrs:{xs2:""}},[i("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var s=n.on;return[i("v-icon",t._g({staticClass:"task-icon",on:{click:function(i){return t.edit_task_clicked(e,a)}}},s),[t._v(" mdi-circle-edit-outline ")])]}}],null,!0)},[i("span",[t._v("Edit Task")])]),i("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var s=n.on;return[i("v-icon",t._g({staticClass:"task-icon",on:{click:function(i){return t.openDeleteDialog({task_index:a,task_id:e.id})}}},s),[t._v(" mdi-delete-circle-outline ")])]}}],null,!0)},[i("span",[t._v("Remove Task")])])],1)],1)})),1)],1)],1),i("v-btn",{staticClass:"add__new_btn mt-2",attrs:{slot:"footer",rounded:"",color:"#3b589e",dark:""},on:{click:function(e){return t.$emit("add-task",t.box.id)}},slot:"footer"},[i("v-icon",{attrs:{left:""}},[t._v("mdi-plus-circle-outline")]),t._v(" ADD NEW ")],1)],2)],1)},u=[],_=i("6943"),f={name:"DynamicBox",components:{DashCard:_["a"],DeleteDialog:r["a"]},props:{id:[Number,String],box:Object,loading:Boolean},data:function(){return{delete_dialog:!1,item_to_delete:null}},computed:{tasksProgress:function(){var t=this.box,e=t.tasks.filter((function(t){return"completed"===t.status.toLowerCase()})).length,i=t.tasks.length;return e/i*100}},methods:{validate_title:function(t){return t.length>18?t.slice(0,18)+"...":t},openDeleteDialog:function(t){this.delete_dialog=!0,this.item_to_delete=t},delete_task:function(t){var e=t.task_index,i=t.task_id;this.$emit("remove-task",{task_index:e,task_id:i}),this.delete_dialog=!1,this.item_to_delete=null},edit_task_clicked:function(t,e){this.$emit("edit-task",{task:t,index:e,box_id:this.box.id})}}},m=f,p=(i("bf97"),i("2877")),h=Object(p["a"])(m,c,u,!1,null,"0034586d",null),v=h.exports,g=i("4347"),b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("custom-dialog",{ref:"dialog",attrs:{title:t.dialogTitle,open:t.dialog},on:{"update:open":function(e){t.dialog=e},button1:t.cancel,click:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"close",void 0,e.key,void 0)?null:t.cancel(e)}},scopedSlots:t._u([{key:"content",fn:function(){return[i("v-card",{attrs:{flat:""}},[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{staticClass:"pa-2",attrs:{md:"6"}},[i("label",[t._v("Select from below:")])]),i("v-col",{staticClass:"pa-2",attrs:{md:"6"}},[i("label",[t._v("Selected Milestones:")])])],1),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",[i("v-treeview",{attrs:{"item-children":"milestones","item-text":"name",items:t.templates,"selection-type":"leaf",selectable:"","return-object":"","open-all":"","expand-icon":"mdi-chevron-down","on-icon":"mdi-checkbox-marked","off-icon":"mdi-checkbox-blank-outline","indeterminate-icon":"mdi-checkbox-intermediate"},model:{value:t.selected_template,callback:function(e){t.selected_template=e},expression:"selected_template"}})],1),i("v-divider",{attrs:{vertical:""}}),i("v-col",{staticClass:"pa-6",attrs:{md:"6"}},[0===t.selected_template.length?i("Empty",{attrs:{headline:"No milestone selected"}}):t._l(t.selected_template,(function(e){return i("div",{key:e.id},[i("v-icon",{attrs:{left:""}},[t._v("mdi-checkbox-marked-outline")]),t._v(" "+t._s(e.name)+" ")],1)}))],2)],1)],1)]},proxy:!0},{key:"button2",fn:function(){return[i("v-btn",{attrs:{disabled:t.is_disabled,loading:t.btnloading},on:{click:t.save}},[t._v("Copy Milestone")])]},proxy:!0}])})},k=[],x=i("57e5"),y={name:"SelectTemplateDialog",components:{CustomDialog:x["a"]},props:{title:String,dialogTitle:String},data:function(){return{dialog:!1,loading:!1,btnloading:!1,templates:[],selected_template:[]}},created:function(){var t=this;this.$event.$on("btnloading_off",(function(){t.btnloading=!1}))},computed:{is_disabled:function(){return this.loading||0===this.selected_template.length}},watch:{dialog:function(t){t&&this.fill_tree(),this.btnloading=!1,this.dialog=t,this.selected_template=[]}},methods:{fill_tree:function(){var t=this;this.loading=!0,l["a"].get("api/template/milestone/tree-view?all=true").then((function(e){return t.templates=e.data})).finally((function(){return t.loading=!1}))},open:function(){this.dialog=!0,this.btnloading=!1},cancel:function(){this.dialog=!1},save:function(){this.is_disabled||(this.btnloading=!0,this.$emit("save",this.selected_template))}}},C=y,w=(i("e845"),Object(p["a"])(C,b,k,!1,null,"ed7cfb62",null)),$=w.exports,D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tasks-dialog"},[i("custom-dialog",{ref:"dialog",attrs:{open:t.computedDialog,title:t.dialogTitle},on:{"update:open":function(e){t.computedDialog=e},button1:function(e){t.computedDialog=!1}},scopedSlots:t._u([{key:"content",fn:function(){return[i("v-row",{staticClass:"custom-dialog",attrs:{wrap:""}},[i("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[i("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{clearable:"",label:"Add task title",filled:"","hide-details":"auto",color:"#657186"},model:{value:t.title,callback:function(e){t.title="string"===typeof e?e.trim():e},expression:"title"}})],1),i("v-col",{staticClass:"pt-0",attrs:{cols:"12",md:"6"}},[i("date-picker",{staticClass:"dialog__date d-field",attrs:{clearable:"",label:"Start Date","prepend-inner-icon":"event",readonly:"",value:t.start_date,max:t.end_date},on:{input:t.start_date_changed}})],1),i("v-col",{staticClass:"pt-0 pr-4",attrs:{cols:"12",md:"6"}},[i("date-picker",{staticClass:"dialog__date d-field",attrs:{clearable:"",label:"End Date","prepend-inner-icon":"event",readonly:"",value:t.end_date,min:t.start_date},on:{input:t.end_date_changed}})],1),i("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[i("members-dropdown",{staticClass:"task-member",attrs:{members:t.members.selected,"member-items":t.members.items,"is-loading":t.members.loading},on:{"update:members":function(e){return t.$set(t.members,"selected",e)},search:function(e){return t.filter_dropdown_items("members",e)}}})],1),i("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[i("Editor",{key:t.fieldsToEdit?t.fieldsToEdit.id:0,ref:"editor",attrs:{hasFloatingTools:!1,content:t.description,placeholder:"Task description"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)],1)]},proxy:!0}])},[i("template",{slot:"button2"},[i("v-btn",{attrs:{loading:t.btnloading},on:{click:t.save}},[t._v("Save")])],1)],2)],1)},M=[],T=(i("6762"),i("2fdb"),i("c1df")),S=i.n(T),Y=i("0644"),B=i.n(Y),j=i("c97a"),E=i("5d98"),I=i("bc29"),O={name:"AddTaskDialog",components:{DatePicker:j["a"],Editor:E["a"],MembersDropdown:I["a"],CustomDialog:x["a"]},props:{id:[Number,String],dialog:Boolean,dialogTitle:String,isEditDialog:Boolean,fieldsToEdit:{type:Object,default:function(){}},milestoneStartDate:String,btnloading:{type:Boolean,default:!1}},data:function(){return{open:!1,title:null,description:null,status:"open",start_date:null,end_date:null,members:{selected:[],all_items:[],items:[],loading:!1},days_init_value:1}},mounted:function(){var t=this;this.$event.$on("btnloading_off",(function(e){return t.btnloading=e}))},computed:{days:{get:function(){return this.days_init_value},set:function(t){this.start_date||this.end_date?(this.start_date?this.end_date=S()(this.start_date).add(t,"days").format("YYYY-MM-DD"):this.start_date=S()(this.end_date).subtract(t,"days").format("YYYY-MM-DD"),this.days_init_value=t):this.days_init_value=t}},computedDialog:{get:function(){return this.dialog},set:function(t){!t&&this.$emit("close"),this.$emit("update:dialog",t)}}},watch:{dialog:{handler:function(t){this.open=t,t&&!this.isEditDialog&&(this.start_date=this.milestoneStartDate,this.end_date=S()(this.milestoneStartDate).add(1,"days").format("YYYY-MM-DD")),t&&this.fill_members_dropdown()},immediate:!0},open:function(t){this.$emit("update:dialog",t)},fieldsToEdit:{handler:function(t){this.isEditDialog&&this.update_fields(t),this.fill_members_dropdown()},deep:!0}},methods:{cancel:function(){this.open=!1},open_dialog:function(){this.$refs.dialog.open_dialog()},save:function(){this.btnloading=!0;var t={project_id:this.id,title:this.title,description:this.description,status:this.status,days:this.days,started_at:this.start_date,end_at:this.end_date,assigned:this.members.selected};this.$emit("save",t)},update_fields:function(t){var e=t.fields,i=Object.assign({},e);this.title=i.title,this.description=i.description,this.status=i.status,this.days=i.days,this.start_date=i.started_at,this.end_date=i.end_at,this.$set(this.members,"selected",i.assigned)},clear_and_close:function(){Object.assign(this.$data,this.$options.data.apply(this)),this.cancel()},end_date_changed:function(t){this.end_date=t||null,t&&(this.start_date=S()(t).subtract(this.days,"days").format("YYYY-MM-DD"))},start_date_changed:function(t){this.start_date=t||null,t&&(this.end_date=S()(t).add(this.days,"days").format("YYYY-MM-DD"))},fill_members_dropdown:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.loading=!0,d["a"].get_project_members(this.id).then((function(t){var i=t.data;e.members.all_items=i,e.members.items=i})).finally((function(){return e.loading=!1}));case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),filter_dropdown_items:function(t,e){var i=B()(this[t].all_items);if(e){var a=i.filter((function(t){return t.first_name.toLowerCase().includes(e.toLowerCase())||t.last_name.toLowerCase().includes(e.toLowerCase())}));this.$set(this[t],"items",a)}else this[t].items=i}}},A=O,P=(i("137e"),i("4a21"),Object(p["a"])(A,D,M,!1,null,"7914e6c4",null)),L=P.exports,R={name:"MilestonesTab",components:{DynamicBox:v,MilestoneTabDialog:g["a"],DeleteDialog:r["a"],SelectTemplateDialog:$,AddTaskDialog:L},props:{id:[Number,String]},data:function(){return{add_dialog:!1,edit_dialog:!1,edit_task_dialog:!1,delete_dialog:!1,add_task_dialog:!1,boxes:[],loading:!1,direction:"top",is_open_speed_dial:!1,id_to_delete:null,edit_item:{id:null,fields:null},edit_task_item:{id:null,index:null,fields:null,box_id:null},box_id_to_add_task:null,add_task_start_date:null,boxIdInProgress:null}},computed:{type:function(){return this.$route.params.type||"project"},paths:function(){return[{text:"Dashboard",disabled:!1,router_name:"default-content"},{text:this.type,disabled:!0,router_name:null},{text:"Milestones",disabled:!0,router_name:null}]}},mounted:function(){this.$event.$emit("path-change",this.paths),this.get_dynamic_boxes()},methods:{get_dynamic_boxes:function(){var t=this;this.loading=!0,l["a"].get("api/project/".concat(this.id,"/milestone?all=true")).then((function(e){var i=e.data;return t.boxes=i})).finally((function(){return t.loading=!1}))},add_new_milestone:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,this.$refs.add_dialog.clear_and_close(),t.next=4,l["a"].post("api/project/".concat(this.id,"/milestone"),e).then((function(t){var e=t.data;i.boxes.push(e),i.$event.$emit("open_snackbar","New Milestone added successfully")})).finally((function(){i.loading=!1,i.$event.$emit("btnloading_off",!1)}));case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),open_delete_confirmation:function(t){this.id_to_delete=t,this.delete_dialog=!0},delete_milestone:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,this.delete_dialog=!1,t.next=4,l["a"].delete("api/project/".concat(this.id,"/milestone/").concat(this.id_to_delete)).then((function(){return e.boxes=e.boxes.filter((function(t){return t.id!==e.id_to_delete}))})).finally((function(){return e.loading=!1}));case 4:this.$event.$emit("open_snackbar","Milestone deleted successfully"),this.id_to_delete=null,this.$event.$emit("btnloading_off",!1);case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),open_edit_dialog:function(t){var e=t.id,i=t.title,a=t.status,n=t.days,s=t.started_at,o=t.end_at;this.edit_item.id=e,this.edit_item.fields={title:i,status:a,days:n,started_at:s,end_at:o},this.edit_dialog=!0},update_milestone:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.boxIdInProgress=this.edit_item.id,this.edit_dialog=!1,t.next=4,l["a"].put("api/project/".concat(this.id,"/milestone/").concat(this.edit_item.id),e).then((function(t){var e=t.data,a=i.boxes.findIndex((function(t){return t.id===e.id}));~a&&i.boxes.splice(a,1,e)})).finally((function(){return i.boxIdInProgress=null}));case 4:this.$event.$emit("open_snackbar","Milestone updated successfully"),this.$event.$emit("btnloading_off",!1),this.edit_item={id:null,fields:null};case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),open_select_template_dialog:function(){this.$refs.select_template_dialog.open()},add_template:function(t){var e=this;this.loading=!0,l["a"].post("api/projects/".concat(this.id,"/milestone-import"),{milestone_ids:t.map((function(t){return t.id}))}).then((function(t){t.data;e.get_dynamic_boxes()})).finally((function(){e.$refs.select_template_dialog.cancel(),e.$event.$emit("btnloading_off",!1)}))},edit_task:function(t){var e=t.task,i=t.index,a=t.box_id;this.edit_task_dialog=!0,this.edit_task_item={id:e.id,index:i,fields:e,box_id:a}},remove_task:function(t,e){var i=this,a=e.task_index,n=e.task_id;this.boxIdInProgress=this.boxes[t].id,l["a"].delete("api/task/".concat(n)).then((function(){var e=Object(s["a"])(i.boxes);e[t].tasks.splice(a,1),i.boxes=e,i.$event.$emit("open_snackbar","Task deleted successfully")})).finally((function(){i.boxIdInProgress=null,i.$event.$emit("btnloading_off",!1)}))},update_task:function(t){var e=this;this.boxIdInProgress=this.edit_item.box_id,d["a"].edit_milestone_task(this.edit_task_item.id,t,"api/task").then((function(t){var i=e.edit_task_item,a=i.index,n=i.box_id,s=B()(e.boxes),o=s.findIndex((function(t){return t.id===n}));~o&&(e.edit_task_dialog=!1,s[o].tasks[a]=t.data,e.boxes=s,e.edit_task_item={id:null,index:null,task:null,box_id:null},e.$event.$emit("open_snackbar","Task updated successfully"))})).finally((function(){e.boxIdInProgress=null,e.$event.$emit("btnloading_off",!1)}))},open_add_task_dialog:function(t){this.box_id_to_add_task=t,this.add_task_start_date=this.boxes.find((function(e){return e.id===t})).started_at,this.add_task_dialog=!0},add_new_task:function(t){var e=this;this.boxIdInProgress=this.box_id_to_add_task,this.$refs.add_task_dialog.clear_and_close(),l["a"].post("api/milestone/".concat(this.box_id_to_add_task,"/task"),t).then((function(t){var i=t.data,a=e.boxes.findIndex((function(t){return t.id===e.box_id_to_add_task}));e.boxes[a].tasks.push(i),e.$event.$emit("open_snackbar","Task added successfully")})).finally((function(){e.boxIdInProgress=null,e.box_id_to_add_task=null,e.$event.$emit("btnloading_off",!1)}))}}},N=R,H=(i("0725"),Object(p["a"])(N,a,n,!1,null,"12612a3f",null));e["default"]=H.exports},a848:function(t,e,i){},ad81:function(t,e,i){"use strict";var a=i("4469"),n=i.n(a);n.a},bc29:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"members-dropdown"},[i("v-autocomplete",t._b({attrs:{value:t.members,items:t.items,"search-input":t.search,loading:t.isLoading,"item-value":"id","prepend-inner-icon":"search","no-filter":"",chips:"",multiple:t.multiple,clearable:"","hide-details":"",color:"#657186",label:"Assign member(s)",filled:"","append-outer-icon":t.showOuterIcon?"add":""},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e},"click:append-outer":t.open_add_new_member},scopedSlots:t._u([{key:"selection",fn:function(e){return[i("v-chip",t._b({attrs:{"input-value":e.selected,close:""},on:{click:e.select,"click:close":function(i){return t.remove_chip(e.index)}}},"v-chip",e.attrs,!1),[i("v-avatar",{attrs:{left:""}},[i("v-img",{attrs:{src:e.item.image_url}})],1),t._v(" "+t._s(e.item.name)+" ")],1)]}},{key:"item",fn:function(e){return[i("v-list-item",{key:e.item.id,on:{click:function(i){return t.add_to_selected(e.item)}}},[i("v-list-item-avatar",[i("v-img",{attrs:{src:e.item.image_url}})],1),i("v-list-item-content",[i("v-list-item-title",{domProps:{innerHTML:t._s(e.item.fullname)}}),i("v-list-item-subtitle",{domProps:{innerHTML:t._s(e.item.job_title)}})],1),i("v-list-item-action",[t.is_item_active(e.item.id)?t._e():i("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("check_circle_outline")]),t.is_item_active(e.item.id)?i("v-icon",{attrs:{color:"success"}},[t._v("check_circle")]):t._e()],1)],1)]}}])},"v-autocomplete",t.$attrs,!1))],1)},n=[],s=(i("6762"),i("2fdb"),i("2909")),o=i("0644"),l=i.n(o),d={name:"MembersDropdown",inheritAttrs:!1,props:{members:Array,memberItems:Array,isLoading:Boolean,multiple:{type:Boolean,default:!0},showOuterIcon:{type:Boolean,default:!1}},data:function(){return{items:[],search:null}},watch:{search:function(t){this.$emit("search",t)},memberItems:function(t){this.items=Object(s["a"])(t)}},methods:{members_selected:function(t){this.$emit("update:members",t)},is_item_active:function(t){return this.members.includes(t)},remove_chip:function(t){var e=l()(this.members);e.splice(t,1),this.$emit("update:members",e)},add_to_selected:function(t){this.is_item_active(t.id)||this.members.push(t.id)},open_add_new_member:function(){this.$event.$emit("open-new-member-dialog",!0)}}},r=d,c=(i("6f9b"),i("cd5d"),i("2877")),u=Object(c["a"])(r,a,n,!1,null,"0e7f9d3c",null);e["a"]=u.exports},bf97:function(t,e,i){"use strict";var a=i("3d8d"),n=i.n(a);n.a},c831:function(t,e,i){},c97a:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[i("v-text-field",t._g(t._b({attrs:{slot:"activator",value:t.value,solo:"","hide-details":"",color:"#657186",readonly:"",width:t.minWidth},slot:"activator"},"v-text-field",t.$attrs,!1),a))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[i("v-date-picker",{attrs:{clearable:"",color:"#657186",max:t.max,min:t.min,"no-title":"",scrollable:""},on:{"click:date":t.dateClick},model:{value:t.picker_date,callback:function(e){t.picker_date=e},expression:"picker_date"}},[i("v-spacer"),t.hasButtons?i("v-btn",{attrs:{text:"",outlined:"",color:"#657186"},on:{click:t.cancel}},[t._v("Cancel")]):t._e(),t.hasButtons?i("v-btn",{attrs:{text:"",outlined:"",color:"#657186"},on:{click:t.save}},[t._v("OK")]):t._e(),t.hasButtons?i("v-btn",{attrs:{text:"",outlined:"",color:"#657186"},on:{click:t.clear}},[t._v("Clear")]):t._e()],1)],1)},n=[],s={name:"DatePicker",inheritAttrs:!1,props:{value:{type:String,default:null},min:{type:String,default:null},max:{type:String,default:null},minWidth:{type:String,default:"290px"},hasButtons:{type:Boolean,default:!0}},data:function(){return{menu:!1,picker_date:null}},watch:{value:function(t){this.picker_date=t}},methods:{save:function(){this.$emit("input",this.picker_date),this.cancel()},cancel:function(){this.menu=!1},clear:function(){this.picker_date=null},dateClick:function(){this.hasButtons||this.save()}}},o=s,l=(i("7653"),i("2877")),d=Object(l["a"])(o,a,n,!1,null,"29eaae64",null);e["a"]=d.exports},cd5d:function(t,e,i){"use strict";var a=i("87f7"),n=i.n(a);n.a},e845:function(t,e,i){"use strict";var a=i("c831"),n=i.n(a);n.a},efa8:function(t,e,i){},f324:function(t,e,i){}}]);
//# sourceMappingURL=chunk-41da139c.1bd172ee.js.map