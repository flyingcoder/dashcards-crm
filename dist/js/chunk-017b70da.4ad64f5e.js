(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-017b70da"],{"1e4c":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s}));var i=n("1be9"),a=function(e,t){return i["a"].post("api/projects/".concat(e,"/messages"),t,{headers:{"Content-Type":"multipart/form-data"}})},s=function(e){return i["a"].get("api/chat/group/client/".concat(e))}},"408c":function(e,t,n){var i=n("2b3e"),a=function(){return i.Date.now()};e.exports=a},"4c99":function(e,t,n){},"83c8":function(e,t,n){"use strict";var i=n("4c99"),a=n.n(i);a.a},b019:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("1be9"),a={get_chat_list:function(){return i["a"].get("api/chat/list?for=project&has_msg_count=true")},get_chat_list_only:function(){return i["a"].get("api/chat/list?for=project")},get_groupchat_list:function(){return i["a"].get("api/chat/group/list?for=project&has_msg_count=true")},get_members_list:function(e){return i["a"].get("api/chat/group/members/".concat(e))},get_messages:function(e){return i["a"].get("api/chat/private/".concat(e))},get_more_messages:function(e,t){return i["a"].get("api/chat/private/".concat(e,"?page=").concat(t+1))},get_group_messages:function(e){return i["a"].get("api/chat/group/private/".concat(e))},get_group_more_messages:function(e,t){return i["a"].get("api/chat/group/private/".concat(e,"?page=").concat(t+1))},send_message:function(e){return i["a"].post("api/chat/private",e,{headers:{"Content-Type":"multipart/form-data"}})},send_group_message:function(e){return i["a"].post("api/chat/group/private",e,{headers:{"Content-Type":"multipart/form-data"}})},save_group:function(e){return i["a"].post("api/chat/group",e)},update_members_list:function(e){return i["a"].post("api/chat/group/update-members",e)},remove_from_group:function(e){return i["a"].post("api/chat/group/remove-member",e)}}},b047c:function(e,t,n){var i=n("1a8c"),a=n("408c"),s=n("b4b0"),r="Expected a function",o=Math.max,c=Math.min;function l(e,t,n){var l,u,d,_,f,g,m=0,h=!1,p=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=l,i=u;return l=u=void 0,m=t,_=e.apply(i,n),_}function y(e){return m=e,f=setTimeout(x,t),h?b(e):_}function $(e){var n=e-g,i=e-m,a=t-n;return p?c(a,d-i):a}function w(e){var n=e-g,i=e-m;return void 0===g||n>=t||n<0||p&&i>=d}function x(){var e=a();if(w(e))return C(e);f=setTimeout(x,$(e))}function C(e){return f=void 0,v&&l?b(e):(l=u=void 0,_)}function k(){void 0!==f&&clearTimeout(f),m=0,l=g=u=f=void 0}function M(){return void 0===f?_:C(a())}function T(){var e=a(),n=w(e);if(l=arguments,u=this,g=e,n){if(void 0===f)return y(g);if(p)return clearTimeout(f),f=setTimeout(x,t),b(g)}return void 0===f&&(f=setTimeout(x,t)),_}return t=s(t)||0,i(n)&&(h=!!n.leading,p="maxWait"in n,d=p?o(s(n.maxWait)||0,t):d,v="trailing"in n?!!n.trailing:v),T.cancel=k,T.flush=M,T}e.exports=l},b4b0:function(e,t,n){var i=n("1a8c"),a=n("ffd6"),s=NaN,r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt;function d(e){if("number"==typeof e)return e;if(a(e))return s;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=c.test(e);return n||l.test(e)?u(e.slice(2),n?2:8):o.test(e)?s:+e}e.exports=d},c470:function(e,t,n){},c8c0:function(e,t,n){"use strict";var i=n("c470"),a=n.n(i);a.a},dd50:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"message__body team-messages"},[e.can_manage_members?n("v-system-bar",{attrs:{"lights-out":"",height:40}},[n("v-spacer"),n("v-btn",{staticClass:"primary-btn",attrs:{text:"",small:""},on:{click:e.open_manage_member_dialog}},[n("v-icon",{attrs:{left:""}},[e._v("settings")]),e._v(" Manage Members ")],1)],1):e._e(),n("div",{ref:"messages-container",staticClass:"messages"},[e.can_send_message?n("v-row",{staticClass:"pa-3",attrs:{"no-gutters":""}},[n("v-spacer"),n("v-col",[!1!==e.noMoreData||e.loading?e._e():n("v-btn",{staticClass:"view__more_btn overline",attrs:{text:""},on:{click:e.load_previous}},[e._v(" Load Previous Messages ")])],1),n("v-spacer")],1):e._e(),e.loading?n("v-progress-linear",{attrs:{indeterminate:!0}}):e._e(),e.items.length&&e.can_send_message?n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"px-3 py-2",staticStyle:{"min-height":"350px"},attrs:{md:"12"}},e._l(e.messages(e.items),(function(e){return n("Message",{key:e.id,attrs:{message:e}})})),1)],1):e.can_send_message?n("div",{staticClass:"no-messages"},[n("Empty",{attrs:{icon:"mdi-cellphone-message-off",headline:"No messages yet"}})],1):n("div",{staticClass:"no-messages"},[n("Empty",{attrs:{icon:"mdi-cellphone-off",headline:"Client messages unavailable! "}})],1)],1),n("div",{staticClass:"write px-3"},[e.can_send_message?n("ChatField",{staticClass:"mt-2",attrs:{mentionables:e.mentionables},on:{typing:function(e){},"send-message":e.sendMessage}}):e._e()],1),n("ManageClientChatMember",{ref:"manage_group_members_dialog",attrs:{conversation:e.activeChat}})],1)},a=[],s=(n("ac6a"),n("8615"),n("c5f6"),n("1be9"),n("1e4c")),r=n("579d"),o=n("e06e"),c=n("0644"),l=n.n(c),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.conversation?n("div",{staticClass:"text-center"},[n("v-dialog",{attrs:{"max-width":"800",persistent:"",scrollable:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[e._v(" Manage Members "),n("v-spacer"),n("v-icon",{on:{click:function(t){return e.clear_and_close()}}},[e._v("close")])],1),n("v-card-text",[n("v-container",[n("v-row",[n("v-flex",{attrs:{sm12:"",md8:""}},[n("v-text-field",{attrs:{solo:"",label:"Search for people to add",required:"",clearable:"","prepend-inner-icon":"search"},on:{keydown:e.filter_users,"click:clear":e.filter_users},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e.filtered_by_search.length>0?n("v-list",{attrs:{id:"filtered_by_search_wrapper"}},e._l(e.filtered_by_search,(function(t){return n("v-list-item",{key:t.title,on:{click:function(n){return e.selected(t)}}},[n("v-list-item-avatar",[n("v-img",{attrs:{src:t.image_url}})],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(t.fullname)}})],1),n("v-list-item-icon",[n("v-icon",{directives:[{name:"show",rawName:"v-show",value:t.is_selected,expression:"item.is_selected"}],attrs:{color:"success"}},[e._v("mdi-checkbox-marked-circle ")])],1)],1)})),1):e._e()],1),n("v-flex",{attrs:{sm12:"",md4:""}},[n("v-list",{attrs:{id:"all_selected_wrapper"}},[n("v-subheader",[e._v("Selected ("+e._s(e.all_selected.length)+") ")]),e._l(e.all_selected,(function(t){return e.all_selected.length>0?n("v-list-item",{key:t.title},[n("v-list-item-avatar",[n("v-img",{attrs:{src:t.image_url}})],1),n("v-list-item-content",[n("v-list-item-subtitle",{domProps:{textContent:e._s(t.fullname)}})],1),e.can_be_remove(t)?n("v-list-item-icon",[n("v-icon",{attrs:{small:"",color:"danger"},on:{click:function(n){return e.selected(t)}}},[e._v("close ")])],1):e._e()],1):e._e()}))],2)],1)],1)],1)],1),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{on:{click:e.clear_and_close}},[e._v(" Cancel ")]),n("v-btn",{attrs:{color:"primary",loading:e.btnloading},on:{click:e.update_members}},[e._v(" Save ")])],1)],1)],1)],1):e._e()},d=[],_=(n("386d"),n("20d6"),n("6762"),n("2fdb"),n("b019")),f={name:"ManageClientChatMember",props:{conversation:Object},data:function(){return{dialog:!1,all_users:[],filtered_by_search:[],all_selected:[],search:"",btnloading:!1}},computed:{loggedUser:function(){return this.$store.getters.user}},methods:{open_dialog:function(){this.dialog=!0,this.all_selected=l()(this.conversation.members),this.get_chat_list_only()},clear_and_close:function(){this.dialog=!1},get_chat_list_only:function(){var e=this;_["a"].get_chat_list().then((function(t){var n=t.data;e.filtered_by_search=e.filter_users_for_selected(n),e.all_users=l()(n)}))},update_members:function(){var e=this;this.btnloading=!0;var t={convo_id:this.conversation.id,users:this.all_selected.map((function(e){return e.id}))};_["a"].update_members_list(t).then((function(t){var n=t.data;e.conversation.members=n,e.clear_and_close()})).finally((function(){return e.btnloading=!1}))},can_be_remove:function(e){if(e.id===this.loggedUser.id)return!1;if(e.is_company_owner)return!1;if(this.loggedUser.is_company_owner)return!0;var t=Object.values(this.loggedUser.user_roles)[0],n=Object.values(e.user_roles)[0];return(!t.includes("admin")||!n.includes("admin"))&&(!(!t.includes("admin")||n.includes("admin"))||(!t.includes("manager")||!n.includes("manager"))&&((!t.includes("manager")||!n.includes("admin"))&&(!t.includes("client")&&!t.includes("member"))))},select:function(e,t){var n=this.filtered_by_search.findIndex((function(t){return e.id===t.id}));~n&&(this.filtered_by_search[n].is_selected=t)},selected:function(e){var t=this.all_selected.findIndex((function(t){return e.id===t.id}));~t?(this.select(e,!1),this.all_selected.splice(t,1)):(this.select(e,!0),this.all_selected.push(e))},filter_users_for_selected:function(e){var t=this.conversation.members.map((function(e){return e.id}));return e.map((function(e){return Object.assign(e,{is_selected:t.indexOf(e.id)>=0})}))},filter_users:function(e){var t=this;setTimeout((function(){t.search&&""!==t.search?t.filtered_by_search=l()(t.all_users).filter((function(e){return e.fullname.toLowerCase().includes(t.search.toLowerCase().trim())})):t.filtered_by_search=l()(t.all_users)}),1)}}},g=f,m=(n("c8c0"),n("2877")),h=Object(m["a"])(g,u,d,!1,null,"3e107280",null),p=h.exports,v=n("6bdf"),b=n("6385"),y={name:"ClientMessages",mixins:[r["a"],o["a"]],props:{id:[Number,String]},components:{ManageClientChatMember:p,ChatField:v["a"],Message:b["a"]},data:function(){return{loading:!1,message:null,can_message:!1,activeChat:null}},computed:{loggedUser:function(){return this.$store.getters.user},can_manage_members:function(){if(this.loggedUser.is_admin)return!0;var e=Object.values(this.loggedUser.user_roles)[0];return!!~e.indexOf("manager")},can_send_message:function(){return this.can_message},mentionables:function(){return this.activeChat?this.activeChat.members:[]},type:function(){return this.$route.params.type||"project"},paths:function(){return[{text:"Dashboard",disabled:!1,router_name:"default-content"},{text:this.type,disabled:!0,router_name:null},{text:"Client Message",disabled:!0,router_name:null}]}},created:function(){this.getConvoDetails(this.id)},mounted:function(){this.loading=!0,this.$event.$emit("path-change",this.paths),this.$pusher.authenticate(),this.subscribePusher()},beforeDestroy:function(){this.$pusher.unsubscribe("private-project.client-message.".concat(this.id))},methods:{open_manage_member_dialog:function(){this.$refs.manage_group_members_dialog.open_dialog()},getConvoDetails:function(e){var t=this;s["a"](e).then((function(e){var n=e.data;t.activeChat=n})).finally((function(){t.loading=!1}))},scrollToBottomDiv:function(){var e=this;setTimeout((function(){var t=e.$refs["messages-container"];t&&(t.scrollTop=t.scrollHeight)}),1)},load_previous:function(){this.load_more_via_url("api/projects/".concat(this.id,"/messages?type=client"))},add_new_message:function(e){this.items.some((function(t){return t.id===e.id}))||this.items.unshift(e)},user_can_message:function(e){var t=this;this.can_message=e,e?(this.fill_table_via_url("api/projects/".concat(this.id,"/messages?type=client")),setTimeout((function(){t.scrollToBottomDiv()}),1),console.log("Client chat connected")):console.log("Client chat unavailable for you.")},subscribePusher:function(){var e=this,t=this.$pusher.subscribe("private-project.client-message.".concat(this.id));t.bind("ProjectClientMessage",(function(t){"client"===t.type&&e.add_new_message(t.message)})),t.bind("pusher:subscription_succeeded",(function(){return e.user_can_message(!0)})),t.bind("pusher:subscription_error",(function(t){return e.user_can_message(!1)}))},sendMessage:function(e){var t=this,n=new FormData;n.append("message",e.message),n.append("type","client"),n.append("from_id",this.loggedUser.id),e.files.length>0&&n.append("file",e.files[0]),s["b"](this.id,n).then((function(e){var n=e.data;t.add_new_message(n)})).finally((function(){t.scrollToBottomDiv(),t.$event.$emit("btnsending_off",!1)}))},messages:function(e){return l()(e).reverse()}}},$=y,w=(n("83c8"),Object(m["a"])($,i,a,!1,null,"9b41a172",null));t["default"]=w.exports},e06e:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("386d"),n("a481"),n("c5f6"),n("28a5"),n("55dd"),n("2fdb"),n("20d6"),n("6762"),n("ac6a");var i=n("b047c"),a=n.n(i),s=n("d4e9"),r=n("1be9"),o={methods:{resetPagination:function(){this.pagination.current=1,this.pagination.total=0,this.noMoreData=!1},clear_selected:function(){this.selected=[],this.$event.$emit("clear_selected",[]),this.$event.$emit("btnloading_off",!1)},add_item:function(e,t){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3?arguments[3]:void 0;s["a"][e](t,i).then((function(e){var t=e.data;Array.isArray(t)?t.reverse().forEach((function(e){return n.items.push(e)})):n.items.push(t),n.clear_selected(),n.$refs.add_dialog.clear_and_close(),n.$event.$emit("open_snackbar",n.table_config.add_message),"function"===typeof a&&a(e)})).finally((function(){return n.$event.$emit("btnloading_off",!1)}))},extract_per_page:function(e){var t=e.search("per_page");return e.substring(t+9,t+10)},calc_per_page_items:function(e,t){var n=[5,10,15,20,25];return n.includes(e)||n.push(e),!n.includes(t)&&t<=25&&n.push(t),n},update_item:function(e,t){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3?arguments[3]:void 0;s["a"][e](this.edit_item.id,t,i).then((function(e){var t=n.items.findIndex((function(t){return t.id===e.data.id}));~t&&n.items.splice(t,1,e.data),n.edit_item={id:null,fields:null},n.edit_dialog=!1,n.clear_selected(),n.$event.$emit("open_snackbar",n.table_config.update_message),"function"===typeof a&&a(e)})).finally((function(){return n.$event.$emit("btnloading_off",!1)}))},delete_item:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;s["a"][e](this.delete_item_id,n).then((function(){var e=t.items.findIndex((function(e){return e.id===t.delete_item_id}));~e&&t.items.splice(e,1),t.delete_item_id=null,t.delete_dialog=!1,t.clear_selected(),t.$event.$emit("open_snackbar",t.table_config.delete_message)})).finally((function(){return t.$event.$emit("btnloading_off",!1)}))},bulk_delete:function(e){var t=this,n={ids:this.selected.map((function(e){return e.id}))};s["a"][e]({data:n}).then((function(e){var n=e.data;t.selected.forEach((function(e){var n=t.items.findIndex((function(t){return t.id===e.id}));~n&&t.items.splice(n,1)})),t.bulk_delete_dialog=!1,t.clear_selected(),t.$event.$emit("open_snackbar",n.message)})).finally((function(){t.$event.$emit("btnloading_off",!1)}))},bulk_delete_via_url:function(e){var t=this,n={ids:this.selected.map((function(e){return e.id}))};r["a"].delete(e,{data:n}).then((function(e){var n=e.data;t.selected.forEach((function(e){var n=t.items.findIndex((function(t){return t.id===e.id}));~n&&t.items.splice(n,1)})),t.bulk_delete_dialog=!1,t.clear_selected(),t.$event.$emit("open_snackbar",n.message)})).finally((function(){t.$event.$emit("btnloading_off",!1)}))},open_edit_dialog:function(e){this.edit_dialog=!0,this.$set(this.edit_item,"id",e.id),this.$set(this.edit_item,"fields",e)},open_delete_dialog:function(e){this.delete_dialog=!0,this.delete_item_id=e.id},open_bulk_delete_dialog:function(e){this.bulk_delete_dialog=!0,this.selected=e},fill_table:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.loading=!0,s["a"][e](i).then((function(e){t.items_response=e.data,n?(t.items=e.data.data,t.pagination.current=e.data.current_page,t.pagination.total=e.data.last_page,t.hasMoreData()):t.items=e.data})).finally((function(){t.clear_selected(),t.loading=!1,t.$event.$emit("btnloading_off",!1)}))},fill_table_via_url:function(e){var t=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2?arguments[2]:void 0;this.loading=!0;var a={page:this.pagination.current};e.includes("per_page")||(a.per_page=this.$store.getters["configs/general_page_limits"]),r["a"].get(e,{params:a}).then((function(e){t.items_response=e.data,n?(t.items=e.data.data,t.pagination.current=e.data.current_page,t.pagination.total=e.data.last_page,t.hasMoreData()):t.items=e.data,"function"===typeof i&&i(e)})).finally((function(){t.clear_selected(),t.loading=!1,t.$event.$emit("btnloading_off",!1)}))},load_more_on_table:function(e){var t=this;this.loading=!0;var n={page:this.pagination.current+1};s["a"][e]({params:n}).then((function(e){var n=e.data;t.items_response=n.data,n.data.forEach((function(e){t.items.push(e)})),t.pagination.current=n.current_page,t.pagination.total=n.last_page,t.hasMoreData()})).finally((function(){t.clear_selected(),t.loading=!1,t.scrollToBottom(),t.$event.$emit("btnloading_off",!1)}))},load_more_via_url:function(e,t){var n=this;this.loading=!0;var i={page:this.pagination.current+1};e.includes("per_page")||(i.per_page=this.$store.getters["configs/general_page_limits"]),r["a"].get(e,{params:i}).then((function(e){var i=e.data;n.items_response=i.data,i.data.forEach((function(e){n.items.push(e)})),n.pagination.current=i.current_page,n.pagination.total=i.last_page,n.hasMoreData(),"function"===typeof t&&t(i)})).finally((function(){n.clear_selected(),n.loading=!1,n.scrollToBottom(),n.$event.$emit("btnloading_off",!1)}))},fill_table_with_data:function(e){this.items=e},add_table_rows:function(e,t){this.items=e,this.items_response=t},changeSort:function(e){this.sort.sortBy===e?this.sort.descending=!this.sort.descending:(this.sort.sortBy=e,this.sort.descending=!1)},refresh_table:function(e){var t=this;s["a"][this.table_config.refresh_table_api_name](e).then((function(e){t.$event.$emit("open_snackbar",t.table_config.refresh_table_message),t.loading=!1,t.clear_selected(),t.items_response=e.data,t.items=e.data.data})).finally((function(){return t.$event.$emit("btnloading_off",!1)}))},update_table_actions:function(e){if(e.page&&(this.page=Number(e.page)),e.per_page&&(this.rows_per_page=Number(e.per_page)),e.search&&(this.search=e.search),e.sort){var t=e.sort.split("|");this.sort.sortBy=t[0],"asc"===t[1]?this.sort.descending=!1:"desc"===t[1]&&(this.sort.descending=!0)}},hasMoreData:function(){this.componentKey+=1,this.pagination.current>=this.pagination.total&&(this.noMoreData=!0)},toggleAll:function(){this.selected.length?this.clear_selected():this.selected=this.items.slice()},setPreferredView:function(e){window.localStorage.setItem("bzk_prefer_view",e),this.view=e},getPreferredView:function(){return window.localStorage.getItem("bzk_prefer_view")||"list"},scrollToBottom:function(){setTimeout((function(){var e=document.getElementsByClassName("v-data-table__wrapper")[0];e&&(e.scrollTop=e.scrollHeight)}),1)},debounce:a()((function(e){this.search=e}),500)}},c={mixins:[o],data:function(){return{edit_dialog:!1,add_dialog:!1,delete_dialog:!1,permissionDialog:!1,bulk_delete_dialog:!1,loading:!1,items:[],items_response:null,edit_item:{id:null,fields:null},delete_item_id:null,show_delete_selected:!1,selected_ids:[],selected:[],rows_per_page:null,page:1,sort:{sortBy:null,descending:!1},search:"",pagination:{current:1,total:0},noMoreData:!1,componentKey:1,view:"list",btnloading:!1}},watch:{selected_ids:function(e){e.length>0?this.show_delete_selected=!0:this.show_delete_selected=!1},api_query:function(e,t){var n=Number(this.extract_per_page(e)),i=Number(this.extract_per_page(t))||null;this.items_response&&this.rows_per_page===this.items.length&&n!==i||(this.$router.replace({name:this.table_config.route_name,query:{page:this.page,per_page:this.rows_per_page,search:this.search,sort:this.query_for_sorting}}),this.loading=!0,this.refresh_table(e))}}}}}]);
//# sourceMappingURL=chunk-017b70da.4ad64f5e.js.map