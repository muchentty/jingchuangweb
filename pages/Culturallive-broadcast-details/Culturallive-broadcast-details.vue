<template>
	<view >
		<router></router>
	<!-- 文化资讯详情-->
	<view class="details-content">
		<view class="details-top">
			<view class="details-top-txt">
				所在位置：
			</view>
		</view>
		<view class="details-title">
			央视直播！
		</view>
		<view class="details-author">
			<text>作者：111</text>
			<text>来源：1122</text>
			<text>浏览：3333</text>
			<text>2022-01-19 10:19</text>
		</view>
		<view class="details-show">
			<view class="show1">
				
			</view>
			<image src="../../static/share.png" mode=""></image>
		</view>
		<view class="details-zan">
			<view class="zan-img">
				<view class="show2">
					
				</view>
				<image src="../../static/ic_fabulous.png" mode=""></image>
			</view>
		</view>
	    <view class="details-center">
	    	<view class="center-top">
	    		<view class="center-top-show">
	    			详细信息
	    		</view>
	    		<view class="center-top-txt">
	    			1111111
	    		</view>
	    	</view>
	    </view>
	</view>
	
	<view class="details-pinflun">
		<view class="details-pinflun-all">
			<view class="pinglun-total">
				<text class="total1">|</text>
				<text>评论0条</text>
			</view>
			<view class="pinglun-fill">
				<view class="fill-head">
					<image src="../../static/anquan.png" mode=""></image>
				</view>
				<view class="fill-input">
					<input type="text" value="" placeholder="写下你的想法" />
				</view>
			</view>
			<view class="pinglun-show">
				<view class="showfirst">
					
				</view>
				<view class="showsecond">
					<text>文明上网理性发言，请遵守新闻评论服务协议</text>
					<button type="default">发表评论</button>
				</view>
				
			</view>
			<view class="all-pinglun">
				<view class="pinglun-item">
					<view class="pinglun-item-left">
						<image src="../../static/anquan.png" mode=""></image>
					</view>
					<view class="pinglun-item-right">
						<view class="pinglun-item-right-title">
							yhw
						</view>
						<view class="pinglun-item-right-time">
							2020.12.30
						</view>
						<view class="pinglun-item-right-details">
							非常好
						</view>
						
						<view class="pinglun-huifu">
							<view class="huifu-txt">
								回复
							</view>
							<view class="huifu-img">
								<!-- <image src="../../static/right.png" mode=""></image> -->
							</view>
						</view>
					</view>
				</view>
				<view class="pinglun-item">
					<view class="pinglun-item-left">
						<image src="../../static/anquan.png" mode=""></image>
					</view>
					<view class="pinglun-item-right">
						<view class="pinglun-item-right-title">
							yhw
						</view>
						<view class="pinglun-item-right-time">
							2020.12.30
						</view>
						<view class="pinglun-item-right-details">
							非常好
						</view>
						
						<view class="pinglun-huifu">
							<view class="huifu-txt">
								回复
							</view>
							<view class="huifu-img">
								<!-- <image src="../../static/right.png" mode=""></image> -->
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
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
				wode:'',
				shouye:'',
			}
		},
		methods: {
			
			tapscroll:function(){
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






			consult(id = 0) {
				if (id == this.classify[0].id) {
					uni.navigateTo({
						url: '../consult/consult?cId=' + id
					})
				} else if (id == this.classify[1].id) {
					uni.navigateTo({
						url: '../appreciation/appreciation?cId=' + id
					})
				} else if (id == this.classify[2].id) {
					uni.navigateTo({
						url: '../inheritance/inheritance?cId=' + id
					})
				}
			},

			mien() {
				uni.navigateTo({
					url: '../mien/mien'
				})
			},

			venuereservation() {
				uni.navigateTo({
					url: '../venue-reservation/venue-reservation'
				})
			},

			activityparticipation() {
				uni.navigateTo({
					url: '../activity-participation/activity-participation'
				})
			},

			participation() {
				uni.navigateTo({
					url: '../participation/participation'
				})
			},
			map_search() {
				uni.navigateTo({
					url: '../map_search/map_search'
				})
			},
			redirect_live() {
				uni.navigateTo({

					url: '../enter-live/enter-live'
				})
			},

			touristattraction() {
				uni.navigateTo({
					url: '../tourist-attraction/tourist-attraction'
				})
			},

			touristroute() {
				uni.navigateTo({
					url: '../tourist-route/tourist-route'
				})
			},

			specialsfoods() {
				uni.navigateTo({
					url: '../specials-foods/specials-foods'
				})
			},

			hotel() {
				uni.navigateTo({
					url: '../hotel/hotel'
				})
			},

			Bookresources() {
				uni.navigateTo({
					url: '../book-resources/book-resources'
				})
			},
			groupdetails(item) {

				uni.navigateTo({
					url: '../group-details/group-details?id=' + item.id
				})
			},
			venuedetails(item) {
				uni.navigateTo({
					url: '../venue-details/venue-details?id=' + item.id
				})
			},
			activitydetails(item) {
				uni.navigateTo({
					url: '../activity-details/activity-details?id=' + item.id
				})
			},

			participationdetails(item) {
				uni.navigateTo({
					url: '../participation-details/participation-details?id=' + item.id
				})
			},

			touristAD(item) {
				uni.navigateTo({
					url: '../tourist-attraction-details/tourist-attraction-details?id=' + item.id
				})
			},

			artdetails(item) {
				uni.navigateTo({
					url: '../contents/contents?id=' + item.id
				})
			},
			live_detail(item){
				uni.navigateTo({
					url: '../live/live?id=' + item.id
				})
			},
			get_article(cate_id, key) {

				this.$request('/api/article/get_list', {
					cate: cate_id,
					area: this.area
				}, 'post', {}).then(res => {
					if (res.code == 1) {
						this.$set(this.article_data, key, res.data.lists)
					}
				})
			},
			go_register(){
				uni.navigateTo({
					url: '../register/register'
				})
			},
			go_login(){
				uni.navigateTo({
					url: '../login/login'
				})
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
			}else{
				this.area = 9784;
				uni.setStorageSync('area', 9784)
			}

			this.zangyu = this.$lang.zangyu[uni.getStorageSync('lang')]
			this.hanyu = this.$lang.hanyu[uni.getStorageSync('lang')]


			this.lang = uni.getStorageSync('lang');
			this.lang = this.lang=='zn'?'zn':'cn'




			this.innerAudioContext = uni.createInnerAudioContext();
			this.innerAudioContext.autoplay = true;
			this.innerAudioContext.loop = true;



			this.innerAudioContext.onPlay(() => {



			});
			this.innerAudioContext.onPause(() => {




			});


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


			this.$request('/api/common/banner', {
				area: this.area
			}, 'post', {

			}).then(res => {
				if (res.code == 1) {
					res.data.banner.forEach((item, key) => {
						res.data.banner[key] = item.substring(0,item.length - 7) + "@pcweb";
					})
					this.swipers = res.data.banner;
					this.icon_data = res.data.icon_data
					if (res.data.music) {
						that.innerAudioContext.src = res.data.music;
					}


				}
			});


			this.$request('/api/article/get_all_cates', {}, 'post', {}).then(res => {

				if (res.code == 1) {
					this.classify = res.data.lists

					this.classify.forEach((item, key) => {
						this.$request('/api/article/get_list', {
							cate: item.id,
							area: this.area,
							page:'1',
							pagesize:'6'
						}, 'post', {}).then(res => {
							if (res.code == 1) {
								this.$set(this.article_data, key, res.data.lists)


							}
						})
					})
				}
			});


			this.$request('/api/common/notices', {
				count: '',
				lists: [],
				area: this.area
			}, 'post', {}).then(res => {


				if (res.code == 1) {
					this.lists = res.data.lists

				}
			});

			this.$request('/api/artgroup/get_list', {
				area: this.area,
				cover: '',
				pagesize: '2'
			}, 'post', {}).then(res => {

				if (res.code === 1) {
					this.artgroup = res.data;
				}
			})

			this.$request('/api/venue/get_list', {
				area: this.area,
				cate: 1,
				pagesize: '2',
				page: '1',
				cover: this.cover
			}, 'post', {}).then(res => {


				this.venue = res.data

			})

			this.$request('/api/activity/get_list', {
				area: this.area
			}, 'post', {}).then(res => {

				if (res.code === 1) {
					this.activity = res.data;
				}
			})

			this.$request('/api/race/get_list', {
				area: this.area,
				pagesize: 1
			}, 'post', {}).then(res => {

				if (res.code === 1) {
					this.race = res.data;
				}
			})

			this.$request('/api/venue/get_travel_list', {
				area: this.area,
				page: '1',
				pagesize: '1'
			}, 'post', {}).then(res => {
				if (res.code == 1) {

					this.travel_list = res.data;

				}
			})
			
			this.$request('/api/live/get_list', {
				area: this.area,
			}, 'post', {}).then(res => {
				if (res.code == 1) {
			
					this.live = res.data;
			
				}
			})
		}
	}
