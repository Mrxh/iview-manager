<template>
  <div class="i-markdown">
    <mavon-editor v-model="content"/>
  </div>
</template>

<script>
  import mavonEditor from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
    export default {
        name: "markdown",
        data(){
          return {
            content: ''
          }
        },
        components:{
          mavonEditor
        }
    }
</script>

<style lang="scss">
  @import "@/assets/css/markdown/index.scss";
</style>
