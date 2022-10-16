<template>
	<view class="user-order">
		<view class="user-order-top" v-if="member_id==0">
			<view :class="idx==0?'order-top1':'order-top'" @click="order(0)">
				{{yanpiaoma}}
			</view>
			<view :class="idx==1?'order-top1':'order-top'" @click="order(1)">
				{{yuyue}}
			</view>
		</view>
		<view class="user-order-top" v-if="member_id>0">
			<view class="order-right" @click="order(1)">
				{{yonghuyuyue}}
			</view>
		</view>
		<view class="user-order-bottom-show1" v-if="member_id==0" v-show="index==0">
			<view class="user-order-bottom1">
				<view class="order-bottom-txt">
					{{qingxiangyuyuedanweizhanshigaima}}，{{yibianruchang}}
				</view>
				<view class="order-bottom-img">
					<image :src="activity_list.qr" mode=""></image>
				</view>
			</view>
		</view>
		<view class="user-order-bottom-show2" v-show="index==1">
			<view class="user-order-bottom2">
				<view class="order-bottom2-item" v-for="(item,index) in activity_list.lists">
					<view class="bottom2-item-img">
						<image :src="item.cover"></image>
					</view>
					<view class="bottom2-item-txt">
						<view class="item-txt-title">
							{{item.str}}
						</view>
						<view class="item-txt-time">
							{{item.time}}
						</view>
					</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				qingxiangyuyuedanweizhanshigaima: '',
				yonghuyuyue: '',
				yibianruchang: '',
				yanpiaoma: '',
				yuyue: '',
				index: 0,
				member_id: 0,
				type: 'venue',
				activity_list: [],
				idx: 0
			}
		},
		methods: {
			order(od) {
				this.idx = od
				this.index = od
			}
		},
		onShow(e) {
			this.qingxiangyuyuedanweizhanshigaima = this.$lang.qingxiangyuyuedanweizhanshigaima[uni.getStorageSync(
			'lang')];
			this.yonghuyuyue = this.$lang.yonghuyuyue[uni.getStorageSync('lang')];
			this.yibianruchang = this.$lang.yibianruchang[uni.getStorageSync('lang')];
			this.yanpiaoma = this.$lang.yanpiaoma[uni.getStorageSync('lang')];
			this.yuyue = this.$lang.yuyue[uni.getStorageSync('lang')];
		},
		onLoad(e) {
			this.qingxiangyuyuedanweizhanshigaima = this.$lang.qingxiangyuyuedanweizhanshigaima[uni.getStorageSync(
			'lang')];
			this.yonghuyuyue = this.$lang.yonghuyuyue[uni.getStorageSync('lang')];
			this.yibianruchang = this.$lang.yibianruchang[uni.getStorageSync('lang')];
			this.yanpiaoma = this.$lang.yanpiaoma[uni.getStorageSync('lang')];
			this.yuyue = this.$lang.yuyue[uni.getStorageSync('lang')];
			this.type = e.type
			if (e.member_id) {
				this.member_id = e.member_id
			}

			if (this.member_id) {
				this.index = 1
				let data = JSON.stringify({
					type: this.type,
					member_id: this.member_id
				})
				this.$request('/api/member/check_qr', {
					data: data
				}, 'post', {}, true).then(res => {
					if (res.code == 1) {
						this.activity_list = res.data
					}
				})
			} else {
				this.$request('/api/member/get_activity_list', {
					type: this.type
				}, 'post', {}, true).then(res => {
					if (res.code == 1) {
						this.activity_list = res.data

					}
				})
			}

		}
	}
</script>

<style>
	.user-order-top {
		display: flex;
		justify-content: space-around;
		line-height: 90rpx;
		height: 90rpx;
		width: 100%;
		border: 1rpx solid rgba(200, 200, 200, 0.75);

	}

	.order-top {
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
	}

	.order-top1 {
		color: #007AFF;
		font-size: 28rpx;
		font-family: PingFangSC-regular;
	}

	.order-bottom-txt {
		width: 750rpx;
		height: 40rpx;
		color: rgba(153, 153, 153, 100);
		font-size: 28rpx;
		text-align: center;
		font-family: PingFangSC-regular;
		margin-top: 134rpx;
		margin-bottom: 50rpx;
	}

	.order-bottom-img image {
		/* 	left: 190rpx;
	top: 190rpx; */
		width: 370rpx;
		height: 370rpx;
		margin-left: 190rpx;
	}

	.order-bottom-refresh image {

		width: 32rpx;
		height: 32rpx;
	}

	.order-bottom-refresh text {
		width: 56rpx;
		height: 40rpx;
		margin-left: 10rpx;
		color: rgba(255, 152, 0, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
	}

	.order-bottom-refresh {
		margin-top: 50rpx;
		text-align: center;
	}

	.bottom2-item-img image {
		width: 220rpx;
		height: 116rpx;
		margin-right: 32rpx;
		border-radius: 10rpx;
	}

	.item-txt-title {
		color: #101010;
		font-size: 28rpx;
		margin-bottom: 4rpx;
		font-family: PingFangSC-regular;
	}

	.item-txt-time {
		color: rgba(153, 153, 153, 100);
		font-size: 24rpx;
		font-family: PingFangSC-regular;
	}

	.order-bottom2-item {
		padding: 20rpx 30rpx;
		display: flex;
	}
</style>
