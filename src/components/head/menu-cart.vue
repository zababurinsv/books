<template>
    <a class="pr disf fdr faic padr20 f1 fs13 fcgy1" style="margin-left:auto;">
        <div @click="showCart" class="padr10 tdul oph067 curspoi">Корзина </div>
        <div :style="img"></div>
        <div class="padl5">{{ cartLength }}</div>
    </a>
</template>

<script>
export default {
    props: ['obj'],
    data: function () {
		return {
		}
    },
    methods:{
        showCart(){
            this.$store.commit('userCartIsShow', true )
        }
    },
    computed:{
        cartLength(){
            return this.$store.state.user.cart.goods != undefined ? this.$store.state.user.cart.goods.length : 0
        },
        img(){
            return {
                background: "url('/public/images/svg/cap-menu-cart.svg')",
                width: 20 + 'px', 
                height: 20 + 'px'
            }
        }
    }
}
</script>

<style scoped>
.oph067:hover{
    opacity: 0.67;
}
</style>