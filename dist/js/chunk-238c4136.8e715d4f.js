(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-238c4136"],{"01da":function(e,t,i){"use strict";var a=i("3a98"),s=i.n(a);s.a},"37f1":function(e,t,i){"use strict";var a=i("ea26"),s=i.n(a);s.a},"3a98":function(e,t,i){},"588f":function(e,t,i){},"6eb9":function(e,t,i){},a801:function(e,t,i){"use strict";var a=i("6eb9"),s=i.n(a);s.a},bc29:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"members-dropdown"},[i("v-autocomplete",e._b({attrs:{value:e.members,items:e.items,"search-input":e.search,loading:e.isLoading,"item-value":"id","prepend-icon":"search","no-filter":"",chips:"",multiple:"",clearable:"","hide-details":"",color:"#657186",label:"Assign member(s)",box:"","append-outer-icon":e.showOuterIcon?"add":""},on:{input:e.members_selected,"update:searchInput":function(t){e.search=t},"update:search-input":function(t){e.search=t},"click:append-outer":e.open_add_new_member},scopedSlots:e._u([{key:"selection",fn:function(t){return[i("v-chip",{staticClass:"chip--select-multi",attrs:{"input-value":t.selected,outlined:"",close:""},on:{input:function(i){return e.remove_chip(t.index)}}},[i("img",{attrs:{src:t.item.image_url,width:"30",height:"30"}}),e._v(" "),i("span",{staticClass:"chip-member-name"},[e._v(e._s(t.item.name))])])]}},{key:"item",fn:function(t){var a=t.item;return[i("div",{staticClass:"member"},[i("div",{staticClass:"member-avatar"},[i("img",{attrs:{src:a.image_url}})]),i("div",{staticClass:"member-info"},[i("div",{staticClass:"full-name"},[e._v(" "+e._s(a.first_name)+" ")]),i("div",{staticClass:"job-title"},[e._v(" "+e._s(a.job_title)+" ")])]),e.is_item_active(a.id)?e._e():i("div",{staticClass:"checked-icon"},[i("v-icon",{attrs:{color:"gray"}},[e._v("check_circle_outline")])],1),e.is_item_active(a.id)?i("div",{staticClass:"checked-icon"},[i("v-icon",{attrs:{color:"green"}},[e._v("check_circle")])],1):e._e()])]}}])},"v-autocomplete",e.$attrs,!1))],1)},s=[],n=(i("6762"),i("2fdb"),i("75fc")),o=i("0644"),r=i.n(o),l={name:"MembersDropdown",inheritAttrs:!1,props:{members:Array,memberItems:Array,isLoading:Boolean,showOuterIcon:{type:Boolean,default:!1}},data:function(){return{items:[],search:null}},watch:{search:function(e){this.$emit("search",e)},memberItems:function(e){this.items=Object(n["a"])(e)}},methods:{members_selected:function(e){this.$emit("update:members",e)},is_item_active:function(e){return this.members.includes(e)},remove_chip:function(e){var t=r()(this.members);t.splice(e,1),this.$emit("update:members",t)},open_add_new_member:function(){this.$event.$emit("open-new-member-dialog",!0)}}},c=l,d=(i("d668"),i("37f1"),i("2877")),m=Object(d["a"])(c,a,s,!1,null,"184dfa3e",null);t["a"]=m.exports},bd5b:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"members-tab"},[i("v-row",{staticClass:"mb-2",attrs:{"no-gutters":""}},[i("v-spacer"),i("v-btn",{staticClass:"mr-1",attrs:{fab:"",small:""},on:{click:function(t){e.add_dialog=!0}}},[i("v-icon",[e._v("add")])],1),i("v-btn",{staticClass:"mr-1",attrs:{fab:"",small:""},on:{click:function(t){return e.setPreferredView("list")}}},[i("v-icon",[e._v("list")])],1),i("v-btn",{staticClass:"mr-1",attrs:{fab:"",small:""},on:{click:function(t){return e.setPreferredView("grid")}}},[i("v-icon",[e._v("mdi-view-dashboard")])],1)],1),i("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],attrs:{indeterminate:!0}}),i("add-dialog",{ref:"add_dialog",attrs:{dialog:e.add_dialog,id:e.id,title:"Add Member(s)"},on:{"update:dialog":function(t){e.add_dialog=t},save:function(t){return e.add_item("add_members",t,e.dynamic_api)}}}),i("delete-dialog",{attrs:{"open-dialog":e.delete_dialog,title:"Remove Member",deleteButtonText:"Remove","text-content":"Are you sure you want to remove this member?"},on:{"update:openDialog":function(t){e.delete_dialog=t},"update:open-dialog":function(t){e.delete_dialog=t},delete:function(t){return e.delete_item("delete_member",e.dynamic_api)}}}),i("delete-dialog",{attrs:{"open-dialog":e.bulk_delete_dialog,title:"Remove members",deleteButtonText:"Remove Selected","text-content":"Are you sure you want to remove these members from project?"},on:{"update:openDialog":function(t){e.bulk_delete_dialog=t},"update:open-dialog":function(t){e.bulk_delete_dialog=t},delete:e.bulk_remove_members}}),"list"===e.view?i("VueTable",{key:e.componentKey,attrs:{items:e.items,headers:e.headers,showRowActions:!0,title:"Project Members",noMoreData:e.noMoreData},on:{"load-more":e.load_more_members,"delete-selected":function(t){return e.open_bulk_delete_dialog(t)}},scopedSlots:e._u([{key:"row-slot",fn:function(t){var a=t.item;return[i("td",{staticClass:"text-cap"},[i("v-avatar",{staticClass:"mr-1",attrs:{size:"36"}},[i("v-img",{attrs:{src:a.image_url,title:a.fullname}})],1),e._v(" "+e._s(a.fullname)+" ")],1),i("td",{staticClass:"email"},[e._v(e._s(a.email))]),i("td",[e._v(e._s(a.telephone||"none"))]),i("td",{staticClass:"text-cap"},[e._v(e._s(a.job_title))]),i("td",[e._v(e._s(a.tasks.length))]),i("Actions",{attrs:{item:a,hasEdit:!1,permissions:e.$_permissions.get("hq_members")},on:{delete:function(t){return e.open_delete_dialog(a)},view:function(t){return e.navigate_to_view_profile(a)}}})]}},{key:"empty-slot",fn:function(){return[i("v-btn",{attrs:{tile:"",text:"",outlined:""},on:{click:function(t){e.add_dialog=!0}}},[i("v-icon",{attrs:{left:""}},[e._v("add")]),e._v(" Add Member")],1)]},proxy:!0}],null,!1,2750302760)}):i("VueGrid",{key:e.componentKey,attrs:{items:e.items,permissions:e.$_permissions.get("hq_members"),noMoreData:e.noMoreData,hasFooter:!1,showProjectCount:!1},on:{"load-more":e.load_more_users,delete:e.open_delete_dialog,edit:e.open_edit_dialog}})],1)},s=[],n=(i("8615"),i("20d6"),i("ac6a"),i("c5f6"),i("e06e")),o=i("1be9"),r=i("5b70"),l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-layout",{attrs:{"justify-center":""}},[i("v-dialog",{attrs:{persistent:"",scrollable:"","max-width":"600px"},model:{value:e.open,callback:function(t){e.open=t},expression:"open"}},[i("v-card",{staticClass:"membertab-dialog"},[i("v-card-title",{staticClass:"dialog__header"},[i("span",{staticClass:"dialog__title"},[e._v(e._s(e.title))]),i("v-btn",{staticClass:"close__dialog",attrs:{small:"",fab:""},on:{click:e.cancel}},[i("v-icon",{attrs:{dark:""}},[e._v("close")])],1)],1),i("v-progress-linear",{attrs:{slot:"progress",color:"blue",indeterminate:""},slot:"progress"}),i("v-card-text",{staticClass:"dialog__body"},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("members-dropdown",{attrs:{members:e.members.selected,"member-items":e.members.items,"is-loading":e.members.loading},on:{"update:members":function(t){return e.$set(e.members,"selected",t)},search:e.filter_members}})],1)],1)],1),i("v-card-actions",{staticClass:"dialog__actions"},[i("v-btn",{on:{click:e.cancel}},[e._v("Cancel")]),i("v-btn",{attrs:{disable:e.disableSave},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1)},c=[],d=(i("6762"),i("2fdb"),function(e){return o["a"].get("api/projects/".concat(e,"/new-members"))}),m=i("bc29"),u=i("0644"),_=i.n(u),b={name:"AddDialog",components:{MembersDropdown:m["a"]},props:{dialog:Boolean,title:String,id:[Number,String]},data:function(){return{open:!1,name:"",members:{selected:[],items:[],allItems:[],loading:!1}}},computed:{disableSave:function(){return!this.members.selected.length}},watch:{dialog:function(e){e&&this.getProjectMembers(),this.open=e},open:function(e){this.$emit("update:dialog",e)}},methods:{getProjectMembers:function(){var e=this;this.members.loading=!0,d(this.id).then((function(t){var i=t.data;e.members.allItems=i,e.members.items=i})).finally((function(){return e.members.loading=!1}))},cancel:function(){this.open=!1},save:function(){this.disableSave||this.$emit("save",this.members.selected)},clear_and_close:function(){Object.assign(this.$data,this.$options.data.apply(this)),this.cancel()},filter_members:function(e){var t=_()(this.members.allItems);if(e){var i=t.filter((function(t){return t.first_name.toLowerCase().includes(e.toLowerCase())||t.last_name.toLowerCase().includes(e.toLowerCase())}));this.$set(this.members,"items",i)}else this.members.items=t}}},p=b,f=(i("a801"),i("2877")),v=Object(f["a"])(p,l,c,!1,null,"ee785b1a",null),h=v.exports,g=i("0ebe"),w=i("ee09"),y=i("36ee"),k={name:"MembersTab",mixins:[n["a"]],components:{VueTable:g["a"],AddDialog:h,DeleteDialog:r["a"],Actions:w["a"],VueGrid:y["a"]},inheritAttrs:!1,props:{id:[Number,String]},data:function(){return{headers:[{text:"Member",value:"member"},{text:"Email",value:"email"},{text:"Telephone",value:"telephone"},{text:"Position",value:"position"},{text:"Tasks",value:"tasks"},{text:"Action",value:"action",align:"center",width:"140px"}],sortList:[{title:"Sort by member"},{title:"Sort by email"},{title:"Sort by telephone"},{title:"Sort by position"},{title:"Sort by tasks"}],table_config:{route_name:"project_preview",add_message:"New Members(s) added successfully!",delete_message:"Members deleted successfully!",refresh_table_message:"Table refreshed",refresh_table_api_name:"paginate_tab_members_table"}}},computed:{dynamic_api:function(){return"api/projects/".concat(this.id,"/member")}},created:function(){this.view=this.getPreferredView(),this.load_users()},methods:{load_users:function(){this.fill_table_via_url(this.dynamic_api,!0)},load_more_members:function(){this.load_more_via_url(this.dynamic_api)},bulk_remove_members:function(){var e=this,t={ids:this.selected.map((function(e){return e.id}))};o["a"].delete("api/projects/".concat(this.id,"/member/bulk-delete"),{data:t}).then((function(t){var i=t.data;i.ids.forEach((function(t){var i=e.items.findIndex((function(e){return e.id===t.user_id}));~i&&e.items.splice(i,1)})),e.bulk_delete_dialog=!1,e.selected=[],e.$event.$emit("clear_selected"),e.$event.$emit("open_snackbar",i.message)})).finally((function(){e.$event.$emit("btnloading_off",!1)}))},can_be_deleted:function(e){return!("Administrator"===e.job_title||"Client"===e.job_title)},navigate_to_view_profile:function(e){var t=Object.values(e.user_roles);t[0].indexOf("client")>=0||t[0].indexOf("agent")>=0?this.$router.push("/dashboard/clients/profile/".concat(e.id)):this.$router.push("/dashboard/team/profile/".concat(e.id))}}},C=k,x=(i("01da"),Object(f["a"])(C,a,s,!1,null,"0fb50f0f",null));t["default"]=x.exports},d668:function(e,t,i){"use strict";var a=i("588f"),s=i.n(a);s.a},ea26:function(e,t,i){}}]);
//# sourceMappingURL=chunk-238c4136.8e715d4f.js.map