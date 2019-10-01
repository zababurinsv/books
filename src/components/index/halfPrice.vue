<template>
    <div class="pr w100p disf fdc fjcc faic mt10">
        <titleBlock :obj="{ title: obj.title }"></titleBlock>
        <div :id="ids.container" :style="containerStyle" class="pr w100p disf fdr fjcc fww ofh"> 
            <div class="z3 pa f2 fs18 fcw bcr pad10 padl20 padr20" style="left:0">
                50%
            </div>
            <div :id="ids.blocks[index]" :style="blockStyle[index]" class="pr" v-for="(item, index) in rangefor(0, amount, 1)" :key="item.id">
            </div>
        </div>
    </div>
</template>

<script>
import { sys } from "../../util/sys.js"
import { rangeFor } from "../../util/vue-for-range.js"

import titleBlock from "./titleBlock.vue"

import {TweenMax} from "gsap"

export default {
    props: ['obj'],
    mixins: [rangeFor],
	components:{
        titleBlock
	},
    data: function () {
		return {
            amount: 10,
            ids:{
                container: undefined,
                blocks: []
            },
            containerStyle:{
                height: '300px'
            },
            style:{
                width: '200px',
                minWidth: '200px',
                height: '300px',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: ''
            },
            blockStyle: []
		}
    },
    methods:{
        randomMove(){
            let res = sys.randomFrom(10, 10)
            this.setPosition(res[0], res[1])
            this.setPosition(res[2], res[3])
            this.setPosition(res[4], res[5])
            this.setPosition(res[6], res[7])
            this.setPosition(res[8], res[9])
        },
        setPosition(a, b){
            const thiz = this

            const aXY = sys.getPosR( this.ids.container, this.ids.blocks[a] )
            const bXY = sys.getPosR( this.ids.container, this.ids.blocks[b] )

            const orderA = this.blockStyle[a].order
            const orderB = this.blockStyle[b].order

            const move = {x: aXY.x - bXY.x, y: aXY.y - bXY.y}

            function order(direction){
                thiz.blockStyle[a].order = orderB
                thiz.blockStyle[b].order = orderA

                TweenMax.set('#'+thiz.ids.blocks[a], {left: 0, top: 0} )
                TweenMax.set('#'+thiz.ids.blocks[b], {left: 0, top: 0} )
            }

            TweenMax.to('#'+this.ids.blocks[a], 1, {left: move.x*-1, top: move.y*-1, ease: Power0.easeNone} )
            TweenMax.to('#'+this.ids.blocks[b], 1, {left: move.x, top: move.y, ease: Power0.easeNone, onComplete: order } )
        }
    },
    created: function(){
        this.ids.container = 'halfPriceContainer' + ( this._uid )
        for( let i=0; i < this.amount; i++){
            this.ids.blocks.push( 'halfPriceBlocks' + (this._uid + i) )
            this.blockStyle.push({ order: i, backgroundColor: 'grey', background: 'url(./public/images/index/halfPrice' + i +'.png)' })
            Object.assign(this.blockStyle[i], this.style)
        }
    },
    mounted: function(){
        const thiz = this
        setInterval(function() {
            thiz.randomMove()
        }, 5000);
    },
    computed:{
        focus(){
            if( this.$store.state.sys.window.loaded == true )
                return document.hasFocus()
        }
    }
}
</script>

<style scoped>
</style>