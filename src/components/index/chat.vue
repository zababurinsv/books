<template>
    <div class="pr h100p disf fdc fjcsb" :style="containerStyle">
        <div class="pr w100p h100p disf fdc fjce" :style="topStyle">
            <div :id="ids.topScroll" class="pr scroll">
                <div class="pr disf fdc fjc pad5" :style="messageStyle" v-for="(item) in history" :key="item.id">
                    <div class="pr disf fdr fjcs f1 fs14 fcgy1" :style="nameStyle">
                    </div>
                    <div class="pr disf fdr">
                        <div class="pr" :style="authorStyle">
                            <div class="pr bcgy" :style="avatarStyle">
                            </div>
                        </div>
                        <div class="pr disf fdc fjcs">
                            <div class="f2 fs10 fcgy2 padl5">{{formatDate(item.time)}}</div>
                            <div class="f2 fs12 fcgy1 padl5">{{item.message}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pr disf fdr fjcsb pad5" :style="bottomStyle">
            <input v-model="message" @keyup.enter="send" class="pr w100p input" :style="inputStyle" placeholder="Сообщение">
            <div @click="send" class="pr bcgn" :style="buttonStyle"></div>
        </div>
    </div>
</template>

<script>
import io from 'socket.io-client'

import { dateFormat } from "../../util/dateFormat.js"

export default {
    props: ['obj'],
    data: function () {
		return {
            ids:{},
            socket: undefined,
            history: [],
            message: '',
            containerStyle:{
                width: '300px',
                height: '530px',
                borderStyle: 'solid',
                borderWidth: '0px 1px 1px 1px',
                borderColor: 'rgba(0,0,0,0.2)',
            },
            topStyle:{
            },
            messageStyle:{
                minHeight: '50px'
            },
            bottomStyle:{
                height: '30px',
                marginBottom: '2px'
            },
            inputStyle:{
                minHeight: '28px',
            },
            buttonStyle:{
                minHeight: '30px',
                minWidth: '30px',
                backgroundImage: 'url(./public/images/svg/index-chat-button.svg)',
                backgroundSize: '100%'
            },
            authorStyle:{
                width: '50px'
            },
            avatarStyle:{
                width: '50px',
                height: '50px'
            },
            nameStyle:{
            }
		}
    },
    methods:{
        connect: function(){
            this.socket = io('127.0.0.1:3002', { path: '/chat' });
        },
        send: function(){
            this.socket.emit('chatMessage', { message: this.message });
            this.message = ''
        },
        sendComplete: function(obj){
            console.log(obj)
            if( obj.result == true ){
                console.log('SEND MESSAGE DONE')
            }else{
                console.log('ERROR SEND MESSAGE')
            }
        },
        formatDate(time){
            return dateFormat.toYMDHMS(time)
        },
        scrollDown(){
            //console.log('scrollDown')
            const id = document.getElementById(this.ids.topScroll)
            id.scrollTop = id.scrollHeight
        }
    },
    created: function(){
        const thiz = this

        this.connect()

        this.socket.on('setChat', function (data) {
            console.log('setChat')
            thiz.history = data
        });
    },
    mounted: function(){
        this.ids.topScroll = 'chat' + (this._uid + 0)
    },
    computed:{
    },
    watch:{
        'history': function (newVal, oldVal){
            this.$nextTick(function () {
                this.scrollDown()
            })
        }
    }
}
</script>

<style scoped>
.input{
    text-indent: 5px;
    border:0;
    outline:none;
    background-color: rgba(0,0,0,0.05);
}
.input:focus{
    color: white;
    background-color:rgba(211, 134, 65, 0.67);
}
::placeholder {
    color: rgba(0,0,0,0.5);
}
.input:focus::placeholder {
    color: white;
}

.scroll {
    overflow-y: scroll;
}
.scroll::-webkit-scrollbar{
	width: 5px;
	background-color: rgba(0,0,0,0.1);
}
.scroll::-webkit-scrollbar-thumb {
	background-color: rgba(0,0,0,0.2);
}
</style>