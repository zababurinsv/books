<template>
    <div class="pr w100p disf fdr" :style="container">
        <a href="/" class="pr h100p disf fdc fjcc ml10" style="width:200px;">
            <div class="pr" style="width:200px; height:30px; background:url('/public/images/svg/cap-banner1.svg') no-repeat;"></div>
            <div class="pr" style="width:200px; height:25px; background:url('/public/images/svg/cap-banner2.svg') no-repeat;"></div>
            <div class="pr" style="width:200px; height:20px; background:url('/public/images/svg/cap-banner3.svg') no-repeat;"></div>
        </a>
        <div class="h100p pr disf fdr fjcsb" style="min-width: 250px; width:30%; max-width:350px;">
            <div class="pr z0" style="height:100px; width:250px; background:url('/public/images/index/kniga1.png');"></div>
            <div class="pa z1" style="height:100px; width:100px; background:url('/public/images/index/kniga2.png'); margin-left:70%;"></div>
        </div>
        <div class="pr h100p disf fdc fjcc">
            <a href="#" class="pr f1 fs16 fcgy1 oph067">
                Помощь, заказ, оплата.
            </a>
            <div class="pr f1 fs12 fcgy2 usn">
                по будням с 9 - 20
            </div>
            <div class="pr disf fdr faic f1 fcgy1 mt10">
                <div class="pr" style="background:url('/public/images/svg/cap-phone.svg') no-repeat;">
                </div>
                <div class="pr disf fdc fjcc f1 fcgy1 ml10 usn">
                    <div>+7 800 500 11 22</div>
                </div>
            </div>
        </div>
        <div class="pr disf fdr mr10" style="margin-left: auto;">
            <div class="pr h100p disf fdc fjcc">
                <div style="width:40px; height:40px; background:url('/public/images/svg/cap-tie.svg') no-repeat;">
                </div>
            </div>
            <div class="pr h100p disf fdc fjcc f1 fs14 fcgy2 ml10">
                <div class="pr w100p disf fdr faic padb5">
                    <a href="#" class="oph067">Вход</a>
                    <div class="mr5 ml5">/</div>
                    <a href="#0" class="oph067">Регистрация</a>
                </div>
                <div class="pr w70p" style="border-bottom: 1px solid rgba(192,192,192,1);"></div>
                <a class="pr disf faic oph067 padt5 fs10 mr10">
                    <div class="curspoi">
                        товаров в корзине:
                    </div>
                    <div class="ml5 curspoi">
                        нет
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['obj'],
    data: function () {
		return {
            container:{
                height: this.obj.h + 'px'
            }
		}
    },
    methods:{
    },
    computed:{
    }
}
</script>

<style scoped>
.oph067:hover{
    opacity: 0.67;
}
</style>