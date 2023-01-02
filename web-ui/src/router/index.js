/*
 * @Author: Hui Tong <937013596@qq.com>
 * @Date: 2023-01-02 00:46:58
 * @LastEditTime: 2023-01-02 01:03:44
 * @Description:
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{ path: "/", redirect: "/home" },
	{
		path: "/home",
		name: "home",
		component: () => import("../views/ui/HomePage.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
