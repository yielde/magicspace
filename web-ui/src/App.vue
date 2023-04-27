<!--
 * @Author: Hui Tong <937013596@qq.com>
 * @Date: 2023-01-02 00:45:43
 * @LastEditTime: 2023-01-02 23:09:49
 * @Description: 
-->
<template>
	<v-app id="app">
		<TopBarVue></TopBarVue>
		<v-content>
			<router-view></router-view>
		</v-content>
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