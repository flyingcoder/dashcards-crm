(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cf28bde"],{"104f":function(t,e,i){"use strict";var o=i("7cbc"),n=i.n(o);n.a},"386b":function(t,e,i){var o=i("5ca1"),n=i("79e5"),a=i("be13"),r=/"/g,s=function(t,e,i,o){var n=String(a(t)),s="<"+e;return""!==i&&(s+=" "+i+'="'+String(o).replace(r,"&quot;")+'"'),s+">"+n+"</"+e+">"};t.exports=function(t,e){var i={};i[t]=e(s),o(o.P+o.F*n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",i)}},"4ffa":function(t,e,i){"use strict";var o=i("8b70"),n=i.n(o);n.a},"57e5":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-layout",{attrs:{"justify-center":""}},[i("v-dialog",{attrs:{persistent:"","max-width":t.maxWidth,scrollable:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.loading?i("v-progress-linear",{attrs:{slot:"progress",color:"blue",indeterminate:""},slot:"progress"}):i("v-card",{staticClass:"custom__dialog"},[i("div",{staticClass:"dialog__header"},[t._t("entire-header",[t._t("title",[i("h3",{staticClass:"dialog__title"},[t._v(t._s(t.title))])]),t._t("extra-buttons"),t._t("cancel-icon",[i("v-btn",{staticClass:"close__dialog",attrs:{fab:"",small:"",depressed:""},on:{click:t.close_dialog}},[i("v-icon",[t._v("close")])],1)])]),t._t("below-title")],2),i("v-card-text",{staticClass:"dialog__body"},[t._t("content",[i("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t.hasFooter?i("v-card-actions",{staticClass:"dialog__actions"},[t._t("entire-actions",[t._t("extras"),t._t("button1",[i("v-btn",{attrs:{disabled:t.btnloading},on:{click:t.button1clicked}},[t._v(t._s(t.button1Text))])]),t._t("button2",[i("v-btn",{attrs:{loading:t.btnloading,disabled:t.mainBtnDisabled},on:{click:t.button2clicked}},[t._v(t._s(t.button2Text))])])])],2):t._e()],1)],1)],1)},n=[],a=(i("c5f6"),{props:{title:{type:String,default:""},content:{type:String,default:""},button1Text:{type:String,default:"Cancel"},button2Text:{type:String,default:"Delete"},open:Boolean,value:Boolean,mainBtnDisabled:{type:Boolean,default:!1},hasFooter:{type:Boolean,default:!0},maxWidth:{type:[Number,String],default:"600px"}},data:function(){return{dialog:!1,loading:!1,btnloading:!1}},mounted:function(){var t=this;this.$event.$on("btnloading_off",(function(e){t.btnloading=!1}))},watch:{value:{handler:function(t){this.dialog=t},immediate:!0},open:function(t){this.dialog=t,this.btnloading=!1},dialog:function(t){this.$emit("update:open",t),this.$emit("input",t)}},methods:{button1clicked:function(){this.$emit("button1"),this.close_dialog()},button2clicked:function(){this.btnloading=!0,this.$emit("button2")},open_dialog:function(){this.dialog=!0},close_dialog:function(){this.dialog=!1,this.btnloading=!1,this.$emit("click:close",!0)},clear_and_close:function(){Object.assign(this.$data,this.$options.data.apply(this)),this.close_dialog()},activate_loading:function(){this.loading=!0},disable_loading:function(){this.loading=!1}}}),r=a,s=(i("f436"),i("5882"),i("2877")),l=Object(s["a"])(r,o,n,!1,null,"17401548",null);e["a"]=l.exports},5882:function(t,e,i){"use strict";var o=i("5c1e"),n=i.n(o);n.a},"5b70":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("custom-dialog",{attrs:{title:t.title,content:t.textContent,"button1-text":t.cancelButtonText,"button2-text":t.deleteButtonText,open:t.open},on:{"update:open":function(e){t.open=e},button1:t.cancel_clicked,button2:t.delete_clicked},scopedSlots:t._u([{key:"content",fn:function(){return[i("v-alert",{staticClass:"my-4",attrs:{outlined:"",type:"warning",prominent:""}},[i("v-row",{attrs:{align:"center"}},[i("v-col",{staticClass:"grow",domProps:{innerHTML:t._s(t.textContent)}})],1)],1)]},proxy:!0}])})],1)},n=[],a=i("57e5"),r={components:{CustomDialog:a["a"]},props:{title:{type:String,default:"Default Modal Title"},textContent:{type:String,default:"Default Modal Text Content"},cancelButtonText:{type:String,default:"Cancel"},deleteButtonText:{type:String,default:"Yes, Delete"},openDialog:Boolean},data:function(){return{open:!1}},watch:{openDialog:function(t){this.open=t},open:function(t){this.$emit("update:openDialog",t)}},methods:{cancel_clicked:function(){this.open=!1},delete_clicked:function(){this.$emit("delete")},showDialog:function(){this.open=!0},closeDialog:function(){this.open=!1}}},s=r,l=i("2877"),c=Object(l["a"])(s,o,n,!1,null,null,null);e["a"]=c.exports},"5bb2":function(t,e,i){"use strict";var o=i("6455"),n=i.n(o);n.a},"5c1e":function(t,e,i){},6455:function(t,e,i){},"69be":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"reports__body"},[i("div",{staticClass:"reports-content"},[t.iframeSrc?i("div",{staticClass:"site-preview"},[i("vue-friendly-iframe",{attrs:{className:"iframe-vue",src:t.iframeSrc},on:{load:function(e){return t.$emit("iframe-loaded")}}})],1):i("Empty",{attrs:{icon:"mdi-link-off",headline:"No url found!"}})],1)])},n=[],a={props:{iframeSrc:String}},r=a,s=(i("4ffa"),i("6b21"),i("2877")),l=Object(s["a"])(r,o,n,!1,null,"e7bb317c",null);e["a"]=l.exports},"6b21":function(t,e,i){"use strict";var o=i("6dea6"),n=i.n(o);n.a},"6dea6":function(t,e,i){},"7cbc":function(t,e,i){},"881c":function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var o={computed:{is_screen_medium_and_down:function(){return this.$vuetify.breakpoint.mdAndDown}}}},"8b70":function(t,e,i){},b54a:function(t,e,i){"use strict";i("386b")("link",(function(t){return function(e){return t(this,"a","href",e)}}))},b709:function(t,e,i){},f436:function(t,e,i){"use strict";var o=i("b709"),n=i.n(o);n.a},fe8b:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",{staticClass:"reports__tab",attrs:{"no-gutters":""}},[i("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{indeterminate:!0}}),i("ReportsDialog",{ref:"dialog",attrs:{id:t.id},on:{"report-added":t.add_new_report}}),i("ReportsEditDialog",{ref:"editDialog",attrs:{id:t.id},on:{"report-updated":t.reportUpdated}}),i("DeleteDialog",{attrs:{"open-dialog":t.deleteDialog,title:"Delete Report","text-content":"Are you sure you want to delete this report?"},on:{"update:openDialog":function(e){t.deleteDialog=e},"update:open-dialog":function(e){t.deleteDialog=e},delete:t.deleteReport}}),t.has_permission&&t.reports.length?i("v-col",{attrs:{md:"12"}},[i("v-divider"),i("div",{staticClass:"reports-tab"},[i("v-tabs",{attrs:{grow:"",height:"50px","show-arrows":t.is_screen_medium_and_down,dense:"",centered:""},model:{value:t.active_report,callback:function(e){t.active_report=e},expression:"active_report"}},[t._l(t.reports,(function(e,o){return i("v-tab",{key:o},[i("img",{staticClass:"tab-img mr-2",attrs:{src:t.getIconFromUrl(e)}}),t._v(" "+t._s(e.title)+" ")])})),t.reports.length<=2?i("v-tab",{staticClass:"reports-tab",on:{click:t.open_dialog}},[i("v-icon",{staticClass:"mr-2",attrs:{color:"#8090aa"}},[t._v("add")]),t._v(" Add Reports ")],1):t._e(),t.reports.length<=1?i("v-tab",{staticClass:"reports-tab",on:{click:t.open_dialog}},[i("v-icon",{staticClass:"mr-2",attrs:{color:"#8090aa"}},[t._v("add")]),t._v(" Add Reports ")],1):t._e(),t.reports.length<=0?i("v-tab",{staticClass:"reports-tab",on:{click:t.open_dialog}},[i("v-icon",{staticClass:"mr-2",attrs:{color:"#8090aa"}},[t._v("add")]),t._v(" Add Reports ")],1):t._e()],2),i("v-tabs-items",{staticClass:"reports-tab-content",model:{value:t.active_report,callback:function(e){t.active_report=e},expression:"active_report"}},t._l(t.reports,(function(e,o){return i("v-tab-item",{key:o},[i("v-card",{attrs:{flat:""}},[i("v-card-text",[i("div",{staticClass:"reports-actions"},[i("v-spacer"),i("v-icon",{on:{click:t.open_dialog}},[t._v("add_circle_outline")]),i("v-icon",{staticClass:"ml-1",on:{click:function(i){return t.openEditDialog(e,e.id)}}},[t._v("edit")]),i("v-icon",{staticClass:"ml-1",on:{click:function(i){return t.openDeleteDialog(e.id)}}},[t._v("delete")])],1),i("div",{staticClass:"reports-content"},[i("div",{staticClass:"site-preview"},[e.props&&e.props.canIframe?i("ReportsSection",{attrs:{iframeSrc:e.url},on:{"iframe-loaded":t.iframe_loaded}}):e.props&&e.props.image?i("v-card",{staticClass:"mx-auto",attrs:{flat:""}},[i("v-list-item",[i("v-list-item-content",[i("v-alert",{attrs:{prominent:"",type:"warning"}},[i("v-row",{attrs:{align:"center"}},[i("v-col",{staticClass:"grow"},[t._v("We are unable to load the site content because of the website restrictions.")]),i("v-col",{staticClass:"shrink"},[i("v-btn",{attrs:{href:e.url,target:"_blank"}},[t._v("Go to Site "),i("v-icon",{attrs:{right:""}},[t._v("mdi-arrow-right-bold")])],1)],1)],1)],1)],1)],1),i("v-img",{staticClass:"white--text align-end",attrs:{src:e.props.image}},[i("v-card-title",[t._v(t._s(e.props.title))])],1),i("v-card-subtitle",{staticClass:"pb-0 headline"},[t._v(t._s(e.props.title))]),i("v-card-text",{staticClass:"text--primary"},[i("div",{staticClass:"subtitle"},[t._v(t._s(e.props.description))])]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"orange",text:"",href:e.url,target:"_blank"}},[t._v(" Go to Site "),i("v-icon",{attrs:{right:""}},[t._v("mdi-arrow-right-bold")])],1)],1)],1):i("Empty",{attrs:{icon:"mdi-link-off",headline:""},scopedSlots:t._u([{key:"extra",fn:function(){return[i("v-alert",{attrs:{prominent:"",type:"warning"}},[i("v-row",{attrs:{align:"center"}},[i("v-col",{staticClass:"grow"},[t._v("We are unable to load the site content because of the website restrictions.")]),i("v-col",{staticClass:"shrink"},[i("v-btn",{attrs:{href:e.url,target:"_blank"}},[t._v("Go to Site "),i("v-icon",{attrs:{right:""}},[t._v("mdi-arrow-right-bold")])],1)],1)],1)],1)]},proxy:!0}],null,!0)})],1)])])],1)],1)})),1)],1)],1):i("v-col",{staticClass:"ma-0 pa-0",attrs:{md:"12",xs:"12"}},[i("div",{staticClass:"empty-wrapper"},[i("Empty",{attrs:{headline:"No reports yet",icon:"mdi-file-compare"},scopedSlots:t._u([{key:"extra",fn:function(){return[t.loading?t._e():i("v-btn",{attrs:{large:"",dark:"",color:"#3b589e"},on:{click:t.open_dialog}},[t._v("Add New Report ")])]},proxy:!0}])})],1)])],1)},n=[],a=(i("20d6"),i("c5f6"),i("d4e9")),r=i("1be9"),s={add_project_report:function(t,e){return r["a"].post("api/projects/".concat(t,"/report"),e)},updateProjectReport:function(t,e,i){return r["a"].put("api/projects/".concat(t,"/report/").concat(e),i)},deleteProjectReport:function(t,e){return r["a"].delete("api/projects/".concat(t,"/report/").concat(e))}},l=i("881c"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"reports-list"},[i("div",{staticClass:"reports-list-title"},[t._v("Reports List")]),i("div",{staticClass:"reports-content"},[i("v-row",{staticClass:"table-header"},[i("v-col",{staticClass:"reports-id",attrs:{xs:"3"}},[t._v("#")]),i("v-col",{staticClass:"reports-title",attrs:{xs:"9"}},[t._v("Title")])],1),t.loading?i("v-progress-linear",{attrs:{indeterminate:!0}}):t.loading||t.reports.length?i("div",{staticClass:"list-content"},t._l(t.reports,(function(e,o){return i("v-row",{key:e.id,staticClass:"report-item align-center",class:{active:t.activeReport&&t.activeReport.id===e.id},on:{click:function(e){return t.preview_row_url(o)}}},[i("v-col",{staticClass:"reports-id",attrs:{xs:"3"}},[t._v(t._s(o+1))]),i("v-col",{staticClass:"reports-title",attrs:{xs:"9"}},[t._v(t._s(e.title))]),i("v-btn",{attrs:{icon:""},on:{click:function(i){return i.stopPropagation(),t.actionClicked(e,o,"edit")}}},[i("v-icon",{attrs:{color:"indigo"}},[t._v("edit")])],1),i("v-btn",{attrs:{icon:""},on:{click:function(i){return i.stopPropagation(),t.actionClicked(e,o,"delete")}}},[t._v(" 󠁿󠁿󠁿"),i("span",{staticStyle:{"font-size":"20px"}},[t._v("🗙")])])],1)})),1):i("h3",{staticClass:"no-data"},[t._v("No Data")])],1)])},d=[],u={name:"ReportList",props:{loading:Boolean,reports:Array,activeReport:Object},created:function(){this.reports.length&&this.preview_row_url(0)},methods:{preview_row_url:function(t){this.$emit("row-clicked",this.reports[t])},actionClicked:function(t,e,i){this.$emit(i,{report:t,index:e})}}},p=u,_=(i("5bb2"),i("2877")),f=Object(_["a"])(p,c,d,!1,null,"a5093d0a",null),v=f.exports,g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("custom-dialog",{ref:"dialog",attrs:{title:"Add Link","button1-text":"Cancel"},on:{button1:t.close_dialog},scopedSlots:t._u([{key:"content",fn:function(){return[i("v-layout",{staticClass:"custom-dialog",attrs:{wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{label:"Title",filled:"",clearable:"","hide-details":"","prepend-icon":"text_fields",color:"#657186"},model:{value:t.title,callback:function(e){t.title="string"===typeof e?e.trim():e},expression:"title"}})],1),i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{staticClass:"dialog__link d-field",attrs:{pattern:"https://.*",type:"url","prepend-icon":"link",label:"https://",clearable:"",filled:"","hide-details":"",color:"#657186"},on:{keydown:t.validate_url},model:{value:t.link,callback:function(e){t.link="string"===typeof e?e.trim():e},expression:"link"}})],1)],1)]},proxy:!0}])},[i("template",{slot:"button2"},[i("v-btn",{attrs:{disabled:t.is_disabled},on:{click:t.on_dialog_save}},[t._v("Save")])],1)],2)},h=[],m=(i("b54a"),i("57e5")),b={components:{CustomDialog:m["a"]},props:{id:[Number,String]},data:function(){return{link:"",title:"",valid_url:!1}},computed:{is_disabled:function(){return!this.link||!this.valid_url||!this.title}},methods:{open_dialog:function(){this.$refs.dialog.open_dialog()},close_dialog:function(){this.$refs.dialog.close_dialog()},clear_and_close:function(){this.close_dialog(),Object.assign(this.$data,this.$options.data.apply(this))},validate_url:function(t){var e=this;this.$nextTick((function(){e.valid_url=t.target.validity.valid}))},on_dialog_save:function(){var t=this;this.$store.commit("set_custom_loader",!0),s.add_project_report(this.id,{url:this.link,title:this.title}).then((function(e){var i=e.data;t.$emit("report-added",i),t.clear_and_close()})).finally((function(){return t.$store.commit("set_custom_loader",!1)}))}}},x=b,k=Object(_["a"])(x,g,h,!1,null,null,null),C=k.exports,y=i("69be"),w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("custom-dialog",{ref:"dialog",attrs:{title:"Edit Link","button1-text":"Cancel"},on:{button1:t.close_dialog},scopedSlots:t._u([{key:"content",fn:function(){return[i("v-layout",{staticClass:"custom-dialog",attrs:{wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{label:"Title",filled:"",clearable:"","hide-details":"","prepend-icon":"text_fields",color:"#657186"},model:{value:t.title,callback:function(e){t.title="string"===typeof e?e.trim():e},expression:"title"}})],1),i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{staticClass:"dialog__link d-field",attrs:{pattern:"https://.*",type:"url","prepend-icon":"link",label:"https://",clearable:"",filled:"","hide-details":"",color:"#657186"},on:{keydown:t.validate_url},model:{value:t.link,callback:function(e){t.link="string"===typeof e?e.trim():e},expression:"link"}})],1)],1)]},proxy:!0}])},[i("template",{slot:"button2"},[i("v-btn",{attrs:{disabled:t.is_disabled},on:{click:t.on_dialog_save}},[t._v("Save")])],1)],2)},$=[],D={components:{CustomDialog:m["a"]},props:{id:[Number,String]},data:function(){return{link:"",title:"",valid_url:!1,reportId:null,reportIndex:null}},computed:{is_disabled:function(){return!this.link||!this.valid_url||!this.title}},methods:{open_dialog:function(t,e){var i=t.id,o=t.url,n=t.title;this.link=o,this.title=n,this.reportId=i,this.reportIndex=e,this.$refs.dialog.open_dialog(),this.valid_url=!0},close_dialog:function(){this.$refs.dialog.close_dialog()},clear_and_close:function(){this.close_dialog(),Object.assign(this.$data,this.$options.data.apply(this))},validate_url:function(t){var e=this;this.$nextTick((function(){e.valid_url=t.target.validity.valid}))},on_dialog_save:function(){var t=this;this.$store.commit("set_custom_loader",!0),s.updateProjectReport(this.id,this.reportId,{url:this.link,title:this.title}).then((function(e){var i=e.data;t.$emit("report-updated",{data:i,index:t.reportIndex}),t.clear_and_close()})).finally((function(){return t.$store.commit("set_custom_loader",!1)}))}}},S=D,R=Object(_["a"])(S,w,$,!1,null,null,null),j=R.exports,T=i("5b70"),E={name:"ReportsTab",mixins:[l["a"]],components:{ReportsList:v,ReportsDialog:C,ReportsSection:y["a"],ReportsEditDialog:j,DeleteDialog:T["a"]},props:{id:[Number,String]},data:function(){return{reports:[],loading:!1,iframe_loading:!0,iframe_src:null,activate_save:!1,active_report:null,reportIdToEdit:null,deleteDialog:!1,deleteReportId:null}},computed:{has_permission:function(){return!!this.$store.getters.user.is_admin||this.$_permissions.get("hq_reports")},type:function(){return this.$route.params.type||"project"},paths:function(){return[{text:"Dashboard",disabled:!1,router_name:"default-content"},{text:this.type,disabled:!0,router_name:null},{text:"Reports",disabled:!0,router_name:null}]}},mounted:function(){var t=this;this.$event.$emit("path-change",this.paths),this.loading=!0,a["a"].get_project_reports(this.id).then((function(e){var i=e.data;return t.reports=i.data})).finally((function(){return t.loading=!1}))},methods:{getIconFromUrl:function(t){var e=new URL(t.url).host;return"https://www.google.com/s2/favicons?domain=".concat(e,"&alt=link")},iframeLoaded:function(){this.iframe_loading=!1},open_dialog:function(){this.$refs.dialog.open_dialog()},add_new_report:function(t){this.reports.push(t),this.active_report=this.reports.length-1,this.$event.$emit("btnloading_off",!1)},preview_row_url:function(t){this.active_report=t,this.active_report&&(this.iframe_src=t.url)},openEditDialog:function(t,e){this.reportIdToEdit=t,this.$refs.editDialog.open_dialog(this.reportIdToEdit,e)},openDeleteDialog:function(t){this.deleteReportId=t,this.deleteDialog=!0},reportUpdated:function(t){var e=t.data,i=t.index,o=this.reports.findIndex((function(t){return t.id===e.id}));console.log(o,i),~o&&(this.reports.splice(o,1,e),this.active_report=o),this.$event.$emit("btnloading_off",!1)},deleteReport:function(){var t=this;this.$store.commit("set_custom_loader",!0),s.deleteProjectReport(this.id,this.deleteReportId).then((function(){var e=t.reports.findIndex((function(e){return e.id===t.deleteReportId}));~e&&(t.reports.splice(e,1),t.active_report=null,t.$event.$emit("open_snackbar","Report deleted successfully"))})).finally((function(){t.deleteDialog=!1,t.$event.$emit("btnloading_off",!1),t.$store.commit("set_custom_loader",!1)}))}}},I=E,B=(i("104f"),Object(_["a"])(I,o,n,!1,null,"c29dc09c",null));e["default"]=B.exports}}]);
//# sourceMappingURL=chunk-2cf28bde.1c73f4d5.js.map