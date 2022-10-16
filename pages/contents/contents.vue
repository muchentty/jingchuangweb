<template>
	<view class="content">
		<view class="details">
			<view class="titles">{{contents.article.title}}</view>
			<view class="ints">{{contents.article.source}}</view>
			<view class="ints">{{contents.article.create_time}}</view>
			<view class="wen" style="width: 100%;overflow: hidden;" v-html="context" v-if="is_h5==1"></view>
			<u-parse :content="context" v-if="is_h5==0"></u-parse>
			<view class="yue">{{yuedu}}{{contents.article.views}}</view>
			<view class="zan">
				<view class="heart">
					<view class="heart_img" @click="give">
						<image v-if="contents.digged == 0" src="../../static/ic_zan.png"></image>
						<image v-if="contents.digged == 1" src="../../static/ic_zana.png"></image>
					</view>
					<view>{{contents.article.digg}}</view>
				</view>
				<view class="heart" @click="shares('bottom')">
					<view class="heart_img">
						<image src="../../static/share.png"></image>
					</view>
					<view>{{fenxiang}}</view>
				</view>
			</view>
		</view>
		<view class="recommend">
			<view class="top">
				<text></text>
				{{xiangguantuijian}}
			</view>
			<view class="newList" v-for="its in list.lists">
				<view>{{its.title}}</view>
				<view class="news">
					<image :src="its.cover"></image>
				</view>
			</view>
		</view>
		<view class="nes"></view>
		<view class="recommend">
			<view class="top">
				<text></text>
				{{remenpinglun}}
			</view>
			<view class="plunn">
				<view class="plun" v-for="(it,index) in comment.lists">
					<view class="portrait">
						<image :src="it.avatar"></image>
					</view>
					<view class="names">
						<view class="name">{{it.nickname}}</view>
						<view class="cont">{{it.content}}</view>
						<view class="time">
							<text>{{it.create_time}}</text>
							<view class="hui" @click="reply('bottom',it)" :index='0'>{{huifu}}</view>
						</view>
					</view>
					<view class="heas">
						<view style="margin-right: 5px;">{{it.digg}}</view>
						<view class="heart_img" @click="zan(it)">

							<image v-if="it.is_digg ==0" src="../../static/ic_zan.png"></image>
							<image v-if="it.is_digg ==1" src="../../static/ic_zana.png"></image>
						</view>
					</view>
				</view>
			</view>

		</view>
		<view class="seach">
			<view class="inputs">
				<input type="text" :name="constxt" @confirm="messagesearch" :placeholder="xiepinglun" v-model="constxt"
					:focus="ifFocus" />
			</view>
			<view class="icons">
				<view class="heart_img" @click="conts">
					<image src="../../static/comment.png"></image>
				</view>
				<view class="heart_img" @click="give">
					<image v-if="contents.digged == 0" src="../../static/ic_zan.png"></image>
					<image v-if="contents.digged == 1" src="../../static/ic_zana.png"></image>
				</view>
				<view class="heart_img" @click="shares('bottom')">
					<image src="../../static/share.png"></image>
				</view>
			</view>
		</view>
		<hqs-popup :title="huifuxiangqing" :from="popFrom" :mask-click="maskClick" v-model="showPop" class="hqs"
			height="40vh">

			<view class="bottoms">
				<view class="pluns">
					<view class="portraits">
						<image :src="replyList.avatar"></image>
					</view>
					<view class="namess">
						<view class="namea">{{replyList.nickname}}</view>
						<view class="conts">{{replyList.content}}</view>
						<view class="times">
							<text>{{replyList.create_time}}</text>
						</view>
					</view>
					<view class="heaas">
						<view style="margin-right: 5px;">{{replyList.digg}}</view>
						<view class="heart_img">
							<image src="../../static/ic_zan.png"></image>
						</view>
					</view>
				</view>
				<view class="lines"></view>
				<view class="all">{{quanbuhuifu}}<text class="numbers">({{onereplyList.total}})</text></view>
				<view class="pluns" v-for="(ite,ind) in onereplyList.lists">
					<view class="portraits">
						<image :src="ite.avatar"></image>
					</view>
					<view class="namess">
						<view class="namea">{{ite.nickname}}</view>
						<view class="conts">{{ite.content}}</view>
						<view class="times">
							<text>{{ite.create_time}}</text>
							<text class="dian"></text>
							<text @click="replydouble(ite)" class="double">{{huifu}}</text>

						</view>
					</view>
					<view class="heaas">
						<view style="margin-right: 5px;">{{ite.digg}}</view>
						<view class="heart_img" @click="replylike(ite)" :index='1'>

							<image v-if="ite.is_digg ==0" src="../../static/ic_zan.png"></image>
							<image v-if="ite.is_digg ==1" src="../../static/ic_zana.png"></image>
						</view>
					</view>
				</view>
				<view class="lines"></view>
			</view>
			<view class="compilea">
				<view class="compile" v-if="index == 0">
					<image src="../../static/ic_bji.png"></image>
					<input type="text" v-model="remark" @confirm="goRemark" :placeholder="xiepinglun" :focus="ifFocus2"
						id="mytest" />
				</view>
				<view class="compile" v-else="index==1">
					<image src="../../static/ic_bji.png"></image>
					<input type="text" v-model="remark" @confirm="pinglun" :placeholder="xiepinglun" :focus="ifFocus2"
						id="mytest" />
				</view>
			</view>
		</hqs-popup>
		<img :src="share" v-if="showPops" :index='1' alt="" class="icon-share">
		<hqs-popup :title="fenxiangzhi" :from="popFrom" :mask-click="maskClicks" v-model="showPops" class="hqs"
			height="20vh">

			<view class="shares">
				<view class="weixin" @click="sharing('wx')">
					<view class="weixin_img">
						<image src="../../static/ic_weixin.png"></image>
					</view>
					<view>{{weixin}}</view>
				</view>
				<view class="weixin" @click="sharing('py')">
					<view class="weixin_img">
						<image src="../../static/ic_weixinp.png"></image>
					</view>
					<view>{{pengyouquan}}</view>
				</view>
			</view>
			<view class="lnne"></view>
			<view class="cancel" @click="cancel">{{quxiao}}</view>
		</hqs-popup>
	</view>

