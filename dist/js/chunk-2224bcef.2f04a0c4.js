(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2224bcef"],{"1b0d":function(e,t,i){},"1e4c":function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"a",(function(){return s}));var n=i("1be9"),a=function(e,t){return n["a"].post("api/projects/".concat(e,"/messages"),t,{headers:{"Content-Type":"multipart/form-data"}})},s=function(e){return n["a"].get("api/chat/group/client/".concat(e))}},"408c":function(e,t,i){var n=i("2b3e"),a=function(){return n.Date.now()};e.exports=a},b047c:function(e,t,i){var n=i("1a8c"),a=i("408c"),s=i("b4b0"),o="Expected a function",r=Math.max,c=Math.min;function l(e,t,i){var l,d,u,f,h,_,g=0,p=!1,m=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var i=l,n=d;return l=d=void 0,g=t,f=e.apply(n,i),f}function $(e){return g=e,h=setTimeout(x,t),p?b(e):f}function y(e){var i=e-_,n=e-g,a=t-i;return m?c(a,u-n):a}function w(e){var i=e-_,n=e-g;return void 0===_||i>=t||i<0||m&&n>=u}function x(){var e=a();if(w(e))return T(e);h=setTimeout(x,y(e))}function T(e){return h=void 0,v&&l?b(e):(l=d=void 0,f)}function k(){void 0!==h&&clearTimeout(h),g=0,l=_=d=h=void 0}function C(){return void 0===h?f:T(a())}function D(){var e=a(),i=w(e);if(l=arguments,d=this,_=e,i){if(void 0===h)return $(_);if(m)return clearTimeout(h),h=setTimeout(x,t),b(_)}return void 0===h&&(h=setTimeout(x,t)),f}return t=s(t)||0,n(i)&&(p=!!i.leading,m="maxWait"in i,u=m?r(s(i.maxWait)||0,t):u,v="trailing"in i?!!i.trailing:v),D.cancel=k,D.flush=C,D}e.exports=l},b4b0:function(e,t,i){var n=i("1a8c"),a=i("ffd6"),s=NaN,o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,d=parseInt;function u(e){if("number"==typeof e)return e;if(a(e))return s;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var i=c.test(e);return i||l.test(e)?d(e.slice(2),i?2:8):r.test(e)?s:+e}e.exports=u},e06e:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));i("386d"),i("a481"),i("c5f6"),i("28a5"),i("55dd"),i("2fdb"),i("20d6"),i("6762"),i("ac6a");var n=i("b047c"),a=i.n(n),s=i("d4e9"),o=i("1be9"),r={methods:{resetPagination:function(){this.pagination.current=1,this.pagination.total=0,this.noMoreData=!1},clear_selected:function(){this.selected=[],this.$event.$emit("clear_selected",[]),this.$event.$emit("btnloading_off",!1)},add_item:function(e,t){var i=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3?arguments[3]:void 0;s["a"][e](t,n).then((function(e){var t=e.data;Array.isArray(t)?t.reverse().forEach((function(e){return i.items.push(e)})):i.items.push(t),i.clear_selected(),i.$refs.add_dialog&&i.$refs.add_dialog.clear_and_close(),i.$event.$emit("open_snackbar",i.table_config.add_message),"function"===typeof a&&a(e)})).finally((function(){return i.$event.$emit("btnloading_off",!1)}))},extract_per_page:function(e){var t=e.search("per_page");return e.substring(t+9,t+10)},calc_per_page_items:function(e,t){var i=[5,10,15,20,25];return i.includes(e)||i.push(e),!i.includes(t)&&t<=25&&i.push(t),i},update_item:function(e,t){var i=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3?arguments[3]:void 0;s["a"][e](this.edit_item.id,t,n).then((function(e){var t=i.items.findIndex((function(t){return t.id===e.data.id}));~t&&i.items.splice(t,1,e.data),i.edit_item={id:null,fields:null},i.edit_dialog=!1,i.clear_selected(),i.$event.$emit("open_snackbar",i.table_config.update_message),"function"===typeof a&&a(e)})).finally((function(){return i.$event.$emit("btnloading_off",!1)}))},delete_item:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0;s["a"][e](this.delete_item_id,i).then((function(){var e=t.items.findIndex((function(e){return e.id===t.delete_item_id}));~e&&t.items.splice(e,1),t.delete_item_id=null,t.delete_dialog=!1,t.clear_selected(),t.$event.$emit("open_snackbar",t.table_config.delete_message),"function"===typeof n&&n(response)})).finally((function(){return t.$event.$emit("btnloading_off",!1)}))},bulk_delete:function(e){var t=this,i={ids:this.selected.map((function(e){return e.id}))};s["a"][e]({data:i}).then((function(e){var i=e.data;t.selected.forEach((function(e){var i=t.items.findIndex((function(t){return t.id===e.id}));~i&&t.items.splice(i,1)})),t.bulk_delete_dialog=!1,t.clear_selected(),t.$event.$emit("open_snackbar",i.message)})).finally((function(){t.$event.$emit("btnloading_off",!1)}))},bulk_delete_via_url:function(e){var t=this,i={ids:this.selected.map((function(e){return e.id}))};o["a"].delete(e,{data:i}).then((function(e){var i=e.data;t.selected.forEach((function(e){var i=t.items.findIndex((function(t){return t.id===e.id}));~i&&t.items.splice(i,1)})),t.bulk_delete_dialog=!1,t.clear_selected(),t.$event.$emit("open_snackbar",i.message)})).finally((function(){t.$event.$emit("btnloading_off",!1)}))},open_edit_dialog:function(e){this.edit_dialog=!0,this.$set(this.edit_item,"id",e.id),this.$set(this.edit_item,"fields",e)},open_delete_dialog:function(e){this.delete_dialog=!0,this.delete_item_id=e.id},open_bulk_delete_dialog:function(e){this.bulk_delete_dialog=!0,this.selected=e},fill_table:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.loading=!0,s["a"][e](n).then((function(e){t.items_response=e.data,i?(t.items=e.data.data,t.pagination.current=e.data.current_page,t.pagination.total=e.data.last_page,t.hasMoreData()):t.items=e.data})).finally((function(){t.clear_selected(),t.loading=!1,t.$event.$emit("btnloading_off",!1)}))},fill_table_via_url:function(e){var t=this,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2?arguments[2]:void 0;this.loading=!0;var a={page:this.pagination.current};e.includes("per_page")||(a.per_page=this.$store.getters["configs/general_page_limits"]),o["a"].get(e,{params:a}).then((function(e){t.items_response=e.data,i?(t.items=e.data.data,t.pagination.current=e.data.current_page,t.pagination.total=e.data.last_page,t.hasMoreData()):t.items=e.data,"function"===typeof n&&n(e)})).finally((function(){t.clear_selected(),t.loading=!1,t.$event.$emit("btnloading_off",!1)}))},load_more_on_table:function(e){var t=this;this.loading=!0;var i={page:this.pagination.current+1};s["a"][e]({params:i}).then((function(e){var i=e.data;t.items_response=i.data,i.data.forEach((function(e){t.items.push(e)})),t.pagination.current=i.current_page,t.pagination.total=i.last_page,t.hasMoreData()})).finally((function(){t.clear_selected(),t.loading=!1,t.scrollToBottom(),t.$event.$emit("btnloading_off",!1)}))},load_more_via_url:function(e,t){var i=this;this.loading=!0;var n={page:this.pagination.current+1};e.includes("per_page")||(n.per_page=this.$store.getters["configs/general_page_limits"]),o["a"].get(e,{params:n}).then((function(e){var n=e.data;i.items_response=n.data,n.data.forEach((function(e){i.items.push(e)})),i.pagination.current=n.current_page,i.pagination.total=n.last_page,i.hasMoreData(),"function"===typeof t&&t(n)})).finally((function(){i.clear_selected(),i.loading=!1,i.scrollToBottom(),i.$event.$emit("btnloading_off",!1)}))},fill_table_with_data:function(e){this.items=e},add_table_rows:function(e,t){this.items=e,this.items_response=t},changeSort:function(e){this.sort.sortBy===e?this.sort.descending=!this.sort.descending:(this.sort.sortBy=e,this.sort.descending=!1)},refresh_table:function(e){var t=this;s["a"][this.table_config.refresh_table_api_name](e).then((function(e){t.$event.$emit("open_snackbar",t.table_config.refresh_table_message),t.loading=!1,t.clear_selected(),t.items_response=e.data,t.items=e.data.data})).finally((function(){return t.$event.$emit("btnloading_off",!1)}))},update_table_actions:function(e){if(e.page&&(this.page=Number(e.page)),e.per_page&&(this.rows_per_page=Number(e.per_page)),e.search&&(this.search=e.search),e.sort){var t=e.sort.split("|");this.sort.sortBy=t[0],"asc"===t[1]?this.sort.descending=!1:"desc"===t[1]&&(this.sort.descending=!0)}},hasMoreData:function(){this.componentKey+=1,this.pagination.current>=this.pagination.total&&(this.noMoreData=!0)},toggleAll:function(){this.selected.length?this.clear_selected():this.selected=this.items.slice()},setPreferredView:function(e){window.localStorage.setItem("bzk_prefer_view",e),this.view=e},getPreferredView:function(){return window.localStorage.getItem("bzk_prefer_view")||"list"},scrollToBottom:function(){setTimeout((function(){var e=document.getElementsByClassName("v-data-table__wrapper")[0];e&&(e.scrollTop=e.scrollHeight)}),1)},debounce:a()((function(e){this.search=e}),500)}},c={mixins:[r],data:function(){return{edit_dialog:!1,add_dialog:!1,delete_dialog:!1,permissionDialog:!1,bulk_delete_dialog:!1,loading:!1,items:[],items_response:null,edit_item:{id:null,fields:null},delete_item_id:null,show_delete_selected:!1,selected_ids:[],selected:[],rows_per_page:null,page:1,sort:{sortBy:null,descending:!1},search:"",pagination:{current:1,total:0},noMoreData:!1,componentKey:1,view:"list",btnloading:!1}},watch:{selected_ids:function(e){e.length>0?this.show_delete_selected=!0:this.show_delete_selected=!1},api_query:function(e,t){var i=Number(this.extract_per_page(e)),n=Number(this.extract_per_page(t))||null;this.items_response&&this.rows_per_page===this.items.length&&i!==n||(this.$router.replace({name:this.table_config.route_name,query:{page:this.page,per_page:this.rows_per_page,search:this.search,sort:this.query_for_sorting}}),this.loading=!0,this.refresh_table(e))}}}},e75c:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"message__body team-messages"},[i("div",{ref:"messages-container",staticClass:"messages"},[!1!==e.noMoreData||e.loading?e._e():i("v-row",{staticClass:"pa-3",attrs:{"no-gutters":""}},[i("v-col",{attrs:{md:"12",xs:"12"}},[i("v-spacer"),i("v-btn",{staticClass:"view__more_btn overline",attrs:{text:"",block:""},on:{click:e.load_previous}},[e._v("Load Previous Messages")]),i("v-spacer")],1)],1),e.loading?i("v-progress-linear",{attrs:{indeterminate:!0}}):e._e(),e.items.length?i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{staticClass:"px-3 py-2",staticStyle:{"min-height":"350px"},attrs:{md:"12"}},e._l(e.messages(e.items),(function(e){return i("Message",{key:e.id,attrs:{message:e}})})),1)],1):i("div",{staticClass:"no-messages"},[i("Empty",{staticClass:"ma-3",attrs:{icon:"mdi-cellphone-message-off",headline:"No messages yet"}})],1)],1),i("div",{staticClass:"write px-3"},[i("ChatField",{staticClass:"mt-2",attrs:{mentionables:e.mentionables},on:{typing:function(e){},"send-message":e.sendMessage}})],1)])},a=[],s=(i("c5f6"),i("1e4c")),o=i("579d"),r=i("e06e"),c=i("0644"),l=i.n(c),d=i("6bdf"),u=i("6385"),f={name:"TeamMessages",mixins:[o["a"],r["a"]],props:{id:[Number,String]},components:{ChatField:d["a"],Message:u["a"]},data:function(){return{loading:!1,message:null,can_message:!1,activeChat:null}},computed:{loggedUser:function(){return this.$store.getters.user},mentionables:function(){return this.activeChat?this.activeChat.members:[]},type:function(){return this.$route.params.type||"project"},paths:function(){return[{text:"Dashboard",disabled:!1,route:{name:"default-content"}},{text:this.type,disabled:!1,route:{path:"/dashboard/".concat(this.type,"/preview/").concat(this.id)}},{text:"Team Message",disabled:!0,route:null}]}},mounted:function(){this.$event.$emit("path-change",this.paths),this.$pusher.authenticate(),this.subscribePusher()},beforeDestroy:function(){this.$pusher.unsubscribe("private-project.team-message.".concat(this.id))},created:function(){var e=this;this.loading=!0,this.fill_table_via_url("api/projects/".concat(this.id,"/messages?type=team")),setTimeout((function(){e.scrollToBottomDiv()}),1),this.getConvoDetails(this.id)},methods:{getConvoDetails:function(e){var t=this;s["a"](e).then((function(e){var i=e.data;t.activeChat=i})).finally((function(){t.loading=!1}))},scrollToBottomDiv:function(){var e=this;setTimeout((function(){var t=e.$refs["messages-container"];t&&(t.scrollTop=t.scrollHeight)}),1)},load_previous:function(){this.load_more_via_url("api/projects/".concat(this.id,"/messages?type=team"))},add_new_message:function(e){this.items.some((function(t){return t.id===e.id}))||this.items.unshift(e)},user_can_message:function(e){this.can_message=e,e?console.log("Client chat connected"):this.$event.$emit("open_snackbar","Team chat unavailable.","error")},subscribePusher:function(){var e=this,t=this.$pusher.subscribe("private-project.team-message.".concat(this.id));t.bind("ProjectTeamMessage",(function(t){"team"===t.type&&e.add_new_message(t.message)})),t.bind("pusher:subscription_succeeded",(function(){return e.user_can_message(!0)})),t.bind("pusher:subscription_error",(function(t){return e.user_can_message(!1)}))},sendMessage:function(e){var t=this,i=new FormData;i.append("message",e.message),i.append("type","team"),i.append("from_id",this.loggedUser.id),e.files.length>0&&i.append("file",e.files[0]),s["b"](this.id,i).then((function(e){var i=e.data;t.add_new_message(i)})).finally((function(){t.scrollToBottomDiv(),t.$event.$emit("btnsending_off",!1)}))},messages:function(e){return l()(e).reverse()}}},h=f,_=(i("f98a"),i("2877")),g=Object(_["a"])(h,n,a,!1,null,"2a2b06ab",null);t["default"]=g.exports},f98a:function(e,t,i){"use strict";var n=i("1b0d"),a=i.n(n);a.a}}]);
//# sourceMappingURL=chunk-2224bcef.2f04a0c4.js.map