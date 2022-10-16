<template>
	<view class="hotel-details">
		<view class="hotel-details-top">
			<image :src="venue.venue.cover"></image>
		</view>
		<view class="hotel-details-content">
			<view class="content-item">
				<view class="content-item-top">
					<view class="item-top-left">
						<view class="item-top-left-txt1">{{venue.venue.name}}</view>
						<view class="item-top-left-txt2">
							<text class="txt2-item1"></text>
							<text class="txt2-item2"></text>
						</view>
					</view>
					<view class="item-top-right">
						<view class="item-top-right-txt2">
							<text class="right-item1"></text>
							<br/>
							<text class="right-item2"></text>
						</view>
					</view>
				</view>
			</view>
		<view class="content-item1">
			<!-- <view class="content-item1-txt">
				<text class="item1-txt">{{yudingfangshi}}:</text>
				<image src="../../static/ic_ri.png" mode=""></image>
			</view> -->
		</view>
		<view class="content-item2">
			<view class="content-item2-left">
				<view class="item2-left-img">
					<image src="../../static/map.png" mode=""></image>
				</view>
				<view class="item2-left-txt">{{venue.venue.address}}</view>
				<view class="item2-left-tupian">
					
				</view>
			</view>
			<view class="content-item2-right" @click="to_map">
				{{jinruditu}}
			</view>
		</view>
		</view>
		<view class="hotel-details-bottom">
			<view class="details-bottom-item">
				<view class="bottom-item-title">
					{{sheshifuwu}}
				</view>
				<view class="bottom-item-img">
					<image src="../../static/map.png" mode=""></image>
					<br/>
					<text class="bottom-item-txt">{{mianfeitingche}}</text>
				</view>
			</view>
			<view class="details-bottom-item">
				<view class="bottom-item-title">
					{{rulishijian}}
				</view>
				<view class="bottom-item-img">
					
					<text class="bottom-item-txt">{{ruzhushijian}}：{{venue.venue.start_time}}{{yihou}}  {{lidianshijian}}：{{venue.venue.end_time}}{{yiqian}}</text>
				</view>
			</view>
			<view class="details-bottom-item">
				<view class="bottom-item-title">
					{{dingfangbidu}}
				</view>
				<view class="bottom-item-img">
					
					<text class="bottom-item-txt"></text>
				</view>
			</view>
			<view class="details-bottom-item">
				<view class="bottom-item-title">
					{{jiudianjieshao}}
				</view>
				<view class="bottom-item-img">
					
				<!-- 	<text class="bottom-item-txt">{{venue.venue.content}}</text> -->
					<view class="wen" style="width: 100%;overflow: hidden;" v-html="context"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	//#ifdef H5
	import jweixin from 'jweixin-module';
	//#endif
	export default {
		data() {
			return {yudingfangshi:'',jinruditu:'',sheshifuwu:'',mianfeitingche:'',rulishijian:'',ruzhushijian:'',lidianshijian:'',dingfangbidu:'',jiudianjieshao:'',yihou:'',yiqian:'',
				venue:[],
				area:'1',
				context:'',
				qingshengjidaozuixindeweixinbanben: '',
				nideweixinbanbentaidi: '',
				venue_id:''
			}
		},
		methods: {
			to_map(){
				let position = ''
				position = this.venue.venue.position.split(',')
				let latitude = Number(position[1])
				let longitude = Number(position[0])
				console.log(this.venue.venue)
				console.log(position)
				console.log(latitude,longitude)
				let that = this
				//#ifdef H5
				let ua = window.navigator.userAgent.toLowerCase()
				if (ua.match(/MicroMessenger/i) == 'micromessenger') {
					this.initJssdkShare(function(res) {
						jweixin.ready(function() {
							jweixin.checkJsApi({
								jsApiList: [
									'openLocation'
								],
								success: function(res) {
									if (res.checkResult.getLocation == false) {
										uni.showToast({
											title: that.nideweixinbanbentaidi + '，' +
												that
												.qingshengjidaozuixindeweixinbanben +
												'！',
											duration: 2000,
											icon: 'none'
										})
										return;
									}
								}
							});
							jweixin.openLocation({
								latitude: latitude,
								longitude: longitude,
								name: that.venue.venue.name,
								address: that.venue.venue.name,
								scale: 20,
							})
						});
					})
				} //#endif
				
				//#ifdef MP-WEIXIN
				
				uni.openLocation({
					latitude: latitude,
					longitude: longitude,
					success: function() {}
				});
				//#endif
				//#ifdef APP-PLUS
				plus.nativeUI.actionSheet({ //选择菜单
					title: "打开本机APP",
					cancel: "取消",
					buttons: [{
						title: "腾讯地图"
					}]
				}, function(e) {
					let url = ''
					switch (e.index) {
						//下面是拼接url,不同系统以及不同地图都有不同的拼接字段
						case 1:
							//注意referer=xxx的xxx替换成你在腾讯地图开发平台申请的key
							url =
								`qqmap://map/geocoder?coord=${latitude},${longitude}&referer=B4NBZ-ZZ6CD-OJS4H-PQSAL-U6W6H-WPB2L`;
							break;
						default:
							break;
					}
					if (url != "") {
						url = encodeURI(url);
						//plus.runtime.openURL(url,function(e){})调起手机APP应用
						plus.runtime.openURL(url, function(e) {
							plus.nativeUI.alert("本机未安装指定的地图应用");
						});
					}
				})
				//#endif
			},
			initJssdkShare: function(callback) {
				let url = 'pages/hotel-details/hotel-details?id=' + this.venue_id
				this.$request('/api/common/getJssdkTicket', {
					'url': url,
				}, 'post', {}).then(res => {
					if (res.data) {
						jweixin.config({
							debug: false,
							appId: res.data.appId,
							timestamp: res.data.timestamp,
							nonceStr: res.data.nonceStr,
							signature: res.data.signature,
							jsApiList: [
								'checkJsApi',
								'openLocation'
							]
						});
			
						if (callback) {
							callback(res.data);
						}
					}
				});
			},
			select(item) {
				this.title = item.title;
				this.ShowHidden = !this.ShowHidden;
				this.c_id = item.id;
				this.$request('/api/venue/get_list',{
					area: this.area,
					cate: this.c_id,
					pagesize: '10',
					page: '1'
				},'post',{}).then(res=>{
					
					
					this.venue = res.data
					
				})
			},
			formatRichText(html) {
				let newContent = html.replace(/<img[^>]*>/gi, function(match, capture) {
					match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '');
					match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '');
					match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '');
					return match;
				});
				newContent = html.replace(/<video[^>]*>/gi, function(match, capture) {
					match = match.replace(/width="[^"]+"/gi, 'style="width:100%"').replace(/width='[^']+'/gi, '');
					match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '');
					return match;
				});
				newContent = newContent.replace(/style="[^"]+"/gi, function(match, capture) {
					match = match.replace(/width:[^;]+;/gi, 'max-width:100%;').replace(/width:[^;]+;/gi,
						'max-width:100%;');
					return match;
				});
				newContent = newContent.replace(/<br[^>]*\/>/gi, '');
				newContent = newContent.replace(/\<img/gi,
					'<img style="max-width:100%;height:auto;display:inline-block;margin:10rpx auto;"');
				return newContent;
			}
		},
		onShow(e) {
			this.qingshengjidaozuixindeweixinbanben = this.$lang.qingshengjidaozuixindeweixinbanben[uni.getStorageSync('lang')];
			this.nideweixinbanbentaidi = this.$lang.nideweixinbanbentaidi[uni.getStorageSync('lang')];
			this.yudingfangshi = this.$lang.yudingfangshi[uni.getStorageSync('lang')];this.jinruditu = this.$lang.jinruditu[uni.getStorageSync('lang')];this.sheshifuwu = this.$lang.sheshifuwu[uni.getStorageSync('lang')];this.mianfeitingche = this.$lang.mianfeitingche[uni.getStorageSync('lang')];this.rulishijian = this.$lang.rulishijian[uni.getStorageSync('lang')];this.ruzhushijian = this.$lang.ruzhushijian[uni.getStorageSync('lang')];this.lidianshijian = this.$lang.lidianshijian[uni.getStorageSync('lang')];this.dingfangbidu = this.$lang.dingfangbidu[uni.getStorageSync('lang')];this.jiudianjieshao = this.$lang.jiudianjieshao[uni.getStorageSync('lang')];this.yihou = this.$lang.yihou[uni.getStorageSync('lang')];this.yiqian = this.$lang.yiqian[uni.getStorageSync('lang')];},
		onLoad(e) {
			this.qingshengjidaozuixindeweixinbanben = this.$lang.qingshengjidaozuixindeweixinbanben[uni.getStorageSync('lang')];
			this.nideweixinbanbentaidi = this.$lang.nideweixinbanbentaidi[uni.getStorageSync('lang')];
			this.yudingfangshi = this.$lang.yudingfangshi[uni.getStorageSync('lang')];this.jinruditu = this.$lang.jinruditu[uni.getStorageSync('lang')];this.sheshifuwu = this.$lang.sheshifuwu[uni.getStorageSync('lang')];this.mianfeitingche = this.$lang.mianfeitingche[uni.getStorageSync('lang')];this.rulishijian = this.$lang.rulishijian[uni.getStorageSync('lang')];this.ruzhushijian = this.$lang.ruzhushijian[uni.getStorageSync('lang')];this.lidianshijian = this.$lang.lidianshijian[uni.getStorageSync('lang')];this.dingfangbidu = this.$lang.dingfangbidu[uni.getStorageSync('lang')];this.jiudianjieshao = this.$lang.jiudianjieshao[uni.getStorageSync('lang')];this.yihou = this.$lang.yihou[uni.getStorageSync('lang')];this.yiqian = this.$lang.yiqian[uni.getStorageSync('lang')];
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
			let id = e.id
			this.venue_id = e.id
			this.$request('/api/venue/view',{
				id:id
			},'post',{}).then(res=>{
				
				if (res.code === 1) {
					this.venue = res.data;
					this.context = this.venue.venue.content;
					uni.setNavigationBarTitle({
					　　title:this.venue.venue.name
					})
				}
			})
		}
	}
