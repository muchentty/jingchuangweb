<template>
	<view class="tourist-attraction">
		<view class="top">
			<view class="district" @click="hierarchy">
				<view>{{quyu}}</view>
				<view class="top_img">
					<image src="../../static/ic_drop-down.png"></image>
				</view>
			</view>
			<view class="district" @click.stop="ShowHidden = !ShowHidden">
				<view>{{title}}</view>
				<view class="top_img">
					<image src="../../static/ic_drop-down.png"></image>
				</view>
			</view>
			<view class="district">
				<view></view>
				<view class="top_img">

				</view>
			</view>
		</view>
		<view class="tourist-attraction-content">
			<view class="tourist-attraction-content-item" v-for="item in venue.lists" @click="touristAD(item)">
				<view class="tourist-attraction-content-item-img">
					<image :src="item.cover"></image>
				</view>
				<view class="tourist-attraction-content-item-txt">
					<view class="content-item-txt-title">{{item.name}}</view>
					<view class="content-item-txt-titles">{{item.remark}}</view>
				</view>
			</view>
		</view>

		<view class="arrivalNavigation" v-if="ShowHidden">
			<view class="sideNavigation">
				<nav>
					<ul v-for="(item,index) in classify">
						<li @click="select(item)">{{item.title}}</li>
					</ul>
				</nav>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lvyoujingdian: '',
				quyu: '',
				classify: [],
				ShowHidden: false,
				title: '',
				c_id: '6',
				venue: [],
				area: '1'
			}
		},
		methods: {
			touristAD(item) {
				uni.navigateTo({
					url: '../tourist-attraction-details/tourist-attraction-details?id=' + item.id
				})
			},
			select(item) {
				this.title = item.title;
				this.ShowHidden = !this.ShowHidden;
				this.c_id = item.id;
				this.$request('/api/venue/get_list', {
					area: this.area,
					cate: this.c_id,
					pagesize: '10',
					page: '1'
				}, 'post', {}).then(res => {


					this.venue = res.data

				})
			},
			hierarchy() {
				uni.navigateTo({
					url: '../hierarchy/hierarchy'
				})
			}
		},
		onShow(e) {
			this.lvyoujingdian = this.$lang.lvyoujingdian[uni.getStorageSync('lang')];
			this.quyu = this.$lang.quyu[uni.getStorageSync('lang')];
		},
		onLoad(e) {
			this.lvyoujingdian = this.$lang.lvyoujingdian[uni.getStorageSync('lang')];
			this.quyu = this.$lang.quyu[uni.getStorageSync('lang')];
			this.title = this.lvyoujingdian
			// if(uni.getStorageSync('area')){
			// 	this.area = uni.getStorageSync('area')
			// }

			if (e.area == 'undefined' || e.area == undefined || e.area == '' || e.area == null) {
				if (uni.getStorageSync('area')) {
					this.area = uni.getStorageSync('area')
				}
			} else {
				this.area = e.area
				uni.setStorageSync('area', this.area)
			}
			this.$request('/api/venue/get_category', {

			}, 'post', {}).then(res => {


				this.classify = res.data.lists

			})

			this.$request('/api/venue/get_list', {
				area: this.area,
				cate: this.c_id,
				pagesize: '10',
				page: '1'
			}, 'post', {}).then(res => {


				this.venue = res.data

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
		padding: 20rpx 30rpx;
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

	.tourist-attraction-content-item-img image {
		width: 220rpx;
		height: 150rpx;
		border-radius: 5rpx;
	}

	.tourist-attraction-content-item {
		display: flex;
		padding: 16rpx 30rpx 26rpx 30rpx;
		margin-bottom: 20rpx;

		border-bottom: 20rpx solid rgba(247, 247, 247, 100);
		;

	}

	.tourist-attraction-content-item-txt {
		margin-left: 18rpx;
		height: 150rpx;
		line-height: 35rpx;
	}

	.content-item-txt-title {
		overflow: hidden;
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
	}

	.content-item-txt-titles {
		height: 134rpx;
		-webkit-line-clamp: 4;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		overflow: hidden;
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
	}

	.content-item-txt-A {
		color: rgba(255, 127, 34, 100);
		font-size: 24rpx;
		font-family: PingFangSC-regular;
	}

	.content-item-txt-details {
		color: rgba(102, 102, 102, 100);
		font-size: 24rpx;
		font-family: PingFangSC-regular;
	}

	.content-item-txt-price {
		color: rgba(255, 127, 34, 100);
		font-size: 24rpx;
		font-family: PingFangSC-regular;

	}

	.content-item-txt-price1 {
		font-size: 24rpx;
		font-family: PingFangSC-regular;
	}


	.arrivalNavigation {
		width: 400rpx;
		position: absolute;
		right: 150rpx;
		top: 80rpx;
		z-index: 99;

	}

	.sideNavigation {
		width: 300rpx;
		background-color: #202020;
		color: #eee;
		border-radius: 10rpx;
	}

	.sideNavigation nav ul li {
		height: 85rpx;
		margin-left: 23rpx;
		line-height: 85rpx;
		font-size: 25rpx;
		list-style: none;
	}

	.liBottomBorder {
		border: 0.1rpx solid #373737;
	}
</style>
