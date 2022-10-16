<template>
	<view class="Stories-details" >
		<view class="Stories-details-content">
			<view class="details-content-txt">
				<web-view :webview-styles="webviewStyles" :src="details[index].url" content="text/html;charset=utf-8" ></web-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
				details: [],
				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				},
				index:'',
				id:'',
				url:''
			}
		},
		methods: {

		},
		onLoad(e) {
			this.id = e.id
			this.index = e.index
			this.$request('/api/resources/view', {
				id: this.id,
				cover: '',
				resources: []
			}, 'post', {}).then(res => {
				if (res.code == 1) {
					
					this.resources = res.data
					this.details = res.data.resources.data
					
				}
			})
		},
		onShow(e) {
			this.id = e.id
			this.index = e.index
			this.$request('/api/resources/view', {
				id: this.id,
				cover: '',
				resources: []
			}, 'post', {}).then(res => {
				if (res.code == 1) {
					
					this.resources = res.data
					this.details = res.data.resources.data
					
				}
			})
		}
	}
</script>

<style>
	.Stories-details {
		
		height: 100%;
		width: 100%;
	}

	.Stories-details-content {
		
		width: 100%;
		height: 500rpx;
	}
</style>
