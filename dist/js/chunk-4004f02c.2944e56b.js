(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4004f02c"],{"520b":function(e,t,n){"use strict";var i=n("ba8f"),s=n.n(i);s.a},"9587b":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"login"},[i("v-layout",{staticClass:"login__content",attrs:{wrap:"","justify-center":"","align-center":""}},[i("v-flex",{staticClass:"l__form",attrs:{md6:"",xs12:"","fill-height":""}},[i("login-component",{attrs:{hasSignup:e.is_signup_enabled,"title-text":"Log in","button-text":"LOG IN","has-forgot-password":!0,"checkbox-text":"Remember Me","footer-text":"Not a member yet?","footer-link":"/signup","link-text":"Sign up"},on:{"checkbox-changed":e.set_checkbox,"button-clicked":e.login}},[i("template",{slot:"fields"},[i("div",{staticClass:"l__labels"},[i("custom-field",{attrs:{className:"field__icon",icon:"login/loginemail.png","input-type":"email",placeholder:"Email"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)}},model:{value:e.email,callback:function(t){e.email="string"===typeof t?t.trim():t},expression:"email"}}),i("custom-field",{attrs:{className:"field__icon",icon:"login/loginpass.png","input-type":"password",placeholder:"Password"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)}},model:{value:e.password,callback:function(t){e.password="string"===typeof t?t.trim():t},expression:"password"}})],1)])],2)],1),i("v-flex",{staticClass:"l__gallery",attrs:{md6:"",xs12:"","fill-height":""}},[i("div",{staticClass:"gallery__text"},[i("p",[e._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium "),i("br"),e._v(" assumenda et rem architecto eum, ")])]),i("div",{staticClass:"gallery__images"},[i("img",{attrs:{src:n("2794")}})])])],1)],1)},s=[],o=(n("8e6e"),n("ac6a"),n("456d"),n("6762"),n("2fdb"),n("ade3")),a=n("e3fe"),r=n("6c10"),l=n("2f62");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={name:"Login",components:{LoginComponent:a["a"],CustomField:r["a"]},data:function(){return{email:"",password:"",is_email_valid:!0,is_password_valid:!0,remember_me:!1}},created:function(){this.$store.dispatch("logout")},computed:u(u({},Object(l["c"])(["global_configs"])),{},{is_signup_enabled:function(){return!!this.global_configs&&this.global_configs.allowed_modules.includes("signup")}}),methods:{set_checkbox:function(e){this.remember_me=e},login:function(){this.$auth.login({email:this.email,password:this.password})}}},d=p,f=(n("520b"),n("2877")),m=Object(f["a"])(d,i,s,!1,null,"ca9022d2",null);t["default"]=m.exports},ba8f:function(e,t,n){}}]);
//# sourceMappingURL=chunk-4004f02c.2944e56b.js.map