<template>
	<view class="home-page">
		<!-- 头部 -->
		<view class="home-top">
			<view class="top-left">
				<view class="top-left-img">
					<image src="../../static/logo.png"></image>
				</view>
				<view class="top-left-txt">
					<text>{{areaName}}</text>
				</view>

			</view>
			<view class="top-qiehuan" @click.stop="ShowHidden=!ShowHidden">
				<!-- <text>【东莞市】·</text> -->
				<text>切换层级</text>
			</view>
			<view class="top-center">
				<input type="text" value="" placeholder="发现" />
				<text class="top_seach">搜索</text>
			</view>
			<view class="top-right">
				<text class="top-right-txt1" @click="go_login">登录</text>
				<text>|</text>
				<text class="top-right-txt2" @click="go_register">注册</text>
			</view>
		</view>

		<!-- 导航栏 -->
	<view class="home-head">
		<ul>
			<li @click="nav">首页</li>
			<li v-if="icon_data[0] && icon_data[0][0]['status']==1" @click="consult(classify[0].id,classify[0].title)">{{wenhuazixun}}</li>
			<li v-if="icon_data[0] && icon_data[0][1]['status']==1" @click="consult(classify[1].id,classify[1].title)" >{{yishujianshang}}</li>
			<li v-if="icon_data[0] && icon_data[0][2]['status']==1" @click="consult(classify[2].id,classify[2].title)">{{feiyichuancheng}}</li>
			<li v-if="icon_data[1] && icon_data[1][0]['status']==1" @click="mien(yituanfengcai)">{{yituanfengcai}}</li>
			<li v-if="icon_data[1] && icon_data[1][1]['status']==1" @click="venuereservation(changguanyuyue)" >{{changguanyuyue}}</li>
			<li  v-if="icon_data[1] && icon_data[1][2]['status']==1" @click="activityparticipation(huodongcanyu)">{{huodongcanyu}}</li>
			<li  v-if="icon_data[1] && icon_data[1][3]['status']==1" @click="participation(saishicanyu)">{{saishicanyu}}</li>
			<li v-if="icon_data[2] && icon_data[2][0]['status']==1" @click="map_search(wenhuaditu)">{{wenhuaditu}}</li>
			<li v-if="icon_data[2] && icon_data[2][1]['status']==1" @click="redirect_live(wenhuazhibo)">{{wenhuazhibo}}</li>
			<li v-if="icon_data[2] && icon_data[2][2]['status']==1" @click="touristattraction(lvyoujingdian)">{{lvyoujingdian}}</li>
			<li v-if="icon_data[2] && icon_data[2][3]['status']==1" @click="touristroute(lvyouluxian)">{{lvyouluxian}}</li>
			<li v-if="icon_data[2] && icon_data[2][4]['status']==1" @click="specialsfoods(tesemeishi)">{{tesemeishi}}</li>
			<li v-if="icon_data[2] && icon_data[2][5]['status']==1" @click="hotel(minsujiudian)">{{minsujiudian}}</li>
			<li v-if="icon_data[2] && icon_data[2][6]['status']==1" @click="Bookresources(ziyuan)">{{ziyuan}}</li>
			<!-- <li  v-if="icon_data"> -->
				</ul>
		<!-- <view class="home-head">
			<ul>
				<li @click="nav">首页</li>
				<li v-if="icon_data[0] && icon_data[0][0]['status']==1"
					@click="consult(classify[0].id,classify[0].title)">{{wenhuazixun}}</li>
				<li v-if="icon_data[0] && icon_data[0][1]['status']==1"
					@click="consult(classify[1].id,classify[1].title)">{{yishujianshang}}</li>
				<li v-if="icon_data[0] && icon_data[0][2]['status']==1"
					@click="consult(classify[2].id,classify[2].title)">{{feiyichuancheng}}</li>
				<li v-if="icon_data[1] && icon_data[1][0]['status']==1" @click="mien(yituanfengcai)">{{yituanfengcai}}
				</li>
				<li v-if="icon_data[1] && icon_data[1][1]['status']==1" @click="venuereservation">{{changguanyuyue}}
				</li>
				<li v-if="icon_data[1] && icon_data[1][2]['status']==1" @click="activityparticipation(huodongcanyu)">
					{{huodongcanyu}}
				</li>
				<li v-if="icon_data[1] && icon_data[1][3]['status']==1" @click="participation(saishicanyu)">
					{{saishicanyu}}
				</li>
				<li v-if="icon_data[2] && icon_data[2][0]['status']==1" @click="map_search">{{wenhuaditu}}</li>
				<li v-if="icon_data[2] && icon_data[2][1]['status']==1" @click="redirect_live">{{wenhuazhibo}}</li>
				<li v-if="icon_data[2] && icon_data[2][2]['status']==1" @click="touristattraction(lvyoujingdian)">{{lvyoujingdian}}
				</li>
				<li v-if="icon_data[2] && icon_data[2][3]['status']==1" @click="touristroute">{{lvyouluxian}}</li>
				<li v-if="icon_data[2] && icon_data[2][4]['status']==1" @click="specialsfoods">{{tesemeishi}}</li>
				<li v-if="icon_data[2] && icon_data[2][5]['status']==1" @click="hotel">{{minsujiudian}}</li>
				<li v-if="icon_data[2] && icon_data[2][6]['status']==1" @click="Bookresources">{{ziyuan}}</li>
				<li v-if="icon_data[2] && icon_data[2][7]['status']==1" @click="redirect_live">{{wenhuazhibo}}</li>
				<li  v-if="icon_data">
				<navigator url="/pages/hierarchy/hierarchy" open-type="navigate">
					{{cengji}}
				</navigator>
			</li>
			</ul>
		</view> -->
		<!-- 层级 -->
		<view class="cengji-auto">
			<view class="cengji" v-if="ShowHidden">
				<view class="cengji-top">
					<view :class="city.level == land[0].city?'cengji-title':'cengji-title1'">{{land[0].name}}</view>
					<view :class="city.level == land[1].city?'cengji-title':'cengji-title1'">{{land[1].name}}</view>
					<view :class="city.level == land[2].city?'cengji-title':'cengji-title1'">{{land[2].name}}</view>
					<view :class="city.level == land[3].city?'cengji-title':'cengji-title1'">{{land[3].name}}</view>
					<view :class="city.level == land[4].city?'cengji-title':'cengji-title1'">{{land[4].name}}</view>
				</view>
				<view class="cengji-show">
					<view v-for="(ins,index) in land">
						<view v-if="ins.data.prev_level != ''">
							<view class="lls" v-show="ins.data.prev_level == land[0].city">
								<view class="custom_left">{{land[0].name}}: </view>
								<view class="custom_right" v-for="(itm, index) in ins.data.prev_data">
									<view @click="choices(itm,itm.id)">{{itm.name}}</view>
								</view>
							</view>
							<view class="lls" v-show="ins.data.prev_level == land[1].city">
								<view class="custom_left">{{land[1].name}}: </view>
								<view class="custom_right" v-for="(itm, index) in ins.data.prev_data">
									<view @click="choices(itm,itm.id)">{{itm.name}}</view>
								</view>
							</view>
							<view class="lls" v-show="ins.data.prev_level == land[2].city">
								<view class="custom_left">{{land[2].name}}: </view>
								<view class="custom_right" v-for="(itm, index) in ins.data.prev_data">
									<view @click="choices(itm,itm.id)">{{itm.name}}</view>
								</view>
							</view>
							<view class="lls" v-show="ins.data.prev_level == land[3].city">
								<view class="custom_left">{{land[3].name}}: </view>
								<view class="custom_right" v-for="(itm, index) in ins.data.prev_data">
									<view @click="choices(itm,itm.id)">{{itm.name}}</view>
								</view>
							</view>
							<view class="lls" v-show="ins.data.prev_level == land[4].city">
								<view class="custom_left">{{land[4].name}}: </view>
								<view class="custom_right" v-for="(itm, index) in ins.data.prev_data">
									<view @click="choices(itm,itm.id)">{{itm.name}}</view>
								</view>
							</view>
						</view>
					</view>
					<view class="line"></view>
					<view class="cengji-center">
						<view class="ll" v-show="city.level == land[0].city">
							<view class="hh" v-for="(item, index) in city.data">
								<view :class="actives == item.id ? 'active' : 'hhs'" @click="choices(item,item.id)">
									{{item.name}}
								</view>
							</view>
						</view>
						<view class="ll" v-show="city.level==land[1].city">
							<view class="hh" v-for="(item, index) in city.data">
								<view :class="actives == item.id ? 'active' : 'hhs'" @click="choices(item,item.id)">
									{{item.name}}
								</view>
							</view>
						</view>
						<view class="ll" v-show="city.level==land[2].city">
							<view class="hh" v-for="(item, index) in city.data">
								<view :class="actives == item.id ? 'active' : 'hhs'" @click="choices(item,item.id)">
									{{item.name}}
								</view>
							</view>
						</view>
						<view class="ll" v-show="city.level==land[3].city">
							<view class="hh" v-for="(item, index) in city.data">
								<view :class="actives == item.id ? 'active' : 'hhs'" @click="choices(item,item.id)">
									{{item.name}}
								</view>
							</view>
						</view>
						<view class="ll" v-show="city.level==land[4].city">
							<view class="hh" v-for="(item, index) in city.data">
								<view :class="actives == item.id ? 'active' : 'hhs'" @click="choices(item,item.id)">
									{{item.name}}
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="line"></view>
				<view class="cengji-show">
					<view class="cengji-center">
						<view class="cengji-center-item" v-for="items in city.next_data">
							<view class="cengji-center-item-address" @click="choice(items)">{{items.name}}</view>
						</view>
					</view>
				</view>

				<view class="cengji-bottom">
					<view class="cengji-bottom-title">
						文化馆
					</view>
					<view class="cengji-bottom-item" v-if="cloud_data">
						<view class="cengji-bottom-item-name">
							<view class="ones" @click="kulturhuset(items.id)" v-for="items in cloud_data">
								{{items.title}}
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 底部黑底
		<! <view class="bottom">
		
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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ShowHidden: false,
				//层级
				qiehuan: 0,
				qh: 0,
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
				cloud_data: [],
				actives: 0,
				dijishi: '',
				quxianji: '',
				xiangzhenji: '',
				zidingyi: '',
				dijishi: '',
				quxianji: '',
				xiangzhenji: '',
				zidingyi: '',
				dijishi: '',
				quxianji: '',
				xiangzhenji: '',
				zidingyi: '',
				cunji: '',
				cunji: '',
				cunji: '',
				areaName: '',
				land: [{
					index: 0,
					city: 'city',
					data: [],
					name: '地级市'
				}, {
					index: 1,
					city: "county",
					data: [],
					name: '区县级'
				}, {
					index: 2,
					city: "town",
					data: [],
					name: '乡镇级'
				}, {
					index: 3,
					city: "village",
					data: [],
					name: '村级'
				}, {
					index: 4,
					city: "diy",
					data: [],
					name: '自定义'
				}],
				city: [],
			}
		},
		methods: {
			choice(item, index) {
				this.actives = item.id
				let id = item.id;
				this.$request('/api/area', {
					id: id
				}, 'post', {}).then(res => {
					if (res.code == 1) {
						let that=this
						this.city = res.data;
						console.log(this.city)
						// this.cloud_data = res.data.cloud_data;
						this.cloud_data=this.city.cloud_data
						console.log(this.cloud_data)
						for (let i = 0; i < this.land.length; i++) {

							if (this.land[i].city == this.city.level) {
								this.land[i].data = this.city
							}
						}
					}
				})
			},
			kulturhuset(area) {
				uni.setStorageSync('area', area);
				let pages = getCurrentPages();
				let beforePage = pages[pages.length - 2];
				uni.navigateBack({
					success: function() {
						beforePage.onLoad();
					}
				});
			},
			choices(item, index) {
				this.actives = index;
				let id = item.id;
				this.$request('/api/area', {
					id: id
				}, 'post', {}).then(res => {
					if (res.code == 1) {
						this.city = res.data;
						this.cloud_data = res.data.cloud_data;
						for (let i = 0; i < this.land.length; i++) {
							if (this.land[i].data.prev_level == item.level) {
								this.land[i].data = [];
								for (let a = 0; a < this.land.length; a++) {
									if (this.land[i].index < this.land[a].index) {
										this.land[a].data = []
									}
								}
							}
						}
					}
				})
			},
			nav() {
				uni.navigateTo({
					url: '../homePage/homePage'
				})
			},
			//层级
			cengjizh(e) {
				this.qiehuan = e
				this.qh = e
				console.log(e)
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
				this.dijishi = this.$lang.dijishi[uni.getStorageSync('lang')];
				this.quxianji = this.$lang.quxianji[uni.getStorageSync('lang')];
				this.xiangzhenji = this.$lang.xiangzhenji[uni.getStorageSync('lang')];
				this.zidingyi = this.$lang.zidingyi[uni.getStorageSync('lang')];
				this.dijishi = this.$lang.dijishi[uni.getStorageSync('lang')];
				this.quxianji = this.$lang.quxianji[uni.getStorageSync('lang')];
				this.xiangzhenji = this.$lang.xiangzhenji[uni.getStorageSync('lang')];
				this.zidingyi = this.$lang.zidingyi[uni.getStorageSync('lang')];
				this.dijishi = this.$lang.dijishi[uni.getStorageSync('lang')];
				this.quxianji = this.$lang.quxianji[uni.getStorageSync('lang')];
				this.xiangzhenji = this.$lang.xiangzhenji[uni.getStorageSync('lang')];
				this.zidingyi = this.$lang.zidingyi[uni.getStorageSync('lang')];
				this.cunji = this.$lang.cunji[uni.getStorageSync('lang')];
				this.cunji = this.$lang.cunji[uni.getStorageSync('lang')];
				this.cunji = this.$lang.cunji[uni.getStorageSync('lang')];
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
					url: '../Announcement-list/Announcement-list?area=' + this.area
				})
			},
			//文化资讯
			consult(id, name) {
				console.log(id, name)
				uni.navigateTo({
					url: '../All-information/All-information?id=' + id + '&name=' + name + '&area=' + this.area
				})
			},

			mien(e) {
				uni.navigateTo({
					url: '../Art-Troupe-list/Art-Troupe-list?name=' + e + '&area=' + this.area
				})
			},
			//场馆预约
			venuereservation(e) {
				uni.navigateTo({

					url:'../Venue-facilities/Venue-facilities?name='+e + '&area=' + this.area

				})
			},

			activityparticipation(it) {
				console.log(it)
				uni.navigateTo({
					url: '../Event-reservation/Event-reservation?name=' + it + '&area=' + this.area
				})
			},

			participation(it) {
				uni.navigateTo({
					url: '../Event-participation/Event-participation?name=' + it + '&area=' + this.area
				})
			},
			map_search() {
				uni.navigateTo({
					// url: '../map_search/map_search'
					url:'../Cultural-map/Cultural-map?area=' + this.area
				})
			},
			redirect_live() {
				uni.navigateTo({

					url: '../Culturallive-broadcast/Culturallive-broadcast?area=' + this.area
				})
			},

			touristattraction(name) {
				uni.navigateTo({
					url: '../tourist-attraction-pc/tourist-attraction-pc?name=' +name + '&area=' + this.area
				})
			},

			touristroute() {
				uni.navigateTo({
					url: '../tourist-route/tourist-route?area=' + this.area
				})
			},

			specialsfoods() {
				uni.navigateTo({
					url: '../specials-foods/specials-foods?area=' + this.area
				})
			},

			hotel() {
				uni.navigateTo({
					url: '../hotel/hotel?area=' + this.area
				})
			},
			//图书资源
			Bookresources() {
				// uni.navigateTo({
				// 	url: '../book-resources/book-resources' + '&area=' + this.area
				// })
				// #ifdef H5
				    window.location.href='https://weread.qq.com/'
				// #endif
			},
			groupdetails(item) {

				uni.navigateTo({
					url: '../group-details/group-details?id=' + item.id + '&area=' + this.area
				})
			},
			venuedetails(item) {
				uni.navigateTo({
					url: '../venue-details/venue-details?id=' + item.id + '&area=' + this.area
				})
			},
			activitydetails(item) {
				uni.navigateTo({
					url: '../activity-details/activity-details?id=' + item.id + '&area=' + this.area
				})
			},

			participationdetails(item) {
				uni.navigateTo({
					url: '../participation-details/participation-details?id=' + item.id + '&area=' + this.area
				})
			},

			touristAD(item) {
				uni.navigateTo({
					url: '../tourist-attraction-details/tourist-attraction-details?id=' + item.id + '&area=' + this.area
				})
			},

			artdetails(item) {
				uni.navigateTo({
					url: '../contents/contents?id=' + item.id + '&area=' + this.area
				})
			},
			live_detail(item) {
				uni.navigateTo({
					url: '../live/live?id=' + item.id + '&area=' + this.area
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
			go_register() {
				uni.navigateTo({
					url: '../register/register'
				})
			},
			go_login() {
				// uni.navigateTo({
				// 	url: '../login/login'
				// })
				uni.navigateTo({
					url:'../PClogin/PClogin'
				})
			}
		},
		onLoad(e) {},
		mounted() {
			let area = uni.getStorageSync('area');
			this.$request('/api/area', {
				id: area
			}, 'post', {}).then(res => {
				console.log(res)
				if (res.code == 1) {
					this.city = res.data
					this.cloud_data = res.data.cloud_data
					this.cloud_data.forEach(item => {
						if (area == item.id) {
							this.areaName = item.title
						}
					})
					this.land[0].data = res.data;
				}
			})
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
						res.data.banner[key] = item.substring(0, item.length - 7) + "@pcweb";
					})
					this.swipers = res.data.banner;
					this.icon_data = res.data.icon_data
					if (res.data.music) {
						// that.innerAudioContext.src = res.data.music;
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
							page: '1',
							pagesize: '6'
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
	.top-qiehuan {
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
	.cengji {
		width: 829rpx;
		padding-bottom: 30px;
		/* height: 538rpx; */
		background: #FFFFFF;
		border: 1rpx solid #999999;
		margin-left: 561rpx;
		position: absolute;
		bottom: 0rpx;
		z-index: 1;

	}

	.cengji-top {
		width: 100%;
		height: 77rpx;
		/* background: #DBDBDB; */
		/* border: 1rpx solid #999999; */
		display: flex;
	}

	.cengji-title {
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

	.cengji-title1 {
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

	.cengji-button {
		width: 285rpx;
		background-color: #DBDBDB;
	}

	.cengji-button button {
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

	.cengji-center {
		display: flex;
		/* justify-content: space-around; */
		flex-wrap: wrap;
	}

	.cengji-center-item {
		padding: 0 5px;
		height: 44rpx;
		/* background: #CF282B; */
		border-radius: 10rpx;
		border: 1rpx solid rgba(200, 200, 200, 0.75);
		line-height: 44rpx;
		text-align: center;
		margin-top: 20rpx;
		margin-left: 20rpx;
		margin-right: 10rpx;
	}

	.cengji-center-item-address {
		font-size: 24rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
	}

	.cengji-bottom {
		margin-top: 47rpx;
		border: 1rpx solid rgba(200, 200, 200, 0.75);
	}

	.cengji-bottom-item {
		display: flex;
		flex-wrap: wrap;
		padding: 0rpx 23rpx;

	}

	.cengji-bottom-item-name {
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

	.cengji-bottom-title {
		margin-top: 23rpx;
		margin-left: 29rpx;
		font-size: 24rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #CF282B;
		margin-bottom: 24rpx;
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
		/* background: #CF282B; */
		border-radius: 10rpx;
		margin-top: 48rpx;
		margin-left: 170rpx;
		margin-right: 25rpx;
	}

	.top-left-txt {
		margin-right: 64rpx;
		/* margin-left: 170rpx; */
		font-size: 52rpx;
		font-family: STXingkai;
		/* font-weight: 400; */
		color: #333333;
		/* width: 254rpx; */
		/* height: 46rpx; */
	}

	.top-left {
		/* margin-right: 403rpx; */
		display: flex;
	}

	.top-center {
		width: 460rpx;
		height: 44rpx;
		border: 2rpx solid #CF282B;
		display: flex;
		margin-top: 53rpx;
		margin-left: 100rpx;
		margin-right: 47rpx;
		display: flex;
		/* margin-right: 200rpx; */
	}

	.top_seach {
		display: inline-block;
		width: 78px;
		font-size: 22px;
		background: #CF282B;
		line-height: 40px;
		text-align: center;
		color: #FFFFFF;
	}

	/* .top-center button{
	width: 78rpx;
	height: 44rpx;
	line-height: 44rpx;
	background: #CF282B;
	font-size: 24rpx;
	font-family: Adobe Heiti Std;
	font-weight: normal;
	color: #FFFFFF;
	text-align: center;
} */
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

	.home-bannar {
		width: 100%;
		height: 600rpx;
	}

	.home-bannar image {
		width: 100%;
		height: 600rpx;
	}

	.Cultural-Information {
		width: 100%;
		height: 660rpx;
		/* border: 1rpx solid yellow; */
		padding: 0rpx 170rpx;
	}

	.Information-top-left-top {
		margin-top: 40rpx;
		font-size: 40rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;
		/* margin-bottom: 11rpx; */
	}

	.Information-top-left-bottom {
		font-size: 28rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;
		margin-bottom: 31rpx;
	}

	.Information-top-right-img image {
		width: 44rpx;
		height: 64rpx;
		opacity: 0.6;
		margin-top: 47rpx;
		margin-right: 32rpx;
	}

	.Information-top-right-txt {
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

	.Information-top {
		display: flex;
		justify-content: space-between;
		border-bottom: 1rpx solid rgba(200, 200, 200, 0.75);
	}

	.Information-content {
		display: flex;
		justify-content: space-between;
		background-color: #FFFFFF;
	}

	.Information-content-right image {
		width: 750rpx;
		height: 439rpx;
		margin-top: 20rpx;
	}

	.Information-top-right {
		display: flex;
	}

	.Information-content-left {
		margin-top: 20rpx;
		width: 750rpx;
		height: 446rpx;
		/* border: 1rpx solid red; */
	}

	.Information-content-left-item {
		display: flex;
		justify-content: space-between;
		height: 70rpx;
		line-height: 70rpx;
		border-bottom: 1rpx solid rgba(200, 200, 200, 0.75);
		font-size: 22rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;
	}

	.Information-content-left-item-txt1 {
		margin-right: 10rpx;
	}

	.Information-content-left-item-txt2 {
		margin-left: 10rpx;
	}

	.Information-content-left-item-time {
		font-size: 22rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;
	}

	.Art-Appreciation {
		padding: 0rpx 170rpx;
		background: #F4F4F4;
		/* opacity: 0.38; */
		height: 1030rpx;
	}

	.Appreciation-content-item {
		width: 510rpx;
		height: 100%;
		/* border: 1rpx solid #000000; */
		margin-top: 30rpx;
		margin-right: 10rpx;
		margin-bottom: 20rpx;
	}

	.Appreciation-content {
		display: flex;
		flex-wrap: wrap;
	}

	.Appreciation-content-item-img image {
		width: 510rpx;
		height: 300rpx;
	}

	.Appreciation-content-item-txt {

		display: flex;
		justify-content: space-between;
		border-bottom: 1rpx solid rgba(200, 200, 200, 0.75);
		padding: 0rpx 20rpx;
	}

	.Appreciation-content-item-txt-left {
		width: 350rpx;
		word-break: keep-all;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
		font-size: 28rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;
	}

	.Appreciation-content-item-txt-right {
		margin-top: 20rpx;
		margin-bottom: 20rpx;
		font-size: 24rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;
	}

	.Cultural-Inheritance {
		padding: 0rpx 170rpx;
	}

	.Cultural-Inheritance {
		height: 919rpx;
		width: 100%;
		/* border: 1rpx solid red; */
		background-color: #FFFFFF;
	}

	.Inheritance-content {
		margin-top: 26rpx;
		display: flex;
		justify-content: space-around;

	}

	.Inheritance-content-item {
		width: 510rpx;
		height: 690rpx;
		/* border: 1rpx solid red; */
	}

	.Inheritance-content-item-img image {
		width: 510rpx;
		height: 690rpx;
	}

	.Inheritance-content-item-txt {
		position: relative;
		top: -104rpx;
		width: 510rpx;
		height: 104rpx;
		background: #FFFFFF;
		opacity: 0.3;
		padding: 20rpx 20rpx;
	}

	.Inheritance-txt-title {
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

	.Inheritance-txt-show {
		margin-top: 8rpx;
		font-size: 24rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #3B4144;
	}

	.Group-Style {
		width: 100%;
		height: 990rpx;
		background: #F4F4F4;
		padding: 0rpx 170rpx;
		/* opacity: 0.38; */
	}

	.Group-Style-content {
		margin-top: 20rpx;
		display: flex;
	}

	.Group-Style-content-left {
		width: 1123rpx;
		height: 777rpx;
		/* border: 1rpx solid red; */
		margin-right: 30rpx;
	}

	.Group-Style-content-left-title {
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

	.Group-Style-content-left-img image {
		width: 1123rpx;
		height: 700rpx;
	}

	.Group-Style-item {
		width: 412rpx;
		height: 234rpx;
		/* border: 1rpx solid black; */
		margin-bottom: 37rpx;
	}

	.Style-item-img image {
		width: 412rpx;
		height: 234rpx;
	}

	.Style-item-txt {
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

	.Style-item-txt1 {
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

	.Style-item-state {
		position: relative;
		top: -268rpx;
		margin-left: 19rpx;
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

	.Activity-Participation {
		padding: 0rpx 170rpx;
		background-color: #FFFFFF;
		height: 702rpx;
		width: 100%;
		/* border: 1rpx solid yellow; */
	}

	.Activity-Participation-item {
		width: 370rpx;
		height: 459rpx;
		background: #FFFFFF;
		box-shadow: 0px 0px 13rpx 0px rgba(0, 0, 0, 0.16);
		margin-top: 40rpx;
	}

	.Participation-item-img image {
		width: 370rpx;
		height: 269rpx;
	}

	.Participation-item-title {
		font-size: 28rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;
		margin-top: 19rpx;
		margin-left: 20rpx;
	}

	.Participation-item-address {
		font-size: 22rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #999999;
		margin-left: 20rpx;
	}

	.Participation-item-time {
		font-size: 22rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #999999;
		margin-left: 20rpx;
	}

	.Participation-item-bottom {
		display: flex;
		width: 370rpx;
		height: 53rpx;
		border: 1rpx solid red;
		margin-top: 19rpx;
	}

	.Participation-item-bottom-button button {
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

	.Participation-item-bottom-txt {
		height: 53rpx;
		line-height: 53rpx;
		text-align: center;
		width: 185rpx;
		font-size: 24rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;
	}

	.Activity-Participation-content {
		display: flex;
		justify-content: space-around;
	}

	.Venue-Reservation {
		width: 100%;
		height: 800rpx;
		background: #F4F4F4;
		padding: 0rpx 170rpx;
		/* opacity: 0.38; */
	}

	.Venue-Reservation-content {
		margin-top: 20rpx;
	}

	.Venue-img image {
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
	.Venue-center-left image {
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
	.Venue-center-imgright image {
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

	.Venue-center-img image {
		width: 650rpx;
		height: 358rpx;
		margin-right: 70rpx;
	}

	.Venue-center {
		width: 100%;
		height: 358rpx;
		/* border: 1rpx solid yellow; */
		position: relative;
		top: -500rpx;
		display: flex;
	}

	.center-right-title {
		font-size: 36rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #FFFFFF;
	}

	.center-right-address {
		margin-top: 46rpx;
		font-size: 24rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #FFFFFF;
	}

	.center-right-phone {
		margin-top: 27rpx;
		font-size: 24rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #FFFFFF;
	}

	.center-right-button button {
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

	.Venue-center-right {
		width: 500rpx;
		height: 100%;
		/* border: 1rpx solid black; */
		margin-right: 120rpx;
	}

	.Cultural-live {
		padding: 0rpx 170rpx;
	}

	.bottom {
		/* margin-top: 20rpx; */
		width: 100%;
		height: 309px;
		background: #000000;
	}

	.hh {}

	.hhs {
		height: 44px;
		line-height: 44px;
		padding: 0 5px;
		border: solid 1px rgba(200, 200, 200, 0.75);
		border-radius: 10px;
		margin-left: 20px;
		font-size: 24rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		margin-top: 20px;
	}

	.active {
		height: 44px;
		line-height: 44px;
		padding: 0 5px;
		border-radius: 10px;
		margin-left: 20px;
		font-size: 24rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		background: #CF282B;
		color: #FFFFFF;
		margin-top: 20px;
	}

	.line {
		margin-top: 20px;
		width: 100%;
		height: 1px;
		background-color: rgba(200, 200, 200, 0.75);
	}

	.ll {
		display: flex;
		flex-wrap: wrap;
	}

	.lls {
		display: flex;
		font-size: 24rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
	}

	.custom_left {
		margin-left: 20px;
		margin-top: 20px;
		line-height: 44px;
	}

	.custom_right {
		height: 44px;
		line-height: 44px;
		padding: 0 5px;
		border: solid 1px rgba(200, 200, 200, 0.75);
		border-radius: 10px;
		margin-left: 20px;
		font-size: 24rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		margin-top: 20px;
	}
</style>
