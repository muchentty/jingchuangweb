<template>
	<view class="user-collection">
		<view class="user-collection-top">
			<view :class="idx==0?'collection-top-item':'collection-top-item1'" @click="collection(0)">
				{{ziyuan}}
			</view>
			<view :class="idx==1?'collection-top-item':'collection-top-item1'" @click="collection(1)">
				{{saishi}}
			</view>
		</view>
		<view class="user-collection-content">
			<view class="collection-content-item1">
				<view class="content-item1" v-for="(item,index) in lists">
					<view class="content-item1-left"  @click="bookdetails(item)">
						<view class="content-item1-img">
							<image :src="item.cover"></image>
						</view>
						<view class="content-item1-txt">
							<text class="content-item1-title">{{item.title}}</text>
							<br/>
						</view>
					</view>
					<view class="content-item1-right">
						<button type="default" @click="cancel(item.id)">{{quxiaoshoucang}}</button>
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {quxiaoshoucang:'取消',ziyuan:'书籍',saishi:'赛事',
				index:0,
				lists:[],
				idx:0
			}
		},
		methods: {
			collection(cl){
				this.idx=cl
				this.index=cl
				let type = cl==0?'resources':'race';
				this.$request('/api/member/collection_list', {type:type}, 'post', {}, true).then(res => {
				
					if (res.code == 1) {
						this.lists = res.data.lists;
				
					} 
				})
			},
			bookdetails(item){
				if(this.index == 1){
					uni.navigateTo({
						url:'../participation-details/participation-details?id='+item.id
					})
				}else{
					uni.navigateTo({
						url:'../book-details/book-details?id='+item.id+'&pid='+item.cate_id
					})
				}
				
			},
			cancel(id){
				let type = this.index==0?'resources':'race';
				this.$request('/api/member/collection', {type:type,id:id,'do':'del'}, 'post', {}, true).then(res => {
					uni.showToast({
						title: res.msg,
						icon: 'none'
					})
					if (res.code == 1) {
						this.$request('/api/member/collection_list', {type:type}, 'post', {}, true).then(res => {
							if (res.code == 1) {
								this.lists = res.data.lists;
							} 
						})
				
					} 
				})
			}
		},
		onShow(){
			let type = this.index==0?'resources':'race';
			this.$request('/api/member/collection_list', {type:type}, 'post', {}, true).then(res => {
			
				if (res.code == 1) {
					this.lists = res.data.lists;
			
				} 
			})
		}
	}
</script>

<style>
.user-collection-top{
	display: flex;
	justify-content: space-around;
	padding: 28rpx 30rpx 22rpx 30rpx;
	border-bottom: 1rpx solid rgba(200,200,200,0.75);
	
}
.collection-top-item{
	color: #007AFF;
	font-size: 28rpx;
	font-family: PingFangSC-regular;
}
.collection-top-item1{
	color: #101010;
	font-size: 28rpx;
	font-family: PingFangSC-regular;
}
.content-item1-img image{
	width: 60rpx;
	height: 60rpx;
	border-radius: 10rpx;
	margin-top: 20rpx;
	margin-bottom: 20rpx;
}
.collection-content-item1{
	padding: 0rpx 30rpx;
}
.content-item1{
	display: flex;
	justify-content: space-between;
	border-bottom: 1rpx solid rgba(200,200,200,0.75);
	padding: 0rpx 30rpx;
	height: 106rpx;
	
	
}
.content-item1-left{
	display: flex;
	justify-content: flex-start;
}
.content-item1-txt{
	margin-top: 30rpx;
	margin-left: 12rpx;
}
.content-item1-title{
	color: rgba(16, 16, 16, 100);
	font-size: 26rpx;
	font-family: PingFangSC-regular;
}
.content-item1-author{
	color: rgba(102, 102, 102, 100);
	font-size: 20rpx;
	font-family: PingFangSC-regular;

}
.content-item1-right button{
	width: 120rpx;
	height: 40rpx;
	line-height: 40rpx;
	border-radius: 10rpx;
	color: rgba(84, 151, 203, 100);
	font-size: 24rpx;
	text-align: center;
	font-family: Arial;
	border: 1px solid rgba(84, 151, 203, 100);
	margin-top: 36rpx;
}
</style>
