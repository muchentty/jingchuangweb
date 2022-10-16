<template>
	<view class="first-home-page">
		<router></router>
		<!-- <cengji></cengji> -->
	<view class="home-bannar">
		<image :src="swipers[0]"></image>
	</view>
	<!-- 文化资讯 -->
	<view class="Cultural-Information" v-if="article_data[1].length">
		<view class="Information-top">
			<view class="Information-top-left">
				<view class="Information-top-left-top">
					{{yishujianshang}}
				</view>
				<view class="Information-top-left-bottom">
					Art Appreciation
				</view>
			</view>
			<view class="Information-top-right">
				<view class="Information-top-right-img">
					<image src="../../static/tree.png"></image>
				</view>
				<view class="Information-top-right-txt" @click="consult(2,yishujianshang)">
					MORE
				</view>
			</view>
		</view>
		<view class="Information-content">
			<view class="Information-content-left">
				
				<view class="Information-content-left-item" v-for="(ite,ind) in article_data[1]" @click="artdetails(ite,yishujianshang)">
					<view class="Information-content-left-item-txt">
						<text class="Information-content-left-item-txt1">{{ite.title}}</text>
						<text class="Information-content-left-item-txt1"></text>
					</view>
					<view class="Information-content-left-item-time">
						{{ite.update_time}}
					</view>
				</view>
				
			</view>
			<view class="Information-content-right">
				<image :src="article_data[1][0].cover"></image>
			</view>
		</view>
	</view>
	<view class="Art-Appreciation"  v-if="article_data[0].length">
		<view class="Information-top">
			<view class="Information-top-left">
				<view class="Information-top-left-top">
					{{wenhuazixun}}
				</view>
				<view class="Information-top-left-bottom">
					Cultural Information
				</view>
			</view>
			<view class="Information-top-right" @click="consult(1,wenhuazixun)">
				<view class="Information-top-right-img">
					<image src="../../static/tree.png"></image>
				</view>
				<view class="Information-top-right-txt">
					MORE
				</view>
			</view>
		</view>
		<!-- 艺术鉴赏 -->
		<view class="Appreciation-content">
			
			<view class="Appreciation-content-item" v-for="(ite,ind) in article_data[0]" @click="artdetails(ite,wenhuazixun)">
				<view class="Appreciation-content-item-img">
					<image :src="ite.cover"></image>
				</view>
				<view class="Appreciation-content-item-txt">
					<view class="Appreciation-content-item-txt-left">
						{{ite.title}}
					</view>
					<view class="Appreciation-content-item-txt-right">
						<text>{{ite.views}}</text>
						<text>人观看</text>
					</view>
				</view>
			</view>
			
			
		</view>
	</view>
	<!-- 非遗传承 -->
	<view class="Cultural-Inheritance" v-if="article_data[2].length">
		<view class="Information-top">
			<view class="Information-top-left">
				<view class="Information-top-left-top">
{{feiyichuancheng}}
				</view>
				<view class="Information-top-left-bottom">
					Intangible Cultural Heritage Inheritance
				</view>
			</view>
			<view class="Information-top-right" @click="consult(10,feiyichuancheng)">
				<view class="Information-top-right-img">
					<image src="../../static/tree.png"></image>
				</view>
				<view class="Information-top-right-txt">
					MORE
				</view>
			</view>
		</view>
		<view class="Inheritance-content">
			<view class="Inheritance-content-item"  v-for="(ite,ind) in article_data[2]"  @click="artdetails(ite,feiyichuancheng)" v-if="ind<3">
				<view class="Inheritance-content-item-img">
					<image :src="ite.cover"></image>
				</view>
				<view class="Inheritance-content-item-txt">
					<view class="Inheritance-txt-title">
						{{ite.title}}
					</view>
					<view class="Inheritance-txt-show">
						<text>{{ite.views}}</text>
						<text>人观看</text>
					</view>
				</view>
			</view>
			
		</view>
	</view>
	<!-- 艺团鉴赏 -->
	<view class="Group-Style" v-if="artgroup.lists.length">
		<view class="Information-top">
			<view class="Information-top-left">
				<view class="Information-top-left-top">
					{{yituanfengcai}}
				</view>
				<view class="Information-top-left-bottom">
					Art Group Style
				</view>
			</view>
			<view class="Information-top-right"  @click="mien(yituanfengcai)">
				<view class="Information-top-right-img">
					<image src="../../static/tree.png"></image>
				</view>
				<view class="Information-top-right-txt">
					MORE
				</view>
			</view>
		</view>
	    <view class="Group-Style-content">
	    	<view class="Group-Style-content-left"  @click="groupdetails(artgroup.lists[0])">
	    		<view class="Group-Style-content-left-title">
	    			{{artgroup.lists[0].name}}
	    		</view>
				<view class="Group-Style-content-left-img">
					<image :src="artgroup.lists[0].cover"></image>
				</view>
	    	</view>
			<view class="Group-Style-content-right">
				
				<view class="Group-Style-item"  v-for="(item,index) in artgroup.lists" v-if='index>0'  @click="groupdetails(item)">
					<view class="Style-item-img">
						<image :src="item.cover"></image>
					</view>
					<view class="Style-item-txt">
						<text>{{item.name}}</text>
					</view>
				</view>
				
			</view>
	    </view>
	</view>
	<view class="Activity-Participation" v-if="activity.lists.length">
		<view class="Information-top">
			<view class="Information-top-left">
				<view class="Information-top-left-top">
					{{huodongcanyu}}
				</view>
				<view class="Information-top-left-bottom">
					Activity Participation
				</view>
			</view>
			<view class="Information-top-right" @click="activityparticipation(huodongcanyu)">
				<view class="Information-top-right-img">
					<image src="../../static/tree.png"></image>
				</view>
				<view class="Information-top-right-txt">
					MORE
				</view>
			</view>
		</view>
	    <view class="Activity-Participation-content">
			
	    	<view class="Activity-Participation-item" v-for="(item,index) in activity.lists" @click="activitydetails(item)" v-if="index<4">
	    		<view class="Participation-item-img">
	    			<image :src="item.cover"></image>
	    		</view>
	    		<view class="Participation-item-title">
	    			{{item.title}}
	    		</view>
	    		
	    		<view class="Participation-item-address">
	    			<text>地点：</text>
	    			<text>{{item.address}}</text>
	    		</view>
	    		<view class="Participation-item-time">
	    			<text>时间：</text>
	    			<text>{{item.start_time}}至{{item.end_time}}</text>
	    		</view>
	    	</view>
			
	    </view>
	</view>
	<!-- 场馆预约 -->
	<view class="Venue-Reservation">
		<view class="Information-top">
			<view class="Information-top-left">
				<view class="Information-top-left-top">
					{{changguanyuyue}}
				</view>
				<view class="Information-top-left-bottom">
					Venue Reservation
				</view>
			</view>
			<view class="Information-top-right" @click="venuereservation(changguanyuyue)">
				<view class="Information-top-right-img">
					<image src="../../static/tree.png"></image>
				</view>
				<view class="Information-top-right-txt">
					MORE
				</view>
			</view>
		</view>
	    <view class="Venue-Reservation-content"  v-for="(item,index) in venue.lists " v-if="index==0">
	    	<view class="Venue-img">
	    		<image :src="item.cover"></image>
	    	</view>
			<view class="Venue-center">
				<view class="Venue-center-left">
					<image src="../../static/left.png"></image>
				</view>
				<view class="Venue-center-img">
					<image :src="item.cover"></image>
				</view>
				<view class="Venue-center-right">
					<view class="center-right-title">
						{{item.name}}
					</view>
					<view class="center-right-address">
						<text>地址：</text>
						<text>{{item.address}}</text>
					</view>
					<view class="center-right-phone">
						<text>电话</text>
						<text>{{item.tel}}</text>
					</view>
					<view class="center-right-button">
						<button type="default" @click="venuedetails(item)">场地预约</button>
					</view>
				</view>
				<view class="Venue-center-imgright">
					<image src="../../static/right.png"></image>
				</view>
			</view>
			
	    </view>
	</view>
	<!-- 文化直播 -->
	<view class="Cultural-live" v-if="live.lists.length">
		<view class="Information-top">
			<view class="Information-top-left">
				<view class="Information-top-left-top">
					文化直播
				</view>
				<view class="Information-top-left-bottom">
					Cultural live broadcast
				</view>
			</view>
			<view class="Information-top-right" @click="redirect_live">
				<view class="Information-top-right-img">
					<image src="../../static/tree.png"></image>
				</view>
				<view class="Information-top-right-txt">
					MORE
				</view>
			</view>
		</view>
		<view class="Group-Style-content">
			<view class="Group-Style-content-left"  @click="live_detail(live.lists[0])">
				
				<view class="Group-Style-content-left-img">
					<image :src="live.lists[0].cover"></image>
				</view>
				<view class="Group-Style-content-left-title">
					{{live.lists[0].status}}|{{live.lists[0].title}}
				</view>
			</view>
			<view class="Group-Style-content-right" >
				<view class="Group-Style-item" v-for="(item,index) in live.lists" v-if="index>0" @click="live_detail(item)">
					<view class="Style-item-img">
						<image :src="item.cover"></image>
					</view>
					
					<view class="Style-item-txt1">
						<text>{{item.status}}|{{item.title}}</text>
					</view>
					<view class="Style-item-state">
						<text>{{item.status}}</text>
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
					url: '../Announcement-list/Announcement-list?area=' + this.area
				})
			},
			//文化资讯
			consult(index,name){
				console.log(index,name)
				uni.navigateTo({
					url:'../All-information/All-information?id=' + index + '&name=' + name
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

			mien(name) {
				uni.navigateTo({
					url:'../Art-Troupe-list/Art-Troupe-list?name=' + name + '&area=' + this.area
				})
			},
			//场馆预约
			venuereservation(name) {
				uni.navigateTo({
					url:'../Venue-facilities/Venue-facilities?name=' + name + '&area=' + this.area
				})
			},

			activityparticipation(name) {
				uni.navigateTo({
					url: '../Art-Troupe-list/Art-Troupe-list?name=' + name + '&area=' + this.area
				})
			},

			participation() {
				uni.navigateTo({
					url: '../participation/participation?area=' + this.area
				})
			},
			map_search() {
				uni.navigateTo({
					url:'../Art-map/Art-map?area=' + this.area
				})
			},
			redirect_live() {
				uni.navigateTo({

					url: '../enter-live/enter-live?area=' + this.area
				})
			},

			touristattraction() {
				uni.navigateTo({
					url: '../tourist-attraction/tourist-attraction?area=' + this.area
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

			Bookresources() {
				uni.navigateTo({
					url: '../book-resources/book-resources?area=' + this.area
				})
			},
			groupdetails(item) {

				uni.navigateTo({
					url: '../Art-Ttoupelist-details/Art-Ttoupelist-details?id=' + item.id + '&area=' + this.area
				})
			},
			venuedetails(item) {
				uni.navigateTo({
					url: '../Venue-Details-item/Venue-Details-item?id=' + item.id+ '&area=' + this.area
				})
			},
			activitydetails(item) {
				uni.navigateTo({
					url: '../Appointment-details/Appointment-details?id=' + item.id+ '&area=' + this.area
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

			artdetails(item,name) {
				console.log(item,name)
				uni.navigateTo({
					url: '../Information-details/Information-details?id=' + item.id +'&name=' + name +'&area=' + this.area
				})
			},
			//文化直播
			live_detail(item){
				// uni.navigateTo({
				// 	url: '../live/live?id=' + item.id
				// })
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
		top:135rpx;
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
