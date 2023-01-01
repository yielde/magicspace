<!--
 * @Author: Hui Tong <937013596@qq.com>
 * @Date: 2022-12-26 23:25:46
 * @LastEditTime: 2023-01-01 23:52:08
 * @Description: 
-->
<template>
	<v-app-bar app hide-on-scroll flat class="nav-fixed">
		<div class="nav-container">
			<div class="float-left blog-logo">
				<router-link to="/"> MagicSpace </router-link>
			</div>

			<div class="float-right nav-title">
				<div class="menus-item">
					<router-link class="menu-btn" to="/">
						<i class="iconfont icon-shouye" /> 首页
					</router-link>
				</div>
				<div class="menus-item">
					<router-link class="menu-btn" to="/">
						<i class="iconfont icon-shouye" /> 归档
					</router-link>
				</div>
				<div class="menus-item">
					<router-link class="menu-btn" to="/">
						<i class="iconfont icon-shouye" /> 时间轴
					</router-link>
				</div>

				<!-- 下拉菜单 -->
				<div class="menus-item">
					<a class="menu-btn">
						<i class="iconfont icon-shouye" /> 其他
						<i class="iconfont icon-qia expand" />
					</a>
					<ul class="menus-submenu">
						<li>
							<router-link to="/">
								<i class="iconfont icon-shouye" /> 归档
							</router-link>
						</li>
						<li>
							<router-link to="/">
								<i class="iconfont icon-shouye" /> 分类
							</router-link>
						</li>
						<li>
							<router-link to="/">
								<i class="iconfont icon-shouye" /> 标签
							</router-link>
						</li>
					</ul>
				</div>
				<div class="menus-item">
					<router-link class="menu-btn" to="/">
						<i class="iconfont icon-shouye" /> 友链
					</router-link>
				</div>
			</div>
		</div>
	</v-app-bar>
</template>

<script>
	export default {
		data: () => ({
            mini: true
		}),
		mounted() {
			window.addEventListener("scroll", this.scroll);
		},
	};
</script>

<style scoped>
	i {
		margin-right: 4px;
	}
	ul {
		list-style: none;
	}
	.nav-fixed {
		position: fixed;
		background-color: rgba(255, 255, 255, 0.5);
		box-shadow: 0 5px 6px -5px rgba(133, 133, 133, 0.6);
		height: 90px;
	}
	.nav-fixed a {
		color: #181616;
	}
	.nav-fixed .menu-btn:hover {
		color: #49b1f5;
	}
	.nav-fixed .menus-item a,
	.nav-fixed .blog-title a {
		text-shadow: none;
	}
	.blog-logo,
	.nav-title {
		display: flex;
		align-items: center;
		height: 100%;
	}
	.blog-logo a {
		font-size: 18px;
		font-weight: bold;
	}
	.menu-btn:hover:after {
		width: 100%;
	}
	.nav-container {
		font-size: 14px;
		width: 100%;
		height: 100%;
	}
	.blog-logo a {
		text-shadow: none;
	}

	.menus-item {
		position: relative;
		display: inline-block;
		margin: 0 0 0 0.875rem;
	}
	.menus-item:hover .menus-submenu {
		display: block;
	}
	.menus-item a {
		transition: all 0.2s;
	}
	.menus-item a:after {
		position: absolute;
		bottom: -5px;
		left: 0;
		width: 0;
		height: 2px;
		z-index: -1;
		background-color: #f78819;
		content: "";
		transition: all 0.3s ease-in-out;
	}
	.menus-submenu {
		position: absolute;
		display: none;
		right: 0;
		width: max-content;
		margin-top: 8px;
		box-shadow: 0 5px 20px -4px rgba(0, 0, 0, 0.5);
		background-color: #fff;
		animation: submenu 0.3s 0.1s ease both;
	}
	.menus-submenu:before {
		position: absolute;
		top: -8px;
		left: 0;
		width: 100%;
		height: 20px;
		content: "";
	}

	.menus-submenu a {
		line-height: 2;
		color: #4c4948;
		text-shadow: none;
		display: block;
		padding: 1px 14px;
	}
	.menus-submenu li {
		float: left;
	}
	.menus-submenu a:hover {
		background: #4ab1f4;
	}

	@keyframes submenu {
		0% {
			opacity: 0;
			filter: alpha(opacity=0);
			transform: translateY(10px);
		}
		100% {
			opacity: 1;
			filter: none;
			transform: translateY(0);
		}
	}
</style>