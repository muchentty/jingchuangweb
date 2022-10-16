<template>
	<view class="participation">
		<view class="top">
			<view class="district" @click="hierarchy">
				<view>{{quyu}}</view>
				<view class="top_img">
					<image src="../../static/ic_drop-down.png"></image>
				</view>
			</view>
			<view class="district"  >
				
			</view>
			<view class="district">

			</view>
			<view class="district">

			</view>
		</view>
		<view class="participation-content">
			<view class="participation-content-item" @click="participationdetails(items)" v-for="items in race.lists">
				<view class="participation-content-item-img">
					<image :src="items.cover"></image>
				</view>
				<view class="participation-content-item-txt">
					<text class="participation-content-item-txt1">{{items.title}}</text>
					<br />
					<text class="participation-content-item-txt2">{{items.start_time}}-{{items.end_time}}</text>
				</view>
				<view class="participation-content-item-icon">
					<view class="item-icon1">
						<image src="../../static/ic_eys.png"></image>
						<text>{{items.views}}</text>
					</view>
					<view class="item-icon2">
						<image src="../../static/ic_fabulous.png"></image>
						<text>{{items.digg}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {quyu:'',
				race: [],
				area:'1',
			}
		},
		methods: {
			participationdetails(item) {
				uni.navigateTo({
					url: '../participation-details/participation-details?id=' + item.id
				})
			},
			hierarchy(){
				uni.navigateTo({
					url:'../hierarchy/hierarchy'
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
			this.$request('/api/race/get_list',{
				area: this.area,
			},'post',{}).then(res=>{
				
				if (res.code === 1) {
					this.race = res.data;
				}
			})
		}
	}
</script>

<style>
	.top {
		display: flex;
		justify-content: space-between;
		
		border-bottom: 1rpx solid rgba(200, 200, 200, 0.75);
		border-top: 1rpx solid rgba(200, 200, 200, 0.75);
		padding: 10px 15px;
		

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

	
	.participation-content {
		
	}

	.participation-content-item {
		
		padding: 22rpx 30rpx 28rpx 30rpx;
		border-bottom: 1rpx solid rgba(200, 200, 200, 0.75);
		border-top: 1rpx solid rgba(200, 200, 200, 0.75);
		margin-bottom: 20rpx;
	}

	.participation-content-item-img image {
		width: 100%;
		height: 344rpx;
		border-radius: 5rpx;
		margin-bottom: 20rpx;
	}

	.participation-content-item-icon image {
		position: relative;
		top: 5rpx;
	}

	.item-icon1 image {
		width: 35rpx;
		height: 35rpx;
	}

	.item-icon2 image {
		width: 35rpx;
		height: 35rpx;
	}

	.item-icon3 image {
		width: 35rpx;
		height: 35rpx;
	}

	.item-icon1,
	.item-icon2,
	.item-icon3 text {
		margin-left: 6rpx;
	}

	.participation-content-item-icon {
		display: flex;
		justify-content: space-between;
		margin-top: 22rpx;
		
	}

	.participation-content-item-txt1 {
		
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
	}

	.participation-content-item-txt2 {
		
		
		color: rgba(102, 102, 102, 100);
		font-size: 24rpx;
		text-align: left;
		font-family: PingFangSC-regular;
	}
</style>
