<template>
	<view class="appreciation">
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
			</view>

		</view>
		<view v-if="list.lists.length!=0">
			<view class="content">
				<view class="content-item " @click="contents(items)" v-for="(items,index) in list.lists">
					<view class="content-img">
						<image :src="items.cover"></image>
					</view>
					<view class="content-text">
						<text class="text-item1">{{items.title}}</text>
						<br />
						<text class="text-item2">{{items.source}} {{items.views}}{{renkanguo}}</text>
					</view>
				</view>
				<view class="item"></view>
			</view>
		</view>
		<view v-else style="margin-top: 120rpx;text-align: center;color: #999999;">{{zanwuneirong}}</view>
		
		<view class="arrivalNavigation" v-if="ShowHidden">
			<view class="sideNavigation">
				<nav>
					<ul>
						<li @click="select(cid,yishujianshang)">{{quanbu}}</li>
					</ul>
					<ul v-for="(item,index) in classify.lists">
						<li @click="select(item.id,item.title)">{{item.title}}</li>
					</ul>
				</nav>
			</view>
		</view>
		<uni-pagination :total="postCount" :current="pageNum"
			:pageSize="pageSize" @change="handlePage"  prev-text="前一页" next-text="后一页" />
		<!-- <view class="loading-text" style="text-align: center;font-size: 24rpx;color:#999999;margin-top: 16rpx;margin-bottom: 16rpx;">
			{{loadingType === 0 ? shanglaxianshigengduo : (loadingType === 1 ? shanglaxianshigengduo : shanglaxianshigengduo)}}
		</view> -->
	</view>
</template>

