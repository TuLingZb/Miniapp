<template>
	<view class="container">
		<view class="status-bar"></view>
		<view class="banner">
			<image src="https://dcdn.it120.cc/2020/09/14/37a7ef0f-9070-4e0b-b551-dde0b6113233.jpg" mode="aspectFit" class="bg"></image>
			<view class="intro">
				<view class="greet">您好，{{ isLogin ? member.nickname : '游客' }}</view>
			</view>
		</view>
		<view class="content">
			<view class="choose">
				<view class="flex-item-V" @tap="takein">
					<image :src="cates[0].img" class="cellTitleImg"></image>
					<view class="cellTitle">体检预约</view>
				</view>
				<view class="flex-item-V">
					<view class="text"> 素院，程打时量dasdasdasdada大萨达所多大萨达所多爱仕达多所阿斯达阿斯达奥术大师多本当容dsad大萨达萨达大大所多多大爱的打的打的爱的打的打的爱的多大的打的撒大多带我去多阿萨德12阿萨德我的钱无2阿萨德21萨达2询什吼杰伸保知材。 </view>
				</view>
				<view class="info">
					<view class="integral_section">
						<view class="top">
							<text class="title">套餐推荐</text>
							<!-- <text class="value">411</text> -->
						</view>
						<!-- 点击进入套餐详情页 -->
						<view class="bottom"  @tap="integrals">
							<image src="https://dcdn.it120.cc/2020/10/10/742daff5-694b-4c58-8a10-70e69705e54f.png" style="width: 20px; height: 20px; margin-right: 16px; display: block;"></image>
							个性化健康动态监测尊享套餐
							<view class="iconfont iconarrow-right"></view>
						</view>
						<view class="bottom"  @tap="integrals">
							<image src="https://dcdn.it120.cc/2020/10/10/b4c48ed3-5caa-480b-ab03-06d1157d79fb.jpg" style="width: 20px; height: 20px; margin-right: 16px; display: block;"></image>
							VIP胃癌早期筛查深度分析
							<view class="iconfont iconarrow-right"></view>
						</view>
					</view>
					<!-- <view class="qrcode_section" @tap="memberCode">
						<image src="/static/images/index/qrcode.png"></image>
						<text>会员码</text>
					</view> -->
				</view>
			</view>
			
			<view class="hospital">
				<view class="flex-item flex-item-V" @tap="takein">
					<image :src="cates[1].img" class="cellTitleImg"></image>
					<view class="cellTitle">{{ cates[1].mainText }}</view>
				</view>
				<view class="text"> 现于做儿科目非dasdadasdadasd大萨达大大多打的大萨达大所多大萨达萨达大所多大萨达大所多大萨达大大萨达大大大大大萨达大萨达大大萨达萨达大萨d121达所大大所大所大所大所多群多群无无群多群无群二群翁放热发八起此系dasda大萨达所多啊打死大所多大多数大所多奥术大师多大大所多际解素院，程打时量本当容询什吼杰伸保知材。 </view>
				<view class="navigators">
					<view class="left">
						<image src="https://tse3-mm.cn.bing.net/th/id/OIP.MroZvm12mc8qjb6cnRT9gAAAAA?pid=Api&rs=1" style="width: 150rpx;height: 150rpx;"></image>
					</view>
					<view class="right">
						<view class="tea-activity" @tap="invite">
							视频title
						</view>
						<view class="member-gifts" @tap="packages">
							随便内容大事大萨达所多撒多撒大所大萨达多大萨达多大大所多大萨达阿萨德阿萨德阿萨德撒大声地萨达奥德赛撒大声地萨达奥德赛
						</view>
					</view>
				</view>
				<view class="navigators">
					<view class="left">
						<image src="http://image14.m1905.cn/uploadfile/2013/0516/thumb_1_168_230_20130516093451648.jpg" style="width: 150rpx;height: 150rpx;"></image>
					</view>
					<view class="right">
						<view class="tea-activity" @tap="invite">
							视频title
						</view>
						<view class="member-gifts" @tap="packages">
							随便内容大事大萨达所多撒多撒大所大萨达多大萨达多大大所多大萨达阿萨德阿萨德阿萨德撒大声地萨达奥德赛撒大声地萨达奥德赛
						</view>
					</view>
				</view>
				
				<!-- <view class="bottom uni-flex uni-row"  @tap="integrals">
					<image src="https://tse3-mm.cn.bing.net/th/id/OIP.MroZvm12mc8qjb6cnRT9gAAAAA?pid=Api&rs=1" style="width: 100px; height: 100px; margin-right: 16px; display: block;"></image>
					<text>视频title</text>
				</view> -->
			</view>
			
			<view class="uni-flex uni-column hospital">
				<view class="flex-item flex-item-V" @tap="takein">
					<image :src="cates[2].img" class="cellTitleImg"></image>
					<view class="cellTitle">{{ cates[2].mainText }}</view>
				</view>
				<view class="flex-item-V">
					<view class="text"> 现于做儿科目非dasda大萨达所大大所大所大所大所多群多群无无群多群无群二群翁放热发八起此系dasda大萨达所多啊打死大所多大多数大所多奥术大师多大大所多际解素院，程打时量本当容询什吼杰伸保知材。 </view>
				</view>
				<view class="navigators">
					<view class="right">
						<view class="tea-activity" @tap="invite">
							浙江大学医学院附属第一医院
						</view>
						<view class="member-gifts" @tap="packages">
							浙江省杭州市庆春路79号
						</view>
					</view>
				</view>
				<view class="navigators">
					<view class="right">
						<view class="tea-activity" @tap="invite">
							浙二
						</view>
						<view class="member-gifts" @tap="packages">
							浙江省杭州市解放路88号
						</view>
					</view>
				</view>
				<view class="navigators">
					<view class="more">
						<view class="left-title" @tap="invite">
							查看更多
						</view>
						<view class="iconfont iconarrow-right right-icon">
						</view>
					</view>
				</view>


			</view>

			<view class="hospital">
				<view class="flex-item flex-item-V" @tap="takein">
					<image :src="cates[3].img" class="cellTitleImg"></image>
					<view class="cellTitle">{{ cates[3].mainText }}</view>
				</view>
				<view class="flex-item flex-item-V">
					<view class="text"> 现于做儿科目非dasda大萨达所大大所大所大所大所多群多群无无群多群无群二群翁放热发八起此系dasda大萨达所多啊打死大所多大多数大所多奥术大师多大大所多际解素院，程打时量本当容询什吼杰伸保知材。 </view>
				</view>
				<view class="navigators" :url="'/pages/article/detail?id=' + item.id" v-for="(item, index) in list" :key="index">
					<view class="right">
						<view class="tea-activity" @tap="invite">
							{{ item.title }}
						</view>
						<view class="member-gifts" @tap="packages">
							在运营商打拼了近二十年，从程序员到DBA、架构设计，从业务管理到运营再到营销策划，从最基层的一方诸侯，到管理团队的百夫长。我都是一个"听话、出活"，被别人推着走的人。
						</view>
						<view class="other-msg">
							<view class="left-msg">
								<view class="source" v-if="item.source">{{ item.source }}</view>
								<view class="time">{{ item.create_time }}</view>
								<view class="read">
									<image src="/static/images/icon_view.png"></image>
									<text>{{ item.read }}</text>
								</view>
								<view class="comment">
									<image src="/static/images/icon_comment.png"></image>
									<text>{{ item.comment_count }}</text>
								</view>
							</view>
							<!-- <view class="right-msg">
							</view> -->
						</view>
					</view>
				</view>
				<view class="navigators">
					<view class="more">
						<view class="left-title" @tap="articleMore">
							查看更多
						</view>
						<view class="iconfont iconarrow-right right-icon">
						</view>
					</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import {mapState, mapGetters} from 'vuex';
	import articleList from '@/components/article/list.vue';
	
	export default {
		components:{articleList},
		data() {
			return {
				list:[{
					comment_count: 0,
					create_time: "2020-12-21",
					id: 12909,
					photo_url: "http://tukuimg.bdstatic.com/scrop/1ca6f39145a5fb41cc814833bac1db33.jpeg",
					read: 4657,
					source: "十点读书",
					title: "《红楼梦》：袭人的处世智慧，值得每个人学学｜百家故事",
				}],
				cates: [
				        {
				          mainText: "体检预约",
				          img:
				            "https://dcdn.it120.cc/2020/09/08/678c5e5a-b3ef-4f99-ad02-4363947565a6.jpg",
				          distPage: "/pages/MedicalAppointment/index",
				          openType: "switchTab",
				        },
				        {
				          mainText: "医学视频",
				          img:
				            "https://dcdn.it120.cc/2020/09/08/b8defe50-dd1f-4e95-b629-0d3010db81d7.png",
				          distPage: "/pages/videos/index",
				          openType: "navigate",
				        },
				        {
				          mainText: "医院指南",
				          img:
				            "https://dcdn.it120.cc/2020/09/08/d9017899-b38d-4bcc-a4ef-88cb2580a9cb.jpg",
				          distPage: "/pages/hospital/index",
				          openType: "navigate",
				        },
				        {
				          mainText: "科普文章",
				          img:
				            "https://dcdn.it120.cc/2020/09/08/2f540359-5178-4a9c-98be-d4d5141e8730.png",
				          distPage: "/pages/assayList/index",
				          openType: "navigate",
				        },
				      ],
			}
		},
		computed: {
			...mapState({
				member: state => state.currentUser,
				isLogin: state => state.isLogin,
			}),
		},
		methods: {
			takein() {
				// this.$store.commit('SET_ORDER_TYPE', 'takein')
				uni.switchTab({
					url: '/pages/user/favorites'
				})
			},
			takeout() {
				if(!this.isLogin) {
					uni.navigateTo({url: '/pages/common/login'})
					return
				}
				uni.navigateTo({
					url: "/pages/address/address?is_choose=true"	
				})
			},
			integrals() {
				// if(!this.isLogin) {
				// 	uni.navigateTo({url: '/pages/common/login'})
				// 	return
				// }
				uni.navigateTo({
					url: '/pages/user/favorites'
				})
			},
			packages() {
				uni.navigateTo({
					url: '/pages/packages/index'
				})
			},
			memberCode() {
				if(!this.isLogin) {
					uni.navigateTo({url: '/pages/login/login'})
					return
				}
				uni.navigateTo({
					url: '/pages/mine/member-code'
				})
			},
			invite() {
				uni.navigateTo({
					url: '/pages/activities/invite'
				})
			},
			articleMore() {
				uni.navigateTo({
					url: '/pages/article/index'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
/* #ifdef H5 */
page {
	height: auto;
	min-height: 100%;
}
/* #endif */

.banner {
	position: relative;
	width: 100%;
	height: 400rpx;
	
	.bg {
		width: 100%;
		height: 360rpx;
		margin-top: -70rpx;
	}
	
	.intro {
		position: absolute;
		top: calc(50rpx + var(--status-bar-height));
		left: 40rpx;
		color: #FFFFFF;
		display: flex;
		flex-direction: column;
		
		.greet {
			font-size: $uni-font-size-lg;
			margin-top: -100rpx;
		}
		
		.note {
			font-size: $uni-font-size-sm;
		}
	}
}

.content {
	padding: 0 30rpx;
}

.entrance {
	position: relative;
	margin-top: -90rpx;
	margin-bottom: 30rpx;
	border-radius: 10rpx;
	background-color: #ffffff;
	box-shadow: $uni-box-shadow;
	padding: 30rpx 0;
	display: flex;
	align-items: center;
	justify-content: center;
	
	.item {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		
		&:nth-child(1):after {
			content: '';
			position: absolute;
			width: 1rpx;
			background-color: #ddd;
			right: 0;
			height: 100%;
			transform: scaleX(0.5) scaleY(0.8);
		}
		
		.icon {
			width: 84rpx;
			height: 84rpx;
			margin: 20rpx;
		}
		
		.title {
			font-size: 30rpx;
			color: $uni-text-color;
			font-weight: 600;
		}
	}
}

.info {
	position: relative;
	margin-bottom: 30rpx;
	border-radius: 10rpx;
	background-color: #ffffff;
	box-shadow: $uni-box-shadow;
	padding: 5rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	
	.integral_section {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		
		.top {
			display: flex;
			align-items: center;
			
			.title {
				color: $uni-text-color;
				font-size: $uni-font-size-lg;
				margin-right: 10rpx;
				line-height: 100rpx;
			}
			.value {
				font-size: 44rpx;
				font-weight: bold;
			}
		}
		
		.bottom {
			font-size: $uni-font-size-lg;
			color: $uni-text-color-grey;
			display: flex;
			align-items: center;
			line-height: 100rpx;
			border-bottom:1px solid #C0C0C0;
			// border-radius: 1%;
		}
	}
	
	.qrcode_section {
		color: $uni-color-primary;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: $uni-font-size-sm;
		
		image {
			width: 40rpx;
			height: 40rpx;
			margin-bottom: 10rpx;
		}
	}
}

.navigators {
	width: 100%;
	
	margin-bottom: 10rpx;	
	border-radius: 10rpx;
	background-color: #ffffff;
	box-shadow: $uni-box-shadow;
	padding: 20rpx;
	display: flex;
	align-items: center;
	
	.left {
		width: 180rpx;
		display: flex;
		padding: 0 20rpx;
		flex-direction: column;
		font-size: $uni-font-size-sm;
		background-color: #FFFFFF;
		
		.grid {
			height: 50%;
			display: flex;
		}
	}
	
	.right {
		// width: 290rpx;
		display: flex;
		flex-direction: column;
		flex: 1;
		
		.other-msg {
			margin-top: 10rpx;
			flex-direction: row;
			flex-grow: 1;
			flex-shrink: 1;
			display: flex;
			align-items: center;
			font-size: 28rpx;
			color: #999;
			// background-color: #366092;
			line-height: normal;
			.left-msg {
				flex-direction: row;
				display: flex;
				flex-grow: 1;
				flex-shrink: 1;
				align-items: baseline;
				.source {
					display: -webkit-box;
					text-overflow: ellipsis;
					word-break: break-all;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical;
					overflow: hidden;
					width: 140rpx;
					margin-right: 16rpx;
				}
				.time {
					margin-right: 90rpx;
				}
				.comment {
					image {
						flex-grow: 1;
						flex-shrink: 1;
						width: 28rpx;
						height: 28rpx;
						margin-right: 12rpx;
						// margin-top: 12rpx;
					}
					text {
						flex-grow: 1;
						// flex-shrink: 1;
					}
				
				}
				.read {
					margin-right: 30rpx;
					image {
						width: 40rpx;
						height: 40rpx;
						margin-right: 5rpx;
						// margin-top: -6rpx;
					}
				}
			}
			.right-msg {
				// text-align: right;
				
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				flex-grow: 0;
				flex-shrink: 0;
				margin-right: 5rpx;
				background-color: #4CD964;
				.comment {
					image {
						flex-grow: 1;
						flex-shrink: 1;
						width: 28rpx;
						height: 28rpx;
						margin-right: 12rpx;
						margin-top: -6rpx;
					}
					text {
						flex-grow: 1;
						flex-shrink: 1;
						margin-right: 10rpx;
						margin-top: -6rpx;
					}

				}
				.read {
					text-align: left;
					margin-right: 5rpx;
					image {
						width: 40rpx;
						height: 40rpx;
						margin-right: 5rpx;
						margin-top: -6rpx;
					}
				}
			}
		}
		.member-gifts {
			width: 100%;
			max-height: 120rpx;
			// display: flex;
			// padding: 20rpx;
			font-size: $uni-font-size-sm;
			color: $uni-text-color-grey;
			// align-items: center;
			position: relative;
			overflow: hidden;
			word-break: break-all; /* break-all(允许在单词内换行。) */
			text-overflow: ellipsis;  /* 超出部分省略号 */
			display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
			-webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
			-webkit-line-clamp: 3; /** 显示的行数 **/
		}
		
		.tea-activity {
			// align-items: center;
			position: relative;
			width: 100%;
			display: flex;
			background-color: #FFFFFF;
			margin-bottom: 20rpx;
			font-size: $uni-font-size-base;
			color: #191919;
		}
		
		.member-gifts {
			background-color: #FFFFFF;
		}
		
		.right-img {
			flex: 1;
			position: relative;
			margin-left: 20rpx;
			margin-right: -20rpx;
			margin-bottom: -20rpx;
			display: flex;
			align-items: flex-end;
			
			image {
				width: 100%;
			}
		}
	}
	
	.more {
		display: flex;
		// padding: 0 20rpx;
		flex-direction: row;
		align-items: center;
		flex:1;
		text-align: right;
		.left-title {
			width: 100rpx;
			flex:1;
			text-align: left;
			color: #1a73ff;
		}
		.right-icon {
			width: 100rpx;
			flex:1;
			text-align: right;
		}

	}
	
	
	.yzclh-img {
		height: 122.96rpx;
		width: 214.86rpx;
	}
}


.member-news {
	width: 100%;
	margin-bottom: 30rpx;
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx 0;
		
		.title {
			font-size: $uni-font-size-lg;
			font-weight: bold;
		}
		
		.iconfont {
			font-size: 52rpx;
			color: $uni-text-color-assist;
		}
	}
	
	.list {
		width: 100%;
		display: flex;
		flex-direction: column;
		
		.item {
			width: 100%;
			height: 240rpx;
			position: relative;
			
			image {
				width: 100%;
				height: 100%;
				border-radius: 8rpx;
			}
			
			.title {
				position: relative;
				font-size: 32rpx;
				font-weight: 500;
				width: 100%;
				top: -70rpx;
				left: 16rpx;
				color: #ffffff;
			}
		}
	}
}

.flex-item-V {
	width: 100%;
	min-height: 30rpx;
	text-align: center;
	// line-height: 100rpx;
	// margin-bottom: 50rpx;
}
.choose {
	position: relative;
	margin-bottom: 30rpx;
	border-radius: 10rpx;
	background-color: #ffffff;
	box-shadow: $uni-box-shadow;
	padding: 30rpx;
	// display: flex;
	align-items: center;
	justify-content: center;
	margin-top: -100rpx;
	min-height: 500rpx;
	flex-direction: column;
	.cellTitle {
	  justify-content: center;
	  align-items: center;
	  display: flex;
	  flex-direction: column;
	  // margin-top: -100rpx;
	  position: relative;
	  // top:10rpx;
	}
	.cellTitleImg {
	  width: 100rpx;
	  height: 100rpx;
	  align-items: center;
	  text-align: center;
	}
	.text {
			margin: 15rpx 10rpx;
			padding: 0 20rpx;
			background-color: #ebebeb;
			max-height: 200rpx;
			line-height: 50rpx;
			text-align: left;
			color: #777;
			font-size: 30rpx;
			overflow:auto;
	}


}
.hospital {
	position: relative;
	margin-bottom: 30rpx;
	border-radius: 10rpx;
	background-color: #ffffff;
	box-shadow: $uni-box-shadow;
	padding: 30rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 500rpx;
	flex-direction: column;
	.cellTitle {
	  justify-content: center;
	  align-items: center;
	  display: flex;
	  flex-direction: column;
	}
	.cellTitleImg {
	  width: 100rpx;
	  height: 100rpx;
	  align-items: center;
	  text-align: center;
	}
	.text {
			margin: 15rpx 10rpx;
			padding: 0 20rpx;
			background-color: #ebebeb;
			height: 200rpx;
			line-height: 50rpx;
			text-align: left;
			color: #777;
			font-size: 30rpx;
			overflow:auto;
			margin-bottom: 30rpx;
	}
	// .left {
	// 	width: 340rpx;
	// 	margin-right: 20rpx;
	// 	display: flex;
	// 	padding: 0 20rpx;
	// 	flex-direction: column;
	// 	font-size: $uni-font-size-sm;
	// 	color: $uni-text-color-base;
	// 	background-color: #F2F2E6;
	// }

}
.videos {
	display: flex;
	align-items: center;
	margin-bottom: 30rpx;

	.image {
		width: 160rpx;
		height: 160rpx;
		margin-right: 20rpx;
		border-radius: 8rpx;
	}

	.right {
		flex: 1;
		height: 160rpx;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		padding-right: 14rpx;

		.name {
			font-size: $uni-font-size-base;
			margin-bottom: 10rpx;
		}

		.tips {
			width: 100%;
			height: 40rpx;
			line-height: 40rpx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			font-size: $uni-font-size-sm;
			color: $uni-text-color-assist;
			margin-bottom: 10rpx;
		}

		.price_and_action {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.price {
				font-size: $uni-font-size-base;
				font-weight: 600;
			}

			.btn-group {
				display: flex;
				justify-content: space-between;
				align-items: center;
				position: relative;

				.btn {
					padding: 0 20rpx;
					box-sizing: border-box;
					font-size: $uni-font-size-sm;
					height: 44rpx;
					line-height: 44rpx;

					&.property_btn {
						border-radius: 24rpx;
					}

					&.add_btn,
					&.reduce_btn {
						padding: 0;
						width: 44rpx;
						border-radius: 44rpx;
					}
				}

				.dot {
					position: absolute;
					background-color: #ffffff;
					border: 1px solid $uni-color-primary;
					color: $uni-color-primary;
					font-size: $uni-font-size-sm;
					width: 36rpx;
					height: 36rpx;
					line-height: 36rpx;
					text-align: center;
					border-radius: 100%;
					right: -12rpx;
					top: -10rpx;
				}

				.number {
					width: 44rpx;
					height: 44rpx;
					line-height: 44rpx;
					text-align: center;
				}
			}
		}
	}
}
</style>
