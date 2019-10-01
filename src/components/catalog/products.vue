<template>
    <div class="">
        <div class="pr w100p disf fdr fww fjcs ofh" :style="containerStyle">
            <div v-for="(item, index) in rangefor(range.start, range.stop, 1)" :key="item.id">
                <productsblock :obj="{ data: isProducts(index), style  }"></productsblock>
            </div>   
        </div>
    </div>
</template>

<script>
import productsblock from "./products-block.vue"

import { rangeFor } from "../../util/vue-for-range.js"

export default {
	components:{
        productsblock
    },
    mixins: [rangeFor],
    props: ['obj'],
    data: function () {
		return {
            range: {
                start: 0,
                stop: 20,
                max: 20
            },
            style: {
                w: 200,
                h: 370
            }
		}
    },
    methods:{
        isProducts(index){
            if( this.obj.products != undefined && this.obj.products.isLoaded == true ){
                return this.obj.products.data[index+this.range.start]
            }else{
                return {
                    id: 'Загружаю...',
                    name: '',
                    author: '',
                    category: '',
                    subcategory: '',
                    img: 'none',
                    quantity: '',
                    price: ''
                }
            }
        }
    },
    created: function(){
    },
    computed:{ 
        containerStyle(){
            return{
                margin: '0px 0px 0px 0px',
            }
        }
    } 
}
</script>