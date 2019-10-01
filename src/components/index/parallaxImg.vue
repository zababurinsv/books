<template>
    <div :id="ids.container" class="z0 pr w100p ofh mt10" :style="containerStyle">
        <div :id="ids.block" style="pr z1 w100p" :style="blockStyle">
            <div class="pr z2 w100p h100p disf fdr fjcs faic">
                <div :style="informStyle">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {TweenMax} from "gsap";

import { sys } from "../../util/sys.js"

export default {
    props: ['obj'],
	components:{
	},
	data: function () {
		return {
            loaded: false,
            ids:{
                container: undefined,
                block: undefined
            },
            containerStyle:{
                height: this.obj.h+'px',
                rect: undefined
            },
            blockStyle:{
                height: this.obj.h+'px',
                image: undefined,
                backgroundImage: undefined,
                imageSize:{
                    w: undefined,
                    h: undefined
                }
            },
            informStyle:{
                width: '400px',
                height: '200px',
                backgroundImage: 'url(' + this.obj.desc + ')',
                backgroundRepeat: 'no-repeat',
                marginLeft: '10%'
            }
		}
    },
    methods:{
        limits(){
            if( this.loaded == true ){
                const scroll = this.$store.state.sys.window.scroll
                const rect = sys.getRect(this.ids.container)
                const containerCenter = sys.getPosA(this.ids.container).y + this.obj.h/2
                const blockImgCenter = this.blockStyle.imageSize.h / 2

                if( rect.top < this.$store.state.sys.window.h && rect.bottom > 0 ){
                    let move = (rect.top - this.$store.state.sys.window.h)/2 - blockImgCenter
                    this.setImagePosition( 'center', move*-1 + 'px' )
                }
            }
        },
        setImagePosition(x, y){
            document.getElementById(this.ids.block).style.backgroundPosition = x + ' ' + y; 
        }
    },
	created: function(){
        this.ids.container = 'parallaxImg' + (this._uid + 0)
        this.ids.block = 'parallaxImg' + (this._uid + 1)
	},
	mounted: function(){
        const thiz = this
        this.blockStyle.image = new Image()
        this.blockStyle.image.src = this.obj.img
        this.blockStyle.image.onload = function() {
            thiz.blockStyle.imageSize = {w: this.width, h: this.height}
            thiz.blockStyle.backgroundImage = 'url(' + this.src + ')'
            thiz.loaded = true
            thiz.limits()
        }
    },
    computed:{
    },
    watch:{
        '$store.state.sys.window.scroll': function (newVal, oldVal){
            this.limits()
        }
    }
}
</script>

<style scoped>
</style>