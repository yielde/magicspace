/*
 * @Author: Hui Tong <937013596@qq.com>
 * @Date: 2022-12-26 22:47:43
 * @LastEditTime: 2022-12-31 01:21:52
 * @Description:
 */
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

const routes = [
	{ path: "/", redirect: "/home" },
	{
		path: "/home",
		name: "home",
		component: () => import("../views/ui/HomePage.vue"),
	},
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});

export default router;
