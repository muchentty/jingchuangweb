(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-participation-Production-details-participation-Production-details"],{"0f99":function(t,i,a){var n=a("ec37");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("4f06").default;o("c1131b02",n,!0,{sourceMap:!1,shadowMode:!1})},"5dc0":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{shangchuanshijian:"",saishijieshao:"",lijitoupiao:"",classify:""}},methods:{},onShow:function(t){this.shangchuanshijian=this.$lang.shangchuanshijian[uni.getStorageSync("lang")],this.saishijieshao=this.$lang.saishijieshao[uni.getStorageSync("lang")],this.lijitoupiao=this.$lang.lijitoupiao[uni.getStorageSync("lang")]},onLoad:function(t){var i=this;this.shangchuanshijian=this.$lang.shangchuanshijian[uni.getStorageSync("lang")],this.saishijieshao=this.$lang.saishijieshao[uni.getStorageSync("lang")],this.lijitoupiao=this.$lang.lijitoupiao[uni.getStorageSync("lang")];var a=t.id;this.$request("/api/race/get_works_detail",{id:a},"post",{}).then((function(t){1==t.code&&(i.classify=t.data.works)}))}};i.default=n},"71f5":function(t,i,a){"use strict";a.r(i);var n=a("5dc0"),o=a.n(n);for(var e in n)"default"!==e&&function(t){a.d(i,t,(function(){return n[t]}))}(e);i["default"]=o.a},a6a3:function(t,i,a){"use strict";var n;a.d(i,"b",(function(){return o})),a.d(i,"c",(function(){return e})),a.d(i,"a",(function(){return n}));var o=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"participation-Production-details"},[a("v-uni-view",{staticClass:"Production-details-top"},[a("v-uni-image",{attrs:{src:t.classify.pics[0]}})],1),a("v-uni-view",{staticClass:"Production-details-content"},[a("v-uni-view",{staticClass:"details-content-item"},[a("v-uni-view",{staticClass:"content-item-time"},[t._v(t._s(t.shangchuanshijian)+"："+t._s(t.classify.create_time))]),a("v-uni-view",{staticClass:"content-item-introduction"},[t._v(t._s(t.saishijieshao)+"：")]),a("v-uni-view",{staticClass:"content-item-main"},[t._v(t._s(t.classify.content))])],1)],1),a("v-uni-view",{staticClass:"Production-details-button"},[a("v-uni-button",{attrs:{type:"default"}},[t._v(t._s(t.lijitoupiao))])],1)],1)},e=[]},d173:function(t,i,a){"use strict";a.r(i);var n=a("a6a3"),o=a("71f5");for(var e in o)"default"!==e&&function(t){a.d(i,t,(function(){return o[t]}))}(e);a("d57f");var s,c=a("f0c5"),r=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"7e2b596a",null,!1,n["a"],s);i["default"]=r.exports},d57f:function(t,i,a){"use strict";var n=a("0f99"),o=a.n(n);o.a},ec37:function(t,i,a){var n=a("24fb");i=n(!1),i.push([t.i,".Production-details-top uni-image[data-v-7e2b596a]{width:%?750?%;height:%?462?%}.Production-details-content[data-v-7e2b596a]{padding:%?26?% %?30?% %?0?% %?30?%}.content-item-txt1[data-v-7e2b596a]{color:#101010;font-size:%?36?%;font-family:PingFangSC-regular;margin-bottom:%?22?%}.content-item-time[data-v-7e2b596a]{color:#666;font-size:%?28?%;font-family:PingFangSC-regular;margin-bottom:%?30?%}.content-item-introduction[data-v-7e2b596a]{color:#101010;font-size:%?28?%;font-family:PingFangSC-regular;margin-bottom:%?18?%}.content-item-main[data-v-7e2b596a]{color:#999;font-size:%?28?%;font-family:PingFangSC-regular}.Production-details-button[data-v-7e2b596a]{width:100%;height:%?90?%;position:fixed;bottom:0;border-top:%?1?% solid hsla(0,0%,78.4%,.75)}.Production-details-button uni-button[data-v-7e2b596a]{text-align:center;height:%?90?%;line-height:%?90?%;width:%?238?%;margin-right:%?0?%;background-color:#63b4d2;color:#fff;font-size:%?28?%;font-family:Microsoft Yahei;border:%?1?% solid #ededed}",""]),t.exports=i}}]);