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
						<view class="type-item-right">
							<view :class="leixing==id?'right-item1':'right-item2'" @click="select(id)">全部</view>
							<view v-for="(item,index) in classify">
								<view :class="leixing==item.id?'right-item1':'right-item2'" @click="select(item.id,item.title)">{{item.title}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="all-content" v-if="venue.lists.length!=0">
				<view class="content-item" @click="alldetails(item)" v-for="item in venue.lists">
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
							<text>地址：</text>
							<text>{{item.address}}</text>
						</view>
						<view class="item-right-time">
							开放时间：{{item.start_time}} - {{item.end_time}}
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
				id: '', //
				name: '', //名字
				pagesize: [],
				classfiy: [], //类型列表

				classify: [],
				ShowHidden: false,
				title: this.lvyoujingdian,
				c_id: '6',
				venue: [],
				area: '1',
				leixing:''
			}
		},
		methods: {
			alldetails(item) {
				uni.navigateTo({
					url: '../torist-attract-detail-pc/torist-attract-detail-pc?id=' + item.id + '&name=' + this.name
				})
			},
			select(id) {
				this.leixing=id
				this.$request('/api/venue/get_list', {
					cate: id,
					area: this.area,
					pagesize: '10',
					page: '1'
				}, 'post', {}).then(res => {
					console.log(res)
					if (res.code == 1) {
						this.venue = res.data
					}
				})
			},
		},
		onLoad(e) {
			this.name = e.name
			if (uni.getStorageSync('area')) {
				this.area = uni.getStorageSync('area')
			}
			this.$request('/api/venue/get_category', {

			}, 'post', {}).then(res => {
				this.classify = res.data.lists
			})
			this.$request('/api/venue/get_list', {
				area: this.area,
				cate: this.c_id,
				pagesize: '10',
				page: '1'
			}, 'post', {}).then(res => {
				console.log(res)
				this.venue = res.data
			})
		},
		onShow() {

		}
	}
</script>

<style>
	.all {
		padding: 0rpx 170rpx;
		padding-bottom: 78rpx;
		width: 100%;
		height: 100%;
		background-color: #F7F7F7;
		/* margin: auto; */
	}

	.item-left-img image {
		width: 250rpx;
		height: 130rpx;
		/* border: 1rpx solid pink; */
		margin-bottom: 20rpx;
		margin-right: 30rpx;
	}

	.all-content {
		width: 100%;
		height: 100%;
		/* border: 1rpx solid red; */
		margin-top: 30rpx;
		padding: 0rpx 170rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-bottom: 20rpx;
		border-radius: 5rpx;
	}

	.content-item {
		width: 570rpx;
		height: 154rpx;
		border: 1rpx solid rgba(200, 200, 200, 0.75);
		display: flex;
		background-color: #FFFFFF;
		margin-top: 30rpx;
		margin-bottom: 20rpx;
		border-radius: 5rpx;
	}

	.item-right {
		margin-right: 20rpx;
		/* border: 1rpx solid black; */
	}

	.item-right-title {
		font-size: 20rpx;
		font-weight: bold;
		text-indent: 20rpx;
		margin-top: 10rpx;
	}

	.item-right-number {
		font-size: 18rpx;
		color: #666666;
		margin-top: 5rpx;
	}

	.item-right-source {
		font-size: 18rpx;
		color: #333333;
		margin-top: 3rpx;
	}

	.item-right-time {
		font-size: 16rpx;
		color: #666666;
		margin-top: 3rpx;
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
		margin-left: 250rpx;
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
		margin-left: 30rpx;
		color: #C93F49;
		/* width: 80rpx;
		border: 1rpx solid red; */
	}
	
	.right-item2 {
		margin-left: 30rpx;
		color: #666666;
		/* width: 80rpx;
		border: 1rpx solid red; */
	}

	.all-select {
		width: 1100rpx;
		height: 66rpx;
		border: 1rpx solid rgba(200, 200, 200, 0.75);
		margin-left: 250rpx;
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
