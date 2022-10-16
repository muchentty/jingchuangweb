<template>
	<view class="participation-details">
		<view class="participation-details-top">
			<view :class="index==0?'participation-details-top-txt':'participation-details-top-txts'" @click="details(0)">{{saishixiangqing}}</view>
			<view :class="index==1?'participation-details-top-txt':'participation-details-top-txts'" @click="details(1)">{{saishizuopin}}</view>
			<view :class="index==2?'participation-details-top-txt':'participation-details-top-txts'" @click="details(2)">{{zuixinpaiming}}</view>
		</view>
		<view class="participation-details-show" v-show="index==0">
			<view class="participation-details-img">
				<image :src="race.race.cover"></image>
			</view>
			<view class="participation-details-content">
				<view class="participation-details-content-item">
					<view class="content-item-title">{{race.race.title}}</view>
					<view class="content-item-types">
						{{leixing}}：{{race.race.category}}
					</view>
					<view class="content-item-times">
						{{saishishijian}}：{{race.race.start_time}}{{dao}}{{race.race.end_time}}
					</view>
					<view class="content-item-details">
						<view class="content-item-details-title">
							{{saishixiangqing}}：
						</view>
						<view class="content-item-details-txt">{{race.race.description}}</view>
					</view>
					<view class="content-item-mian">
						<view class="content-item-main-title">
							{{saishineirong}}：
						</view>
						<view class="content-item-main-txt" v-html="race.race.description"></view>
					</view>
				</view>
			</view>
			<view class="participation-details-bottom">
				<view class="participation-details-bottom-item">
					<view class="bottom-item1">
						<view class="bottom-item1-img">
							<image src="../../static/ic_eys.png" mode=""></image>
							<text>{{race.race.views}}</text>
						</view>
					</view>
					<view class="bottom-item2">
						<view class="bottom-item2-img" @click="digg(race.race.area_id)" style="display: flex;align-items: center;">
							<view v-if="race.race.is_digg==0">
								<image src="../../static/ic_fabulous.png"></image>
							</view>
							<view v-if="race.race.is_digg==1">
								<image src="../../static/ic_fabulousa.png"></image>
							</view>
							<text style="margin-top: 20rpx;">{{race.race.digg}}</text>
						</view>
					</view>
					<view class="bottom-item3">
						<view class="bottom-item3-img"  @click="collection(race.race.area_id)" >
							<view v-if="race.race.is_collection==0">
								<image src="../../static/ic_Collection.png"></image>
							</view>
							<view v-if="race.race.is_collection==1">
								<image src="../../static/ic_Collectiona.png"></image>
							</view>
						</view>
					</view>
					<view class="bottom-button" @click="events">
						<button type="default">{{canyusaishi}}</button>
					</view>
				</view>
			</view>
		</view>
		<view class="participation-details-show" v-show="index==1">
			<view class="participation-details-entries">
				<view class="details-entries-item" @click="participationpd(items)" v-for="items in worksList.lists">
					<view class="entries-item-img">
						<image :src="items.pics[0]"></image>
					</view>
					<view class="entries-item-txt">
						<br />
						<text class="entries-item-txt-main">{{items.content}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="participation-details-show" v-show="index==2">
			<view class="participation-details-ranking">
				<view class="details-ranking-item" @click="participationpd(items)" v-for="(items,index) in worksRank.lists">
					<view class="ranking-item-img">
						<image :src="items.pics[0]">
							
						</image>
						<text >NO.{{index+1}}</text>
					</view>
					<view class="ranking-item-txt">
						<text class="ranking-item-txt-title">
							{{items.content}}
						</text>

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
			return {saishixiangqing:'',saishizuopin:'',zuixinpaiming:'',saishishijian:'',saishixiangqing:'',saishineirong:'',canyusaishi:'',leixing:'',dao:'',
				index: 0,
				id:'',
				race:[],
				worksList:[],
				worksRank:[]
			}
		},
		methods: {
			details(dt) {
				this.index = dt
			},
			events(){
				this.$checkToken(true).then(res=>{
					uni.navigateTo({
						url:'../events/events?id=' + this.id
					})
				})
				
			},
			participationpd(item){
				uni.navigateTo({
					url:'../participation-Production-details/participation-Production-details?id=' + item.id
				})
			},
			
			digg(id){
				this.$request('/api/race/check_race',{
					id:this.id,
					type:'digg'
				},'post',{},true).then(res=>{
					
					if (res.code === 1) {
						uni.showToast({
							title:res.msg,
							icon:'none'
						})
						this.races()
					}else{
						uni.showToast({
							title:res.msg,
							icon:'none'
						})
					}
				})
			},
			
			collection(id){
				this.$request('/api/member/collection', {type:'race',id:id,'do':'add'}, 'post', {}, true).then(res => {
					if (res.code === 1) {
						uni.showToast({
							title:res.msg,
							icon:'none'
						})
						this.races()
					}else{
						uni.showToast({
							title:res.msg,
							icon:'none'
						})
					}
				})
			},
			races(){
				this.$request('/api/race/view',{
					id:this.id,
				},'post',{}).then(res=>{
					
					if (res.code === 1) {
						this.race = res.data;
						
						uni.setNavigationBarTitle({
						　　title:this.race.race.title 
						})
					}else{
						uni.showToast({
							title:res.msg,
							icon:'none'
						})
					}
				})
			}
		},
			onShow(e) {this.saishixiangqing = this.$lang.saishixiangqing[uni.getStorageSync('lang')];this.saishizuopin = this.$lang.saishizuopin[uni.getStorageSync('lang')];this.zuixinpaiming = this.$lang.zuixinpaiming[uni.getStorageSync('lang')];this.saishishijian = this.$lang.saishishijian[uni.getStorageSync('lang')];this.saishixiangqing = this.$lang.saishixiangqing[uni.getStorageSync('lang')];this.saishineirong = this.$lang.saishineirong[uni.getStorageSync('lang')];this.canyusaishi = this.$lang.canyusaishi[uni.getStorageSync('lang')];this.leixing = this.$lang.leixing[uni.getStorageSync('lang')];this.dao = this.$lang.dao[uni.getStorageSync('lang')];},
		onLoad(e) {this.saishixiangqing = this.$lang.saishixiangqing[uni.getStorageSync('lang')];this.saishizuopin = this.$lang.saishizuopin[uni.getStorageSync('lang')];this.zuixinpaiming = this.$lang.zuixinpaiming[uni.getStorageSync('lang')];this.saishishijian = this.$lang.saishishijian[uni.getStorageSync('lang')];this.saishixiangqing = this.$lang.saishixiangqing[uni.getStorageSync('lang')];this.saishineirong = this.$lang.saishineirong[uni.getStorageSync('lang')];this.canyusaishi = this.$lang.canyusaishi[uni.getStorageSync('lang')];this.leixing = this.$lang.leixing[uni.getStorageSync('lang')];this.dao = this.$lang.dao[uni.getStorageSync('lang')];
			this.id = e.id
			
			this.$request('/api/race/view',{
				id:this.id,
			},'post',{}).then(res=>{
				
				if (res.code === 1) {
					this.race = res.data;
					uni.setNavigationBarTitle({
					　　title:this.race.race.title
					})
				}else{
					uni.showToast({
						title:res.msg,
						icon:'none'
					})
				}
			})
			
			this.$request('/api/race/get_works_list',{
				id:this.id
			},'post',{}).then(res=>{
				
				if (res.code === 1) {
					this.worksList = res.data;
				}
			})
			
			
			this.$request('/api/race/get_works_rank',{
				
			},'post',{}).then(res=>{
				
				if (res.code === 1) {
					this.worksRank = res.data;
				}
			})
		}
	}
