<template>
	<view >
		<router></router>
	<!-- 文化资讯列表 -->
	<view class="all">
		<view class="body_content">
			<view class="all-address">
				您所在的位置：首页>{{name}}
			</view>
			<view class="all-type">
				<view class="type-item">
					<view class="type-item-left">
						类型
					</view>
					<view class="type-item-right">
							<view :class="leixing==id?'right-item1':'right-item2'"  @click="select(id)">全部</view>
							<view v-for="(item,index) in classfiy.lists">
								<view :class="leixing==item.id?'right-item1':'right-item2'" @click="select(item.id,item.title)">{{item.title}}</view>
							</view>
					</view>
				</view>
			</view>
		</view>
		<!-- <view class="all-select">
			<view class="all-select-left">
				
			</view>
			<view class="all-select-right">
				<view class="select-input">
					<input type="text" value=""  placeholder="请输入您感兴趣的内容"/>
				</view>
				<view class="select-img">
					<image src="../../static/ic_search.png" mode=""></image>
				</view>
			</view>
			
		</view> -->
		<view class="all-content" v-if="list.lists.length!=0">
				<view class="content-item" @click="alldetails(items)" v-for="(items,index) in list.lists">
					<view class="item-left">
						<view class="item-left-img">
						<image :src="items.cover" mode=""></image>
						</view>
					</view>
					<view class="item-right">
						<view class="item-right-title">
							{{items.title}}
						</view>
						<view class="item-right-number">
						 <text>点播人次：</text>
						 <text>{{items.views}}</text>
						</view>
						<view v-if="items.source!=''" class="item-right-source">
							<text>来源：</text>
							<text>{{items.source}}</text>
						</view>
						<view class="item-right-time">
							{{items.create_time}}
						</view>
					</view>
				</view>
			</view>
		</view>
	    <view class="allpage">
	    	<uni-pagination :total="postCount" :current="pageNum"
	    		:pageSize="pageSize" @change="handlePage"  prev-text="前一页" next-text="后一页" />
	    </view>
	<bottom></bottom>
	</view>
</template>

