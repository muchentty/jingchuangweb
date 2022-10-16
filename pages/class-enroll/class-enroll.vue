<template>
	<view class="Programmebookingds">
		<view class="subscribe-top">
			<view class="subscribe-top-item">
				<text>{{yuyueren}}</text>
				<view class="subscribe-top-item-input">
					<input type="text" v-model="person" @input="persons" :placeholder="qingtianxieyuyueren" />
					<image class="subscribe_right" src="../../static/ic_ri.png"></image>
				</view>
			</view>
			<view class="solid">

			</view>
			<view class="subscribe-top-item">
				<text>{{lianxifangshi}}</text>
				<view class="subscribe-top-item-input">
					<input type="text" v-model="phone" @input="phones" :placeholder="qingtianxielianxidianhua" />
					<image class="subscribe_right" src="../../static/ic_ri.png"></image>
				</view>
			</view>
			<view class="solid">

			</view>
			<view class="subscribe-top-item">
				<text>{{shenfenzhenghao}}</text>
				<view class="subscribe-top-item-input">
					<input type="text" v-model="numberPer" @input="numberPerson" :placeholder="qingtianxieshenfenzhenghao" />
					<image class="subscribe_right" src="../../static/ic_ri.png"></image>
				</view>
			</view>
		</view>
		<view class="subscribe-buttom">
			<view class="subscribe-buttom-alert">
				<view class="subscribe-buttom-alert1"></view>
				<text class="subscribe-buttom-alert2">{{qingrushitianxieyuyuexinxi}}</text>
			</view>
			<view class="subscribe-buttom-button" @click="gottickets">
				<text>确认学习</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {qingrushitianxieyuyuexinxi:'',qingtianxielianxidianhua:'',qingtianxieshenfenzhenghao:'',qingtianxieyuyueren:'',lianxifangshi:'',shenfenzhenghao:'',querenyuyue:'',yuyueren:'',
				id: '',
				person: '',
				numberPer: '',
				phone: ''
			}
		},
		methods: {
			gottickets() {
				this.$request('/api/culture/ordered',{
					culture_id: this.id,
					name: this.person,
					tel: this.phone,
					person_id: this.numberPer
				}, 'post', {},true).then(res => {
					
					if (res.code ==1) {
						uni.showToast({
							title: '预约成功',
							icon: 'none'
						})
						uni.redirectTo({
							url: '../classroom/classroom'
						})
					} else {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
				})
			},
			persons(e) {
				this.person = e.detail.value;
			},
			numberPerson(e) {
				this.numberPer = e.detail.value;
			},
			phones(e) {
				this.phone = e.detail.value;
			},
		},
		onShow(e) {this.qingrushitianxieyuyuexinxi = this.$lang.qingrushitianxieyuyuexinxi[uni.getStorageSync('lang')];this.qingtianxielianxidianhua = this.$lang.qingtianxielianxidianhua[uni.getStorageSync('lang')];this.qingtianxieshenfenzhenghao = this.$lang.qingtianxieshenfenzhenghao[uni.getStorageSync('lang')];this.qingtianxieyuyueren = this.$lang.qingtianxieyuyueren[uni.getStorageSync('lang')];this.lianxifangshi = this.$lang.lianxifangshi[uni.getStorageSync('lang')];this.shenfenzhenghao = this.$lang.shenfenzhenghao[uni.getStorageSync('lang')];this.querenyuyue = this.$lang.querenyuyue[uni.getStorageSync('lang')];this.yuyueren = this.$lang.yuyueren[uni.getStorageSync('lang')];},
		onLoad(e) {this.qingrushitianxieyuyuexinxi = this.$lang.qingrushitianxieyuyuexinxi[uni.getStorageSync('lang')];this.qingtianxielianxidianhua = this.$lang.qingtianxielianxidianhua[uni.getStorageSync('lang')];this.qingtianxieshenfenzhenghao = this.$lang.qingtianxieshenfenzhenghao[uni.getStorageSync('lang')];this.qingtianxieyuyueren = this.$lang.qingtianxieyuyueren[uni.getStorageSync('lang')];this.lianxifangshi = this.$lang.lianxifangshi[uni.getStorageSync('lang')];this.shenfenzhenghao = this.$lang.shenfenzhenghao[uni.getStorageSync('lang')];this.querenyuyue = this.$lang.querenyuyue[uni.getStorageSync('lang')];this.yuyueren = this.$lang.yuyueren[uni.getStorageSync('lang')];
			this.id = e.id
		}
	}
</script>

<style>
	.Programmebookingds {
		height: 1334rpx;
	}

	.subscribe-top {
		padding: 0rpx 30rpx;
	}

	.subscribe-top-item {
		display: flex;
		justify-content: space-between;
		padding: 30rpx 0rpx;
		
		
	}

	.subscribe-top-item-input {
		display: flex;
		align-items: center;
	}

	.subscribe-top-item-input input {
		text-align: right;
	}

	.subscribe_right {
		width: 38rpx;
		height: 38rpx;
		margin-left: 5rpx;
	}

	.solid {
		width: 690rpx;
		height: 1rpx;
		background: #333333;
		opacity: 0.15;
	}

	.subscribe-buttom {
		width: 750rpx;
		height: 100%;
		background: #F7F7F7;
	}

	.subscribe-buttom-alert {
		display: flex;
	}

	.subscribe-buttom-alert1 {
		width: 10rpx;
		height: 10rpx;
		background: #FF4E5A;
		border-radius: 50%;
		margin-left: 30rpx;
		margin-top: 37rpx;
	}

	.subscribe-buttom-alert2 {
		width: 216rpx;
		height: 24rpx;
		font-size: 24rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #999999;
		line-height: 36rpx;
		margin-left: 14rpx;
		margin-top: 20rpx;
	}

	.subscribe-buttom-button {
		width: 590rpx;
		height: 80rpx;
		background: #FF4E5A;
		border-radius: 40rpx;
		text-align: center;
		position: absolute;
		
		top: 50%;
		left: 80rpx;
	}

	.subscribe-buttom-button text {
		width: 142rpx;
		
		font-size: 36rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #FFFFFF;
		
		padding: 23rpx;
		position: relative;
		top: 12rpx;
	}
</style>
