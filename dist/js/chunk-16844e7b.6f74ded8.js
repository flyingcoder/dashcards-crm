(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16844e7b"],{"0f80":function(e,t,a){},"13ea":function(e,t,a){var n=a("03dd"),o=a("42a2"),i=a("d370"),r=a("6747"),s=a("30c9"),l=a("0d24"),d=a("eac5"),u=a("73ac"),c="[object Map]",f="[object Set]",_=Object.prototype,p=_.hasOwnProperty;function m(e){if(null==e)return!0;if(s(e)&&(r(e)||"string"==typeof e||"function"==typeof e.splice||l(e)||u(e)||i(e)))return!e.length;var t=o(e);if(t==c||t==f)return!e.size;if(d(e))return!n(e).length;for(var a in e)if(p.call(e,a))return!1;return!0}e.exports=m},"15b0":function(e,t,a){"use strict";var n=a("dae0"),o=a.n(n);o.a},"259d":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"breadcrumb-wrapper"},[a("v-breadcrumbs",{attrs:{items:e.paths},scopedSlots:e._u([{key:"item",fn:function(t){var n=t.item;return[a("v-breadcrumbs-item",{staticClass:"page__title",attrs:{disabled:n.disabled}},[a("span",{on:{click:function(t){return e.navigate_from_breadcrumb(n)}}},[e._v(" "+e._s(n.text)+" ")])])]}}])},[a("v-icon",{attrs:{slot:"divider"},slot:"divider"},[e._v("chevron_right")])],1)],1)},o=[],i={name:"Breadcrumb",props:{paths:{type:Array,default:function(){return[]}}},methods:{navigate_from_breadcrumb:function(e){if(e.hasOwnProperty("path"))e.path&&this.$router.push({path:e.path});else{var t=e.router_name;t&&this.$router.push({name:t})}}}},r=i,s=(a("15b0"),a("edab"),a("2877")),l=Object(s["a"])(r,n,o,!1,null,"adf165fe",null);t["a"]=l.exports},"29d6":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{staticClass:"table-header",attrs:{wrap:""}},[a("breadcrumb",{attrs:{paths:e.paths}}),a("v-flex",[e.noButton?e._e():a("v-btn",{staticClass:"add__btn mr-2",attrs:{fab:"",small:""},on:{click:function(t){return e.$emit("click")}}},[a("v-icon",[e._v("add")])],1),e.noSortButton?e._e():a("v-btn",{staticClass:"add__btn mr-2",attrs:{fab:"",small:""},on:{click:function(t){return e.$emit("click-sort-by")}}},[a("v-icon",[e._v("sort")])],1),e.noListButton?e._e():a("v-btn",{staticClass:"add__btn mr-2",attrs:{fab:"",small:""},on:{click:function(t){return e.$emit("click-list-view")}}},[a("v-icon",[e._v("list")])],1),e.noGridButton?e._e():a("v-btn",{staticClass:"add__btn mr-2",attrs:{fab:"",small:""},on:{click:function(t){return e.$emit("click-grid-view")}}},[a("v-icon",[e._v("mdi-view-dashboard")])],1),e._t("form-btn")],2)],1)},o=[],i=a("259d"),r={name:"TableHeader",props:{paths:{type:Array,default:[]},noButton:{type:Boolean,default:!1},noListButton:{type:Boolean,default:!0},noGridButton:{type:Boolean,default:!0},noSortButton:{type:Boolean,default:!0}},data:function(){return{fab:!0}},components:{Breadcrumb:i["a"]}},s=r,l=(a("ff3c"),a("2877")),d=Object(l["a"])(s,n,o,!1,null,"0910c4a8",null);t["a"]=d.exports},"4c37":function(e,t,a){},dae0:function(e,t,a){},edab:function(e,t,a){"use strict";var n=a("f3a9"),o=a.n(n);o.a},f1d4:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"teams-page"},[a("table-header",{attrs:{paths:e.paths,noListButton:!1,noGridButton:!1},on:{click:function(t){e.add_dialog=!0},"click-list-view":function(t){return e.setPreferredView("list")},"click-grid-view":function(t){return e.setPreferredView("grid")}}}),a("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],attrs:{indeterminate:!0}}),a("teams-dialog",{ref:"add_dialog",attrs:{title:"Add New Member",dialog:e.add_dialog},on:{"update:dialog":function(t){e.add_dialog=t},save:function(t){return e.add_item("add_new_team",t)},"close-dialog":function(t){e.add_dialog=!1}}}),a("teams-dialog",{ref:"edit_dialog",attrs:{title:"Edit Member",dialog:e.edit_dialog,"fields-to-edit":e.edit_item,"is-edit-dialog":e.edit_dialog},on:{"update:dialog":function(t){e.edit_dialog=t},save:function(t){return e.update_item("update_team",t)},"close-dialog":function(t){e.edit_dialog=!1}}}),a("delete-dialog",{attrs:{"open-dialog":e.delete_dialog,title:"Delete Member","text-content":"Are you sure you want to delete this member?"},on:{"update:openDialog":function(t){e.delete_dialog=t},"update:open-dialog":function(t){e.delete_dialog=t},delete:function(t){return e.delete_item("delete_team",t)}}}),a("delete-dialog",{attrs:{"open-dialog":e.bulk_delete_dialog,title:"Delete Members","text-content":"Are you sure you want to delete these members? This can't be undone."},on:{"update:openDialog":function(t){e.bulk_delete_dialog=t},"update:open-dialog":function(t){e.bulk_delete_dialog=t},delete:function(t){return e.bulk_delete("bulk_delete_member")}}}),"list"===e.view?a("VueTable",{key:e.componentKey,attrs:{items:e.items,headers:e.headers,showRowActions:!0,icon:"widgets",title:"Members",noMoreData:e.noMoreData,showSelect:!0},on:{"load-more":e.load_more_users,"delete-selected":function(t){return e.open_bulk_delete_dialog(t)}},scopedSlots:e._u([{key:"row-slot",fn:function(t){var n=t.item;return[a("td",{on:{click:function(t){return e.navigate_to_view_profile(n)}}},[a("v-avatar",{attrs:{size:"30",color:"teal"}},[a("v-img",{attrs:{src:n.image_url,title:n.fullname},scopedSlots:e._u([{key:"placeholder",fn:function(){return[a("span",{staticClass:"white--text headline"},[e._v("U")])]},proxy:!0}],null,!0)})],1),e._v(" "+e._s(n.fullname)+" ")],1),a("td",[e._v(e._s(n.job_title))]),a("td",[e._v(e._s(n.location))]),a("td",[e._v(e._s(n.tasks))]),a("td",[e._v(e._s(n.projects))]),a("Actions",{attrs:{item:n,permissions:e.$_permissions.get("hq_members")},on:{delete:function(t){return e.open_delete_dialog(n)},edit:function(t){return e.open_edit_dialog(n)},view:function(t){return e.navigate_to_view_profile(n)}}})]}},{key:"empty-slot",fn:function(){return[a("v-btn",{attrs:{tile:"",text:"",outlined:""},on:{click:function(t){e.add_dialog=!0}}},[a("v-icon",{attrs:{left:""}},[e._v("add")]),e._v(" Add Member")],1)]},proxy:!0}],null,!1,3773290458)}):a("VueGrid",{key:e.componentKey,attrs:{items:e.items,permissions:e.$_permissions.get("hq_members"),noMoreData:e.noMoreData},on:{"load-more":e.load_more_users,delete:e.open_delete_dialog,edit:e.open_edit_dialog}})],1)},o=[],i=(a("8615"),a("ac6a"),a("e06e")),r=(a("13ea"),a("1be9")),s=a("36ee"),l=a("0ebe"),d=a("29d6"),u=a("5b70"),c=a("23ca"),f=a("ee09"),_={name:"Teams",mixins:[i["a"]],components:{VueTable:l["a"],TeamsDialog:c["a"],TableHeader:d["a"],DeleteDialog:u["a"],Actions:f["a"],VueGrid:s["a"]},data:function(){return{paths:[{text:"Dashboard",disabled:!1,router_name:"default-content"},{text:"Teams",disabled:!0,router_name:null}],sortList:[{title:"Sort by member"},{title:"Sort by position"},{title:"Sort by location"},{title:"Sort by total hours"},{title:"Sort by total amount"}],headers:[{text:"Member",align:"left",value:"name"},{text:"Position",value:"position"},{text:"Location",value:"location"},{text:"Tasks",value:"tasks"},{text:"Projects",value:"projects"},{text:"Action",value:"actions",sortable:!1,align:"center",width:"140px"}],table_config:{route_name:"team",add_message:"New Member added successfully!",update_message:"Member updated successfully!",delete_message:"Member deleted successfully!",refresh_table_message:"Table refreshed",refresh_table_api_name:"paginate_teams_table"}}},created:function(){this.view=this.getPreferredView(),this.load_users()},methods:{load_users:function(){var e=this;this.loading=!0,r["a"].get("api/company/teams?page=1").then((function(t){var a=t.data;e.items=a.data,e.pagination.current=a.current_page,e.pagination.total=a.last_page,e.hasMoreData()})).finally((function(){e.loading=!1,e.$event.$emit("btnloading_off",!1)}))},load_more_users:function(){var e=this;this.loading=!0,r["a"].get("api/company/teams?page=".concat(this.pagination.current+1)).then((function(t){var a=t.data;a.data.forEach((function(t){e.items.push(t)})),e.pagination.current=a.current_page,e.pagination.total=a.last_page,e.hasMoreData()})).finally((function(){e.loading=!1,e.$event.$emit("btnloading_off",!1)}))},toggleAll:function(){this.selected.length?this.selected=[]:this.selected=this.items.slice()},tasks_text:function(e){return e.tasks.length?e.tasks.length:"No tasks assigned"},projects_text:function(e){return e.projects.length?e.projects.length:"No projects assigned"},go_to_groups_page:function(){this.$router.push({path:"settings?tab=groups"})},navigate_to_view_profile:function(e){"undefined"===typeof e.user_roles&&this.$router.push("/dashboard/team/profile/".concat(e.id));var t=Object.values(e.user_roles);t[0].indexOf("client")>=0||t[0].indexOf("agent")>=0?this.$router.push("/dashboard/clients/profile/".concat(e.id)):this.$router.push("/dashboard/team/profile/".concat(e.id))}}},p=_,m=(a("f7c6"),a("2877")),g=Object(m["a"])(p,n,o,!1,null,null,null);t["default"]=g.exports},f3a9:function(e,t,a){},f7c6:function(e,t,a){"use strict";var n=a("0f80"),o=a.n(n);o.a},ff3c:function(e,t,a){"use strict";var n=a("4c37"),o=a.n(n);o.a}}]);
//# sourceMappingURL=chunk-16844e7b.6f74ded8.js.map