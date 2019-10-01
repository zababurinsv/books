<template>
	<div :style="container">
        <cap></cap>
        <linepath></linepath>
        <catalog :obj="{ objCategory, products }"></catalog>
        <foot></foot>
	</div>
</template>

<script>

let category = [
    'БОЛЬШАЯ РОССИЙСКАЯ ЭНКЦИКЛОПЕДИЯ',
    'ХУДОЖЕСТВЕННАЯ ЛИТЕРАТУРА',
    'NON-FICTION',
    'ИСКУССТВО / АРХИТЕКТУРА',
    'ДИЗАЙН / МОДА',
    'КНИГИ НА ИНОСТРАННЫХ ЯЗЫКАХ',
    'ПУТЕВОДИТЕЛИ / КНИГИ О ПУТЕШЕСТВИЯХ',
    'КУЛИНАРНЫЕ КНИГИ',
    'ГРАФИЧЕСКИЕ РОМАНЫ / КОМИКСЫ',
    'ДЕТСКИЕ КНИГИ',
    'ЖУРНАЛЫ',
    'РАЗНОЕ'
]

let objCategory = []
    category.map(function(name) {
        objCategory.push( { name, url: '#' } )
    });

import cap from "../head/index.vue"
import catalog from "./catalog.vue"
import linepath from "./line-path.vue"
import foot from "./../footer/index.vue"

import { news } from "../../util/news/index.js"

export default {
	components:{
        cap,
        catalog,
        linepath,
        foot
	},
	data: function () {
		return {
            objCategory,
            products:{
                data: [],
                isLoaded: false
            } 
		}
	},
	created: async function(){
        const res = await news.read( 'http://megadub.ru:3000', 0, 20 )
        this.products.data = res
        this.products.isLoaded = true
	},
	mounted: function(){
    },
    computed:{
        container(){
            return {
                minWidth: this.$store.state.sys.window.minWidth + 'px'
            }
        }
    }
}
</script>

<style scoped>
</style>
