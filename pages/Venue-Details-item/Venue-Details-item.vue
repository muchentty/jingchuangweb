<template>
	<view>
		<router></router>
		<!-- 场馆详情 -->
		<view class="all">
			<view class="all-address">
				您所在的位置：{{name}}
			</view>
			<view class="venue-details">
				<view class="venue-details-left">
					<view class="venue-details-left-img">
						<image :src="venue.venue.cover" mode=""></image>
					</view>
					<view class="venue-details-left-txt">
						<view class="left-title">
							{{venue.venue.name}}
						</view>
						<view class="left-time">
							<text>开放时间:</text>
							<text>{{venue.venue.start_time}}-{{venue.venue.end_time}}</text>
						</view>
						<view class="left-phone">
							<!-- <text>固定电话：</text> -->
							<text>{{venue.venue.tel}}</text>
						</view>
						<view class="left-address">
							<text>场馆地址：</text>
							<text>{{venue.venue.address}}</text>
						</view>
						<view class="left-appoint" @click="venueappoint">
							<button type="default">立即预约</button>
						</view>
					</view>
				</view>
				<view class="venue-details-right">
					<image :src="venue.venue.cover" mode=""></image>
				</view>
			</view>
			<view class="details-center">
				<view class="center-top">
					<view class="center-top-show">
						详细信息
					</view>
					<view class="center-top-txt" v-html="context">
						1111111
					</view>
				</view>
				<view class="solid">

				</view>
		</view>
	</view>
	<view class="solid">

	</view>
	<bottom></bottom>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lvyoujingdian: '',
				wenhuazhibo: '',
				yituanfengcai: '',
				wenhuazixun: '',
				minsujiudian: '',
				tesemeishi: '',
				lvyouluxian: '',
				changguanyuyue: '',
				wenhuaditu: '',
				huodongcanyu: '',
				saishicanyu: '',
				huodongcanyu: '',
				changguanyuyue: '',
				yituanfengcai: '',
				feiyichuancheng: '',
				yishujianshang: '',
				saishicanyu: '',
				faxian: '',
				gengduo: '',
				gengduo: '',
				daohang: '',
				ziyuan: '',
				gengduo: '',
				gengduo: '',
				gengduo: '',
				gonggao: '',
				zuixin: '',
				cengji: '',
				zhi: '',
				icon: true,
				citys: [],
				classify: [],
				lists: [],
				article_data: [],

				artgroup: [],
				list: [],
				venue: [],
				cate: '',
				area: '1',
				cover: '',
				activity: [],
				race: [],

				lastRecord: '',
				swipers: [],
				music: '',
				innerAudioContext: '',
				icon_data: [],

				travel_list: [],
				live: [],
				lang: '',
				zangyu: '',
				hanyu: '',
				wode: '',
				shouye: '',
				name:''
			}
		},
		methods: {
			//立即预约按钮
			venueappoint() {
				uni.showModal({
					title: '场馆预约',
					content: '确定预约该场馆吗？',
					success: function(res) {
						if (res.confirm) {
							console.log('确定')
							
						} else if (res.cancel) {
							console.log('取消')
						}
					}
				})
			},
			// venueappoint(){
			// 	uni.navigateTo({
			// 		url:'../Site-reservation/Site-reservation'
			// 	})
			// },
			Venueitem() {
				uni.navigateTo({
					url: '../Venue-Details-item/Venue-Details-item'
				})
			},
			tapscroll: function() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				})
			},
			change_lang(item) {
				this.lang = item
				uni.setStorageSync('lang', item);
				this.zangyu = this.$lang.zangyu[item]
				this.hanyu = this.$lang.hanyu[item]
				this.lvyoujingdian = this.$lang.lvyoujingdian[uni.getStorageSync('lang')];
				this.wenhuazhibo = this.$lang.wenhuazhibo[uni.getStorageSync('lang')];
				this.yituanfengcai = this.$lang.yituanfengcai[uni.getStorageSync('lang')];
				this.wenhuazixun = this.$lang.wenhuazixun[uni.getStorageSync('lang')];
				this.minsujiudian = this.$lang.minsujiudian[uni.getStorageSync('lang')];
				this.tesemeishi = this.$lang.tesemeishi[uni.getStorageSync('lang')];
				this.lvyouluxian = this.$lang.lvyouluxian[uni.getStorageSync('lang')];
				this.changguanyuyue = this.$lang.changguanyuyue[uni.getStorageSync('lang')];
				this.wenhuaditu = this.$lang.wenhuaditu[uni.getStorageSync('lang')];
				this.huodongcanyu = this.$lang.huodongcanyu[uni.getStorageSync('lang')];
				this.saishicanyu = this.$lang.saishicanyu[uni.getStorageSync('lang')];
				this.huodongcanyu = this.$lang.huodongcanyu[uni.getStorageSync('lang')];
				this.changguanyuyue = this.$lang.changguanyuyue[uni.getStorageSync('lang')];
				this.yituanfengcai = this.$lang.yituanfengcai[uni.getStorageSync('lang')];
				this.feiyichuancheng = this.$lang.feiyichuancheng[uni.getStorageSync('lang')];
				this.yishujianshang = this.$lang.yishujianshang[uni.getStorageSync('lang')];
				this.saishicanyu = this.$lang.saishicanyu[uni.getStorageSync('lang')];
				this.faxian = this.$lang.faxian[uni.getStorageSync('lang')];
				this.gengduo = this.$lang.gengduo[uni.getStorageSync('lang')];
				this.gengduo = this.$lang.gengduo[uni.getStorageSync('lang')];
				this.daohang = this.$lang.daohang[uni.getStorageSync('lang')];
				this.ziyuan = this.$lang.ziyuan[uni.getStorageSync('lang')];
				this.gengduo = this.$lang.gengduo[uni.getStorageSync('lang')];
				this.gengduo = this.$lang.gengduo[uni.getStorageSync('lang')];
				this.gengduo = this.$lang.gengduo[uni.getStorageSync('lang')];
				this.gonggao = this.$lang.gonggao[uni.getStorageSync('lang')];
				this.zuixin = this.$lang.zuixin[uni.getStorageSync('lang')];
				this.cengji = this.$lang.cengji[uni.getStorageSync('lang')];
				this.zhi = this.$lang.zhi[uni.getStorageSync('lang')];
				this.shouye = this.$lang.shouye[uni.getStorageSync('lang')];
				this.wode = this.$lang.wode[uni.getStorageSync('lang')];
			},



			changePlayState() {
				this.icon = !this.icon
				if (this.audioPlay == true) {
					this.audioPlay = false;
					this.innerAudioContext.play();

				} else {
					this.audioPlay = true;
					this.innerAudioContext.pause()
				}
			},

			Announcementlist() {
				uni.navigateTo({
					url: '../Announcement-list/Announcement-list'
				})
			},
			formatRichText(html) {
				let newContent = html.replace(/<img[^>]*>/gi, function(match, capture) {
					match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '');
					match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '');
					match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '');
					return match;
				});
				newContent = html.replace(/<video[^>]*>/gi, function(match, capture) {
					match = match.replace(/width="[^"]+"/gi, 'style="width:100%"').replace(/width='[^']+'/gi, '');
					match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '');
					return match;
				});
				newContent = newContent.replace(/style="[^"]+"/gi, function(match, capture) {
					match = match.replace(/width:[^;]+;/gi, 'max-width:100%;').replace(/width:[^;]+;/gi,
						'max-width:100%;');
					return match;
				});
				newContent = newContent.replace(/<br[^>]*\/>/gi, '');
				newContent = newContent.replace(/\<img/gi,
					'<img style="max-width:100%;height:auto;display:inline-block;margin:10rpx auto;"');
				return newContent;
			}
			
		},
		onLoad(e) {
			this.lvyoujingdian = this.$lang.lvyoujingdian[uni.getStorageSync('lang')];
			this.wenhuazhibo = this.$lang.wenhuazhibo[uni.getStorageSync('lang')];
			this.yituanfengcai = this.$lang.yituanfengcai[uni.getStorageSync('lang')];
			this.wenhuazixun = this.$lang.wenhuazixun[uni.getStorageSync('lang')];
			this.minsujiudian = this.$lang.minsujiudian[uni.getStorageSync('lang')];
			this.tesemeishi = this.$lang.tesemeishi[uni.getStorageSync('lang')];
			this.lvyouluxian = this.$lang.lvyouluxian[uni.getStorageSync('lang')];
			this.changguanyuyue = this.$lang.changguanyuyue[uni.getStorageSync('lang')];
			this.wenhuaditu = this.$lang.wenhuaditu[uni.getStorageSync('lang')];
			this.huodongcanyu = this.$lang.huodongcanyu[uni.getStorageSync('lang')];
			this.saishicanyu = this.$lang.saishicanyu[uni.getStorageSync('lang')];
			this.huodongcanyu = this.$lang.huodongcanyu[uni.getStorageSync('lang')];
			this.changguanyuyue = this.$lang.changguanyuyue[uni.getStorageSync('lang')];
			this.yituanfengcai = this.$lang.yituanfengcai[uni.getStorageSync('lang')];
			this.feiyichuancheng = this.$lang.feiyichuancheng[uni.getStorageSync('lang')];
			this.yishujianshang = this.$lang.yishujianshang[uni.getStorageSync('lang')];
			this.saishicanyu = this.$lang.saishicanyu[uni.getStorageSync('lang')];
			this.faxian = this.$lang.faxian[uni.getStorageSync('lang')];
			this.gengduo = this.$lang.gengduo[uni.getStorageSync('lang')];
			this.gengduo = this.$lang.gengduo[uni.getStorageSync('lang')];
			this.daohang = this.$lang.daohang[uni.getStorageSync('lang')];
			this.ziyuan = this.$lang.ziyuan[uni.getStorageSync('lang')];
			this.gengduo = this.$lang.gengduo[uni.getStorageSync('lang')];
			this.gengduo = this.$lang.gengduo[uni.getStorageSync('lang')];
			this.gengduo = this.$lang.gengduo[uni.getStorageSync('lang')];
			this.gonggao = this.$lang.gonggao[uni.getStorageSync('lang')];
			this.zuixin = this.$lang.zuixin[uni.getStorageSync('lang')];
			this.cengji = this.$lang.cengji[uni.getStorageSync('lang')];
			this.zhi = this.$lang.zhi[uni.getStorageSync('lang')];
			this.shouye = this.$lang.shouye[uni.getStorageSync('lang')];
			this.wode = this.$lang.wode[uni.getStorageSync('lang')];
			let that = this
			if (e.linkarea) {
				this.area = e.linkarea
				uni.setStorageSync('area', e.linkarea)
			}

			if (uni.getStorageSync('area')) {
				this.area = uni.getStorageSync('area')
			} else {
				this.area = 9784;
				uni.setStorageSync('area', 9784)
			}

			this.zangyu = this.$lang.zangyu[uni.getStorageSync('lang')]
			this.hanyu = this.$lang.hanyu[uni.getStorageSync('lang')]


			this.lang = uni.getStorageSync('lang');
			this.lang = this.lang == 'zn' ? 'zn' : 'cn'
			
			//场馆详情
			this.venue_id = e.id
			this.$request('/api/venue/view', {
				id: this.venue_id
			}, 'post', {}).then(res => {
				if (res.code === 1) {
					let arr = res.data.venue.position.split(",");
					res.data.venue.latitude = arr[1]
					res.data.venue.longitude = arr[0]
					this.venue = res.data;
					this.yard = res.data.lists
					this.context = this.formatRichText(res.data.venue.content);
					
				}
			
			})

		},
		onShow() {
			this.lvyoujingdian = this.$lang.lvyoujingdian[uni.getStorageSync('lang')];
			this.wenhuazhibo = this.$lang.wenhuazhibo[uni.getStorageSync('lang')];
			this.yituanfengcai = this.$lang.yituanfengcai[uni.getStorageSync('lang')];
			this.wenhuazixun = this.$lang.wenhuazixun[uni.getStorageSync('lang')];
			this.minsujiudian = this.$lang.minsujiudian[uni.getStorageSync('lang')];
			this.tesemeishi = this.$lang.tesemeishi[uni.getStorageSync('lang')];
			this.lvyouluxian = this.$lang.lvyouluxian[uni.getStorageSync('lang')];
			this.changguanyuyue = this.$lang.changguanyuyue[uni.getStorageSync('lang')];
			this.wenhuaditu = this.$lang.wenhuaditu[uni.getStorageSync('lang')];
			this.huodongcanyu = this.$lang.huodongcanyu[uni.getStorageSync('lang')];
			this.saishicanyu = this.$lang.saishicanyu[uni.getStorageSync('lang')];
			this.huodongcanyu = this.$lang.huodongcanyu[uni.getStorageSync('lang')];
			this.changguanyuyue = this.$lang.changguanyuyue[uni.getStorageSync('lang')];
			this.yituanfengcai = this.$lang.yituanfengcai[uni.getStorageSync('lang')];
			this.feiyichuancheng = this.$lang.feiyichuancheng[uni.getStorageSync('lang')];
			this.yishujianshang = this.$lang.yishujianshang[uni.getStorageSync('lang')];
			this.saishicanyu = this.$lang.saishicanyu[uni.getStorageSync('lang')];
			this.faxian = this.$lang.faxian[uni.getStorageSync('lang')];
			this.gengduo = this.$lang.gengduo[uni.getStorageSync('lang')];
			this.gengduo = this.$lang.gengduo[uni.getStorageSync('lang')];
			this.daohang = this.$lang.daohang[uni.getStorageSync('lang')];
			this.ziyuan = this.$lang.ziyuan[uni.getStorageSync('lang')];
			this.gengduo = this.$lang.gengduo[uni.getStorageSync('lang')];
			this.gengduo = this.$lang.gengduo[uni.getStorageSync('lang')];
			this.gengduo = this.$lang.gengduo[uni.getStorageSync('lang')];
			this.gonggao = this.$lang.gonggao[uni.getStorageSync('lang')];
			this.zuixin = this.$lang.zuixin[uni.getStorageSync('lang')];
			this.cengji = this.$lang.cengji[uni.getStorageSync('lang')];
			this.zhi = this.$lang.zhi[uni.getStorageSync('lang')];
			this.shouye = this.$lang.shouye[uni.getStorageSync('lang')];
			this.wode = this.$lang.wode[uni.getStorageSync('lang')];


			let that = this
			uni.setTabBarItem({
				index: 0,
				text: that.shouye,
			})
			uni.setTabBarItem({
				index: 1,
				text: that.wode,
			})
			this.area = uni.getStorageSync('area')
			this.$request('/api/area', {
				id: this.area
			}, 'post', {}).then(res => {

				if (res.code == 1) {
					if (res.data.title_id) {
						uni.setNavigationBarTitle({
							title: res.data.title
						});
					}
				}
			});
			//场馆预约
			this.$request('/api/venue/get_list', {
				area: this.area,
				cate: 1,
				pagesize: '2',
				page: '1',
				cover: this.cover
			}, 'post', {}).then(res => {


				this.venue = res.data

			})
			//场馆详情
			this.venue_id = e.id
			this.$request('/api/venue/view', {
				id: this.venue_id
			}, 'post', {}).then(res => {
				if (res.code === 1) {
					let arr = res.data.venue.position.split(",");
					res.data.venue.latitude = arr[1]
					res.data.venue.longitude = arr[0]
					this.venue = res.data;
					this.yard = res.data.lists
					this.context = this.formatRichText(res.data.venue.content);
					
				}
			
			})
			//预约场地
			
		}
	}
