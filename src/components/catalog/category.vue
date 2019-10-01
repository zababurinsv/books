<template>
    <div class="pr disf fdc fiac shadow" :style="containerStyle">
        <div class="w100p bcgy" style="height:2px;"></div>
        <div v-for="(item, index) in obj.objCategory " :key="item.id">
            <categoryblock :obj="{item, index}"></categoryblock>
        </div>
    </div>
</template>

<script>
import categoryblock from "./category-block.vue"

export default {
	components:{
        categoryblock
	},
    props: ['obj'],
    data: function () {
        return{
            containerStyle:{
                minWidth: '170px',
                margin: '0px 10px 10px 10px'
            }
        }
    },
    methods:{
        getRectContainer(){
            console.log('getRectContainer' )
            if( 'childNodes' in this.$el ){
                let rect = this.$el.childNodes["0"].getBoundingClientRect()
                this.$store.commit('setCategoryW', rect.right )
            }else{
                console.log('error catalog-category getRectContainer')
            }
        }
    },
    computed:{

    },
    mounted: function(){
        this.getRectContainer()
    }
}
</script>