<template>
	<view class="leader">
		<view class="board" v-for="items in activity.lists" @click="leader(items)">
			<view class="board-img">
				<image :src="items.cover"></image>
			</view>
			<view class="top">TOP{{items.sort}}</view>
			<view class="wenzi">
				<view>{{items.title}}</view>
				<view class="time">{{items.start_time}} - {{items.end_time}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activity:[]
			}
		},
		methods: {
			leader(item){
				uni.navigateTo({
					url:'../activity-details/activity-details?id=' +item.id
				})
			}
		},
		onLoad(){
			this.$request('/api/activity/get_rank',{
				
			},'post',{}).then(res=>{
				
				if (res.code === 1) {
					this.activity = res.data;
				}
			})
		}
	}
</script>

<style>
	.board {
		display: flex;
	}

	.board {
		padding: 30rpx;
		position: relative;
	}

	.board-img {
		width: 220rpx;
		height: 220rpx;
		background-color: #EEEEEE;

	}

	.board-img image {
		width: 100%;
		height: 100%;
		border-radius: 10rpx;
	}

	.top {
		position: absolute;
		top: 30rpx;
		left: 30rpx;
		width: 84rpx;
		height: 40rpx;
		background-color: #FF7F22;
		text-align: center;
		line-height: 40rpx;
		color: #FFFAE7;
	}

	.wenzi {
		margin-left: 18rpx;
		font-size: 28rpx;
	}

	.time {
		margin-top: 8rpx;
		font-size: 24rpx;
		color: #999999;
	}
</style>
