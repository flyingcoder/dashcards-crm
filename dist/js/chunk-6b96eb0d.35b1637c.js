(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b96eb0d"],{"0ebe":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"custom-table-wrapper",attrs:{flat:""}},[n("v-container",{staticClass:"custom-table-inner",attrs:{fluid:""}},[n("v-data-table",t._b({staticClass:"custom-table",attrs:{headers:t.headers,items:t.items,"disable-sort":t.sortingEnable,"show-select":t.showSelect,shaped:"","hide-default-footer":"",height:"500","items-per-page":t.itemsPerPage},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-title",{staticClass:"custom-table-title"},[t._v(" "+t._s(t.title)+" ")]),n("v-spacer"),t.hasSearch?n("v-flex",{attrs:{sm12:"",md3:""}},[n("v-text-field",{attrs:{width:"100","append-icon":"mdi-magnify",label:"Search",dense:"","hide-details":"",solo:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1):t._e()],1),t._t("header"),n("v-divider")]},proxy:!0},{key:"item",fn:function(e){var i=e.item;return[n("tr",[t.showSelect&&!t.noRowDelete?n("td",[n("v-checkbox",{staticStyle:{margin:"0px",padding:"0px"},attrs:{value:i,"hide-details":""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1):t._e(),t._t("row-slot",null,{item:i})],2)]}},{key:"no-data",fn:function(){return[n("Empty",[t._t("empty-slot",null,{slot:"extra"})],2)]},proxy:!0},t.hasFooter?{key:"footer",fn:function(){return[n("v-divider"),n("v-row",{staticClass:"py-3 px-2",attrs:{"no-gutters":""}},[n("v-col",[t.showSelect&&!t.noRowDelete&&t.selected.length>0?n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.selected.length>0,expression:"selected.length > 0"}],attrs:{tile:"",text:"",outlined:"",color:"red"},on:{click:function(e){return t.$emit("delete-selected",t.selected)}}},[t._v("DELETE SELECTED "),n("v-icon",{attrs:{right:"",small:""}},[t._v("delete")])],1):t._e()],1),n("v-col",{staticClass:"d-flex align-content-center"},[n("v-spacer"),!0===t.noMoreData?n("v-btn",{attrs:{tile:"",text:"",disabled:""}},[t._v("NO MORE DATA")]):n("v-btn",{attrs:{tile:"",text:"",loading:t.btnloading},on:{click:t.handleLoadMore}},[t._v("LOAD MORE")]),n("v-spacer")],1),n("v-col")],1)]},proxy:!0}:null],null,!0),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},"v-data-table",t.$attrs,!1))],1)],1)},a=[],s=n("4752"),o=(n("0644"),{name:"VueTable",components:{Empty:s["a"]},props:{title:{type:String,default:""},items:{type:Array,default:[]},headers:{type:Array,default:[]},showRowActions:{type:Boolean,default:!1},sortingEnable:{type:Boolean,default:!1},hasSearch:{type:Boolean,default:!1},hasFooter:{type:Boolean,default:!0},hasHeader:{type:Boolean,default:!0},showSelect:{type:Boolean,default:!0},icon:String,noMoreData:{type:Boolean,default:!1},noRowEdit:{type:Boolean,default:!1},noRowDelete:{type:Boolean,default:!1},noRowView:{type:Boolean,default:!1}},data:function(){return{itemsPerPage:1e3,dialog:!1,editedIndex:-1,editedItem:{},defaultItem:{},sortby:!1,computedHeaders:[],search:"",page:1,can_bulk_delete:!1,btnloading:!1,selected:[]}},created:function(){var t=this;this.$event.$on("btnloading_off",(function(){return t.btnloading=!1})),this.$event.$on("clear_selected",(function(){return t.selected=[]}))},methods:{handleSelectAllToggle:function(t){this.can_bulk_delete=t.value},handleLoadMore:function(){this.btnloading=!0,this.$emit("load-more")}}}),r=o,l=(n("d3da"),n("2877")),c=Object(l["a"])(r,i,a,!1,null,null,null);e["a"]=c.exports},1544:function(t,e,n){"use strict";var i=n("8713"),a=n.n(i);a.a},"15e1":function(t,e,n){"use strict";var i=n("3468"),a=n.n(i);a.a},"1f84":function(t,e,n){},"2f21":function(t,e,n){"use strict";var i=n("79e5");t.exports=function(t,e){return!!t&&i((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},3468:function(t,e,n){},"386d":function(t,e,n){"use strict";var i=n("cb7c"),a=n("83a1"),s=n("5f1b");n("214f")("search",1,(function(t,e,n,o){return[function(n){var i=t(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,i):new RegExp(n)[e](String(i))},function(t){var e=o(n,t,this);if(e.done)return e.value;var r=i(t),l=String(this),c=r.lastIndex;a(c,0)||(r.lastIndex=0);var d=s(r,l);return a(r.lastIndex,c)||(r.lastIndex=c),null===d?-1:d.index}]}))},"408c":function(t,e,n){var i=n("2b3e"),a=function(){return i.Date.now()};t.exports=a},"4359f":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"timer__tab"},[n("VueTable",{key:t.componentKey,attrs:{items:t.items,headers:t.headers,showRowActions:!0,icon:"mdi-clock",title:"Project Timers",noMoreData:t.noMoreData,hasFooter:!1,showSelect:!1},on:{"load-more":t.get_more_timers},scopedSlots:t._u([{key:"row-slot",fn:function(e){var i=e.item;return[n("td",{staticClass:"text-cap clickable-td",on:{click:function(e){return t.view_task(i.id)}}},[t._v(" "+t._s(i.title)+" ")]),n("td",t._l(i.assignee,(function(t){return n("v-avatar",{key:t.id,attrs:{size:"36"}},[n("v-img",{attrs:{src:t.image_url,title:t.fullname}})],1)})),1),n("td",[t._v(t._s(i.total_time))]),n("td",{staticClass:"text-cap"},[t._v(t._s(i.status))])]}}])})],1)},a=[],s=n("bd86"),o=(n("ac6a"),n("c5f6"),n("e06e")),r=n("1be9"),l=n("0ebe"),c=n("a2f5"),d=Object(s["a"])({name:"TimerTab",mixins:[o["a"]],components:{VueTable:l["a"],AssignedBtn:c["a"]},props:{id:[Number,String]},data:function(){return{sortList:[{title:"Sort by Client"},{title:"Sort by Task"},{title:"Sort by Services"},{title:"Sort by Time"},{title:"Sort by Date"}],headers:[{text:"Task",value:"title"},{text:"Assignee",value:"assignee"},{text:"Total Time",value:"total_time"},{text:"Status",value:"status"}]}},methods:{view_task:function(t){this.$router.push("/dashboard/project-preview/".concat(this.id,"/tasks?id=")+t)}},computed:{dynamic_api:function(){return"api/projects/".concat(this.id,"/timers")},client:function(){return this.id}},created:function(){this.fill_table("get_project_timers",!1,this.dynamic_api)}},"methods",{get_timers:function(){var t=this;this.loading=!0,r["a"].get("".concat(this.dynamic_api,"?page=1")).then((function(e){var n=e.data;n.data.forEach((function(e){t.items.push(e)})),t.pagination.current=n.current_page,t.pagination.total=n.last_page,t.hasMoreData()})).finally((function(){t.loading=!1,t.$event.$emit("btnloading_off",!1)}))},get_more_timers:function(){var t=this;this.loading=!0,r["a"].get("".concat(this.dynamic_api,"?page=").concat(this.pagination.current+1)).then((function(e){var n=e.data;t.items=n.data,t.pagination.current=n.current_page,t.pagination.total=n.last_page,t.hasMoreData()})).finally((function(){t.loading=!1,t.$event.$emit("btnloading_off",!1)}))}}),u=d,f=(n("15e1"),n("2877")),h=Object(f["a"])(u,i,a,!1,null,"55981938",null);e["default"]=h.exports},4752:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"empty my-1",attrs:{id:t.slug}},[n("div",{staticClass:"empty-content"},[n("div",{staticClass:"empty-svg"},[n("svg",{attrs:{viewBox:"0 0 250 250"}},[n("path",{attrs:{d:"M37 11l176 0c11,0 20,4 26,11 7,6 11,16 11,26l0 154c0,10 -4,19 -11,26 -2,2 -4,3 -6,5 -17,13 -33,1 -48,-11 -10,-7 -19,-14 -26,-11 -5,2 -9,7 -12,13 -12,18 -31,17 -46,4 -5,-5 -11,-10 -16,-11 -6,-1 -12,4 -19,9 -11,8 -23,17 -39,11 -6,-1 -12,-5 -16,-9 -7,-7 -11,-16 -11,-26l0 -154c0,-10 4,-20 11,-26 6,-7 15,-11 26,-11zm22 108c8,0 15,7 15,15 0,8 -7,15 -15,15 -8,0 -15,-7 -15,-15 0,-8 7,-15 15,-15zm0 -56c8,0 15,7 15,15 0,8 -7,15 -15,15 -8,0 -15,-7 -15,-15 0,-8 7,-15 15,-15zm44 24c-4,0 -7,-4 -7,-8 0,-4 3,-7 7,-7l96 0c4,0 7,3 7,7 0,4 -3,8 -7,8l-96 0zm0 56c-4,0 -7,-4 -7,-8 0,-4 3,-7 7,-7l96 0c4,0 7,3 7,7 0,4 -3,8 -7,8l-96 0zm129 70c2,-3 3,-7 3,-11l0 -154c0,-6 -2,-12 -6,-16 -4,-4 -10,-6 -16,-6l-176 0c-6,0 -12,2 -16,6 -4,4 -6,10 -6,16l0 154c0,6 2,11 6,15 1,2 3,3 4,3 13,8 23,1 32,-6 9,-7 18,-13 30,-12 10,2 17,8 24,15 8,7 17,8 24,-1 4,-8 9,-15 19,-19 14,-6 27,3 39,13 13,10 26,20 39,3z"}})])]),n("div",{staticClass:"empty-text"},[n("p",[t._v(t._s(t.headline))]),t._t("extra")],2)])])},a=[],s={name:"Empty",props:{slug:{type:String,default:"empty-sample"},headline:{type:String,default:"No data yet"}}},o=s,r=(n("1544"),n("6f5d"),n("2877")),l=Object(r["a"])(o,i,a,!1,null,"53ead389",null);e["a"]=l.exports},"55dd":function(t,e,n){"use strict";var i=n("5ca1"),a=n("d8e8"),s=n("4bf8"),o=n("79e5"),r=[].sort,l=[1,2,3];i(i.P+i.F*(o((function(){l.sort(void 0)}))||!o((function(){l.sort(null)}))||!n("2f21")(r)),"Array",{sort:function(t){return void 0===t?r.call(s(this)):r.call(s(this),a(t))}})},6809:function(t,e,n){"use strict";var i=n("ee00"),a=n.n(i);a.a},"6f5d":function(t,e,n){"use strict";var i=n("1f84"),a=n.n(i);a.a},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},8713:function(t,e,n){},a075:function(t,e,n){},a2f5:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"assigned-btn"},t._l(t.users,(function(e){return n("span",{on:{click:function(n){return t.profile(e.id)}}},[t._v(" "+t._s(e.first_name+" "+e.last_name)+" ")])})),0)},a=[],s={name:"AssignedBtn",props:{users:Array},methods:{profile:function(t){this.$router.push("/dashboard/team/profile/"+t)}}},o=s,r=(n("6809"),n("2877")),l=Object(r["a"])(o,i,a,!1,null,"28c354ba",null);e["a"]=l.exports},b047c:function(t,e,n){var i=n("1a8c"),a=n("408c"),s=n("b4b0"),o="Expected a function",r=Math.max,l=Math.min;function c(t,e,n){var c,d,u,f,h,_,p=0,m=!1,g=!1,v=!0;if("function"!=typeof t)throw new TypeError(o);function b(e){var n=c,i=d;return c=d=void 0,p=e,f=t.apply(i,n),f}function y(t){return p=t,h=setTimeout($,e),m?b(t):f}function w(t){var n=t-_,i=t-p,a=e-n;return g?l(a,u-i):a}function x(t){var n=t-_,i=t-p;return void 0===_||n>=e||n<0||g&&i>=u}function $(){var t=a();if(x(t))return k(t);h=setTimeout($,w(t))}function k(t){return h=void 0,v&&c?b(t):(c=d=void 0,f)}function S(){void 0!==h&&clearTimeout(h),p=0,c=_=d=h=void 0}function E(){return void 0===h?f:k(a())}function T(){var t=a(),n=x(t);if(c=arguments,d=this,_=t,n){if(void 0===h)return y(_);if(g)return clearTimeout(h),h=setTimeout($,e),b(_)}return void 0===h&&(h=setTimeout($,e)),f}return e=s(e)||0,i(n)&&(m=!!n.leading,g="maxWait"in n,u=g?r(s(n.maxWait)||0,e):u,v="trailing"in n?!!n.trailing:v),T.cancel=S,T.flush=E,T}t.exports=c},b4b0:function(t,e,n){var i=n("1a8c"),a=n("ffd6"),s=NaN,o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,d=parseInt;function u(t){if("number"==typeof t)return t;if(a(t))return s;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=l.test(t);return n||c.test(t)?d(t.slice(2),n?2:8):r.test(t)?s:+t}t.exports=u},d3da:function(t,e,n){"use strict";var i=n("a075"),a=n.n(i);a.a},e06e:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("386d"),n("a481"),n("c5f6"),n("28a5"),n("55dd"),n("20d6"),n("6762"),n("ac6a");var i=n("b047c"),a=n.n(i),s=n("d4e9"),o={methods:{add_item:function(t,e){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;s["a"][t](e,i).then((function(t){var e=t.data;Array.isArray(e)?e.reverse().forEach((function(t){return n.items.unshift(t)})):n.items.unshift(e),n.$refs.add_dialog.clear_and_close(),n.$event.$emit("open_snackbar",n.table_config.add_message)})).finally((function(){return n.$event.$emit("btnloading_off",!1)}))},extract_per_page:function(t){var e=t.search("per_page");return t.substring(e+9,e+10)},calc_per_page_items:function(t,e){var n=[5,10,15,20,25];return n.includes(t)||n.push(t),!n.includes(e)&&e<=25&&n.push(e),n},update_item:function(t,e){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;s["a"][t](this.edit_item.id,e,i).then((function(t){var e=n.items.findIndex((function(e){return e.id===t.data.id}));~e&&n.items.splice(e,1,t.data),n.edit_item={id:null,fields:null},n.edit_dialog=!1,n.$event.$emit("open_snackbar",n.table_config.update_message)})).finally((function(){return n.$event.$emit("btnloading_off",!1)}))},delete_item:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;s["a"][t](this.delete_item_id,n).then((function(){var t=e.items.findIndex((function(t){return t.id===e.delete_item_id}));~t&&e.items.splice(t,1),e.delete_item_id=null,e.delete_dialog=!1,e.$event.$emit("open_snackbar",e.table_config.delete_message)})).finally((function(){return e.$event.$emit("btnloading_off",!1)}))},bulk_delete:function(t){var e=this,n={ids:this.selected.map((function(t){return t.id}))};s["a"][t]({data:n}).then((function(t){var n=t.data;e.selected.forEach((function(t){var n=e.items.findIndex((function(e){return e.id===t.id}));~n&&e.items.splice(n,1)})),e.bulk_delete_dialog=!1,e.selected=[],e.$event.$emit("clear_selected"),e.$event.$emit("open_snackbar",n.message)})).finally((function(){e.$event.$emit("btnloading_off",!1)}))},open_edit_dialog:function(t){this.edit_dialog=!0,this.$set(this.edit_item,"id",t.id),this.$set(this.edit_item,"fields",t)},open_delete_dialog:function(t){this.delete_dialog=!0,this.delete_item_id=t.id},open_bulk_delete_dialog:function(t){this.bulk_delete_dialog=!0,this.selected=t},fill_table:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.loading=!0,s["a"][t](i).then((function(t){e.items_response=t.data,n?(e.items=t.data.data,e.pagination.current=t.data.current_page,e.pagination.total=t.data.last_page,e.hasMoreData()):e.items=t.data})).finally((function(){e.loading=!1,e.$event.$emit("btnloading_off",!1)}))},load_more_on_table:function(t){var e=this;this.loading=!0;var n={page:this.pagination.current+1};s["a"][t]({params:n}).then((function(t){var n=t.data;e.items_response=n.data,n.data.forEach((function(t){e.items.push(t)})),e.pagination.current=n.current_page,e.pagination.total=n.last_page,e.hasMoreData()})).finally((function(){e.loading=!1,e.$event.$emit("btnloading_off",!1)}))},fill_table_with_data:function(t){this.items=t},add_table_rows:function(t,e){this.items=t,this.items_response=e},changeSort:function(t){this.sort.sortBy===t?this.sort.descending=!this.sort.descending:(this.sort.sortBy=t,this.sort.descending=!1)},refresh_table:function(t){var e=this;s["a"][this.table_config.refresh_table_api_name](t).then((function(t){e.$event.$emit("open_snackbar",e.table_config.refresh_table_message),e.loading=!1,e.items_response=t.data,e.items=t.data.data})).finally((function(){return e.$event.$emit("btnloading_off",!1)}))},update_table_actions:function(t){if(t.page&&(this.page=Number(t.page)),t.per_page&&(this.rows_per_page=Number(t.per_page)),t.search&&(this.search=t.search),t.sort){var e=t.sort.split("|");this.sort.sortBy=e[0],"asc"===e[1]?this.sort.descending=!1:"desc"===e[1]&&(this.sort.descending=!0)}},hasMoreData:function(){this.componentKey+=1,this.pagination.current>=this.pagination.total&&(this.noMoreData=!0)},toggleAll:function(){this.selected.length?this.selected=[]:this.selected=this.items.slice()},setPreferredView:function(t){window.localStorage.setItem("bzk_prefer_view",t),this.view=t},getPreferredView:function(){return window.localStorage.getItem("bzk_prefer_view")||"list"},debounce:a()((function(t){this.search=t}),500)}},r={mixins:[o],data:function(){return{edit_dialog:!1,add_dialog:!1,delete_dialog:!1,permissionDialog:!1,bulk_delete_dialog:!1,loading:!1,items:[],items_response:null,edit_item:{id:null,fields:null},delete_item_id:null,show_delete_selected:!1,selected_ids:[],selected:[],rows_per_page:null,page:1,sort:{sortBy:null,descending:!1},search:"",pagination:{current:1,total:0},noMoreData:!1,componentKey:1,view:"list"}},watch:{selected_ids:function(t){t.length>0?this.show_delete_selected=!0:this.show_delete_selected=!1},api_query:function(t,e){var n=Number(this.extract_per_page(t)),i=Number(this.extract_per_page(e))||null;this.items_response&&this.rows_per_page===this.items.length&&n!==i||(this.$router.replace({name:this.table_config.route_name,query:{page:this.page,per_page:this.rows_per_page,search:this.search,sort:this.query_for_sorting}}),this.loading=!0,this.refresh_table(t))}}}},ee00:function(t,e,n){}}]);
//# sourceMappingURL=chunk-6b96eb0d.35b1637c.js.map