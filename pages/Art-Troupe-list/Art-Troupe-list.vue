<template>
	<view class="home-page">
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
							<view class="right-item1">全部</view>
							<!-- <view class="right-item1">文旅风采</view>
							<view class="right-item1">今日头条</view>
							<view class="right-item1">政策法规</view>
							<view class="right-item1">通知公共</view>
							<view class="right-item1">本市资讯</view>
							<view class="right-item1">其他</view> -->
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
		<view class="all-content" >
			<view class="content-item" @click="artgtoup(item)" v-for="(item,index) in artgroup.lists">
				<view class="item-left">
					<view class="item-left-img">
					<image :src="item.cover" mode=""></image>
					</view>
				</view>
				<view class="item-right">
					<view class="item-right-title">
						{{item.name}}
					</view>
					<view class="item-right-number">
					 <text>艺团种类：</text>
					 <text>{{item.category}}</text>
					</view>
					<view class="item-right-source">
						<text>艺团人数：</text>
						<text>{{artgroup.total}}</text>
					</view>
					
				</view>
			</view>
			
		</view>
		<view class="allpage" >
			<uni-pagination :total="postCount" :current="pageNum"
				:pageSize="pageSize" @change="handlePage"  prev-text="前一页" next-text="后一页" />
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
				name:''
			}
		},
		methods: {
			handlePage(params) {
				this.pageNum = params.current;
				this.getMoreListInfo()
			},
			getMoreListInfo() {
				const that = this
				this.$request('/api/artgroup/get_list', {
					cate: that.id,
					area: that.area,
					pagesize: that.pagesize[that.id],
					page: that.pageNum
				}, 'post', {}).then(res => {
					// console.log(res)
					if (res.code == 1) {
						that.venue = res.data
						that.postCount = res.data.total
					}
				})
			},
			//文化资讯列表
			alldetails(){
				uni.navigateTo({
					url:'../Information-details/Information-details?id='+item.id
				})
			},
			//艺团详情
			artgtoup(item){
				uni.navigateTo({
					url:'../Art-Ttoupelist-details/Art-Ttoupelist-details?id='+item.id
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
				this.name=this.$lang.name[uni.getStorageSync('lang')];
			},



		},
		onLoad(e) {
			this.name=e.name
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
			
			if (e.area == 'undefined' || e.area == undefined || e.area == '' || e.area == null) {
				if (uni.getStorageSync('area')) {
					this.area = uni.getStorageSync('area')
				}
			}else{
				this.area = e.area
			}

			// if (uni.getStorageSync('area')) {
			// 	this.area = uni.getStorageSync('area')
			// }else{
			// 	this.area = 9784;
			// 	uni.setStorageSync('area', 9784)
			// }
			
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

			//艺团列表
			this.$request('/api/artgroup/get_list', {
				area: this.area,
				cover: '',
				pagesize: '2'
			}, 'post', {}).then(res => {

				if (res.code === 1) {
					this.artgroup = res.data;
					this.postCount = res.data.total
				}
			})
		}
	}
</script>

<style>
	.all{
		padding: 0rpx 170rpx;
		width: 100%;
		height: 100%;
		background-color: #F7F7F7;
		/* margin: auto; */
	}
	.all-content{
		display: flex;
		flex-wrap: wrap;
		/* justify-content: space-around; */
		margin-top: 30rpx;
		
	}
	.solid{
		height: 50rpx;
		background-color: #F7F7F7;
	}
	.item-right-title{
		font-weight: bold;
		font-size: 20rpx;
		color: #333;
		/* text-indent: 20rpx; */
		padding: 0rpx 10rpx;
		margin-top: 20rpx;
	}
	.item-right-number{
		font-weight: 400;
		font-size: 18rpx;
		color: #333;
		padding: 0rpx 10rpx;
		margin-top: 10rpx;
	}
	.item-right-source{
		font-weight: 400;
		font-size: 18rpx;
		color: #333;
		padding: 0rpx 10rpx;
		margin-top: 10rpx;
		padding-bottom: 20rpx;
	}
	.content-item{
		width: 380rpx;
		border: 1rpx solid rgba(200,200,200,0.75);
		background-color: #FFFFFF;
		margin-top: 20rpx;
		margin-left: 10rpx;
		/* margin-right: 10rpx; */
	}
	.item-left-img image{
		margin-left: 10rpx;
		margin-top: 10rpx;
		width: 360rpx;
		height: 238rpx;
		/* padding: 0rpx 10rpx; */
		/* border: 1rpx solid red; */
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
		width: 1100rpx;
		height: 83rpx;
		line-height: 83rpx;
		border: 1rpx solid rgba(200,200,200,0.75);
		margin-top: 40rpx;
		background-color: #FFFFFF;
		margin-left: 250rpx;
		border-radius: 5rpx;
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
	.right-item1{
		margin-left: 60rpx;
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
