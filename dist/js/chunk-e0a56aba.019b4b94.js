(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e0a56aba"],{"0ec0":function(t,e,a){"use strict";var s=a("6228"),i=a.n(s);i.a},"28c8":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"task-dialog"},[a("custom-dialog",{ref:"dialog",attrs:{open:t.computedDialog,title:t.dialogTitle,maxWidth:850},on:{"update:open":function(e){t.computedDialog=e},button1:t.clear_and_close},scopedSlots:t._u([{key:"content",fn:function(){return[a("v-row",{staticClass:"custom-dialog",attrs:{wrap:""}},[a("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[a("v-select",{staticClass:"d-field",attrs:{items:t.milestones.items,"item-text":"title","item-value":"id",label:"Milestone",placeholder:"Select Milestone",filled:"",color:"#657186","hide-details":""},scopedSlots:t._u([{key:"append-outer",fn:function(){return[a("v-btn",{staticClass:"btn-add-milestone",attrs:{icon:"",large:""},on:{click:t.open_add_milestone_dialog}},[a("v-icon",[t._v("mdi-plus")])],1)]},proxy:!0}]),model:{value:t.milestones.selected,callback:function(e){t.$set(t.milestones,"selected",e)},expression:"milestones.selected"}})],1),a("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[a("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{label:"Add task title",filled:"","hide-details":"",color:"#657186"},model:{value:t.title,callback:function(e){t.title="string"===typeof e?e.trim():e},expression:"title"}})],1),a("v-col",{staticClass:"pt-0 pl-4",attrs:{cols:"12",md:"6"}},[a("date-picker",{staticClass:"dialog__date d-field",attrs:{label:"Start Date","prepend-inner-icon":"event",readonly:"",max:t.end_date},model:{value:t.start_date,callback:function(e){t.start_date=e},expression:"start_date"}})],1),a("v-col",{staticClass:"pt-0 pr-4",attrs:{cols:"12",md:"6"}},[a("date-picker",{staticClass:"dialog__date d-field",attrs:{label:"End Date","prepend-inner-icon":"event",readonly:"",min:t.start_date},model:{value:t.end_date,callback:function(e){t.end_date=e},expression:"end_date"}})],1),a("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[a("members-dropdown",{staticClass:"task-member",attrs:{members:t.members.selected,"member-items":t.members.items,"is-loading":t.members.loading},on:{"update:members":function(e){return t.$set(t.members,"selected",e)},search:function(e){return t.filter_dropdown_items("members",e)}}})],1),a("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[a("rich-editor",{staticClass:"task-description",attrs:{placeholder:"Task Details"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)],1)]},proxy:!0}])},[a("template",{slot:"button2"},[a("v-btn",{attrs:{loading:t.btnloading},on:{click:t.save}},[t._v("Save")])],1)],2),a("milestone-tab-dialog",{ref:"add_milestone_dialog",attrs:{dialog:t.add_milestone_dialog,"dialog-title":"Add New Milestone"},on:{"update:dialog":function(e){t.add_milestone_dialog=e},save:t.add_new_milestone}})],1)},i=[],n=(a("6762"),a("2fdb"),a("ac6a"),a("5df3"),a("768b")),o=(a("96cf"),a("3b8d")),l=(a("c5f6"),a("fcce")),r=a("0644"),d=a.n(r),c=a("1be9"),_=a("c97a"),u=a("4ad3"),f=a("bc29"),p=a("57e5"),h=a("4347"),m={components:{DatePicker:_["a"],RichEditor:u["a"],MembersDropdown:f["a"],CustomDialog:p["a"],MilestoneTabDialog:h["a"]},props:{id:[Number,String],dialog:Boolean,dialogTitle:String,task:Object,milestoneStartDate:String},data:function(){return{btnloading:!1,open:!1,title:null,description:null,status:"open",start_date:null,end_date:null,members:{selected:[],all_items:[],items:[],loading:!1},milestones:{selected:null,items:[]},add_milestone_dialog:!1}},mounted:function(){var t=this;this.$event.$on("btnloading_off",(function(e){return t.btnloading=e}))},computed:{computedDialog:{get:function(){return this.dialog},set:function(t){!t&&this.$emit("close"),this.$emit("update:dialog",t)}}},watch:{dialog:{handler:function(t){this.open=t,!t||this.members.all_items.length||this.milestones.items.length||this.fill_dropdowns()}},open:function(t){this.$emit("update:dialog",t)}},methods:{cancel:function(){this.dialog=!1},open_dialog:function(){this.fill_dropdowns(),this.$refs.dialog.open_dialog(),this.task&&this.update_fields(this.task)},save:function(){this.btnloading=!0;var t={milestone_id:this.milestones.selected,title:this.title,description:this.description,status:this.status,started_at:this.start_date,end_at:this.end_date,assigned:this.members.selected};this.$emit("save",t)},update_fields:function(t){var e=d()(t);this.title=e.title,this.description=e.description,this.start_date=e.started_at,this.end_date=e.end_at,this.milestones.selected=e.milestone_id,this.$set(this.members,"selected",e.assignee)},clear_and_close:function(){this.title=this.description=this.start_date=this.end_date=null,this.members.selected=[],this.milestones.selected=null,this.cancel()},fill_dropdowns:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,a,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,Promise.all([l["a"].get_project_members(this.id),l["a"].get_project_milestones(this.id)]);case 3:e=t.sent,a=Object(n["a"])(e,2),s=a[0],i=a[1],this.loading=!1,this.members.all_items=s.data,this.members.items=s.data,this.milestones.items=i.data;case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),filter_dropdown_items:function(t,e){var a=d()(this[t].all_items);if(e){var s=a.filter((function(t){return t.first_name.toLowerCase().includes(e.toLowerCase())||t.last_name.toLowerCase().includes(e.toLowerCase())}));this.$set(this[t],"items",s)}else this[t].items=a},open_add_milestone_dialog:function(){this.add_milestone_dialog=!0},add_new_milestone:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["a"].post("api/project/".concat(this.id,"/milestone"),e).then((function(t){var e=t.data;a.milestones.items.push(e),a.milestones.selected=e,a.add_milestone_dialog=!1,a.$event.$emit("open_snackbar","New Milestone added successfully")})).finally((function(){a.$event.$emit("btnloading_off",!1)}));case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}},k=m,v=(a("43b2"),a("2877")),g=Object(v["a"])(k,s,i,!1,null,"9a9efdaa",null);e["a"]=g.exports},3436:function(t,e,a){},4347:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("custom-dialog",{ref:"dialog",attrs:{title:t.dialogTitle,open:t.open,"button2-text":"Save"},on:{"update:open":function(e){t.open=e},button1:t.cancel,button2:t.save},scopedSlots:t._u([{key:"content",fn:function(){return[a("v-row",[a("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[a("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{filled:"","hide-details":"",color:"#657186",label:"Add milestone title"},model:{value:t.title,callback:function(e){t.title="string"===typeof e?e.trim():e},expression:"title"}})],1),a("v-col",{staticClass:"pt-0",attrs:{cols:"12",md:"6"}},[a("date-picker",{staticClass:"dialog__datepicker d-field",attrs:{filled:"","hide-details":"",color:"#657186",label:"Start Date","prepend-icon":"event",readonly:"",value:t.start_date,max:t.end_date},on:{input:t.start_date_changed}})],1),a("v-col",{staticClass:"pt-0 pr-4",attrs:{cols:"12",md:"6"}},[a("date-picker",{staticClass:"dialog__datepicker d-field",attrs:{filled:"","hide-details":"",color:"#657186",label:"End Date","prepend-icon":"event",readonly:"",value:t.end_date,min:t.start_date},on:{input:t.end_date_changed}})],1),a("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[a("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{filled:"","hide-details":"",color:"#657186",label:"Add days",min:"0",type:"number"},model:{value:t.days,callback:function(e){t.days=t._n(e)},expression:"days"}})],1)],1)]},proxy:!0}])})},i=[],n=a("c97a"),o=a("c1df"),l=a.n(o),r=a("57e5"),d={name:"MilestoneTabDialog",components:{DatePicker:n["a"],CustomDialog:r["a"]},props:{dialog:Boolean,dialogTitle:String,isEditDialog:Boolean,fieldsToEdit:{type:Object,default:function(){}}},data:function(){return{open:!1,title:null,start_date:null,end_date:null,status:"active",days_init_value:0}},computed:{days:{get:function(){return this.start_date&&this.end_date?l()(this.end_date).diff(l()(this.start_date),"days"):this.days_init_value},set:function(t){this.start_date||this.end_date?(this.start_date?this.end_date=l()(this.start_date).add(t,"days").format("YYYY-MM-DD"):this.start_date=l()(this.end_date).subtract(t,"days").format("YYYY-MM-DD"),this.days_init_value=t):this.days_init_value=t}}},watch:{dialog:function(t){this.open=t},open:function(t){this.$emit("update:dialog",t)},fieldsToEdit:{handler:function(t){this.isEditDialog&&this.update_fields(t)},deep:!0}},methods:{end_date_changed:function(t){this.end_date=t,this.days&&t&&(this.start_date=l()(t).subtract(this.days,"days").format("YYYY-MM-DD"))},start_date_changed:function(t){this.start_date=t,this.days&&t&&(this.end_date=l()(t).add(this.days,"days").format("YYYY-MM-DD"))},cancel:function(){this.open=!1},save:function(){var t={title:this.title,status:this.status,days:this.days,started_at:this.start_date,end_at:this.end_date};this.$emit("save",t)},update_fields:function(t){var e=t.fields,a=Object.assign({},e);this.title=a.title,this.status=a.status,this.days=a.days,this.start_date=a.started_at,this.end_date=a.end_at},clear_and_close:function(){Object.assign(this.$data,this.$options.data.apply(this)),this.cancel()}}},c=d,_=(a("c5f9"),a("2877")),u=Object(_["a"])(c,s,i,!1,null,"2222ebd6",null);e["a"]=u.exports},"43b2":function(t,e,a){"use strict";var s=a("7a7e"),i=a.n(s);i.a},"469f":function(t,e,a){a("6c1c"),a("1654"),t.exports=a("7d7b")},5812:function(t,e,a){},"5d73":function(t,e,a){t.exports=a("469f")},"5df3":function(t,e,a){"use strict";var s=a("02f4")(!0);a("01f9")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,a=this._i;return a>=e.length?{value:void 0,done:!0}:(t=s(e,a),this._i+=t.length,{value:t,done:!1})}))},6228:function(t,e,a){},"71b5":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tasks-card"},[a("div",{staticClass:"tasks__content"},[a("dash-card",{staticClass:"task__content",attrs:{title:"Tasks","view-more-btn":!0,dashboard:t.dashboard},on:{close:function(e){return t.$emit("close")},expand:t.expand}},[a("div",{staticClass:"content-wrapper",attrs:{slot:"content"},slot:"content"},[a("div",{staticClass:"tasks-items"},[a("tasks-content")],1)]),a("div",{attrs:{slot:"footer"},slot:"footer"},[t.noMoreData?t._e():a("v-btn",{staticClass:"view__more_btn",attrs:{text:"",loading:t.btnloading},on:{click:t.loadMore}},[t._v(" VIEW MORE ")])],1)]),a("TaskDialog",{ref:"add_task_dialog",attrs:{"dialog-title":"Add Task",id:t.project_id},on:{save:function(e){return t.create_new_task(e)},close:function(e){return t.closeAddDialog()}}}),a("TaskDialog",{ref:"edit_task_dialog",attrs:{id:t.project_id,task:t.task,"dialog-title":"Edit Task"},on:{save:function(e){return t.edit_task(e)},close:function(e){return t.closeEditDialog()}}}),a("DeleteDialog",{attrs:{"open-dialog":t.delete_task_dialog,title:"Delete Task","text-content":"Are you sure you want to delete this task?"},on:{"update:openDialog":function(e){t.delete_task_dialog=e},"update:open-dialog":function(e){t.delete_task_dialog=e},delete:function(e){return t.delete_task()}}}),a("ConfirmDialog",{attrs:{"open-dialog":t.confirm_mark_as_complete_dialog,title:"Confirmation required!","confirm-button-text":"Yes","text-content":"Mark task as completed?"},on:{"update:openDialog":function(e){t.confirm_mark_as_complete_dialog=e},"update:open-dialog":function(e){t.confirm_mark_as_complete_dialog=e},confirm:function(e){return t.confirm_mark_as_complete_task()}}}),a("TaskViewDialog",{ref:"view_task_dialog",attrs:{task:t.task},on:{"close-task-preview":t.closeViewDialog}})],1)])},i=[],n=(a("8e6e"),a("ac6a"),a("456d"),a("20d6"),a("bd86")),o=(a("c5f6"),a("2f62")),l=a("e06e"),r=(a("c1df"),a("0644"),a("1be9"),a("fcce")),d=a("6943"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tasks-content"},[a("v-tabs",{staticClass:"task__tabs",attrs:{centered:"",grow:"","hide-slider":""},model:{value:t.active_tab,callback:function(e){t.active_tab=e},expression:"active_tab"}},t._l(t.tabs,(function(e){return a("v-tab",{key:e.name,attrs:{href:"#"+e.name}},[a("span",[t._v(t._s(e.name))])])})),1),a("v-tabs-items",{model:{value:t.active_tab,callback:function(e){t.active_tab=e},expression:"active_tab"}},t._l(t.tabs,(function(e){return a("v-tab-item",{key:e.id,attrs:{value:e.name}},[a("v-card",{attrs:{flat:""}},[t.active_tab===e.name?a("tasks-tab",{attrs:{tab:t.active_tab}}):t._e()],1)],1)})),1)],1)},_=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-col",{staticClass:"pa-0 ma-0",attrs:{md:"12"}},[t.loading?a("div",{staticClass:"loading"},[a("v-progress-linear",{attrs:{indeterminate:!0}})],1):t._e(),!t.loading&&t.tasks_are_empty?a("div",{staticClass:"no-data"},[a("div",{staticClass:"empty-content"},[a("v-icon",{staticClass:"empty-icon"},[t._v("list")]),a("p",{staticClass:"empty-text"},[t._v("List Empty")])],1)]):a("div",{staticClass:"tasks-tab"},[a("task-chips",{attrs:{"count-all":t.total,"count-completed":t.counter.completed,"count-pending":t.counter.pending,"count-behind":t.counter.behind,"count-open":t.counter.open,"active-chip":t.active_chip},on:{"update:activeChip":function(e){t.active_chip=e},"update:active-chip":function(e){t.active_chip=e}}}),a("task-custom-table",{attrs:{tasks:t.filtered_tasks,tab:t.tab}})],1)])},f=[],p=a("2f68"),h=a("3293");function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function k(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var v={name:"TasksTab",components:{TaskChips:p["a"],TaskCustomTable:h["a"]},props:{tab:String},data:function(){return{active_chip:"all"}},computed:k({},Object(o["c"])("taskCards",["total","tasks","counter","loading"]),{filtered_tasks:function(){var t=this;return"all"===this.active_chip?this.tasks:this.tasks.filter((function(e){return e.status.toLowerCase()===t.active_chip}))},tasks_are_empty:function(){return!this.loading&&0===this.tasks.length}}),watch:{active_chip:{handler:function(t){}},tab:{handler:function(t){this.get_tasks(t)},immediate:!0}},methods:k({},Object(o["b"])("taskCards",["get_tasks"]))},g=v,b=(a("909d"),a("2877")),y=Object(b["a"])(g,u,f,!1,null,"4f73c37d",null),w=y.exports,$={name:"TasksContent",components:{TasksTab:w},props:{id:[Number,String]},data:function(){return{active_tab:"My Tasks"}},computed:{user:function(){return this.$store.getters.user},tabs:function(){var t=[{name:"My Tasks",help:"Tasks that are assigned to you "},{name:"All Tasks",help:"Tasks for all members in this project"}];return this.user.is_admin||this.$_permissions.get("tasks_own")||t.splice(1),t}}},C=$,x=(a("0ec0"),a("f01b"),Object(b["a"])(C,c,_,!1,null,"4b75637a",null)),D=x.exports,j=a("28c8"),O=a("5b70"),T=a("ab1d"),S=a("84a4");function M(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function E(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?M(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):M(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var P={name:"TasksCard",mixin:[l["a"]],components:{DashCard:d["a"],TasksContent:D,TaskDialog:j["a"],DeleteDialog:O["a"],ConfirmDialog:T["a"],TaskViewDialog:S["a"]},props:{id:[Number,String],dashboard:Boolean,page:{type:String,default:"dashboard"}},beforeDestroy:function(){this.$event.$off("task-row-clicked")},computed:E({},Object(o["c"])("taskCards",["total","loading","see_more_url","btnloading"]),{active_task_id:{get:function(){if(this.task)return this.task.id},set:function(t){return t}},tab_tasks:function(){return"My Tasks"===this.selected_tab?this.tasks_own:this.all_tasks},logged_user:function(){return this.$store.getters.user},project_id:function(){return this.$store.getters["taskCards/id"]},noMoreData:function(){return!this.see_more_url}}),data:function(){return{tasks_own:[],all_tasks:[],selected_tab:"My Tasks",task:null,add_task_dialog:!1,edit_task_dialog:!1,confirm_mark_as_complete_dialog:!1,delete_task_dialog:!1}},created:function(){var t=this;this.$route.query.id&&(this.active_task_id=this.$route.query.id),this.id&&this.set_id(this.id),this.set_page(this.page),this.$event.$on("task-row-clicked",(function(e){return t.set_and_open_side_preview(e)})),this.$event.$on("task-card-tab",(function(e){return t.selected_tab=e})),this.$event.$on("task-mark-as-complete",(function(e){return t.set_and_mark_complete_task(e)})),this.$event.$on("task-add",(function(){return t.set_and_add_task()})),this.$event.$on("task-edit",(function(e){return t.set_and_edit_task(e)})),this.$event.$on("task-delete",(function(e){return t.set_and_delete_task(e)})),this.$event.$on("task-view",(function(e){return t.set_and_view_task(e)}))},methods:E({},Object(o["b"])("taskCards",["see_more","get_tasks"]),{},Object(o["d"])("taskCards",["set_id","set_page","add_task","del_task","replace_task"]),{loadMore:function(){this.see_more()},get_own_tasks:function(){var t=this;this.tasks_own.length||(this.loading=!0,r["a"].get_own_tasks(this.id).then((function(e){var a=e.data;return t.tasks_own=a})).finally((function(){return t.loading=!1})))},get_all_tasks:function(){var t=this;this.all_tasks.length||(this.loading=!0,r["a"].get_all_tasks(this.id).then((function(e){var a=e.data;return t.all_tasks=a})).finally((function(){return t.loading=!1})))},create_new_task:function(t){var e=this;r["a"].create_new_task(t).then((function(t){var a=t.data;e.add_task(a),e.$refs.add_task_dialog.clear_and_close(),e.$event.$emit("open_snackbar","New Task added successfully"),e.$event.$emit("btnloading_off",!1)}))},edit_task:function(t){var e=this;r["a"].edit_task(this.task.id,t).then((function(t){var a=t.data;e.update_task(a,e.task.id,"all_tasks"),e.update_task(a,e.task.id,"tasks_own"),e.$refs.edit_task_dialog.$refs.dialog.clear_and_close(),e.$event.$emit("open_snackbar","Task updated successfully"),e.$event.$emit("btnloading_off",!1),e.$event.$emit("task-is-updated",a)}))},delete_task:function(){var t=this;r["a"].delete_task(this.task.id).then((function(){t.remove_task(t.task),t.$event.$emit("btnloading_off",!1)}))},update_task:function(t,e,a){if(this.task=t,"all_tasks"===a){var s=this.all_tasks.findIndex((function(t){return t.id===e}));~s&&this.all_tasks.splice(s,1,t)}else{var i=this.tasks_own.findIndex((function(t){return t.id===e}));~i&&this.tasks_own.splice(i,1,t)}},remove_task:function(t){this.del_task(t),this.delete_dialog=!1,this.$event.$emit("open_snackbar","Task deleted successfully"),this.set_active_task_after_delete()},set_active_task_after_delete:function(){"My Tasks"===this.selected_tab?this.tasks_own.length?this.task=this.tasks_own[0]:this.task=null:this.all_tasks.length?this.task=this.all_tasks[0]:this.task=null},handle_dropdown_action:function(t){var e="open_".concat(t,"_task_dialog");this[e]()},open_add_task_dialog:function(){this.$refs.add_task_dialog.open_dialog()},open_edit_task_dialog:function(){this.$refs.edit_task_dialog.open_dialog()},closeEditDialog:function(){this.$refs.edit_task_dialog.$refs.dialog.clear_and_close()},closeAddDialog:function(){this.$refs.add_task_dialog.$refs.dialog.clear_and_close()},closeViewDialog:function(){this.$refs.view_task_dialog.$refs.dialog.clear_and_close()},open_delete_task_dialog:function(){this.delete_task_dialog=!0},open_mark_as_complete_task_dialog:function(){this.confirm_mark_as_complete_dialog=!0},confirm_mark_as_complete_task:function(){var t=this,e={status:"completed"};r["a"].mark_as_complete_task(this.task.id,e).then((function(e){var a=e.data;t.confirm_mark_as_complete_dialog=!1,t.$event.$emit("open_snackbar","Task is completed"),t.update_task(a,t.task.id,"all_tasks"),t.update_task(a,t.task.id,"tasks_own"),t.replace_task(a),t.$event.$emit("btnloading_off",!1),t.$event.$emit("task-is-updated",a)}))},set_and_delete_task:function(t){this.task=t,this.set_id(t.project_id),this.open_delete_task_dialog()},set_and_edit_task:function(t){this.task=t,this.set_id(t.project_id),this.open_edit_task_dialog()},set_and_mark_complete_task:function(t){this.task=t,this.set_id(t.project_id),this.open_mark_as_complete_task_dialog()},set_and_view_task:function(t){this.task=t,this.set_id(t.project_id),this.$refs.view_task_dialog.open_dialog()},set_and_add_task:function(){this.set_id(this.id),this.open_add_task_dialog()},set_and_open_side_preview:function(t){this.task=t,"project-preview"===this.page?this.$event.$emit("show-task-side-preview",t):this.set_and_view_task(t)},expand:function(){this.$router.push({name:"expanded-tasks"})}})},Y=P,A=Object(b["a"])(Y,s,i,!1,null,null,null);e["a"]=A.exports},"768b":function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var s=a("178b"),i=a("5d73"),n=a.n(i),o=a("c8bb"),l=a.n(o);function r(t,e){if(l()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t)){var a=[],s=!0,i=!1,o=void 0;try{for(var r,d=n()(t);!(s=(r=d.next()).done);s=!0)if(a.push(r.value),e&&a.length===e)break}catch(c){i=!0,o=c}finally{try{s||null==d["return"]||d["return"]()}finally{if(i)throw o}}return a}}var d=a("1df6");function c(t,e){return Object(s["a"])(t)||r(t,e)||Object(d["a"])()}},"7a7e":function(t,e,a){},"7d7b":function(t,e,a){var s=a("e4ae"),i=a("7cd6");t.exports=a("584a").getIterator=function(t){var e=i(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return s(e.call(t))}},8098:function(t,e,a){},8153:function(t,e,a){"use strict";var s=a("cda5"),i=a.n(s);i.a},"84a4":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.task?a("v-layout",{attrs:{"justify-center":""}},[a("v-dialog",{attrs:{scrollable:"","max-width":"800",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{attrs:{tile:""}},[a("v-toolbar",{attrs:{dense:"",dark:"",color:"#3b589e"}},[a("v-toolbar-title",[t._v("Task Preview : "+t._s(t._f("ucwords")(t.task.title)))]),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{icon:"",dark:""},on:{click:t.close_dialog}},[a("v-icon",[t._v("close")])],1)],1)],1),a("v-card-text",{staticClass:"pa-0",staticStyle:{height:"600px"}},[a("preview-card",{key:t.componentKey,attrs:{id:t.task.project_id,"active-id":t.task.id},on:{"dropdown-action":t.handle_dropdown_action}})],1)],1)],1)],1):t._e()},i=[],n=(a("fcce"),a("2f62"),a("0644"),a("3364")),o=a("71b5"),l=a("28c8"),r=a("5b70"),d=a("ab1d"),c={name:"TaskViewDialog",components:{PreviewCard:n["a"],TasksCard:o["a"],TaskDialog:l["a"],DeleteDialog:r["a"],ConfirmDialog:d["a"]},props:{task:{type:Object,default:null}},created:function(){this.task&&(this.id=this.task.id)},data:function(){return{dialog:!1,delete_task_dialog:!1,confirm_mark_as_complete_dialog:!1,id:null,componentKey:0}},methods:{forcerender:function(){this.componentKey+=1},open_dialog:function(){this.dialog=!0},close_dialog:function(){this.dialog=!1},handle_dropdown_action:function(t){var e="open_".concat(t,"_task_dialog");this[e]()},open_delete_task_dialog:function(){this.$event.$emit("task-delete",this.task)},open_edit_task_dialog:function(){this.$event.$emit("task-edit",this.task)},open_mark_as_complete_task_dialog:function(){this.$event.$emit("task-mark-as-complete",this.task)}}},_=c,u=(a("8153"),a("bd3f"),a("2877")),f=Object(u["a"])(_,s,i,!1,null,"44b8e40c",null);e["a"]=f.exports},"909d":function(t,e,a){"use strict";var s=a("8098"),i=a.n(s);i.a},"91f9":function(t,e,a){},9891:function(t,e,a){"use strict";var s=a("5812"),i=a.n(s);i.a},bd3f:function(t,e,a){"use strict";var s=a("91f9"),i=a.n(s);i.a},c5f9:function(t,e,a){"use strict";var s=a("c905"),i=a.n(s);i.a},c905:function(t,e,a){},c97a:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-text-field",t._g(t._b({attrs:{slot:"activator",value:t.value,solo:"","hide-details":"",color:"#657186",readonly:"",width:t.minWidth},slot:"activator"},"v-text-field",t.$attrs,!1),s))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-date-picker",{attrs:{clearable:"",color:"#657186",max:t.max,min:t.min,"no-title":"",scrollable:""},model:{value:t.picker_date,callback:function(e){t.picker_date=e},expression:"picker_date"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",outlined:"",color:"#657186"},on:{click:t.cancel}},[t._v("Cancel")]),a("v-btn",{attrs:{text:"",outlined:"",color:"#657186"},on:{click:t.save}},[t._v("OK")]),a("v-btn",{attrs:{text:"",outlined:"",color:"#657186"},on:{click:t.clear}},[t._v("Clear")])],1)],1)},i=[],n={name:"DatePicker",inheritAttrs:!1,props:{value:{type:String,default:null},min:{type:String,default:null},max:{type:String,default:null},minWidth:{type:String,default:"290px"}},data:function(){return{menu:!1,picker_date:null}},watch:{value:function(t){this.picker_date=t}},methods:{save:function(){this.$emit("input",this.picker_date),this.cancel()},cancel:function(){this.menu=!1},clear:function(){this.picker_date=null}}},o=n,l=(a("9891"),a("2877")),r=Object(l["a"])(o,s,i,!1,null,"11a52680",null);e["a"]=r.exports},cda5:function(t,e,a){},f01b:function(t,e,a){"use strict";var s=a("3436"),i=a.n(s);i.a}}]);
//# sourceMappingURL=chunk-e0a56aba.019b4b94.js.map