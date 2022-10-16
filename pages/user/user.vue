<template>
	<view class="user">
		<view class="user-top">
			<view class="person-center">{{gerenzhongxin}}</view>
		</view>
		<view class="user-message">
			<view class="mes">
				<view class="photo" @click="userinformation" v-if="profile !=null && profile.length!=0">
					<image :src="profile.avatar"></image>
					
				</view>
				<view class="photo" v-else></view>
				<view class="user-name" v-if="profile !=null && profile.length!=0">
					<view>{{profile.nickname}}</view>
					
				</view>
				<view class="user-name" v-else>
					<view @click="login">{{denglu}}</view>
				</view>
				<view class="person" @click="userinformation">
					<view>{{gerenxinxi}}</view>
					<image style="width: 36rpx;height: 36rpx;" src="../../static/ic_ri.png"></image>
				</view>
			</view>
		</view>
		<view class="line"></view>
		<view class="indent">
			<view class="indent-top">
				<view>{{wodedingdan}}</view>
				<image style="width: 36rpx;height: 36rpx;" src="../../static/ic_ri.png"></image>
			</view>
			<view class="indent-item">
				<view class="user-indent" @click="userorder('venue')">
					<image style="width: 48rpx;height: 48rpx;margin-bottom: 10rpx;" src="../../static/changguan.png">
					</image>
					<view>{{changguanyuyue}}</view>
				</view>
				<view class="user-indent" @click="userorder('activity')">
					<image style="width: 48rpx;height: 48rpx;margin-bottom: 10rpx;" src="../../static/saishi.png">
					</image>
					<view>{{huodongyuyue}}</view>
				</view>
				<view class="user-indent" @click="userorder('artgroup')">
					<image style="width: 48rpx;height: 48rpx;margin-bottom: 10rpx;" src="../../static/huodong.png">
					</image>
					<view>{{yituanyuyue}}</view>
				</view>
				<view class="user-indent" @click="workslist()">
					<image style="width: 48rpx;height: 48rpx;margin-bottom: 10rpx;" src="../../static/zuoping1.png">
					</image>
					<view>{{saishizuopin}}</view>
				</view>
			</view>
		</view>
		<view class="lins"></view>
		<view class="equity">
			<view class="equity-top" v-if="profile.is_agent">
				<view>{{yuangongcaozuo}}</view>
				<image style="width: 36rpx;height: 36rpx;" src="../../static/ic_ri.png"></image>
			</view>
			<view class="rests" @click="check_qr" v-if="profile.is_agent">
				<view class="rests-left">
					<image style="width: 36rpx;height: 36rpx;margin-right: 30rpx;" src="../../static/yijian.png">
					</image>
					<text>{{saomayanpiao}}</text>
				</view>
				<image style="width: 36rpx;height: 36rpx;" src="../../static/ic_ri.png"></image>
			</view>
			<view class="equity-top">
				<view>{{fuwuquanyi}}</view>
				<image style="width: 36rpx;height: 36rpx;" src="../../static/ic_ri.png"></image>
			</view>
			<view class="rests" @click="usersecurity">
				<view class="rests-left">
					<image style="width: 36rpx;height: 36rpx;margin-right: 30rpx;" src="../../static/anquan.png">
					</image>
					<text>{{anquanzhongxin}}</text>
				</view>
				<image style="width: 36rpx;height: 36rpx;" src="../../static/ic_ri.png"></image>
			</view>
			<view class="rests" @click="usercollection">
				<view class="rests-left">
					<image style="width: 36rpx;height: 36rpx;margin-right: 30rpx;" src="../../static/shoucang.png">
					</image>
					<text>{{wodeshoucang}}</text>
				</view>
				<image style="width: 36rpx;height: 36rpx;" src="../../static/ic_ri.png"></image>
			</view>
			<view class="rests" @click="userabout">
				<view class="rests-left">
					<image style="width: 36rpx;height: 36rpx;margin-right: 30rpx;" src="../../static/guanyu.png">
					</image>
					<text>{{guanyuwomen}}</text>
				</view>
				<image style="width: 36rpx;height: 36rpx;" src="../../static/ic_ri.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import QrcodeDecoder from 'qrcode-decoder';
	//#ifdef H5
	import jweixin from 'jweixin-module';
	//#endif
	export default {
		data() {
			return {qingshengjidaozuixindeweixinbanben:'',tuijianshiyongweixindakai:'',nideweixinbanbentaidi:'',shibieerweimashibai:'',gerenzhongxin:'',anquanzhongxin:'',guanyuwomen:'',wodeshoucang:'',fuwuquanyi:'',saomayanpiao:'',yuangongcaozuo:'',saishizuopin:'',yituanyuyue:'',huodongyuyue:'',changguanyuyue:'',wodedingdan:'',gerenxinxi:'',shibiezhong:'',shibiezhong:'',denglu:'',
				profile: []
			}
		},
		methods: {
			login() {
				uni.navigateTo({
					url: '../login/login'
				})
			},
			
			userfeedback() {
				uni.navigateTo({
					url: '../user-feedback/user-feedback'
				})
			},
			
			userabout() {
				uni.navigateTo({
					url: '../user-about/user-about'
				})
			},
			
			userinformation() {
				uni.navigateTo({
					url: '../user-information/user-information'
				})
			},
			
			userorder(type) {
				uni.navigateTo({
					url: '../user-order/user-order?type=' + type
				})
			},
			
			workslist() {
				uni.navigateTo({
					url: '../works-list/works-list'
				})
			},
			
			usersecurity() {
				uni.navigateTo({
					url: '../user-security-center/user-security-center'
				})
			},
			
			usercollection() {
				uni.navigateTo({
					url: '../user-collection/user-collection'
				})
			},
			initJssdkShare: function(callback) {
				
				this.$request('/api/common/getJssdkTicket', {}, 'post', {}, true).then(res => {
					if (res.data) {
						jweixin.config({
							debug: false,
							appId: res.data.appId,
							timestamp: res.data.timestamp,
							nonceStr: res.data.nonceStr,
							signature: res.data.signature,
							jsApiList: [
								'checkJsApi',
								'scanQRCode'
							]
						});
						
						if (callback) {
							callback(res.data);
						}
					}
				});
			},
			
			check_qr() {
				
				let that = this
				 //#ifdef H5
				  
				let ua = window.navigator.userAgent.toLowerCase()
				
				if (ua.match(/MicroMessenger/i) == 'micromessenger') {
					this.initJssdkShare(function(res){
						jweixin.ready(function() {
							jweixin.checkJsApi({
								jsApiList: [
									'scanQRCode'
								],
								success: function (res) {
									if (res.checkResult.getLocation == false) {
										uni.showToast({
											title: that.nideweixinbanbentaidi+'，'+that.qingshengjidaozuixindeweixinbanben+'！',
											duration: 2000,
											icon: 'none'
										})
										return;
									}
								}
							});
							jweixin.scanQRCode({
								needResult: 1, 
								scanType: ["qrCode"], 
								success: function (res1) {
									
									let data = JSON.parse(res1.resultStr);
									uni.navigateTo({
										url: '../user-order/user-order?type=' + data.type +
											'&member_id=' + data.member_id
									})
								}
							})
						});
					})
					
				}
				 else {
					
					uni.chooseImage({
						sizeType: ['original'],
						count: 1,
						success: function(res) {
							uni.showLoading({
								title:this.shibiezhong
							});
							const tempFilePaths = res.tempFilePaths[0] 
							var qr = new QrcodeDecoder();
							qr.decodeFromImage(tempFilePaths).then((res1) => {
								uni.hideLoading();
								
								
								if (!res1) {
									uni.showToast({
										title: that.shibieerweimashibai+'，'+tuijianshiyongweixindakai+'！',
										duration: 2000,
										icon: 'none'
									})
								} else {
									
									let data = JSON.parse(res1.data);
									uni.navigateTo({
										url: '../user-order/user-order?type=' + data.type +
											'&member_id=' + data.member_id
									})
								}

							})
							uni.showLoading({
								title:this.shibiezhong
							});
						},
					})
				}
				//#endif

				
				//#ifndef H5
				uni.scanCode({
					onlyFromCamera: true,
					scanType: [
						'qrCode'
					],

					success: function(res) {
						let data = JSON.parse(res.result);
						uni.navigateTo({
							url: '../user-order/user-order?type=' + data.type +
								'&member_id=' + data.member_id
						})
					}
				});
				 //#endif

			}
		},
		onLoad(e) {this.qingshengjidaozuixindeweixinbanben = this.$lang.qingshengjidaozuixindeweixinbanben[uni.getStorageSync('lang')];this.tuijianshiyongweixindakai = this.$lang.tuijianshiyongweixindakai[uni.getStorageSync('lang')];this.nideweixinbanbentaidi = this.$lang.nideweixinbanbentaidi[uni.getStorageSync('lang')];this.shibieerweimashibai = this.$lang.shibieerweimashibai[uni.getStorageSync('lang')];this.gerenzhongxin = this.$lang.gerenzhongxin[uni.getStorageSync('lang')];this.anquanzhongxin = this.$lang.anquanzhongxin[uni.getStorageSync('lang')];this.guanyuwomen = this.$lang.guanyuwomen[uni.getStorageSync('lang')];this.wodeshoucang = this.$lang.wodeshoucang[uni.getStorageSync('lang')];this.fuwuquanyi = this.$lang.fuwuquanyi[uni.getStorageSync('lang')];this.saomayanpiao = this.$lang.saomayanpiao[uni.getStorageSync('lang')];this.yuangongcaozuo = this.$lang.yuangongcaozuo[uni.getStorageSync('lang')];this.saishizuopin = this.$lang.saishizuopin[uni.getStorageSync('lang')];this.yituanyuyue = this.$lang.yituanyuyue[uni.getStorageSync('lang')];this.huodongyuyue = this.$lang.huodongyuyue[uni.getStorageSync('lang')];this.changguanyuyue = this.$lang.changguanyuyue[uni.getStorageSync('lang')];this.wodedingdan = this.$lang.wodedingdan[uni.getStorageSync('lang')];this.gerenxinxi = this.$lang.gerenxinxi[uni.getStorageSync('lang')];this.shibiezhong = this.$lang.shibiezhong[uni.getStorageSync('lang')];this.shibiezhong = this.$lang.shibiezhong[uni.getStorageSync('lang')];this.denglu = this.$lang.denglu[uni.getStorageSync('lang')];},
		onShow() {
			this.qingshengjidaozuixindeweixinbanben = this.$lang.qingshengjidaozuixindeweixinbanben[uni.getStorageSync('lang')];this.tuijianshiyongweixindakai = this.$lang.tuijianshiyongweixindakai[uni.getStorageSync('lang')];this.nideweixinbanbentaidi = this.$lang.nideweixinbanbentaidi[uni.getStorageSync('lang')];this.shibieerweimashibai = this.$lang.shibieerweimashibai[uni.getStorageSync('lang')];this.gerenzhongxin = this.$lang.gerenzhongxin[uni.getStorageSync('lang')];this.anquanzhongxin = this.$lang.anquanzhongxin[uni.getStorageSync('lang')];this.guanyuwomen = this.$lang.guanyuwomen[uni.getStorageSync('lang')];this.wodeshoucang = this.$lang.wodeshoucang[uni.getStorageSync('lang')];this.fuwuquanyi = this.$lang.fuwuquanyi[uni.getStorageSync('lang')];this.saomayanpiao = this.$lang.saomayanpiao[uni.getStorageSync('lang')];this.yuangongcaozuo = this.$lang.yuangongcaozuo[uni.getStorageSync('lang')];this.saishizuopin = this.$lang.saishizuopin[uni.getStorageSync('lang')];this.yituanyuyue = this.$lang.yituanyuyue[uni.getStorageSync('lang')];this.huodongyuyue = this.$lang.huodongyuyue[uni.getStorageSync('lang')];this.changguanyuyue = this.$lang.changguanyuyue[uni.getStorageSync('lang')];this.wodedingdan = this.$lang.wodedingdan[uni.getStorageSync('lang')];this.gerenxinxi = this.$lang.gerenxinxi[uni.getStorageSync('lang')];this.shibiezhong = this.$lang.shibiezhong[uni.getStorageSync('lang')];this.shibiezhong = this.$lang.shibiezhong[uni.getStorageSync('lang')];this.denglu = this.$lang.denglu[uni.getStorageSync('lang')];
			this.$request('/api/member/profile', {}, 'post', {}, true).then(res => {

				if (res.code == 1) {
					this.profile = res.data.profile;

				} else {
					this.profile = []

				}
			})
		}

	}
