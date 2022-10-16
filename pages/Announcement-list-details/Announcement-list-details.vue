<template>
	<view class="Announcement-list-details">
		<view class="list-details-content">
			<view class="details-content-title">
				{{noticedetails.title}}
			</view>
			<view class="details-content-time">
				{{noticedetails.create_time}}
			</view>
			<view class="details-content-summary">
				{{noticedetails.summary}}
			</view>
			<view class="details-content-main" v-html="content">
				{{noticedetails.content}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				noticedetails:[],
				id:'',
				title:'',
				content:''
			}
		},
		methods: {
			formatRichText(html) {
				let newContent = html.replace(/<img[^>]*>/gi, function(match, capture) {
					match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '');
					match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '');
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
		onLoad(e) {
			let id=e.id
			
			this.$request('/api/common/notice',{
				id:id
				
			},'post',{}).then(res=>{
				
				if(res.code==1){
					this.noticedetails=res.data.notice
					this.content = this.formatRichText(this.noticedetails.content);
					
				}
			})
		}
	}
</script>

<style>
.list-details-content{
	padding: 15rpx 30rpx;
	
	width: 100%;
	height: 100%;
}
.details-content-title{
	color: rgba(16, 16, 16, 100);
	font-size: 36rpx;
	font-family: PingFangSC-regular;
	margin-bottom: 20rpx;
}
.details-content-time{
	margin-bottom: 6rpx;
	color: rgba(102, 102, 102, 100);
	font-size: 28rpx;
	font-family: PingFangSC-regular;
}
.details-content-summary{
	margin-bottom: 20rpx;
	color: rgba(102, 102, 102, 100);
	font-size: 28rpx;
	font-family: PingFangSC-regular;
}
.details-content-main{
	color: rgba(16, 16, 16, 100);
	font-size: 28rpx;
	font-family: PingFangSC-regular;
}
</style>
