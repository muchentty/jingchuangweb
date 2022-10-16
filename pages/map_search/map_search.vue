<template>
	<view>
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map class="maps" :style="{ 'height': height + 'px'}" :latitude="latitude" :longitude="longitude"
					:markers="covers" enable-3D="false" show-compass="false" enable-overlooking="false">
				</map>
			</view>
			<!-- <scroll-view class='left' scroll-y > -->
			<!-- <view class="resource" style="height:200px;margin-top:10px">
				<view class="map" @click="venue_go(item)"  v-for="(item,index) in venue">
					<view class="map_img" :style="{backgroundImage:`url(${item.cover})`}">
						
					</view>
					<view>{{item.title}}</view>
				</view>
			</view> -->
			<!-- </scroll-view> -->
			<!-- 轮播图 -->
			<!-- <view>纬度：{{latitude}}</view>
			<view>经度：{{longitude}}</view>
			<view>经度：{{hr}}</view> -->
			<swiper class="resource" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item v-for="(item, index) in first" :key="index" class="displayfirst">
					<view class="displaysecond" v-for="(its,index) in item">
						<view class="map_img" :style="{backgroundImage:`url(${its.cover})`}" @click="venue_go(its)">
						</view>
						<view>{{its.title}}</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>


<script>
	//#ifdef H5
	import jweixin from 'jweixin-module';
	//#endif
	export default {
		data() {
			return {
				qingshengjidaozuixindeweixinbanben: '',
				nideweixinbanbentaidi: '',
				height: '',
				covers: [],
				longitude: 0, //经度101.610916
				latitude: 0, //纬度37.386066
				venue: [],
				hh: '',
				hhs: '',
				// 轮播图
				indicatorDots: true,
				autoplay: true,
				interval: 2000, //切换的间隔时间
				duration: 600, //滑动动画时长
				// 存储第一次轮播
				first: [],
				// 存储第二次轮播
				second: [],
				//公共的数组
				all: [],
				area: '',
				hr: '',
			}
		},
		methods: {
			venue_go(item) {
				uni.navigateTo({
					// url: '../venue-reservation/venue-reservation?id=' + item.id 
					url: '../venue-reservation/venue-reservation?id=' + item.id + '&title=' + item.title +
						'&area=' + this.area
				})
			},
			
			initJssdkShare: function(callback) {
				// alert(location.href.split('#')[0])
				let that = this
				let url = 'pages/map_search/map_search?area=' + that.area 
				console.log(url)
				// that.hr = url
				this.$request('/api/common/getJssdkTicket', {
					'url': url
				}, 'post', {}).then(res => {
					// that.hr = res
					if (res.data) {
						jweixin.config({
							debug: false,
							appId: res.data.appId,
							timestamp: res.data.timestamp,
							nonceStr: res.data.nonceStr,
							signature: res.data.signature,
							jsApiList: [
								'checkJsApi',
								'getLocation'
							]
						});

						if (callback) {
							callback(res.data);
						}
					}
				});
			},
		},
		onShow(e) {
			this.qingshengjidaozuixindeweixinbanben = this.$lang.qingshengjidaozuixindeweixinbanben[uni.getStorageSync(
				'lang')];
			this.nideweixinbanbentaidi = this.$lang.nideweixinbanbentaidi[uni.getStorageSync('lang')];
		},
		onLoad(e) {
			this.qingshengjidaozuixindeweixinbanben = this.$lang.qingshengjidaozuixindeweixinbanben[uni.getStorageSync(
				'lang')];
			this.nideweixinbanbentaidi = this.$lang.nideweixinbanbentaidi[uni.getStorageSync('lang')];
			let that = this
			uni.getSystemInfo({
				success: (res) => {
					let height = res.windowHeight
					this.height = height - 200;
				}
			});
			
			let area = 0
			console.log(uni.getStorageSync('area'))
			// let area = uni.getStorageSync('area')
			if (e.area == 'undefined' || e.area == undefined || e.area == '' || e.area == null) {
				if (uni.getStorageSync('area')) {
					area = uni.getStorageSync('area')
					this.area = uni.getStorageSync('area')
				}
			} else {
				area = e.area
				this.area = e.area
				uni.setStorageSync('area',this.area)
			}
			console.log(this.area)


			//#ifdef H5
			let ua = window.navigator.userAgent.toLowerCase()
			if (ua.match(/MicroMessenger/i) == 'micromessenger') {
				this.initJssdkShare(function(res) {
					// that.hr = '进入微信'
					jweixin.ready(function() {
						// that.hr = '进入微信'
						jweixin.checkJsApi({
							jsApiList: [
								'getLocation'
							],
							success: function(res) {
								// that.hr = res.checkResult
								if (res.checkResult.getLocation == false) {
									uni.showToast({
										title: that.nideweixinbanbentaidi + '，' + that
											.qingshengjidaozuixindeweixinbanben + '！',
										duration: 2000,
										icon: 'none'
									})
									return;
								}
							}
						});
						jweixin.getLocation({
							type: 'gcj02',
							success: function(res) {
								console.log(res)
								that.longitude = res.longitude
								that.latitude = res.latitude
							},
							fail: function(ress) {
								// uni.showModal({
								// 	cancelText:ress
								// })
							// that.hr = ress
								if (typeof fail === 'function') {

									fail(res);

								}

							}

						})
					})
				})
			}
			//#endif
			//#ifndef H5
			uni.getLocation({
				type: 'gcj02',
				altitude: true,
				success: function(res) {

					that.longitude = res.longitude
					that.latitude = res.latitude
				}
			})
			//#endif
			console.log(that.longitude, that.latitude)
			let covers = []
			this.$request('/api/venue/get_all_list', {
				area: area,
			}, 'post', {}).then(res => {
				if (res.code === 1) {
					res.data.lists.forEach((item, index) => {
						let arr = item.position.split(",");
						let latitude = arr[1]
						let longitude = arr[0]
						covers[index] = {
							id: item.id,
							latitude: arr[1],
							longitude: arr[0],
							iconPath: '../../static/location-red.png',
							title: item.address
						}
					})
					that.covers = covers
				}
			})
			
			// this.$request('/api/venue/get_list', {
			// 	cate: "1",
			// 	lang_type: "cn",
			// 	page: "1",
			// 	pagesize: "10",
			// 	area: area,
			// }, 'post', {}).then(res => {
			// 	if (res.code === 1) {
			// 		let venue = res.data.lists[0]
			// 		if(venue.id == '' || venue.id == undefined || venue.id == 'undefined'){
			// 			console.log('为空')
			// 		}else{
			// 			this.$request('/api/venue/view', {
			// 				id: venue.id
			// 			}, 'post', {}).then(res => {
			// 				if (res.code === 1) {
			// 					console.log(res)
			// 					let pon = res.data.venue
			// 					let position = pon.position.split(',')
			// 					console.log(position)
			// 					that.latitude = Number(position[1])
			// 					that.longitude = Number(position[0])
			// 				}
						
			// 			})
			// 		}
			// 		console.log(venue.id )
			// 	}
			// })


			this.$request('/api/venue/get_category', {}, 'post', {}).then(res => {
				that.venue = res.data.lists
				// let index = 8
				let second = []
				let first = []
				second = that.venue.splice(0, 8) //删除0-8
				console.log(second)
				console.log(that.venue)
				first.push(second)
				first.push(that.venue)
				that.first = first
				console.log(that.first)
				// hhs=that.venue
				console.log(first)

			})
		}
	}
