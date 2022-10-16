<template>
	<view class="Book-resources">
		<view class="Book-resources-top" >
			<view class="Book-resources-top-dipay" v-for="(item,index) in lists">
				<view class="resources-top-item" @click="resources_data(item.id,index)" :class="qiehuan == index ? 'top-item':'top-items'" >
					{{item.title}}
				</view>
			</view>
		</view>
		<view class="Book-resources-content">
			<view class="resources-content-left-item">
				<view class="resources-content-left" v-for="(item,index) in left" >
					<ul>
						
						<li @click="bookul(item.id,index)" :class="bqiehuan==index?'bookitem':'bookitems'">{{item.title}}</li>
					</ul>
				</view>
			</view>
			
			<view class="resources-content-right">
				<view class="content-right" v-show="qiehuan==0">
					<view class="content-right-item" v-for="(item,index) in resources">
						<view class="content-item1" >
							<view class="content-item1-left" @click="bookdetails(item)">
								<view class="content-item1-img">
									<image :src="item.cover"></image>
								</view>
								<view class="content-item1-txt">
									<text class="content-item1-title">{{item.title}}</text>
									<br/>
									<text class="content-item1-author">{{item.id}}</text>
								</view>
							</view>
							
							<view class="content-item1-right" v-if="item.is_collection==0" @click="collection(item.id)">
								<button type="default">{{shoucang}}</button>
							</view>
						</view>
					</view>
				</view>
				<view class="content-right" v-show="qiehuan==1">
					<view class="content-item1"  v-for="(item,index) in resources">
						<view class="content-item1-left" @click="bookdetails(item)">
							<view class="content-item1-img">
								<image :src="item.cover"></image>
							</view>
							<view class="content-item1-txt">
								<text class="content-item1-title">{{item.title}}</text>
								<br/>
								<text class="content-item1-author">{{item.id}}</text>
							</view>
						</view>
						<view class="content-item1-right" v-if="item.is_collection==0" @click="collection(item.id)">
							<button type="default">{{shoucang}}</button>
						</view>
					</view>
				</view>
				<view class="content-right" v-show="qiehuan==2" >
					<view class="content-item1" v-for="(item,index) in resources">
						<view class="content-item1-left"  @click="bookdetails(item)">
							<view class="content-item1-img">
								<image :src="item.cover"></image>
							</view>
							<view class="content-item1-txt">
								<text class="content-item1-title">{{item.title}}</text>
								<br/>
								<text class="content-item1-author">{{item.id}}</text>
							</view>
						</view>
						<view class="content-item1-right" v-if="item.is_collection==0" @click="collection(item.id)">
							<button type="default">{{shoucang}}</button>
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
			return {shoucang:'',shoucang:'',shoucang:'',
				qiehuan:0,
				bqiehuan:0,
				cate:'',
				area:'1',
				lists:[],
				
				left:[],
				
				resources:[],
				category:[],
				id:'',
				pid:'1',
			}
		},
		methods: {
			resources_data(e,index){
				this.qiehuan=index;
				this.pid = e;
				this.books()
				// #ifdef H5
				    window.location.href='https://weread.qq.com/'
				// #endif
			},
			bookul(e,index){
				console.log(e,index)
				// #ifdef H5
				    window.location.href='https://weread.qq.com/'
				// #endif
				
				this.bqiehuan=index;
				
				this.$request('/api/resources/get_list',{
					cate:e,
					area:this.area,
					page:1,
					pagesize:12
				},'post',{}).then(res=>{
					
					if(res.code==1){
						this.resources=res.data.lists
						
					}
				})
			},
			bookdetails(item){
				uni.navigateTo({
					url:'../book-details/book-details?id='+item.id+'&pid='+this.pid
				})
			},
			books(){
				
				this.$request('/api/resources/get_cates',{
					pid:this.pid,
				},'post',{}).then(res=>{
					
					if(res.code==1){
						this.left=res.data.lists
						
					}
				})
				
				
				this.$request('/api/resources/get_list',{
					cate:this.pid,
					area:this.area,
					page:1,
					pagesize:12
				},'post',{}).then(res=>{
					
					if(res.code==1){
						this.resources=res.data.lists
						
					}
				})
			},
			
			collection(id){
				this.$request('/api/member/collection', {type:'resources',id:id,'do':'add'}, 'post', {}, true).then(res => {
					if (res.code === 1) {
						uni.showToast({
							title:res.msg,
							icon:'none'
						})
						this.bookul(this.pid,this.index)
					}else{
						uni.showToast({
							title:res.msg,
							icon:'none'
						})
					}
				})
			},
		},
		onShow(e) {this.shoucang = this.$lang.shoucang[uni.getStorageSync('lang')];this.shoucang = this.$lang.shoucang[uni.getStorageSync('lang')];this.shoucang = this.$lang.shoucang[uni.getStorageSync('lang')];},
		onLoad(e) {this.shoucang = this.$lang.shoucang[uni.getStorageSync('lang')];this.shoucang = this.$lang.shoucang[uni.getStorageSync('lang')];this.shoucang = this.$lang.shoucang[uni.getStorageSync('lang')];
			// if(uni.getStorageSync('area')){
			// 	this.area = uni.getStorageSync('area')
			// }
			if (e.area == 'undefined' || e.area == undefined || e.area == '' || e.area == null) {
				if (uni.getStorageSync('area')) {
					this.area = uni.getStorageSync('area')
				}
			}else{
				this.area = e.area
			}
			let id=e.id
			
			this.$request('/api/resources/get_all_cates',{
				id:this.id
			},'post',{}).then(res=>{
				
				if(res.code==1){
					this.id=res.data.id
					this.lists=res.data.lists
					
				}
			})
			this.books()
		}
	}
</script>

<style>
.Book-resources-top{
	display: flex;
	border-bottom: 1rpx solid rgba(200,200,200,0.75);
	padding-left: 30rpx;
	height: 90rpx;
	line-height: 90rpx;
	width: 100%;
}
.top-item{
	color: rgba(99, 180, 210, 100); 
}
.top-items{
	color: rgba(16, 16, 16, 100);
}
.resources-top-item{
	margin-right: 50rpx;
	
	width: 200rpx;
	text-align: center;
}
.Book-resources-content{
	width: 100%;
	display: flex;
}
.resources-content-left-item{
	width: 122rpx;
	
	margin-right: 10rpx;
}
.resources-content-left ul{
	
	padding-left: 0;
	
	width: 20%;
	list-style: none;
	text-align: center;
	
}

.bookitem{
	
	width: 122rpx;
	border: 1px solid rgba(200,200,200,0.75);
	height: 76rpx;
	line-height: 76rpx;
	background-color: #FFFFFF;
	color: rgba(16, 16, 16, 100);
	font-size: 28rpx;
	font-family: PingFangSC-regular;
	
}
.bookitems{
	
	width: 122rpx;
	
	height: 76rpx;
	line-height: 76rpx;
	background-color: #EFEFEF;
	color: rgba(16, 16, 16, 100);
	font-size: 28rpx;
	font-family: PingFangSC-regular;
	
}
.resources-content-right{
	width: 100%;
	
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
	margin-top: 10rpx;
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
