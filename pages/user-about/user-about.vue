<template>
	<view class="user-about">
		<view class="user-about-logo">
			<view class="about-logo">
				<image src="../../static/logo.png" mode=""></image>
			</view>
			<view class="user-about-txt">
				<view class="about-txt1">
					{{wenhuaguan}}
				</view>
				<view class="about-txt2">
					 {{banben}} {{ver}}
				</view>
			</view>
		</view>
		<view class="user-about-check">
			<view class="about-check-txt">
				{{jianchagengxin}}
			</view>
			<view class="about-check-img">
				<image src="../../static/ic_ri.png" mode=""></image>
			</view>
		</view>
		<view class="user-about-bottom">
			© 2021 {{wenhuaguan}}

		</view>
	</view>
</template>

<script>
	import config from 'utils/config.js'
	export default {
		data() {
			return {jianchagengxin:'',wenhuaguan:'',banben:'',ver:''
				
			}
		},
		methods: {
			
		},
		onLoad() {
			let that=this
			//#ifdef APP-PLUS
			plus.runtime.getProperty(plus.runtime.appid, function(inf) {
				that.ver = inf.version
			})
			//#endif
			//#ifndef APP-PLUS
			uni.request({
				//请求地址，设置为自己的服务器链接
				url: config.baseUrl + '/api/common/getAppVersion',
				//method: 'GET',  
				data: {},
				success: resMz => {
					that.ver = resMz.data.data.version
				}
			})
			//#endif
		},
		onShow() {
			this.jianchagengxin = this.$lang.jianchagengxin[uni.getStorageSync('lang')];
			this.wenhuaguan = this.$lang.wenhuaguan[uni.getStorageSync('lang')];
			this.banben = this.$lang.banben[uni.getStorageSync('lang')];
		}
	}
</script>

<style>
.user-about{
	height: 100%;
	background-color:#F9F9F9 ;
}
.user-about-logo{
	width: 200rpx;
	height: 200rpx;
	
	color: rgba(16, 16, 16, 100);
	font-size: 56rpx;
	
	border: 1px solid rgba(187, 187, 187, 100);
	border-radius: 50%;
	position: fixed;
	left: 40%;
	top: 188rpx;
	background-color:#FFFFFF ;
}
.about-logo image{
	font-size: 56rpx;
	text-align: center;
	margin-top: 30rpx;
	margin-left: 30rpx;
	width: 130rpx;
	height: 130rpx;
	/* border: 1rpx solid red; */
}
.about-txt1{
	color: rgba(102, 102, 102, 100);
	font-size: 28rpx;
	text-align: center;
	font-family: PingFangSC-regular;
}
.about-txt2{
	color: rgba(102, 102, 102, 100);
	font-size: 28rpx;
	text-align: center;
	font-family: PingFangSC-regular;
}
.user-about-txt{
	margin-top: 120rpx;
	line-height: 50rpx;
}
.user-about-check{
	width: 97%;
	height: 100rpx;
	padding:30rpx 30rpx ;
	
	display: flex;
	position: fixed;
	justify-content: space-between;
	top: 600rpx;
	left: 30rpx;
	background-color: #FFFFFF;
}
.about-check-img image{
	width: 48rpx;
	height: 48rpx;
}
.about-check-txt{
	color: rgba(28, 34, 42, 100);
	font-size: 28rpx;
	font-family: PingFangSC-regular;
}
.user-about-bottom{
	position: fixed;
	left: 40%;
	bottom: 40rpx;
	color: rgba(102, 102, 102, 100);
	font-size: 24rpx;
	text-align: center;
	font-family: PingFangSC-regular;
}
</style>
