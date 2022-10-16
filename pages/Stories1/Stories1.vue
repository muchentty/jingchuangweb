<template>
	<view class="redBook">
		<lz-red-book ref="lzRedBook" :bookText="jiazaizhong" :scrollDirection="set.scrollDirection" :bookStyle="{ background:set.background,'font-size':set.fontSize+'px','line-height':set.lineHeight+'px','color':set.fontColor}"
		 @clickCenter="clickCenter" @scrollEnd="scrollEnd" @scrollStart="scrollStart"></lz-red-book>
		
		<view class="mask-top" :style="{top:mask.showMask?0:-100+'upx','background':mask.background}">
			<view style="letter-spacing: 10px; line-height: 20px;">{{story_name}}</view>
		</view>
		
		<view class="mask-bottom" :style="{bottom:mask.showMask?0:-300+'upx','background':mask.background}">
			<view class="v1">
				<view class="slider-warp">
					{{ziti}}：
					<slider class="slider" block-size="20" activeColor="#FFCC33" :step="2" backgroundColor="#000000" block-color="#8A6DE9"
					 :value="set.fontSize" @change="sliderChange($event,'fontSize')" min="18" max="30" />
				</view>
				<view class="slider-warp">
					{{jianju}}：
					<slider class="slider" block-size="20" activeColor="#FFCC33" :step="2" backgroundColor="#000000" block-color="#8A6DE9"
					 :value="set.lineHeight" @change="sliderChange($event,'padding')" min="26" max="40" />
				</view>
			</view>
			<view class="v1">
				{{gundongfangxiang}}：
				<uni-tag :text="zuoyou" :inverted="set.scrollDirection=='topBottom' ? true : false" type="primary" @click="changeScrollDirection('leftRight')"
				 size="small" />
				<uni-tag :text="shangxia" :inverted="set.scrollDirection=='leftRight' ? true : false" type="primary" @click="changeScrollDirection('topBottom')"
				 size="small" style="color: #333333; margin-left: 10px;" />
			</view>
			<view class="v2">
				<view v-for="(item,index) in arr" :key="index" :class="mask.backgroundIndex==index?'color-warp':''" class="v1-color"
				 @click="changeBackground(index)">
					<uni-icons type="smallcircle-filled" size="26" :color="item.color"></uni-icons>
				</view>
			</view>

		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {zuihouyiyeliao:'',gundongfangxiang:'',jiazaizhong:'加载中...',diyiye:'',ziti:'',jianju:'',zuoyou:'',shangxia:'',
				mask: { 
					showMask: false,
					background: '#fff',
					backgroundIndex: 0,
				},
				set: {
					background: '#f0f0f0', 
					fontSize: 18, 
					lineHeight: 33, 
					fontColor: '#000', 
					scrollDirection: 'leftRight', 
					screenHeight:800
				},
				arr: [{
						background: '#f0f0f0', 
						maskBg: '#fff', 
						fontColor: '#524d51', 
						color: '#f5f5f5', 
					},
					{
						background: '#d8c9aa', 
						maskBg: '#f3e4c3', 
						fontColor: '#3c2506', 
						color: '#e0d1aa', 
					},
					{
						background: '#daba94', 
						maskBg: '#f8dcb4', 
						fontColor: '#3c2506', 
						color: '#d8b784', 
					},
					{
						background: '#cfb793', 
						maskBg: '#f8dcb4', 
						fontColor: '#674923', 
						color: '#d6b781', 
					},
					{
						background: '#aac9aa', 
						maskBg: '#cdeccd', 
						fontColor: '#2c1e1e', 
						color: '#abcaab', 
					},
					{
						background: '#333b3d', 
						maskBg: '#313439', 
						fontColor: '#7e8894', 
						color: '#626a75', 
					}
				],
				StoriesList: '',
				qiehuan: 0,
				details: [],
				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				},
				index: '',
				id: '',
				url: '',
				story_name:''
			}
		},
		onLoad(e) {
			this.id = e.id
			this.index = e.index
			this.url = e.url
			let that = this
			uni.request({
				url: that.url,   
				success:function(res){
					that.jiazaizhong = res.data
				}
			})
		},
		onShow(e) {
			this.zuihouyiyeliao = this.$lang.zuihouyiyeliao[uni.getStorageSync('lang')];this.gundongfangxiang = this.$lang.gundongfangxiang[uni.getStorageSync('lang')];this.diyiye = this.$lang.diyiye[uni.getStorageSync('lang')];this.ziti = this.$lang.ziti[uni.getStorageSync('lang')];this.jianju = this.$lang.jianju[uni.getStorageSync('lang')];this.zuoyou = this.$lang.zuoyou[uni.getStorageSync('lang')];this.shangxia = this.$lang.shangxia[uni.getStorageSync('lang')];
			//#ifdef APP-PLUS
			plus.navigator.setFullscreen(true); 
			//#endif
			let that = this
			uni.getSystemInfo({
				success: (res) => {
					that.set.screenHeight = res.windowHeight - 100;
				}
			});
			this.$request('/api/resources/view', {
				id: that.id,
				cover: '',
				resources: []
			}, 'post', {}).then(res => {
				if (res.code == 1) {
					that.story_name = res.data.resources.data[that.index].name
				}

			});
			
		},
		methods: {

			
			clickCenter() {
				let that = this
				that.mask.showMask = !that.mask.showMask
			},
			
			scrollEnd() {
				uni.showToast({
					title:this.zuihouyiyeliao
				});
			},
			
			scrollStart() {
				uni.showToast({
					title:this.diyiye
				});
			},
			
			sliderChange(e, type) {
				let that = this
				that.$refs.lzRedBook.init()
				if (type == 'fontSize') {
					
					that.set.fontSize = e.detail.value
				} else {
					that.set.lineHeight = e.detail.value
				}
				
				uni.$emit('lz-red-book-change')
			},
			
			changeScrollDirection(text) {
				let that = this
				that.set.scrollDirection = text
				
				uni.$emit('lz-red-book-change', 'changeScrollDirection')
			},
			
			changeBackground(index) {
				let that = this
				that.mask.backgroundIndex = index
				that.set.background = that.arr[index].background 
				that.set.fontColor = that.arr[index].fontColor 
				that.mask.background = that.arr[index].maskBg 

			},

		}
	};
</script>

<style scoped lang="scss">
	
	
	
	.redBook {
		width: 100%;
		height: 100%;

		.mask-top {
			position: fixed;
			height: 40upx;
			transition: all 0.2s;
			width: 100%;
			z-index: 1000;
			margin: auto;
			border-radius: 0 0 4px 4px;
		}

		.mask-bottom {
			position: fixed;
			height: 300upx;
			transition: all 0.2s;
			width: 100%;
			z-index: 1000;
			margin: auto;
			border-radius: 10px 10px 0 0;
			padding: 10px;
			box-sizing: border-box;

			.v1 {
				width: 100%;
				display: flex;
				align-items: center;

				.slider-warp {
					display: flex;
					flex: 1;
					align-items: center;

					.slider {
						flex: 1;
					}
				}
			}

			.v2 {
				display: flex;
				width: 100%;
				justify-content: space-around;
				margin-top: 10px;

				.color-warp {
					border: 1px solid #6d583b;
					border-radius: 50%;
					width: 26px;
					height: 26px;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}

			.v3 {
				margin-top: 10px;

				.v3-item {
					width: 100px;
					height: 30px;
					background: #f7f7f7;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}
		}
	}
</style>