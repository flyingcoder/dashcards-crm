(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-742ed79b"],{"0bab":function(e,t,i){"use strict";var n=i("6c6b"),a=i.n(n);a.a},"174f":function(e,t,i){},"3a5c":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"clients"},[i("clients-dialog",{ref:"add_dialog",attrs:{dialog:e.add_dialog,dialogTitle:"Add New Client"},on:{"update:dialog":function(t){e.add_dialog=t},save:function(t){return e.add_item("add_new_client",t)}}}),i("clients-dialog",{ref:"edit_dialog",attrs:{dialog:e.edit_dialog,dialogTitle:"Edit Client","is-edit-dialog":e.edit_dialog,"fields-to-edit":e.edit_item},on:{"update:dialog":function(t){e.edit_dialog=t},save:function(t){return e.update_item("update_client",t)}}}),i("delete-dialog",{attrs:{"open-dialog":e.delete_dialog,title:"Delete Client","text-content":"Are you sure you want to delete this client?"},on:{"update:openDialog":function(t){e.delete_dialog=t},"update:open-dialog":function(t){e.delete_dialog=t},delete:function(t){return e.delete_item("delete_client")}}}),i("delete-dialog",{attrs:{"open-dialog":e.bulk_delete_dialog,title:"Delete Clients","text-content":"Are you sure you want to delete these clients? This can't be undone."},on:{"update:openDialog":function(t){e.bulk_delete_dialog=t},"update:open-dialog":function(t){e.bulk_delete_dialog=t},delete:function(t){return e.bulk_delete("bulk_delete_clients")}}}),"list"===e.view?i("VueTable",{key:e.componentKey,attrs:{items:e.items,headers:e.headers,showRowActions:!0,icon:"people_outline",loading:e.loading,title:"Clients",noMoreData:e.noMoreData,showSelect:!0},on:{"load-more":e.load_more,"delete-selected":function(t){return e.open_bulk_delete_dialog(t)}},scopedSlots:e._u([{key:"row-slot",fn:function(t){var n=t.item;return[i("td",{staticClass:"clickable-td"},[i("Avatar",{attrs:{user:n}})],1),n.company?i("td",[e._v(e._s(e._f("ucwords")(n.company.name)))]):i("td"),i("td",[e._v(e._s(n.telephone?n.telephone.formatInternational:"-"))]),n.company?i("td",[e._v(e._s(e._f("ucwords")(n.company.address)))]):i("td"),i("td",[e._v(e._s(n.props?n.props.status:"Active"))]),i("Actions",{attrs:{item:n,permissions:e.$_permissions.get("clients")},on:{delete:function(t){return e.open_delete_dialog(n)},edit:function(t){return e.open_edit_dialog(n)},view:function(t){return e.navigate_to_view_profile(n.id)}}})]}},{key:"empty-slot",fn:function(){return[i("v-btn",{attrs:{dark:"",color:"#3b589e"},on:{click:function(t){e.add_dialog=!0}}},[e._v("Add Client")])]},proxy:!0}],null,!1,1682551169)},[i("template",{slot:"header-toolbar"},[i("table-header",{attrs:{noListButton:!1,noGridButton:!1},on:{click:function(t){e.add_dialog=!0},"click-list-view":function(t){return e.setPreferredView("list")},"click-grid-view":function(t){return e.setPreferredView("grid")}}})],1)],2):i("VueGrid",{key:e.componentKey,attrs:{title:"Clients",showTaskCount:!1,items:e.items,noMoreData:e.noMoreData},on:{"load-more":e.load_more,delete:e.open_delete_dialog,edit:e.open_edit_dialog}},[i("template",{staticClass:"icons",slot:"header-toolbar"},[i("table-header",{attrs:{noListButton:!1,noGridButton:!1},on:{click:function(t){e.add_dialog=!0},"click-list-view":function(t){return e.setPreferredView("list")},"click-grid-view":function(t){return e.setPreferredView("grid")}}})],1)],2)],1)},a=[],s=(i("a481"),i("e06e")),o=(i("1be9"),i("259d")),l=i("0ebe"),d=i("7f40"),r=i("5b70"),c=i("ee09"),u=i("29d6"),p=i("36ee"),_={name:"Clients",mixins:[s["a"]],components:{Breadcrumb:o["a"],TableHeader:u["a"],VueTable:l["a"],VueGrid:p["a"],ClientsDialog:d["a"],DeleteDialog:r["a"],Actions:c["a"]},mounted:function(){this.$event.$emit("path-change",this.paths),this.view=this.getPreferredView()},data:function(){return{paths:[{text:"Dashboard",disabled:!1,router_name:"default-content"},{text:"Clients",disabled:!0,router_name:null}],headers:[{text:"Client",align:"left"},{text:"Business Name",align:"left"},{text:"Contact No."},{text:"Location"},{text:"Status"},{text:"Action",value:"actions",sortable:!1,align:"center",width:"140px"}],table_config:{route_name:"clients",add_message:"New Client added successfully!",update_message:"Client updated successfully!",delete_message:"Client deleted successfully!",refresh_table_message:"Table refreshed",refresh_table_api_name:"paginate_clients_table"}}},filters:{phoneDisplayForm:function(e){return e.replace(/(\d{3})(\d{3})(\d{4})/,"($1) $2 $3")}},watch:{dialog:function(e){this.add_dialog=e},add_dialog:function(e){this.$emit("update:dialog",e)}},created:function(){this.loadClients()},methods:{navigate_to_view_profile:function(e){this.$router.push("/dashboard/clients/profile/".concat(e))},loadClients:function(){this.fill_table_via_url("api/clients")},load_more:function(){this.load_more_via_url("api/clients")}}},m=_,f=(i("0bab"),i("2877")),h=Object(f["a"])(m,n,a,!1,null,"505d9fe2",null);t["default"]=h.exports},"6c6b":function(e,t,i){},"7e7e":function(e,t,i){"use strict";var n=i("174f"),a=i.n(n);a.a},"7f40":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("custom-dialog",{ref:"dialog",attrs:{title:e.dialogTitle,open:e.open,"button2-text":"Save",mainBtnDisabled:!e.readyForSubmit},on:{"update:open":function(t){e.open=t},button1:e.cancel,button2:e.save}},[i("template",{slot:"content"},[i("v-row",{staticClass:"clients__dialog",attrs:{"no-gutters":""}},[i("v-col",{attrs:{xs:"12",sm:"12"}},[i("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{"prepend-inner-icon":"mdi-office-building",label:"Business Name",dense:"",filled:"","hide-details":"",color:"#657186"},model:{value:e.company_name,callback:function(t){e.company_name="string"===typeof t?t.trim():t},expression:"company_name"}})],1),i("v-col",{staticClass:"py-0 my-0",attrs:{xs:"12",sm:"12"}},[i("p",{staticClass:"owner"},[e._v("Owner's Fullname")])]),i("v-col",{attrs:{xs:"12",sm:"6"}},[i("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{"prepend-inner-icon":"mdi-account-settings-outline",label:"First Name",dense:"",filled:"","hide-details":"",color:"#657186"},model:{value:e.first_name,callback:function(t){e.first_name="string"===typeof t?t.trim():t},expression:"first_name"}})],1),i("v-col",{attrs:{xs:"12",sm:"6"}},[i("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{"prepend-inner-icon":"mdi-account-settings-outline",label:"Last Name",dense:"",filled:"","hide-details":"",color:"#657186"},model:{value:e.last_name,callback:function(t){e.last_name="string"===typeof t?t.trim():t},expression:"last_name"}})],1),i("v-col",{attrs:{xs:"12",sm:"6"}},[i("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{"prepend-inner-icon":"mdi-account-star-outline",label:"Contact Name",dense:"",filled:"","hide-details":"",color:"#657186"},model:{value:e.contact_name,callback:function(t){e.contact_name="string"===typeof t?t.trim():t},expression:"contact_name"}})],1),i("v-col",{attrs:{xs:"12",sm:"6"}},[i("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{"prepend-inner-icon":"mdi-map-marker",label:"Location",dense:"",filled:"","hide-details":"",color:"#657186"},model:{value:e.location,callback:function(t){e.location="string"===typeof t?t.trim():t},expression:"location"}})],1),i("v-col",{attrs:{xs:"12",sm:"12"}},[i("vue-phone-number-input",{staticClass:"dialog__textfield d-field",attrs:{size:"lg",required:"",clearable:"","show-code-on-list":"","default-country-code":e.defaultCountryCode},on:{update:e.showUpdate,"phone-number-blur":e.telephone_on_blur},model:{value:e.contact_number,callback:function(t){e.contact_number=t},expression:"contact_number"}})],1),i("v-col",{attrs:{xs:"12",sm:"6"}},[i("v-text-field",{staticClass:"dialog__email d-field",attrs:{"prepend-inner-icon":"mdi-email-receive",label:"Contact Email",dense:"",filled:"","hide-details":"",color:"#657186"},model:{value:e.email,callback:function(t){e.email="string"===typeof t?t.trim():t},expression:"email"}})],1),i("v-col",{attrs:{xs:"12",sm:"6"}},[i("v-select",{staticClass:"dialog__selectfield d-field",attrs:{"prepend-inner-icon":"mdi-account-question-outline",label:"Status",items:e.status_items,dense:"",filled:"","hide-details":"",color:"#657186"},model:{value:e.status,callback:function(t){e.status="string"===typeof t?t.trim():t},expression:"status"}})],1),e.isEditDialog?e._e():i("v-col",{attrs:{xs:"12",sm:"6"}},[i("v-text-field",{staticClass:"dialog__password d-field",attrs:{"prepend-inner-icon":"mdi-account-lock-outline","append-icon":e.show_password?"visibility_off":"visibility",type:e.show_password?"text":"password",label:"Password",dense:"",filled:"","hide-details":"",color:"#657186"},on:{"click:append":function(t){e.show_password=!e.show_password}},model:{value:e.password,callback:function(t){e.password="string"===typeof t?t.trim():t},expression:"password"}})],1),e.isEditDialog?e._e():i("v-col",{attrs:{xs:"12",sm:"6"}},[i("v-text-field",{staticClass:"dialog__password d-field",attrs:{"prepend-inner-icon":"mdi-account-key-outline","append-icon":e.show_repeat_password?"visibility_off":"visibility",type:e.show_repeat_password?"text":"password",label:"Repeat Password",dense:"",filled:"","hide-details":"",color:"#657186"},on:{"click:append":function(t){e.show_repeat_password=!e.show_repeat_password}},model:{value:e.repeat_password,callback:function(t){e.repeat_password="string"===typeof t?t.trim():t},expression:"repeat_password"}})],1)],1)],1)],2)},a=[],s=(i("7f7f"),i("57e5")),o={name:"ClientsDialog",components:{CustomDialog:s["a"]},props:{dialog:Boolean,dialogTitle:String,isEditDialog:Boolean,fieldsToEdit:{type:Object,default:function(){}}},data:function(){return{open:!1,show_password:!1,show_repeat_password:!1,first_name:null,last_name:null,company_name:null,telephone:null,contact_number:null,contact_name:null,email:null,status:null,location:null,password:null,repeat_password:null,status_items:[{id:1,text:"Active",value:"Active"},{id:2,text:"Inactive",value:"Inactive"}],telephone_is_valid:!1,defaultCountryCode:null}},watch:{dialog:function(e){this.open=e},open:function(e){this.$emit("update:dialog",e)},fieldsToEdit:{handler:function(e){this.isEditDialog&&this.update_fields(e)},deep:!0}},computed:{readyForSubmit:function(){return this.validation_passed()}},methods:{cancel:function(){this.open=!1},validation_passed:function(){return this.isEditDialog?this.telephone_is_valid&&this.telephone&&this.first_name&&this.last_name&&this.company_name&&this.email&&this.status&&this.contact_name:this.telephone_is_valid&&this.telephone&&this.password&&this.repeat_password&&this.first_name&&this.last_name&&this.company_name&&this.email&&this.status&&this.contact_name},save:function(){var e={first_name:this.first_name,last_name:this.last_name,company_name:this.company_name,telephone:this.telephone,contact_name:this.contact_name,email:this.email,status:this.status,location:this.location};if(!this.isEditDialog){if(this.password!==this.repeat_password)return this.$event.$emit("open_snackbar","Passwords don't match","error"),void this.$event.$emit("btnloading_off",!1);e.password=this.password,e.password_confirmation=this.repeat_password}this.$emit("save",e)},update_fields:function(e){var t=e.fields,i=Object.assign({},t);this.first_name=i.first_name,this.last_name=i.last_name,this.company_name=i.company.name||null,this.contact_name=i.company.others.contact_name||null,this.email=i.email,this.status=i.props.status||"Active",this.location=i.props.location||null,i.telephone?(this.contact_number=i.telephone.phoneNumber,this.defaultCountryCode=i.telephone.countryCode,this.telephone_is_valid=!0):(this.contact_number=null,this.defaultCountryCode=null)},clear_and_close:function(){this.first_name=this.last_name=this.company_name=this.location=this.contact_name="",this.telephone=null,this.email=this.status=this.password=this.repeat_password="",this.telephone_is_valid=!1,this.cancel()},showUpdate:function(e){this.telephone_is_valid=e.isValid,this.telephone=e.isValid?e:null},telephone_on_blur:function(){this.telephone_is_valid||this.$event.$emit("open_snackbar","Invalid Phone format","error")}}},l=o,d=(i("a7e7"),i("2877")),r=Object(d["a"])(l,n,a,!1,null,"5ce24438",null);t["a"]=r.exports},a7e7:function(e,t,i){"use strict";var n=i("daf7"),a=i.n(n);a.a},daf7:function(e,t,i){},ee09:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("td",{staticClass:"table-actions",attrs:{align:"center"}},[e.hasEdit?i("v-tooltip",{directives:[{name:"show",rawName:"v-show",value:e.can_edit,expression:"can_edit"}],attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[i("v-btn",e._g({attrs:{dense:"",dense:"",icon:""},on:{click:function(t){return e.handle_action("edit")}}},n),[i("v-icon",{attrs:{small:""}},[e._v(e._s(e.editIcon))])],1)]}}],null,!1,2293778615)},[i("span",[e._v("Edit")])]):e._e(),e.hasDelete?i("v-tooltip",{directives:[{name:"show",rawName:"v-show",value:e.can_delete,expression:"can_delete"}],attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[i("v-btn",e._g({attrs:{dense:"",icon:""},on:{click:function(t){return e.handle_action("delete")}}},n),[i("v-icon",{attrs:{small:""}},[e._v(e._s(e.deleteIcon))])],1)]}}],null,!1,1335204600)},[i("span",[e._v("Delete")])]):e._e(),e.hasView?i("v-tooltip",{directives:[{name:"show",rawName:"v-show",value:e.can_view,expression:"can_view"}],attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[i("v-btn",e._g({attrs:{dense:"",icon:""},on:{click:function(t){return e.handle_action("view")}}},n),[i("v-icon",{attrs:{small:""}},[e._v(e._s(e.viewIcon))])],1)]}}],null,!1,3967608504)},[i("span",[e._v("View")])]):e._e(),e._t("extra")],2)},a=[],s={props:{item:{type:Object,default:null},permissions:{type:Object,default:function(){return{delete:!0,update:!0,create:!0,view:!0}}},editIcon:{type:String,default:"mdi-content-save-edit"},viewIcon:{type:String,default:"mdi-file-search"},deleteIcon:{type:String,default:"mdi-delete-alert"},hasDelete:{type:Boolean,default:!0},hasEdit:{type:Boolean,default:!0},hasView:{type:Boolean,default:!0}},computed:{logged_user:function(){return this.$store.getters.user}},methods:{handle_action:function(e){this.item&&this.$emit(e,this.item)},can_delete:function(){return!!this.logged_user.is_admin||this.permissions&&this.permissions.delete},can_edit:function(){return!!this.logged_user.is_admin||this.permissions&&this.permissions.update},can_view:function(){return!!this.logged_user.is_admin||this.permissions&&this.permissions.view}}},o=s,l=(i("7e7e"),i("2877")),d=Object(l["a"])(o,n,a,!1,null,null,null);t["a"]=d.exports}}]);
//# sourceMappingURL=chunk-742ed79b.8fc98116.js.map