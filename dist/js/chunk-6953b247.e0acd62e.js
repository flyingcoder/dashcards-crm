(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6953b247"],{1296:function(t,e,n){"use strict";var a=n("e6e6"),i=n.n(a);i.a},"2f21":function(t,e,n){"use strict";var a=n("79e5");t.exports=function(t,e){return!!t&&a((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},"386d":function(t,e,n){"use strict";var a=n("cb7c"),i=n("83a1"),s=n("5f1b");n("214f")("search",1,(function(t,e,n,o){return[function(n){var a=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,a):new RegExp(n)[e](String(a))},function(t){var e=o(n,t,this);if(e.done)return e.value;var r=a(t),l=String(this),c=r.lastIndex;i(c,0)||(r.lastIndex=0);var u=s(r,l);return i(r.lastIndex,c)||(r.lastIndex=c),null===u?-1:u.index}]}))},"3b2b":function(t,e,n){var a=n("7726"),i=n("5dbc"),s=n("86cc").f,o=n("9093").f,r=n("aae3"),l=n("0bfb"),c=a.RegExp,u=c,d=c.prototype,f=/a/g,h=/a/g,p=new c(f)!==f;if(n("9e1e")&&(!p||n("79e5")((function(){return h[n("2b4c")("match")]=!1,c(f)!=f||c(h)==h||"/a/i"!=c(f,"i")})))){c=function(t,e){var n=this instanceof c,a=r(t),s=void 0===e;return!n&&a&&t.constructor===c&&s?t:i(p?new u(a&&!s?t.source:t,e):u((a=t instanceof c)?t.source:t,a&&s?l.call(t):e),n?this:d,c)};for(var v=function(t){t in c||s(c,t,{configurable:!0,get:function(){return u[t]},set:function(e){u[t]=e}})},m=o(u),_=0;m.length>_;)v(m[_++]);d.constructor=c,c.prototype=d,n("2aba")(a,"RegExp",c)}n("7a56")("RegExp")},"408c":function(t,e,n){var a=n("2b3e"),i=function(){return a.Date.now()};t.exports=i},"55dd":function(t,e,n){"use strict";var a=n("5ca1"),i=n("d8e8"),s=n("4bf8"),o=n("79e5"),r=[].sort,l=[1,2,3];a(a.P+a.F*(o((function(){l.sort(void 0)}))||!o((function(){l.sort(null)}))||!n("2f21")(r)),"Array",{sort:function(t){return void 0===t?r.call(s(this)):r.call(s(this),i(t))}})},"579d":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("28a5"),n("3b2b"),n("a481"),n("6b54"),n("4917");var a=n("7eac"),i={methods:{scrollToBottom:function(t){this.$nextTick((function(){"undefined"!==typeof t&&(t.scrollTop=t.scrollHeight-t.getBoundingClientRect().height)}))},addHost:function(t){return t&&"undefined"!==typeof t?0!==t.indexOf("http://")&&0!==t.indexOf("https://")?a["a"].apiHostBaseURL+t:t:a["a"].apiHostBaseURL},altImage:function(t){t&&t.hasOwnProperty("collection_name")&&"project.files.videos"===t.collection_name?(t.thumb_url=n("7335"),t.public_url=n("7335")):(t.thumb_url=n("e55f"),t.public_url=n("e55f"))},generate_random:function(t,e,n){for(var a=[],i=0;i<t;i++)a.push(parseInt((Math.random()*(n-e)+e).toFixed(0)));return a},youtubeParser:function(t){var e=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,n=t.match(e);return!(!n||11!==n[7].length)&&n[7]},slugify:function(t,e){t=t.toString().toLowerCase().trim();var n=[{to:"a",from:"[ÀÁÂÃÅÆĀĂĄẠẢẤẦẨẪẬẮẰẲẴẶ]"},{to:"ae",from:"[Ä]"},{to:"c",from:"[ÇĆĈČ]"},{to:"d",from:"[ÐĎĐÞ]"},{to:"e",from:"[ÈÉÊËĒĔĖĘĚẸẺẼẾỀỂỄỆ]"},{to:"g",from:"[ĜĞĢǴ]"},{to:"h",from:"[ĤḦ]"},{to:"i",from:"[ÌÍÎÏĨĪĮİỈỊ]"},{to:"j",from:"[Ĵ]"},{to:"ij",from:"[Ĳ]"},{to:"k",from:"[Ķ]"},{to:"l",from:"[ĹĻĽŁ]"},{to:"m",from:"[Ḿ]"},{to:"n",from:"[ÑŃŅŇ]"},{to:"o",from:"[ÒÓÔÕØŌŎŐỌỎỐỒỔỖỘỚỜỞỠỢǪǬƠ]"},{to:"oe",from:"[ŒÖ]"},{to:"p",from:"[ṕ]"},{to:"r",from:"[ŔŖŘ]"},{to:"s",from:"[ŚŜŞŠ]"},{to:"ss",from:"[ß]"},{to:"t",from:"[ŢŤ]"},{to:"u",from:"[ÙÚÛŨŪŬŮŰŲỤỦỨỪỬỮỰƯ]"},{to:"ue",from:"[Ü]"},{to:"w",from:"[ẂŴẀẄ]"},{to:"x",from:"[ẍ]"},{to:"y",from:"[ÝŶŸỲỴỶỸ]"},{to:"z",from:"[ŹŻŽ]"},{to:"-",from:"[·/_,:;']"}];return n.forEach((function(e){t=t.replace(new RegExp(e.from,"gi"),e.to)})),t=t.toString().toLowerCase().replace(/\s+/g,"-").replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),"undefined"!==typeof e&&"-"!==e&&(t=t.replace(/-/g,e)),t},validateEmail:function(t){var e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(String(t).toLowerCase())},validateUrl:function(t){var e=/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;return e.test(t)},getOrdinalNum:function(t){return t+(t>0?["th","st","nd","rd"][t>3&&t<21||t%10>3?0:t%10]:"")},weekdays:function(){return["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},snakeCaseToNormal:function(t){return t.split("_").join(" ")}}}},"587f":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"company-profile"},[n("div",{staticClass:"profile mt-1"},[n("div",{staticClass:"profile-content"},[n("v-row",{staticClass:"user-info",attrs:{"no-gutters":""}},[t.loading?n("div",{staticClass:"loading"},[n("v-progress-linear",{attrs:{indeterminate:!0}})],1):n("v-col",{attrs:{md:"12",sm:"12"}},[n("v-row",[n("v-col",{attrs:{md:"4"}},[n("v-card",{staticClass:"mx-auto",attrs:{tile:"",flat:""}},[n("v-list",{attrs:{flat:"","two-line":""}},[n("v-subheader",[n("span",[t._v("Schedule Emails")]),n("v-spacer"),n("v-icon",{on:{click:function(e){return t.newScheduleTask("email")}}},[t._v("add_circle_outline")])],1),t.schedule_tasks.length>0?n("v-list-item-group",{attrs:{color:"primary"}},t._l(t.schedule_tasks,(function(e){return n("v-list-item",{key:e.id,on:{click:function(n){return t.setActiveType(e)}}},[n("v-list-item-icon",{attrs:{dense:""}},[e.deleted_at?n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[n("v-icon",t._g(t._b({},"v-icon",i,!1),a),[t._v(" mdi-progress-close ")])]}}],null,!0)},[n("span",[t._v("Inactive")])]):n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[n("v-icon",t._g(t._b({attrs:{color:"success"}},"v-icon",i,!1),a),[t._v(" mdi-progress-check ")])]}}],null,!0)},[n("span",[t._v("Active")])])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(" "+t._s(t._f("ucwords")(e.props.name))+" ")]),n("v-list-item-subtitle",{staticClass:"caption"},[t._v(" "+t._s(t._f("ucwords")(t.snakeCaseToNormal(e.interval_type)))+" "),e.interval_at?n("span",[t._v(t._s(e.interval_at))]):t._e()])],1),n("v-list-item-action",[n("v-menu",{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",i,!1),a),[n("v-icon",[t._v("mdi-dots-vertical-circle-outline")])],1)]}}],null,!0)},[n("v-list",{attrs:{dense:""}},[n("v-list-item",{on:{click:function(n){return t.toggleStatus(e)}}},[e.deleted_at?n("v-list-item-title",[n("v-icon",{attrs:{left:""}},[t._v("mdi-play-circle-outline")]),t._v(" Activate ")],1):n("v-list-item-title",[n("v-icon",{attrs:{left:""}},[t._v("mdi-pause-circle-outline")]),t._v(" Deactivate ")],1)],1),n("v-list-item",{on:{click:function(n){return t.confirm_delete(e)}}},[n("v-list-item-title",[n("v-icon",{attrs:{left:""}},[t._v("mdi-delete-circle-outline")]),t._v(" Delete ")],1)],1),n("v-list-item",{on:{click:function(n){return t.showHistory(e)}}},[n("v-list-item-title",[n("v-icon",{attrs:{left:""}},[t._v("mdi-history")]),t._v(" History ")],1)],1)],1)],1)],1)],1)})),1):t._e()],1),n("Empty",{directives:[{name:"show",rawName:"v-show",value:0===t.schedule_tasks.length,expression:"schedule_tasks.length === 0"}],attrs:{headline:"No schedule task yet!"}})],1)],1),n("v-col",{attrs:{grow:""}},[n("v-card",{directives:[{name:"show",rawName:"v-show",value:t.task,expression:"task"}],attrs:{flat:""}},[n("v-card-text",[n("v-row",{attrs:{dense:""}},[n("v-col",{attrs:{md:"6"}},[n("v-text-field",{staticClass:"mb-1",attrs:{dense:"",filled:"","hide-details":"auto",clearable:"",label:"Schedule Task Name *"},model:{value:t.task.name,callback:function(e){t.$set(t.task,"name",e)},expression:"task.name"}})],1),n("v-col",{attrs:{md:"6"}},[n("v-text-field",{staticClass:"mb-1",attrs:{dense:"",filled:"","hide-details":"auto",clearable:"",label:"Mail Subject"},model:{value:t.task.subject,callback:function(e){t.$set(t.task,"subject",e)},expression:"task.subject"}})],1),n("v-col",{attrs:{md:"6"}},[n("v-text-field",{staticClass:"mb-1",attrs:{dense:"",filled:"","hide-details":"auto",clearable:"",label:"Mail From *"},model:{value:t.task.from,callback:function(e){t.$set(t.task,"from",e)},expression:"task.from"}})],1),n("v-col",{attrs:{md:"6"}},[n("v-combobox",{attrs:{items:t.members,"hide-selected":"","hide-details":"auto",label:"Mail To *","deletable-chips":"","return-object":!1,multiple:"","small-chips":"",filled:"",dense:"",clearable:"","item-text":"email","item-value":"email"},scopedSlots:t._u([{key:"no-data",fn:function(){return[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v(' No results matching "'),n("strong",[t._v(t._s(t.search))]),t._v('". Press '),n("kbd",[t._v("enter")]),t._v(" to create a new one ")])],1)],1)]},proxy:!0}]),model:{value:t.task.to,callback:function(e){t.$set(t.task,"to",e)},expression:"task.to"}})],1)],1),n("Editor",{ref:"editor",attrs:{placeholder:"Mail Body *",content:t.task?t.task.contents:"",hasFloatingTools:!1},model:{value:t.task.contents,callback:function(e){t.$set(t.task,"contents",e)},expression:"task.contents"}}),n("v-row",{attrs:{dense:""}},[n("v-col",{attrs:{md:"4"}},[n("v-select",{staticClass:"mb-1",attrs:{dense:"",filled:"","hide-details":"auto",items:t.interval_types,"item-value":"value","return-object":!1,label:"Interval Type *"},model:{value:t.task.interval_type,callback:function(e){t.$set(t.task,"interval_type",e)},expression:"task.interval_type"}})],1),n("v-col",{attrs:{md:"4"}},[n("v-select",{staticClass:"mb-1",attrs:{disabled:!t.interval_type_at||0===t.interval_type_at.length,dense:"",filled:"","hide-details":"auto",items:t.interval_type_at,"item-value":"value","item-text":"text","return-object":!1,label:t.interval_type_at&&0!==t.interval_type_at.length?"Interval At *":"Interval At"},model:{value:t.task.interval_at,callback:function(e){t.$set(t.task,"interval_at",e)},expression:"task.interval_at"}})],1),n("v-col",{attrs:{md:"4"}},[n("v-autocomplete",{staticClass:"mb-1",attrs:{dense:"",filled:"","hide-details":"auto",items:t.timezones,"item-value":"zone","item-text":"text",label:"Timezone *"},model:{value:t.task.timezone,callback:function(e){t.$set(t.task,"timezone",e)},expression:"task.timezone"}})],1)],1)],1),n("v-card-actions",{staticClass:"mb-3 mr-2 py-3"},[n("small",[t._v("* Required")]),n("v-spacer"),t.editting?n("v-btn",{staticClass:"px-5",attrs:{disabled:!t.validScheduleTask,loading:t.submitting},on:{click:t.saveChanges}},[t._v(" Update Schedule Task ")]):t._e(),t.editting?t._e():n("v-btn",{staticClass:"px-5",attrs:{disabled:!t.validScheduleTask,loading:t.submitting},on:{click:t.addNewScheduleTask}},[t._v(" Save New Schedule Task ")])],1)],1),n("Empty",{directives:[{name:"show",rawName:"v-show",value:!t.activeType&&t.schedule_tasks.length>0,expression:"!activeType && schedule_tasks.length > 0"}],attrs:{headline:"Select from the left"}}),n("Empty",{directives:[{name:"show",rawName:"v-show",value:!t.activeType&&0===t.schedule_tasks.length,expression:"!activeType && schedule_tasks.length === 0"}],attrs:{headline:"Create a new schedule task"}})],1)],1)],1)],1)],1)]),n("delete-dialog",{attrs:{"open-dialog":t.delete_dialog,title:"Delete Schedule Task","text-content":"Are you sure you want to delete this schedule task?"},on:{"update:openDialog":function(e){t.delete_dialog=e},"update:open-dialog":function(e){t.delete_dialog=e},delete:t.handleDelete}}),n("HistoryDialog",{attrs:{"open-dialog":t.history_dialog,id:t.activeId},on:{"update:openDialog":function(e){t.history_dialog=e},"update:open-dialog":function(e){t.history_dialog=e}}})],1)},i=[],s=(n("8e6e"),n("456d"),n("ac6a"),n("8615"),n("7f7f"),n("6762"),n("2fdb"),n("20d6"),n("ade3")),o=n("e06e"),r=n("1be9"),l={scheduleTask:function(){return r["a"].get("api/schedule-tasks")},toggle_status:function(t){return r["a"].post("api/schedule-tasks/".concat(t,"/toggle-status"),{})},updateScheduleTask:function(t,e){return r["a"].put("api/schedule-tasks/".concat(t),e)},newScheduleTask:function(t){return r["a"].post("api/schedule-tasks",t)},members:function(){return r["a"].get("api/company/members")},delete_schedule_task:function(t){return r["a"].delete("api/schedule-tasks/".concat(t))}},c=n("2f62"),u=n("0644"),d=n.n(u),f=n("579d"),h=n("c1df"),p=n("5d98"),v=n("5b70"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("custom-dialog",{attrs:{title:"Schedule Task History",open:t.open,"button1-text":"Close","max-width":"800",hasFooter:!1},on:{"update:open":function(e){t.open=e}},scopedSlots:t._u([{key:"content",fn:function(){return[t.items.length>0?[n("v-expansion-panels",{attrs:{focusable:"",multiple:"",flat:""},model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}},t._l(t.items,(function(e){return n("v-expansion-panel",{key:e.id},[n("v-expansion-panel-header",[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"6"}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-email-check-outline")]),t._v(" "+t._s(t._f("ucwords")(e.props.name))+" ")],1),n("v-col",{attrs:{cols:"3"}},[n("small",{staticClass:"caption"},[t._v(t._s(t._f("ucwords")(t.snakeCaseToNormal(e.interval_type)))+" "),e.interval_at?n("span",[t._v(t._s(e.interval_at))]):t._e()])]),n("v-col",{attrs:{cols:"3"}},[n("small",{staticClass:"caption"},[t._v(" "+t._s(e.run_at))])])],1)],1),n("v-expansion-panel-content",[n("v-card",{attrs:{flat:""}},[n("v-card-text",[t._v(" From: "+t._s(e.props.from)+" "),n("br"),t._v(" To: "+t._s(e.props.to.join(","))+" "),n("br"),t._v(" Subject: "+t._s(t._f("ucwords")(e.props.subject))+" "),n("br"),t._v(" Sent: "+t._s(e.run_at)+" ")]),n("v-card-text",{domProps:{innerHTML:t._s(e.props.contents)}})],1)],1)],1)})),1),n("v-row",[n("v-spacer"),n("v-btn",{attrs:{text:"",disabled:t.noMoreData,loading:t.btn_loading},on:{click:t.load_more_history}},[t._v(" Load More ")]),n("v-spacer")],1)]:n("Empty",{attrs:{headline:"No history yet"}})]},proxy:!0}])})},_=[],g=(n("c5f6"),n("57e5")),b=n("6f58"),k={name:"HistoryDialog",mixins:[o["a"],b["a"],f["a"]],components:{CustomDialog:g["a"]},props:{openDialog:Boolean,id:Number},data:function(){return{task_id:null,open:!1}},watch:{openDialog:function(t){this.open=t},open:function(t){this.$emit("update:openDialog",t)},id:function(t){this.task_id=t,this.load_history(t)}},methods:{load_history:function(t){this.fill_table_via_url("api/schedule-tasks/".concat(t,"/history"))},load_more_history:function(){this.load_more_via_url("api/schedule-tasks/".concat(this.id,"/history"))}}},y=k,A=n("2877"),w=Object(A["a"])(y,m,_,!1,null,"aba1f40e",null),x=w.exports;function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function B(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(Object(n),!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var E={name:"ScheduleTask",mixins:[o["a"],f["a"]],components:{Editor:p["a"],DeleteDialog:v["a"],HistoryDialog:x},data:function(){return{paths:[{text:"Settings",disabled:!1,route:{name:"settings"}},{text:"Schedule Tasks",disabled:!0,route:null}],members:[],activeType:null,schedule_tasks:[],timezones:[],editting:!1,submitting:!1,defaults:{id:null,schedule_type:"email",name:null,from:null,to:[],subject:null,contents:null,interval_type:"every_month_at",interval_at:"1",timezone:"UTC"},task:{id:null,schedule_type:"email",name:null,from:null,to:[],subject:null,contents:null,interval_type:"every_month",interval_at:null,timezone:"UTC"},delete_dialog:!1,history_dialog:!1,to_delete:null,activeId:null}},mounted:function(){this.$event.$emit("path-change",this.paths),this.getScheduleTasks(),this.getMembers()},computed:B(B({},Object(c["c"])(["user"])),{},{interval_type_at:function(){var t=this;if(!this.interval_types)return"";var e=this.interval_types.findIndex((function(e){return e.value===t.task.interval_type}));return~e?this.interval_types[e].at:""},every_hour_at:function(){for(var t=[],e=0;e<24;e++)t.push(h({hour:e}).format("h:mm A"));return t},every_week_at:function(){return this.weekdays()},every_month_at:function(){for(var t=[],e=31,n=1;n<e;n++)t.push({value:"".concat(n),text:"".concat(this.getOrdinalNum(n)," Of The Month")});return t.push({value:"last",text:"Last Day Of The Month"}),t},interval_types:function(){return[{text:"Every Hour",value:"every_hour",at:null},{text:"Every Day At",value:"every_day_at",at:this.every_hour_at},{text:"Every Week On",value:"every_week_at",at:this.every_week_at},{text:"Every Month On",value:"every_month_at",at:this.every_month_at}]},validScheduleTask:function(){if(!this.task.interval_type)return!1;if(this.task.interval_type.includes("_at")&&(!this.task.interval_at||""===this.task.interval_at))return!1;if(!this.validateEmail(this.task.from))return!1;if(this.task.to.length>0)for(var t=0;t<this.task.to.length;t++)if(!this.validateEmail(this.task.to[t].trim()))return!1;return this.task.name&&this.task.from&&this.task.to.length>0&&this.task.contents}}),methods:{resetEditor:function(){this.$refs.editor&&this.$refs.editor.setValue("")},newScheduleTask:function(t){this.editting=!1,this.task=d()(this.defaults),this.task.schedule_type=t,this.task.from=this.user.email,this.$refs.editor&&this.$refs.editor.setValue(this.task.contents||"")},setActiveType:function(t){this.editting=!0,this.activeType={id:t.id,schedule_type:t.schedule_type,name:t.props.name,from:t.props.from,to:t.props.to,subject:t.props.subject,contents:t.props.contents,interval_type:t.interval_type,interval_at:t.interval_at,timezone:t.timezone},this.task=this.activeType,this.$refs.editor&&this.$refs.editor.setValue(this.task.contents)},addNewScheduleTask:function(){var t=this;if(this.validScheduleTask){this.submitting=!0;var e={schedule_type:this.task.schedule_type,name:this.task.name,from:this.task.from,to:this.task.to,subject:this.task.subject,contents:this.task.contents,interval_type:this.task.interval_type,interval_at:this.task.interval_at,timezone:this.task.timezone};l.newScheduleTask(e).then((function(e){var n=e.data;t.schedule_tasks.push(n),t.$event.$emit("open_snackbar","Schedule task added."),t.task=d()(t.defaults),t.resetEditor()})).finally((function(){t.submitting=!1}))}else this.$event.$emit("open_snackbar","Please fill in required * fields","error")},saveChanges:function(){var t=this;if(this.validScheduleTask){this.submitting=!0;var e={id:this.task.id,schedule_type:this.task.schedule_type,name:this.task.name,from:this.task.from,to:this.task.to,subject:this.task.subject,contents:this.task.contents,interval_type:this.task.interval_type,interval_at:this.task.interval_at,timezone:this.task.timezone};l.updateScheduleTask(this.task.id,e).then((function(e){var n=e.data,a=t.schedule_tasks.findIndex((function(t){return t.id===n.id}));~a&&(t.schedule_tasks.splice(a,1,n),t.$event.$emit("open_snackbar","Schedule task updated."))})).finally((function(){t.submitting=!1}))}else this.$event.$emit("open_snackbar","Please fill in required * fields","error")},getScheduleTasks:function(){var t=this;this.loading=!0,l.scheduleTask().then((function(e){var n=e.data;t.schedule_tasks=n.schedule_tasks,t.schedule_tasks.length>0&&t.setActiveType(t.schedule_tasks[0]),t.timezones=Object.values(n.timezones)})).finally((function(){t.loading=!1}))},toggleStatus:function(t){var e=this;l.toggle_status(t.id).then((function(t){var n=t.data,a=e.schedule_tasks.findIndex((function(t){return t.id===n.id}));if(~a){e.schedule_tasks.splice(a,1,n);var i=n.deleted_at?"Schedule task deactivated!":"Schedule task activated!";e.$event.$emit("open_snackbar",i)}}))},getMembers:function(){var t=this;l.members().then((function(e){var n=e.data;t.members=n}))},confirm_delete:function(t){this.to_delete=t,this.delete_dialog=!0},handleDelete:function(){var t=this;l.delete_schedule_task(this.to_delete.id).then((function(e){e.data;var n=t.schedule_tasks.findIndex((function(e){return e.id===t.to_delete.id}));~n&&(t.schedule_tasks.splice(n,1),t.to_delete=null,t.delete_dialog=!1,t.$event.$emit("open_snackbar","Schedule task deleted."))})).finally((function(){t.schedule_tasks.length>0&&t.setActiveType(t.schedule_tasks[0])}))},showHistory:function(t){this.activeId=t.id,this.history_dialog=!0}}},T=E,D=(n("1296"),Object(A["a"])(T,a,i,!1,null,null,null));e["default"]=D.exports},"5b70":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("custom-dialog",{attrs:{title:t.title,content:t.textContent,"button1-text":t.cancelButtonText,"button2-text":t.deleteButtonText,open:t.open},on:{"update:open":function(e){t.open=e},button1:t.cancel_clicked,button2:t.delete_clicked},scopedSlots:t._u([{key:"content",fn:function(){return[t._t("content",[n("v-banner",{attrs:{"two-line":"",outlined:"",tile:"",flat:""}},[n("v-icon",{attrs:{slot:"icon","x-large":"",color:"red accent-4"},slot:"icon"},[t._v(" mdi-alert-octagram ")]),n("p",{staticClass:"subtitle-1",domProps:{innerHTML:t._s(t.textContent)}})],1)])]},proxy:!0}],null,!0)})],1)},i=[],s=n("57e5"),o={components:{CustomDialog:s["a"]},props:{title:{type:String,default:"Default Modal Title"},textContent:{type:String,default:"Default Modal Text Content"},cancelButtonText:{type:String,default:"Cancel"},deleteButtonText:{type:String,default:"Yes, Delete"},openDialog:Boolean},data:function(){return{open:!1}},watch:{openDialog:function(t){this.open=t},open:function(t){this.$emit("update:openDialog",t)}},methods:{cancel_clicked:function(){this.open=!1},delete_clicked:function(){this.$emit("delete")},showDialog:function(){this.open=!0},closeDialog:function(){this.open=!1}}},r=o,l=n("2877"),c=Object(l["a"])(r,a,i,!1,null,null,null);e["a"]=c.exports},"6f58":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n("8e6e"),n("456d"),n("ac6a");var a=n("2909"),i=n("ade3"),s=n("2f62"),o=n("1be9");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c={data:function(){return{loading:!1,panel:[]}},computed:l({},Object(s["c"])(["global_configs"])),methods:{all:function(){this.panel=Object(a["a"])(Array(this.panel_items).keys()).map((function(t,e){return e}))},none:function(){this.panel=[]},sendRequest:function(t,e){var n=this;this["".concat(t,"_btn")]=!0,o["a"].post("api/configs",e).then((function(e){var a=e.data;n[t]=a.value,n.$event.$emit("open_snackbar","Settings updated!")})).finally((function(){return n["".concat(t,"_btn")]=!1}))},getAllConfig:function(t){var e=this;this.loading=!0,o["a"].get("api/configs").then((function(e){var n=e.data;"function"===typeof t&&t(n)})).finally((function(){return e.loading=!1}))}}}},7335:function(t,e,n){t.exports=n.p+"img/no-video-preview.6c0717ce.png"},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},b047c:function(t,e,n){var a=n("1a8c"),i=n("408c"),s=n("b4b0"),o="Expected a function",r=Math.max,l=Math.min;function c(t,e,n){var c,u,d,f,h,p,v=0,m=!1,_=!1,g=!0;if("function"!=typeof t)throw new TypeError(o);function b(e){var n=c,a=u;return c=u=void 0,v=e,f=t.apply(a,n),f}function k(t){return v=t,h=setTimeout(w,e),m?b(t):f}function y(t){var n=t-p,a=t-v,i=e-n;return _?l(i,d-a):i}function A(t){var n=t-p,a=t-v;return void 0===p||n>=e||n<0||_&&a>=d}function w(){var t=i();if(A(t))return x(t);h=setTimeout(w,y(t))}function x(t){return h=void 0,g&&c?b(t):(c=u=void 0,f)}function C(){void 0!==h&&clearTimeout(h),v=0,c=p=u=h=void 0}function B(){return void 0===h?f:x(i())}function E(){var t=i(),n=A(t);if(c=arguments,u=this,p=t,n){if(void 0===h)return k(p);if(_)return clearTimeout(h),h=setTimeout(w,e),b(p)}return void 0===h&&(h=setTimeout(w,e)),f}return e=s(e)||0,a(n)&&(m=!!n.leading,_="maxWait"in n,d=_?r(s(n.maxWait)||0,e):d,g="trailing"in n?!!n.trailing:g),E.cancel=C,E.flush=B,E}t.exports=c},b4b0:function(t,e,n){var a=n("1a8c"),i=n("ffd6"),s=NaN,o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt;function d(t){if("number"==typeof t)return t;if(i(t))return s;if(a(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=a(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=l.test(t);return n||c.test(t)?u(t.slice(2),n?2:8):r.test(t)?s:+t}t.exports=d},e06e:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n("386d"),n("a481"),n("c5f6"),n("28a5"),n("55dd"),n("2fdb"),n("20d6"),n("6762"),n("ac6a");var a=n("b047c"),i=n.n(a),s=n("d4e9"),o=n("1be9"),r={methods:{resetPagination:function(){this.pagination.current=1,this.pagination.total=0,this.noMoreData=!1},clear_selected:function(){this.selected=[],this.$event.$emit("clear_selected",[]),this.$event.$emit("btnloading_off",!1)},add_item:function(t,e){var n=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3?arguments[3]:void 0;s["a"][t](e,a).then((function(t){var e=t.data;Array.isArray(e)?e.reverse().forEach((function(t){return n.items.push(t)})):n.items.push(e),n.clear_selected(),n.$refs.add_dialog&&n.$refs.add_dialog.clear_and_close(),n.$event.$emit("open_snackbar",n.table_config.add_message),"function"===typeof i&&i(t)})).finally((function(){return n.$event.$emit("btnloading_off",!1)}))},extract_per_page:function(t){var e=t.search("per_page");return t.substring(e+9,e+10)},calc_per_page_items:function(t,e){var n=[5,10,15,20,25];return n.includes(t)||n.push(t),!n.includes(e)&&e<=25&&n.push(e),n},update_item:function(t,e){var n=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3?arguments[3]:void 0;s["a"][t](this.edit_item.id,e,a).then((function(t){var e=n.items.findIndex((function(e){return e.id===t.data.id}));~e&&n.items.splice(e,1,t.data),n.edit_item={id:null,fields:null},n.edit_dialog=!1,n.clear_selected(),n.$event.$emit("open_snackbar",n.table_config.update_message),"function"===typeof i&&i(t)})).finally((function(){return n.$event.$emit("btnloading_off",!1)}))},delete_item:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2?arguments[2]:void 0;s["a"][t](this.delete_item_id,n).then((function(){var t=e.items.findIndex((function(t){return t.id===e.delete_item_id}));~t&&e.items.splice(t,1),e.delete_item_id=null,e.delete_dialog=!1,e.clear_selected(),e.$event.$emit("open_snackbar",e.table_config.delete_message),"function"===typeof a&&a(response)})).finally((function(){return e.$event.$emit("btnloading_off",!1)}))},bulk_delete:function(t){var e=this,n={ids:this.selected.map((function(t){return t.id}))};s["a"][t]({data:n}).then((function(t){var n=t.data;e.selected.forEach((function(t){var n=e.items.findIndex((function(e){return e.id===t.id}));~n&&e.items.splice(n,1)})),e.bulk_delete_dialog=!1,e.clear_selected(),e.$event.$emit("open_snackbar",n.message)})).finally((function(){e.$event.$emit("btnloading_off",!1)}))},bulk_delete_via_url:function(t){var e=this,n={ids:this.selected.map((function(t){return t.id}))};o["a"].delete(t,{data:n}).then((function(t){var n=t.data;e.selected.forEach((function(t){var n=e.items.findIndex((function(e){return e.id===t.id}));~n&&e.items.splice(n,1)})),e.bulk_delete_dialog=!1,e.clear_selected(),e.$event.$emit("open_snackbar",n.message)})).finally((function(){e.$event.$emit("btnloading_off",!1)}))},open_edit_dialog:function(t){this.edit_dialog=!0,this.$set(this.edit_item,"id",t.id),this.$set(this.edit_item,"fields",t)},open_delete_dialog:function(t){this.delete_dialog=!0,this.delete_item_id=t.id},open_bulk_delete_dialog:function(t){this.bulk_delete_dialog=!0,this.selected=t},fill_table:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.loading=!0,s["a"][t](a).then((function(t){e.items_response=t.data,n?(e.items=t.data.data,e.pagination.current=t.data.current_page,e.pagination.total=t.data.last_page,e.hasMoreData()):e.items=t.data})).finally((function(){e.clear_selected(),e.loading=!1,e.$event.$emit("btnloading_off",!1)}))},fill_table_via_url:function(t){var e=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=arguments.length>2?arguments[2]:void 0;this.loading=!0;var i={page:this.pagination.current};t.includes("per_page")||(i.per_page=this.$store.getters["configs/general_page_limits"]),o["a"].get(t,{params:i}).then((function(t){e.items_response=t.data,n?(e.items=t.data.data,e.pagination.current=t.data.current_page,e.pagination.total=t.data.last_page,e.hasMoreData()):e.items=t.data,"function"===typeof a&&a(t)})).finally((function(){e.clear_selected(),e.loading=!1,e.$event.$emit("btnloading_off",!1)}))},load_more_on_table:function(t){var e=this;this.loading=!0;var n={page:this.pagination.current+1};s["a"][t]({params:n}).then((function(t){var n=t.data;e.items_response=n.data,n.data.forEach((function(t){e.items.push(t)})),e.pagination.current=n.current_page,e.pagination.total=n.last_page,e.hasMoreData()})).finally((function(){e.clear_selected(),e.loading=!1,e.scrollToBottom(),e.$event.$emit("btnloading_off",!1)}))},load_more_via_url:function(t,e){var n=this;this.loading=!0;var a={page:this.pagination.current+1};t.includes("per_page")||(a.per_page=this.$store.getters["configs/general_page_limits"]),o["a"].get(t,{params:a}).then((function(t){var a=t.data;n.items_response=a.data,a.data.forEach((function(t){n.items.push(t)})),n.pagination.current=a.current_page,n.pagination.total=a.last_page,n.hasMoreData(),"function"===typeof e&&e(a)})).finally((function(){n.clear_selected(),n.loading=!1,n.scrollToBottom(),n.$event.$emit("btnloading_off",!1)}))},fill_table_with_data:function(t){this.items=t},add_table_rows:function(t,e){this.items=t,this.items_response=e},changeSort:function(t){this.sort.sortBy===t?this.sort.descending=!this.sort.descending:(this.sort.sortBy=t,this.sort.descending=!1)},refresh_table:function(t){var e=this;s["a"][this.table_config.refresh_table_api_name](t).then((function(t){e.$event.$emit("open_snackbar",e.table_config.refresh_table_message),e.loading=!1,e.clear_selected(),e.items_response=t.data,e.items=t.data.data})).finally((function(){return e.$event.$emit("btnloading_off",!1)}))},update_table_actions:function(t){if(t.page&&(this.page=Number(t.page)),t.per_page&&(this.rows_per_page=Number(t.per_page)),t.search&&(this.search=t.search),t.sort){var e=t.sort.split("|");this.sort.sortBy=e[0],"asc"===e[1]?this.sort.descending=!1:"desc"===e[1]&&(this.sort.descending=!0)}},hasMoreData:function(){this.componentKey+=1,this.pagination.current>=this.pagination.total&&(this.noMoreData=!0)},toggleAll:function(){this.selected.length?this.clear_selected():this.selected=this.items.slice()},setPreferredView:function(t){window.localStorage.setItem("bzk_prefer_view",t),this.view=t},getPreferredView:function(){return window.localStorage.getItem("bzk_prefer_view")||"list"},scrollToBottom:function(){setTimeout((function(){var t=document.getElementsByClassName("v-data-table__wrapper")[0];t&&(t.scrollTop=t.scrollHeight)}),1)},debounce:i()((function(t){this.search=t}),500)}},l={mixins:[r],data:function(){return{edit_dialog:!1,add_dialog:!1,delete_dialog:!1,permissionDialog:!1,bulk_delete_dialog:!1,loading:!1,items:[],items_response:null,edit_item:{id:null,fields:null},delete_item_id:null,show_delete_selected:!1,selected_ids:[],selected:[],rows_per_page:null,page:1,sort:{sortBy:null,descending:!1},search:"",pagination:{current:1,total:0},noMoreData:!1,componentKey:1,view:"list",btnloading:!1}},watch:{selected_ids:function(t){t.length>0?this.show_delete_selected=!0:this.show_delete_selected=!1},api_query:function(t,e){var n=Number(this.extract_per_page(t)),a=Number(this.extract_per_page(e))||null;this.items_response&&this.rows_per_page===this.items.length&&n!==a||(this.$router.replace({name:this.table_config.route_name,query:{page:this.page,per_page:this.rows_per_page,search:this.search,sort:this.query_for_sorting}}),this.loading=!0,this.refresh_table(t))}}}},e55f:function(t,e){t.exports="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADFCAYAAAAYLR06AAAHhElEQVR4nO3dP0scWxjH8XFZmzRpvOFCEBbjH6IJUSGQvIQUVjZhERSiEiEvIVWKkCZWarNVIAFtDPgPIiyBgFpImmCp7hazr+PcakO43OvOz51znj2z3+LTOufMeb7EuLuzSavVcgCySawXAMSEYAABwQACggEEBAMICAYQEAwgIBhAQDCAgGAAAcEAAoIBBAQDCAgGEBAMICAYQEAwgIBgAAHBAAKCAQQEAwgIBhAQDCAgGEBAMICAYAABwQACggEEBAMICAYQEAwgIBhAQDCAgGAAAcEAAoIBBAQDCAgGEBAMICAYQEAwgIBgAAHBAAKCAQQE4/PmJklw1nsuOoLx5O7duybB3Llzx3zvRUYwHty7d88klrahoSHze1BUBJOz6elp01jaxsfHze9FERFMjtbW1sxD+dPS0pL5PSkagsnJ+vq6eSD/5f379+b3pkgIJgdbW1vmYdxkfX3d/B4VBcF06fT01DyILOr1uvm9KgKC6cLFxYV5CIpfv36Z37PY9W0wb968MR/gGK2trZmfHcEE8u3bN/OBK5LDw0PzMyUYT54/f24+YEX09OlT87MlmJw9fvzYfLCKbGxszPyMCSYnHz9+NB+ofvDu3TvzsyaYPDbYA8PUL9I0NT9vgunCly9fzIeon9RqNfMzJ5huNtcDQ9RvrM+cYAgmKtZnTjAEExXrMycYgomK9ZkTDMFExfrMCYZgomJ95gRDMFGxPnOCKXgwAwMDbnx83FWrVbexseGOj49/29zcdNVq1U1MTLhSqWS+VoIhGDPb29vyK+NpmrqdnR3ztRNMQVkPz7/l/SSXqakp8z0RTIFYD09bpVJxjUbDyx6bzaYbGxsz3yPBFID18CRJ4k5OToLs9fz83HyvBBM5y8Epl8smey6XywTjc6asF+B1c0ZDc//+fbO3uqdp6iqVCsH4minrBXjdnFEs1vtutVpueHiYYHzMlPUCvG4u8LCUy+Wu/2U5Ojr6rZufk6apGxwcJJi8Z8p6AV431+PD0mg03OvXrzP97OXlZXd9fV24exAbgsmJ+tewJ0+e3Oo6k5OT0nXOzs4IJs+Zsl6A180FGpJKpZJ5TXt7e7lcc3d3N/M1R0dHCSavmbJegNfNBRqSrC9Kvnz5Mtfrzs/PZ7pus9kkmLxmynoBXjcXYECyvt0l71ja5ubmMl1/dnaWYPKYKesFeN1cjwxIXr+G/Z+dnZ2o7kfMCCbAgLCO4iCYLmxvb3dcQ6jH1GZ5XOvBwQHBEIxdMJ1epGw0GkFiabu6urpxPWmaEgzB2AQzMDDQ8fpZX5TMy+LiYsc1+f7kpvWZE0yPBpPlr2MhY8k6sL6/Ft36zAmmR4OpVqtRBrOyskIwBBN+YDc2NqIMplarEQzBhB/Y4+PjG699dHRkEsz+/v6N66rX6wRDMOGD+f79O8EQTLH4HAz+hSGYwvE5GJubm6bXv+3A8n8YgjEZ2Fj/Sra6ukowBBN+YCcmJqIMZmZmhmAIJvzAlkqljtdfXl4OGsvCwkLHNfFKP8GYBJMknd9Ldn19HTQY3ktGMD0dTJbPoUxOTgaJZWRkpONaDg8PCYZg7ILJOiCsozgIJsCA7O7uel3D58+fo7ofMSOYLk1NTWVay/z8vJfrv3jxItP1nz17RjB5zJT1ArxuLsCAJEnims1mpvXMzc2ZxMJTYwimp4LJ8vHgtry+QSzrr2GtVss9fPiQYPKaKesFeN1coCFJksSdn59La7vtw/UePHggXefnz59B74P1mXufKesFeN1cwEG5zbBcXV25xcXFTD97YWGh4+ssMd6D2BBMjvJ4ev/+/v5v3fwcnt7vaaasF+B1c4GHJUm05yz7NDIyYrJ/6317nynrBXjdnMHAJEnihoeHTb+BzCoWgomc1dAkSeIGBwdN9mzxaxjBFITl4LSdnZ0F2Wvov4YRTAFZD0/b6Oho5hc3Vc1mM+jrLATTA4vwtrkeGKA/zc7O5rq/UG93IRiCMXdwcCD/YSBN0yBv0ScYgulZpVLJTU9Pu5WVFVer1Vy9Xnc/fvxw9Xrd1Wo1t7q66mZmZrx/UpJgCMZ8ePqR9ZkTDMFExfrMCYZgomJ95gRDMFGxPnOCIZioWJ85wRBMVKzPnGAIJirWZ04wXfj06ZP5APWTra0t8zMnmG432AOD1C+sPtJAMDn68OGD+SD1g7dv35qfNcHkJNTjWvtVlsfUFkVfBNNq+f+67X716NEj87MlGE/29vbMB6xIvn79an6mBBPA5eWl9++rL6pXr165y8tL8zMkGCACBAMICAYQEAwgIBhAQDCAgGAAAcEAAoIBBAQDCAgGEBAMICAYQEAwgIBgAAHBAAKCAQQEAwgIBhAQDCAgGEBAMICAYAABwQACggEEBAMICAYQEAwgIBhAQDCAgGAAAcEAAoIBBAQDCAgGEBAMICAYQEAwgIBgAAHBAAKCAQQEAwgIBhAQDCAgGEBAMICAYAABwQACggEEBAMICAYQEAwgIBhAQDCAgGAAAcEAAoIBBAQDCAgGEBAMICAYQEAwgIBgAAHBAAKCAQQEAwgIBhAkQ3/97QBk8w9xfZQALXXWhwAAAABJRU5ErkJggg=="},e6e6:function(t,e,n){}}]);
//# sourceMappingURL=chunk-6953b247.e0acd62e.js.map