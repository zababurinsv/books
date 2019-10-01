<template>
    <div :id="ids.container" class="pr disf fdc faic fjcs bcw ofh mb5" :style="containerStyle">
        <a href="#" class="pr disf fdr fjcc fiac fb110 ofh" :style="{width:obj.style.w-5+'px', height:obj.style.w-5+'px'}">
            <div :id="ids.image" @mouseleave="leave" @mousehover="hover" @mouseenter="hover" class="pr" :style="imgStyle"></div>
        </a>
        <div class="pr disf fdc fjcsb fais" :style="{width: obj.style.w-5+'px', height: '100px'}">
            <div class="pr disf fdr fjcc f2 fs22 fcgy0">
                <p class="clip2">{{obj.data.title}}</p>
            </div>
            <div class="pr w100p f2 fs14 fcgy1">
                <p class="clip1">{{obj.data.author}}</p>
            </div>
            <div class="pr w100p disf fdr fjcs f1 fs14 fcgy2">
                <div class="">
                    obj.data.category /
                </div>
                <div class="">
                    obj.data.id
                </div>
            </div>
        </div>
        <div class="pr w100p disf fdr fjcsb faic padl5 mt5">
            <div class="pr f2 fs14 fcgy1">
                5678.12 руб.
            </div>
            <a @click="addToCart" class="pr f2 fs14 pad5 curspoi usn mr10 fontHover" :style="buttonBuyStyle">
                {{buttonBuy.text}}
            </a>
        </div>
    </div>
</template>

<script>
import { cart } from "../../util/cart.js"

import {TweenMax} from "gsap";

export default {
    props: ['obj'],
	components:{
	},
	data: function () {
		return {
            isHover: false,
            ids:{
                container: undefined,
                image: undefined
            },
            inCart: false,
            buttonBuy: {
                text: '',
                styleNotInCart:{
                    backgroundColor: 'rgb(0,0,0,0.05)',
                    color: 'grey'
                },
                styleInCart:{
                    backgroundColor: 'red',
                    color: 'white'
                }
            }
		}
    },
    methods:{
        hover(){
            TweenMax.to('#'+this.ids.image, 0.2, {width: this.obj.style.w+50, height: this.obj.style.w+50} )
        },
        leave(){
            TweenMax.to('#'+this.ids.image, 0.2, {width: this.obj.style.w, height: this.obj.style.w} )
        },
        setButtonText(){
            this.inCart ? this.buttonBuy.text = 'Готово' : this.buttonBuy.text = 'В Корзину'
        },
        addToCart(){
            this.inCart = !this.inCart
            this.setButtonText()
            cart.button(this.$store, this)
        },
        fx(){
            if( this.obj.direction == -1 ){
                let pause = this.obj.index * 0.03
                TweenMax.fromTo('#'+this.ids.container, 0.2, {opacity: 1}, {opacity: 0, delay: pause, ease: CustomEase.create("custom", "M0,0,C0,0.298,0.3,1,0.5,1,0.696,1,1,0.298,1,0") } )
            }else if( this.obj.direction == 1 ){
                let pause = (this.obj.amount - 1 - this.obj.index) * 0.03
                TweenMax.fromTo('#'+this.ids.container, 0.2, {opacity: 1}, {opacity: 0, delay: pause, ease: CustomEase.create("custom", "M0,0,C0,0.298,0.3,1,0.5,1,0.696,1,1,0.298,1,0") } )  
            }
        }
    },
	created: function(){
        this.ids.container = 'linesliderBlock' + (this._uid + 0)
        this.ids.image = 'linesliderBlockImage' + (this._uid + 0)  

        this.setButtonText()
	},
	mounted: function(){ 
    },
    computed:{
        buttonBuyStyle(){
            return this.inCart ? this.buttonBuy.styleInCart : this.buttonBuy.styleNotInCart
        },
        containerStyle(){
            return {
                width: this.obj.style.w+'px'
            }
        },
        imgStyle(){
            let url
            return{
                width: this.obj.style.w-5+'px',
                height: this.obj.style.w-5+'px',              
                backgroundColor: 'grey',
                backgroundImage: 'url('+ this.obj.data.urlToImage +')',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }
        }
    },
    watch:{
        'obj.data.title': function (newVal, oldVal){
            this.inCart = cart.isExist( this.$store, this.obj.data )
            this.setButtonText()
            this.fx()
        },
        '$store.state.user.cart.goods': function (newVal, oldVal){
            this.inCart = cart.isExist( this.$store, this.obj.data )
            this.setButtonText()
        }
    }
}
</script>

<style scoped>
.fb110:hover{
    filter: brightness(110%);
}
.fontHover:hover{
    color: #D38641;
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