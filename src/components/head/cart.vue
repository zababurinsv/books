<template>
    <div id="cartBg" class="z11 w100p disf fdc fjcs faic ofh" :style="bgStyle">
        <div class="pr disf fdc bcw shadow mt20 ofh" :style="containerStyle">
            <div class="pr disf fdr fjce faic f1 fs20 fcgy1 shadow012">
                <div @mouseover="closeHover" @mouseleave="closeLeave" @click="$store.commit('userCartIsShow', false)" class="pr disf fdr fjcsb faic curspoi fcw bcgy0 mt10 mb10" style="width:100px;">
                    <div id="closeZakrit" class="padl10 fs16">Закрыть</div>
                    <div id="closeX" class="padr10">X</div>
                </div>
            </div>
            <div v-if="this.$store.state.user.cart.goods.length > 0" class="pr w100p disf fdr fjcsa faic" style="background-color:rgba(0,0,0,0.04);" :style="mainBlock">
                <div class="pr pad10 bcw mt10 shadow012" :style="block">
                    <div v-for="(item, index) in rangefor(range.start, range.stop, 1)" :key="item.id">
                        <cartblock :obj="{ index }"></cartblock>
                    </div>
                </div>
            </div>
            <div v-else class="pr w100p disf fdr fjcc pad10 f0 fcgy1 ofh" style="font-size: 60px;">
                <div id="tovarov">Товаров</div>
                <div id="v" class="ml10">в</div>
                <div id="korzine" class="ml10">корзине</div>
                <div id="net" class="ml10">нет</div>
            </div>
            <div class="pr w100p disf fdr fjcsb faic f1 fcgy1" :style="footerStyle">
                <div class="pr disf fdr faib padl20 fs22">
                    <div>Итог: {{ total.toFixed(2) }}</div>
                    <div class="ml5 fs14">руб.</div>
                </div>
                <div class="pr disf fdr curspoi">
                    <div @click="backButton" class="mr10 op067h tsa09 usn shadow pad10 padl20 padr20">
                        {{buttons.left}}
                    </div>
                    <div @click="forwardButton" class="ml10 op067h tsa09 usn shadow pad10 padl20 padr20">
                        {{buttons.right}}
                    </div>
                </div>
                <div class="pr ofh">
                    <div class="pa z11 h100p w100p usn pen"></div>
                    <div v-if="$store.state.user.cart.goods.length > 0" class="pr disf fdc fjcc fcw bcr pad5 mr20 fb110 curspoi tsa09 usn fs26">
                        Оформить заказ
                    </div>
                    <div v-else class="pr disf fdr fjcc faic fcw mr20 pad5 usn fs26" style="width:200px; height:50px;">
                        <imgCartButton class="pa usn"/>
                        <div id="cartButtonTxt" class="pr z1 f1 fs18 fcw">Добавьте товары</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import vOutsideEvents from 'vue-outside-events'

import {TimelineMax} from "gsap";
import CustomEase from "gsap/umd/CustomEase";

import cartblock from "./cart-block.vue"
import { rangeFor } from "../../util/vue-for-range.js"
import { sys } from "../../util/sys.js"

import imgCartButton from '../../../public/images/svg/cartButton.svg'

Vue.use(vOutsideEvents)

