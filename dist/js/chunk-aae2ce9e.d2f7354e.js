(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aae2ce9e"],{"0edc5":function(t,e,n){},"0ede":function(t,e,n){},"174f":function(t,e,n){},"18a2":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"milestone"},[n("milestone-dialog",{ref:"add_dialog",attrs:{dialog:t.add_dialog,dialogTitle:"Add Milestone"},on:{"update:dialog":function(e){t.add_dialog=e},save:function(e){return t.add_item("add_new_milestone",e,t.dynamic_api)}}}),n("milestone-dialog",{ref:"edit_dialog",attrs:{dialog:t.edit_dialog,dialogTitle:"Edit Milestone","is-edit-dialog":t.edit_dialog,"fields-to-edit":t.edit_item},on:{"update:dialog":function(e){t.edit_dialog=e},save:function(e){return t.update_item("edit_milestone",e,t.dynamic_api)}}}),n("delete-dialog",{attrs:{"open-dialog":t.delete_dialog,title:"Delete Milestone","text-content":"Are you sure you want to delete this milestone?"},on:{"update:openDialog":function(e){t.delete_dialog=e},"update:open-dialog":function(e){t.delete_dialog=e},delete:function(e){return t.delete_item("delete_milestone",t.dynamic_api)}}}),n("v-layout",[n("v-flex",{attrs:{xs12:""}},[n("VueTable",{key:t.componentKey,attrs:{items:t.items,headers:t.headers,showRowActions:!0,title:t.template_name,loading:t.loading,noMoreData:t.noMoreData},on:{"load-more":t.load_more,"delete-selected":function(e){return t.open_bulk_delete_dialog(e)}},scopedSlots:t._u([{key:"row-slot",fn:function(e){var i=e.item;return[n("td",{staticClass:"text-xs-left text-cap clickable-td",on:{click:function(e){return t.navigate_to_milestone_page(i)}}},[t._v(" "+t._s(t._f("ucwords")(i.title))+" ")]),n("td",{staticClass:"text-xs-left text-cap"},[t._v(t._s(i.status))]),n("td",{staticClass:"text-xs-left"},[t._v(t._s(0===i.days?"":i.days))]),n("Actions",{attrs:{item:i,permissions:t.$_permissions.get("hq_milestones")},on:{edit:function(e){return t.open_edit_dialog(i)},delete:function(e){return t.open_delete_dialog(i)},view:function(e){return t.navigate_to_milestone_page(i)}}})]}},{key:"empty-slot",fn:function(){return[n("v-btn",{attrs:{dark:"",color:"#3b589e"},on:{click:function(e){t.add_dialog=!0}}},[n("v-icon",{attrs:{left:""}},[t._v("add")]),t._v(" Add Milestone")],1)]},proxy:!0}])},[n("template",{slot:"header-toolbar"},[n("table-header",{on:{click:function(e){t.add_dialog=!0}}})],1)],2)],1)],1)],1)},a=[],o=(n("7f7f"),n("c5f6"),n("e06e")),s=n("0ebe"),l=n("ee09"),d=n("5b70"),c=n("29d6"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("custom-dialog",{ref:"dialog",attrs:{title:t.dialogTitle,open:t.open,"button2-text":"Save"},on:{"update:open":function(e){t.open=e},button1:t.cancel,button2:t.save}},[n("template",{slot:"content"},[n("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{label:"Milestone Title",filled:"",counter:"",maxlength:"30"},model:{value:t.title,callback:function(e){t.title="string"===typeof e?e.trim():e},expression:"title"}}),n("v-select",{staticClass:"dialog__selectfield d-field",attrs:{label:"Status",items:["Active","Inactive"],filled:"","hide-details":""},model:{value:t.status,callback:function(e){t.status="string"===typeof e?e.trim():e},expression:"status"}}),n("v-checkbox",{staticClass:"mx-2",attrs:{label:"No Specific Days"},model:{value:t.disabled,callback:function(e){t.disabled=e},expression:"disabled"}}),n("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{label:"Days",type:"number",filled:"","hide-details":"",disabled:t.disabled},model:{value:t.days,callback:function(e){t.days=t._n(e)},expression:"days"}})],1)],2)},u=[],_=n("57e5"),f={name:"MilestoneDialog",components:{CustomDialog:_["a"]},props:{dialog:Boolean,dialogTitle:String,isEditDialog:Boolean,fieldsToEdit:{type:Object,default:function(){}}},data:function(){return{open:!1,title:null,status:null,days_init_value:1,disabled:!1}},computed:{days:{get:function(){return this.days_init_value},set:function(t){parseInt(t)<1?this.days_init_value=1:this.days_init_value=t}}},watch:{dialog:function(t){this.open=t},open:function(t){this.$emit("update:dialog",t)},fieldsToEdit:{handler:function(t){this.isEditDialog&&this.update_fields(t)},deep:!0}},methods:{cancel:function(){this.open=!1},save:function(){var t={title:this.title,status:this.status,days:this.disabled?0:this.days};this.$emit("save",t),console.log(t)},update_fields:function(t){var e=t.fields,n=Object.assign({},e);this.title=n.title,this.status=n.status,this.days=this.disabled?0:n.days,console.log(n)},clear_and_close:function(){Object.assign(this.$data,this.$options.data.apply(this)),this.cancel()}}},p=f,m=(n("8d15"),n("2877")),v=Object(m["a"])(p,r,u,!1,null,"e40a40d8",null),g=v.exports,h=n("d4e9"),b={name:"Milestone",mixins:[o["a"]],components:{VueTable:s["a"],MilestoneDialog:g,DeleteDialog:d["a"],TableHeader:c["a"],Actions:l["a"]},props:{id:[Number,String]},data:function(){return{template_name:"",paths:[{text:"Dashboard",disabled:!1,router_name:"default-content"},{text:"Templates",disabled:!1,router_name:"templates"},{text:"Milestones",disabled:!0,router_name:null}],headers:[{text:"Title",value:"title"},{text:"Status",value:"status"},{text:"Days",value:"days"},{text:"Action",value:"action",align:"center"}],table_config:{route_name:"templates/milestone",add_message:"New Milestone added successfully!",update_message:"Milestone updated successfully!",delete_message:"Milestone deleted successfully!"}}},computed:{dynamic_api:function(){return"api/template/".concat(this.id,"/milestone")}},created:function(){var t=this;this.fill_table_via_url(this.dynamic_api),h["a"].get_milestones("api/template/".concat(this.id)).then((function(e){var n=e.data;return t.template_name=n.name})).finally((function(){return t.loading=!1}))},mounted:function(){this.$event.$emit("path-change",this.paths)},methods:{navigate_to_milestone_page:function(t){this.$router.push({name:"templates/milestone/task",params:{milestone_id:t.id,template_id:this.id}})},load_more:function(){this.load_more_via_url(this.dynamic_api)}}},y=b,x=(n("5034"),Object(m["a"])(y,i,a,!1,null,"ec3fe9c0",null));e["default"]=x.exports},"259d":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"breadcrumb-wrapper"},[n("v-breadcrumbs",{attrs:{items:t.paths},scopedSlots:t._u([{key:"item",fn:function(e){var i=e.item;return[n("v-breadcrumbs-item",{staticClass:"page__title",attrs:{disabled:i.disabled}},[n("span",{on:{click:function(e){return t.navigate_from_breadcrumb(i)}}},[t._v(" "+t._s(i.text)+" ")])])]}}])},[n("v-icon",{attrs:{slot:"divider"},slot:"divider"},[t._v("chevron_right")])],1),t._t("extra")],2)},a=[],o={name:"Breadcrumb",props:{paths:{type:Array,default:function(){return[]}}},methods:{navigate_from_breadcrumb:function(t){if(t.hasOwnProperty("path"))t.path&&this.$router.push({path:t.path});else{var e=t.router_name;e&&this.$router.push({name:e})}}}},s=o,l=(n("5e17"),n("79a2"),n("2877")),d=Object(l["a"])(s,i,a,!1,null,"3cda09ee",null);e["a"]=d.exports},"29d6":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-header"},[t.noButton?t._e():n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[n("v-icon",t._g(t._b({staticClass:"add__btn ml-2",attrs:{fab:""},on:{click:function(e){return t.$emit("click")}}},"v-icon",a,!1),i),[t._v("add_circle_outline")])]}}],null,!1,3582261780)},[n("span",[t._v("Create new")])]),t.noSortButton?t._e():n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[n("v-icon",t._g(t._b({staticClass:"add__btn ml-2",attrs:{fab:""},on:{click:function(e){return t.$emit("click-sort-by")}}},"v-icon",a,!1),i),[t._v("sort")])]}}],null,!1,1131913180)},[n("span",[t._v("Sort")])]),t.noListButton?t._e():n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[n("v-icon",t._g(t._b({staticClass:"add__btn ml-2",attrs:{fab:""},on:{click:function(e){return t.$emit("click-list-view")}}},"v-icon",a,!1),i),[t._v("mdi-view-sequential")])]}}],null,!1,2595836396)},[n("span",[t._v("List view")])]),t.noGridButton?t._e():n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[n("v-icon",t._g(t._b({staticClass:"add__btn ml-2",attrs:{fab:""},on:{click:function(e){return t.$emit("click-grid-view")}}},"v-icon",a,!1),i),[t._v("mdi-view-module")])]}}],null,!1,2166390469)},[n("span",[t._v("Grid view")])]),t._t("form-btn")],2)},a=[],o=n("259d"),s={name:"TableHeader",props:{noButton:{type:Boolean,default:!1},noListButton:{type:Boolean,default:!0},noGridButton:{type:Boolean,default:!0},noSortButton:{type:Boolean,default:!0}},data:function(){return{fab:!0}},components:{Breadcrumb:o["a"]}},l=s,d=(n("61fb"),n("2877")),c=Object(d["a"])(l,i,a,!1,null,"8b875e6a",null);e["a"]=c.exports},5034:function(t,e,n){"use strict";var i=n("84b2"),a=n.n(i);a.a},"57e5":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"justify-center":""}},[n("v-dialog",{attrs:{persistent:"","max-width":t.maxWidth,scrollable:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.loading?n("v-progress-linear",{attrs:{slot:"progress",color:"blue",indeterminate:""},slot:"progress"}):n("v-card",{staticClass:"custom__dialog"},[n("div",{staticClass:"dialog__header"},[t._t("entire-header",[t._t("title",[n("h3",{staticClass:"dialog__title"},[t._v(t._s(t.title))])]),t._t("extra-buttons"),t._t("cancel-icon",[n("v-btn",{staticClass:"close__dialog",attrs:{fab:"",small:"",depressed:""},on:{click:t.close_dialog}},[n("v-icon",[t._v("close")])],1)])]),t._t("below-title")],2),n("v-card-text",{staticClass:"dialog__body"},[t._t("content",[n("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t.hasFooter?n("v-card-actions",{staticClass:"dialog__actions"},[t._t("entire-actions",[t._t("extras"),t._t("button1",[n("v-btn",{attrs:{disabled:t.btnloading},on:{click:t.button1clicked}},[t._v(t._s(t.button1Text))])]),t._t("button2",[n("v-btn",{attrs:{loading:t.btnloading,disabled:t.mainBtnDisabled},on:{click:t.button2clicked}},[t._v(t._s(t.button2Text))])])])],2):t._e()],1)],1)],1)},a=[],o=(n("c5f6"),{props:{title:{type:String,default:""},content:{type:String,default:""},button1Text:{type:String,default:"Cancel"},button2Text:{type:String,default:"Delete"},open:Boolean,value:Boolean,mainBtnDisabled:{type:Boolean,default:!1},hasFooter:{type:Boolean,default:!0},maxWidth:{type:[Number,String],default:"600px"}},data:function(){return{dialog:!1,loading:!1,btnloading:!1}},mounted:function(){var t=this;this.$event.$on("btnloading_off",(function(e){t.btnloading=!1}))},watch:{value:{handler:function(t){this.dialog=t},immediate:!0},open:function(t){this.dialog=t,this.btnloading=!1},dialog:function(t){this.$emit("update:open",t),this.$emit("input",t)}},methods:{button1clicked:function(){this.$emit("button1"),this.close_dialog()},button2clicked:function(){this.btnloading=!0,this.$emit("button2")},open_dialog:function(){this.dialog=!0},close_dialog:function(){this.dialog=!1,this.btnloading=!1,this.$emit("click:close",!0)},clear_and_close:function(){Object.assign(this.$data,this.$options.data.apply(this)),this.close_dialog()},activate_loading:function(){this.loading=!0},disable_loading:function(){this.loading=!1}}}),s=o,l=(n("f436"),n("5882"),n("2877")),d=Object(l["a"])(s,i,a,!1,null,"17401548",null);e["a"]=d.exports},5882:function(t,e,n){"use strict";var i=n("5c1e"),a=n.n(i);a.a},"5b70":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("custom-dialog",{attrs:{title:t.title,content:t.textContent,"button1-text":t.cancelButtonText,"button2-text":t.deleteButtonText,open:t.open},on:{"update:open":function(e){t.open=e},button1:t.cancel_clicked,button2:t.delete_clicked},scopedSlots:t._u([{key:"content",fn:function(){return[n("v-alert",{staticClass:"my-4",attrs:{outlined:"",type:"warning",prominent:""}},[n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"grow",domProps:{innerHTML:t._s(t.textContent)}})],1)],1)]},proxy:!0}])})],1)},a=[],o=n("57e5"),s={components:{CustomDialog:o["a"]},props:{title:{type:String,default:"Default Modal Title"},textContent:{type:String,default:"Default Modal Text Content"},cancelButtonText:{type:String,default:"Cancel"},deleteButtonText:{type:String,default:"Yes, Delete"},openDialog:Boolean},data:function(){return{open:!1}},watch:{openDialog:function(t){this.open=t},open:function(t){this.$emit("update:openDialog",t)}},methods:{cancel_clicked:function(){this.open=!1},delete_clicked:function(){this.$emit("delete")},showDialog:function(){this.open=!0},closeDialog:function(){this.open=!1}}},l=s,d=n("2877"),c=Object(d["a"])(l,i,a,!1,null,null,null);e["a"]=c.exports},"5c1e":function(t,e,n){},"5e17":function(t,e,n){"use strict";var i=n("8c6e"),a=n.n(i);a.a},"60ef":function(t,e,n){},"61fb":function(t,e,n){"use strict";var i=n("0ede"),a=n.n(i);a.a},"79a2":function(t,e,n){"use strict";var i=n("0edc5"),a=n.n(i);a.a},"7e7e":function(t,e,n){"use strict";var i=n("174f"),a=n.n(i);a.a},"84b2":function(t,e,n){},"8c6e":function(t,e,n){},"8d15":function(t,e,n){"use strict";var i=n("60ef"),a=n.n(i);a.a},b709:function(t,e,n){},ee09:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{staticClass:"table-actions",attrs:{align:"center"}},[t.hasEdit?n("v-tooltip",{directives:[{name:"show",rawName:"v-show",value:t.can_edit,expression:"can_edit"}],attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("v-btn",t._g({attrs:{dense:"",dense:"",icon:""},on:{click:function(e){return t.handle_action("edit")}}},i),[n("v-icon",{attrs:{small:""}},[t._v(t._s(t.editIcon))])],1)]}}],null,!1,2293778615)},[n("span",[t._v("Edit")])]):t._e(),t.hasDelete?n("v-tooltip",{directives:[{name:"show",rawName:"v-show",value:t.can_delete,expression:"can_delete"}],attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("v-btn",t._g({attrs:{dense:"",icon:""},on:{click:function(e){return t.handle_action("delete")}}},i),[n("v-icon",{attrs:{small:""}},[t._v(t._s(t.deleteIcon))])],1)]}}],null,!1,1335204600)},[n("span",[t._v("Delete")])]):t._e(),t.hasView?n("v-tooltip",{directives:[{name:"show",rawName:"v-show",value:t.can_view,expression:"can_view"}],attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("v-btn",t._g({attrs:{dense:"",icon:""},on:{click:function(e){return t.handle_action("view")}}},i),[n("v-icon",{attrs:{small:""}},[t._v(t._s(t.viewIcon))])],1)]}}],null,!1,3967608504)},[n("span",[t._v("View")])]):t._e(),t._t("extra")],2)},a=[],o={props:{item:{type:Object,default:null},permissions:{type:Object,default:function(){return{delete:!0,update:!0,create:!0,view:!0}}},editIcon:{type:String,default:"mdi-content-save-edit"},viewIcon:{type:String,default:"mdi-file-search"},deleteIcon:{type:String,default:"mdi-delete-alert"},hasDelete:{type:Boolean,default:!0},hasEdit:{type:Boolean,default:!0},hasView:{type:Boolean,default:!0}},computed:{logged_user:function(){return this.$store.getters.user}},methods:{handle_action:function(t){this.item&&this.$emit(t,this.item)},can_delete:function(){return!!this.logged_user.is_admin||this.permissions&&this.permissions.delete},can_edit:function(){return!!this.logged_user.is_admin||this.permissions&&this.permissions.update},can_view:function(){return!!this.logged_user.is_admin||this.permissions&&this.permissions.view}}},s=o,l=(n("7e7e"),n("2877")),d=Object(l["a"])(s,i,a,!1,null,null,null);e["a"]=d.exports},f436:function(t,e,n){"use strict";var i=n("b709"),a=n.n(i);a.a}}]);
//# sourceMappingURL=chunk-aae2ce9e.d2f7354e.js.map