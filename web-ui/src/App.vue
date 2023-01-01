<!--
 * @Author: Hui Tong <937013596@qq.com>
 * @Date: 2022-12-27 13:55:32
 * @LastEditTime: 2022-12-31 01:16:44
 * @Description: 
-->
<template>
	<v-app id="app">
		<TopBarVue></TopBarVue>
		<v-main>
			<router-view></router-view>
		</v-main>
	</v-app>
</template>

<script>
	import TopBarVue from "./components/ui/layout/TopBar.vue";
	export default {
		name: "App",

		data: () => ({
			//
		}),
		components: {
			TopBarVue,
		},
	};
</script>
