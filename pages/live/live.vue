<template>
	<view class="consult">
		<view class="fixed">
			<view class="top" v-if="h5_live_replay==1 && live_data.is_hand == 1">
				<video id="myVideo" autoplay :src="flvUrl" style="width: 100%; " controls></video>
			</view>
			<view class="top" v-if="h5_live_replay==1 && live_data.is_hand == 0">
				<view class="video-js" ref="video" style="width: 100%;height: 100%;"></view>
			</view>
			<view class="top" v-if="wx_live==1">
				<live-player :src="flvUrl" autoplay="true" mode="live" style="width: 100%; " />
			</view>
			<view class="top" v-if="app_live_replay_wx_replay==1">
				<video id="myVideo" autoplay :src="flvUrl" style="width: 100%; " controls></video>
			</view>
			<view class="consult-content">
				<view v-if="live_data.is_talk" :class="sh==0?'content-item':'content-item2'" @click="show(0)">
					{{hudong}}
				</view>
				<view :class="sh==1?'content-item':'content-item2'" @click="show(1)">
					{{jieshao}}
				</view>
				<view :class="sh==2?'content-item':'content-item2'" @click="show(2)">
					{{bangdan}}
				</view>
				<view class="content-item" @click="open">
					<button type="primary">{{fenxiang}}</button>
				</view>
			</view>
		</view>

		<scroll-view  scroll-y="true" class="consult-main" v-show="sh==0">
			<view class="main-content1" v-for="(item,index) in getchat">
				<view class="main-content-time">
					{{item.create_time}}
				</view>
				<view class="main-content">
					<view class="main-content-head">
						<image :src="item.member_avatar"></image>
					</view>
					<view class="main-display">
						<view class="main-content-name">
							{{item.member_name}}
						</view>
						<view class="main-content-txt">
							{{item.content}}
						</view>
					</view>
				</view>
			</view>
			<view style="height: 140rpx;"></view>
		</scroll-view>

	<view class="main-Popup" v-if="live_data.is_talk">
		<input type="text" :placeholder="shuodianshime+'~'" :name="contents" v-model="content" @confirm="setclick" />
		<text @click="setclick">{{fasong}}</text>
	</view>

	<view class="consult-main1" v-show="sh==1">
		<view class="main-show">
			<view class="mian-show-title">
				{{live_data.title}}
			</view>
			<view class="mian-show-txt">
				<view class="show-txt-left">
					<view class="show-state">

						<text>{{live_status}}</text>
					</view>
					<view class="show-time">
						{{live_data.end_time}}
					</view>
				</view>
				<view class="show-txt-right">
					<image src="../../static/ic_eys.png" mode=""></image>
					<text>{{live_data.is_record}}</text>
				</view>
			</view>
		</view>
		<view class="main-show-blod">
			<view v-html="context"></view>
			<!-- <view class="main-show-blod-title">
				{{live_data.title}}
			</view>
			<view class="mian-show-blod-img">
				<image :src="live_data.cover"></image>
			</view>
			<view class="mian-show-blod-erweima">
				<image :src="live_data.cover"></image>
			</view> -->
		</view>
	</view>
	<view class="consult-main2" v-show="sh==2">
		<view class="main2-all" v-for="(item,index) in get_rank">
			<view class="display-left">
				<view class="main2-ranking">
					{{index+1}}
				</view>
				<view class="main2-head">
					<image :src="item.member_avatar"></image>
				</view>
				<view class="main2-name">
					{{item.member_name}}
				</view>
			</view>
			<view class="main2-total">
				<text class="main2-total1">{{yaoqingshu}}：</text>
				<text class="main2-total2">{{item.num}}</text>
			</view>
		</view>
	</view>
	<uni-popup ref="popup" type="center">
		<view class="content-pop">
			<image :src="erweima" mode=""></image>
		</view>

	</uni-popup>
	</view>
