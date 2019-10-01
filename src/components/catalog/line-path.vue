<template>
    <div class="pr disf fdr f1 fcgy1" :style="containerStyle">
        <div v-for="(item, index) in path" :key="item.id">
            <div class="pr disf fdr">
                <a :href="links[index]" class="tdul ml10">{{ formatText(item) }}</a>
                <div class="ml10" v-if="index < arr.length-1">-</div>
            </div>
        </div>  
    </div>
</template>

<script>
import { textFormat } from "../../util/text-format.js"

export default {
	components:{
        textFormat
	},
    props: ['obj'],
    data: function () {
		return {
            arr: ['Главная', 'Каталог'],
            links: ['/', '/catalog']
		}
    },
    methods:{
        formatText(item){
            return textFormat.engToRus(item)
        }
    },
    computed:{
        containerStyle(){
            return {
                padding: '10px 10px 10px 10px',
                maxWidth: this.$store.state.sys.window.w - 20 + 'px',
                fontSize: 11 + 'px'
            }
        },
        path(){
            let url = this.links[1]
            for (var key in this.$route.params) {
                url = url + '/' + this.$route.params[key]
                this.links.push(url)
                this.arr.push(this.$route.params[key])
            }
            return this.arr
        }
    },
    created: function(){
        //console.log( this.$route.path )
    }
}
</script>
<style scoped>
.oph067:hover{
    opacity: 0.67;
}
</style>