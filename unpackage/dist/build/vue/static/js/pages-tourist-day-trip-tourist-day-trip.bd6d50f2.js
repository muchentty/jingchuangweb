(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tourist-day-trip-tourist-day-trip"],{1031:function(t,i,a){var n=a("24fb");i=n(!1),i.push([t.i,".day-trip-top uni-image[data-v-4f01b615]{width:100%;height:%?354?%}.trip-content-dipaly[data-v-4f01b615]{display:flex;text-align:center}.trip-content-title[data-v-4f01b615]{margin-top:%?26?%;margin-bottom:%?12?%;color:#101010;font-size:%?32?%;font-family:PingFangSC-regular}.day-trip-content[data-v-4f01b615]{padding:%?0?% %?30?%}.trip-content-item[data-v-4f01b615]{margin-right:%?20?%}.trip-content-item uni-text[data-v-4f01b615]{color:#333;font-size:%?28?%;font-family:PingFangSC-regular}.trip-content-item-img uni-image[data-v-4f01b615]{width:%?200?%;height:%?132?%;border-radius:%?14?%;margin-bottom:%?10?%}.day-trip-details[data-v-4f01b615]{padding:%?28?% %?30?% %?0?% %?30?%}.trip-details-title[data-v-4f01b615]{text-align:center;width:%?534?%;height:%?52?%;background-color:#e6fff8;color:#31bc93;font-size:%?36?%;font-family:PingFangSC-regular;margin:%?0?% %?78?% %?44?% %?78?%}.details-item-small[data-v-4f01b615]{text-align:center;margin-bottom:%?24?%}.details-item-smalltxt[data-v-4f01b615]{text-indent:%?40?%;color:#666;font-size:%?28?%;font-family:PingFangSC-regular}.trip-details-item[data-v-4f01b615]{margin-bottom:%?25?%}",""]),t.exports=i},"3a89":function(t,i,a){"use strict";a.r(i);var n=a("7d5a"),e=a("ce89");for(var r in e)"default"!==r&&function(t){a.d(i,t,(function(){return e[t]}))}(r);a("6c6b");var o,s=a("f0c5"),l=Object(s["a"])(e["default"],n["b"],n["c"],!1,null,"4f01b615",null,!1,n["a"],o);i["default"]=l.exports},"6c6b":function(t,i,a){"use strict";var n=a("9dbe"),e=a.n(n);e.a},"7d5a":function(t,i,a){"use strict";var n;a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return r})),a.d(i,"a",(function(){return n}));var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"tourist-day-trip"},[a("v-uni-view",{staticClass:"day-trip-top"},[a("v-uni-image",{attrs:{src:t.travel.travel.cover}})],1),0!=t.travel.lists.length?a("v-uni-view",{staticClass:"day-trip-content"},[a("v-uni-view",{staticClass:"trip-content-title"},[t._v(t._s(t.jingguojingdian))]),a("v-uni-view",{staticClass:"trip-content-dipaly"},t._l(t.travel.lists,(function(i){return a("v-uni-view",{staticClass:"trip-content-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.touristAD(i)}}},[a("v-uni-view",{staticClass:"trip-content-item-img"},[a("v-uni-image",{attrs:{src:i.cover}})],1),a("v-uni-text",[t._v(t._s(i.name))])],1)})),1)],1):t._e(),a("v-uni-view",{staticClass:"day-trip-details"},[a("v-uni-view",{staticClass:"trip-details-title"},[t._v(t._s(t.travel.travel.title))]),a("v-uni-view",{staticClass:"trip-details-item"},[a("v-uni-view",{staticClass:"details-item-title",domProps:{innerHTML:t._s(t.travel.travel.content)}})],1)],1)],1)},r=[]},"9dbe":function(t,i,a){var n=a("1031");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=a("4f06").default;e("3f092057",n,!0,{sourceMap:!1,shadowMode:!1})},ab41:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{jingguojingdian:"",travel:[]}},methods:{touristAD:function(t){uni.navigateTo({url:"../tourist-attraction-details/tourist-attraction-details?id="+t.id})}},onShow:function(t){this.jingguojingdian=this.$lang.jingguojingdian[uni.getStorageSync("lang")]},onLoad:function(t){var i=this;this.jingguojingdian=this.$lang.jingguojingdian[uni.getStorageSync("lang")];var a=t.id;this.$request("/api/venue/view_travel",{id:a},"post",{}).then((function(t){1==t.code&&(i.travel=t.data,uni.setNavigationBarTitle({title:i.travel.travel.title}))}))}};i.default=n},ce89:function(t,i,a){"use strict";a.r(i);var n=a("ab41"),e=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(i,t,(function(){return n[t]}))}(r);i["default"]=e.a}}]);