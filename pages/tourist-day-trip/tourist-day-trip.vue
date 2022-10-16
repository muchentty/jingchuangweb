<template>
	<view class="tourist-day-trip">
		<view class="day-trip-top">
			<image :src="travel.travel.cover"></image>
		</view>
		<view class="day-trip-content" v-if="travel.lists.length!=0">
			<view class="trip-content-title">
				{{jingguojingdian}}
			</view>
			<view class="trip-content-dipaly">
				<view class="trip-content-item" @click="touristAD(item)" v-for="item in travel.lists">
					<view class="trip-content-item-img">
						<image :src="item.cover"></image>
					</view>
					<text>{{item.name}}</text>
				</view>
			</view>
		</view>
		<view class="day-trip-details">
			<view class="trip-details-title">{{travel.travel.title}}</view>
			<view class="trip-details-item">
				<view class="details-item-title" v-html="toucpntent"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				jingguojingdian: '',
				travel: [],
				toucpntent: ''
			}
		},
		methods: {
			touristAD(item) {
				uni.navigateTo({
					url: '../tourist-attraction-details/tourist-attraction-details?id=' + item.id
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
					match = match.replace(/width="[^"]+"/gi, 'style="width:100%" autoplay="autoplay"').replace(
						/width='[^']+'/gi, '');
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
			this.jingguojingdian = this.$lang.jingguojingdian[uni.getStorageSync('lang')];
		},
		onLoad(e) {
			this.jingguojingdian = this.$lang.jingguojingdian[uni.getStorageSync('lang')];
			let id = e.id;
			this.$request('/api/venue/view_travel', {
				id: id
			}, 'post', {}).then(res => {


				if (res.code == 1) {
					this.travel = res.data
					this.toucpntent = this.formatRichText(this.travel.travel.content)
					uni.setNavigationBarTitle({
						title: this.travel.travel.title
					})
				}
			})
		}
	}
</script>

<style>
	.day-trip-top image {
		width: 100%;
		height: 354rpx;
	}

	.trip-content-dipaly {
		display: flex;
		text-align: center;
		overflow-y: scroll;
	}

	/* #ifdef H5 */
	.trip-content-dipaly::-webkit-scrollbar {
		/* 隐藏滚动条，但依旧具备可以滚动的功能 */			display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
		color: transparent;
	}

	/* #endif */
	.trip-content-title {
		margin-top: 26rpx;
		margin-bottom: 12rpx;
		color: rgba(16, 16, 16, 100);
		font-size: 32rpx;
		font-family: PingFangSC-regular;
	}

	.day-trip-content {
		padding: 0rpx 30rpx;


	}

	.trip-content-item {
		margin-right: 20rpx;
	}

	.trip-content-item text {
		color: rgba(51, 51, 51, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
	}

	.trip-content-item-img image {
		width: 200rpx;
		height: 132rpx;
		border-radius: 14rpx;
		margin-bottom: 10rpx;
	}

	.day-trip-details {

		padding: 28rpx 30rpx 0rpx 30rpx;
	}

	.trip-details-title {
		text-align: center;
		width: 534rpx;
		height: 52rpx;
		background-color: #E6FFF8;
		color: rgba(49, 188, 147, 100);
		font-size: 36rpx;
		font-family: PingFangSC-regular;
		margin: 0rpx 78rpx 44rpx 78rpx;
	}

	.details-item-small {
		text-align: center;
		margin-bottom: 24rpx;
	}

	.details-item-smalltxt {
		text-indent: 40rpx;
		color: rgba(102, 102, 102, 100);
		font-size: 28rpx;
		font-family: PingFangSC-regular;
	}

	.trip-details-item {
		margin-bottom: 25rpx;

	}
</style>
