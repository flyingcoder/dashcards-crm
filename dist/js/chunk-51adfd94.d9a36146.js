(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51adfd94"],{"174f":function(e,t,i){},"5f77":function(e,t,i){},"7e7e":function(e,t,i){"use strict";var n=i("174f"),o=i.n(n);o.a},"851a":function(e,t,i){"use strict";var n=i("5f77"),o=i.n(n);o.a},a0e5:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"invoice"},[i("StepperInvoiceDialog",{ref:"invoiceEditDialog",attrs:{projectLock:!0,type:"edit"},on:{updated:e.invoice_updated}}),i("ViewInvoice",{ref:"view_invoice_dialog",attrs:{item:e.view_item}}),i("delete-dialog",{attrs:{"open-dialog":e.delete_dialog,title:"Delete Invoice","text-content":"Are you sure you want to delete this invoice?"},on:{"update:openDialog":function(t){e.delete_dialog=t},"update:open-dialog":function(t){e.delete_dialog=t},delete:e.delete_invoice}}),i("delete-dialog",{attrs:{"open-dialog":e.bulk_delete_dialog,title:"Delete Invoices","text-content":"Are you sure you want to delete these invoices? This can't be undone."},on:{"update:openDialog":function(t){e.bulk_delete_dialog=t},"update:open-dialog":function(t){e.bulk_delete_dialog=t},delete:function(t){return e.bulk_delete("bulk_delete_invoices")}}}),i("VueTable",{key:e.componentKey,attrs:{items:e.items,headers:e.headers,showRowActions:!0,icon:"mdi-alpha-i-box-outline",emptyText:"No invoice yet",loading:e.loading,title:e.tableTitle,noMoreData:e.noMoreData,showSelect:!1},on:{"load-more":e.getMoreInvoices,"delete-selected":function(t){return e.open_bulk_delete_dialog(t)}},scopedSlots:e._u([{key:"row-slot",fn:function(t){var n=t.item;return[i("td",[e._v(e._s(n.title))]),i("td",[i("Avatar",{attrs:{user:n.billed_to}})],1),i("td",[e._v(e._s(e._f("format")(n.due_date)))]),i("td",[e._v(e._s(e._f("money")(n.total_amount)))]),i("Actions",{attrs:{item:n,permissions:e.$_permissions.get("invoices")},on:{delete:function(t){return e.open_delete_dialog(n)},edit:function(t){return e.open_edit_dialog(n)},view:function(t){return e.open_view_dialog(n)}}})]}}])})],1)},o=[],a=(i("8e6e"),i("456d"),i("ac6a"),i("20d6"),i("96cf"),i("1da1")),r=i("ade3"),s=(i("c5f6"),i("1be9")),c={getInvoices:function(e,t){return s["a"].get("api/projects/".concat(e,"/invoice?page=").concat(t))},delete_invoice:function(e){return s["a"].delete("api/invoice/".concat(e))},update_invoice:function(e,t){return s["a"].post("api/invoice/".concat(t),e,{headers:{"Content-Type":"multipart/form-data"}})},get_all_projects:function(){return s["a"].get("api/projects?all=true")}},l=i("e06e"),d=i("2f62"),u=i("0644"),p=i.n(u),_=i("579d"),v=i("9107"),f=i("5b70"),h=i("0ebe"),g=i("ee09"),m=i("d7fe");function b(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function w(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?b(Object(i),!0).forEach((function(t){Object(r["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):b(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var y={name:"Invoice",mixins:[l["a"],_["a"]],components:{VueTable:h["a"],DeleteDialog:f["a"],ViewInvoice:v["a"],Actions:g["a"],StepperInvoiceDialog:m["a"]},props:{id:[Number,String]},data:function(){return{headers:[{text:"Invoice",value:"invoice"},{text:"Client",value:"client",width:120,sortable:!1},{text:"Due Date",value:"due_date",width:150},{text:"Amount",value:"amount",width:120},{text:"Actions",value:"action",width:150,align:"center",sortable:!1}],view_invoice_dialog:!1,view_item:null}},mounted:function(){this.$event.$emit("path-change",this.paths),this.loading=!0,this.fetch_data(),this.getInvoices()},computed:{type:function(){return this.$route.params.type||"project"},tableTitle:function(){return"project"===this.type?"Project Invoice":"Campaign Invoice"},paths:function(){return[{text:"Dashboard",disabled:!1,router_name:"default-content"},{text:this.type,disabled:!0,router_name:null},{text:"Invoice",disabled:!0,router_name:null}]}},methods:w(w({},Object(d["d"])("invoice",["set_dialog","set_toolbar","set_projects","open_invoice_for_editing","set_selected_project"])),{},{delete_invoice:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,this.delete_dialog=!1,e.next=4,c.delete_invoice(this.delete_item_id);case 4:this.loading=!1,t=this.items.findIndex((function(e){return e.id===i.delete_item_id})),~t&&this.items.splice(t,1);case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),open_view_dialog:function(e){this.view_item=e,this.$refs.view_invoice_dialog.open_dialog(e)},open_edit_dialog:function(e){this.set_toolbar({title:"Edit Dialog"}),this.open_invoice_for_editing(p()(e)),this.set_selected_project(e.project_id),this.set_dialog({type:"edit",open:!0}),this.$refs.invoiceEditDialog.openDialog()},fetch_data:function(){var e=this;c.get_all_projects().then((function(t){e.set_projects(t.data)}))},getInvoices:function(){var e=this;this.loading=!0,c.getInvoices(this.id,this.pagination.current).then((function(t){var i=t.data;e.items=i.data,e.pagination.current=i.current_page,e.pagination.total=i.last_page,e.hasMoreData()})).finally((function(){e.loading=!1,e.$event.$emit("btnloading_off",!1)}))},getMoreInvoices:function(){var e=this;this.loading=!0,c.getInvoices(this.id,this.pagination.current+1).then((function(t){var i=t.data;i.data.forEach((function(t){e.items.push(t)})),e.pagination.current=i.current_page,e.pagination.total=i.last_page,e.hasMoreData()})).finally((function(){e.loading=!1,e.$event.$emit("btnloading_off",!1)}))},invoice_updated:function(e){var t=this.items.findIndex((function(t){return t.id===e.id}));~t&&this.items.splice(t,1,e)}})},j=y,D=(i("de2e"),i("851a"),i("2877")),I=Object(D["a"])(j,n,o,!1,null,"718e4603",null);t["default"]=I.exports},d64b:function(e,t,i){},de2e:function(e,t,i){"use strict";var n=i("d64b"),o=i.n(n);o.a},ee09:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("td",{staticClass:"table-actions",attrs:{align:"center"}},[e.hasEdit?i("v-tooltip",{directives:[{name:"show",rawName:"v-show",value:e.can_edit,expression:"can_edit"}],attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[i("v-btn",e._g({attrs:{dense:"",icon:""},on:{click:function(t){return e.handle_action("edit")}}},n),[i("v-icon",[e._v(e._s(e.editIcon))])],1)]}}],null,!1,4170341451)},[i("span",[e._v("Edit")])]):e._e(),e.hasView?i("v-tooltip",{directives:[{name:"show",rawName:"v-show",value:e.can_view,expression:"can_view"}],attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[i("v-btn",e._g({attrs:{dense:"",icon:""},on:{click:function(t){return e.handle_action("view")}}},n),[i("v-icon",[e._v(e._s(e.viewIcon))])],1)]}}],null,!1,701816587)},[i("span",[e._v("View")])]):e._e(),e.hasDelete?i("v-tooltip",{directives:[{name:"show",rawName:"v-show",value:e.can_delete,expression:"can_delete"}],attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[i("v-btn",e._g({attrs:{dense:"",icon:""},on:{click:function(t){return e.handle_action("delete")}}},n),[i("v-icon",[e._v(e._s(e.deleteIcon))])],1)]}}],null,!1,4164065227)},[i("span",[e._v("Delete")])]):e._e(),e._t("extra")],2)},o=[],a={props:{item:{type:Object,default:null},permissions:{type:Object,default:function(){return{delete:!0,update:!0,create:!0,view:!0}}},editIcon:{type:String,default:"mdi-circle-edit-outline"},viewIcon:{type:String,default:"mdi-eye-circle-outline"},deleteIcon:{type:String,default:"mdi-delete-circle-outline"},hasDelete:{type:Boolean,default:!0},hasEdit:{type:Boolean,default:!0},hasView:{type:Boolean,default:!0}},computed:{logged_user:function(){return this.$store.getters.user}},methods:{handle_action:function(e){this.item&&this.$emit(e,this.item)},can_delete:function(){return!!this.logged_user.is_admin||this.permissions&&this.permissions.delete},can_edit:function(){return!!this.logged_user.is_admin||this.permissions&&this.permissions.update},can_view:function(){return!!this.logged_user.is_admin||this.permissions&&this.permissions.view}}},r=a,s=(i("7e7e"),i("2877")),c=Object(s["a"])(r,n,o,!1,null,null,null);t["a"]=c.exports}}]);
//# sourceMappingURL=chunk-51adfd94.d9a36146.js.map