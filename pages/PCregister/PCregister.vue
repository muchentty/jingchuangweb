<template>
	<view>
		<view class="login">
			<view class="login-content">
				<view class="login-top">
					<view class="login-top-item">
						<view class="login-top-left">
							<image src="../../static/logo.png" mode=""></image>
						</view>
						<view class="login-top-right">
							文化泉州
						</view>
					</view>
				</view>
				<view class="login-fill">
					<view class="login-fill-content">
						<view class="fill-content-title">
							用户注册
						</view>
						<view class="fill-content-input">
							<view class="input-txt">
								用户名
							</view>
							<view class="input-fill">
								<input type="text" value="" placeholder="请输入用户名(数字+大小写字母)" />
							</view>
						</view>
						<view class="fill-content-input">
							<view class="input-txt">
								密码
							</view>
							<view class="input-fill">
								<input type="text" value="" placeholder="输入密码" />
							</view>
						</view>
						<view class="fill-content-input">
							<view class="input-txt">
								确认密码
							</view>
							<view class="input-fill">
								<input type="text" value="" placeholder="再次输入密码" />
							</view>
						</view>
						<view class="fill-content-input">
							<view class="input-txt">
								邮箱
							</view>
							<view class="input-fill">
								<input type="text" value="" placeholder="请输入邮箱" />
							</view>
						</view>
						<view class="fill-content-input">
							<view class="input-txt">
								姓名
							</view>
							<view class="input-fill">
								<input type="text" value="" placeholder="请输入姓名" />
							</view>
						</view>
						<view class="fill-content-input">
							<view class="input-txt">
								手机号
							</view>
							<view class="input-fill">
								<input type="text" value="" placeholder="请输入手机号" />
							</view>
						</view>
						<view class="fill-content-input">
							<view class="input-txt">
								验证码
							</view>
							<view class="input-fill1">
								<input type="text" value="" placeholder="请输入验证码" />
								<text>获取验证码</text>
							</view>
						</view>
						<view class="input-bottom-button">
							<button type="default">注册</button>
						</view>
						<view class="fill-bottom-right">
							<view class="left1">
								
							</view>
							<view class="right1">
								<text class="right1-txtleft">已有账号去</text>
								<text class="right1-txtright" @click="gologin">登录</text>
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
				
			}
		},
		methods: {
			gologin(){
				uni.navigateTo({
					url:'../PClogin/PClogin'
				})
			}
		}
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
	padding-top: 20rpx;
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
	padding: 0rpx 200rpx;
	margin-top: 30rpx;
	width: 100%;
	height: 700rpx;
	/* border: 1rpx solid rgba(200,200,200,0.75); */
	/* background-color: #FFFFFF; */
	display: flex;
}
.login-fill-content{
	width: 100%;
	border-radius: 3rpx;
	border: 1rpx solid rgba(200,200,200,0.75);
	/* padding: 30rpx; */
	padding: 30rpx 170rpx;
	background-color: #FFFFFF;
}
.fill-content-title{
	text-align: center;
	font-size: 30rpx;
	color: #CF282B;
}
.fill-content-input{
	margin-top: 20rpx;
	/* border: 1rpx solid red; */
	display: flex;
	height: 48rpx;
	line-height: 48rpx;
	margin-bottom: 20rpx;
	margin-left: 30rpx;
}
.input-txt{
	width: 100rpx;
	font-size: 20rpx;
	/* margin-right: 20rpx; */
}
.input-fill input{
	text-indent: 10rpx;
	font-size: 18rpx;
	width: 300rpx;
	height: 48rpx;
	border-radius: 5rpx;
	line-height: 48rpx;
	border: 1rpx solid rgba(200,200,200,0.75);
}
.input-fill1 input{
	text-indent: 10rpx;
	font-size: 18rpx;
	width: 200rpx;
	height: 48rpx;
	border-radius: 5rpx;
	line-height: 48rpx;
	border: 1rpx solid rgba(200,200,200,0.75);
}
.input-fill,.input-fill1{
	display: flex;
}
.input-fill1 text{
	margin-left: 10rpx;
	color: #CF282B;
	font-size: 18rpx;
}
.input-bottom-button button{
	width: 400rpx;
	height: 60rpx;
	line-height: 60rpx;
	background-color: #CF282B;
	color: #FFFFFF;
	margin-top: 30rpx;
}
.fill-bottom-right{
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-top: 10rpx;
}
.right1{
	font-size: 16rpx;
	margin-right: 40rpx;
}
.right1-txtleft{
	color: #999999;
	margin-right: 5rpx;
}
.right1-txtright{
	color:#CF282B ;
}
</style>
