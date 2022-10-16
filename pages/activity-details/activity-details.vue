<template>
	<view class="activity-details">
		<view class="activity-details-top">
			<image :src="activity.cover" mode=""></image>
		</view>
		<view class="activity-details-content">
			<view class="activity-details-item">
				<view class="activity-details-item-zhounian">
					<view class="zhounian-txt1">{{activity.title}}</view>
					<br />
					<view class="zhounian-txt2">{{activity.start_time}} - {{activity.end_time}}</view>
				</view>
			</view>
			<view v-if="area == 16738 || area == '16738'">

			</view>
			<view class="activity-details-solid" v-else>

			</view>

			<view v-if="area == 16738 || area == '16738'">

			</view>
			<view class="activity-details-paihang" @click="leaderboard" v-else>
				<view class="activity-details-paihang-left">
					<image src="../../static/ic_paihang.png" mode=""></image>
					<text class="activity-details-paihang-txt">{{paixingbang}}</text>
				</view>
				<view class="activity-details-paihang-right">
					<image src="../../static/ic_right.png" mode=""></image>
				</view>
			</view>
			<view v-if="area == 16738 || area == '16738'">

			</view>
			<view class="activity-details-solid" v-else>

			</view>
			<view v-if="area == 16738 || area == '16738'">

			</view>
			<view class="activity-details-address" v-else>
				<view class="activity-details-address-left">
					<image src="../../static/map.png" mode=""></image>
					<text class="activity-details-address-txt">{{activity.address}}</text>
				</view>
				<view class="activity-details-address-right">
					<text class="activity-details-address-right-solid">|</text>
					<image src="../../static/phone.png" mode=""></image>
				</view>
			</view>
			<view v-if="area == 16738 || area == '16738'">

			</view>
			<view class="activity-details-solid" v-else>

			</view>
			<view v-if="area == 16738 || area == '16738'">

			</view>
			<view class="activity-details-erweima" v-else>
				<view class="activity-details-erweima-left">
					<image src="../../static/erweima.png" mode=""></image>
					<text class="activity-details-erweima-txt">{{pingshoujiyudingmaruchang}}</text>
				</view>
			</view>
		</view>
		<view class="activity-details-solid1">

		</view>
		<view class="activity-details-main">
			<view v-if="area == 16738 || area == '16738'">
			
			</view>
			<view class="activity-details-main-title" v-else>
				{{huodongxiangqing}}
			</view>
			<view class="wen" style="width: 100%;overflow: hidden;" v-html="context"></view>
			<!-- <view class="activity-details-main-txt">{{activity.content}}</view> -->
		</view>
		<view class="activity-details-solid1">

		</view>
		<view v-if="id == 9 || id == 11"></view>
		<view class="activity-details-number-all" v-else>
			<view class="activity-details-number">
				<view class="activity-details-number-title">
					{{changci}}
				</view>
				<view class="activity-details-number-item" v-for="items in lists" @click="session(items)">
					<text class="number-item-txt1">{{items.title}}</text>
					<view :class="c_id == items.id?'number-item-txt2':'number-item-txts2'">
						<text>{{items.start_time}}</text>
						<br />
						<text>|</text>
						<br />
						<text>{{items.end_time}}</text>
					</view>
					<!-- <text class="number-item-txt3">{{yupiao}}{{items.num}}</text> -->
					<text class="number-item-txt3">名额{{items.num}}</text>
					<text class="number-item-txt4">{{items.content}}</text>
				</view>
			</view>
		</view>
		<view v-if="id == 9 || id == 11"></view>
		<view class="activity-details-main-button" v-else>
			<button type="default" @click="Programmebookingds()">
				<!-- 			<text class="activity-details-main-button-txt">{{lijiqiangpiao}}</text> -->
				<text class="activity-details-main-button-txt">立即报名</text>
			</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pingshoujiyudingmaruchang: '',
				qingxuanzechangdi: '',
				huodongxiangqing: '',
				lijiqiangpiao: '',
				paixingbang: '',
				changci: '',
				yupiao: '',
				activity: [],
				lists: [],
				sessions: false,
				c_id: '',
				context: '',
				area: '',
				id:''
			}
		},
		methods: {
			Programmebookingds() {
				if (this.c_id != '') {
					uni.navigateTo({
						url: '../programme-booking-details/programme-booking-details?id=' + this.c_id
					})
				} else {
					let token = uni.getStorageSync('wtoken');
					if (!token.length) {
						uni.showModal({
							title: '请先登录',
							content: '',
							showCancel: true,
							success: function(res) {
								if (res.confirm) {
									//#ifndef  MP-WEIXIN
									//获取失败 跳转登录页
									uni.navigateTo({
										url: '../login/login'
									})
									//#endif
									//#ifdef MP-WEIXIN
									uni.navigateTo({
										url: '../wx_login/wx_login'
									})
									//#endif
								}
							}
						});
					}else{
						uni.showToast({
							title: '请选择场次',
							icon: 'none'
						})
					}
					// uni.showToast({
					// 	title: this.qingxuanzechangdi,
					// 	icon: 'none'
					// })
					// uni.showToast({
					// 	title: '请选择场次',
					// 	icon: 'none'
					// })

				}
			},
			leaderboard() {
				uni.navigateTo({
					url: '../leaderboard/leaderboard'
				})
			},
			// 获取当前时间
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				let hours = date.getHours();
				let min = date.getMinutes();
				// if (type === 'start') {
				// 	year = year - 60;
				// } else if (type === 'end') {
				// 	year = year + 2;
				// }
				hours = hours > 9 ? hours : '0' + hours;
				min = min > 9 ? min : '0' + min;
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day} ${hours}:${min}`;
			},
			isDuringDate(stade1, endad2) {
				let curdate = new Date();
				let curda1 = new Date(stade1.replace(/-/g, "/"));
				let curda2 = new Date(endad2.replace(/-/g, "/"));
				if (curdate >= curda1 && curdate <= curda2) {
					return true
				}
				return false
			},
			session(item) {
				let hh = this.isDuringDate(item.start_time, item.end_time)
				if (hh) {
					this.c_id = item.id
				} else {
					uni.showToast({
						title: '不是活动时间范围内',
						icon: 'none'
					})
				}
				console.log(hh)
				console.log(item)
				this.sessions = !this.sessions
			},
			formatRichText(html) {
				let newContent = html.replace(/<img[^>]*>/gi, function(match, capture) {
					match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '');
					match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '');
					match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '');
					return match;
				});
				newContent = html.replace(/<video[^>]*>/gi, function(match, capture) {
					match = match.replace(/width="[^"]+"/gi, 'style="width:100%"').replace(/width='[^']+'/gi, '');
					match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '');
					return match;
				});
				newContent = newContent.replace(/style="[^"]+"/gi, function(match, capture) {
					match = match.replace(/width:[^;]+;/gi, 'max-width:100%;').replace(/width:[^;]+;/gi,
						'max-width:100%;');
					return match;
				});
				newContent = newContent.replace(/<br[^>]*\/>/gi, '');
				newContent = newContent.replace(/\<img/gi,
					'<img style="max-width:100%;height:auto;display:inline-block;margin:10rpx auto;"');
				return newContent;
			}
		},
		onShow() {
			this.pingshoujiyudingmaruchang = this.$lang.pingshoujiyudingmaruchang[uni.getStorageSync('lang')];
			this.qingxuanzechangdi = this.$lang.qingxuanzechangdi[uni.getStorageSync('lang')];
			this.huodongxiangqing = this.$lang.huodongxiangqing[uni.getStorageSync('lang')];
			this.lijiqiangpiao = this.$lang.lijiqiangpiao[uni.getStorageSync('lang')];
			this.paixingbang = this.$lang.paixingbang[uni.getStorageSync('lang')];
			this.changci = this.$lang.changci[uni.getStorageSync('lang')];
			this.yupiao = this.$lang.yupiao[uni.getStorageSync('lang')];
		},
		onLoad(e) {
			this.area = e.area
			this.pingshoujiyudingmaruchang = this.$lang.pingshoujiyudingmaruchang[uni.getStorageSync('lang')];
			this.qingxuanzechangdi = this.$lang.qingxuanzechangdi[uni.getStorageSync('lang')];
			this.huodongxiangqing = this.$lang.huodongxiangqing[uni.getStorageSync('lang')];
			this.lijiqiangpiao = this.$lang.lijiqiangpiao[uni.getStorageSync('lang')];
			this.paixingbang = this.$lang.paixingbang[uni.getStorageSync('lang')];
			this.changci = this.$lang.changci[uni.getStorageSync('lang')];
			this.yupiao = this.$lang.yupiao[uni.getStorageSync('lang')];
			let id = e.id;
			this.id = e.id;
			this.$request('/api/activity/view', {
				id: id,
			}, 'post', {}).then(res => {

				if (res.code === 1) {
					this.activity = res.data.activity;
					this.context = this.activity.content;
					uni.setNavigationBarTitle({
						title: this.activity.title
					})
					this.lists = res.data.lists;
				}
			})
		}
	}
</script>

<style>
	.activity-details-solid {
		width: 98%;
		height: 1px;
		background: #333333;
		opacity: 0.15;
	}


	.activity-details-content {
		padding: 0rpx 30rpx;
	}

	.activity-details-top image {
		width: 100%;
		height: 430rpx;
	}


	.activity-details-paihang,
	.activity-details-erweima {

		padding: 30rpx 0rpx;
	}

	.activity-details-address {
		padding: 40rpx 0rpx;
	}

	.activity-details-number-all {
		padding: 0rpx 30rpx;
	}

	.activity-details-paihang-left image {
		width: 31rpx;
		height: 31rpx;
		margin-right: 14rpx;
	}

	.activity-details-paihang-right image {
		width: 14rpx;
		height: 24rpx;
	}

	.activity-details-address-left image {
		width: 30rpx;
		height: 30rpx;
		margin-right: 15rpx;
	}

	.activity-details-address-right image {
		width: 30rpx;
		height: 28rpx;
	}

	.activity-details-erweima-left image {
		width: 30rpx;
		height: 30rpx;
		margin-right: 15rpx;
	}


	.activity-details-paihang,
	.activity-details-address {
		display: flex;
		justify-content: space-between;
	}

	.zhounian-txt1 {


		font-size: 32rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;

		padding-top: 31rpx;
	}

	.zhounian-txt2 {


		font-size: 24rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #999999;
		margin-bottom: 22rpx;

	}

	.activity-details-address-right-solid {
		width: 1rpx;
		height: 50rpx;
		background: #333333;
		opacity: 0.15;
		margin-right: 21rpx;
	}

	.activity-details-paihang-txt,
	.activity-details-address-txt,
	.activity-details-erweima-txt {


		font-size: 28rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;

	}

	.activity-details-solid1 {
		width: 100%;
		height: 20rpx;
		background: #F7F7F7;
	}


	.activity-details-number {}

	.activity-details-number-title {


		font-size: 32rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;
		margin-top: 31rpx;

	}

	.activity-details-number-item {
		display: flex;
	}

	.number-item-txt1 {

		height: 27rpx;
		font-size: 28rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;

		margin-right: 15rpx;
	}

	.number-item-txt2 {


		background: #EC6540;
		border-radius: 20rpx;
		margin-right: 17rpx;
		padding: 5rpx 5rpx;
	}

	.number-item-txt2 text {


		font-size: 22rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #FFFFFF;
		line-height: 36rpx;
		padding: 5rpx 5rpx
	}

	.number-item-txts2 {


		background: #BFBFBF;
		border-radius: 20rpx;
		margin-right: 17rpx;
		padding: 5rpx 5rpx;
	}

	.number-item-txts2 text {


		font-size: 22rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #FFFFFF;
		line-height: 36rpx;
		padding: 5rpx 5rpx
	}

	.number-item-txt3 {

		height: 27rpx;
		font-size: 28rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;
		line-height: 36rpx;
		margin-right: 16rpx;
	}

	.number-item-txt4 {

		width: 222rpx;
		height: 120rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
		font-size: 24rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;
		line-height: 36rpx;
	}

	.activity-details-number-item {
		padding: 30rpx 0rpx;

		text-align: center;
	}

	.number-item-txt1,
	.number-item-txt3 {
		position: relative;
		top: 50rpx;
	}

	.number-item-txt4 {
		position: relative;
		top: 30rpx;
	}

	.activity-details-main {
		padding: 0rpx 30rpx 20rpx 30rpx;
	}

	.activity-details-main-title {
		margin-top: 30rpx;
		margin-bottom: 29rpx;

		height: 30rpx;
		font-size: 32rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;

	}

	.activity-details-main-txt {

		text-indent: 40rpx;

		font-size: 28rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;
		line-height: 43rpx;

	}

	.activity-details-main-button {
		text-align: center;

		padding: 26rpx 80rpx 49rpx 80rpx;
	}

	.activity-details-main-button button {
		width: 590rpx;

		background: #FF4E5A;
		border-radius: 40rpx;

	}

	.activity-details-main-button-txt {

		width: 142rpx;
		height: 33rpx;
		font-size: 36rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #FFFFFF;
		line-height: 33rpx;
	}
</style>
