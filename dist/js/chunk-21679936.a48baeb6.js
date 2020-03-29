(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21679936"],{"0d82":function(t,e,a){"use strict";var n=a("8a10"),i=a.n(n);i.a},"10fc":function(t,e,a){"use strict";var n=a("65a1"),i=a.n(n);i.a},"174f":function(t,e,a){},"259d":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"breadcrumb-wrapper"},[a("v-breadcrumbs",{attrs:{items:t.paths},scopedSlots:t._u([{key:"item",fn:function(e){var n=e.item;return[a("v-breadcrumbs-item",{staticClass:"page__title",attrs:{disabled:n.disabled}},[a("span",{on:{click:function(e){return t.navigate_from_breadcrumb(n)}}},[t._v(" "+t._s(n.text)+" ")])])]}}])},[a("v-icon",{attrs:{slot:"divider"},slot:"divider"},[t._v("chevron_right")])],1)],1)},i=[],s={name:"Breadcrumb",props:{paths:{type:Array,default:function(){return[]}}},methods:{navigate_from_breadcrumb:function(t){if(t.hasOwnProperty("path"))t.path&&this.$router.push({path:t.path});else{var e=t.router_name;e&&this.$router.push({name:e})}}}},o=s,l=(a("87d8"),a("10fc"),a("2877")),c=Object(l["a"])(o,n,i,!1,null,"14ca3542",null);e["a"]=c.exports},"289a":function(t,e,a){},"29d6":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{staticClass:"table-header",attrs:{wrap:""}},[a("breadcrumb",{attrs:{paths:t.paths}}),a("v-flex",[t.noButton?t._e():a("v-btn",{staticClass:"add__btn mr-2",attrs:{fab:"",small:""},on:{click:function(e){return t.$emit("click")}}},[a("v-icon",[t._v("add")])],1),t.noSortButton?t._e():a("v-btn",{staticClass:"add__btn mr-2",attrs:{fab:"",small:""},on:{click:function(e){return t.$emit("click-sort-by")}}},[a("v-icon",[t._v("sort")])],1),t.noListButton?t._e():a("v-btn",{staticClass:"add__btn mr-2",attrs:{fab:"",small:""},on:{click:function(e){return t.$emit("click-list-view")}}},[a("v-icon",[t._v("list")])],1),t.noGridButton?t._e():a("v-btn",{staticClass:"add__btn mr-2",attrs:{fab:"",small:""},on:{click:function(e){return t.$emit("click-grid-view")}}},[a("v-icon",[t._v("mdi-view-dashboard")])],1),t._t("form-btn")],2)],1)},i=[],s=a("259d"),o={name:"TableHeader",props:{paths:{type:Array,default:[]},noButton:{type:Boolean,default:!1},noListButton:{type:Boolean,default:!0},noGridButton:{type:Boolean,default:!0},noSortButton:{type:Boolean,default:!0}},data:function(){return{fab:!0}},components:{Breadcrumb:s["a"]}},l=o,c=(a("8732"),a("2877")),d=Object(c["a"])(l,n,i,!1,null,"273c0570",null);e["a"]=d.exports},"33b9":function(t,e,a){"use strict";var n=a("77fd"),i=a.n(n);i.a},"3a5c":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"clients"},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("table-header",{attrs:{paths:t.paths},on:{click:function(e){t.add_dialog=!0}}})],1)],1),a("clients-table",{attrs:{dialog:t.add_dialog},on:{"update:dialog":function(e){t.add_dialog=e}}})],1)},i=[],s=a("259d"),o=a("29d6"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"clients-table"},[a("clients-dialog",{ref:"add_dialog",attrs:{dialog:t.add_dialog,"dialog-title":"Add Client"},on:{"update:dialog":function(e){t.add_dialog=e},save:function(e){return t.add_item("add_new_client",e)}}}),a("clients-dialog",{ref:"edit_dialog",attrs:{dialog:t.edit_dialog,title:"Edit Client","is-edit-dialog":t.edit_dialog,"fields-to-edit":t.edit_item},on:{"update:dialog":function(e){t.edit_dialog=e},save:function(e){return t.update_item("update_client",e)}}}),a("delete-dialog",{attrs:{"open-dialog":t.delete_dialog,title:"Delete Client","text-content":"Are you sure you want to delete this client?"},on:{"update:openDialog":function(e){t.delete_dialog=e},"update:open-dialog":function(e){t.delete_dialog=e},delete:function(e){return t.delete_item("delete_client")}}}),a("delete-dialog",{attrs:{"open-dialog":t.bulk_delete_dialog,title:"Delete Clients","text-content":"Are you sure you want to delete these clients? This can't be undone."},on:{"update:openDialog":function(e){t.bulk_delete_dialog=e},"update:open-dialog":function(e){t.bulk_delete_dialog=e},delete:function(e){return t.bulk_delete("bulk_delete_clients")}}}),a("VueTable",{key:t.componentKey,attrs:{items:t.items,headers:t.headers,showRowActions:!0,icon:"people_outline",loading:t.loading,title:"Clients",noMoreData:t.noMoreData,showSelect:!0},on:{"load-more":t.load_more,"delete-selected":function(e){return t.open_bulk_delete_dialog(e)}},scopedSlots:t._u([{key:"row-slot",fn:function(e){var n=e.item;return[a("td",{on:{click:function(e){return t.navigate_to_view_profile(n.id)}}},[a("v-avatar",{attrs:{color:"teal",size:"36"}},[a("v-img",{attrs:{src:n.image_url}})],1),t._v(" "+t._s(n.company_name)+" ")],1),a("td",[t._v(t._s(t._f("phoneDisplayForm")(n.telephone)))]),a("td",[t._v(t._s(n.email))]),a("td",[t._v(t._s(n.status))]),a("Actions",{attrs:{item:n,permissions:t.$_permissions.get("clients")},on:{delete:function(e){return t.open_delete_dialog(n)},edit:function(e){return t.open_edit_dialog(n)},view:function(e){return t.navigate_to_view_profile(n.id)}}})]}},{key:"empty-slot",fn:function(){return[a("v-btn",{attrs:{dark:"",color:"#3b589e"},on:{click:function(e){t.add_dialog=!0}}},[t._v("Add Client")])]},proxy:!0}])})],1)},c=[],d=(a("ac6a"),a("a481"),a("e06e")),r=a("1be9"),u=a("0ebe"),f=a("7f40"),_=a("5b70"),p=a("ee09"),m={name:"ClientsVueTable",mixins:[d["a"]],components:{VueTable:u["a"],ClientsDialog:f["a"],DeleteDialog:_["a"],Actions:p["a"]},props:{dialog:Boolean},data:function(){return{headers:[{text:"Business Name",align:"left",value:"company_name"},{text:"Contact No.",value:"contact"},{text:"Email",value:"email"},{text:"Status",value:"status"},{text:"Action",value:"actions",sortable:!1,align:"center",width:"140px"}],table_config:{route_name:"clients",add_message:"New Client added successfully!",update_message:"Client updated successfully!",delete_message:"Client deleted successfully!",refresh_table_message:"Table refreshed",refresh_table_api_name:"paginate_clients_table"}}},filters:{phoneDisplayForm:function(t){return t.replace(/(\d{3})(\d{3})(\d{4})/,"($1) $2 $3")}},watch:{dialog:function(t){this.add_dialog=t},add_dialog:function(t){this.$emit("update:dialog",t)}},created:function(){this.loadClients()},methods:{navigate_to_view_profile:function(t){this.$router.push("/dashboard/clients/profile/".concat(t))},loadClients:function(){var t=this;this.loading=!0,r["a"].get("api/clients?page=1").then((function(e){var a=e.data;t.items=a.data,t.pagination.current=a.current_page,t.pagination.total=a.last_page,t.hasMoreData()})).finally((function(){t.loading=!1,t.$event.$emit("btnloading_off",!1)}))},load_more:function(){var t=this;r["a"].get("api/clients?page=".concat(this.pagination.current+1)).then((function(e){var a=e.data;a.data.forEach((function(e){t.items.push(e)})),t.pagination.current=a.current_page,t.pagination.total=a.last_page,t.hasMoreData()})).finally((function(){t.loading=!1,t.$event.$emit("btnloading_off",!1)}))}}},h=m,v=(a("0d82"),a("2877")),g=Object(v["a"])(h,l,c,!1,null,"53d2b977",null),b=g.exports,x={name:"Clients",components:{Breadcrumb:s["a"],ClientsTable:b,TableHeader:o["a"]},data:function(){return{paths:[{text:"Dashboard",disabled:!1,router_name:"default-content"},{text:"Clients",disabled:!0,router_name:null}],add_dialog:!1}}},w=x,y=(a("c4ba"),Object(v["a"])(w,n,i,!1,null,"13d7a8a9",null));e["default"]=y.exports},"48f9":function(t,e,a){},"57e5":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{"justify-center":""}},[a("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.loading?a("v-progress-linear",{attrs:{slot:"progress",color:"blue",indeterminate:""},slot:"progress"}):a("v-card",{staticClass:"custom__dialog"},[a("v-card-title",{staticClass:"dialog__header"},[t._t("entire-header",[t._t("title",[a("span",{staticClass:"dialog__title"},[t._v(t._s(t.title))])]),t._t("cancel-icon",[a("v-btn",{staticClass:"close__dialog",attrs:{fab:"",small:""},on:{click:t.close_dialog}},[a("v-icon",[t._v("close")])],1)])])],2),a("v-card-text",{staticClass:"dialog__body"},[t._t("content",[t._v(" "+t._s(t.content)+" ")])],2),a("v-card-actions",{staticClass:"dialog__actions"},[t._t("entire-actions",[t._t("button1",[a("v-btn",{on:{click:t.button1clicked}},[t._v(t._s(t.button1Text))])]),t._t("button2",[a("v-btn",{attrs:{loading:t.btnloading},on:{click:t.button2clicked}},[t._v(t._s(t.button2Text))])])])],2)],1)],1)],1)},i=[],s={props:{title:{type:String,default:"Default Modal Title"},content:{type:String,default:"Default Modal Text Content"},button1Text:{type:String,default:"Cancel"},button2Text:{type:String,default:"Delete"},open:Boolean,value:Boolean},data:function(){return{dialog:!1,loading:!1,btnloading:!1}},mounted:function(){var t=this;this.$event.$on("btnloading_off",(function(e){return t.btnloading=e}))},watch:{value:{handler:function(t){this.dialog=t},immediate:!0},open:function(t){this.dialog=t},dialog:function(t){this.$emit("update:open",t),this.$emit("input",t)}},methods:{button1clicked:function(){this.$emit("button1")},button2clicked:function(){this.btnloading=!0,this.$emit("button2")},open_dialog:function(){this.dialog=!0},close_dialog:function(){this.dialog=!1},clear_and_close:function(){Object.assign(this.$data,this.$options.data.apply(this)),this.close_dialog()},activate_loading:function(){this.loading=!0},disable_loading:function(){this.loading=!1}}},o=s,l=(a("ed40"),a("dc8f"),a("2877")),c=Object(l["a"])(o,n,i,!1,null,"68307905",null);e["a"]=c.exports},"5b70":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("custom-dialog",{attrs:{title:t.title,content:t.textContent,"button1-text":t.cancelButtonText,"button2-text":t.deleteButtonText,open:t.open},on:{"update:open":function(e){t.open=e},button1:t.cancel_clicked,button2:t.delete_clicked}})],1)},i=[],s=a("57e5"),o={components:{CustomDialog:s["a"]},props:{title:{type:String,default:"Default Modal Title"},textContent:{type:String,default:"Default Modal Text Content"},cancelButtonText:{type:String,default:"Cancel"},deleteButtonText:{type:String,default:"Delete"},openDialog:Boolean},data:function(){return{open:!1}},watch:{openDialog:function(t){this.open=t},open:function(t){this.$emit("update:openDialog",t)}},methods:{cancel_clicked:function(){this.open=!1},delete_clicked:function(){this.$emit("delete")},showDialog:function(){this.open=!0},closeDialog:function(){this.open=!1}}},l=o,c=a("2877"),d=Object(c["a"])(l,n,i,!1,null,null,null);e["a"]=d.exports},"65a1":function(t,e,a){},"77fd":function(t,e,a){},"7e7e":function(t,e,a){"use strict";var n=a("174f"),i=a.n(n);i.a},"7f40":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("custom-dialog",{ref:"dialog",attrs:{title:t.title,open:t.open,"button2-text":"Save"},on:{"update:open":function(e){t.open=e},button1:t.cancel,button2:t.save}},[a("template",{slot:"content"},[a("v-layout",{staticClass:"clients__dialog",attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{label:"Business Name",filled:"","hide-details":"",color:"#657186"},model:{value:t.company_name,callback:function(e){t.company_name="string"===typeof e?e.trim():e},expression:"company_name"}})],1),a("v-flex",{attrs:{xs12:""}},[a("p",{staticClass:"owner"},[t._v("Owner's Fullname")])]),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{label:"First Name",filled:"","hide-details":"",color:"#657186"},model:{value:t.first_name,callback:function(e){t.first_name="string"===typeof e?e.trim():e},expression:"first_name"}})],1),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{label:"Last Name",filled:"","hide-details":"",color:"#657186"},model:{value:t.last_name,callback:function(e){t.last_name="string"===typeof e?e.trim():e},expression:"last_name"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{label:"Location",filled:"","hide-details":"",color:"#657186"},model:{value:t.location,callback:function(e){t.location="string"===typeof e?e.trim():e},expression:"location"}})],1),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{label:"Contact Name",filled:"","hide-details":"",color:"#657186"},model:{value:t.contact_name,callback:function(e){t.contact_name="string"===typeof e?e.trim():e},expression:"contact_name"}})],1),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{label:"Telephone",mask:"phone",filled:"","hide-details":"",color:"#657186"},model:{value:t.telephone,callback:function(e){t.telephone="string"===typeof e?e.trim():e},expression:"telephone"}})],1),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{staticClass:"dialog__email d-field",attrs:{label:"Contact Email",filled:"","hide-details":"",color:"#657186"},model:{value:t.email,callback:function(e){t.email="string"===typeof e?e.trim():e},expression:"email"}})],1),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-select",{staticClass:"dialog__selectfield d-field",attrs:{label:"Status",items:t.status_items,filled:"","hide-details":"",color:"#657186"},model:{value:t.status,callback:function(e){t.status="string"===typeof e?e.trim():e},expression:"status"}})],1),t.isEditDialog?t._e():a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{staticClass:"dialog__password d-field",attrs:{"append-icon":t.show_password?"visibility_off":"visibility",type:t.show_password?"text":"password",label:"Password",filled:"","hide-details":"",color:"#657186"},on:{"click:append":function(e){t.show_password=!t.show_password}},model:{value:t.password,callback:function(e){t.password="string"===typeof e?e.trim():e},expression:"password"}})],1),t.isEditDialog?t._e():a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{staticClass:"dialog__password d-field",attrs:{"append-icon":t.show_repeat_password?"visibility_off":"visibility",type:t.show_repeat_password?"text":"password",label:"Repeat Password",filled:"","hide-details":"",color:"#657186"},on:{"click:append":function(e){t.show_repeat_password=!t.show_repeat_password}},model:{value:t.repeat_password,callback:function(e){t.repeat_password="string"===typeof e?e.trim():e},expression:"repeat_password"}})],1)],1)],1)],2)},i=[],s=a("57e5"),o={name:"ClientsDialog",components:{CustomDialog:s["a"]},props:{dialog:Boolean,title:String,isEditDialog:Boolean,fieldsToEdit:{type:Object,default:function(){}}},data:function(){return{open:!1,show_password:!1,show_repeat_password:!1,first_name:null,last_name:null,company_name:null,telephone:null,contact_name:null,email:null,status:null,location:null,password:null,repeat_password:null,status_items:[{id:1,text:"Active",value:"Active"},{id:2,text:"Inactive",value:"Inactive"}]}},watch:{dialog:function(t){this.open=t},open:function(t){this.$emit("update:dialog",t)},fieldsToEdit:{handler:function(t){this.isEditDialog&&this.update_fields(t)},deep:!0}},methods:{cancel:function(){this.open=!1},save:function(){var t={first_name:this.first_name,last_name:this.last_name,company_name:this.company_name,telephone:this.telephone,contact_name:this.contact_name,email:this.email,status:this.status,location:this.location};if(!this.isEditDialog){if(this.password!==this.repeat_password)return void this.$event.$emit("open_snackbar","Passwords don't match","error");t.password=this.password,t.password_confirmation=this.repeat_password}this.$emit("save",t)},update_fields:function(t){var e=t.fields,a=Object.assign({},e);this.first_name=a.first_name,this.last_name=a.last_name,this.company_name=a.company_name,this.telephone=a.telephone,this.contact_name=a.contact_name,this.email=a.email,this.status=a.status,this.location=a.location},clear_and_close:function(){this.first_name=this.last_name=this.company_name=this.location=this.contact_name="",this.telephone=this.email=this.status="",this.password=this.repeat_password="",this.cancel()}}},l=o,c=(a("33b9"),a("f14b"),a("2877")),d=Object(c["a"])(l,n,i,!1,null,"588889e8",null);e["a"]=d.exports},8732:function(t,e,a){"use strict";var n=a("48f9"),i=a.n(n);i.a},"87d8":function(t,e,a){"use strict";var n=a("e403"),i=a.n(n);i.a},"8a10":function(t,e,a){},"8ab2":function(t,e,a){},9399:function(t,e,a){},c4ba:function(t,e,a){"use strict";var n=a("8ab2"),i=a.n(n);i.a},dc8f:function(t,e,a){"use strict";var n=a("289a"),i=a.n(n);i.a},e2c0:function(t,e,a){},e403:function(t,e,a){},ed40:function(t,e,a){"use strict";var n=a("e2c0"),i=a.n(n);i.a},ee09:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",{staticClass:"table-actions",attrs:{align:"center"}},[t.hasEdit?a("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.can_edit,expression:"can_edit"}],attrs:{dense:"",dense:"",icon:""},on:{click:function(e){return t.handle_action("edit")}}},[a("v-icon",{attrs:{small:""}},[t._v(" mdi-pencil ")])],1):t._e(),t.hasDelete?a("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.can_delete,expression:"can_delete"}],attrs:{dense:"",icon:""},on:{click:function(e){return t.handle_action("delete")}}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-delete")])],1):t._e(),t.hasView?a("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.can_view,expression:"can_view"}],attrs:{dense:"",icon:""},on:{click:function(e){return t.handle_action("view")}}},[a("v-icon",{attrs:{small:""}},[t._v("pageview")])],1):t._e()],1)},i=[],s={props:{item:{type:Object,default:null},permissions:{type:Object,default:function(){return{delete:!0,update:!0,create:!0,view:!0}}},hasDelete:{type:Boolean,default:!0},hasEdit:{type:Boolean,default:!0},hasView:{type:Boolean,default:!0}},computed:{logged_user:function(){return this.$store.getters.user}},methods:{handle_action:function(t){this.item&&this.$emit(t,this.item)},can_delete:function(){return!!this.logged_user.is_admin||this.permissions&&this.permissions.can.delete},can_edit:function(){return!!this.logged_user.is_admin||this.permissions&&this.permissions.can.update},can_view:function(){return!!this.logged_user.is_admin||this.permissions&&this.permissions.can.view}}},o=s,l=(a("7e7e"),a("2877")),c=Object(l["a"])(o,n,i,!1,null,null,null);e["a"]=c.exports},f14b:function(t,e,a){"use strict";var n=a("9399"),i=a.n(n);i.a}}]);
//# sourceMappingURL=chunk-21679936.a48baeb6.js.map