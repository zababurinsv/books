<template>
    <div class="pr w100p disf fdr fjcc faic ofh" style="border-top:1px solid rgba(0,0,0,0.1); height: 70px;">
        <div class="" v-for="item in obj.links" :key="item.id">
            <a :href="item.link" class="pr f3 fs14 fcgy1 ml10 mr10 oph067">{{item.name}}</a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['obj'],
	components:{

	},
	data: function () {
		return {
            style:{
            }
		}
    },
    methods:{ 
    },
	created: function(){
	},
	mounted: function(){
    },
    computed:{
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
.oph067:hover{
    opacity: 0.67;
}
</style>