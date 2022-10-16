<template>
	<view class="participation-Production-details">
		<view class="Production-details-top">
			<image :src="classify.pics[0]"></image>
		</view>
		<view class="Production-details-content">
			<view class="details-content-item">
				<view class="content-item-time">
					{{shangchuanshijian}}：{{classify.create_time}}
				</view>
				<view class="content-item-introduction">
					{{saishijieshao}}：
				</view>
				<view class="content-item-main">
					{{classify.content}}
				</view>
			</view>
		</view>
	<view class="Production-details-button">
		<button type="default">{{lijitoupiao}}</button>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {shangchuanshijian:'',saishijieshao:'',lijitoupiao:'',
				classify:''
			}
		},
		methods: {
			
		},
		onShow(e) {this.shangchuanshijian = this.$lang.shangchuanshijian[uni.getStorageSync('lang')];this.saishijieshao = this.$lang.saishijieshao[uni.getStorageSync('lang')];this.lijitoupiao = this.$lang.lijitoupiao[uni.getStorageSync('lang')];},
		onLoad(e) {this.shangchuanshijian = this.$lang.shangchuanshijian[uni.getStorageSync('lang')];this.saishijieshao = this.$lang.saishijieshao[uni.getStorageSync('lang')];this.lijitoupiao = this.$lang.lijitoupiao[uni.getStorageSync('lang')];
			
			let id = e.id;
			this.$request('/api/race/get_works_detail',{
				id:id
			},'post',{}).then(res=>{
				
				
				if (res.code == 1) {
					this.classify = res.data.works
					
				}
			})
		}
	}
</script>

<style>
.Production-details-top image{
	width: 750rpx;
	height: 462rpx;
}
.Production-details-content{
	padding: 26rpx 30rpx 0rpx 30rpx;
}
.content-item-txt1{
	color: rgba(16, 16, 16, 100);
	font-size: 36rpx;
	font-family: PingFangSC-regular;
	margin-bottom: 22rpx;
}
.content-item-time{
	color: rgba(102, 102, 102, 100);
	font-size: 28rpx;
	font-family: PingFangSC-regular;
	margin-bottom: 30rpx;
}
.content-item-introduction{
	color: rgba(16, 16, 16, 100);
	font-size: 28rpx;
	font-family: PingFangSC-regular;
	margin-bottom: 18rpx;
}
.content-item-main{
	color: rgba(153, 153, 153, 100);
	font-size: 28rpx;
	font-family: PingFangSC-regular;
}
.Production-details-button{
	width: 100%;
	height: 90rpx;
	position: fixed;
	bottom: 0;
	
	border-top: 1rpx solid rgba(200,200,200,0.75);
}
.Production-details-button button{
	text-align: center;
	height: 90rpx;
	line-height: 90rpx;
	width: 238rpx;
	margin-right: 0rpx;
	background-color: rgba(99, 180, 210, 100);
	color: rgba(255, 255, 255, 100);
	font-size: 28rpx;
	font-family: Microsoft Yahei;
	border: 1rpx solid rgba(237, 237, 237, 100);
}
</style>
