<template>
    <div>
		<links :obj="{ links }"></links>
		<social></social>
		<information></information>
    </div>
</template>

<script>
import links from "./../footer/links.vue"
import social from "./../footer/social.vue"
import information from "./../footer/information.vue"

export default {
    props: ['obj'],
	components:{
		links,
		social,
		information
	},
	data: function () {
		return {
			links:[
				{ name: 'КАТАЛОГ', link: '/catalog/' },
				{ name: 'НОВОСТИ', link: '/news/' },
				{ name: 'ОПЛАТА И ДОСТАВКА', link: '/paydelivery/' },
				{ name: 'КОНТАКТЫ', link: '/contcts' }
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
</style>