<template>
	<view class="group-details">
		<view class="top-image" v-if="art.artgroup.cover!=''&& art.artgroup.cover!='null'">
			<image :src="art.artgroup.cover"></image>
		</view>
		<view class="solid">

		</view>
		<view class="group-all">
			<view class="group-details-button">
				<view @click="xianshi(0)" :class="index == 0 ? 'button':'butons'"><text>{{jingcaihuigu}}</text></view>
				<view @click="xianshi(1)" :class="index == 1 ? 'button':'butons'"><text>{{jianjie}}</text></view>
				<view @click="xianshi(2)" :class="index == 2 ? 'button':'butons'"><text>{{jiemu}}</text></view>
			</view>
			<view class="group-content">
				<view v-show="index == 0" class="group-content-item">
					<view v-if="art.artgroup.video!= 'null'">
						<view class="group-content-item1" v-for="item in art.artgroup.video">
							<video id="myVideo" :src="item.url"></video>
							<view class="video-name">{{item.name}}</view>
						</view>
					</view>
					<view class="videos" v-else>{{zanwushipin}}</view>
				</view>
				<view v-show="index == 1" class="group-content-item">
					<view class="group-show"  v-html="art.artgroup.content">{{art.artgroup.content}}</view>
				</view>
				<view v-show="index == 2" class="group-content-item">
					<view class="Programmes" v-for="(items,index) in art.lists">
						<view class="Programmes-item">
							<view class="Programmes-image">
								<image :src="items.cover" model="widthFix"></image>
							</view>
							<view class="Programmes-text">
								<view class="Programmes-text-item">
									<view class="Programmes-text-item-right">
										<text class="Programmes-text-item1">{{items.name}}</text>
										<br />
										<text class="Programmes-text-item2">{{items.start_time}} -
											{{items.end_time}}</text>
									</view>
									<view class="Programmes-image-right" @click="choice(items,index)">
										<view :class="items.flag?'Programmes-image-right-circle':'radio'"></view>
									</view>
								</view>
								<text class="Programmes-text-item-text">{{items.content}}</text>
							</view>
						</view>
					</view>
					<view class="inheritance-bottom">
						<view class="inheritance-bottom-left" @click="checkAll">
							<view :class="allFalg?'radios-left':'inheritance-bottom-left-circle'">
							</view>
							<view>{{quanxuan}}</view>
						</view>
						<view class="inheritance-bottom-right">
							<button type="default" @click="subscribe">
								<text class="inheritance-bottom-right-button">{{lijiyuyue}}</text>
							</button>
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
			return {qingxuanzeyuyuejiemu:'',jingcaihuigu:'',zanwushipin:'',lijiyuyue:'',jianjie:'',jiemu:'',quanxuan:'',
				index: 0,
				art: [],
				allFalg: false,
				currend: 0,
				y_id: []
			}
		},
		methods: {
			xianshi(e) {
				
				this.index = e
			},
			subscribe() {
				if (this.y_id.length != 0) {
					let ids = JSON.stringify(this.y_id)
					uni.navigateTo({
						url: '../subscribe/subscribe?ids=' + ids
					})
				} else {
					uni.showToast({
						title:this.qingxuanzeyuyuejiemu,
						icon: 'none'
					})
				}
			},
			choice(item, index) {
				let that = this;
				let id = item.id;
				let ins = ''
				that.art.lists[index].flag = !that.art.lists[index].flag;
				if (that.art.lists[index].flag) {
					that.y_id.push(id)
					
				} else {
					for (let i = 0; i < that.y_id.length; i++) {
						if (id = that.y_id[i]) {
							
							ins = i
						}
					}
					if (ins > -1) {
						that.y_id.splice(ins, 1)
					}
					
				}
				
				if(that.y_id.length == that.art.lists.length){
					that.allFalg = true;
				}else{
					that.allFalg = false;
				}
				this.$forceUpdate()
				
				
			},
			checkAll() {
				this.allFalg = !this.allFalg;
				let id = []
				if (this.allFalg) {
					this.y_id = []
					for (let n = 0; n < this.art.lists.length; n++) {
						this.art.lists[n].flag = true;
						this.y_id.push(this.art.lists[n].id);
					}
					
				} else {
					for (let n = 0; n < this.art.lists.length; n++) {
						this.art.lists[n].flag = false
					}
					this.y_id = [];
				}
				this.$forceUpdate()
			},

			formatRichText(html) {
				let newContent = html.replace(/<img[^>]*>/gi, function(match, capture) {
					match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '');
					match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '');
					match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '');
					return match;
				});
				newContent = new
				Content.replace(/style="[^"]+"/gi, function(match, capture) {
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
		onShow(e) {this.qingxuanzeyuyuejiemu = this.$lang.qingxuanzeyuyuejiemu[uni.getStorageSync('lang')];this.jingcaihuigu = this.$lang.jingcaihuigu[uni.getStorageSync('lang')];this.zanwushipin = this.$lang.zanwushipin[uni.getStorageSync('lang')];this.lijiyuyue = this.$lang.lijiyuyue[uni.getStorageSync('lang')];this.jianjie = this.$lang.jianjie[uni.getStorageSync('lang')];this.jiemu = this.$lang.jiemu[uni.getStorageSync('lang')];this.quanxuan = this.$lang.quanxuan[uni.getStorageSync('lang')];},
		onLoad(e) {this.qingxuanzeyuyuejiemu = this.$lang.qingxuanzeyuyuejiemu[uni.getStorageSync('lang')];this.jingcaihuigu = this.$lang.jingcaihuigu[uni.getStorageSync('lang')];this.zanwushipin = this.$lang.zanwushipin[uni.getStorageSync('lang')];this.lijiyuyue = this.$lang.lijiyuyue[uni.getStorageSync('lang')];this.jianjie = this.$lang.jianjie[uni.getStorageSync('lang')];this.jiemu = this.$lang.jiemu[uni.getStorageSync('lang')];this.quanxuan = this.$lang.quanxuan[uni.getStorageSync('lang')];
			
			let id = e.id;
			this.$request('/api/artgroup/view',{
				id: id,
			},'post',{}).then(res=>{
				
				if (res.code === 1) {
					this.art = res.data;
					uni.setNavigationBarTitle({
					　　title:this.art.artgroup.name
					})
					this.art.artgroup.content = this.formatRichText(this.art.artgroup.content);
					
					for (let i = 0; i < this.art.lists.length; i++) {
						this.art.lists[i].flag = false
					}
					
				}
			})
		},
	}