</script>

<style>
	.left-appoint button {
		width: 120rpx;
		height: 48rpx;
		text-align: center;
		/* line-height: 100rpx; */
		color: #FFFFFF;
		background-color: #CF282B;
		margin-left: 0;
		margin-top: 80rpx;
		/* margin-left: 20rpx; */
	}

	.solid {
		height: 50rpx;
		background-color: #F7F7F7;
	}

	.pinglun-item-right-title {
		font-size: 24rpx;
		margin-top: 20rpx;
	}

	.pinglun-item-right-time {
		font-size: 18rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: rgba(200, 200, 200, 1);
		margin-top: 10rpx;
	}

	.pinglun-item-right-details {
		margin-top: 20rpx;
		font-size: 20rpx;
		margin-bottom: 20rpx;
	}

	.huifu-txt {
		font-size: 20rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: rgba(200, 200, 200, 1);
		margin-top: 10rpx;
	}

	.all-pinglun {
		padding: 0rpx 30rpx;
	}

	.pinglun-item {
		height: 200rpx;
		display: flex;
		border-top: 1rpx solid rgba(200, 200, 200, 0.75);
		/* border-bottom: 1rpx solid rgba(200,200,200,0.75); */
	}

	.pinglun-item-left image {
		width: 68rpx;
		height: 68rpx;
		margin-top: 30rpx;
		margin-right: 30rpx;
	}

	.center-top-txt {
		padding: 50rpx;
		font-size: 24rpx;
		border-bottom: 1rpx solid rgba(200, 200, 200, 0.75);
	}

	.details-center {
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
		margin-top: 30rpx;
		/* padding-bottom: 50rpx; */
		/* padding: 0rpx 170rpx; */
	}

	.details-center {
		/* border: 1rpx solid rgba(200,200,200,0.75); */
	}

	.center-top-show {
		font-size: 20rpx;
		height: 60rpx;
		line-height: 60rpx;
		padding-left: 20rpx;
		width: 100%;
		border-bottom: 1rpx solid rgba(200, 200, 200, 0.75);
	}

	.fill-head image {
		width: 68rpx;
		height: 68rpx;
		margin-top: 30rpx;
		margin-right: 30rpx;
	}

	.pinglun-fill {
		display: flex;
		width: 100%;
	}

	.fill-input {
		width: 100%;
		margin-top: 20rpx;
	}

	.fill-input input {
		border-radius: 20rpx;
		width: 95%;
		height: 200rpx;
		border: 1rpx solid rgba(200, 200, 200, 0.75);
		background-color: #F7F7F7;
		text-indent: 40rpx;
	}

	.pinglun-show text {
		font-size: 20rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: rgba(200, 200, 200, 1);
	}

	.pinglun-show button {
		width: 100rpx;
		height: 40rpx;
		font-size: 16rpx;
		background: #CF282B;
		color: #FFFFFF;
	}

	.showsecond {
		display: flex;
		margin-left: 900rpx;
		margin-top: 20rpx;
	}

	/* .showsecond{
		display: flex;
		width: 500rpx;
		margin-top: 10rpx;
		justify-content: space-between;
	} */
	.details-pinflun {
		padding: 0rpx 30rpx;
		/* background-color: #FFFFFF; */
		width: 100%;
		/* border: 1rpx solid red; */
		padding-top: 20rpx;
		padding-bottom: 80rpx;
	}

	.total1 {
		color: red;
		margin-right: 20rpx;
	}

	.pinglun-total text {
		color: red;
		font-size: 20rpx;
	}

	.venue-details-left-txt {
		margin-left: 30rpx;
	}

	.left-time {
		font-size: 18rpx;
		margin-top: 20rpx;
	}

	.left-title {
		font-size: 24rpx;
		margin-top: 20rpx;
	}

	.left-phone,
	.left-address {
		font-size: 18rpx;
		margin-top: 20rpx;
	}

	.all {
		padding: 0rpx 170rpx;
		background-color: #F7F7F7;
	}

	.venue-details {
		margin-top: 30rpx;
		/* border: 1rpx solid red; */
		display: flex;
	}

	.venue-details-left {
		border: 1rpx solid rgba(200, 200, 200, 0.75);
		width: 75%;
		height: 386rpx;
		display: flex;
		background-color: #FFFFFF;
		margin-right: 40rpx;
	}

	.venue-details-left-img image {
		margin-left: 30rpx;
		margin-top: 20rpx;
		width: 460rpx;
		height: 305rpx;
		/* border: 1rpx solid pink; */
	}

	.venue-details-right image {
		width: 252rpx;
		height: 337rpx;
	}

	.venue-details-right {
		border: 1rpx solid rgba(200, 200, 200, 0.75);
		background-color: #FFFFFF;
		width: 25%;
		height: 360rpx;
	}

	.bottom-right image {
		width: 100rpx;
		height: 100rpx;
	}

	.bottom-right {
		display: flex;
		margin-top: 30rpx;
	}

	.all-bottom {
		padding-top: 30rpx;
		background: #CF282B;
		padding: 0rpx 340rpx;
		height: 160rpx;
		display: flex;
		justify-content: space-between;
	}

	.bottom-left text {
		font-size: 20rpx;
		color: #FFFFFF;
		/* margin-top: 50rpx; */
	}

	.bottom-left {
		margin-top: 40rpx;
	}

	.bottom-right-left {

		margin-right: 40rpx;
	}

	.all-address {
		width: 1200rpx;
		/* margin-left: 170rpx; */
		/* border: 1rpx solid red; */
		padding-top: 50rpx;
		font-size: 20rpx;
	}

	.type-item {
		display: flex;

	}

	.type-item-right {
		display: flex;
	}

	.all-type {
		width: 1100rpx;
		height: 83rpx;
		line-height: 83rpx;
		border: 1rpx solid rgba(200, 200, 200, 0.75);
		margin-top: 40rpx;
		background-color: #FFFFFF;
		margin-left: 200rpx;
		border-radius: 5rpx;
	}

	.type-item-left {
		width: 120rpx;
		color: #C93F49;
		font-weight: bold;
		height: 38rpx;
		font-size: 24rpx;
		text-indent: 15rpx;
		margin-left: 30rpx;
	}

	.type-item-right {
		font-size: 18rpx;
		color: #666666;
		height: 24rpx;
		cursor: pointer;
		float: left;
		padding: 0 14rpx;
		margin: 6rpx 7rpx 6rpx 0;
	}

	.right-item1 {
		margin-left: 60rpx;
	}

	.all-select {
		width: 1100rpx;
		height: 66rpx;
		border: 1rpx solid rgba(200, 200, 200, 0.75);
		margin-left: 200rpx;
		margin-top: 30rpx;
		display: flex;
		justify-content: space-between;
		background-color: #FFFFFF;
		border-radius: 5rpx;
	}

	.all-select-right {
		width: 357rpx;
		height: 44rpx;
		display: flex;
		justify-content: space-between;
		border: 1rpx solid rgba(200, 200, 200, 0.75);
		border-radius: 22rpx;
		margin-top: 10rpx;
		margin-right: 20rpx;
	}

	.all-select input {
		width: 250rpx;
		height: 44rpx;
		font-size: 18rpx;
		text-indent: 40rpx;
	}

	.select-img image {
		width: 26rpx;
		height: 26rpx;
		margin-right: 20rpx;
		margin-top: 10rpx;
	}

	page {
		/* 样式优先级 */
		width: 100% !important;
		max-width: 1920px !important;
		/* max-width: 750px; */
		height: 100%;
		margin: 0 auto;
	}

	/* 定位 */
	.homeposition {
		width: 80rpx;
		height: 180rpx;
		/* border: 1rpx solid red; */
		position: fixed;
		top: 70%;
		right: 80rpx;
	}

	.homeposition-top image {
		width: 76rpx;
		height: 76rpx;
		background: #CF282B;
		border-radius: 2rpx;
	}

	.homeposition-bottom image {
		margin-top: 10rpx;
		width: 76rpx;
		height: 76rpx;
		background: #CF282B;
		border-radius: 2rpx;
	}

	.home-top {
		width: 100%;
		height: 136rpx;
		line-height: 136rpx;
		/* border: 1rpx solid red; */
		display: flex;
		background-image: url(../../static/top.png);
		background-size: cover;
	}

	.top-left image {
		width: 97rpx;
		height: 53rpx;
		background: #CF282B;
		border-radius: 10rpx;
		margin-top: 48rpx;
		margin-left: 170rpx;
		margin-right: 25rpx;
	}

	.top-left-txt {
		margin-left: 170rpx;
		font-size: 52rpx;
		font-family: STXingkai;
		/* font-weight: 400; */
		color: #333333;
		/* width: 254rpx; */
		/* height: 46rpx; */
	}

	.top-left {
		margin-right: 403rpx;
		display: flex;
	}

	.top-center {
		width: 460rpx;
		height: 44rpx;
		border: 2rpx solid #CF282B;
		display: flex;
		margin-top: 53rpx;
		margin-right: 200rpx;
	}

	.top-center button {
		width: 88rpx;
		height: 44rpx;
		line-height: 44rpx;
		background: #CF282B;
		font-size: 24rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #FFFFFF;
		text-align: center;
	}

	.top-center input {
		width: 382rpx;
		height: 44rpx;
		line-height: 44rpx;
		text-indent: 20rpx;
	}

	.top-right {
		/* border: 1rpx solid red; */
		font-size: 24rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;
	}

	.top-right-txt1 {
		margin-right: 20rpx;
	}

	.top-right-txt2 {
		margin-left: 20rpx;
	}

	.home-head {
		width: 100%;
		height: 77rpx;
		background: #CF282B;
		padding: 0rpx 70rpx;
	}

	.home-head ul {
		/* border: 1rpx solid black; */
		width: 100%;
		height: 77rpx;
		line-height: 77rpx;
		display: flex;
		justify-content: space-around;
	}

	.home-head ul li {
		padding-left: 0;
		list-style: none;
		font-size: 24rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #FFFFFF;
	}
</style>
