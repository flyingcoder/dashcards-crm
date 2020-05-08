(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1deb39a8"],{"145e":function(t,e,i){"use strict";var s=i("a3ac"),a=i.n(s);a.a},"2bf3":function(t,e,i){},"4359f":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"timer__tab"},[i("VueTable",{key:t.componentKey,attrs:{items:t.items,headers:t.headers,showRowActions:!0,icon:"mdi-clock",title:"Project Timers",noMoreData:t.noMoreData,hasFooter:!0,showSelect:!1,loading:t.loading},on:{"load-more":t.get_more_timers},scopedSlots:t._u([{key:"row-slot",fn:function(e){var s=e.item;return[i("td",[i("Avatars",{attrs:{items:s.assignee,deep:!1,count:5}})],1),i("td",{staticClass:"text-cap clickable-td",on:{click:function(e){return t.view_task(s.id)}}},[t._v(" "+t._s(s.title)+" ")]),i("td",[t._v(" "+t._s(s.milestone.title)+" ")]),i("td",{staticClass:"text-cap"},[t._v(t._s(s.status))]),i("td",[i("PlayPause",{attrs:{item:s},on:{"row-item-updated":function(t){s=t}}})],1)]}}])})],1)},a=[],r=i("bd86"),n=(i("c5f6"),i("e06e")),o=(i("1be9"),i("0ebe")),c=i("72c1"),u=i("a71c"),l=Object(r["a"])({name:"TimerTab",mixins:[n["a"]],components:{VueTable:o["a"],Avatars:c["a"],PlayPause:u["a"]},props:{id:[Number,String]},data:function(){return{sortList:[{title:"Sort by Client"},{title:"Sort by Task"},{title:"Sort by Services"},{title:"Sort by Time"},{title:"Sort by Date"}],headers:[{text:"Assigned To",sortable:!1},{text:"Task",sortable:!1},{text:"Milestone",sortable:!1},{text:"Status",sortable:!1},{text:"Total Time",sortable:!1}]}},methods:{view_task:function(t){this.$router.push("/dashboard/project-preview/".concat(this.id,"/tasks?id=")+t)}},computed:{dynamic_api:function(){return"api/projects/".concat(this.id,"/project-tasks-timers")},client:function(){return this.id}},created:function(){this.get_timers()}},"methods",{get_timers:function(){this.fill_table_via_url(this.dynamic_api)},get_more_timers:function(){this.load_more_via_url(this.dynamic_api)}}),m=l,_=(i("48af"),i("2877")),d=Object(_["a"])(m,s,a,!1,null,"31540a64",null);e["default"]=d.exports},"48af":function(t,e,i){"use strict";var s=i("e3a7"),a=i.n(s);a.a},"72c1":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"avatar-wrapper"},[i("ul",{staticClass:"avatars"},[t._l(t.cutList,(function(e,s){return t.cutList.length>0?i("li",{key:s,staticClass:"avatars__item"},[i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(s){var a=s.on;return[t.deep&&e.user?i("img",t._g({staticClass:"avatars__img",attrs:{src:e.user.image_url}},a)):e?i("img",t._g({staticClass:"avatars__img",attrs:{src:e.image_url}},a)):t._e()]}}],null,!0)},[t.deep&&e.user?i("span",[t._v(t._s(e.user.fullname))]):e?i("span",[t._v(t._s(e.fullname))]):t._e()])],1):t._e()})),t.less>0?i("li",{staticClass:"avatars__item"},[i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[i("span",t._g({staticClass:"avatars__others"},s),[t._v("+"+t._s(t.less))])]}}],null,!1,1062212335)},[i("span",{domProps:{innerHTML:t._s(t.lessList)}})])],1):t._e(),t.hasAddMember?i("li",{staticClass:"avatars__item"},[i("span",{staticClass:"avatars__add"},[i("v-icon",{attrs:{dark:""},on:{click:function(e){return t.$emit("add-member",t.item)}}},[t._v("add")])],1)]):t._e()],2)])},a=[],r=(i("c5f6"),i("0644")),n=i.n(r),o={inheritAttrs:!1,props:{items:{type:Array,default:function(){return[]}},count:{type:Number,default:3},deep:{type:Boolean,default:!1},hasAddMember:{type:Boolean,default:!1}},computed:{less:function(){return this.items.length-this.count},cutList:function(){return this.items.length<this.count?this.items:n()(this.items).slice(0,this.count)},lessList:function(){var t=this,e=n()(this.items).slice(this.count,this.items.length);return e.length>0?e.map((function(e){return t.deep?e.user?e.user.fullname:"Deleted User":e?e.fullname:"Deleted User"})).join("<br>"):"Deleted User"}}},c=o,u=(i("145e"),i("2877")),l=Object(u["a"])(c,s,a,!1,null,"61c9581d",null);e["a"]=l.exports},"993a":function(t,e,i){"use strict";var s=i("2bf3"),a=i.n(s);a.a},a3ac:function(t,e,i){},a71c:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",{staticClass:"timer my-0 py-0"},[i("v-col",{staticClass:"time",class:t.timer_started?"success--text":""},[t._v(t._s(t.display))]),i("v-spacer"),i("v-col",{staticClass:"time-control"},[t.task_is_done?i("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[i("v-icon",t._g({attrs:{color:"error"}},s),[t._v("mdi-clock-alert-outline")])]}}],null,!1,1460511430)},[i("span",[t._v("Task is done!")])]):!t.timer_started&&t.can_start_timer?i("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[i("v-btn",t._g({attrs:{loading:t.btnloading,outlined:"",small:"",icon:""},on:{click:t.timerClick}},s),[i("v-icon",[t._v("play_arrow")])],1)]}}])},[i("span",[t._v("Start Timer")])]):t.timer_started&&t.can_stop_timer?i("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[i("v-btn",t._g({attrs:{loading:t.btnloading,outlined:"",small:"",icon:""},on:{click:t.timerClick}},s),[i("v-icon",[t._v("pause")])],1)]}}])},[i("span",[t._v("Pause Timer")])]):t._e()],1)],1)},a=[],r=(i("6b54"),i("28a5"),i("20d6"),i("2f62"),i("1be9")),n=(i("d4e9"),i("c1df")),o=i.n(n),c={name:"PlayPause",inheritAttrs:!1,props:{item:Object},data:function(){return{timer_started:!1,init_time:"00:00:00",interval:null,btnloading:!1}},computed:{display:{get:function(){return this.item.timer.timer_stats.format},set:function(t){this.init_time=t}},participants:function(){return this.item.assignee},is_viewer_a_participant:function(){var t=this,e=this.participants.findIndex((function(e){return e.id===t.viewer.id}));return!!~e},viewer:function(){return this.$store.getters.user},can_start_timer:function(){return this.is_viewer_a_participant},can_stop_timer:function(){return!!this.viewer.is_admin||this.is_viewer_a_participant},selectedDate:function(){return o()(this.forDate).format("YYYY-MM-DD")},now:function(){return o()().format("YYYY-MM-DD")},is_lapsed:function(){return o()(this.item.timer.timer_stopped,"YYYY-MM-DD")<o()()},task_is_done:function(){return!("Open"===this.item.status||"open"===this.item.status)},last_date_action:function(){return o()(this.item.timer.latest_timer.created_at).format("MMMM D YYYY")}},created:function(){this.is_open()&&(this.start_timer(),this.timer_started=!0)},methods:{is_open:function(){return"ongoing"===this.item.timer.timer_status},get_hours:function(t){return t.split(":")[0]},get_mins:function(t){return t.split(":")[1]},get_secs:function(t){return t.split(":")[2]},pause_timer:function(){var t=this;this.btnloading=!0,this.item.timer.timer_disabled=!0,r["a"].post("api/timer/pause",{type:"task",id:this.item.id}).then((function(){clearInterval(t.item.timer.timer_interval),t.item.timer.timer_disabled=!1,t.item.timer.timer_status="pause",t.timer_started=!1})).finally((function(){t.btnloading=!1}))},timerClick:function(){var t=this;if(!this.item.timer.timer_disabled)if(this.timer_started)this.pause_timer();else{this.btnloading=!0,this.start_timer();var e="api/timer/start";"pause"===this.item.timer.timer_status&&(e="api/timer/back"),this.item.timer.timer_disabled=!0,r["a"].post(e,{type:"task",id:this.item.id}).then((function(){t.item.timer.timer_disabled=!1,t.item.timer.timer_status="ongoing"})).finally((function(){t.btnloading=!1}))}},start_timer:function(){var t=this;this.timer_started=!0,this.item.timer.timer_interval=setInterval((function(){var e=t.get_hours(t.item.timer.timer_stats.format),i=t.get_mins(t.item.timer.timer_stats.format),s=t.get_secs(t.item.timer.timer_stats.format);s>=59&&i>=59?(e++,i=s="00"):s>=59?(i++,s="00"):s++,t.item.timer.timer_stats.format=t.set_time_running(e,i,s)}),1e3)},set_time_running:function(t,e,i){return 1===t.toString().length&&(t="0"+t),1===e.toString().length&&(e="0"+e),1===i.toString().length&&(i="0"+i),"".concat(t,":").concat(e,":").concat(i)}}},u=c,l=(i("993a"),i("2877")),m=Object(l["a"])(u,s,a,!1,null,"656912c2",null);e["a"]=m.exports},e3a7:function(t,e,i){}}]);
//# sourceMappingURL=chunk-1deb39a8.f096592f.js.map