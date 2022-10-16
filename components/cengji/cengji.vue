<template>
	<!-- 层级 -->
	<view class="cengji-auto">
		<view class="cengji" v-if="ShowHidden">
			<view class="cengji-top" >
				<view :class="qh==0?'cengji-title':'cengji-title1'" @click="cengjizh(0)">
					<text >地级市</text>
					
				</view>
				<view :class="qh==1?'cengji-title':'cengji-title1'"  @click="cengjizh(1)">
					<text >区县级</text>
				</view>
				<view :class="qh==2?'cengji-title':'cengji-title1'" @click="cengjizh(2)">
					<text >乡镇级</text>
				</view>
				<view :class="qh==3?'cengji-title':'cengji-title1'" @click="cengjizh(3)">
					<text >村级</text>
				</view>
				<view class="cengji-button">
					<button type="default">确认</button>
				</view>
			</view>
			<view class="cengji-show">
				<view class="cengji-center" v-show="qiehuan==0">
					<view class="cengji-center-item">
						<view class="cengji-center-item-address">
							东莞市
						</view>
					</view>
					<view class="cengji-center-item">
						<view class="cengji-center-item-address">
							东莞市
						</view>
					</view>
					<view class="cengji-center-item">
						<view class="cengji-center-item-address">
							东莞市
						</view>
					</view>
					<view class="cengji-center-item">
						<view class="cengji-center-item-address">
							东莞市
						</view>
					</view>
					<view class="cengji-center-item">
						<view class="cengji-center-item-address">
							东莞市
						</view>
					</view>
					<view class="cengji-center-item">
						<view class="cengji-center-item-address">
							东莞市
						</view>
					</view>
					<view class="cengji-center-item">
						<view class="cengji-center-item-address">
							东莞市
						</view>
					</view>
					<view class="cengji-center-item">
						<view class="cengji-center-item-address">
							东莞市
						</view>
					</view>
					<view class="cengji-center-item">
						<view class="cengji-center-item-address">
							东莞市
						</view>
					</view>
					<view class="cengji-center-item">
						<view class="cengji-center-item-address">
							东莞市
						</view>
					</view>
					<view class="cengji-center-item">
						<view class="cengji-center-item-address">
							东莞市
						</view>
					</view>
					<view class="cengji-center-item">
						<view class="cengji-center-item-address">
							东莞市
						</view>
					</view>
				</view>
				<view class="cengji-center" v-show="qiehuan==1">
					<view class="cengji-center-item">
						<view class="cengji-center-item-address">
							深圳市
						</view>
					</view>
					<view class="cengji-center-item">
						<view class="cengji-center-item-address">
							深圳市
						</view>
					</view>
					<view class="cengji-center-item">
						<view class="cengji-center-item-address">
							深圳市
						</view>
					</view>
					<view class="cengji-center-item">
						<view class="cengji-center-item-address">
							深圳市
						</view>
					</view>
					<view class="cengji-center-item">
						<view class="cengji-center-item-address">
							东莞市
						</view>
					</view>
					<view class="cengji-center-item">
						<view class="cengji-center-item-address">
							东莞市
						</view>
					</view>
					<view class="cengji-center-item">
						<view class="cengji-center-item-address">
							东莞市
						</view>
					</view>
					<view class="cengji-center-item">
						<view class="cengji-center-item-address">
							东莞市
						</view>
					</view>
					<view class="cengji-center-item">
						<view class="cengji-center-item-address">
							东莞市
						</view>
					</view>
					<view class="cengji-center-item">
						<view class="cengji-center-item-address">
							东莞市
						</view>
					</view>
					<view class="cengji-center-item">
						<view class="cengji-center-item-address">
							东莞市
						</view>
					</view>
					<view class="cengji-center-item">
						<view class="cengji-center-item-address">
							东莞市
						</view>
					</view>
				</view>
				<view class="cengji-center" v-show="qiehuan==2">
					<view class="cengji-center-item">
						<view class="cengji-center-item-address">
							东莞市
						</view>
					</view>
					<view class="cengji-center-item">
						<view class="cengji-center-item-address">
							东莞市
						</view>
					</view>
				</view>
				<view class="cengji-center" v-show="qiehuan==3">
					<view class="cengji-center-item">
						<view class="cengji-center-item-address">
							东莞市
						</view>
					</view>
					<view class="cengji-center-item">
						<view class="cengji-center-item-address">
							东莞市
						</view>
					</view>
				</view>
			</view>
			
			<view class="cengji-bottom">
				<view class="cengji-bottom-title">
					文化馆
				</view>
				<view class="cengji-bottom-item">
					<view class="cengji-bottom-item-name">
						东莞数字文化馆
					</view>
					<view class="cengji-bottom-item-name">
						东莞数字文化馆
					</view>
					<view class="cengji-bottom-item-name">
						东莞数字文化馆
					</view>
					<view class="cengji-bottom-item-name">
						东莞数字文化馆
					</view>
					<view class="cengji-bottom-item-name">
						东莞数字文化馆
					</view>
					<view class="cengji-bottom-item-name">
						东莞数字文化馆
					</view>
					<view class="cengji-bottom-item-name">
						东莞数字文化馆
					</view>
					<view class="cengji-bottom-item-name">
						东莞数字文化馆
					</view>
				</view>
			</view>
		</view>
	</view>
	<!-- 底部黑底 -->
	<!-- <view class="bottom">
		
	</view> -->
	<!-- 定位上滑 -->
	<!-- <view class="homeposition">
		<view class="homeposition-top">
			<navigator url="/pages/hierarchy/hierarchy" open-type="navigate">
			<image src="../../static/ceng.png"></image>
			</navigator>
		</view>
		<view class="homeposition-bottom"  @click="tapscroll">
			<image src="../../static/goback.png"></image>
		</view>
	</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ShowHidden:false,
				//层级
				qiehuan:0,
				qh:0,
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
			//层级
			cengjizh(e){
				this.qiehuan=e
				this.qh=e
				console.log(e)
			},
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
			//文化资讯
			consult(){
				uni.navigateTo({
					url:'../All-information/All-information'
				})
			},





			// consult(id = 0) {
			// 	if (id == this.classify[0].id) {
			// 		uni.navigateTo({
			// 			url: '../consult/consult?cId=' + id
			// 		})
			// 	} else if (id == this.classify[1].id) {
			// 		uni.navigateTo({
			// 			url: '../appreciation/appreciation?cId=' + id
			// 		})
			// 	} else if (id == this.classify[2].id) {
			// 		uni.navigateTo({
			// 			url: '../inheritance/inheritance?cId=' + id
			// 		})
			// 	}
			// },

			mien() {
				uni.navigateTo({
					url:'../Art-Troupe-list/Art-Troupe-list'
				})
			},
			//场馆预约
			venuereservation() {
				uni.navigateTo({
					url:'../Venue-facilities/Venue-facilities'
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
		mounted() {
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
	.top-qiehuan{
		font-size: 24rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #CF282B;
		/* margin-right: 336rpx; */
	}
	/* .cengji-auto{
		width: 100%;
		margin:0 auto;
	} */
	.cengji{
		width: 829rpx;
		height: 538rpx;
		background: #FFFFFF;
		border: 1rpx solid #999999;
		margin-left: 561rpx;
		position: absolute;
		top:0rpx;
	}
	.cengji-top{
		width:100%;
		height: 77rpx;
		/* background: #DBDBDB; */
		/* border: 1rpx solid #999999; */
		display: flex;
	}
	.cengji-title{
		text-align: center;
		width: 140rpx;
		height: 77rpx;
		line-height: 77rpx;
		/* border: 1rpx solid #999999; */
		background-color: #FFFFFF;
		font-size: 24rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;
	}
	.cengji-title1{
		text-align: center;
		width: 140rpx;
		height: 77rpx;
		line-height: 77rpx;
		border: 1rpx solid #999999;
		background-color: #DBDBDB;
		font-size: 24rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;
	}
	.cengji-button{
		width: 285rpx;
		background-color: #DBDBDB;
	}
	.cengji-button button{
		width: 78rpx;
		height: 44rpx;
		line-height: 44rpx;
		background: #CF282B;
		border-radius: 10rpx;
		font-size: 24rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #FFFFFF;
		margin-left: 49rpx;
		margin-top: 17rpx;
	}
	.cengji-center{
		display: flex;
		/* justify-content: space-around; */
		flex-wrap: wrap;
	}
	.cengji-center-item{
		width: 84rpx;
		height: 44rpx;
		/* background: #CF282B; */
		border-radius: 10rpx;
		border: 1rpx solid rgba(200,200,200,0.75);
		line-height: 44rpx;
		text-align: center;
		margin-top: 20rpx;
		margin-left: 20rpx;
		margin-right: 10rpx;
	}
	.cengji-center-item-address{
		font-size: 24rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
	}
	.cengji-bottom{
		margin-top: 47rpx;
		border: 1rpx solid rgba(200,200,200,0.75);
	}
	.cengji-bottom-item{
		display: flex;
		flex-wrap: wrap;
		padding: 0rpx 23rpx;
		
	}
	.cengji-bottom-item-name{
		font-size: 24rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		width: 176rpx;
		height: 44rpx;
		line-height: 44rpx;
		background: #CF282B;
		border-radius: 10rpx;
		text-align: center;
		color: #FFFFFF;
		margin-right: 20rpx;
		margin-bottom: 20rpx;
	}
	.cengji-bottom-title{
		margin-top: 23rpx;
		margin-left: 29rpx;
		font-size: 24rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #CF282B ;
		margin-bottom: 24rpx;
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
	/* background: #CF282B; */
	border-radius: 10rpx;
	margin-top: 48rpx;
	margin-left: 170rpx;
	margin-right: 25rpx;
}
.top-left-txt{
	margin-right: 64rpx;
	/* margin-left: 170rpx; */
	font-size: 52rpx;
	font-family: STXingkai;
	/* font-weight: 400; */
	color: #333333;
	/* width: 254rpx; */
	/* height: 46rpx; */
 }  
.top-left{
	/* margin-right: 403rpx; */
	display: flex;
}
.top-center{
	width: 460rpx;
	height: 44rpx;
	border: 2rpx solid #CF282B;
	display: flex;
	margin-top: 53rpx;
	margin-left: 100rpx;
	margin-right: 47rpx;
	/* margin-right: 200rpx; */
}
.top-center button{
	width: 78rpx;
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
.home-bannar{
	width: 100%;
	height: 600rpx;
}
.home-bannar image{
	width: 100%;
	height: 600rpx;
}
.Cultural-Information{
	width: 100%;
	height: 660rpx;
	/* border: 1rpx solid yellow; */
	padding:0rpx 170rpx;
}
.Information-top-left-top{
	margin-top: 40rpx;
	font-size: 40rpx;
	font-family: Adobe Heiti Std;
	font-weight: normal;
	color: #333333;
	/* margin-bottom: 11rpx; */
}
.Information-top-left-bottom{
	font-size: 28rpx;
	font-family: Adobe Heiti Std;
	font-weight: normal;
	color: #333333;
	margin-bottom: 31rpx;
}
.Information-top-right-img image{
	width: 44rpx;
	height: 64rpx;
	opacity: 0.6;
	margin-top: 47rpx;
	margin-right: 32rpx;
}
.Information-top-right-txt{
	width: 73rpx;
	height: 34rpx;
	line-height: 34rpx;
	text-align: center;
	background: #FFFFFF;
	border: 2rpx solid #CF282B;
	border-radius: 4rpx;
	font-size: 20rpx;
	font-family: Adobe Heiti Std;
	font-weight: normal;
	color: #CF282B;
	margin-top: 62rpx;
}
.Information-top{
	display: flex;
	justify-content: space-between;
	border-bottom: 1rpx solid rgba(200,200,200,0.75);
}
.Information-content{
	display: flex;
	justify-content: space-between;
	background-color: #FFFFFF;
}
.Information-content-right image{
	width: 750rpx;
	height: 439rpx;
	margin-top: 20rpx;
}
.Information-top-right{
	display: flex;
}
.Information-content-left{
	margin-top: 20rpx;
	width:750rpx ;
	height: 446rpx;
	/* border: 1rpx solid red; */
}
.Information-content-left-item{
	display: flex;
	justify-content: space-between;
	height: 70rpx;
	line-height: 70rpx;
	border-bottom: 1rpx solid rgba(200,200,200,0.75);
	font-size: 22rpx;
	font-family: Adobe Heiti Std;
	font-weight: normal;
	color: #333333;
}
.Information-content-left-item-txt1{
	margin-right: 10rpx;
}
.Information-content-left-item-txt2{
	margin-left: 10rpx;
}
.Information-content-left-item-time{
	font-size: 22rpx;
	font-family: Adobe Heiti Std;
	font-weight: normal;
	color: #333333;
}
.Art-Appreciation{
	padding: 0rpx 170rpx;
	background: #F4F4F4;
	/* opacity: 0.38; */
	height: 1030rpx;
}
.Appreciation-content-item{
	width: 510rpx;
	height:100% ;
	/* border: 1rpx solid #000000; */
	margin-top: 30rpx;
	margin-right: 10rpx;
	margin-bottom: 20rpx;
}
.Appreciation-content{
	display: flex;
	flex-wrap: wrap;
}
.Appreciation-content-item-img image{
	width: 510rpx;
	height: 300rpx;
}
.Appreciation-content-item-txt{
	
	display: flex;
	justify-content: space-between;
	border-bottom: 1rpx solid rgba(200,200,200,0.75);
	padding: 0rpx 20rpx;
}
.Appreciation-content-item-txt-left{
	width: 350rpx;
	word-break:keep-all;
	white-space:nowrap;
	overflow:hidden;
	text-overflow:ellipsis;
	margin-top: 20rpx;
	margin-bottom: 20rpx;
	font-size: 28rpx;
	font-family: Adobe Heiti Std;
	font-weight: normal;
	color: #333333;
}
.Appreciation-content-item-txt-right{
	margin-top: 20rpx;
	margin-bottom: 20rpx;
	font-size: 24rpx;
	font-family: Adobe Heiti Std;
	font-weight: normal;
	color: #333333;
}
.Cultural-Inheritance{
	padding: 0rpx 170rpx;
}
.Cultural-Inheritance{
	height: 919rpx;
	width: 100%;
	/* border: 1rpx solid red; */
	background-color: #FFFFFF;
}
.Inheritance-content{
	margin-top: 26rpx;
	display: flex;
	justify-content: space-around;
	
}
.Inheritance-content-item{
	width: 510rpx;
	height: 690rpx;
	/* border: 1rpx solid red; */
}
.Inheritance-content-item-img image{
	width: 510rpx;
	height: 690rpx;
}
.Inheritance-content-item-txt{
	position: relative;
	top: -104rpx;
	width: 510rpx;
	height: 104rpx;
	background: #FFFFFF;
	opacity: 0.3;
	padding: 20rpx 20rpx;
}
.Inheritance-txt-title{
	word-break: keep-all;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	font-size: 28rpx;
	font-family: Adobe Heiti Std;
	font-weight: normal;
	color: #3B4144;
	/* padding-top: 20rpx;
	margin-left: 20rpx; */
}
.Inheritance-txt-show{
	margin-top: 8rpx;
	font-size: 24rpx;
	font-family: Adobe Heiti Std;
	font-weight: normal;
	color: #3B4144;
}
.Group-Style{
	width: 100%;
	height: 990rpx;
	background: #F4F4F4;
	padding: 0rpx 170rpx;
	/* opacity: 0.38; */
}
.Group-Style-content{
	margin-top: 20rpx;
	display: flex;
}
.Group-Style-content-left{
	width: 1123rpx;
	height: 777rpx;
	/* border: 1rpx solid red; */
	margin-right: 30rpx;
}
.Group-Style-content-left-title{
	width: 1123rpx;
	height: 77rpx;
	line-height: 77rpx;
	background: #CF282B;
	text-align: center;
	font-size: 28rpx;
	font-family: Adobe Heiti Std;
	font-weight: normal;
	color: #FFFFFF;
}
.Group-Style-content-left-img image{
	width: 1123rpx;
	height: 700rpx;
}
.Group-Style-item{
	width: 412rpx;
	height: 234rpx;
	/* border: 1rpx solid black; */
	margin-bottom: 37rpx;
}
.Style-item-img image{
	width: 412rpx;
	height: 234rpx;
}
.Style-item-txt{
	position: relative;
	top: -52rpx;
	width: 411rpx;
	height: 50rpx;
	line-height: 50rpx;
	background: #333333;
	opacity: 0.7;
	font-size: 22rpx;
	font-family: Adobe Heiti Std;
	font-weight: normal;
	color: #FFFFFF;
	text-align: center;
}
.Style-item-txt1{
	position: relative;
	top: -52rpx;
	width: 411rpx;
	height: 50rpx;
	line-height: 50rpx;
	background: #333333;
	opacity: 0.7;
	font-size: 22rpx;
	font-family: Adobe Heiti Std;
	font-weight: normal;
	color: #FFFFFF;
	padding-left: 18rpx;
	/* text-align: center; */
}
.Style-item-state{
	position: relative;
	top: -268rpx;
	margin-left:19rpx ;
	width: 100rpx;
	height: 36rpx;
	line-height: 36rpx;
	background: #FF6C2B;
	border-radius: 8rpx;
	font-size: 18rpx;
	font-family: Adobe Heiti Std;
	font-weight: normal;
	color: #FFFFFF;
	text-align: center;
}
.Activity-Participation{
	padding: 0rpx 170rpx;
	background-color: #FFFFFF;
	height: 702rpx;
	width: 100%;
	/* border: 1rpx solid yellow; */
}
.Activity-Participation-item{
	width: 370rpx;
	height: 459rpx;
	background: #FFFFFF;
	box-shadow: 0px 0px 13rpx 0px rgba(0, 0, 0, 0.16);
	margin-top: 40rpx;
}
.Participation-item-img image{
	width: 370rpx;
	height: 269rpx;
}
.Participation-item-title{
	font-size: 28rpx;
	font-family: Adobe Heiti Std;
	font-weight: normal;
	color: #333333;
	margin-top: 19rpx;
	margin-left: 20rpx;
}
.Participation-item-address{
	font-size: 22rpx;
	font-family: Adobe Heiti Std;
	font-weight: normal;
	color: #999999;
	margin-left: 20rpx;
}
.Participation-item-time{
	font-size: 22rpx;
	font-family: Adobe Heiti Std;
	font-weight: normal;
	color: #999999;
	margin-left: 20rpx;
}
.Participation-item-bottom{
	display: flex;
	width: 370rpx;
	height: 53rpx;
	border: 1rpx solid red;
	margin-top: 19rpx;
}
.Participation-item-bottom-button button{
	width: 185rpx;
	height: 53rpx;
	line-height: 53rpx;
	background: #CF282B;
	font-size: 24rpx;
	font-family: Adobe Heiti Std;
	font-weight: normal;
	color: #FFFFFF;
	box-shadow: 0px 0px 13rpx 0px rgba(0, 0, 0, 0.16);
}
.Participation-item-bottom-txt{
	height: 53rpx;
	line-height: 53rpx;
	text-align: center;
	width: 185rpx;
	font-size: 24rpx;
	font-family: Adobe Heiti Std;
	font-weight: normal;
	color: #333333;
}
.Activity-Participation-content{
	display: flex;
	justify-content: space-around;
}
.Venue-Reservation{
	width: 100%;
	height: 800rpx;
	background: #F4F4F4;
	padding: 0rpx 170rpx;
	/* opacity: 0.38; */
}
.Venue-Reservation-content{
	margin-top: 20rpx;
}
.Venue-img image{
	width: 1560rpx;
	height: 600rpx;
	background: #333333;
	opacity: 0.5;
	/* border: 1rpx solid red; */
}
/* .Venue-center-left{
	width: 50rpx;
	height: 100rpx;
	line-height: 100rpx;
	text-align: center;
	background: #333333;
	border: 2rpx solid #FFFFFF;
	margin-left: 30rpx;
	margin-top: 128rpx;
	margin-right: 70rpx;
} */
.Venue-center-left image{
	width: 50rpx;
	height: 100rpx;
	line-height: 100rpx;
	text-align: center;
	background: #333333;
	border: 2rpx solid #FFFFFF;
	margin-left: 30rpx;
	margin-top: 128rpx;
	margin-right: 70rpx;
	
}
/* .Venue-center-imgright{
	width: 50rpx;
	height: 100rpx;
	line-height: 100rpx;
	text-align: center;
	background: #333333;
	border: 2rpx solid #FFFFFF;
	/* margin-left: 30rpx; */
	/* margin-top: 128rpx; */
	/* margin-right: 30rpx; */
/* } */ 
.Venue-center-imgright image{
	width: 50rpx;
	height: 100rpx;
	line-height: 100rpx;
	text-align: center;
	background: #333333;
	border: 2rpx solid #FFFFFF;
	/* margin-left: 30rpx; */
	margin-top: 128rpx;
	margin-right: 30rpx;
}
.Venue-center-img image{
	width: 650rpx;
	height: 358rpx;
	margin-right: 70rpx;
}
.Venue-center{
	width: 100%;
	height: 358rpx;
	/* border: 1rpx solid yellow; */
	position: relative;
	top: -500rpx;
	display: flex;
}
.center-right-title{
	font-size: 36rpx;
	font-family: Adobe Heiti Std;
	font-weight: normal;
	color: #FFFFFF;
}
.center-right-address{
	margin-top: 46rpx;
	font-size: 24rpx;
	font-family: Adobe Heiti Std;
	font-weight: normal;
	color: #FFFFFF;
}
.center-right-phone{
	margin-top: 27rpx;
	font-size: 24rpx;
	font-family: Adobe Heiti Std;
	font-weight: normal;
	color: #FFFFFF;
}
.center-right-button button{
	width: 135rpx;
	height: 60rpx;
	line-height: 60rpx;
	background: #CF282B;
	border: 2rpx solid #FFFFFF;
	font-size: 24rpx;
	font-family: Adobe Heiti Std;
	font-weight: normal;
	color: #FFFFFF;
	margin-left: 0rpx;
	margin-top: 66rpx;
}
.Venue-center-right{
	width: 500rpx;
	height: 100%;
	/* border: 1rpx solid black; */
	margin-right: 120rpx;
}
.Cultural-live{
	padding: 0rpx 170rpx;
}
.bottom{
	margin-top: 20rpx;
	width: 100%;
	height: 309px;
	background: #000000;
}
</style>