</script>

<style>
	
	.participation-details {
		
	}
	.details-ranking-item{
		display: flex;
		border: 1rpx solid rgba(200,200,200,0.75);
		margin-bottom: 28rpx;
	}
	.ranking-item-img{
		width: 300rpx;
		height: 220rpx;
		
	}
	.ranking-item-img text{
		position: relative;
		bottom:233rpx;
		left: 0rpx;
		padding:5rpx 6rpx 2rpx 3rpx ;
		border-radius: 5rpx 0rpx 0rpx 0rpx;
		background-color: rgba(255, 127, 34, 100);
		text-align: center;
		color: rgba(255, 255, 255, 100);
		font-size: 22rpx;
		font-family: PingFangSC-regular;
	}
	.ranking-item-img image{
		width: 300rpx;
		height: 220rpx;
		border-radius: 5rpx;
	}
	.ranking-item-txt{
		margin-left: 26rpx;
		margin-top: 10rpx;
	}
	.ranking-item-txt-title{
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
		margin-bottom: 8rpx;
	}
	.ranking-item-txt-time{
		color: rgba(102, 102, 102, 100);
		font-size: 24rpx;
		font-family: PingFangSC-regular;
	}
	.ranking-item-txt-main{
		color: rgba(102, 102, 102, 100);
		font-size: 24rpx;
		font-family: PingFangSC-regular;
	}
	.participation-details-top {
		display: flex;
		justify-content: space-between;
		
		padding: 28rpx 40rpx 20rpx 40rpx;
		border-top: 1rpx solid rgba(200, 200, 200, 0.75);
		border-bottom: 1rpx solid rgba(200, 200, 200, 0.75);
	}

	.participation-details-top-txt {
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
		color: #63B4D2;
	}
	.participation-details-top-txts {
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
	}

	.participation-details-img image {
		width: 100%;
		height: 438rpx;
	}

	.participation-details-content {
		padding: 20rpx 30rpx 28rpx 30rpx;
		
	}

	.content-item-title {
		color: rgba(16, 16, 16, 100);
		font-size: 32rpx;
		font-family: PingFangSC-regular;
		margin-bottom: 22rpx;
	}

	.content-item-types {
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
		margin-bottom: 16rpx;
	}

	.content-item-times {
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
		margin-bottom: 20rpx;
	}

	.content-item-details-title {
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
		margin-bottom: 10rpx;
	}

	.content-item-details-txt {
		color: rgba(153, 153, 153, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
		margin-bottom: 36rpx;
	}

	.content-item-main-title {
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
		margin-bottom: 6rpx;
	}

	.content-item-main-txt {
		color: rgba(153, 153, 153, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
		padding-bottom: 100rpx;
	}

	.bottom-item1 image {
		width: 50rpx;
		height: 50rpx;
		position: relative;
		top: 15rpx;
		margin-right: 6rpx;
		
	}
.bottom-item2{
	
}
	.bottom-item2 image {
		width: 48rpx;
		height: 48rpx;
		position: relative;
		top: 15rpx;
		margin-right: 6rpx;
	}

	.bottom-item3 image {
		width: 48rpx;
		height: 48rpx;
		position: relative;
		top: 15rpx;
		margin-right: 6rpx;
	}

	.bottom-item1,
	.bottom-item2,
	.bottom-item3 text {
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
	}

	.participation-details-bottom-item {
		height: 90rpx;
		width: 100%;
		border: 1rpx solid rgba(200, 200, 200, 0.75);
		display: flex;
		justify-content: space-between;
		
		position: fixed;
		bottom: 0;
		background-color: #FFFFFF;
		padding-left: 15rpx;
	}

	.bottom-button button {
		background-color: rgba(99, 180, 210, 100);
		color: rgba(255, 255, 255, 100);
		width: 238rpx;
		font-size: 32rpx;
		text-align: center;
		font-family: Arial;
		border: 1px solid rgba(237, 237, 237, 100);
	}

	.participation-details-entries,.participation-details-ranking {
		padding: 18rpx 40rpx 0rpx 40rpx;
	}

	.details-entries-item {
		display: flex;
		
		margin-bottom: 28rpx;
	}

	.entries-item-img image {
		width: 300rpx;
		height: 220rpx;
		border-radius: 5rpx;
	}

	.entries-item-txt {
		margin-left: 26rpx;
		margin-top: 10rpx;
	}

	.entries-item-txt-title {
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
	}

	.entries-item-txt-time {
		color: rgba(102, 102, 102, 100);
		font-size: 24rpx;
		font-family: PingFangSC-regular;
		margin-bottom: 8rpx;
	}

	.entries-item-txt-main {
		color: rgba(102, 102, 102, 100);
		font-size: 24rpx;
		font-family: PingFangSC-regular;
	}
</style>
