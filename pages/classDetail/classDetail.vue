<template>
	<view class="activity-details">
		<view class="activity-details-top">
			<image :src="activity.cover" mode=""></image>
		</view>
		<view class="activity-details-content">
			<view class="activity-details-item">
				<view class="activity-details-item-zhounian">
					<view class="zhounian-txt1">{{activity.name}}</view>
				</view>
			</view>
		</view>
		<view class="activity-details-solid1">

		</view>
		<view class="activity-details-main">
			<view class="activity-details-main-title">
			课程介绍
			</view>
			<view class="wen" style="width: 100%;overflow: hidden;" v-html="context"></view>
			<!-- <view class="activity-details-main-txt">{{activity.content}}</view> -->
		</view>
		<view class="activity-details-solid1">

		</view>
		<view class="activity-details-main" v-if="activity.teacher_info == null || activity.teacher_info == ''">
		</view>
		<view class="activity-details-main" v-else>
			<view class="activity-details-main-title">
				老师介绍
			</view>
			<view class="wen" style="width: 100%;overflow: hidden;">{{activity.teacher_info}}</view>
			<!-- <view class="activity-details-main-txt">{{activity.content}}</view> -->
		</view>
		<view  v-if="activity.teacher_info == null || activity.teacher_info == ''">
		
		</view>
		<view class="activity-details-solid1" v-else>
		
		</view>
		<view class="activity-details-main">
			<view class="activity-details-main-title">
				课程目录
			</view>
			<!-- <view v-if="activity.video!= 'null'">
				<view class="group-content-item1" v-for="item in activity.video">
					<video id="myVideo" :src="item.url"></video>
					<view class="video-name">{{item.name}}</view>
				</view>
			</view>
			<view class="videos" v-else>{{zanwushipin}}</view> -->
			<view class="catalogue">
				<view class="cat-name" v-for="(item,index) in activity.culture" :key="index">
					<!-- <view @click="control">{{item.name}}</view> -->
					<view class="cati-item" @click="lookVideo(item)">
						<view class="course">
							<text>{{item.name}}</text>
							<view class="course-right">
								<image class="play" src="../../static/ic-play.png"></image>
							<!-- 	<text>00:23:06</text> -->
							</view>
							<!-- <image class="suspend" src="../../static/suspend.png"></image> -->
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="activity-details-solid1">
		
		</view>
		<view class="look-video">
			<view v-if="showControl">
				<view class="group-content-item1">
					<video id="myVideo" :src="videoUrl"></video>
					<view class="video-name"></view>
				</view>
			</view>
		</view>
		<!-- <view class="activity-details-main-button">
			<button type="default" @click="Programmebookingds()">
				<text class="activity-details-main-button-txt">立即学习</text>
			</button>
		</view> -->
		<view style="height: 80rpx;"></view>
		<view class="share-bottom">
			<view class="bottoms" @click="shares('bottom')">
				<image class="share" src="../../static/ic-share.png"></image>
			</view>
			<view class="bott-right">
				<view class="subscribe">
					<button @click="Programmebookingds">预约</button>
				</view>
				<!-- <view class="study">
					<button>开始学习</button>
				</view> -->
			</view>
			<!-- <button type="default" @click="Programmebookingds()">
				<text class="activity-details-main-button-txt">立即学习</text>
			</button> -->
		</view>
		
		<hqs-popup title="分享至" :from="popFrom" :mask-click="maskClicks" v-model="showPops" class="hqs"
			height="20vh">
		
			<view class="shares">
				<view class="weixin" @click="sharing('wx')">
					<view class="weixin_img">
						<image src="../../static/ic_weixin.png"></image>
					</view>
					<view>微信</view>
				</view>
				<view class="weixin" @click="sharing('py')">
					<view class="weixin_img">
						<image src="../../static/ic_weixinp.png"></image>
					</view>
					<view>朋友圈</view>
				</view>
			</view>
			<view class="lnne"></view>
			<view class="cancel" @click="cancel">取消</view>
		</hqs-popup>
	</view>
</template>