</script>

<style>
	.details-pinflun-all{
		/* border: 1rpx solid yellow; */
		background-color: #FFFFFF;
		padding: 20rpx 0rpx;
	}
	.solid{
		height: 50rpx;
		background-color: #F7F7F7;
	}
	.pinglun-item-right-title{
		font-size: 24rpx;
		margin-top: 20rpx;
	}
	.pinglun-item-right-time{
		font-size: 18rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: rgba(200,200,200,1);
		margin-top: 10rpx;
	}
	.pinglun-item-right-details{
		margin-top: 20rpx;
		font-size: 20rpx;
		margin-bottom: 20rpx;
	}
	.huifu-txt{
		font-size: 20rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: rgba(200,200,200,1);
		margin-top: 10rpx;
	}
	.all-pinglun{
		padding: 0rpx 30rpx;
	}
	.pinglun-item{
		height: 200rpx;
		display: flex;
	border-top: 1rpx solid rgba(200,200,200,0.75);
	/* border-bottom: 1rpx solid rgba(200,200,200,0.75); */
	}
	.pinglun-item-left image{
		width: 68rpx;
		height: 68rpx;
		margin-top: 30rpx;
		margin-right: 30rpx;
	}
	.center-top-txt{
		padding: 50rpx;
		font-size: 40rpx;
		border-bottom: 1rpx solid rgba(200,200,200,0.75);
	}
	.fill-head image{
		width: 68rpx;
		height: 68rpx;
		margin-top: 30rpx;
		margin-right: 30rpx;
	}
	.pinglun-fill{
		padding: 0rpx 30rpx;
		display: flex;
		width: 100%;
	}
	.fill-input{
		width: 100%;
		margin-top: 20rpx;
	}
	.fill-input input{
		border-radius: 20rpx;
		width: 100%;
		height: 200rpx;
		background-color: #F7F7F7;
		border: 1rpx solid rgba(200,200,200,0.75);
	}
	.pinglun-show text{
		font-size: 20rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: rgba(200,200,200,1);
	}
	.pinglun-show button{
		width: 100rpx;
		height: 40rpx;
		font-size: 16rpx;
		background: #CF282B;
		color: #FFFFFF;
	}
	.pinglun-show{
		margin-bottom: 50rpx;
	}
	.showsecond{
		display: flex;
		margin-left: 1000rpx;
		margin-top: 20rpx;
	}
	/* .showsecond{
		display: flex;
		width: 500rpx;
		margin-top: 10rpx;
		justify-content: space-between;
	} */
	.details-pinflun{
		padding: 0rpx 170rpx;
		background-color: #F7F7F7;
		width: 100%;
		/* border: 1rpx solid red; */
		padding-top: 20rpx;
		padding-bottom: 80rpx;
	}
	.total1{
		color: red;
		margin-right: 20rpx;
	}
	.pinglun-total text{
		color: red;
		font-size: 20rpx;
	}
	.center-top-txt{
		padding: 50rpx;
		font-size: 40rpx;
	}
	.details-center{
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
		margin-top: 30rpx;
		/* padding: 0rpx 170rpx; */
	}
	.details-center{
		border: 1rpx solid rgba(200,200,200,0.75);
	}
	.center-top-show{
		font-size: 20rpx;
		height: 60rpx;
		line-height: 60rpx;
		padding-left: 20rpx;
		width: 100%;
		border-bottom: 1rpx solid rgba(200,200,200,0.75);
	}
	.details-top{
		padding-top: 40rpx;
	}
	.details-content{
		height: 100%;
		background-color: #F7F7F7;
		padding: 0rpx 170rpx;
	}
	.details-top-txt{
		font-size: 20rpx;
		line-height:48rpx ;
		height: 48rpx;
		width: 100%;
		border: 1rpx solid rgba(200,200,200,0.75);
		background-color: #FFFFFF;
		padding-left: 20rpx;
	}
	.details-title{
		text-align: center;
		margin-top: 40rpx;
		font-size: 52rpx;
		font-weight: bold;
	}
	.details-author{
		text-align: center;
		margin-top: 40rpx;
		
	}
	.details-author text{
		margin-right: 10rpx;
		font-size: 20rpx;
		
	}
	.details-show{
		display: flex;
		justify-content: space-between;
	}
	.details-show image{
		width: 24rpx;
		height: 24rpx;
		/* border: 1rpx solid red; */
		display: flex;
		right: 0;
	}
	.zan-img image{
		margin-top: 20rpx;
		width: 24rpx;
		height: 24rpx;
		/* border: 1rpx solid red; */
		display: flex;
		right: 0;
	}
	.zan-img{
		display: flex;
		justify-content: space-between;
	}
	page {
		/* 样式优先级 */
		width: 100% !important;
		max-width: 1920px  !important;
		/* max-width: 750px; */
		height: 100%;
		margin: 0 auto;
	}
	/* 定位 */
	.homeposition{
		width: 80rpx;
		height: 180rpx;
		/* border: 1rpx solid red; */
		position: fixed;
		top: 70%;
		right: 80rpx;
	}
	.homeposition-top image{
		width: 76rpx;
		height: 76rpx;
		background: #CF282B;
		border-radius: 2rpx;
	}
	.homeposition-bottom image{
		margin-top: 10rpx;
		width: 76rpx;
		height: 76rpx;
		background: #CF282B;
		border-radius: 2rpx;
	}
