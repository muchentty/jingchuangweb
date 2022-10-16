<template>
	<view class="activity-participation">
		<view class="activity-participation-content" v-for="item in activity.lists">
			<view class="activity-participation-content-item" @click="activitydetails(item)">
				<view class="activity-participation-img">
					<image :src="item.cover" mode=""></image>
				</view>
				<view class="activity-participation-txt">{{item.name}}</view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				quyu: '',
				area: '1',
				activity: []
			}
		},
		methods: {
			activitydetails(item) {
				uni.navigateTo({
					url: '../classDetail/classDetail?id=' + item.id + '&area=' + this.area
				})
			},
			hierarchy() {
				uni.navigateTo({
					url: '../hierarchy/hierarchy'
				})
			}
		},
		onShow() {
			this.quyu = this.$lang.quyu[uni.getStorageSync('lang')];
		},
		onLoad(e) {
			let id = e.id
			this.quyu = this.$lang.quyu[uni.getStorageSync('lang')];
			// if(uni.getStorageSync('area')){
			// 	this.area = uni.getStorageSync('area')
			// }
			if (e.area == 'undefined' || e.area == undefined || e.area == '' || e.area == null) {
				if (uni.getStorageSync('area')) {
					this.area = uni.getStorageSync('area')
				}
			} else {
				this.area = e.area
				uni.setStorageSync('area', e.area)
			}
			this.$request('/api/culture/get_list', {
				area: this.area,
				g_id:id
			}, 'post', {}).then(res => {

				if (res.code === 1) {
					this.activity = res.data;
				}
			})
		}
	}
</script>

<style>
	.top {
		display: flex;
		justify-content: space-between;
		margin: 20rpx 26rpx 20rpx 30rpx;
		border-bottom: 1rpx solid rgba(200, 200, 200, 0.75);
		border-top: 1rpx solid rgba(200, 200, 200, 0.75);
		padding: 10px 5px;


	}
	
	.activity-participation {
		margin-top: 30rpx;
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

	.activity-participation-solid {
		width: 690rpx;
		border: 1rpx solid rgba(200, 200, 200, 0.5);
		margin: 30rpx 0rpx;
	}

	.activity-participation-content {
		padding: 0rpx 30rpx;
	}

	.activity-participation-content-item {
		display: flex;
		border-bottom: 1rpx solid rgba(200, 200, 200, 0.55);
		align-items: center;
		padding: 20rpx;
		box-shadow: 2rpx 5rpx 6rpx 2rpx rgba(51, 51, 51, 0.21);
	}

	.activity-participation-img image {
		width: 180rpx;
		height: 110rpx;
		border-radius: 10rpx;
	}

	.activity-participation-txt {
		margin-left: 26rpx;
	}

	.activity-participation-txt1 {

		height: 27rpx;
		font-size: 28rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;
		line-height: 36rpx;

	}

	.activity-participation-txt2 {


		font-size: 22rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;


	}

	.activity-participation-txt3 {


		font-size: 22rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;

	}
</style>
