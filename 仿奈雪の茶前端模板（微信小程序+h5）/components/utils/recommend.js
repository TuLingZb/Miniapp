import amap from './amap-wx.js';
import Citys from './citys.js'
import regeneration from './regenerator-runtime/runtime.js';
import QQMapWX from './qqmap-wx-jssdk.js';
let qqmapsdk = new QQMapWX({
	key: 'CWSBZ-MS3KO-2ZKWF-SHUHD-PNU7V-QHFNG' // 必填
});
let startSite = '' //开始的经纬度
let storeList = [] // 门店数据
let minMechanismId = '' // 最近距离的机构Id
let minStoreId = '' // 最近距离门店ID
let minStoName = '' // 最近门店名称
let minStoAddress = '' // 最近门店地址

let count = 0 // 用来标记遍历的门店数
let presentProvince = '' // 当前位置的省
let presentCity = '' // 当前位置的城市
let max = 9999999999999999

/**
 * @description  获取地理位置插件
 */
function getlocation() {
	let amapPlugin = new amap.AMapWX({
		key: '1086065bcc087f39ebf8b09ebb743d2a'
	});
	amapPlugin.getRegeo({
		success: data => {
			presentProvince = data[0].regeocodeData.addressComponent.province
			presentCity = data[0].regeocodeData.addressComponent.city
			uni.setStorageSync('location', data[0].longitude + ',' + data[0].latitude); //纬度
			uni.setStorageSync('getLocation', data[0].latitude + ',' + data[0].longitude); //经度
			uni.setStorageSync('province', data[0].regeocodeData.addressComponent.province);
			uni.setStorageSync('city', data[0].regeocodeData.addressComponent.city);
			startSite = data[0].latitude + ',' + data[0].longitude //开始的经纬度
			uni.request({
				method: 'POST',
				url: getApp().globalData.url + '/applet/store/list',
				header: {
					"Content-Type": "application/json" //如果为空，加上头部接收     
				},
				success: (res) => {
					storeList = res.data.data
					let i = 0 // 递增遍历所有门店
					getcount(i)
				},
				fail: (err) => {
					this.error()
					uni.hideLoading()
				}
			})
		},
		fail: data => {
			uni.showToast({
				title: '获取地理位置失败',
				icon: 'none'
			});
			uni.hideLoading();
		}
	});
};

/**
 * @description  遍历所有门店的经纬度，算出当前位置和所有门店的距离，排序取最小值
 */
function getcount(i) {
	console.log(i)
	if (i == storeList.length) {
		
		if (count == 0) {
			uni.setStorageSync('location', storeList[0].stoAddress)
			uni.setStorageSync('locationname', storeList[0].stoName)
			uni.setStorageSync('storeId', storeList[0].storeId)
			uni.setStorageSync('mechanismId', storeList[0].stoMechanism)
			uni.showToast({
				title:'你附近没有门店哦,请手动选择',
				icon:'none'
			})
		} else {
			uni.setStorageSync('mechanismId', minMechanismId)
			uni.setStorageSync('location', minStoAddress)
			uni.setStorageSync('locationname', stoName)
			uni.setStorageSync('storeId', storeId)
		}
		return
	}
	if (storeList[i].stoProvince == presentProvince && storeList[i].stoCity == presentCity) { //先选择同一个市的
		console.log(storeList[i].stoProvince, storeList[i].stoCity )
		let that = this	
		// 计算两点之间的距离
		uni.request({
			method: 'GET',
			url: 'https://apis.map.qq.com/ws/distance/v1/?mode=' + 'walking' + '&from=' + startSite + '&to=' + storeList[i].stoMap +
				'&key=' +
				'KRMBZ-FDXK6-25VSB-EIG5J-7U7LT-Z4B4T',
			header: {
				"Content-Type": "application/json"   
			},
			success: (res) => {
				if (res.data.status == 0) {
					let distance = Math.floor(res.data.result.elements[0].distance / 1000)
					if (distance < max) {
						max = distance
						minStoAddress = storeList[i].stoAddress
						minStoreId = storeList[i].storeId
						minStoName = storeList[i].stoName
						minMechanismId = storeList[i].stoMechanism
					}
					count++;
					i++;
					getcount(i) //递归
				}
			}
		})
	} else {
		i++;
		getcount(i)
	}

}
module.exports = {
	getlocation: getlocation
}
