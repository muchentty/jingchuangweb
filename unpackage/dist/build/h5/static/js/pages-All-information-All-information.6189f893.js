(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-All-information-All-information"],{"029c":function(t){t.exports=JSON.parse('{"uni-pagination.prevText":"上一页","uni-pagination.nextText":"下一页"}')},"04f0":function(t){t.exports=JSON.parse('{"uni-pagination.prevText":"précédente","uni-pagination.nextText":"suivante"}')},1753:function(t,i,n){"use strict";n.r(i);var a=n("4e29"),e=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(i,t,(function(){return a[t]}))}(o);i["default"]=e.a},"1ab8":function(t,i,n){var a=n("ccab");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=n("4f06").default;e("7dcefe61",a,!0,{sourceMap:!1,shadowMode:!1})},"4e29":function(t,i,n){"use strict";var a=n("4ea4");n("4160"),n("159b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=a(n("ade3")),o=a(n("c73c")),u={components:{uniPagination:o.default},data:function(){var t;return t={title:"文章列表",postCount:"",pageSize:12,pageNum:0,lvyoujingdian:"",wenhuazhibo:"",yituanfengcai:"",wenhuazixun:"",minsujiudian:"",tesemeishi:"",lvyouluxian:"",changguanyuyue:"",wenhuaditu:"",huodongcanyu:"",saishicanyu:""},(0,e.default)(t,"huodongcanyu",""),(0,e.default)(t,"changguanyuyue",""),(0,e.default)(t,"yituanfengcai",""),(0,e.default)(t,"feiyichuancheng",""),(0,e.default)(t,"yishujianshang",""),(0,e.default)(t,"saishicanyu",""),(0,e.default)(t,"faxian",""),(0,e.default)(t,"gengduo",""),(0,e.default)(t,"gengduo",""),(0,e.default)(t,"daohang",""),(0,e.default)(t,"ziyuan",""),(0,e.default)(t,"gengduo",""),(0,e.default)(t,"gengduo",""),(0,e.default)(t,"gengduo",""),(0,e.default)(t,"gonggao",""),(0,e.default)(t,"zuixin",""),(0,e.default)(t,"cengji",""),(0,e.default)(t,"zhi",""),(0,e.default)(t,"icon",!0),(0,e.default)(t,"citys",[]),(0,e.default)(t,"classify",[]),(0,e.default)(t,"lists",[]),(0,e.default)(t,"article_data",[]),(0,e.default)(t,"artgroup",[]),(0,e.default)(t,"list",[]),(0,e.default)(t,"venue",[]),(0,e.default)(t,"cate",""),(0,e.default)(t,"area","1"),(0,e.default)(t,"cover",""),(0,e.default)(t,"activity",[]),(0,e.default)(t,"race",[]),(0,e.default)(t,"lastRecord",""),(0,e.default)(t,"swipers",[]),(0,e.default)(t,"music",""),(0,e.default)(t,"innerAudioContext",""),(0,e.default)(t,"icon_data",[]),(0,e.default)(t,"travel_list",[]),(0,e.default)(t,"live",[]),(0,e.default)(t,"lang",""),(0,e.default)(t,"zangyu",""),(0,e.default)(t,"hanyu",""),(0,e.default)(t,"wode",""),(0,e.default)(t,"shouye",""),(0,e.default)(t,"id",""),(0,e.default)(t,"name",""),(0,e.default)(t,"pagesize",[]),(0,e.default)(t,"classfiy",[]),(0,e.default)(t,"leixing",0),t},methods:{alldetails:function(t){uni.navigateTo({url:"../Information-details/Information-details?id="+t.id+"&name="+this.name})},getMoreListInfo:function(){var t=this;this.$request("/api/article/get_list",{cate:t.id,area:t.area,pagesize:t.pagesize[t.id],page:t.pageNum},"post",{}).then((function(i){1==i.code&&(t.list=i.data)}))},handlePage:function(t){this.pageNum=t.current,this.getMoreListInfo()},select:function(t){var i=this;this.leixing=t,this.$request("/api/article/get_list",{cate:t,area:this.area,pagesize:this.pagesize[t]},"post",{}).then((function(t){1==t.code&&(i.list=t.data)}))},tapscroll:function(){uni.pageScrollTo({scrollTop:0,duration:300})},change_lang:function(t){this.lang=t,uni.setStorageSync("lang",t),this.zangyu=this.$lang.zangyu[t],this.hanyu=this.$lang.hanyu[t],this.lvyoujingdian=this.$lang.lvyoujingdian[uni.getStorageSync("lang")],this.wenhuazhibo=this.$lang.wenhuazhibo[uni.getStorageSync("lang")],this.yituanfengcai=this.$lang.yituanfengcai[uni.getStorageSync("lang")],this.wenhuazixun=this.$lang.wenhuazixun[uni.getStorageSync("lang")],this.minsujiudian=this.$lang.minsujiudian[uni.getStorageSync("lang")],this.tesemeishi=this.$lang.tesemeishi[uni.getStorageSync("lang")],this.lvyouluxian=this.$lang.lvyouluxian[uni.getStorageSync("lang")],this.changguanyuyue=this.$lang.changguanyuyue[uni.getStorageSync("lang")],this.wenhuaditu=this.$lang.wenhuaditu[uni.getStorageSync("lang")],this.huodongcanyu=this.$lang.huodongcanyu[uni.getStorageSync("lang")],this.saishicanyu=this.$lang.saishicanyu[uni.getStorageSync("lang")],this.huodongcanyu=this.$lang.huodongcanyu[uni.getStorageSync("lang")],this.changguanyuyue=this.$lang.changguanyuyue[uni.getStorageSync("lang")],this.yituanfengcai=this.$lang.yituanfengcai[uni.getStorageSync("lang")],this.feiyichuancheng=this.$lang.feiyichuancheng[uni.getStorageSync("lang")],this.yishujianshang=this.$lang.yishujianshang[uni.getStorageSync("lang")],this.saishicanyu=this.$lang.saishicanyu[uni.getStorageSync("lang")],this.faxian=this.$lang.faxian[uni.getStorageSync("lang")],this.gengduo=this.$lang.gengduo[uni.getStorageSync("lang")],this.gengduo=this.$lang.gengduo[uni.getStorageSync("lang")],this.daohang=this.$lang.daohang[uni.getStorageSync("lang")],this.ziyuan=this.$lang.ziyuan[uni.getStorageSync("lang")],this.gengduo=this.$lang.gengduo[uni.getStorageSync("lang")],this.gengduo=this.$lang.gengduo[uni.getStorageSync("lang")],this.gengduo=this.$lang.gengduo[uni.getStorageSync("lang")],this.gonggao=this.$lang.gonggao[uni.getStorageSync("lang")],this.zuixin=this.$lang.zuixin[uni.getStorageSync("lang")],this.cengji=this.$lang.cengji[uni.getStorageSync("lang")],this.zhi=this.$lang.zhi[uni.getStorageSync("lang")],this.shouye=this.$lang.shouye[uni.getStorageSync("lang")],this.wode=this.$lang.wode[uni.getStorageSync("lang")]},changePlayState:function(){this.icon=!this.icon,1==this.audioPlay?(this.audioPlay=!1,this.innerAudioContext.play()):(this.audioPlay=!0,this.innerAudioContext.pause())},Announcementlist:function(){uni.navigateTo({url:"../Announcement-list/Announcement-list"})},consult:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;t==this.classify[0].id?uni.navigateTo({url:"../consult/consult?cId="+t}):t==this.classify[1].id?uni.navigateTo({url:"../appreciation/appreciation?cId="+t}):t==this.classify[2].id&&uni.navigateTo({url:"../inheritance/inheritance?cId="+t})},mien:function(){uni.navigateTo({url:"../mien/mien"})},venuereservation:function(){uni.navigateTo({url:"../venue-reservation/venue-reservation"})},activityparticipation:function(){uni.navigateTo({url:"../activity-participation/activity-participation"})},participation:function(){uni.navigateTo({url:"../participation/participation"})},map_search:function(){uni.navigateTo({url:"../map_search/map_search"})},redirect_live:function(){uni.navigateTo({url:"../enter-live/enter-live"})},touristattraction:function(){uni.navigateTo({url:"../tourist-attraction/tourist-attraction"})},touristroute:function(){uni.navigateTo({url:"../tourist-route/tourist-route"})},specialsfoods:function(){uni.navigateTo({url:"../specials-foods/specials-foods"})},hotel:function(){uni.navigateTo({url:"../hotel/hotel"})},Bookresources:function(){uni.navigateTo({url:"../book-resources/book-resources"})},groupdetails:function(t){uni.navigateTo({url:"../group-details/group-details?id="+t.id})},venuedetails:function(t){uni.navigateTo({url:"../venue-details/venue-details?id="+t.id})},activitydetails:function(t){uni.navigateTo({url:"../activity-details/activity-details?id="+t.id})},participationdetails:function(t){uni.navigateTo({url:"../participation-details/participation-details?id="+t.id})},touristAD:function(t){uni.navigateTo({url:"../tourist-attraction-details/tourist-attraction-details?id="+t.id})},artdetails:function(t){uni.navigateTo({url:"../contents/contents?id="+t.id})},live_detail:function(t){uni.navigateTo({url:"../live/live?id="+t.id})},get_article:function(t,i){var n=this;this.$request("/api/article/get_list",{cate:t,area:this.area},"post",{}).then((function(t){1==t.code&&n.$set(n.article_data,i,t.data.lists)}))},go_register:function(){uni.navigateTo({url:"../register/register"})},go_login:function(){uni.navigateTo({url:"../login/login"})}},onLoad:function(t){var i=this;this.id=t.id,this.name=t.name;var n=t.id;console.log(t.area),"undefined"==t.area||void 0==t.area||""==t.area||null==t.area?uni.getStorageSync("area")&&(this.area=uni.getStorageSync("area")):this.area=t.area;var a=this;this.$request("/api/article/get_cates",{pid:a.id},"post",{}).then((function(t){console.log(t),1==t.code&&(a.classfiy=t.data,console.log(a.classfiy),t.data.lists.forEach((function(t,i){a.pagesize[t.id]=t.pagesize})))})),this.$request("/api/article/get_all_cates",{pid:n},"post",{}).then((function(t){1==t.code&&(a.pagesize[n]=t.data.lists[1].pagesize,i.$request("/api/article/get_list",{cate:n,area:a.area,pagesize:a.pagesize[n]},"post",{}).then((function(t){1==t.code&&(a.list=t.data,a.postCount=t.data.total,console.log(a.list))})))})),this.lvyoujingdian=this.$lang.lvyoujingdian[uni.getStorageSync("lang")],this.wenhuazhibo=this.$lang.wenhuazhibo[uni.getStorageSync("lang")],this.yituanfengcai=this.$lang.yituanfengcai[uni.getStorageSync("lang")],this.wenhuazixun=this.$lang.wenhuazixun[uni.getStorageSync("lang")],this.minsujiudian=this.$lang.minsujiudian[uni.getStorageSync("lang")],this.tesemeishi=this.$lang.tesemeishi[uni.getStorageSync("lang")],this.lvyouluxian=this.$lang.lvyouluxian[uni.getStorageSync("lang")],this.changguanyuyue=this.$lang.changguanyuyue[uni.getStorageSync("lang")],this.wenhuaditu=this.$lang.wenhuaditu[uni.getStorageSync("lang")],this.huodongcanyu=this.$lang.huodongcanyu[uni.getStorageSync("lang")],this.saishicanyu=this.$lang.saishicanyu[uni.getStorageSync("lang")],this.huodongcanyu=this.$lang.huodongcanyu[uni.getStorageSync("lang")],this.changguanyuyue=this.$lang.changguanyuyue[uni.getStorageSync("lang")],this.yituanfengcai=this.$lang.yituanfengcai[uni.getStorageSync("lang")],this.feiyichuancheng=this.$lang.feiyichuancheng[uni.getStorageSync("lang")],this.yishujianshang=this.$lang.yishujianshang[uni.getStorageSync("lang")],this.saishicanyu=this.$lang.saishicanyu[uni.getStorageSync("lang")],this.faxian=this.$lang.faxian[uni.getStorageSync("lang")],this.gengduo=this.$lang.gengduo[uni.getStorageSync("lang")],this.gengduo=this.$lang.gengduo[uni.getStorageSync("lang")],this.daohang=this.$lang.daohang[uni.getStorageSync("lang")],this.ziyuan=this.$lang.ziyuan[uni.getStorageSync("lang")],this.gengduo=this.$lang.gengduo[uni.getStorageSync("lang")],this.gengduo=this.$lang.gengduo[uni.getStorageSync("lang")],this.gengduo=this.$lang.gengduo[uni.getStorageSync("lang")],this.gonggao=this.$lang.gonggao[uni.getStorageSync("lang")],this.zuixin=this.$lang.zuixin[uni.getStorageSync("lang")],this.cengji=this.$lang.cengji[uni.getStorageSync("lang")],this.zhi=this.$lang.zhi[uni.getStorageSync("lang")],this.shouye=this.$lang.shouye[uni.getStorageSync("lang")],this.wode=this.$lang.wode[uni.getStorageSync("lang")],this.zangyu=this.$lang.zangyu[uni.getStorageSync("lang")],this.hanyu=this.$lang.hanyu[uni.getStorageSync("lang")],this.lang=uni.getStorageSync("lang"),this.lang="zn"==this.lang?"zn":"cn",this.innerAudioContext=uni.createInnerAudioContext(),this.innerAudioContext.autoplay=!0,this.innerAudioContext.loop=!0,this.innerAudioContext.onPlay((function(){})),this.innerAudioContext.onPause((function(){}))},onShow:function(){var t=this;this.lvyoujingdian=this.$lang.lvyoujingdian[uni.getStorageSync("lang")],this.wenhuazhibo=this.$lang.wenhuazhibo[uni.getStorageSync("lang")],this.yituanfengcai=this.$lang.yituanfengcai[uni.getStorageSync("lang")],this.wenhuazixun=this.$lang.wenhuazixun[uni.getStorageSync("lang")],this.minsujiudian=this.$lang.minsujiudian[uni.getStorageSync("lang")],this.tesemeishi=this.$lang.tesemeishi[uni.getStorageSync("lang")],this.lvyouluxian=this.$lang.lvyouluxian[uni.getStorageSync("lang")],this.changguanyuyue=this.$lang.changguanyuyue[uni.getStorageSync("lang")],this.wenhuaditu=this.$lang.wenhuaditu[uni.getStorageSync("lang")],this.huodongcanyu=this.$lang.huodongcanyu[uni.getStorageSync("lang")],this.saishicanyu=this.$lang.saishicanyu[uni.getStorageSync("lang")],this.huodongcanyu=this.$lang.huodongcanyu[uni.getStorageSync("lang")],this.changguanyuyue=this.$lang.changguanyuyue[uni.getStorageSync("lang")],this.yituanfengcai=this.$lang.yituanfengcai[uni.getStorageSync("lang")],this.feiyichuancheng=this.$lang.feiyichuancheng[uni.getStorageSync("lang")],this.yishujianshang=this.$lang.yishujianshang[uni.getStorageSync("lang")],this.saishicanyu=this.$lang.saishicanyu[uni.getStorageSync("lang")],this.faxian=this.$lang.faxian[uni.getStorageSync("lang")],this.gengduo=this.$lang.gengduo[uni.getStorageSync("lang")],this.gengduo=this.$lang.gengduo[uni.getStorageSync("lang")],this.daohang=this.$lang.daohang[uni.getStorageSync("lang")],this.ziyuan=this.$lang.ziyuan[uni.getStorageSync("lang")],this.gengduo=this.$lang.gengduo[uni.getStorageSync("lang")],this.gengduo=this.$lang.gengduo[uni.getStorageSync("lang")],this.gengduo=this.$lang.gengduo[uni.getStorageSync("lang")],this.gonggao=this.$lang.gonggao[uni.getStorageSync("lang")],this.zuixin=this.$lang.zuixin[uni.getStorageSync("lang")],this.cengji=this.$lang.cengji[uni.getStorageSync("lang")],this.zhi=this.$lang.zhi[uni.getStorageSync("lang")],this.shouye=this.$lang.shouye[uni.getStorageSync("lang")],this.wode=this.$lang.wode[uni.getStorageSync("lang")];var i=this;uni.setTabBarItem({index:0,text:i.shouye}),uni.setTabBarItem({index:1,text:i.wode}),this.$request("/api/area",{id:this.area},"post",{}).then((function(t){1==t.code&&t.data.title_id&&uni.setNavigationBarTitle({title:t.data.title})})),this.$request("/api/common/banner",{area:this.area},"post",{}).then((function(n){1==n.code&&(n.data.banner.forEach((function(t,i){n.data.banner[i]=t.substring(0,t.length-7)+"@pcweb"})),t.swipers=n.data.banner,t.icon_data=n.data.icon_data,n.data.music&&(i.innerAudioContext.src=n.data.music))})),this.$request("/api/article/get_all_cates",{},"post",{}).then((function(i){1==i.code&&(t.classify=i.data.lists,t.classify.forEach((function(i,n){t.$request("/api/article/get_list",{cate:i.id,area:t.area,pagesize:t.pagesize[cId]},"post",{}).then((function(i){1==i.code&&(t.$set(t.article_data,n,i.data.lists),t.postCount=i.data.total)}))})))})),this.$request("/api/common/notices",{count:"",lists:[],area:this.area},"post",{}).then((function(i){1==i.code&&(t.lists=i.data.lists)})),this.$request("/api/artgroup/get_list",{area:this.area,cover:"",pagesize:"2"},"post",{}).then((function(i){1===i.code&&(t.artgroup=i.data)})),this.$request("/api/venue/get_list",{area:this.area,cate:1,pagesize:"2",page:"1",cover:this.cover},"post",{}).then((function(i){t.venue=i.data})),this.$request("/api/activity/get_list",{area:this.area},"post",{}).then((function(i){1===i.code&&(t.activity=i.data)})),this.$request("/api/race/get_list",{area:this.area,pagesize:1},"post",{}).then((function(i){1===i.code&&(t.race=i.data)})),this.$request("/api/venue/get_travel_list",{area:this.area,page:"1",pagesize:"1"},"post",{}).then((function(i){1==i.code&&(t.travel_list=i.data)})),this.$request("/api/live/get_list",{area:this.area},"post",{}).then((function(i){1==i.code&&(t.live=i.data)}))}};i.default=u},55389:function(t,i,n){"use strict";n.d(i,"b",(function(){return e})),n.d(i,"c",(function(){return o})),n.d(i,"a",(function(){return a}));var a={router:n("287a").default,uniPagination:n("c73c").default,bottom:n("44e0").default},e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",[n("router"),n("v-uni-view",{staticClass:"all"},[n("v-uni-view",{staticClass:"body_content"},[n("v-uni-view",{staticClass:"all-address"},[t._v("您所在的位置：首页>"+t._s(t.name))]),n("v-uni-view",{staticClass:"all-type"},[n("v-uni-view",{staticClass:"type-item"},[n("v-uni-view",{staticClass:"type-item-left"},[t._v("类型")]),n("v-uni-view",{staticClass:"type-item-right"},[n("v-uni-view",{class:t.leixing==t.id?"right-item1":"right-item2",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.select(t.id)}}},[t._v("全部")]),t._l(t.classfiy.lists,(function(i,a){return n("v-uni-view",[n("v-uni-view",{class:t.leixing==i.id?"right-item1":"right-item2",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.select(i.id,i.title)}}},[t._v(t._s(i.title))])],1)}))],2)],1)],1)],1),0!=t.list.lists.length?n("v-uni-view",{staticClass:"all-content"},t._l(t.list.lists,(function(i,a){return n("v-uni-view",{staticClass:"content-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.alldetails(i)}}},[n("v-uni-view",{staticClass:"item-left"},[n("v-uni-view",{staticClass:"item-left-img"},[n("v-uni-image",{attrs:{src:i.cover,mode:""}})],1)],1),n("v-uni-view",{staticClass:"item-right"},[n("v-uni-view",{staticClass:"item-right-title"},[t._v(t._s(i.title))]),n("v-uni-view",{staticClass:"item-right-number"},[n("v-uni-text",[t._v("点播人次：")]),n("v-uni-text",[t._v(t._s(i.views))])],1),""!=i.source?n("v-uni-view",{staticClass:"item-right-source"},[n("v-uni-text",[t._v("来源：")]),n("v-uni-text",[t._v(t._s(i.source))])],1):t._e(),n("v-uni-view",{staticClass:"item-right-time"},[t._v(t._s(i.create_time))])],1)],1)})),1):t._e()],1),n("v-uni-view",{staticClass:"allpage"},[n("uni-pagination",{attrs:{total:t.postCount,current:t.pageNum,pageSize:t.pageSize,"prev-text":"前一页","next-text":"后一页"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.handlePage.apply(void 0,arguments)}}})],1),n("bottom")],1)},o=[]},"60b9":function(t){t.exports=JSON.parse('{"uni-pagination.prevText":"anterior","uni-pagination.nextText":"próxima"}')},"6df7":function(t,i,n){"use strict";var a=n("1ab8"),e=n.n(a);e.a},"6f1e":function(t){t.exports=JSON.parse('{"uni-pagination.prevText":"上一頁","uni-pagination.nextText":"下一頁"}')},"88c6":function(t,i,n){"use strict";var a=n("4ea4");n("4160"),n("a9e3"),n("e25e"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=n("37dc"),o=a(n("bc69")),u=(0,e.initVueI18n)(o.default),g=u.t,s={name:"UniPagination",emits:["update:modelValue","input","change"],props:{value:{type:[Number,String],default:1},modelValue:{type:[Number,String],default:1},prevText:{type:String},nextText:{type:String},current:{type:[Number,String],default:1},total:{type:[Number,String],default:0},pageSize:{type:[Number,String],default:10},showIcon:{type:[Boolean,String],default:!1},pagerCount:{type:Number,default:7}},data:function(){return{currentIndex:1,paperData:[]}},computed:{prevPageText:function(){return this.prevText||g("uni-pagination.prevText")},nextPageText:function(){return this.nextText||g("uni-pagination.nextText")},maxPage:function(){var t=1,i=Number(this.total),n=Number(this.pageSize);return i&&n&&(t=Math.ceil(i/n)),t},paper:function(){for(var t=this.currentIndex,i=this.pagerCount,n=this.total,a=this.pageSize,e=[],o=[],u=Math.ceil(n/a),g=0;g<u;g++)e.push(g+1);o.push(1);var s=e[e.length-(i+1)/2];return e.forEach((function(n,a){(i+1)/2>=t?n<i+1&&n>1&&o.push(n):t+2<=s?n>t-(i+1)/2&&n<t+(i+1)/2&&o.push(n):(n>t-(i+1)/2||u-i<n)&&n<e[e.length-1]&&o.push(n)})),u>i?((i+1)/2>=t?o[o.length-1]="...":t+2<=s?(o[1]="...",o[o.length-1]="..."):o[1]="...",o.push(e[e.length-1])):(i+1)/2>=t||t+2<=s||(o.shift(),o.push(e[e.length-1])),o}},watch:{current:{immediate:!0,handler:function(t,i){this.currentIndex=t<1?1:t}},value:{immediate:!0,handler:function(t){1===Number(this.current)&&(this.currentIndex=t<1?1:t)}}},methods:{selectPage:function(t,i){if(parseInt(t))this.currentIndex=t,this.change("current");else{var n=Math.ceil(this.total/this.pageSize);if(i<=1)return void(this.currentIndex-5>1?this.currentIndex-=5:this.currentIndex=1);if(i>=6)return void(this.currentIndex+5>n?this.currentIndex=n:this.currentIndex+=5)}},clickLeft:function(){1!==Number(this.currentIndex)&&(this.currentIndex-=1,this.change("prev"))},clickRight:function(){Number(this.currentIndex)>=this.maxPage||(this.currentIndex+=1,this.change("next"))},change:function(t){this.$emit("input",this.currentIndex),this.$emit("update:modelValue",this.currentIndex),this.$emit("change",{type:t,current:this.currentIndex})}}};i.default=s},b577:function(t,i,n){var a=n("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-pagination[data-v-022503d3]{display:flex;position:relative;overflow:hidden;flex-direction:row;justify-content:center;align-items:center}.uni-pagination__total[data-v-022503d3]{font-size:14px;color:#999;margin-right:15px}.uni-pagination__btn[data-v-022503d3]{display:flex;cursor:pointer;padding:0 8px;line-height:30px;font-size:12px;position:relative;background-color:#f0f0f0;flex-direction:row;justify-content:center;align-items:center;text-align:center;border-radius:5px}.uni-pagination__child-btn[data-v-022503d3]{display:flex;font-size:12px;position:relative;flex-direction:row;justify-content:center;align-items:center;text-align:center;color:#666;font-size:12px}.uni-pagination__num[data-v-022503d3]{display:flex;flex:1;flex-direction:row;justify-content:center;align-items:center;height:30px;line-height:30px;font-size:12px;color:#666;margin:0 5px}.uni-pagination__num-tag[data-v-022503d3]{cursor:pointer;min-width:30px;margin:0 5px;height:30px;text-align:center;line-height:30px;color:#999;border-radius:4px}.uni-pagination__num-current[data-v-022503d3]{display:flex;flex-direction:row}.uni-pagination__num-current-text[data-v-022503d3]{font-size:15px}.uni-pagination--enabled[data-v-022503d3]{color:#333;opacity:1}.uni-pagination--disabled[data-v-022503d3]{opacity:.5;cursor:default}.uni-pagination--hover[data-v-022503d3]{color:rgba(0,0,0,.6);background-color:#eee}.tag--active[data-v-022503d3]:hover{color:#2979ff}.page--active[data-v-022503d3]{color:#fff;background-color:#2979ff}.page--active[data-v-022503d3]:hover{color:#fff}.is-pc-hide[data-v-022503d3]{display:block}.is-phone-hide[data-v-022503d3]{display:none}@media screen and (min-width:450px){.is-pc-hide[data-v-022503d3]{display:none}.is-phone-hide[data-v-022503d3]{display:block}.uni-pagination__num-flex-none[data-v-022503d3]{flex:none}}',""]),t.exports=i},bc69:function(t,i,n){"use strict";var a=n("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=a(n("d5a8")),o=a(n("60b9")),u=a(n("04f0")),g=a(n("029c")),s=a(n("6f1e")),r={en:e.default,es:o.default,fr:u.default,"zh-Hans":g.default,"zh-Hant":s.default};i.default=r},c73c:function(t,i,n){"use strict";n.r(i);var a=n("cf7a"),e=n("fbf1");for(var o in e)"default"!==o&&function(t){n.d(i,t,(function(){return e[t]}))}(o);n("df5c");var u,g=n("f0c5"),s=Object(g["a"])(e["default"],a["b"],a["c"],!1,null,"022503d3",null,!1,a["a"],u);i["default"]=s.exports},ccab:function(t,i,n){var a=n("24fb"),e=n("1de5"),o=n("b6e8");i=a(!1);var u=e(o);i.push([t.i,".allpage[data-v-6a04b464]{background-color:#f7f7f7;padding-bottom:100px}.all[data-v-6a04b464]{padding:%?0?% %?170?%;padding-bottom:%?78?%;width:100%;height:100%;background-color:#f7f7f7\n\t\t/* margin: auto; */}.item-left-img uni-image[data-v-6a04b464]{width:%?250?%;height:%?130?%;\n\t\t/* border: 1rpx solid pink; */\n\t\t/* margin-bottom: 20rpx;\n\t\tmargin-right: 30rpx; */margin:10px}.all-content[data-v-6a04b464]{width:100%;height:100%;\n\t\t/* border: 1rpx solid red; */margin-top:%?30?%;\n\t\t/* padding: 0rpx 170rpx; */display:flex;flex-wrap:wrap;justify-content:space-between;margin-bottom:%?20?%;border-radius:%?5?%}.content-item[data-v-6a04b464]{\n\t\t/* width: 570rpx; */width:45%;height:%?154?%;border:%?1?% solid hsla(0,0%,78.4%,.75);display:flex;background-color:#fff;margin-top:%?30?%;margin-bottom:%?20?%;border-radius:%?10?%}.item-right[data-v-6a04b464]{margin-right:%?20?%\n\t\t/* border: 1rpx solid black; */}.item-right-title[data-v-6a04b464]{font-size:%?20?%;font-weight:700;text-indent:%?20?%;margin-top:%?10?%}.item-right-number[data-v-6a04b464]{font-size:%?18?%;color:#666;margin-top:%?5?%}.item-right-source[data-v-6a04b464]{font-size:%?18?%;color:#333;margin-top:%?3?%}.item-right-time[data-v-6a04b464]{font-size:%?16?%;color:#666;margin-top:%?3?%}.bottom-right uni-image[data-v-6a04b464]{width:%?100?%;height:%?100?%}.bottom-right[data-v-6a04b464]{display:flex;margin-top:%?30?%}.all-bottom[data-v-6a04b464]{background:#cf282b;padding:%?0?% %?340?%;height:%?160?%;display:flex;justify-content:space-between}.bottom-left uni-text[data-v-6a04b464]{font-size:%?20?%;color:#fff;margin-top:%?50?%}.bottom-left[data-v-6a04b464]{margin-top:%?40?%}.bottom-right-left[data-v-6a04b464]{margin-right:%?40?%}.all-address[data-v-6a04b464]{width:%?1200?%;margin-left:%?170?%;\n\t\t/* border: 1rpx solid red; */padding-top:%?50?%;font-size:%?20?%}.type-item[data-v-6a04b464]{display:flex}.type-item-right[data-v-6a04b464]{display:flex}.all-type[data-v-6a04b464]{width:80%;\n\t\t/* width: 1100rpx; */height:%?83?%;line-height:%?83?%;border:%?1?% solid hsla(0,0%,78.4%,.75);margin-top:%?40?%;background-color:#fff;\n\t\t/* margin-left: 250rpx; */\n\t\t/* margin-left: 160px; */margin-left:10%;border-radius:%?10?%}.type-item-left[data-v-6a04b464]{width:%?120?%;color:#c93f49;font-weight:700;height:%?38?%;font-size:%?24?%;text-indent:%?15?%;margin-left:%?30?%}.type-item-right[data-v-6a04b464]{font-size:%?18?%;color:#666;height:%?24?%;cursor:pointer;float:left;padding:0 %?14?%;margin:%?6?% %?7?% %?6?% 0}.right-item1[data-v-6a04b464]{margin-left:%?20?%;color:#c93f49\n\t\t/* width: 80rpx;\n\t\tborder: 1rpx solid red; */}.right-item2[data-v-6a04b464]{margin-left:%?20?%;color:#666\n\t\t/* width: 80rpx;\n\t\tborder: 1rpx solid red; */}.all-select[data-v-6a04b464]{width:%?1100?%;height:%?66?%;border:%?1?% solid hsla(0,0%,78.4%,.75);margin-left:%?250?%;margin-top:%?30?%;display:flex;justify-content:space-between;background-color:#fff;border-radius:%?5?%}.all-select-right[data-v-6a04b464]{width:%?357?%;height:%?44?%;display:flex;justify-content:space-between;border:%?1?% solid hsla(0,0%,78.4%,.75);border-radius:%?22?%;margin-top:%?10?%;margin-right:%?20?%}.all-select uni-input[data-v-6a04b464]{width:%?250?%;height:%?44?%;font-size:%?18?%;text-indent:%?40?%}.select-img uni-image[data-v-6a04b464]{width:%?26?%;height:%?26?%;margin-right:%?20?%;margin-top:%?10?%}uni-page-body[data-v-6a04b464]{\n\t\t/* 样式优先级 */width:100%!important;max-width:1920px!important;\n\t\t/* max-width: 750px; */height:100%;margin:0 auto}\n\t/* 定位 */.homeposition[data-v-6a04b464]{width:%?80?%;height:%?180?%;\n\t\t/* border: 1rpx solid red; */position:fixed;top:70%;right:%?80?%}.homeposition-top uni-image[data-v-6a04b464]{width:%?76?%;height:%?76?%;background:#cf282b;border-radius:%?2?%}.homeposition-bottom uni-image[data-v-6a04b464]{margin-top:%?10?%;width:%?76?%;height:%?76?%;background:#cf282b;border-radius:%?2?%}.home-top[data-v-6a04b464]{width:100%;height:%?136?%;line-height:%?136?%;\n\t/* border: 1rpx solid red; */display:flex;background-image:url("+u+");background-size:cover}.top-left uni-image[data-v-6a04b464]{width:%?97?%;height:%?53?%;background:#cf282b;border-radius:%?10?%;margin-top:%?48?%;margin-left:%?170?%;margin-right:%?25?%}.top-left-txt[data-v-6a04b464]{margin-left:%?170?%;font-size:%?52?%;font-family:STXingkai;\n\t/* font-weight: 400; */color:#333\n\t/* width: 254rpx; */\n\t/* height: 46rpx; */}.top-left[data-v-6a04b464]{margin-right:%?403?%;display:flex}.top-center[data-v-6a04b464]{width:%?460?%;height:%?44?%;border:%?2?% solid #cf282b;display:flex;margin-top:%?53?%;margin-right:%?200?%}.top-center uni-button[data-v-6a04b464]{width:%?88?%;height:%?44?%;line-height:%?44?%;background:#cf282b;font-size:%?24?%;font-family:Adobe Heiti Std;font-weight:400;color:#fff;text-align:center}.top-center uni-input[data-v-6a04b464]{width:%?382?%;height:%?44?%;line-height:%?44?%;text-indent:%?20?%}.top-right[data-v-6a04b464]{\n\t/* border: 1rpx solid red; */font-size:%?24?%;font-family:Adobe Heiti Std;font-weight:400;color:#333}.top-right-txt1[data-v-6a04b464]{margin-right:%?20?%}.top-right-txt2[data-v-6a04b464]{margin-left:%?20?%}.home-head[data-v-6a04b464]{width:100%;height:%?77?%;background:#cf282b;padding:%?0?% %?70?%}.home-head ul[data-v-6a04b464]{\n\t/* border: 1rpx solid black; */width:100%;height:%?77?%;line-height:%?77?%;display:flex;justify-content:space-around}.home-head ul li[data-v-6a04b464]{padding-left:0;list-style:none;font-size:%?24?%;font-family:Adobe Heiti Std;font-weight:400;color:#fff}",""]),t.exports=i},cf7a:function(t,i,n){"use strict";n.d(i,"b",(function(){return e})),n.d(i,"c",(function(){return o})),n.d(i,"a",(function(){return a}));var a={uniIcons:n("b8f9").default},e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"uni-pagination"},[n("v-uni-view",{staticClass:"uni-pagination__total is-phone-hide"},[t._v("共 "+t._s(t.total)+" 条")]),n("v-uni-view",{staticClass:"uni-pagination__btn",class:1===t.currentIndex?"uni-pagination--disabled":"uni-pagination--enabled",attrs:{"hover-class":1===t.currentIndex?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickLeft.apply(void 0,arguments)}}},[!0===t.showIcon||"true"===t.showIcon?[n("uni-icons",{attrs:{color:"#666",size:"16",type:"left"}})]:[n("v-uni-text",{staticClass:"uni-pagination__child-btn"},[t._v(t._s(t.prevPageText))])]],2),n("v-uni-view",{staticClass:"uni-pagination__num uni-pagination__num-flex-none"},[n("v-uni-view",{staticClass:"uni-pagination__num-current"},[n("v-uni-text",{staticClass:"uni-pagination__num-current-text is-pc-hide",staticStyle:{color:"#409EFF"}},[t._v(t._s(t.currentIndex))]),n("v-uni-text",{staticClass:"uni-pagination__num-current-text is-pc-hide"},[t._v("/"+t._s(t.maxPage||0))]),t._l(t.paper,(function(i,a){return n("v-uni-view",{key:a,staticClass:"uni-pagination__num-tag tag--active is-phone-hide",class:{"page--active":i===t.currentIndex},on:{click:function(n){if(!n.type.indexOf("key")&&t._k(n.keyCode,"top",void 0,n.key,void 0))return null;arguments[0]=n=t.$handleEvent(n),t.selectPage(i,a)}}},[n("v-uni-text",[t._v(t._s(i))])],1)}))],2)],1),n("v-uni-view",{staticClass:"uni-pagination__btn",class:t.currentIndex>=t.maxPage?"uni-pagination--disabled":"uni-pagination--enabled",attrs:{"hover-class":t.currentIndex===t.maxPage?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickRight.apply(void 0,arguments)}}},[!0===t.showIcon||"true"===t.showIcon?[n("uni-icons",{attrs:{color:"#666",size:"16",type:"right"}})]:[n("v-uni-text",{staticClass:"uni-pagination__child-btn"},[t._v(t._s(t.nextPageText))])]],2)],1)},o=[]},d5a8:function(t){t.exports=JSON.parse('{"uni-pagination.prevText":"prev","uni-pagination.nextText":"next"}')},df5c:function(t,i,n){"use strict";var a=n("e573"),e=n.n(a);e.a},e573:function(t,i,n){var a=n("b577");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=n("4f06").default;e("71f0653e",a,!0,{sourceMap:!1,shadowMode:!1})},fbf1:function(t,i,n){"use strict";n.r(i);var a=n("88c6"),e=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(i,t,(function(){return a[t]}))}(o);i["default"]=e.a},fd1b:function(t,i,n){"use strict";n.r(i);var a=n("55389"),e=n("1753");for(var o in e)"default"!==o&&function(t){n.d(i,t,(function(){return e[t]}))}(o);n("6df7");var u,g=n("f0c5"),s=Object(g["a"])(e["default"],a["b"],a["c"],!1,null,"6a04b464",null,!1,a["a"],u);i["default"]=s.exports}}]);