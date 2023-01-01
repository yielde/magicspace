/*
 * @Author: Hui Tong <937013596@qq.com>
 * @Date: 2022-12-26 12:24:43
 * @LastEditTime: 2022-12-31 01:32:16
 * @Description:
 */
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
	transpileDependencies: true,
	lintOnSave: false,

	pluginOptions: {
		vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		},
	},
});
