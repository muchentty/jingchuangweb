(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-works-list-works-list"],{"1da7":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{page:"",pagesize:"",words_list:[],area_name:"",pics:[]}},methods:{hierarchy:function(){uni.navigateTo({url:"../hierarchy/hierarchy"})}},onLoad:function(t){var n=this;this.$request("/api/member/get_words_list",{page:"1",pagesize:"10"},"post",{},!0).then((function(t){1==t.code&&(n.words_list=t.data.lists)}))}};n.default=i},"65b7":function(t,n,a){"use strict";var i;a.d(n,"b",(function(){return e})),a.d(n,"c",(function(){return s})),a.d(n,"a",(function(){return i}));var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"works-list"},[0!=t.words_list.length?a("v-uni-view",{staticClass:"works-list-content"},t._l(t.words_list,(function(n,i){return a("v-uni-view",{staticClass:"list-content-item"},[a("v-uni-view",{staticClass:"content-item-title"},[t._v(t._s(n.race_title))]),a("v-uni-view",{staticClass:"content-item-summary"},[t._v(t._s(n.create_time))]),a("v-uni-view",{staticClass:"content-item-area_name"},[t._v(t._s(n.area_name))]),t._l(n.pics,(function(t){return a("v-uni-view",{staticClass:"content-item-img"},[a("v-uni-image",{attrs:{src:t,mode:"widthFix"}})],1)})),a("v-uni-view",{staticClass:"content-item-time"},[t._v(t._s(n.content))]),a("v-uni-view",{staticClass:"line"},[t._v("X")])],2)})),1):t._e()],1)},s=[]},"71e5":function(t,n,a){var i=a("f871");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=a("4f06").default;e("7646a72c",i,!0,{sourceMap:!1,shadowMode:!1})},ba669:function(t,n,a){"use strict";a.r(n);var i=a("65b7"),e=a("fbb2");for(var s in e)"default"!==s&&function(t){a.d(n,t,(function(){return e[t]}))}(s);a("e75b");var r,o=a("f0c5"),c=Object(o["a"])(e["default"],i["b"],i["c"],!1,null,"a800f71a",null,!1,i["a"],r);n["default"]=c.exports},e75b:function(t,n,a){"use strict";var i=a("71e5"),e=a.n(i);e.a},f871:function(t,n,a){var i=a("24fb");n=i(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* .content-item-img image{\n\twidth: 750rpx;\n\theight: 350rpx;\n} */.works-list-content[data-v-a800f71a]{width:100%;height:%?300?%;padding:%?0?% %?30?%}.list-content-item[data-v-a800f71a]{width:100%;margin-top:%?20?%}.content-item-title[data-v-a800f71a]{color:#101010;font-size:%?36?%;font-family:PingFangSC-regular}.content-item-summary[data-v-a800f71a]{color:#101010;font-size:%?28?%;font-family:PingFangSC-regular;margin-top:%?20?%}.line[data-v-a800f71a]{margin-top:%?20?%;text-align:right;padding:%?30?% %?0?%;color:hsla(0,0%,78.4%,.75);border-bottom:%?1?% solid hsla(0,0%,78.4%,.75)}.top[data-v-a800f71a]{display:flex;justify-content:space-between;padding:%?20?% %?26?% %?20?% %?30?%;border-top:%?1?% solid hsla(0,0%,78.4%,.75);border-bottom:%?1?% solid hsla(0,0%,78.4%,.75)}.district[data-v-a800f71a]{display:flex}.top_img[data-v-a800f71a]{width:%?20?%;height:%?16?%;margin-left:%?10?%}.top_img uni-image[data-v-a800f71a]{width:100%;height:100%}",""]),t.exports=n},fbb2:function(t,n,a){"use strict";a.r(n);var i=a("1da7"),e=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(n,t,(function(){return i[t]}))}(s);n["default"]=e.a}}]);