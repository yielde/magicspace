<!--
 * @Author: Hui Tong <937013596@qq.com>
 * @Date: 2023-01-02 00:45:43
 * @LastEditTime: 2023-01-02 01:10:58
 * @Description: 
-->
<template>
	<v-app id="app">
		<TopBarVue></TopBarVue>
		<router-view></router-view>
		<FooterBarVue></FooterBarVue>
	</v-app>
</template>

<script>
	import TopBarVue from "./components/ui/layout/TopBar.vue";
	import FooterBarVue from "./components/ui/layout/FooterBar.vue";
	export default {
		name: "App",

		data: () => ({
			//
		}),
		components: {
			TopBarVue,
			FooterBarVue,
		},
	};
</script>