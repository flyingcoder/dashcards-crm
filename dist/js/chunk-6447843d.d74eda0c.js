(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6447843d"],{1544:function(t,e,s){"use strict";var a=s("8713"),i=s.n(a);i.a},"15b0":function(t,e,s){"use strict";var a=s("dae0"),i=s.n(a);i.a},"1f84":function(t,e,s){},2220:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chat"},[s("GroupChatDialog",{ref:"creategroupchat",on:{newChatGroupCreated:t.new_groupchat_added}}),s("ManageMembersDialog",{ref:"manage_group_members_dialog",attrs:{conversation:t.activeChat}}),s("table-header",{attrs:{paths:t.paths,noButton:!0}}),s("div",{staticClass:"chat-container"},[s("v-layout",{staticClass:"chat__content",attrs:{wrap:""}},[s("v-flex",{staticClass:"chat__sidebar",attrs:{md4:"",sm5:"",xs12:""}},[s("v-card",{staticClass:"chatlist",attrs:{text:""}},[s("v-app-bar",[s("v-img",{staticClass:"chat__owner_img",attrs:{src:t.loggeduser.image_url}}),s("span",{staticClass:"chat__owner_name"},[t._v(t._s(t.loggeduser.first_name)+" "+t._s(t.loggeduser.last_name))]),s("v-spacer"),s("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$refs.creategroupchat.open_dialog()}}},[s("v-icon",[t._v("add")])],1)],1),s("v-card",{staticClass:"mx-auto",attrs:{text:""}},[s("div",{staticClass:"friend__list"},[t._l([1,2,3,4,5],(function(e){return t.userLoading?s("v-skeleton-loader",{ref:"skeleton",refInFor:!0,staticClass:"mx-auto",attrs:{type:"list-item-avatar-two-line"}}):t._e()})),t.all_groups.length>0?s("v-list",{attrs:{subheader:"",dense:""}},t._l(t.all_groups,(function(e){return s("v-list-item",{key:e.id,on:{click:function(s){return t.open_conversation(e)}}},[s("v-list-item-content",[s("div",{staticClass:"friend user",on:{click:function(s){return t.open_conversation(e)}}},[s("div",{staticClass:"user-wrap"},[s("div",{staticClass:"user__img"},[s("svg",{attrs:{viewBox:"0 0 250 250"}},[s("path",{staticClass:"icon",attrs:{d:t.group_icon}})])]),s("span",{staticClass:"user__name"},[t._v(t._s(e.fullname))])])])]),s("v-list-item-icon",[s("v-icon",{directives:[{name:"show",rawName:"v-show",value:e.message_count>0,expression:"conv.message_count > 0"}],staticClass:"has_message",attrs:{color:"success",title:"New message"}},[t._v("mail")])],1)],1)})),1):t._e(),s("v-divider"),s("v-list",{attrs:{subheader:"",dense:""}},t._l(t.sorted(t.all_users),(function(e){return s("v-list-item",{key:e.id,on:{click:function(s){return t.open_conversation(e)}}},[s("v-list-item-content",[s("div",{staticClass:"friend user",on:{click:function(s){return t.open_conversation(e)}}},[s("div",{staticClass:"user-wrap"},[s("div",{staticClass:"user__img"},[s("v-img",{attrs:{src:e.image_url}}),s("span",{staticClass:"status",class:[e.is_online?"online":"offline"]})],1),s("span",{staticClass:"user__name"},[t._v(t._s(e.fullname))])])])]),s("v-list-item-icon",[s("v-icon",{directives:[{name:"show",rawName:"v-show",value:e.message_count>0,expression:"user.message_count > 0"}],staticClass:"has_message",attrs:{color:"success",title:"New message"}},[t._v("mail")])],1)],1)})),1)],2),s("v-card-actions",[s("v-btn",{staticClass:"mx-auto view__more_btn",attrs:{text:"",normal:""}},[t._v("VIEW MORE")])],1)],1)],1)],1),s("v-flex",{staticClass:"chat__message",attrs:{md8:"",sm7:"",xs12:""}},[t.activeChat?s("v-card",{staticClass:"mx-auto message__content",attrs:{text:""}},[s("v-toolbar",{attrs:{color:"#3b589e"}},[s("v-layout",{staticClass:"message__header",attrs:{wrap:""}},[s("v-flex",{staticClass:"sender__img",attrs:{xs2:""}},["group"===t.activeChat.type?s("svg",{attrs:{viewBox:"0 0 250 250"}},[s("path",{staticClass:"icon",attrs:{d:t.group_icon}})]):s("v-img",{attrs:{src:t.activeChat.image_url}}),s("span",{staticClass:"status",class:[t.activeChat.is_online?"online":"offline"]})],1),s("v-toolbar-title",[t._v(t._s(t.activeChat.fullname))]),s("v-spacer"),s("v-menu",{staticClass:"friend__info",attrs:{left:"","offset-x":"","close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[s("v-btn",t._g({attrs:{fab:"",icon:"",color:"#ffffff"}},a),[s("v-icon",[t._v("settings")])],1)]}}],null,!1,3302272404)},[s("v-card",{staticClass:"hover__info"},[s("div",{staticClass:"info__one"},[s("div",{staticClass:"h__img"},["group"===t.activeChat.type?s("svg",{attrs:{viewBox:"0 0 250 250"}},[s("path",{staticClass:"icon",attrs:{d:t.group_icon}})]):s("v-img",{attrs:{src:t.activeChat.image_url}})],1),s("div",{staticClass:"h__details"},[s("h2",{staticClass:"h__name"},[t._v(t._s(t.activeChat.fullname))]),s("p",{staticClass:"h__job"},[t._v(" "+t._s("group"===t.activeChat.type?t.current_members.length+" members":t.activeChat.job_title)+" ")]),s("div",{directives:[{name:"show",rawName:"v-show",value:"group"!==t.activeChat.type,expression:"activeChat.type !== 'group'"}],staticClass:"info__anchor"},[s("v-icon",[t._v("email")]),s("a",{attrs:{href:"mailto:"+t.activeChat.email}},[t._v(t._s(t.activeChat.email))])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:"group"!==t.activeChat.type,expression:"activeChat.type !== 'group'"}],staticClass:"info__anchor"},[s("v-icon",[t._v("location_on")]),s("span",[t._v(t._s(t.activeChat.location))])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:"group"===t.activeChat.type,expression:"activeChat.type === 'group'"}],staticClass:"info__anchor"},[s("v-btn",{attrs:{text:"",small:"",outlined:""},on:{click:function(e){return t.$refs.manage_group_members_dialog.open_dialog()}}},[s("v-icon",{attrs:{small:""}},[t._v("settings")]),t._v(" Manage Members ")],1)],1)])]),s("div",{directives:[{name:"show",rawName:"v-show",value:"group"!==t.activeChat.type,expression:"activeChat.type !== 'group'"}],staticClass:"info__two"},[s("div",{staticClass:"info__cta"},[s("div",{staticClass:"info__anchor"},[s("v-icon",[t._v("person")]),s("a",{attrs:{href:"javascript::void(0)"},on:{click:function(e){return t.go_to_profile(t.activeChat)}}},[t._v("View Profile")])],1),s("div",{staticClass:"info__anchor"},[s("v-icon",[t._v("email")]),s("a",{attrs:{href:"mailto:"+t.activeChat.email}},[t._v("Email")])],1),s("div",{staticClass:"info__anchor"},[s("v-icon",[t._v("message")]),s("a",{attrs:{href:"javascript::void(0)"},on:{click:function(e){return t.open_conversation(t.activeChat)}}},[t._v("Chat")])],1)])]),s("div",{directives:[{name:"show",rawName:"v-show",value:"group"!==t.activeChat.type,expression:"activeChat.type !== 'group'"}],staticClass:"info__three"},[s("div",{staticClass:"total"},[s("p",[t._v("Total Hours")]),s("h2",[t._v("10")])]),s("div",{staticClass:"total"},[s("p",[t._v("Total Amount")]),s("h2",[t._v("$2,758.93")])])])])],1)],1)],1),s("v-flex",{staticClass:"message__body",attrs:{xs12:"",sm12:""}},[t.cardLoading?s("v-skeleton-loader",{ref:"skeleton",staticClass:"mx-auto",attrs:{type:"card-avatar"}}):t.all_messages.length>0?s("div",{staticClass:"messages",attrs:{id:"messageContainer"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.has_more_message,expression:"has_more_message"}],staticClass:"view__more"},[s("v-btn",{staticClass:"view__more_btn",on:{click:t.get_previous_message}},[t._v("VIEW MORE")])],1),t._l(t.all_messages,(function(t){return s("Message",{key:t.id,attrs:{message:t}})}))],2):s("div",{staticClass:"messages-empty"},[s("Empty",{attrs:{slug:"empty-chat",headline:"Start sending messages"}})],1),t.cardLoading?t._e():s("div",{staticClass:"write"},[s("div",{staticClass:"avatar-wrapper"},[s("img",{staticClass:"sender-avatar",attrs:{src:t.loggeduser.image_url}})]),s("v-text-field",{staticClass:"write__msg",attrs:{solo:"",flat:"","hide-details":"",color:"#667187",label:"Type a message..."},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendMessage(e.target.value)}},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),s("div",{staticClass:"write__actions"},[s("v-icon",{staticClass:"action insert__emoticon"},[t._v("insert_emoticon")]),s("v-icon",{staticClass:"action attach_file"},[t._v("attach_file")]),s("v-icon",{staticClass:"action send",on:{click:function(e){return t.sendMessage(t.message)}}},[t._v("send")])],1)],1)],1)],1):t._e()],1)],1)],1)],1)},i=[],n=(s("8e6e"),s("456d"),s("55dd"),s("20d6"),s("7514"),s("ac6a"),s("bd86")),r=s("2f62"),c=s("1be9"),o={get_chat_list:function(){return c["a"].get("api/chat/list?for=project&has_msg_count=true")},get_groupchat_list:function(){return c["a"].get("api/chat/group/list?for=project&has_msg_count=true")},get_members_list:function(t){return c["a"].get("api/chat/group/members/".concat(t))},get_messages:function(t){return c["a"].get("api/chat/private/".concat(t))},get_group_messages:function(t){return c["a"].get("api/chat/group/private/".concat(t))},get_more_messages:function(t,e){return c["a"].get("api/chat/private/".concat(t,"?page=").concat(e+1))},send_message:function(t){return c["a"].post("api/chat/private",t)},send_group_message:function(t){return c["a"].post("api/chat/group/private",t)},save_group:function(t){return c["a"].post("api/chat/group",t)},update_members_list:function(t){return c["a"].post("api/chat/group/update-members",t)},remove_from_group:function(t){return c["a"].post("api/chat/group/remove-member",t)}},l=s("0644"),u=s.n(l),_=s("29d6"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"message",class:t.me_sender},[s("v-layout",{staticClass:"sender",attrs:{wrap:""}},[s("v-flex",{staticClass:"sender__img",attrs:{xs3:""}},[s("v-img",{attrs:{src:t.message.sender.image_url}}),s("span",{staticClass:"status",class:t.is_user_online})],1),s("v-flex",{staticClass:"sender__name",attrs:{xs5:""}},[t.mine?s("h5",[t._v("Me")]):s("h5",[t._v(t._s(t.message.sender.fullname))])]),s("v-flex",{staticClass:"date",attrs:{xs4:""}},[t._v(" "+t._s(t._f("from_now")(t.message.created_at)))])],1),s("div",{staticClass:"sender__message"},[t._v(" "+t._s(t.message.body)+" ")])],1)},v=[],m=(s("c5f6"),s("579d")),f={mixins:[m["a"]],props:{id:Number,message:Object},computed:{mine:function(){return this.message.sender.id===this.$store.getters.user.id},me_sender:function(){return this.mine?"me":""},is_user_online:function(){return this.message.sender.is_online?"online":"offline"}}},h=f,g=(s("e87b"),s("2877")),p=Object(g["a"])(h,d,v,!1,null,"5b2090bc",null),b=p.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center"},[s("v-dialog",{attrs:{"max-width":"800",persistent:"",scrollable:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-card",[s("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v(" Create Group "),s("v-spacer"),s("v-icon",{on:{click:function(e){return t.clear_and_close()}}},[t._v("close")])],1),s("v-card-text",[s("v-container",[s("v-row",[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{solo:"","prepend-inner-icon":"mdi-dialpad",clearable:"",label:"Group Name",required:""},model:{value:t.group_name,callback:function(e){t.group_name=e},expression:"group_name"}})],1)],1),s("v-row",[s("v-flex",{attrs:{sm12:"",md8:""}},[s("v-text-field",{attrs:{solo:"",label:"Search for people to add",required:"",clearable:"","prepend-inner-icon":"search"},on:{keydown:t.filter_users,"click:clear":t.filter_users},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t.filtered_by_search.length>0?s("v-list",{attrs:{id:"filtered_by_search_wrapper"}},t._l(t.filtered_by_search,(function(e){return s("v-list-item",{key:e.title,on:{click:function(s){return t.selected(e)}}},[s("v-list-item-avatar",[s("v-img",{attrs:{src:e.image_url}})],1),s("v-list-item-content",[s("v-list-item-title",{domProps:{textContent:t._s(e.fullname)}})],1),s("v-list-item-icon",[s("v-icon",{directives:[{name:"show",rawName:"v-show",value:e.is_selected,expression:"item.is_selected"}],attrs:{color:"success"}},[t._v("mdi-checkbox-marked-circle")])],1)],1)})),1):t._e()],1),s("v-flex",{attrs:{sm12:"",md4:""}},[s("v-list",{attrs:{id:"all_selected_wrapper"}},[s("v-subheader",[t._v("Selected ("+t._s(t.all_selected.length)+")")]),t._l(t.all_selected,(function(e){return t.all_selected.length>0?s("v-list-item",{key:e.title},[s("v-list-item-avatar",[s("v-img",{attrs:{src:e.image_url}})],1),s("v-list-item-content",[s("v-list-item-subtitle",{domProps:{textContent:t._s(e.fullname)}})],1),s("v-list-item-icon",[s("v-icon",{attrs:{small:"",color:"danger"},on:{click:function(s){return t.selected(e)}}},[t._v("close")])],1)],1):t._e()}))],2)],1)],1)],1)],1),s("v-divider"),s("v-card-actions",[s("v-spacer"),s("v-btn",{on:{click:t.clear_and_close}},[t._v(" Cancel ")]),s("v-btn",{attrs:{color:"primary",loading:t.btnloading},on:{click:t.save_group}},[t._v(" Create ")])],1)],1)],1)],1)},y=[],w=(s("6762"),s("2fdb"),s("386d"),{name:"GroupChatDialog",data:function(){return{dialog:!1,all_users:[],filtered_by_search:[],all_selected:[],search:"",group_name:"",btnloading:!1}},created:function(){this.get_chat_list()},methods:{validate_form:function(){return""===this.group_name?(this.$event.$emit("open_snackbar","Group name is required","error"),!1):!(this.all_selected.length<1)||(this.$event.$emit("open_snackbar","Select and  add users to group","error"),!1)},save_group:function(){var t=this;if(this.validate_form()){this.btnloading=!0;var e={group_name:this.group_name,users:this.all_selected.map((function(t){return t.id}))};o.save_group(e).then((function(e){t.$emit("newChatGroupCreated",e.data),t.clear_and_close()})).finally((function(){return t.btnloading=!1}))}},open_dialog:function(){this.dialog=!0},clear_and_close:function(){this.dialog=!1,this.all_selected=[],this.search="",this.group_name="",this.filtered_by_search=u()(this.all_users)},get_chat_list:function(){var t=this;o.get_chat_list().then((function(e){var s=e.data;t.all_users=u()(s),t.filtered_by_search=s}))},select:function(t,e){var s=this.filtered_by_search.findIndex((function(e){return t.id===e.id}));~s&&(this.filtered_by_search[s].is_selected=e)},selected:function(t){var e=this.all_selected.findIndex((function(e){return t.id===e.id}));~e?(this.select(t,!1),this.all_selected.splice(e,1)):(this.select(t,!0),this.all_selected.push(t))},filter_users:function(t){var e=this;setTimeout((function(){e.search&&""!==e.search?e.filtered_by_search=u()(e.all_users).filter((function(t){return t.fullname.toLowerCase().includes(e.search.toLowerCase().trim())})):e.filtered_by_search=u()(e.all_users)}),1)}}}),x=w,k=(s("9f1a"),Object(g["a"])(x,C,y,!1,null,"f8500c46",null)),O=k.exports,j=s("4752"),$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center"},[s("v-dialog",{attrs:{"max-width":"800",persistent:"",scrollable:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-card",[s("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v(" Manage Members "),s("v-spacer"),s("v-icon",{on:{click:function(e){return t.clear_and_close()}}},[t._v("close")])],1),s("v-card-text",[s("v-container",[s("v-row",[s("v-flex",{attrs:{sm12:"",md8:""}},[s("v-text-field",{attrs:{solo:"",label:"Search for people to add",required:"",clearable:"","prepend-inner-icon":"search"},on:{keydown:t.filter_users,"click:clear":t.filter_users},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t.filtered_by_search.length>0?s("v-list",{attrs:{id:"filtered_by_search_wrapper"}},t._l(t.filtered_by_search,(function(e){return s("v-list-item",{key:e.title,on:{click:function(s){return t.selected(e)}}},[s("v-list-item-avatar",[s("v-img",{attrs:{src:e.image_url}})],1),s("v-list-item-content",[s("v-list-item-title",{domProps:{textContent:t._s(e.fullname)}})],1),s("v-list-item-icon",[s("v-icon",{directives:[{name:"show",rawName:"v-show",value:e.is_selected,expression:"item.is_selected"}],attrs:{color:"success"}},[t._v("mdi-checkbox-marked-circle")])],1)],1)})),1):t._e()],1),s("v-flex",{attrs:{sm12:"",md4:""}},[s("v-list",{attrs:{id:"all_selected_wrapper"}},[s("v-subheader",[t._v("Selected ("+t._s(t.all_selected.length)+")")]),t._l(t.all_selected,(function(e){return t.all_selected.length>0?s("v-list-item",{key:e.title},[s("v-list-item-avatar",[s("v-img",{attrs:{src:e.image_url}})],1),s("v-list-item-content",[s("v-list-item-subtitle",{domProps:{textContent:t._s(e.fullname)}})],1),t.can_be_remove(e)?s("v-list-item-icon",[s("v-icon",{attrs:{small:"",color:"danger"},on:{click:function(s){return t.selected(e)}}},[t._v("close")])],1):t._e(),e.id===t.conversation.data.group_creator.id?s("v-list-item-icon",[s("v-icon",{attrs:{small:"",title:"Group owner"}},[t._v("lock")])],1):t._e()],1):t._e()}))],2)],1)],1)],1)],1),s("v-divider"),s("v-card-actions",[s("v-spacer"),s("v-btn",{on:{click:t.clear_and_close}},[t._v(" Cancel ")]),s("v-btn",{attrs:{color:"primary",loading:t.btnloading},on:{click:t.update_members}},[t._v(" Save ")])],1)],1)],1)],1)},B=[],E={name:"ManageMemberDialog",props:{conversation:Object},data:function(){return{dialog:!1,all_users:[],filtered_by_search:[],all_selected:[],search:"",btnloading:!1}},methods:{open_dialog:function(){this.dialog=!0,this.all_selected=u()(this.conversation.members),this.get_chat_list()},clear_and_close:function(){this.dialog=!1},get_chat_list:function(){var t=this;o.get_chat_list().then((function(e){var s=e.data;t.filtered_by_search=t.filter_users_for_selected(s),t.all_users=u()(s)}))},update_members:function(){var t=this;this.btnloading=!0;var e={convo_id:this.conversation.id,users:this.all_selected.map((function(t){return t.id}))};o.update_members_list(e).then((function(e){var s=e.data;t.conversation.members=s,t.clear_and_close()})).finally((function(){return t.btnloading=!1}))},can_be_remove:function(t){return t.id!==this.conversation.data.group_creator.id},select:function(t,e){var s=this.filtered_by_search.findIndex((function(e){return t.id===e.id}));~s&&(this.filtered_by_search[s].is_selected=e)},selected:function(t){var e=this.all_selected.findIndex((function(e){return t.id===e.id}));~e?(this.select(t,!1),this.all_selected.splice(e,1)):(this.select(t,!0),this.all_selected.push(t))},filter_users_for_selected:function(t){var e=this.conversation.members.map((function(t){return t.id}));return t.map((function(t){return Object.assign(t,{is_selected:e.indexOf(t.id)>=0})}))},filter_users:function(t){var e=this;setTimeout((function(){e.search&&""!==e.search?e.filtered_by_search=u()(e.all_users).filter((function(t){return t.fullname.toLowerCase().includes(e.search.toLowerCase().trim())})):e.filtered_by_search=u()(e.all_users)}),1)}}},M=E,P=(s("49b8"),Object(g["a"])(M,$,B,!1,null,"6a4f6fc6",null)),T=P.exports;function L(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function S(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?L(Object(s),!0).forEach((function(e){Object(n["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):L(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var G={name:"Chat",components:{TableHeader:_["a"],Message:b,Empty:j["a"],GroupChatDialog:O,ManageMembersDialog:T},data:function(){return{activeChat:null,message:null,group_icon:"M125 49c10,0 20,4 26,11 7,8 11,18 11,28 0,11 -4,21 -11,28 0,1 -1,2 -2,2 -3,18 36,10 36,42l0 12c0,8 -4,15 -9,21 -5,5 -13,8 -21,8l-12 0 0 0 -2 0 -34 0 0 0 -12 0c-8,0 -15,-3 -21,-8 -5,-6 -8,-13 -8,-21l0 -12c0,-32 39,-24 35,-42 0,0 -1,-1 -2,-2 -6,-7 -10,-17 -10,-28 0,-10 4,-20 10,-28 7,-7 16,-11 26,-11zm-74 14c-8,0 -16,4 -22,10 -5,6 -9,14 -9,24 0,9 4,17 9,23 1,0 1,1 2,1 -1,6 -6,8 -10,10 -10,4 -20,8 -20,29l0 9c0,0 0,0 0,1 0,3 2,14 18,19 1,0 1,1 2,1l30 0c1,0 1,-1 1,-1 1,0 1,1 2,1l11 0c-1,-2 -1,-3 -2,-5 -1,-2 -1,-3 -2,-5l-7 0c-1,0 -1,0 -2,0 0,0 0,0 -1,0l-30 0c-10,-3 -10,-9 -10,-11l0 0 0 -9c0,-15 7,-17 13,-20 7,-2 13,-5 15,-13 4,2 8,3 12,3 5,0 10,-1 14,-4 1,5 3,8 6,10 3,-3 7,-5 10,-6 -4,-2 -7,-4 -7,-11l0 0c5,-6 8,-14 8,-22 0,-10 -3,-18 -9,-24 -5,-6 -13,-10 -22,-10zm-14 17c3,-5 9,-7 14,-7 6,0 11,2 15,7 4,4 6,10 6,17 0,6 -2,12 -6,16 -4,5 -9,7 -15,7 -5,0 -11,-2 -14,-7 -4,-4 -7,-10 -7,-16 0,-7 3,-13 7,-17zm162 -17c8,0 16,4 22,10 5,6 9,14 9,24 0,9 -4,17 -9,23 -1,0 -1,1 -2,1 1,6 6,8 10,10 10,4 20,8 20,29l0 9c0,0 0,0 0,1 0,3 -2,14 -18,19 -1,0 -1,1 -2,1l-30 0c-1,0 -1,-1 -1,-1 -1,0 -1,1 -2,1l-11 0c1,-2 1,-3 2,-5 1,-2 1,-3 2,-5l7 0c1,0 1,0 2,0 0,0 0,0 1,0l30 0c10,-3 10,-9 10,-11l0 0 0 -9c0,-15 -7,-17 -13,-20 -7,-2 -13,-5 -15,-13 -4,2 -8,3 -12,3 -5,0 -10,-1 -14,-4 -1,5 -3,8 -6,10 -3,-3 -7,-5 -10,-6 4,-2 7,-4 7,-11l0 0c-5,-6 -8,-14 -8,-22 0,-10 3,-18 9,-24 5,-6 13,-10 22,-10zm14 17c-3,-5 -9,-7 -14,-7 -6,0 -11,2 -15,7 -4,4 -6,10 -6,17 0,6 2,12 6,16 4,5 9,7 15,7 5,0 11,-2 14,-7 4,-4 7,-10 7,-16 0,-7 -3,-13 -7,-17zm-58 112c6,0 11,-3 14,-6 4,-4 6,-9 6,-14l0 -12c0,-22 -30,-14 -35,-35 -5,2 -10,3 -15,3 -5,0 -10,-1 -14,-3 -6,22 -35,11 -35,35l0 12c0,5 2,10 5,14 4,3 9,6 14,6 20,0 40,0 60,0zm-11 -125c-5,-5 -11,-9 -19,-9 -7,0 -14,4 -18,9 -5,5 -8,13 -8,21 0,9 3,16 8,22 4,5 11,9 18,9 8,0 14,-4 19,-9 5,-6 8,-13 8,-22 0,-8 -3,-16 -8,-21z",paths:[{text:"Dashboard",disabled:!1,router_name:"default-content"},{text:"Chat",disabled:!0,router_name:null}],all_users:[],all_messages:[],all_groups:[],page:1,pagination:{current:1,total:0},cardLoading:!1,userLoading:!1,current_members:[]}},computed:S({},Object(r["c"])("chat",["unread_messages","all_conversations"]),{loggeduser:function(){return this.$store.getters.user},has_more_message:function(){return this.pagination.current<this.pagination.total}}),created:function(){this.$store.commit("set_floating_button",!1),this.subscribePusher(),this.get_chat_list(),this.get_groupchat_list()},beforeDestroy:function(){this.$store.commit("set_floating_button",!0)},methods:S({},Object(r["d"])("onlineUsers",["set_all_users"]),{},Object(r["d"])("chat",["add_unread_messages","add_message_to_conv"]),{subscribePusher:function(){this.$pusher.authenticate();var t=this.$pusher.subscribe("private-chat.new-message.".concat(this.loggeduser.id));this.chat_channel(t)},subscribeToGroupChat:function(t){console.log(t);var e=this.$pusher.subscribe("mc-chat-conversation.".concat(t));this.group_chat_channel(e)},get_chat_list:function(){var t=this;this.userLoading=!0,o.get_chat_list().then((function(e){var s=e.data;t.all_users=s})).finally((function(){return t.userLoading=!1}))},get_groupchat_list:function(){var t=this;this.userLoading=!0,o.get_groupchat_list().then((function(e){var s=e.data;t.all_groups=s,setTimeout((function(){return t.all_groups.forEach((function(e){return t.subscribeToGroupChat(e.id)}))}),1)})).finally((function(){return t.userLoading=!1}))},get_messages:function(){var t=this;this.cardLoading=!0,o.get_messages(this.activeChat.id).then((function(e){var s=e.data;t.all_messages=s.data.reverse(),t.pagination.current=s.current_page,t.pagination.total=s.last_page})).finally((function(){t.scrollToBottom(),t.cardLoading=!1}))},get_previous_message:function(){var t=this;o.get_more_messages(this.activeChat.id,this.pagination.current).then((function(e){var s=e.data;s.data.forEach((function(e){t.all_messages.unshift(e)})),t.pagination.current=s.current_page}))},copyOf:function(t){return u()(t)},get_group_messages:function(){var t=this;this.cardLoading=!0,o.get_group_messages(this.activeChat.id).then((function(e){var s=e.data;t.all_messages=s.data.reverse(),t.pagination.current=s.current_page,t.pagination.total=s.last_page})).finally((function(){t.scrollToBottom(),t.cardLoading=!1}))},chat_channel:function(t){var e=this;t.bind("App\\Events\\PrivateChatSent",(function(t){var s=t.message,a=t.sender,i=t.receiver,n=e.all_messages.find((function(t){return t.conversation_id===s.conversation_id}));if(n&&i.id===e.loggeduser.id){var r=Object.assign(s,{sender:a});e.add_new_message(r),e.scrollToBottom()}else{var c=e.all_users.findIndex((function(t){return t.id===a.id}));~c&&(e.all_users[c].message_count+=1)}}))},group_chat_channel:function(t){var e=this;t.bind("App\\Events\\GroupChatSent",(function(t){var s=t.message;if(console.log(s),e.activeChat&&e.activeChat.id===s.conversation_id)e.add_new_message(s),e.scrollToBottom();else{var a=e.all_groups.findIndex((function(t){return t.id===s.conversation_id}));~a&&(e.all_groups[a].message_count+=1)}}))},open_conversation:function(t){var e=this;this.activeChat=t,setTimeout((function(){"group"===t.type?(e.current_members=u()(e.activeChat.members),e.get_group_messages(),e.all_groups.forEach((function(e){e.id===t.id&&(e.message_count=0)}))):(e.get_messages(),e.all_users.forEach((function(e){e.id===t.id&&(e.message_count=0)})))}),1)},go_to_profile:function(t){"client"===t.role?this.$router.push("/dashboard/clients/profile/".concat(t.id)):this.$router.push("/dashboard/team/profile/".concat(t.id))},sendMessage:function(t){t&&("group"===this.activeChat.type?this.sendGroupMessage(t):this.sendPrivateMessage(t))},sendGroupMessage:function(t){var e=this;this.message=null;var s={type:"group",message:t,from_id:this.loggeduser.id,convo_id:this.activeChat.id};o.send_group_message(s).then((function(t){var s=t.data;e.add_new_message(s)})).finally((function(){return e.scrollToBottom()}))},sendPrivateMessage:function(t){var e=this;this.message=null;var s={type:"private",message:t,from_id:this.loggeduser.id,to_id:this.activeChat.id};o.send_message(s).then((function(t){var s=t.data;e.add_new_message(s)})).finally((function(){return e.scrollToBottom()}))},add_new_message:function(t){this.all_messages.some((function(e){return e.id===t.id}))||this.all_messages.push(t)},scrollToBottom:function(){setTimeout((function(){var t=document.getElementById("messageContainer");t&&(t.scrollTop=t.scrollHeight)}),1)},new_groupchat_added:function(t){this.all_groups.unshift(t)},is_owner:function(t){return t.id!==this.loggeduser.id&&this.activeChat.data.group_creator.id===this.loggeduser.id},sorted:function(t){return t.slice().sort((function(t,e){return t.is_online-e.is_online})).reverse()}})},N=G,I=(s("f5e5"),s("9f93"),Object(g["a"])(N,a,i,!1,null,"512cc6ca",null));e["default"]=I.exports},"259d":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"breadcrumb-wrapper"},[s("v-breadcrumbs",{attrs:{items:t.paths},scopedSlots:t._u([{key:"item",fn:function(e){var a=e.item;return[s("v-breadcrumbs-item",{staticClass:"page__title",attrs:{disabled:a.disabled}},[s("span",{on:{click:function(e){return t.navigate_from_breadcrumb(a)}}},[t._v(" "+t._s(a.text)+" ")])])]}}])},[s("v-icon",{attrs:{slot:"divider"},slot:"divider"},[t._v("chevron_right")])],1)],1)},i=[],n={name:"Breadcrumb",props:{paths:{type:Array,default:function(){return[]}}},methods:{navigate_from_breadcrumb:function(t){if(t.hasOwnProperty("path"))t.path&&this.$router.push({path:t.path});else{var e=t.router_name;e&&this.$router.push({name:e})}}}},r=n,c=(s("15b0"),s("edab"),s("2877")),o=Object(c["a"])(r,a,i,!1,null,"adf165fe",null);e["a"]=o.exports},"28fa":function(t,e,s){},"29d6":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",{staticClass:"table-header",attrs:{wrap:""}},[s("breadcrumb",{attrs:{paths:t.paths}}),s("v-flex",[t.noButton?t._e():s("v-btn",{staticClass:"add__btn mr-2",attrs:{fab:"",small:""},on:{click:function(e){return t.$emit("click")}}},[s("v-icon",[t._v("add")])],1),t.noSortButton?t._e():s("v-btn",{staticClass:"add__btn mr-2",attrs:{fab:"",small:""},on:{click:function(e){return t.$emit("click-sort-by")}}},[s("v-icon",[t._v("sort")])],1),t.noListButton?t._e():s("v-btn",{staticClass:"add__btn mr-2",attrs:{fab:"",small:""},on:{click:function(e){return t.$emit("click-list-view")}}},[s("v-icon",[t._v("list")])],1),t.noGridButton?t._e():s("v-btn",{staticClass:"add__btn mr-2",attrs:{fab:"",small:""},on:{click:function(e){return t.$emit("click-grid-view")}}},[s("v-icon",[t._v("mdi-view-dashboard")])],1),t._t("form-btn")],2)],1)},i=[],n=s("259d"),r={name:"TableHeader",props:{paths:{type:Array,default:[]},noButton:{type:Boolean,default:!1},noListButton:{type:Boolean,default:!0},noGridButton:{type:Boolean,default:!0},noSortButton:{type:Boolean,default:!0}},data:function(){return{fab:!0}},components:{Breadcrumb:n["a"]}},c=r,o=(s("ff3c"),s("2877")),l=Object(o["a"])(c,a,i,!1,null,"0910c4a8",null);e["a"]=l.exports},"2f21":function(t,e,s){"use strict";var a=s("79e5");t.exports=function(t,e){return!!t&&a((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},"386d":function(t,e,s){"use strict";var a=s("cb7c"),i=s("83a1"),n=s("5f1b");s("214f")("search",1,(function(t,e,s,r){return[function(s){var a=t(this),i=void 0==s?void 0:s[e];return void 0!==i?i.call(s,a):new RegExp(s)[e](String(a))},function(t){var e=r(s,t,this);if(e.done)return e.value;var c=a(t),o=String(this),l=c.lastIndex;i(l,0)||(c.lastIndex=0);var u=n(c,o);return i(c.lastIndex,l)||(c.lastIndex=l),null===u?-1:u.index}]}))},4752:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"empty my-1",attrs:{id:t.slug}},[s("div",{staticClass:"empty-content"},[s("div",{staticClass:"empty-svg"},[s("svg",{attrs:{viewBox:"0 0 250 250"}},[s("path",{attrs:{d:"M37 11l176 0c11,0 20,4 26,11 7,6 11,16 11,26l0 154c0,10 -4,19 -11,26 -2,2 -4,3 -6,5 -17,13 -33,1 -48,-11 -10,-7 -19,-14 -26,-11 -5,2 -9,7 -12,13 -12,18 -31,17 -46,4 -5,-5 -11,-10 -16,-11 -6,-1 -12,4 -19,9 -11,8 -23,17 -39,11 -6,-1 -12,-5 -16,-9 -7,-7 -11,-16 -11,-26l0 -154c0,-10 4,-20 11,-26 6,-7 15,-11 26,-11zm22 108c8,0 15,7 15,15 0,8 -7,15 -15,15 -8,0 -15,-7 -15,-15 0,-8 7,-15 15,-15zm0 -56c8,0 15,7 15,15 0,8 -7,15 -15,15 -8,0 -15,-7 -15,-15 0,-8 7,-15 15,-15zm44 24c-4,0 -7,-4 -7,-8 0,-4 3,-7 7,-7l96 0c4,0 7,3 7,7 0,4 -3,8 -7,8l-96 0zm0 56c-4,0 -7,-4 -7,-8 0,-4 3,-7 7,-7l96 0c4,0 7,3 7,7 0,4 -3,8 -7,8l-96 0zm129 70c2,-3 3,-7 3,-11l0 -154c0,-6 -2,-12 -6,-16 -4,-4 -10,-6 -16,-6l-176 0c-6,0 -12,2 -16,6 -4,4 -6,10 -6,16l0 154c0,6 2,11 6,15 1,2 3,3 4,3 13,8 23,1 32,-6 9,-7 18,-13 30,-12 10,2 17,8 24,15 8,7 17,8 24,-1 4,-8 9,-15 19,-19 14,-6 27,3 39,13 13,10 26,20 39,3z"}})])]),s("div",{staticClass:"empty-text"},[s("p",[t._v(t._s(t.headline))]),t._t("extra")],2)])])},i=[],n={name:"Empty",props:{slug:{type:String,default:"empty-sample"},headline:{type:String,default:"No data yet"}}},r=n,c=(s("1544"),s("6f5d"),s("2877")),o=Object(c["a"])(r,a,i,!1,null,"53ead389",null);e["a"]=o.exports},"49b8":function(t,e,s){"use strict";var a=s("28fa"),i=s.n(a);i.a},"4c37":function(t,e,s){},"4d6a":function(t,e,s){},"55dd":function(t,e,s){"use strict";var a=s("5ca1"),i=s("d8e8"),n=s("4bf8"),r=s("79e5"),c=[].sort,o=[1,2,3];a(a.P+a.F*(r((function(){o.sort(void 0)}))||!r((function(){o.sort(null)}))||!s("2f21")(c)),"Array",{sort:function(t){return void 0===t?c.call(n(this)):c.call(n(this),i(t))}})},"6f5d":function(t,e,s){"use strict";var a=s("1f84"),i=s.n(a);i.a},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},8713:function(t,e,s){},"9f1a":function(t,e,s){"use strict";var a=s("4d6a"),i=s.n(a);i.a},"9f93":function(t,e,s){"use strict";var a=s("f421"),i=s.n(a);i.a},a679:function(t,e,s){},dae0:function(t,e,s){},e314:function(t,e,s){},e87b:function(t,e,s){"use strict";var a=s("e314"),i=s.n(a);i.a},edab:function(t,e,s){"use strict";var a=s("f3a9"),i=s.n(a);i.a},f3a9:function(t,e,s){},f421:function(t,e,s){},f5e5:function(t,e,s){"use strict";var a=s("a679"),i=s.n(a);i.a},ff3c:function(t,e,s){"use strict";var a=s("4c37"),i=s.n(a);i.a}}]);
//# sourceMappingURL=chunk-6447843d.d74eda0c.js.map