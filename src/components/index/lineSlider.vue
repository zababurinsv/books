<template>
    <div class="z0 pr w100p ofh">
        <titleBlock :obj="{ title: obj.title }"></titleBlock>
        <div class="z2 w100p pr disf fdr fjcsa faic ofh">
            <div class="pr w100p disf fdr fjcc">
                <div v-for="(item, index) in rangefor(range.start, range.stop, 1)" :key="item.id">
                    <lineSliderBlock :obj="{ style, data: isProducts(index), index, amount: range.stop-range.start, direction }"></lineSliderBlock>
                </div>
            </div>
            <div :id="ids.last" v-if="range.start > 0" @click="lastSlide" class="pa z11 pad5 padl10 padr10 bcw shadow f1 fcgy1 fs36 curspoi usn button smooth01"  style="left:10px;">
                {{buttons.a}}
            </div>
            <div :id="ids.next" v-if="range.stop < range.max" @click="nextSlide" class="pa z11 pad5 padl10 padr10 bcw shadow f1 fcgy1 fs36 curspoi usn button smooth01"  style="right:10px;">
                {{buttons.b}}
            </div>
        </div>
    </div>
</template>

<script>
import lineSliderBlock from "./lineSliderBlock.vue"
import titleBlock from "./titleBlock.vue"

import { rangeFor } from "../../util/vue-for-range.js"
import { news } from "../../util/news/index.js"

import {TweenMax} from "gsap"

export default {
    props: ['obj'],
    mixins: [rangeFor],
	components:{
        lineSliderBlock,
        titleBlock
	},
	data: function () {
		return {
            ids:{
                next: undefined,
                last: undefined
            },
            products:{
                isLoaded: false,
                data: []
            },
            range: {
                start: 0,
                stop: 3,
                max: 20
            },
            style: {
                w: this.obj.w
            },
            buttons:{
                a: '<',
                b: '>'
            },
            direction: 1
		}
    },
    methods:{ 
        isProducts(index){
            if( this.products != undefined && this.products.isLoaded == true ){
                return this.products.data[index+this.range.start]
            }else{
                return {
                    id: '...',
                    title: 'Загружаю...',
                    author: 'ожидаю...',
                    category: 'ожидаю...',
                    subcategory: 'ожидаю...',
                    img: 'none',
                    quantity: '...',
                    price: '...'
                }
            }
        },
        lastSlide(){
            this.direction = -1
            let r = this.range.stop - this.range.start
            this.range.start--
            this.range.stop--
            if( this.range.start < 0 ){
                this.range.start = 0
                this.range.stop = r
            }

            TweenMax.fromTo('#'+this.ids.last, 0.05, {rotation:0},{rotation:-13, ease: Power0.easeNone, yoyo: true, repeat: 1} )
        },
        nextSlide(){
            this.direction = 1
            let r = this.range.stop - this.range.start
            this.range.start++
            this.range.stop++
            if( this.range.stop > this.range.max ){
                this.range.stop = this.range.max
                this.range.start = this.range.stop - r
            }

            TweenMax.fromTo('#'+this.ids.next, 0.05, {rotation:0},{rotation:13, ease: Power0.easeNone, yoyo: true, repeat: 1} )
        },
        setRange(){
            let amount = Math.ceil( this.w / (this.obj.w+10) ) - 1
            let current = this.range.stop - this.range.start

            if( this.w > this.$store.state.sys.window.minWidth ){
                this.range.stop = this.range.start + amount
                if( this.range.stop > this.range.max ){
                    this.range.stop = this.range.max
                    this.range.start = this.range.stop - amount
                }
            }else{
                let amount = Math.ceil( this.$store.state.sys.window.minWidth / (this.obj.w+10) )
                this.range.stop = this.range.start + amount
            }
        }
    },
	created: async function(){
        const res = await news.read( this.obj.url, 0, 20 )
        this.products.data = res
        this.products.isLoaded = true
	},
	mounted: function(){
        this.ids.next = 'lineslider' + (this._uid + 0)
        this.ids.last = 'lineslider' + (this._uid + 1)

        this.setRange()
    },
    computed:{
        w(){
            return this.$store.state.sys.window.w
        }
    },
    watch:{
        '$store.state.sys.window.w': function (newVal, oldVal){
            this.setRange()
        }
    }
}
</script>

<style scoped>
.button:hover{
    color: #D38741;
}
</style>