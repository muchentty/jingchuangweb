(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-activity-participation-activity-participation"],{"1b34":function(i,t,a){"use strict";a.r(t);var e=a("e6ad"),n=a.n(e);for(var c in e)"default"!==c&&function(i){a.d(t,i,(function(){return e[i]}))}(c);t["default"]=n.a},"23d7":function(i,t,a){var e=a("4c1b");"string"===typeof e&&(e=[[i.i,e,""]]),e.locals&&(i.exports=e.locals);var n=a("4f06").default;n("a174f070",e,!0,{sourceMap:!1,shadowMode:!1})},"4c1b":function(i,t,a){var e=a("24fb");t=e(!1),t.push([i.i,".top[data-v-ec8fb5aa]{display:flex;justify-content:space-between;margin:%?20?% %?26?% %?20?% %?30?%;border-bottom:%?1?% solid hsla(0,0%,78.4%,.75);border-top:%?1?% solid hsla(0,0%,78.4%,.75);padding:10px 5px}.district[data-v-ec8fb5aa]{display:flex}.top_img[data-v-ec8fb5aa]{width:%?20?%;height:%?16?%;margin-left:%?10?%}.top_img uni-image[data-v-ec8fb5aa]{width:100%;height:100%}.activity-participation-solid[data-v-ec8fb5aa]{width:%?690?%;border:%?1?% solid hsla(0,0%,78.4%,.5);margin:%?30?% %?0?%}.activity-participation-content[data-v-ec8fb5aa]{padding:%?0?% %?30?%}.activity-participation-content-item[data-v-ec8fb5aa]{display:flex;border-bottom:%?1?% solid hsla(0,0%,78.4%,.75)}.activity-participation-img uni-image[data-v-ec8fb5aa]{width:%?280?%;height:%?190?%;border-radius:%?10?%}.activity-participation-txt[data-v-ec8fb5aa]{margin-left:%?26?%}.activity-participation-txt1[data-v-ec8fb5aa]{height:%?27?%;font-size:%?28?%;font-family:Adobe Heiti Std;font-weight:400;color:#333;line-height:%?36?%}.activity-participation-txt2[data-v-ec8fb5aa]{font-size:%?22?%;font-family:Adobe Heiti Std;font-weight:400;color:#333}.activity-participation-txt3[data-v-ec8fb5aa]{font-size:%?22?%;font-family:Adobe Heiti Std;font-weight:400;color:#333}",""]),i.exports=t},"5cfc":function(i,t,a){"use strict";var e=a("23d7"),n=a.n(e);n.a},e6ad:function(i,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{quyu:"",area:"1",activity:[]}},methods:{activitydetails:function(i){uni.navigateTo({url:"../activity-details/activity-details?id="+i.id+"&area="+this.area})},hierarchy:function(){uni.navigateTo({url:"../hierarchy/hierarchy"})}},onShow:function(){this.quyu=this.$lang.quyu[uni.getStorageSync("lang")]},onLoad:function(i){var t=this;this.quyu=this.$lang.quyu[uni.getStorageSync("lang")],"undefined"==i.area||void 0==i.area||""==i.area||null==i.area?uni.getStorageSync("area")&&(this.area=uni.getStorageSync("area")):(this.area=i.area,uni.setStorageSync("area",i.area)),this.$request("/api/activity/get_list",{area:this.area},"post",{}).then((function(i){1===i.code&&(t.activity=i.data)}))}};t.default=e},e967:function(i,t,a){"use strict";a.r(t);var e=a("f11b"),n=a("1b34");for(var c in n)"default"!==c&&function(i){a.d(t,i,(function(){return n[i]}))}(c);a("5cfc");var s,o=a("f0c5"),r=Object(o["a"])(n["default"],e["b"],e["c"],!1,null,"ec8fb5aa",null,!1,e["a"],s);t["default"]=r.exports},f11b:function(i,t,a){"use strict";var e;a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return e}));var n=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",{staticClass:"activity-participation"},[e("v-uni-view",{staticClass:"top"},[e("v-uni-view",{staticClass:"district",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.hierarchy.apply(void 0,arguments)}}},[e("v-uni-view",[i._v(i._s(i.quyu))]),e("v-uni-view",{staticClass:"top_img"},[e("v-uni-image",{attrs:{src:a("fee7")}})],1)],1),e("v-uni-view",{staticClass:"district"},[e("v-uni-view"),e("v-uni-view",{staticClass:"top_img"})],1),e("v-uni-view",{staticClass:"district"},[e("v-uni-view"),e("v-uni-view",{staticClass:"top_img"})],1),e("v-uni-view",{staticClass:"district"},[e("v-uni-view"),e("v-uni-view",{staticClass:"top_img"})],1)],1),i._l(i.activity.lists,(function(t){return e("v-uni-view",{staticClass:"activity-participation-content"},[e("v-uni-view",{staticClass:"activity-participation-content-item",on:{click:function(a){arguments[0]=a=i.$handleEvent(a),i.activitydetails(t)}}},[e("v-uni-view",{staticClass:"activity-participation-img"},[e("v-uni-image",{attrs:{src:t.cover,mode:""}})],1),e("v-uni-view",{staticClass:"activity-participation-txt"},[e("v-uni-text",{staticClass:"activity-participation-txt1"},[i._v(i._s(t.title))]),e("br"),e("v-uni-text",{staticClass:"activity-participation-txt2"},[i._v(i._s(t.address))]),e("br"),e("v-uni-text",{staticClass:"activity-participation-txt3"},[i._v(i._s(t.start_time)+"--"+i._s(t.end_time))])],1)],1)],1)}))],2)},c=[]},fee7:function(i,t){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAASCAYAAACq26WdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkZBMDgzMzY0NThCQjExRUNBQURBQ0ZCMUNDMkYwQjNFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkZBMDgzMzY1NThCQjExRUNBQURBQ0ZCMUNDMkYwQjNFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkEwODMzNjI1OEJCMTFFQ0FBREFDRkIxQ0MyRjBCM0UiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RkEwODMzNjM1OEJCMTFFQ0FBREFDRkIxQ0MyRjBCM0UiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4e+i4VAAABEElEQVR42rSVSwsBURiGD8k/slb8CHuX2VEkWbmUjbK2wNbKLPwBWRCSrSxsiFJySaJs8H6cKU2cOZjz1jNTszjPuXzzHYemaV7GmJ89c2X2x8nfLRceaeDjH24KZA6Oh2Rr4Gbqs6IlZsFIsagPMiSbgRSZFYlo/ARYGofXBnkFoitfyOC1UihVoNssq4CGuSyNWSTBxCZRh6+KvZNR5iAMTn+KFiAEjiIZpWee0Q+hgph++rvNKYPmH+eki1rJu8T4tn4Tquq4Vd8S7bts9iAKzr/IHs0TRCRlJBrLdGRRahxRiqAu2/6tUgBDwepL39w1Vpnzq8h8HgeQAxs7ZUalBcAOXMAWBEFXdoC7AAMACZ04qdR6/+YAAAAASUVORK5CYII="}}]);