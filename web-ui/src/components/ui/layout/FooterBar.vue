<!--
 * @Author: Hui Tong <937013596@qq.com>
 * @Date: 2023-01-02 00:07:34
 * @LastEditTime: 2023-01-02 01:09:56
 * @Description: 
-->
<template>
	<v-footer app padless absolute>
		<div class="footer-wrap">
			<div>©{{ 2023 }} - {{ new Date().getFullYear() }} By Hui Tong</div>
		</div>
	</v-footer>
</template>

<script>
	export default {};
</script>

<style scoped>
	.footer-wrap {
		width: 100%;
		line-height: 2;
		position: relative;
		padding: 40px 20px;
		color: #eee;
		font-size: 14px;
		text-align: center;
		background: linear-gradient(-45deg, #ee7752, #ce3e75, #23a6d5, #23d5ab);
		background-size: 400% 400%;
		animation: Gradient 10s ease infinite;
	}
	.footer-wrap a {
		color: #eee;
	}

	@keyframes Gradient {
		0% {
			background-position: 0 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0 50%;
		}
	}
</style>