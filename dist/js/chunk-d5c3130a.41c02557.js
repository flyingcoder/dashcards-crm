(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d5c3130a"],{"075a":function(t,e,a){"use strict";var s=a("991f"),n=a.n(s);n.a},"07be":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tasks-tab"},[a("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{indeterminate:!0}}),a("TaskDialog",{ref:"add_task_dialog",attrs:{dialog:t.add_task_dialog,"dialog-title":"Add Task",id:t.id},on:{"update:dialog":function(e){t.add_task_dialog=e},save:t.create_new_task,close:function(e){t.add_task_dialog=!1}}}),a("TaskDialog",{ref:"edit_task_dialog",attrs:{id:t.id,task:t.task,"dialog-title":"Edit Task"},on:{save:t.edit_task,close:t.closeEditDialog}}),a("DeleteDialog",{attrs:{"open-dialog":t.delete_dialog,title:"Delete Task","text-content":"Are you sure you want to delete this task?"},on:{"update:openDialog":function(e){t.delete_dialog=e},"update:open-dialog":function(e){t.delete_dialog=e},delete:t.delete_task}}),a("ConfirmDialog",{attrs:{"open-dialog":t.confirm_mark_as_complete_dialog,title:"Confirmation required!","confirm-button-text":"Yes","text-content":"Mark task as completed?"},on:{"update:openDialog":function(e){t.confirm_mark_as_complete_dialog=e},"update:open-dialog":function(e){t.confirm_mark_as_complete_dialog=e},confirm:t.confirm_mark_as_complete_task}}),a("v-layout",{staticClass:"actions",attrs:{"justify-end":""}},[a("v-btn",{attrs:{color:"#3b589e",dark:"",fab:"",small:"",title:"Add New Task"},on:{click:function(e){t.add_task_dialog=!0}}},[a("v-icon",[t._v("add")])],1)],1),a("div",{staticClass:"cards"},[a("tasks-card",{attrs:{id:t.id}}),t.active_task_id?a("preview-card",{attrs:{id:t.id,"active-id":t.active_task_id},on:{"dropdown-action":t.handle_dropdown_action}}):t._e()],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"empty-task"},[a("div",{staticClass:"empty-content"},[a("div",{staticClass:"empty-svg"},[a("svg",{attrs:{"enable-background":"new 0 0 431.998 431.998",version:"1.1",viewBox:"0 0 432 432","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg"}},[a("rect",{attrs:{x:"80.102",y:"192",width:"192",height:"16"}}),a("polygon",{attrs:{points:"80.102 240 80.102 256 235.82 256 251.82 240"}}),a("polygon",{attrs:{points:"80.102 288 80.102 304 187.81 304 203.81 288"}}),a("rect",{attrs:{x:"80.102",y:"336",width:"80",height:"16"}}),a("path",{attrs:{d:"m411.21 171.11-22.628-22.626c-6.245-6.245-16.382-6.246-22.627-1e-3 -57.747 57.747-115.65 115.65-173.86 173.85v45.662c38.518 0 28.774 0.018 44.915-0.068 8.351-8.351 45.207-45.206 83.085-83.083v115.15c0 8.836-7.163 16-16 16h-256c-8.837 0-16-7.164-16-16v-288c0-8.837 7.163-16 16-16h32.003v32.001h192v-32l32-1e-3c8.837 0 16 7.163 16 16v59.426l16-16.111v-43.315c0-17.674-14.327-32-32-32h-34.764c-5.138-14.522-17.041-25.849-31.944-30.134-7.367-2.118-13.037-7.788-15.156-15.155-5.765-20.046-24.238-34.709-46.137-34.709-21.898 0-40.37 14.663-46.134 34.706-2.122 7.376-7.806 13.039-15.181 15.164-14.897 4.293-26.81 15.608-31.942 30.128h-34.743c-17.673 0-32 14.326-32 32v288c0 17.673 14.327 32 32 32h256c17.673 0 32-14.327 32-32v-131.15c34.399-34.398 66.437-66.437 75.11-75.111 6.245-6.246 6.245-16.383 1e-3 -22.628zm-315.11-75.364c0.11-14.066 9.614-26.606 23.112-30.496 12.71-3.662 22.478-13.426 26.128-26.116 3.917-13.62 16.565-23.13 30.758-23.13 14.194 0 26.842 9.51 30.758 23.13 3.652 12.698 13.413 22.459 26.111 26.11 13.618 3.918 23.13 16.566 23.13 30.759v16h-160v-16.257zm134.25 256.22c-4.149 0.023-5.848 0.03-11.589 0.032l-10.661-10.661v-12.375l10.778-10.778 22.627 22.627-11.155 11.155zm22.468-22.468-22.627-22.627 101.82-101.82 22.627 22.628-101.82 101.82zm113.14-113.14-22.627-22.627 11.314-11.314 22.628 22.627-11.315 11.314zm22.628-22.626-22.628-22.628 11.314-11.313 22.628 22.627-11.314 11.314z"}}),a("circle",{attrs:{cx:"176.34",cy:"48",r:"12"}})])]),a("div",{staticClass:"empty-btn"},[a("v-btn",{attrs:{large:"",dark:"",color:"#3b589e"},on:{click:function(e){t.add_task_dialog=!0}}},[t._v("Add Task ")])],1)])])],1)},n=[],i=(a("8e6e"),a("ac6a"),a("456d"),a("20d6"),a("bd86")),o=(a("c5f6"),a("fcce")),r=a("2f62"),c=a("71b5"),l=a("3364"),d=a("28c8"),u=a("5b70"),_=a("ab1d");function f(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?f(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var p={name:"TasksTab",components:{TasksCard:c["a"],PreviewCard:l["a"],TaskDialog:d["a"],DeleteDialog:u["a"],ConfirmDialog:_["a"]},props:{id:[Number,String]},provide:function(){var t=this,e={};return Object.defineProperty(e,"loading",{get:function(){return t.loading}}),{properties:e,bodyMaxHeight:"1200px"}},data:function(){return{tasks_own:[],all_tasks:[],selected_tab:"My Tasks",task:null,add_task_dialog:!1,delete_dialog:!1,confirm_mark_as_complete_dialog:!1}},computed:m({},Object(r["c"])("taskCards",["total","loading"]),{active_task_id:{get:function(){if(this.task)return this.task.id},set:function(t){return console.log(t),t}},tab_tasks:function(){return"My Tasks"===this.selected_tab?this.tasks_own:this.all_tasks},logged_user:function(){return this.$store.getters.user}}),watch:{selected_tab:{handler:function(t){},immediate:!0}},created:function(){var t=this;this.$event.$on("task-row-clicked",(function(e){return t.task=e})),this.$event.$on("task-card-tab",(function(e){return t.selected_tab=e})),this.$route.query.id&&(this.active_task_id=this.$route.query.id),this.$event.$on("task-mark-as-complete",(function(e){return t.set_and_mark_complete_task(e)})),this.$event.$on("task-edit",(function(e){return t.set_and_edit_task(e)})),this.$event.$on("task-delete",(function(e){return t.set_and_delete_task(e)}))},beforeDestroy:function(){this.$event.$off("task-row-clicked")},methods:m({},Object(r["d"])("taskCards",["add_task","del_task","replace_task"]),{get_own_tasks:function(){var t=this;this.tasks_own.length||(this.loading=!0,o["a"].get_own_tasks(this.id).then((function(e){var a=e.data;return t.tasks_own=a})).finally((function(){return t.loading=!1})))},get_all_tasks:function(){var t=this;this.all_tasks.length||(this.loading=!0,o["a"].get_all_tasks(this.id).then((function(e){var a=e.data;return t.all_tasks=a})).finally((function(){return t.loading=!1})))},create_new_task:function(t){var e=this;o["a"].create_new_task(t).then((function(t){var a=t.data;e.add_task(a),e.$refs.add_task_dialog.clear_and_close(),e.$event.$emit("open_snackbar","New Task added successfully"),e.$event.$emit("btnloading_off",!1)}))},edit_task:function(t){var e=this;o["a"].edit_task(this.task.id,t).then((function(t){var a=t.data;e.update_task(a,e.task.id,"all_tasks"),e.update_task(a,e.task.id,"tasks_own"),e.$refs.edit_task_dialog.$refs.dialog.clear_and_close(),e.$event.$emit("open_snackbar","Task updated successfully"),e.$event.$emit("btnloading_off",!1)}))},delete_task:function(){var t=this;o["a"].delete_task(this.task.id).then((function(){t.remove_task(t.task),t.$event.$emit("btnloading_off",!1)}))},update_task:function(t,e,a){if(this.task=t,"all_tasks"===a){var s=this.all_tasks.findIndex((function(t){return t.id===e}));~s&&this.all_tasks.splice(s,1,t)}else{var n=this.tasks_own.findIndex((function(t){return t.id===e}));~n&&this.tasks_own.splice(n,1,t)}},remove_task:function(t){this.del_task(t),this.delete_dialog=!1,this.$event.$emit("open_snackbar","Task deleted successfully"),this.set_active_task_after_delete()},set_active_task_after_delete:function(){"My Tasks"===this.selected_tab?this.tasks_own.length?this.task=this.tasks_own[0]:this.task=null:this.all_tasks.length?this.task=this.all_tasks[0]:this.task=null},handle_dropdown_action:function(t){var e="open_".concat(t,"_task_dialog");this[e]()},open_edit_task_dialog:function(){this.$refs.edit_task_dialog.open_dialog()},closeEditDialog:function(){this.$refs.edit_task_dialog.$refs.dialog.clear_and_close()},open_delete_task_dialog:function(){this.delete_dialog=!0},open_mark_as_complete_task_dialog:function(){this.confirm_mark_as_complete_dialog=!0},confirm_mark_as_complete_task:function(){var t=this,e={status:"completed"};o["a"].mark_as_complete_task(this.task.id,e).then((function(e){var a=e.data;t.confirm_mark_as_complete_dialog=!1,t.$event.$emit("open_snackbar","Task is completed"),t.update_task(a,t.task.id,"all_tasks"),t.update_task(a,t.task.id,"tasks_own"),t.replace_task(a),t.$event.$emit("btnloading_off",!1)}))},set_and_delete_task:function(t){this.task=t,this.open_delete_task_dialog()},set_and_edit_task:function(t){this.task=t,this.open_edit_task_dialog()},set_and_mark_complete_task:function(t){this.task=t,this.open_mark_as_complete_task_dialog()}})},h=p,v=(a("11c5"),a("2877")),k=Object(v["a"])(h,s,n,!1,null,"13f91b63",null);e["default"]=k.exports},"0823":function(t,e,a){},1141:function(t,e,a){},"11c5":function(t,e,a){"use strict";var s=a("1141"),n=a.n(s);n.a},"28c8":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"task-dialog"},[a("custom-dialog",{ref:"dialog",attrs:{open:t.computedDialog,title:t.dialogTitle},on:{"update:open":function(e){t.computedDialog=e},button1:t.clear_and_close},scopedSlots:t._u([{key:"content",fn:function(){return[a("v-row",{staticClass:"custom-dialog",attrs:{wrap:""}},[a("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[a("v-select",{staticClass:"d-field",attrs:{items:t.milestones.items,"item-text":"title","item-value":"id",label:"Milestone",placeholder:"Select Milestone",filled:"",color:"#657186","hide-details":""},model:{value:t.milestones.selected,callback:function(e){t.$set(t.milestones,"selected",e)},expression:"milestones.selected"}})],1),a("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[a("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{label:"Add task title",filled:"","hide-details":"",color:"#657186"},model:{value:t.title,callback:function(e){t.title="string"===typeof e?e.trim():e},expression:"title"}})],1),a("v-col",{staticClass:"pt-0",attrs:{cols:"12",md:"6"}},[a("date-picker",{staticClass:"dialog__date d-field",attrs:{label:"Start Date","prepend-icon":"event",readonly:"",max:t.end_date},model:{value:t.start_date,callback:function(e){t.start_date=e},expression:"start_date"}})],1),a("v-col",{staticClass:"pt-0 pr-4",attrs:{cols:"12",md:"6"}},[a("date-picker",{staticClass:"dialog__date d-field",attrs:{label:"End Date","prepend-icon":"event",readonly:"",min:t.start_date},model:{value:t.end_date,callback:function(e){t.end_date=e},expression:"end_date"}})],1),a("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[a("members-dropdown",{staticClass:"task-member",attrs:{members:t.members.selected,"member-items":t.members.items,"is-loading":t.members.loading},on:{"update:members":function(e){return t.$set(t.members,"selected",e)},search:function(e){return t.filter_dropdown_items("members",e)}}})],1),a("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[a("rich-editor",{staticClass:"task-description",attrs:{placeholder:"Description"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)],1)]},proxy:!0}])},[a("template",{slot:"button2"},[a("v-btn",{attrs:{loading:t.btnloading},on:{click:t.save}},[t._v("Save")])],1)],2)],1)},n=[],i=(a("6762"),a("2fdb"),a("ac6a"),a("5df3"),a("768b")),o=(a("96cf"),a("3b8d")),r=(a("c5f6"),a("fcce")),c=a("0644"),l=a.n(c),d=a("c97a"),u=a("4ad3"),_=a("bc29"),f=a("57e5"),m={components:{DatePicker:d["a"],RichEditor:u["a"],MembersDropdown:_["a"],CustomDialog:f["a"]},props:{id:[Number,String],dialog:Boolean,dialogTitle:String,task:Object,milestoneStartDate:String},data:function(){return{btnloading:!1,open:!1,title:null,description:null,status:"open",start_date:null,end_date:null,members:{selected:[],all_items:[],items:[],loading:!1},milestones:{selected:null,items:[]}}},mounted:function(){var t=this;this.$event.$on("btnloading_off",(function(e){return t.btnloading=e}))},computed:{computedDialog:{get:function(){return this.dialog},set:function(t){!t&&this.$emit("close"),this.$emit("update:dialog",t)}}},watch:{dialog:{handler:function(t){this.open=t,!t||this.members.all_items.length||this.milestones.items.length||this.fill_dropdowns()}},open:function(t){this.$emit("update:dialog",t)}},methods:{cancel:function(){this.dialog=!1},open_dialog:function(){this.fill_dropdowns(),this.$refs.dialog.open_dialog(),this.update_fields(this.task)},save:function(){this.btnloading=!0;var t={milestone_id:this.milestones.selected,title:this.title,description:this.description,status:this.status,started_at:this.start_date,end_at:this.end_date,assigned:this.members.selected};this.$emit("save",t)},update_fields:function(t){var e=l()(t);this.title=e.title,this.description=e.description,this.start_date=e.started_at,this.end_date=e.end_at,this.milestones.selected=e.milestone_id,this.$set(this.members,"selected",e.assignee)},clear_and_close:function(){Object.assign(this.$data,this.$options.data.apply(this)),this.cancel()},fill_dropdowns:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,a,s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,Promise.all([r["a"].get_project_members(this.id),r["a"].get_project_milestones(this.id)]);case 3:e=t.sent,a=Object(i["a"])(e,2),s=a[0],n=a[1],this.loading=!1,this.members.all_items=s.data,this.members.items=s.data,this.milestones.items=n.data;case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),filter_dropdown_items:function(t,e){var a=l()(this[t].all_items);if(e){var s=a.filter((function(t){return t.first_name.toLowerCase().includes(e.toLowerCase())||t.last_name.toLowerCase().includes(e.toLowerCase())}));this.$set(this[t],"items",s)}else this[t].items=a}}},p=m,h=(a("075a"),a("2877")),v=Object(h["a"])(p,s,n,!1,null,"6184127c",null);e["a"]=v.exports},"3b43":function(t,e,a){},"469f":function(t,e,a){a("6c1c"),a("1654"),t.exports=a("7d7b")},5293:function(t,e,a){},"5d73":function(t,e,a){t.exports=a("469f")},"5df3":function(t,e,a){"use strict";var s=a("02f4")(!0);a("01f9")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,a=this._i;return a>=e.length?{value:void 0,done:!0}:(t=s(e,a),this._i+=t.length,{value:t,done:!1})}))},"71b5":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tasks-card"},[a("div",{staticClass:"tasks__content"},[a("dash-card",{staticClass:"task__content",attrs:{title:"Tasks","view-more-btn":!0,dashboard:t.dashboard},on:{close:function(e){return t.$emit("close")}}},[a("div",{staticClass:"content-wrapper",attrs:{slot:"content"},slot:"content"},[a("div",{staticClass:"tasks-items"},[a("tasks-content")],1)]),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("v-btn",{staticClass:"view__more_btn",attrs:{text:""},on:{click:t.loadMore}},[t._v(" VIEW MORE ")])],1)])],1)])},n=[],i=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),o=(a("c5f6"),a("2f62")),r=a("6943"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tasks-content"},[a("v-tabs",{staticClass:"task__tabs",attrs:{centered:"",grow:"","hide-slider":""},model:{value:t.active_tab,callback:function(e){t.active_tab=e},expression:"active_tab"}},t._l(t.tabs,(function(e){return a("v-tab",{key:e.name,attrs:{href:"#"+e.name}},[t._v(" "+t._s(e.name)+" ")])})),1),a("v-tabs-items",{model:{value:t.active_tab,callback:function(e){t.active_tab=e},expression:"active_tab"}},t._l(t.tabs,(function(e){return a("v-tab-item",{key:e.id,attrs:{value:e.name}},[a("v-card",{attrs:{flat:""}},[t.active_tab===e.name?a("tasks-tab",{attrs:{tab:t.active_tab}}):t._e()],1)],1)})),1)],1)},l=[],d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loading?a("div",{staticClass:"loading"},[a("v-progress-linear",{attrs:{indeterminate:!0}})],1):t.tasks_are_empty?a("div",{staticClass:"no-data"},[a("div",{staticClass:"empty-content"},[a("v-icon",{staticClass:"empty-icon"},[t._v("list")]),a("p",{staticClass:"empty-text"},[t._v("List Empty")])],1)]):a("div",{staticClass:"tasks-tab"},[a("task-chips",{attrs:{"count-all":t.total,"count-completed":t.counter.completed,"count-pending":t.counter.pending,"count-behind":t.counter.behind,"count-open":t.counter.open,"active-chip":t.active_chip},on:{"update:activeChip":function(e){t.active_chip=e},"update:active-chip":function(e){t.active_chip=e}}}),a("task-custom-table",{attrs:{tasks:t.filtered_tasks,tab:t.tab}})],1)},u=[],_=a("2f68"),f=a("3293");function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var h={name:"TasksTab",components:{TaskChips:_["a"],TaskCustomTable:f["a"]},props:{tab:String},data:function(){return{active_chip:"all"}},computed:p({},Object(o["c"])("taskCards",["total","tasks","counter","loading"]),{filtered_tasks:function(){var t=this;return"all"===this.active_chip?this.tasks:this.tasks.filter((function(e){return e.status.toLowerCase()===t.active_chip}))},tasks_are_empty:function(){return!this.loading&&0===this.tasks.length}}),watch:{active_chip:{handler:function(t){}},tab:{handler:function(t){this.get_tasks(t)},immediate:!0}},methods:p({},Object(o["b"])("taskCards",["get_tasks"]))},v=h,k=(a("db21"),a("2877")),b=Object(k["a"])(v,d,u,!1,null,"31fa01f6",null),g=b.exports,w={name:"TasksContent",components:{TasksTab:g},props:{id:[Number,String]},data:function(){return{active_tab:"My Tasks"}},computed:{user:function(){return this.$store.getters.user},tabs:function(){var t=[{id:1,name:"My Tasks"},{id:2,name:"All Tasks"}];return this.user.is_admin||this.$_permissions.get("tasks_own")||t.splice(1),t}}},y=w,O=(a("b2f1"),a("fdd2"),Object(k["a"])(y,c,l,!1,null,"2805e15d",null)),C=O.exports;function $(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function j(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?$(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):$(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var x={name:"TasksCard",components:{DashCard:r["a"],TasksContent:C},props:{id:[Number,String],dashboard:Boolean},methods:j({},Object(o["b"])("taskCards",["see_more","get_tasks"]),{},Object(o["d"])("taskCards",["set_id"]),{loadMore:function(){this.see_more()}}),created:function(){this.id&&this.set_id(this.id)}},D=x,T=(a("f391"),Object(k["a"])(D,s,n,!1,null,"14d3ced5",null));e["a"]=T.exports},"768b":function(t,e,a){"use strict";a.d(e,"a",(function(){return _}));var s=a("a745"),n=a.n(s);function i(t){if(n()(t))return t}var o=a("5d73"),r=a.n(o),c=a("c8bb"),l=a.n(c);function d(t,e){if(l()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t)){var a=[],s=!0,n=!1,i=void 0;try{for(var o,c=r()(t);!(s=(o=c.next()).done);s=!0)if(a.push(o.value),e&&a.length===e)break}catch(d){n=!0,i=d}finally{try{s||null==c["return"]||c["return"]()}finally{if(n)throw i}}return a}}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _(t,e){return i(t)||d(t,e)||u()}},"7d7b":function(t,e,a){var s=a("e4ae"),n=a("7cd6");t.exports=a("584a").getIterator=function(t){var e=n(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return s(e.call(t))}},"7f3f":function(t,e,a){"use strict";var s=a("3b43"),n=a.n(s);n.a},"908a":function(t,e,a){},"991f":function(t,e,a){},a0ea:function(t,e,a){},aa6b:function(t,e,a){},ab1d:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("custom-dialog",{attrs:{title:t.title,content:t.textContent,"button1-text":t.cancelButtonText,"button2-text":t.confirmButtonText,open:t.open},on:{"update:open":function(e){t.open=e},button1:t.cancel_clicked,button2:t.confirm_clicked}})],1)},n=[],i=a("57e5"),o={components:{CustomDialog:i["a"]},props:{title:{type:String,default:"Default Modal Title"},textContent:{type:String,default:"Default Modal Text Content"},cancelButtonText:{type:String,default:"Cancel"},confirmButtonText:{type:String,default:"Confirm"},openDialog:Boolean},data:function(){return{open:!1}},watch:{openDialog:function(t){this.open=t},open:function(t){this.$emit("update:openDialog",t)}},methods:{cancel_clicked:function(){this.open=!1},confirm_clicked:function(){this.$emit("confirm")},showDialog:function(){this.open=!0},closeDialog:function(){this.open=!1}}},r=o,c=a("2877"),l=Object(c["a"])(r,s,n,!1,null,null,null);e["a"]=l.exports},b2f1:function(t,e,a){"use strict";var s=a("5293"),n=a.n(s);n.a},bc29:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"members-dropdown"},[a("v-autocomplete",t._b({attrs:{value:t.members,items:t.items,"search-input":t.search,loading:t.isLoading,"item-value":"id","prepend-icon":"search","no-filter":"",chips:"",multiple:"",clearable:"","hide-details":"",color:"#657186",label:"Assign member(s)",filled:"","append-outer-icon":t.showOuterIcon?"add":""},on:{input:t.members_selected,"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e},"click:append-outer":t.open_add_new_member},scopedSlots:t._u([{key:"selection",fn:function(e){return[a("v-chip",{staticClass:"chip--select-multi",attrs:{"input-value":e.selected,outlined:"",close:""},on:{input:function(a){return t.remove_chip(e.index)}}},[a("img",{attrs:{src:e.item.image_url,width:"30",height:"30"}}),t._v(" "),a("span",{staticClass:"chip-member-name"},[t._v(t._s(e.item.name))])])]}},{key:"item",fn:function(e){var s=e.item;return[a("div",{staticClass:"member"},[a("div",{staticClass:"member-avatar"},[a("img",{attrs:{src:s.image_url}})]),a("div",{staticClass:"member-info"},[a("div",{staticClass:"full-name"},[t._v(" "+t._s(s.first_name)+" ")]),a("div",{staticClass:"job-title"},[t._v(" "+t._s(s.job_title)+" ")])]),t.is_item_active(s.id)?t._e():a("div",{staticClass:"checked-icon"},[a("v-icon",{attrs:{color:"gray"}},[t._v("check_circle_outline")])],1),t.is_item_active(s.id)?a("div",{staticClass:"checked-icon"},[a("v-icon",{attrs:{color:"green"}},[t._v("check_circle")])],1):t._e()])]}}])},"v-autocomplete",t.$attrs,!1))],1)},n=[],i=(a("6762"),a("2fdb"),a("75fc")),o=a("0644"),r=a.n(o),c={name:"MembersDropdown",inheritAttrs:!1,props:{members:Array,memberItems:Array,isLoading:Boolean,showOuterIcon:{type:Boolean,default:!1}},data:function(){return{items:[],search:null}},watch:{search:function(t){this.$emit("search",t)},memberItems:function(t){this.items=Object(i["a"])(t)}},methods:{members_selected:function(t){this.$emit("update:members",t)},is_item_active:function(t){return this.members.includes(t)},remove_chip:function(t){var e=r()(this.members);e.splice(t,1),this.$emit("update:members",e)},open_add_new_member:function(){this.$event.$emit("open-new-member-dialog",!0)}}},l=c,d=(a("7f3f"),a("d70a"),a("2877")),u=Object(d["a"])(l,s,n,!1,null,"1ee226e2",null);e["a"]=u.exports},c97a:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-text-field",t._g(t._b({attrs:{slot:"activator",value:t.value,solo:"","hide-details":"",color:"#657186",readonly:""},slot:"activator"},"v-text-field",t.$attrs,!1),s))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-date-picker",{attrs:{clearable:"",color:"#657186",max:t.max,min:t.min,"no-title":"",scrollable:""},model:{value:t.picker_date,callback:function(e){t.picker_date=e},expression:"picker_date"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",outlined:"",color:"#657186"},on:{click:t.cancel}},[t._v("Cancel")]),a("v-btn",{attrs:{text:"",outlined:"",color:"#657186"},on:{click:t.save}},[t._v("OK")]),a("v-btn",{attrs:{text:"",outlined:"",color:"#657186"},on:{click:t.clear}},[t._v("Clear")])],1)],1)},n=[],i={name:"DatePicker",inheritAttrs:!1,props:{value:{type:String,default:null},min:{type:String,default:null},max:{type:String,default:null}},data:function(){return{menu:!1,picker_date:null}},watch:{value:function(t){this.picker_date=t}},methods:{save:function(){this.$emit("input",this.picker_date),this.cancel()},cancel:function(){this.menu=!1},clear:function(){this.picker_date=null}}},o=i,r=(a("fbc5"),a("2877")),c=Object(r["a"])(o,s,n,!1,null,"bdc64d4c",null);e["a"]=c.exports},d70a:function(t,e,a){"use strict";var s=a("908a"),n=a.n(s);n.a},db21:function(t,e,a){"use strict";var s=a("0823"),n=a.n(s);n.a},df60:function(t,e,a){},f391:function(t,e,a){"use strict";var s=a("a0ea"),n=a.n(s);n.a},fbc5:function(t,e,a){"use strict";var s=a("aa6b"),n=a.n(s);n.a},fdd2:function(t,e,a){"use strict";var s=a("df60"),n=a.n(s);n.a}}]);
//# sourceMappingURL=chunk-d5c3130a.41c02557.js.map