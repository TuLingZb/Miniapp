<template>
	<view class="page">
		<view class="content">
			<view class="about">
				大道至简，悟在天成！ 放眼看沧桑世事，开心品快乐生活！
			</view>
		</view>
	</view>
</template>

<script>
	import iconfont from '@/components/iconfont/iconfont.vue'
	export default {
		components: {
			iconfont
		},
		data() {
			return {

			}
		},
		onShow() {
			this.$initPageTitle();//初始化页面标题
		},
		onLoad(e) {
			
		},
		onPullDownRefresh() {

		}
	}
</script>

<style scoped lang="scss">
	.about{
		margin: 30upx 40upx 20rpx;
		font-size: 34rpx;
	}
</style>
