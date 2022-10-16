<script>
	import checkUpdate from '@/uni_modules/uni-upgrade-center-app/utils/check-update';
	export default {
		onLaunch: function() {
			console.log('App Launch')
			checkUpdate()//更新升级
		},
		mounted() {
			// #ifdef H5
			//const VConsole = require('@/common/js/vconsole.min.js')
			//new VConsole()
			// #endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* #ifndef APP-NVUE */
	page {
		width: 100%;
		/* height: 100%; */
		/* max-width: 750px; */
		height: 100%;
		margin: 0 auto;
	}
	.uni-page-head{
		/* max-width: 750px; */
		margin: 0 auto;
	}
	view{
		box-sizing: border-box;
	}
	@font-face {
	    font-family: "iconfont";
	    src: url('https://at.alicdn.com/t/font_2354462_s00xh8caffp.ttf');
	}
	.ico{
		font-family: iconfont;
	}
	/* #endif */
	scroll-view ::-webkit-scrollbar {  
	    display: none !important;  
	    width: 0 !important;  
	    height: 0 !important;  
	    -webkit-appearance: none;  
	    background: transparent;  
	}
</style>
