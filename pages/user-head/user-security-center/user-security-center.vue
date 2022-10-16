<template>
	<view class="user-security-center">
		<view class="security-center-top">
			<view class="security-center-item" @click="password">
				<view class="center-item-left">
					<view class="img">
						<image src="../../static/mima.png"></image>
					</view>
					<view class="txt">
						<text>{{xiugaimima}}</text>
					</view>
					
				</view>
				<view class="center-item-right">
					<image src="../../static/ic_ri.png"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {xiugaimima:'',
				
			}
		},
		methods: {
			password(){
				uni.navigateTo({
					url:'../user-password/user-password'
				})
			},
			userphone(){
				uni.navigateTo({
					url:'../user-phone/user-phone'
				})
			}
		},
		onShow() {
			this.xiugaimima = this.$lang.xiugaimima[uni.getStorageSync('lang')];
		}
	}
</script>

<style>
.user-security-center{
	height: 100%;
	background-color: #F9F9F9 ;
}
.center-item-left{
	display: flex;
}
.img image{
	width: 44rpx;
	height: 44rpx;
	margin-right: 30rpx;
	margin-top: 30rpx;
}
.center-item-right image{
	width: 48rpx;
	height: 48rpx;
	margin-top: 30rpx;
}
.security-center-item{
	height: 112rpx;
	line-height: 112rpx;
	padding:0rpx 30rpx ;
	display: flex;
	justify-content: space-between;
	background-color:#FFFFFF ;
	border-bottom: 1rpx solid rgba(200,200,200,0.75);
}
</style>
