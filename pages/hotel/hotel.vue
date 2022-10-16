<template>
	<view class="hotel">
		<view class="top">
			<view class="district" @click.stop="ShowHidden = !ShowHidden">
				<view>{{title}}</view>
				<view class="top_img">
					<image src="../../static/ic_drop-down.png"></image>
				</view>
			</view>
			<view class="district" @click.stop="ShowHidden = !ShowHidden">
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
		<view class="hotel-content">
			<view class="hotel-content-item" @click="hoteldetails(item)" v-for="item in venue.lists">
				<view class="content-item-img">
					<image :src="item.cover"></image>
				</view>
				<view class="content-item-itxt">
					<view class="item-itxt-left">
						<text class="item-itxt-left1">{{item.name}}</text>
						<br />

					</view>
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
				jiudianmingsu: '',
				classify: [],
				ShowHidden: false,
				title: '',
				c_id: '10',
				venue: [],
				area: '1'
			}
		},
		methods: {
			hoteldetails(item) {
				uni.navigateTo({
					url: '../hotel-details/hotel-details?id=' + item.id 
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
			}
		},
		onShow() {
			this.jiudianmingsu = this.$lang.jiudianmingsu[uni.getStorageSync('lang')];
		},
		onLoad(e) {
			this.jiudianmingsu = this.$lang.jiudianmingsu[uni.getStorageSync('lang')];
			this.title = this.jiudianmingsu
			// if(uni.getStorageSync('area')){
			// 	this.area = uni.getStorageSync('area')
			// }
			if (e.area == 'undefined' || e.area == undefined || e.area == '' || e.area == null) {
				if (uni.getStorageSync('area')) {
					this.area = uni.getStorageSync('area')
				}
			} else {
				this.area = e.area
				uni.setStorageSync('area',this.area)
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
		padding: 26rpx 30rpx;


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

	.hotel-content-item image {
		width: 100%;
		height: 350rpx;
		border-radius: 10rpx 10rpx 0px 0px;
	}

	.item-itxt-left1 {
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
	}

	.item-itxt-left2 {
		color: rgba(153, 153, 153, 100);
		font-size: 20rpx;
		font-family: PingFangSC-regular;
	}

	.item-itxt-right1 {
		width: 20rpx;
		height: 20rpx;
		color: rgba(255, 127, 34, 100);
	}

	.item-itxt-right2 {
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
	}

	.hotel-content {
		padding: 24rpx 30rpx 0rpx 30rpx;
	}

	.hotel-content-item {

		border-radius: 10rpx;
		box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.4);
	}

	.content-item-itxt {
		display: flex;
		justify-content: space-between;
		padding: 14rpx 30rpx;
	}

	/* .right>.item-itxt-right2{
		text-indent: 40rpx;
	} */


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
