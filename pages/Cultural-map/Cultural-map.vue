<template>
	<view>
		<router></router>
		<view class="Cultural-map">
			<view class="all-address">
				您所在的位置：首页>{{name}}
			</view>
			<view class="Cultural-map-content">
				<view class="Cultural-map-content-left">
					<view :style="{ width: '100%', height: '382px', overflow: 'hidden' }">
					    <view id="container" style="width:100%;height:400px;"></view>
					  </view>
					<!-- <view class="allmap-container" v-show="show">
							<view @click="allmap.onClick" :prop="markerList" :change:prop="allmap.updateEcharts" id="allmap"></view>
						</view> -->
					<!-- <view class="map" :style="[{height: winHeight + 'px'}]"> -->
								<!-- <web-view src="/utils/map.html"></web-view> -->
							<!-- </view> -->
					<!-- <image src="../../static/banner.png" mode=""></image> -->
				</view>
				<view class="Cultural-map-content-right">
					<view :class="op==0?'content-right-item':'content-right-item1'" @click="opactiy(0)">
						<text>全部</text>
					</view>
					<view :class="op==1?'content-right-item':'content-right-item1'" @click="opactiy(1)">
						<text>文化站</text>
					</view>
					<view :class="op==2?'content-right-item':'content-right-item1'" @click="opactiy(2)">
						<text>剧院</text>
					</view>
					<view :class="op==3?'content-right-item':'content-right-item1'" @click="opactiy(3)">
						<text>艺术馆</text>
					</view>
					<view :class="op==4?'content-right-item':'content-right-item1'" @click="opactiy(4)">
						<text>博物馆</text>
					</view>
					<view :class="op==5?'content-right-item':'content-right-item1'" @click="opactiy(5)">
						<text>图书馆</text>
					</view>
					<view :class="op==6?'content-right-item':'content-right-item1'" @click="opactiy(6)">
						<text>美术馆</text>
					</view>
					<view :class="op==7?'content-right-item':'content-right-item1'" @click="opactiy(7)">
						<text>旅游景点</text>
					</view>
				</view>
			</view>
		</view>
		<bottom></bottom>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				op:0,
				markerList: [],
								dataIndex: '',
								adCode: 330700, // 绍兴
								city: '金华市',
			}
		},
		mounted() {
		   this.init();
		 },
		methods: {
			opactiy(e){
				this.op=e
			},
			 // 高德地图
			     init() {
			       var map = new AMap.Map("container", {
			         zoom: 11, //级别
			         center: [113.880984, 22.623527], //中心点坐标
			         viewMode: "3D" //使用3D视图
			       });
			       map.plugin("AMap.Geolocation", function() {
			         var geolocation = new AMap.Geolocation({
			           enableHighAccuracy: true, //是否使用高精度定位，默认:true
			           timeout: 10000, //超过10秒后停止定位，默认：无穷大
			           maximumAge: 0, //定位结果缓存0毫秒，默认：0
			           convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
			           showButton: true, //显示定位按钮，默认：true
			           buttonPosition: "LB", //定位按钮停靠位置，默认：'LB'，左下角
			           buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
			           showMarker: true, //定位成功后在定位到的位置显示点标记，默认：true
			           showCircle: true, //定位成功后用圆圈表示定位精度范围，默认：true
			           panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
			           zoomToAccuracy: true //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
			         });
			         map.addControl(geolocation);
			         geolocation.getCurrentPosition();
			         AMap.event.addListener(geolocation, "complete", location =>
			           console.log("定位成功")
			         ); //返回定位信息
			         AMap.event.addListener(geolocation, "error", () =>
			           console.log("定位出错")
			         ); //返回定位出错信息
			       });
			     },
			}
	}
</script>



<style>
	#container {width:300px; height: 180px; } 
.all-address{
		width: 1200rpx;
		/* margin-left: 170rpx; */
		/* border: 1rpx solid red; */
		padding-top: 50rpx;
		font-size: 20rpx;
		margin-bottom: 30rpx;
	}
.Cultural-map{
	/* border: 1rpx solid red; */
	padding: 0rpx 170rpx;
	padding-bottom: 100rpx;
}
.Cultural-map-content{
    border: 1rpx solid rgba(200,200,200,0.75);
	display: flex;
}
.Cultural-map-content-left{
	width: 1310rpx;
	height: 700rpx;
	/* border: 1rpx solid red; */
}
.Cultural-map-content-left image{
	width: 1310rpx;
	height: 700rpx;
}
.Cultural-map-content-right{
	/* border: 1rpx solid red; */
	width: 250rpx;
}
.content-right-item{
	width: 250rpx;
	height: 88rpx;
	line-height: 88rpx;
	text-align: center;
	/* border: 1rpx solid black; */
	background-color:#CF282B ;
	border: 1rpx dashed #FFFFFF;
	color: #FFFFFF;
	font-size: 24rpx;
}
.content-right-item1{
	width: 250rpx;
	height: 88rpx;
	line-height: 88rpx;
	text-align: center;
	/* border: 1rpx solid black; */
	background-color:#CF282B ;
	border: 1rpx dashed #FFFFFF;
	color: #FFFFFF;
	font-size: 24rpx;
	opacity: 0.5;
}
</style>
