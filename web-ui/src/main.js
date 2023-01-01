/*
 * @Author: Hui Tong <937013596@qq.com>
 * @Date: 2022-12-27 13:55:32
 * @LastEditTime: 2022-12-31 01:27:57
 * @Description: 
 */
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

// styles
import "./assets/css/index.css"
import "./assets/css/iconfont.css";

loadFonts();

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount("#app");