.home-top{
	width: 100%;
	height: 136rpx;
	line-height: 136rpx;
	/* border: 1rpx solid red; */
	display: flex;
	background-image: url(../../static/top.png);
	background-size: cover;
}
.top-left image{
	width: 97rpx;
	height: 53rpx;
	background: #CF282B;
	border-radius: 10rpx;
	margin-top: 48rpx;
	margin-left: 170rpx;
	margin-right: 25rpx;
}
.top-left-txt{
	margin-left: 170rpx;
	font-size: 52rpx;
	font-family: STXingkai;
	/* font-weight: 400; */
	color: #333333;
	/* width: 254rpx; */
	/* height: 46rpx; */
 }  
.top-left{
	margin-right: 403rpx;
	display: flex;
}
.top-center{
	width: 460rpx;
	height: 44rpx;
	border: 2rpx solid #CF282B;
	display: flex;
	margin-top: 53rpx;
	margin-right: 200rpx;
}
.top-center button{
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
.top-center input{
	width: 382rpx;
	height: 44rpx;
	line-height: 44rpx;
	text-indent: 20rpx;
}
.top-right{
	/* border: 1rpx solid red; */
	font-size: 24rpx;
	font-family: Adobe Heiti Std;
	font-weight: normal;
	color: #333333;
}
.top-right-txt1{
	margin-right: 20rpx;
}
.top-right-txt2{
	margin-left: 20rpx;
}
.home-head{
	width: 100%;
	height: 77rpx;
	background: #CF282B;
	padding: 0rpx 70rpx;
}
.home-head ul{
	/* border: 1rpx solid black; */
	width: 100%;
	height: 77rpx;
	line-height: 77rpx;
	display: flex;
	justify-content: space-around;
}
.home-head ul li{
	padding-left: 0;
	list-style: none;
	font-size: 24rpx;
	font-family: Adobe Heiti Std;
	font-weight: normal;
	color: #FFFFFF;
}
.bottom-right image{
		width: 100rpx;
		height: 100rpx;
	}
	.bottom-right{
		display: flex;
			margin-top: 30rpx;
	}
	.all-bottom{
		background: #CF282B;
		padding: 0rpx 340rpx;
		height: 160rpx;
		display: flex;
		justify-content: space-between;
	}
	.bottom-left text{
		font-size: 20rpx;
		color: #FFFFFF;
		margin-top: 50rpx;
	}
	.bottom-left{
		margin-top: 40rpx;
	}
	.bottom-right-left{
	
		margin-right: 40rpx;
	}
</style>
