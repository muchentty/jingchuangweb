<template>
	<view class="consult">
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
		<view v-if="list.lists.length!=0">
			<view class="list" v-for="(items,index) in list.lists">

				<view class="lists" @click="contents(items)">
					<view class="title">{{items.title}}</view>
					<view class="list_img" v-if="items.cover !=''">
						<image :src="items.cover"></image>
					</view>
					<view>{{items.description}}</view>
					<view class="read">
						<view>
							<text>{{items.source}}</text>
							<text>{{items.views}}{{renkanguo}}</text>
						</view>
						<view class="no">
							<image src="../../static/ic_no.png"></image>
						</view>
					</view>
				</view>
				<view class="line"></view>
			</view>
		</view>
		<view v-else style="margin-top: 120rpx;text-align: center;color: #999999;">{{zanwuneirong}}</view>

		<view class="arrivalNavigation" v-if="ShowHidden">
			<view class="sideNavigation">
				<nav>
					<ul>
						<li @click="select(cid,wenhuazixun)">{{quanbu}}</li>
					</ul>
					<ul v-for="(item,index) in classify.lists">
						<li @click="select(item.id,item.title)">{{item.title}}</li>
					</ul>
				</nav>
			</view>
		</view>
		<view style="margin-top: 30rpx;">
			<uni-pagination :total="postCount" :current="pageNum"
				:pageSize="pageSize" @change="handlePage"  prev-text="前一页" next-text="后一页" />
		</view>
		<!-- <view class="loading-text"
			style="text-align: center;font-size: 24rpx;color:#999999;margin-top: 16rpx;margin-bottom: 16rpx;">
			{{loadingType === 0 ? shanglaxianshigengduo : (loadingType === 1 ? zhengzaijiazai : meiyougengduoshujuliao)}}
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
			return {
				meiyougengduoshujuliao: '',
				shanglaxianshigengduo: '',
				zanwuneirong: '',
				wenhuazixun: '',
				wenhuazixun: '',
				zhengzaijiazai: '',
				renkanguo: '',
				quyu: '',
				quanbu: '',
				classify: [],
				ShowHidden: false,
				title: '',
				cid: '',
				list: [],
				postCount: 0,
				pageSize: 12,
				pageNum: 0,
				area: 1,
				loadingType: 0,
				shanglaxianshigengduo: "",
				zhengzaijiazai: "",
				meiyougengduoshujuliao: "",
				pagesize: []
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
					url: '../contents/contents?id=' + item.id + '&cate=' + this.cid + '&area=' + this.area
				})
			},
			hierarchy() {
				uni.navigateTo({
					url: '../hierarchy/hierarchy?area=' + this.area
				})
			},

			getMoreListInfo() {
				const that = this
				this.$request('/api/article/get_list', {
					cate: that.id,
					area: that.area,
					pagesize: that.pagesize[that.id],
					page: that.pageNum
				}, 'post', {}).then(res => {
					// console.log(res)
					if (res.code == 1) {
						that.list = res.data
					}
				})
			}
		},

		onReachBottom: function() {
			this.getMoreListInfo()
		},
		onShow(e) {
			this.meiyougengduoshujuliao = this.$lang.meiyougengduoshujuliao[uni.getStorageSync('lang')];
			this.shanglaxianshigengduo = this.$lang.shanglaxianshigengduo[uni.getStorageSync('lang')];
			this.zanwuneirong = this.$lang.zanwuneirong[uni.getStorageSync('lang')];
			this.wenhuazixun = this.$lang.wenhuazixun[uni.getStorageSync('lang')];
			this.wenhuazixun = this.$lang.wenhuazixun[uni.getStorageSync('lang')];
			this.zhengzaijiazai = this.$lang.zhengzaijiazai[uni.getStorageSync('lang')];
			this.renkanguo = this.$lang.renkanguo[uni.getStorageSync('lang')];
			this.quyu = this.$lang.quyu[uni.getStorageSync('lang')];
			this.quanbu = this.$lang.quanbu[uni.getStorageSync('lang')];
			this.title = '文物保护'
		},
		onLoad(e) {
			this.meiyougengduoshujuliao = this.$lang.meiyougengduoshujuliao[uni.getStorageSync('lang')];
			this.shanglaxianshigengduo = this.$lang.shanglaxianshigengduo[uni.getStorageSync('lang')];
			this.zanwuneirong = this.$lang.zanwuneirong[uni.getStorageSync('lang')];
			this.wenhuazixun = this.$lang.wenhuazixun[uni.getStorageSync('lang')];
			this.wenhuazixun = this.$lang.wenhuazixun[uni.getStorageSync('lang')];
			this.zhengzaijiazai = this.$lang.zhengzaijiazai[uni.getStorageSync('lang')];
			this.renkanguo = this.$lang.renkanguo[uni.getStorageSync('lang')];
			this.quyu = this.$lang.quyu[uni.getStorageSync('lang')];
			this.quanbu = this.$lang.quanbu[uni.getStorageSync('lang')];
			this.title = '文物保护'
			// if (uni.getStorageSync('area')) {
			// 	this.area = uni.getStorageSync('area')
			// }
			if (e.area == 'undefined' || e.area == undefined || e.area == '' || e.area == null) {
				if (uni.getStorageSync('area')) {
					this.area = uni.getStorageSync('area')
				}
			} else {
				this.area = e.area
			}

			this.are = e.are;
			this.id = e.cId;
			this.cid = e.cId;
			let cId = e.cId;

			this.$request('/api/article/get_all_cates', {}, 'post', {}).then(res => {


				if (res.code == 1) {
					this.pagesize[cId] = res.data.lists[0].pagesize
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

	.list {
		border-top: 1px solid rgba(233, 233, 233, 100);
	}

	.lists {
		margin: 18rpx 26rpx 18rpx 30rpx;
		color: #8f8f8f;
		;
		font-size: 24rpx;
		font-family: PingFangSC-regular;
	}

	.title {
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
		margin-bottom: 16rpx;
	}

	.list_img {
		width: 100%;
		height: 356rpx;
		border-radius: 10rpx;
		margin: 16rpx 0;
	}

	.list_img image {
		width: 100%;
		height: 100%;
	}

	.read {
		margin: 16rpx 0;
		display: flex;
		justify-content: space-between;
		margin-right: 30rpx;
		color: rgba(102, 102, 102, 100);
		font-size: 24rpx;
		text-align: left;
		font-family: PingFangSC-regular;
	}

	.read text {
		margin-right: 16rpx;
	}

	.line {
		height: 1px;
		width: 100%;
		background-color: rgba(233, 233, 233, 100);
	}

	.no {
		margin-top: 16rpx;
		width: 20rpx;
		height: 20rpx;
	}

	.no image {
		width: 100%;
		height: 100%;
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
