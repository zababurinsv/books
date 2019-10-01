<template>
    <div>
        <div @mouseleave="rewind=true" @mousehover="rewind=false" @mouseenter="rewind=false" :style="containerStyle" class="pr w100p disf fdr fjcc faie mt5">
            <div class="pr w100p disf fdr fjcc ofh">
                <bigSlider1 v-if="index == 1" :obj="{style: slide1, direction}"></bigSlider1>
                <bigSlider2 v-if="index == 2" :obj="{style: slide2, direction}"></bigSlider2>
            </div>
            <div class="pa z3 disf fdr f2 fs30 fcgy1">
                <div :id="ids.buttonA" @click="previous" class="button pad10 padl20 padr20 shadow bcw mr10 mb5 curspoi">{{buttons.a}}</div>
                <div :id="ids.buttonB" @click="next" class="button pad10 padl20 padr20 shadow bcw ml10 mb5 curspoi">{{buttons.b}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import bigSlider1 from "./bigSliderStyle1.vue"
import bigSlider2 from "./bigSliderStyle1.vue"

import {TweenMax} from "gsap";

import { sys } from "../../../util/sys.js"

export default {
    props: ['obj'],
	components:{
        bigSlider1,
        bigSlider2
	},
	data: function () {
		return {
            ids:{
                buttonA: undefined,
                buttonB: undefined
            },
            index: 1,
            amount: 2,
            process: false,
            rewind: true,
            direction: 0,
            buttons:{
                a: '<',
                b: '>'
            },
            containerStyle:{
                minHeight: 600 + 'px'
            },
            slide1:{
                w: 860,
                h: 600,
                bgi: './public/images/index/bigSlider1.png',
                bg: 'white',
                line: '#D38641'
            },
            slide2:{
                w: 860,
                h: 600,
                bgi: './public/images/index/bigSlider2.png',
                bg: 'white',
                line: 'red'
            }
		}
    },
    methods:{
        next(){
            this.direction = 1

            let oldIndex = this.index
            this.index = 0    

            this.index = oldIndex + 1
            if( this.index > this.amount )
                this.index = 1
        },
        previous(){
            this.direction = -1

            let oldIndex = this.index
            this.index = 0
    
            this.index = oldIndex - 1
            if( this.index < 1 )
                this.index = this.amount
        }
    },
	created: async function(){
        this.ids.buttonA = 'bigSliderButtonA' + (this._uid + 0)
        this.ids.buttonB = 'bigSliderButtonB' + (this._uid + 0)

        let thiz = this
        setInterval( async function() {
            if( thiz.rewind == true ){
                thiz.next()
            }
        }, 5000);
	},
	mounted: function(){
        let thiz = this

        function buttonAnimation(){
            let delay = sys.random(0,2)
            let delay2 = sys.random(0,2)
            if( delay < delay2 ) { delay = delay2 } 
            TweenMax.fromTo('#'+thiz.ids.buttonA, 0.2+delay, {rotation:0},{rotation:-360, delay: 4 } )
            TweenMax.fromTo('#'+thiz.ids.buttonB, 0.2+delay2, {rotation:0},{rotation:360, delay: 5, onComplete: buttonAnimation } )
        }
        buttonAnimation()
    },
    computed:{
    }
}
</script>

<style scoped>
.button:hover{
    color: #D38741;
}
.button:active{
    transform: scale(0.9);
}
</style>