<script>
	//#ifdef H5
	import jweixin from 'jweixin-module';
	//#endif
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
				showControl:false,
				videoUrl:'',
				popFrom: 'bottom',
				showPop: false,
				maskClick: true,
				showPops: false,
				maskClicks: true,
				subscribe_id:''
			}
		},
		methods: {
			//观看视频
			lookVideo(item){
				console.log(item)
				this.subscribe_id = ''
				this.videoUrl = ''
				this.showControl = false
				this.$request('/api/culture/view', {
					id: item.id,
				}, 'post', {}).then(res => {
					if (res.code === 1) {
						console.log(res)
						let nideo = res.data.artgroup
						console.log(nideo)
						if(nideo.video){
							let video = nideo.video
							// console.log(video)
							this.videoUrl = video[0].url
							this.showControl = true
						}
					}else{
						if(res.msg == '请先预约'){
							this.subscribe_id = item.id
						}
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
				})
			},
			shares(type) {
				this.popFrom = type
				this.showPops = true
			},
			cancel() {
				this.showPops = false
			},
			sharing(type) {
				let that = this
				//#ifdef H5
				let ua = window.navigator.userAgent.toLowerCase()
				if (ua.match(/MicroMessenger/i) == 'micromessenger') {
					this.initJssdkShare(function(res) {
						jweixin.ready(function() {
							jweixin.checkJsApi({
								jsApiList: [
									'updateAppMessageShareData',
									'updateTimelineShareData'
								],
								success: function(res) {
									if (res.checkResult.getLocation == false) {
										uni.showToast({
											title: this.nideweixinbanbentaidi + '，' +
												qingshengjidaozuixindeweixinbanben +
												'！',
											duration: 2000,
											icon: 'none'
										})
										return;
									}
								}
							});
							that.showPops = false
							if (type == "wx") {
								that.show = true
								jweixin.updateAppMessageShareData({
									title: that.activity.name,
									link: res.full_url,
									success: function() {
			
			
									}
			
								})
							} else if (type == "py") {
								that.show = true
								jweixin.updateTimelineShareData({
									title: that.activity.name,
									link: res.full_url,
									success: function() {
			
									}
			
								})
							}
						});
					})
				}
				//#endif
				//#ifdef MP-WEIXIN
				//分享
				//#endif
			},
			initJssdkShare: function(callback) {
				let url = 'pages/classDetail/classDetail?id=' + this.id
				this.$request('/api/common/getJssdkTicket', {
					'url': url
				}, 'post', {}, true).then(res => {
					if (res.data) {
						jweixin.config({
							debug: false,
							appId: res.data.appId,
							timestamp: res.data.timestamp,
							nonceStr: res.data.nonceStr,
							signature: res.data.signature,
							jsApiList: [
								'checkJsApi',
								'updateAppMessageShareData',
								'updateTimelineShareData',
								'onMenuShareAppMessage',
								'onMenuShareTimeline'
			
							]
						});
			
						if (callback) {
							callback(res.data);
						}
					}
				});
			},
			control(){
				this.showControl = !this.showControl
			},
			Programmebookingds() {
				if (this.subscribe_id != '') {
					uni.navigateTo({
						url: '../class-enroll/class-enroll?id=' + this.subscribe_id
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
							title: '请先选择需要预约的视频',
							icon: 'none'
						})
					}
				}
			},
			onShowPopup(e) {
				this.showPop = e.detail.value
			},
			onMaskClick(e) {
				this.maskClick = e.detail.value
			},
			
			onShowPopup(e) {
				this.showPops = e.detail.value
			},
			onMaskClick(e) {
				this.maskClicks = e.detail.value
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
			
		},
		onLoad(e) {
			this.area = e.area
			let id = e.id;
			this.c_id = e.id
			this.$request('/api/culture/culture_category_view', {
				id: id,
			}, 'post', {}).then(res => {

				if (res.code === 1) {
					this.activity = res.data.artgroup;
					this.context = this.activity.content;
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

		padding: 31rpx 0;
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
		font-size: 26rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #999999;
		text-align: center;
	}
	
	.wen {
		color: #3a3a3a;
		font-size: 28rpx;
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
	#myVideo {
		width: 690rpx;
		height: 402rpx;
	}
	.video-name {
		text-align: center;
		margin: 10rpx 0;
	}
	.share-bottom {
		width: 100%;
		height: 90rpx;
		position: fixed;
		bottom: 0;
		border-top: solid 1rpx #eeeeee;
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 40rpx;
		z-index: 3;
	}
	.bott-right {
		display: flex;
	}
	.study button{
		margin-left: 30rpx;
		width: 220rpx;
		height: 70rpx;
		background-color: #EC6540;
		font-size: 26rpx;
		line-height: 70rpx;
		text-align: center;
		color: #FFFFFF;
	}
	.subscribe button{
		margin-left: 30rpx;
		width: 220rpx;
		height: 70rpx;
		background-color: #EC6540;
		font-size: 26rpx;
		line-height: 70rpx;
		text-align: center;
		color: #FFFFFF;
	}
	.share {
		width: 50rpx;
		height: 50rpx;
	}
	.catalogue {
		
	}
	.cat-name {
		font-size: 30rpx;
	}
	.cati-item {
		margin-top: 20rpx;
		margin-left: 40rpx;
		font-size: 28rpx;
		color: #737373;
	}
	.course {
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* border-top: solid 1rpx #eeeeee; */
		padding: 16rpx 0;
	}
	.course-right {
		display: flex;
		align-items: center;
		font-size: 24rpx;
	}
	.play {
		width: 40rpx;
		height: 40rpx;
		margin-right: 10rpx;
	}
	.look-video {
		padding-top: 30rpx;
		margin-left: 30rpx;
	}
	
	.shares {
		display: flex;
		justify-content: space-around;
		padding: 50rpx 30rpx 40rpx 30rpx;
	}
	
	.weixin {
		text-align: center;
		font-size: 28rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;
	}
	
	.weixin_img {
		width: 75rpx;
		height: 75rpx;
		margin-bottom: 20rpx;
	}
	
	.weixin_img image {
		width: 100%;
		height: 100%;
	}
	
	.lnne {
		width: 750rpx;
		height: 20rpx;
		background: #F7F7F7;
	}
	
	.cancel {
		font-size: 36rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;
		text-align: center;
		line-height: 80rpx;
	}
</style>
