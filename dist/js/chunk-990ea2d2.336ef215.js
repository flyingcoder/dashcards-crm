(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-990ea2d2"],{"0715":function(t,e,i){},"1e0f":function(t,e,i){"use strict";var n=i("8807"),a=i.n(n);a.a},"2f21":function(t,e,i){"use strict";var n=i("79e5");t.exports=function(t,e){return!!t&&n((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},"386d":function(t,e,i){"use strict";var n=i("cb7c"),a=i("83a1"),s=i("5f1b");i("214f")("search",1,(function(t,e,i,r){return[function(i){var n=t(this),a=void 0==i?void 0:i[e];return void 0!==a?a.call(i,n):new RegExp(i)[e](String(n))},function(t){var e=r(i,t,this);if(e.done)return e.value;var o=n(t),l=String(this),c=o.lastIndex;a(c,0)||(o.lastIndex=0);var u=s(o,l);return a(o.lastIndex,c)||(o.lastIndex=c),null===u?-1:u.index}]}))},"3a63":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"subscribers"},[i("v-row",{staticClass:"mb-3",attrs:{"no-gutters":""}},[i("v-card",{staticClass:"col-md-3",attrs:{flat:"",outlined:"",tile:""}},[i("v-list-item",[i("v-list-item-avatar",[i("v-icon",{staticClass:"mdi-36px",attrs:{tile:""}},[t._v("mdi-network")])],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"text-center"},[i("h1",[t._v(t._s(t.statistics.active_companies))])]),i("v-list-item-subtitle",{staticClass:"text-center"},[t._v("Companies (Active)")])],1)],1)],1),i("v-card",{staticClass:"col-md-3",attrs:{flat:"",outlined:"",tile:""}},[i("v-list-item",[i("v-list-item-avatar",[i("v-icon",{staticClass:"mdi-36px",attrs:{tile:""}},[t._v("mdi-network-off")])],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"text-center"},[i("h1",[t._v(t._s(t.statistics.inactive_companies))])]),i("v-list-item-subtitle",{staticClass:"text-center"},[t._v("Companies (Inactive)")])],1)],1)],1),i("v-card",{staticClass:"col-md-3",attrs:{flat:"",outlined:"",tile:""}},[i("v-list-item",[i("v-list-item-avatar",[i("v-icon",{staticClass:"mdi-36px",attrs:{tile:""}},[t._v("mdi-account-multiple-check-outline")])],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"text-center"},[i("h1",[t._v(t._s(t.statistics.active_users))])]),i("v-list-item-subtitle",{staticClass:"text-center"},[t._v("Users (Active)")])],1)],1)],1),i("v-card",{staticClass:"col-md-3",attrs:{flat:"",outlined:"",tile:""}},[i("v-list-item",[i("v-list-item-avatar",[i("v-icon",{staticClass:"mdi-36px",attrs:{tile:""}},[t._v("mdi-account-multiple-remove-outline")])],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"text-center"},[i("h1",[t._v(t._s(t.statistics.inactive_users))])]),i("v-list-item-subtitle",{staticClass:"text-center"},[t._v("Users (Inactive)")])],1)],1)],1)],1),i("div",{staticClass:"subscribers-wrapper"},[i("div",{staticClass:"subscribers-content"},[i("v-row",{attrs:{"no-gutters":""}},[i("div",{staticClass:"page-title"},[t._v("Subscribers")]),i("v-spacer"),i("v-text-field",{staticClass:"mx-2",attrs:{"append-icon":"search",dense:"",filled:"",placeholder:"Search for..."}}),i("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"mx-1",attrs:{icon:""},on:{click:t.all}},"v-btn",a,!1),n),[i("v-icon",{attrs:{small:""}},[t._v("mdi-arrow-collapse-down")])],1)]}}])},[i("span",[t._v("Show All")])]),i("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"mx-1",attrs:{icon:""},on:{click:t.none}},"v-btn",a,!1),n),[i("v-icon",[t._v("mdi-arrow-collapse-vertical")])],1)]}}])},[i("span",[t._v("Hide All")])])],1),i("div",{staticClass:"subscribers-body mt-2"},[i("v-row",[i("v-col",{attrs:{md:"4"}},[t._v("Company")]),i("v-col",{attrs:{md:"3"}},[t._v("Owner")]),i("v-col",[t._v("Members")])],1),[i("v-expansion-panels",{attrs:{focusable:"",multiple:"",flat:""},model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}},t._l(t.items,(function(e){return i("v-expansion-panel",{key:e.id},[i("v-expansion-panel-header",[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{md:"4"}},[i("v-avatar",{attrs:{tile:""}},[e.company_logo?i("v-img",{attrs:{src:e.company_logo}}):i("v-icon",{attrs:{left:""}},[t._v("mdi-office-building")])],1),e.deleted_at?i("v-badge",{attrs:{color:"deep-orange accent-4",small:"",icon:"mdi-exclamation"}},[i("span",{staticClass:"subtitle-1 mx-2"},[t._v(t._s(t._f("ucwords")(e.name)))])]):i("span",{staticClass:"subtitle-1 mx-2"},[t._v(t._s(t._f("ucwords")(e.name)))])],1),i("v-col",{attrs:{md:"3"}},[i("Avatar",{attrs:{user:e.owner}})],1),i("v-col",[i("Avatars",{staticStyle:{display:"inline-block"},attrs:{count:7,items:e.members,deep:!1}})],1),i("v-spacer")],1)],1),i("v-expansion-panel-content",[i("v-card",{staticClass:"mt-1 col-md-12",attrs:{flat:""}},[i("v-card-text",{staticClass:"subtitle-2"},[i("v-row",[e.company_logo?i("v-img"):t._e(),i("v-banner",{attrs:{"single-line":"",icon:"mdi-office-building"},scopedSlots:t._u([{key:"actions",fn:function(){return[e.deleted_at?i("v-btn",{attrs:{color:"primary",text:""},on:{click:function(i){return t.enable_disable_company(e)}}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-lan-check")]),t._v(" Restore Company ")],1):i("v-btn",{attrs:{color:"warning",text:""},on:{click:function(i){return t.enable_disable_company(e)}}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-lan-disconnect")]),t._v(" Disabled Company ")],1)]},proxy:!0}],null,!0)},[i("p",[t._v(" Name: "+t._s(e.name)),i("br"),t._v(" Date registered: "+t._s(t._f("format")(e.created_at))),i("br"),e.deleted_at?i("span",[t._v("Disabled on: "+t._s(t._f("format")(e.deleted_at)))]):t._e()])])],1)],1)],1)],1)],1)})),1)],t.noMoreData?t._e():i("v-row",{staticClass:"mt-3"},[i("v-spacer"),i("v-btn",{attrs:{text:"",loading:t.btnloading},on:{click:t.load_more_companies}},[t._v("Load more")]),i("v-spacer")],1)],2)],1)])],1)},a=[],s=(i("20d6"),i("6f58")),r=i("1be9"),o=(i("7eac"),i("e06e")),l=i("72c1"),c={name:"Subscribers",mixins:[s["a"],o["a"]],components:{Avatars:l["a"]},data:function(){return{paths:[{text:"Admin",disabled:!1,router_name:"admin-dashboard"},{text:"Subscribers",disabled:!1,router_name:"admin-logs"}],panel_items:1e3,statistics:{active_companies:0,inactive_companies:0,active_users:0,inactive_users:0},btnloading:!1}},created:function(){var t=this;this.get_companies(),this.get_statistics(),this.$event.$on("btnloading_off",(function(){t.btnloading=!1}))},mounted:function(){this.$event.$emit("path-change",this.paths)},methods:{get_companies:function(){this.fill_table_via_url("api/companies")},load_more_companies:function(){this.btnloading=!0,this.load_more_via_url("api/companies")},get_statistics:function(){var t=this;r["a"].get("api/subscribers/statistics").then((function(e){var i=e.data;t.statistics=i}))},enable_disable_company:function(t){var e=this;r["a"].post("api/companies/".concat(t.id,"/status")).then((function(i){var n=i.data,a=e.items.findIndex((function(e){return e.id===t.id}));~a&&(e.items.splice(a,1,n),e.$event.$emit("open_snackbar","Company updated!"))}))}}},u=c,d=(i("c8a0"),i("2877")),f=Object(d["a"])(u,n,a,!1,null,"2f392068",null);e["default"]=f.exports},"408c":function(t,e,i){var n=i("2b3e"),a=function(){return n.Date.now()};t.exports=a},"55dd":function(t,e,i){"use strict";var n=i("5ca1"),a=i("d8e8"),s=i("4bf8"),r=i("79e5"),o=[].sort,l=[1,2,3];n(n.P+n.F*(r((function(){l.sort(void 0)}))||!r((function(){l.sort(null)}))||!i("2f21")(o)),"Array",{sort:function(t){return void 0===t?o.call(s(this)):o.call(s(this),a(t))}})},"6f58":function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));i("8e6e"),i("456d"),i("ac6a");var n=i("2909"),a=i("ade3"),s=i("2f62"),r=i("1be9");function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){Object(a["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var c={data:function(){return{loading:!1,panel:[]}},computed:l({},Object(s["c"])(["global_configs"])),methods:{all:function(){this.panel=Object(n["a"])(Array(this.panel_items).keys()).map((function(t,e){return e}))},none:function(){this.panel=[]},sendRequest:function(t,e){var i=this;this["".concat(t,"_btn")]=!0,r["a"].post("api/configs",e).then((function(e){var n=e.data;i[t]=n.value,i.$event.$emit("open_snackbar","Settings updated!")})).finally((function(){return i["".concat(t,"_btn")]=!1}))},getAllConfig:function(t){var e=this;this.loading=!0,r["a"].get("api/configs").then((function(e){var i=e.data;"function"===typeof t&&t(i)})).finally((function(){return e.loading=!1}))}}}},"72c1":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"avatar-wrapper"},[i("ul",{staticClass:"avatars"},[t.cutList.length>0?t._l(t.cutList,(function(e,n){return i("li",{key:n,staticClass:"avatars__item"},[i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on;return[t.deep&&e.user?i("img",t._g({staticClass:"avatars__img",attrs:{src:e.user.image_url}},a)):e?i("img",t._g({staticClass:"avatars__img",attrs:{src:e.image_url}},a)):t._e()]}}],null,!0)},[t.deep&&e.user?i("span",[t._v(t._s(e.user.fullname))]):e?i("span",[t._v(t._s(e.fullname))]):t._e()])],1)})):t._e(),t.less>0?i("li",{staticClass:"avatars__item"},[i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("span",t._g({staticClass:"avatars__others"},n),[t._v("+"+t._s(t.less))])]}}],null,!1,1062212335)},[i("span",{domProps:{innerHTML:t._s(t.lessList)}})])],1):t._e(),t.hasAddMember?i("li",{staticClass:"avatars__item"},[i("span",{staticClass:"avatars__add"},[i("v-icon",{attrs:{dark:""},on:{click:function(e){return t.$emit("add-member")}}},[t._v("add")])],1)]):t._e()],2)])},a=[],s=(i("c5f6"),i("0644")),r=i.n(s),o={inheritAttrs:!1,props:{items:{type:Array,default:function(){return[]}},count:{type:Number,default:3},deep:{type:Boolean,default:!1},hasAddMember:{type:Boolean,default:!1}},computed:{less:function(){return this.items.length-this.count},cutList:function(){return this.items.length<this.count?this.items:r()(this.items).slice(0,this.count)},lessList:function(){var t=this,e=r()(this.items).slice(this.count,this.items.length);return e.length>0?e.map((function(e){return t.deep?e.user?e.user.fullname:"Deleted User":e?e.fullname:"Deleted User"})).join("<br>"):"Deleted User"}}},l=o,c=(i("1e0f"),i("2877")),u=Object(c["a"])(l,n,a,!1,null,"ee48b49c",null);e["a"]=u.exports},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},8807:function(t,e,i){},b047c:function(t,e,i){var n=i("1a8c"),a=i("408c"),s=i("b4b0"),r="Expected a function",o=Math.max,l=Math.min;function c(t,e,i){var c,u,d,f,_,v,p=0,m=!1,h=!1,g=!0;if("function"!=typeof t)throw new TypeError(r);function b(e){var i=c,n=u;return c=u=void 0,p=e,f=t.apply(n,i),f}function y(t){return p=t,_=setTimeout(w,e),m?b(t):f}function x(t){var i=t-v,n=t-p,a=e-i;return h?l(a,d-n):a}function $(t){var i=t-v,n=t-p;return void 0===v||i>=e||i<0||h&&n>=d}function w(){var t=a();if($(t))return C(t);_=setTimeout(w,x(t))}function C(t){return _=void 0,g&&c?b(t):(c=u=void 0,f)}function k(){void 0!==_&&clearTimeout(_),p=0,c=v=u=_=void 0}function O(){return void 0===_?f:C(a())}function D(){var t=a(),i=$(t);if(c=arguments,u=this,v=t,i){if(void 0===_)return y(v);if(h)return clearTimeout(_),_=setTimeout(w,e),b(v)}return void 0===_&&(_=setTimeout(w,e)),f}return e=s(e)||0,n(i)&&(m=!!i.leading,h="maxWait"in i,d=h?o(s(i.maxWait)||0,e):d,g="trailing"in i?!!i.trailing:g),D.cancel=k,D.flush=O,D}t.exports=c},b4b0:function(t,e,i){var n=i("1a8c"),a=i("ffd6"),s=NaN,r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt;function d(t){if("number"==typeof t)return t;if(a(t))return s;if(n(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=n(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=l.test(t);return i||c.test(t)?u(t.slice(2),i?2:8):o.test(t)?s:+t}t.exports=d},c8a0:function(t,e,i){"use strict";var n=i("0715"),a=i.n(n);a.a},e06e:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));i("386d"),i("a481"),i("c5f6"),i("28a5"),i("55dd"),i("2fdb"),i("20d6"),i("6762"),i("ac6a");var n=i("b047c"),a=i.n(n),s=i("d4e9"),r=i("1be9"),o={methods:{resetPagination:function(){this.pagination.current=1,this.pagination.total=0,this.noMoreData=!1},clear_selected:function(){this.selected=[],this.$event.$emit("clear_selected",[]),this.$event.$emit("btnloading_off",!1)},add_item:function(t,e){var i=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3?arguments[3]:void 0;s["a"][t](e,n).then((function(t){var e=t.data;Array.isArray(e)?e.reverse().forEach((function(t){return i.items.push(t)})):i.items.push(e),i.clear_selected(),i.$refs.add_dialog.clear_and_close(),i.$event.$emit("open_snackbar",i.table_config.add_message),"function"===typeof a&&a(t)})).finally((function(){return i.$event.$emit("btnloading_off",!1)}))},extract_per_page:function(t){var e=t.search("per_page");return t.substring(e+9,e+10)},calc_per_page_items:function(t,e){var i=[5,10,15,20,25];return i.includes(t)||i.push(t),!i.includes(e)&&e<=25&&i.push(e),i},update_item:function(t,e){var i=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3?arguments[3]:void 0;s["a"][t](this.edit_item.id,e,n).then((function(t){var e=i.items.findIndex((function(e){return e.id===t.data.id}));~e&&i.items.splice(e,1,t.data),i.edit_item={id:null,fields:null},i.edit_dialog=!1,i.clear_selected(),i.$event.$emit("open_snackbar",i.table_config.update_message),"function"===typeof a&&a(t)})).finally((function(){return i.$event.$emit("btnloading_off",!1)}))},delete_item:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;s["a"][t](this.delete_item_id,i).then((function(){var t=e.items.findIndex((function(t){return t.id===e.delete_item_id}));~t&&e.items.splice(t,1),e.delete_item_id=null,e.delete_dialog=!1,e.clear_selected(),e.$event.$emit("open_snackbar",e.table_config.delete_message)})).finally((function(){return e.$event.$emit("btnloading_off",!1)}))},bulk_delete:function(t){var e=this,i={ids:this.selected.map((function(t){return t.id}))};s["a"][t]({data:i}).then((function(t){var i=t.data;e.selected.forEach((function(t){var i=e.items.findIndex((function(e){return e.id===t.id}));~i&&e.items.splice(i,1)})),e.bulk_delete_dialog=!1,e.clear_selected(),e.$event.$emit("open_snackbar",i.message)})).finally((function(){e.$event.$emit("btnloading_off",!1)}))},bulk_delete_via_url:function(t){var e=this,i={ids:this.selected.map((function(t){return t.id}))};r["a"].delete(t,{data:i}).then((function(t){var i=t.data;e.selected.forEach((function(t){var i=e.items.findIndex((function(e){return e.id===t.id}));~i&&e.items.splice(i,1)})),e.bulk_delete_dialog=!1,e.clear_selected(),e.$event.$emit("open_snackbar",i.message)})).finally((function(){e.$event.$emit("btnloading_off",!1)}))},open_edit_dialog:function(t){this.edit_dialog=!0,this.$set(this.edit_item,"id",t.id),this.$set(this.edit_item,"fields",t)},open_delete_dialog:function(t){this.delete_dialog=!0,this.delete_item_id=t.id},open_bulk_delete_dialog:function(t){this.bulk_delete_dialog=!0,this.selected=t},fill_table:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.loading=!0,s["a"][t](n).then((function(t){e.items_response=t.data,i?(e.items=t.data.data,e.pagination.current=t.data.current_page,e.pagination.total=t.data.last_page,e.hasMoreData()):e.items=t.data})).finally((function(){e.clear_selected(),e.loading=!1,e.$event.$emit("btnloading_off",!1)}))},fill_table_via_url:function(t){var e=this,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2?arguments[2]:void 0;this.loading=!0;var a={page:this.pagination.current};t.includes("per_page")||(a.per_page=this.$store.getters["configs/general_page_limits"]),r["a"].get(t,{params:a}).then((function(t){e.items_response=t.data,i?(e.items=t.data.data,e.pagination.current=t.data.current_page,e.pagination.total=t.data.last_page,e.hasMoreData()):e.items=t.data,"function"===typeof n&&n(t)})).finally((function(){e.clear_selected(),e.loading=!1,e.$event.$emit("btnloading_off",!1)}))},load_more_on_table:function(t){var e=this;this.loading=!0;var i={page:this.pagination.current+1};s["a"][t]({params:i}).then((function(t){var i=t.data;e.items_response=i.data,i.data.forEach((function(t){e.items.push(t)})),e.pagination.current=i.current_page,e.pagination.total=i.last_page,e.hasMoreData()})).finally((function(){e.clear_selected(),e.loading=!1,e.scrollToBottom(),e.$event.$emit("btnloading_off",!1)}))},load_more_via_url:function(t,e){var i=this;this.loading=!0;var n={page:this.pagination.current+1};t.includes("per_page")||(n.per_page=this.$store.getters["configs/general_page_limits"]),r["a"].get(t,{params:n}).then((function(t){var n=t.data;i.items_response=n.data,n.data.forEach((function(t){i.items.push(t)})),i.pagination.current=n.current_page,i.pagination.total=n.last_page,i.hasMoreData(),"function"===typeof e&&e(n)})).finally((function(){i.clear_selected(),i.loading=!1,i.scrollToBottom(),i.$event.$emit("btnloading_off",!1)}))},fill_table_with_data:function(t){this.items=t},add_table_rows:function(t,e){this.items=t,this.items_response=e},changeSort:function(t){this.sort.sortBy===t?this.sort.descending=!this.sort.descending:(this.sort.sortBy=t,this.sort.descending=!1)},refresh_table:function(t){var e=this;s["a"][this.table_config.refresh_table_api_name](t).then((function(t){e.$event.$emit("open_snackbar",e.table_config.refresh_table_message),e.loading=!1,e.clear_selected(),e.items_response=t.data,e.items=t.data.data})).finally((function(){return e.$event.$emit("btnloading_off",!1)}))},update_table_actions:function(t){if(t.page&&(this.page=Number(t.page)),t.per_page&&(this.rows_per_page=Number(t.per_page)),t.search&&(this.search=t.search),t.sort){var e=t.sort.split("|");this.sort.sortBy=e[0],"asc"===e[1]?this.sort.descending=!1:"desc"===e[1]&&(this.sort.descending=!0)}},hasMoreData:function(){this.componentKey+=1,this.pagination.current>=this.pagination.total&&(this.noMoreData=!0)},toggleAll:function(){this.selected.length?this.clear_selected():this.selected=this.items.slice()},setPreferredView:function(t){window.localStorage.setItem("bzk_prefer_view",t),this.view=t},getPreferredView:function(){return window.localStorage.getItem("bzk_prefer_view")||"list"},scrollToBottom:function(){setTimeout((function(){var t=document.getElementsByClassName("v-data-table__wrapper")[0];t&&(t.scrollTop=t.scrollHeight)}),1)},debounce:a()((function(t){this.search=t}),500)}},l={mixins:[o],data:function(){return{edit_dialog:!1,add_dialog:!1,delete_dialog:!1,permissionDialog:!1,bulk_delete_dialog:!1,loading:!1,items:[],items_response:null,edit_item:{id:null,fields:null},delete_item_id:null,show_delete_selected:!1,selected_ids:[],selected:[],rows_per_page:null,page:1,sort:{sortBy:null,descending:!1},search:"",pagination:{current:1,total:0},noMoreData:!1,componentKey:1,view:"list",btnloading:!1}},watch:{selected_ids:function(t){t.length>0?this.show_delete_selected=!0:this.show_delete_selected=!1},api_query:function(t,e){var i=Number(this.extract_per_page(t)),n=Number(this.extract_per_page(e))||null;this.items_response&&this.rows_per_page===this.items.length&&i!==n||(this.$router.replace({name:this.table_config.route_name,query:{page:this.page,per_page:this.rows_per_page,search:this.search,sort:this.query_for_sorting}}),this.loading=!0,this.refresh_table(t))}}}}}]);
//# sourceMappingURL=chunk-990ea2d2.336ef215.js.map