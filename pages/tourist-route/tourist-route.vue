<template>
	<view class="Tourist-route">
		<view class="top">
			<view class="district" @click="hierarchy">
				<view>{{quyu}}</view>
				<view class="top_img">
					<image src="../../static/ic_drop-down.png"></image>
				</view>
			</view>
		</view>
		
		<view class="Tourist-route-content">
			<view class="Tourist-route-content-item" @click="daytrip(item)" v-for="item in travel.lists">
				<view class="Tourist-item-img">
					<image :src="item.cover"></image>
				</view>
				<view class="Tourist-item-txt">
					<view class="Tourist-item-txt-left">
						{{item.title}}
					</view>
					<view class="Tourist-item-txt-right">
						<view class="txt-right-left">
							<image src="../../static/ic_eys.png" mode=""></image>
							<text></text>
						</view>
						<view class="txt-right-right">
							<image src="../../static/comment.png" mode=""></image>
							<text></text>
						</view>
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
				travel:[],
				area:'1'
			}
		},
		methods: {
			daytrip(item){
				uni.navigateTo({
					url:'../tourist-day-trip/tourist-day-trip?id=' +item.id
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
			this.$request('/api/venue/get_travel_list',{
				area:this.area,
				page:'1',
				pagesize:'10'
			},'post',{}).then(res=>{
				if (res.code ==1) {
					this.travel = res.data
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
		padding: 11rpx 30rpx;
		font-size: 28rpx;
		
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
	.Tourist-item-img image{
		width: 100%;
		height: 422rpx;
		border-radius: 5rpx 5rpx 0rpx 0rpx;
	}
	.Tourist-item-txt{
		display: flex;
		justify-content: space-between;
		padding: 0rpx 30rpx;
		width: 100%;
		height: 56rpx;
		line-height: 56rpx;
		position: absolute;
		bottom: 0rpx;
		background-color: rgba(32, 32, 32,0.5);
		
	}
	.Tourist-item-txt-left{
		color: #FFFFFF;
		font-size: 24rpx;
		font-family: PingFangSC-regular;
	}
	.Tourist-item-txt-right{
		display: flex;
		justify-content: flex-start;
	}
	.Tourist-route-content-item{
		/* width: 100%; */
		height: 422rpx;
		border-radius: 5rpx;
		border: 1rpx solid rgba(187, 187, 187, 100);
		margin-bottom: 20rpx;
		position: relative;
	}
	.Tourist-item-txt-right image{
		width: 26rpx;
		height: 26rpx;
		margin-right: 6rpx;
		color: white;
	}
	.txt-right-right{
		margin-left: 20rpx;
		
	}
	.Tourist-item-txt-right text{
		color: #FFFFFF;
		font-size: 18rpx;
		font-family: PingFangSC-regular;
	}
</style>
