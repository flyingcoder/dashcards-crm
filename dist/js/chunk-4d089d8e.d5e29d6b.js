(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d089d8e"],{"3b64":function(e,t,i){},"73d5":function(e,t,i){"use strict";var s=i("3b64"),n=i.n(s);n.a},9587:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login"},[s("v-layout",{staticClass:"login__content",attrs:{wrap:"","justify-center":"","align-center":""}},[s("v-flex",{staticClass:"l__form",attrs:{md6:"",xs12:"","fill-height":""}},[s("login-component",{attrs:{"title-text":"Log in","button-text":"LOG IN","has-forgot-password":!0,"checkbox-text":"Remember Me","footer-text":"Not a member yet?","footer-link":"/signup","link-text":"Sign up"},on:{"checkbox-changed":e.set_checkbox,"button-clicked":e.login}},[s("template",{slot:"fields"},[s("div",{staticClass:"l__labels"},[s("custom-field",{attrs:{className:"field__icon",icon:"login/loginemail.png","input-type":"email",placeholder:"Email"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)}},model:{value:e.email,callback:function(t){e.email="string"===typeof t?t.trim():t},expression:"email"}}),s("custom-field",{attrs:{className:"field__icon",icon:"login/loginpass.png","input-type":"password",placeholder:"Password"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)}},model:{value:e.password,callback:function(t){e.password="string"===typeof t?t.trim():t},expression:"password"}})],1)])],2)],1),s("v-flex",{staticClass:"l__gallery",attrs:{md6:"",xs12:"","fill-height":""}},[s("div",{staticClass:"gallery__text"},[s("p",[e._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium "),s("br"),e._v(" assumenda et rem architecto eum, ")])]),s("div",{staticClass:"gallery__images"},[s("img",{attrs:{src:i("2794")}})])])],1)],1)},n=[],o=i("e3fe"),a=i("6c10"),l={name:"Login",components:{LoginComponent:o["a"],CustomField:a["a"]},data:function(){return{email:"",password:"",is_email_valid:!0,is_password_valid:!0,remember_me:!1}},created:function(){this.$store.dispatch("logout")},methods:{set_checkbox:function(e){this.remember_me=e},login:function(){this.$auth.login({email:this.email,password:this.password})}}},r=l,c=(i("73d5"),i("2877")),d=Object(c["a"])(r,s,n,!1,null,"9166e3d8",null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-4d089d8e.d5e29d6b.js.map