(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-601bae41"],{"13ea":function(t,e,a){var o=a("03dd"),n=a("42a2"),i=a("d370"),s=a("6747"),l=a("30c9"),c=a("0d24"),r=a("eac5"),d=a("73ac"),u="[object Map]",p="[object Set]",m=Object.prototype,f=m.hasOwnProperty;function h(t){if(null==t)return!0;if(l(t)&&(s(t)||"string"==typeof t||"function"==typeof t.splice||c(t)||d(t)||i(t)))return!t.length;var e=n(t);if(e==u||e==p)return!t.size;if(r(t))return!o(t).length;for(var a in t)if(f.call(t,a))return!1;return!0}t.exports=h},"259d":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"breadcrumb-wrapper"},[a("v-breadcrumbs",{attrs:{items:t.paths},scopedSlots:t._u([{key:"item",fn:function(e){var o=e.item;return[a("v-breadcrumbs-item",{staticClass:"page__title",attrs:{disabled:o.disabled}},[a("span",{on:{click:function(e){return t.navigate_from_breadcrumb(o)}}},[t._v(" "+t._s(o.text)+" ")])])]}}])},[a("v-icon",{attrs:{slot:"divider"},slot:"divider"},[t._v("chevron_right")])],1),t._t("extra")],2)},n=[],i={name:"Breadcrumb",props:{paths:{type:Array,default:function(){return[]}}},methods:{navigate_from_breadcrumb:function(t){if(t.hasOwnProperty("path"))t.path&&this.$router.push({path:t.path});else{var e=t.router_name;e&&this.$router.push({name:e})}}}},s=i,l=(a("fe54"),a("573a"),a("2877")),c=Object(l["a"])(s,o,n,!1,null,"5c807bcd",null);e["a"]=c.exports},"2ab4":function(t,e,a){},"540e":function(t,e,a){"use strict";var o=a("59ee"),n=a.n(o);n.a},5527:function(t,e,a){"use strict";var o=a("b348"),n=a.n(o);n.a},"573a":function(t,e,a){"use strict";var o=a("c5c4"),n=a.n(o);n.a},"59ee":function(t,e,a){},"5b70":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("custom-dialog",{attrs:{title:t.title,content:t.textContent,"button1-text":t.cancelButtonText,"button2-text":t.deleteButtonText,open:t.open},on:{"update:open":function(e){t.open=e},button1:t.cancel_clicked,button2:t.delete_clicked},scopedSlots:t._u([{key:"content",fn:function(){return[a("v-banner",{attrs:{"two-line":"",outlined:"",tile:"",flat:""}},[a("v-avatar",{attrs:{slot:"icon",color:"red accent-4",size:"90"},slot:"icon"},[a("v-icon",{attrs:{icon:"mdi-lock",large:"",color:"white"}},[t._v(" mdi-shield-alert-outline ")])],1),a("p",{staticClass:"title",domProps:{innerHTML:t._s(t.textContent)}})],1)]},proxy:!0}])})],1)},n=[],i=a("57e5"),s={components:{CustomDialog:i["a"]},props:{title:{type:String,default:"Default Modal Title"},textContent:{type:String,default:"Default Modal Text Content"},cancelButtonText:{type:String,default:"Cancel"},deleteButtonText:{type:String,default:"Yes, Delete"},openDialog:Boolean},data:function(){return{open:!1}},watch:{openDialog:function(t){this.open=t},open:function(t){this.$emit("update:openDialog",t)}},methods:{cancel_clicked:function(){this.open=!1},delete_clicked:function(){this.$emit("delete")},showDialog:function(){this.open=!0},closeDialog:function(){this.open=!1}}},l=s,c=a("2877"),r=Object(c["a"])(l,o,n,!1,null,null,null);e["a"]=r.exports},b348:function(t,e,a){},c5c4:function(t,e,a){},ef7b:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"company-profile"},[a("div",{staticClass:"profile mt-1"},[a("div",{staticClass:"profile-content"},[a("div",{staticClass:"background"}),t.company?a("div",{staticClass:"profile-logo"},[a("div",{staticClass:"user-img",on:{click:t.image_clicked}},[a("img",{attrs:{src:t.company_logo,width:"100%",height:"auto"}}),a("v-icon",{staticClass:"user-img-hover",attrs:{"x-large":""}},[t._v("mdi-camera")])],1)]):t._e(),t.company?a("v-row",{staticClass:"user-info",attrs:{"no-gutters":""}},[t.loading?a("div",{staticClass:"loading"},[a("v-progress-linear",{attrs:{indeterminate:!0}})],1):a("v-col",{staticClass:"offset-md-2",attrs:{md:"8",sm:"12"}},[a("v-row",[a("v-col",{staticClass:"c-label",attrs:{md:"4",cols:"12"}},[t._v("Company Name "),a("span",{staticClass:"required"},[t._v("*")])]),a("v-col",{staticClass:"c-field",attrs:{md:"8",cols:"12"}},[a("v-text-field",{staticClass:"fullwidth",attrs:{outlined:"",placeholder:"Name",dense:"","hide-details":"",solo:"",flat:"",value:t.company.name},model:{value:t.company.name,callback:function(e){t.$set(t.company,"name",e)},expression:"company.name"}})],1),a("v-col",{staticClass:"c-label",attrs:{md:"4",cols:"12"}},[t._v("Slogan")]),a("v-col",{staticClass:"c-field",attrs:{md:"8",cols:"12"}},[a("v-text-field",{staticClass:"fullwidth",attrs:{outlined:"",placeholder:"Slogan",dense:"","hide-details":"",solo:"",flat:"",value:t.company.short_description},model:{value:t.company.short_description,callback:function(e){t.$set(t.company,"short_description",e)},expression:"company.short_description"}})],1),a("v-col",{staticClass:"c-label",attrs:{md:"4",cols:"12"}},[t._v("Long Description")]),a("v-col",{staticClass:"c-field",attrs:{md:"8",cols:"12"}},[a("v-textarea",{staticClass:"fullwidth",attrs:{rows:2,outlined:"",placeholder:"Description",dense:"","hide-details":"",solo:"",flat:"",value:t.company.long_description},model:{value:t.company.long_description,callback:function(e){t.$set(t.company,"long_description",e)},expression:"company.long_description"}})],1),a("v-col",{staticClass:"c-label",attrs:{md:"4",cols:"12"}},[t._v("Website")]),a("v-col",{staticClass:"c-field",attrs:{md:"8",cols:"12"}},[a("v-text-field",{staticClass:"fullwidth",attrs:{outlined:"",placeholder:"Website",dense:"","hide-details":"",solo:"",flat:"",value:t.company.domain},model:{value:t.company.domain,callback:function(e){t.$set(t.company,"domain",e)},expression:"company.domain"}})],1),a("v-col",{staticClass:"c-label",attrs:{md:"4",cols:"12"}},[t._v("Company Address")]),a("v-col",{staticClass:"c-field",attrs:{md:"8",cols:"12"}},[a("v-text-field",{staticClass:"fullwidth",attrs:{outlined:"",placeholder:"Address",dense:"","hide-details":"",solo:"",flat:"",value:t.company.address},model:{value:t.company.address,callback:function(e){t.$set(t.company,"address",e)},expression:"company.address"}})],1),a("v-col",{staticClass:"c-label",attrs:{md:"4",cols:"12"}},[t._v("Contact Number")]),a("v-col",{staticClass:"c-field",attrs:{md:"8",cols:"12"}},[a("vue-phone-number-input",{staticClass:"fullwidth",attrs:{size:"md",clearable:"","default-country-code":t.defaultCountryCode},on:{"phone-number-blur":t.telephone_on_blur,update:t.showUpdate},model:{value:t.contact_number,callback:function(e){t.contact_number=e},expression:"contact_number"}})],1),a("v-col",{staticClass:"c-label",attrs:{md:"4",cols:"12"}},[t._v("Company Email")]),a("v-col",{staticClass:"c-field",attrs:{md:"8",cols:"12"}},[a("v-text-field",{staticClass:"fullwidth",attrs:{outlined:"",type:"email",placeholder:"Email",dense:"","hide-details":"",solo:"",flat:"",value:t.company.email},model:{value:t.company.email,callback:function(e){t.$set(t.company,"email",e)},expression:"company.email"}})],1),a("v-col",{staticClass:"c-label",attrs:{md:"4",cols:"12"}},[a("span",{staticClass:"required"},[t._v("*")]),t._v(" Required Fields")]),a("v-col",{attrs:{md:"8",cols:"12"}},[a("v-btn",{staticClass:"float-right update-btn",attrs:{loading:t.btnloading},on:{click:t.update_company}},[a("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-content-save")]),t._v(" Save Changes ")],1)],1)],1)],1)],1):t._e()],1)]),a("AddPicture",{attrs:{pictureDialog:t.open_add_picture},on:{"company-logo-change":function(e){t.company_logo=e}}})],1)},n=[],i=(a("7f7f"),a("e06e")),s=(a("13ea"),a("1be9")),l={upload_image:function(t,e){return s["a"].post("api/company/".concat(t,"/logo"),e)},update_company_profile:function(t,e){return s["a"].put("api/company/".concat(t,"/info"),e)},get_company_info:function(t){return s["a"].get("api/company/".concat(t,"/info"))}},c=a("259d"),r=a("5b70"),d=a("29d6"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"add-picture"},[a("CustomDialog",{ref:"picture_dialog",attrs:{title:"Upload New Company Logo","button2-text":"Save",open:t.dialog},on:{button1:t.cancel,"update:open":function(e){t.dialog=e}},scopedSlots:t._u([{key:"content",fn:function(){return[a("div",{staticClass:"content"},[a("Loader",{attrs:{loading:t.loading}}),t.file_uploaded?a("CropImage",{ref:"croppie",attrs:{image:t.image64,options:t.croppie.options,result:t.croppie.result}}):a("CustomDropzone",{ref:"dropzone",attrs:{duplicateCheck:!0,acceptedFiles:"validFileType",options:t.dropzoneOptions,useCustomSlot:!0,dictFileTooBig:"File too big",dictInvalidFileType:"Invalid file type"},on:{"file-added":t.file_added}})],1)]},proxy:!0},{key:"button2",fn:function(){return[a("v-btn",{attrs:{disabled:!t.file_uploaded},on:{click:t.get_cropped_image}},[t._v("Save")])]},proxy:!0}])})],1)},p=[],m=(a("6762"),a("2fdb"),a("3835")),f=a("854b"),h=a("57e5"),_=a("8b7e"),v=a("8c75"),g=a("7eac"),y={components:{Loader:f["a"],CustomDialog:h["a"],CustomDropzone:_["a"],CropImage:v["a"]},props:{pictureDialog:Boolean},data:function(){return{file_uploaded:!1,image64:null,loading:!1,validFileType:g["a"].allowedImageType,croppie:{options:{viewport:{width:200,height:150,type:"square"},showZoomer:!0,boundary:{width:300,height:300},enableOrientation:!0},result:{type:"blob",size:"viewport",format:"png",quality:1,circle:!1}}}},computed:{dialog:{get:function(){return this.pictureDialog},set:function(t){this.pictureDialog=t}},user:function(){return this.$store.getters.user},dropzoneOptions:function(){return{maxFiles:1,thumbnailWidth:150,addRemoveLinks:!0,url:g["a"].apiHostBaseURL+"/api/company/".concat(this.user.company_id,"/logo"),headers:{Authorization:"Bearer "+localStorage.getItem("token")},method:"put",autoProcessQueue:!1}}},methods:{file_added:function(t){var e=this,a=Object(m["a"])(t,1),o=a[0],n=new FileReader;this.validFileType.includes(o.type)?(n.onload=function(){e.image64=n.result,e.file_uploaded=!0},n.readAsDataURL(o)):(this.$event.$emit("open_snackbar","Not a valid image!","error"),this.file_uploaded=!1,this.dialog=!1)},get_cropped_image:function(){this.$refs.croppie.get_result().then(this.upload_image)},upload_image:function(t){var e=this,a=new FormData;a.append("file",t),this.loading=!0,l.upload_image(this.user.company_id,a).then(this.image_uploaded).finally((function(){return e.loading=!1}))},image_uploaded:function(t){this.$refs.croppie.clear_component(),this.$event.$emit("open_snackbar","Profile picture uploaded successfully!"),this.$store.dispatch("fetchUser"),this.$emit("company-logo-change",t.data.company_logo),this.$refs.picture_dialog.clear_and_close(),Object.assign(this.$data,this.$options.data.apply(this))},cancel:function(){this.dialog=!1,this.file_uploaded=!1}}},b=y,C=(a("540e"),a("2877")),x=Object(C["a"])(b,u,p,!1,null,"5a63ccfc",null),w=x.exports,$={name:"Company",mixins:[i["a"]],components:{Breadcrumb:c["a"],DeleteDialog:r["a"],TableHeader:d["a"],AddPicture:w},data:function(){return{paths:[{text:"Settings",disabled:!1,router_name:"settings"},{text:"Company",disabled:!0,router_name:null}],company:null,search:"",open_add_picture:!1,defaultCountryCode:null,btnloading:!1,telephone_is_valid:!1,contact_number:null}},mounted:function(){this.$event.$emit("path-change",this.paths),this.getCompanyDetails()},computed:{user:function(){return this.$store.getters.user},can_update:function(){return!!(this.user.is_company_owner||this.user.is_admin||this.user.is_manager)},company_logo:{get:function(){return this.company.company_logo},set:function(t){this.company.company_logo=t}}},watch:{company:function(t){this.contact_number=t.contact?t.contact.phoneNumber:null,this.defaultCountryCode=t.contact?t.contact.countryCode:null}},methods:{image_clicked:function(){this.open_add_picture=!0},getCompanyDetails:function(){var t=this;l.get_company_info(this.user.company_id).then((function(e){var a=e.data;t.company=a}))},showUpdate:function(t){this.telephone_is_valid=t.isValid,this.company.contact=t.isValid?t:null},telephone_on_blur:function(){this.telephone_is_valid||this.$event.$emit("open_snackbar","Invalid phone format","error")},is_valid:function(){return!(this.company.contact&&!this.telephone_is_valid)&&(this.company.name&&""!==this.company.name)},getFields:function(){return{name:this.company.name,short_description:this.company.short_description,long_description:this.company.long_description,domain:this.company.domain,address:this.company.address,contact:this.company.contact,email:this.company.email}},update_company:function(){var t=this;this.is_valid()?(this.btnloading=!0,l.update_company_profile(this.user.company_id,this.getFields()).then((function(e){var a=e.data;t.company=a,t.$event.$emit("open_snackbar","Company info updated.")})).finally((function(){return t.btnloading=!1}))):this.$event.$emit("open_snackbar","Please fill in required field *","error")}}},k=$,D=(a("5527"),Object(C["a"])(k,o,n,!1,null,null,null));e["default"]=D.exports},fe54:function(t,e,a){"use strict";var o=a("2ab4"),n=a.n(o);n.a}}]);
//# sourceMappingURL=chunk-601bae41.84b0acb4.js.map