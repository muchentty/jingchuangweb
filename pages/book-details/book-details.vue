<template>
	<view class="book-details">
		<view class="book-details-for" v-for="(item,index) in resources">
			<view class="book-details-top">
				<image :src="item.cover" mode=""></image>
			</view>
			<view class="book-details-content" >
				<view class="book-details-main">
					<view class="details-main-title">
						{{item.title}}
					</view>
					<view class="details-main-author">     
						{{item.id}}
					</view>
				</view>
				<view class="solid">
					
				</view>
				<view class="details-content-show">
					<view class="content-show-title">
						{{neirongjianjie}}
					</view>
					<view class="content-show-txt">
						 {{item.description}}
					</view>
				</view>
				<view class="content-show-button" @click="Stories(item)">
					<button type="default">{{lijiyuedu}}</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {neirongjianjie:'',lijiyuedu:'',
				index:0,
				title:'',
				id:'',
				cover:'',
				resources:[],
				pid:''
			}
		},
		methods: {
			Stories(item){
				uni.navigateTo({
					url:'../Stories/Stories?id='+item.id+'&pid='+this.pid
					
				})
			},
			autonym(item){
				uni.navigateTo({
					url:'../autonym/autonym?id='+item.id
				})
			},
			read(e){
				
				this.index==e
			},
			boookdetailsmain(item){
				uni.navigateTo({
					url:'../book-details-mian/book-details-mian?id'+item.id
				})
			}
		},
		onShow(e) {this.neirongjianjie = this.$lang.neirongjianjie[uni.getStorageSync('lang')];this.lijiyuedu = this.$lang.lijiyuedu[uni.getStorageSync('lang')];},
		onLoad(e) {this.neirongjianjie = this.$lang.neirongjianjie[uni.getStorageSync('lang')];this.lijiyuedu = this.$lang.lijiyuedu[uni.getStorageSync('lang')];
			
			this.pid=e.pid
			this.id = e.id
			this.$request('/api/resources/view',{
				id:this.id,
				cover:'',
				resources:[]
			},'post',{}).then(res=>{
				
				if(res.code==1){
					
					this.resources=res.data
				}
			})
		}
	}
</script>

<style>
	/* .book-details{
		height: 100%;
		background-color:#FFFFFF ;
	} */
	.content-show-txt{
		text-indent: 40rpx;
		line-height: 50rpx;
	}
	.content-show-button button{
		width: 100%;
		height: 90rpx;
		position: relative;
		top: 350rpx;
		color: #FFFFFF;
		background-color: rgba(99, 180, 210, 100);
	}
	.book-details-main,.details-content-show{
		padding: 0rpx 30rpx;
	}
	.details-main-title{
		padding-top: 32rpx;
		color: rgba(16, 16, 16, 100);
		font-family: PingFangSC-regular;
	}
	.content-show-title{
		color: rgba(16, 16, 16, 100);
		font-size: 32rpx;
		margin-bottom: 20rpx;
		font-family: PingFangSC-regular;
	}
	.details-main-author{
		color: rgba(102, 102, 102, 100);
		font-size: 24rpx;
		font-family: PingFangSC-regular;
		margin-bottom: 24rpx;
	}
	.solid{
		height: 20rpx;
		width: 100%;
		margin-bottom: 26rpx;
		background-color:rgba(247, 247, 247, 100); ;
	}
.book-details-top image{
	width: 750rpx;
	height: 428rpx;
}
.book-details{
	height: 100%;
	background-color:#F9F9F9 ;
}
.book-details-content{
	height: 100%;
	width: 100%;
	line-height: 40rpx;
	border-radius: 30rpx 30rpx 0px 0px;
	
	background-color:#FFFFFF ;
	position: absolute;
	top: 360rpx;
	
}
.book-details-item{
	border-bottom: 1rpx solid rgba(200,200,200,0.75);
	padding:26rpx 0rpx 18rpx 0rpx ;
}
.book-details-item1{
	padding:26rpx 0rpx 28rpx 0rpx ;
}
</style>
