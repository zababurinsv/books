<template>
    <div class="pr w100p disf fdr fjcc" :style="containerStyle">
        <ul class="pr w100p" v-for="(item, index) in title" :key="item.id">
            <li class="pr w100p categories disf fdc fjcsb" :style="blockStyle[index]">
                <div class="pr w100p bcw op05" style="height:1%;"></div>
                <div class="pr w100p disf fdc fjcc faic f0 fs50 fcw mb10">
                    <p class="z1">{{item.name}}</p>
                    <p class="z1 fs18"><u>products:{{item.amount}}</u></p>
                    <div class="pa z0 w100p h100p bcbk op05"></div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['obj'],
    data: function () {
		return {
            title:[
                {name: 'HISTORY', amount: '351'},
                {name: 'ART', amount: '143'},
                {name: 'LANGUAGE', amount: '55'},
            ],
            containerStyle:{
                margin: '50px 0 50px 0'
            },
            blockStyle:[
                {backgroundImage: 'url(./public/images/index/categories-history.png)'},
                {backgroundImage: 'url(./public/images/index/categories-art.png)'},
                {backgroundImage: 'url(./public/images/index/categories-language.png)'}
            ]
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
.categories{
    height: 400px;
    background-position: center, center;
}
</style>