</template>
<script>
	//#ifdef H5
	import VideoJs from 'video.js'
	import 'video.js/dist/admin.css'
	//#endif
	export default {
		data() {
			return {
				ninxuanzeliaodi: '',
				shuodianshime: '',
				pinglunchenggong: '',
				pinglunchenggong: '',
				yaoqingshu: '',
				zhibozhong: '',
				hudong: '',
				jieshao: '',
				bangdan: '',
				fenxiang: '',
				fasong: '',
				huifang: '',
				xiang: '',
				sh: 0,
				live_data: [],
				live_status: '',

				live_id: '',
				contents: '',
				token: '',
				flvUrl: '',
				getchat: [],
				title: '',
				content: '',
				erweima: '',
				get_rank: [],
				h5_live_replay: 0,
				wx_live: 0,
				app_live_replay_wx_replay: 0,
				chat_id:'',
				context:''
			}
		},
		onLoad(e) {
			let that = this
			that.live_id = e.id

			this.ninxuanzeliaodi = this.$lang.ninxuanzeliaodi[uni.getStorageSync('lang')];
			this.shuodianshime = this.$lang.shuodianshime[uni.getStorageSync('lang')];
			this.pinglunchenggong = this.$lang.pinglunchenggong[uni.getStorageSync('lang')];
			this.pinglunchenggong = this.$lang.pinglunchenggong[uni.getStorageSync('lang')];
			this.yaoqingshu = this.$lang.yaoqingshu[uni.getStorageSync('lang')];
			this.zhibozhong = this.$lang.zhibozhong[uni.getStorageSync('lang')];
			this.hudong = this.$lang.hudong[uni.getStorageSync('lang')];
			this.jieshao = this.$lang.jieshao[uni.getStorageSync('lang')];
			this.bangdan = this.$lang.bangdan[uni.getStorageSync('lang')];
			this.fenxiang = this.$lang.fenxiang[uni.getStorageSync('lang')];
			this.fasong = this.$lang.fasong[uni.getStorageSync('lang')];
			this.huifang = this.$lang.huifang[uni.getStorageSync('lang')];
			this.xiang = this.$lang.xiang[uni.getStorageSync('lang')];

			this.$request('/api/live/view', {
				id: that.live_id,
			}, 'post', {}).then(res => {
				if (res.code == 1) {

					that.live_data = res.data.live;
					this.context = this.formatRichText(that.live_data.content);
					if (!that.live_data.is_talk) {
						this.sh = 1;
					}
					//判断播放平台 及是否是回放
					if (that.live_data.status == 1) {

						//#ifdef H5
						that.flvUrl = that.live_data.hls_play
						that.h5_live_replay = 1
						//#endif
						//#ifdef MP-WEIXIN
						that.flvUrl = that.live_data.rtmp_play
						that.wx_live = 1
						//#endif
						//#ifdef APP-PLUS
						that.flvUrl = that.live_data.hls_play
						that.app_live_replay_wx_replay = 1
						//#endif

						that.live_status = that.zhibozhong

					} else if (that.live_data.status == 0 && that.live_data.replay) {
						//#ifdef H5 
						that.h5_live_replay = 1
						//#endif
						//#ifndef H5 
						that.app_live_replay_wx_replay = 1
						//#endif
						that.flvUrl = that.live_data.replay
						that.live_status = that.huifang
					}
					// #ifdef H5
					that.$nextTick(() => {
						let video = document.createElement('video');
						video.id = 'video';
						video.style = 'width: 100%; height: 100%;';
						video.controls = true;
						video.preload = "auto"
						video.autoplay = true
						video.setAttribute('playsinline', true) //IOS微信浏览器支持小窗内播放
						video.setAttribute('webkit-playsinline',
							true) //这个bai属性是ios 10中设置可以让视频在小du窗内播放，也就是不是全zhi屏播放的video标签的一个属性
						video.setAttribute('x5-video-player-type', 'is_h5') //安卓 声明启用同层H5播放器 可以在video上面加东西

						video.setAttribute('class', 'video-js vjs-default-skin vjs-big-play-centered')
						let source = document.createElement('source');
						source.src = that.flvUrl;
						source.type = 'application/x-mpegURL';
						video.appendChild(source);
						that.$refs.video.$el.appendChild(video);
						let player = VideoJs('video', {
							poster: that.live_data.cover, // 视频封面图地址
							title: that.live_data.title,
							playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
							autoDisable: true,
							preload: 'auto', //auto - 当页面加载后载入整个视频 meta - 当页面加载后只载入元数据 none - 当页面加载后不载入视频
							language: 'zh-CN',
							fluid: true, // 自适应宽高
							muted: false, //  是否静音
							aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
							controls: true, //是否拥有控制条 【默认true】,如果设为false ,那么只能通过api进行控制了。也就是说界面上不会出现任何控制按钮
							autoplay: false, //如果true,浏览器准备好时开始回放。 autoplay: "muted", // //自动播放属性,muted:静音播放
							loop: true, // 导致视频一结束就重新开始。 视频播放结束后，是否循环播放
							screenshot: true,
							controlBar: {
								volumePanel: { //声音样式
									inline: false // 不使用水平方式
								},
								timeDivider: true, // 时间分割线
								durationDisplay: true, // 总时间
								progressControl: true, // 进度条
								remainingTimeDisplay: true, //当前以播放时间
								fullscreenToggle: true, //全屏按钮
								pictureInPictureToggle: true, //画中画
							}
						}, function() {
							this.on('error', function(err) { //请求数据时遇到错误
								console.log(err)
							});
							this.on('stalled', function(stalled) { //网速失速
								console.log(stalled)
							});
							// this.on('play', function() { //开始播放
							// 	
							// });
							// this.on('pause', function() { //暂停
							// 	
							// });
							// this.on('timeupdate', function(timeupdate) {
							// 	// 
							// })
						});
					})
					// #endif 
				}
			});
			this.getChat()

			this.$request('/api/live/get_rank', {
				live_id: this.live_id
			}, 'post', {}).then(res => {
				if (res.code == 1) {
					this.get_rank = res.data.lists
				}
			})
		},
		onReady() {


		},
		methods: {
			show(sh) {
				this.sh = sh
			},

			open() {
				this.token = uni.getStorageInfoSync('wtoken')
				this.$request('/api/live/get_qr', {
					live_id: this.live_id,
					token: this.token
				}, 'post', {}, true).then(res => {
					if (res.code == 1) {
						this.erweima = res.data
						this.$refs.popup.open('center')
					}
				})
			},
			select(e) {
				uni.showToast({
					title: `{{ninxuanzeliaodi}}${e.index+1}{{xiang}}：${e.item.text}`,
					icon: 'none'
				})
			},
			setclick() {

				this.$request('/api/live/send_chat', {
					content: this.content,
					live_id: this.live_id,
				}, 'post', {},true).then(res => {
					if(res.code==1){
						uni.showToast({
							title: this.pinglunchenggong,
							icon: 'none'
						})
						this.content = ''
						this.getchat = res.data.lists
					}else{
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
				})
			},

			getChat() {
				let that = this
				this.$request('/api/live/get_chat', {
					live_id: this.live_id
				}, 'post', {}).then(res => {
					if (res.code == 1) {
						that.getchat = res.data.lists
					}
				})
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

		}
	}
</script>

<style>
	/* .fixed{
		position: fixed;
		width: 100%;
		top:100rpx;
	} */
	.main2-ranking {
		font-size: 48rpx;

		margin-right: 30rpx;
	}

	.content-pop {
		width: 600rpx;
		height: 600rpx;
		background-color: #FFFFFF;
		border-radius: 50rpx;

		text-align: center;
	}

	.content-pop image {
		width: 400rpx;
		height: 400rpx;
		margin-top: 100rpx;
		background-color: #FFFFFF;
		border-radius: 50rpx;

	}

	.consult-main2 {
		padding: 30rpx 30rpx;
	}

	.main-content-time {
		color: rgba(153, 153, 153, 100);
		font-size: 24rpx;

		text-align: center;
		margin-bottom: 20rpx;
	}

	.main2-all {
		display: flex;
		justify-content: space-between;
		height: 160rpx;
		line-height: 160rpx;
		width: 100%;
		border-top: 1rpx solid rgba(200, 200, 200, 0.75);


	}

	.display-left {
		display: flex;
		justify-content: flex-start;
	}

	.main2-ranking image {
		margin-top: 30rpx;
		width: 80rpx;
		height: 80rpx;
		margin-right: 20rpx;
	}

	.main2-head image {
		margin-top: 30rpx;
		width: 100rpx;
		height: 100rpx;
		border-radius: 50rpx;
		margin-right: 30rpx;
	}

	.main2-name {
		color: rgba(153, 153, 153, 100);
		font-size: 32rpx;
	}

	.main2-total1 {
		font-size: 26rpx;
		color: rgba(153, 153, 153, 100);
	}

	.main2-total2 {
		font-size: 26rpx;
		color: #1E90FF;
	}

	.main-show-blod {
		margin-top: 20rpx;
		text-align: center;
		padding: 30rpx 0rpx;
		/* border-top: 1rpx solid rgba(200, 200, 200, 0.75); */
		padding-bottom: 120rpx;
	}

	.mian-show-blod-img image {
		width: 100%;
		height: 300rpx;
		margin-bottom: 20rpx;
	}

	.mian-show-blod-erweima image {
		width: 300rpx;
		height: 300rpx;
	}

	.main-show-blod-title {
		font-size: 48rpx;

		margin-bottom: 30rpx;
	}

	.consult-main1 {
		height: 100%;
		width: 100%;

		padding: 30rpx 30rpx;
	}

	.show-txt-right image {
		height: 28rpx;
		width: 30rpx;
		margin-right: 10rpx;
	}

	.show-txt-right {
		color: rgba(153, 153, 153, 100);
	}

	.main-show {
		width: 100%;
		padding: 10rpx 0 30rpx 0;
		border-bottom: 1rpx solid rgba(200, 200, 200, 0.75);
	}

	.show-txt-left {
		display: flex;
		justify-content: flex-start;
	}

	.mian-show-txt {
		display: flex;
		justify-content: space-between;
	}

	.mian-show-title {
		font-size: 48rpx;
		font-weight: bold;
		margin-bottom: 30rpx;
	}

	.show-state text {
		color: orange;
		margin-right: 20rpx;
	}

	.show-time {
		color: rgba(153, 153, 153, 100);
	}

	.consult-content {
		/* position: fixed;
	top: 800rpx; */
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 120rpx;
		line-height: 120rpx;
		padding-left: 50rpx;
		border-bottom: 1rpx solid rgba(200, 200, 200, 0.75);
	}

	.content-item {

		color: #1E90FF;
	}

	.content-item1 {

		color: #000000;
	}

	.content-item button {
		width: 180rpx;
		height: 120rpx;
		line-height: 120rpx;
		right: 0;
		background-color: #1E90FF;
		color: #FFFFFF;
	}

	.main-content {
		display: flex;

	}

	.main-content1 {
		padding: 30rpx 30rpx;
	}

	.main-content-head image {
		width: 72rpx;
		height: 72rpx;
		border-radius: 72rpx;
		background-color: #cccccc;
		margin-right: 20rpx;
	}

	.consult-main {
		width: 100%;
		height: 100%;

		background-color: #F7F7F7;
		/* padding-bottom: 200rpx; */

		max-height: 500px;
	}

	.main-content-name {
		color: rgba(153, 153, 153, 100);
		font-size: 28rpx;
		margin-bottom: 10rpx;
	}

	.main-content-txt {
		font-size: 32rpx;
		border: 1rpx solid #FFFFFF;
		background-color: #FFFFFF;
		padding: 20rpx 20rpx;
		border-radius: 0rpx 30rpx 30rpx 30rpx;
	}

	.main-Popup {
		padding: 0rpx 30rpx;
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 140rpx;
		line-height: 140rpx;
		background-color: #FFFFFF;
		display: flex;
	}

	.main-Popup input {
		margin-top: 20rpx;
		height: 100rpx;
		width: 80%;
		margin-right: 40rpx;
		border-radius: 50rpx;
		border: 1rpx solid rgba(153, 153, 153, 100);
		/* background-image: url(../../static/ic_bji.png);
		background-repeat: no-repeat;
		background-size: 60rpx; */
		text-indent: 30rpx;
		color: #000000;
	}

	.main-Popup {
		color: #007AFF;
	}
</style>
