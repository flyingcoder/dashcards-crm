(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24983f34"],{"19a0":function(e,t,a){},2292:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"forms-page-response"},[a("div",{staticClass:"forms-page-response-wrapper"},[a("div",{staticClass:"forms-page-response-content"},[e.form?a("v-card",{attrs:{flat:""}},[a("v-tabs",{attrs:{centered:"","icons-and-text":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("v-tabs-slider"),a("v-tab",{staticClass:"mr-2 pt-5",attrs:{href:"#questions"}},[e._v(" Questions "),a("v-icon",[e._v("mdi-cloud-question")])],1),a("v-tab",{staticClass:"ml-2 pt-5",attrs:{href:"#responses"}},[e._v(" Responses "),a("v-badge",{attrs:{color:"green",content:e.responses_count}},[a("v-icon",[e._v("mdi-cloud-print-outline")])],1)],1),a("v-tab-item",{attrs:{value:"questions"}},[a("v-divider"),a("v-card",{staticClass:"mx-auto pa-5",attrs:{flat:"","max-width":"700"}},[a("v-list-item",[a("v-list-item-avatar",{attrs:{tile:"",color:"grey"}},[e.form.company.company_logo?a("v-img",{attrs:{src:e.form.company.company_logo}}):a("v-icon",{attrs:{color:"white"}},[e._v("mdi-alpha-c-circle-outline")])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"headline"},[e._v(e._s(e.form.title))]),a("v-list-item-subtitle",[e._v(e._s(e._f("ucwords")(e.form.company.name)))])],1)],1),a("Preview",{attrs:{questions:e.form.questions}})],1)],1),a("v-tab-item",{attrs:{value:"responses"}},[a("v-divider"),e.responses.length>0?a("v-card",{staticClass:"mx-auto",attrs:{flat:"","max-width":"1000"}},[a("v-row",{attrs:{"no-gutters":""}},[e.activeResponder?a("v-col",{attrs:{cols:"9"}},[a("Response",{attrs:{attachments:e.activeResponder.attachments,items:e.activeResponder.data}})],1):e._e(),a("v-col",{attrs:{md:"3"}},[a("v-list",{staticClass:"responses-list",attrs:{subheader:"",dense:""}},[a("v-subheader",{staticClass:"subtitle-2"},[e._v(" Recent Responses "),a("v-spacer"),a("v-tooltip",{attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,s=t.attrs;return[a("v-btn",e._g(e._b({attrs:{loading:e.loading,icon:""},on:{click:e.refresh}},"v-btn",s,!1),n),[a("v-icon",[e._v("mdi-refresh-circle")])],1)]}}],null,!1,1030626665)},[a("span",[e._v("Refresh")])])],1),e._l(e.responses,(function(t){return a("v-list-item",{key:t.id,class:{active:e.activeResponder===t},on:{click:function(a){e.activeResponder=t}}},[a("v-list-item-avatar",[t.user?a("v-img",{attrs:{src:t.user.image_url}}):a("v-icon",{attrs:{large:""}},[e._v("mdi-account-question-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v(" "+e._s(t.user?t.user.fullname:"Unknown User")+" ")]),a("v-list-item-subtitle",[e._v(" "+e._s(t.user?t.user.job_title:t.ip_address)+" ")])],1)],1)})),e.next_url?a("v-list-item",[a("v-list-item-content",[a("v-btn",{attrs:{block:"",text:"",loading:e.loading_more},on:{click:e.load_more_response}},[e._v(" Load More ")])],1)],1):e._e()],2)],1)],1)],1):a("Empty",{attrs:{icon:"mdi-cloud-off-outline",headline:"No response yet"}})],1)],1)],1):e._e()],1)])])},s=[],r=(a("8e6e"),a("ac6a"),a("456d"),a("2909")),o=a("ade3"),i=a("bc3a"),l=a.n(i),c=a("1be9"),u=a("2f62"),d=a("ec9c"),v=a("db18");function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){Object(o["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f={name:"FormResponses",components:{Preview:d["a"],Response:v["a"]},data:function(){return{paths:[{text:"Dashboard",disabled:!1,route:{name:"default-content"}},{text:"Forms",disabled:!1,route:{name:"forms"}},{text:"Response",disabled:!0,router_name:null}],form:null,loading:!1,tab:"responses",responses:[],next_url:null,activeResponder:null,loading_more:!1,response_counts:0}},mounted:function(){this.$route.params.id>0&&this.getForm(this.$route.params.id),this.$event.$emit("path-change",this.paths)},computed:m(m({},Object(u["c"])(["user"])),{},{responses_count:{get:function(){return this.response_counts||"0"},set:function(e){this.response_counts=e}}}),watch:{responses:{handler:function(e){this.responses_count=e.length},immediate:!0,deep:!0}},methods:{refresh:function(){var e=this;this.loading=!0,c["a"].get("api/forms/".concat(this.$route.params.id,"/responses")).then((function(t){var a=t.data;e.responses=a.data})).finally((function(){return e.loading=!1}))},getForm:function(e){var t=this;this.loading=!0,l.a.all([c["a"].get("api/forms/".concat(e)),c["a"].get("api/forms/".concat(e,"/responses"))]).then(l.a.spread((function(e,a){t.form=e.data,t.responses=a.data.data,t.next_url=a.data.next_page_url,t.activeResponder=t.responses[0]||null}))).finally((function(){return t.loading=!1}))},load_more_response:function(){var e=this;this.loading_more=!0,c["a"].get(this.next_url).then((function(t){var a,n=t.data;(a=e.responses).push.apply(a,Object(r["a"])(n.data)),e.next_url=n.next_page_url})).finally((function(){return e.loading_more=!1}))}}},g=f,h=(a("8c9e"),a("97ea"),a("2877")),b=Object(h["a"])(g,n,s,!1,null,"33563290",null);t["default"]=b.exports},"3b2b":function(e,t,a){var n=a("7726"),s=a("5dbc"),r=a("86cc").f,o=a("9093").f,i=a("aae3"),l=a("0bfb"),c=n.RegExp,u=c,d=c.prototype,v=/a/g,p=/a/g,m=new c(v)!==v;if(a("9e1e")&&(!m||a("79e5")((function(){return p[a("2b4c")("match")]=!1,c(v)!=v||c(p)==p||"/a/i"!=c(v,"i")})))){c=function(e,t){var a=this instanceof c,n=i(e),r=void 0===t;return!a&&n&&e.constructor===c&&r?e:s(m?new u(n&&!r?e.source:e,t):u((n=e instanceof c)?e.source:e,n&&r?l.call(e):t),a?this:d,c)};for(var f=function(e){e in c||r(c,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},g=o(u),h=0;g.length>h;)f(g[h++]);d.constructor=c,c.prototype=d,a("2aba")(n,"RegExp",c)}a("7a56")("RegExp")},4917:function(e,t,a){"use strict";var n=a("cb7c"),s=a("9def"),r=a("0390"),o=a("5f1b");a("214f")("match",1,(function(e,t,a,i){return[function(a){var n=e(this),s=void 0==a?void 0:a[t];return void 0!==s?s.call(a,n):new RegExp(a)[t](String(n))},function(e){var t=i(a,e,this);if(t.done)return t.value;var l=n(e),c=String(this);if(!l.global)return o(l,c);var u=l.unicode;l.lastIndex=0;var d,v=[],p=0;while(null!==(d=o(l,c))){var m=String(d[0]);v[p]=m,""===m&&(l.lastIndex=r(c,s(l.lastIndex),u)),p++}return 0===p?null:v}]}))},"579d":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a("28a5"),a("3b2b"),a("a481"),a("6b54"),a("4917");var n=a("7eac"),s={methods:{scrollToBottom:function(e){this.$nextTick((function(){"undefined"!==typeof e&&(e.scrollTop=e.scrollHeight-e.getBoundingClientRect().height)}))},addHost:function(e){return e&&"undefined"!==typeof e?0!==e.indexOf("http://")&&0!==e.indexOf("https://")?n["a"].apiHostBaseURL+e:e:n["a"].apiHostBaseURL},altImage:function(e){e&&e.hasOwnProperty("collection_name")&&"project.files.videos"===e.collection_name?(e.thumb_url=a("7335"),e.public_url=a("7335")):(e.thumb_url=a("e55f"),e.public_url=a("e55f"))},generate_random:function(e,t,a){for(var n=[],s=0;s<e;s++)n.push(parseInt((Math.random()*(a-t)+t).toFixed(0)));return n},youtubeParser:function(e){var t=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,a=e.match(t);return!(!a||11!==a[7].length)&&a[7]},slugify:function(e,t){e=e.toString().toLowerCase().trim();var a=[{to:"a",from:"[ÀÁÂÃÅÆĀĂĄẠẢẤẦẨẪẬẮẰẲẴẶ]"},{to:"ae",from:"[Ä]"},{to:"c",from:"[ÇĆĈČ]"},{to:"d",from:"[ÐĎĐÞ]"},{to:"e",from:"[ÈÉÊËĒĔĖĘĚẸẺẼẾỀỂỄỆ]"},{to:"g",from:"[ĜĞĢǴ]"},{to:"h",from:"[ĤḦ]"},{to:"i",from:"[ÌÍÎÏĨĪĮİỈỊ]"},{to:"j",from:"[Ĵ]"},{to:"ij",from:"[Ĳ]"},{to:"k",from:"[Ķ]"},{to:"l",from:"[ĹĻĽŁ]"},{to:"m",from:"[Ḿ]"},{to:"n",from:"[ÑŃŅŇ]"},{to:"o",from:"[ÒÓÔÕØŌŎŐỌỎỐỒỔỖỘỚỜỞỠỢǪǬƠ]"},{to:"oe",from:"[ŒÖ]"},{to:"p",from:"[ṕ]"},{to:"r",from:"[ŔŖŘ]"},{to:"s",from:"[ŚŜŞŠ]"},{to:"ss",from:"[ß]"},{to:"t",from:"[ŢŤ]"},{to:"u",from:"[ÙÚÛŨŪŬŮŰŲỤỦỨỪỬỮỰƯ]"},{to:"ue",from:"[Ü]"},{to:"w",from:"[ẂŴẀẄ]"},{to:"x",from:"[ẍ]"},{to:"y",from:"[ÝŶŸỲỴỶỸ]"},{to:"z",from:"[ŹŻŽ]"},{to:"-",from:"[·/_,:;']"}];return a.forEach((function(t){e=e.replace(new RegExp(t.from,"gi"),t.to)})),e=e.toString().toLowerCase().replace(/\s+/g,"-").replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),"undefined"!==typeof t&&"-"!==t&&(e=e.replace(/-/g,t)),e},validateEmail:function(e){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(String(e).toLowerCase())},validateUrl:function(e){var t=/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;return t.test(e)},getOrdinalNum:function(e){return e+(e>0?["th","st","nd","rd"][e>3&&e<21||e%10>3?0:e%10]:"")},weekdays:function(){return["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},snakeCaseToNormal:function(e){return e.split("_").join(" ")}}}},7335:function(e,t,a){e.exports=a.p+"img/no-video-preview.6c0717ce.png"},"8c9e":function(e,t,a){"use strict";var n=a("19a0"),s=a.n(n);s.a},"97ea":function(e,t,a){"use strict";var n=a("b784"),s=a.n(n);s.a},b784:function(e,t,a){},db18:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{flat:""}},[e.items?a("v-card-text",[e._l(e.items,(function(t,n){return["file_upload"!==t.type&&t.hasOwnProperty("value")?a("div",{key:n,staticClass:"pa-2"},[a("p",{staticClass:"subtitle-2"},[t.label?a("span",{staticClass:"subtitle-2"},[e._v(e._s(t.label))]):e._e()]),a("p",{staticClass:"subtitle-1"},[t.value?a("span",[e._v(e._s("object"===typeof t.value?t.value.join(", "):t.value))]):a("span",{staticClass:"text-italic"},[e._v("No answer")])])]):"file_upload"===t.type?a("div",{key:n},[a("p",{staticClass:"subtitle-2"},[t.label?a("span",{staticClass:"subtitle-2"},[e._v(e._s(t.label))]):e._e()]),a("p",{staticClass:"subtitle-1"},[t.value.length>0?e._l(e.getAttachments(t.id),(function(t,n){return a("v-chip",{key:n,staticClass:"mr-2 my-1",attrs:{label:""}},[a("v-avatar",{staticClass:"mr-3"},[a("v-img",{attrs:{src:t.file_url}},[t.file_url?e._e():a("v-icon",[e._v("mdi-file-outline")])],1)],1),e._v(" "+e._s(t.filename)+" ("+e._s(e._f("bytesToSize")(t.filesize))+") "),a("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(n){var s=n.on,r=n.attrs;return[a("v-icon",e._g(e._b({attrs:{right:""},on:{click:function(a){return e.openLink(t.file_url)}}},"v-icon",r,!1),s),[e._v(" mdi-cloud-download-outline ")])]}}],null,!0)},[a("span",[e._v("Download file")])])],1)})):a("span",[e._v("No file uploaded.")])],2)]):a("div",{key:n,staticClass:"pa-2"},["divider"===t.type?a("div",[a("hr")]):"image"===t.type?a("div",[t.label?a("p",[e._v(e._s(t.label))]):e._e(),a("v-img",{class:e.alignClass(t.align),staticStyle:{"max-width":"100%"},attrs:{width:t.itemwidth,height:t.itemheight,src:t.src,alt:t.alt}})],1):"video"===t.type?a("div",[t.label?a("p",[e._v(e._s(t.label))]):e._e(),a("iframe",{class:e.alignClass(t.align),staticStyle:{"max-width":"100%",display:"block"},attrs:{allow:"fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",src:e.getEmbed(t.src),width:t.itemwidth,height:t.itemheight}})]):"paragraph"===t.type?a("div",[a("p",{style:"text-align:"+t.align},[e._v(" "+e._s(t.text)+" ")])]):e.text_fields.includes(t.type)?a("div",[a(t.tag,{tag:"component",style:"text-align:"+t.align},[e._v(" "+e._s(t.text)+" ")])],1):e._e()])]}))],2):e._e()],1)},s=[],r=a("579d"),o={name:"Response",mixins:[r["a"]],props:{items:Array,attachments:Array},computed:{text_fields:function(){return["h1","h2","h3","h4","h5","h6","label"]}},methods:{getAttachments:function(e){return 0===this.attachments.length?[]:this.attachments.filter((function(t){return t.title===e}))},alignClass:function(e){return"right"===e?"ml-auto":"center"===e?"mx-auto":"mr-auto"},getEmbed:function(e){var t=e?this.youtubeParser(e):"";return"https://www.youtube.com/embed/".concat(t)},openLink:function(e){window.open(e,"blank")}}},i=o,l=a("2877"),c=Object(l["a"])(i,n,s,!1,null,"b1c05586",null);t["a"]=c.exports},e55f:function(e,t){e.exports="data:image/jpeg;base64,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"},ec9c:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{flat:""}},[a("v-card-text",e._l(e.questions,(function(t,n){return a("v-col",{key:t.id,attrs:{md:"12"}},["divider"===t.type?a("div",[a("hr"),t.hover?a("v-icon",{staticClass:"hr-action",attrs:{small:""},on:{click:function(t){return e.remove(n)}}},[e._v("mdi-delete")]):e._e()],1):"image"===t.type?a("div",[t.label?a("p",[e._v(e._s(t.label))]):e._e(),a("v-img",{class:e.alignClass(t.align),staticStyle:{"max-width":"100%"},attrs:{width:t.itemwidth,height:t.itemheight,src:t.src,alt:t.alt}})],1):"video"===t.type?a("div",[t.label?a("p",[e._v(e._s(t.label))]):e._e(),a("iframe",{class:e.alignClass(t.align),staticStyle:{"max-width":"100%",display:"block"},attrs:{allow:"fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",src:e.getEmbed(t.src),width:t.itemwidth,height:t.itemheight}})]):"paragraph"===t.type?a("div",[a("p",{style:"text-align:"+t.align},[e._v(" "+e._s(t.text)+" ")])]):e.textfield.includes(t.type)?a("div",[a(t.tag,{tag:"component",style:"text-align:"+t.align},[e._v(" "+e._s(t.text)+" ")])],1):"date"===t.type?a("div",[t.label?a("label",[e._v(e._s(t.label))]):e._e(),a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","max-width":"100%","min-width":"250px"},scopedSlots:e._u([{key:"activator",fn:function(n){var s=n.on,r=n.attrs;return[a("v-text-field",e._g(e._b({attrs:{filled:"","hide-details":"auto",label:t.placeholder,readonly:""},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"item.value"}},"v-text-field",r,!1),s))]}}],null,!0),model:{value:t.popover,callback:function(a){e.$set(t,"popover",a)},expression:"item.popover"}},[a("v-date-picker",{ref:"picker",refInFor:!0,attrs:{max:t.max_date,min:t.min_date},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"item.value"}})],1)],1):"time"===t.type?a("div",[t.label?a("label",[e._v(e._s(t.label))]):e._e(),a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","max-width":"100%","min-width":"250px"},scopedSlots:e._u([{key:"activator",fn:function(n){var s=n.on,r=n.attrs;return[a("v-text-field",e._g(e._b({attrs:{filled:"","hide-details":"auto",label:t.placeholder,readonly:""},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"item.value"}},"v-text-field",r,!1),s))]}}],null,!0),model:{value:t.popover,callback:function(a){e.$set(t,"popover",a)},expression:"item.popover"}},[a("v-time-picker",{attrs:{"full-width":""},on:{"click:minute":function(e){t.popover=!1}},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"item.value"}})],1)],1):"checkbox"===t.type?a("div",[t.label?a("label",[e._v(e._s(t.label))]):e._e(),a("v-checkbox",{attrs:{dense:"","hide-details":"auto",label:t.text},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"item.value"}})],1):"radio_group"===t.type?a("div",[t.label?a("label",[e._v(e._s(t.label))]):e._e(),"row"===t.direction?a("v-radio-group",{attrs:{row:"",mandatory:t.required},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"item.value"}},e._l(t.items,(function(e,t){return a("v-radio",{key:t,attrs:{label:e,value:e}})})),1):a("v-radio-group",{attrs:{column:"",mandatory:t.required},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"item.value"}},e._l(t.items,(function(e,t){return a("v-radio",{key:t,attrs:{label:e,value:e}})})),1)],1):"checkboxes"===t.type?a("div",[t.label?a("label",[e._v(e._s(t.label))]):e._e(),"row"===t.direction?a("v-row",{attrs:{"no-gutters":"",dense:""}},[a("v-col",{staticClass:"d-flex flex-wrap",attrs:{md:"12"}},e._l(t.items,(function(n,s){return a("v-checkbox",{key:s,staticClass:"mr-3 my-1",attrs:{"hide-details":"auto",label:n,value:n},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"item.value"}})})),1)],1):a("v-row",{attrs:{"no-gutters":"",dense:""}},[a("v-col",{attrs:{md:"12"}},e._l(t.items,(function(n,s){return a("v-checkbox",{key:s,staticClass:"my-1",attrs:{"hide-details":"auto",label:n,value:n},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"item.value"}})})),1)],1)],1):"file_upload"===t.type?a("div",[t.label?a("label",[e._v(e._s(t.label))]):e._e(),t.required?a("sup",[e._v("*")]):e._e(),a("v-file-input",{attrs:{clearable:"","clear-icon":"mdi-close-circle-outline",filled:"",counter:"",multiple:t.multiple,placeholder:t.placeholder,"hide-details":"",required:t.required},scopedSlots:e._u([{key:"selection",fn:function(n){var s=n.index,r=n.text;return[s<3?a("v-chip",{attrs:{color:"deep-purple accent-5",dark:"",label:"",small:""}},[e._v(" "+e._s(r)+" ")]):3===s?a("span",{staticClass:"overline grey--text text--darken-3 mx-2"},[e._v(" + "+e._s(t.value.length-2)+" File(s) ")]):e._e()]}}],null,!0),model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"item.value"}})],1):a("div",[t.label?a("label",[e._v(e._s(t.label))]):e._e(),a(t.tag,{tag:"component",attrs:{placeholder:t.placeholder,type:t.tag_type,filled:"","hide-details":"auto",required:t.required,rows:t.rows,items:t.items},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"item.value"}})],1)])})),1)],1)},s=[],r=a("579d"),o={name:"Preview",mixins:[r["a"]],props:{questions:Array},computed:{textfield:function(){return["h1","h2","h3","h4","h5","h6","label"]}},methods:{alignClass:function(e){return"right"===e?"ml-auto":"center"===e?"mx-auto":"mr-auto"},getEmbed:function(e){var t=e?this.youtubeParser(e):"";return"https://www.youtube.com/embed/".concat(t)}}},i=o,l=a("2877"),c=Object(l["a"])(i,n,s,!1,null,"0a7fbfee",null);t["a"]=c.exports}}]);
//# sourceMappingURL=chunk-24983f34.68d4e54d.js.map