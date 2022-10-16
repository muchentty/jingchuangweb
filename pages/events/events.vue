<template>
	<view class="events">
		<view class="introduce">
			<textarea :placeholder="zuopinjieshao+'....'" maxlength='210' @input='introduce' v-model="introduces"></textarea>
		</view>

		<view class="image">
			<view class="img" v-for="item in picUrl">
				<image :src="item"></image>
			</view>
			<view class="int-img" @click="upload">
				<image src="../../static/ic_image.png"></image>
			</view>
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
			return {zuopinjieshao:'',querenshangchuan:'',
				picUrl: [],
				pics: [],
				id: '',
				introduces: ''
			}
		},
		methods: {
			introduce(e) {
				this.introduces = e.detail.value;
			},
			upload() {
				let that = this
				uni.chooseImage({
					count: 1, 
					success: function(res) {
						const tempFilePaths = res.tempFilePaths; 
						uni.uploadFile({
							url: config.baseUrl+'/api/race/upload_pic', 
							filePath: tempFilePaths[0],
							name: 'pic',
							formData: {
								file: tempFilePaths[0]
							},
							success: (res) => {
								
								
								let data =JSON.parse(res.data);
								
								if(data.code == 1){
									that.picUrl.push(data.data.data.url)
									that.pics.push(data.data.data.pic)
									
									
								}
							}
						})
					}
				});
			},
			submit() {
				this.$request('/api/race/add_works', {
					pics: JSON.stringify(this.pics),
					id: this.id,
					content: this.introduces,
				},'post', {},true).then(res => {

					if (res.data.code == 1) {
						uni.showToast({
							title: res.msg,
							
						})

						
						
						
					} else {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
				})
			},
		},
		onShow(e) {this.zuopinjieshao = this.$lang.zuopinjieshao[uni.getStorageSync('lang')];this.querenshangchuan = this.$lang.querenshangchuan[uni.getStorageSync('lang')];
		},
		onLoad(e) {this.zuopinjieshao = this.$lang.zuopinjieshao[uni.getStorageSync('lang')];this.querenshangchuan = this.$lang.querenshangchuan[uni.getStorageSync('lang')];
			this.id = e.id;
		}
	}
</script>

<style>
	.introduce {
		padding: 22rpx 30rpx;
	}

	.image {
		display: flex;
		flex-wrap: wrap;
	}

	.img {
		width: 160rpx;
		height: 160rpx;
		margin-left: 30rpx;
	}

	.img image {
		width: 100%;
		height: 100%;
	}

	.int-img {
		width: 160rpx;
		height: 160rpx;
		background-color: #e2e2e2;
		text-align: center;
		line-height: 160rpx;
		margin-left: 30rpx;
	}

	.int-img image {
		width: 40rpx;
		height: 40rpx;

	}

	.btn {
		background-color: #63B4D2;
		width: 690rpx;
		height: 84rpx;
		line-height: 84rpx;
		text-align: center;
		color: #EDEDED;
		margin-top: 200rpx;
		font-size: 30rpx;
	}
</style>
