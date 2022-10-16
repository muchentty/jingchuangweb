<template>
	<view class="uer-edit-name">
		<view class="edit-name-top">
			<view class="name-top-left">
				{{nicheng}}
			</view>
			<view class="name-top-right">
				<input type="text" v-model="profile.nickname" @input="nickName" placeholder="" />

			</view>
		</view>
		<view class="edit-name-bottom">
			{{changdu}}12/18{{zifu}}
		</view>
		<view class="edit-name-bottom-button">
			<button type="default" @click="submit">{{queding}}</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nichengchangdubuguifan: '',
				qingzhongxinshuru: '',
				xiugaichenggong: '',
				nicheng: '',
				changdu: '',
				zifu: '',
				queding: '',
				profile: [],
			}
		},



		methods: {
			nickName(e) {

				this.profile.nickname = e.detail.value;

			},
			submit() {
				if (this.profile.nickname.length < 1) {
					uni.showToast({
						title: this.nichengchangdubuguifan + '，' + this.qingzhongxinshuru,
						icon: 'none'
					})
				} else {
					this.$request('/api/member/update_profile', {
						nickname: this.profile.nickname
					}, 'post', {}, true).then(res => {
						if (res.code == 1) {
							uni.redirectTo({
								url: '../user-information/user-information'
							})
						} else {
							uni.showToast({
								title: res.msg
							})
						}
					})
				}
			}
		},
		onShow(e) {
			this.nichengchangdubuguifan = this.$lang.nichengchangdubuguifan[uni.getStorageSync('lang')];
			this.qingzhongxinshuru = this.$lang.qingzhongxinshuru[uni.getStorageSync('lang')];
			this.xiugaichenggong = this.$lang.xiugaichenggong[uni.getStorageSync('lang')];
			this.nicheng = this.$lang.nicheng[uni.getStorageSync('lang')];
			this.changdu = this.$lang.changdu[uni.getStorageSync('lang')];
			this.zifu = this.$lang.zifu[uni.getStorageSync('lang')];
			this.queding = this.$lang.queding[uni.getStorageSync('lang')];
		},
		onLoad(e) {
			this.nichengchangdubuguifan = this.$lang.nichengchangdubuguifan[uni.getStorageSync('lang')];
			this.qingzhongxinshuru = this.$lang.qingzhongxinshuru[uni.getStorageSync('lang')];
			this.xiugaichenggong = this.$lang.xiugaichenggong[uni.getStorageSync('lang')];
			this.nicheng = this.$lang.nicheng[uni.getStorageSync('lang')];
			this.changdu = this.$lang.changdu[uni.getStorageSync('lang')];
			this.zifu = this.$lang.zifu[uni.getStorageSync('lang')];
			this.queding = this.$lang.queding[uni.getStorageSync('lang')];
			this.$request('/api/member/profile', {}, 'post', {}, true).then(res => {

				if (res.code == 1) {
					this.profile = res.data.profile;

				}
			})
		}

	}
</script>

<style>
	.edit-name-bottom-button button {
		background-color: #63B4D2;
		width: 690rpx;
		height: 84rpx;
		line-height: 84rpx;
		text-align: center;
		color: #EDEDED;
		margin-top: 400rpx;
		font-size: 30rpx;

	}

	.uer-edit-name {
		height: 100%;
		background-color: #F9F9F9;
	}

	.edit-name-top {
		width: 750rpx;
		height: 112rpx;
		line-height: 112rpx;

		display: flex;
		justify-content: space-between;
		padding: 0rpx 30rpx;
		background-color: #FFFFFF;
	}

	.name-top-left {
		color: rgba(28, 34, 42, 100);
		font-size: 32rpx;
		font-family: PingFangSC-regular;
	}

	.name-top-right input {
		color: rgba(153, 153, 153, 100);
		font-size: 32rpx;
		font-family: PingFangSC-regular;
		height: 112rpx;
		line-height: 112rpx;
		width: 300rpx;

		text-align: right;
	}

	.edit-name-bottom {
		/* width: 92px;
	height: 20px; */
		color: rgba(198, 201, 204, 100);
		font-size: 28rpx;
		text-align: right;
		margin-top: 20rpx;
		padding: 0rpx 30rpx;
		font-family: PingFangSC-regular;
	}
</style>
