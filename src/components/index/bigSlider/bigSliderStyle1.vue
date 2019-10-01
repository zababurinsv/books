<template>
    <div class="pr w100p disf fdc fjcc" :style="containerStyle">
        <div class="z1 pr w100p mt5 bcw" :style="lineStyle"></div>
        <div class="pr w100p disf fdr fjcc" :style="blockStyle"></div>
    </div>
</template>

<script>
import {TweenMax} from "gsap";

export default {
    props: ['obj'],
	components:{
	},
	data: function () {
		return {
            el:{
                line: undefined,
                slider: undefined
            },
            lineStyle:{
                height: '2px',
                backgroundColor: this.obj.style.line
            }
		}
    },
    methods:{
        lineAnimation(){
            this.el.line.style.backgroundColor = this.obj.style.line;
            
            ( this.obj.direction == 1 ) ? this.el.line.style.left = "-100%" : this.el.line.style.right = "-100%";
            TweenMax.to(this.el.line, .4, {left:"0%", ease:Power2.easeInOut})
        }
    },
	created: function(){

	},
	mounted: function(){
        this.el.line = this.$el.children[0];
        this.el.slider = this.$el.children[1];

        this.lineAnimation();
        
        ( this.obj.direction == 1 ) ? this.el.slider.style.right = "-100%" : this.el.slider.style.left = "-100%";
        TweenMax.to(this.el.slider, .2, {left:"0%", ease:Power2.easeInOut})
    },
    computed:{
        containerStyle(){
            return{
                height: this.obj.style.h + 'px',
                backgroundColor: this.obj.style.bg
            }
        },
        blockStyle(){
            return{
                height: this.obj.style.h + 'px',
                backgroundImage: 'url('+this.obj.style.bgi+')',
                backgroundPosition: 'center center'
            }
        }
    },
    watch:{
    }
}
</script>

<style scoped>
</style>