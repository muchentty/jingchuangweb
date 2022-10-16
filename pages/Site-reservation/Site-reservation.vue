<template>
	<view>
		<router></router>
		<view class="site">
			<view class="all-address">
				您所在的位置：首页>{{name}}
			</view>
			<view class="all">
				<view class="all-content">
					<view class="all-content-top">
						<view class="all-content-top-left">
							<image src="../../static/anquan.png"></image>
						</view>
						<view class="all-content-top-right">
							<view class="top-right-title">
								刺桐寻遗，文旅畅游——泉州文化云邀您打卡泉州非遗文化
							</view>
							<view class="top-right-address">
								地址：泉州中心市区各大文旅场馆（详见详情）
							</view>
							<view class="top-right-phone">
								电话：123456789
							</view>
						</view>
					</view>
					<view class="fill-input">
						<view class="fill-input-item">
							<view class="item-txt1">
								<text>姓名</text>
							</view>
							<view class="item-input">
								<input type="text" value="" placeholder="请输入姓名" />
							</view>
						</view>
						<view class="fill-input-item">
							<view class="item-txt2">
								<text>开始时间</text>
							</view>
							<view class="item-input">
								<input type="text" value="" placeholder="请选择日期" />
							</view>
						</view>
						<view class="fill-input-item">
							<view class="item-txt3">
								<text>结束时间</text>
							</view>
							<view class="item-input">
								<input type="text" value="" placeholder="请选择日期" />
							</view>
						</view>
						<view class="fill-input-item">
							<view class="item-txt4">
								<text>手机号</text>
							</view>
							<view class="item-input">
								<input type="text" value="" placeholder="请选择日期" />
							</view>
						</view>
						<view class="fill-input-item">
							<view class="item-txt5">
								<text>预约人数</text>
							</view>
							<view class="item-input">
								<input type="text" value="" placeholder="请选择日期" />
							</view>
						</view>
					    <view class="fill-button">
					    	<button type="default">确定</button>
					    </view>
					</view>
				</view>
			</view>

		</view>
		<view class="solid">
			
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

		}
	}
</script>

<style>
	.site {
		height: 100%;
		background-color: #F7F7F7;
	}
	.solid{
		height: 100rpx;
		background-color: #F7F7F7;
	}
	.all-address {
		width: 1200rpx;
		margin-left: 170rpx;
		/* border: 1rpx solid red; */
		padding-top: 50rpx;
		font-size: 20rpx;
		margin-bottom: 20rpx;
	}

	.all {
		padding: 0rpx 170rpx;
		
	}

	.all-content {
		/* border: 1rpx solid rgba(200,200,200,0.75); */
		background-color: #FFFFFF;
		padding: 20rpx 170rpx;
	}

	.all-content-top-left {
		/* width: 300rpx;
		height: 215rpx;
		border: 1rpx solid yellow; */
	}

	.all-content-top-left image {
		margin-left: 80rpx;
		margin-right: 28rpx;
		width: 300rpx;
		height: 215rpx;
		/* border: 1rpx solid yellow; */
	}

	.all-content-top {
		width: 100%;
		height: 229rpx;
		border: 1rpx solid rgba(200,200,200,0.75);
		display: flex;
	}

	.top-right-title {
		color: #333333;
		font-size: 24rpx;
		font-weight: bold;
		overflow: hidden;
		font-weight: normal;
		margin-top: 30rpx;
	}

	.top-right-address {
		color: #333333;
		font-size: 18rpx;
		font-weight: bold;
		overflow: hidden;
		font-weight: normal;
		margin-top: 30rpx;
	}

	.top-right-phone {
		color: #333333;
		font-size: 18rpx;
		font-weight: bold;
		overflow: hidden;
		font-weight: normal;
		margin-top: 30rpx;
	}
	.fill-input{
		padding: 20rpx 20rpx;
		margin-top: 30rpx;
		border: 1rpx solid rgba(200,200,200,0.75);
	}
	.fill-input-item{
		/* border: 1rpx solid yellow; */
		display: flex;
		height: 48rpx;
		line-height: 48rpx;
		margin-bottom: 20rpx;
	}
	.fill-input-item input{
		
		width: 300rpx;
		height: 48rpx;
		border: 1rpx solid rgba(200,200,200,0.75);
		/* border-radius: 10rpx; */
	}
	.item-txt1{
		margin-right: 94rpx;
		font-size: 18rpx;
	}
	.item-txt2{
		margin-right: 58rpx;
		font-size: 18rpx;
	}
	.item-txt3{
		margin-right: 58rpx;
		font-size: 18rpx;
	}
	.item-txt4{
		margin-right: 76rpx;
		font-size: 18rpx;
	}
	.item-txt5{
		margin-right: 60rpx;
		font-size: 18rpx;
	}
	.fill-button button{
		width: 200rpx;
		height: 48rpx;
		background-color: #CF282B;
		color: #FFFFFF;
		margin-left: 0;
		margin-top: 80rpx;
		margin-bottom: 80rpx;
	}
</style>
