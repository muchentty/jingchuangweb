<template>
	<view>
		<router></router>
		<view class="all">
			<view class="all-address">
				您所在的位置：{{name}}
			</view>
			<view class="appoint-content">
				<view class="appoint-content-left">
					<image :src="race.race.cover" mode=""></image>
				</view>
				<view class="appoint-content-right">
					<view class="appoint-content-title">
						{{race.race.title}}
					</view>
					<view class="appoint-content-img">
						<view class="appoint-content-img-left">
							<view class="img-left">
								<image src="../../static/anquan.png" mode=""></image>
							</view>
							<view class="img-txt">
								<text>其他</text>
							</view>
						</view>
						<view class="appoint-content-img-right">
							<view class="img-right-item">
								<view class="img-right-item-img" @click="digg(race.race.area_id)">
									<image v-if="race.race.is_digg==0" src="../../static/ic_fabulous.png" mode=""></image>
									<image v-if="race.race.is_digg==1" src="../../static/ic_fabulousa.png"></image>
								</view>
								<view class="img-right-item-txt">
									点赞({{race.race.digg}})
								</view>
							</view>
						<!-- 	<view class="img-right-item">
								<view class="img-right-item-img">
									<image src="../../static/ic_Collection.png" mode=""></image>
								</view>
								<view class="img-right-item-txt">
									收藏（41）
								</view>
							</view> -->
							<view class="img-right-item">
								<view class="img-right-item-img">
									<image src="../../static/ic_eys.png" mode=""></image>
								</view>
								<view class="img-right-item-txt">
									浏览({{race.race.views}})
								</view>
							</view>
						</view>
					</view>
				    <view class="appoint-content-item">
				    	<text class="blod">地址:   </text>
						<text class="noblod"> 泉州中心市区各大文旅场馆（详见详情）</text>
				    </view>
					<view class="appoint-content-item">
						<text class="blod">活动日期:</text>
						<text class="noblod"> {{race.race.start_time}}至{{race.race.end_time}}</text>
					</view>
				<!-- 	<view class="appoint-content-item">
						<text class="blod">活动时间:</text>
						<text class="noblod"> 00:00-00:00</text>
					</view> -->
					<!-- <view class="appoint-content-item">
						<text class="blod">发布来源:</text>
						<text class="noblod"> 东莞市</text>
					</view> -->
					<view class="appoint-bottom" @click="unpload">
						<button type="default">立即参与</button>
					</view>
				</view>
			</view>
			<view class="appoint-details">
				<view class="appoint-details-top">
					<text>活动详情</text>
				</view>
				<view class="appoint-details-content">
					{{race.race.description}}
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
				index: 0,
				id:'',
				race:[],
				worksList:[],
				worksRank:[],
				name:''
			}
		},
		methods: {
			//上传作品
			unpload(){
				uni.showModal({
					title:'赛事参与',
					content:'确定参与吗？',
					success:function(res){
						if(res.confirm){
							console.log('确定')
						}else if(res.cancel){
							console.log('取消')
						}
					}
				})
				// uni.navigateTo({
				// 	url:'../Upload-work/Upload-work?id=' + this.id
				// })
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
			yuyue(){
				uni.showModal({
					title:'活动预约',
					content:'确定预约吗？',
					success:function(res){
						if(res.confirm){
							console.log('确定')
						}else if(res.cancel){
							console.log('取消')
						}
					}
				})
			}
		},
		onLoad(e){
			this.name = e.name;
			this.id = e.id
			this.$request('/api/race/view',{
				id:this.id,
			},'post',{}).then(res=>{
				
				if (res.code === 1) {
					this.race = res.data;
					console.log(this.race)
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
		},
	}
</script>

<style>
.all{
	height: 100%;
	width: 100%;
	background-color: #F7F7F7;
	padding: 0rpx 170rpx;
	/* border: 1rpx solid red; */
	padding-bottom: 150rpx;
}
.all-address{
	/* margin-left: 170rpx; */
	/* border: 1rpx solid red; */
	padding-top: 50rpx;
	font-size: 20rpx;
}
.appoint-content{
	/* border: 1rpx solid red; */
	margin-top: 30rpx;
	display: flex;
}
.appoint-content-left{
	/* border: 1rpx solid black; */
}
.appoint-content-left image{
	width: 400rpx;
	/* height: 260rpx; */
	padding: 20rpx 20rpx;
	border: 1rpx solid black;
}
.appoint-content-right{
	margin-left: 30rpx;
	/* border: 1rpx solid yellow; */
	width: 100%;
}
.appoint-content-title{
	font-size: 28rpx;
	    color: #262626;
	    font-weight: bold;
	    margin-bottom: 10rpx;
}
.appoint-content-img-right{
	display: flex;
}
.img-left image{
	width: 24rpx;
	height: 24rpx;
	margin-right: 10rpx;
}
.appoint-content-img-right image{
	width: 24rpx;
	height: 24rpx;
	margin-top: 5rpx;
	margin-left: 20rpx;
	margin-right: 10rpx;
}
.appoint-content-img-left{
	display: flex;
}
.appoint-content-img{
	display: flex;
	justify-content: space-between;
	/* border: 1rpx solid red; */
	font-size: 18rpx;
	color: #999999;
}
.img-right-item{
	display: flex;
}
.appoint-content-item{
	margin-top: 20rpx;
}
.blod{
	font-size: 20rpx;
	font-weight: bold;
	margin-right: 10rpx;
}
.noblod{
	font-size: 20rpx;
}
.appoint-bottom button{
	width: 240rpx;
	height: 47rpx;
	line-height: 47rpx;
	text-align: center;
	color: #FFFFFF;
	background-color: #CF282B;
	margin-left: 0rpx;
	margin-top: 30rpx;
}
.appoint-details-content{
	padding: 50rpx 20rpx;
}
.appoint-details{
	margin-top: 50rpx;
	border-top: 1rpx solid #CF282B;
	border-left: 1rpx solid rgba(200,200,200,0.75);
	border-right: 1rpx solid rgba(200,200,200,0.75);
	border-bottom: 1rpx solid rgba(200,200,200,0.75);
	background-color: #FFFFFF;
	height: 100%;
}
.appoint-details-top{
	height: 51rpx;
	line-height: 51rpx;
	padding-left: 20rpx;
	font-size: 24rpx;
	color: #CF282B;
	border-bottom: 1rpx solid rgba(200,200,200,0.75);
}
</style>
