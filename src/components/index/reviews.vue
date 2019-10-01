<template>
    <div :style="containerStyle">
        <titleBlock :obj="{ title: obj.title }"></titleBlock>
        <div class="pr w100p disf fdr fjcc" :style="blockStyle">
            <div class="pr w50p disf fdc fjcs faie mr5 ofh">
                <div :id="ids.left[0]" class="pr bcgy0" :style="imageStyle">
                </div>
                <div class="pr disf fdc fjcs" :style="imageDescStyle">
                    <div class="pr disf fdr fjcsb faic">
                        <div class="pr" style="width:90;">
                            <div class="pr w100p disf fdr fjcs">
                                <div class="pr f2 fs17 fcr pad5"><p class="clip1">{{reviews.current.date}}</p></div>
                                <div class="pr f1 fs17 fcgy1 pad5" style="max-width:200px;"><u class="clip1">{{reviews.current.author}}</u></div>
                                <div class="pr f1 fs17 fcgy2 pad5"><p class="clip1">{{reviews.current.product}}</p></div>
                            </div>
                            <div :id="ids.left[1]" class="pr w100p f2 fs34 fcgy0 clip2" :style="titleStyle">
                                <div>{{reviews.current.title}}</div>
                            </div>
                            <div :id="ids.left[2]" class="pr w100p f1 fs22 fcgy1" :style="descStyle">
                                {{reviews.current.tagline}}
                            </div>
                        </div>
                        <div :id="ids.left[3]" class="pr" :style="ratingStyle">
                        </div>
                    </div>
                    <div :id="ids.left[4]" class="pr f1 fs14 fcgy0 clip8 mt5">
                        <p>{{reviews.current.desc}}</p>
                    </div>
                </div>
            </div>
            <div class="pr w50p disf fdc fjcs fais ml5" :style="rightStyle">
                <div class="pr w90p disf fdc fjcs scrollLeft">
                    <div v-for="(obj, index) in reviews.data" :key="obj.id" class="f2 fs18 fcgy0 tal" :style="rightBlockStyle">
                        <div :id="ids.blocks[index]" @click="setActive(index)" :class="{'active': isActive(index), 'passive': !isActive(index)}" class="pad10 curspoi usn">
                            <p class="clip1">{{ filterSpace(obj.title)}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { news } from "../../util/news/index.js"
import { sys } from "../../util/sys.js"

import titleBlock from "./titleBlock.vue"

import {TweenMax} from "gsap";

export default {
    props: ['obj'],
	components:{
        titleBlock
	},
	data: function () {
		return {
            uid: undefined,
            ids:{
                left: [],
                blocks: []
            },
            reviews:{
                loaded: false,
                active: 0,
                data: [],
                current:{
                    date: '00-00-0000',
                    product: 'Книги',
                    title: '',
                    author: 'Борис Иванов',
                    tagline: '',
                    desc: ''
                },
                beforeLoaded:{
                    date: '00-00-0000',
                    product: 'Категория продукта',
                    title: 'Ожидаем данные...',
                    author: 'Имя автора',
                    tagline: '«451 градус по Фаренгейту»',
                    desc: 'Америка недалекого будущего. После Второй Гражданской войны, вызванной накопившимися внутри общества разногласиями, новое правительство решило оградить население от лишних разрушительных эмоций и запретило все виды искусства, кроме телевидения, да и на нем остались только новостные каналы. Все бумажные книги, диски и кассеты с фильмами подлежат немедленному уничтожению, их хранение объявлено незаконным, а на передний план борьбы с инакомыслием выходят команды пожарных – только теперь они не борются с огнем, а, наоборот, поливают пламенем библиотеки и книгохранилища. Молодой служащий пожарной команды по имени Гай Монтег с воодушевлением сжигает книги, но знакомство с юной бунтаркой Клариссой меняет его взгляды – парень начинает понимать, что уничтожает что-то бесценное, и восстает против своего начальника брандмейстера Битти, одержимого идеей остановить распространение любого свободомыслия.'
                 }
            },
            containerStyle:{
            },
            blockStyle:{
            },
            imageStyle:{
                width: '90%',
                height: '250px',
                image: undefined,
                backgroundImage: 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
            },
            imageDescStyle:{
                width: '90%'
            },
            rewindStyle:{
                width: '30px'
            },
            rewindCursorStyle:{
                width: '10px',
                height: '50px',
            },
            ratingStyle:{
                minWidth: '100px',
                minHeight: '100px',
                backgroundImage: 'url(./public/images/svg/rating.svg)',
                backgroundRepeat: 'no-repeat'
            },
            rightBlockStyle:{
                padding: '0px 10px 20px 10px'
            },
            rightStyle:{
                height: '530px'
            },
            titleStyle:{
                height:'82px'
            },
            descStyle:{
                height:'27px'
            }
		}
    },
    methods:{
        fxWave(){
            for(let i=0; i < this.reviews.data.length; i++)   
                TweenMax.fromTo('#'+this.ids.blocks[i], 0.15, {rotationY: 0},{rotationY: 10, delay: 0.1*i, ease: Power2.easeOut, yoyo: true, repeat: 1} )
        },
        fxPush(index){
            TweenMax.fromTo('#'+this.ids.blocks[index], 0.15, {rotationX: 0},{rotationX: 90, ease: Power2.easeOut, yoyo: true, repeat: 1} )
        },
        fxLeft(){
            TweenMax.fromTo('#'+this.ids.left[0], 0.1, {left:0},{left:-20, delay:0.0, ease: Power2.easeOut, yoyo: true, repeat: 1} );
            TweenMax.fromTo('#'+this.ids.left[1], 0.1, {left:0},{left:-20, delay:0.033, ease: Power2.easeOut, yoyo: true, repeat: 1} );
            TweenMax.fromTo('#'+this.ids.left[2], 0.1, {left:0},{left:-20, delay:0.067, ease: Power2.easeOut, yoyo: true, repeat: 1} );
            TweenMax.fromTo('#'+this.ids.left[3], 0.5, {rotationX:0},{rotationX: 45, delay:0.2, ease: "jump1"} );
            TweenMax.fromTo('#'+this.ids.left[4], 0.1, {left:0},{left:-20, delay:0.1, ease: Power2.easeOut, yoyo: true, repeat: 1} );
        },
        filterSpace(str){
            return str.replace(/^\s*(.*)\s*$/, '$1');
        },
        setActive(index){
            this.reviews.active = index
            this.imageStyle.backgroundImage = 'url('+this.reviews.data[index].urlToImage+')'

            this.fxLeft()
            this.fxPush(index)

            const thiz = this
            Object.keys(this.reviews.current).forEach(function(key) {
                if (thiz.reviews.data[index][key] != null || thiz.reviews.data[index][key] != undefined) {
                    thiz.reviews.current[key] = thiz.reviews.data[index][key];
                }
            })
        },
        isActive(index){
            if( this.reviews.active == index )
                return true
            return false
        }
    },
	created: function(){
        this.uid = this._uid

        Object.assign(this.reviews.current, this.reviews.beforeLoaded); 

        ( async()=>{

            const res = await news.read( this.obj.url, 0, 20 )
            this.reviews.loaded = true

            this.reviews.data = res

            for(let i=0; i < this.reviews.data.length; i++)
                this.ids.blocks.push( 'reviews' + (this.uid + 10 + i) )

            Object.assign(this.reviews.current, this.reviews.data[this.reviews.active]); 

            this.setActive(0)

            const thiz = this;
            setInterval(function() {
                thiz.fxWave()
            }, 5000);

        })()
	},
	mounted: function(){
        this.ids.left[0] = 'reviews' + (this.uid + 0)
        this.ids.left[1] = 'reviews' + (this.uid + 1)
        this.ids.left[2] = 'reviews' + (this.uid + 2)
        this.ids.left[3] = 'reviews' + (this.uid + 3)
        this.ids.left[4] = 'reviews' + (this.uid + 4)
    },
    computed:{
    }
}
</script>

<style scoped>
.active{
    background-color: #D38641;
    color: white;
}
.passive{
    background-color: rgba(0,0,0,0.1);
}
.scrollLeft {
    direction: rtl;
    overflow-y: scroll;
}
.scrollLeft::-webkit-scrollbar{
	width: 12px;
	background-color: rgba(0,0,0,0.1);
}
.scrollLeft::-webkit-scrollbar-thumb {
	background-color: rgba(0,0,0,0.3);
}

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
.clip8 {
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
