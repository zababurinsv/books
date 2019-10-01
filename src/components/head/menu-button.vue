<template>
    <div @mouseover="open()" @mouseleave="close()" class="pr h100p disf fdr fjcs fais f1 fs13 fcgy1 curspoi ml20" style="background-color:rgba(255,255,255,0.1);">
        <div class="pr h100p disf fdc fjcc padl20">
            <div :style="icon" class="bcr"></div>
        </div>
        <a :href="obj.link" class="pr h100p disf fdc fjcc ml5 padr20">
            <div>{{obj.style.txt}}</div> 
        </a>
        <div class="pa disf fdc fjcs shadow bcw" :style="menu">
            <a :href="link.link" v-for="link in obj.urls" :key="link.id" class="pr disf fdc fjcc wsnw padl20 padr20 active" :style="{height: obj.style.h+'px'}">
                <div>{{link.name}}</div>
            </a>
        </div>
    </div>
</template>

<script>
import {TweenMax} from "gsap";

export default {
    props: ['obj'],
    data: function () {
		return {
            catalogIsActive: false,
            el: {
                icon: undefined,
                menu: undefined
            },
            icon: {
                height: this.obj.style.h/3 + 'px',
                width: this.obj.style.h/3 + 'px',
                background: 'url('+ this.obj.style.icon +')'
            },
            menu:{
                marginTop: this.obj.style.h+'px',
                opacity: 0,
                display: 'none'
            }
		}
    },
    methods:{
        open(){
            if( this.catalogIsActive == false ){
                this.catalogIsActive = true

                this.catalogIsActive = true
                TweenMax.to( this.el.icon, .2, { css:{rotation:90}, ease:Power2.easeInOut } )

                this.menu.display = 'block'
                TweenMax.to( this.el.menu, .2, { css:{opacity:1}, ease:Power2.easeInOut } )
            }
        },
        close(){
            let thiz = this
            TweenMax.to( this.el.icon, .2, { css:{rotation:0}, ease:Power2.easeInOut } )

            function onComplete(){
                thiz.menu.display = 'none'
                thiz.catalogIsActive = false
            }

            TweenMax.to( this.el.menu, .2, { css:{opacity:0}, ease:Power2.easeInOut, onComplete } )
        }
    },
    computed:{
    },
    mounted: function(){
        this.el.icon = this.$el.children[0].children[0]
        this.el.menu = this.$el.children[2]
    }
}
</script>

<style scoped>
.active:hover {
    background-color: grey;
    color: white;
}
.oph067:hover{
    opacity: 0.67;
}
</style>