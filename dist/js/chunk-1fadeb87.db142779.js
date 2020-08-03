(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1fadeb87"],{"15cd":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"invoice-card"},[n("div",{staticClass:"invoice__content"},[n("dash-card",{staticClass:"invoice__content",attrs:{title:"Invoice","view-more-link":t.viewMoreLink,dashboard:t.dashboard,viewMoreBtn:t.enableViewMore},on:{close:function(e){return t.$emit("close")},"view-more":t.loadMore,expand:t.expand},scopedSlots:t._u([{key:"content",fn:function(){return[n("v-card",{staticClass:"mx-auto",attrs:{flat:""}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"mx-auto"},[n("h4",{staticClass:"text-center grey--text"},[t._v("Clients")]),n("h2",{staticClass:"text-center"},[t._v(t._s(t.total_clients))])]),n("v-col",{staticClass:"mx-auto"},[n("h4",{staticClass:"text-center grey--text"},[t._v("This Month")]),n("h2",{staticClass:"text-center"},[t._v(t._s(t.current_month_total))])]),n("v-col",{staticClass:"mx-auto"},[n("h4",{staticClass:"text-center grey--text"},[t._v("Last Month")]),n("h2",{staticClass:"text-center"},[t._v(t._s(t.last_month_total))])])],1),n("v-sparkline",{attrs:{value:t.value,gradient:t.gradient,smooth:t.radius||!1,padding:t.padding,"line-width":t.width,"stroke-linecap":t.lineCap,"gradient-direction":t.gradientDirection,fill:t.fill,type:t.type,"auto-line-width":t.autoLineWidth,"auto-draw":""}}),n("v-list",{attrs:{disabled:"",tile:"",dense:""}},t._l(t.items,(function(e){return n("v-list-item",{key:e.user.id},[n("v-list-item-avatar",{attrs:{size:"40"}},[n("v-img",{attrs:{src:e.user.image_url}})],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.user.fullname)}}),n("v-list-item-subtitle",{domProps:{textContent:t._s(e.user.job_title)}})],1),n("v-list-item-icon",[t._v(" "+t._s(e.amount)+" ")])],1)})),1)],1)]},proxy:!0}])})],1)])},o=[],i=(n("c5f6"),n("6943")),r=n("1be9"),s=n("579d"),c=[["#222"],["#42b3f4"],["red","orange","yellow"],["purple","violet"],["#00c6ff","#F0F","#FF0"],["#f72047","#ffd200","#1feaea"]],l={name:"InvoiceCard",mixins:[s["a"]],components:{DashCard:i["a"]},props:{id:[Number,String],viewMoreLink:Object,dashboard:Boolean},data:function(){return{loading:!0,items:[],page:1,pagination:{current:1,total:0},headers:[{text:"Name",value:"name"},{text:"Amount",value:"amount"}],total_clients:0,current_month_total:0,last_month_total:0,width:2,radius:0,padding:8,lineCap:"round",gradient:c[5],value:this.generate_random(10,0,10),gradientDirection:"top",gradients:c,fill:!1,type:"trend",autoLineWidth:!1,uniquekey:0,enableViewMore:!0}},mounted:function(){this.getInvoicesData()},methods:{manageViewMorebtn:function(){this.pagination.current===this.pagination.total&&(this.enableViewMore=!1)},getInvoicesData:function(){var t=this;this.loading=!0,r["a"].get("/api/company/invoices/statistics?page=".concat(this.pagination.current)).then((function(e){var n=e.data;t.items=n.data,t.pagination.current=n.current_page,t.pagination.total=n.last_page,t.total_clients=n.total_clients,t.current_month_total=n.current_month_total,t.last_month_total=n.last_month_total,setTimeout((function(){t.manageViewMorebtn()}),1)})).finally((function(){return t.loading=!1}))},loadMore:function(){var t=this;this.loading=!0,r["a"].get("/api/company/invoices/statistics?client_only=true&page=".concat(this.pagination.current+1)).then((function(e){for(var n=e.data,a=n.data.length-1;a>=0;a--)t.items.push(n.data[a]);t.uniquekey+=1,t.pagination.current=n.current_page,setTimeout((function(){t.manageViewMorebtn()}),1)})).finally((function(){return t.loading=!1}))},expand:function(){this.$router.push({name:"expanded-invoice"})}}},u=l,d=(n("350c"),n("2877")),f=Object(d["a"])(u,a,o,!1,null,"67cba294",null);e["a"]=f.exports},"350c":function(t,e,n){"use strict";var a=n("6cab"),o=n.n(a);o.a},"3b2b":function(t,e,n){var a=n("7726"),o=n("5dbc"),i=n("86cc").f,r=n("9093").f,s=n("aae3"),c=n("0bfb"),l=a.RegExp,u=l,d=l.prototype,f=/a/g,A=/a/g,v=new l(f)!==f;if(n("9e1e")&&(!v||n("79e5")((function(){return A[n("2b4c")("match")]=!1,l(f)!=f||l(A)==A||"/a/i"!=l(f,"i")})))){l=function(t,e){var n=this instanceof l,a=s(t),i=void 0===e;return!n&&a&&t.constructor===l&&i?t:o(v?new u(a&&!i?t.source:t,e):u((a=t instanceof l)?t.source:t,a&&i?c.call(t):e),n?this:d,l)};for(var m=function(t){t in l||i(l,t,{configurable:!0,get:function(){return u[t]},set:function(e){u[t]=e}})},g=r(u),p=0;g.length>p;)m(g[p++]);d.constructor=l,l.prototype=d,n("2aba")(a,"RegExp",l)}n("7a56")("RegExp")},"3da5":function(t,e,n){"use strict";var a=n("c7a8"),o=n.n(a);o.a},4469:function(t,e,n){},4917:function(t,e,n){"use strict";var a=n("cb7c"),o=n("9def"),i=n("0390"),r=n("5f1b");n("214f")("match",1,(function(t,e,n,s){return[function(n){var a=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,a):new RegExp(n)[e](String(a))},function(t){var e=s(n,t,this);if(e.done)return e.value;var c=a(t),l=String(this);if(!c.global)return r(c,l);var u=c.unicode;c.lastIndex=0;var d,f=[],A=0;while(null!==(d=r(c,l))){var v=String(d[0]);f[A]=v,""===v&&(c.lastIndex=i(l,o(c.lastIndex),u)),A++}return 0===A?null:f}]}))},"579d":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("28a5"),n("3b2b"),n("a481"),n("6b54"),n("4917");var a=n("7eac"),o={methods:{scrollToBottom:function(t){this.$nextTick((function(){"undefined"!==typeof t&&(t.scrollTop=t.scrollHeight-t.getBoundingClientRect().height)}))},addHost:function(t){return t&&"undefined"!==typeof t?0!==t.indexOf("http://")&&0!==t.indexOf("https://")?a["a"].apiHostBaseURL+t:t:a["a"].apiHostBaseURL},altImage:function(t){t&&t.hasOwnProperty("collection_name")&&"project.files.videos"===t.collection_name?(t.thumb_url=n("7335"),t.public_url=n("7335")):(t.thumb_url=n("e55f"),t.public_url=n("e55f"))},generate_random:function(t,e,n){for(var a=[],o=0;o<t;o++)a.push(parseInt((Math.random()*(n-e)+e).toFixed(0)));return a},youtubeParser:function(t){var e=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,n=t.match(e);return!(!n||11!==n[7].length)&&n[7]},slugify:function(t,e){t=t.toString().toLowerCase().trim();var n=[{to:"a",from:"[ÀÁÂÃÅÆĀĂĄẠẢẤẦẨẪẬẮẰẲẴẶ]"},{to:"ae",from:"[Ä]"},{to:"c",from:"[ÇĆĈČ]"},{to:"d",from:"[ÐĎĐÞ]"},{to:"e",from:"[ÈÉÊËĒĔĖĘĚẸẺẼẾỀỂỄỆ]"},{to:"g",from:"[ĜĞĢǴ]"},{to:"h",from:"[ĤḦ]"},{to:"i",from:"[ÌÍÎÏĨĪĮİỈỊ]"},{to:"j",from:"[Ĵ]"},{to:"ij",from:"[Ĳ]"},{to:"k",from:"[Ķ]"},{to:"l",from:"[ĹĻĽŁ]"},{to:"m",from:"[Ḿ]"},{to:"n",from:"[ÑŃŅŇ]"},{to:"o",from:"[ÒÓÔÕØŌŎŐỌỎỐỒỔỖỘỚỜỞỠỢǪǬƠ]"},{to:"oe",from:"[ŒÖ]"},{to:"p",from:"[ṕ]"},{to:"r",from:"[ŔŖŘ]"},{to:"s",from:"[ŚŜŞŠ]"},{to:"ss",from:"[ß]"},{to:"t",from:"[ŢŤ]"},{to:"u",from:"[ÙÚÛŨŪŬŮŰŲỤỦỨỪỬỮỰƯ]"},{to:"ue",from:"[Ü]"},{to:"w",from:"[ẂŴẀẄ]"},{to:"x",from:"[ẍ]"},{to:"y",from:"[ÝŶŸỲỴỶỸ]"},{to:"z",from:"[ŹŻŽ]"},{to:"-",from:"[·/_,:;']"}];return n.forEach((function(e){t=t.replace(new RegExp(e.from,"gi"),e.to)})),t=t.toString().toLowerCase().replace(/\s+/g,"-").replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),"undefined"!==typeof e&&"-"!==e&&(t=t.replace(/-/g,e)),t},validateEmail:function(t){var e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(String(t).toLowerCase())},validateUrl:function(t){var e=/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;return e.test(t)},getOrdinalNum:function(t){return t+(t>0?["th","st","nd","rd"][t>3&&t<21||t%10>3?0:t%10]:"")},weekdays:function(){return["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},snakeCaseToNormal:function(t){return t.split("_").join(" ")}}}},"5bab":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"expanded-invoice-card"},[n("v-layout",{staticClass:"table-header justify-end align-center"},[n("div",{staticClass:"header-actions"},[n("v-btn",{staticClass:"mr-2",attrs:{fab:"",small:"",dark:"",color:"#3b589e"}},[n("v-icon",[t._v("add")])],1),n("v-btn",{staticClass:"mr-2",attrs:{fab:"",small:""}},[n("v-icon",[t._v("more_horiz")])],1),n("v-btn",{attrs:{fab:"",small:""},on:{click:t.minimize}},[n("v-icon",[t._v("close")])],1)],1)]),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("invoice-card")],1)],1)],1)},o=[],i=n("15cd"),r={name:"ExpandedInvoiceCard",components:{InvoiceCard:i["a"]},data:function(){return{paths:[{text:"Dashboard",disabled:!1,router_name:"default-content"},{text:"Expanded Invoice",disabled:!0,router_name:null}]}},methods:{minimize:function(){this.$router.push({name:"default-content"})}}},s=r,c=(n("3da5"),n("2877")),l=Object(c["a"])(s,a,o,!1,null,null,null);e["default"]=l.exports},6943:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dash__card"},[n("div",{staticClass:"card__header"},[n("h3",{staticClass:"card__title"},[t._v(t._s(t.title))]),t.dashboard?t._t("actions",[n("div",{staticClass:"actions"},[t.hasListView?n("v-icon",{staticClass:"action",attrs:{fab:""},on:{click:function(e){return t.$emit("list-view")}}},[t._v("list")]):t._e(),t.hasGridView?n("v-icon",{staticClass:"action",attrs:{fab:""},on:{click:function(e){return t.$emit("grid-view")}}},[t._v("grid_on")]):t._e(),t.hasRemove?n("v-icon",{staticClass:"action",attrs:{fab:""},on:{click:function(e){return t.$emit("remove")}}},[t._v("remove")]):t._e(),t.hasAdd?n("v-icon",{staticClass:"action",attrs:{fab:""},on:{click:function(e){return t.$emit("add")}}},[t._v("mdi-plus-circle-outline")]):t._e(),t.hasExpand?n("v-icon",{staticClass:"action",attrs:{fab:""},on:{click:function(e){return t.$emit("expand")}}},[t._v("zoom_out_map")]):t._e(),t.hasClose?n("v-icon",{staticClass:"action",attrs:{fab:""},on:{click:function(e){return t.$emit("close")}}},[t._v("close")]):t._e()],1)]):t._e()],2),n("div",{staticClass:"card__content"},[t._t("content")],2),n("v-row",{staticClass:"card__footer",attrs:{"no-gutters":""}},[t._t("footer",[t.viewMoreBtn?n("v-btn",{staticClass:"view__more_btn mx-auto",attrs:{text:"",loading:t.btnloading2},on:{click:function(e){return t.$emit("view-more")}}},[t._v(" VIEW MORE ")]):t._e()])],2)],1)},o=[],i={name:"DashCard",props:{title:String,viewMoreBtn:Boolean,dashboard:Boolean,hasListView:{type:Boolean,default:!1},hasGridView:{type:Boolean,default:!1},hasRemove:{type:Boolean,default:!1},hasAdd:{type:Boolean,default:!1},hasExpand:{type:Boolean,default:!0},hasClose:{type:Boolean,default:!0}},data:function(){return{btnloading2:!1}},created:function(){var t=this;this.$event.$on("btnloading_off",(function(){t.btnloading2=!1}))}},r=i,s=(n("ad81"),n("2877")),c=Object(s["a"])(r,a,o,!1,null,"636cac56",null);e["a"]=c.exports},"6cab":function(t,e,n){},7335:function(t,e,n){t.exports=n.p+"img/no-video-preview.6c0717ce.png"},ad81:function(t,e,n){"use strict";var a=n("4469"),o=n.n(a);o.a},c7a8:function(t,e,n){},e55f:function(t,e){t.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=chunk-1fadeb87.db142779.js.map