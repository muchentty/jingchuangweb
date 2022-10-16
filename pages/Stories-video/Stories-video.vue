<template>
	<view class="top">
		<!--#ifdef H5-->
		<view class="video-js" ref="video" style="width: 100%;height: 100%;"></view>
		<!--#endif-->
		<!--#ifndef H5-->
		<view class="top">
			<video id="myVideo" autoplay :src="url" style="width: 100%; " controls></video>
		</view>
		<!--#endif-->
	</view>
</template>

<script>
	//#ifdef H5
	import VideoJs from 'video.js'
	import 'video.js/dist/admin.css'
	//#endif
	export default {
		data() {
			return {
				url: '',
				poster: '',
				resources: [],
				details: '',
				index:'',
				id:''
			}
		},
		methods: {

		},

		onLoad(e) {
			let that = this
			this.id = e.id
			this.index = e.index
			this.$request('/api/resources/view', {
				id: this.id,
				resources: []
			}, 'post', {}).then(res => {
				if (res.code == 1) {
					//#ifndef H5
					that.url = res.data.resources.data[that.index].url;
					//#endif
					//#ifdef H5
					let video = document.createElement('video');
					video.id = 'video';
					video.style = 'width: 100%; height: 100%;';
					video.controls = true;
					video.preload = "auto" 
					video.autoplay = true
					video.setAttribute('playsinline', true) 
					video.setAttribute('webkit-playsinline', true) 
					video.setAttribute('x5-video-player-type', 'h5') 

					video.setAttribute('class', 'video-js vjs-default-skin vjs-big-play-centered')
					let source = document.createElement('source');
					source.src = res.data.resources.data[that.index].url;
					
					video.appendChild(source);
					that.$refs.video.$el.appendChild(video);
					let player = VideoJs('video', {
						poster: res.data.resources.cover, 
						title: res.data.resources.title,
						playbackRates: [0.7, 1.0, 1.5, 2.0], 
						autoDisable: true,
						preload: 'auto', 
						language: 'zh-CN',
						fluid: true, 
						muted: false, 
						aspectRatio: '16:9', 
						controls: true, 
						autoplay: false, 
						loop: true, 
						screenshot: true,
						controlBar: {
							volumePanel: { 
								inline: false 
							},
							timeDivider: true, 
							durationDisplay: true, 
							progressControl: true, 
							remainingTimeDisplay: true, 
							fullscreenToggle: true, 
							pictureInPictureToggle: true, 
						}
					}, function() {
						this.on('error', function(err) { 

						});
						this.on('stalled', function(stalled) { 

						});
						
						
						
						
						
						
						
						
						
					});
					//#endif
				}

			});


		}

		
	}
</script>

<style>


</style>
