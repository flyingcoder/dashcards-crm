(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57053d78"],{"0637":function(t,e,a){"use strict";var i=a("9f15"),s=a.n(i);s.a},"0fe0":function(t,e,a){"use strict";var i=a("c001"),s=a.n(i);s.a},1588:function(t,e,a){},"15d6":function(t,e,a){},2416:function(t,e,a){"use strict";var i=a("2951"),s=a.n(i);s.a},"264e":function(t,e,a){"use strict";var i=a("1588"),s=a.n(i);s.a},"290d":function(t,e,a){},2951:function(t,e,a){},"33d6":function(t,e,a){"use strict";var i=a("15d6"),s=a.n(i);s.a},"37a4":function(t,e,a){},4125:function(t,e,a){"use strict";var i=a("290d"),s=a.n(i);s.a},4619:function(t,e,a){"use strict";var i=a("37a4"),s=a.n(i);s.a},6943:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"dash__card"},[a("v-row",{staticClass:"card__header",attrs:{wrap:"","no-gutters":"","align-center":""}},[a("v-flex",{staticClass:"card__title",attrs:{xs4:""}},[t._v(" "+t._s(t.title)+" ")]),t.dashboard?t._t("actions",[a("v-flex",{staticClass:"actions",attrs:{xs8:""}},[a("v-btn",{staticClass:"action",attrs:{fab:"",small:"",text:""}},[a("v-icon",[t._v("list")])],1),a("v-btn",{staticClass:"action",attrs:{fab:"",small:"",text:""}},[a("v-icon",[t._v("grid_on")])],1),a("v-btn",{staticClass:"action",attrs:{fab:"",small:"",text:""}},[a("v-icon",[t._v("remove")])],1),a("v-btn",{staticClass:"action",attrs:{fab:"",small:"",text:""}},[a("v-icon",[t._v("remove")])],1),a("v-btn",{staticClass:"action",attrs:{fab:"",small:"",text:""}},[a("v-icon",[t._v("zoom_out_map")])],1),a("v-btn",{staticClass:"action",attrs:{fab:"",small:"",text:""}},[a("v-icon",{on:{click:function(e){return t.$emit("close")}}},[t._v("close")])],1)],1)]):t._e()],2),a("v-flex",{staticClass:"card__content",attrs:{xs12:""}},[t._t("content")],2),a("v-flex",{staticClass:"card__footer",attrs:{xs12:""}},[t._t("footer",[t.viewMoreBtn?a("v-btn",{staticClass:"view__more_btn mx-auto",attrs:{text:""},on:{click:function(e){return t.$emit("view-more")}}},[t._v(" VIEW MORE ")]):t._e()])],2)],1)},s=[],n={name:"DashCard",props:{title:String,viewMoreBtn:Boolean,dashboard:Boolean}},o=n,d=(a("0fe0"),a("2877")),l=Object(d["a"])(o,i,s,!1,null,"254888ea",null);e["a"]=l.exports},"8dd1":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"milestones__tab"},[a("milestone-tab-dialog",{ref:"add_dialog",attrs:{dialog:t.add_dialog,"dialog-title":"Add Milestone"},on:{"update:dialog":function(e){t.add_dialog=e},save:t.add_new_milestone}}),a("delete-dialog",{attrs:{"open-dialog":t.delete_dialog,title:"Delete Milestone","text-content":"Are you sure you want to delete this milestone?"},on:{"update:openDialog":function(e){t.delete_dialog=e},"update:open-dialog":function(e){t.delete_dialog=e},delete:t.delete_milestone}}),a("milestone-tab-dialog",{ref:"edit_dialog",attrs:{dialog:t.edit_dialog,"dialog-title":"Edit Milestone","is-edit-dialog":t.edit_dialog,"fields-to-edit":t.edit_item},on:{"update:dialog":function(e){t.edit_dialog=e},save:t.update_milestone}}),a("select-template-dialog",{attrs:{open:t.select_template_dialog,"dialog-title":"Add Milestone Template"},on:{"update:open":function(e){t.select_template_dialog=e},save:t.add_template}}),a("add-task-dialog",{ref:"add_task_dialog",attrs:{dialog:t.add_task_dialog,"dialog-title":"Add Task","milestone-start-date":t.add_task_start_date,id:t.id},on:{"update:dialog":function(e){t.add_task_dialog=e},save:t.add_new_task}}),a("add-task-dialog",{ref:"edit_task_dialog",attrs:{dialog:t.edit_task_dialog,"dialog-title":"Edit Task","is-edit-dialog":t.edit_task_dialog,"fields-to-edit":t.edit_task_item,id:t.id},on:{"update:dialog":function(e){t.edit_task_dialog=e},save:t.update_task}}),a("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{indeterminate:!0}}),a("v-layout",{attrs:{"justify-end":""}},[a("v-speed-dial",{staticClass:"add-btn",attrs:{direction:"bottom",right:"",transition:"slide-y-transition"},model:{value:t.is_open_speed_dial,callback:function(e){t.is_open_speed_dial=e},expression:"is_open_speed_dial"}},[a("v-btn",{attrs:{slot:"activator",color:"#3b589e",dark:"",fab:"",small:""},slot:"activator",model:{value:t.is_open_speed_dial,callback:function(e){t.is_open_speed_dial=e},expression:"is_open_speed_dial"}},[a("v-icon",[t._v("add")]),a("v-icon",[t._v("close")])],1),a("v-btn",{attrs:{color:"#3b589e",dark:"",small:"",fab:""},on:{click:function(e){t.add_dialog=!0}}},[a("v-icon",{attrs:{title:"Add Milestone"}},[t._v("add")])],1),a("v-btn",{attrs:{disabled:t.boxes.length>0,color:"#3b589e",small:"",fab:""},on:{click:t.open_select_template_dialog}},[a("v-icon",{attrs:{color:"white",title:"Select Template"}},[t._v("touch_app")])],1)],1)],1),a("v-layout",{staticClass:"boxes__wrapper",attrs:{wrap:""}},t._l(t.boxes,(function(e,i){return a("v-flex",{key:e.id,staticClass:"milestone__box",attrs:{md6:"",xs12:""}},[a("div",{staticClass:"milestone__dynamic_box"},[a("dynamic-box",{attrs:{id:t.id,box:e,loading:e.id===t.boxIdInProgress},on:{edit:t.open_edit_dialog,delete:t.open_delete_confirmation,"edit-task":t.edit_task,"remove-task":function(e){return t.remove_task(i,e)},"add-task":t.open_add_task_dialog}})],1)])})),1)],1)},s=[],n=(a("7514"),a("75fc")),o=(a("20d6"),a("96cf"),a("3b8d")),d=(a("c5f6"),a("1be9")),l=a("d4e9"),r=a("5b70"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dynamic-card"},[a("delete-dialog",{attrs:{"open-dialog":t.delete_dialog,title:"Delete Task","text-content":"Are you sure you want to delete this task?"},on:{"update:openDialog":function(e){t.delete_dialog=e},"update:open-dialog":function(e){t.delete_dialog=e},delete:function(e){return t.delete_task(t.item_to_delete)}}}),a("dash-card",{attrs:{title:t.validate_title(t.box.title),dashboard:!0}},[a("template",{slot:"actions"},[a("v-flex",{staticClass:"actions text-xs-right",attrs:{xs4:""}},[t._v(" "+t._s(t.box.tasks.filter((function(t){return"completed"===t.status})).length+"/"+t.box.tasks.length)+" "),a("v-btn",{staticClass:"action",attrs:{fab:"",text:"",small:""}},[a("v-icon",{on:{click:function(e){return t.$emit("edit",t.box)}}},[t._v("edit")])],1),a("v-btn",{staticClass:"action",attrs:{fab:"",text:"",small:""}},[a("v-icon",{on:{click:function(e){return t.$emit("delete",t.box.id)}}},[t._v("close")])],1)],1)],1),a("div",{staticClass:"content",attrs:{slot:"content"},slot:"content"},[t.loading?a("v-progress-linear",{attrs:{indeterminate:!0}}):t._e(),a("div",{staticClass:"tasks-progress"},[a("div",{staticClass:"fill",style:{width:t.tasksProgress+"%"}})]),a("div",{staticClass:"task-custom-table"},[a("v-layout",{staticClass:"header"},[a("v-flex",{staticClass:"task__tableHead",attrs:{xs6:""}},[t._v("Task")]),a("v-flex",{staticClass:"task__tableHead",attrs:{xs3:""}},[t._v("Status")])],1),a("div",{staticClass:"body"},t._l(t.box.tasks,(function(e,i){return a("v-layout",{key:e.id,staticClass:"task__tableBody",attrs:{"align-center":""}},[a("v-flex",{staticClass:"project__col",attrs:{xs6:""}},[t._v(" "+t._s(e.title)+" ")]),a("v-flex",{staticClass:"status__col",attrs:{xs3:""}},[t._v(" "+t._s(e.status)+" "),"completed"===e.status?a("div",[a("div",{staticClass:"status__completed"})]):t._e(),"pending"===e.status?a("div",[a("div",{staticClass:"status__pending"})]):t._e(),"behind"===e.status?a("div",[a("div",{staticClass:"status__behind"})]):t._e(),"open"===e.status?a("div",[a("div",{staticClass:"status__open"})]):t._e()]),a("v-icon",{staticClass:"task-icon",attrs:{color:"indigo"},on:{click:function(a){return t.edit_task_clicked(e,i)}}},[t._v("edit")]),t._v(" 󠁿󠁿󠁿"),a("span",{staticClass:"task-icon",on:{click:function(a){return t.openDeleteDialog({task_index:i,task_id:e.id})}}},[t._v(" 🗙 ")])],1)})),1)],1)],1),a("v-btn",{staticClass:"add__new_btn",attrs:{slot:"footer",large:"",round:"",color:"#3b589e",dark:""},on:{click:function(e){return t.$emit("add-task",t.box.id)}},slot:"footer"},[t._v(" ADD NEW ")])],2)],1)},u=[],_=a("6943"),m={name:"DynamicBox",components:{DashCard:_["a"],DeleteDialog:r["a"]},props:{id:[Number,String],box:Object,loading:Boolean},data:function(){return{delete_dialog:!1,item_to_delete:null}},computed:{tasksProgress:function(){var t=this.box,e=t.tasks.filter((function(t){return"completed"===t.status})).length,a=t.tasks.length;return e*a/100*100}},methods:{validate_title:function(t){return t.length>18?t.slice(0,18)+"...":t},openDeleteDialog:function(t){this.delete_dialog=!0,this.item_to_delete=t},delete_task:function(t){var e=t.task_index,a=t.task_id;this.$emit("remove-task",{task_index:e,task_id:a}),this.delete_dialog=!1,this.item_to_delete=null},edit_task_clicked:function(t,e){this.$emit("edit-task",{task:t,index:e,box_id:this.box.id})}}},f=m,p=(a("4619"),a("2877")),h=Object(p["a"])(f,c,u,!1,null,"328c356e",null),v=h.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("custom-dialog",{ref:"dialog",attrs:{title:t.dialogTitle,open:t.open,"button2-text":"Save"},on:{"update:open":function(e){t.open=e},button1:t.cancel,button2:t.save},scopedSlots:t._u([{key:"content",fn:function(){return[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:""}},[a("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{box:"","hide-details":"",color:"#657186",label:"Add milestone title"},model:{value:t.title,callback:function(e){t.title="string"===typeof e?e.trim():e},expression:"title"}})],1),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("date-picker",{staticClass:"dialog__datepicker d-field",attrs:{box:"","hide-details":"",color:"#657186",label:"Start Date","prepend-icon":"event",readonly:"",value:t.start_date,max:t.end_date},on:{input:t.start_date_changed}})],1),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("date-picker",{staticClass:"dialog__datepicker d-field",attrs:{box:"","hide-details":"",color:"#657186",label:"End Date","prepend-icon":"event",readonly:"",value:t.end_date,min:t.start_date},on:{input:t.end_date_changed}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{box:"","hide-details":"",color:"#657186",label:"Add days",min:"0",type:"number"},model:{value:t.days,callback:function(e){t.days=t._n(e)},expression:"days"}})],1)],1)]},proxy:!0}])})},g=[],x=a("c97a"),k=a("c1df"),y=a.n(k),C=a("57e5"),w={name:"MilestoneTabDialog",components:{DatePicker:x["a"],CustomDialog:C["a"]},props:{dialog:Boolean,dialogTitle:String,isEditDialog:Boolean,fieldsToEdit:{type:Object,default:function(){}}},data:function(){return{open:!1,title:null,start_date:null,end_date:null,status:"active",days_init_value:0}},computed:{days:{get:function(){return this.start_date&&this.end_date?y()(this.end_date).diff(y()(this.start_date),"days"):this.days_init_value},set:function(t){this.start_date||this.end_date?(this.start_date?this.end_date=y()(this.start_date).add(t,"days").format("YYYY-MM-DD"):this.start_date=y()(this.end_date).subtract(t,"days").format("YYYY-MM-DD"),this.days_init_value=t):this.days_init_value=t}}},watch:{dialog:function(t){this.open=t},open:function(t){this.$emit("update:dialog",t)},fieldsToEdit:{handler:function(t){this.isEditDialog&&this.update_fields(t)},deep:!0}},methods:{end_date_changed:function(t){this.end_date=t,this.days&&t&&(this.start_date=y()(t).subtract(this.days,"days").format("YYYY-MM-DD"))},start_date_changed:function(t){this.start_date=t,this.days&&t&&(this.end_date=y()(t).add(this.days,"days").format("YYYY-MM-DD"))},cancel:function(){this.open=!1},save:function(){var t={title:this.title,status:this.status,days:this.days,started_at:this.start_date,end_at:this.end_date};this.$emit("save",t)},update_fields:function(t){var e=t.fields,a=Object.assign({},e);this.title=a.title,this.status=a.status,this.days=a.days,this.start_date=a.started_at,this.end_date=a.end_at},clear_and_close:function(){Object.assign(this.$data,this.$options.data.apply(this)),this.cancel()}}},D=w,$=(a("264e"),Object(p["a"])(D,b,g,!1,null,"204a9230",null)),Y=$.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("custom-dialog",{ref:"dialog",attrs:{title:t.dialogTitle,open:t.open,"button2-text":"Save"},on:{"update:open":function(e){t.open=e},button1:t.cancel,button2:t.save},scopedSlots:t._u([{key:"content",fn:function(){return[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-select",{staticClass:"dialog__selectfield",attrs:{label:"Select Template",items:t.templates,"item-text":"name","item-value":"id",color:"#667187",box:"","hide-details":""},model:{value:t.selected_template,callback:function(e){t.selected_template=e},expression:"selected_template"}})],1)],1)]},proxy:!0}])})},j=[],S={name:"SelectTemplateDialog",components:{CustomDialog:C["a"]},props:{open:Boolean,title:String,dialogTitle:String},data:function(){return{loading:!1,templates:[],selected_template:null}},computed:{is_disabled:function(){return this.loading||!this.selected_template}},watch:{open:function(t){t&&this.fill_dropdown()}},methods:{fill_dropdown:function(){var t=this;this.loading=!0,d["a"].get("api/template?all=true&type=milestone").then((function(e){return t.templates=e.data})).finally((function(){return t.loading=!1}))},cancel:function(){this.$emit("update:open",!1)},save:function(){this.is_disabled||this.$emit("save",this.selected_template)}}},I=S,T=(a("980f"),Object(p["a"])(I,M,j,!1,null,"051534aa",null)),O=T.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tasks-dialog"},[a("custom-dialog",{ref:"dialog",attrs:{open:t.computedDialog,title:"Add Task"},on:{"update:open":function(e){t.computedDialog=e},button1:function(e){t.computedDialog=!1}},scopedSlots:t._u([{key:"content",fn:function(){return[a("v-layout",{staticClass:"custom-dialog",attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",md12:""}},[a("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{label:"Add task title",box:"","hide-details":"",color:"#657186"},model:{value:t.title,callback:function(e){t.title="string"===typeof e?e.trim():e},expression:"title"}})],1),a("v-flex",{attrs:{xs12:"",md6:""}},[a("date-picker",{staticClass:"dialog__date d-field",attrs:{label:"Start Date","prepend-icon":"event",readonly:"",value:t.start_date,max:t.end_date},on:{input:t.start_date_changed}})],1),a("v-flex",{attrs:{xs12:"",md6:""}},[a("date-picker",{staticClass:"dialog__date d-field",attrs:{label:"End Date","prepend-icon":"event",readonly:"",value:t.end_date,min:t.start_date},on:{input:t.end_date_changed}})],1),a("v-flex",{attrs:{xs12:""}},[a("members-dropdown",{staticClass:"task-member",attrs:{members:t.members.selected,"member-items":t.members.items,"is-loading":t.members.loading},on:{"update:members":function(e){return t.$set(t.members,"selected",e)},search:function(e){return t.filter_dropdown_items("members",e)}}})],1),a("v-flex",{attrs:{xs12:""}},[a("rich-editor",{staticClass:"task-description",attrs:{placeholder:"Description"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)],1)]},proxy:!0}])},[a("template",{slot:"button2"},[a("v-btn",{attrs:{loading:t.btnloading},on:{click:t.save}},[t._v("Save")])],1)],2)],1)},A=[],B=(a("6762"),a("2fdb"),a("0644")),P=a.n(B),R=a("4ad3"),L=a("bc29"),N={name:"AddTaskDialog",components:{DatePicker:x["a"],RichEditor:R["a"],MembersDropdown:L["a"],CustomDialog:C["a"]},props:{id:[Number,String],dialog:Boolean,dialogTitle:String,isEditDialog:Boolean,fieldsToEdit:{type:Object,default:function(){}},milestoneStartDate:String,btnloading:{type:Boolean,default:!1}},data:function(){return{open:!1,title:null,description:null,status:"open",start_date:null,end_date:null,members:{selected:[],all_items:[],items:[],loading:!1},days_init_value:1}},mounted:function(){var t=this;this.$event.$on("btnloading_off",(function(e){return t.btnloading=e}))},computed:{days:{get:function(){return this.days_init_value},set:function(t){this.start_date||this.end_date?(this.start_date?this.end_date=y()(this.start_date).add(t,"days").format("YYYY-MM-DD"):this.start_date=y()(this.end_date).subtract(t,"days").format("YYYY-MM-DD"),this.days_init_value=t):this.days_init_value=t}},computedDialog:{get:function(){return this.dialog},set:function(t){!t&&this.$emit("close"),this.$emit("update:dialog",t)}}},watch:{dialog:{handler:function(t){this.open=t,t&&!this.isEditDialog&&(this.start_date=this.milestoneStartDate,this.end_date=y()(this.milestoneStartDate).add(1,"days").format("YYYY-MM-DD")),t&&this.fill_members_dropdown()},immediate:!0},open:function(t){this.$emit("update:dialog",t)},fieldsToEdit:{handler:function(t){this.isEditDialog&&this.update_fields(t),this.fill_members_dropdown()},deep:!0}},methods:{cancel:function(){this.open=!1},open_dialog:function(){this.$refs.dialog.open_dialog()},save:function(){this.btnloading=!0;var t={title:this.title,description:this.description,status:this.status,days:this.days,started_at:this.start_date,end_at:this.end_date,assigned:this.members.selected};this.$emit("save",t)},update_fields:function(t){var e=t.fields,a=Object.assign({},e);this.title=a.title,this.description=a.description,this.status=a.status,this.days=a.days,this.start_date=a.started_at,this.end_date=a.end_at,this.$set(this.members,"selected",a.assignee)},clear_and_close:function(){Object.assign(this.$data,this.$options.data.apply(this)),this.cancel()},end_date_changed:function(t){this.end_date=t,t&&(this.start_date=y()(t).subtract(this.days,"days").format("YYYY-MM-DD"))},start_date_changed:function(t){this.start_date=t,t&&(this.end_date=y()(t).add(this.days,"days").format("YYYY-MM-DD"))},fill_members_dropdown:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.loading=!0,l["a"].get_project_members(this.id).then((function(t){var a=t.data;e.members.all_items=a,e.members.items=a})).finally((function(){return e.loading=!1}));case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),filter_dropdown_items:function(t,e){var a=P()(this[t].all_items);if(e){var i=a.filter((function(t){return t.first_name.toLowerCase().includes(e.toLowerCase())||t.last_name.toLowerCase().includes(e.toLowerCase())}));this.$set(this[t],"items",i)}else this[t].items=a}}},H=N,J=(a("4125"),a("33d6"),Object(p["a"])(H,E,A,!1,null,"0b07b8ca",null)),W=J.exports,z={name:"MilestonesTab",components:{DynamicBox:v,MilestoneTabDialog:Y,DeleteDialog:r["a"],SelectTemplateDialog:O,AddTaskDialog:W},props:{id:[Number,String]},data:function(){return{add_dialog:!1,edit_dialog:!1,edit_task_dialog:!1,delete_dialog:!1,select_template_dialog:!1,add_task_dialog:!1,boxes:[],loading:!1,direction:"top",is_open_speed_dial:!1,id_to_delete:null,edit_item:{id:null,fields:null},edit_task_item:{id:null,index:null,fields:null,box_id:null},box_id_to_add_task:null,add_task_start_date:null,boxIdInProgress:null}},created:function(){this.get_dynamic_boxes()},methods:{get_dynamic_boxes:function(){var t=this;this.loading=!0,d["a"].get("api/project/".concat(this.id,"/milestone?all=true")).then((function(e){var a=e.data;return t.boxes=a})).finally((function(){return t.loading=!1}))},add_new_milestone:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,this.$refs.add_dialog.clear_and_close(),t.next=4,d["a"].post("api/project/".concat(this.id,"/milestone"),e).then((function(t){var e=t.data;return a.boxes.push(e)})).finally((function(){return a.loading=!1}));case 4:this.$event.$emit("open_snackbar","New Milestone added successfully");case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),open_delete_confirmation:function(t){this.id_to_delete=t,this.delete_dialog=!0},delete_milestone:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,this.delete_dialog=!1,t.next=4,d["a"].delete("api/project/".concat(this.id,"/milestone/").concat(this.id_to_delete)).then((function(){return e.boxes=e.boxes.filter((function(t){return t.id!==e.id_to_delete}))})).finally((function(){return e.loading=!1}));case 4:this.$event.$emit("open_snackbar","Milestone deleted successfully"),this.id_to_delete=null;case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),open_edit_dialog:function(t){var e=t.id,a=t.title,i=t.status,s=t.days,n=t.started_at,o=t.end_at;this.edit_item.id=e,this.edit_item.fields={title:a,status:i,days:s,started_at:n,end_at:o},this.edit_dialog=!0},update_milestone:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.boxIdInProgress=this.edit_item.id,this.edit_dialog=!1,t.next=4,d["a"].put("api/project/".concat(this.id,"/milestone/").concat(this.edit_item.id),e).then((function(t){var e=t.data,i=a.boxes.findIndex((function(t){return t.id===e.id}));~i&&a.boxes.splice(i,1,e)})).finally((function(){return a.boxIdInProgress=null}));case 4:this.$event.$emit("open_snackbar","Milestone updated successfully"),this.edit_item={id:null,fields:null};case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),open_select_template_dialog:function(){this.boxes.length>0||(this.select_template_dialog=!0)},add_template:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.select_template_dialog=!1,this.loading=!0,t.next=4,d["a"].post("api/projects/".concat(this.id,"/milestone-import"),{template_id:e});case 4:this.get_dynamic_boxes();case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),edit_task:function(t){var e=t.task,a=t.index,i=t.box_id;this.edit_task_dialog=!0,this.edit_task_item={id:e.id,index:a,fields:e,box_id:i}},remove_task:function(t,e){var a=this,i=e.task_index,s=e.task_id;this.boxIdInProgress=this.boxes[t].id,d["a"].delete("api/task/".concat(s)).then((function(){var e=Object(n["a"])(a.boxes);e[t].tasks.splice(i,1),a.boxes=e,a.$event.$emit("open_snackbar","Task deleted successfully")})).finally((function(){a.boxIdInProgress=null,a.$event.$emit("btnloading_off",!1)}))},update_task:function(t){var e=this;this.boxIdInProgress=this.edit_item.box_id,l["a"].edit_milestone_task(this.edit_task_item.id,t,"api/task").then((function(t){var a=e.edit_task_item,i=a.index,s=a.box_id,n=P()(e.boxes),o=n.findIndex((function(t){return t.id===s}));~o&&(e.edit_task_dialog=!1,n[o].tasks[i]=t.data,e.boxes=n,e.edit_task_item={id:null,index:null,task:null,box_id:null},e.$event.$emit("open_snackbar","Task updated successfully"))})).finally((function(){e.boxIdInProgress=null,e.$event.$emit("btnloading_off",!1)}))},open_add_task_dialog:function(t){this.box_id_to_add_task=t,this.add_task_start_date=this.boxes.find((function(e){return e.id===t})).started_at,this.add_task_dialog=!0},add_new_task:function(t){var e=this;this.boxIdInProgress=this.box_id_to_add_task,this.$refs.add_task_dialog.clear_and_close(),d["a"].post("api/milestone/".concat(this.box_id_to_add_task,"/task"),t).then((function(t){var a=t.data,i=e.boxes.findIndex((function(t){return t.id===e.box_id_to_add_task}));e.boxes[i].tasks.push(a),e.$event.$emit("open_snackbar","Task added successfully")})).finally((function(){e.boxIdInProgress=null,e.box_id_to_add_task=null,e.$event.$emit("btnloading_off",!1)}))}}},K=z,V=(a("c7f9"),Object(p["a"])(K,i,s,!1,null,"77eaa77c",null));e["default"]=V.exports},"980f":function(t,e,a){"use strict";var i=a("eac1"),s=a.n(i);s.a},"9f15":function(t,e,a){},aa6b:function(t,e,a){},aecb:function(t,e,a){},bc29:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"members-dropdown"},[a("v-autocomplete",t._b({attrs:{value:t.members,items:t.items,"search-input":t.search,loading:t.isLoading,"item-value":"id","prepend-icon":"search","no-filter":"",chips:"",multiple:"",clearable:"","hide-details":"",color:"#657186",label:"Assign member(s)",box:"","append-outer-icon":t.showOuterIcon?"add":""},on:{input:t.members_selected,"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e},"click:append-outer":t.open_add_new_member},scopedSlots:t._u([{key:"selection",fn:function(e){return[a("v-chip",{staticClass:"chip--select-multi",attrs:{"input-value":e.selected,outlined:"",close:""},on:{input:function(a){return t.remove_chip(e.index)}}},[a("img",{attrs:{src:e.item.image_url,width:"30",height:"30"}}),t._v(" "),a("span",{staticClass:"chip-member-name"},[t._v(t._s(e.item.name))])])]}},{key:"item",fn:function(e){var i=e.item;return[a("div",{staticClass:"member"},[a("div",{staticClass:"member-avatar"},[a("img",{attrs:{src:i.image_url}})]),a("div",{staticClass:"member-info"},[a("div",{staticClass:"full-name"},[t._v(" "+t._s(i.first_name)+" ")]),a("div",{staticClass:"job-title"},[t._v(" "+t._s(i.job_title)+" ")])]),t.is_item_active(i.id)?t._e():a("div",{staticClass:"checked-icon"},[a("v-icon",{attrs:{color:"gray"}},[t._v("check_circle_outline")])],1),t.is_item_active(i.id)?a("div",{staticClass:"checked-icon"},[a("v-icon",{attrs:{color:"green"}},[t._v("check_circle")])],1):t._e()])]}}])},"v-autocomplete",t.$attrs,!1))],1)},s=[],n=(a("6762"),a("2fdb"),a("75fc")),o=a("0644"),d=a.n(o),l={name:"MembersDropdown",inheritAttrs:!1,props:{members:Array,memberItems:Array,isLoading:Boolean,showOuterIcon:{type:Boolean,default:!1}},data:function(){return{items:[],search:null}},watch:{search:function(t){this.$emit("search",t)},memberItems:function(t){this.items=Object(n["a"])(t)}},methods:{members_selected:function(t){this.$emit("update:members",t)},is_item_active:function(t){return this.members.includes(t)},remove_chip:function(t){var e=d()(this.members);e.splice(t,1),this.$emit("update:members",e)},open_add_new_member:function(){this.$event.$emit("open-new-member-dialog",!0)}}},r=l,c=(a("2416"),a("0637"),a("2877")),u=Object(c["a"])(r,i,s,!1,null,"9be080da",null);e["a"]=u.exports},c001:function(t,e,a){},c7f9:function(t,e,a){"use strict";var i=a("aecb"),s=a.n(i);s.a},c97a:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-text-field",t._g(t._b({attrs:{slot:"activator",value:t.value,solo:"","hide-details":"",color:"#657186",readonly:""},slot:"activator"},"v-text-field",t.$attrs,!1),i))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-date-picker",{attrs:{clearable:"",color:"#657186",max:t.max,min:t.min,"no-title":"",scrollable:""},model:{value:t.picker_date,callback:function(e){t.picker_date=e},expression:"picker_date"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",outlined:"",color:"#657186"},on:{click:t.cancel}},[t._v("Cancel")]),a("v-btn",{attrs:{text:"",outlined:"",color:"#657186"},on:{click:t.save}},[t._v("OK")]),a("v-btn",{attrs:{text:"",outlined:"",color:"#657186"},on:{click:t.clear}},[t._v("Clear")])],1)],1)},s=[],n={name:"DatePicker",inheritAttrs:!1,props:{value:{type:String,default:null},min:{type:String,default:null},max:{type:String,default:null}},data:function(){return{menu:!1,picker_date:null}},watch:{value:function(t){this.picker_date=t}},methods:{save:function(){this.$emit("input",this.picker_date),this.cancel()},cancel:function(){this.menu=!1},clear:function(){this.picker_date=null}}},o=n,d=(a("fbc5"),a("2877")),l=Object(d["a"])(o,i,s,!1,null,"bdc64d4c",null);e["a"]=l.exports},eac1:function(t,e,a){},fbc5:function(t,e,a){"use strict";var i=a("aa6b"),s=a.n(i);s.a}}]);
//# sourceMappingURL=chunk-57053d78.fb920946.js.map