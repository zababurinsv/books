<template>
    <div class="pr w100p disf fdr fjcc padt10 padb10 ofh f3 fs12 fcgy1" :style="containerStyle">
        <div>{{obj.title}}</div>
    </div>
</template>

<script>
export default {
    props: ['obj'],
    data: function () {
		return {
            containerStyle:{
                letterSpacing: '5px',
                margin: '20px 0 20px 0'
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
    }
}
</script>

<style scoped>
</style>