</script>

<style>
	.top-image image {
		width: 100%;
		height: 431rpx;
	}

	.solid {
		width: 750rpx;
		height: 20rpx;
		background: #F7F7F7;
	}

	.group-all {
		padding: 0rpx 30rpx;
	}

	.group-details-button {
		display: flex;
		padding: 20rpx 0rpx;
		justify-content: space-between;
		align-items: center;
	}

	.button {
		width: 230rpx;
		height: 82rpx;
		background: #FFFFFF;
		border: 1rpx solid rgba(0, 0, 0, 0.06);
		box-shadow: 0rpx 5rpx 7rpx 0rpx rgba(51, 51, 51, 0.19);
		border-radius: 8rpx;
		text-align: center;
		line-height: 82rpx;
		color: #333333;
		font-size: 28rpx;
	}

	.button-text {
		width: 112rpx;
		height: 27rpx;
		font-size: 28rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;
		line-height: 36rpx;

	}

	.item-image image {
		border-radius: 10rpx;
	}

	.item-image {
		padding: 10rpx 0rpx;
	}

	.group-show {
		width: 693rpx;
		height: 321rpx;
		font-size: 28rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;
		line-height: 42rpx;
	}

	.Programmes {
		padding: 15rpx 0rpx;
	}

	.Programmes-item {
		display: flex;
	}

	.Programmes-text {
		width: 55%;
		
		
	}

	.Programmes-text-item1 {
		
		
		font-size: 28rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;
		
	}

	.Programmes-text-item2 {
		width: 172rpx;
		
		font-size: 22rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;
		
	}
	.Programmes-image{
		width: 40%;
		margin-right: 5%;
	}
	.Programmes-image image{
		width: 100%;
		height: 100%;
	}
	.Programmes-image image {
		margin-right: 20rpx;
		margin-top: 33rpx;
	}

	.Programmes-text-item {
		display: flex;
		justify-content: space-between;
	}

	.Programmes-image-right-circle {
		margin-top: 22rpx;
		width: 30rpx;
		height: 30rpx;
		background: #FFFFFF;
		border: 2rpx solid #FF4E5A;
		border-radius: 50%;
		background-color: #FF4E5A;
	}

	.Programmes-image-right-circle1 {
		width: 18rpx;
		height: 18rpx;
		background: #FF4E5A;
		border-radius: 50%;
		position: relative;
		top: 5rpx;
		left: 5rpx;
	}
	.Programmes-text-item-right{
		width:80%
	}
	.Programmes-image-right{
		width:20%
	}

	.radio {
		margin-top: 22rpx;
		width: 30rpx;
		height: 30rpx;
		border: solid 1rpx #999999;
		border-radius: 50%;
	}



	.Programmes-text-item-text {
		width: 406rpx;
		
		font-size: 22rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #333333;
		
	}

	.inheritance-bottom {
		width: 100%;
		height: 79rpx;
		background: #FFFFFF;
		display: flex;
		justify-content: space-between;
		position: fixed;
		bottom: 0px;
		border-top: 1rpx solid rgba(200, 200, 200, 0.75);
	}

	.inheritance-bottom-left {
		padding: 13rpx 0rpx;
		display: flex;
		
	}

	.inheritance-bottom-left-circle {
		width: 30rpx;
		height: 30rpx;
		background: #FFFFFF;
		border: 2rpx solid #999999;
		border-radius: 50%;
		margin-right: 10rpx;
		margin-top: 11rpx;
	}

	.radios-left {
		width: 30rpx;
		height: 30rpx;
		background: #FF4E5A;
		
		border-radius: 50%;
		margin-right: 10rpx;
		margin-top: 11rpx;
	}

	.inheritance-bottom-right button {
		
		height: 79rpx;
		line-height: 79rpx;
		background: #FF4E5A;
	}

	.inheritance-bottom-right-button {
		width: 111rpx;
		
		font-size: 28rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #FFFFFF;
		position: relative;

		padding: 27rpx 44rpx;
		
	}

	
	#myVideo {
		width: 690rpx;
		height: 402rpx;
	}

	.video-name {
		text-align: center;
		margin: 10rpx 0;
	}

	.butons {
		width: 230rpx;
		text-align: center;
		font-size: 28rpx;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #999;
	}
	.videos {
		text-align: center;
		margin-top: 100rpx;
		color: #999999;
	}
</style>
