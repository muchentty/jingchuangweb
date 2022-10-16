<template>
	<view>
		<router></router>
		<!-- 文化资讯列表 -->
		<view class="all">
			<view class="body_content">
				<view class="all-address">
					您所在的位置：
				</view>
			</view>
			<view class="all-content">
				<view class="content-top" >
					<view class="content-top-itemleft">
						<view class="content-top-left">
							<image :src="art.artgroup.cover" mode=""></image>
						</view>
						<view class="content-top-right">
							<view class="content-top-right-name">
								{{art.artgroup.name}}
							</view>
						</view>
					</view>
					<view class="content-top-itemeight" @click="allappoint">
						<button type="default">全部预约</button>
					</view>
					
				</view>
				<view class="content-center">
					<view :class="shows==0?'content-center-title':'content-center-title1'" @click="show(0)">
						精彩回顾
					</view>
					<view :class="shows==1?'content-center-title':'content-center-title1'" @click="show(1)">
						艺团简介
					</view>
					<view :class="shows==2?'content-center-title':'content-center-title1'" @click="show(2)">
						节目
					</view>
				</view>
				<view class="content-bottom">
					
						<view class="content-bottom-video" v-show="sh==0">
							<view class="content-bottom-video-top" v-if="art.artgroup.video!=null">
							<view class="bottom-video" v-for="item in art.artgroup.video">
								<video id="myVideo" :src="item.url"></video>
								<view class="video-name">{{item.name}}</view>
							</view>
							<view class="bottom-video">
								<image src="../../static/anquan.png" mode=""></image>
							</view>
							<view class="bottom-video">
								<image src="../../static/anquan.png" mode=""></image>
							</view>
							<view class="bottom-video">
								<image src="../../static/anquan.png" mode=""></image>
							</view>
							</view>
							<view class="videos" v-else>暂无视频</view>
						</view>
					
					
					<view class="content-bottom-txt" v-show="sh==1" >
						<text v-html="art.artgroup.content">
							{{art.artgroup.content}}
						</text>
					</view>
					<view class="content-bottom-show" v-show="sh==2">
						<view class="content-bottom-show-noblod" v-if="art.lists!=null">
							<view class="content-bottom-show-item" v-for="(items,index) in art.lists">
								<view class="show-item-img">
									<image :src="items.cover" mode=""></image>
								</view>
								<view class="show-item-name">
									{{items.name}}
								</view>
								<view class="show-item-time">
									{{items.start_time}}-{{items.end_time}}
								</view>
								<view class="show-item-button">
									<view class="button-left">
										
									</view>
									<view class="button-right" @click="appoint">
										<button type="default">立即预约</button>
									</view>
								</view>
							</view>
						</view>
						<view class="kong" v-else>
							<view class="kong-txt">
								暂无内容
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
				shows:0,
				sh:0,
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
				art:[],
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
			}
		},
		methods: {
			//立即预约
			appoint(){
				uni.showModal({
					title:'节目预约',
					content:'确定预约吗？',
					success:function(res){
						if(res.confirm){
							console.log('确定')
						}else if(res.cancel){
							console.log('取消')
						}
					}
				})
			},
			// appoint(){
			// 	uni.navigateTo({
			// 		url:'../Program-reservation/Program-reservation'
			// 	})
			// },
			//预约全部节目
			allappoint(){
				uni.showModal({
					title:'全部节目预约',
					content:'确定预约所有节目吗？',
					success:function(res){
						if(res.confirm){
							console.log('确定')
						}else if(res.cancel){
							console.log('取消')
						}
					}
				})
			},
			//文化资讯列表
			alldetails() {
				uni.navigateTo({
					url: '../Information-details/Information-details'
				})
			},
			//艺团详情
			artgtoup() {
				uni.navigateTo({
					url: '../Art-Ttoupelist-details/Art-Ttoupelist-details'
				})
			},
			show(e){
				this.shows=e
				this.sh=e
			},
			tapscroll: function() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				})
			},
			formatRichText(html) {
				let newContent = html.replace(/<img[^>]*>/gi, function(match, capture) {
					match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '');
					match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '');
					match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '');
					return match;
				});
				newContent = new
				Content.replace(/style="[^"]+"/gi, function(match, capture) {
					match = match.replace(/width:[^;]+;/gi, 'max-width:100%;').replace(/width:[^;]+;/gi,
						'max-width:100%;');
					return match;
				});
				newContent = newContent.replace(/<br[^>]*\/>/gi, '');
				newContent = newContent.replace(/\<img/gi,
					'<img style="max-width:100%;height:auto;display:inline-block;margin:10rpx auto;"');
				return newContent;
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
			//艺团详情
			let id = e.id;
			this.$request('/api/artgroup/view',{
				id: id,
			},'post',{}).then(res=>{
				
				if (res.code === 1) {
					this.art = res.data;
					
					this.art.artgroup.content = this.formatRichText(this.art.artgroup.content);
					
					for (let i = 0; i < this.art.lists.length; i++) {
						this.art.lists[i].flag = false
					}
					
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
			
		}
	}
</script>

<style>
	.content-bottom-show-noblod{
		display: flex;
	}
	.videos,.kong-txt{
		font-size: 20rpx;
	}
	#myVideo {
		width: 690rpx;
		height: 402rpx;
	}
	.video-name {
		text-align: center;
		margin: 10rpx 0;
	}
	
	.all {
		padding: 0rpx 170rpx;
		padding-bottom: 50rpx;
		width: 100%;
		height: 100%;
		background-color: #F7F7F7;
		/* margin: auto; */
	}
	.content-top{
		width: 100%;
		height: 180rpx;
		border: 1rpx solid rgba(200,200,200,0.75);
		background-color: #FFFFFF;
		border-radius: 10rpx;
	}
	.all-address{
		padding-top: 30rpx;
		padding-bottom: 30rpx;
	}
	.content-top-right-name{
		margin-left: 40rpx;
		margin-top: 60rpx;
		font-size: 24rpx;
	}
	.content-top{
		display: flex;
		justify-content: space-between;
	}
	.content-top-itemleft{
		display: flex;
	}
	.content-center-title{
		color: #CF282B;
		width: 160rpx;
		height: 42rpx;
		line-height: 42rpx;
		text-align: center;
		font-size: 20rpx;
		border-right: 1rpx solid rgba(200,200,200,0.75);
	}
	.content-center-title1{
		color: #000000;
		width: 160rpx;
		height: 42rpx;
		line-height: 42rpx;
		text-align: center;
		font-size: 20rpx;
		border-right: 1rpx solid rgba(200,200,200,0.75);
	}
	.content-center{
		display: flex;
		width: 100%;
		height:43rpx ;
		border: 1rpx solid rgba(200,200,200,0.75);
		margin-top: 20rpx;
	}
	.content-top-itemeight button{
		color: #FFFFFF;
		background-color: red;
		margin-top: 60rpx;
		margin-right: 80rpx;
	}
	.content-top-left image{
		width: 108rpx;
		height: 108rpx;
		margin-top: 30rpx;
		margin-left: 30rpx;
		border-radius: 50%;
	}
	.content-bottom{
		width: 100%;
		border: 1rpx solid rgba(200,200,200,0.75);
		background-color: #FFFFFF;
	}
	.content-bottom-video{
		/* border: 1rpx solid yellow; */
		padding: 30rpx 30rpx;
		display: flex;
		flex-wrap: wrap;
	}
	.bottom-video{
		margin-top: 20rpx;
		margin-right: 20rpx;
		margin-left: 40rpx;
		width: 500rpx;
		border: 1rpx solid red;
	}
	.content-bottom-txt{
		padding: 30rpx 30rpx;
		width: 100%;
		height: 300rpx;
		font-size: 20rpx;
	}
	.content-bottom-show{
		padding: 30rpx 30rpx;
		display: flex;
		flex-wrap: wrap;
	}
	.content-bottom-show-item{
		border: 1rpx solid rgba(200,200,200,0.75);
		width: 300rpx;
		border-radius: 10rpx;
		margin-right: 30rpx;
		margin-left: 40rpx;
		margin-bottom: 30rpx;
	}
	.content-bottom-show-item image{
		width: 280rpx;
		height: 280rpx;
		margin-left: 10rpx;
		margin-top: 10rpx;
		/* border: 1rpx solid red; */
	}
	.show-item-name{
		margin-left: 10rpx;
		font-size: 20rpx;
		font-weight: bold;
		margin-top: 20rpx;
	}
	.show-item-time{
		margin-left: 10rpx;
		margin-top: 10rpx;
		font-size: 18rpx;
		color: #CACACA;
	}
	.show-item-button{
		height: 50rpx;
		margin-top: 30rpx;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.button-right button{
		line-height:50rpx ;
		height: 50rpx;
		font-size: 18rpx;
		color: #FFFFFF;
		background-color:#CF282B ;
	}
	page {
		/* 样式优先级 */
		width: 100% !important;
		max-width: 1920px !important;
		/* max-width: 750px; */
		height: 100%;
		margin: 0 auto;
	}
</style>
