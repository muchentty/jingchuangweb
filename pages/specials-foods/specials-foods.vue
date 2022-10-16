<template>
	<view class="specials-foods">
		<view class="top">
			<view class="district">
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
		<view class="Tourist-route-content" v-if="venue.lists.length!=0">
			<view class="Tourist-route-content-item" @click="foodsdetails(item)" v-for="item in venue.lists">
				<view class="Tourist-item-img">
					<image :src="item.cover"></image>
				</view>
				<view class="Tourist-item-txt">
					{{item.name}}
				</view>

			</view>
		</view>
		<view v-else style="text-align: center;margin-top: 100rpx;color: #999999;">{{zanwuneirong}}</view>
		
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
			return {tesemeishi:'',zanwuneirong:'',quyu:'',
				classify: [],
				ShowHidden: false,
				title:'',
				c_id: '9',
				venue: [],
				area:1,
			}
		},
		methods: {
			foodsdetails(item) {
				uni.navigateTo({
					url: '../specials-foods-details/specials-foods-details?id=' + item.id
				})
			},
			select(item) {
				this.title = item.title;
				this.ShowHidden = !this.ShowHidden;
				this.c_id = item.id;
				this.$request('/api/venue/get_list', {
					area: '1',
					cate: this.c_id,
					pagesize: '10',
					page: '1'
				}, 'post', {}).then(res => {
					
					
					this.venue = res.data
					
				})
			}
		},
		onShow(e) {this.tesemeishi = this.$lang.tesemeishi[uni.getStorageSync('lang')];this.zanwuneirong = this.$lang.zanwuneirong[uni.getStorageSync('lang')];this.quyu = this.$lang.quyu[uni.getStorageSync('lang')];},
		onLoad(e) {this.tesemeishi = this.$lang.tesemeishi[uni.getStorageSync('lang')];this.zanwuneirong = this.$lang.zanwuneirong[uni.getStorageSync('lang')];this.quyu = this.$lang.quyu[uni.getStorageSync('lang')];
			this.title = this.tesemeishi
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

	.Tourist-item-img image {
		width: 336rpx;
		height: 354rpx;
		border-radius: 10rpx 10rpx 0rpx 0rpx;
	}

	.Tourist-route-content {
		padding: 28rpx 30rpx 0rpx 30rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.Tourist-item-txt {
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
		margin-left: 20rpx;
		padding-bottom: 10rpx;
	}

	.Tourist-item-txt1 {
		color: rgba(153, 153, 153, 100);
		font-size: 24rpx;
		font-family: PingFangSC-regular;
		margin-left: 20rpx;
		margin-bottom: 6rpx;
	}

	.Tourist-route-content-item {
		width: 334rpx;
		
		border-radius: 10rpx 10rpx 0px 0px;
		
		box-shadow: 0rpx 4rpx 12rpx 0rpx rgba(0, 0, 0, 0.4);
		margin-bottom: 20rpx;
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
