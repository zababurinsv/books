<template>
    <div class="pr w100p ofh mb10">
        <titleBlock :obj="{ title: obj.title }"></titleBlock>
        <div class="pr w100p disf fdr fjcc">
            <div v-for="(item, index) in rangefor(range.start, range.stop, 1)" :key="item.id">
                <newsBlock :obj="{data: isProducts(index), style, rangeCalc }"></newsBlock>
            </div>
        </div>
    </div>
</template>

<script>
import newsBlock from "./newsBlock.vue"
import titleBlock from "./titleBlock.vue"

import { rangeFor } from "../../util/vue-for-range.js"
import { news } from "../../util/news/index.js"

export default {
    props: ['obj'],
    mixins: [rangeFor],
	components:{
        newsBlock,
        titleBlock
	},
	data: function () {
		return {
            newss:{
                isLoaded: false,
                data: []
            },
            range:{
                start:0,
                stop: 0,
                max: 20
            },
            style:{
                w: 300,
                h: 300
            },
            titleStyle:{
                borderTop: '1px solid rgba(200,200,200,1)',
                letterSpacing: '5px'
            }
		}
    },
    methods:{ 
        isProducts(index){
            if( this.newss.data != undefined && this.newss.isLoaded == true ){
                return this.newss.data[index+this.range.start]
            }else{
                return {
                    title: 'Загружаю новости...',
                    description: 'ожидаю...',
                    publishedAt: '',
                    source: { name: '' },
                    urlToImage: 'none'
                }
            }
        },
        setRange(){
            if( this.w > this.$store.state.sys.window.minWidth ){
                this.range.stop = parseInt( this.w / ( this.style.w + 15 ) ) 
                this.range.stop > this.range.max ? this.range.max : this.range.stop 
            }
        }
    },
	created: async function(){
        const res = await news.read( this.obj.url, 0, 20 )
        this.newss.data = res
        this.newss.isLoaded = true
	},
	mounted: function(){
        this.setRange()
    },
    computed:{
        rangeCalc(){
            this.setRange()
        },
        w(){
            return this.$store.state.sys.window.w
        },
        wl(){
            return this.$store.state.sys.window.wl
        }
    }
}
</script>

<style scoped>
</style>
