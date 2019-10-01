<template>
    <div class="pr w100p disf fdr fjcc faic ofh mb20" style="border-top:1px solid rgba(0,0,0,0.1); height: 100px;">
        <div class="pr f3 fs12 fcgy1 mr10">
            © ООО «Овощи-фрукты, 2018
        </div>
        <a href="#" class="focus smooth01" style="background: url('/public/images/svg/social-vk.svg')" :style="styleIcon"></a>
        <a href="#" class="focus smooth01" style="background: url('/public/images/svg/social-facebook.svg')" :style="styleIcon"></a>
        <a href="#" class="focus smooth01" style="background: url('/public/images/svg/social-instagram.svg')" :style="styleIcon"></a>
        <div class="pr disf fdr fjcc faic" style="width:50px; height:50px;">
            <div class="pr" style="width:2px; height:25px; background-color:rgba(0,0,0,0.1);"></div>
        </div>
        <div class="mr10" style="background: url('/public/images/svg/social-visa.svg'); width:90px; height:50px;"></div>
        <div class="mr10" style="background: url('/public/images/svg/social-mastercard.svg'); width:90px; height:50px;"></div>
        <div style="background: url('/public/images/svg/social-yandex.svg'); width:200px; height:50px;"></div>
    </div>
</template>

<script>
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
        styleIcon(){
            return{
                width: 50 + 'px',
                height: 50 + 'px',
                margin: '0px 10px 0px 10px'
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
.focus:hover{
    transform: scale(1.1);
}
</style>