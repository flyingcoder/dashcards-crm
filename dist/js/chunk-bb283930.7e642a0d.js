(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bb283930"],{"0edc5":function(t,e,a){},"174f":function(t,e,a){},"259d":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"breadcrumb-wrapper"},[a("v-breadcrumbs",{attrs:{items:t.paths},scopedSlots:t._u([{key:"item",fn:function(e){var i=e.item;return[a("v-breadcrumbs-item",{staticClass:"page__title",attrs:{disabled:i.disabled}},[a("span",{on:{click:function(e){return t.navigate_from_breadcrumb(i)}}},[t._v(" "+t._s(i.text)+" ")])])]}}])},[a("v-icon",{attrs:{slot:"divider"},slot:"divider"},[t._v("chevron_right")])],1),t._t("extra")],2)},n=[],o={name:"Breadcrumb",props:{paths:{type:Array,default:function(){return[]}}},methods:{navigate_from_breadcrumb:function(t){if(t.hasOwnProperty("path"))t.path&&this.$router.push({path:t.path});else{var e=t.router_name;e&&this.$router.push({name:e})}}}},s=o,l=(a("5e17"),a("79a2"),a("2877")),r=Object(l["a"])(s,i,n,!1,null,"3cda09ee",null);e["a"]=r.exports},"29d6":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{staticClass:"table-header",attrs:{wrap:""}},[a("breadcrumb",{attrs:{paths:t.paths}}),a("v-flex",[t.noButton?t._e():a("v-btn",{staticClass:"add__btn mr-2",attrs:{fab:"",small:"",dark:"",color:"#3b589e"},on:{click:function(e){return t.$emit("click")}}},[a("v-icon",[t._v("add")])],1),t.noSortButton?t._e():a("v-btn",{staticClass:"add__btn mr-2",attrs:{fab:"",small:"",dark:"",color:"#3b589e"},on:{click:function(e){return t.$emit("click-sort-by")}}},[a("v-icon",[t._v("sort")])],1),t.noListButton?t._e():a("v-btn",{staticClass:"add__btn mr-2",attrs:{fab:"",small:"",dark:"",color:"#3b589e"},on:{click:function(e){return t.$emit("click-list-view")}}},[a("v-icon",[t._v("list")])],1),t.noGridButton?t._e():a("v-btn",{staticClass:"add__btn mr-2",attrs:{fab:"",small:"",dark:"",color:"#3b589e"},on:{click:function(e){return t.$emit("click-grid-view")}}},[a("v-icon",[t._v("mdi-view-dashboard")])],1),t._t("form-btn")],2)],1)},n=[],o=a("259d"),s={name:"TableHeader",props:{paths:{type:Array,default:[]},noButton:{type:Boolean,default:!1},noListButton:{type:Boolean,default:!0},noGridButton:{type:Boolean,default:!0},noSortButton:{type:Boolean,default:!0}},data:function(){return{fab:!0}},components:{Breadcrumb:o["a"]}},l=s,r=(a("337a"),a("2877")),d=Object(r["a"])(l,i,n,!1,null,"b8bfd1cc",null);e["a"]=d.exports},"337a":function(t,e,a){"use strict";var i=a("9e25"),n=a.n(i);n.a},3791:function(t,e,a){"use strict";var i=a("e1e6"),n=a.n(i);n.a},"3a5c":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"clients"},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("table-header",{attrs:{paths:t.paths},on:{click:function(e){t.add_dialog=!0}}})],1)],1),a("clients-table",{attrs:{dialog:t.add_dialog},on:{"update:dialog":function(e){t.add_dialog=e}}})],1)},n=[],o=a("259d"),s=a("29d6"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"clients-table"},[a("clients-dialog",{ref:"add_dialog",attrs:{dialog:t.add_dialog,dialogTitle:"Add New Client"},on:{"update:dialog":function(e){t.add_dialog=e},save:function(e){return t.add_item("add_new_client",e)}}}),a("clients-dialog",{ref:"edit_dialog",attrs:{dialog:t.edit_dialog,dialogTitle:"Edit Client","is-edit-dialog":t.edit_dialog,"fields-to-edit":t.edit_item},on:{"update:dialog":function(e){t.edit_dialog=e},save:function(e){return t.update_item("update_client",e)}}}),a("delete-dialog",{attrs:{"open-dialog":t.delete_dialog,title:"Delete Client","text-content":"Are you sure you want to delete this client?"},on:{"update:openDialog":function(e){t.delete_dialog=e},"update:open-dialog":function(e){t.delete_dialog=e},delete:function(e){return t.delete_item("delete_client")}}}),a("delete-dialog",{attrs:{"open-dialog":t.bulk_delete_dialog,title:"Delete Clients","text-content":"Are you sure you want to delete these clients? This can't be undone."},on:{"update:openDialog":function(e){t.bulk_delete_dialog=e},"update:open-dialog":function(e){t.bulk_delete_dialog=e},delete:function(e){return t.bulk_delete("bulk_delete_clients")}}}),a("VueTable",{key:t.componentKey,attrs:{items:t.items,headers:t.headers,showRowActions:!0,icon:"people_outline",loading:t.loading,title:"Clients",noMoreData:t.noMoreData,showSelect:!0},on:{"load-more":t.load_more,"delete-selected":function(e){return t.open_bulk_delete_dialog(e)}},scopedSlots:t._u([{key:"row-slot",fn:function(e){var i=e.item;return[a("td",{staticClass:"clickable-td"},[a("Avatar",{attrs:{user:i,iconOnly:""}},[t._v(" "+t._s(i.company_name)+" ")])],1),a("td",[t._v(t._s(i.telephone?i.telephone.formatInternational:""))]),a("td",[t._v(t._s(i.email))]),a("td",[t._v(t._s(i.status))]),a("Actions",{attrs:{item:i,permissions:t.$_permissions.get("clients")},on:{delete:function(e){return t.open_delete_dialog(i)},edit:function(e){return t.open_edit_dialog(i)},view:function(e){return t.navigate_to_view_profile(i.id)}}})]}},{key:"empty-slot",fn:function(){return[a("v-btn",{attrs:{dark:"",color:"#3b589e"},on:{click:function(e){t.add_dialog=!0}}},[t._v("Add Client")])]},proxy:!0}])})],1)},r=[],d=(a("ac6a"),a("a481"),a("e06e")),c=a("1be9"),u=a("0ebe"),p=a("7f40"),f=a("5b70"),_=a("ee09"),m={name:"ClientsVueTable",mixins:[d["a"]],components:{VueTable:u["a"],ClientsDialog:p["a"],DeleteDialog:f["a"],Actions:_["a"]},props:{dialog:Boolean},data:function(){return{headers:[{text:"Business Name",align:"left",value:"company_name"},{text:"Contact No.",value:"contact"},{text:"Email",value:"email"},{text:"Status",value:"status"},{text:"Action",value:"actions",sortable:!1,align:"center",width:"140px"}],table_config:{route_name:"clients",add_message:"New Client added successfully!",update_message:"Client updated successfully!",delete_message:"Client deleted successfully!",refresh_table_message:"Table refreshed",refresh_table_api_name:"paginate_clients_table"}}},filters:{phoneDisplayForm:function(t){return t.replace(/(\d{3})(\d{3})(\d{4})/,"($1) $2 $3")}},watch:{dialog:function(t){this.add_dialog=t},add_dialog:function(t){this.$emit("update:dialog",t)}},created:function(){this.loadClients()},methods:{navigate_to_view_profile:function(t){this.$router.push("/dashboard/clients/profile/".concat(t))},loadClients:function(){var t=this;this.loading=!0,c["a"].get("api/clients?page=1").then((function(e){var a=e.data;t.items=a.data,t.pagination.current=a.current_page,t.pagination.total=a.last_page,t.hasMoreData()})).finally((function(){t.loading=!1,t.$event.$emit("btnloading_off",!1)}))},load_more:function(){var t=this;c["a"].get("api/clients?page=".concat(this.pagination.current+1)).then((function(e){var a=e.data;a.data.forEach((function(e){t.items.push(e)})),t.pagination.current=a.current_page,t.pagination.total=a.last_page,t.hasMoreData()})).finally((function(){t.loading=!1,t.$event.$emit("btnloading_off",!1)}))}}},h=m,v=(a("3791"),a("2877")),g=Object(v["a"])(h,l,r,!1,null,"320cdef0",null),b=g.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{transition:"dialog-bottom-transition","max-width":t.modalWidth,scrollable:"",persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("v-spacer"),a("v-icon",{on:{click:t.closeDialog}},[t._v("close")])],1),a("v-divider"),a("v-card-text",{staticClass:"pa-0",staticStyle:{height:"auto"}},[t.allowed_display.length>0?a("v-carousel",{attrs:{cycle:"",height:"400","hide-delimiter-background":"","show-arrows-on-hover":"","hide-delimiters":"","show-arrows":t.showArrows,"show-arrows-on-hover":t.showArrows}},t._l(t.allowed_display,(function(e,i){return a("v-carousel-item",{key:i,attrs:{"reverse-transition":"fade-transition",transition:"fade-transition",continuous:!1}},[a("v-sheet",{attrs:{height:"100%"}},[a("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[a("div",{staticClass:"display-3"},["project.files.images"===e.collection_name?a("v-card",{scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)},[a("img",{attrs:{src:e.public_url}})]):"project.files.links"===e.collection_name?a("div",{ref:"iframe_video",refInFor:!0,domProps:{innerHTML:t._s(e.custom_properties.embed)}}):"project.files.videos"===e.collection_name?a("video-player",{ref:"videoPlayer",refInFor:!0,staticClass:"video-player-box",attrs:{options:{muted:!1,autoplay:!1,language:"en",playbackRates:[.7,1,1.5,2],sources:[{type:e.mime_type,src:e.public_url}],controls:!0,fluid:!0},playsinline:!0}}):t._e()],1)])],1)],1)})),1):a("Empty",{attrs:{headline:"No viewable items"}})],1)],1)],1)},y=[],x=(a("6762"),a("c5f6"),a("4752")),C={name:"Viewer",components:{Empty:x["a"]},props:{modalWidth:{type:Number,default:800},modalHeight:{type:Number,default:600},media:[Array]},data:function(){return{dialog:!1,btnloading:!1,overlay:!1}},mounted:function(){this.overlay=!0},created:function(){},computed:{showArrows:function(){return this.allowed_display.length>1},allowed_display:function(){var t=["project.files.videos","project.files.images","project.files.links"],e=this.media.filter((function(e){return t.includes(e.collection_name)}));return e.filter((function(t){return!("project.files.links"===t.collection_name&&!t.custom_properties.embed)}))}},methods:{closeAllIframe:function(){var t=document.getElementsByTagName("iframe");if(null!=t)for(var e=0;e<t.length;e++)t[e].src=t[e].src},openDialog:function(){this.dialog=!0},closeDialog:function(){this.closeAllIframe(),this.dialog=!1}}},k=C,$=(a("4a32"),Object(v["a"])(k,w,y,!1,null,"09313c29",null)),D=$.exports,B={name:"Clients",components:{Breadcrumb:o["a"],ClientsTable:b,TableHeader:s["a"],Viewer:D},data:function(){return{paths:[{text:"Dashboard",disabled:!1,router_name:"default-content"},{text:"Clients",disabled:!0,router_name:null}],add_dialog:!1}}},T=B,E=(a("c4ba"),Object(v["a"])(T,i,n,!1,null,"13d7a8a9",null));e["default"]=E.exports},"3d27":function(t,e,a){},"43d6":function(t,e,a){},"4a32":function(t,e,a){"use strict";var i=a("e3d1"),n=a.n(i);n.a},"57e5":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{"justify-center":""}},[a("v-dialog",{attrs:{persistent:"","max-width":t.maxWidth},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.loading?a("v-progress-linear",{attrs:{slot:"progress",color:"blue",indeterminate:""},slot:"progress"}):a("v-card",{staticClass:"custom__dialog",attrs:{tile:""}},[a("v-card-title",{staticClass:"dialog__header"},[t._t("entire-header",[t._t("title",[a("span",{staticClass:"dialog__title"},[t._v(t._s(t.title))])]),t._t("cancel-icon",[a("v-btn",{staticClass:"close__dialog",attrs:{fab:"",small:"",depressed:""},on:{click:t.close_dialog}},[a("v-icon",[t._v("close")])],1)])])],2),a("v-card-text",{staticClass:"dialog__body"},[t._t("content",[a("div",{domProps:{innerHTML:t._s(t.content)}})])],2),a("v-card-actions",{staticClass:"dialog__actions"},[t._t("entire-actions",[t._t("extras"),t._t("button1",[a("v-btn",{attrs:{disabled:t.btnloading},on:{click:t.button1clicked}},[t._v(t._s(t.button1Text))])]),t._t("button2",[a("v-btn",{attrs:{loading:t.btnloading,disabled:t.mainBtnDisabled},on:{click:t.button2clicked}},[t._v(t._s(t.button2Text))])])])],2)],1)],1)],1)},n=[],o=(a("c5f6"),{props:{title:{type:String,default:"Default Modal Title"},content:{type:String,default:"Default Modal Text Content"},button1Text:{type:String,default:"Cancel"},button2Text:{type:String,default:"Delete"},open:Boolean,value:Boolean,mainBtnDisabled:{type:Boolean,default:!1},maxWidth:{type:[Number,String],default:"600px"}},data:function(){return{dialog:!1,loading:!1,btnloading:!1}},mounted:function(){var t=this;this.$event.$on("btnloading_off",(function(e){t.btnloading=!1}))},watch:{value:{handler:function(t){this.dialog=t},immediate:!0},open:function(t){this.dialog=t,this.btnloading=!1},dialog:function(t){this.$emit("update:open",t),this.$emit("input",t)}},methods:{button1clicked:function(){this.$emit("button1"),this.close_dialog()},button2clicked:function(){this.btnloading=!0,this.$emit("button2")},open_dialog:function(){this.dialog=!0},close_dialog:function(){this.dialog=!1,this.btnloading=!1},clear_and_close:function(){Object.assign(this.$data,this.$options.data.apply(this)),this.close_dialog()},activate_loading:function(){this.loading=!0},disable_loading:function(){this.loading=!1}}}),s=o,l=(a("731a"),a("dd8e"),a("2877")),r=Object(l["a"])(s,i,n,!1,null,"37eed48a",null);e["a"]=r.exports},"5b70":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("custom-dialog",{attrs:{title:t.title,content:t.textContent,"button1-text":t.cancelButtonText,"button2-text":t.deleteButtonText,open:t.open},on:{"update:open":function(e){t.open=e},button1:t.cancel_clicked,button2:t.delete_clicked},scopedSlots:t._u([{key:"content",fn:function(){return[a("v-alert",{attrs:{prominent:"",type:"warning"}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"grow",domProps:{innerHTML:t._s(t.textContent)}})],1)],1)]},proxy:!0}])})],1)},n=[],o=a("57e5"),s={components:{CustomDialog:o["a"]},props:{title:{type:String,default:"Default Modal Title"},textContent:{type:String,default:"Default Modal Text Content"},cancelButtonText:{type:String,default:"Cancel"},deleteButtonText:{type:String,default:"Yes, Delete"},openDialog:Boolean},data:function(){return{open:!1}},watch:{openDialog:function(t){this.open=t},open:function(t){this.$emit("update:openDialog",t)}},methods:{cancel_clicked:function(){this.open=!1},delete_clicked:function(){this.$emit("delete")},showDialog:function(){this.open=!0},closeDialog:function(){this.open=!1}}},l=s,r=a("2877"),d=Object(r["a"])(l,i,n,!1,null,null,null);e["a"]=d.exports},"5e17":function(t,e,a){"use strict";var i=a("8c6e"),n=a.n(i);n.a},"731a":function(t,e,a){"use strict";var i=a("9dcc"),n=a.n(i);n.a},"79a2":function(t,e,a){"use strict";var i=a("0edc5"),n=a.n(i);n.a},"7e7e":function(t,e,a){"use strict";var i=a("174f"),n=a.n(i);n.a},"7f40":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("custom-dialog",{ref:"dialog",attrs:{title:t.dialogTitle,open:t.open,"button2-text":"Save",mainBtnDisabled:!t.readyForSubmit},on:{"update:open":function(e){t.open=e},button1:t.cancel,button2:t.save}},[a("template",{slot:"content"},[a("v-layout",{staticClass:"clients__dialog",attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{label:"Business Name",filled:"","hide-details":"",color:"#657186"},model:{value:t.company_name,callback:function(e){t.company_name="string"===typeof e?e.trim():e},expression:"company_name"}})],1),a("v-flex",{attrs:{xs12:""}},[a("p",{staticClass:"owner"},[t._v("Owner's Fullname")])]),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{label:"First Name",filled:"","hide-details":"",color:"#657186"},model:{value:t.first_name,callback:function(e){t.first_name="string"===typeof e?e.trim():e},expression:"first_name"}})],1),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{label:"Last Name",filled:"","hide-details":"",color:"#657186"},model:{value:t.last_name,callback:function(e){t.last_name="string"===typeof e?e.trim():e},expression:"last_name"}})],1),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{label:"Contact Name",filled:"","hide-details":"",color:"#657186"},model:{value:t.contact_name,callback:function(e){t.contact_name="string"===typeof e?e.trim():e},expression:"contact_name"}})],1),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{label:"Location",filled:"","hide-details":"",color:"#657186"},model:{value:t.location,callback:function(e){t.location="string"===typeof e?e.trim():e},expression:"location"}})],1),a("v-flex",{attrs:{xs12:"",sm12:""}},[a("vue-phone-number-input",{staticClass:"dialog__textfield d-field",attrs:{size:"lg",required:"",clearable:"","show-code-on-list":"","default-country-code":t.defaultCountryCode},on:{update:t.showUpdate,"phone-number-blur":t.telephone_on_blur},model:{value:t.contact_number,callback:function(e){t.contact_number=e},expression:"contact_number"}})],1),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{staticClass:"dialog__email d-field",attrs:{label:"Contact Email",filled:"","hide-details":"",color:"#657186"},model:{value:t.email,callback:function(e){t.email="string"===typeof e?e.trim():e},expression:"email"}})],1),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-select",{staticClass:"dialog__selectfield d-field",attrs:{label:"Status",items:t.status_items,filled:"","hide-details":"",color:"#657186"},model:{value:t.status,callback:function(e){t.status="string"===typeof e?e.trim():e},expression:"status"}})],1),t.isEditDialog?t._e():a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{staticClass:"dialog__password d-field",attrs:{"append-icon":t.show_password?"visibility_off":"visibility",type:t.show_password?"text":"password",label:"Password",filled:"","hide-details":"",color:"#657186"},on:{"click:append":function(e){t.show_password=!t.show_password}},model:{value:t.password,callback:function(e){t.password="string"===typeof e?e.trim():e},expression:"password"}})],1),t.isEditDialog?t._e():a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{staticClass:"dialog__password d-field",attrs:{"append-icon":t.show_repeat_password?"visibility_off":"visibility",type:t.show_repeat_password?"text":"password",label:"Repeat Password",filled:"","hide-details":"",color:"#657186"},on:{"click:append":function(e){t.show_repeat_password=!t.show_repeat_password}},model:{value:t.repeat_password,callback:function(e){t.repeat_password="string"===typeof e?e.trim():e},expression:"repeat_password"}})],1)],1)],1)],2)},n=[],o=a("57e5"),s={name:"ClientsDialog",components:{CustomDialog:o["a"]},props:{dialog:Boolean,dialogTitle:String,isEditDialog:Boolean,fieldsToEdit:{type:Object,default:function(){}}},data:function(){return{open:!1,show_password:!1,show_repeat_password:!1,first_name:null,last_name:null,company_name:null,telephone:null,contact_number:null,contact_name:null,email:null,status:null,location:null,password:null,repeat_password:null,status_items:[{id:1,text:"Active",value:"Active"},{id:2,text:"Inactive",value:"Inactive"}],telephone_is_valid:!1,defaultCountryCode:null}},watch:{dialog:function(t){this.open=t},open:function(t){this.$emit("update:dialog",t)},fieldsToEdit:{handler:function(t){this.isEditDialog&&this.update_fields(t)},deep:!0}},computed:{readyForSubmit:function(){return this.validation_passed()}},methods:{cancel:function(){this.open=!1},validation_passed:function(){return this.isEditDialog?this.telephone_is_valid&&this.telephone&&this.first_name&&this.last_name&&this.company_name&&this.email&&this.status&&this.contact_name:this.telephone_is_valid&&this.telephone&&this.password&&this.repeat_password&&this.first_name&&this.last_name&&this.company_name&&this.email&&this.status&&this.contact_name},save:function(){var t={first_name:this.first_name,last_name:this.last_name,company_name:this.company_name,telephone:this.telephone,contact_name:this.contact_name,email:this.email,status:this.status,location:this.location};if(!this.isEditDialog){if(this.password!==this.repeat_password)return this.$event.$emit("open_snackbar","Passwords don't match","error"),void this.$event.$emit("btnloading_off",!1);t.password=this.password,t.password_confirmation=this.repeat_password}this.$emit("save",t)},update_fields:function(t){var e=t.fields,a=Object.assign({},e);this.first_name=a.first_name,this.last_name=a.last_name,this.company_name=a.company_name,this.contact_name=a.contact_name,this.email=a.email,this.status=a.status,this.location=a.location,a.telephone?(this.contact_number=a.telephone.phoneNumber,this.defaultCountryCode=a.telephone.countryCode,this.telephone_is_valid=!0):(this.contact_number=null,this.defaultCountryCode=null)},clear_and_close:function(){this.first_name=this.last_name=this.company_name=this.location=this.contact_name="",this.telephone=null,this.email=this.status=this.password=this.repeat_password="",this.telephone_is_valid=!1,this.cancel()},showUpdate:function(t){this.telephone_is_valid=t.isValid,this.telephone=t.isValid?t:null},telephone_on_blur:function(){this.telephone_is_valid||this.$event.$emit("open_snackbar","Invalid Phone format","error")}}},l=s,r=(a("ebb1"),a("2877")),d=Object(r["a"])(l,i,n,!1,null,"1884e8b0",null);e["a"]=d.exports},"8ab2":function(t,e,a){},"8c6e":function(t,e,a){},"9dcc":function(t,e,a){},"9e25":function(t,e,a){},c4ba:function(t,e,a){"use strict";var i=a("8ab2"),n=a.n(i);n.a},dd8e:function(t,e,a){"use strict";var i=a("43d6"),n=a.n(i);n.a},e1e6:function(t,e,a){},e3d1:function(t,e,a){},ebb1:function(t,e,a){"use strict";var i=a("3d27"),n=a.n(i);n.a},ee09:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",{staticClass:"table-actions",attrs:{align:"center"}},[t.hasEdit?a("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.can_edit,expression:"can_edit"}],attrs:{dense:"",dense:"",icon:""},on:{click:function(e){return t.handle_action("edit")}}},[a("v-icon",{attrs:{small:""}},[t._v(t._s(t.editIcon))])],1):t._e(),t.hasDelete?a("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.can_delete,expression:"can_delete"}],attrs:{dense:"",icon:""},on:{click:function(e){return t.handle_action("delete")}}},[a("v-icon",{attrs:{small:""}},[t._v(t._s(t.deleteIcon))])],1):t._e(),t.hasView?a("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.can_view,expression:"can_view"}],attrs:{dense:"",icon:""},on:{click:function(e){return t.handle_action("view")}}},[a("v-icon",{attrs:{small:""}},[t._v(t._s(t.viewIcon))])],1):t._e()],1)},n=[],o={props:{item:{type:Object,default:null},permissions:{type:Object,default:function(){return{delete:!0,update:!0,create:!0,view:!0}}},editIcon:{type:String,default:"mdi-pencil"},viewIcon:{type:String,default:"pageview"},deleteIcon:{type:String,default:"mdi-delete"},hasDelete:{type:Boolean,default:!0},hasEdit:{type:Boolean,default:!0},hasView:{type:Boolean,default:!0}},computed:{logged_user:function(){return this.$store.getters.user}},methods:{handle_action:function(t){this.item&&this.$emit(t,this.item)},can_delete:function(){return!!this.logged_user.is_admin||this.permissions&&this.permissions.delete},can_edit:function(){return!!this.logged_user.is_admin||this.permissions&&this.permissions.update},can_view:function(){return!!this.logged_user.is_admin||this.permissions&&this.permissions.view}}},s=o,l=(a("7e7e"),a("2877")),r=Object(l["a"])(s,i,n,!1,null,null,null);e["a"]=r.exports}}]);
//# sourceMappingURL=chunk-bb283930.7e642a0d.js.map