</script>

<style>
	.user {}

	.top {
		display: flex;
		padding-top: 40rpx;
		line-height: 144rpx;
		color: #1c222a;
		font-size: 34rpx;
	}

	.photo {
		width: 144rpx;
		height: 144rpx;
		border-radius: 50%;
		background-color: #cccccc;
		margin: 0 30rpx 30rpx 30rpx;
	}

	.line {
		margin-top: 180rpx;
		width: 100%;
		height: 20rpx;
		background-color: #F9F9F9;
	}

	.user-top {
		height: 208rpx;
		width: 100%;
		background-color: #2C6CD0;
		padding: 50rpx 30rpx 30rpx 30rpx;
		position: relative;
	}

	.person-center {
		color: #FFFFFF;
		font-size: 40rpx;
		text-align: left;
		font-family: PingFangSC-bold;
	}

	.mes {
		position: absolute;
		top: 130rpx;
		display: flex;
		width: 100%;
		height: 224rpx;
		border-radius: 32rpx 32rpx 0px 0px;
		background-color: rgba(255, 255, 255, 100);
		text-align: center;
		box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
		padding: 40rpx 30rpx 0rpx 30rpx;
	}

	.photo {
		width: 144rpx;
		height: 144rpx;
	}

	.photo image {
		width: 100%;
		height: 100%;
	}

	.user-name {
		margin-top: 30rpx;
		width: 300rpx;
		text-align: left;
	}

	.sign {
		width: 116rpx;
		height: 40rpx;
		background-color: #FFD502;
		border-radius: 100rpx;
		color: #FFFFFF;
		text-align: center;
		line-height: 40rpx;
		font-size: 20rpx;
		margin-top: 12rpx;
	}

	.person {
		display: flex;
		margin-top: 58rpx;
		font-size: 24rpx;
		margin-left: 50rpx;
	}

	.indent {
		
		padding: 30rpx 0 40rpx 0;
	}

	.indent-top {
		display: flex;
		justify-content: space-between;
		font-size: 34rpx;
		color: #1C222A;
		margin: 0 30rpx;
		padding-bottom: 28rpx;
		border-bottom: solid 1rpx #F9F9F9;
	}

	.indent-item {
		display: flex;
		padding-left: 20rpx;
	}

	.user-indent {
		width: 160rpx;
		text-align: center;
		margin-left: 15rpx;
		margin-top: 40rpx;
		font-size: 26rpx;
		color: #666666;
	}

	.lins {
		width: 100%;
		height: 20rpx;
		background-color: #F9F9F9;
	}

	.equity {
		padding: 30rpx 0rpx 40rpx 0rpx;
	}

	.equity-top {
		display: flex;
		justify-content: space-between;
		font-size: 34rpx;
		color: #1C222A;
		margin: 0 30rpx;
		padding-bottom: 28rpx;
	}

	.rests {
		height: 112rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 30rpx;
	}

	.rests-left {
		display: flex;
		align-items: center;
	}
</style>
