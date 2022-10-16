<template>
	<view class="user-information">
		<view class="user-information-top">
			<view class="information-top-item">
				<view class="top-item-txt">
					{{touxiang}}
				</view>
				<view class="top-item-img">
					<view class="top-item-img-left">
						<image :src="profile.avatar" @click="upload"></image>
					</view>
					<view class="top-item-img-right">
						<image src="../../static/ic_ri.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="information-top-item1" @click="usereditname">
				<view class="top-item-txt">
					{{nicheng}}
				</view>
				<view class="top-item-right">
					<view class="top-item-right">
						{{profile.nickname}}
					</view>
					<view class="top-item-img-right1">
						<image src="../../static/ic_ri.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<!-- <view class="user-information-content">
			<view class="information-content-item">
				<view class="content-item-left">
					{{zhenshixingming}}
				</view>
				<view class="content-item-right">
					{{profile.realname}}
				</view>
			</view>
			<view class="information-content-item">
				<view class="content-item-left">
					{{xingbie}}
				</view>
				<view class="content-item-right">
					{{profile.gender}}
				</view>
			</view>
			<view class="information-content-item">
				<view class="content-item-left">
					{{shenfenzheng}}
				</view>
				<view class="content-item-right">
					{{profile.realname}}
				</view>
			</view>
			<view class="information-content-item">
				<view class="content-item-left">
					{{shouji}}
				</view>
				<view class="content-item-right">
					{{profile.mobile}}
				</view>
			</view>
			<view class="information-content-item">
				<view class="content-item-left">
					{{youxiang}}
				</view>
				<view class="content-item-right">
					{{profile.email}}
				</view>
			</view>
		</view> -->
		<view class="information-content-bottom" @click="Logout">
			<button type="default">{{tuichudenglu}}</button>
		</view>
	</view>
</template>

<script>
	import config from 'utils/config.js'
	export default {
		data() {
			return {
				zhenshixingming: '',
				tuichudenglu: '',
				gengxinchenggong: '',
				shenfenzheng: '',
				weishezhi: '',
				touxiang: '',
				nicheng: '',
				xingbie: '',
				shouji: '',
				youxiang: '',
				nan: '',
				nv: '',
				profile: [],
				upload_avatar: '',
			}
		},
		methods: {
			userhead() {
				uni.navigateTo({
					url: '../user-head/user-head'
				})
			},
			usereditname() {
				uni.navigateTo({
					url: '../user-edit-name/user-edit-name'
				})
			},

			Logout() {
				this.$request('/api/auth/quit', {}, 'post', {}).then(res => {

					if (res.code == 1) {

						uni.switchTab({
							url: '../user/user'
						})
						uni.setStorageSync('retoken', '')
						uni.setStorageSync('wtoken', '');
						uni.setStorageSync('expire', '');
					}
				})
			},

			upload() {
				let token = uni.getStorageSync('wtoken');
				let that = this
				uni.chooseImage({
					count: 1,
					success: function(res) {
						const tempFilePaths = res.tempFilePaths;

						uni.uploadFile({
							url: config.baseUrl + '/api/member/avatar',
							filePath: tempFilePaths[0],
							name: 'upload_avatar',
							formData: {
								file: tempFilePaths[0],
								token: token
							},
							success: (res) => {


								let data = JSON.parse(res.data);

								if (data.code == 1) {
									that.submit()
									uni.showToast({
										title: this.gengxinchenggong
									})
								}
							}
						})
					}
				});
			},
			submit() {
				this.$request('/api/member/profile', {}, 'post', {}, true).then(res => {

					if (res.code === 1) {
						this.profile = res.data.profile;
						if (this.profile.gender == 0) {
							this.profile.gender = this.weishezhi
						} else if (this.profile.gender == 1) {
							this.profile.gender = this.nan
						} else {
							this.profile.gender = this.nv
						}
					}
				})
			}
		},
		onLoad(e) {
			this.zhenshixingming = this.$lang.zhenshixingming[uni.getStorageSync('lang')];
			this.tuichudenglu = this.$lang.tuichudenglu[uni.getStorageSync('lang')];
			this.gengxinchenggong = this.$lang.gengxinchenggong[uni.getStorageSync('lang')];
			this.shenfenzheng = this.$lang.shenfenzheng[uni.getStorageSync('lang')];
			this.weishezhi = this.$lang.weishezhi[uni.getStorageSync('lang')];
			this.touxiang = this.$lang.touxiang[uni.getStorageSync('lang')];
			this.nicheng = this.$lang.nicheng[uni.getStorageSync('lang')];
			this.xingbie = this.$lang.xingbie[uni.getStorageSync('lang')];
			this.shouji = this.$lang.shouji[uni.getStorageSync('lang')];
			this.youxiang = this.$lang.youxiang[uni.getStorageSync('lang')];
			this.nan = this.$lang.nan[uni.getStorageSync('lang')];
			this.nv = this.$lang.nv[uni.getStorageSync('lang')];
			this.submit()
		},
		onShow() {
			this.zhenshixingming = this.$lang.zhenshixingming[uni.getStorageSync('lang')];
			this.tuichudenglu = this.$lang.tuichudenglu[uni.getStorageSync('lang')];
			this.gengxinchenggong = this.$lang.gengxinchenggong[uni.getStorageSync('lang')];
			this.shenfenzheng = this.$lang.shenfenzheng[uni.getStorageSync('lang')];
			this.weishezhi = this.$lang.weishezhi[uni.getStorageSync('lang')];
			this.touxiang = this.$lang.touxiang[uni.getStorageSync('lang')];
			this.nicheng = this.$lang.nicheng[uni.getStorageSync('lang')];
			this.xingbie = this.$lang.xingbie[uni.getStorageSync('lang')];
			this.shouji = this.$lang.shouji[uni.getStorageSync('lang')];
			this.youxiang = this.$lang.youxiang[uni.getStorageSync('lang')];
			this.nan = this.$lang.nan[uni.getStorageSync('lang')];
			this.nv = this.$lang.nv[uni.getStorageSync('lang')];
			this.submit()
		}
	}