</script>

<style>
.hotel-details-top image{
	width: 100%;
	height: 380rpx;
}
.hotel-details-content{
	width: 98%;
	height: 396rpx;
	
	border-radius: 10rpx;
	
	box-shadow: 0px 4rpx 12rpx 0px rgba(0, 0, 0, 0.4);
	position: absolute;
	left: 30rpx;
	top: 320rpx;
	background-color:#FFFFFF  ;
}
.content-item{
	padding: 0rpx 30rpx 18rpx 30rpx;
	border-bottom: 1rpx solid rgba(200,200,200,0.75);
}
.content-item-top{
	display: flex;
	justify-content: space-between;
}
.item-top-left-txt1{
	color: rgba(16, 16, 16, 100);
	font-size: 28rpx;
	font-family: PingFangSC-regular;
	margin-top: 28rpx;
	margin-bottom: 14rpx;
}
.item-top-left-txt2{
	color: rgba(153, 153, 153, 100);
	font-size: 24rpx;
	font-family: PingFangSC-regular;
}
.right-item1{
	
	width: 20rpx;
	height: 20rpx;
	color: rgba(255, 127, 34, 100);
	margin-bottom: 32rpx;
}
.right-item2{
	/* width: 118rpx;
	height: 40rpx; */
	color: rgba(16, 16, 16, 100);
	font-size: 28rpx;
	font-family: PingFangSC-regular;
}
.item-top-right{
	margin-top: 20rpx;
}
.txt2-item1{
	margin-right: 22rpx;
}
.content-item1-txt{
	
	display: flex;
	justify-content: space-between;
}
.content-item1{
	padding: 26rpx 30rpx;
	
}
.content-item1-txt image{
	width: 36rpx;
	height: 36rpx;
}
.item1-txt{
	color: rgba(16, 16, 16, 100);
	font-size: 28rpx;
	font-family: PingFangSC-regular;
}
.item2-left-img image{
	width: 32rpx;
	height: 32rpx;
	margin-right: 8rpx;
}
.content-item2{
	display: flex;
	justify-content: space-between;
	width: 660rpx;
	height: 138rpx;
	border-radius: 12rpx;
	
	background-color: #E8E8E8;
	padding: 50rpx 30rpx;
	margin-left: 16rpx;
	
}
.content-item2-left{
	display: flex;
}
.item2-left-txt{
	width: 400rpx;
	height: 100rpx;
	
	color: #333333;
	font-size: 28rpx;
	font-family: PingFangSC-regular;
}
.content-item2-right{
	color: rgba(255, 127, 34, 100);
	font-size: 28rpx;
	font-family: PingFangSC-regular;
}
.bottom-item-img image{
	width: 48rpx;
	height: 48rpx;
	margin-left: 30rpx;
	margin-top: 20rpx;
}
.bottom-item-title{
	color: rgba(16, 16, 16, 100);
	font-size: 32rpx;
	font-family: PingFangSC-regular;
}
.hotel-details-bottom{
	width: 100%;
	height: 750rpx;
	
	margin-top: 380rpx;
	padding: 0rpx 30rpx;
	}
	.bottom-item-title{
		color: rgba(16, 16, 16, 100);
		font-size: 32rpx;
		font-family: PingFangSC-regular;
		margin-bottom: 8rpx;
	}
	.bottom-item-txt{
		color: rgba(16, 16, 16, 100);
		font-size: 24rpx;
		font-family: PingFangSC-regular;
	}
	.details-bottom-item{
		margin-top: 40rpx;
	}
</style>