<script>
	import uniPagination from '../../components/uni-pagination/uni-pagination.vue'
	export default {
		components: {
			uniPagination
		},
		data() {
			return {meiyougengduoshujuliao:'',shanglaxianshigengduo:'',zanwuneirong:'',yishujianshang:'',yishujianshang:'',zhengzaijiazai:'',renkanguo:'',quyu:'',quanbu:'',
				classify: [],
				ShowHidden: false,
				title: this.yishujianshang,
				cid: '',
				list: [],
				area: 1,
				loadingType: 0,
				shanglaxianshigengduo: '',
				zhengzaijiazai: '',
				meiyougengduoshujuliao: '',
				pagesize: [],
				postCount: 0,
				pageSize: 12,
				pageNum: 1,
			}
		},
		methods: {
			handlePage(params) {
				this.pageNum = params.current;
				this.getMoreListInfo()
			},
			select(id, title) {
				this.title = title;
				this.ShowHidden = !this.ShowHidden;
				this.$request('/api/article/get_list', {
					cate: id,
					area: this.area,
					pagesize: this.pagesize[id]
				}, 'post', {}).then(res => {
					
					if (res.code == 1) {
						this.list = res.data
					}
				})
			},
			contents(item) {
				uni.navigateTo({
					url: '../contents/contents?id=' + item.id
				})
			},
			hierarchy() {
				uni.navigateTo({
					url: '../hierarchy/hierarchy?area=' + this.area
				})
			},
			
			getMoreListInfo() {
				const that = this
				// if (that.list.page >= that.list.total_page) {
				// 	that.loadingType = 2;
				// 	return false;
				// }
				// that.list.page = that.list.page + 1

				// if (that.loadingType != 0) {
				// 	return false; 
				// }
				// that.loadingType = 1;
				// uni.showNavigationBarLoading();
				this.$request('/api/article/get_list', {
					cate: that.id,
					area: that.area,
					pagesize: that.pagesize[that.id],
					page: that.pageNum
				}, 'post', {}).then(res => {
					
					
					if (res.code == 1) {
						that.list.lists = res.data.lists
						// that.list.lists = that.list.lists.concat(res.data.lists)
						// if (res.data.page == res.data.page) { 
						// 	that.loadingType = 2;
						// 	uni.hideNavigationBarLoading(); 
						// 	return false;
						// }
						// that.loadingType = 0; 
						// uni.hideNavigationBarLoading(); 
					}
				})
			}
		},
		
		onReachBottom: function() {
			this.getMoreListInfo()
		},
		onShow(e) {this.meiyougengduoshujuliao = this.$lang.meiyougengduoshujuliao[uni.getStorageSync('lang')];this.shanglaxianshigengduo = this.$lang.shanglaxianshigengduo[uni.getStorageSync('lang')];this.zanwuneirong = this.$lang.zanwuneirong[uni.getStorageSync('lang')];this.yishujianshang = this.$lang.yishujianshang[uni.getStorageSync('lang')];this.yishujianshang = this.$lang.yishujianshang[uni.getStorageSync('lang')];this.zhengzaijiazai = this.$lang.zhengzaijiazai[uni.getStorageSync('lang')];this.renkanguo = this.$lang.renkanguo[uni.getStorageSync('lang')];this.quyu = this.$lang.quyu[uni.getStorageSync('lang')];this.quanbu = this.$lang.quanbu[uni.getStorageSync('lang')];},
		onLoad(e) {this.meiyougengduoshujuliao = this.$lang.meiyougengduoshujuliao[uni.getStorageSync('lang')];this.shanglaxianshigengduo = this.$lang.shanglaxianshigengduo[uni.getStorageSync('lang')];this.zanwuneirong = this.$lang.zanwuneirong[uni.getStorageSync('lang')];this.yishujianshang = this.$lang.yishujianshang[uni.getStorageSync('lang')];this.yishujianshang = this.$lang.yishujianshang[uni.getStorageSync('lang')];this.zhengzaijiazai = this.$lang.zhengzaijiazai[uni.getStorageSync('lang')];this.renkanguo = this.$lang.renkanguo[uni.getStorageSync('lang')];this.quyu = this.$lang.quyu[uni.getStorageSync('lang')];this.quanbu = this.$lang.quanbu[uni.getStorageSync('lang')];
		
			this.title=this.yishujianshang
			// if (uni.getStorageSync('area')) {
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
			this.are = e.are;
			this.id = e.cId;
			this.cid = e.cId;
			let cId = e.cId;
			
			this.$request('/api/article/get_all_cates', {
				pid: cId
			}, 'post', {}).then(res => {
				
				
				if (res.code == 1) {
					this.pagesize[cId] = res.data.lists[1].pagesize
					this.$request('/api/article/get_list', {
						cate: cId,
						area: this.area,
						pagesize: this.pagesize[cId]
					}, 'post', {}).then(res => {
						
						
						if (res.code == 1) {
							this.list = res.data
							this.postCount = res.data.total	
						}
					})
				}
			});
			this.$request('/api/article/get_cates', {
				pid: cId
			}, 'post', {}).then(res => {
				
				
				if (res.code == 1) {
					this.classify = res.data
					res.data.lists.forEach((item, key) => {
						this.pagesize[item.id] = item.pagesize
					})
				}
			});


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

	.content {
		
		height: 100%;
		background: #FFFFFF;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		padding-left: 15rpx;
		padding-right: 15rpx;
	}

	.content-item {
		margin-top: 20rpx;
		width: 340rpx;
		
		padding-bottom: 10rpx;
		background: #FFFFFF;
		box-shadow: 0px 5rpx 7rpx 0rpx rgba(51, 51, 51, 0.21);
		border-radius: 10rpx;
		margin-left: 5rpx;
	}

	.item {
		width: 340rpx;
	}

	.content-img {
		
		width: 340rpx;
		height: 300rpx;
		border-radius: 10rpx 10rpx 0px 0px;
		margin-bottom: 20rpx;
	}

	.content-img image {
		width: 100%;
		height: 100%;
		border-radius: 10rpx 10rpx 0px 0px;
	}

	.text-item1 {
		margin-bottom: 14rpx;
		margin-left: 21rpx;
		width: 194rpx;
		height: 27rpx;
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
