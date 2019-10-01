<template>
    <div class="pr w100p disf fdr fjcc faic ofh mt10" style="background-color: rgba(0,0,0,0.05); height: 70px;">
        <div class="pr f2 fs12 fcgy1 tac" :style="style">
            ООО «Комплект-Подписные издания». 191014 г. Санкт-Петербург Литейный пр. 57. ИНН / КПП: 7841330634 / 784101001. р/счет 40702810055040014692
            в СЕВЕРО-ЗАПАДНЫЙ БАНК ПАО СБЕРБАНК г. Санкт-Петербург. к/счет 30101810500000000653. БИК 044030653.
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
                minWidth: this.$store.state.sys.window.minWidth + 'px',
                maxWidth: this.$store.state.sys.window.minWidth + 'px'
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