</template>

<script>
	//#ifdef H5
	import jweixin from 'jweixin-module';
	//#endif
	// import "../../components/u-parse/u-parse.css";
	export default {
		data() {
			return {
				qingshengjidaozuixindeweixinbanben: '',
				nideweixinbanbentaidi: '',
				pinglunbunengweikong: '',
				pinglunbunengweikong: '',
				xiangguantuijian: '',
				remenpinglun: '',
				huifuxiangqing: '',
				quanbuhuifu: '',
				pengyouquan: '',
				xiepinglun: '',
				fenxiangzhi: '',
				xiepinglun: '',
				weixin: '',
				quxiao: '',
				fenxiang: '',
				huifu: '',
				huifu: '',
				huifu: '',
				yuedu: '',
				index: 0,
				ifFocus2: false,
				ifFocus: false,
				contents: '',
				content: [],
				comment: [],
				list: [],
				id: '',
				context: '',
				constxt: '',
				popFrom: 'bottom',
				showPop: false,
				maskClick: true,
				showPops: false,
				maskClicks: true,
				remark: '',
				replyId: '',
				its: [],
				replyList: [],
				onereplyList: [],
				is_digg: '',
				area: '1',
				total: '',
				xiepinglun: '',
				cate: '',
				show: false,
				share: require('@/static/icon-share.png'),
				is_h5: 1
			}
		},
		methods: {

			zan(item) {

				let type = ''
				this.is_digg = item.is_digg

				if (this.is_digg == 0) {

					type = 'up'
				} else {

					type = "down"
				}

				this.$request('/api/article/comment_digg', {
					id: item.id,
					type: type
				}, 'post', {}, true).then(res => {


					this.Showreplay()
					if (this.is_digg == 0) {
						this.is_digg = 0
					} else {
						this.is_digg = 1
					}
				})
			},

			replylike(item) {

				let type = ''
				this.total = item.total
				this.is_digg = item.is_digg

				if (this.is_digg == 0) {

					type = 'up'
				} else {

					type = "down"
				}


				this.$request('/api/article/comment_digg', {
					id: item.id,
					type: type
				}, 'post', {}, true).then(res => {

					this.$request('/api/article/comments', {
						id: this.id,
						reply_id: this.replyId,
						pagesize: '10',
					}, 'post', {}, true).then(res => {


						if (res.code === 1) {
							this.onereplyList = res.data;

						}
					})

					if (this.is_digg == 0) {
						this.is_digg = 0
					} else {
						this.is_digg = 1
					}
				})

			},

			focus() {
				this.active = true;
				this.isFocus = true

				if (this.inputVal) {
					this.isDelShow = true;
				}
			},

			Showreplay() {
				this.$request('/api/article/comments', {
					id: this.id,
					pagesize: 10,
				}, 'post', {}).then(res => {

					if (res.code == 1) {
						this.comment = res.data
					}
				})
			},
			give() {
				let type = ''

				if (this.contents.digged == 0) {
					type = 'up'
				} else {
					type = "down"
				}

				this.$request('/api/article/digg', {
					id: this.id,
					type: type,
				}, 'post', {}, true).then(res => {

					this.commens()
					if (this.contents.digged == 0) {
						this.contents.digged = 0
					} else {
						this.contents.digged = 1
					}
				})
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

			reply(from, it) {

				this.replyId = it.id
				this.replyList = it
				this.total = it.toal


				this.$request('/api/article/comments', {
					id: this.id,
					reply_id: this.replyId,
					pagesize: '20',
					total: this.total
				}, 'post', {}).then(res => {


					if (res.code === 1) {
						this.onereplyList = res.data;

					}
				})
				this.popFrom = from
				this.showPop = true
			},

			goRemark(e) {


				this.remark = e.detail.value;
				if (this.remark != '') {

					this.$request('/api/article/do_comment', {
						id: this.id,
						reply_id: this.replyId,

						content: this.remark,
					}, 'post', {}, true).then(res => {

						uni.showToast({
							title: res.msg,
							icon: 'none'
						})


						if (res.code == 1) {

							this.$request('/api/article/comments', {
								id: this.id,
								reply_id: this.replyId,
								pagesize: '20',
							}, 'post', {}).then(res => {


								if (res.code === 1) {
									this.onereplyList = res.data;

								}
							})

						}
						this.remark = ''
					})
				} else {
					uni.showToast({
						title: this.pinglunbunengweikong,
						icon: 'none'
					})
				}
			},



			pinglun(e) {



				let articleid = e.id
				if (this.remark != '') {

					this.$request('/api/article/do_comment', {
						id: this.id,
						reply_id: this.replyId,

						content: this.remark,
					}, 'post', {}, true).then(res => {

						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
						this.constxt = ''

						if (res.code == 1) {

							this.$request('/api/article/comments', {
								id: articleid,
								reply_id: this.replyId,
								pagesize: '10',
							}, 'post', {}).then(res => {


								if (res.code === 1) {
									this.onereplyList = res.data;

								}
							})
						}
						this.remark = ''
						this.Showreplay()
					})
				} else {
					uni.showToast({
						title: this.pinglunbunengweikong,
						icon: 'none'
					})
				}
			},
			replydouble(e) {

				let name = e.nickname
				this.ifFocus2 = true
				this.xiepinglun = this.huifu + ' ' + e.nickname;
				this.index = 1
				this.replyId = e.id


			},

			messagesearch: function(event) {
				this.constxt = event.target.value;
				this.$request('/api/article/do_comment', {
					id: this.id,
					content: this.constxt,
				}, 'post', {}, true).then(res => {

					uni.showToast({
						title: res.msg,
						icon: 'none'
					})
					this.constxt = ''
					this.Showreplay()
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
				console.log(this.id,type)
				let that = this
				//#ifdef H5
				let ua = window.navigator.userAgent.toLowerCase()
				if (ua.match(/MicroMessenger/i) == 'micromessenger') {
					that.initJssdkShare(function(res) {
						jweixin.ready(function() {
							jweixin.checkJsApi({
								jsApiList: [
									'updateAppMessageShareData',
									'updateTimelineShareData'
								],
								success: function(res) {
									if (res.checkResult.getLocation == false) {
										uni.showToast({
											title: that.nideweixinbanbentaidi + '，' +
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
									title: that.contents.article.title,
									link: res.full_url,
									success: function() {


									}

								})
							} else if (type == "py") {
								that.show = true
								jweixin.updateTimelineShareData({
									title: that.contents.article.title,
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
				let that = this
				let url = 'pages/contents/contents?id=' + that.id
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

			conts() {
				this.$request('/api/article/do_comment', {
					id: this.id,
					reply_id: '',
					content: this.constxt,
				}, 'post', {}, true).then(res => {

					uni.showToast({
						title: res.msg,
						icon: 'none'
					})
					this.constxt = ''

					if (res.code == 1) {
						this.Showreplay()
					}
				})
			},
			handleClickStop(options) {
				const {
					type
				} = options
				switch (type) {
					case 'popupHide':
						this.show = false
						break;
				}
			},

			commens() {
				this.$request('/api/article/view', {
					id: this.id,
				}, 'post', {}).then(res => {


					if (res.code === 1) {
						this.contents = res.data;
						uni.setNavigationBarTitle({
							title: this.contents.article.title
						})
						this.context = this.formatRichText(this.contents.article.content);

					}
				})

				this.$request('/api/article/comments', {
					id: this.id,
					pagesize: '',
				}, 'post', {}).then(res => {


					if (res.code === 1) {
						this.comment = res.data;

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
					match = match.replace(/width="[^"]+"/gi, 'style="width:100%" autoplay="autoplay"').replace(/width='[^']+'/gi, '');
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
			this.qingshengjidaozuixindeweixinbanben = this.$lang.qingshengjidaozuixindeweixinbanben[uni.getStorageSync(
				'lang')];
			this.nideweixinbanbentaidi = this.$lang.nideweixinbanbentaidi[uni.getStorageSync('lang')];
			this.pinglunbunengweikong = this.$lang.pinglunbunengweikong[uni.getStorageSync('lang')];
			this.pinglunbunengweikong = this.$lang.pinglunbunengweikong[uni.getStorageSync('lang')];
			this.xiangguantuijian = this.$lang.xiangguantuijian[uni.getStorageSync('lang')];
			this.remenpinglun = this.$lang.remenpinglun[uni.getStorageSync('lang')];
			this.huifuxiangqing = this.$lang.huifuxiangqing[uni.getStorageSync('lang')];
			this.quanbuhuifu = this.$lang.quanbuhuifu[uni.getStorageSync('lang')];
			this.pengyouquan = this.$lang.pengyouquan[uni.getStorageSync('lang')];
			this.xiepinglun = this.$lang.xiepinglun[uni.getStorageSync('lang')];
			this.fenxiangzhi = this.$lang.fenxiangzhi[uni.getStorageSync('lang')];
			this.xiepinglun = this.$lang.xiepinglun[uni.getStorageSync('lang')];
			this.weixin = this.$lang.weixin[uni.getStorageSync('lang')];
			this.quxiao = this.$lang.quxiao[uni.getStorageSync('lang')];
			this.fenxiang = this.$lang.fenxiang[uni.getStorageSync('lang')];
			this.huifu = this.$lang.huifu[uni.getStorageSync('lang')];
			this.huifu = this.$lang.huifu[uni.getStorageSync('lang')];
			this.huifu = this.$lang.huifu[uni.getStorageSync('lang')];
			this.yuedu = this.$lang.yuedu[uni.getStorageSync('lang')];
		},
		onLoad(e) {
			this.qingshengjidaozuixindeweixinbanben = this.$lang.qingshengjidaozuixindeweixinbanben[uni.getStorageSync(
				'lang')];
			this.nideweixinbanbentaidi = this.$lang.nideweixinbanbentaidi[uni.getStorageSync('lang')];
			this.pinglunbunengweikong = this.$lang.pinglunbunengweikong[uni.getStorageSync('lang')];
			this.pinglunbunengweikong = this.$lang.pinglunbunengweikong[uni.getStorageSync('lang')];
			this.xiangguantuijian = this.$lang.xiangguantuijian[uni.getStorageSync('lang')];
			this.remenpinglun = this.$lang.remenpinglun[uni.getStorageSync('lang')];
			this.huifuxiangqing = this.$lang.huifuxiangqing[uni.getStorageSync('lang')];
			this.quanbuhuifu = this.$lang.quanbuhuifu[uni.getStorageSync('lang')];
			this.pengyouquan = this.$lang.pengyouquan[uni.getStorageSync('lang')];
			this.xiepinglun = this.$lang.xiepinglun[uni.getStorageSync('lang')];
			this.fenxiangzhi = this.$lang.fenxiangzhi[uni.getStorageSync('lang')];
			this.xiepinglun = this.$lang.xiepinglun[uni.getStorageSync('lang')];
			this.weixin = this.$lang.weixin[uni.getStorageSync('lang')];
			this.quxiao = this.$lang.quxiao[uni.getStorageSync('lang')];
			this.fenxiang = this.$lang.fenxiang[uni.getStorageSync('lang')];
			this.huifu = this.$lang.huifu[uni.getStorageSync('lang')];
			this.huifu = this.$lang.huifu[uni.getStorageSync('lang')];
			this.huifu = this.$lang.huifu[uni.getStorageSync('lang')];
			this.yuedu = this.$lang.yuedu[uni.getStorageSync('lang')];

			//#ifdef MP-WEIXIN
			this.is_h5 = 0;
			//#endif
			let cate = e.cate
			// if (uni.getStorageSync('area')) {
			// 	this.area = uni.getStorageSync('area')
			// }
			if (e.area == 'undefined' || e.area == undefined || e.area == '' || e.area == null) {
				if (uni.getStorageSync('area')) {
					this.area = uni.getStorageSync('area')
				}
			} else {
				this.area = e.area
			}
			this.cate = e.cate

			this.id = e.id
			this.commens()
			this.$request('/api/article/get_list', {
				cate: cate,
				area: this.area,
				page: '1',
				is_recommend: '1'
			}, 'post', {}).then(res => {
				if (res.code == 1) {
					this.list = res.data

				}
			});





		}
	}
</script>

<style>
	.video-video {
		width: 100%;
	}

	.icon-share {
		position: fixed;
		right: 0;
		top: 80rpx;
		cursor: pointer;
	}

	.details {
		margin-top: 26rpx;
		margin-left: 30rpx;
		margin-right: 26rpx;
	}

	.titles {
		color: rgba(16, 16, 16, 100);
		font-size: 36rpx;
		font-family: PingFangSC-regular;
	}

	.ints {
		color: rgba(102, 102, 102, 100);
		font-size: 28rpx;
		text-align: left;
		font-family: PingFangSC-regular;
		margin-top: 20rpx;
	}

	.wen {
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		text-align: left;
		font-family: PingFangSC-regular;
		margin-top: 20rpx;
	}

	.yue {
		margin-top: 20rpx;
		color: rgba(102, 102, 102, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
	}

	.zan {
		margin-top: 20rpx;
		display: flex;
		justify-content: space-between;
	}

	.heart {
		display: flex;
		color: rgba(102, 102, 102, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
		margin-left: 70rpx;
		margin-right: 70rpx;
	}

	.heart_img {
		width: 36rpx;
		height: 36rpx;
		margin-right: 14rpx;
	}

	.heart_img image {
		width: 100%;
		height: 100%;
	}

	.recommend {
		margin-top: 28rpx;
	}

	.top {
		color: rgba(16, 16, 16, 100);
		font-size: 32rpx;
		text-align: left;
		font-family: PingFangSC-regular;
	}

	.top text {
		display: inline-block;
		width: 14rpx;
		height: 28rpx;
		line-height: 40rpx;
		border-radius: 42rpx;
		background-color: rgba(151, 138, 129, 100);
		margin-left: 30rpx;
		margin-right: 6rpx;
	}

	.nes {
		margin-top: 52rpx;
		width: 100%;
		height: 20rpx;
		background-color: rgba(247, 247, 247, 100);
	}

	.plunn {
		padding-bottom: 120rpx;
	}

	.plun {
		margin-top: 36rpx;
		margin-left: 30rpx;
		display: flex;
	}

	.portrait {
		width: 72rpx;
		height: 72rpx;
		border-radius: 72rpx;
		background-color: #cccccc;
	}

	.portrait image {
		width: 100%;
		height: 100%;
	}

	.names {
		width: 530rpx;
		margin-left: 12rpx;
	}

	.name {
		color: rgba(61, 176, 218, 100);
		font-size: 24rpx;
		font-family: PingFangSC-regular;
	}

	.cont {
		margin-top: 8rpx;
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
	}

	.time {
		display: flex;
		margin-top: 10rpx;
		color: rgba(16, 16, 16, 100);
		font-size: 20rpx;
		font-family: PingFangSC-regular;
	}

	.time view {
		width: 88rpx;
		height: 34rpx;
		line-height: 30rpx;
		border-radius: 56rpx;
		background-color: rgba(244, 244, 244, 100);
		color: rgba(16, 16, 16, 100);
		font-size: 20rpx;
		text-align: center;
		margin-left: 10rpx;
	}

	.heas {
		display: flex;
	}

	.seach {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 96rpx;
		line-height: 40rpx;
		text-align: center;
		background-color: #fff;
		border: 1px solid rgba(233, 233, 233, 100);
		display: flex;
	}

	.inputs {
		width: 360rpx;
		height: 64rpx;
		border-radius: 130rpx;
		background-color: rgba(243, 246, 249, 100);

		font-size: 28rpx;
		text-align: left;
		font-family: Microsoft Yahei;
		border: 1px solid rgba(220, 224, 231, 100);
		margin-top: 16rpx;
		margin-left: 30rpx;
		line-height: 64rpx;
	}

	.inputs input {
		padding-left: 20rpx;
		margin-top: 8rpx;
	}

	.icons {
		display: flex;
		width: 50%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.newList {
		display: flex;
		justify-content: space-between;
		margin: 30rpx;
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
	}

	.news {
		width: 210rpx;
		height: 124rpx;
	}

	.news image {
		width: 100%;
		height: 100%;
	}


	.hqs {
		background: #FFFFFF;
		border-radius: 30rpx 30rpx 0px 0px;
	}

	.bottoms {
		padding-bottom: 100rpx;
	}

	.pluns {
		margin-top: 36rpx;
		margin-left: 30rpx;
		display: flex;
		/* margin-bottom: 40rpx;
		padding-bottom: 100rpx; */
	}

	.portraits {
		width: 72rpx;
		height: 72rpx;
		border-radius: 72rpx;
		background-color: #cccccc;
	}

	.portraits image {
		width: 100%;
		height: 100%;
	}

	.namess {
		width: 530rpx;
		margin-left: 12rpx;
	}

	.namea {
		color: rgba(61, 176, 218, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
	}

	.conts {
		margin-top: 8rpx;
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
	}

	.times {
		display: flex;
		margin-top: 10rpx;
		color: rgba(16, 16, 16, 100);
		font-size: 20rpx;
		font-family: PingFangSC-regular;
		align-items: center;
	}

	.dian {
		display: inline-block;
		width: 6rpx;
		height: 6rpx;
		background: #333333;
		border-radius: 50%;
		margin: 0 10rpx;
	}

	.times view {
		width: 88rpx;
		height: 34rpx;
		line-height: 30rpx;
		border-radius: 56rpx;
		background-color: rgba(244, 244, 244, 100);
		color: rgba(16, 16, 16, 100);
		font-size: 20rpx;
		text-align: center;
		margin-left: 10rpx;
	}

	.heaas {
		display: flex;
	}

	.lines {
		width: 690rpx;
		height: 1rpx;
		background: #333333;
		opacity: 0.15;
		margin: 25rpx 30rpx;
	}

	.all {
		margin-left: 30rpx;
		font-size: 32rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;
	}

	.numbers {
		font-size: 20rpx;
	}

	.compilea {
		position: fixed;
		bottom: 0;
		height: 80rpx;
		background: #FFFFFF;
		padding: 15rpx 30rpx;
		border-top: solid 1rpx #e1e1e1;
	}

	.compile {
		width: 690rpx;
		height: 50rpx;
		background: #F2F2F2;
		border-radius: 23rpx;
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

	/* #ifdef MP-WEIXIN */
	/**
	 * author: Di (微信小程序开发工程师)
	 * organization: WeAppDev(微信小程序开发论坛)(http://weappdev.com)
	 *         垂直微信小程序开发交流社区
	 *
	 * github地址: https://github.com/icindy/wxParse
	 *
	 * for: 微信小程序富文本解析
	 * detail : http://weappdev.com/t/wxparse-alpha0-1-html-markdown/184
	 */
	view {
		display: inline;
	}

	.wxParse {
		width: 100%;
		font-family: Helvetica, sans-serif;
		font-size: 30upx;
		color: #666;
		line-height: 1.8;
	}

	.wxParse view {
		word-break: hyphenate;
	}

	.wxParse .inline {
		display: inline;
		margin: 0;
		padding: 0;
	}

	.block {
		display: block !important;
		margin: 0;
		padding: 0;
	}

	.wxParse .div {
		margin: 0;
		padding: 0;
	}

	.wxParse .h1 .text {
		font-size: 2em;
		margin: 0.67em 0;
	}

	.wxParse .h2 .text {
		font-size: 1.5em;
		margin: 0.83em 0;
	}

	.wxParse .h3 .text {
		font-size: 1.17em;
		margin: 1em 0;
	}

	.wxParse .h4 .text {
		margin: 1.33em 0;
	}

	.wxParse .h5 .text {
		font-size: 0.83em;
		margin: 1.67em 0;
	}

	.wxParse .h6 .text {
		font-size: 0.67em;
		margin: 2.33em 0;
	}

	.wxParse .h1 .text,
	.wxParse .h2 .text,
	.wxParse .h3 .text,
	.wxParse .h4 .text,
	.wxParse .h5 .text,
	.wxParse .h6 .text,
	.wxParse .b,
	.wxParse .strong {
		font-weight: bolder;
	}


	.wxParse .p {
		margin: 1em 0;
	}

	.wxParse .i,
	.wxParse .cite,
	.wxParse .em,
	.wxParse .var,
	.wxParse .address {
		font-style: italic;
	}

	.wxParse .pre,
	.wxParse .tt,
	.wxParse .code,
	.wxParse .kbd,
	.wxParse .samp {
		font-family: monospace;
	}

	.wxParse .pre {
		overflow: auto;
		background: #f5f5f5;
		padding: 16upx;
		white-space: pre;
		margin: 1em 0upx;
	}

	.wxParse .code {
		display: inline;
		background: #f5f5f5;
	}

	.wxParse .big {
		font-size: 1.17em;
	}

	.wxParse .small,
	.wxParse .sub,
	.wxParse .sup {
		font-size: 0.83em;
	}

	.wxParse .sub {
		vertical-align: sub;
	}

	.wxParse .sup {
		vertical-align: super;
	}

	.wxParse .s,
	.wxParse .strike,
	.wxParse .del {
		text-decoration: line-through;
	}

	.wxParse .strong,
	.wxParse .s {
		display: inline;
	}

	.wxParse .a {
		color: deepskyblue;
	}

	.wxParse .video {
		text-align: center;
		margin: 22upx 0;
	}

	.wxParse .video-video {
		width: 100%;
	}

	.wxParse .img {
		display: inline-block;
		width: 0;
		height: 0;
		max-width: 100%;
		overflow: hidden;
	}

	.wxParse .blockquote {
		margin: 10upx 0;
		padding: 22upx 0 22upx 22upx;
		font-family: Courier, Calibri, "宋体";
		background: #f5f5f5;
		border-left: 6upx solid #dbdbdb;
	}

	.wxParse .blockquote .p {
		margin: 0;
	}

	.wxParse .ul,
	.wxParse .ol {
		display: block;
		margin: 1em 0;
		padding-left: 33upx;
	}

	.wxParse .ol {
		list-style-type: disc;
	}

	.wxParse .ol {
		list-style-type: decimal;
	}

	.wxParse .ol>weixin-parse-template,
	.wxParse .ul>weixin-parse-template {
		display: list-item;
		align-items: baseline;
		text-align: match-parent;
	}

	.wxParse .ol>.li,
	.wxParse .ul>.li {
		display: list-item;
		align-items: baseline;
		text-align: match-parent;
	}

	.wxParse .ul .ul,
	.wxParse .ol .ul {
		list-style-type: circle;
	}

	.wxParse .ol .ol .ul,
	.wxParse .ol .ul .ul,
	.wxParse .ul .ol .ul,
	.wxParse .ul .ul .ul {
		list-style-type: square;
	}

	.wxParse .u {
		text-decoration: underline;
	}

	.wxParse .hide {
		display: none;
	}

	.wxParse .del {
		display: inline;
	}

	.wxParse .figure {
		overflow: hidden;
	}

	.wxParse .table {
		width: 100%;
	}

	.wxParse .thead,
	.wxParse .tfoot,
	.wxParse .tr {
		display: flex;
		flex-direction: row;
	}

	.wxParse .tr {
		width: 100%;
		display: flex;
		border-right: 2upx solid #e0e0e0;
		border-bottom: 2upx solid #e0e0e0;
	}

	.wxParse .th,
	.wxParse .td {
		display: flex;
		width: 1276upx;
		overflow: auto;
		flex: 1;
		padding: 11upx;
		border-left: 2upx solid #e0e0e0;
	}

	.wxParse .td:last {
		border-top: 2upx solid #e0e0e0;
	}

	.wxParse .th {
		background: #f0f0f0;
		border-top: 2upx solid #e0e0e0;
	}

	/* #endif */
</style>
