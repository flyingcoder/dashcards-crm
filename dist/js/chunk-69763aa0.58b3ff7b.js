(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69763aa0"],{"145e":function(t,e,s){"use strict";var i=s("a3ac"),a=s.n(i);a.a},"186c":function(t,e,s){"use strict";var i=s("b7e2"),a=s.n(i);a.a},"18bc":function(t,e,s){"use strict";var i=s("b968"),a=s.n(i);a.a},"1c9c":function(t,e,s){},"2f68":function(t,e,s){"use strict";var i=function(t,e){var s=e._c;return s("div",{staticClass:"task__chips text-xs-center"},[s("v-chip",{staticClass:"mx-1",class:["task__chip",{active:"all"===e.props.activeChip}],attrs:{small:""},on:{click:function(t){return e.listeners["update:activeChip"]("all")}}},[s("v-avatar",{staticClass:"task__avatar",attrs:{left:""}},[e._v(e._s(e.props.countAll))]),e._v(" All ")],1),s("v-chip",{staticClass:"mx-1",class:["task__chip",{active:"completed"===e.props.activeChip}],attrs:{small:""},on:{click:function(t){return e.listeners["update:activeChip"]("completed")}}},[s("v-avatar",{staticClass:"task__avatar",attrs:{left:""}},[e._v(e._s(e.props.countCompleted))]),e._v(" Done ")],1),s("v-chip",{staticClass:"mx-1",class:["task__chip",{active:"pending"===e.props.activeChip}],attrs:{small:""},on:{click:function(t){return e.listeners["update:activeChip"]("pending")}}},[s("v-avatar",{staticClass:"task__avatar",attrs:{left:""}},[e._v(e._s(e.props.countPending))]),e._v(" Pending ")],1),s("v-chip",{staticClass:"mx-1",class:["task__chip",{active:"behind"===e.props.activeChip}],attrs:{small:""},on:{click:function(t){return e.listeners["update:activeChip"]("behind")}}},[s("v-avatar",{staticClass:"task__avatar",attrs:{left:""}},[e._v(e._s(e.props.countBehind))]),e._v(" Behind ")],1)],1)},a=[],n=(s("c5f6"),{name:"TaskChips",props:{countAll:Number,countCompleted:Number,countPending:Number,countBehind:Number,activeChip:String}}),r=n,c=(s("9443"),s("8ae9"),s("2877")),o=Object(c["a"])(r,i,a,!0,null,"3b96bb22",null);e["a"]=o.exports},3293:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"task-custom-table"},[s("v-layout",{staticClass:"task_header"},["All Tasks"==t.tab?s("v-flex",{staticClass:"task__tableHead",attrs:{xs3:""}},[t._v("Assigned ")]):t._e(),"All Tasks"==t.tab?s("v-flex",{staticClass:"task__tableHead",attrs:{xs5:""}},[t._v("Task")]):t._e(),"All Tasks"!=t.tab?s("v-flex",{staticClass:"task__tableHead",attrs:{xs8:""}},[t._v("Task")]):t._e(),s("v-flex",{staticClass:"task__tableHead text-center",attrs:{xs2:""}},[t._v("Status")]),s("v-flex",{staticClass:"task__tableHead text-center",attrs:{xs2:""}},[t._v("Action")])],1),s("div",{staticClass:"task_body",style:{height:t.bodyMaxHeight}},t._l(t.tasks,(function(e){return s("v-layout",{key:e.id,staticClass:"task-row",class:["task__tableBody",{active:e.id===t.active_task_id}],attrs:{"align-center":""},on:{click:function(s){return t.task_view_action(e)}}},["All Tasks"==t.tab?s("v-flex",{staticClass:"assignee__col",attrs:{xs3:""}},[e.assignee.length?s("Avatars",{staticStyle:{display:"inline-block"},attrs:{deep:!1,items:e.assignee,count:1}}):t._e(),e.assignee.length?t._e():s("span")],1):t._e(),"All Tasks"==t.tab?s("v-flex",{staticClass:"project__col subtitle-2",attrs:{xs5:""}},[t._v(" "+t._s(t._f("ucwords")(e.title))+" ")]):t._e(),"All Tasks"!=t.tab?s("v-flex",{staticClass:"project__col",attrs:{xs8:""}},[t._v(" "+t._s(t._f("ucwords")(e.title))+" ")]):t._e(),s("v-flex",{staticClass:"status__col text-center",attrs:{xs2:""}},[t._v(" "+t._s(e.status)+" "),"completed"===e.status?s("div",[s("div",{staticClass:"status__completed"})]):t._e(),"pending"===e.status?s("div",[s("div",{staticClass:"status__pending"})]):t._e(),"behind"===e.status?s("div",[s("div",{staticClass:"status__behind"})]):t._e(),"open"===e.status?s("div",[s("div",{staticClass:"status__open"})]):t._e()]),s("v-flex",{staticClass:"action__col",attrs:{xs2:""}},[s("v-menu",{attrs:{"offset-y":"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[s("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[s("v-btn",t._g({attrs:{color:"grey",dark:"",icon:""}},Object.assign({},a,i)),[s("v-icon",[t._v("mdi-dots-horizontal")])],1)]}}],null,!0)},[s("span",[t._v("Actions")])])]}}],null,!0)},[s("v-list",{attrs:{dense:""}},["completed"!==e.status&&t.can_edit_task?s("v-list-item",{on:{click:function(s){return t.task_action(e,"task-edit")}}},[s("v-list-item-title",[s("v-icon",{attrs:{color:"grey",left:""}},[t._v("edit")]),t._v(" Edit Task ")],1)],1):t._e(),t.can_delete_task?s("v-list-item",{on:{click:function(s){return t.task_action(e,"task-delete")}}},[s("v-list-item-title",[s("v-icon",{attrs:{color:"grey",left:""}},[t._v("delete")]),t._v(" Delete Task ")],1)],1):t._e(),t.can_view_task?s("v-list-item",{on:{click:function(s){return t.task_view_action(e)}}},[s("v-list-item-title",[s("v-icon",{attrs:{color:"grey",left:""}},[t._v("pageview")]),t._v(" View Task ")],1)],1):t._e(),"completed"!==e.status&&t.can_edit_task?s("v-list-item",{on:{click:function(s){return t.task_action(e,"task-mark-as-complete")}}},[s("v-list-item-title",[s("v-icon",{attrs:{color:"grey",left:""}},[t._v("check")]),t._v(" Mark as Complete ")],1)],1):t._e()],1)],1)],1)],1)})),1)],1)},a=[],n=(s("8e6e"),s("ac6a"),s("456d"),s("20d6"),s("bd86")),r=s("fcce"),c=s("72c1"),o=s("2f62");function l(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function u(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?l(Object(s),!0).forEach((function(e){Object(n["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var d={name:"TaskCustomTable",components:{Avatars:c["a"]},props:{tasks:Array,tab:String},inject:{bodyMaxHeight:{from:"bodyMaxHeight",default:"200px"}},data:function(){return{active_task_id:null}},created:function(){var t=this;this.tasks.length>0&&(this.active_task_id=this.tasks[0].id,this.$event.$emit("show-task-side-preview",this.tasks[0])),this.$event.$on("task_completed",(function(e){t.active_task_id||(t.active_task_id=e.id),t.task_is_completed()})),this.$event.$on("task_deleted",(function(e){t.active_task_id||(t.active_task_id=e.id),t.task_is_deleted()})),this.$event.$on("task-is-updated",(function(e){t.replace_task(e,e.id)}))},computed:u({},Object(o["c"])("taskCards",["page"]),{user:function(){return this.$store.getters.user},permission:function(){return this.$_permissions.get("tasks_own")},can_view_task:function(){return!!this.user.is_admin||this.permission&&this.permission.view},can_edit_task:function(){return!!this.user.is_admin||this.permission&&this.permission.update},can_delete_task:function(){return!!this.user.is_admin||this.permission&&this.permission.delete}}),methods:{row_clicked:function(t){this.active_task_id=t.id,this.$event.$emit("show-task-side-preview",t)},task_action:function(t,e){this.$event.$emit(e,t)},task_view_action:function(t){"project-preview"===this.page?this.row_clicked(t):this.task_action(t,"task-view")},replace_task:function(t,e){var s=this.tasks.findIndex((function(t){return t.id===e}));~s&&this.tasks.splice(s,1,t)},remove_task:function(t){var e=this.tasks.findIndex((function(e){return e.id===t}));~e&&this.tasks.splice(e,1)},task_is_completed:function(){var t=this,e={status:"completed"};r["a"].mark_as_complete_task(this.active_task_id,e).then((function(e){var s=e.data;t.replace_task(s,t.active_task_id),t.$event.$emit("btnloading_off",!1),t.$event.$emit("open_snackbar","Task is completed"),t.$event.$emit("close_confirm_dialog",!0)}))},task_is_deleted:function(){var t=this;r["a"].delete_task(this.active_task_id).then((function(){t.remove_task(t.active_task_id),t.$event.$emit("btnloading_off",!1),t.$event.$emit("close_delete_dialog",!0),t.$event.$emit("open_snackbar","Task is deleted")}))}}},_=d,p=(s("b090"),s("2877")),f=Object(p["a"])(_,i,a,!1,null,"bae7ba26",null);e["a"]=f.exports},"368b":function(t,e,s){},"3c39":function(t,e,s){"use strict";var i=s("9ab1"),a=s.n(i);a.a},"3cf3":function(t,e,s){},4173:function(t,e,s){},"43d8":function(t,e,s){},"45d1":function(t,e,s){},"45d5":function(t,e,s){"use strict";var i=s("3cf3"),a=s.n(i);a.a},"4bf85":function(t,e,s){"use strict";var i=s("43d8"),a=s.n(i);a.a},"72c1":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"avatar-wrapper"},[s("ul",{staticClass:"avatars"},[t._l(t.cutList,(function(e,i){return t.cutList.length>0?s("li",{key:i,staticClass:"avatars__item"},[s("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(i){var a=i.on;return[t.deep&&e.user?s("img",t._g({staticClass:"avatars__img",attrs:{src:e.user.image_url}},a)):e?s("img",t._g({staticClass:"avatars__img",attrs:{src:e.image_url}},a)):t._e()]}}],null,!0)},[t.deep&&e.user?s("span",[t._v(t._s(e.user.fullname))]):e?s("span",[t._v(t._s(e.fullname))]):t._e()])],1):t._e()})),t.less>0?s("li",{staticClass:"avatars__item"},[s("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[s("span",t._g({staticClass:"avatars__others"},i),[t._v("+"+t._s(t.less))])]}}],null,!1,1062212335)},[s("span",{domProps:{innerHTML:t._s(t.lessList)}})])],1):t._e(),t.hasAddMember?s("li",{staticClass:"avatars__item"},[s("span",{staticClass:"avatars__add"},[s("v-icon",{attrs:{dark:""},on:{click:function(e){return t.$emit("add-member",t.item)}}},[t._v("add")])],1)]):t._e()],2)])},a=[],n=(s("c5f6"),s("0644")),r=s.n(n),c={inheritAttrs:!1,props:{items:{type:Array,default:function(){return[]}},count:{type:Number,default:3},deep:{type:Boolean,default:!1},hasAddMember:{type:Boolean,default:!1}},computed:{less:function(){return this.items.length-this.count},cutList:function(){return this.items.length<this.count?this.items:r()(this.items).slice(0,this.count)},lessList:function(){var t=this,e=r()(this.items).slice(this.count,this.items.length);return e.length>0?e.map((function(e){return t.deep?e.user?e.user.fullname:"Deleted User":e?e.fullname:"Deleted User"})).join("<br>"):"Deleted User"}}},o=c,l=(s("145e"),s("2877")),u=Object(l["a"])(o,i,a,!1,null,"61c9581d",null);e["a"]=u.exports},"7e41":function(t,e,s){"use strict";var i=s("da8c"),a=s.n(i);a.a},8284:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"member-profile"},[s("table-header",{attrs:{paths:t.paths,"no-button":!0}}),s("div",{staticClass:"profile"},[s("div",{staticClass:"profile-content"},[s("Upper",{attrs:{currentuserid:t.user_id}}),s("Lower")],1)])],1)},a=[],n=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),r=(s("c5f6"),s("2f62")),c=s("29d6"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile-upper"},[s("div",{staticClass:"background"},[t.can_edit?s("v-icon",{staticClass:"camera"},[t._v("camera_alt")]):t._e(),t.can_edit?s("v-menu",{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[s("v-btn",t._g({staticClass:"settings",attrs:{dark:"",icon:""}},i),[s("v-icon",{attrs:{large:""}},[t._v("settings")])],1)]}}],null,!1,2322006801)},[s("v-list",[t.can_edit?s("v-list-item",{on:{click:function(e){return t.open_edit_dialog(t.user)}}},[s("v-list-item-title",[s("v-icon",{attrs:{left:""}},[t._v("mdi-account")]),t._v(" Edit Profile")],1)],1):t._e(),t.can_edit?s("v-list-item",{on:{click:function(e){return t.open_update_password_dialog(t.user)}}},[s("v-list-item-title",[s("v-icon",{attrs:{left:""}},[t._v("lock")]),t._v(" Update Password")],1)],1):t._e()],1)],1):t._e()],1),t.user?s("div",{staticClass:"icons"},[s("div",{staticClass:"user-img",on:{click:t.image_clicked}},[s("img",{attrs:{src:t.user.image_url,alt:"User",width:"100%",height:"auto"}})])]):t._e(),s("teams-dialog",{ref:"edit_dialog",attrs:{title:"Edit Member",dialog:t.edit_dialog,"fields-to-edit":t.edit_item,"is-edit-dialog":t.edit_dialog},on:{"update:dialog":function(e){t.edit_dialog=e},save:function(e){return t.update_user_profile(e)}}}),s("UpdatePasswordDialog",{ref:"update_password_dialog",attrs:{title:"Update Password",fieldsToEdit:t.edit_item}}),s("AddPicture"),s("UserInfo")],1)},l=[],u=(s("28a5"),s("1be9")),d={upload_image:function(t,e){return u["a"].post("api/user/".concat(t),e)},update_profile:function(t,e){return u["a"].put("api/company/teams/".concat(t),e)}},_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-info"},[t.user_loading?s("div",{staticClass:"loading"},[s("v-progress-linear",{attrs:{indeterminate:!0}})],1):[s("div",{staticClass:"info-div"},[s("div",{staticClass:"hour"},[t._v("Time Worked This Week")]),s("div",{staticClass:"value"},[t._v(t._s(t.user.week_hours))])]),s("div",{staticClass:"info-div"},[s("h4",{staticClass:"name"},[t._v(t._s(t.user.first_name)+" "+t._s(t.user.last_name))]),s("div",{staticClass:"job-title"},[t._v(t._s(t.user.job_title))]),t.user.meta.address?s("div",{staticClass:"address"},[s("v-icon",[t._v("place")]),t._v(" "+t._s(t.user.meta.address.value)+" ")],1):t._e()]),s("div",{staticClass:"info-div"},[s("div",{staticClass:"hour"},[t._v("Per Hour")]),t.user.meta.rate?s("div",{staticClass:"value"},[t._v(" "+t._s(t.currency.symbol)+" "+t._s(t.user.meta.rate.value)+" ")]):t._e(),t.user.meta.rate?t._e():s("div",{staticClass:"value"},[t._v(t._s(t.currency.symbol)+" 0")])])]],2)},p=[],f=s("7eac");function v(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function m(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?v(Object(s),!0).forEach((function(e){Object(n["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):v(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var b={data:function(){return{currency:f["a"].defaultCurrency}},computed:m({},Object(r["c"])("memberProfile",["user","user_loading"]))},h=b,g=(s("ad6a"),s("2877")),k=Object(g["a"])(h,_,p,!1,null,"613e3940",null),O=k.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"add-picture"},[s("CustomDialog",{ref:"picture_dialog",attrs:{title:"Upload New Profile Picture","button2-text":"Save",open:t.dialog},on:{button1:t.cancel,"update:open":function(e){t.dialog=e}},scopedSlots:t._u([{key:"content",fn:function(){return[s("div",{staticClass:"content"},[s("Loader",{attrs:{loading:t.loading}}),t.file_uploaded?s("CropImage",{ref:"croppie",attrs:{image:t.image64,options:t.croppie.options,result:t.croppie.result}}):s("CustomDropzone",{ref:"dropzone",attrs:{duplicateCheck:!0,acceptedFiles:"validFileType",options:t.dropzoneOptions,useCustomSlot:!0,dictFileTooBig:"File too big",dictInvalidFileType:"Invalid file type"},on:{"file-added":t.file_added}})],1)]},proxy:!0},{key:"button2",fn:function(){return[s("v-btn",{attrs:{disabled:!t.file_uploaded},on:{click:t.get_cropped_image}},[t._v("Save")])]},proxy:!0}])})],1)},j=[],C=(s("6762"),s("2fdb"),s("768b")),w=s("854b"),P=s("57e5"),x=s("8b7e"),$=s("8c75");function T(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function D(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?T(Object(s),!0).forEach((function(e){Object(n["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):T(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var E={components:{Loader:w["a"],CustomDialog:P["a"],CustomDropzone:x["a"],CropImage:$["a"]},data:function(){return{file_uploaded:!1,image64:null,loading:!1,validFileType:f["a"].allowedImageType,croppie:{options:{viewport:{width:200,height:200,type:"circle"},showZoomer:!1,boundary:{width:300,height:300},enableOrientation:!0},result:"blob"}}},computed:D({},Object(r["c"])("memberProfile",["picture_dialog_is_open","user_id","user"]),{},Object(r["c"])({logged_user:"user"}),{dialog:{get:function(){return this.picture_dialog_is_open},set:function(t){this.set_picture_dialog(t)}},dropzoneOptions:function(){return{maxFiles:1,thumbnailWidth:150,addRemoveLinks:!0,url:f["a"].apiHostBaseURL+"/api/company/clients/".concat(this.user_id),headers:{Authorization:"Bearer "+localStorage.getItem("token")},method:"put",autoProcessQueue:!1}}}),methods:D({},Object(r["d"])("memberProfile",["set_picture_dialog","set_user"]),{file_added:function(t){var e=this,s=Object(C["a"])(t,1),i=s[0],a=new FileReader;this.validFileType.includes(i.type)?(a.onload=function(){e.image64=a.result,e.file_uploaded=!0},a.readAsDataURL(i)):(this.$event.$emit("open_snackbar","Not a valid image!","error"),this.file_uploaded=!1,this.dialog=!1)},get_cropped_image:function(){this.$refs.croppie.get_result().then(this.upload_image)},upload_image:function(t){var e=this,s=new FormData;s.append("file",t),this.loading=!0,d.upload_image(this.user_id,s).then(this.image_uploaded).finally((function(){return e.loading=!1}))},image_uploaded:function(t){this.$refs.croppie.clear_component(),this.$event.$emit("open_snackbar","Profile picture uploaded successfully!"),this.set_user(t.data),Number(this.user_id)===Number(this.logged_user.id)&&this.$store.commit("set_user_image",t.data.image_url),this.$refs.picture_dialog.clear_and_close(),Object.assign(this.$data,this.$options.data.apply(this))},cancel:function(){this.dialog=!1,this.file_uploaded=!1}})},S=E,A=(s("7e41"),Object(g["a"])(S,y,j,!1,null,"66bb6aea",null)),z=A.exports,L=s("23ca"),U=s("ec05");function H(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function M(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?H(Object(s),!0).forEach((function(e){Object(n["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):H(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var I={components:{UserInfo:O,AddPicture:z,TeamsDialog:L["a"],UpdatePasswordDialog:U["a"]},props:{currentuserid:[Number,String]},data:function(){return{edit_dialog:!1,edit_item:{id:null,fields:null}}},computed:M({},Object(r["c"])("memberProfile",["user","set_user_loading"]),{logged_user:function(){return this.$store.getters.user},permission:function(){return this.$_permissions.get("user_profile")},can_edit:function(){if(this.logged_user.is_admin)return!0;if(this.logged_user.id===parseInt(this.currentuserid))return!0;var t=this.logged_user.role.split("-").pop().toLowerCase();return"manager"===t&&(this.permission&&this.permission.update)}}),methods:M({},Object(r["d"])("memberProfile",["set_picture_dialog"]),{},Object(r["b"])("memberProfile",["update_profile"]),{open_edit_dialog:function(t){this.edit_dialog=!0,this.$set(this.edit_item,"id",t.id),this.$set(this.edit_item,"fields",t)},open_update_password_dialog:function(t){this.$refs.update_password_dialog.open(),this.$set(this.edit_item,"id",t.id),this.$set(this.edit_item,"fields",t)},update_user_profile:function(t){var e=this;t.id=this.edit_item.id,this.update_profile(t),this.edit_dialog=this.set_user_loading,this.$set(this.edit_item,"fields",this.user),this.$event.$emit("btnloading_off",!1),setTimeout((function(){e.logged_user.id===t.id&&e.$store.commit("set_login_user",t)}),1)},image_clicked:function(){this.can_edit&&this.set_picture_dialog(!0)}})},F=I,N=(s("45d5"),Object(g["a"])(F,o,l,!1,null,"78e27394",null)),B=N.exports,R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile-lower"},[s("left"),s("right")],1)},W=[],J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile-left"},[s("v-tabs",{staticClass:"tabs",attrs:{centered:"",grow:"","hide-slider":"",height:"60px"},model:{value:t.active_tab,callback:function(e){t.active_tab=e},expression:"active_tab"}},t._l(t.tabs,(function(t){return s("v-tab",{key:t.name,staticClass:"tab-item",attrs:{href:"#"+t.name}},[s("svg",{attrs:{viewBox:"0 0 250 250"}},[s("path",{staticClass:"icon",attrs:{d:t.icon}})])])})),1),s("v-tabs-items",{model:{value:t.active_tab,callback:function(e){t.active_tab=e},expression:"active_tab"}},[s("v-tab-item",{key:"1",attrs:{value:"Tasks"}},[s("v-card",{attrs:{flat:""}},[s("tasks-tab")],1)],1),s("v-tab-item",{key:"2",attrs:{value:"Timer"}},[s("v-card",{attrs:{flat:""}},[t._v(" Timers Table Here or Total Time ")])],1)],1)],1)},Q=[],V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.user_loading?s("div",{staticClass:"loading"},[s("v-progress-linear",{attrs:{indeterminate:!0}})],1):t.tasks_are_empty?s("div",{staticClass:"no-data"},[s("div",{staticClass:"empty-content"},[s("v-icon",{staticClass:"empty-icon"},[t._v("list")]),s("p",{staticClass:"empty-text"},[t._v("List Empty")])],1)]):s("div",{staticClass:"tasks-tab"},[s("task-chips",{attrs:{"count-all":t.tasks.length,"count-completed":t.count_completed_tasks,"count-pending":t.count_pending_tasks,"count-behind":t.count_behind_tasks,"count-open":t.count_open_tasks,"active-chip":t.active_chip},on:{"update:activeChip":function(e){t.active_chip=e},"update:active-chip":function(e){t.active_chip=e}}}),s("task-custom-table",{attrs:{tasks:t.filtered_tasks}})],1)},Z=[],q=s("2f68"),G=s("3293");function K(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function X(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?K(Object(s),!0).forEach((function(e){Object(n["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):K(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var Y={components:{TaskChips:q["a"],TaskCustomTable:G["a"]},data:function(){return{active_chip:"all"}},computed:X({},Object(r["c"])("memberProfile",["tasks","user_loading"]),{filtered_tasks:function(){var t=this;return"all"===this.active_chip?this.tasks:this.tasks.filter((function(e){return e.status.toLowerCase()===t.active_chip}))},tasks_are_empty:function(){return 0===this.tasks.length},count_completed_tasks:function(){return this.tasks.filter((function(t){return"completed"===t.status})).length},count_pending_tasks:function(){return this.tasks.filter((function(t){return"pending"===t.status})).length},count_behind_tasks:function(){return this.tasks.filter((function(t){return"behind"===t.status})).length},count_open_tasks:function(){return this.tasks.filter((function(t){return"open"===t.status})).length}})},tt=Y,et=(s("186c"),Object(g["a"])(tt,V,Z,!1,null,"31b5b181",null)),st=et.exports,it={name:"TasksContent",components:{TasksTab:st},data:function(){return{active_tab:"Tasks",tabs:[{id:1,name:"Tasks",icon:"M23 40l177 0c6,0 12,3 16,7l0 0c4,4 7,10 7,16l0 6c0,0 0,0 0,0l0 36c0,3 -2,5 -6,5 -3,0 -5,-2 -5,-5l0 -1 0 0 0 -41c0,-3 -1,-6 -4,-8l0 0c-2,-3 -5,-4 -8,-4l-177 0c-3,0 -6,1 -8,4 -3,2 -4,5 -4,8l0 93c0,4 1,7 4,9 2,2 5,3 8,3l117 0 0 0 5 0c3,0 6,3 6,6 0,3 -3,5 -6,5l-35 0c0,0 0,0 -1,0l-86 0c-6,0 -12,-2 -16,-6l0 -1c-4,-4 -7,-9 -7,-16l0 -93c0,-6 3,-12 7,-16l0 0c4,-4 10,-7 16,-7zm180 77c13,0 25,5 33,13 9,9 14,20 14,33 0,13 -5,25 -14,33 -8,9 -20,14 -33,14 -13,0 -24,-5 -33,-14 -8,-8 -13,-20 -13,-33 0,-13 5,-24 13,-33 9,-8 20,-13 33,-13zm4 24c6,1 9,3 9,6 0,1 -1,2 -2,3 0,1 -2,2 -3,2 0,0 -1,-1 -1,-1 -1,0 -1,0 -2,0 0,0 -1,0 -1,0 -1,-1 -3,-1 -4,-1 -1,0 -2,0 -3,1 -1,0 -1,1 -1,2 0,1 0,2 1,3 0,0 1,1 2,1 3,1 4,1 6,2 2,1 4,1 6,2 1,2 3,3 3,4 1,2 2,4 2,6 0,4 -1,7 -4,10 -2,2 -4,4 -8,4l0 5c0,1 -1,2 -1,2 -1,1 -2,1 -3,1 -1,0 -1,0 -2,-1 -1,0 -1,-1 -1,-2l0 -4c-2,0 -5,-1 -7,-2 -3,-1 -5,-3 -5,-5 0,-1 0,-2 1,-3 1,-2 2,-2 3,-2 1,0 2,0 2,0l4 1c2,1 4,1 5,1 1,0 2,0 4,-1 1,-1 1,-2 1,-3 0,-2 0,-3 -2,-3 -1,-1 -3,-2 -6,-2 -2,-1 -4,-2 -5,-2 -1,-1 -3,-1 -4,-2 -1,-1 -2,-3 -2,-4 -1,-2 -1,-3 -1,-5 0,-1 0,-2 0,-3 1,-1 1,-2 2,-3 0,-1 1,-2 2,-3 2,-2 5,-4 8,-4l0 -4c0,-1 0,-2 1,-3 1,0 1,-1 2,-1 1,0 2,1 3,1 0,1 1,2 1,3l0 4zm21 -3c-6,-6 -15,-10 -25,-10 -10,0 -18,4 -25,10 -6,7 -10,15 -10,25 0,10 4,19 10,25 7,7 15,11 25,11 10,0 19,-4 25,-11 7,-6 11,-15 11,-25 0,-10 -4,-18 -11,-25zm-192 -26c-3,0 -5,-3 -5,-6 0,-3 2,-5 5,-5l63 0c3,0 5,2 5,5 0,3 -2,6 -5,6l-63 0zm0 -30c-3,0 -5,-3 -5,-6 0,-3 2,-5 5,-5l85 0c3,0 5,2 5,5 0,3 -2,6 -5,6l-85 0zm0 58c-3,0 -5,-2 -5,-5 0,-3 2,-6 5,-6l85 0c3,0 5,3 5,6 0,3 -2,5 -5,5l-85 0z"},{id:2,name:"Timer",icon:"M125 0c35,0 66,14 88,37 23,22 37,53 37,88 0,35 -14,66 -37,88 -22,23 -53,37 -88,37 -35,0 -66,-14 -88,-37 -23,-22 -37,-53 -37,-88 0,-35 14,-66 37,-88 22,-23 53,-37 88,-37zm-4 56c0,-4 4,-8 8,-8 5,0 8,4 8,8l0 54c5,3 8,8 8,14 0,9 -8,16 -17,16 -1,0 -2,0 -3,0l-46 56c-3,4 -8,4 -11,1 -4,-2 -4,-8 -1,-11l46 -56c-1,-2 -1,-4 -1,-6 0,-7 4,-12 9,-15l0 -53zm81 -8c-20,-20 -47,-32 -77,-32 -30,0 -57,12 -77,32 -20,20 -32,47 -32,77 0,30 12,57 32,77 20,20 47,32 77,32 30,0 57,-12 77,-32 20,-20 32,-47 32,-77 0,-30 -12,-57 -32,-77z M121 135c0,-4 4,-8 8,-8 5,0 8,4 8,8l0 68c0,5 -3,8 -8,8 -4,0 -8,-3 -8,-8l0 -68z M131 136c-3,-3 -3,-8 0,-11 3,-3 8,-3 11,0l48 48c3,3 3,8 0,11 -3,3 -8,3 -12,0l-47 -48z M141 132c-5,0 -8,-3 -8,-8 0,-4 3,-8 8,-8l67 0c5,0 9,4 9,8 0,5 -4,8 -9,8l-67 0z"}]}}},at=it,nt=(s("18bc"),s("f71a"),Object(g["a"])(at,J,Q,!1,null,"1ddb391f",null)),rt=nt.exports,ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile-right"},[s("v-tabs",{staticClass:"tabs",attrs:{centered:"",grow:"","hide-slider":"",height:"60px","show-arrows":t.is_screen_medium_and_down}},[t._l(t.tabs,(function(e,i){return s("v-tab",{key:i,staticClass:"tab-item",attrs:{href:"#tab-"+i}},[s("v-icon",[t._v(t._s(e.icon))])],1)})),t._l(t.texts,(function(e,i){return s("v-tab-item",{key:i,attrs:{value:"tab-"+i}},[s("v-card",{attrs:{flat:""}},[s("v-card-text",[t._v(t._s(e.content))])],1)],1)}))],2)],1)},ot=[],lt=s("881c"),ut={name:"ProfileRight",mixins:[lt["a"]],data:function(){return{tabs:[{icon:"account_circle"},{icon:"chat"},{icon:"camera"}],texts:[{content:"This is your Facebook timeline."},{content:"This is your Twitter."},{content:"This is your Instagram."}]}}},dt=ut,_t=(s("f571"),s("3c39"),Object(g["a"])(dt,ct,ot,!1,null,"323ad70e",null)),pt=_t.exports,ft={name:"ProfileLower",components:{Left:rt,Right:pt}},vt=ft,mt=(s("4bf85"),Object(g["a"])(vt,R,W,!1,null,"fcc2a3b2",null)),bt=mt.exports;function ht(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function gt(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?ht(Object(s),!0).forEach((function(e){Object(n["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):ht(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var kt={props:{user_id:[Number,String]},components:{TableHeader:c["a"],Upper:B,Lower:bt},data:function(){return{user:"",paths:[{text:"Dashboard",disabled:!1,router_name:"default-content"},{text:"Teams",disabled:!1,router_name:"team"},{text:"Profile",disabled:!0,router_name:null}]}},created:function(){this.set_user_id(this.user_id),this.get_single_member(this.user_id)},methods:gt({},Object(r["d"])("memberProfile",["set_user_id"]),{},Object(r["b"])("memberProfile",["get_single_member"])),beforeRouteEnter:function(t,e,s){s((function(i){i.verifyUser(t,e,s)}))}},Ot=kt,yt=(s("ba3a"),Object(g["a"])(Ot,i,a,!1,null,"cfe8721e",null));e["default"]=yt.exports},"852e":function(t,e,s){},"8ae9":function(t,e,s){"use strict";var i=s("1c9c"),a=s.n(i);a.a},9443:function(t,e,s){"use strict";var i=s("368b"),a=s.n(i);a.a},"9ab1":function(t,e,s){},a3ac:function(t,e,s){},ad6a:function(t,e,s){"use strict";var i=s("4173"),a=s.n(i);a.a},b090:function(t,e,s){"use strict";var i=s("d3a7"),a=s.n(i);a.a},b7e2:function(t,e,s){},b968:function(t,e,s){},ba3a:function(t,e,s){"use strict";var i=s("f7de"),a=s.n(i);a.a},d3a7:function(t,e,s){},da8c:function(t,e,s){},f571:function(t,e,s){"use strict";var i=s("852e"),a=s.n(i);a.a},f71a:function(t,e,s){"use strict";var i=s("45d1"),a=s.n(i);a.a},f7de:function(t,e,s){},fcce:function(t,e,s){"use strict";var i=s("1be9");e["a"]={get_project_members:function(t){return i["a"].get("api/projects/".concat(t,"/member?all=true"))},get_project_milestones:function(t){return i["a"].get("api/project/".concat(t,"/milestone?all=true"))},get_own_tasks:function(t){return i["a"].get("api/projects/".concat(t,"/tasks/mine?all=true"))},get_all_tasks:function(t){return i["a"].get("api/projects/".concat(t,"/tasks?all=true"))},get_task:function(t){return i["a"].get("api/task/".concat(t))},create_new_task:function(t){return i["a"].post("api/task",t)},edit_task:function(t,e){return i["a"].put("api/task/".concat(t),e)},delete_task:function(t){return i["a"].delete("api/task/".concat(t))},mark_as_complete_task:function(t,e){return i["a"].put("api/task/".concat(t,"/mark-as-complete"),e)}}}}]);
//# sourceMappingURL=chunk-69763aa0.58b3ff7b.js.map