<script>
	import uniPagination from '../../components/uni-pagination/uni-pagination.vue'
	export default {
		components:{
			uniPagination
		},
		data() {
			return {
				title: '文章列表',
				postCount: '',
				pageSize: 12,
				pageNum: 0,
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
				
				id:'',   //
				name:'',  //名字
				pagesize: [],
				classfiy:[], //类型列表
				leixing:0
			}
		},
		methods: {
			//文化资讯列表
			alldetails(item){
				uni.navigateTo({
					url:'../Information-details/Information-details?id=' + item.id + '&name=' + this.name
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
			},
			handlePage(params) {
				this.pageNum = params.current;
				this.getMoreListInfo()
			},
			select(id) {
				// this.title = title;
				// this.ShowHidden = !this.ShowHidden;
				this.leixing=id
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
			this.id = e.id;
			this.name = e.name;
			let cId = e.id;
			// if (uni.getStorageSync('area')) {
			// 	this.area = uni.getStorageSync('area')
			// }
			console.log(e.area)
			if (e.area == 'undefined' || e.area == undefined || e.area == '' || e.area == null) {
				if (uni.getStorageSync('area')) {
					this.area = uni.getStorageSync('area')
				}
			}else{
				this.area = e.area
			}
			let that = this
			this.$request('/api/article/get_cates', {
				pid: that.id
			}, 'post', {}).then(res => {
				console.log(res)
				if (res.code == 1) {
					that.classfiy = res.data
					console.log(that.classfiy)
					res.data.lists.forEach((item, key) => {
						that.pagesize[item.id] = item.pagesize
					})
				}
			});
			
			this.$request('/api/article/get_all_cates', {
				pid: cId
			}, 'post', {}).then(res => {
				if (res.code == 1) {
					that.pagesize[cId] = res.data.lists[1].pagesize
					this.$request('/api/article/get_list', {
						cate: cId,
						area: that.area,
						pagesize: that.pagesize[cId]
					}, 'post', {}).then(res => {
						if (res.code == 1) {
							that.list = res.data
							// this.list = res.data
							that.postCount = res.data.total
							console.log(that.list)
						}
					})
				}
			});
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
			// if (e.linkarea) {
			// 	this.area = e.linkarea
			// 	uni.setStorageSync('area', e.linkarea)
			// }

			// if (uni.getStorageSync('area')) {
			// 	this.area = uni.getStorageSync('area')
			// }else{
			// 	this.area = 9784;
			// 	uni.setStorageSync('area', 9784)
			// }

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
			// this.area = uni.getStorageSync('area')
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
							pagesize: this.pagesize[cId]
							// page:this.pageNum,
							// pagesize: this.pagesize[id]
							// page:'1',
							// pagesize:'6'
						}, 'post', {}).then(res => {
							if (res.code == 1) {
								this.$set(this.article_data, key, res.data.lists)
								this.postCount = res.data.total
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
	.allpage{
		background-color: #F7F7F7;
		padding-bottom: 100px;
	}
	.all{
		padding: 0rpx 170rpx;
		padding-bottom: 78rpx;
		width: 100%;
		height: 100%;
		background-color: #F7F7F7;
		/* margin: auto; */
	}
	.item-left-img image{
		width: 250rpx;
		height: 130rpx;
		/* border: 1rpx solid pink; */
		/* margin-bottom: 20rpx;
		margin-right: 30rpx; */
		margin: 10px;
	}
	.all-content{
		width: 100%;
		height: 100%;
		/* border: 1rpx solid red; */
		margin-top: 30rpx;
		/* padding: 0rpx 170rpx; */
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-bottom: 20rpx;
		border-radius: 5rpx;
	}
	.content-item{
		/* width: 570rpx; */
		width: 45%;
		height: 154rpx;
		border: 1rpx solid rgba(200,200,200,0.75);
		display: flex;
		background-color: #FFFFFF;
		margin-top: 30rpx;
		margin-bottom: 20rpx;
		border-radius: 10rpx;
	}
	.item-right{
		margin-right: 20rpx;
		/* border: 1rpx solid black; */
	}
	.item-right-title{
		font-size: 20rpx;
		font-weight: bold;
		text-indent: 20rpx;
		margin-top: 10rpx;
	}
	.item-right-number{
		font-size: 18rpx;
		color: #666666;
		margin-top: 5rpx;
	}
	.item-right-source{
		font-size: 18rpx;
		color: #333333;
		margin-top: 3rpx;
	}
	.item-right-time{
		font-size: 16rpx;
		color: #666666;
		margin-top: 3rpx;
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
	.all-address{
		width: 1200rpx;
		margin-left: 170rpx;
		/* border: 1rpx solid red; */
		padding-top: 50rpx;
		font-size: 20rpx;
	}
	.type-item{
		display: flex;
		
	}
	.type-item-right{
		display: flex;
	}
	.all-type{
		width: 80%;
		/* width: 1100rpx; */
		height: 83rpx;
		line-height: 83rpx;
		border: 1rpx solid rgba(200,200,200,0.75);
		margin-top: 40rpx;
		background-color: #FFFFFF;
		/* margin-left: 250rpx; */
		/* margin-left: 160px; */
		margin-left: 10%;
		border-radius: 10rpx;
	}
	.type-item-left{
		width: 120rpx;
		    color: #C93F49;
		    font-weight: bold;
		    height: 38rpx;
		    font-size: 24rpx;
		    text-indent: 15rpx;
			margin-left: 30rpx;
	}
	.type-item-right{
		font-size: 18rpx;
		    color: #666666;
		    height: 24rpx;
		    cursor: pointer;
		    float: left;
		    padding: 0 14rpx;
		    margin: 6rpx 7rpx 6rpx 0;
	}
	.right-item1 {
		margin-left: 20rpx;
		color: #C93F49;
		/* width: 80rpx;
		border: 1rpx solid red; */
	}
	
	.right-item2 {
		margin-left: 20rpx;
		color: #666666;
		/* width: 80rpx;
		border: 1rpx solid red; */
	}
	.all-select{
		width: 1100rpx;
		height: 66rpx;
		border: 1rpx solid rgba(200,200,200,0.75);
		margin-left: 250rpx;
		margin-top: 30rpx;
		display: flex;
		justify-content: space-between;
		background-color: #FFFFFF;
		border-radius: 5rpx;
	}
	.all-select-right{
		width: 357rpx;
		height: 44rpx;
		display: flex;
		justify-content: space-between;
		border: 1rpx solid rgba(200,200,200,0.75);
		border-radius: 22rpx;
		margin-top: 10rpx;
		margin-right: 20rpx;
	}
	.all-select input{
		width: 250rpx;
		height: 44rpx;
		font-size: 18rpx;
		text-indent: 40rpx;
	}
	.select-img image{
		width: 26rpx;
		height: 26rpx;
		margin-right: 20rpx;
		margin-top: 10rpx;
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

</style>
