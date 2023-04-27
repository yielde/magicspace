<!--
 * @Author: Hui Tong <937013596@qq.com>
 * @Date: 2022-12-26 23:06:27
 * @LastEditTime: 2023-01-03 00:48:01
 * @Description: 
-->
<template>
	<v-container>
		<v-row>
			<v-col v-for="n in 7" :key="n" cols="3">
				<v-card outlined tile class="article-card">
					<div class="article-card-title"><a>标题</a></div>
					<div class="article-card-content">
                        <a v-for="n in 100" :key="n">
                        文本</a>
                    </div>
					<div class="article-card-footer"><a>脚底</a></div>
				</v-card>
			</v-col>
		</v-row>

		<v-row no-gutters>
			<v-col v-for="n in 6" :key="n" cols="12" sm="4">
				<v-card class="pa-2" outlined tile>
					One of three columns
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
</script>
<style scoped>
	.article-card {
		align-items: center;
		height: 280px;
		width: 100%;
	}
	.article-card-title {
		padding: 20px 20px 10px;
	}
	.article-card-content {
        max-height: 180px;
        min-height: 180px;
		padding: 0px 20px;
	}
	.article-card-footer {
		padding: 10px 20px 20px;
	}
</style>