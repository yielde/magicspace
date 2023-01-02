/*
 * @Author: Hui Tong <937013596@qq.com>
 * @Date: 2023-01-02 00:45:43
 * @LastEditTime: 2023-01-02 01:09:16
 * @Description: 
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

// styles
import "./assets/css/index.css";
import "./assets/css/iconfont.css";
Vue.config.productionTip = false;

new Vue({
	router,
	vuetify,
	render: (h) => h(App),
}).$mount("#app");
