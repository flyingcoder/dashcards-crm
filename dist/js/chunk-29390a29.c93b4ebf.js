(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29390a29"],{"386b":function(t,e,i){var o=i("5ca1"),a=i("79e5"),n=i("be13"),s=/"/g,r=function(t,e,i,o){var a=String(n(t)),r="<"+e;return""!==i&&(r+=" "+i+'="'+String(o).replace(s,"&quot;")+'"'),r+">"+a+"</"+e+">"};t.exports=function(t,e){var i={};i[t]=e(r),o(o.P+o.F*a((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",i)}},4752:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"empty my-1",attrs:{id:t.slug}},[i("div",{staticClass:"empty-content"},[i("div",{staticClass:"center-wrapper"},[i("div",{staticClass:"empty-svg"},[i("svg",{attrs:{viewBox:"0 0 250 250"}},[i("path",{attrs:{d:"M37 11l176 0c11,0 20,4 26,11 7,6 11,16 11,26l0 154c0,10 -4,19 -11,26 -2,2 -4,3 -6,5 -17,13 -33,1 -48,-11 -10,-7 -19,-14 -26,-11 -5,2 -9,7 -12,13 -12,18 -31,17 -46,4 -5,-5 -11,-10 -16,-11 -6,-1 -12,4 -19,9 -11,8 -23,17 -39,11 -6,-1 -12,-5 -16,-9 -7,-7 -11,-16 -11,-26l0 -154c0,-10 4,-20 11,-26 6,-7 15,-11 26,-11zm22 108c8,0 15,7 15,15 0,8 -7,15 -15,15 -8,0 -15,-7 -15,-15 0,-8 7,-15 15,-15zm0 -56c8,0 15,7 15,15 0,8 -7,15 -15,15 -8,0 -15,-7 -15,-15 0,-8 7,-15 15,-15zm44 24c-4,0 -7,-4 -7,-8 0,-4 3,-7 7,-7l96 0c4,0 7,3 7,7 0,4 -3,8 -7,8l-96 0zm0 56c-4,0 -7,-4 -7,-8 0,-4 3,-7 7,-7l96 0c4,0 7,3 7,7 0,4 -3,8 -7,8l-96 0zm129 70c2,-3 3,-7 3,-11l0 -154c0,-6 -2,-12 -6,-16 -4,-4 -10,-6 -16,-6l-176 0c-6,0 -12,2 -16,6 -4,4 -6,10 -6,16l0 154c0,6 2,11 6,15 1,2 3,3 4,3 13,8 23,1 32,-6 9,-7 18,-13 30,-12 10,2 17,8 24,15 8,7 17,8 24,-1 4,-8 9,-15 19,-19 14,-6 27,3 39,13 13,10 26,20 39,3z"}})])]),i("div",{staticClass:"empty-text"},[i("p",[t._v(t._s(t.headline))]),t._t("extra")],2)])])])},a=[],n={name:"Empty",props:{slug:{type:String,default:"empty-sample"},headline:{type:String,default:"No data yet"}}},s=n,r=(i("c925"),i("9d6a"),i("2877")),l=Object(r["a"])(s,o,a,!1,null,"61ae9426",null);e["a"]=l.exports},"529f":function(t,e,i){},"57e5":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-layout",{attrs:{"justify-center":""}},[i("v-dialog",{attrs:{persistent:"","max-width":t.maxWidth},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.loading?i("v-progress-linear",{attrs:{slot:"progress",color:"blue",indeterminate:""},slot:"progress"}):i("v-card",{staticClass:"custom__dialog"},[i("div",{staticClass:"dialog__header"},[t._t("entire-header",[t._t("title",[i("h3",{staticClass:"dialog__title"},[t._v(t._s(t.title))])]),t._t("extra-buttons"),t._t("cancel-icon",[i("v-btn",{staticClass:"close__dialog",attrs:{fab:"",small:"",depressed:""},on:{click:t.close_dialog}},[i("v-icon",[t._v("close")])],1)])]),t._t("below-title")],2),i("v-card-text",{staticClass:"dialog__body"},[t._t("content",[i("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t.hasFooter?i("v-card-actions",{staticClass:"dialog__actions"},[t._t("entire-actions",[t._t("extras"),t._t("button1",[i("v-btn",{attrs:{disabled:t.btnloading},on:{click:t.button1clicked}},[t._v(t._s(t.button1Text))])]),t._t("button2",[i("v-btn",{attrs:{loading:t.btnloading,disabled:t.mainBtnDisabled},on:{click:t.button2clicked}},[t._v(t._s(t.button2Text))])])])],2):t._e()],1)],1)],1)},a=[],n=(i("c5f6"),{props:{title:{type:String,default:""},content:{type:String,default:""},button1Text:{type:String,default:"Cancel"},button2Text:{type:String,default:"Delete"},open:Boolean,value:Boolean,mainBtnDisabled:{type:Boolean,default:!1},hasFooter:{type:Boolean,default:!0},maxWidth:{type:[Number,String],default:"600px"}},data:function(){return{dialog:!1,loading:!1,btnloading:!1}},mounted:function(){var t=this;this.$event.$on("btnloading_off",(function(e){t.btnloading=!1}))},watch:{value:{handler:function(t){this.dialog=t},immediate:!0},open:function(t){this.dialog=t,this.btnloading=!1},dialog:function(t){this.$emit("update:open",t),this.$emit("input",t)}},methods:{button1clicked:function(){this.$emit("button1"),this.close_dialog()},button2clicked:function(){this.btnloading=!0,this.$emit("button2")},open_dialog:function(){this.dialog=!0},close_dialog:function(){this.dialog=!1,this.btnloading=!1,this.$emit("click:close",!0)},clear_and_close:function(){Object.assign(this.$data,this.$options.data.apply(this)),this.close_dialog()},activate_loading:function(){this.loading=!0},disable_loading:function(){this.loading=!1}}}),s=n,r=(i("ced6"),i("5a30"),i("2877")),l=Object(r["a"])(s,o,a,!1,null,"d7f4ccc6",null);e["a"]=l.exports},"5a30":function(t,e,i){"use strict";var o=i("d0eb"),a=i.n(o);a.a},"5b70":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("custom-dialog",{attrs:{title:t.title,content:t.textContent,"button1-text":t.cancelButtonText,"button2-text":t.deleteButtonText,open:t.open},on:{"update:open":function(e){t.open=e},button1:t.cancel_clicked,button2:t.delete_clicked},scopedSlots:t._u([{key:"content",fn:function(){return[i("v-alert",{staticClass:"my-4",attrs:{outlined:"",type:"warning",prominent:""}},[i("v-row",{attrs:{align:"center"}},[i("v-col",{staticClass:"grow",domProps:{innerHTML:t._s(t.textContent)}})],1)],1)]},proxy:!0}])})],1)},a=[],n=i("57e5"),s={components:{CustomDialog:n["a"]},props:{title:{type:String,default:"Default Modal Title"},textContent:{type:String,default:"Default Modal Text Content"},cancelButtonText:{type:String,default:"Cancel"},deleteButtonText:{type:String,default:"Yes, Delete"},openDialog:Boolean},data:function(){return{open:!1}},watch:{openDialog:function(t){this.open=t},open:function(t){this.$emit("update:openDialog",t)}},methods:{cancel_clicked:function(){this.open=!1},delete_clicked:function(){this.$emit("delete")},showDialog:function(){this.open=!0},closeDialog:function(){this.open=!1}}},r=s,l=i("2877"),c=Object(l["a"])(r,o,a,!1,null,null,null);e["a"]=c.exports},"5d4e":function(t,e,i){"use strict";var o=i("a7aa"),a=i.n(o);a.a},"673d":function(t,e,i){t.exports=i.p+"img/mini-blue.f6b58691.png"},"6b70":function(t,e,i){},"881c":function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var o={computed:{is_screen_medium_and_down:function(){return this.$vuetify.breakpoint.mdAndDown}}}},"9d6a":function(t,e,i){"use strict";var o=i("529f"),a=i.n(o);a.a},"9e12":function(t,e,i){"use strict";var o=i("e800"),a=i.n(o);a.a},a7aa:function(t,e,i){},b54a:function(t,e,i){"use strict";i("386b")("link",(function(t){return function(e){return t(this,"a","href",e)}}))},b8fa:function(t,e,i){},c925:function(t,e,i){"use strict";var o=i("6b70"),a=i.n(o);a.a},ced6:function(t,e,i){"use strict";var o=i("b8fa"),a=i.n(o);a.a},d0eb:function(t,e,i){},e800:function(t,e,i){},ed98:function(t,e,i){"use strict";var o=i("f4d8"),a=i.n(o);a.a},f4d8:function(t,e,i){},fe8b:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-row",{staticClass:"reports__tab",attrs:{"no-gutters":""}},[o("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{indeterminate:!0}}),o("ReportsDialog",{ref:"dialog",attrs:{id:t.id},on:{"report-added":t.add_new_report}}),o("ReportsEditDialog",{ref:"editDialog",attrs:{id:t.reportIdToEdit},on:{"report-updated":t.reportUpdated}}),o("DeleteDialog",{attrs:{"open-dialog":t.deleteDialog,title:"Delete Report","text-content":"Are you sure you want to delete this report?"},on:{"update:openDialog":function(e){t.deleteDialog=e},"update:open-dialog":function(e){t.deleteDialog=e},delete:t.deleteReport}}),t.has_permission&&t.reports.length?o("v-col",{attrs:{md:"12"}},[o("v-divider"),o("div",{staticClass:"reports-tab"},[o("v-tabs",{attrs:{grow:"",height:"50px","show-arrows":t.is_screen_medium_and_down,dense:"",centered:""},model:{value:t.active_report,callback:function(e){t.active_report=e},expression:"active_report"}},[t._l(t.reports,(function(e){return o("v-tab",{key:e.title},[o("img",{staticClass:"tab-img mr-2",attrs:{src:i("673d")}}),t._v(" "+t._s(e.title)+" ")])})),t.reports.length<=2?o("v-tab",{staticClass:"reports-tab",on:{click:t.open_dialog}},[o("v-icon",{staticClass:"mr-2",attrs:{color:"#8090aa"}},[t._v("add")]),t._v(" Add Reports ")],1):t._e(),t.reports.length<=1?o("v-tab",{staticClass:"reports-tab",on:{click:t.open_dialog}},[o("v-icon",{staticClass:"mr-2",attrs:{color:"#8090aa"}},[t._v("add")]),t._v(" Add Reports ")],1):t._e(),t.reports.length<=0?o("v-tab",{staticClass:"reports-tab",on:{click:t.open_dialog}},[o("v-icon",{staticClass:"mr-2",attrs:{color:"#8090aa"}},[t._v("add")]),t._v(" Add Reports ")],1):t._e()],2),o("v-tabs-items",{staticClass:"reports-tab-content",model:{value:t.active_report,callback:function(e){t.active_report=e},expression:"active_report"}},t._l(t.reports,(function(e){return o("v-tab-item",{key:e.title},[o("v-card",[o("v-card-text",[o("div",{staticClass:"reports-actions"},[o("v-spacer"),o("v-btn",{attrs:{color:"#3b589e",small:"",dark:"",fab:""},on:{click:t.open_dialog}},[o("v-icon",[t._v("add")])],1),o("v-btn",{staticClass:"ml-1",attrs:{color:"#3b589e",small:"",dark:"",fab:""},on:{click:function(i){return t.openEditDialog(e,e.id)}}},[o("v-icon",[t._v("edit")])],1),o("v-btn",{staticClass:"ml-1",attrs:{color:"#3b589e",small:"",dark:"",fab:""},on:{click:function(i){return t.openDeleteDialog(e.id)}}},[o("v-icon",[t._v("delete")])],1)],1),o("div",{staticClass:"reports-content"},[o("div",{staticClass:"site-preview"},[o("ReportsSection",{attrs:{iframe_src:e.url},on:{"iframe-loaded":t.iframeLoaded}})],1)])])],1)],1)})),1)],1)],1):o("v-col",{staticClass:"ma-0 pa-0",attrs:{md:"12",xs:"12"}},[o("Empty",{attrs:{headline:"No reports yet"},scopedSlots:t._u([{key:"extra",fn:function(){return[o("v-btn",{attrs:{large:"",dark:"",color:"#3b589e"},on:{click:t.open_dialog}},[t._v("Add New Report ")])]},proxy:!0}])})],1)],1)},a=[],n=(i("20d6"),i("c5f6"),i("d4e9")),s=i("1be9"),r={add_project_report:function(t,e){return s["a"].post("api/projects/".concat(t,"/report"),e)},updateProjectReport:function(t,e,i){return s["a"].put("api/projects/".concat(t,"/report/").concat(e),i)},deleteProjectReport:function(t,e){return s["a"].delete("api/projects/".concat(t,"/report/").concat(e))}},l=i("881c"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"reports-list"},[i("div",{staticClass:"reports-list-title"},[t._v("Reports List")]),i("div",{staticClass:"reports-content"},[i("v-layout",{staticClass:"table-header"},[i("v-flex",{staticClass:"reports-id",attrs:{xs3:""}},[t._v("#")]),i("v-flex",{staticClass:"reports-title",attrs:{xs9:""}},[t._v("Title")])],1),t.loading?i("v-progress-linear",{attrs:{indeterminate:!0}}):t.loading||t.reports.length?i("div",{staticClass:"list-content"},t._l(t.reports,(function(e,o){return i("v-layout",{key:e.id,staticClass:"report-item align-center",class:{active:t.activeReport&&t.activeReport.id===e.id},on:{click:function(e){return t.preview_row_url(o)}}},[i("v-flex",{staticClass:"reports-id",attrs:{xs3:""}},[t._v(t._s(o+1))]),i("v-flex",{staticClass:"reports-title",attrs:{xs9:""}},[t._v(t._s(e.title))]),i("v-btn",{attrs:{icon:""},on:{click:function(i){return i.stopPropagation(),t.actionClicked(e,o,"edit")}}},[i("v-icon",{attrs:{color:"indigo"}},[t._v("edit")])],1),i("v-btn",{attrs:{icon:""},on:{click:function(i){return i.stopPropagation(),t.actionClicked(e,o,"delete")}}},[t._v(" 󠁿󠁿󠁿"),i("span",{staticStyle:{"font-size":"20px"}},[t._v("🗙")])])],1)})),1):i("h3",{staticClass:"no-data"},[t._v("No Data")])],1)])},d=[],u={props:{loading:Boolean,reports:Array,activeReport:Object},created:function(){this.reports.length&&this.preview_row_url(0)},methods:{preview_row_url:function(t){this.$emit("row-clicked",this.reports[t])},actionClicked:function(t,e,i){this.$emit(i,{report:t,index:e})}}},p=u,f=(i("9e12"),i("2877")),_=Object(f["a"])(p,c,d,!1,null,"70cc7e7d",null),v=_.exports,g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("custom-dialog",{ref:"dialog",attrs:{title:"Add Link","button1-text":"Cancel"},on:{button1:t.close_dialog},scopedSlots:t._u([{key:"content",fn:function(){return[i("v-layout",{staticClass:"custom-dialog",attrs:{wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{label:"Title",filled:"",clearable:"","hide-details":"","prepend-icon":"text_fields",color:"#657186"},model:{value:t.title,callback:function(e){t.title="string"===typeof e?e.trim():e},expression:"title"}})],1),i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{staticClass:"dialog__link d-field",attrs:{pattern:"https://.*",type:"url","prepend-icon":"link",label:"https://",clearable:"",filled:"","hide-details":"",color:"#657186"},on:{keydown:t.validate_url},model:{value:t.link,callback:function(e){t.link="string"===typeof e?e.trim():e},expression:"link"}})],1)],1)]},proxy:!0}])},[i("template",{slot:"button2"},[i("v-btn",{attrs:{disabled:t.is_disabled},on:{click:t.on_dialog_save}},[t._v("Save")])],1)],2)},h=[],m=(i("b54a"),i("57e5")),b={components:{CustomDialog:m["a"]},props:{id:[Number,String]},data:function(){return{link:"",title:"",valid_url:!1}},computed:{is_disabled:function(){return!this.link||!this.valid_url||!this.title}},methods:{open_dialog:function(){this.$refs.dialog.open_dialog()},close_dialog:function(){this.$refs.dialog.close_dialog()},clear_and_close:function(){this.close_dialog(),Object.assign(this.$data,this.$options.data.apply(this))},validate_url:function(t){var e=this;this.$nextTick((function(){e.valid_url=t.target.validity.valid}))},on_dialog_save:function(){var t=this;this.$store.commit("set_custom_loader",!0),r.add_project_report(this.id,{url:this.link,title:this.title}).then((function(e){var i=e.data;t.$emit("report-added",i),t.clear_and_close()})).finally((function(){return t.$store.commit("set_custom_loader",!1)}))}}},x=b,k=Object(f["a"])(x,g,h,!1,null,null,null),y=k.exports,C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"reports__body"},[t.loaded?t._e():i("v-progress-linear",{attrs:{indeterminate:!0}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}],staticClass:"reports-content"},[t.iframe_src?i("div",{staticClass:"site-preview"},[i("iframe",{staticStyle:{"min-height":"100vh"},attrs:{src:t.iframe_src,frameborder:"0",width:"100%"},on:{load:t.load,error:t.error}})]):t._e()]),i("Empty",{directives:[{name:"show",rawName:"v-show",value:t.hasError,expression:"hasError"}],attrs:{headline:"Unable to fetch contents!"},scopedSlots:t._u([{key:"extra",fn:function(){return[i("v-btn",{attrs:{color:"primary",href:t.iframe_src,target:"_blank"}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-link")]),t._v(" Follow Link?")],1)]},proxy:!0}])})],1)},w=[],$=i("4752"),D={props:{iframe_src:String},components:{Empty:$["a"]},data:function(){return{loaded:!1,hasError:!1}},methods:{load:function(){this.loaded=!0},error:function(t){this.loaded=!0,hasError=!0,console.log(t)}}},S=D,R=(i("5d4e"),Object(f["a"])(S,C,w,!1,null,"a3966460",null)),E=R.exports,j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("custom-dialog",{ref:"dialog",attrs:{title:"Edit Link","button1-text":"Cancel"},on:{button1:t.close_dialog},scopedSlots:t._u([{key:"content",fn:function(){return[i("v-layout",{staticClass:"custom-dialog",attrs:{wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{staticClass:"dialog__link d-field",attrs:{pattern:"https://.*",type:"url","prepend-icon":"link",label:"https://",clearable:"",filled:"","hide-details":"",color:"#657186"},on:{keydown:t.validate_url},model:{value:t.link,callback:function(e){t.link="string"===typeof e?e.trim():e},expression:"link"}})],1),i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{label:"Title",filled:"",clearable:"","hide-details":"","prepend-icon":"text_fields",color:"#657186"},model:{value:t.title,callback:function(e){t.title="string"===typeof e?e.trim():e},expression:"title"}})],1)],1)]},proxy:!0}])},[i("template",{slot:"button2"},[i("v-btn",{attrs:{disabled:t.is_disabled},on:{click:t.on_dialog_save}},[t._v("Save")])],1)],2)},T=[],I={components:{CustomDialog:m["a"]},props:{id:[Number,String]},data:function(){return{link:"",title:"",valid_url:!1,reportId:null,reportIndex:null}},computed:{is_disabled:function(){return!this.link||!this.valid_url||!this.title}},methods:{open_dialog:function(t,e){var i=t.id,o=t.url,a=t.title;this.link=o,this.title=a,this.reportId=i,this.reportIndex=e,this.$refs.dialog.open_dialog(),this.valid_url=!0},close_dialog:function(){this.$refs.dialog.close_dialog()},clear_and_close:function(){this.close_dialog(),Object.assign(this.$data,this.$options.data.apply(this))},validate_url:function(t){var e=this;this.$nextTick((function(){e.valid_url=t.target.validity.valid}))},on_dialog_save:function(){var t=this;this.$store.commit("set_custom_loader",!0),r.updateProjectReport(this.id,this.reportId,{url:this.link,title:this.title}).then((function(e){var i=e.data;t.$emit("report-updated",{data:i,index:t.reportIndex}),t.clear_and_close()})).finally((function(){return t.$store.commit("set_custom_loader",!1)}))}}},B=I,O=Object(f["a"])(B,j,T,!1,null,null,null),N=O.exports,L=i("5b70"),P={name:"ReportsTab",mixins:[l["a"]],components:{ReportsList:v,ReportsDialog:y,ReportsSection:E,ReportsEditDialog:N,DeleteDialog:L["a"],Empty:$["a"]},props:{id:[Number,String]},data:function(){return{reports:[],loading:!1,iframe_loading:!0,iframe_src:null,activate_save:!1,active_report:null,reportIdToEdit:null,deleteDialog:!1,deleteReportId:null}},computed:{has_permission:function(){return!!this.$store.getters.user.is_admin||this.$_permissions.get("hq_reports")}},created:function(){var t=this;this.loading=!0,n["a"].get_project_reports(this.id).then((function(e){var i=e.data;return t.reports=i.data})).finally((function(){return t.loading=!1}))},methods:{iframeLoaded:function(){this.iframe_loading=!1},open_dialog:function(){this.$refs.dialog.open_dialog()},add_new_report:function(t){this.reports.push(t),this.preview_row_url(t),this.$event.$emit("btnloading_off",!1)},preview_row_url:function(t){this.active_report=t,this.active_report&&(this.iframe_src=t.url)},openEditDialog:function(t,e){this.active_report=t,this.reportIdToEdit=e,~e&&this.$refs.editDialog.open_dialog(this.active_report,e)},openDeleteDialog:function(t){this.deleteReportId=t,this.deleteDialog=!0},reportUpdated:function(t){var e=t.data,i=t.index;this.$set(this.reports,i,e),this.active_report=e,this.$event.$emit("btnloading_off",!1)},deleteReport:function(){var t=this;this.$store.commit("set_custom_loader",!0),r.deleteProjectReport(this.id,this.deleteReportId).then((function(){var e=t.reports.findIndex((function(e){return e.id===t.deleteReportId}));~e&&(t.reports.splice(e,1),t.active_report=null,t.$event.$emit("open_snackbar","Report deleted successfully"))})).finally((function(){t.deleteDialog=!1,t.$event.$emit("btnloading_off",!1),t.$store.commit("set_custom_loader",!1)}))}}},A=P,z=(i("ed98"),Object(f["a"])(A,o,a,!1,null,"e48fe2b4",null));e["default"]=z.exports}}]);
//# sourceMappingURL=chunk-29390a29.c93b4ebf.js.map