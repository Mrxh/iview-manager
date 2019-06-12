<template>
    <div :class="{'m-search':true,'m-search-fold':!isfold}">
      <a class="m-fold" @click="changefold">
          <Icon type="ios-arrow-back" size="32" v-if="isfold"/>
          <Icon type="ios-arrow-forward" size="32" v-else/>
      </a>
      <div class="m-search-con">
        <div class="m-search-panel">
          <Xzqsearch></Xzqsearch>
        </div>
      </div>
    </div>
</template>

<script>
    import Xzqsearch from './xzqsearch.vue'
    export default {
        name: "search",
        components:{
          Xzqsearch
        },
        data(){
          return {
            isfold:true,
            searchfold:''
          }
        },
        methods:{
           changefold(){
             this.isfold = this.isfold?false:true
           }
        }
    }
</script>

<style lang="scss">
   @import "@/assets/css/map/mapsearch.scss"
</style>
