(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c95fac6"],{"080d":function(t,e,i){},1544:function(t,e,i){"use strict";var s=i("8713"),n=i.n(s);n.a},"1f84":function(t,e,i){},"206b":function(t,e,i){t.exports=i.p+"img/edit.73a7396f.svg"},"2f21":function(t,e,i){"use strict";var s=i("79e5");t.exports=function(t,e){return!!t&&s((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},"386d":function(t,e,i){"use strict";var s=i("cb7c"),n=i("83a1"),a=i("5f1b");i("214f")("search",1,(function(t,e,i,r){return[function(i){var s=t(this),n=void 0==i?void 0:i[e];return void 0!==n?n.call(i,s):new RegExp(i)[e](String(s))},function(t){var e=r(i,t,this);if(e.done)return e.value;var o=s(t),c=String(this),l=o.lastIndex;n(l,0)||(o.lastIndex=0);var d=a(o,c);return n(o.lastIndex,l)||(o.lastIndex=l),null===d?-1:d.index}]}))},"3d31":function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));i("386d"),i("a481"),i("c5f6"),i("55dd");var s={computed:{rows_per_page_items:function(){var t=this.items_response;if(!t)return[];var e=this.items.length,i=t.total-t.from+1,s=this.calc_per_page_items(e,t.total);return this.rows_per_page=e,s.filter((function(t){return t<=i}))},should_show_pagination:function(){return!!this.items_response&&this.items_response.total>this.rows_per_page},total_items:function(){return this.items_response?this.items_response.last_page:null},query_for_sorting:function(){return this.sort.sortBy?"".concat(this.sort.sortBy,"|").concat(this.sort.descending?"desc":"asc"):""},api_query:function(){return"page=".concat(this.page,"&\n\t\t\t\t\t\t\tper_page=").concat(this.rows_per_page,"&\n\t\t\t\t\t\t\tsearch=").concat(this.search,"&\n\t\t\t\t\t\t\tsort=").concat(this.query_for_sorting)}}},n=(i("28a5"),i("20d6"),i("6762"),i("ac6a"),i("b047c")),a=i.n(n),r=i("d4e9"),o={methods:{add_item:function(t,e){var i=this,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;r["a"][t](e,s).catch((function(){i.$event.$emit("btnloading_off",!1)})).then((function(t){var e=t.data;Array.isArray(e)?e.reverse().forEach((function(t){return i.items.unshift(t)})):i.items.unshift(e),i.$refs.add_dialog.clear_and_close(),i.$event.$emit("open_snackbar",i.table_config.add_message),i.$event.$emit("btnloading_off",!1)}))},extract_per_page:function(t){var e=t.search("per_page");return t.substring(e+9,e+10)},calc_per_page_items:function(t,e){var i=[5,10,15,20,25];return i.includes(t)||i.push(t),!i.includes(e)&&e<=25&&i.push(e),i},update_item:function(t,e){var i=this,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;r["a"][t](this.edit_item.id,e,s).catch((function(){i.$event.$emit("btnloading_off",!1)})).then((function(t){var e=i.items.findIndex((function(e){return e.id===t.data.id}));~e&&i.items.splice(e,1,t.data),i.edit_item={id:null,fields:null},i.edit_dialog=!1,i.$event.$emit("open_snackbar",i.table_config.update_message),i.$event.$emit("btnloading_off",!1)}))},delete_item:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;r["a"][t](this.delete_item_id,i).catch((function(){e.$event.$emit("btnloading_off",!1)})).then((function(){var t=e.items.findIndex((function(t){return t.id===e.delete_item_id}));~t&&e.items.splice(t,1),e.delete_item_id=null,e.delete_dialog=!1,e.$event.$emit("open_snackbar",e.table_config.delete_message),e.$event.$emit("btnloading_off",!1)}))},open_edit_dialog:function(t){this.edit_dialog=!0,this.$set(this.edit_item,"id",t.id),this.$set(this.edit_item,"fields",t)},open_delete_dialog:function(t){this.delete_dialog=!0,this.delete_item_id=t.id},fill_table:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.loading=!0,r["a"][t](s).then((function(t){e.items_response=t.data,e.loading=!1,e.items=i?t.data.data:t.data}))},fill_table_with_data:function(t){this.items=t},add_table_rows:function(t,e){this.items=t,this.items_response=e},changeSort:function(t){this.sort.sortBy===t?this.sort.descending=!this.sort.descending:(this.sort.sortBy=t,this.sort.descending=!1)},refresh_table:function(t){var e=this;r["a"][this.table_config.refresh_table_api_name](t).catch((function(){e.$event.$emit("btnloading_off",!1)})).then((function(t){e.$event.$emit("open_snackbar",e.table_config.refresh_table_message),e.loading=!1,e.items_response=t.data,e.items=t.data.data,e.$event.$emit("btnloading_off",!1)}))},update_table_actions:function(t){if(t.page&&(this.page=Number(t.page)),t.per_page&&(this.rows_per_page=Number(t.per_page)),t.search&&(this.search=t.search),t.sort){var e=t.sort.split("|");this.sort.sortBy=e[0],"asc"===e[1]?this.sort.descending=!1:"desc"===e[1]&&(this.sort.descending=!0)}},toggleAll:function(){this.selected.length?this.selected=[]:this.selected=this.items.slice()},debounce:a()((function(t){this.search=t}),500)}},c={mixins:[s,o],data:function(){return{edit_dialog:!1,add_dialog:!1,delete_dialog:!1,permissionDialog:!1,loading:!1,items:[],items_response:null,edit_item:{id:null,fields:null},delete_item_id:null,show_delete_selected:!1,selected_ids:[],rows_per_page:null,page:1,sort:{sortBy:null,descending:!1},search:""}},watch:{selected_ids:function(t){t.length>0?this.show_delete_selected=!0:this.show_delete_selected=!1},api_query:function(t,e){var i=Number(this.extract_per_page(t)),s=Number(this.extract_per_page(e))||null;this.items_response&&this.rows_per_page===this.items.length&&i!==s||(this.$router.replace({name:this.table_config.route_name,query:{page:this.page,per_page:this.rows_per_page,search:this.search,sort:this.query_for_sorting}}),this.loading=!0,this.refresh_table(t))}}}},"408c":function(t,e,i){var s=i("2b3e"),n=function(){return s.Date.now()};t.exports=n},"451f":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content__wrapper"},[s("div",{staticClass:"row buzz__tables"},[s("div",{staticClass:"buzz__tablesTwo"},[t._t("toolbar",[s("div",{staticClass:"table__toolbar"},[t._v(" "+t._s(t.toolbarTitle)+" ")])]),t._t("right_toolbar"),s("v-data-table",t._b({staticClass:"buzzooka__table",attrs:{headers:t.headers,items:t.items,loading:t.loading,"no-data-text":"","show-select":"","disable-sort":"","hide-default-footer":""},scopedSlots:t._u([{key:"headers",fn:function(e){return[s("tr",{staticClass:"table__head"},[t.$props.hasCheckbox&&!t.noRowDelete&&t.can_delete?s("th",[s("v-checkbox",{attrs:{"input-value":e.all,indeterminate:e.indeterminate,primary:"","hide-details":""},on:{click:function(e){return e.target!==e.currentTarget?null:t.toggleAll(e)}}})],1):t._e(),t._l(e.headers,(function(e){return s("th",{key:e.id,class:t.headerClasses(e),attrs:{width:e.width},on:{click:function(i){e.sortable&&t.changeSort(e.value)}}},["Icon"===e.text?[s("v-btn",{attrs:{fab:"",small:"",depressed:"",disabled:t.tableActionDisabled}},[s("img",{attrs:{src:i("a5da"),alt:""}})])]:e.is_action?[s("img",{attrs:{src:i("a130")}})]:[t._v(" "+t._s(e.text)+" "),e.sortable?s("v-icon",{attrs:{small:""}},[t._v("arrow_upward")]):t._e()]],2)})),t.hasHeaderIcon?s("th",[s("img",{attrs:{src:i("a130")}})]):t._e()],2)]}},{key:"item",fn:function(e){var i=e.item;return[t._t("custom-item",null,{item:i})]}},{key:"items",fn:function(e){return[s("tr",{staticClass:"table__body-row",attrs:{active:e.selected}},[t.$props.hasCheckbox&&!t.noRowDelete&&t.can_delete?s("td",{on:{click:function(t){e.selected=!e.selected}}},[s("v-checkbox",{attrs:{"input-value":e.selected,primary:"","hide-details":""}})],1):t._e(),t.showRowActions?t._t("row-actions",[s("td",{staticClass:"text-xs-center table__actions"},[!t.noRowEdit&&t.can_edit?t._t("row-edit",[s("v-btn",{attrs:{fab:"",small:"",flat:"",depressed:""},on:{click:function(i){return t.$emit("edit",e.item)}}},[s("img",{attrs:{src:i("206b"),alt:""}})])],{item:e.item}):t._e(),!t.noRowDelete&&t.can_delete?t._t("row-delete",[s("v-btn",{attrs:{fab:"",small:"",flat:"",depressed:""},on:{click:function(i){return t.$emit("delete",e.item)}}},[s("img",{attrs:{src:i("a5da"),alt:""}})])],{item:e.item}):t._e(),!t.noRowView&&t.can_view?t._t("row-view",[s("v-btn",{attrs:{fab:"",flat:"",small:"",depressed:""},on:{click:function(i){return t.$emit("view",e.item)}}},[s("v-icon",[t._v("pageview")])],1)],{item:e.item}):t._e()],2)],{item:e.item}):t._e()],2)]}}],null,!0),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},"v-data-table",t.$attrs,!1),[s("v-progress-linear",{attrs:{slot:"progress",color:"blue",indeterminate:""},slot:"progress"}),s("template",{slot:"no-data"},[s("Empty")],1),s("template",{slot:"footer"},[s("td",{staticStyle:{padding:"0"},attrs:{colspan:"100%"}},[t._t("table-actions")],2)])],2)],2)])])},n=[],a=(i("55dd"),i("4752")),r={name:"CustomTable",inheritAttrs:!1,components:{Empty:a["a"]},props:{headers:Array,items:Array,loading:Boolean,hasCheckbox:Boolean,hasHeaderIcon:Boolean,sort:Object,toolbarTitle:String,noRowEdit:Boolean,noRowDelete:Boolean,noRowView:Boolean,showRowActions:{type:Boolean,default:!0},permission:Object},data:function(){return{selected:[]}},computed:{user:function(){return this.$store.getters.user},can_view:function(){return!!this.user.is_admin||this.permission&&this.permission.view},can_edit:function(){return!!this.user.is_admin||this.permission&&this.permission.update},can_delete:function(){return!!this.user.is_admin||this.permission&&this.permission.delete}},watch:{selected:function(t){var e=t.map((function(t){return t.id}));this.$emit("items-selected",e)}},methods:{toggleAll:function(){this.selected.length?this.selected=[]:this.selected=this.items.slice()},changeSort:function(t){this.$emit("sorted",t)},headerClasses:function(t){var e=["column"];return"sortable"in t&&(e.push("sortable"),this.sort.descending?e.push("desc"):e.push("asc"),t.value===this.sort.sortBy&&e.push("active")),e}}},o=r,c=(i("64fb"),i("d20e"),i("2877")),l=Object(c["a"])(o,s,n,!1,null,"109ba2b2",null);e["a"]=l.exports},"45fa":function(t,e,i){},4752:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"empty my-1",attrs:{id:t.slug}},[i("div",{staticClass:"empty-content"},[i("div",{staticClass:"empty-svg"},[i("svg",{attrs:{viewBox:"0 0 250 250"}},[i("path",{attrs:{d:"M37 11l176 0c11,0 20,4 26,11 7,6 11,16 11,26l0 154c0,10 -4,19 -11,26 -2,2 -4,3 -6,5 -17,13 -33,1 -48,-11 -10,-7 -19,-14 -26,-11 -5,2 -9,7 -12,13 -12,18 -31,17 -46,4 -5,-5 -11,-10 -16,-11 -6,-1 -12,4 -19,9 -11,8 -23,17 -39,11 -6,-1 -12,-5 -16,-9 -7,-7 -11,-16 -11,-26l0 -154c0,-10 4,-20 11,-26 6,-7 15,-11 26,-11zm22 108c8,0 15,7 15,15 0,8 -7,15 -15,15 -8,0 -15,-7 -15,-15 0,-8 7,-15 15,-15zm0 -56c8,0 15,7 15,15 0,8 -7,15 -15,15 -8,0 -15,-7 -15,-15 0,-8 7,-15 15,-15zm44 24c-4,0 -7,-4 -7,-8 0,-4 3,-7 7,-7l96 0c4,0 7,3 7,7 0,4 -3,8 -7,8l-96 0zm0 56c-4,0 -7,-4 -7,-8 0,-4 3,-7 7,-7l96 0c4,0 7,3 7,7 0,4 -3,8 -7,8l-96 0zm129 70c2,-3 3,-7 3,-11l0 -154c0,-6 -2,-12 -6,-16 -4,-4 -10,-6 -16,-6l-176 0c-6,0 -12,2 -16,6 -4,4 -6,10 -6,16l0 154c0,6 2,11 6,15 1,2 3,3 4,3 13,8 23,1 32,-6 9,-7 18,-13 30,-12 10,2 17,8 24,15 8,7 17,8 24,-1 4,-8 9,-15 19,-19 14,-6 27,3 39,13 13,10 26,20 39,3z"}})])]),i("div",{staticClass:"empty-text"},[i("p",[t._v(t._s(t.headline))]),t._t("extra")],2)])])},n=[],a={name:"Empty",props:{slug:{type:String,default:"empty-sample"},headline:{type:String,default:"No data yet"}}},r=a,o=(i("1544"),i("6f5d"),i("2877")),c=Object(o["a"])(r,s,n,!1,null,"53ead389",null);e["a"]=c.exports},"51e0":function(t,e,i){},"55dd":function(t,e,i){"use strict";var s=i("5ca1"),n=i("d8e8"),a=i("4bf8"),r=i("79e5"),o=[].sort,c=[1,2,3];s(s.P+s.F*(r((function(){c.sort(void 0)}))||!r((function(){c.sort(null)}))||!i("2f21")(o)),"Array",{sort:function(t){return void 0===t?o.call(a(this)):o.call(a(this),n(t))}})},"64fb":function(t,e,i){"use strict";var s=i("080d"),n=i.n(s);n.a},"6f5d":function(t,e,i){"use strict";var s=i("1f84"),n=i.n(s);n.a},"7f60":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"message__tab"},[i("v-layout",{staticClass:"message__content",attrs:{wrap:""}},[i("UsersList",{attrs:{id:t.id}}),i("v-flex",{staticClass:"message-group",attrs:{sm9:"",xs12:""}},[i("v-tabs",{staticClass:"tabs",attrs:{centered:"",grow:"","hide-slider":"",height:"60px","show-arrows":t.is_screen_medium_and_down},model:{value:t.active_tab,callback:function(e){t.active_tab=e},expression:"active_tab"}},t._l(t.tabs,(function(e){return i("v-tab",{key:e.id,attrs:{to:e.route,exact:""}},[t._v(" "+t._s(e.name)+" ")])})),1),i("router-view")],1)],1)],1)},n=[],a=(i("c5f6"),i("3d31")),r=i("881c"),o=i("451f"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-flex",{staticClass:"users-list",attrs:{sm3:"",xs12:""}},[i("div",{staticClass:"sidebar__chatlist"},[i("div",{staticClass:"chatlist-header user"},[t._v("User List")]),i("div",{staticClass:"friend__list"},t._l(t.users,(function(e){return i("div",{key:e.id,staticClass:"friend user"},[i("div",{staticClass:"user__img"},[i("v-img",{attrs:{src:e.image_url}}),i("span",{staticClass:"status",class:e.is_online?"online":"offline"})],1),i("span",{staticClass:"user__name"},[t._v(t._s(e.first_name))])])})),0),i("div",{staticClass:"view__more"},[i("v-btn",{staticClass:"view__more_btn",attrs:{text:"",normal:""}},[t._v("VIEW MORE")])],1)])])},l=[],d=i("1be9"),u=function(t){return d["a"].get("api/projects/".concat(t,"/member"))},f={props:{id:[Number,String]},data:function(){return{users:[]}},computed:{loggedUser:function(){return this.$store.getters.user}},created:function(){var t=this;u(this.id).then((function(e){var i=e.data;return t.users=i.data}))}},_=f,m=(i("e98d"),i("2877")),h=Object(m["a"])(_,c,l,!1,null,"43974cca",null),p=h.exports,v={name:"MessagesTab",mixins:[a["a"],r["a"]],components:{CustomTable:o["a"],UsersList:p},props:{id:[Number,String]},data:function(){return{active_tab:null,tabs:[{id:1,name:"Client Messages",route:"/dashboard/project-preview/".concat(this.id,"/messages")},{id:2,name:"Team Messages",route:"/dashboard/project-preview/".concat(this.id,"/messages/team-messages")}],texts:[{title:"Client Messages",content:"Client messages ..."},{title:"Team Messages",content:"Team messages ..."}],sortList:[{title:"Sort by Client"},{title:"Sort by Task"},{title:"Sort by Services"},{title:"Sort by Time"},{title:"Sort by Date"}],headers:[{text:"Client",value:"client",sortable:!0,align:"left"},{text:"Subject",value:"subject",sortable:!0,align:"left"},{text:"Date",value:"date",sortable:!0,align:"left"},{is_action:!0}],friends:[{id:0,name:"Friend One",status:"online"},{id:1,name:"Friend Two",status:"offline"},{id:2,name:"Friend Three",status:"dnd"},{id:3,name:"Friend Four",status:"online"},{id:4,name:"Friend Five",status:"offline"},{id:5,name:"Friend Six",status:"dnd"},{id:6,name:"Friend Seven",status:"online"},{id:7,name:"Friend Eight",status:"online"},{id:8,name:"Friend Nine",status:"offline"},{id:9,name:"Friend Ten",status:"offline"}]}}},g=v,b=(i("85f9"),Object(m["a"])(g,s,n,!1,null,"5c698886",null));e["default"]=b.exports},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"85f9":function(t,e,i){"use strict";var s=i("e464"),n=i.n(s);n.a},8713:function(t,e,i){},"881c":function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var s={computed:{is_screen_medium_and_down:function(){return this.$vuetify.breakpoint.mdAndDown}}}},a130:function(t,e,i){t.exports=i.p+"img/menu.6f39d1e7.svg"},a5da:function(t,e,i){t.exports=i.p+"img/delete.48d94aad.svg"},b047c:function(t,e,i){var s=i("1a8c"),n=i("408c"),a=i("b4b0"),r="Expected a function",o=Math.max,c=Math.min;function l(t,e,i){var l,d,u,f,_,m,h=0,p=!1,v=!1,g=!0;if("function"!=typeof t)throw new TypeError(r);function b(e){var i=l,s=d;return l=d=void 0,h=e,f=t.apply(s,i),f}function w(t){return h=t,_=setTimeout($,e),p?b(t):f}function x(t){var i=t-m,s=t-h,n=e-i;return v?c(n,u-s):n}function y(t){var i=t-m,s=t-h;return void 0===m||i>=e||i<0||v&&s>=u}function $(){var t=n();if(y(t))return C(t);_=setTimeout($,x(t))}function C(t){return _=void 0,g&&l?b(t):(l=d=void 0,f)}function k(){void 0!==_&&clearTimeout(_),h=0,l=m=d=_=void 0}function T(){return void 0===_?f:C(n())}function S(){var t=n(),i=y(t);if(l=arguments,d=this,m=t,i){if(void 0===_)return w(m);if(v)return clearTimeout(_),_=setTimeout($,e),b(m)}return void 0===_&&(_=setTimeout($,e)),f}return e=a(e)||0,s(i)&&(p=!!i.leading,v="maxWait"in i,u=v?o(a(i.maxWait)||0,e):u,g="trailing"in i?!!i.trailing:g),S.cancel=k,S.flush=T,S}t.exports=l},b4b0:function(t,e,i){var s=i("1a8c"),n=i("ffd6"),a=NaN,r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,d=parseInt;function u(t){if("number"==typeof t)return t;if(n(t))return a;if(s(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=s(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=c.test(t);return i||l.test(t)?d(t.slice(2),i?2:8):o.test(t)?a:+t}t.exports=u},d20e:function(t,e,i){"use strict";var s=i("51e0"),n=i.n(s);n.a},e464:function(t,e,i){},e98d:function(t,e,i){"use strict";var s=i("45fa"),n=i.n(s);n.a}}]);
//# sourceMappingURL=chunk-7c95fac6.073f8a84.js.map