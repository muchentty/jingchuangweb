<template>
	<view class="specials-foods-details">
		<view class="tourist-attraction-details-top">
			<image :src="venue.venue.cover"></image>
		</view>
		<view class="tourist-attraction-details-content">
			<view class="details-content-item1">
				<view class="details-content-item1-left">
					<text class="item1-left-title">{{venue.venue.name}}</text>
					<br />
					<text class="item1-left-price">{{venue.venue.start_time}} - {{venue.venue.end_time}}</text>

				</view>

			</view>
			<view class="details-content-item2">
				<view class="content-item2-branch" @click="to_map">
					<view class="item2-branch-left">
						<image src="../../static/map.png" mode=""></image>
						<text class="item2-branch-left-txt">{{venue.venue.address}}</text>
					</view>
					<view class="item2-branch-right">
						<image src="../../static/ic_ri.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="details-content-item3">
				<view class="content-item3-branch">
					<view class="item3-branch-left">
						<image src="../../static/phone.png" mode=""></image>
						<text class="item3-branch-left-txt"
							@click="getpone(venue.venue.tel)">{{lianxifangshi}}：{{venue.venue.tel}}</text>
					</view>
					<view class="item3-branch-right">
						<image src="../../static/ic_ri.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="venue-details-facilities">
				<text class="venue-details-facilities-text">{{peitaosheshi}}</text>
			</view>
			<view class="peitao">
				<view class="venue-details-Parking" v-for="its in venue.venue.facilities">
					<view class="venue-details-Parking-img">
						<image :src="its.icon" mode=""></image>
					</view>
					<view class="venue-details-Parking-txt">
						<text>{{its.name}}</text>
					</view>
				</view>
			</view>
			<view class="tourist-attraction-main">
				<view class="tourist-attraction-main-title">
					{{meishijianjie}}
				</view>
				<!-- <view class="tourist-attraction-main-txt">{{venue.venue.content}}</view> -->
				<view class="wen" style="width: 100%;overflow: hidden;" v-html="context"></view>
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
			return {
				lianxifangshi: '',
				meishijianjie: '',
				venue: [],
				context:'',
				nideweixinbanbentaidi: '',
				qingshengjidaozuixindeweixinbanben: '',
				venue_id:'',
				peitaosheshi: '',
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
				let url = 'pages/specials-foods-details/specials-foods-details?id=' + this.venue_id
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
			getpone(phone) {
				uni.makePhoneCall({
					// 手机号
					phoneNumber: phone,
					success: (res) => {
						console.log('调用成功!')
					},
					fail: (res) => {
						console.log('调用失败!')
					}
				});
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
			this.qingshengjidaozuixindeweixinbanben = this.$lang.qingshengjidaozuixindeweixinbanben[uni.getStorageSync(
				'lang')];
			this.peitaosheshi = this.$lang.peitaosheshi[uni.getStorageSync('lang')];
			this.nideweixinbanbentaidi = this.$lang.nideweixinbanbentaidi[uni.getStorageSync('lang')];
			this.lianxifangshi = this.$lang.lianxifangshi[uni.getStorageSync('lang')];
			this.meishijianjie = this.$lang.meishijianjie[uni.getStorageSync('lang')];
		},
		onLoad(e) {
			this.qingshengjidaozuixindeweixinbanben = this.$lang.qingshengjidaozuixindeweixinbanben[uni.getStorageSync(
				'lang')];
			this.peitaosheshi = this.$lang.peitaosheshi[uni.getStorageSync('lang')];
			this.nideweixinbanbentaidi = this.$lang.nideweixinbanbentaidi[uni.getStorageSync('lang')];
			this.lianxifangshi = this.$lang.lianxifangshi[uni.getStorageSync('lang')];
			this.meishijianjie = this.$lang.meishijianjie[uni.getStorageSync('lang')];
			let id = e.id
			this.venue_id = e.id
			let cover = open.cover
			this.$request('/api/venue/view', {
				id: id
			}, 'post', {}).then(res => {

				if (res.code === 1) {
					this.venue = res.data;
					this.context = this.venue.venue.content;
					uni.setNavigationBarTitle({
						title: this.venue.venue.name
					})
				}
			})
		}
	}
</script>

<style>
	.tourist-attraction-weather {
		padding: 20rpx 30rpx;
		border-bottom: 20rpx solid rgba(247, 247, 247, 100);
	}

	.Weather-content {

		padding-right: 30rpx;
	}

	.tourist-attraction-details-top image {
		width: 100%;
		height: 454rpx;
	}

	.tourist-attraction-details-content {}

	.details-content-item1 {
		display: flex;
		justify-content: space-between;
		margin-top: 18rpx;

		padding: 0rpx 30rpx 16rpx 30rpx;
	}

	.item1-left-title {
		color: rgba(16, 16, 16r, 100);
		font-size: 36rpx;
		font-family: PingFangSC-regular;
		margin-bottom: 8rpx;
	}

	.item1-left-price {
		color: rgba(153, 153, 153, 100);
		font-size: 24rpx;
		font-family: PingFangSC-regular;
		margin-bottom: 10rpx;
	}

	.item1-left-price1 {
		color: rgba(16, 16, 16, 100);
		font-size: 24rpx;
		font-family: PingFangSC-regular;
	}

	.details-content-item1-right {
		color: rgba(255, 127, 34, 100);
		font-size: 24rpx;
		font-family: PingFangSC-regular;
		position: relative;
		top: 20rpx;
	}

	.details-content-item2 {
		padding: 0rpx 30rpx;

	}

	.item2-branch-left image {
		width: 28rpx;
		height: 28rpx;
		margin-right: 12rpx;
	}

	.item2-branch-right image {
		width: 36rpx;
		height: 36rpx;
	}

	.content-item2-branch {
		display: flex;
		justify-content: space-between;
		padding: 20rpx 0rpx;
		border-bottom: 1rpx solid rgba(200, 200, 200, 1);
	}

	.details-content-item3 {
		padding: 0rpx 30rpx;
	}

	.content-item3-branch {
		display: flex;
		justify-content: space-between;
		padding: 36rpx 0rpx 28rpx 0rpx;
		border-bottom: 1rpx solid rgba(200, 200, 200, 1);
	}

	.item3-branch-left image {
		width: 28rpx;
		height: 28rpx;
		margin-right: 12rpx;
	}

	.item3-branch-right image {
		width: 36rpx;
		height: 36rpx;

	}

	.item2-branch-left-txt,
	.item3-branch-left-txt {
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
	}

	.details-content-item4 {
		padding: 0rpx 30rpx;
	}

	.content-item4-branch {
		display: flex;
		justify-content: space-between;
		padding: 30rpx 0rpx;
		border-bottom: 1rpx solid rgba(200, 200, 200, 1);
	}

	.item4-branch-right image {
		width: 36rpx;
		height: 36rpx;

	}

	.item4-branch-left-txt {
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
	}

	.tourist-attraction-main {

		padding: 18rpx 30rpx 26rpx 30rpx;
	}

	.tourist-attraction-main-title {
		color: rgba(16, 16, 16, 100);
		font-size: 32rpx;
		margin-top: 26rpx;
		margin-bottom: 26rpx;
		font-family: PingFangSC-regular;
	}

	.tourist-attraction-main-txt {
		line-height: 50rpx;
		text-indent: 40rpx;
		color: rgba(102, 102, 102, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
	}

	.tourist-attraction-Recommended {
		padding: 0rpx 30rpx;
	}

	.Recommended-title {
		color: rgba(16, 16, 16, 100);
		font-size: 32rpx;
		margin-bottom: 16rpx;
		font-family: PingFangSC-regular;
	}

	.Recommended-item {

		padding: 16rpx 0rpx 26rpx 0rpx;
		border-bottom: 1rpx solid rgba(200, 200, 200, 0.75);
		;
	}

	.Recommended-item-txt {
		margin-left: 18rpx;
		line-height: 35rpx;
	}

	.Recommended-item-img image {
		width: 220rpx;
		height: 150rpx;
		border-radius: 5rpx;
	}

	.Recommended-item-txt1 {
		color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
	}

	.Recommended-item-txt2 {
		color: rgba(255, 127, 34, 100);
		font-size: 24rpx;
		font-family: PingFangSC-regular;
	}

	.Recommended-item-txt3 {
		color: rgba(16, 16, 16, 100);
		font-size: 24rpx;
		font-family: PingFangSC-regular;
	}

	.Recommended-item-txt4 {
		color: rgba(255, 127, 34, 100);
		font-size: 24rpx;
		font-family: PingFangSC-regular;
	}

	.Recommended-item-txt5 {
		color: rgba(16, 16, 16, 100);
		font-size: 24rpx;
		font-family: PingFangSC-regular;
	}

	.Recommended-item {
		display: flex;
	}
	
	.venue-details-facilities{
		padding: 20rpx 30rpx;
	}
	.venue-details-facilities-text {
		width: 126rpx;
		height: 31rpx;
		font-size: 30rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;
		line-height: 36rpx;
	}
	.peitao {
		display: flex;
		flex-wrap: wrap;
		margin: 0 30rpx;
		padding-bottom: 10rpx;
		border-bottom: 1rpx solid rgba(200, 200, 200, 0.75);
	}
	.venue-details-Parking {
		margin-top: 10rpx;
		height: 100rpx;
		text-align: center;
	}
	
	.venue-details-Parking image {
		width: 44rpx;
		height: 44rpx;
		margin-left: 20rpx;
	}
	
	.venue-details-Parking-txt text {
		width: 81rpx;
		height: 27rpx;
		font-size: 28rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #666666;
		line-height: 36rpx;
		margin-left: 20rpx;
		margin-top: 19rpx;
	}
</style>
