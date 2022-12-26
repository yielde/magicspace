<!--
 * @Author: Hui Tong <937013596@qq.com>
 * @Date: 2022-12-26 12:24:43
 * @LastEditTime: 2022-12-26 13:41:21
 * @Description: 
-->
<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
	import HelloWorld from "./components/HelloWorld.vue";

	export default {
		name: "App",
		components: {
			HelloWorld,
		},
	};
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
