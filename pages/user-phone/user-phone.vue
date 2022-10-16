<template>
	<view class="user-phone">
		<view class="user-paddword-top">
				<view class="paddword-top-item">
					<view class="top-item-left">
						{{jiushoujihao}}
					</view>
					<view class="top-item-right">
						{{profile.mobile}}
					</view>
				</view>
				<view class="solid">
					
				</view>
				<view class="paddword-top-item">
					<view class="top-item-left">
						{{xinshoujihao}}
					</view>
					<view class="top-item-right">
						<input type="text" value="" :placeholder="qingshuruxindeshoujihao" />
					</view>
				</view>
				<view class="solidsmall">
					
				</view>
				<view class="paddword-top-item">
					<view class="top-item-left">
						{{shoujiyanzheng}}
					</view>
					<view class="paddword-display">
						<view class="top-item-right">
							<input type="text" value="" :placeholder="qingshuruyanzhengma" />
						</view>
						<view class="top-item-yanzheng">
							{{fasongyanzhengma}}
						</view>
					</view>
				</view>
			</view>
		<view class="user-paddword-bottom">
			<button type="default">{{queren}}</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {qingshuruxindeshoujihao:'',qingshuruyanzhengma:'',fasongyanzhengma:'',jiushoujihao:'',xinshoujihao:'',shoujiyanzheng:'',weishezhi:'',queren:'',nan:'',nv:'',
				profile:[],
			}
		},
		methods: {
			
		},
		onLoad(e) {this.qingshuruxindeshoujihao = this.$lang.qingshuruxindeshoujihao[uni.getStorageSync('lang')];this.qingshuruyanzhengma = this.$lang.qingshuruyanzhengma[uni.getStorageSync('lang')];this.fasongyanzhengma = this.$lang.fasongyanzhengma[uni.getStorageSync('lang')];this.jiushoujihao = this.$lang.jiushoujihao[uni.getStorageSync('lang')];this.xinshoujihao = this.$lang.xinshoujihao[uni.getStorageSync('lang')];this.shoujiyanzheng = this.$lang.shoujiyanzheng[uni.getStorageSync('lang')];this.weishezhi = this.$lang.weishezhi[uni.getStorageSync('lang')];this.queren = this.$lang.queren[uni.getStorageSync('lang')];this.nan = this.$lang.nan[uni.getStorageSync('lang')];this.nv = this.$lang.nv[uni.getStorageSync('lang')];

		},
		onShow(){
			this.qingshuruxindeshoujihao = this.$lang.qingshuruxindeshoujihao[uni.getStorageSync('lang')];this.qingshuruyanzhengma = this.$lang.qingshuruyanzhengma[uni.getStorageSync('lang')];this.fasongyanzhengma = this.$lang.fasongyanzhengma[uni.getStorageSync('lang')];this.jiushoujihao = this.$lang.jiushoujihao[uni.getStorageSync('lang')];this.xinshoujihao = this.$lang.xinshoujihao[uni.getStorageSync('lang')];this.shoujiyanzheng = this.$lang.shoujiyanzheng[uni.getStorageSync('lang')];this.weishezhi = this.$lang.weishezhi[uni.getStorageSync('lang')];this.queren = this.$lang.queren[uni.getStorageSync('lang')];this.nan = this.$lang.nan[uni.getStorageSync('lang')];this.nv = this.$lang.nv[uni.getStorageSync('lang')];
			this.$request('/api/member/profile',{
			},'post',{},true).then(res=>{	
				if (res.data.code === 1) {
					this.profile = res.data.data.profile;
					if(this.profile.gender==0){
						this.profile.gender=this.weishezhi
					}
					else if(this.profile.gender==1)
					{
						this.profile.gender=this.nan
					}else{
						this.profile.gender=this.nv
					}
				}
			}
		);
		}
	}
</script>

<style>
.solid{
		height: 20rpx;
		width: 100%;
		background-color: #F9F9F9;
	}
	.solidsmall{
		height: 1rpx;
		width: 100%;
		background-color: rgba(200,200,200,0.75);
	}
	.user-phone{
		background-color: #F5F5F5 ;
		height: 100%;
	}
.paddword-top-item{
	display: flex;
	justify-content: space-between;
	height: 112rpx;
	line-height: 112rpx;
	padding: 0rpx 30rpx;
	background-color:#FFFFFF;
}
.top-item-left{
	color: rgba(28, 34, 42, 100);
	font-size: 32rpx;
	font-family: PingFangSC-regular;
}
.top-item-right{
	color: rgba(153, 153, 153, 100);
	font-size: 32rpx;
	font-family: PingFangSC-regular;
	right: 0;
}
.top-item-right input{
	width: 270rpx;
	height: 112rpx;
	line-height: 112rpx;
	text-align: right;
	
}
.user-paddword-bottom button{
	position: fixed;
	bottom: 500rpx;
	height: 84rpx;
	width: 100%;
	background-color: rgba(99, 180, 210, 100);
	color: rgba(255, 255, 255, 100);
	font-size: 36rpx;
	text-align: center;
	font-family: Arial;
}
.top-item-yanzheng{
	width: 180rpx;
	height: 72rpx;
	line-height: 72rpx;
	
	background-color: rgba(255, 152, 0, 100);
	text-align: center;
	color: rgba(255, 255, 255, 100);
	font-size: 28rpx;
	margin-top: 20rpx;
	margin-left: 18rpx;
}
.paddword-display{
	display: flex;
}
</style>
