(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24313e90"],{"04a2":function(t,e,i){},7690:function(t,e,i){},"865a":function(t,e,i){"use strict";var a=i("04a2"),n=i.n(a);n.a},"881c":function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var a={computed:{is_screen_medium_and_down:function(){return this.$vuetify.breakpoint.mdAndDown}}}},abb8:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"project-preview"},[i("v-tabs",{staticClass:"tabs",attrs:{centered:"",grow:"",height:"48px","hide-slider":"","show-arrows":t.is_screen_medium_and_down},model:{value:t.active_tab,callback:function(e){t.active_tab=e},expression:"active_tab"}},t._l(t.tabs,(function(e){return i("v-tab",{key:e.id,attrs:{to:e.route,exact:""}},[t._v(" "+t._s(e.name)+" ")])})),1),i("router-view",{key:t.$route.fullPath})],1)},n=[],s=(i("c5f6"),i("881c")),r={name:"ProjectPreview",mixins:[s["a"]],props:{id:[Number,String],type:{type:String,default:"project"}},data:function(){return{active_tab:null,tabs:[{id:1,name:"HQ",route:"/dashboard/".concat(this.type,"/preview/").concat(this.id)},{id:2,name:"Files",route:"/dashboard/".concat(this.type,"/preview/").concat(this.id,"/files")},{id:3,name:"Members",route:"/dashboard/".concat(this.type,"/preview/").concat(this.id,"/members")},{id:4,name:"Messages",route:"/dashboard/".concat(this.type,"/preview/").concat(this.id,"/messages")},{id:5,name:"Milestones",route:"/dashboard/".concat(this.type,"/preview/").concat(this.id,"/milestones")},{id:6,name:"Tasks",route:"/dashboard/".concat(this.type,"/preview/").concat(this.id,"/tasks")},{id:7,name:"Reports",route:"/dashboard/".concat(this.type,"/preview/").concat(this.id,"/reports")},{id:8,name:"Timer",route:"/dashboard/".concat(this.type,"/preview/").concat(this.id,"/timer")},{id:9,name:"Invoice",route:"/dashboard/".concat(this.type,"/preview/").concat(this.id,"/invoice")}]}},beforeRouteEnter:function(t,e,i){i((function(a){a.verifyProject(t,e,i,"project")}))}},c=r,o=(i("ff74"),i("865a"),i("2877")),d=Object(o["a"])(c,a,n,!1,null,"b3924946",null);e["default"]=d.exports},ff74:function(t,e,i){"use strict";var a=i("7690"),n=i.n(a);n.a}}]);
//# sourceMappingURL=chunk-24313e90.287a27c5.js.map