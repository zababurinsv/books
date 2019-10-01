<template>
    <div class="pr disf fdc fjcs faic fcgy1 pad5" :style="containerStyle">
        <div class="pr w100p disf fdr fjcs faib" style="height:18px;">
            <div class="pr f2 fs14 fcgn">В наличии</div>
        </div>
        <div class="pr ofw  mt5" :style="imgStyle"></div>
        <p class="pr w95p clip2 f3 fcgy0 fs18 mt5">{{obj.data.title}}</p>
        <div class="pr w95p disf fdr fjcs f1 fs18 mt5 clip1">
            <div>{{obj.data.author}}</div>
        </div>
        <div class="pr w95p disf fdr fjcs f1 fs12 mt10">
            <div>{{obj.data.category}}</div>
            <div class="ml5 mr5">-</div>
            <div>{{obj.data.subcategory}}</div>
        </div>
        <div class="pr w100p disf fdr fjcsb faic mt5" style="height:33px;">
            <div class="pr f2 fs20 fcgy1 ml10">98 772 руб.</div>
            <div @click="addToCart" :style="buttonBuyStyle" class="pr pad5 f2 fs14 fcw bcgy curspoi usn">{{buttonBuy.text}}</div>
        </div>
    </div>
</template>

<script>
import { auth } from "../../util/auth.js"
import { cart } from "../../util/cart.js"

export default {
	components:{
	},
    props: ['obj'],
    data: function () {
		return {
            wc: this.obj.style.w,
            hc: this.obj.style.h,
            inCart: false,
            buttonBuy: {
                text: '',
                styleNotInCart:{
                    backgroundColor: 'rgb(128,128,128)',
                    color: 'white'
                },
                styleInCart:{
                    backgroundColor: 'red',
                    color: 'white'
                }
            }
		}
    },
    methods:{
        setButtonText(){
            this.inCart ? this.buttonBuy.text = 'Готово' : this.buttonBuy.text = 'В Корзину'
        },
        addToCart(){
            this.inCart = !this.inCart
            this.setButtonText()
            cart.button(this.$store, this)
        }
    },
    computed:{
        containerStyle(){
            return {
                width: this.wc + 'px',
                height: this.hc + 'px',
                margin: '0px 0px 0px 0px'
            }
        },
        imgStyle(){
            return {
                width: this.wc + 'px',
                height: this.wc + 'px',
                backgroundImage: 'url('+ this.obj.data.urlToImage +')',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                backgroundColor: 'rgba(0,0,0,0.67)'
            }
        },
        buttonBuyStyle(){
            return this.inCart ? this.buttonBuy.styleInCart : this.buttonBuy.styleNotInCart
        }
    },
	created: function(){
        this.setButtonText()
    },
    watch:{
        'obj.data.id': function (newVal, oldVal){
            this.inCart = cart.isExist( this.$store, this.obj.data )
            this.setButtonText()
        },
        '$store.state.user.cart.goods': function (newVal, oldVal){
            this.inCart = cart.isExist( this.$store, this.obj.data )
            this.setButtonText()
        }
    }
}
</script>
<style scoped>
li p {
    margin: 0;
    padding: 0;
}
.oph067:hover{
    opacity: 0.67;
}
.clip1 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.clip2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>