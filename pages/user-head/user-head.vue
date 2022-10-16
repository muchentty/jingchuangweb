<template>
	<view class="user-head">
		<view class="user-head-img">
			<image :src="upload_avatar" @click="upload"></image>
		</view>
		<view>
			<button class="btn" @click="submit">{{querenshangchuan}}</button>
		</view>
	</view>
</template>

<script>
	import config from 'utils/config.js'
	export default {
		data() {
			return {querenshangchuan:'',
				upload_avatar: ''
			}
		},
		methods: {
			
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
							header: {
								"token": token
							},
							formData: {
								file: tempFilePaths[0],

							},
							success: (res) => {
								
								
								let data = JSON.parse(res.data);
								
								if (data.code == 1) {
									that.upload_avatar = data.data.data.url;
								}
							}
						})
					}
				});
			}
		}
	}
</script>

<style>
	.user-head {
		height: 100%;
		
	}

	.user-head-img image {
		width: 750rpx;
		height: 750rpx;
		position: absolute;
		top: 404rpx;
		border: 1rpx solid red;
	}

	.hiddenInput {
		border: 1rpx solid yellow;
		height: 1600rpx;
	}

	.btn {
		position: fixed;
		background-color: #63B4D2;
		width: 100%;
		height: 84rpx;
		line-height: 84rpx;
		text-align: center;
		color: #EDEDED;
		bottom: 200rpx;
		font-size: 30rpx;
	}
</style>
