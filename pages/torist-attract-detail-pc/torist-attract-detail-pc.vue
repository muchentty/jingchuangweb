<template>
	<view>
		<router></router>
		<!-- 文化资讯详情-->
		<view class="details-content">
			<view class="details-top">
				<view class="details-top-txt">
					所在位置：{{name}}>{{venue.venue.name}}
				</view>
			</view>
			<view class="details-title">
				{{venue.venue.name}}
			</view>
			<view class="details-author">
				<text>开放时间：{{venue.venue.start_time}} - {{venue.venue.end_time}}</text>
			</view>
			<view class="details-center">
				<view class="center-top">
					<view class="center-top-show">
						详细信息
					</view>
					<view class="center-top-txt">
						{{venue.venue.content}}
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
				name:'',
				venue:[],
				area:'',
				pagesize:[]
			}
		},
		methods: {

		},
		onLoad(e) {
			this.name = e.name
			let id = e.id
			this.$request('/api/venue/view',{
				id:id
			},'post',{}).then(res=>{
				console.log(res)
				if (res.code == 1) {
					this.venue = res.data;
				}
			})
		},
		onShow() {
			
		}
	}
</script>

<style>
	.details-pinflun-all {
		/* border: 1rpx solid yellow; */
		background-color: #FFFFFF;
		padding: 20rpx 0rpx;
	}

	.solid {
		height: 50rpx;
		background-color: #F7F7F7;
	}

	.pinglun-item-right-title {
		font-size: 24rpx;
		margin-top: 20rpx;
	}

	.pinglun-item-right-time {
		font-size: 18rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: rgba(200, 200, 200, 1);
		margin-top: 10rpx;
	}

	.pinglun-item-right-details {
		margin-top: 20rpx;
		font-size: 20rpx;
		margin-bottom: 20rpx;
	}

	.huifu-txt {
		font-size: 20rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: rgba(200, 200, 200, 1);
		margin-top: 10rpx;
	}

	.all-pinglun {
		padding: 0rpx 30rpx;
	}

	.pinglun-item {
		/* height: 200rpx; */
		display: flex;
		border-top: 1rpx solid rgba(200, 200, 200, 0.75);
		/* border-bottom: 1rpx solid rgba(200,200,200,0.75); */
	}

	.pinglun-item-left image {
		width: 68rpx;
		height: 68rpx;
		margin-top: 30rpx;
		margin-right: 30rpx;
		background: #F2F2F2;
		border-radius: 50%;
	}

	.center-top-txt {
		padding: 50rpx;
		font-size: 22px;
		border-bottom: 1rpx solid rgba(200, 200, 200, 0.75);
	}

	.fill-head image {
		width: 68rpx;
		height: 68rpx;
		margin-top: 30rpx;
		margin-right: 30rpx;
	}

	.pinglun-fill {
		padding: 0rpx 30rpx;
		display: flex;
		width: 100%;
	}

	.fill-input {
		width: 100%;
		margin-top: 20rpx;
	}

	.fill-input input {
		border-radius: 20rpx;
		width: 100%;
		height: 200rpx;
		background-color: #F7F7F7;
		border: 1rpx solid rgba(200, 200, 200, 0.75);
	}

	.pinglun-show text {
		font-size: 20rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: rgba(200, 200, 200, 1);
	}

	.pinglun-show button {
		width: 100rpx;
		height: 40rpx;
		font-size: 16rpx;
		background: #CF282B;
		color: #FFFFFF;
	}

	.pinglun-show {
		margin-bottom: 50rpx;
	}

	.showsecond {
		display: flex;
		margin-left: 1000rpx;
		margin-top: 20rpx;
	}

	/* .showsecond{
		display: flex;
		width: 500rpx;
		margin-top: 10rpx;
		justify-content: space-between;
	} */
	.details-pinflun {
		padding: 0rpx 170rpx;
		background-color: #F7F7F7;
		width: 100%;
		/* border: 1rpx solid red; */
		padding-top: 20rpx;
		padding-bottom: 80rpx;
	}

	.total1 {
		color: red;
		margin-right: 20rpx;
	}

	.pinglun-total text {
		color: red;
		font-size: 20rpx;
	}

	.center-top-txt {
		padding: 50rpx;
		font-size: 40rpx;
	}

	.details-center {
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
		margin-top: 30rpx;
		/* padding: 0rpx 170rpx; */
	}

	.details-center {
		border: 1rpx solid rgba(200, 200, 200, 0.75);
	}

	.center-top-show {
		font-size: 20rpx;
		height: 60rpx;
		line-height: 60rpx;
		padding-left: 20rpx;
		width: 100%;
		border-bottom: 1rpx solid rgba(200, 200, 200, 0.75);
	}

	.details-top {
		padding-top: 40rpx;
	}

	.details-content {
		height: 100%;
		background-color: #F7F7F7;
		padding: 0rpx 170rpx;
	}

	.details-top-txt {
		font-size: 20rpx;
		line-height: 48rpx;
		height: 48rpx;
		width: 100%;
		border: 1rpx solid rgba(200, 200, 200, 0.75);
		background-color: #FFFFFF;
		padding-left: 20rpx;
	}

	.details-title {
		text-align: center;
		margin-top: 40rpx;
		font-size: 52rpx;
		font-weight: bold;
	}

	.details-author {
		text-align: center;
		margin-top: 40rpx;

	}

	.details-author text {
		margin-right: 10rpx;
		font-size: 20rpx;

	}

	.details-show {
		display: flex;
		justify-content: space-between;
	}

	.details-show image {
		width: 24rpx;
		height: 24rpx;
		/* border: 1rpx solid red; */
		display: flex;
		right: 0;
	}

	.zan-img image {
		margin-top: 20rpx;
		width: 24rpx;
		height: 24rpx;
		/* border: 1rpx solid red; */
		display: flex;
		right: 0;
	}

	.zan-img {
		display: flex;
		justify-content: space-between;
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

	.portraits {}

	.bottoms {
		padding: 0 30px;
	}

	.reloads {
		border-top: solid 1px #EEEEEE;
		border-bottom: solid 1rpx #e1e1e1;
	}

	.compilea {
		/* position: fixed;
		bottom: 0; */
		height: 80rpx;
		background: #FFFFFF;
		margin-top: 10rpx;
		/* padding: 15rpx 30rpx; */
		/* border-top: solid 1rpx #e1e1e1; */
	}

	.compile {
		/* width: 1120rpx; */
		height: 40rpx;
		background: #F2F2F2;
		/* border-radius: 23rpx; */
		line-height: 50rpx;
		display: flex;
		align-items: center;
	}

	.compile image {
		width: 24rpx;
		height: 24rpx;
		margin-left: 17rpx;
		margin-right: 17rpx;
	}

	.compile input {
		font-size: 28rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #999999;
	}

	.pinglun-huifu {
		padding-bottom: 10px;
	}
</style>
