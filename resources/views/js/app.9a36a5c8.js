(function(t){function e(e){for(var n,s,c=e[0],i=e[1],l=e[2],u=0,v=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&v.push(o[s][0]),o[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);d&&d(e);while(v.length)v.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,c=1;c<a.length;c++){var i=a[c];0!==o[i]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},o={app:0},r=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=i;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},1877:function(t,e,a){"use strict";a("741c")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"appmain"},[a("v-container",{attrs:{fluid:""}},[a("router-link",{staticClass:"menuelement px-3",attrs:{to:"/"}},[t._v("Kategóriák")]),a("router-link",{staticClass:"menuelement px-3",attrs:{to:"/persons"}},[t._v("Címzettek")])],1),a("v-main",[a("router-view")],1)],1)},r=[],s=(a("034f"),a("2877")),c=a("6544"),i=a.n(c),l=a("7496"),d=a("a523"),u=a("f6c4"),v={},f=Object(s["a"])(v,o,r,!1,null,null,null),m=f.exports;i()(f,{VApp:l["a"],VContainer:d["a"],VMain:u["a"]});var p=a("f309");n["a"].use(p["a"]);var h=new p["a"]({}),b=a("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"col-12 col-sm-10 col-md-8 col-lg-6 col-xl-6 mx-auto text-center",attrs:{fluid:""}},[a("AddCategory"),a("v-simple-table",{staticClass:"mt-5 blue-grey lighten-4"},[a("thead",{staticClass:"blue-grey lighten-2"},[a("tr",[a("td",[t._v("#")]),a("td",[t._v("Kategória név")]),a("td",[t._v("Műveletek")])])]),a("tbody",t._l(t.categories,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.id))]),a("td",[t._v(t._s(e.name))]),a("td",[a("EditCategory",{attrs:{category:e}}),a("v-btn",{attrs:{icon:"",color:"red"},on:{click:function(a){return t.deleteCategory(e.id)}}},[a("v-icon",[t._v("mdi-delete-outline")])],1)],1)])})),0)])],1)},_=[],C=(a("99af"),a("4de4"),a("bc3a")),y=a.n(C),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"480"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[a("v-btn",t._g(t._b({attrs:{rounded:"",dense:"",color:"success"}},"v-btn",o,!1),n),[t._v(" Kategória hozzáadása "),a("v-icon",[t._v(" mdi-plus")])],1)]}},{key:"default",fn:function(e){return[a("v-card",[a("v-card-title",{staticClass:"text-center"},[t._v(" Kategória hozzáadás ")]),a("v-card-text",[a("v-form",{staticClass:"col-12"},[a("v-text-field",{attrs:{solo:"",dense:"",required:"",label:"Név"},model:{value:t.categoryName,callback:function(e){t.categoryName=e},expression:"categoryName"}})],1)],1),a("v-card-actions",[a("v-btn",{attrs:{width:"33%",color:"success",rounded:""},on:{click:function(e){return t.submitForm()}}},[t._v("Hozzáadás")]),a("v-spacer"),a("v-btn",{attrs:{width:"33%",color:"primary",rounded:""},on:{click:function(t){e.value=!1}}},[t._v("Vissza")])],1)],1)]}}])})},V=[],k={data:function(){return{categoryName:""}},methods:{submitForm:function(){y.a.post("".concat("localhost:8000","/category"),{name:this.categoryName}).then((function(t){200==t.status&&window.location.reload()}))}}},w=k,z=a("8336"),P=a("b0af"),N=a("99d9"),T=a("169a"),O=a("4bd4"),j=a("132d"),F=a("2fa4"),S=a("8654"),E=Object(s["a"])(w,x,V,!1,null,null,null),$=E.exports;i()(E,{VBtn:z["a"],VCard:P["a"],VCardActions:N["a"],VCardText:N["b"],VCardTitle:N["c"],VDialog:T["a"],VForm:O["a"],VIcon:j["a"],VSpacer:F["a"],VTextField:S["a"]});var q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"480"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:"",color:"blue"}},"v-btn",o,!1),n),[a("v-icon",[t._v("mdi-pencil-outline")])],1)]}},{key:"default",fn:function(e){return[a("v-card",[a("v-card-title",{staticClass:"text-center"},[t._v(" Kategória szerkesztése ")]),a("v-card-text",[a("v-form",{staticClass:"col-12"},[a("v-text-field",{attrs:{outlined:"",dense:"",required:"",label:"Név"},model:{value:t.category.name,callback:function(e){t.$set(t.category,"name",e)},expression:"category.name"}})],1)],1),a("v-card-actions",[a("v-btn",{attrs:{width:"33%",color:"success",rounded:""},on:{click:function(e){return t.submitForm()}}},[t._v("Módosítás")]),a("v-spacer"),a("v-btn",{attrs:{width:"33%",color:"primary",rounded:""},on:{click:function(t){e.value=!1}}},[t._v("Vissza")])],1)],1)]}}])})},A=[],K=(a("b0c0"),{props:["category"],data:function(){return{nextCategory:"",loadedCategory:this.category}},methods:{submitForm:function(){y.a.put("".concat("localhost:8000","/person/").concat(this.loadedCategory.id),{name:this.loadedCategory.name}).then((function(t){200==t.status&&window.location.reload()}))}}}),M=K,B=Object(s["a"])(M,q,A,!1,null,null,null),I=B.exports;i()(B,{VBtn:z["a"],VCard:P["a"],VCardActions:N["a"],VCardText:N["b"],VCardTitle:N["c"],VDialog:T["a"],VForm:O["a"],VIcon:j["a"],VSpacer:F["a"],VTextField:S["a"]});var D={components:{AddCategory:$,EditCategory:I},data:function(){return{categories:[{id:"0",name:"elsőkat"},{id:"1",name:"másodkat"}]}},created:function(){var t=this;y.a.get("".concat("localhost:8000","/category")).then((function(e){return t.categories=e.data})).catch((function(t){return alert(t)}))},methods:{deleteCategory:function(t){var e=this;y.a.delete("".concat("localhost:8000","/category/").concat(t)).then((function(a){200==a.status&&(e.categories=e.categories.filter((function(e){return e.id!=t})))})).catch((function(t){return alert(t)}))}}},H=D,J=a("1f4f"),R=Object(s["a"])(H,g,_,!1,null,null,null),G=R.exports;i()(R,{VBtn:z["a"],VContainer:d["a"],VIcon:j["a"],VSimpleTable:J["a"]});var L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"col-12 mx-auto text-center pa-0 pt-5",attrs:{fluid:""}},[a("AddPerson"),t.persons.length>0?a("v-simple-table",{staticClass:"blue-grey lighten-4 mt-5",attrs:{dense:""}},[a("thead",{staticClass:"blue-grey lighten-2"},[a("tr",[a("td",{staticClass:"identifier"},[t._v("#")]),a("td",{staticClass:"name"},[t._v("Név")]),a("td",{staticClass:"email"},[t._v("Email")]),a("td",{staticClass:"phone"},[t._v("Telefonszám")]),a("td",{staticClass:"categories"},[t._v("Kategória")]),a("td",{staticClass:"date"},[t._v("Dátum")]),a("td",{staticClass:"actions"},[t._v("Műveletek")])])]),a("tbody",t._l(t.persons,(function(e){return a("tr",{key:e.id},[a("td",{staticClass:"identifier"},[t._v(t._s(e.id))]),a("td",{staticClass:"name"},[t._v(t._s(e.name))]),a("td",{staticClass:"email"},[t._v(t._s(e.email))]),a("td",{staticClass:"phone"},[t._v(t._s(e.phoneNumber))]),a("td",{staticClass:"categories"},t._l(e.categories,(function(e){return a("span",{key:e},[t._v(" "+t._s(e)+" ")])})),0),a("td",{staticClass:"date"},[t._v(t._s(e.date))]),a("td",{staticClass:"actions"},[a("EditPerson",{attrs:{person:e}}),a("v-btn",{attrs:{icon:"",color:"red"},on:{click:function(a){return t.deletePerson(e.id)}}},[a("v-icon",[t._v("mdi-delete-outline")])],1)],1)])})),0)]):t._e(),0==t.persons.length?a("v-container",{staticClass:"text-h6 pa-15",attrs:{fluid:""}},[t._v(" A címzettek listája üres. ")]):t._e()],1)},Q=[],U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"480"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[a("v-btn",t._g(t._b({attrs:{rounded:"",dense:"",color:"success"}},"v-btn",o,!1),n),[t._v(" Címzett hozzáadása "),a("v-icon",[t._v(" mdi-plus")])],1)]}},{key:"default",fn:function(e){return[a("v-card",[a("v-card-title",{staticClass:"text-center"},[t._v(" Címzett hozzáadás ")]),a("v-card-text",[a("v-form",{staticClass:"col-12"},[a("v-text-field",{attrs:{outlined:"",dense:"",required:"",label:"Név"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-text-field",{attrs:{outlined:"",dense:"",required:"",label:"Email cím"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{outlined:"",dense:"",required:"",label:"Telefonszám"},model:{value:t.phoneNumber,callback:function(e){t.phoneNumber=e},expression:"phoneNumber"}}),a("v-row",[a("v-col",[a("v-text-field",{attrs:{outlined:"",dense:"",required:"",label:"Kategória hozzáadás"},model:{value:t.nextCategory,callback:function(e){t.nextCategory=e},expression:"nextCategory"}})],1),a("v-col",[a("v-btn",{attrs:{icon:"",color:"blue"},on:{click:function(e){return t.addCategory()}}},[a("v-icon",[t._v("mdi-plus")])],1)],1)],1),t._l(t.categories,(function(e){return a("span",{key:e,staticClass:"categoryblock"},[t._v(" "+t._s(e)+" "),a("v-btn",{attrs:{icon:""},on:{click:function(a){return t.deleteCategory(e)}}},[a("v-icon",[t._v("mdi-delete-outline")])],1)],1)}))],2)],1),a("v-card-actions",[a("v-btn",{attrs:{width:"33%",color:"success",rounded:""},on:{click:function(e){return t.submitForm()}}},[t._v("Hozzáadás")]),a("v-spacer"),a("v-btn",{attrs:{width:"33%",color:"primary",rounded:""},on:{click:function(t){e.value=!1}}},[t._v("Vissza")])],1)],1)]}}])})},W=[],X={data:function(){return{name:"",email:"",phoneNumber:"",categories:[],nextCategory:""}},methods:{submitForm:function(){y.a.post("".concat("localhost:8000","/person"),{name:this.name,email:this.email,phoneNumber:this.phoneNumber,categories:this.categories}).then((function(t){200==t.status&&window.location.reload()}))},addCategory:function(){this.categories.push(this.nextCategory),this.nextCategory=""},deleteCategory:function(t){this.categories=this.categories.filter((function(e){return e!=t}))}}},Y=X,Z=(a("db3c"),a("62ad")),tt=a("0fd9"),et=Object(s["a"])(Y,U,W,!1,null,"6257188a",null),at=et.exports;i()(et,{VBtn:z["a"],VCard:P["a"],VCardActions:N["a"],VCardText:N["b"],VCardTitle:N["c"],VCol:Z["a"],VDialog:T["a"],VForm:O["a"],VIcon:j["a"],VRow:tt["a"],VSpacer:F["a"],VTextField:S["a"]});var nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"480"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:"",color:"blue"}},"v-btn",o,!1),n),[a("v-icon",[t._v("mdi-pencil-outline")])],1)]}},{key:"default",fn:function(e){return[a("v-card",[a("v-card-title",{staticClass:"text-center"},[t._v(" Címzett szerkesztés ")]),a("v-card-text",[a("v-form",{staticClass:"col-12"},[a("v-text-field",{attrs:{outlined:"",dense:"",required:"",label:"Név"},model:{value:t.loadedPerson.name,callback:function(e){t.$set(t.loadedPerson,"name",e)},expression:"loadedPerson.name"}}),a("v-text-field",{attrs:{outlined:"",dense:"",required:"",label:"Email cím"},model:{value:t.loadedPerson.email,callback:function(e){t.$set(t.loadedPerson,"email",e)},expression:"loadedPerson.email"}}),a("v-text-field",{attrs:{outlined:"",dense:"",required:"",label:"Telefonszám"},model:{value:t.loadedPerson.phoneNumber,callback:function(e){t.$set(t.loadedPerson,"phoneNumber",e)},expression:"loadedPerson.phoneNumber"}}),a("v-row",[a("v-col",[a("v-text-field",{attrs:{outlined:"",dense:"",required:"",label:"Kategória hozzáadás"},model:{value:t.nextCategory,callback:function(e){t.nextCategory=e},expression:"nextCategory"}})],1),a("v-col",[a("v-btn",{attrs:{icon:"",color:"blue"},on:{click:function(e){return t.addCategory()}}},[a("v-icon",[t._v("mdi-plus")])],1)],1)],1),t._l(t.loadedPerson.categories,(function(e){return a("span",{key:e,staticClass:"categoryblock"},[t._v(" "+t._s(e)+" "),a("v-btn",{attrs:{icon:""},on:{click:function(a){return t.deleteCategory(e)}}},[a("v-icon",[t._v("mdi-delete-outline")])],1)],1)}))],2)],1),a("v-card-actions",[a("v-btn",{attrs:{width:"33%",color:"success",rounded:""},on:{click:function(e){return t.submitForm()}}},[t._v("Hozzáadás")]),a("v-spacer"),a("v-btn",{attrs:{width:"33%",color:"primary",rounded:""},on:{click:function(t){e.value=!1}}},[t._v("Vissza")])],1)],1)]}}])})},ot=[],rt={props:["person"],data:function(){return{nextCategory:"",loadedPerson:this.person}},methods:{submitForm:function(){y.a.put("".concat("localhost:8000","/person/").concat(this.loadedPerson.id),{name:this.loadedPerson.name,email:this.loadedPerson.email,phoneNumber:this.loadedPerson.phoneNumber,categories:this.loadedPerson.categories}).then((function(t){200==t.status&&window.location.reload()}))},addCategory:function(){this.loadedPerson.categories.push(this.nextCategory),this.nextCategory=""},deleteCategory:function(t){this.loadedPerson.categories=this.loadedPerson.categories.filter((function(e){return e!=t}))}}},st=rt,ct=(a("1877"),Object(s["a"])(st,nt,ot,!1,null,"58db4711",null)),it=ct.exports;i()(ct,{VBtn:z["a"],VCard:P["a"],VCardActions:N["a"],VCardText:N["b"],VCardTitle:N["c"],VCol:Z["a"],VDialog:T["a"],VForm:O["a"],VIcon:j["a"],VRow:tt["a"],VSpacer:F["a"],VTextField:S["a"]});var lt={components:{AddPerson:at,EditPerson:it},data:function(){return{persons:[{id:0,name:"elsőkat",email:"asf",phoneNumber:"asdf",categories:["láma","birka"],date:"2021-08-28"},{id:1,name:"másodkat",email:"asf",phoneNumber:"asdf",categories:["tyúk","liba"],date:"2021-08-27"}]}},created:function(){var t=this;y.a.get("".concat("localhost:8000","/person")).then((function(e){return t.persons=e.data})).catch((function(t){return alert(t)}))},methods:{deletePerson:function(t){var e=this;y.a.delete("".concat("localhost:8000","/person/").concat(t)).then((function(a){200==a.status&&(e.persons=e.persons.filter((function(e){return e.id!=t})))})).catch((function(t){return alert(t)}))}}},dt=lt,ut=(a("909f"),Object(s["a"])(dt,L,Q,!1,null,"d32de2cc",null)),vt=ut.exports;i()(ut,{VBtn:z["a"],VContainer:d["a"],VIcon:j["a"],VSimpleTable:J["a"]}),n["a"].use(b["a"]);var ft=[{path:"/",name:"Categories",component:G},{path:"/persons",name:"Persons",component:vt}],mt=new b["a"]({routes:ft}),pt=mt;n["a"].config.productionTip=!1,new n["a"]({vuetify:h,router:pt,render:function(t){return t(m)}}).$mount("#app")},"6cde":function(t,e,a){},"741c":function(t,e,a){},"85ec":function(t,e,a){},"909f":function(t,e,a){"use strict";a("6cde")},c1f2:function(t,e,a){},db3c:function(t,e,a){"use strict";a("c1f2")}});
//# sourceMappingURL=app.9a36a5c8.js.map