(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-specials-foods-details-specials-foods-details"],{"2d12":function(e,i){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAcVJREFUeF7t2kFOwzAQBdDpDTgCCy7ADXoTYM1mOAEcYbxIt8CROAACTlDYR3JlyZUsmhapGs98Y2eTVZP8l58qGXlFnW+rzvPTABgN6FxgPAKdF2D8Cao/Asy8JqLH3KxXEXlBbpkqADNfENEHEaX9frtDRtAGuMwAv286LIIqQErNzKnyNwu1h0RQB2gNoQpASwjVAFpBqArQAkJ1AHQEEwBkBDMAVARTAEQEcwA0BBcAJAQ3gIzwVHw5lm/PZq/NrgAZ4ZaInr2+HdwBvBEgADwRYAC8EKAAPBDgAKwRIAFOIcQY70MIG61BKyzAH014EBHRQIAGOIHwIyLl5PlsixYADoasMcb3EMLV2amLH0IDLE2YY4zbeZ6vp2n6+tcAR8brb0S0FpFvjfDpGJANsAoPCWAZHg7AOjwUgEd4GACv8BAAnuHdAbzDuwIghHcDQAnvAoAU3hwALbwpAGJ4MwDU8CYAyOGrA6CHrwrQQvhqAK2ErwLQUnh1AGZeWiqrPsbSGofVAEij6m1xgdDh1QHyHD8tl08LHz7T0mHNAabmnd8fC3IoWiPosWMOAEttxHONBiDeFctrGg2w1EY8V/cN2AFmUhNQgQBU5QAAAABJRU5ErkJggg=="},"307b":function(e,i,t){var n;t("c975"),t("ac1f"),t("466d"),t("5319"),t("1276");var a=t("9523");!function(a,o){n=function(){return o(a)}.call(i,t,i,e),void 0===n||(e.exports=n)}(window,(function(e,i){if(!e.jWeixin){var t,n,o={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},r=function(){var e={};for(var i in o)e[o[i]]=i;return e}(),s=e.document,c=s.title,d=navigator.userAgent.toLowerCase(),l=navigator.platform.toLowerCase(),u=!(!l.match("mac")&&!l.match("win")),g=-1!=d.indexOf("wxdebugger"),f=-1!=d.indexOf("micromessenger"),p=-1!=d.indexOf("android"),m=-1!=d.indexOf("iphone")||-1!=d.indexOf("ipad"),h=(n=d.match(/micromessenger\/(\d+\.\d+\.\d+)/)||d.match(/micromessenger\/(\d+\.\d+)/))?n[1]:"",v={initStartTime:L(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},w={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:m?1:p?2:-1,clientVersion:h,url:encodeURIComponent(location.href)},y={},S={_completes:[]},A={state:0,data:{}};R((function(){v.initEndTime=L()}));var b=!1,x=[],I=(t={config:function(i){V("config",y=i);var t=!1!==y.check;R((function(){if(t)C(o.config,{verifyJsApiList:E(y.jsApiList),verifyOpenTagList:E(y.openTagList)},function(){S._complete=function(e){v.preVerifyEndTime=L(),A.state=1,A.data=e},S.success=function(e){w.isPreVerifyOk=0},S.fail=function(e){S._fail?S._fail(e):A.state=-1};var e=S._completes;return e.push((function(){!function(){if(!(u||g||y.debug||h<"6.0.2"||w.systemType<0)){var e=new Image;w.appId=y.appId,w.initTime=v.initEndTime-v.initStartTime,w.preVerifyTime=v.preVerifyEndTime-v.preVerifyStartTime,I.getNetworkType({isInnerInvoke:!0,success:function(i){w.networkType=i.networkType;var t="https://open.weixin.qq.com/sdk/report?v="+w.version+"&o="+w.isPreVerifyOk+"&s="+w.systemType+"&c="+w.clientVersion+"&a="+w.appId+"&n="+w.networkType+"&i="+w.initTime+"&p="+w.preVerifyTime+"&u="+w.url;e.src=t}})}}()})),S.complete=function(i){for(var t=0,n=e.length;t<n;++t)e[t]();S._completes=[]},S}()),v.preVerifyStartTime=L();else{A.state=1;for(var e=S._completes,i=0,n=e.length;i<n;++i)e[i]();S._completes=[]}})),I.invoke||(I.invoke=function(i,t,n){e.WeixinJSBridge&&WeixinJSBridge.invoke(i,P(t),n)},I.on=function(i,t){e.WeixinJSBridge&&WeixinJSBridge.on(i,t)})},ready:function(e){0!=A.state?e():(S._completes.push(e),!f&&y.debug&&e())},error:function(e){h<"6.0.2"||(-1==A.state?e(A.data):S._fail=e)},checkJsApi:function(e){C("checkJsApi",{jsApiList:E(e.jsApiList)},(e._complete=function(e){if(p){var i=e.checkResult;i&&(e.checkResult=JSON.parse(i))}e=function(e){var i=e.checkResult;for(var t in i){var n=r[t];n&&(i[n]=i[t],delete i[t])}return e}(e)},e))},onMenuShareTimeline:function(e){T(o.onMenuShareTimeline,{complete:function(){C("shareTimeline",{title:e.title||c,desc:e.title||c,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){T(o.onMenuShareAppMessage,{complete:function(i){"favorite"===i.scene?C("sendAppMessage",{title:e.title||c,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):C("sendAppMessage",{title:e.title||c,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){T(o.onMenuShareQQ,{complete:function(){C("shareQQ",{title:e.title||c,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){T(o.onMenuShareWeibo,{complete:function(){C("shareWeiboApp",{title:e.title||c,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){T(o.onMenuShareQZone,{complete:function(){C("shareQZone",{title:e.title||c,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){C("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){C("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){C("startRecord",{},e)},stopRecord:function(e){C("stopRecord",{},e)},onVoiceRecordEnd:function(e){T("onVoiceRecordEnd",e)},playVoice:function(e){C("playVoice",{localId:e.localId},e)},pauseVoice:function(e){C("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){C("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){T("onVoicePlayEnd",e)},uploadVoice:function(e){C("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){C("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){C("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){C("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(p){var i=e.localIds;try{i&&(e.localIds=JSON.parse(i))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){C(o.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){C("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){C("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===b?(b=!0,C("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(b=!1,0<x.length){var i=x.shift();wx.getLocalImgData(i)}},e))):x.push(e)},getNetworkType:function(e){C("getNetworkType",{},(e._complete=function(e){e=function(e){var i=e.errMsg;e.errMsg="getNetworkType:ok";var t=e.subtype;if(delete e.subtype,t)e.networkType=t;else{var n=i.indexOf(":"),a=i.substring(n+1);switch(a){case"wifi":case"edge":case"wwan":e.networkType=a;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){C("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)}},a(t,"getLocation",(function(e){C(o.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))})),a(t,"hideOptionMenu",(function(e){C("hideOptionMenu",{},e)})),a(t,"showOptionMenu",(function(e){C("showOptionMenu",{},e)})),a(t,"closeWindow",(function(e){C("closeWindow",{},e=e||{})})),a(t,"hideMenuItems",(function(e){C("hideMenuItems",{menuList:e.menuList},e)})),a(t,"showMenuItems",(function(e){C("showMenuItems",{menuList:e.menuList},e)})),a(t,"hideAllNonBaseMenuItem",(function(e){C("hideAllNonBaseMenuItem",{},e)})),a(t,"showAllNonBaseMenuItem",(function(e){C("showAllNonBaseMenuItem",{},e)})),a(t,"scanQRCode",(function(e){C("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(m){var i=e.resultStr;if(i){var t=JSON.parse(i);e.resultStr=t&&t.scan_code&&t.scan_code.scan_result}}},e))})),a(t,"openAddress",(function(e){C(o.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))})),a(t,"openProductSpecificView",(function(e){C(o.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)})),a(t,"addCard",(function(e){for(var i=e.cardList,t=[],n=0,a=i.length;n<a;++n){var r=i[n],s={card_id:r.cardId,card_ext:r.cardExt};t.push(s)}C(o.addCard,{card_list:t},(e._complete=function(e){var i=e.card_list;if(i){for(var t=0,n=(i=JSON.parse(i)).length;t<n;++t){var a=i[t];a.cardId=a.card_id,a.cardExt=a.card_ext,a.isSuccess=!!a.is_succ,delete a.card_id,delete a.card_ext,delete a.is_succ}e.cardList=i,delete e.card_list}},e))})),a(t,"chooseCard",(function(e){C("chooseCard",{app_id:y.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))})),a(t,"openCard",(function(e){for(var i=e.cardList,t=[],n=0,a=i.length;n<a;++n){var r=i[n],s={card_id:r.cardId,code:r.code};t.push(s)}C(o.openCard,{card_list:t},e)})),a(t,"consumeAndShareCard",(function(e){C(o.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)})),a(t,"chooseWXPay",(function(e){C(o.chooseWXPay,M(e),e)})),a(t,"openEnterpriseRedPacket",(function(e){C(o.openEnterpriseRedPacket,M(e),e)})),a(t,"startSearchBeacons",(function(e){C(o.startSearchBeacons,{ticket:e.ticket},e)})),a(t,"stopSearchBeacons",(function(e){C(o.stopSearchBeacons,{},e)})),a(t,"onSearchBeacons",(function(e){T(o.onSearchBeacons,e)})),a(t,"openEnterpriseChat",(function(e){C("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)})),a(t,"launchMiniProgram",(function(e){C("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var i=e.split("?")[0],t=e.split("?")[1];return i+=".html",void 0!==t?i+"?"+t:i}}(e.path),envVersion:e.envVersion},e)})),a(t,"openBusinessView",(function(e){C("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(e){if(p){var i=e.extraData;if(i)try{e.extraData=JSON.parse(i)}catch(i){e.extraData={}}}},e))})),a(t,"miniProgram",{navigateBack:function(e){e=e||{},R((function(){C("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){R((function(){C("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){R((function(){C("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){R((function(){C("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){R((function(){C("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){R((function(){C("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(i){R((function(){i({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}),t),_=1,k={};return s.addEventListener("error",(function(e){if(!p){var i=e.target,t=i.tagName,n=i.src;if(("IMG"==t||"VIDEO"==t||"AUDIO"==t||"SOURCE"==t)&&-1!=n.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var a=i["wx-id"];if(a||(a=_++,i["wx-id"]=a),k[a])return;k[a]=!0,wx.ready((function(){wx.getLocalImgData({localId:n,success:function(e){i.src=e.localData}})}))}}}),!0),s.addEventListener("load",(function(e){if(!p){var i=e.target,t=i.tagName;if(i.src,"IMG"==t||"VIDEO"==t||"AUDIO"==t||"SOURCE"==t){var n=i["wx-id"];n&&(k[n]=!1)}}}),!0),i&&(e.wx=e.jWeixin=I),I}function C(i,t,n){e.WeixinJSBridge?WeixinJSBridge.invoke(i,P(t),(function(e){B(i,e,n)})):V(i,n)}function T(i,t,n){e.WeixinJSBridge?WeixinJSBridge.on(i,(function(e){n&&n.trigger&&n.trigger(e),B(i,e,t)})):V(i,n||t)}function P(e){return(e=e||{}).appId=y.appId,e.verifyAppId=y.appId,e.verifySignType="sha1",e.verifyTimestamp=y.timestamp+"",e.verifyNonceStr=y.nonceStr,e.verifySignature=y.signature,e}function M(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function B(e,i,t){"openEnterpriseChat"!=e&&"openBusinessView"!==e||(i.errCode=i.err_code),delete i.err_code,delete i.err_desc,delete i.err_detail;var n=i.errMsg;n||(n=i.err_msg,delete i.err_msg,n=function(e,i){var t=e,n=r[t];n&&(t=n);var a="ok";if(i){var o=i.indexOf(":");"confirm"==(a=i.substring(o+1))&&(a="ok"),"failed"==a&&(a="fail"),-1!=a.indexOf("failed_")&&(a=a.substring(7)),-1!=a.indexOf("fail_")&&(a=a.substring(5)),"access denied"!=(a=(a=a.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=a||(a="permission denied"),"config"==t&&"function not exist"==a&&(a="ok"),""==a&&(a="fail")}return t+":"+a}(e,n),i.errMsg=n),(t=t||{})._complete&&(t._complete(i),delete t._complete),n=i.errMsg||"",y.debug&&!t.isInnerInvoke&&alert(JSON.stringify(i));var a=n.indexOf(":");switch(n.substring(a+1)){case"ok":t.success&&t.success(i);break;case"cancel":t.cancel&&t.cancel(i);break;default:t.fail&&t.fail(i)}t.complete&&t.complete(i)}function E(e){if(e){for(var i=0,t=e.length;i<t;++i){var n=e[i],a=o[n];a&&(e[i]=a)}return e}}function V(e,i){if(!(!y.debug||i&&i.isInnerInvoke)){var t=r[e];t&&(e=t),i&&i._complete&&delete i._complete,console.log('"'+e+'",',i||"")}}function L(){return(new Date).getTime()}function R(i){f&&(e.WeixinJSBridge?i():s.addEventListener&&s.addEventListener("WeixinJSBridgeReady",i,!1))}}))},4526:function(e,i,t){var n=t("4d5e");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=t("4f06").default;a("ec4dabda",n,!0,{sourceMap:!1,shadowMode:!1})},"4d5e":function(e,i,t){var n=t("24fb");i=n(!1),i.push([e.i,".tourist-attraction-weather[data-v-1e158030]{padding:%?20?% %?30?%;border-bottom:%?20?% solid #f7f7f7}.Weather-content[data-v-1e158030]{padding-right:%?30?%}.tourist-attraction-details-top uni-image[data-v-1e158030]{width:100%;height:%?454?%}.details-content-item1[data-v-1e158030]{display:flex;justify-content:space-between;margin-top:%?18?%;padding:%?0?% %?30?% %?16?% %?30?%}.item1-left-title[data-v-1e158030]{color:rgba(16,16,16r,100);font-size:%?36?%;font-family:PingFangSC-regular;margin-bottom:%?8?%}.item1-left-price[data-v-1e158030]{color:#999;font-size:%?24?%;font-family:PingFangSC-regular;margin-bottom:%?10?%}.item1-left-price1[data-v-1e158030]{color:#101010;font-size:%?24?%;font-family:PingFangSC-regular}.details-content-item1-right[data-v-1e158030]{color:#ff7f22;font-size:%?24?%;font-family:PingFangSC-regular;position:relative;top:%?20?%}.details-content-item2[data-v-1e158030]{padding:%?0?% %?30?%}.item2-branch-left uni-image[data-v-1e158030]{width:%?28?%;height:%?28?%;margin-right:%?12?%}.item2-branch-right uni-image[data-v-1e158030]{width:%?36?%;height:%?36?%}.content-item2-branch[data-v-1e158030]{display:flex;justify-content:space-between;padding:%?20?% %?0?%;border-bottom:%?1?% solid #c8c8c8}.details-content-item3[data-v-1e158030]{padding:%?0?% %?30?%}.content-item3-branch[data-v-1e158030]{display:flex;justify-content:space-between;padding:%?36?% %?0?% %?28?% %?0?%;border-bottom:%?1?% solid #c8c8c8}.item3-branch-left uni-image[data-v-1e158030]{width:%?28?%;height:%?28?%;margin-right:%?12?%}.item3-branch-right uni-image[data-v-1e158030]{width:%?36?%;height:%?36?%}.item2-branch-left-txt[data-v-1e158030],\n.item3-branch-left-txt[data-v-1e158030]{color:#101010;font-size:%?28?%;font-family:PingFangSC-regular}.details-content-item4[data-v-1e158030]{padding:%?0?% %?30?%}.content-item4-branch[data-v-1e158030]{display:flex;justify-content:space-between;padding:%?30?% %?0?%;border-bottom:%?1?% solid #c8c8c8}.item4-branch-right uni-image[data-v-1e158030]{width:%?36?%;height:%?36?%}.item4-branch-left-txt[data-v-1e158030]{color:#101010;font-size:%?28?%;font-family:PingFangSC-regular}.tourist-attraction-main[data-v-1e158030]{padding:%?18?% %?30?% %?26?% %?30?%}.tourist-attraction-main-title[data-v-1e158030]{color:#101010;font-size:%?32?%;margin-top:%?26?%;margin-bottom:%?26?%;font-family:PingFangSC-regular}.tourist-attraction-main-txt[data-v-1e158030]{line-height:%?50?%;text-indent:%?40?%;color:#666;font-size:%?28?%;font-family:PingFangSC-regular}.tourist-attraction-Recommended[data-v-1e158030]{padding:%?0?% %?30?%}.Recommended-title[data-v-1e158030]{color:#101010;font-size:%?32?%;margin-bottom:%?16?%;font-family:PingFangSC-regular}.Recommended-item[data-v-1e158030]{padding:%?16?% %?0?% %?26?% %?0?%;border-bottom:%?1?% solid hsla(0,0%,78.4%,.75)}.Recommended-item-txt[data-v-1e158030]{margin-left:%?18?%;line-height:%?35?%}.Recommended-item-img uni-image[data-v-1e158030]{width:%?220?%;height:%?150?%;border-radius:%?5?%}.Recommended-item-txt1[data-v-1e158030]{color:#101010;font-size:%?28?%;font-family:PingFangSC-regular}.Recommended-item-txt2[data-v-1e158030]{color:#ff7f22;font-size:%?24?%;font-family:PingFangSC-regular}.Recommended-item-txt3[data-v-1e158030]{color:#101010;font-size:%?24?%;font-family:PingFangSC-regular}.Recommended-item-txt4[data-v-1e158030]{color:#ff7f22;font-size:%?24?%;font-family:PingFangSC-regular}.Recommended-item-txt5[data-v-1e158030]{color:#101010;font-size:%?24?%;font-family:PingFangSC-regular}.Recommended-item[data-v-1e158030]{display:flex}",""]),e.exports=i},"7bf5":function(e,i,t){"use strict";t.r(i);var n=t("f12e"),a=t.n(n);for(var o in n)"default"!==o&&function(e){t.d(i,e,(function(){return n[e]}))}(o);i["default"]=a.a},9523:function(e,i){function t(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}e.exports=t},"9a23":function(e,i,t){"use strict";var n;t.d(i,"b",(function(){return a})),t.d(i,"c",(function(){return o})),t.d(i,"a",(function(){return n}));var a=function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("v-uni-view",{staticClass:"specials-foods-details"},[n("v-uni-view",{staticClass:"tourist-attraction-details-top"},[n("v-uni-image",{attrs:{src:e.venue.venue.cover}})],1),n("v-uni-view",{staticClass:"tourist-attraction-details-content"},[n("v-uni-view",{staticClass:"details-content-item1"},[n("v-uni-view",{staticClass:"details-content-item1-left"},[n("v-uni-text",{staticClass:"item1-left-title"},[e._v(e._s(e.venue.venue.name))]),n("br"),n("v-uni-text",{staticClass:"item1-left-price"},[e._v(e._s(e.venue.venue.start_time)+" - "+e._s(e.venue.venue.end_time))])],1)],1),n("v-uni-view",{staticClass:"details-content-item2"},[n("v-uni-view",{staticClass:"content-item2-branch",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.to_map.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"item2-branch-left"},[n("v-uni-image",{attrs:{src:t("c20f"),mode:""}}),n("v-uni-text",{staticClass:"item2-branch-left-txt"},[e._v(e._s(e.venue.venue.address))])],1),n("v-uni-view",{staticClass:"item2-branch-right"},[n("v-uni-image",{attrs:{src:t("2d12"),mode:""}})],1)],1)],1),n("v-uni-view",{staticClass:"details-content-item3"},[n("v-uni-view",{staticClass:"content-item3-branch"},[n("v-uni-view",{staticClass:"item3-branch-left"},[n("v-uni-image",{attrs:{src:t("fac5"),mode:""}}),n("v-uni-text",{staticClass:"item3-branch-left-txt",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.getpone(e.venue.venue.tel)}}},[e._v(e._s(e.lianxifangshi)+"："+e._s(e.venue.venue.tel))])],1),n("v-uni-view",{staticClass:"item3-branch-right"},[n("v-uni-image",{attrs:{src:t("2d12"),mode:""}})],1)],1)],1),n("v-uni-view",{staticClass:"tourist-attraction-main"},[n("v-uni-view",{staticClass:"tourist-attraction-main-title"},[e._v(e._s(e.meishijianjie))]),n("v-uni-view",{staticClass:"wen",staticStyle:{width:"100%",overflow:"hidden"},domProps:{innerHTML:e._s(e.context)}})],1)],1)],1)},o=[]},ae27:function(e,i,t){"use strict";var n=t("4526"),a=t.n(n);a.a},c20f:function(e,i,t){e.exports=t.p+"static/img/map.1de7992d.png"},f12e:function(e,i,t){"use strict";var n=t("4ea4");t("a9e3"),t("ac1f"),t("466d"),t("5319"),t("1276"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(t("307b")),o={data:function(){return{lianxifangshi:"",meishijianjie:"",venue:[],context:"",nideweixinbanbentaidi:"",qingshengjidaozuixindeweixinbanben:"",venue_id:""}},methods:{to_map:function(){var e="";e=this.venue.venue.position.split(",");var i=Number(e[1]),t=Number(e[0]);console.log(this.venue.venue),console.log(e),console.log(i,t);var n=this,o=window.navigator.userAgent.toLowerCase();"micromessenger"==o.match(/MicroMessenger/i)&&this.initJssdkShare((function(e){a.default.ready((function(){a.default.checkJsApi({jsApiList:["openLocation"],success:function(e){0!=e.checkResult.getLocation||uni.showToast({title:n.nideweixinbanbentaidi+"，"+n.qingshengjidaozuixindeweixinbanben+"！",duration:2e3,icon:"none"})}}),a.default.openLocation({latitude:i,longitude:t,name:n.venue.venue.name,address:n.venue.venue.name,scale:20})}))}))},initJssdkShare:function(e){var i="pages/specials-foods-details/specials-foods-details?id="+this.venue_id;this.$request("/api/common/getJssdkTicket",{url:i},"post",{}).then((function(i){i.data&&(a.default.config({debug:!1,appId:i.data.appId,timestamp:i.data.timestamp,nonceStr:i.data.nonceStr,signature:i.data.signature,jsApiList:["checkJsApi","openLocation"]}),e&&e(i.data))}))},getpone:function(e){uni.makePhoneCall({phoneNumber:e,success:function(e){console.log("调用成功!")},fail:function(e){console.log("调用失败!")}})},formatRichText:function(e){var i=e.replace(/<img[^>]*>/gi,(function(e,i){return e=e.replace(/style="[^"]+"/gi,"").replace(/style='[^']+'/gi,""),e=e.replace(/width="[^"]+"/gi,"").replace(/width='[^']+'/gi,""),e=e.replace(/height="[^"]+"/gi,"").replace(/height='[^']+'/gi,""),e}));return i=e.replace(/<video[^>]*>/gi,(function(e,i){return e=e.replace(/width="[^"]+"/gi,'style="width:100%"').replace(/width='[^']+'/gi,""),e=e.replace(/height="[^"]+"/gi,"").replace(/height='[^']+'/gi,""),e})),i=i.replace(/style="[^"]+"/gi,(function(e,i){return e=e.replace(/width:[^;]+;/gi,"max-width:100%;").replace(/width:[^;]+;/gi,"max-width:100%;"),e})),i=i.replace(/<br[^>]*\/>/gi,""),i=i.replace(/\<img/gi,'<img style="max-width:100%;height:auto;display:inline-block;margin:10rpx auto;"'),i}},onShow:function(e){this.qingshengjidaozuixindeweixinbanben=this.$lang.qingshengjidaozuixindeweixinbanben[uni.getStorageSync("lang")],this.nideweixinbanbentaidi=this.$lang.nideweixinbanbentaidi[uni.getStorageSync("lang")],this.lianxifangshi=this.$lang.lianxifangshi[uni.getStorageSync("lang")],this.meishijianjie=this.$lang.meishijianjie[uni.getStorageSync("lang")]},onLoad:function(e){var i=this;this.qingshengjidaozuixindeweixinbanben=this.$lang.qingshengjidaozuixindeweixinbanben[uni.getStorageSync("lang")],this.nideweixinbanbentaidi=this.$lang.nideweixinbanbentaidi[uni.getStorageSync("lang")],this.lianxifangshi=this.$lang.lianxifangshi[uni.getStorageSync("lang")],this.meishijianjie=this.$lang.meishijianjie[uni.getStorageSync("lang")];var t=e.id;this.venue_id=e.id;open.cover;this.$request("/api/venue/view",{id:t},"post",{}).then((function(e){1===e.code&&(i.venue=e.data,i.context=i.venue.venue.content,uni.setNavigationBarTitle({title:i.venue.venue.name}))}))}};i.default=o},f8bb:function(e,i,t){"use strict";t.r(i);var n=t("9a23"),a=t("7bf5");for(var o in a)"default"!==o&&function(e){t.d(i,e,(function(){return a[e]}))}(o);t("ae27");var r,s=t("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"1e158030",null,!1,n["a"],r);i["default"]=c.exports},fac5:function(e,i,t){e.exports=t.p+"static/img/phone.6e7a70de.png"}}]);