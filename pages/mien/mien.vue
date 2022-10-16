<template>
	<view class="mien">
		<view class="top">
			<view class="district" @click="hierarchy">
				<view>{{quyu}}</view>
				<view class="top_img">
					<image src="../../static/ic_drop-down.png"></image>
				</view>
			</view>
			<view class="district">
				<view></view>
				<view class="top_img">
					
				</view>
			</view>
			<view class="district" style="width: 100rpx;"></view>
		</view>
		<view class="mien-content" v-for="(item,index) in artgroup.lists">
			<view class="mein-content-item" @click="groupdetails(item)">
				<view class="mein-image">
					<image :src="item.cover"></image>
				</view>
				<text class="mein-content-text">{{item.name}}</text>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {quyu:'',tuandui:'',
				artgroup:[],
				title:this.tuandui
			}
		},
		methods: {
			groupdetails(item){
				
				uni.navigateTo({
					url:'../group-details/group-details?id=' + item.id + '&area=' + this.area
				})
			},
			hierarchy(){
				uni.navigateTo({
					url:'../hierarchy/hierarchy?area=' + this.area
				})
			}
		},
		onShow(e) {this.quyu = this.$lang.quyu[uni.getStorageSync('lang')];this.tuandui = this.$lang.tuandui[uni.getStorageSync('lang')];},
		onLoad(e) {this.quyu = this.$lang.quyu[uni.getStorageSync('lang')];this.tuandui = this.$lang.tuandui[uni.getStorageSync('lang')];
			// if(uni.getStorageSync('area')){
			// 	this.area = uni.getStorageSync('area')
			// }
			
			if (e.area == 'undefined' || e.area == undefined || e.area == '' || e.area == null) {
				if (uni.getStorageSync('area')) {
					this.area = uni.getStorageSync('area')
				}
			}else{
				this.area = e.area
				uni.setStorageSync('area',this.area)
			}
			this.$request('/api/artgroup/get_list',{
				area:this.area
			},'post',{}).then(res=>{
				
				if (res.code === 1) {
					this.artgroup = res.data;
					title:res.msg
				}
			})
		}
	}
</script>

<style>
.top {
		display: flex;
		justify-content: space-between;
		 padding: 20rpx 26rpx 20rpx 30rpx; 
		border-bottom:  1rpx solid rgba(200,200,200,0.75);
		border-top: 1rpx solid rgba(200,200,200,0.75);
		margin-bottom: 15rpx;
		
		 
		
	}
	.district {
		display: flex;
		
		
		
	}	
	.top_img {
		width: 20rpx;
		height: 16rpx;
		margin-left: 10rpx;
	}
	.top_img image {
		width: 100%;
		height: 100%;
	}
	
	.mien-content{
		padding: 10rpx 30rpx;
	}
	.mein-content-item{
		width: 690rpx;
		height: 422rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 5rpx 7rpx 0rpx rgba(51, 51, 51, 0.21);
		border-radius: 10rpx;
		
	}
	.mein-image image{
		width: 690rpx;
		height: 344rpx;
		background: #FFFFFF;
		border-radius: 10rpx 10rpx 0rpx 0rpx;
		position: relative;
	}
	.mein-content-text{
		width: 444rpx;
		
		font-size: 28rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;
		
		margin-left: 22rpx;
	}
	/* .category {
		display: inline-block;
	} */
</style>
