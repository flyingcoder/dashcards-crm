(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bd21b06"],{"0edc5":function(t,e,i){},"13ea":function(t,e,i){var n=i("03dd"),a=i("42a2"),s=i("d370"),o=i("6747"),r=i("30c9"),l=i("0d24"),c=i("eac5"),d=i("73ac"),u="[object Map]",f="[object Set]",_=Object.prototype,v=_.hasOwnProperty;function p(t){if(null==t)return!0;if(r(t)&&(o(t)||"string"==typeof t||"function"==typeof t.splice||l(t)||d(t)||s(t)))return!t.length;var e=a(t);if(e==u||e==f)return!t.size;if(c(t))return!n(t).length;for(var i in t)if(v.call(t,i))return!1;return!0}t.exports=p},"259d":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"breadcrumb-wrapper"},[i("v-breadcrumbs",{attrs:{items:t.paths},scopedSlots:t._u([{key:"item",fn:function(e){var n=e.item;return[i("v-breadcrumbs-item",{staticClass:"page__title",attrs:{disabled:n.disabled}},[i("span",{on:{click:function(e){return t.navigate_from_breadcrumb(n)}}},[t._v(" "+t._s(n.text)+" ")])])]}}])},[i("v-icon",{attrs:{slot:"divider"},slot:"divider"},[t._v("chevron_right")])],1),t._t("extra")],2)},a=[],s={name:"Breadcrumb",props:{paths:{type:Array,default:function(){return[]}}},methods:{navigate_from_breadcrumb:function(t){if(t.hasOwnProperty("path"))t.path&&this.$router.push({path:t.path});else{var e=t.router_name;e&&this.$router.push({name:e})}}}},o=s,r=(i("5e17"),i("79a2"),i("2877")),l=Object(r["a"])(o,n,a,!1,null,"3cda09ee",null);e["a"]=l.exports},2693:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"users-table"},[i("div",{staticClass:"users-table-wrapper"},[i("v-card",{staticClass:"users-table-inner",attrs:{flat:""}},[i("v-toolbar",{staticClass:"table-header",attrs:{flat:""}},[i("v-toolbar-title",{staticClass:"table-title"},[t._v("Users and Roles")]),i("v-spacer"),i("v-btn",{staticClass:"table-btn",attrs:{fab:"",small:""}},[i("v-icon",[t._v("mdi-settings")])],1)],1),t.loading?i("v-progress-linear",{attrs:{height:"5",indeterminate:""}}):t._e(),i("v-row",[i("v-col",{attrs:{md:"3"}},[i("v-list",{staticClass:"users-list",attrs:{dense:""}},[i("v-select",{staticClass:"px-2",attrs:{value:t.filter,solo:"",dense:"",flat:"","item-text":"name","item-value":"slug",outlined:"",items:t.roles,label:"Filter Roles"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),i("v-divider",{staticClass:"pa-0 ma-0"}),t._l(t.filteredUsers,(function(e,n){return[i("v-list-item",{key:e.id,on:{click:function(i){return t.setActiveUser(e)}}},[i("v-list-item-avatar",[i("v-img",{attrs:{src:e.image_url}})],1),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(e.fullname))]),i("v-list-item-subtitle",{domProps:{innerHTML:t._s(e.job_title)}})],1),e.deleted_at?i("v-list-item-icon",[i("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-icon",t._g({attrs:{small:"",right:""}},n),[t._v("mdi-account-lock")])]}}],null,!0)},[i("span",[t._v("Account Deleted")])])],1):t._e()],1)]}))],2)],1),i("v-col",{attrs:{md:"9"}},[t.activeUser?i("v-card",{staticClass:"user-preview",attrs:{flat:""}},[i("v-card-text",[i("v-row",{staticClass:"mx-auto",attrs:{"no-gutters":""}},[i("v-spacer"),i("v-avatar",{staticClass:"mb-3",attrs:{size:"100"}},[i("v-img",{attrs:{src:t.activeUser.image_url}})],1),i("v-spacer"),i("v-col",{attrs:{cols:"12"}}),i("v-col",{staticClass:"info-label",attrs:{sm:"4",cols:"12"}},[t._v("Name :")]),i("v-col",{staticClass:"info-item",attrs:{sm:"8",cols:"12"}},[t._v(t._s(t.activeUser.fullname))]),i("v-col",{staticClass:"info-label",attrs:{sm:"4",cols:"12"}},[t._v("Job Title :")]),i("v-col",{staticClass:"info-item",attrs:{sm:"8",cols:"12"}},[t._v(t._s(t.activeUser.job_title))]),i("v-col",{staticClass:"info-label",attrs:{sm:"4",cols:"12"}},[t._v("Email :")]),i("v-col",{staticClass:"info-item",attrs:{sm:"8",cols:"12"}},[t._v(t._s(t.activeUser.email))]),i("v-col",{staticClass:"info-label",attrs:{sm:"4",cols:"12"}},[t._v("Contact Number :")]),i("v-col",{staticClass:"info-item",attrs:{sm:"8",cols:"12"}},[t._v(t._s(t.activeUser.telephone?t.activeUser.telephone.formatInternational:"none"))]),i("v-col",{staticClass:"info-label",attrs:{sm:"4",cols:"12"}},[t._v("Is company owner :")]),i("v-col",{staticClass:"info-item",attrs:{sm:"8",cols:"12"}},[t._v(t._s(t.activeUser.is_company_owner?"Yes":"No"))]),i("v-col",{staticClass:"info-label",attrs:{sm:"4",cols:"12"}},[t._v("Is account disabled :")]),i("v-col",{staticClass:"info-item",staticStyle:{display:"flex","justify-content":"space-between"},attrs:{sm:"8",cols:"12"}},[i("span",[t._v(t._s(t.activeUser.deleted_at?"Yes":"No"))]),t.can_update_user_roles?i("v-btn",{staticClass:"disable-acc",attrs:{right:"",loading:t.restoring,text:""},on:{click:function(e){return t.controlAccount()}}},[i("v-icon",{attrs:{left:"",small:""}},[t._v(t._s(t.activeUser.deleted_at?"mdi-account-convert":"mdi-account-lock"))]),t._v(" "+t._s(t.activeUser.deleted_at?"Restore Account?":"Disable Account?")+" ")],1):t._e()],1),i("v-col",{staticClass:"info-label",attrs:{sm:"4",cols:"12"}},[t._v("Roles :")]),i("v-col",{attrs:{sm:"8",cols:"12"}},[t.can_update_user_roles?t._e():i("v-alert",{staticClass:"ma-0",attrs:{dense:"",outlined:"",type:"error"}},[t._v(" You dont have permission to update this user roles! ")]),i("v-autocomplete",{staticClass:"my-2",attrs:{disabled:!t.can_update_user_roles,"append-icon":"add",flat:"","item-text":"name",items:t.selectRoles,outlined:"","return-object":"",chips:"","small-chips":"",multiple:"",solo:""},scopedSlots:t._u([{key:"append-outer",fn:function(){return[i("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-btn",t._g({staticClass:"save-btn",attrs:{loading:t.btnloading,icon:"",large:""},on:{click:t.updateRoles}},n),[i("v-icon",[t._v("save")])],1)]}}],null,!1,1847081193)},[i("span",[t._v("Update Roles")])])]},proxy:!0}],null,!1,1044473544),model:{value:t.tobeAddedRoles,callback:function(e){t.tobeAddedRoles=e},expression:"tobeAddedRoles"}})],1),i("v-col",{staticClass:"info-label mt-2",attrs:{sm:"4",cols:"12"}},[t._v("Permissions")]),t.activeUser.deleted_at?i("v-col",{staticClass:"mt-2",attrs:{sm:"8"}},[i("v-alert",[t._v("No permission granted for disabled accounts.")])],1):i("v-col",{staticClass:"info-item mt-2",attrs:{sm:"8",cols:"12"}},[i("v-divider"),i("v-simple-table",{attrs:{"fixed-header":""},scopedSlots:t._u([{key:"default",fn:function(){return[i("thead",[i("tr",[i("th",[t._v("Name")]),i("th",[t._v("Create")]),i("th",[t._v("Delete")]),i("th",[t._v("Update")]),i("th",[t._v("View")])])]),i("tbody",t._l(t.permissions,(function(e,n){return i("tr",[i("td",[t._v(t._s(n))]),i("td",[e.create?i("v-icon",{attrs:{left:"",color:"success"}},[t._v("mdi-check-circle")]):i("v-icon",{attrs:{left:"",color:"red"}},[t._v("mdi-close-circle")])],1),i("td",[e.delete?i("v-icon",{attrs:{left:"",color:"success"}},[t._v("mdi-check-circle")]):i("v-icon",{attrs:{left:"",color:"red"}},[t._v("mdi-close-circle")])],1),i("td",[e.update?i("v-icon",{attrs:{left:"",color:"success"}},[t._v("mdi-check-circle")]):i("v-icon",{attrs:{left:"",color:"red"}},[t._v("mdi-close-circle")])],1),i("td",[e.view?i("v-icon",{attrs:{left:"",color:"success"}},[t._v("mdi-check-circle")]):i("v-icon",{attrs:{left:"",color:"red"}},[t._v("mdi-close-circle")])],1)])})),0)]},proxy:!0}],null,!1,346573560)}),i("v-divider")],1)],1)],1)],1):t._e()],1)],1)],1)],1)])},a=[],s=(i("20d6"),i("2909")),o=(i("6762"),i("2fdb"),i("ac6a"),i("8615"),i("e06e")),r=(i("13ea"),i("1be9")),l=i("259d"),c=i("5b70"),d={name:"UsersTable",mixins:[o["a"]],components:{Breadcrumb:l["a"],DeleteDialog:c["a"]},data:function(){return{roles:[{name:"All",slug:"all"}],permissions:null,activeUser:null,filter:"all",currentRoles:[],tobeAddedRoles:[],search:"",restoring:!1}},mounted:function(){var t=this;this.getUsers((function(){t.setActiveUser(t.filteredUsers[0])})),this.getGroups()},computed:{filteredUsers:function(){var t=this;return this.items.filter((function(e){if("all"===t.filter)return!0;var i=Object.values(e.user_roles);return i.includes(t.filter)}))},currentUserRoles:function(){var t=Object.values(this.activeUser.user_roles);return this.roles.filter((function(e){return t.includes(e.slug)||e.slug.includes(t)}))},selectRoles:function(){return this.roles.filter((function(t){return"all"!==t.slug}))},user:function(){return this.$store.getters.user},can_update_user_roles:function(){return!!this.user.is_company_owner||!this.activeUser.is_company_owner&&(!this.user.is_client&&(!(!this.user.is_admin&&!this.user.is_manager)&&((!this.user.is_admin||!this.activeUser.is_admin)&&((!this.user.is_manager||!this.activeUser.is_manager)&&(!(!this.activeUser.is_manager||!this.user.is_admin)||(!this.activeUser.is_admin||!this.user.is_manager))))))}},methods:{filterSearch:function(){return this.filteredUsers=[]},getUsers:function(t){this.fill_table_via_url("api/company/teams?basics=true&per_page=50&withTrashed=true",!0,t)},getGroups:function(){var t=this;r["a"].get("api/groups?all=true").then((function(e){var i,n=e.data;(i=t.roles).push.apply(i,Object(s["a"])(n))}))},getUserPermissions:function(){var t=this;r["a"].get("api/permission/user/".concat(this.activeUser.id)).then((function(e){var i=e.data;t.permissions=i}))},setActiveUser:function(t){this.activeUser=t,this.tobeAddedRoles=t.roles,t.deleted_at||this.getUserPermissions()},updateRoles:function(){var t=this;if(0!==this.tobeAddedRoles.length){this.btnloading=!0;var e={user:this.activeUser.id,roles:this.tobeAddedRoles.map((function(t){return t.id}))};r["a"].post("api/groups/user/update-roles",e).then((function(e){var i=e.data;t.activeUser=i;var n=t.items.findIndex((function(t){return t.id===i.id}));~n&&(t.items[n]=i),t.$event.$emit("open_snackbar","User roles updated!")})).finally((function(){t.btnloading=!1}))}else this.$event.$emit("open_snackbar","User role cannot be empty!","error")},controlAccount:function(){var t=this;this.restoring=!0;var e={action:this.activeUser.deleted_at?"restore":"delete",user:this.activeUser.id};r["a"].post("api/groups/user/restore-delete",e).then((function(i){var n=i.data;t.activeUser=n;var a=t.items.findIndex((function(t){return t.id===n.id}));~a&&(t.items[a]=n),"restore"===e.action&&t.getUserPermissions(),t.$event.$emit("open_snackbar",t.activeUser.deleted_at?"User successfully restored":"User successfully disabled")})).finally((function(){t.restoring=!1}))}}},u=d,f=(i("6faa"),i("2877")),_=Object(f["a"])(u,n,a,!1,null,"0a55a675",null);e["default"]=_.exports},"2f21":function(t,e,i){"use strict";var n=i("79e5");t.exports=function(t,e){return!!t&&n((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},"386d":function(t,e,i){"use strict";var n=i("cb7c"),a=i("83a1"),s=i("5f1b");i("214f")("search",1,(function(t,e,i,o){return[function(i){var n=t(this),a=void 0==i?void 0:i[e];return void 0!==a?a.call(i,n):new RegExp(i)[e](String(n))},function(t){var e=o(i,t,this);if(e.done)return e.value;var r=n(t),l=String(this),c=r.lastIndex;a(c,0)||(r.lastIndex=0);var d=s(r,l);return a(r.lastIndex,c)||(r.lastIndex=c),null===d?-1:d.index}]}))},"3f12":function(t,e,i){},"408c":function(t,e,i){var n=i("2b3e"),a=function(){return n.Date.now()};t.exports=a},"55dd":function(t,e,i){"use strict";var n=i("5ca1"),a=i("d8e8"),s=i("4bf8"),o=i("79e5"),r=[].sort,l=[1,2,3];n(n.P+n.F*(o((function(){l.sort(void 0)}))||!o((function(){l.sort(null)}))||!i("2f21")(r)),"Array",{sort:function(t){return void 0===t?r.call(s(this)):r.call(s(this),a(t))}})},"57e5":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-layout",{attrs:{"justify-center":""}},[i("v-dialog",{attrs:{persistent:"","max-width":t.maxWidth},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.loading?i("v-progress-linear",{attrs:{slot:"progress",color:"blue",indeterminate:""},slot:"progress"}):i("v-card",{staticClass:"custom__dialog"},[i("div",{staticClass:"dialog__header"},[t._t("entire-header",[t._t("title",[i("h3",{staticClass:"dialog__title"},[t._v(t._s(t.title))])]),t._t("extra-buttons"),t._t("cancel-icon",[i("v-btn",{staticClass:"close__dialog",attrs:{fab:"",small:"",depressed:""},on:{click:t.close_dialog}},[i("v-icon",[t._v("close")])],1)])]),t._t("below-title")],2),i("v-card-text",{staticClass:"dialog__body"},[t._t("content",[i("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t.hasFooter?i("v-card-actions",{staticClass:"dialog__actions"},[t._t("entire-actions",[t._t("extras"),t._t("button1",[i("v-btn",{attrs:{disabled:t.btnloading},on:{click:t.button1clicked}},[t._v(t._s(t.button1Text))])]),t._t("button2",[i("v-btn",{attrs:{loading:t.btnloading,disabled:t.mainBtnDisabled},on:{click:t.button2clicked}},[t._v(t._s(t.button2Text))])])])],2):t._e()],1)],1)],1)},a=[],s=(i("c5f6"),{props:{title:{type:String,default:""},content:{type:String,default:""},button1Text:{type:String,default:"Cancel"},button2Text:{type:String,default:"Delete"},open:Boolean,value:Boolean,mainBtnDisabled:{type:Boolean,default:!1},hasFooter:{type:Boolean,default:!0},maxWidth:{type:[Number,String],default:"600px"}},data:function(){return{dialog:!1,loading:!1,btnloading:!1}},mounted:function(){var t=this;this.$event.$on("btnloading_off",(function(e){t.btnloading=!1}))},watch:{value:{handler:function(t){this.dialog=t},immediate:!0},open:function(t){this.dialog=t,this.btnloading=!1},dialog:function(t){this.$emit("update:open",t),this.$emit("input",t)}},methods:{button1clicked:function(){this.$emit("button1"),this.close_dialog()},button2clicked:function(){this.btnloading=!0,this.$emit("button2")},open_dialog:function(){this.dialog=!0},close_dialog:function(){this.dialog=!1,this.btnloading=!1,this.$emit("click:close",!0)},clear_and_close:function(){Object.assign(this.$data,this.$options.data.apply(this)),this.close_dialog()},activate_loading:function(){this.loading=!0},disable_loading:function(){this.loading=!1}}}),o=s,r=(i("ced6"),i("5a30"),i("2877")),l=Object(r["a"])(o,n,a,!1,null,"d7f4ccc6",null);e["a"]=l.exports},"5a30":function(t,e,i){"use strict";var n=i("d0eb"),a=i.n(n);a.a},"5b70":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("custom-dialog",{attrs:{title:t.title,content:t.textContent,"button1-text":t.cancelButtonText,"button2-text":t.deleteButtonText,open:t.open},on:{"update:open":function(e){t.open=e},button1:t.cancel_clicked,button2:t.delete_clicked},scopedSlots:t._u([{key:"content",fn:function(){return[i("v-alert",{staticClass:"my-4",attrs:{outlined:"",type:"warning",prominent:""}},[i("v-row",{attrs:{align:"center"}},[i("v-col",{staticClass:"grow",domProps:{innerHTML:t._s(t.textContent)}})],1)],1)]},proxy:!0}])})],1)},a=[],s=i("57e5"),o={components:{CustomDialog:s["a"]},props:{title:{type:String,default:"Default Modal Title"},textContent:{type:String,default:"Default Modal Text Content"},cancelButtonText:{type:String,default:"Cancel"},deleteButtonText:{type:String,default:"Yes, Delete"},openDialog:Boolean},data:function(){return{open:!1}},watch:{openDialog:function(t){this.open=t},open:function(t){this.$emit("update:openDialog",t)}},methods:{cancel_clicked:function(){this.open=!1},delete_clicked:function(){this.$emit("delete")},showDialog:function(){this.open=!0},closeDialog:function(){this.open=!1}}},r=o,l=i("2877"),c=Object(l["a"])(r,n,a,!1,null,null,null);e["a"]=c.exports},"5e17":function(t,e,i){"use strict";var n=i("8c6e"),a=i.n(n);a.a},"6faa":function(t,e,i){"use strict";var n=i("3f12"),a=i.n(n);a.a},"79a2":function(t,e,i){"use strict";var n=i("0edc5"),a=i.n(n);a.a},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"8c6e":function(t,e,i){},b047c:function(t,e,i){var n=i("1a8c"),a=i("408c"),s=i("b4b0"),o="Expected a function",r=Math.max,l=Math.min;function c(t,e,i){var c,d,u,f,_,v,p=0,m=!1,h=!1,g=!0;if("function"!=typeof t)throw new TypeError(o);function b(e){var i=c,n=d;return c=d=void 0,p=e,f=t.apply(n,i),f}function y(t){return p=t,_=setTimeout(w,e),m?b(t):f}function x(t){var i=t-v,n=t-p,a=e-i;return h?l(a,u-n):a}function $(t){var i=t-v,n=t-p;return void 0===v||i>=e||i<0||h&&n>=u}function w(){var t=a();if($(t))return k(t);_=setTimeout(w,x(t))}function k(t){return _=void 0,g&&c?b(t):(c=d=void 0,f)}function C(){void 0!==_&&clearTimeout(_),p=0,c=v=d=_=void 0}function U(){return void 0===_?f:k(a())}function T(){var t=a(),i=$(t);if(c=arguments,d=this,v=t,i){if(void 0===_)return y(v);if(h)return clearTimeout(_),_=setTimeout(w,e),b(v)}return void 0===_&&(_=setTimeout(w,e)),f}return e=s(e)||0,n(i)&&(m=!!i.leading,h="maxWait"in i,u=h?r(s(i.maxWait)||0,e):u,g="trailing"in i?!!i.trailing:g),T.cancel=C,T.flush=U,T}t.exports=c},b4b0:function(t,e,i){var n=i("1a8c"),a=i("ffd6"),s=NaN,o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,d=parseInt;function u(t){if("number"==typeof t)return t;if(a(t))return s;if(n(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=n(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=l.test(t);return i||c.test(t)?d(t.slice(2),i?2:8):r.test(t)?s:+t}t.exports=u},b8fa:function(t,e,i){},ced6:function(t,e,i){"use strict";var n=i("b8fa"),a=i.n(n);a.a},d0eb:function(t,e,i){},e06e:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));i("386d"),i("a481"),i("c5f6"),i("28a5"),i("55dd"),i("20d6"),i("6762"),i("ac6a");var n=i("b047c"),a=i.n(n),s=i("d4e9"),o=i("1be9"),r={methods:{resetPagination:function(){this.pagination.current=1,this.pagination.total=0,this.noMoreData=!1},clear_selected:function(){this.selected=[],this.$event.$emit("clear_selected",[]),this.$event.$emit("btnloading_off",!1)},add_item:function(t,e){var i=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;s["a"][t](e,n).then((function(t){var e=t.data;Array.isArray(e)?e.reverse().forEach((function(t){return i.items.push(t)})):i.items.push(e),i.clear_selected(),i.$refs.add_dialog.clear_and_close(),i.$event.$emit("open_snackbar",i.table_config.add_message)})).finally((function(){return i.$event.$emit("btnloading_off",!1)}))},extract_per_page:function(t){var e=t.search("per_page");return t.substring(e+9,e+10)},calc_per_page_items:function(t,e){var i=[5,10,15,20,25];return i.includes(t)||i.push(t),!i.includes(e)&&e<=25&&i.push(e),i},update_item:function(t,e){var i=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;s["a"][t](this.edit_item.id,e,n).then((function(t){var e=i.items.findIndex((function(e){return e.id===t.data.id}));~e&&i.items.splice(e,1,t.data),i.edit_item={id:null,fields:null},i.edit_dialog=!1,i.clear_selected(),i.$event.$emit("open_snackbar",i.table_config.update_message)})).finally((function(){return i.$event.$emit("btnloading_off",!1)}))},delete_item:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;s["a"][t](this.delete_item_id,i).then((function(){var t=e.items.findIndex((function(t){return t.id===e.delete_item_id}));~t&&e.items.splice(t,1),e.delete_item_id=null,e.delete_dialog=!1,e.clear_selected(),e.$event.$emit("open_snackbar",e.table_config.delete_message)})).finally((function(){return e.$event.$emit("btnloading_off",!1)}))},bulk_delete:function(t){var e=this,i={ids:this.selected.map((function(t){return t.id}))};s["a"][t]({data:i}).then((function(t){var i=t.data;e.selected.forEach((function(t){var i=e.items.findIndex((function(e){return e.id===t.id}));~i&&e.items.splice(i,1)})),e.bulk_delete_dialog=!1,e.clear_selected(),e.$event.$emit("open_snackbar",i.message)})).finally((function(){e.$event.$emit("btnloading_off",!1)}))},bulk_delete_via_url:function(t){var e=this,i={ids:this.selected.map((function(t){return t.id}))};o["a"].delete(t,{data:i}).then((function(t){var i=t.data;e.selected.forEach((function(t){var i=e.items.findIndex((function(e){return e.id===t.id}));~i&&e.items.splice(i,1)})),e.bulk_delete_dialog=!1,e.clear_selected(),e.$event.$emit("open_snackbar",i.message)})).finally((function(){e.$event.$emit("btnloading_off",!1)}))},open_edit_dialog:function(t){this.edit_dialog=!0,this.$set(this.edit_item,"id",t.id),this.$set(this.edit_item,"fields",t)},open_delete_dialog:function(t){this.delete_dialog=!0,this.delete_item_id=t.id},open_bulk_delete_dialog:function(t){this.bulk_delete_dialog=!0,this.selected=t},fill_table:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.loading=!0,s["a"][t](n).then((function(t){e.items_response=t.data,i?(e.items=t.data.data,e.pagination.current=t.data.current_page,e.pagination.total=t.data.last_page,e.hasMoreData()):e.items=t.data})).finally((function(){e.clear_selected(),e.loading=!1,e.$event.$emit("btnloading_off",!1)}))},fill_table_via_url:function(t){var e=this,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2?arguments[2]:void 0;this.loading=!0;var a={page:this.pagination.current};o["a"].get(t,{params:a}).then((function(t){e.items_response=t.data,i?(e.items=t.data.data,e.pagination.current=t.data.current_page,e.pagination.total=t.data.last_page,e.hasMoreData()):e.items=t.data,"function"===typeof n&&n(t)})).finally((function(){e.clear_selected(),e.loading=!1,e.$event.$emit("btnloading_off",!1)}))},load_more_on_table:function(t){var e=this;this.loading=!0;var i={page:this.pagination.current+1};s["a"][t]({params:i}).then((function(t){var i=t.data;e.items_response=i.data,i.data.forEach((function(t){e.items.push(t)})),e.pagination.current=i.current_page,e.pagination.total=i.last_page,e.hasMoreData()})).finally((function(){e.clear_selected(),e.loading=!1,e.scrollToBottom(),e.$event.$emit("btnloading_off",!1)}))},load_more_via_url:function(t){var e=this;this.loading=!0;var i={page:this.pagination.current+1};o["a"].get(t,{params:i}).then((function(t){var i=t.data;e.items_response=i.data,i.data.forEach((function(t){e.items.push(t)})),e.pagination.current=i.current_page,e.pagination.total=i.last_page,e.hasMoreData()})).finally((function(){e.clear_selected(),e.loading=!1,e.scrollToBottom(),e.$event.$emit("btnloading_off",!1)}))},fill_table_with_data:function(t){this.items=t},add_table_rows:function(t,e){this.items=t,this.items_response=e},changeSort:function(t){this.sort.sortBy===t?this.sort.descending=!this.sort.descending:(this.sort.sortBy=t,this.sort.descending=!1)},refresh_table:function(t){var e=this;s["a"][this.table_config.refresh_table_api_name](t).then((function(t){e.$event.$emit("open_snackbar",e.table_config.refresh_table_message),e.loading=!1,e.clear_selected(),e.items_response=t.data,e.items=t.data.data})).finally((function(){return e.$event.$emit("btnloading_off",!1)}))},update_table_actions:function(t){if(t.page&&(this.page=Number(t.page)),t.per_page&&(this.rows_per_page=Number(t.per_page)),t.search&&(this.search=t.search),t.sort){var e=t.sort.split("|");this.sort.sortBy=e[0],"asc"===e[1]?this.sort.descending=!1:"desc"===e[1]&&(this.sort.descending=!0)}},hasMoreData:function(){this.componentKey+=1,this.pagination.current>=this.pagination.total&&(this.noMoreData=!0)},toggleAll:function(){this.selected.length?this.clear_selected():this.selected=this.items.slice()},setPreferredView:function(t){window.localStorage.setItem("bzk_prefer_view",t),this.view=t},getPreferredView:function(){return window.localStorage.getItem("bzk_prefer_view")||"list"},scrollToBottom:function(){setTimeout((function(){var t=document.getElementsByClassName("v-data-table__wrapper")[0];t&&(t.scrollTop=t.scrollHeight)}),1)},debounce:a()((function(t){this.search=t}),500)}},l={mixins:[r],data:function(){return{edit_dialog:!1,add_dialog:!1,delete_dialog:!1,permissionDialog:!1,bulk_delete_dialog:!1,loading:!1,items:[],items_response:null,edit_item:{id:null,fields:null},delete_item_id:null,show_delete_selected:!1,selected_ids:[],selected:[],rows_per_page:null,page:1,sort:{sortBy:null,descending:!1},search:"",pagination:{current:1,total:0},noMoreData:!1,componentKey:1,view:"list",btnloading:!1}},watch:{selected_ids:function(t){t.length>0?this.show_delete_selected=!0:this.show_delete_selected=!1},api_query:function(t,e){var i=Number(this.extract_per_page(t)),n=Number(this.extract_per_page(e))||null;this.items_response&&this.rows_per_page===this.items.length&&i!==n||(this.$router.replace({name:this.table_config.route_name,query:{page:this.page,per_page:this.rows_per_page,search:this.search,sort:this.query_for_sorting}}),this.loading=!0,this.refresh_table(t))}}}}}]);
//# sourceMappingURL=chunk-3bd21b06.55249891.js.map