(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72985196"],{"1ee4":function(t,e,s){"use strict";s.r(e);var l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"general"},[s("div",{staticClass:"general-wrapper"},[s("div",{staticClass:"general-inner"},[s("v-row",{staticClass:"user-info",attrs:{"no-gutters":""}},[t.current?s("v-col",{key:t.componentKey,staticClass:"offset-md-2",attrs:{md:"8",sm:"12"}},[s("v-row",{staticClass:"align-center"},[s("v-col",{staticClass:"c-label",attrs:{md:"4",cols:"12"}},[t._v("Dashboard Title")]),s("v-col",{staticClass:"c-field",attrs:{md:"8",cols:"12"}},[s("v-text-field",{staticClass:"fullwidth",attrs:{outlined:"",placeholder:"Buzzooka Dashboard",dense:"","hide-details":"",solo:"",flat:"",value:t.current.title},model:{value:t.current.title,callback:function(e){t.$set(t.current,"title",e)},expression:"current.title"}})],1),s("v-col",{staticClass:"c-label",attrs:{md:"4",cols:"12"}},[t._v("Language")]),s("v-col",{staticClass:"c-field",attrs:{md:"8",cols:"12"}},[s("v-select",{staticClass:"fullwidth",attrs:{items:t.languages,"item-value":"value",outlined:"",placeholder:"English",dense:"","hide-details":"",solo:"",flat:"",value:t.current.lang},model:{value:t.current.lang,callback:function(e){t.$set(t.current,"lang",e)},expression:"current.lang"}})],1),s("v-col",{staticClass:"c-label",attrs:{md:"4",cols:"12"}},[t._v("Theme")]),s("v-col",{staticClass:"c-field",attrs:{md:"8",cols:"12"}},[s("v-select",{staticClass:"fullwidth",attrs:{items:t.themes,"item-value":"value",outlined:"",placeholder:"Default",dense:"","hide-details":"",solo:"",flat:"",value:t.current.theme},model:{value:t.current.theme,callback:function(e){t.$set(t.current,"theme",e)},expression:"current.theme"}})],1),s("v-col",{staticClass:"c-label",attrs:{md:"4",cols:"12"}},[t._v("Date Format")]),s("v-col",{staticClass:"c-field",attrs:{md:"8",cols:"12"}},[s("v-select",{staticClass:"fullwidth",attrs:{items:t.date_formats,"item-value":"value",outlined:"",placeholder:"D - M - Y",dense:"","hide-details":"",solo:"",flat:"",value:t.current.date_format},model:{value:t.current.date_format,callback:function(e){t.$set(t.current,"date_format",e)},expression:"current.date_format"}})],1),s("v-col",{staticClass:"c-label",attrs:{md:"4",cols:"12"}},[t._v("General Page Limits")]),s("v-col",{staticClass:"c-field",attrs:{md:"8",cols:"12"}},[s("v-text-field",{staticClass:"fullwidth",attrs:{rules:t.limit_rules,outlined:"",placeholder:"0",type:"number",dense:"","hide-details":"auto",flat:"",value:t.current.general_page_limits},model:{value:t.current.general_page_limits,callback:function(e){t.$set(t.current,"general_page_limits",e)},expression:"current.general_page_limits"}})],1),s("v-col",{staticClass:"c-label",attrs:{md:"4",cols:"12"}},[t._v("Messages Page Limits")]),s("v-col",{staticClass:"c-field",attrs:{md:"8",cols:"12"}},[s("v-text-field",{staticClass:"fullwidth",attrs:{rules:t.limit_rules,outlined:"",placeholder:"0",type:"number",dense:"","hide-details":"auto",flat:"",value:t.current.messages_page_limits},model:{value:t.current.messages_page_limits,callback:function(e){t.$set(t.current,"messages_page_limits",e)},expression:"current.messages_page_limits"}})],1),s("v-col",{staticClass:"c-label",attrs:{md:"4",cols:"12"}},[t._v("Timeline Display Limits")]),s("v-col",{staticClass:"c-field",attrs:{md:"8",cols:"12"}},[s("v-text-field",{staticClass:"fullwidth",attrs:{rules:t.limit_rules,outlined:"",type:"number",placeholder:"0",dense:"","hide-details":"auto",flat:"",value:t.current.timeline_display_limits},model:{value:t.current.timeline_display_limits,callback:function(e){t.$set(t.current,"timeline_display_limits",e)},expression:"current.timeline_display_limits"}})],1),s("v-col",{staticClass:"c-label",attrs:{md:"4",cols:"12"}},[t._v("Currency")]),s("v-col",{staticClass:"c-field",attrs:{md:"8",cols:"12"}},[s("v-select",{staticClass:"fullwidth",attrs:{items:t.currencies,"return-object":"","item-value":"currency_code",outlined:"",placeholder:"Currency",dense:"","hide-details":"",solo:"",flat:"",value:t.current.currency.currency_code},scopedSlots:t._u([{key:"item",fn:function(e){var l=e.item;return[s("v-col",[t._v(t._s(l.text)+" ("+t._s(l.symbol)+")")]),s("v-col",{attrs:{md:"2"}},[t._v(t._s(l.currency_code))])]}}],null,!1,3825925238),model:{value:t.current.currency.currency_code,callback:function(e){t.$set(t.current.currency,"currency_code",e)},expression:"current.currency.currency_code"}})],1),s("v-col",{staticClass:"c-label",attrs:{md:"4",cols:"12"}},[t._v("Show Information Tips")]),s("v-col",{staticClass:"c-field",attrs:{md:"8",cols:"12"}},[s("v-select",{staticClass:"fullwidth",attrs:{items:["Yes","No"],outlined:"",placeholder:"Yes",dense:"","hide-details":"",solo:"",flat:"",value:t.current.info_tips},model:{value:t.current.info_tips,callback:function(e){t.$set(t.current,"info_tips",e)},expression:"current.info_tips"}})],1),s("v-col",{staticClass:"c-label",attrs:{md:"4",cols:"12"}},[t._v("Allow Client Registration")]),s("v-col",{staticClass:"c-field",attrs:{md:"8",cols:"12"}},[s("v-select",{staticClass:"fullwidth",attrs:{items:["Yes","No"],outlined:"",placeholder:"Yes",dense:"","hide-details":"",solo:"",flat:"",value:t.current.client_registration},model:{value:t.current.client_registration,callback:function(e){t.$set(t.current,"client_registration",e)},expression:"current.client_registration"}})],1),s("v-col",{staticClass:"c-label",attrs:{md:"4",cols:"12"}},[t._v("Notifications - Display "),s("br"),t._v(" Duration (seconds)")]),s("v-col",{staticClass:"c-field",attrs:{md:"8",cols:"12"}},[s("v-text-field",{staticClass:"fullwidth",attrs:{rules:t.notif_rules,outlined:"",type:"number",placeholder:"1000",dense:"","hide-details":"auto",flat:"",value:t.current.notif_duration},model:{value:t.current.notif_duration,callback:function(e){t.$set(t.current,"notif_duration",e)},expression:"current.notif_duration"}})],1),s("v-col",{staticClass:"text-right",attrs:{md:"12",cols:"12"}},[s("v-btn",{staticClass:"update-btn",attrs:{disabled:t.update_btn_loading||t.reset_btn_loading,loading:t.update_btn_loading},on:{click:t.update_settings}},[s("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-content-save")]),t._v(" Save Changes ")],1)],1)],1)],1):t._e()],1)],1)])])},i=[],a=(s("ac6a"),s("456d"),s("20d6"),s("1be9")),n=(s("7eac"),s("0644"),{name:"General",data:function(){return{paths:[{text:"Settings",disabled:!0,router_name:null},{text:"General",disabled:!0,router_name:null}],update_btn_loading:!1,reset_btn_loading:!1,languages:[{value:"english",text:"English"}],themes:[{value:"default",text:"Buzzooka Default"}],date_formats:[{value:"D-M-Y",text:"D-M-Y e.g 01-12-2020"},{value:"Y-M-D",text:"Y-M-D e.g 2020-12-01"},{value:"M-D-Y",text:"M-D-Y e.g 12-01-2020"}],currencies:[{currency_code:"USD",symbol:"$",text:"US Dollar"},{currency_code:"CAD",symbol:"$",text:"Canadian Dollar"},{currency_code:"EUR",symbol:"£",text:"Euro"},{currency_code:"PHP",symbol:"₱",text:"Philippine Peso"}],current:null,componentKey:0,limit_rules:[function(t){return!!t||"Required"},function(t){return t>=1||"Value should be above 0"},function(t){return t<=500||"Value should not be above 500"}],notif_rules:[function(t){return!!t||"Required"},function(t){return t>=60||"Value should be above 60 (at least 1 minute)"},function(t){return t<=86400||"Value should not be above 86400 (1 day)"}],license_key:null}},mounted:function(){this.$event.$emit("path-change",this.paths),this.fetchSettings()},computed:{companyId:function(){return this.$store.getters.user.company_id},original:function(){return this.$store.getters["configs/original"]}},methods:{isValid:function(){var t=[];return this.current.title&&""!==this.current.title.trim()||t.push("Title is required"),(this.current.timeline_display_limits>500||this.current.timeline_display_limits<1)&&t.push("Timeline Display Limits should be between 1 - 500"),(this.current.messages_page_limits>500||this.current.messages_page_limits<1)&&t.push("Messages Page Limits should be between 1 - 500"),(this.current.general_page_limits>500||this.current.general_page_limits<1)&&t.push("General Page Limits should be between 1 - 500"),(this.current.notif_duration>86400||this.current.notif_duration<60)&&t.push("Notifications Display Duration should be between 60 - 86400"),!(t.length>0)||(this.$event.$emit("open_snackbar",t.join("<br>"),"error"),!1)},reset_settings:function(){this.reset_btn_loading=!0,this.current=this.original,this.current.license_key=this.license_key,this.$event.$emit("open_snackbar","Click SAVE CHANGES to effect!","info"),this.reset_btn_loading=!1},getPayload:function(){var t=this,e={title:this.current.title,lang:this.current.lang,theme:this.current.theme,date_format:this.current.date_format,timeline_display_limits:this.current.timeline_display_limits,general_page_limits:this.current.general_page_limits,messages_page_limits:this.current.messages_page_limits,info_tips:this.current.info_tips,client_registration:this.current.client_registration,notif_duration:this.current.notif_duration,license_key:this.current.license_key},s=this.currencies.findIndex((function(e){return e.currency_code===t.current.currency}));return e.currency=~s?this.currencies[s]:this.currencies[0],e},fetchSettings:function(){var t=this;a["a"].get("api/company/".concat(this.companyId,"/settings")).then((function(e){var s=e.data;Object.keys(s).length?(t.current=s,t.license_key=s.license_key):t.current=t.original}))},update_settings:function(){var t=this;if(this.isValid()){var e=this.getPayload();this.update_btn_loading=!0,a["a"].post("api/company/".concat(this.companyId,"/settings"),e).then((function(e){var s=e.data;t.$store.dispatch("configs/updateSettings",s).then((function(){t.current=t.$store.getters["configs/current"]})),t.$event.$emit("open_snackbar","Settings updated","success")})).finally((function(){return t.update_btn_loading=!1}))}}}}),r=n,c=(s("2a15"),s("2877")),o=Object(c["a"])(r,l,i,!1,null,null,null);e["default"]=o.exports},"2a15":function(t,e,s){"use strict";var l=s("c96c"),i=s.n(l);i.a},c96c:function(t,e,s){}}]);
//# sourceMappingURL=chunk-72985196.624067e0.js.map