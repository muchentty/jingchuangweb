(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-head-user-head"],{"505e":function(a,e,t){"use strict";t.r(e);var n=t("e0ce"),u=t.n(n);for(var i in n)"default"!==i&&function(a){t.d(e,a,(function(){return n[a]}))}(i);e["default"]=u.a},"583f":function(a,e,t){"use strict";var n=t("bcda"),u=t.n(n);u.a},8175:function(a,e,t){"use strict";t.r(e);var n=t("b4cc"),u=t("505e");for(var i in u)"default"!==i&&function(a){t.d(e,a,(function(){return u[a]}))}(i);t("583f");var r,o=t("f0c5"),c=Object(o["a"])(u["default"],n["b"],n["c"],!1,null,"3e18af76",null,!1,n["a"],r);e["default"]=c.exports},9740:function(a,e,t){var n=t("24fb");e=n(!1),e.push([a.i,".user-head[data-v-3e18af76]{height:100%}.user-head-img uni-image[data-v-3e18af76]{width:%?750?%;height:%?750?%;position:absolute;top:%?404?%;border:%?1?% solid red}.hiddenInput[data-v-3e18af76]{border:%?1?% solid #ff0;height:%?1600?%}.btn[data-v-3e18af76]{position:fixed;background-color:#63b4d2;width:100%;height:%?84?%;line-height:%?84?%;text-align:center;color:#ededed;bottom:%?200?%;font-size:%?30?%}",""]),a.exports=e},b4cc:function(a,e,t){"use strict";var n;t.d(e,"b",(function(){return u})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return n}));var u=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-uni-view",{staticClass:"user-head"},[t("v-uni-view",{staticClass:"user-head-img"},[t("v-uni-image",{attrs:{src:a.upload_avatar},on:{click:function(e){arguments[0]=e=a.$handleEvent(e),a.upload.apply(void 0,arguments)}}})],1),t("v-uni-view",[t("v-uni-button",{staticClass:"btn",on:{click:function(e){arguments[0]=e=a.$handleEvent(e),a.submit.apply(void 0,arguments)}}},[a._v(a._s(a.querenshangchuan))])],1)],1)},i=[]},bcda:function(a,e,t){var n=t("9740");"string"===typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);var u=t("4f06").default;u("12dd8221",n,!0,{sourceMap:!1,shadowMode:!1})},e0ce:function(a,e,t){"use strict";var n=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=n(t("4749")),i={data:function(){return{querenshangchuan:"",upload_avatar:""}},methods:{upload:function(){var a=uni.getStorageSync("wtoken"),e=this;uni.chooseImage({count:1,success:function(t){var n=t.tempFilePaths;uni.uploadFile({url:u.default.baseUrl+"/api/member/avatar",filePath:n[0],name:"upload_avatar",header:{token:a},formData:{file:n[0]},success:function(a){var t=JSON.parse(a.data);1==t.code&&(e.upload_avatar=t.data.data.url)}})}})}}};e.default=i}}]);