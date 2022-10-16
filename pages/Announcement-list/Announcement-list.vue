<template>
	<view class="Announcement-list">
		<view class="top">
			<view class="district" @click="hierarchy">
				<view>{{quyu}}</view>
				<view class="top_img">
					<image src="../../static/ic_drop-down.png"></image>
				</view>
			</view>
		</view>
		<view class="Announcement-list-content" v-if="notices.length!=0">
			<view class="list-content-item" @click="Announcementdetails(item)" v-for="(item,index) in notices">
				<view class="content-item-title">
					{{item.title}}
				</view>
				<view class="content-item-summary">
					{{item.summary}}
				</view>
				<view class="content-item-time">
					
				</view>
				<view class="line">
					{{item.create_time}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {quyu:'',
				notices:[],
				area:'1',
				id:''
			}
		},
		methods: {
			Announcementdetails(item){
				uni.navigateTo({
					url:'../Announcement-list-details/Announcement-list-details?id='+item.id
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
			let id=e.id
			
			let area = 1
			
			if (e.area == 'undefined' || e.area == undefined || e.area == '' || e.area == null) {
				if (uni.getStorageSync('area')) {
					area = uni.getStorageSync('area')
				}
			}else{
				area = e.area
			}
			this.$request('/api/common/notices',{
				count:'100',
				area:area
			},'post',{}).then(res=>{
				
				
				if (res.code ==1) {
					this.notices = res.data.lists
					
				}
			});
		}
	}
</script>

<style>
	.Announcement-list-content{
		
		width: 100%;
		height: 300rpx;
		padding: 0rpx 30rpx;
	}
	.list-content-item{
		width: 100%;
		
		margin-top: 20rpx;
	}
	.content-item-title{
		color: rgba(16, 16, 16, 100);
		font-size: 32rpx;
		font-family: PingFangSC-regular;
	}
	.content-item-summary{
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
		margin-top: 20rpx;
	}
	.line{
		margin-top: 20rpx;
		
		text-align: right;
		padding: 30rpx 0rpx;
		color:rgba(200,200,200,0.75) ;
		border-bottom:1rpx solid rgba(200,200,200,0.75);
	}
.top {
		display: flex;
		justify-content: space-between;
		padding: 20rpx 26rpx 20rpx 30rpx;
		border-top: 1rpx solid rgba(200, 200, 200, 0.75);
		border-bottom: 1rpx solid rgba(200, 200, 200, 0.75);
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

	
</style>
