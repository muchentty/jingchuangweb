<template>
	<view class="gottickets">
		<view class="gottickets-top">
			<view class="gottickets-top-img">
				<image src="../../static/map.png" mode=""></image>
			</view>
			<view class="gottickets-top-txt">
				<text>{{qiangpiaochenggong}}</text>
			</view>
		</view>
		<view class="gottickets-content">
			<view class="gottickets-content-title">
				{{wenxintishi}}
			</view>
			<view class="gottickets-content-txt">
				<text>{{jinchangxuyaochushierweima}}</text>
				<br/>
				<text>{{qingdao}}：{{wode}}-{{huodongdingdanchakanjinchangerweima}}</text>
			</view>
		</view>
		<view class="gottickets-bottom" >
			<button type="default" @click="goback">
				<text>{{wancheng}}</text>
			</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {huodongdingdanchakanjinchangerweima:'',jinchangxuyaochushierweima:'',qiangpiaochenggong:'',wenxintishi:'',qingdao:'',wode:'',wancheng:'',

			}
		},
		methods: {
			goback(){
				uni.navigateTo({
					url:'../mien/mien'
				})
			}
		}
	}
</script>

<style>
	.gottickets-top {
		text-align: center;
		width: 100%;
		
		padding: 72rpx 30rpx;
	}

	.gottickets-top image {
		width: 318rpx;
		height: 318rpx;
	}

	.gottickets-top-txt text {
		/* left: 160rpx;
		top: 258rpx; */
		width: 56rpx;
		height: 20rpx;
		color: #101010;
		font-size: 14px;
		font-family: PingFangSC-regular;
	}
	.gottickets-content{
		padding: 0rpx 30rpx;
		
		margin-bottom: 212rpx;
	}
	.gottickets-content-title{
		width: 128rpx;
		color:#101010;
		font-size: 16rpx;
		font-family: PingFangSC-regular;
		margin-bottom: 22rpx;
	}
	.gottickets-content-txt{
		
		
		line-height: 36rpx;
		opacity: 0.54;
		color: rgba(51, 51, 51, 100);
		font-size: 12rpx;
		font-family: PingFangSC-regular;
	}
	.gottickets-bottom{
		height: 133rpx;
		
		position: fixed;
		width: 100%;
		bottom: 182rpx;
		
	}
	.gottickets-bottom button{
		width: 100%;
		height: 84rpx;
		
		text-align: center;
		background-color: #63B4D2;
		
	}
	.gottickets-bottom text{
		color: rgba(255, 255, 255, 100);
		font-size: 26rpx;
		font-family: Arial;
	}
</style>
