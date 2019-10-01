<template>
    <div>
        <div class="pr z3 w100p disf fdr faic bcw mt5" :style="{ height: obj.h + 'px' }">
            <menubutton :obj="buttonData"></menubutton>
            <menubutton :obj="buttonData"></menubutton>
            <menuinput :obj="{ h: obj.h }"></menuinput>
            <menucart></menucart>
        </div>
    </div>
</template>

<script>
import menubutton from "./menu-button.vue"
import menuinput from "./menu-input.vue"
import menucart from "./menu-cart.vue"

export default {
	components:{ 
        menubutton,
        menuinput,
        menucart
	},
    props: ['obj'],
    data: function () {
		return {
            buttonData: {
                link: '/catalog',
                urls: [
                    { name: 'Большая российская энкциклопедия', link: '#' },
                    { name: 'Художественная литература', link: '#' },
                    { name: 'Искусство / Архитектура', link: '#' },
                    { name: 'Дизайн / Мод', link: '#' },
                    { name: 'Кулинарные книги', link: '#' },
                    { name: 'Детские книги', link: '#' },
                    { name: 'Журналы', link: '#' }
                ],
                style:{
                    h: this.obj.h,
                    icon: './public/images/svg/cap-button-icons.svg',
                    txt: 'Сувениры'
                }
            }
		}
    },
    methods:{
    },
    computed:{
    } 
}
</script>