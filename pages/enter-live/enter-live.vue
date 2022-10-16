<template>
	<view class="enter-live">
		<view class="top">
			<view class="district" @click="hierarchy">
				<view>{{quyu}}</view>
				<view class="top_img">
					<image src="../../static/ic_drop-down.png"></image>
				</view>
			</view>
		</view>
		<view class="enter-live-content" v-for="(item,index) in liveList">
			<view class="live-item" @click="live(item)">
				<view class="live-item-img">
					<image :src="item.cover" mode=""></image>
				</view>
				<view class="live-item-txt">
					{{item.title}}
				</view>
				<view class="live-item-time">
					{{item.create_time}}
				</view>
				<view class="live-item-state">
					{{item.status}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {quyu:'',
				area:'',
				
				liveList:[],
				id:''
			}
		},
		methods: {
			hierarchy() {
				uni.navigateTo({
					url: '../hierarchy/hierarchy?area=' + this.area
				})
			},
			live(item){
				uni.navigateTo({
					url:'../live/live?id='+item.id + "&area=" + this.area
				})
			}
		},
		onShow(e) {this.quyu = this.$lang.quyu[uni.getStorageSync('lang')];},
		onLoad(e) {this.quyu = this.$lang.quyu[uni.getStorageSync('lang')];
			// if(uni.getStorageSync('area')){
			// 	this.area = uni.getStorageSync('area')
			// }
			if (e.area == 'undefined' || e.area == undefined || e.area == '' || e.area == null) {
				if (uni.getStorageSync('area')) {
					this.area = uni.getStorageSync('area')
				}
			}else{
				this.area = e.area
				uni.setStorageSync('area',this.area)
			}
			this.$request('/api/live/get_list',{
				area:this.area
			},'post',{}).then(res=>{
				if(res.code==1){
					
					
					this.liveList=res.data.lists
				}
			})
		}
	}
</script>

<style>
	.top {
		display: flex;
		justify-content: space-between;
		padding: 20rpx 26rpx 20rpx 30rpx;
		border-bottom: 1rpx solid rgba(200, 200, 200, 0.75);
		border-top: 1rpx solid rgba(200, 200, 200, 0.75);
		
		

	}

	.district {
		display: flex;
	}

	.top_img {
		width: 20rpx;
		height: 16rpx;
		margin-left: 10rpx;
	}

	.top_img image {
		width: 100%;
		height: 100%;
	}
.enter-live-content{
	padding: 30rpx 30rpx;
	
}
.live-item{
	width: 100%;
	/* height: 494rpx; */
	border-radius: 20rpx;
	box-shadow: 0rpx 4rpx 12rpx 0rpx rgba(0, 0, 0, 0.4);
	margin-bottom: 20rpx;
}
.live-item-img image{
	width: 100%;
	height: 372rpx;
	border-radius: 20rpx 20rpx 0rpx 0rpx;
}
.live-item-txt{
	color: #101010 ;
	font-size: 28rpx;
	font-family: PingFangSC-regular;
	margin:20rpx 10rpx 10rpx 30rpx;
}
.live-item-time{
	color: rgba(153, 153, 153, 100);
	font-size: 24rpx;
	
	font-family: PingFangSC-regular;
	margin-left: 30rpx;
}
.live-item-state{
	position: relative;
	bottom: 450rpx;
	width: 98rpx;
	height: 64rpx;
	line-height: 64rpx;
	border-radius: 0px 30rpx 30rpx 0px;
	background-color: rgba(84, 151, 203, 100);
	text-align: center;
	color: rgba(255, 255, 255, 100);
	font-size: 22rpx;
	
	font-family: PingFangSC-regular;
}
</style>
