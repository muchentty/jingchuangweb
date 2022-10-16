<template>
	<view class="index">
		<view class="warp">
			<view class='home' v-if="showHeight == 1">
				<swiper indicator-dots circular autoplay interval=3000 style="height:430rpx;width:100%">
					<swiper-item v-for="(item,index) in swipers" :key="index">
						<image :src="item"></image>
					</swiper-item>

				</swiper>
			</view>
			<view class='home' v-if="showHeight == 2">
				<swiper indicator-dots circular autoplay interval=3000 style="height:480rpx;width:100%">
					<swiper-item v-for="(item,index) in swipers" :key="index">
						<image :src="item"></image>
					</swiper-item>
			
				</swiper>
			</view>
			<view class='home' v-if="showHeight == 3">
				<swiper indicator-dots circular autoplay interval=3000 style="height:550rpx;width:100%">
					<swiper-item v-for="(item,index) in swipers" :key="index">
						<image :src="item"></image>
					</swiper-item>
			
				</swiper>
			</view>
			<view class='home' v-if="showHeight == 4">
				<swiper indicator-dots circular autoplay interval=3000 style="height:600rpx;width:100%">
					<swiper-item v-for="(item,index) in swipers" :key="index">
						<image :src="item"></image>
					</swiper-item>
			
				</swiper>
			</view>
		</view>



		<view class="icon" :class="icon?'none':'pause'" @click.stop="changePlayState('auto')">
			<image src="../../static/ic_music.png"></image>
		</view>
		<view class="district">
			<view class="seach">
				<view class="seach_img">
					<image src="../../static/ic_search.png"></image>
				</view>
				<input :placeholder="faxian" />
			</view>
			<view class="language" v-if="icon_data[2] && icon_data[2][8]['status']==1">
				<text :class="lang=='cn'?'active_chinese':'chinese'" @click="change_lang('cn')">{{hanyu}}</text>
				<text :class="lang=='zn'?'active_zangyu':'zangyu'" @click="change_lang('zn')">{{zangyu}}</text>
			</view>
		</view>
		<view class="consult">
			<view :class="showHeight==1?'culture':'sconsult'" v-if="icon_data[0] && icon_data[0][0]['status']==1"
				:style="{backgroundImage:`url(${icon_data[0][0]['url']})`}" @click="consult(classify[0].id)">
				<view>{{wenhuazixun}}</view>
			</view>
			<view :class="showHeight==1?'cultures':'sconsult'" v-if="icon_data[0] && icon_data[0][1]['status']==1"
				:style="{backgroundImage:`url(${icon_data[0][1]['url']})`}" @click="consult(classify[1].id)">
				<view>{{yishujianshang}}</view>
			</view>
			<view :class="showHeight==1?'culturef':'sculturef'" v-if="icon_data[0] && icon_data[0][2]['status']==1"
				:style="{backgroundImage:`url(${icon_data[0][2]['url']})`}" @click="consult(classify[2].id)">
				<view>{{feiyichuancheng}}</view>
			</view>
		</view>
		<view class="mien">
			<!-- <view :class="showHeight==1?'partIn':'spartIn'" class="partIn" v-if="icon_data[1] && icon_data[1][4]['status']==1"
				:style="{backgroundImage:`url(${icon_data[1][4]['url']})`}" @click="classroom">
				<view>文化课堂</view>
			</view> -->
			<view :class="showHeight==1?'partIn':'spartIn'" class="partIn" v-if="icon_data[1] && icon_data[1][0]['status']==1"
				:style="{backgroundImage:`url(${icon_data[1][0]['url']})`}" @click="mien">
				<view>{{yituanfengcai}}</view>
			</view>
			<view :class="showHeight==1?'partInc':'spartIn'" class="partInc" v-if="icon_data[1] && icon_data[1][1]['status']==1"
				:style="{backgroundImage:`url(${icon_data[1][1]['url']})`}" @click="venuereservation">
				<view>{{changguanyuyue}}</view>
			</view>
			<view :class="showHeight==1?'partInh':'spartIn'" v-if="icon_data[1] && icon_data[1][2]['status']==1"
				:style="{backgroundImage:`url(${icon_data[1][2]['url']})`}" @click="activityparticipation">
				<view>{{huodongcanyu}}</view>
			</view>
			<view :class="showHeight==1?'partIns':'spartIns'" v-if="icon_data[1] && icon_data[1][3]['status']==1"
				:style="{backgroundImage:`url(${icon_data[1][3]['url']})`}" @click="participation">
				<view>{{saishicanyu}}</view>
			</view>
		</view>
		<view class="resource">
			<view class="map" v-if="icon_data[1] && icon_data[1][4]['status']==1">
				<view @click="classroom">
					<view class="map_imgj" v-if="icon_data" :style="{backgroundImage:`url(${icon_data[1][4]['url']})`}">
						<view>文化课堂</view>
					</view>
				</view>
			</view>
			<view class="map" v-if="icon_data[2] && icon_data[2][0]['status']==1">
				<view class="map_img" v-if="icon_data" @click="map_search"
					:style="{backgroundImage:`url(${icon_data[2][0]['url']})`}">
					<view>{{wenhuaditu}}</view>
				</view>
			</view>
			<view class="map" v-if="icon_data[2] && icon_data[2][1]['status']==1">
				<view class="map_imgw" v-if="icon_data" @click="redirect_live"
					:style="{backgroundImage:`url(${icon_data[2][1]['url']})`}">
					<view>{{wenhuazhibo}}</view>
				</view>
			</view>
			<view class="map" v-if="icon_data[2] && icon_data[2][2]['status']==1">
				<view class="map_imgl" v-if="icon_data" @click="touristattraction"
					:style="{backgroundImage:`url(${icon_data[2][2]['url']})`}">
					<view>{{lvyoujingdian}}</view>
				</view>

			</view>
			<view class="map" v-if="icon_data[2] && icon_data[2][3]['status']==1">
				<view class="map_imgx" v-if="icon_data" @click="touristroute"
					:style="{backgroundImage:`url(${icon_data[2][3]['url']})`}">
					<view>{{lvyouluxian}}</view>
				</view>
			</view>
			<view class="map" v-if="icon_data[2] && icon_data[2][4]['status']==1">
				<view class="map_imgt" @click="specialsfoods"
					:style="{backgroundImage:`url(${icon_data[2][4]['url']})`}">
					<view>{{tesemeishi}}</view>
				</view>
			</view>
			<view class="map" v-if="icon_data[2] && icon_data[2][5]['status']==1">
				<view class="map_imgm" v-if="icon_data" @click="hotel"
					:style="{backgroundImage:`url(${icon_data[2][5]['url']})`}">
					<view>{{minsujiudian}}</view>
				</view>
			</view>
			<view class="map" v-if="icon_data[2] && icon_data[2][6]['status']==1">
				<view class="map_imgz" v-if="icon_data" @click="Bookresources"
					:style="{backgroundImage:`url(${icon_data[2][6]['url']})`}">
					<view>{{ziyuan}}</view>
				</view>
			</view>
			<view class="map" v-if="icon_data[2] && icon_data[2][9]['status']==1">
				<view @click="consult(classify[3].id)">
					<view class="map_imgj" v-if="icon_data" :style="{backgroundImage:`url(${icon_data[2][9]['url']})`}">
						<view>文物保护</view>
					</view>
				</view>
			</view>
			<view class="map" v-if="icon_data[2] && icon_data[2][7]['status']==1">
				<navigator url="/pages/hierarchy/hierarchy" open-type="navigate">
					<view class="map_imgj" v-if="icon_data" :style="{backgroundImage:`url(${icon_data[2][7]['url']})`}">
						<view>{{cengji}}</view>
					</view>
				</navigator>
			</view>
		</view>

		<view class="client" style="border-top: solid 1px #EEEEEE;">
			<view class="wenzi">
				<view>{{zuixin}}</view>
				<view class="wen">{{gonggao}}</view>
			</view>
			<view class="nie"></view>
			<view class="texts" v-if="lists.length!=0">
				<view class="inform" v-for="(item,index) in lists">
					<view class="inform-title" @click="Announcementlist">
						{{item.title}}
					</view>
				</view>
			</view>
		</view>
		<view class="line"  v-if="article_data[0].length && icon_data[0][0]['status']==1"></view>
		<view class="art" v-if="article_data[0].length && icon_data[0][0]['status']==1">
			<view class="art1">
				<view class="top">
					<view class="top_txt">

						<text>{{wenhuazixun}}</text>
					</view>
					<view class="more" @click="consult(1)">
						<text>{{gengduo}}</text>
						<view class="top_img">
							<image src="../../static/ic_right.png"></image>
						</view>
					</view>
				</view>
				<scroll-view class="tab-scroll-view" :scroll-x="true">
					<view class="even">
						<view class="evening" v-for="(ite,ind) in article_data[0]" @click="artdetails(ite)">
							<view class="bj">
								<image :src="ite.cover"></image>
							</view>
							<view class="hhs">
								<text class="hhstitle">{{ite.title}}</text>
								<view class="heat">
									<view class="eys">
										<image src="../../static/ic_Views.png"></image>
									</view>
									<view>{{ite.views}}</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="art" v-if="article_data[1].length && icon_data[0][1]['status']==1">
			<view class="art1">
				<view class="top">
					<view class="top_txt">

						<text>{{yishujianshang}}</text>
					</view>
					<view class="more" @click="consult(2)">
						<text>{{gengduo}}</text>
						<view class="top_img">
							<image src="../../static/ic_right.png"></image>
						</view>
					</view>
				</view>
				<scroll-view class="tab-scroll-view" :scroll-x="true">
					<view class="even">
						<view class="evening" v-for="(ite,ind) in article_data[1]" @click="artdetails(ite)">
							<view class="bj">
								<image :src="ite.cover"></image>
							</view>
							<view class="hhs">
								<text class="hhstitle">{{ite.title}}</text>
								<view class="heat">
									<view class="eys">
										<image src="../../static/ic_Views.png"></image>
									</view>
									<view>{{ite.views}}</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="art" v-if="article_data[2].length && icon_data[0][2]['status']==1">
			<view class="art1">
				<view class="top">
					<view class="top_txt">

						<text>{{feiyichuancheng}}</text>
					</view>
					<view class="more" @click="consult(10)">
						<text>{{gengduo}}</text>
						<view class="top_img">
							<image src="../../static/ic_right.png"></image>
						</view>
					</view>
				</view>
				<scroll-view class="tab-scroll-view" :scroll-x="true">
					<view class="even">
						<view class="evening" v-for="(ite,ind) in article_data[2]" @click="artdetails(ite)">
							<view class="bj">
								<image :src="ite.cover"></image>
							</view>
							<view class="hhs">
								<text class="hhstitle">{{ite.title}}</text>
								<view class="heat">
									<view class="eys">
										<image src="../../static/ic_Views.png"></image>
									</view>
									<view>{{ite.views}}</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="line" v-if="artgroup.lists.length && icon_data[1][0]['status']==1"></view>
		<view class="art" v-if="artgroup.lists.length && icon_data[1][0]['status']==1">
			<view class="yituan">
				<view class="top">
					<view class="top_txt">

						<text>{{yituanfengcai}}</text>
					</view>
					<view class="more" @click="mien">
						<text>{{gengduo}}</text>
						<view class="top_img">
							<image src="../../static/ic_right.png"></image>
						</view>
					</view>
				</view>
				<view class="song" v-for="(item,index) in artgroup.lists">
					<view class="song_img" @click="groupdetails(item)">
						<image :src="item.cover"></image>
					</view>
					<view class="zis">{{item.name}}</view>
				</view>
			</view>


		</view>
		<view class="line"  v-if="venue.lists.length && icon_data[1][1]['status']==1"></view>
		<view class="art" v-if="venue.lists.length && icon_data[1][1]['status']==1">
			<view class="top">
				<view class="top_txt">

					<text>{{changguanyuyue}}</text>
				</view>
				<view class="more" @click="venuereservation">
					<text>{{gengduo}}</text>
					<view class="top_img">
						<image src="../../static/ic_right.png"></image>
					</view>
				</view>
			</view>
			<view class="subscribe" v-for="item in venue.lists " @click="venuedetails(item)">
				<view class="subscribe_img">
					<image :src="item.cover"></image>
				</view>
				<view class="cultural">
					<view class="shan">{{item.name}}</view>
					<view>{{item.start_time}}</view>
					<view>{{item.end_time}}</view>
					<view>{{item.address}}</view>
				</view>
				<view class="leave">
					<view class="daoh">
						<image src="../../static/ic_Navigation.png"></image>
					</view>
					<view>{{daohang}}</view>
				</view>
			</view>
		</view>
		<view class="line" v-if="activity.lists.length && icon_data[1][2]['status']==1"></view>
		<view class="art" v-if="activity.lists.length && icon_data[1][2]['status']==1">
			<view class="top">
				<view class="top_txt">

					<text>{{huodongcanyu}}</text>
				</view>
				<view class="more" @click="activityparticipation">
					<text>{{gengduo}}</text>
					<view class="top_img">
						<image src="../../static/ic_right.png"></image>
					</view>
				</view>
			</view>
			<view class="subscribe" v-for="item in activity.lists" @click="activitydetails(item)">
				<view class="subscribe_img">
					<image :src="item.cover"></image>
				</view>
				<view class="cultural">
					<view class="shan">{{item.title}}</view>
					<view>{{item.end_time}}</view>
					<!-- <view>1.59km</view> -->
					<view>{{item.address}}</view>
				</view>
			</view>
		</view>
		<view class="line" v-if="race.lists.length && icon_data[1][2]['status']==1"></view>
		<view class="art"  v-if="race.lists.length && icon_data[1][2]['status']==1">
			<view class="art2">
				<view class="top">
					<view class="top_txt">

						<text>{{saishicanyu}}</text>
					</view>
					<view class="more" @click="participation">
						<text>{{gengduo}}</text>
						<view class="top_img">
							<image src="../../static/ic_right.png"></image>
						</view>
					</view>
				</view>
				<view class="subscribe" v-for="item in race.lists" @click="participationdetails(item)">
					<view class="subscribe_img">
						<image :src="item.cover"></image>
					</view>
					<view class="cultural">
						<view class="shan">{{item.title}}</view>
						<view>{{item.start_time}}{{zhi}}{{item.end_time}}</view>
						<view class="zan">
							<view class="heat">
								<view class="eys">
									<image src="../../static/ic_eys.png"></image>
								</view>
								<view>{{item.views}}</view>
							</view>
							<view class="heat">
								<view class="zann">
									<image src="../../static/ic_fabulous.png"></image>
								</view>
								<view>{{item.digg}}</view>
							</view>
							<view class="heat">
								<view class="heart">
									<image src="../../static/ic_Collection.png"></image>
								</view>
								<view>{{item.views}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>


		</view>
		<view class="line" v-if="live.lists.length && icon_data[2][1]['status']==1"></view>
		<view class="art" v-if="live.lists.length && icon_data[2][1]['status']==1">
			<view class="top">
				<view class="top_txt">
					<!-- <text class="vertical"></text> -->
					<text>{{wenhuazhibo}}</text>
				</view>
				<view class="more" @click="redirect_live">
					<text>{{gengduo}}</text>
					<view class="top_img">
						<image src="../../static/ic_right.png"></image>
					</view>
				</view>
			</view>
			<view class="songs" @click="live_detail(live.lists[0])">
				<view class="song_img">
					<image :src="live.lists[0].cover"></image>
				</view>
				<view class="ziss">{{live.lists[0].title}}</view>
				<view class="day">{{live.lists[0].end_time}}</view>
			</view>
		</view>
		<view>
			<navigator url="/pages/hierarchy/hierarchy" open-type="navigate">
				<view class="tier">
					<image src="../../static/ic_Hierarchicalcloud.png"></image>
				</view>
			</navigator>
		</view>
		<view class="bottom">
			<view>公司地址：深圳市南山区南山街道学府社区南山大道2008跃华园大厦4F</view>
			<view>ICP备案号：粤ICP备2022019221号</view>
			<view>公司电话：0755-86660870</view>
		</view>
		<view class="line" style="height:60rpx"></view>
	</view>
</template>

<script>
	import config from 'utils/config.js'
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
				types:'',
				screemWidth:'', //屏幕宽度
				showHeight:1,
			}
		},
		//当页面隐藏时执行onHide 如 navigateTo 跳转到别的页面
		onHide() {
			this.changePlayState(false)
		},
		methods: {
			change_lang(item) {
				this.lang = item
				console.log(item)
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
				//请求接口数据
				this.show_data();
			},



			changePlayState(is=true) {
				if(is == 'auto'){
					let state = this.icon
					is = !state
				}
				this.icon = is
				if(is){
					this.innerAudioContext.play();
					this.innerAudioContext.play();
				}else{
					console.log(this.icon)
					this.innerAudioContext.pause()
					this.innerAudioContext.pause()
				}
			},

			Announcementlist() {
				uni.navigateTo({
					url: '../Announcement-list/Announcement-list?area=' + this.area
				})
			},






			consult(id = 0) {
				console.log(id)
				if (id == this.classify[0].id) {
					uni.navigateTo({
						url: '../consult/consult?cId=' + id + '&area=' + this.area
					})
				} else if (id == this.classify[1].id) {
					uni.navigateTo({
						url: '../appreciation/appreciation?cId=' + id + '&area=' + this.area
					})
				} else if (id == this.classify[2].id) {
					uni.navigateTo({
						url: '../inheritance/inheritance?cId=' + id + '&area=' + this.area
					})
				}else if (id == this.classify[3].id) {
					uni.navigateTo({
						url: '../cultural/cultural?cId=' + id + '&area=' + this.area
					})
				}
			},

			mien() {
				uni.navigateTo({
					url: '../mien/mien?area=' + this.area
				})
			},

			venuereservation() {
				uni.navigateTo({
					url: '../venue-reservation/venue-reservation?area=' + this.area
				})
			},

			activityparticipation() {
				uni.navigateTo({
					url: '../activity-participation/activity-participation?area=' + this.area
				})
			},
			
			//文化课堂
			classroom(){
				uni.navigateTo({
					url:'../classroom/classroom?area=' + this.area
				})
			},

			participation() {
				uni.navigateTo({
					url: '../participation/participation?area=' + this.area
				})
			},
			map_search() {
				uni.navigateTo({
					url: '../map_search/map_search?area=' + this.area
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
				// #ifdef H5
				    window.location.href='https://weread.qq.com/'
				// #endif
				
				// uni.navigateTo({
				// 	url: '../book-resources/book-resources'
				// })
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
			/**
			 * 安卓应用的检测更新实现
			 */
			AndroidCheckUpdate: function() {
				var _this = this;
				uni.request({
					//请求地址，设置为自己的服务器链接
					url: config.baseUrl + '/api/common/getAppVersion',
					//method: 'GET',  
					data: {},
					success: resMz => {
						var server_version = resMz.data.data.version;
						var currTimeStamp = resMz.data.data.timestamp;
						var downloadUrl = resMz.data.data.downloadUrl;
						// 判断缓存时间
						uni.getStorage({
							key: 'tip_version_update_time',
							success: function(res) {
								var lastTimeStamp = res.data;
								//定义提醒的时间间隔，避免烦人的一直提示，一个小时：3600；一天：86400
								var tipTimeLength = 0;
								if ((lastTimeStamp + tipTimeLength) > currTimeStamp) {
									//避免多次提醒，不要更新
									console.log("避免多次提醒，不要更新");
								} else {
									//重新设置时间戳
									_this.setStorageForAppVersion(currTimeStamp);
									//进行版本型号的比对 以及下载更新请求
									_this.checkVersionToLoadUpdate(server_version,downloadUrl);
								}
							},
							fail: function(res) {
								_this.setStorageForAppVersion(currTimeStamp);
							}
						});
					},
					fail: () => {},
					complete: () => {}
				});
			},
			/**
			 * //设置应用版本号对应的缓存信息
			 * @param {Object} currTimeStamp 当前获取的时间戳
			 */
			setStorageForAppVersion: function(currTimeStamp) {
				uni.setStorage({
					key: 'tip_version_update_time',
					data: currTimeStamp,
					success: function() {
						console.log('setStorage-success');
					}
				});
			},
			/**
			 * 进行版本型号的比对 以及下载更新请求
			 * @param {Object} server_version 服务器最新 应用版本号
			 * @param {Object} curr_version 当前应用版本号
			 */
			checkVersionToLoadUpdate: function(server_version,downloadUrl) {
				let curr_version = plus.runtime.getProperty(plus.runtime.appid, function(inf) {
					if (server_version != inf.version) {
						//TODO 此处判断是否为 WIFI连接状态
						if (plus.networkinfo.getCurrentType() != 3) {
							uni.showToast({
								title: '有新的版本发布，检测到您目前非Wifi连接，为节约您的流量，程序已停止自动更新，将在您连接WIFI之后重新检测更新',
								mask: true,
								duration: 5000,
								icon: "none"
							});
							return;
						} else {
							uni.showModal({
								title: "版本更新",
								content: '有新的版本发布，检测到您当前为Wifi连接，是否立即进行新版本下载？',
								confirmText: '立即更新',
								cancelText: '稍后进行',
								success: function(res) {
									if (res.confirm) {
										uni.showToast({
											icon: "none",
											mask: true,
											title: '程序已启动自动更新。新版本下载完成后将自动弹出安装程序',
											duration: 5000,
										});
										//设置 最新版本apk的下载链接
										var downloadApkUrl = downloadUrl;
										var dtask = plus.downloader.createDownload(
											downloadApkUrl, {},
											function(d,
												status) {
													
												// 下载完成  
												if (status == 200) {
													plus.runtime.install(plus.io
														.convertLocalFileSystemURL(
															d
															.filename), {}, {},
														function(error) {
															uni.showToast({
																title: '安装失败',
																duration: 1500
															});
														})
												} else {
													uni.showToast({
														title: '更新失败',
														duration: 1500
													});
												}
											});
										dtask.start();
									} else if (res.cancel) {
										console.log('稍后更新');
									}
								}
							});
						}
					}
				});
			},

			show_data(){
				this.$request('/api/article/get_all_cates', {}, 'post', {}).then(res => {
				
					if (res.code == 1) {
						this.classify = res.data.lists
				
						this.classify.forEach((item, key) => {
							this.$request('/api/article/get_list', {
								cate: item.id,
								area: this.area
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

		},
		onLoad(e) {
			console.log(e)
			//#ifdef APP-PLUS
			this.AndroidCheckUpdate();
			//#endif
			
			let that = this
			
			uni.getSystemInfo({
			    success: function (res) {
			        console.log(res.model);
			        console.log(res.windowWidth);
			        console.log(res.windowHeight);
					console.log(res.screenWidth)
					that.screemWidth = res.screenWidth
			    }
			});
			console.log(that.screemWidth)
			
			if(that.screemWidth<400){
				that.showHeight = 1
			}else if(that.screemWidth<400 && that.screemWidth>700){
				that.showHeight = 2
			}else if(that.screemWidth<700 && that.screemWidth>1000){
				that.showHeight = 3
			}else if(that.screemWidth>1000){
				that.showHeight = 4
			}
			console.log(that.showHeight)
			if (e.linkarea) {
				this.area = e.linkarea
				console.log(this.area)
				uni.setStorageSync('area', e.linkarea)
			}
			if(e.type){
				this.types = e.type
			}

			if (uni.getStorageSync('area')) {
				this.area = uni.getStorageSync('area')
			} else {
				this.area = 9784;
				uni.setStorageSync('area', 9784)
			}
			//#ifdef H5
			let ua = window.navigator.userAgent.toLowerCase()
			console.log(window.location.host)
			console.log(ua.match(/MicroMessenger/i))
			if (ua.match(/MicroMessenger/i) != 'micromessenger' && window.location.host.indexOf("localhost") == -1 && that.types == 'pc') {
				uni.navigateTo({
					url: '../homePage/homePage'
				})
			}
			//#endif

			this.lang = uni.getStorageSync('lang');
			this.lang = this.lang == 'zn' ? 'zn' : 'cn'
			this.change_lang(this.lang);

			this.innerAudioContext = uni.createInnerAudioContext();
			this.innerAudioContext.autoplay = true;
			this.innerAudioContext.loop = true;
			this.innerAudioContext.onPlay(() => {
			});
			this.innerAudioContext.onPause(() => {
			});
		},
		onShow() {
			//#ifdef H5
			let ua = window.navigator.userAgent.toLowerCase()
			if (ua.match(/MicroMessenger/i) != 'micromessenger' && window.location.host.indexOf("localhost") == -1 && this.types == 'pc') {
				uni.navigateTo({
					url: '../homePage/homePage'
				})
			}
			//#endif

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
					uni.setNavigationBarTitle({
						title: res.data.cloud_data[0].title
					});
					
				}
			});


			this.$request('/api/common/banner', {
				area: this.area
			}, 'post', {

			}).then(res => {
				if (res.code == 1) {

					this.swipers = res.data.banner
					this.icon_data = res.data.icon_data
					if (res.data.music) {
						that.innerAudioContext.src = res.data.music;
					}
				}
			});
		}
	}
</script>

<style>
	.art1,
	.yituan {
		margin-bottom: 30rpx;
	}

	.home swiper {
		width: 100%;
		height: 430px;
		position: relative;


		/* image{
			width: 100%;
			height: 100%;
		} */
	}

	.tier {
		width: 106rpx;
		height: 106rpx;
		position: fixed;
		top: 80%;
		right: 5%;
	}

	.tier image {
		width: 100%;
		height: 100%;
	}

	.home {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.home image {
		width: 100%;
		height: 100%;
	}

	.icon {
		position: absolute;
		right: 40rpx;
		top: 100rpx;
		width: 60rpx;
		height: 60rpx;
		-webkit-transition-property: -webkit-transform;
		-webkit-transition-duration: 1s;
		-moz-transition-property: -moz-transform;
		-moz-transition-duration: 1s;
		-webkit-animation: rotate 3s linear infinite;
		-moz-animation: rotate 3s linear infinite;
		-o-animation: rotate 3s linear infinite;
		animation: rotate 3s linear infinite;
	}

	.pause {
		animation-play-state: paused;
	}

	@-webkit-keyframes rotate {
		from {
			-webkit-transform: rotate(0deg)
		}

		to {
			-webkit-transform: rotate(360deg)
		}
	}

	@-moz-keyframes rotate {
		from {
			-moz-transform: rotate(0deg)
		}

		to {
			-moz-transform: rotate(359deg)
		}
	}

	@-o-keyframes rotate {
		from {
			-o-transform: rotate(0deg)
		}

		to {
			-o-transform: rotate(359deg)
		}
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg)
		}

		to {
			transform: rotate(359deg)
		}
	}

	.icon image {
		width: 100%;
		height: 100%;
	}

	.district {
		margin-top: 24rpx;
		display: flex;
	}

	.city {
		margin-top: 6rpx;
		margin-left: 30rpx;
		color: #595959;
		font-size: 28rpx;
		display: flex;
	}

	.selent {
		width: 20rpx;
		height: 16rpx;
		margin-left: 16rpx;
	}

	.selent image {
		width: 100%;
		height: 100%;
	}

	.seach {
		width: 424rpx;
		height: 66rpx;
		display: flex;
		border: 1rpx solid rgba(51, 51, 51, 0.09);
		box-shadow: 0px 7rpx 13rpx 0px rgba(67, 67, 66, 0.14);
		border-radius: 33rpx;
		border-radius: 178rpx;
		box-shadow: 0px 4rpx 0px #eeeeee;
		border: 1rpx solid #eeeeee;
		margin-left: 23rpx;
		margin-right: 12rpx;
	}

	.seach_img {
		width: 29rpx;
		height: 29rpx;
		margin-left: 34rpx;
	}

	.language {
		padding: 0 30rpx;
		height: 66rpx;
		border: solid 1rpx rgba(187, 187, 187, 100);
		font-size: 28rpx;
		color: #787878;
		line-height: 64rpx;
		border-radius: 66rpx;
		border-top-left-radius: 66rpx;
	}

	.chinese {
		display: inline-block;
		height: 65rpx;

		border-right: solid 1px #0055CF;
		padding-right: 14rpx;
		margin-right: 14rpx;
	}

	.active_chinese {
		display: inline-block;
		height: 65rpx;
		color: #0055CF;
		border-right: solid 1px #0055CF;
		padding-right: 14rpx;
		margin-right: 14rpx;
	}

	.zangyu {
		display: inline-block;
		height: 65rpx;
	}

	.active_zangyu {
		display: inline-block;
		height: 65rpx;
		color: #0055CF;
	}

	.seach_img image {
		margin-top: 14rpx;
		width: 100%;
		height: 100%;
	}

	.seach input {
		color: rgba(16, 16, 16, 100);
		font-size: 24rpx;
		margin-top: 12rpx;
		margin-left: 14rpx;
	}

	.consult {
		display: flex;
		justify-content: space-between;
	}

	.culture {
		margin-top: 22rpx;
		width: 33.3%;
		height: 156upx;
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
	.sconsult {
		margin-top: 22rpx;
		width: 33.3%;
		height: 220rpx;
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

	.cultures {
		margin-top: 22rpx;
		width: 33.3%;
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

	.culturef {
		margin-top: 22rpx;
		width: 33.3%;
		height: 156rpx;
		background: #E8E8E8;
		line-height: 50rpx;
		padding-left: 30rpx;
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
		background-size: 100% 100%;
		border-top: solid 1px #EEEEEE;
		border-bottom: solid 1px #EEEEEE;
	}
	.sculturef {
		margin-top: 22rpx;
		width: 33.3%;
		height: 220rpx;
		background: #E8E8E8;
		line-height: 50rpx;
		padding-left: 30rpx;
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
		background-size: 100% 100%;
		border-top: solid 1px #EEEEEE;
		border-bottom: solid 1px #EEEEEE;
	}

	.mien {
		display: flex;
		justify-content: space-between;
	}

	.mien .partIn {
		width: 24.8%;
		height: 156rpx;
		background: #E8E8E8;
		text-align: center;
		line-height: 50rpx;
		margin-left: -9rpx;
		background-size: 100% 100%;
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
		border-right: solid 1px #EEEEEE;

		border-bottom: solid 1px #EEEEEE;
	}
	.mien .spartIn {
		width: 24.8%;
		height: 200rpx;
		background: #E8E8E8;
		text-align: center;
		line-height: 50rpx;
		margin-left: -9rpx;
		background-size: 100% 100%;
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
		border-right: solid 1px #EEEEEE;
	
		border-bottom: solid 1px #EEEEEE;
	}

	.partInc {
		width: 24.8%;
		height: 156rpx;
		background: #E8E8E8;
		text-align: center;
		line-height: 50rpx;
		margin-left: -9rpx;
		background-size: 100% 100%;
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
		border-right: solid 1px #EEEEEE;

		border-bottom: solid 1px #EEEEEE;
	}

	.partInh {
		width: 24.8%;
		height: 156rpx;
		background: #E8E8E8;
		text-align: center;
		line-height: 50rpx;
		margin-left: -9rpx;
		background-size: 100% 100%;
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
		border-right: solid 1px #EEEEEE;

		border-bottom: solid 1px #EEEEEE;
	}

	.partIns {
		width: 24.8%;
		height: 156rpx;
		background: #E8E8E8;
		text-align: center;
		line-height: 50rpx;
		margin-left: -9rpx;
		background-size: 100% 100%;
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
		border-bottom: solid 1px #EEEEEE;
	}
	.spartIns {
		width: 24.8%;
		height: 200rpx;
		background: #E8E8E8;
		text-align: center;
		line-height: 50rpx;
		margin-left: -9rpx;
		background-size: 100% 100%;
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
		border-bottom: solid 1px #EEEEEE;
	}

	.resource {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		margin-bottom: 20rpx;
	}

	.map {
		width: 186rpx;
		text-align: center;
		color: rgba(16, 16, 16, 100);
		font-size: 24rpx;
		font-family: PingFangSC-regular;
	}

	.map_img {
		width: 184rpx;
		height: 184rpx;
		border-radius: 50%;
		background-size: 100% 100%;
		line-height: 340rpx;
	}

	.map_imgw {
		width: 184rpx;
		height: 184rpx;
		border-radius: 50%;
		background-size: 100% 100%;
		line-height: 340rpx;
	}

	.map_imgl {
		width: 184rpx;
		height: 184rpx;
		border-radius: 50%;
		background-size: 100% 100%;
		line-height: 340rpx;
	}

	.map_imgx {
		width: 184rpx;
		height: 184rpx;
		border-radius: 50%;
		background-size: 100% 100%;
		line-height: 340rpx;
	}

	.map_imgt {
		width: 184rpx;
		height: 184rpx;
		border-radius: 50%;
		background-size: 100% 100%;
		line-height: 340rpx;
	}

	.map_imgm {
		width: 184rpx;
		height: 184rpx;
		border-radius: 50%;
		background-size: 100% 100%;
		line-height: 340rpx;
	}

	.map_imgz {
		width: 184rpx;
		height: 184rpx;
		border-radius: 50%;
		background-size: 100% 100%;
		line-height: 340rpx;
	}

	.map_imgj {
		margin-top: 40rpx;
		width: 96rpx;
		height: 96rpx;
		border-radius: 50%;
		margin-left: 50rpx;
		background-size: 100% 100%;
		line-height: 260rpx;
	}

	.line {
		width: 100%;
		height: 20rpx;
		background-color: rgba(247, 247, 247, 100);
	}

	.client {
		display: flex;
	}

	.wenzi {
		margin-top: 40rpx;
		color: #FE3C48;
		font-size: 36rpx;
		font-family: PingFangSC-regular;
		margin-left: 24rpx;
		font-weight: 600;
	}

	.nie {
		margin-left: 16rpx;
		margin-top: 30rpx;
		height: 60rpx;
		width: 2rpx;
		background-color: #e5e5e5;
	}

	.wen {
		margin-left: 10rpx;
	}

	.texts {
		margin-top: 20rpx;
		color: rgba(16, 16, 16, 100);
		font-size: 24rpx;
		font-family: PingFangSC-regular;
		margin-left: 18rpx;
		margin-bottom: 12rpx;
	}

	.blue {
		display: inline-block;
		width: 10rpx;
		height: 10rpx;
		background-color: rgba(99, 180, 210, 100);
		margin-right: 10rpx;
	}

	.inform {
		height: 42rpx;
		line-height: 42rpx;
	}

	.right {
		width: 24rpx;
		height: 30rpx;
		margin-left: 28rpx;
		margin-top: 66rpx;
	}

	.right image {
		width: 100%;
		height: 100%;
	}

	.art {
		margin-top: 34rpx;
	}

	.arts {
		margin-top: 34rpx;
		padding-bottom: 100rpx;
	}

	.top {
		display: flex;
		justify-content: space-between;
	}

	.top_txt {
		margin-left: 30rpx;
		color: rgba(16, 16, 16, 100);
		font-size: 32rpx;
		font-family: PingFangSC-regular;
	}

	.vertical {
		width: 14rpx;
		height: 28rpx;
		display: inline-block;
		margin-right: 8rpx;

		border-radius: 42rpx;
		background-color: rgba(151, 138, 129, 100);
	}

	.more {
		display: flex;
		font-size: 28rpx;
	}

	.more text {
		margin-right: 10rpx;
	}

	.top_img {
		width: 16rpx;
		height: 24rpx;
		margin-right: 20rpx;
	}

	.top_img image {
		width: 100%;
		height: 100%;
	}

	.even {
		display: flex;
		margin-top: 28rpx;
		margin-bottom: 32rpx;
		margin-left: 28rpx;
	}

	.evening {
		width: 274rpx;
		height: 160rpx;
		border-radius: 10rpx;
		margin-left: 10rpx;
		border-radius: 10rpx;
		color: rgba(255, 255, 255, 100);
		font-size: 32rpx;
		font-family: PingFangSC-regular;
		position: relative;
	}

	.bj {
		width: 274rpx;
		height: 160rpx;
		border-radius: 10rpx;
	}

	.bj image {
		width: 100%;
		height: 100%;
		border-radius: 10rpx;
	}

	.hhs {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 40rpx;
		background-color: rgba(48, 44, 43, 0.9);
		display: flex;
		justify-content: space-between;
		padding: 0 6rpx;
		font-size: 22rpx;

	}

	.hhstitle {
		max-width: 100%;
		display: inline-block;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.heat {
		display: flex;
		font-size: 24rpx;
	}

	.eys {
		margin-top: 6rpx;
		width: 34rpx;
		height: 26rpx;
		margin-right: 10rpx;
	}

	.eys image {
		width: 100%;
		height: 100%;
	}

	.hhs text {
		font-size: 24rpx;
		padding-bottom: 10rpx;
		/* 	width: 167px;
		display: inline-block; */

		/* 	height: 20px;
		background-color:rgba(48, 44, 43,0.9); */

	}

	.song {
		width: 690rpx;
		height: 374rpx;
		border-radius: 8rpx;
		border: 1px solid rgba(187, 187, 187, 100);
		margin-left: 34rpx;
		margin-top: 12rpx;
	}

	.song_img {
		width: 690rpx;
		height: 300rpx;
		border-radius: 10rpx 10rpx 0px 0px;
	}

	.song_img image {
		width: 100%;
		height: 100%;
	}

	.zis {
		line-height: 40rpx;
		color: rgba(51, 51, 51, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
		margin-left: 18rpx;
		margin-top: 22rpx;
	}

	.subscribe {
		display: flex;
		margin-left: 34rpx;
		margin-top: 22rpx;
		margin-bottom: 28rpx;
	}

	.subscribe_img {
		width: 240rpx;
		height: 174rpx;
		border-radius: 10rpx;
	}

	.subscribe_img image {
		width: 100%;
		height: 100%;
	}

	.cultural {
		margin-left: 26rpx;
		color: rgba(153, 153, 153, 100);
		font-size: 24rpx;
		font-family: PingFangSC-regular;
	}

	.shan {
		margin-top: 26rpx;
		color: rgba(51, 51, 51, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
	}

	.leave {
		margin-top: 30rpx;
		color: rgba(153, 153, 153, 100);
		font-size: 24rpx;
		font-family: PingFangSC-regular;
		margin-left: 80rpx;
	}

	.zan {

		margin-top: 26rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
	}

	.zann {
		width: 26rpx;
		height: 24rpx;
		margin-right: 6rpx;
	}

	.zann image {
		width: 100%;
		height: 100%;
	}

	.heart {
		width: 26rpx;
		height: 24rpx;
		margin-right: 6rpx;
	}

	.heart image {
		width: 100%;
		height: 100%;
	}

	.day {
		margin-top: 6rpx;
		color: rgba(153, 153, 153, 100);
		font-size: 24rpx;
		font-family: PingFangSC-regular;
	}

	.songs {
		margin-top: 16rpx;
		margin-left: 28rpx;
		margin-bottom: 12rpx;
	}

	.ziss {
		margin-top: 20rpx;
		font-size: 28rpx;
		font-family: PingFangSC-regular;
	}

	.subsc {
		width: 100%;
		border-top: solid 1px #e7e7e7;
		display: flex;
		padding-top: 30rpx;
		padding-left: 30rpx;
		padding-bottom: 26rpx;
	}

	.look {
		width: 126rpx;
		height: 46rpx;
		line-height: 46rpx;
		border-radius: 16rpx;
		background-color: rgba(84, 151, 203, 100);
		text-align: center;
		color: rgba(255, 255, 255, 100);
		font-size: 22rpx;
		font-family: PingFangSC-regular;
		margin-top: 12rpx;
	}

	.scenic {
		display: flex;
	}

	.songss {
		width: 272rpx;
		height: 240rpx;
		line-height: 40rpx;

		border-radius: 10rpx;
		text-align: center;
		border: 1px solid rgba(187, 187, 187, 100);
		margin-left: 28rpx;
		margin-top: 20rpx;
		margin-bottom: 34rpx;
	}

	.songss_im {
		width: 270rpx;
		height: 160rpx;
		border-radius: 10rpx 10rpx 0px 0px;
	}

	.songss_im image {
		width: 100%;
		height: 100%;
	}

	.daoh {
		width: 78rpx;
		height: 78rpx;
		margin-bottom: 16rpx;
	}

	.daoh image {
		width: 100%;
		height: 100%;
	}
	.bottom{
		padding-top: 50rpx;
		width: 100%;
		height: 120px;
		text-align: center;
		color: #989898;
		background-color: rgba(247, 247, 247, 100);
		font-size: 22rpx;
		/* background: #000000; */
	}
	.bottom view {
		line-height: 30rpx;
	}
</style>