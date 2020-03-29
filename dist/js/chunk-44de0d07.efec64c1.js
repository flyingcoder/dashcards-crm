(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44de0d07"],{"6fcb":function(t,e,s){"use strict";var a=s("c717"),i=s.n(a);i.a},c717:function(t,e,s){},ed4b:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"set__password"},[a("v-layout",{staticClass:"set__password__content",attrs:{wrap:"","justify-center":"","align-center":""}},[a("v-flex",{staticClass:"l__form",attrs:{md6:"",xs12:"","fill-height":""}},[a("login-component",{attrs:{"title-text":"Set Password","button-text":"SET PASSWORD","has-tools":!1,"footer-text":"Already have an account?","footer-link":"/login","link-text":"Login"},on:{"button-clicked":t.set_password}},[a("template",{slot:"fields"},[a("div",{staticClass:"l__labels"},[a("custom-field",{attrs:{className:"field__icon",icon:"login/loginpass.png",valid:t.password.is_valid,"input-type":t.input_type,placeholder:"Password"},on:{blur:function(e){return t.validate_field("password")},focus:function(e){t.password.is_valid=!0}},model:{value:t.password.text,callback:function(e){t.$set(t.password,"text","string"===typeof e?e.trim():e)},expression:"password.text"}}),a("custom-field",{attrs:{className:"field__icon",icon:"login/loginpass.png",valid:t.repeat_password.is_valid,"input-type":t.input_type,placeholder:"Repeat Password"},on:{blur:function(e){return t.validate_field("repeat_password")},focus:function(e){t.repeat_password.is_valid=!0}},model:{value:t.repeat_password.text,callback:function(e){t.$set(t.repeat_password,"text","string"===typeof e?e.trim():e)},expression:"repeat_password.text"}})],1)])],2)],1),a("v-flex",{staticClass:"l__gallery",attrs:{md6:"",xs12:"","fill-height":""}},[a("div",{staticClass:"gallery__text"},[a("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium "),a("br"),t._v(" assumenda et rem architecto eum, ")])]),a("div",{staticClass:"gallery__images"},[a("img",{attrs:{src:s("2794")}})])])],1)],1)},i=[],r=s("768b"),o=(s("ac4d"),s("8a81"),s("ac6a"),s("b5ae")),n={validations:{password:{text:{required:o["required"],minLength:Object(o["minLength"])(6),containsNumber:function(t){return!t||t.length<6||/\d/.test(t)}}},repeat_password:{required:o["required"],text:{matchPassword:function(t){return t===this.password.text}}}},methods:{validate_field:function(t){this.$v[t].text.$touch();var e=!0,s=!1,a=void 0;try{for(var i,o=this[t].validations.entries()[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){var n=Object(r["a"])(i.value,2),l=n[0],d=n[1];if(!1===this.$v[t].text[d])return this[t].is_valid=!1,this.$event.$emit("open_snackbar",this[t].error_messages[l],"error",3e3),!1}}catch(c){s=!0,a=c}finally{try{e||null==o.return||o.return()}finally{if(s)throw a}}return this[t].is_valid=!0,!0},all_validations_passed:function(){for(var t=["password","repeat_password"],e=0,s=t;e<s.length;e++){var a=s[e];if(!this.validate_field(a))return!1}return!0}}},l=s("1be9"),d=function(t){return l["a"].post("/api/password/reset",t)},c=s("e3fe"),u=s("6c10"),p={name:"SetPassword",mixins:[n],components:{LoginComponent:c["a"],CustomField:u["a"]},data:function(){return{password:{text:"",is_valid:!0,error_messages:["Password is required","Password must have minimum 6 characters","Password must contains at least one number"],validations:["required","minLength","containsNumber"]},repeat_password:{text:"",is_valid:!0,error_messages:["Passwords do not match"],validations:["matchPassword"]},code:"",email:"",input_type:"password",is_code_valid:!0}},mounted:function(){this.code=this.$route.params.code,this.email=this.$route.params.email},methods:{set_password:function(){if(this.all_validations_passed()){var t={email:this.email,password:this.password.text,password_confirmation:this.repeat_password.text,token:this.code},e=this;d(t).then((function(t){e.$event.$emit("open_snackbar","Successfully set a password. Please Login to continue.","success",4e3),e.$router.push({name:"login"})}))}}}},_=p,m=(s("6fcb"),s("2877")),f=Object(m["a"])(_,a,i,!1,null,"31e2e337",null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-44de0d07.efec64c1.js.map