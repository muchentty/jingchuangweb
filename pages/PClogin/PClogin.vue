<template>
	<view>
		<view class="login">
			<view class="login-content">
				<view class="login-top">
					<view class="login-top-item">
						<view class="login-top-left">
							<!-- <image src="../../static/logo.png" mode=""></image> -->
						</view>
						<view class="login-top-right">
							<!-- 文化泉州 -->
						</view>
					</view>
				</view>
				<view class="login-fill">
					<view class="login-fill-left">
						<view class="fill-left-top">
							<view class="fill-left-top-select">
								密码登录
							</view>
						</view>
						<view class="fill-left-input">
							<view class="input-phone">
								<input type="text" value=""  v-model="username" @input="userName" placeholder="账号"/>
							</view>
							<view class="input-pwd">
								<input type="text" value="" v-model="passWord" @input="password" placeholder="密码" />
							</view>
							<view class="fill-button"  @click="login">
								<button type="default">登录</button>
							</view>
							<view class="fill-bottom">
								<view class="fill-bottom-left">
									<text @click="pcregister">没有账号？立即注册</text>
								</view>
								<view class="forgetpwd">
									<text>忘记密码？</text>
								</view>
							</view>
						</view>
					</view>
					<view class="login-fill-right">
						<view class="login-fill-right-top">
							微信登录
						</view>
						<view class="erweima">
							<view class="erweima-img">
								<image src="../../static/logo.png" mode=""></image>
							</view>
							<view class="erweima-txt">
								<!-- 使用微信扫描二维码登录
								“ 东莞数字文化馆” -->
							</view>
						</view>
					</view>
				</view>
			</view>
			
		</view>
		<bottom></bottom>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				huanyingdengluzhihuishuziwenlvtong: '',
				qingshuruyonghuming: '',
				qingshurumima: '',
				huanmeizhuce: '',
				dengluchenggong: '',
				yonghuming: '',
				quzhuce: '',
				mima: '',
				denglu: '',
				weixin: '',
				username: '',
				passWord: '',
				is_wx:'0',
			}
		},
		methods: {
			//注册
			pcregister(){
				uni.navigateTo({
					url:'../PCregister/PCregister'
				})
			},
			getUserInfo(){
				let url = encodeURIComponent("https://wap.xiyi-iot.com/wx.php")
				window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe291ac50970adcb3&redirect_uri='+url+'&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
				// console.log(this.code);
				// if(this.code){
				// 	//将onLoad中的获取token方法放进来即可
				// } else {
				// 	//没有code就去获取code
				// }
			
			},
			reg() {
				uni.navigateTo({
					url: '../register/register'
				})
			},
			userName(e) {
				this.username = e.detail.value
			},
			password(e) {
				this.passWord = e.detail.value
			},
			login() {
				let that = this
				this.$request('/api/auth/login', {
					username: that.username,
					password: that.passWord
				}, 'post').then(res => {
					if (res.code == 1) {
						let token = res.data.token;
						let resToken = res.data.refresh_token;
						let expire = res.data.expire_in + res.time;
						uni.showToast({
							title: that.dengluchenggong,
							icon: 'none'
						})
			
						uni.setStorageSync('wtoken', token);
						uni.setStorageSync('retoken', resToken);
						uni.setStorageSync('expire', expire);
						uni.navigateTo({
							url: '../homePage/homePage'
						})
					} else {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
				})
			}
		},
		onLoad(e) {
			this.huanyingdengluzhihuishuziwenlvtong = this.$lang.huanyingdengluzhihuishuziwenlvtong[uni.getStorageSync(
				'lang')];
			this.qingshuruyonghuming = this.$lang.qingshuruyonghuming[uni.getStorageSync('lang')];
			this.qingshurumima = this.$lang.qingshurumima[uni.getStorageSync('lang')];
			this.huanmeizhuce = this.$lang.huanmeizhuce[uni.getStorageSync('lang')];
			this.dengluchenggong = this.$lang.dengluchenggong[uni.getStorageSync('lang')];
			this.yonghuming = this.$lang.yonghuming[uni.getStorageSync('lang')];
			this.quzhuce = this.$lang.quzhuce[uni.getStorageSync('lang')];
			this.mima = this.$lang.mima[uni.getStorageSync('lang')];
			this.denglu = this.$lang.denglu[uni.getStorageSync('lang')];
			this.weixin = this.$lang.weixin[uni.getStorageSync('lang')];
			let that = this
			//#ifdef H5
			let ua = window.navigator.userAgent.toLowerCase()
			if (ua.match(/MicroMessenger/i) != 'micromessenger' && window.location.host.indexOf("localhost") == -1) {
				this.is_wx = 1;
			}
			//#endif
			
			
			if(e.code){
				console.log(e.code)
				this.$request('/api/auth/wxUserInfo', {
					code:e.code
				}, 'post').then(res1 => {
					this.$request('/api/auth/wxLogin', {
						wxid: 1,
						code: 'the code is from h5',
						rawData:res1.data,
					}, 'post').then(res => {
						console.log(res)
						if (res.code == 1) {
							let token = res.data.token;
							let resToken = res.data.refresh_token;
							let expire = res.data.expire_in + res.time;
							uni.showToast({
								title: that.dengluchenggong,
								icon: 'none'
							})
						
							uni.setStorageSync('wtoken', token);
							uni.setStorageSync('retoken', resToken);
							uni.setStorageSync('expire', expire);
							uni.switchTab({
								url: '../homePage/homePage'
							})
							// uni.switchTab({
							// 	url: '../index/index'
							// })
						} else {
							uni.showToast({
								title: res.msg,
								icon: 'none'
							})
						}
					})
				})
			}
		},
	}
