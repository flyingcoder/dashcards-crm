(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c39d43b"],{"174f":function(e,t,n){},"1edf":function(e,t,n){"use strict";var i=n("e305"),a=n.n(i);a.a},"259d":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"breadcrumb-wrapper"},[n("v-breadcrumbs",{attrs:{items:e.paths},scopedSlots:e._u([{key:"item",fn:function(t){var i=t.item;return[n("v-breadcrumbs-item",{staticClass:"page__title",attrs:{disabled:i.disabled}},[n("span",{on:{click:function(t){return e.navigate_from_breadcrumb(i)}}},[e._v(" "+e._s(i.text)+" ")])])]}}])},[n("v-icon",{attrs:{slot:"divider"},slot:"divider"},[e._v("chevron_right")])],1),e._t("extra")],2)},a=[],o={name:"Breadcrumb",props:{paths:{type:Array,default:function(){return[]}}},methods:{navigate_from_breadcrumb:function(e){if(e.hasOwnProperty("path"))e.path&&this.$router.push({path:e.path});else{var t=e.router_name;t&&this.$router.push({name:t})}}}},s=o,r=(n("fe54"),n("573a"),n("2877")),c=Object(r["a"])(s,i,a,!1,null,"5c807bcd",null);t["a"]=c.exports},"2ab4":function(e,t,n){},"313a":function(e,t,n){},"3b2b":function(e,t,n){var i=n("7726"),a=n("5dbc"),o=n("86cc").f,s=n("9093").f,r=n("aae3"),c=n("0bfb"),l=i.RegExp,d=l,u=l.prototype,f=/a/g,p=/a/g,v=new l(f)!==f;if(n("9e1e")&&(!v||n("79e5")((function(){return p[n("2b4c")("match")]=!1,l(f)!=f||l(p)==p||"/a/i"!=l(f,"i")})))){l=function(e,t){var n=this instanceof l,i=r(e),o=void 0===t;return!n&&i&&e.constructor===l&&o?e:a(v?new d(i&&!o?e.source:e,t):d((i=e instanceof l)?e.source:e,i&&o?c.call(e):t),n?this:u,l)};for(var m=function(e){e in l||o(l,e,{configurable:!0,get:function(){return d[e]},set:function(t){d[e]=t}})},g=s(d),_=0;g.length>_;)m(g[_++]);u.constructor=l,l.prototype=u,n("2aba")(i,"RegExp",l)}n("7a56")("RegExp")},4917:function(e,t,n){"use strict";var i=n("cb7c"),a=n("9def"),o=n("0390"),s=n("5f1b");n("214f")("match",1,(function(e,t,n,r){return[function(n){var i=e(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,i):new RegExp(n)[t](String(i))},function(e){var t=r(n,e,this);if(t.done)return t.value;var c=i(e),l=String(this);if(!c.global)return s(c,l);var d=c.unicode;c.lastIndex=0;var u,f=[],p=0;while(null!==(u=s(c,l))){var v=String(u[0]);f[p]=v,""===v&&(c.lastIndex=o(l,a(c.lastIndex),d)),p++}return 0===p?null:f}]}))},"573a":function(e,t,n){"use strict";var i=n("c5c4"),a=n.n(i);a.a},"579d":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("28a5"),n("3b2b"),n("a481"),n("6b54"),n("4917");var i=n("7eac"),a={methods:{scrollToBottom:function(e){this.$nextTick((function(){"undefined"!==typeof e&&(e.scrollTop=e.scrollHeight-e.getBoundingClientRect().height)}))},addHost:function(e){return e&&"undefined"!==typeof e?0!==e.indexOf("http://")&&0!==e.indexOf("https://")?i["a"].apiHostBaseURL+e:e:i["a"].apiHostBaseURL},altImage:function(e){e&&e.hasOwnProperty("collection_name")&&"project.files.videos"===e.collection_name?(e.thumb_url=n("7335"),e.public_url=n("7335")):(e.thumb_url=n("e55f"),e.public_url=n("e55f"))},generate_random:function(e,t,n){for(var i=[],a=0;a<e;a++)i.push(parseInt((Math.random()*(n-t)+t).toFixed(0)));return i},youtubeParser:function(e){var t=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,n=e.match(t);return!(!n||11!==n[7].length)&&n[7]},slugify:function(e,t){e=e.toString().toLowerCase().trim();var n=[{to:"a",from:"[ÀÁÂÃÅÆĀĂĄẠẢẤẦẨẪẬẮẰẲẴẶ]"},{to:"ae",from:"[Ä]"},{to:"c",from:"[ÇĆĈČ]"},{to:"d",from:"[ÐĎĐÞ]"},{to:"e",from:"[ÈÉÊËĒĔĖĘĚẸẺẼẾỀỂỄỆ]"},{to:"g",from:"[ĜĞĢǴ]"},{to:"h",from:"[ĤḦ]"},{to:"i",from:"[ÌÍÎÏĨĪĮİỈỊ]"},{to:"j",from:"[Ĵ]"},{to:"ij",from:"[Ĳ]"},{to:"k",from:"[Ķ]"},{to:"l",from:"[ĹĻĽŁ]"},{to:"m",from:"[Ḿ]"},{to:"n",from:"[ÑŃŅŇ]"},{to:"o",from:"[ÒÓÔÕØŌŎŐỌỎỐỒỔỖỘỚỜỞỠỢǪǬƠ]"},{to:"oe",from:"[ŒÖ]"},{to:"p",from:"[ṕ]"},{to:"r",from:"[ŔŖŘ]"},{to:"s",from:"[ŚŜŞŠ]"},{to:"ss",from:"[ß]"},{to:"t",from:"[ŢŤ]"},{to:"u",from:"[ÙÚÛŨŪŬŮŰŲỤỦỨỪỬỮỰƯ]"},{to:"ue",from:"[Ü]"},{to:"w",from:"[ẂŴẀẄ]"},{to:"x",from:"[ẍ]"},{to:"y",from:"[ÝŶŸỲỴỶỸ]"},{to:"z",from:"[ŹŻŽ]"},{to:"-",from:"[·/_,:;']"}];return n.forEach((function(t){e=e.replace(new RegExp(t.from,"gi"),t.to)})),e=e.toString().toLowerCase().replace(/\s+/g,"-").replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),"undefined"!==typeof t&&"-"!==t&&(e=e.replace(/-/g,t)),e},validateEmail:function(e){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(String(e).toLowerCase())},validateUrl:function(e){var t=/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;return t.test(e)},getOrdinalNum:function(e){return e+(e>0?["th","st","nd","rd"][e>3&&e<21||e%10>3?0:e%10]:"")},weekdays:function(){return["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},snakeCaseToNormal:function(e){return e.split("_").join(" ")}}}},5803:function(e,t,n){},"5b70":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("custom-dialog",{attrs:{title:e.title,content:e.textContent,"button1-text":e.cancelButtonText,"button2-text":e.deleteButtonText,open:e.open},on:{"update:open":function(t){e.open=t},button1:e.cancel_clicked,button2:e.delete_clicked},scopedSlots:e._u([{key:"content",fn:function(){return[e._t("content",[n("v-banner",{attrs:{"two-line":"",outlined:"",tile:"",flat:""}},[n("v-icon",{attrs:{slot:"icon","x-large":"",color:"red accent-4"},slot:"icon"},[e._v(" mdi-alert-octagram ")]),n("p",{staticClass:"subtitle-1",domProps:{innerHTML:e._s(e.textContent)}})],1)])]},proxy:!0}],null,!0)})],1)},a=[],o=n("57e5"),s={components:{CustomDialog:o["a"]},props:{title:{type:String,default:"Default Modal Title"},textContent:{type:String,default:"Default Modal Text Content"},cancelButtonText:{type:String,default:"Cancel"},deleteButtonText:{type:String,default:"Yes, Delete"},openDialog:Boolean},data:function(){return{open:!1}},watch:{openDialog:function(e){this.open=e},open:function(e){this.$emit("update:openDialog",e)}},methods:{cancel_clicked:function(){this.open=!1},delete_clicked:function(){this.$emit("delete")},showDialog:function(){this.open=!0},closeDialog:function(){this.open=!1}}},r=s,c=n("2877"),l=Object(c["a"])(r,i,a,!1,null,null,null);t["a"]=l.exports},7335:function(e,t,n){e.exports=n.p+"img/no-video-preview.6c0717ce.png"},"7e7e":function(e,t,n){"use strict";var i=n("174f"),a=n.n(i);a.a},a2fd:function(e,t,n){"use strict";n.r(t),t["default"]="Search Engine Optimization (SEO)\r\nWebsite Design and Development\r\nSocial Media Marketing\r\nGoogle Analytics\r\nBusiness Blogging Services\r\nFull Internet Marketing\r\nGraphic Design Services\r\nContent Marketing"},c5c4:function(e,t,n){},cc52:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"services"},[n("services-add-dialog",{ref:"add_dialog",attrs:{dialog:e.add_dialog,title:"Add New Service(s)"},on:{"update:dialog":function(t){e.add_dialog=t},save:function(t){return e.save_new_services_list(t)}}}),n("services-edit-dialog",{ref:"edit_dialog",attrs:{dialog:e.edit_dialog,title:"Edit Service","is-edit-dialog":e.edit_dialog,"fields-to-edit":e.edit_item},on:{"update:dialog":function(t){e.edit_dialog=t},save:function(t){return e.update_item("update_services_list",t)}}}),n("delete-dialog",{attrs:{"open-dialog":e.delete_dialog,title:"Delete Service","text-content":"Are you sure you want to delete this service? This will also delete projects and campaigns associated with this service."},on:{"update:openDialog":function(t){e.delete_dialog=t},"update:open-dialog":function(t){e.delete_dialog=t},delete:function(t){return e.delete_item("delete_service_list")}}}),n("IconUploader",{ref:"uploadModal",on:{uploaded:e.setIcon}}),n("VueTable",{key:e.componentKey,attrs:{headers:e.headers,items:e.items,loading:e.loading,title:"Services",permission:e.$_permissions.get("services"),noMoreData:e.noMoreData,showSelect:!1,icon:"mdi-alpha-s-box-outline",emptyText:"No service yet"},on:{"load-more":e.load_more_services,"delete-selected":function(t){return e.open_bulk_delete_dialog(t)}},scopedSlots:e._u([{key:"row-slot",fn:function(t){var i=t.item;return[n("td",{staticClass:"clickable-td"},[n("v-tooltip",{attrs:{right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,o=t.attrs;return[n("v-avatar",e._g(e._b({attrs:{size:40},on:{click:function(t){return e.openIconModal(i)}}},"v-avatar",o,!1),a),[i.icon?n("v-img",{attrs:{src:i.icon}}):n("v-icon",[e._v("mdi-image-plus")])],1)]}}],null,!0)},[n("span",[e._v("Change Icon")])])],1),n("td",{staticClass:"service__name text-cap"},[e._v(e._s(e._f("ucwords")(i.name)))]),n("td",{staticClass:"text-cap"},[n("Avatar",{attrs:{user:i.creator}})],1),n("td",{staticClass:"text-center"},[e._v(e._s(i.campaigns_count))]),n("td",[e._v(e._s(e._f("bzFromNow")(i.service_created_at)))]),n("Actions",{attrs:{item:i,hasView:!1,permissions:e.$_permissions.get("services")},on:{delete:function(t){return e.open_delete_dialog(i)},edit:function(t){return e.open_edit_dialog(i)}}})]}}])},[n("template",{slot:"header-toolbar"},[n("table-header",{on:{click:function(t){e.add_dialog=!0}}})],1),n("template",{slot:"empty-slot"},[n("v-btn",{attrs:{dark:"",color:"#3b589e",depressed:""},on:{click:function(t){e.add_dialog=!0}}},[e._v("Add Service")])],1)],2)],1)},a=[],o=(n("20d6"),n("2909")),s=(n("7f7f"),n("e06e")),r=n("1be9"),c=n("579d"),l=n("0ebe"),d=n("259d"),u=n("ec12"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"edit-service"},[n("CustomDialog",{ref:"dialog",attrs:{title:"Edit Service",open:e.open,"button2-text":"Save"},on:{"update:open":function(t){e.open=t},button1:function(t){e.open=!1},button2:e.save}},[n("template",{slot:"content"},[n("v-text-field",{staticClass:"service__input",attrs:{filled:"",label:"Service name","hide-details":"auto",color:"#657186"},model:{value:e.name,callback:function(t){e.name="string"===typeof t?t.trim():t},expression:"name"}})],1)],2)],1)},p=[],v=(n("28a5"),n("57e5")),m=n("a2fd"),g={name:"ServicesEditDialog",props:{dialog:Boolean,title:String,isEditDialog:Boolean,fieldsToEdit:{type:Object,default:function(){}}},components:{CustomDialog:v["a"]},mounted:function(){},data:function(){return{open:!1,name:null,recommendedServices:[]}},watch:{dialog:function(e){this.open=e},open:function(e){this.$emit("update:dialog",e)},fieldsToEdit:{handler:function(e){this.isEditDialog&&this.update_fields(e)},deep:!0}},methods:{cancel:function(){this.open=!1},save:function(){var e={name:this.name};this.$emit("save",e)},update_fields:function(e){var t=e.fields,n=Object.assign({},t);this.name=n.name},get_recommended_services:function(){var e=m["default"].split("\n");return e.filter((function(e){return 0!=e.trim().length}))}}},_=g,h=n("2877"),A=Object(h["a"])(_,f,p,!1,null,null,null),b=A.exports,C=n("5b70"),w=n("29d6"),x=n("ee09"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"add-picture"},[n("CustomDialog",{ref:"picture_dialog",attrs:{title:e.title,open:e.dialog},on:{"update:open":function(t){e.dialog=t},button1:e.cancel},scopedSlots:e._u([{key:"content",fn:function(){return[n("div",{staticClass:"content"},[n("Loader",{attrs:{loading:e.loading}}),e.file_uploaded?n("CropImage",{ref:"croppie",attrs:{image:e.image64,options:e.croppie.options,result:e.croppie.result}}):n("CustomDropzone",{ref:"dropzone",attrs:{duplicateCheck:!0,acceptedFiles:e.validFileType,options:e.dropzoneOptions,useCustomSlot:!0,dictFileTooBig:"File too big",dictInvalidFileType:"Invalid file type"},on:{"file-added":e.file_added}})],1)]},proxy:!0},{key:"button2",fn:function(){return[n("v-btn",{attrs:{disabled:!e.file_uploaded},on:{click:e.get_cropped_image}},[e._v(" "+e._s(e.mainBtnText)+" ")])]},proxy:!0}])})],1)},B=[],E=(n("6762"),n("2fdb"),n("3835")),k=(n("c5f6"),n("854b")),S=n("8b7e"),D=n("8c75"),I=n("7eac"),M={name:"IconUploader",components:{Loader:k["a"],CustomDialog:v["a"],CustomDropzone:S["a"],CropImage:D["a"]},props:{title:{type:String,default:"Upload Icon"},mainBtnText:{type:String,default:"Save"},imageWidth:{type:Number,default:200},imageHeight:{type:Number,default:200},imageType:{type:String,default:"circle"},extraData:Object},data:function(){return{file_uploaded:!1,image64:null,loading:!1,open:!1}},computed:{validFileType:function(){return I["a"].allowedImageType},dialog:{get:function(){return this.open},set:function(e){this.open=e}},dropzoneOptions:function(){return{maxFiles:1,thumbnailWidth:150,addRemoveLinks:!0,url:I["a"].apiHostBaseURL+"/api/file/image-upload",headers:{Authorization:"Bearer "+localStorage.getItem("token")},method:"put",autoProcessQueue:!1}},croppie:function(){return{options:{viewport:{width:this.imageWidth,height:this.imageHeight,type:this.imageType},showZoomer:!0,boundary:{width:300,height:300},enableOrientation:!0},result:"blob"}}},methods:{openDialog:function(){this.dialog=!0},file_added:function(e){var t=this,n=Object(E["a"])(e,1),i=n[0],a=new FileReader;this.validFileType.includes(i.type)?(a.onload=function(){t.image64=a.result,t.file_uploaded=!0},a.readAsDataURL(i)):(this.$event.$emit("open_snackbar","Not a valid image!","error"),this.file_uploaded=!1,this.dialog=!1)},get_cropped_image:function(){this.$refs.croppie.get_result().then(this.upload_image)},upload_image:function(e){var t=this,n=new FormData;n.append("file",e),n.append("extra",this.extraData),this.loading=!0,r["a"].post("api/file/image-upload",n).then((function(e){var n=e.data;t.$refs.croppie.clear_component(),t.$emit("uploaded",n),t.$refs.picture_dialog.clear_and_close(),Object.assign(t.$data,t.$options.data.apply(t))})).finally((function(){return t.loading=!1}))},cancel:function(){this.dialog=!1,this.file_uploaded=!1}}},z=M,O=(n("1edf"),Object(h["a"])(z,y,B,!1,null,"7a68fde5",null)),T=O.exports,Y={name:"Services",mixins:[s["a"],c["a"]],components:{VueTable:l["a"],Breadcrumb:d["a"],ServicesAddDialog:u["a"],ServicesEditDialog:b,DeleteDialog:C["a"],TableHeader:w["a"],Actions:x["a"],IconUploader:T},data:function(){return{paths:[{text:"Dashboard",disabled:!1,router_name:"default-content"},{text:"Services",disabled:!0,router_name:null}],headers:[{text:"",sortable:!1,width:40},{text:"Service Name",value:"name",sortable:!0},{text:"Created By",value:"campaigns_count",sortable:!0},{text:"Campaigns Created",value:"created_at",sortable:!0,align:"center"},{text:"Date Created",value:"created_at",sortable:!0},{text:"Actions",value:"action",sortable:!1,align:"center",width:"140px"}],table_config:{route_name:"services",add_message:"New Service(s) added successfully!",update_message:"Service updated successfully!",delete_message:"Service deleted successfully!",refresh_table_message:"Table refreshed",refresh_table_api_name:"paginate_services_table"},activeService:null}},mounted:function(){this.$event.$emit("path-change",this.paths),this.load_services()},methods:{toggleAll:function(){this.selected.length?this.selected=[]:this.selected=this.items.slice()},load_services:function(){this.fill_table_via_url("api/services-list")},load_more_services:function(){this.load_more_via_url("api/services-list")},save_new_services_list:function(e){var t=this;r["a"].post("api/services-list",{names:e.map((function(e){return e.name}))}).then((function(e){var n,i=e.data;(n=t.items).push.apply(n,Object(o["a"])(i)),t.$event.$emit("open_snackbar","New service(s) added!")})).finally((function(){t.add_dialog=!1}))},openIconModal:function(e){this.activeService=e,this.$refs.uploadModal.openDialog()},setIcon:function(e){var t=this;this.icon=e.url,r["a"].post("api/services-list/set-icon",{source_url:this.icon,id:this.activeService.id}).then((function(e){e.data;var n=t.items.findIndex((function(e){return e.id===t.activeService.id}));~n&&(t.items[n].icon=t.icon)})).finally((function(){t.activeService=null}))}}},Q=Y,j=(n("e6e6d"),Object(h["a"])(Q,i,a,!1,null,"0aec5070",null));t["default"]=j.exports},cf94:function(e,t,n){"use strict";var i=n("5803"),a=n.n(i);a.a},e305:function(e,t,n){},e55f:function(e,t){e.exports="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADFCAYAAAAYLR06AAAHhElEQVR4nO3dP0scWxjH8XFZmzRpvOFCEBbjH6IJUSGQvIQUVjZhERSiEiEvIVWKkCZWarNVIAFtDPgPIiyBgFpImmCp7hazr+PcakO43OvOz51znj2z3+LTOufMeb7EuLuzSavVcgCySawXAMSEYAABwQACggEEBAMICAYQEAwgIBhAQDCAgGAAAcEAAoIBBAQDCAgGEBAMICAYQEAwgIBgAAHBAAKCAQQEAwgIBhAQDCAgGEBAMICAYAABwQACggEEBAMICAYQEAwgIBhAQDCAgGAAAcEAAoIBBAQDCAgGEBAMICAYQEAwgIBgAAHBAAKCAQQE4/PmJklw1nsuOoLx5O7duybB3Llzx3zvRUYwHty7d88klrahoSHze1BUBJOz6elp01jaxsfHze9FERFMjtbW1sxD+dPS0pL5PSkagsnJ+vq6eSD/5f379+b3pkgIJgdbW1vmYdxkfX3d/B4VBcF06fT01DyILOr1uvm9KgKC6cLFxYV5CIpfv36Z37PY9W0wb968MR/gGK2trZmfHcEE8u3bN/OBK5LDw0PzMyUYT54/f24+YEX09OlT87MlmJw9fvzYfLCKbGxszPyMCSYnHz9+NB+ofvDu3TvzsyaYPDbYA8PUL9I0NT9vgunCly9fzIeon9RqNfMzJ5huNtcDQ9RvrM+cYAgmKtZnTjAEExXrMycYgomK9ZkTDMFExfrMCYZgomJ95gRDMFGxPnOCKXgwAwMDbnx83FWrVbexseGOj49/29zcdNVq1U1MTLhSqWS+VoIhGDPb29vyK+NpmrqdnR3ztRNMQVkPz7/l/SSXqakp8z0RTIFYD09bpVJxjUbDyx6bzaYbGxsz3yPBFID18CRJ4k5OToLs9fz83HyvBBM5y8Epl8smey6XywTjc6asF+B1c0ZDc//+fbO3uqdp6iqVCsH4minrBXjdnFEs1vtutVpueHiYYHzMlPUCvG4u8LCUy+Wu/2U5Ojr6rZufk6apGxwcJJi8Z8p6AV431+PD0mg03OvXrzP97OXlZXd9fV24exAbgsmJ+tewJ0+e3Oo6k5OT0nXOzs4IJs+Zsl6A180FGpJKpZJ5TXt7e7lcc3d3N/M1R0dHCSavmbJegNfNBRqSrC9Kvnz5Mtfrzs/PZ7pus9kkmLxmynoBXjcXYECyvt0l71ja5ubmMl1/dnaWYPKYKesFeN1cjwxIXr+G/Z+dnZ2o7kfMCCbAgLCO4iCYLmxvb3dcQ6jH1GZ5XOvBwQHBEIxdMJ1epGw0GkFiabu6urpxPWmaEgzB2AQzMDDQ8fpZX5TMy+LiYsc1+f7kpvWZE0yPBpPlr2MhY8k6sL6/Ft36zAmmR4OpVqtRBrOyskIwBBN+YDc2NqIMplarEQzBhB/Y4+PjG699dHRkEsz+/v6N66rX6wRDMOGD+f79O8EQTLH4HAz+hSGYwvE5GJubm6bXv+3A8n8YgjEZ2Fj/Sra6ukowBBN+YCcmJqIMZmZmhmAIJvzAlkqljtdfXl4OGsvCwkLHNfFKP8GYBJMknd9Ldn19HTQY3ktGMD0dTJbPoUxOTgaJZWRkpONaDg8PCYZg7ILJOiCsozgIJsCA7O7uel3D58+fo7ofMSOYLk1NTWVay/z8vJfrv3jxItP1nz17RjB5zJT1ArxuLsCAJEnims1mpvXMzc2ZxMJTYwimp4LJ8vHgtry+QSzrr2GtVss9fPiQYPKaKesFeN1coCFJksSdn59La7vtw/UePHggXefnz59B74P1mXufKesFeN1cwEG5zbBcXV25xcXFTD97YWGh4+ssMd6D2BBMjvJ4ev/+/v5v3fwcnt7vaaasF+B1c4GHJUm05yz7NDIyYrJ/6317nynrBXjdnMHAJEnihoeHTb+BzCoWgomc1dAkSeIGBwdN9mzxaxjBFITl4LSdnZ0F2Wvov4YRTAFZD0/b6Oho5hc3Vc1mM+jrLATTA4vwtrkeGKA/zc7O5rq/UG93IRiCMXdwcCD/YSBN0yBv0ScYgulZpVLJTU9Pu5WVFVer1Vy9Xnc/fvxw9Xrd1Wo1t7q66mZmZrx/UpJgCMZ8ePqR9ZkTDMFExfrMCYZgomJ95gRDMFGxPnOCIZioWJ85wRBMVKzPnGAIJirWZ04wXfj06ZP5APWTra0t8zMnmG432AOD1C+sPtJAMDn68OGD+SD1g7dv35qfNcHkJNTjWvtVlsfUFkVfBNNq+f+67X716NEj87MlGE/29vbMB6xIvn79an6mBBPA5eWl9++rL6pXr165y8tL8zMkGCACBAMICAYQEAwgIBhAQDCAgGAAAcEAAoIBBAQDCAgGEBAMICAYQEAwgIBgAAHBAAKCAQQEAwgIBhAQDCAgGEBAMICAYAABwQACggEEBAMICAYQEAwgIBhAQDCAgGAAAcEAAoIBBAQDCAgGEBAMICAYQEAwgIBgAAHBAAKCAQQEAwgIBhAQDCAgGEBAMICAYAABwQACggEEBAMICAYQEAwgIBhAQDCAgGAAAcEAAoIBBAQDCAgGEBAMICAYQEAwgIBgAAHBAAKCAQQEAwgIBhAkQ3/97QBk8w9xfZQALXXWhwAAAABJRU5ErkJggg=="},e6e6d:function(e,t,n){"use strict";var i=n("313a"),a=n.n(i);a.a},ec12:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{"justify-center":""}},[n("v-dialog",{attrs:{persistent:"",scrollable:"","max-width":"600px"},model:{value:e.open,callback:function(t){e.open=t},expression:"open"}},[n("v-card",{staticClass:"addService__dialog"},[n("div",{staticClass:"dialog__header"},[n("h3",{staticClass:"dialog__title"},[e._v(e._s(e.title))]),n("v-btn",{staticClass:"close__dialog",attrs:{small:"",fab:"",depressed:""},on:{click:e.cancel}},[n("v-icon",{attrs:{dark:""}},[e._v("close")])],1)],1),n("v-card-text",{staticClass:"dialog__body",attrs:{scrollable:""}},[n("v-layout",{attrs:{wrap:""}},[n("v-layout",{staticClass:"service__field",attrs:{"align-center":"","justify-space-between":""}},[n("v-flex",{attrs:{xs10:""}},[n("v-text-field",{staticClass:"service__input",attrs:{label:"Service Name",filled:"","hide-details":"auto",color:"#657186"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.add_service(t)}},model:{value:e.name,callback:function(t){e.name="string"===typeof t?t.trim():t},expression:"name"}})],1),n("v-flex",{staticClass:"text-xs-right",attrs:{xs2:""}},[n("v-btn",{staticClass:"addService__btn",attrs:{depressed:!e.name},on:{click:e.add_service}},[n("v-icon",{attrs:{disabled:!e.name,dark:""}},[e._v("mdi-plus-circle-outline")])],1)],1)],1),n("v-flex",{attrs:{xs12:""}},e._l(e.services,(function(t,i){return n("v-layout",{key:i,staticClass:"service__field",attrs:{"align-center":""}},[n("v-flex",{attrs:{xs10:""}},[n("v-text-field",{staticClass:"service__input",attrs:{label:"Service Name",filled:"","hide-details":"",color:"#657186"},model:{value:t.name,callback:function(n){e.$set(t,"name","string"===typeof n?n.trim():n)},expression:"service.name"}})],1),n("v-flex",{staticClass:"text-xs-right",attrs:{xs2:""}},[n("v-btn",{staticClass:"deleteService__btn",on:{click:function(t){return e.delete_service(i)}}},[n("v-icon",{attrs:{dark:""}},[e._v("delete")])],1)],1)],1)})),1)],1)],1),n("v-card-actions",{staticClass:"service__actions"},[n("v-btn",{staticClass:"service__actions_btn",attrs:{disabled:e.btnloading},on:{click:e.cancel}},[e._v("Cancel")]),n("v-btn",{staticClass:"service__actions_btn",attrs:{disabled:e.is_disabled,loading:e.btnloading},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1)},a=[],o=(n("7f7f"),n("28a5"),n("a2fd")),s={name:"ServicesAddDialog",props:{dialog:Boolean,title:String},data:function(){return{open:!1,name:"",services:[],recommendedServices:[],btnloading:!1}},mounted:function(){this.services=[]},created:function(){var e=this;this.$event.$on("btnloading_off",(function(t){e.btnloading=!1}))},computed:{is_disabled:function(){return!this.services.length}},watch:{dialog:function(e){this.open=e,!1===e&&(this.services=[])},open:function(e){this.btnloading=!1,this.$emit("update:dialog",e)}},methods:{get_recommended_services:function(){var e=o["default"].split("\n");return e.filter((function(e){return 0!=e.trim().length}))},add_service:function(){this.name?(this.services.unshift({name:this.name}),this.name=""):this.$event.$emit("open_snackbar","Service name required!","error")},delete_service:function(e){this.services.splice(e,1)},cancel:function(){this.open=!1},save:function(){this.btnloading=!0;var e=this.services;this.$emit("save",e)},clear_and_close:function(){this.btnloading=!1,this.name="",this.services=[],this.cancel()}}},r=s,c=(n("cf94"),n("2877")),l=Object(c["a"])(r,i,a,!1,null,null,null);t["a"]=l.exports},ee09:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("td",{staticClass:"table-actions",attrs:{align:"center"}},[e.hasEdit?n("v-tooltip",{directives:[{name:"show",rawName:"v-show",value:e.can_edit,expression:"can_edit"}],attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[n("v-btn",e._g({attrs:{dense:"",icon:""},on:{click:function(t){return e.handle_action("edit")}}},i),[n("v-icon",[e._v(e._s(e.editIcon))])],1)]}}],null,!1,4170341451)},[n("span",[e._v("Edit")])]):e._e(),e.hasView?n("v-tooltip",{directives:[{name:"show",rawName:"v-show",value:e.can_view,expression:"can_view"}],attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[n("v-btn",e._g({attrs:{dense:"",icon:""},on:{click:function(t){return e.handle_action("view")}}},i),[n("v-icon",[e._v(e._s(e.viewIcon))])],1)]}}],null,!1,701816587)},[n("span",[e._v("View")])]):e._e(),e.hasDelete?n("v-tooltip",{directives:[{name:"show",rawName:"v-show",value:e.can_delete,expression:"can_delete"}],attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[n("v-btn",e._g({attrs:{dense:"",icon:""},on:{click:function(t){return e.handle_action("delete")}}},i),[n("v-icon",[e._v(e._s(e.deleteIcon))])],1)]}}],null,!1,4164065227)},[n("span",[e._v("Delete")])]):e._e(),e._t("extra")],2)},a=[],o={props:{item:{type:Object,default:null},permissions:{type:Object,default:function(){return{delete:!0,update:!0,create:!0,view:!0}}},editIcon:{type:String,default:"mdi-circle-edit-outline"},viewIcon:{type:String,default:"mdi-eye-circle-outline"},deleteIcon:{type:String,default:"mdi-delete-circle-outline"},hasDelete:{type:Boolean,default:!0},hasEdit:{type:Boolean,default:!0},hasView:{type:Boolean,default:!0}},computed:{logged_user:function(){return this.$store.getters.user}},methods:{handle_action:function(e){this.item&&this.$emit(e,this.item)},can_delete:function(){return!!this.logged_user.is_admin||this.permissions&&this.permissions.delete},can_edit:function(){return!!this.logged_user.is_admin||this.permissions&&this.permissions.update},can_view:function(){return!!this.logged_user.is_admin||this.permissions&&this.permissions.view}}},s=o,r=(n("7e7e"),n("2877")),c=Object(r["a"])(s,i,a,!1,null,null,null);t["a"]=c.exports},fe54:function(e,t,n){"use strict";var i=n("2ab4"),a=n.n(i);a.a}}]);
//# sourceMappingURL=chunk-6c39d43b.5e0770aa.js.map