</script>

<style>
	.information-content-bottom button {
		background-color: #63B4D2;
		width: 690rpx;
		height: 84rpx;
		line-height: 84rpx;
		text-align: center;
		color: #EDEDED;
		margin-top: 200rpx;
		font-size: 30rpx;
	}

	.top-item-img-left image {
		width: 80rpx;
		height: 80rpx;
		border-radius: 200rpx;
		margin-top: 16rpx;

	}

	.top-item-img-right image {
		width: 48rpx;
		height: 48rpx;
		margin-top: 30rpx;


	}

	.user-information-top {}

	.information-top-item {
		display: flex;
		justify-content: space-between;
		padding: 0rpx 30rpx;
		border-bottom: 1rpx solid rgba(200, 200, 200, 0.75);
		height: 122rpx;
		line-height: 122rpx;
	}

	.top-item-img {
		display: flex;
		justify-content: flex-start;
	}

	.top-item-txt {

		font-size: 32rpx;
		font-family: PingFangSC-regular;
	}

	.information-top-item1 {
		display: flex;
		justify-content: space-between;
		padding: 0rpx 30rpx;
		border-bottom: 1rpx solid rgba(200, 200, 200, 0.75);
		height: 142rpx;
		line-height: 122rpx;
		border-bottom: 20rpx solid #F9F9F9;
	}

	.top-item-right {
		display: flex;
		justify-content: flex-start;
	}

	.top-item-img-right1 image {
		margin-top: 40rpx;
		width: 48rpx;
		height: 48rpx;
	}

	.top-item-right {
		color: rgba(153, 153, 153, 100);
		font-size: 32rpx;
		margin-right: 0rpx;
		font-family: PingFangSC-regular;
	}

	.information-content-item {
		height: 112rpx;
		line-height: 112rpx;
		border-bottom: 1rpx solid rgba(200, 200, 200, 0.75);
		display: flex;
		justify-content: space-between;
		padding: 0rpx 30rpx;
	}

	.content-item-right {
		color: rgba(153, 153, 153, 100);
		font-size: 32rpx;
		font-family: PingFangSC-regular;
	}
</style>
