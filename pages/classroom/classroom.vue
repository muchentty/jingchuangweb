<template>
	<view class="activity-participation">
		<view class="top">
			<view class="district" @click="hierarchy">
				<view>{{quyu}}</view>
				<view class="top_img">
					<image src="../../static/ic_drop-down.png"></image>
				</view>
			</view>
			<view class="district">
				<view></view>
				<view class="top_img">

				</view>
			</view>
			<view class="district">
				<view></view>
				<view class="top_img">

				</view>
			</view>
			<view class="district">
				<view></view>
				<view class="top_img">

				</view>
			</view>
		</view>
		<!-- <view class="activity-participation-content" v-for="item in activity.lists">
			<view class="activity-participation-content-item" @click="activitydetails(item)">
				<view class="activity-participation-img">
					<image :src="item.cover" mode=""></image>
				</view>
				<view class="activity-participation-txt">
					<text class="activity-participation-txt1">{{item.name}}</text>
				</view>
			</view>
		</view> -->
		<view v-if="activity.lists">
			<view class="content">
				<view class="content-item " @click="activitydetails(items)" v-for="(items,index) in activity.lists">
					<view class="content-img">
						<image :src="items.cover"></image>
					</view>
					<view class="author">
						<text>{{items.teacher}}</text>
						<text></text>
					</view>
					<view class="content-text">
						{{items.name}}
					</view>
				</view>
				<view class="item"></view>
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
					url: '../classDetail/classDetail?id=' + item.id
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
			this.$request('/api/culture/get_category', {
				area: this.area
			}, 'post', {}).then(res => {

				if (res.code === 1) {
					this.activity = res.data;
					console.log(this.activity)
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
		border-bottom: 1rpx solid rgba(200, 200, 200, 0.75);
	}

	.activity-participation-img image {
		width: 280rpx;
		height: 190rpx;
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

	.content {

		height: 100%;
		background: #FFFFFF;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		padding-left: 10rpx;
		padding-right: 10rpx;
	}

	.content-item {
		margin-top: 20rpx;
		width: 340rpx;

		padding-bottom: 10rpx;
		background: #FFFFFF;
		box-shadow: 0px 5rpx 7rpx 0rpx rgba(51, 51, 51, 0.21);
		border-radius: 10rpx;
		margin-left: 5rpx;
		position: relative;
	}

	.item {
		width: 340rpx;
	}

	.content-img {
		width: 340rpx;
		height: 260rpx;
		border-radius: 10rpx 10rpx 0px 0px;
		margin-bottom: 20rpx;
	}

	.content-img image {
		width: 100%;
		height: 100%;
		border-radius: 10rpx 10rpx 0px 0px;
	}

	.content-text {
		margin-bottom: 14rpx;
		margin-left: 16rpx;
		width: 306rpx;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		-o-text-overflow: ellipsis;
		/* height: 27rpx; */
		font-size: 28rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;

	}

	.text-item2 {
		margin-left: 22rpx;

		width: 212rpx;
		height: 21rpx;
		font-size: 22rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #999999;
	}

	.author {
		position: absolute;
		bottom: 70rpx;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.4);
		font-size: 26rpx;
		display: flex;
		justify-content: space-between;
		padding: 6rpx 10rpx;
		height: 46rpx;
		color: #FFFFFF;
	}
</style>