</script>

<style>
.login{
	margin: auto;
	/* border: 1rpx solid red; */
	padding: 0rpx 170rpx;
}
.login-content{
	
	/* border: 1rpx solid black; */
	padding: 20rpx  170rpx;
	height: 1000rpx;
	margin: auto;
	background-image: url(../../static/banner.png);
	background-size: cover;
}
.login-top{
	padding-top: 100rpx;
	/* border: 1rpx solid black; */
	margin: auto;
}
.login-top-item{
	margin-left: 400rpx;
	/* width: 200rpx; */
	height: 108rpx;
	line-height: 108rpx;
	/* border: 1rpx solid red; */
	display: flex;
	font-size: 48rpx;
}
.login-top-left image{
	width: 108rpx;
	height: 108rpx;
	/* border: 1rpx solid red; */
	margin-right: 20rpx;
}
.login-fill{
	margin-top: 30rpx;
	width: 100%;
	height: 500rpx;
	border: 1rpx solid rgba(200,200,200,0.75);
	background-color: #FFFFFF;
	display: flex;
}
.login-fill-left{
	width: 800rpx;
	height: 500rpx;
	/* border: 1rpx solid red; */
	padding: 50rpx 50rpx;
}
.fill-left-top-select{
	font-size: 30rpx;
	color: #CF282B;
}
.fill-left-input{
	margin-top: 20rpx;
	width: 100%;
	height: 300rpx;
	/* border: 1rpx solid red; */
}
.input-phone input{
	width: 500rpx;
	height: 60rpx;
	font-size: 18rpx;
	border-bottom: 1rpx solid rgba(200,200,200,0.75);
}
.input-pwd input{
	width: 500rpx;
	height: 60rpx;
	font-size: 18rpx;
	border-bottom: 1rpx solid rgba(200,200,200,0.75);
}
.fill-button button{
	width: 500rpx;
	height: 60rpx;
	line-height: 60rpx;
	font-size: 20rpx;
	background-color:#CF282B ;
	color: #FFFFFF;
	margin-left: 0;
	margin-top: 50rpx;
}
.fill-bottom{
	width: 500rpx;
	margin-top: 10rpx;
	font-size: 18rpx;
	display: flex;
	justify-content: space-between;
}
.fill-bottom-left{
	color: #5588Ff;
}
.forgetpwd{
	color: #999999;
}
.login-fill-right{
	/* border: 1RPX solid black; */
	margin-left: 10rpx;
	margin-left: 50rpx;
}
.login-fill-right-top{
	margin-top: 50rpx;
	text-align: center;
	font-size: 20rpx;
}
.erweima{
	margin-top: 20rpx;
	width: 252rpx;
	height: 316rpx;
	padding: 15rpx;
	text-align: center;
	border: 1rpx solid rgba(200,200,200,0.75);
}
.erweima-img image{
	width: 220rpx;
	height: 220rpx;
	/* border: 1rpx solid red; */
	/* margin-left: 15rpx;
	margin-top: 15rpx; */
}
.erweima-txt{
	font-size: 18rpx;
	margin-top: 20rpx;
}
</style>
