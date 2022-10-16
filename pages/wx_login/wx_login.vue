<template>
	<view class="bgclass">
		<view class="header">

		</view>
		<view class='content'> 登陆后发现更多精彩~ </view>

		<button class='confirm-btn' open-type="getUserInfo" @click="onGotUserInfo">
			微信快速登录
		</button>
		
		<button class='confirm-btn youke' @click="go_index">
			游客浏览
		</button>

		<!-- 	  <view class="proto">
		   <checkbox :class="isChecked?'checked':''" :checked="isChecked?true:false" @click="isCheck" value="1"></checkbox>
		  <view>勾选同意<text style="color: #f14628;" @click="protos"><<{{docTitle.doc_title}}>></text></view>
	  </view> -->
	</view>
</template>

<script>
	import config from 'utils/config.js'
	export default {
		data() {
			return {
				isChecked: false,
				huanyingdengluzhihuishuziwenlvtong: '',
				qingshuruyonghuming: '',
				qingshurumima: '',
				huanmeizhuce: '',
				dengluchenggong: '',
				yonghuming: '',
				quzhuce: '',
				mima: '',
				denglu: '',
				code:''
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
			let that = this
			uni.login({
				provider: 'weixin',
				success: function(loginRes) {
					that.code = loginRes.code
				},
			})
		},
		methods: {
			go_index(){
				uni.switchTab({
					url:"../index/index"
				})
			},
			onGotUserInfo() {
				var that = this;
				let code = that.code
				

				uni.getUserProfile({
					desc: "授权登录",
					provider: "weixin",
					success: function(res) {
						uni.getUserInfo({
							success: function(login_data) {
								uni.request({
									url: config.baseUrl +
										"/api/auth/wxLogin",
									data: {
										wxid: '2',
										code: code,
										encryptedData: login_data
											.encryptedData,
										iv: login_data.iv,
										rawData: res.rawData,
										signature: login_data
											.signature,
										headimgurl: res.userInfo
											.avatarUrl,
										nickname: res.userInfo
											.nickName,
									},
									method: 'POST',
									header: {
										"content-type": "application/x-www-form-urlencoded"
									},
									success: function(res) {
										uni.hideLoading();
										uni.showToast({
											title: res.data
												.msg,
											duration: 1500,
											icon: "none"
										});
										
										if (res.data.code == 1) {
											let token = res.data.data
												.token;
											let resToken = res.data.data
												.refresh_token;
											let expire = res.data.data
												.expire_in + res.data
												.time;
											uni.showToast({
												title: that
													.dengluchenggong,
												icon: 'none'
											})
											
											
											uni.setStorageSync(
												'wtoken', token
											);
											uni.setStorageSync(
												'retoken',
												resToken);
											uni.setStorageSync(
												'expire',
												expire);
											uni.switchTab({
												url: '../index/index'
											})
										} else {
											uni.showToast({
												title: res.data
													.msg,
												icon: 'none'
											})
										}
									},
									fail: function(data) {
										uni.hideLoading();
										uni.showToast({
											title: '网络连接超时',
											icon: 'none'
										})
									},
								})
							}
						})
					},
				})

			},
		},

	}
</script>

<style lang='scss'>
	page {
		background: #fff;
	}

	.proto {
		display: flex;
		text-align: center;
		margin-left: 20%;
		margin-top: 40rpx;
	}

	.container {
		/*padding-top: 115px;*/
		position: relative;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background: #fff;
	}

	.wrapper {
		position: relative;
		z-index: 90;
		background: #fff;
		padding-bottom: 40upx;
		padding-top: 80upx;
	}

	.back-btn {
		position: absolute;
		left: 40upx;
		z-index: 9999;
		padding-top: var(--status-bar-height);
		top: 40upx;
		font-size: 40upx;
	}

	.left-top-sign {
		font-size: 120upx;
		position: relative;
		left: -16upx;
	}

	.right-top-sign {
		position: absolute;
		top: 80upx;
		right: -30upx;
		z-index: 95;

		&:before,
		&:after {
			display: block;
			content: "";
			width: 400upx;
			height: 80upx;
			background: #b4f3e2;
		}

		&:before {
			transform: rotate(50deg);
			border-radius: 0 50px 0 0;
		}

		&:after {
			position: absolute;
			right: -198upx;
			top: 0;
			transform: rotate(-50deg);
			border-radius: 50px 0 0 0;
			/* background: pink; */
		}
	}

	.left-bottom-sign {
		position: absolute;
		left: -270upx;
		bottom: -320upx;
		border: 100upx solid #d0d1fd;
		border-radius: 50%;
		padding: 180upx;
	}

	.welcome {
		position: relative;
		left: 50upx;
		top: -90upx;
		font-size: 46upx;
		color: #555;
		text-shadow: 1px 0px 1px rgba(0, 0, 0, .3);
	}

	.input-content {
		padding: 0 60upx;
	}

	.input-item {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		padding: 0 30upx;
		height: 120upx;
		border-radius: 4px;
		margin-bottom: 50upx;

		&:last-child {
			margin-bottom: 0;
		}

		.tit {
			height: 50upx;
			line-height: 56upx;
		}

		input {
			height: 60upx;
			width: 100%;
			background-color: #f8f6fc;
		}
	}

	.confirm-btn {
		z-index: 96;
		width: 630upx;
		height: 76upx;
		line-height: 76upx;
		border-radius: 50px;
		margin-top: 170upx;
		color: #fff;
		background: #fa436a;

		&:after {
			border-radius: 100px;
		}
	}

	.forget-section {
		text-align: center;
		padding-top: 40upx;
	}

	.register-section {
		position: absolute;
		left: 0;
		bottom: 50upx;
		width: 100%;
		text-align: center;

		text {
			margin-left: 10upx;
		}
	}

	.register-section2 {
		position: absolute;
		left: 0;
		bottom: 100upx;
		width: 100%;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.weixin {
			width: 96rpx;
			height: 96rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}
	}

	.section_verify {
		width: 100%;
		height: 65px;
		margin: 20upx auto;
		padding-left: 10px;
		background: #f8f6fc;
		border-radius: 10upx;
		position: relative;
		top: 5px;
		line-height: 65px;
	}

	.verifyCodeText {
		width: 90px;
		float: left;
		background: #f8f6fc;
		height: 65px;
		line-height: 65px;
	}

	.verifyCodeImg {
		width: 50%;
		height: 65px;
		float: right;
	}

	.header {
		margin: 300rpx auto 90rpx auto;
		text-align: center;
		width: 100%;
		min-height: 18rpx;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}

	.header .logo_img {
		width: 220rpx;
		height: 220rpx;
		margin: auto;
		border-radius: 50%;
		background-repeat: no-repeat;
		background-position: center;
	}

	.header .logo_img image {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.content {
		color: #333;
		text-align: center;
		font-size: 32rpx;
		line-height: 1.8em;
	}

	.bottom {
		width: 90%;
		height: 90rpx;
		margin: 90rpx auto 0;
		background: #af4430;
		color: #fff;
		border-radius: 6rpx;
	}

	.bgclass {
		height: 100%;
		width: 100%;
	}

	.all {
		width: 100%;
		height: 100%;
		z-index: 99;
		background: rgba(0, 0, 0, 0.5);
		position: fixed;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.phone {
		width: 75%;
		height: 400rpx;
		background: rgba(255, 255, 255, 1);
		border-radius: 10rpx;
		z-index: 100;
	}

	.logo {
		width: 130rpx;
		height: 120rpx;
		margin-top: 30rpx;
	}

	.error {
		width: 55rpx;
		height: 55rpx;
		position: absolute;
		right: 25rpx;
		top: 15rpx;
	}

	.wrap {
		position: relative;
		align-items: center;
		display: flex;
		justify-content: center;
		flex-direction: column;
		height: 400rpx;
	}

	.phoneButton button {
		margin-top: 50rpx;
		background: #9de27d;
	}
</style>
