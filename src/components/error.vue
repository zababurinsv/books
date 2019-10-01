<template>
    <div class="pr w100p disf fdr fjcc faic f0 fcgy1" :style="containerStyle" >
        {{msg}}
    </div>
</template>
<script>
export default {
    data () {
      return {
        containerStyle:{
            fontSize: this.$store.state.sys.window.w/2+'px',
            height: this.$store.state.sys.window.h+'px'
        },
        msg: '404'
      }
    }
}
</script>