(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-Announcement-list-details-Announcement-list-details"],{1538:function(t,e,i){var n=i("1ea2");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("4b1bb882",n,!0,{sourceMap:!1,shadowMode:!1})},"1b0c":function(t,e,i){"use strict";i.r(e);var n=i("981f"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"1ea2":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".list-details-content[data-v-877577b8]{padding:%?15?% %?30?%;width:100%;height:100%}.details-content-title[data-v-877577b8]{color:#101010;font-size:%?36?%;font-family:PingFangSC-regular;margin-bottom:%?20?%}.details-content-time[data-v-877577b8]{margin-bottom:%?6?%;color:#666;font-size:%?28?%;font-family:PingFangSC-regular}.details-content-summary[data-v-877577b8]{margin-bottom:%?20?%;color:#666;font-size:%?28?%;font-family:PingFangSC-regular}.details-content-main[data-v-877577b8]{color:#101010;font-size:%?28?%;font-family:PingFangSC-regular}",""]),t.exports=e},"49e0":function(t,e,i){"use strict";var n=i("1538"),a=i.n(n);a.a},"4fc2":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"Announcement-list-details"},[i("v-uni-view",{staticClass:"list-details-content"},[i("v-uni-view",{staticClass:"details-content-title"},[t._v(t._s(t.noticedetails.title))]),i("v-uni-view",{staticClass:"details-content-time"},[t._v(t._s(t.noticedetails.create_time))]),i("v-uni-view",{staticClass:"details-content-summary"},[t._v(t._s(t.noticedetails.summary))]),i("v-uni-view",{staticClass:"details-content-main",domProps:{innerHTML:t._s(t.content)}},[t._v(t._s(t.noticedetails.content))])],1)],1)},o=[]},9254:function(t,e,i){"use strict";i.r(e);var n=i("4fc2"),a=i("1b0c");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("49e0");var c,s=i("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"877577b8",null,!1,n["a"],c);e["default"]=r.exports},"981f":function(t,e,i){"use strict";i("ac1f"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{noticedetails:[],id:"",title:"",content:""}},methods:{formatRichText:function(t){var e=t.replace(/<img[^>]*>/gi,(function(t,e){return t=t.replace(/style="[^"]+"/gi,"").replace(/style='[^']+'/gi,""),t=t.replace(/width="[^"]+"/gi,"").replace(/width='[^']+'/gi,""),t=t.replace(/height="[^"]+"/gi,"").replace(/height='[^']+'/gi,""),t}));return e=e.replace(/style="[^"]+"/gi,(function(t,e){return t=t.replace(/width:[^;]+;/gi,"max-width:100%;").replace(/width:[^;]+;/gi,"max-width:100%;"),t})),e=e.replace(/<br[^>]*\/>/gi,""),e=e.replace(/\<img/gi,'<img style="max-width:100%;height:auto;display:inline-block;margin:10rpx auto;"'),e}},onLoad:function(t){var e=this,i=t.id;this.$request("/api/common/notice",{id:i},"post",{}).then((function(t){1==t.code&&(e.noticedetails=t.data.notice,e.content=e.formatRichText(e.noticedetails.content))}))}};e.default=n}}]);