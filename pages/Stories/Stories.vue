<template>
	<view class="Stories">

		<view class="Stories-content-item" v-show="index==0">
			<view class="content-item-txt-all" v-for="(item,index) in StoriesList">
				<view >
					<view :class="qiehuan==index?'content-item-txt1':'content-item-txt'" @click="Storiesdetails(index)">
						<text>{{index+1}})：{{item.name}}</text>
					</view>
				</view>
			</view>

		</view>
		<view class="Stories-content-item" v-show="index==1">
		</view>

		<view class="Stories-bottom">
			<view :class="touming==0? 'Stories-bottom-mulu':'Stories-bottom-mulu1'" @click="mulu(0)">
				<view class="Stories-bottom-mulu-img">
					<image src="../../static/mulu.png" mode=""></image>
				</view>
				<text>{{mulu}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {mulu:'',
				qiehuan:0,
				touming:0,
				index: 0,
				
				StoriesList: [],
				total: '',
				id: '',
				touchNum : 0
			}
		},
		methods: {
			mulu(ml) {
				this.touming=this.index
				this.index = ml
			},
			
			
			
			
			
			Storiesdetails(index) {
				this.qiehuan=index
				
				
				
				if(this.pid==1){
					uni.navigateTo({
						url: '../Stories1/Stories1?id=' + this.id + '&index=' + (index)+'&url='+this.StoriesList[index].url
					})
				}else if(this.pid==2){
					
					uni.navigateTo({
						url: '../Stories-video/Stories-video?id=' + this.id + '&index=' + (index)
					})
				}else if(this.pid==3){
					
					uni.navigateTo({
						url: '../Stories-video/Stories-video?id=' + this.id + '&index=' + (index)
					})
				}
			}
		},
		onShow(e) {this.mulu = this.$lang.mulu[uni.getStorageSync('lang')];},
		onLoad(e) {this.mulu = this.$lang.mulu[uni.getStorageSync('lang')];
			this.pid=e.pid
			this.id = e.id
			this.$request('/api/resources/view', {
				id: this.id,
				cover: '',
				resources: []
			}, 'post', {}).then(res => {
				if (res.code == 1) {
					
					this.resources = res.data
					
					this.StoriesList = res.data.resources.data
				}
			})
			
		}
	}
</script>

<style>
	/* .Stories{
		height: 100%;
		width: 100%;
		border: 1rpx;
	} */
	.Stories-content-item {
		
		padding: 30rpx 30rpx;
		
	}

	.Stories-content {
		padding: 0rpx 30rpx;
		height: 100%;
	}

	.Stories-content-title {
		margin-top: 22rpx;
		margin-bottom: 22rpx;
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
	}

	.Stories-content-txt {
		line-height: 50rpx;
		text-indent: 40rpx;
		color: #FFFFFF;
		font-size: 28rpx;
		font-family: PingFangSC-regular;
	}
	.content-item-txt1{
		color: #63B4D2;
	}
	.content-item-txt{
		color: #2B333F;
	}
	.Stories-bottom-mulu image {
		width: 48rpx;
		height: 48rpx;
	}
.Stories-bottom-mulu1 image {
		width: 48rpx;
		height: 48rpx;
	}
	.Stories-bottom-mulu1 {
		
		width: 200rpx;
		text-align: center;
	}
	.Stories-bottom-mulu{
		text-align: center;
		width: 200rpx;
		opacity: 0.5;
	}
	.Stories-bottom {
		width: 100%;
		display: flex;
		justify-content: space-around;
		border-top: 1rpx solid rgba(200,200,200,0.75);
		position: fixed;
		bottom: 0;
		padding: 10rpx 0rpx;
	}
</style>