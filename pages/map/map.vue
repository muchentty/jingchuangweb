<template>
    <view>
        <view class="page-body">
            <view class="page-section page-section-gap">
                <map class="maps" :style="{ 'height': height + 'px'}" :latitude="venue.latitude" :longitude="venue.longitude" :markers="covers" enable-3D="false" show-compass="false" enable-overlooking="false">
                </map>
            </view>
			<view class="resource" style="height:50px">
				<view class="map" @click="go_location">
					<view class="map_t">{{daohang}}</view>
				</view>
			</view>
        </view>
    </view>
</template>

<script>
	export default {
		data() {
			return {
				daohang:'',
				venue_id:'',
				venue:[],
				height:'',
				covers:[],
			}
		},
		methods: {
			go_location(){
				let latitude = Number(this.venue.latitude)
				let longitude = Number(this.venue.longitude)
				uni.openLocation({
					latitude: latitude,
					longitude: longitude,
					success: function () {
						
					},fail:function(res){
						
					},complete:function(res){
						
					}
				});
			}
		},
		onShow(e) {this.daohang = this.$lang.daohang[uni.getStorageSync('lang')];},
		onLoad(e) {this.daohang = this.$lang.daohang[uni.getStorageSync('lang')];
			uni.getSystemInfo({
				success: (res)=> {
					let height=res.windowHeight 
					this.height = height - 50
				}
			});
			this.venue_id = e.id
			this.$request('/api/venue/view', {
				id: this.venue_id
			}, 'post', {}).then(res => {
				if (res.code === 1) {
					let arr = res.data.venue.position.split(",");
					res.data.venue.latitude = arr[1]
					res.data.venue.longitude = arr[0]
					this.venue = res.data.venue;
					this.covers=[{
						id:res.data.venue.id,
						latitude: arr[1],
						longitude: arr[0],
						iconPath: '../../static/location-red.png',
						title:res.data.venue.address
						}]
				}
			})
		}
	}
</script>

<style>
.maps{
	width:100%
}
.map{
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
}
.map_t{
    display: flex;
    color: rgba(102, 102, 102, 100);
    font-size: 18px;
    font-family: PingFangSC-regular;
    margin-left: 320rpx;
}
</style>
