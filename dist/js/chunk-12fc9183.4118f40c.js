(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12fc9183"],{"16ca":function(t,e,n){"use strict";var i=n("8244"),o=n.n(i);o.a},"29d6":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-header"},[t.noButton?t._e():n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,o=e.attrs;return[n("v-icon",t._g(t._b({staticClass:"add__btn ml-2",attrs:{fab:""},on:{click:function(e){return t.$emit("click")}}},"v-icon",o,!1),i),[t._v(" mdi-plus-circle-outline ")])]}}],null,!1,1461341858)},[n("span",[t._v("Create new")])]),t.noSortButton?t._e():n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,o=e.attrs;return[n("v-icon",t._g(t._b({staticClass:"view-btn add__btn ml-2",attrs:{fab:""},on:{click:function(e){return t.$emit("click-sort-by")}}},"v-icon",o,!1),i),[t._v(" sort ")])]}}],null,!1,3915684996)},[n("span",[t._v("Sort")])]),t.noListButton?t._e():n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,o=e.attrs;return[n("v-icon",t._g(t._b({staticClass:"view-btn add__btn ml-2",attrs:{fab:"",color:"list"===t.activeView?"primary":""},on:{click:function(e){return t.$emit("click-list-view")}}},"v-icon",o,!1),i),[t._v(" mdi-view-list ")])]}}],null,!1,1833920323)},[n("span",[t._v("List view")])]),t.noGridButton?t._e():n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,o=e.attrs;return[n("v-icon",t._g(t._b({staticClass:"add__btn ml-2",attrs:{fab:"",color:"grid"===t.activeView?"primary":""},on:{click:function(e){return t.$emit("click-grid-view")}}},"v-icon",o,!1),i),[t._v(" mdi-view-grid ")])]}}],null,!1,965392321)},[n("span",[t._v("Grid view")])]),t._t("form-btn")],2)},o=[],a={name:"TableHeader",props:{noButton:{type:Boolean,default:!1},noListButton:{type:Boolean,default:!0},noGridButton:{type:Boolean,default:!0},noSortButton:{type:Boolean,default:!0}},data:function(){return{fab:!0}},computed:{activeView:function(){return window.localStorage.getItem("bzk_prefer_view")||"list"}}},s=a,l=(n("ce2c"),n("2877")),r=Object(l["a"])(s,i,o,!1,null,"bb5f40ae",null);e["a"]=r.exports},"2f21":function(t,e,n){"use strict";var i=n("79e5");t.exports=function(t,e){return!!t&&i((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},"386d":function(t,e,n){"use strict";var i=n("cb7c"),o=n("83a1"),a=n("5f1b");n("214f")("search",1,(function(t,e,n,s){return[function(n){var i=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,i):new RegExp(n)[e](String(i))},function(t){var e=s(n,t,this);if(e.done)return e.value;var l=i(t),r=String(this),c=l.lastIndex;o(c,0)||(l.lastIndex=0);var d=a(l,r);return o(l.lastIndex,c)||(l.lastIndex=c),null===d?-1:d.index}]}))},"408c":function(t,e,n){var i=n("2b3e"),o=function(){return i.Date.now()};t.exports=o},4285:function(t,e,n){"use strict";var i=n("6470"),o=n.n(i);o.a},"4a72":function(t,e,n){},"4e95":function(t,e,n){},"55dd":function(t,e,n){"use strict";var i=n("5ca1"),o=n("d8e8"),a=n("4bf8"),s=n("79e5"),l=[].sort,r=[1,2,3];i(i.P+i.F*(s((function(){r.sort(void 0)}))||!s((function(){r.sort(null)}))||!n("2f21")(l)),"Array",{sort:function(t){return void 0===t?l.call(a(this)):l.call(a(this),o(t))}})},5746:function(t,e,n){"use strict";var i=n("4a72"),o=n.n(i);o.a},"5b70":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("custom-dialog",{attrs:{title:t.title,content:t.textContent,"button1-text":t.cancelButtonText,"button2-text":t.deleteButtonText,open:t.open},on:{"update:open":function(e){t.open=e},button1:t.cancel_clicked,button2:t.delete_clicked},scopedSlots:t._u([{key:"content",fn:function(){return[n("v-banner",{attrs:{"two-line":"",outlined:"",tile:"",flat:""}},[n("v-icon",{attrs:{slot:"icon","x-large":"",color:"red accent-4"},slot:"icon"},[t._v(" mdi-alert-octagram ")]),n("p",{staticClass:"subtitle-1",domProps:{innerHTML:t._s(t.textContent)}})],1)]},proxy:!0}])})],1)},o=[],a=n("57e5"),s={components:{CustomDialog:a["a"]},props:{title:{type:String,default:"Default Modal Title"},textContent:{type:String,default:"Default Modal Text Content"},cancelButtonText:{type:String,default:"Cancel"},deleteButtonText:{type:String,default:"Yes, Delete"},openDialog:Boolean},data:function(){return{open:!1}},watch:{openDialog:function(t){this.open=t},open:function(t){this.$emit("update:openDialog",t)}},methods:{cancel_clicked:function(){this.open=!1},delete_clicked:function(){this.$emit("delete")},showDialog:function(){this.open=!0},closeDialog:function(){this.open=!1}}},l=s,r=n("2877"),c=Object(r["a"])(l,i,o,!1,null,null,null);e["a"]=c.exports},"5fc1":function(t,e,n){},6470:function(t,e,n){},"6cef":function(t,e,n){},"6f9b":function(t,e,n){"use strict";var i=n("f324"),o=n.n(i);o.a},8244:function(t,e,n){},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"87f7":function(t,e,n){},"8a97":function(t,e,n){"use strict";var i=n("5fc1"),o=n.n(i);o.a},"961b":function(t,e,n){"use strict";var i=n("4e95"),o=n.n(i);o.a},ab58:function(t,e,n){},b047c:function(t,e,n){var i=n("1a8c"),o=n("408c"),a=n("b4b0"),s="Expected a function",l=Math.max,r=Math.min;function c(t,e,n){var c,d,u,f,_,p,m=0,v=!1,h=!1,g=!0;if("function"!=typeof t)throw new TypeError(s);function b(e){var n=c,i=d;return c=d=void 0,m=e,f=t.apply(i,n),f}function $(t){return m=t,_=setTimeout(k,e),v?b(t):f}function y(t){var n=t-p,i=t-m,o=e-n;return h?r(o,u-i):o}function w(t){var n=t-p,i=t-m;return void 0===p||n>=e||n<0||h&&i>=u}function k(){var t=o();if(w(t))return x(t);_=setTimeout(k,y(t))}function x(t){return _=void 0,g&&c?b(t):(c=d=void 0,f)}function D(){void 0!==_&&clearTimeout(_),m=0,c=p=d=_=void 0}function C(){return void 0===_?f:x(o())}function E(){var t=o(),n=w(t);if(c=arguments,d=this,p=t,n){if(void 0===_)return $(p);if(h)return clearTimeout(_),_=setTimeout(k,e),b(p)}return void 0===_&&(_=setTimeout(k,e)),f}return e=a(e)||0,i(n)&&(v=!!n.leading,h="maxWait"in n,u=h?l(a(n.maxWait)||0,e):u,g="trailing"in n?!!n.trailing:g),E.cancel=D,E.flush=C,E}t.exports=c},b392:function(t,e,n){"use strict";var i=n("ab58"),o=n.n(i);o.a},b4b0:function(t,e,n){var i=n("1a8c"),o=n("ffd6"),a=NaN,s=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,c=/^0o[0-7]+$/i,d=parseInt;function u(t){if("number"==typeof t)return t;if(o(t))return a;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(s,"");var n=r.test(t);return n||c.test(t)?d(t.slice(2),n?2:8):l.test(t)?a:+t}t.exports=u},bc29:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"members-dropdown"},[n("v-autocomplete",t._b({attrs:{value:t.members,items:t.items,"search-input":t.search,loading:t.isLoading,"item-value":"id","prepend-inner-icon":"search","no-filter":"",chips:"",multiple:t.multiple,clearable:"","hide-details":"",color:"#657186",label:"Assign member(s)",filled:"","append-outer-icon":t.showOuterIcon?"add":""},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e},"click:append-outer":t.open_add_new_member},scopedSlots:t._u([{key:"selection",fn:function(e){return[n("v-chip",t._b({attrs:{"input-value":e.selected,close:""},on:{click:e.select,"click:close":function(n){return t.remove_chip(e.index)}}},"v-chip",e.attrs,!1),[n("v-avatar",{attrs:{left:""}},[n("v-img",{attrs:{src:e.item.image_url}})],1),t._v(" "+t._s(e.item.name)+" ")],1)]}},{key:"item",fn:function(e){return[n("v-list-item",{key:e.item.id,on:{click:function(n){return t.add_to_selected(e.item)}}},[n("v-list-item-avatar",[n("v-img",{attrs:{src:e.item.image_url}})],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{innerHTML:t._s(e.item.fullname)}}),n("v-list-item-subtitle",{domProps:{innerHTML:t._s(e.item.job_title)}})],1),n("v-list-item-action",[t.is_item_active(e.item.id)?t._e():n("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("check_circle_outline")]),t.is_item_active(e.item.id)?n("v-icon",{attrs:{color:"success"}},[t._v("check_circle")]):t._e()],1)],1)]}}])},"v-autocomplete",t.$attrs,!1))],1)},o=[],a=(n("6762"),n("2fdb"),n("2909")),s=n("0644"),l=n.n(s),r={name:"MembersDropdown",inheritAttrs:!1,props:{members:Array,memberItems:Array,isLoading:Boolean,multiple:{type:Boolean,default:!0},showOuterIcon:{type:Boolean,default:!1}},data:function(){return{items:[],search:null}},watch:{search:function(t){this.$emit("search",t)},memberItems:function(t){this.items=Object(a["a"])(t)}},methods:{members_selected:function(t){this.$emit("update:members",t)},is_item_active:function(t){return this.members.includes(t)},remove_chip:function(t){var e=l()(this.members);e.splice(t,1),this.$emit("update:members",e)},add_to_selected:function(t){this.is_item_active(t.id)||this.members.push(t.id)},open_add_new_member:function(){this.$event.$emit("open-new-member-dialog",!0)}}},c=r,d=(n("6f9b"),n("cd5d"),n("2877")),u=Object(d["a"])(c,i,o,!1,null,"0e7f9d3c",null);e["a"]=u.exports},cbe4:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"notes"},[n("NotesDialog",{on:{save:t.save},model:{value:t.notes_dialog,callback:function(e){t.notes_dialog=e},expression:"notes_dialog"}}),n("EditNotesDialog",{attrs:{fieldsToEdit:t.note_to_edit},on:{update:t.updateNote},model:{value:t.edit_note_dialog,callback:function(e){t.edit_note_dialog=e},expression:"edit_note_dialog"}}),n("CollaboratorDialog",{attrs:{dialog:t.coll_dialog,collaborators:t.collaborators},on:{"update:dialog":function(e){t.coll_dialog=e},save:t.save_collaborators}}),n("DeleteDialog",{attrs:{"open-dialog":t.delete_note_dialog,title:"Delete Note",noteToDelete:t.note_to_delete,"text-content":"Are you sure you want to delete this note?"},on:{"update:openDialog":function(e){t.delete_note_dialog=e},"update:open-dialog":function(e){t.delete_note_dialog=e},delete:t.delete_note}}),t.notes?n("div",{staticClass:"notes-wrapper"},[n("div",{staticClass:"notes-body"},[n("notes-list",{attrs:{notes:t.items,loading:t.loading,"active-note":t.selected_note,noMoreData:t.noMoreData},on:{clicked:t.change_selected,"toggle-pin":t.toggle_pin,"view-more":t.fetch_more_notes}},[n("template",{slot:"action-btn"},[n("div",{staticClass:"notes-action"},[n("table-header",{on:{click:function(e){t.notes_dialog=!0}}})],1)])],2),n("note-form",{attrs:{note:t.selected_note,loading:t.loading},on:{collaborator:t.open_collaborators_dialog,editNotes:t.open_edit_note_dialog,deleteNotes:t.open_delete_note_dialog}})],1)]):t._e()],1)},o=[],a=(n("20d6"),n("1be9")),s={add_new_note:function(t){return a["a"].post("api/note",t)},get_notes:function(){return a["a"].get("api/note")},get_users:function(){return a["a"].get("api/company/members")},save_collaborators:function(t,e){return a["a"].post("api/note/".concat(e,"/collaborators"),t)},toggle_pin:function(t){return t.pivot.is_pinned?a["a"].put("api/note/".concat(t.id,"/unpin")):a["a"].put("api/note/".concat(t.id,"/pin"))},updateNote:function(t){return a["a"].put("api/note/".concat(t.id),t)},deleteNote:function(t){return a["a"].delete("api/note/".concat(t.id))}},l=n("e06e"),r=n("29d6"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"notes-list"},[n("div",{staticClass:"note-header"},[n("h3",[t._v("Notes")]),t._t("action-btn")],2),n("div",{staticClass:"notes-body"},[0==t.notes.length?n("v-list",[n("v-list-item",[n("v-list-item-content",[n("Empty",{attrs:{headline:"No notes yet",icon:"mdi-book-outline"}})],1)],1)],1):t._e(),t.notes.length>0?n("v-list",{staticClass:"list-wrapper",attrs:{"two-line":""}},t._l(t.notes,(function(e,i){return n("v-list-item",{key:e.id,class:["note",{active:t.activeNote&&t.activeNote.id===e.id}],on:{click:function(n){return t.$emit("clicked",e)}}},[n("v-list-item-content",[n("v-list-item-title",{domProps:{innerHTML:t._f("ucwords")(e.title)}}),n("v-list-item-subtitle",{domProps:{innerHTML:t._f("truncate")(e.content,30)}})],1),n("v-list-item-icon",[n("v-icon",{class:["notify",{active:e.pivot.is_pinned}],attrs:{small:""},on:{click:function(n){return t.$emit("toggle-pin",{note:e,index:i})}}},[t._v(" mdi-pin ")])],1)],1)})),1):t._e()],1),t.loading?n("v-progress-linear",{attrs:{indeterminate:!0}}):t._e(),t.notes.length>0?n("div",{staticClass:"view__more"},[n("v-btn",{staticClass:"view__more_btn",attrs:{text:"",normal:"",disabled:t.noMoreData},on:{click:function(e){return t.$emit("view-more")}}},[t._v("VIEW MORE")])],1):t._e()],1)},d=[],u=n("4752"),f={name:"NotesList",components:{Empty:u["a"]},props:{notes:Array,loading:Boolean,activeNote:Object,noMoreData:{type:Boolean,default:!0}}},_=f,p=(n("961b"),n("2877")),m=Object(p["a"])(_,c,d,!1,null,"107fcc24",null),v=m.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.loading||t.note?t.loading?n("v-progress-linear",{attrs:{indeterminate:!0}}):n("div",{staticClass:"note-form"},[n("div",{staticClass:"note-title"},[n("v-layout",[n("v-flex",{attrs:{grow:""}},[n("v-text-field",{staticClass:"title",attrs:{solo:"","hide-details":"",color:"#657186",flat:"",placeholder:"Note title 1",readonly:"",value:t.note.title}})],1),n("v-flex",{staticClass:"action-wrapper",attrs:{shrink:"","align-center":""}},[n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("v-btn",t._g({staticClass:"action-btn",attrs:{icon:""},on:{click:function(e){return t.$emit("collaborator",t.note.users)}}},i),[n("v-icon",[t._v("mdi-account-plus")])],1)]}}])},[n("span",[t._v("Add Collaborators")])]),n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("v-btn",t._g({staticClass:"action-btn",attrs:{icon:""},on:{click:function(e){return t.$emit("editNotes",t.note)}}},i),[n("v-icon",{attrs:{color:"indigo"}},[t._v("edit")])],1)]}}])},[n("span",[t._v("Edit Note")])]),n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("v-btn",t._g({staticClass:"action-btn",attrs:{icon:""},on:{click:function(e){return t.$emit("deleteNotes",t.note)}}},i),[n("v-icon",{attrs:{color:"red"}},[t._v("delete")])],1)]}}])},[n("span",[t._v("Delete Note")])])],1)],1)],1),n("div",{staticClass:"note-content"},[n("v-row",[n("v-spacer"),n("p",{staticClass:"mr-3 caption py-0 my-0 text-right"},[n("span",[t._v("Created : "+t._s(t._f("format")(t.note.created_at,"MMM D YYYY HH:mm A")))]),n("br"),t.note.updated_at?n("span",[t._v("Last Updated: "+t._s(t._f("format")(t.note.updated_at,"MMM D YYYY HH:mm A")))]):t._e()]),n("v-col",{attrs:{md:"12"}},[n("div",{staticClass:"pa-1 content",domProps:{innerHTML:t._s(t.note.content)}})])],1),n("v-row",{staticClass:"pa-3",attrs:{"no-gutters":""}},[n("v-col",{attrs:{md:"12"}},[t._v("Collaborators:")]),t._l(t.note.users,(function(t){return n("v-col",{key:t.id,staticClass:"my-1 flex",attrs:{md:"4"}},[n("Avatar",{attrs:{user:t}})],1)}))],2)],1)]):n("div",{staticClass:"no-data"},[n("Empty",{attrs:{headline:"No notes yet",icon:"mdi-book-outline"}})],1)},g=[],b={name:"NoteForm",props:{note:Object,loading:Boolean}},$=b,y=(n("5746"),n("4285"),n("b392"),Object(p["a"])($,h,g,!1,null,"3e81e9f1",null)),w=y.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"notes-dialog"},[n("CustomDialog",{attrs:{title:"Add Notes","button2-text":"Save"},on:{"click:close":t.closeDialog,button1:t.closeDialog,button2:t.save},scopedSlots:t._u([{key:"content",fn:function(){return[n("v-row",{staticClass:"custom-dialog",attrs:{"no-gutters":""}},[n("v-col",{attrs:{md:"12"}},[n("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{label:"Add Title",color:"#667187",filled:"",clearable:"","hide-details":"auto"},model:{value:t.payload.title,callback:function(e){t.$set(t.payload,"title","string"===typeof e?e.trim():e)},expression:"payload.title"}})],1),n("v-col",{attrs:{md:"12"}},[n("Editor",{ref:"editor",staticClass:"note-description",attrs:{hasFloatingTools:!1,placeholder:"Description"},model:{value:t.payload.content,callback:function(e){t.$set(t.payload,"content",e)},expression:"payload.content"}})],1)],1)]},proxy:!0}]),model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}})],1)},x=[],D=n("5d98"),C=n("57e5"),E={components:{Editor:D["a"],CustomDialog:C["a"]},props:{value:Boolean},data:function(){return{payload:{title:null,content:null}}},computed:{showDialog:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{save:function(){return this.payload.title?this.payload.content&&"<p></p>"!==this.payload.content?(this.$emit("save",this.payload),Object.assign(this.$data,this.$options.data.apply(this)),void this.$refs.editor.setValue(null)):(this.$event.$emit("open_snackbar","Description is required","error"),void this.$event.$emit("btnloading_off",!1)):(this.$event.$emit("open_snackbar","Title is required","error"),void this.$event.$emit("btnloading_off",!1))},closeDialog:function(){this.$refs.editor.setValue(null),this.showDialog=!1}}},T=E,N=(n("8a97"),Object(p["a"])(T,k,x,!1,null,"11c3fbc0",null)),B=N.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"edit-note-dialog"},[n("CustomDialog",{attrs:{title:"Edit Note","button2-text":"Save"},on:{"click:close":t.cancel,button1:t.cancel,button2:t.update},scopedSlots:t._u([{key:"content",fn:function(){return[t.fieldsToEdit?n("v-row",{staticClass:"custom-dialog",attrs:{"no-gutters":""}},[n("v-col",{attrs:{md:"12"}},[n("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{label:"Edit Title",color:"#667187",filled:"",clearable:"","hide-details":"auto"},model:{value:t.fieldsToEdit.title,callback:function(e){t.$set(t.fieldsToEdit,"title","string"===typeof e?e.trim():e)},expression:"fieldsToEdit.title"}})],1),n("v-col",{attrs:{md:"12"}},[n("Editor",{key:t.fieldsToEdit?t.fieldsToEdit.id:0,ref:"editor",staticClass:"note-description",attrs:{hasFloatingTools:!1,content:t.fieldsToEdit.content,placeholder:"Description"},model:{value:t.fieldsToEdit.content,callback:function(e){t.$set(t.fieldsToEdit,"content","string"===typeof e?e.trim():e)},expression:"fieldsToEdit.content"}})],1)],1):t._e()]},proxy:!0}]),model:{value:t.showEditDialog,callback:function(e){t.showEditDialog=e},expression:"showEditDialog"}})],1)},S=[],O={components:{Editor:D["a"],CustomDialog:C["a"]},props:{value:Boolean,fieldsToEdit:Object},computed:{showEditDialog:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{cancel:function(){this.$refs.editor.setValue(null),this.showEditDialog=null},update:function(){return this.fieldsToEdit.title?this.fieldsToEdit.content&&"<p></p>"!==this.fieldsToEdit.content?(this.$emit("update",this.fieldsToEdit),void Object.assign(this.$data,this.$options.data.apply(this))):(this.$event.$emit("open_snackbar","Description is required","error"),void this.$event.$emit("btnloading_off",!1)):(this.$event.$emit("open_snackbar","Title is required","error"),void this.$event.$emit("btnloading_off",!1))}}},I=O,j=(n("cd0f"),Object(p["a"])(I,M,S,!1,null,"21068f48",null)),A=j.exports,L=n("5b70"),H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"collaborator-dialog"},[n("CustomDialog",{attrs:{title:"Collaborators",open:t.open,"button2-text":"Save"},on:{"update:open":function(e){t.open=e},button1:function(e){t.open=!1},button2:t.save},scopedSlots:t._u([{key:"content",fn:function(){return[n("v-layout",{staticClass:"custom-dialog",attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("UsersDropdown",{attrs:{members:t.selected,"member-items":t.items,"is-loading":t.loading},on:{"update:members":function(e){t.selected=e}}})],1)],1)]},proxy:!0}])})],1)},P=[],V=n("0644"),Y=n.n(V),q=n("bc29"),F={components:{CustomDialog:C["a"],UsersDropdown:q["a"]},props:{dialog:Boolean,collaborators:Array},data:function(){return{open:!1,selected:[],items:[],loading:!1}},watch:{open:function(t){this.dialog!==t&&this.$emit("update:dialog",t)},dialog:function(t){this.open=t,t&&this.fetch_users()},collaborators:function(t){var e=Y()(t);this.selected=e.map((function(t){return t.id}))}},methods:{fetch_users:function(){var t=this;this.loading=!0,s.get_users().then((function(e){var n=e.data;return t.items=n})).finally((function(){return t.loading=!1}))},save:function(){this.$emit("save",{users_id:this.selected}),Object.assign(this.$data,this.$options.data.apply(this))}}},U=F,z=Object(p["a"])(U,H,P,!1,null,null,null),G=z.exports,W=n("2ef0"),J={name:"Notes",mixins:[l["a"]],components:{TableHeader:r["a"],NotesList:v,NoteForm:w,NotesDialog:B,EditNotesDialog:A,CollaboratorDialog:G,DeleteDialog:L["a"]},data:function(){return{paths:[{text:"Dashboard",disabled:!1,router_name:"default-content"},{text:"Notes",disabled:!0,router_name:null}],notes_dialog:!1,edit_note_dialog:!1,delete_note_dialog:!1,coll_dialog:!1,notes:[],loading:!1,selected_note:null,collaborators:[],pin_api:!1,note_to_edit:null,note_to_delete:null}},mounted:function(){this.$event.$emit("path-change",this.paths),this.fetch_notes()},methods:{fetch_notes:function(){var t=this;this.fill_table_via_url("api/note",!0,(function(e){t.select_first_note()}))},fetch_more_notes:function(){this.load_more_via_url("api/note")},save:function(t){var e=this;s.add_new_note(t).then((function(t){var n=t.data;e.items.unshift(n),e.$event.$emit("open_snackbar","Note Added Successfully"),e.notes_dialog=!1,e.select_first_note()})).finally((function(){e.$event.$emit("btnloading_off",!1)}))},updateNote:function(t){var e=this;t&&s.updateNote(t).then(this.update_notes).finally((function(){e.$event.$emit("btnloading_off",!1)}))},update_notes:function(t){var e=this,n=t.data;if(this.note_to_edit){var i=this.items.findIndex((function(t){return t.id===e.note_to_edit.id}));~i&&(this.items[i].title=n.title,this.items[i].content=n.content,this.$event.$emit("open_snackbar","Note updated successfully!"))}this.edit_note_dialog=!1},save_collaborators:function(t){var e=this;s.save_collaborators(t,this.selected_note.id).then(this.update_collaborators).finally((function(){e.$event.$emit("btnloading_off",!1)}))},select_first_note:function(){this.items.length>0?this.selected_note=this.items[0]:this.selected_note=null},change_selected:function(t){this.selected_note=t,this.note_to_edit=t,this.note_to_delete=t},open_collaborators_dialog:function(t){this.collaborators=t,this.coll_dialog=!0},open_edit_note_dialog:function(t){this.note_to_edit=Object(W["cloneDeep"])(t),this.edit_note_dialog=!0},update_collaborators:function(t){var e=this,n=t.data,i=this.items.findIndex((function(t){return t.id===e.selected_note.id}));~i&&(this.items[i].collaborators=n,this.$event.$emit("open_snackbar","Collaborators updated successfully!"))},toggle_pin:function(t){var e=this,n=t.note,i=t.index;if(!this.pin_api){this.pin_api=!0;var o=n.pivot.is_pinned?"Unpinned":"Pinned";s.toggle_pin(n).then((function(t){var n=t.data;return e.$set(e.items[i].pivot,"is_pinned",n)})).finally((function(){e.pin_api=!1,e.$event.$emit("open_snackbar","".concat(o," successfully!"))}))}},open_delete_note_dialog:function(t){this.note_to_delete=Object(W["cloneDeep"])(t),this.delete_note_dialog=!0},delete_note:function(){var t=this;s.deleteNote(this.note_to_delete).then((function(e){var n=e.data,i=t.items.findIndex((function(e){return e.id===t.note_to_delete.id}));~i&&(t.items.splice(i,1),t.select_first_note(),t.$event.$emit("open_snackbar",n.message?n.message:n.error,n.message?"success":"error"))})).finally((function(){t.delete_note_dialog=!1,t.note_to_delete=null}))}}},K=J,R=(n("16ca"),Object(p["a"])(K,i,o,!1,null,"6f7d8021",null));e["default"]=R.exports},cd0f:function(t,e,n){"use strict";var i=n("6cef"),o=n.n(i);o.a},cd5d:function(t,e,n){"use strict";var i=n("87f7"),o=n.n(i);o.a},ce2c:function(t,e,n){"use strict";var i=n("e8a3"),o=n.n(i);o.a},e06e:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("386d"),n("a481"),n("c5f6"),n("28a5"),n("55dd"),n("2fdb"),n("20d6"),n("6762"),n("ac6a");var i=n("b047c"),o=n.n(i),a=n("d4e9"),s=n("1be9"),l={methods:{resetPagination:function(){this.pagination.current=1,this.pagination.total=0,this.noMoreData=!1},clear_selected:function(){this.selected=[],this.$event.$emit("clear_selected",[]),this.$event.$emit("btnloading_off",!1)},add_item:function(t,e){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3?arguments[3]:void 0;a["a"][t](e,i).then((function(t){var e=t.data;Array.isArray(e)?e.reverse().forEach((function(t){return n.items.push(t)})):n.items.push(e),n.clear_selected(),n.$refs.add_dialog.clear_and_close(),n.$event.$emit("open_snackbar",n.table_config.add_message),"function"===typeof o&&o(t)})).finally((function(){return n.$event.$emit("btnloading_off",!1)}))},extract_per_page:function(t){var e=t.search("per_page");return t.substring(e+9,e+10)},calc_per_page_items:function(t,e){var n=[5,10,15,20,25];return n.includes(t)||n.push(t),!n.includes(e)&&e<=25&&n.push(e),n},update_item:function(t,e){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3?arguments[3]:void 0;a["a"][t](this.edit_item.id,e,i).then((function(t){var e=n.items.findIndex((function(e){return e.id===t.data.id}));~e&&n.items.splice(e,1,t.data),n.edit_item={id:null,fields:null},n.edit_dialog=!1,n.clear_selected(),n.$event.$emit("open_snackbar",n.table_config.update_message),"function"===typeof o&&o(t)})).finally((function(){return n.$event.$emit("btnloading_off",!1)}))},delete_item:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2?arguments[2]:void 0;a["a"][t](this.delete_item_id,n).then((function(){var t=e.items.findIndex((function(t){return t.id===e.delete_item_id}));~t&&e.items.splice(t,1),e.delete_item_id=null,e.delete_dialog=!1,e.clear_selected(),e.$event.$emit("open_snackbar",e.table_config.delete_message),"function"===typeof i&&i(response)})).finally((function(){return e.$event.$emit("btnloading_off",!1)}))},bulk_delete:function(t){var e=this,n={ids:this.selected.map((function(t){return t.id}))};a["a"][t]({data:n}).then((function(t){var n=t.data;e.selected.forEach((function(t){var n=e.items.findIndex((function(e){return e.id===t.id}));~n&&e.items.splice(n,1)})),e.bulk_delete_dialog=!1,e.clear_selected(),e.$event.$emit("open_snackbar",n.message)})).finally((function(){e.$event.$emit("btnloading_off",!1)}))},bulk_delete_via_url:function(t){var e=this,n={ids:this.selected.map((function(t){return t.id}))};s["a"].delete(t,{data:n}).then((function(t){var n=t.data;e.selected.forEach((function(t){var n=e.items.findIndex((function(e){return e.id===t.id}));~n&&e.items.splice(n,1)})),e.bulk_delete_dialog=!1,e.clear_selected(),e.$event.$emit("open_snackbar",n.message)})).finally((function(){e.$event.$emit("btnloading_off",!1)}))},open_edit_dialog:function(t){this.edit_dialog=!0,this.$set(this.edit_item,"id",t.id),this.$set(this.edit_item,"fields",t)},open_delete_dialog:function(t){this.delete_dialog=!0,this.delete_item_id=t.id},open_bulk_delete_dialog:function(t){this.bulk_delete_dialog=!0,this.selected=t},fill_table:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.loading=!0,a["a"][t](i).then((function(t){e.items_response=t.data,n?(e.items=t.data.data,e.pagination.current=t.data.current_page,e.pagination.total=t.data.last_page,e.hasMoreData()):e.items=t.data})).finally((function(){e.clear_selected(),e.loading=!1,e.$event.$emit("btnloading_off",!1)}))},fill_table_via_url:function(t){var e=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2?arguments[2]:void 0;this.loading=!0;var o={page:this.pagination.current};t.includes("per_page")||(o.per_page=this.$store.getters["configs/general_page_limits"]),s["a"].get(t,{params:o}).then((function(t){e.items_response=t.data,n?(e.items=t.data.data,e.pagination.current=t.data.current_page,e.pagination.total=t.data.last_page,e.hasMoreData()):e.items=t.data,"function"===typeof i&&i(t)})).finally((function(){e.clear_selected(),e.loading=!1,e.$event.$emit("btnloading_off",!1)}))},load_more_on_table:function(t){var e=this;this.loading=!0;var n={page:this.pagination.current+1};a["a"][t]({params:n}).then((function(t){var n=t.data;e.items_response=n.data,n.data.forEach((function(t){e.items.push(t)})),e.pagination.current=n.current_page,e.pagination.total=n.last_page,e.hasMoreData()})).finally((function(){e.clear_selected(),e.loading=!1,e.scrollToBottom(),e.$event.$emit("btnloading_off",!1)}))},load_more_via_url:function(t,e){var n=this;this.loading=!0;var i={page:this.pagination.current+1};t.includes("per_page")||(i.per_page=this.$store.getters["configs/general_page_limits"]),s["a"].get(t,{params:i}).then((function(t){var i=t.data;n.items_response=i.data,i.data.forEach((function(t){n.items.push(t)})),n.pagination.current=i.current_page,n.pagination.total=i.last_page,n.hasMoreData(),"function"===typeof e&&e(i)})).finally((function(){n.clear_selected(),n.loading=!1,n.scrollToBottom(),n.$event.$emit("btnloading_off",!1)}))},fill_table_with_data:function(t){this.items=t},add_table_rows:function(t,e){this.items=t,this.items_response=e},changeSort:function(t){this.sort.sortBy===t?this.sort.descending=!this.sort.descending:(this.sort.sortBy=t,this.sort.descending=!1)},refresh_table:function(t){var e=this;a["a"][this.table_config.refresh_table_api_name](t).then((function(t){e.$event.$emit("open_snackbar",e.table_config.refresh_table_message),e.loading=!1,e.clear_selected(),e.items_response=t.data,e.items=t.data.data})).finally((function(){return e.$event.$emit("btnloading_off",!1)}))},update_table_actions:function(t){if(t.page&&(this.page=Number(t.page)),t.per_page&&(this.rows_per_page=Number(t.per_page)),t.search&&(this.search=t.search),t.sort){var e=t.sort.split("|");this.sort.sortBy=e[0],"asc"===e[1]?this.sort.descending=!1:"desc"===e[1]&&(this.sort.descending=!0)}},hasMoreData:function(){this.componentKey+=1,this.pagination.current>=this.pagination.total&&(this.noMoreData=!0)},toggleAll:function(){this.selected.length?this.clear_selected():this.selected=this.items.slice()},setPreferredView:function(t){window.localStorage.setItem("bzk_prefer_view",t),this.view=t},getPreferredView:function(){return window.localStorage.getItem("bzk_prefer_view")||"list"},scrollToBottom:function(){setTimeout((function(){var t=document.getElementsByClassName("v-data-table__wrapper")[0];t&&(t.scrollTop=t.scrollHeight)}),1)},debounce:o()((function(t){this.search=t}),500)}},r={mixins:[l],data:function(){return{edit_dialog:!1,add_dialog:!1,delete_dialog:!1,permissionDialog:!1,bulk_delete_dialog:!1,loading:!1,items:[],items_response:null,edit_item:{id:null,fields:null},delete_item_id:null,show_delete_selected:!1,selected_ids:[],selected:[],rows_per_page:null,page:1,sort:{sortBy:null,descending:!1},search:"",pagination:{current:1,total:0},noMoreData:!1,componentKey:1,view:"list",btnloading:!1}},watch:{selected_ids:function(t){t.length>0?this.show_delete_selected=!0:this.show_delete_selected=!1},api_query:function(t,e){var n=Number(this.extract_per_page(t)),i=Number(this.extract_per_page(e))||null;this.items_response&&this.rows_per_page===this.items.length&&n!==i||(this.$router.replace({name:this.table_config.route_name,query:{page:this.page,per_page:this.rows_per_page,search:this.search,sort:this.query_for_sorting}}),this.loading=!0,this.refresh_table(t))}}}},e8a3:function(t,e,n){},f324:function(t,e,n){}}]);
//# sourceMappingURL=chunk-12fc9183.4118f40c.js.map