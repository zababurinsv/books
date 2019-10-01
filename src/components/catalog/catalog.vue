<template>
    <div class="pr disf fdr fjcs fais">
        <category :obj="obj"></category>
        <products :obj="obj"></products>
    </div>
</template>

<script>
import category from "./category.vue"
import products from "./products.vue"

export default {
	components:{
        category,
        products
	},
    props: ['obj'],
    data: function () {
		return {

		}
    },
    methods:{
    },
    computed:{
    } 
}
</script>