<template>
    <a :href="obj.data.url" target="_blank" class="pr disf fdc fcgy1 ofh" :style="containerStyle">
        <div class="pr" :style="imgStyle"></div>
        <div class="pr disf fdc fjcc mt5" style="height: 58px;"><p class="pr f2 fs24 clip2 fcgy0">{{ obj.data.title }}</p></div>
        <div class="pr disf fdc fjcc mt10" style="height: 50px;"><p class="pr f2 fs14 clip3">{{ obj.data.description }}</p></div>
        <p class="pr fs14 mt10 fcgy2">{{ obj.data.publishedAt }}</p>
        <p class="pr f3 fs14 mt10" style="right: 0;">{{ obj.data.source.name }}</p>
    </a>
</template>

<script>
import {TweenMax} from "gsap";

export default {
    props: ['obj'],
	components:{ 
	},
	data: function () {
		return {
		}
    },
    methods:{
    },
	created: function(){
	},
	mounted: function(){
    },
    computed:{
        imgStyle(){
            return{
                backgroundImage: 'url('+ this.obj.data.urlToImage +')',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                backgroundColor: 'grey',
                width: this.obj.style.w + 'px',
                height: this.obj.style.w + 'px'
            }
        },
        containerStyle(){
            return{
                width: this.obj.style.w + 'px',
                margin: '0 5px 0 5px'
            }
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
.clip2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.clip3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>