export default {
    props: ['obj'],
    mixins: [rangeFor],
	components:{
        cartblock,
        imgCartButton
	},
	data: function () {
		return {
            tlmTovarovNet: new TimelineMax(),
            tlmButton: new TimelineMax({repeat:-1}),
            svg:{
                imgCartButton
            },
            range: {
                start: 0,
                stop: 0,
                max: 8
            },
            buttons: {
                left: '<',
                right: '>'
            },
            bgStyle:{
                backgroundColor: 'rgba(255,255,255,0.67)',
                minWidth: '800px',
                display: 'none',
                height: '100vh',
                position: 'fixed',
                opacity: 0
            },
            containerStyle:{
                maxWidth: '1300px',
                minWidth: '700px',
                width: '70%'
            },
            footerStyle:{
                height: 70+'px',
                fontSize: '18px',
                backgroundColor: 'rgba(0,0,0,0.02)'
            },
            block:{
                width: '100%'
            }
        }
    },
    methods:{
        closeHover(){
            TweenMax.to('#closeZakrit', .2, {x:-100} )
            TweenMax.to('#closeX', .2, {x:-35} )
        },
        closeLeave(){
            TweenMax.to('#closeZakrit', .2, {x:0})
            TweenMax.to('#closeX', .2, {x:0} )
        },
        openCart(){
            TweenLite.to('#cartBg', 0.2, {opacity:1, display: 'flex'})
            TweenMax.fromTo('#cartButton4', 1, {x:-200},{x:200, repeat:-1, repeatDelay: 1 } )
            TweenMax.to('#closeX', .4, {rotationX:180, repeat:-1, repeatDelay: 2, ease: Power2.easeInOut} );
            this.tlmTovarovNet.restart();
            this.tlmButton.restart()
        },      
        closeCart(){
            this.tlmTovarovNet.stop()
            this.tlmButton.stop()
            TweenLite.to('#cartBg', 0.2, {opacity:0, display: 'none'})
            this.$store.commit('userCartIsShow', false )
        },
        checkRangeLimits(){
            let length = this.$store.state.user.cart.goods.length
            let range = this.range.stop - this.range.start
            if( length > 0 ){
                if( length > this.range.max ){
                    this.range.stop = this.range.max
                }else{
                    this.range.stop = length
                } 
            }
        },
        forwardButton(){
            console.log('forwardButton')
			if( this.$store.state.user.cart.goods.length > this.range.max ){
				if( this.range.stop + this.range.max > this.$store.state.user.cart.goods.length ){
					if( this.range.stop != this.$store.state.user.cart.goods.length ){
						this.range.start += this.range.max
						this.range.stop = this.$store.state.user.cart.goods.length
					}
				}else{
					this.range.start += this.range.max
					this.range.stop += this.range.max	
				}
			}		

        },
        backButton(){
            console.log('backButton')
			if( this.range.start > 0 ){
				if(	this.range.start - this.range.max >= 0 ){
					this.range.start -= this.range.max
					this.range.stop = this.range.start + this.range.max
				}else{
					this.range.start = 0
					this.range.stop = this.$store.state.user.cart.goods.length
				}
			}
        }
    },
	created: function(){
        CustomEase.create("jump0", "M0,0 C0.072,0.597 0.276,1.002 0.501,1 0.725,0.997 0.927,0.595 1,0")
        CustomEase.create("jump1", "M0,0 C0.025,0.191 0.071,0.305 0.119,0.294 0.187,0.279 0.222,0.023 0.225,0 0.237,0.555 0.335,0.985 0.451,1 0.572,1.014 0.678,0.576 0.69,0 0.688,0.244 0.73,0.452 0.782,0.45 0.834,0.45 0.876,0.244 0.874,0 0.877,0.017 0.897,0.135 0.93,0.147 0.972,0.161 0.998,0.011 1,0")
	},
	mounted: function(){
        let thiz = this

        this.tlmTovarovNet.fromTo('#tovarov', 1.1, {y:-100},{ y:0, delay:1.0, ease: Elastic.easeOut }, 0)
        this.tlmTovarovNet.fromTo('#v', 1.5, {x:-600, scale:"0.1", rotation:4321},{x:0, scale:1, rotation:0, ease: Elastic.easeOut}, 0)
        this.tlmTovarovNet.fromTo('#korzine', 1.1, {y:100}, {y:0, delay:1.0, ease: Elastic.easeOut}, 0)
        this.tlmTovarovNet.fromTo('#net', 1, {rotation:120}, {rotation:0, delay:3, ease: Elastic.easeOut}, 0)

        function reTlmTovarovNet(){
            thiz.tlmTovarovNet.to('#net', sys.random(0,2)+1, {rotation: sys.random(-90,90), ease: "jump1", delay:5, onComplete:reTlmTovarovNet })
        }
        reTlmTovarovNet()

        this.tlmButton.fromTo('#cartButton3', 0.3, {x:0},{x:10, ease: "jump0"}, 0.0)
        this.tlmButton.fromTo('#cartButton2', 0.3, {x:0},{x:10, ease: "jump0"}, 0.1)
        this.tlmButton.fromTo('#cartButtonTxt', 0.3, {x:0},{x:10, ease: "jump0"}, 0.1)
        this.tlmButton.fromTo('#cartButton1', 0.3, {x:0},{x:10, ease: "jump0"}, 0.2)
        this.tlmButton.repeatDelay(3)    
    },
    computed:{
        total(){
            let total = 0
            for(let i=0; i < this.$store.state.user.cart.goods.length; i++)
                if( this.$store.state.user.cart.goods[i].price > 0 )
                    total += ( this.$store.state.user.cart.goods[i].price * this.$store.state.user.cart.goods[i].quantity )
            return total
        }
    },
    watch:{
        '$store.state.sys.window.key': function (newVal, oldVal){
            if( this.$store.state.user.cart.isShow == true && newVal == 'Escape' ){
                this.$store.commit('sysKey', { key: '' } )
                this.$store.commit( 'userCartIsShow', false )
            }
        },
        '$store.state.user.cart.goods': function (newVal, oldVal){
            this.checkRangeLimits()
        },
        '$store.state.user.cart.isShow': function (newVal, oldVal){
            if( newVal == true ){
                this.openCart()
                this.checkRangeLimits()
            }else if( newVal == false )
                this.closeCart()
        }
    }
}
</script>

<style scoped>
.fb110:hover{
    filter: brightness(90%);
}
.op067h:hover{
    opacity: 0.67;
}
.tsa09:active{
    transform: scale(0.9);
}
</style>