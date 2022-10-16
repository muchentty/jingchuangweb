<template>
	<view>
		<router></router>
		<view class="all">
			<view class="all-address">
				您所在的位置：{{name}}
			</view>
			<view class="appoint-content">
				<view class="appoint-content-left">
					<image :src="activity.cover" mode=""></image>
				</view>
				<view class="appoint-content-right">
					<view class="appoint-content-title">
						{{activity.title}}
					</view>
					<view class="appoint-content-img">
						<view class="appoint-content-img-left">
							<view class="img-left">
								<image src="../../static/anquan.png" mode=""></image>
							</view>
							<view class="img-txt">
								<text>其他</text>
							</view>
						</view>
					</view>
					<view class="appoint-content-item">
						<text class="blod">地址: </text>
						<text class="noblod"> {{activity.address}}（详见详情）</text>
					</view>
					<view class="appoint-content-item">
						<text class="blod">活动日期:</text>
						<text class="noblod"> {{activity.start_time}} 至 {{activity.end_time}}</text>
					</view>
					<!-- <view class="appoint-content-item">
						<text class="blod">活动时间:</text>
						<text class="noblod"> 00:00-00:00</text>
					</view>
					<view class="appoint-content-item">
						<text class="blod">发布来源:</text>
						<text class="noblod"> 东莞市</text>
					</view> -->
					<!-- <view class="appoint-bottom" @click="yuyue">
						<button type="default">立即预约</button>
					</view> -->
				</view>
			</view>
			<view class="content-center">
				<view :class="shows==0?'content-center-title':'content-center-title1'" @click="show(0)">
					活动详情
				</view>
				<view :class="shows==1?'content-center-title':'content-center-title1'" @click="show(1)">
					场次
				</view>
			</view>
			<view>
				<view class="appoint-details" v-show="sh==0">
					<view class="appoint-details-content">
						{{activity.content}}
					</view>
				</view>
				<view class="appoint-details" v-show="sh==1">
					<view class="appoint-details-content">
						<view class="content-bottom-show-noblod" v-if="lists!=null">
							<view class="content-bottom-show-item" v-for="(items,index) in lists">
								<view class="show-item-name">
									{{items.title}}
								</view>
								<view class="show-item-yu">
									{{items.start_time}}-{{items.end_time}}
								</view>
								<view class="show-item-yu">
									余票：{{items.num}}
								</view>
								<view class="show-item-yu">
									{{items.content}}
								</view>
								<view class="show-item-button">
									<view class="button-left">
									</view>
									<view class="button-right" @click="yuyue">
										<button type="default">立即预约</button>
									</view>
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
				id: '',
				name: '',
				activity: [],
				lists: [],
				sessions: false,
				c_id: '',
				shows:0,
				sh:0,
			}
		},
		methods: {
			yuyue() {
				uni.showModal({
					title: '活动预约',
					content: '确定预约吗？',
					success: function(res) {
						if (res.confirm) {
							console.log('确定')
						} else if (res.cancel) {
							console.log('取消')
						}
					}
				})
				},
			// yuyue(){
			// 	uni.navigateTo({
			// 		url:'../Session-reservation/Session-reservation'
			// 	})
			// },
			show(index){
				this.shows = index
				this.sh = index
			}
		},
		onLoad(e) {
			this.id = e.id;
			this.name = e.name;
			this.$request('/api/activity/view', {
				id: this.id,
			}, 'post', {}).then(res => {
				if (res.code === 1) {
					this.activity = res.data.activity;
					this.lists = res.data.lists;
				}
			})
		}
	}
</script>

<style>
	.all {
		height: 100%;
		width: 100%;
		background-color: #F7F7F7;
		padding: 0rpx 170rpx;
		/* border: 1rpx solid red; */
		padding-bottom: 150rpx;
	}

	.all-address {
		/* margin-left: 170rpx; */
		/* border: 1rpx solid red; */
		padding-top: 50rpx;
		font-size: 20rpx;
	}

	.appoint-content {
		/* border: 1rpx solid red; */
		margin-top: 30rpx;
		display: flex;
	}

	.appoint-content-left {
		/* border: 1rpx solid black; */
	}

	.appoint-content-left image {
		width: 400rpx;
		/* height: 260rpx; */
		padding: 20rpx 20rpx;
		border: 1rpx solid black;
	}

	.appoint-content-right {
		margin-left: 30rpx;
		/* border: 1rpx solid yellow; */
		width: 100%;
	}

	.appoint-content-title {
		font-size: 28rpx;
		color: #262626;
		font-weight: bold;
		margin-bottom: 10rpx;
	}

	.appoint-content-img-right {
		display: flex;
	}

	.img-left image {
		width: 24rpx;
		height: 24rpx;
		margin-right: 10rpx;
	}

	.appoint-content-img-right image {
		width: 24rpx;
		height: 24rpx;
		margin-top: 5rpx;
		margin-left: 20rpx;
		margin-right: 10rpx;
	}

	.appoint-content-img-left {
		display: flex;
	}

	.appoint-content-img {
		display: flex;
		justify-content: space-between;
		/* border: 1rpx solid red; */
		font-size: 18rpx;
		color: #999999;
	}

	.img-right-item {
		display: flex;
	}

	.appoint-content-item {
		margin-top: 20rpx;
	}

	.blod {
		font-size: 20rpx;
		font-weight: bold;
		margin-right: 10rpx;
	}

	.noblod {
		font-size: 20rpx;
	}

	.appoint-bottom button {
		width: 240rpx;
		height: 47rpx;
		line-height: 47rpx;
		text-align: center;
		color: #FFFFFF;
		background-color: #CF282B;
		margin-left: 0rpx;
		margin-top: 30rpx;
	}

	.appoint-details-content {
		padding: 50rpx 20rpx;
	}

	.appoint-details {
		margin-top: 50rpx;
		border-top: 1rpx solid #CF282B;
		border-left: 1rpx solid rgba(200, 200, 200, 0.75);
		border-right: 1rpx solid rgba(200, 200, 200, 0.75);
		border-bottom: 1rpx solid rgba(200, 200, 200, 0.75);
		background-color: #FFFFFF;
		height: 100%;
	}

	.appoint-details-top {
		height: 51rpx;
		line-height: 51rpx;
		padding-left: 20rpx;
		font-size: 24rpx;
		color: #CF282B;
		border-bottom: 1rpx solid rgba(200, 200, 200, 0.75);
	}

	.content-center {
		display: flex;
		width: 100%;
		height: 43rpx;
		border: 1rpx solid rgba(200, 200, 200, 0.75);
		margin-top: 20rpx;
	}

	.content-center-title {
		color: #CF282B;
		width: 160rpx;
		height: 42rpx;
		line-height: 42rpx;
		text-align: center;
		font-size: 20rpx;
		border-right: 1rpx solid rgba(200, 200, 200, 0.75);
	}

	.content-center-title1 {
		color: #000000;
		width: 160rpx;
		height: 42rpx;
		line-height: 42rpx;
		text-align: center;
		font-size: 20rpx;
		border-right: 1rpx solid rgba(200, 200, 200, 0.75);
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
		border: 1rpx solid red;
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
		color: #787878;
	}
	.show-item-button{
		height: 50rpx;
		margin-top: 30rpx;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.show-item-yu{
		margin-top: 5px;
		margin-left: 15px;
		
	}
	.button-right button{
		line-height:50rpx ;
		height: 50rpx;
		font-size: 18rpx;
		color: #FFFFFF;
		background-color:#CF282B ;
	}
	
</style>
