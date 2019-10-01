<template>
    <div>
        <cart></cart>
        <upper :obj="{ h: hUpper }"></upper>
        <lower :obj="{ h: hMenu }"></lower>
    </div>
</template>

<script>
import cart from "./cart.vue"
import upper from "./upper.vue"
import lower from "./menu.vue"

export default {
	components:{
        cart,
        upper,
        lower
    },
	data: function () {
		return {
            hUpper: 100,
            hMenu: 32
		}
    },
    methods:{
    },
    computed: {
    },
    created: function(){
    }
}
</script>

<style scoped>
</style>