</script>

<style>
	.maps {
		width: 100%
	}

	.displayfirst {
		display: flex;
		flex-wrap: wrap;
		/* justify-content: space-around; */
	}

	.displaysecond {
		width: 160rpx;
		/* border: 1rpx solid red; */
		text-align: center;
		color: rgba(16, 16, 16, 100);
		font-size: 24rpx;
		font-family: PingFangSC-regular;
		height: 160rpx;
		margin-left: 10rpx;
		margin-bottom: 10rpx;
	}

	.consult {
		display: flex;
		justify-content: space-between;
	}

	.resource {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		margin-bottom: 20rpx;
		margin-top: 30rpx;
		width: 100%;
		height: 400rpx;
		/* border: 1rpx solid yellow; */
	}

	.culture {
		margin-top: 22rpx;
		width: 248rpx;
		height: 156rpx;
		background: #E8E8E8;
		line-height: 50rpx;
		padding-left: 30rpx;
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
		background-size: 100% 100%;
		border-right: solid 1px #EEEEEE;
		border-top: solid 1px #EEEEEE;
		border-bottom: solid 1px #EEEEEE;
	}

	.map {
		width: 160rpx;
		border: 1rpx solid red;
		text-align: center;
		color: rgba(16, 16, 16, 100);
		font-size: 24rpx;
		font-family: PingFangSC-regular;
		height: 160rpx;
		margin-left: 10rpx;
		margin-bottom: 10rpx;
	}

	.map_img {
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
		background-size: 100% 100%;
		line-height: 260rpx;
		margin-left: 20rpx;

	}
</style>
