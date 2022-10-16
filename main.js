 //#ifdef H5
;(function (){
 var u = navigator.userAgent,
  w = window.innerWidth;
 if (!u.match(/AppleWebKit.*Mobile.*/) || u.indexOf('iPad') > -1) {
  window.innerWidth = 750*(w / 1920);
  window.onload = function() {
   window.innerWidth = w;
  }
 }
})();
  //#endif
import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false


App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
// #endif

import request from 'utils/request.js'
import getToken from 'utils/login.js'
import lang from 'utils/lang.js'
//引入音乐播放器
// import music from 'utils/music.js'
Vue.prototype.$request = request
Vue.prototype.$checkToken = getToken
Vue.prototype.$lang = lang
//挂载到vue实例上
// Vue.prototype.$music=music
var langs = uni.getStorageSync('lang');
langs = langs=='zn'?'zn':'cn'
uni.setStorageSync('lang',langs)

// #ifdef VUE3
import {createSSRApp} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif