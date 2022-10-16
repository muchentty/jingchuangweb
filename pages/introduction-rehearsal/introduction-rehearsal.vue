<template>
	<view class="introduction-rehearsal">
		<view class="venue-details-top">
			<image :src="place.yard.cover"></image>
		</view>
		<view class="venue-details-area block">
			<view class="venue-details-area-item">
				<view class="venue-details-area-item2">
					<text>{{place.yard.name}}</text>
				</view>
				<!-- <view class="venue-details-area-item3">
					<text>68㎡</text>
				</view> -->
			</view>
			<view class="solid">

			</view>
			<view class="venue-details-area-item1">
				<view class="venue-details-area-item1-display">
					<!-- <view class="venue-details-map">
						<image src="../../static/map.png" mode=""></image>
					</view> -->
					<view class="venue-details-address">
						<text>{{place.yard.tel}}</text>
					</view>
				</view>
				<view class="venue-details-phone">
					<image src="../../static/phone.png" mode=""></image>
				</view>
			</view>
			<view class="venue-details-area-item1">
				<view class="venue-details-area-item1-display">

					<view class="venue-details-address">
						<text>{{place.yard.start_time}}-{{place.yard.end_time}}</text>
					</view>
				</view>

			</view>
			<view class="solidB">

			</view>
			<view class="venue-details-facilities">
				<text class="venue-details-facilities-text">{{peitaosheshi}}</text>
			</view>
			<view class="venue-details-Parking" v-for="item in place.yard.facilities">
				<view class="venue-details-Parking-img">
					<image :src="item.icon" mode=""></image>
				</view>
				<view class="venue-details-Parking-txt">
					<text>{{item.name}}</text>
				</view>
			</view>
			<view class="solidC">

			</view>
			<view class="venue-details-show">
				<view class="venue-details-show-txt1">
					{{changguanjieshao}}
				</view>
				<view class="venue-details-show-txt2">
					<view class="wen" style="width: 100%;overflow: hidden;" v-html="context" v-if="is_h5==1">
					</view>
					<u-parse :content="context" v-if="is_h5==0"></u-parse>
				</view>
			</view>
			<view class="solidD">
				<view class="solidD-bottom">
					<button type="default" class="solidD-bottom-txt" @click="addressbooking(place.yard.id)">
						<text>{{woyaoyuding}}</text>
					</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				peitaosheshi: '',
				changguanjieshao: '',
				woyaoyuding: '',
				is_h5: 1,
				place: [],
				context:''
			}
		},
		methods: {
			addressbooking(id) {
				uni.navigateTo({
					url: '../address-booking/address-booking?id=' + id
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
			this.peitaosheshi = this.$lang.peitaosheshi[uni.getStorageSync('lang')];
			this.changguanjieshao = this.$lang.changguanjieshao[uni.getStorageSync('lang')];
			this.woyaoyuding = this.$lang.woyaoyuding[uni.getStorageSync('lang')];
		},
		onLoad(e) {
			this.peitaosheshi = this.$lang.peitaosheshi[uni.getStorageSync('lang')];
			this.changguanjieshao = this.$lang.changguanjieshao[uni.getStorageSync('lang')];
			this.woyaoyuding = this.$lang.woyaoyuding[uni.getStorageSync('lang')];
			//#ifdef MP-WEIXIN
			this.is_h5 = 0;
			//#endif
			let id = e.id;
			this.$request('/api/venue/view_yard', {
				id: id
			}, 'post', {}).then(res => {

				if (res.code === 1) {
					this.place = res.data
					
					this.context = this.formatRichText(res.data.yard.content);
				}
			})
		}
	}
</script>

<style>
	.venue-details-area-item,
	.venue-details-area-item1,
	.venue-details-facilities,
	.venue-details-show,
	.venue-booking {
		padding: 0rpx 30rpx;
	}

	.solid {
		width: 690rpx;
		height: 1px;
		background: #333333;
		opacity: 0.15;
		margin-left: 30rpx;
		margin-bottom: 41rpx;
	}

	.solidB {
		width: 750rpx;
		height: 20rpx;
		background: #F7F7F7;

		margin: 41rpx 0rpx;
	}

	.solidC {
		width: 750Rpx;
		height: 20Rpx;
		background: #F7F7F7;
		margin: 30rpx 0rpx 40rpx 0rpx;
	}

	.solidD {
		margin-top: 40rpx;
		width: 750rpx;
		height: 220rpx;
		background: #F7F7F7;

		bottom: 0rpx;
	}

	.solidD-bottom button {
		position: relative;
		top: 60rpx;
		width: 590rpx;
		height: 80rpx;
		line-height: 80rpx;
		background: #FF4E5A;
		border-radius: 40rpx;
	}

	.solidD-bottom-txt {}

	.solidD-bottom-txt text {
		width: 144rpx;
		height: 34rpx;
		font-size: 36rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #FFFFFF;

		line-height: 36rpx;
	}

	.venue-details-top image {
		width: 750rpx;
		height: 433rpx;
	}

	.venue-details-area {
		position: absolute;
		top: 410rpx;
		width: 750rpx;
		height: 355rpx;
		background: #FFFFFF;

		border-radius: 30rpx 30rpx 0px 0px;
	}

	.venue-details-area-item2 {
		margin-top: 30rpx;
	}

	.venue-details-area-item2 text {
		width: 220rpx;
		height: 31rpx;
		font-size: 32rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;
		line-height: 36rpx;
		padding: 30rpx 0rpx 22rpx 0rpx;
	}

	.venue-details-area-item3 {
		margin-top: 22rpx;
		margin-bottom: 27rpx;
	}

	.venue-details-area-item3 text {
		width: 71rpx;
		height: 22rpx;
		font-size: 24rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #999999;
		line-height: 36rpx;
		margin-right: 26rpx;
	}

	.venue-details-area-item1 {}

	.venue-details-address text {
		width: 325rpx;
		height: 28rpx;
		font-size: 28rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;
		line-height: 36rpx;
	}

	.venue-details-area-item1 {
		display: flex;
		justify-content: space-between;
	}

	.venue-details-area-item1-display {
		display: flex;
	}

	.venue-details-map image {
		width: 30rpx;
		height: 30rpx;
		margin-right: 12rpx;
	}

	.venue-details-phone image {
		width: 30rpx;
		height: 28rpx;
	}

	.venue-details-facilities-text {
		width: 126rpx;
		height: 31rpx;
		font-size: 32rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;
		line-height: 36rpx;
	}

	.venue-details-Parking {
		margin-top: 40rpx;
	}

	.venue-details-Parking image {
		width: 44rpx;
		height: 44rpx;
		margin-left: 88rpx;
	}

	.venue-details-Parking-txt text {
		width: 81rpx;
		height: 27rpx;
		font-size: 28rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #666666;
		line-height: 36rpx;
		margin-left: 69rpx;
		margin-top: 19rpx;
	}

	.venue-details-show-txt1 {

		height: 31rpx;
		font-size: 32rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;
		line-height: 36rpx;
		margin-bottom: 29rpx;
	}

	.venue-details-show-txt2 {
		font-size: 28rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;
		line-height: 43rpx;
		text-indent: 40rpx;
	}
	/* #ifdef MP-WEIXIN */
	/**
	 * author: Di (微信小程序开发工程师)
	 * organization: WeAppDev(微信小程序开发论坛)(http://weappdev.com)
	 *         垂直微信小程序开发交流社区
	 *
	 * github地址: https://github.com/icindy/wxParse
	 *
	 * for: 微信小程序富文本解析
	 * detail : http://weappdev.com/t/wxparse-alpha0-1-html-markdown/184
	 */

	.wxParse {
		width: 100%;
		font-family: Helvetica, sans-serif;
		font-size: 30upx;
		color: #666;
		line-height: 1.8;
	}
	
	.wxParse view {
		display: inline;
		word-break: hyphenate;
	}
	
	.wxParse .inline {
		display: inline;
		margin: 0;
		padding: 0;
	}
	
	.block {
		display: block !important;
		margin: 0;
		padding: 0;
	}
	
	.wxParse .div {
		margin: 0;
		padding: 0;
	}
	
	.wxParse .h1 .text {
		font-size: 2em;
		margin: 0.67em 0;
	}
	
	.wxParse .h2 .text {
		font-size: 1.5em;
		margin: 0.83em 0;
	}
	
	.wxParse .h3 .text {
		font-size: 1.17em;
		margin: 1em 0;
	}
	
	.wxParse .h4 .text {
		margin: 1.33em 0;
	}
	
	.wxParse .h5 .text {
		font-size: 0.83em;
		margin: 1.67em 0;
	}
	
	.wxParse .h6 .text {
		font-size: 0.67em;
		margin: 2.33em 0;
	}
	
	.wxParse .h1 .text,
	.wxParse .h2 .text,
	.wxParse .h3 .text,
	.wxParse .h4 .text,
	.wxParse .h5 .text,
	.wxParse .h6 .text,
	.wxParse .b,
	.wxParse .strong {
		font-weight: bolder;
	}
	
	
	.wxParse .p {
		margin: 1em 0;
	}
	
	.wxParse .i,
	.wxParse .cite,
	.wxParse .em,
	.wxParse .var,
	.wxParse .address {
		font-style: italic;
	}
	
	.wxParse .pre,
	.wxParse .tt,
	.wxParse .code,
	.wxParse .kbd,
	.wxParse .samp {
		font-family: monospace;
	}
	
	.wxParse .pre {
		overflow: auto;
		background: #f5f5f5;
		padding: 16upx;
		white-space: pre;
		margin: 1em 0upx;
	}
	
	.wxParse .code {
		display: inline;
		background: #f5f5f5;
	}
	
	.wxParse .big {
		font-size: 1.17em;
	}
	
	.wxParse .small,
	.wxParse .sub,
	.wxParse .sup {
		font-size: 0.83em;
	}
	
	.wxParse .sub {
		vertical-align: sub;
	}
	
	.wxParse .sup {
		vertical-align: super;
	}
	
	.wxParse .s,
	.wxParse .strike,
	.wxParse .del {
		text-decoration: line-through;
	}
	
	.wxParse .strong,
	.wxParse .s {
		display: inline;
	}
	
	.wxParse .a {
		color: deepskyblue;
	}
	
	.wxParse .video {
		text-align: center;
		margin: 22upx 0;
	}
	
	.wxParse .video-video {
		width: 100%;
	}
	
	.wxParse .img {
		display: inline-block;
		width: 0;
		height: 0;
		max-width: 100%;
		overflow: hidden;
	}
	
	.wxParse .blockquote {
		margin: 10upx 0;
		padding: 22upx 0 22upx 22upx;
		font-family: Courier, Calibri, "宋体";
		background: #f5f5f5;
		border-left: 6upx solid #dbdbdb;
	}
	
	.wxParse .blockquote .p {
		margin: 0;
	}
	
	.wxParse .ul,
	.wxParse .ol {
		display: block;
		margin: 1em 0;
		padding-left: 33upx;
	}
	
	.wxParse .ol {
		list-style-type: disc;
	}
	
	.wxParse .ol {
		list-style-type: decimal;
	}
	
	.wxParse .ol>weixin-parse-template,
	.wxParse .ul>weixin-parse-template {
		display: list-item;
		align-items: baseline;
		text-align: match-parent;
	}
	
	.wxParse .ol>.li,
	.wxParse .ul>.li {
		display: list-item;
		align-items: baseline;
		text-align: match-parent;
	}
	
	.wxParse .ul .ul,
	.wxParse .ol .ul {
		list-style-type: circle;
	}
	
	.wxParse .ol .ol .ul,
	.wxParse .ol .ul .ul,
	.wxParse .ul .ol .ul,
	.wxParse .ul .ul .ul {
		list-style-type: square;
	}
	
	.wxParse .u {
		text-decoration: underline;
	}
	
	.wxParse .hide {
		display: none;
	}
	
	.wxParse .del {
		display: inline;
	}
	
	.wxParse .figure {
		overflow: hidden;
	}
	
	.wxParse .table {
		width: 100%;
	}
	
	.wxParse .thead,
	.wxParse .tfoot,
	.wxParse .tr {
		display: flex;
		flex-direction: row;
	}
	
	.wxParse .tr {
		width: 100%;
		display: flex;
		border-right: 2upx solid #e0e0e0;
		border-bottom: 2upx solid #e0e0e0;
	}
	
	.wxParse .th,
	.wxParse .td {
		display: flex;
		width: 1276upx;
		overflow: auto;
		flex: 1;
		padding: 11upx;
		border-left: 2upx solid #e0e0e0;
	}
	
	.wxParse .td:last {
		border-top: 2upx solid #e0e0e0;
	}
	
	.wxParse .th {
		background: #f0f0f0;
		border-top: 2upx solid #e0e0e0;
	}
	
	/* #endif */
</style>
