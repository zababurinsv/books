<template>
	<div :style="container">
		<heading></heading>
		<bigSlider></bigSlider>
		<halfPrice :obj="{ title: 'ПОЛОВИНА СТОИМОСТИ'}"></halfPrice>
		<lineSlider :obj="{ title:'НОВИНКИ В РАЗДЕЛЕ «КНИГИ»', w: 205, url: 'http://megadub.ru:3000' }"></lineSlider>
		<lineSlider :obj="{ title:'СКОРО В ПРОДАЖЕ...', w: 205, url: 'http://megadub.ru:3000' }"></lineSlider>
		<reviews :obj="{ title: 'РЕЦЕНЗИИ', url: 'http://megadub.ru:3000' }"></reviews>
		<whatsSay></whatsSay>
		<news :obj="{ title:'ПОСЛЕДНИЕ «НОВОСТИ»', url: 'http://megadub.ru:3000' }"></news>
		<categories></categories>
		<foot></foot>
	</div>
</template>

<script>
import heading from "../head/index.vue"
import bigSlider from "./bigSlider/bigSlider.vue"
import halfPrice from "./halfPrice.vue"
import reviews from "./reviews.vue"
import lineSlider from "./lineSlider.vue"
import whatsSay from "./whatsSay.vue"
import categories from "./categories.vue"

import news from "./news.vue"
import foot from "./../footer/index.vue"

export default {
    metaInfo: {
		title: 'Книжный ру - авторские книги',
		meta: [
			{ name: 'description', content: 'description description description' },
			{ name: 'keywords', content: 'keywords keywords keywords' }
		]
    },
	components:{
		heading,
		bigSlider,
		halfPrice,
		reviews,
		lineSlider,
		whatsSay,
		categories,
		news,
		foot
	},
	data: function () {
		return {
			products:{
				data: [],
				loaded: false
			},
			news:{
				data: [],
				loaded: false
			},
			container:{
				minWidth: this.$store.state.sys.window.minWidth + 'px'
			}
		}
	},
	computed: {
	},
	created: function(){
	},
	mounted: function(){
	}
}
</script>

<style scoped>
</style>
