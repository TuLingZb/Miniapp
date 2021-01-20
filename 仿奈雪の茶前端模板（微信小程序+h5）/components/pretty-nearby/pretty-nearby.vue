<template>
	<view class="map" @click="navigateMap">
		<text class="map_icon">&#xe62e;</text>
		<text class="map_text">{{ getStoreId ? locationname : '定位中...' }}</text>
	</view>
</template>

<script>
	const untils = require('../utils/recommend.js');
	export default {
		name: 'upload',
		model: {
			prop: "showPop",
			event: "change"
		},
		props: {
				
		},

		created(options) {
			let that = this;
			if (!uni.getStorageSync('locationname')) {
				untils.getlocation();
				let interval = setInterval(function() {
					if (that.getStoreId == true) {
						clearInterval(interval);
						return;
					}
					if (uni.getStorageSync('locationname')) {
						that.locationname = uni.getStorageSync('locationname');
						that.getStoreId = true;
					}
				}, 1000);
			}
			//不需要推荐最近的门店
			if (uni.getStorageSync('locationname')) {
				that.locationname = uni.getStorageSync('locationname');
				that.getStoreId = true;
			}
		},
		data() {
			return {
				loadMoreText: '加载中...',
				getStoreId: false,
				locationname: '',
			}
		},
		methods: {
			navigateMap() {
				uni.navigateTo({
					url: '../location/location'
				});
			},
		}
	}
</script>

<style>
	@import "./pretty-nearby.css";

	/* 地图图标  begin */
	.map {
		height: 31px;
		color: rgba(255, 255, 255, 1);
		background-color: rgba(56, 56, 56, 1);
		border-radius: 15px;
		line-height: 31px;
		text-align: center;
		position: absolute;
		top: 14px;
		left: 18px;
		padding: 0 10px;
	}
	
	.map_icon {
		font-family: iconfont;
		color: #fff;
		font-size: 19px;
	}
	
	.map_text {
		color: #ffffff;
		font-size: 12px;
		line-height: 20px;
		margin-left: 2px;
		vertical-align: text-bottom;
	}
	
	/* 地图图标  end */
</style>
