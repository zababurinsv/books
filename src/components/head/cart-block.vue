<template>
    <div class="pr w100p disf fdr fjcsb faic bcw mt10 shadow012">
        <div class="pr disf fdr">
            <img class="pr" :src="$store.state.user.cart.goods[obj.index].img" :style="imgStyle">
            <div class="pr disf fdc" :style="nameStyle">
                <div class="f1 fcgy1 pad5 ofh">
                    {{$store.state.user.cart.goods[obj.index].name}}
                </div>
                <div class="f1 fs12 fcgy1 pad5">
                    {{$store.state.user.cart.goods[obj.index].category}} - {{$store.state.user.cart.goods[obj.index].subcategory}}
                </div>
            </div>
        </div>
        <div class="pr h100p disf fdr faic">
            <div class="pr f1 fcgy1" :style="priceStyle">
                {{ $store.state.user.cart.goods[obj.index].price }} руб.
            </div>
            <div class="pr h100p disf fdr fjcc ml10">
                <div @click="deduct" class="pr f1 fs26 fcgy1 curspoi usn onClick" :style="buttonStyle" style="background:url('/public/images/svg/cartAdd.svg');"></div>
                <input class="fcgy1" v-model="quantity" type="number" style="width:30px;">
                <div @click="add" class="pr f1 fs26 fcgy1 curspoi usn onClick" :style="buttonStyle" style="background:url('/public/images/svg/cartDeduct.svg');"></div>
            </div>
            <div class="pr disf fdr ml10 f1 fs22 fcgy1" :style="priceTotal">
                <div style="width:180px;" >сумма: {{ total }} руб.</div>
                <div @click="del" class="pr curspoi mr10" style="width:22px; height:22px; background:url('/public/images/svg/cartDel.svg');"></div>
            </div>
        </div>
    </div>
</template>

<script>

import { cart } from "../../util/cart.js"

export default {
    props: ['obj'],
	components:{ 
	},
	data: function () {
		return {
            quantity: this.$store.state.user.cart.goods[this.obj.index].quantity,
		}
    },
    methods:{
        del(){ 
            this.$store.commit('cartDeleteProduct', this.$store.state.user.cart.goods[this.obj.index] )
            cart.write(this.$store, this)
        },
        add(){
            console.log('add')
            this.quantity++
            this.$store.commit( 'userCartProductQuantity', { index: this.obj.index, value: this.quantity } )
            cart.write(this.$store, this)
        },
        deduct(){
            console.log('deduct')
            if( this.quantity > 1 ){
                this.quantity--
                this.$store.commit( 'userCartProductQuantity', { index: this.obj.index, value: this.quantity } )
                cart.write(this.$store, this)
            }   
        }
    },
	created: function(){
	},
	mounted: function(){
    },
    computed:{
        nameStyle(){
            return{
                fontSize: this.$store.state.sys.window.wl*0.8 + 'px',
            }
        },
        imgStyle(){
            return{
                width: this.$store.state.sys.window.wl*4 + 'px',
                height: this.$store.state.sys.window.wl*4 + 'px'
            }
        },
        priceStyle(){
            return {
                fontSize: this.$store.state.sys.window.wl*0.8 + 'px'
            }
        },
        priceTotal(){
            return {
                width: 200+'px',
                fontSize: this.$store.state.sys.window.wl*0.8 + 'px'
            }
        },
        buttonStyle(){
            return {
                width: 22+'px',
                height: 22+'px'
            }
        },
        total(){
            return ( this.$store.state.user.cart.goods[this.obj.index].quantity * this.$store.state.user.cart.goods[this.obj.index].price ).toFixed(2)
        }
    },
    watch:{
    }
}
</script>

<style scoped>
input[type='number'] {
    -moz-appearance:textfield;
    text-align: center;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
.onClick:active{
    transform: scale(0.8);
}
</style>