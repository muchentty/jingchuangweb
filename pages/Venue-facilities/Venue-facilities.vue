<template>
	<view>
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
						<view class="type-item-right" v-for="(item,index) in classify">
							<view :class="leixing == item.id?'right-item1':'right-item2'" @click="select(item.id,item.title)">{{item.title}}</view>
							<!-- <view class="right-item1">文化站</view>
							<view class="right-item1">剧院</view>
							<view class="right-item1">艺术馆</view>
							<view class="right-item1">博物馆</view>
							<view class="right-item1">图书馆</view>
							<view class="right-item1">美术馆</view> -->
						</view>
					</view>
				</view>
			</view>
			<view class="all-content">
				<view class="content-item" @click="Venueitem(item)" v-for="(item,index) in venue.lists">
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
							<text>地点：</text>
							<text>{{item.address}}</text>
						</view>
						<view class="item-right-time">
							<text>时间:</text>
							<text>{{item.start_time}}-{{item.end_time}}</text>
						</view>
					</view>
				</view>
			</view>
			<view class="allpage" >
				<uni-pagination :total="postCount" :current="pageNum"
					:pageSize="pageSize" @change="handlePage"  prev-text="前一页" next-text="后一页" />
			</view>
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
				wode: '',
				shouye: '',
				name: '',
				leixing: 0
			}
		},
		methods: {
			handlePage(params) {
				this.pageNum = params.current;
				this.getMoreListInfo()
			},
			getMoreListInfo() {
				const that = this
				this.$request('/api/venue/get_list', {
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
			Venueitem(item) {
				uni.navigateTo({
					url: '../Venue-Details-item/Venue-Details-item?id=' + item.id + '&name=' + this.name
				})
			},
			tapscroll: function() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				})
			},
			//模糊查询
			select(id) {
				// this.leixing = item.title;
				// this.ShowHidden = !this.ShowHidden;
				this.leixing = id
				this.c_id = id;
				this.$request('/api/venue/get_list', {
					area: this.area,
					cate: this.c_id,
					pagesize: '10',
					page: '1'
				}, 'post', {}).then(res => {
					this.venue = res.data
					this.postCount = res.data.total
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
		},
		onLoad(e) {
			this.name = e.name
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
			//场馆预约
			this.$request('/api/venue/get_list', {
				area: this.area,
				cate: 1,
				pagesize: '2',
				page: '1',
				cover: this.cover
			}, 'post', {}).then(res => {


				this.venue = res.data
				this.postCount = res.data.total
			})
			//场馆类型
			this.$request('/api/venue/get_category', {

			}, 'post', {}).then(res => {

				this.classify = res.data.lists

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
			})
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
			//场馆类型
			this.$request('/api/venue/get_category', {

			}, 'post', {}).then(res => {

				this.classify = res.data.lists

			})

		}
	}
</script>

<style>
	.allpage{
		margin-top: 60px;
		padding-bottom: 100px;
	}
	.item-right-title {
		margin-top: 10rpx;
		font-size: 24rpx;
		margin-left: 20rpx;
	}

	.item-right-number {
		margin-left: 20rpx;
		font-size: 18rpx;
		color: rgba(200, 200, 200, 0.75);
	}

	.item-right-time {
		margin-left: 20rpx;
		font-size: 18rpx;
		color: rgba(200, 200, 200, 0.75);
	}

	.all {
		width: 100%;
		margin: auto;
		padding: 0rpx 170rpx;
	}

	.all-content {
		margin-top: 30rpx;
		padding: 0rpx 170rpx;
		display: flex;
		flex-wrap: wrap;
		width: 100%;
	}

	.item-left-img image {
		width: 346rpx;
		height: 233rpx;
		/* border: 1rpx solid red; */
		margin-top: 10rpx;
		margin-left: 15rpx;
	}

	.content-item {
		width: 383rpx;
		height: 363rpx;
		/* margin-right: 10rpx; */
		/* margin-left: 20rpx; */
		margin-bottom: 20rpx;
		margin-right: 20rpx;
		border: 1rpx solid rgba(200, 200, 200, 0.75);
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
		background: #CF282B;
		padding: 0rpx 340rpx;
		height: 160rpx;
		display: flex;
		justify-content: space-between;
	}

	.bottom-left text {
		font-size: 20rpx;
		color: #FFFFFF;
		margin-top: 50rpx;
	}

	.bottom-left {
		margin-top: 40rpx;
	}

	.bottom-right-left {

		margin-right: 40rpx;
	}

	.all-address {
		width: 1200rpx;
		margin-left: 170rpx;
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
		/* color: #666666; */
		height: 24rpx;
		cursor: pointer;
		float: left;
		padding: 0 14rpx;
		margin: 6rpx 7rpx 6rpx 0;
	}

	.right-item1 {
		/* margin-left: 20rpx; */
		color: #C93F49;
		/* width: 80rpx;
		border: 1rpx solid red; */
	}

	.right-item2 {
		/* margin-left: 20rpx; */
		color: #666666;
		/* width: 80rpx;
		border: 1rpx solid red; */
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
