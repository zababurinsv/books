<template>
    <div class="pr w100p disf fdc faic" :style="containerStyle">
        <parallaxImg :obj="{ h: 500, img: './public/images/index/parallax1.png', desc: './public/images/index/parallax1.svg' }"></parallaxImg>
        <div class="pr w100p disf fdr fjcc f1 fs13 fcgy2 padt10 padb10">Последние записи</div>
        <div class="pr w100p disf fdr fjcc" :style="blockStyle">
            <div class="pr">
                <chat></chat>
            </div>
            <div class="pr w60p disf fdc fjcc ml20">
                <ul class="pr w100p" v-for="(obj, index) in sayings" :key="obj.id">
                    <li class="pr w100p disf fdr mt10">
                        <div class="pr h100p disf fdc faic">
                            <div :style="blockImageStyle[index]"></div>
                            <div class="f1 fs12 fcgy2 mt5 clip1">{{obj.author}}</div>
                        </div>
                        <div class="pr disf fdc fjcc ml20 pad10">
                            <div class="f1 fs12 fcgy2 clip1">{{obj.product}}</div>
                            <div class="f4 fs14 fcgy1 mt5 clip2" style="text-indent: 10px;"><p>{{obj.phrase}}</p></div>
                            <div class="f2 fs12 fcgy2 mt5">18.05.2018</div>
                        </div>
                    </li>
                </ul>
            </div> 
        </div>
    </div>
</template>

<script>
import parallaxImg from "./parallaxImg.vue"
import chat from "./chat.vue"

export default {
    props: ['obj'],
    components:{
        parallaxImg,
        chat
    },
    data: function () {
		return {
            ids:[],
            sayings:[
                { 
                    product: 'Книги / 111 новых советов по PR + 7 заданий для самостоятельных экспериментов',
                    author:'Хелен Роуленд', 
                    phrase:'Нет большего удовольствия для женщины, которая весит сто сорок фунтов, чем увидеть женщину весом сто пятьдесят фунтов.',
                    url: './public/images/index/whatssayauthot1.png'
                },
                { 
                    product: 'Книги / HR-брендинг: лучшие практики десятилетия',
                    author:'Джордж Оруэлл', 
                    phrase:'Наиболее эффективный способ уничтожения людей - это отрицание  и уничтожение их собственного понимания своей истории',
                    url: './public/images/index/whatssayauthot2.png'
                },
                { 
                    product: 'Книги / Малый бизнес: от иллюзий к успеху. Как создать компанию и удержать ее',
                    author:'Т.Пратчетт', 
                    phrase:'Нормальный семейный человек, который каждый день ходит на работу и ответственно относится к своим обязанностям, мало чем отличается от самого чокнутого психопата.',
                    url: './public/images/index/whatssayauthot3.png'
                },
                { 
                    product: 'Книги / HR-брендинг: лучшие практики десятилетия',
                    author:'Джордж Оруэлл', 
                    phrase:'Наиболее эффективный способ уничтожения людей - это отрицание  и уничтожение их собственного понимания своей истории',
                    url: './public/images/index/whatssayauthot2.png'
                },
                { 
                    product: 'Книги / Малый бизнес: от иллюзий к успеху. Как создать компанию и удержать ее',
                    author:'Т.Пратчетт', 
                    phrase:'Нормальный семейный человек, который каждый день ходит на работу и ответственно относится к своим обязанностям, мало чем отличается от самого чокнутого психопата.',
                    url: './public/images/index/whatssayauthot3.png'
                }
            ],
            containerStyle:{
                marginTop: '50px',
            },
            blockStyle:{
                marginTop: '0px'
            },
            blockImageStyle: [],
            imageStyle:{
                minWidth: '75px',
                minHeight: '75px',
                maxWidth: '75px',
                maxHeight: '75px',
                borderRadius: '50%',
                backgroundPosition: 'center center',
                backgroundSize: 'cover'
            }
		}
    },
    methods:{
    },
    created: function(){
        for(let i=0; i < this.sayings.length; i++){
            this.blockImageStyle.push({ background: 'url(' + this.sayings[i].url + ')' })
            Object.assign(this.blockImageStyle[i], this.imageStyle )
        }
    },
    mounted: function(){
        for(let i=0; i < this.sayings.length; i++){
            this.ids.push( 'whatsSay' + (this._uid + i) )
        }
    },
    computed:{
    }
}
</script>

<style scoped>
.clip1 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.clip2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>