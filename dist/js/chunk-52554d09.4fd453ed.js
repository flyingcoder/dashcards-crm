(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52554d09"],{"0edc5":function(t,e,i){},"259d":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"breadcrumb-wrapper"},[i("v-breadcrumbs",{attrs:{items:t.paths},scopedSlots:t._u([{key:"item",fn:function(e){var a=e.item;return[i("v-breadcrumbs-item",{staticClass:"page__title",attrs:{disabled:a.disabled}},[i("span",{on:{click:function(e){return t.navigate_from_breadcrumb(a)}}},[t._v(" "+t._s(a.text)+" ")])])]}}])},[i("v-icon",{attrs:{slot:"divider"},slot:"divider"},[t._v("chevron_right")])],1),t._t("extra")],2)},n=[],o={name:"Breadcrumb",props:{paths:{type:Array,default:function(){return[]}}},methods:{navigate_from_breadcrumb:function(t){if(t.hasOwnProperty("path"))t.path&&this.$router.push({path:t.path});else{var e=t.router_name;e&&this.$router.push({name:e})}}}},s=o,l=(i("5e17"),i("79a2"),i("2877")),r=Object(l["a"])(s,a,n,!1,null,"3cda09ee",null);e["a"]=r.exports},"29d6":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"table-header"},[t.noButton?t._e():i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"add__btn mr-2",attrs:{fab:"",small:"",dark:"",color:"#3b589e"},on:{click:function(e){return t.$emit("click")}}},"v-btn",n,!1),a),[i("v-icon",[t._v("mdi-plus")])],1)]}}],null,!1,1553216287)},[i("span",[t._v("Create new")])]),t.noSortButton?t._e():i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"add__btn mr-2",attrs:{fab:"",small:"",dark:"",color:"#3b589e"},on:{click:function(e){return t.$emit("click-sort-by")}}},"v-btn",n,!1),a),[i("v-icon",[t._v("sort")])],1)]}}],null,!1,2775766067)},[i("span",[t._v("Sort")])]),t.noListButton?t._e():i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"add__btn mr-2",attrs:{fab:"",small:"",dark:"",color:"#3b589e"},on:{click:function(e){return t.$emit("click-list-view")}}},"v-btn",n,!1),a),[i("v-icon",[t._v("mdi-view-sequential")])],1)]}}],null,!1,999989283)},[i("span",[t._v("List view")])]),t.noGridButton?t._e():i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"add__btn mr-2",attrs:{fab:"",small:"",dark:"",color:"#3b589e"},on:{click:function(e){return t.$emit("click-grid-view")}}},"v-btn",n,!1),a),[i("v-icon",[t._v("mdi-view-module")])],1)]}}],null,!1,2880532042)},[i("span",[t._v("Grid view")])]),t._t("form-btn")],2)},n=[],o=i("259d"),s={name:"TableHeader",props:{noButton:{type:Boolean,default:!1},noListButton:{type:Boolean,default:!0},noGridButton:{type:Boolean,default:!0},noSortButton:{type:Boolean,default:!0}},data:function(){return{fab:!0}},components:{Breadcrumb:o["a"]}},l=s,r=(i("7b61"),i("2877")),d=Object(r["a"])(l,a,n,!1,null,"7915ddae",null);e["a"]=d.exports},"2bb7":function(t,e,i){},"338e":function(t,e,i){"use strict";var a=i("2bb7"),n=i.n(a);n.a},"3a5c":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"clients"},[i("clients-dialog",{ref:"add_dialog",attrs:{dialog:t.add_dialog,dialogTitle:"Add New Client"},on:{"update:dialog":function(e){t.add_dialog=e},save:function(e){return t.add_item("add_new_client",e)}}}),i("clients-dialog",{ref:"edit_dialog",attrs:{dialog:t.edit_dialog,dialogTitle:"Edit Client","is-edit-dialog":t.edit_dialog,"fields-to-edit":t.edit_item},on:{"update:dialog":function(e){t.edit_dialog=e},save:function(e){return t.update_item("update_client",e)}}}),i("delete-dialog",{attrs:{"open-dialog":t.delete_dialog,title:"Delete Client","text-content":"Are you sure you want to delete this client?"},on:{"update:openDialog":function(e){t.delete_dialog=e},"update:open-dialog":function(e){t.delete_dialog=e},delete:function(e){return t.delete_item("delete_client")}}}),i("delete-dialog",{attrs:{"open-dialog":t.bulk_delete_dialog,title:"Delete Clients","text-content":"Are you sure you want to delete these clients? This can't be undone."},on:{"update:openDialog":function(e){t.bulk_delete_dialog=e},"update:open-dialog":function(e){t.bulk_delete_dialog=e},delete:function(e){return t.bulk_delete("bulk_delete_clients")}}}),"list"===t.view?i("VueTable",{key:t.componentKey,attrs:{items:t.items,headers:t.headers,showRowActions:!0,icon:"people_outline",loading:t.loading,title:"Clients",noMoreData:t.noMoreData,showSelect:!0},on:{"load-more":t.load_more,"delete-selected":function(e){return t.open_bulk_delete_dialog(e)}},scopedSlots:t._u([{key:"row-slot",fn:function(e){var a=e.item;return[i("td",{staticClass:"clickable-td"},[i("Avatar",{attrs:{user:a}})],1),i("td",[t._v(t._s(t._f("ucwords")(a.company.name)))]),i("td",[t._v(t._s(a.telephone?a.telephone.formatInternational:"-"))]),i("td",[t._v(t._s(t._f("ucwords")(a.company.address)))]),i("td",[t._v(t._s(a.props.status||"Active"))]),i("Actions",{attrs:{item:a,permissions:t.$_permissions.get("clients")},on:{delete:function(e){return t.open_delete_dialog(a)},edit:function(e){return t.open_edit_dialog(a)},view:function(e){return t.navigate_to_view_profile(a.id)}}})]}},{key:"empty-slot",fn:function(){return[i("v-btn",{attrs:{dark:"",color:"#3b589e"},on:{click:function(e){t.add_dialog=!0}}},[t._v("Add Client")])]},proxy:!0}],null,!1,420167505)},[i("template",{slot:"header-toolbar"},[i("table-header",{attrs:{noListButton:!1,noGridButton:!1},on:{click:function(e){t.add_dialog=!0},"click-list-view":function(e){return t.setPreferredView("list")},"click-grid-view":function(e){return t.setPreferredView("grid")}}})],1)],2):i("VueGrid",{key:t.componentKey,attrs:{title:"Clients",showTaskCount:!1,items:t.items,noMoreData:t.noMoreData},on:{"load-more":t.load_more,delete:t.open_delete_dialog,edit:t.open_edit_dialog}},[i("template",{staticClass:"icons",slot:"header-toolbar"},[i("table-header",{attrs:{noListButton:!1,noGridButton:!1},on:{click:function(e){t.add_dialog=!0},"click-list-view":function(e){return t.setPreferredView("list")},"click-grid-view":function(e){return t.setPreferredView("grid")}}})],1)],2)],1)},n=[],o=(i("a481"),i("e06e")),s=(i("1be9"),i("259d")),l=i("0ebe"),r=i("7f40"),d=i("5b70"),c=i("ee09"),u=i("29d6"),_=i("36ee"),p={name:"Clients",mixins:[o["a"]],components:{Breadcrumb:s["a"],TableHeader:u["a"],VueTable:l["a"],VueGrid:_["a"],ClientsDialog:r["a"],DeleteDialog:d["a"],Actions:c["a"]},mounted:function(){this.$event.$emit("path-change",this.paths),this.view=this.getPreferredView()},data:function(){return{paths:[{text:"Dashboard",disabled:!1,router_name:"default-content"},{text:"Clients",disabled:!0,router_name:null}],headers:[{text:"Client",align:"left"},{text:"Business Name",align:"left"},{text:"Contact No."},{text:"Location"},{text:"Status"},{text:"Action",value:"actions",sortable:!1,align:"center",width:"140px"}],table_config:{route_name:"clients",add_message:"New Client added successfully!",update_message:"Client updated successfully!",delete_message:"Client deleted successfully!",refresh_table_message:"Table refreshed",refresh_table_api_name:"paginate_clients_table"}}},filters:{phoneDisplayForm:function(t){return t.replace(/(\d{3})(\d{3})(\d{4})/,"($1) $2 $3")}},watch:{dialog:function(t){this.add_dialog=t},add_dialog:function(t){this.$emit("update:dialog",t)}},created:function(){this.loadClients()},methods:{navigate_to_view_profile:function(t){this.$router.push("/dashboard/clients/profile/".concat(t))},loadClients:function(){this.fill_table_via_url("api/clients")},load_more:function(){this.load_more_via_url("api/clients")}}},m=p,f=(i("338e"),i("2877")),h=Object(f["a"])(m,a,n,!1,null,"1833f450",null);e["default"]=h.exports},"3e12":function(t,e,i){},"5e17":function(t,e,i){"use strict";var a=i("8c6e"),n=i.n(a);n.a},"79a2":function(t,e,i){"use strict";var a=i("0edc5"),n=i.n(a);n.a},"7b61":function(t,e,i){"use strict";var a=i("3e12"),n=i.n(a);n.a},"7f40":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("custom-dialog",{ref:"dialog",attrs:{title:t.dialogTitle,open:t.open,"button2-text":"Save",mainBtnDisabled:!t.readyForSubmit},on:{"update:open":function(e){t.open=e},button1:t.cancel,button2:t.save}},[i("template",{slot:"content"},[i("v-row",{staticClass:"clients__dialog",attrs:{"no-gutters":""}},[i("v-col",{attrs:{xs:"12",sm:"12"}},[i("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{"prepend-inner-icon":"mdi-office-building",label:"Business Name",dense:"",filled:"","hide-details":"",color:"#657186"},model:{value:t.company_name,callback:function(e){t.company_name="string"===typeof e?e.trim():e},expression:"company_name"}})],1),i("v-col",{staticClass:"py-0 my-0",attrs:{xs:"12",sm:"12"}},[i("p",{staticClass:"owner"},[t._v("Owner's Fullname")])]),i("v-col",{attrs:{xs:"12",sm:"6"}},[i("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{"prepend-inner-icon":"mdi-account-settings-outline",label:"First Name",dense:"",filled:"","hide-details":"",color:"#657186"},model:{value:t.first_name,callback:function(e){t.first_name="string"===typeof e?e.trim():e},expression:"first_name"}})],1),i("v-col",{attrs:{xs:"12",sm:"6"}},[i("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{"prepend-inner-icon":"mdi-account-settings-outline",label:"Last Name",dense:"",filled:"","hide-details":"",color:"#657186"},model:{value:t.last_name,callback:function(e){t.last_name="string"===typeof e?e.trim():e},expression:"last_name"}})],1),i("v-col",{attrs:{xs:"12",sm:"6"}},[i("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{"prepend-inner-icon":"mdi-account-star-outline",label:"Contact Name",dense:"",filled:"","hide-details":"",color:"#657186"},model:{value:t.contact_name,callback:function(e){t.contact_name="string"===typeof e?e.trim():e},expression:"contact_name"}})],1),i("v-col",{attrs:{xs:"12",sm:"6"}},[i("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{"prepend-inner-icon":"mdi-map-marker",label:"Location",dense:"",filled:"","hide-details":"",color:"#657186"},model:{value:t.location,callback:function(e){t.location="string"===typeof e?e.trim():e},expression:"location"}})],1),i("v-col",{attrs:{xs:"12",sm:"12"}},[i("vue-phone-number-input",{staticClass:"dialog__textfield d-field",attrs:{size:"lg",required:"",clearable:"","show-code-on-list":"","default-country-code":t.defaultCountryCode},on:{update:t.showUpdate,"phone-number-blur":t.telephone_on_blur},model:{value:t.contact_number,callback:function(e){t.contact_number=e},expression:"contact_number"}})],1),i("v-col",{attrs:{xs:"12",sm:"6"}},[i("v-text-field",{staticClass:"dialog__email d-field",attrs:{"prepend-inner-icon":"mdi-email-receive",label:"Contact Email",dense:"",filled:"","hide-details":"",color:"#657186"},model:{value:t.email,callback:function(e){t.email="string"===typeof e?e.trim():e},expression:"email"}})],1),i("v-col",{attrs:{xs:"12",sm:"6"}},[i("v-select",{staticClass:"dialog__selectfield d-field",attrs:{"prepend-inner-icon":"mdi-account-question-outline",label:"Status",items:t.status_items,dense:"",filled:"","hide-details":"",color:"#657186"},model:{value:t.status,callback:function(e){t.status="string"===typeof e?e.trim():e},expression:"status"}})],1),t.isEditDialog?t._e():i("v-col",{attrs:{xs:"12",sm:"6"}},[i("v-text-field",{staticClass:"dialog__password d-field",attrs:{"prepend-inner-icon":"mdi-account-lock-outline","append-icon":t.show_password?"visibility_off":"visibility",type:t.show_password?"text":"password",label:"Password",dense:"",filled:"","hide-details":"",color:"#657186"},on:{"click:append":function(e){t.show_password=!t.show_password}},model:{value:t.password,callback:function(e){t.password="string"===typeof e?e.trim():e},expression:"password"}})],1),t.isEditDialog?t._e():i("v-col",{attrs:{xs:"12",sm:"6"}},[i("v-text-field",{staticClass:"dialog__password d-field",attrs:{"prepend-inner-icon":"mdi-account-key-outline","append-icon":t.show_repeat_password?"visibility_off":"visibility",type:t.show_repeat_password?"text":"password",label:"Repeat Password",dense:"",filled:"","hide-details":"",color:"#657186"},on:{"click:append":function(e){t.show_repeat_password=!t.show_repeat_password}},model:{value:t.repeat_password,callback:function(e){t.repeat_password="string"===typeof e?e.trim():e},expression:"repeat_password"}})],1)],1)],1)],2)},n=[],o=(i("7f7f"),i("57e5")),s={name:"ClientsDialog",components:{CustomDialog:o["a"]},props:{dialog:Boolean,dialogTitle:String,isEditDialog:Boolean,fieldsToEdit:{type:Object,default:function(){}}},data:function(){return{open:!1,show_password:!1,show_repeat_password:!1,first_name:null,last_name:null,company_name:null,telephone:null,contact_number:null,contact_name:null,email:null,status:null,location:null,password:null,repeat_password:null,status_items:[{id:1,text:"Active",value:"Active"},{id:2,text:"Inactive",value:"Inactive"}],telephone_is_valid:!1,defaultCountryCode:null}},watch:{dialog:function(t){this.open=t},open:function(t){this.$emit("update:dialog",t)},fieldsToEdit:{handler:function(t){this.isEditDialog&&this.update_fields(t)},deep:!0}},computed:{readyForSubmit:function(){return this.validation_passed()}},methods:{cancel:function(){this.open=!1},validation_passed:function(){return this.isEditDialog?this.telephone_is_valid&&this.telephone&&this.first_name&&this.last_name&&this.company_name&&this.email&&this.status&&this.contact_name:this.telephone_is_valid&&this.telephone&&this.password&&this.repeat_password&&this.first_name&&this.last_name&&this.company_name&&this.email&&this.status&&this.contact_name},save:function(){var t={first_name:this.first_name,last_name:this.last_name,company_name:this.company_name,telephone:this.telephone,contact_name:this.contact_name,email:this.email,status:this.status,location:this.location};if(!this.isEditDialog){if(this.password!==this.repeat_password)return this.$event.$emit("open_snackbar","Passwords don't match","error"),void this.$event.$emit("btnloading_off",!1);t.password=this.password,t.password_confirmation=this.repeat_password}this.$emit("save",t)},update_fields:function(t){var e=t.fields,i=Object.assign({},e);this.first_name=i.first_name,this.last_name=i.last_name,this.company_name=i.company.name||null,this.contact_name=i.company.others.contact_name||null,this.email=i.email,this.status=i.props.status||"Active",this.location=i.props.location||null,i.telephone?(this.contact_number=i.telephone.phoneNumber,this.defaultCountryCode=i.telephone.countryCode,this.telephone_is_valid=!0):(this.contact_number=null,this.defaultCountryCode=null)},clear_and_close:function(){this.first_name=this.last_name=this.company_name=this.location=this.contact_name="",this.telephone=null,this.email=this.status=this.password=this.repeat_password="",this.telephone_is_valid=!1,this.cancel()},showUpdate:function(t){this.telephone_is_valid=t.isValid,this.telephone=t.isValid?t:null},telephone_on_blur:function(){this.telephone_is_valid||this.$event.$emit("open_snackbar","Invalid Phone format","error")}}},l=s,r=(i("a7e7"),i("2877")),d=Object(r["a"])(l,a,n,!1,null,"5ce24438",null);e["a"]=d.exports},"8c6e":function(t,e,i){},a7e7:function(t,e,i){"use strict";var a=i("daf7"),n=i.n(a);n.a},daf7:function(t,e,i){}}]);
//# sourceMappingURL=chunk-52554d09.4fd453ed.js.map