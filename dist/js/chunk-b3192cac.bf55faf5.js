(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b3192cac"],{1028:function(t,e,o){},"10fc":function(t,e,o){"use strict";var n=o("65a1"),a=o.n(n);a.a},"259d":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"breadcrumb-wrapper"},[o("v-breadcrumbs",{attrs:{items:t.paths},scopedSlots:t._u([{key:"item",fn:function(e){var n=e.item;return[o("v-breadcrumbs-item",{staticClass:"page__title",attrs:{disabled:n.disabled}},[o("span",{on:{click:function(e){return t.navigate_from_breadcrumb(n)}}},[t._v(" "+t._s(n.text)+" ")])])]}}])},[o("v-icon",{attrs:{slot:"divider"},slot:"divider"},[t._v("chevron_right")])],1)],1)},a=[],i={name:"Breadcrumb",props:{paths:{type:Array,default:function(){return[]}}},methods:{navigate_from_breadcrumb:function(t){if(t.hasOwnProperty("path"))t.path&&this.$router.push({path:t.path});else{var e=t.router_name;e&&this.$router.push({name:e})}}}},s=i,l=(o("87d8"),o("10fc"),o("2877")),c=Object(l["a"])(s,n,a,!1,null,"14ca3542",null);e["a"]=c.exports},"29d6":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-layout",{staticClass:"table-header",attrs:{wrap:""}},[o("breadcrumb",{attrs:{paths:t.paths}}),o("v-flex",[t.noButton?t._e():o("v-btn",{staticClass:"add__btn mr-2",attrs:{fab:"",small:"",dark:"",color:"#3b589e"},on:{click:function(e){return t.$emit("click")}}},[o("v-icon",[t._v("add")])],1),t.noSortButton?t._e():o("v-btn",{staticClass:"add__btn mr-2",attrs:{fab:"",small:"",dark:"",color:"#3b589e"},on:{click:function(e){return t.$emit("click-sort-by")}}},[o("v-icon",[t._v("sort")])],1),t.noListButton?t._e():o("v-btn",{staticClass:"add__btn mr-2",attrs:{fab:"",small:"",dark:"",color:"#3b589e"},on:{click:function(e){return t.$emit("click-list-view")}}},[o("v-icon",[t._v("list")])],1),t.noGridButton?t._e():o("v-btn",{staticClass:"add__btn mr-2",attrs:{fab:"",small:"",dark:"",color:"#3b589e"},on:{click:function(e){return t.$emit("click-grid-view")}}},[o("v-icon",[t._v("mdi-view-dashboard")])],1),t._t("form-btn")],2)],1)},a=[],i=o("259d"),s={name:"TableHeader",props:{paths:{type:Array,default:[]},noButton:{type:Boolean,default:!1},noListButton:{type:Boolean,default:!0},noGridButton:{type:Boolean,default:!0},noSortButton:{type:Boolean,default:!0}},data:function(){return{fab:!0}},components:{Breadcrumb:i["a"]}},l=s,c=(o("337a"),o("2877")),r=Object(c["a"])(l,n,a,!1,null,"b8bfd1cc",null);e["a"]=r.exports},"2e65":function(t,e,o){},"337a":function(t,e,o){"use strict";var n=o("9e25"),a=o.n(n);a.a},"39b1":function(t,e,o){},"434f":function(t,e,o){"use strict";var n=o("4d07"),a=o.n(n);a.a},"4d07":function(t,e,o){},"501e":function(t,e,o){},5969:function(t,e,o){"use strict";var n=o("2e65"),a=o.n(n);a.a},"65a1":function(t,e,o){},6881:function(t,e,o){},"6b46":function(t,e,o){"use strict";var n=o("6881"),a=o.n(n);a.a},7814:function(t,e,o){"use strict";var n=o("9b74"),a=o.n(n);a.a},"7d46":function(t,e,o){"use strict";var n=o("1028"),a=o.n(n);a.a},"87d8":function(t,e,o){"use strict";var n=o("e403"),a=o.n(n);a.a},"8d84":function(t,e,o){"use strict";var n=o("a0db"),a=o.n(n);a.a},"9b74":function(t,e,o){},"9e25":function(t,e,o){},a0db:function(t,e,o){},af90:function(t,e,o){"use strict";var n=o("501e"),a=o.n(n);a.a},b418:function(t,e,o){"use strict";var n=o("39b1"),a=o.n(n);a.a},bc29:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"members-dropdown"},[o("v-autocomplete",t._b({attrs:{value:t.members,items:t.items,"search-input":t.search,loading:t.isLoading,"item-value":"id","prepend-inner-icon":"search","no-filter":"",chips:"",multiple:"",clearable:"","hide-details":"",color:"#657186",label:"Assign member(s)",filled:"","append-outer-icon":t.showOuterIcon?"add":""},on:{input:t.members_selected,"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e},"click:append-outer":t.open_add_new_member},scopedSlots:t._u([{key:"selection",fn:function(e){return[o("v-chip",{staticClass:"chip--select-multi",attrs:{"input-value":e.selected,outlined:"",close:""},on:{input:function(o){return t.remove_chip(e.index)}}},[o("img",{attrs:{src:e.item.image_url,width:"30",height:"30"}}),t._v(" "),o("span",{staticClass:"chip-member-name"},[t._v(t._s(e.item.name))])])]}},{key:"item",fn:function(e){var n=e.item;return[o("div",{staticClass:"member"},[o("div",{staticClass:"member-avatar"},[o("img",{attrs:{src:n.image_url}})]),o("div",{staticClass:"member-info"},[o("div",{staticClass:"full-name"},[t._v(" "+t._s(n.first_name)+" ")]),o("div",{staticClass:"job-title"},[t._v(" "+t._s(n.job_title)+" ")])]),t.is_item_active(n.id)?t._e():o("div",{staticClass:"checked-icon"},[o("v-icon",{attrs:{color:"gray"}},[t._v("check_circle_outline")])],1),t.is_item_active(n.id)?o("div",{staticClass:"checked-icon"},[o("v-icon",{attrs:{color:"green"}},[t._v("check_circle")])],1):t._e()])]}}])},"v-autocomplete",t.$attrs,!1))],1)},a=[],i=(o("6762"),o("2fdb"),o("75fc")),s=o("0644"),l=o.n(s),c={name:"MembersDropdown",inheritAttrs:!1,props:{members:Array,memberItems:Array,isLoading:Boolean,showOuterIcon:{type:Boolean,default:!1}},data:function(){return{items:[],search:null}},watch:{search:function(t){this.$emit("search",t)},memberItems:function(t){this.items=Object(i["a"])(t)}},methods:{members_selected:function(t){this.$emit("update:members",t)},is_item_active:function(t){return this.members.includes(t)},remove_chip:function(t){var e=l()(this.members);e.splice(t,1),this.$emit("update:members",e)},open_add_new_member:function(){this.$event.$emit("open-new-member-dialog",!0)}}},r=c,d=(o("af90"),o("7814"),o("2877")),u=Object(d["a"])(r,n,a,!1,null,"30d23b98",null);e["a"]=u.exports},cbe4:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"notes"},[o("table-header",{attrs:{paths:t.paths},on:{click:function(e){t.notes_dialog=!0}}}),o("NotesDialog",{on:{save:t.save},model:{value:t.notes_dialog,callback:function(e){t.notes_dialog=e},expression:"notes_dialog"}}),o("EditNotesDialog",{attrs:{fieldsToEdit:t.note_to_edit},on:{update:t.updateNote},model:{value:t.edit_note_dialog,callback:function(e){t.edit_note_dialog=e},expression:"edit_note_dialog"}}),o("CollaboratorDialog",{attrs:{dialog:t.coll_dialog,collaborators:t.collaborators},on:{"update:dialog":function(e){t.coll_dialog=e},save:t.save_collaborators}}),o("DeleteDialog",{attrs:{"open-dialog":t.delete_note_dialog,title:"Delete Note",noteToDelete:t.note_to_delete,"text-content":"Are you sure you want to delete this note?"},on:{"update:openDialog":function(e){t.delete_note_dialog=e},"update:open-dialog":function(e){t.delete_note_dialog=e},delete:t.delete_note}}),t.notes?o("div",{staticClass:"notes-wrapper"},[o("div",{staticClass:"notes-content"},[o("notes-list",{attrs:{notes:t.notes,loading:t.loading,"active-note":t.selected_note},on:{clicked:t.change_selected,"toggle-pin":t.toggle_pin}}),o("note-form",{attrs:{note:t.selected_note,loading:t.loading},on:{collaborator:t.open_collaborators_dialog,editNotes:t.open_edit_note_dialog,deleteNotes:t.open_delete_note_dialog}})],1)]):o("div",{staticClass:"empty-notes"},[o("div",{staticClass:"empty-content"},[o("div",{staticClass:"empty-svg"},[o("svg",{attrs:{viewBox:"0 0 250 250"}},[o("path",{attrs:{d:"M58 59l149 0 0 -7c0,-4 -2,-7 -4,-10 -3,-2 -7,-4 -11,-4l-163 0c-4,0 -7,2 -10,4 -2,3 -4,6 -4,10l0 111c0,4 2,8 4,10 3,3 6,5 10,5l1 0 0 -91c0,-8 3,-15 8,-20 5,-5 12,-8 20,-8zm13 59c-3,0 -6,-3 -6,-7 0,-4 3,-7 6,-7l138 0c3,0 6,3 6,7 0,4 -3,7 -6,7l-138 0zm0 35c-3,0 -6,-3 -6,-7 0,-4 3,-7 6,-7l87 0c3,0 6,3 6,7 0,4 -3,7 -6,7l-87 0zm0 31c-3,0 -6,-3 -6,-7 0,-3 3,-6 6,-6l138 0c3,0 6,3 6,6 0,4 -3,7 -6,7l-138 0zm149 -125l1 0c7,0 14,3 19,8 5,5 8,12 8,20l0 111c0,7 -3,14 -8,19 -5,5 -12,8 -19,8l-163 0c-8,0 -15,-3 -20,-8 -5,-5 -8,-12 -8,-19l0 -7 -1 0c-7,0 -14,-3 -19,-8 -5,-5 -8,-12 -8,-20l0 -111c0,-7 3,-14 8,-19 5,-5 12,-8 19,-8l163 0c8,0 15,3 20,8 5,5 8,12 8,19l0 7zm1 13l-163 0c-4,0 -8,2 -11,5 -2,2 -4,6 -4,10l0 111c0,4 2,7 4,10 3,2 7,4 11,4l163 0c4,0 7,-2 10,-4 2,-3 4,-6 4,-10l0 -111c0,-4 -2,-8 -4,-10 -3,-3 -6,-5 -10,-5z"}})])]),o("div",{staticClass:"empty-btn"},[o("v-btn",{attrs:{large:"",dark:"",color:"#3b589e"},on:{click:function(e){t.notes_dialog=!0}}},[t._v("Add Notes")])],1)])])],1)},a=[],i=(o("20d6"),o("1be9")),s={add_new_note:function(t){return i["a"].post("api/note",t)},get_notes:function(){return i["a"].get("api/note")},get_users:function(){return i["a"].get("api/company/members")},save_collaborators:function(t,e){return i["a"].post("api/note/".concat(e,"/collaborators"),t)},toggle_pin:function(t){return t.pivot.is_pinned?i["a"].put("api/note/".concat(t.id,"/unpin")):i["a"].put("api/note/".concat(t.id,"/pin"))},updateNote:function(t){return i["a"].put("api/note/".concat(t.id),t)},deleteNote:function(t){return i["a"].delete("api/note/".concat(t.id))}},l=o("29d6"),c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"notes-list"},[o("div",{staticClass:"note-header"},[t._v(" Notes ")]),t.loading?o("v-progress-linear",{attrs:{indeterminate:!0}}):o("div",{staticClass:"notes-body"},t._l(t.notes,(function(e,n){return o("div",{key:e.id,class:["note",{active:t.activeNote&&t.activeNote.id===e.id}],on:{click:function(o){return t.$emit("clicked",e)}}},[o("div",{staticClass:"note-name"},[o("span",[t._v(t._s(e.title))]),o("v-icon",{class:["notify",{active:e.pivot.is_pinned}],on:{click:function(o){return t.$emit("toggle-pin",{note:e,index:n})}}},[t._v(" notifications ")])],1),o("div",{staticClass:"note-desc"},[o("p",{domProps:{innerHTML:t._s(e.content)}})])])})),0),o("div",{staticClass:"view__more"},[o("v-btn",{staticClass:"view__more_btn",attrs:{text:"",normal:""}},[t._v("VIEW MORE")])],1)],1)},r=[],d={name:"NotesList",props:{notes:Array,loading:Boolean,activeNote:Object}},u=d,p=(o("8d84"),o("2877")),_=Object(p["a"])(u,c,r,!1,null,"5193c6e8",null),f=_.exports,v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.loading||t.note?t.loading?o("v-progress-linear",{attrs:{indeterminate:!0}}):o("div",{staticClass:"note-form"},[o("div",{staticClass:"note-title"},[o("v-layout",[o("v-flex",{attrs:{grow:""}},[o("v-text-field",{staticClass:"title",attrs:{solo:"","hide-details":"",color:"#657186",flat:"",placeholder:"Note title 1",readonly:"",value:t.note.title}})],1),o("v-flex",{staticClass:"action-wrapper",attrs:{shrink:"","align-center":""}},[o("v-btn",{staticClass:"action-btn",attrs:{flat:""},on:{click:function(e){return t.$emit("collaborator",t.note.collaborators)}}},[o("v-icon",[t._v("add")])],1),o("v-btn",{staticClass:"action-btn",attrs:{text:""},on:{click:function(e){return t.$emit("editNotes",t.note)}}},[o("v-icon",{attrs:{color:"indigo"}},[t._v("edit")])],1),o("v-btn",{staticClass:"action-btn",attrs:{text:""},on:{click:function(e){return t.$emit("deleteNotes",t.note)}}},[o("v-icon",{attrs:{color:"red"}},[t._v("delete")])],1)],1)],1)],1),o("div",{staticClass:"note-content"},[o("v-layout",[o("v-col",{attrs:{xs12:""}},[o("v-textarea",{staticClass:"note-text",attrs:{solo:"","hide-details":"",color:"#657186",flat:"",placeholder:"Note description ...",readonly:""},domProps:{innerHTML:t._s(t.note.content)}})],1)],1),o("v-layout",[t._v("Collaborators:")]),o("v-layout",t._l(t.note.collaborators,(function(e){return o("v-chip",{staticClass:"ma-2",attrs:{outlined:"",light:"",disabled:""}},[o("v-avatar",{attrs:{left:""}},[o("v-img",{attrs:{src:e.image_url}})],1),t._v(" "+t._s(e.name)+" ")],1)})),1)],1)]):o("div",{staticClass:"no-data"},[t._v(" No notes yet ")])},m=[],b={name:"NoteForm",props:{note:Object,loading:Boolean}},h=b,g=(o("5969"),o("7d46"),Object(p["a"])(h,v,m,!1,null,"397cdf19",null)),y=g.exports,C=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"notes-dialog"},[o("CustomDialog",{attrs:{title:"Add Notes","button2-text":"Save"},on:{button1:function(e){t.showDialog=!1},button2:t.save},scopedSlots:t._u([{key:"content",fn:function(){return[o("v-layout",{staticClass:"custom-dialog",attrs:{wrap:""}},[o("v-flex",{attrs:{xs12:""}},[o("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{label:"Add Title",color:"#667187",filled:"","hide-details":""},model:{value:t.payload.title,callback:function(e){t.$set(t.payload,"title","string"===typeof e?e.trim():e)},expression:"payload.title"}})],1),o("v-flex",{attrs:{xs12:""}},[o("rich-editor",{staticClass:"note-description",attrs:{placeholder:"Description"},model:{value:t.payload.content,callback:function(e){t.$set(t.payload,"content","string"===typeof e?e.trim():e)},expression:"payload.content"}})],1)],1)]},proxy:!0}]),model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}})],1)},x=[],$=o("4ad3"),k=o("57e5"),w={components:{RichEditor:$["a"],CustomDialog:k["a"]},props:{value:Boolean},data:function(){return{payload:{title:null,content:null}}},computed:{showDialog:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{save:function(){this.$emit("save",this.payload),Object.assign(this.$data,this.$options.data.apply(this))}}},D=w,N=(o("b418"),Object(p["a"])(D,C,x,!1,null,"e9f8dee4",null)),E=N.exports,B=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"edit-note-dialog"},[o("CustomDialog",{attrs:{title:"Edit Note","button2-text":"Save"},on:{button1:t.cancel,button2:t.update},scopedSlots:t._u([{key:"content",fn:function(){return[t.fieldsToEdit?o("v-layout",{staticClass:"custom-dialog",attrs:{wrap:""}},[o("v-flex",{attrs:{xs12:""}},[o("v-text-field",{staticClass:"dialog__textfield d-field",attrs:{label:"Edit Title",color:"#667187",box:"","hide-details":""},model:{value:t.fieldsToEdit.title,callback:function(e){t.$set(t.fieldsToEdit,"title","string"===typeof e?e.trim():e)},expression:"fieldsToEdit.title"}})],1),o("v-flex",{attrs:{xs12:""}},[o("rich-editor",{staticClass:"note-description",attrs:{placeholder:"Description"},model:{value:t.fieldsToEdit.content,callback:function(e){t.$set(t.fieldsToEdit,"content","string"===typeof e?e.trim():e)},expression:"fieldsToEdit.content"}})],1)],1):t._e()]},proxy:!0}]),model:{value:t.showEditDialog,callback:function(e){t.showEditDialog=e},expression:"showEditDialog"}})],1)},O=[],j={components:{RichEditor:$["a"],CustomDialog:k["a"]},props:{value:Boolean,fieldsToEdit:Object},computed:{showEditDialog:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{cancel:function(){this.showEditDialog=null},update:function(){this.$emit("update",this.fieldsToEdit),Object.assign(this.$data,this.$options.data.apply(this))}}},T=j,A=(o("434f"),Object(p["a"])(T,B,O,!1,null,"34431440",null)),S=A.exports,I=o("5b70"),L=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"collaborator-dialog"},[o("CustomDialog",{attrs:{title:"Collaborators",open:t.open,"button2-text":"Save"},on:{"update:open":function(e){t.open=e},button1:function(e){t.open=!1},button2:t.save},scopedSlots:t._u([{key:"content",fn:function(){return[o("v-layout",{staticClass:"custom-dialog",attrs:{wrap:""}},[o("v-flex",{attrs:{xs12:""}},[o("UsersDropdown",{attrs:{members:t.selected,"member-items":t.items,"is-loading":t.loading},on:{"update:members":function(e){t.selected=e}}})],1)],1)]},proxy:!0}])})],1)},z=[],M=o("0644"),H=o.n(M),P=o("bc29"),R={components:{CustomDialog:k["a"],UsersDropdown:P["a"]},props:{dialog:Boolean,collaborators:Array},data:function(){return{open:!1,selected:[],items:[],loading:!1}},watch:{open:function(t){this.dialog!==t&&this.$emit("update:dialog",t)},dialog:function(t){this.open=t,t&&this.fetch_users()},collaborators:function(t){var e=H()(t);this.selected=e.map((function(t){return t.id}))}},methods:{fetch_users:function(){var t=this;this.loading=!0,s.get_users().then((function(e){var o=e.data;return t.items=o})).finally((function(){return t.loading=!1}))},save:function(){this.$emit("save",{users_id:this.selected}),Object.assign(this.$data,this.$options.data.apply(this))}}},U=R,F=Object(p["a"])(U,L,z,!1,null,null,null),G=F.exports,J=o("2ef0"),V={name:"Notes",components:{TableHeader:l["a"],NotesList:f,NoteForm:y,NotesDialog:E,EditNotesDialog:S,CollaboratorDialog:G,DeleteDialog:I["a"]},data:function(){return{paths:[{text:"Dashboard",disabled:!1,router_name:"default-content"},{text:"Notes",disabled:!0,router_name:null}],notes_dialog:!1,edit_note_dialog:!1,delete_note_dialog:!1,coll_dialog:!1,notes:[],loading:!1,selected_note:null,collaborators:[],pin_api:!1,note_to_edit:null,note_to_delete:null}},created:function(){this.fetch_notes()},methods:{fetch_notes:function(){var t=this;this.loading=!0,s.get_notes().then((function(e){var o=e.data;t.notes=o.data,t.select_first_note(o.data)})).finally((function(){return t.loading=!1}))},save:function(t){var e=this;s.add_new_note(t).then((function(t){var o=t.data;e.notes.push(o),e.$event.$emit("open_snackbar","Note Added Successfully"),e.notes_dialog=!1}))},updateNote:function(t){t&&s.updateNote(t).then(this.update_notes)},update_notes:function(t){var e=this,o=t.data,n=this.notes.findIndex((function(t){return t.id===e.selected_note.id}));~n&&(this.notes[n].title=o.title,this.notes[n].content=o.content,this.$event.$emit("open_snackbar","Note updated successfully!")),this.edit_note_dialog=!1},save_collaborators:function(t){s.save_collaborators(t,this.selected_note.id).then(this.update_collaborators)},select_first_note:function(t){t.length&&(this.selected_note=t[0])},change_selected:function(t){this.selected_note=t},open_collaborators_dialog:function(t){this.collaborators=t,this.coll_dialog=!0},open_edit_note_dialog:function(t){this.note_to_edit=Object(J["cloneDeep"])(t),this.edit_note_dialog=!0},update_collaborators:function(t){var e=this,o=t.data,n=this.notes.findIndex((function(t){return t.id===e.selected_note.id}));~n&&(this.notes[n].collaborators=o,this.$event.$emit("open_snackbar","Collaborators updated successfully!"))},toggle_pin:function(t){var e=this,o=t.note,n=t.index;if(!this.pin_api){this.pin_api=!0;var a=o.pivot.is_pinned?"Unpinned":"Pinned";s.toggle_pin(o).then((function(t){var o=t.data;return e.$set(e.notes[n].pivot,"is_pinned",o)})).finally((function(){e.pin_api=!1,e.$event.$emit("open_snackbar","".concat(a," successfully!"))}))}},open_delete_note_dialog:function(t){this.note_to_delete=Object(J["cloneDeep"])(t),this.delete_note_dialog=!0},delete_note:function(){var t=this;s.deleteNote(this.note_to_delete).then((function(e){var o=e.data,n=t.notes.findIndex((function(e){return e.id===t.note_to_delete.id}));~n&&(t.notes.splice(n,1),t.$event.$emit("open_snackbar",o.message?o.message:o.error,o.message?"success":"error"))})).finally((function(){t.delete_note_dialog=!1,t.note_to_delete=null}))}}},W=V,q=(o("6b46"),Object(p["a"])(W,n,a,!1,null,"4b79b04e",null));e["default"]=q.exports},e403:function(t,e,o){}}]);
//# sourceMappingURL=chunk-b3192cac.bf55faf5.js.map