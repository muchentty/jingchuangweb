<template>
	<view>
		<router></router>
		<view class="all">
			<view class="body_content">
				<view class="all-address">
					您所在的位置：首页>{{name}}
				</view>
			</view>
			<view class="all-content">
				<view class="content-item" v-for="items in race.lists">
					<view class="item-left">
						<view class="item-left-img">
							<image :src="items.cover" mode=""></image>
						</view>
					</view>
					<view class="item-right">
						<view class="item-right-title">
							{{items.title}}
						</view>
						<!-- <view class="item-right-number">
							<text>地点：</text>
							<text>深圳市宝安区西乡街道</text>
						</view> -->
						<view class="item-right-time">
							<text>时间</text>
							<text>{{items.start_time}}-{{items.end_time}}</text>
						</view>
						<view class="item-right-bottom">
							<view class="item-right-bottom-left">
								
							</view>
							<view class="item-right-bottom-right"  @click="participation(items)">
								<button type="default">立即参与</button>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<bottom></bottom>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:'',
				race: [],
				area:'1',
			}
		},
		methods: {
			participation(item){
				uni.navigateTo({
					url:'../Event-participation-details/Event-participation-details?id=' + item.id + '&name=' + this.name
				})
			}
		},
		onLoad(e){
			this.name = e.name
			if (e.area == 'undefined' || e.area == undefined || e.area == '' || e.area == null) {
				if (uni.getStorageSync('area')) {
					this.area = uni.getStorageSync('area')
				}
			}else{
				this.area = e.area
			}
			this.$request('/api/race/get_list',{
				area: this.area,
			},'post',{}).then(res=>{
				
				if (res.code === 1) {
					this.race = res.data;
					console.log(this.race)
				}
			})
		}
	}
</script>


<style>
	.item-right-bottom-right{
		width: 100%;
		height: 48rpx;
		display: flex;
		justify-content: space-between;
		margin-top: 20rpx;
	}
	.item-right-bottom-right button{
		margin-right: 0rpx;
		width: 120rpx;
		height: 48rpx;
		color: #FFFFFF;
		background-color: #CF282B;
		margin-right: 10px;
	}
	.item-right-title {
		margin-top: 10rpx;
		font-size: 24rpx;
		margin-left: 20rpx;
	}

	.item-right-number {
		margin-left: 20rpx;
		font-size: 18rpx;
		color: rgba(200, 200, 200, 0.75);
	}

	.item-right-time {
		margin-left: 20rpx;
		font-size: 18rpx;
		color: rgba(200, 200, 200, 0.75);
	}

	.all {
		width: 100%;
		margin: auto;
		padding: 0rpx 170rpx;
	}

	.all-content {
		margin-top: 30rpx;
		padding: 0rpx 170rpx;
		display: flex;
		flex-wrap: wrap;
		width: 100%;
	}

	.item-left-img image {
		width: 346rpx;
		height: 233rpx;
		/* border: 1rpx solid red; */
		margin-top: 10rpx;
		margin-left: 15rpx;
	}

	.content-item {
		width: 383rpx;
		height: 400rpx;
		/* margin-right: 10rpx; */
		/* margin-left: 20rpx; */
		margin-bottom: 20rpx;
		margin-right: 20rpx;
		padding-bottom: 10px;
		border: 1rpx solid rgba(200, 200, 200, 0.75);
	}

	.bottom-right image {
		width: 100rpx;
		height: 100rpx;
	}

	.bottom-right {
		display: flex;
		margin-top: 30rpx;
	}

	.all-bottom {
		background: #CF282B;
		padding: 0rpx 340rpx;
		height: 160rpx;
		display: flex;
		justify-content: space-between;
	}

	.bottom-left text {
		font-size: 20rpx;
		color: #FFFFFF;
		margin-top: 50rpx;
	}

	.bottom-left {
		margin-top: 40rpx;
	}

	.bottom-right-left {

		margin-right: 40rpx;
	}

	.all-address {
		width: 1200rpx;
		margin-left: 170rpx;
		/* border: 1rpx solid red; */
		padding-top: 50rpx;
		font-size: 20rpx;
	}

	.type-item {
		display: flex;

	}

	.type-item-right {
		display: flex;
	}

	.all-type {
		width: 1100rpx;
		height: 83rpx;
		line-height: 83rpx;
		border: 1rpx solid rgba(200, 200, 200, 0.75);
		margin-top: 40rpx;
		background-color: #FFFFFF;
		margin-left: 200rpx;
		border-radius: 5rpx;
	}

	.type-item-left {
		width: 120rpx;
		color: #C93F49;
		font-weight: bold;
		height: 38rpx;
		font-size: 24rpx;
		text-indent: 15rpx;
		margin-left: 30rpx;
	}

	.type-item-right {
		font-size: 18rpx;
		color: #666666;
		height: 24rpx;
		cursor: pointer;
		float: left;
		padding: 0 14rpx;
		margin: 6rpx 7rpx 6rpx 0;
	}

	.right-item1 {
		margin-left: 60rpx;
	}

	.all-select {
		width: 1100rpx;
		height: 66rpx;
		border: 1rpx solid rgba(200, 200, 200, 0.75);
		margin-left: 200rpx;
		margin-top: 30rpx;
		display: flex;
		justify-content: space-between;
		background-color: #FFFFFF;
		border-radius: 5rpx;
	}

	.all-select-right {
		width: 357rpx;
		height: 44rpx;
		display: flex;
		justify-content: space-between;
		border: 1rpx solid rgba(200, 200, 200, 0.75);
		border-radius: 22rpx;
		margin-top: 10rpx;
		margin-right: 20rpx;
	}

	.all-select input {
		width: 250rpx;
		height: 44rpx;
		font-size: 18rpx;
		text-indent: 40rpx;
	}

	.select-img image {
		width: 26rpx;
		height: 26rpx;
		margin-right: 20rpx;
		margin-top: 10rpx;
	}
</style>
