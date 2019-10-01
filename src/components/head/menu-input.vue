<template>
    <div class="padl20">
        <input v-model="search" class="pr f2 search smooth" :style="{ height: obj.h-2+'px', fontSize: 14+'px' }" placeholder="Попробую найти...">
        <div v-if="search.length > 0" class="pa">
            <a :href="res.link" v-for="res in result" :key="res.id" class="pr disf fdc bcw f1 fcgy1 oph067" :style="{ fontSize: 14+'px' }">
                <div class="padt10 padl10 padr10 links">{{ res.name }}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['obj'],
    data: function () {
		return {
            search: '',
            result: [
                { name: 'результат 1', link: '#' },
                { name: 'результат 2', link: '#' },
                { name: 'результат 3', link: '#' },
                { name: 'результат 4', link: '#' }
            ]
		}
    },
    methods:{
    },
    computed:{
    }
}
</script>

<style scoped>
.search{
    color: rgba(128,128,128,1);
    background-color: rgba(0,0,0,0.05);
    text-indent: 10px;
    width: 200px;
    border:0;
    outline:none;
}
.search:focus{
    width: 400px;
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: rgba(0,0,0,0.5);
}
.links{
    border-bottom: 1px solid rgba(192,192,192,1);
}
.oph067:hover{
    color: rgba(192,192,192,1);
}
</style>