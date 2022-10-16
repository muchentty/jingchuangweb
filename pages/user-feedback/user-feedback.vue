<template>
	<view class="user-feedback">
		<view class="user-feedback-input">
			<input type="text" value="" :placeholder=" runinduiwenhuaguanyouyiwen+'，'+huanyingfankui"/>
			<text>0/200{{zi}}</text>
		</view>
		<view class="user-feedback-button">
			<button type="default">{{queren}}</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {runinduiwenhuaguanyouyiwen:'',huanyingfankui:'',queren:'',zi:'',
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	/* .all{
		background-color:#F9F9F9 ;
	} */
	.user-feedback{
		height: 100%;
		background-color:#F9F9F9  ;
	}
.user-feedback-input{
	height: 420rpx;
	width: 100%;
	border:30rpx solid #FFFFFF ;
	padding: 20rpx 0rpx 0rpx 0rpx;
	
}
.user-feedback-input input{
	margin-left: 40rpx;
}
.user-feedback-input text{
	color: rgba(153, 153, 153, 100);
	font-size: 24rpx;
	font-family: PingFangSC-regular;
	position: relative;
	top: 250rpx;
	left: 580rpx;
}
.user-feedback-button{
	width: 100%;
	margin-top: 500rpx;
}
.user-feedback-button button{
	background-color: rgba(99, 180, 210, 100);
	color: rgba(255, 255, 255, 100);
	font-size: 36rpx;
	text-align: center;
	font-family: Arial;
}
</style>
