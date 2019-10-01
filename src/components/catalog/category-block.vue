<template>
    <a :href="obj.item.url" class="pr disf fdr f2 fcgy1 oph067 curspoi" :style="containerStyle">
        <div class="pr usn" :style="blockStyle">
            {{obj.item.name}}
        </div>
    </a>
</template>

<script>
export default {
	components:{
        
	},
    props: ['obj'],
    data: function () {
		return {
            containerStyle: {
                fontSize: 11 + 'px'
            },
		}
    },
    methods:{
    },
    computed:{
        blockStyle(){
            let pad = 0
            if( this.obj.index == 0 )
                pad = 20
            return {
                padding: pad + 'px 20px 20px 20px'
            }
        }
    },
    mounted: function(){

    }
}
</script>
<style scoped>
.oph067:hover{
    opacity: 0.67;
}
</style>