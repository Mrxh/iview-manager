<template>
   <div class="i-statistics">
       <div class="i-statistics-con">
         <dl>
           <dt :style="{background:statis.bjcolor}">
             <Icon :type="statis.icon" size="36"/>
           </dt>
           <dd>
             <div>{{numberData}}</div>
             <p>{{statis.name}}</p>
           </dd>
         </dl>
       </div>
   </div>
</template>

<script>
    export default {
        name: "statistics",
        props:{
          statis:{
            type:Object,
            default(){
              return {}
            }
          }
        },
        data(){
          return {
            numberData:parseInt(this.statis.data*0.85)
          }
        },
        mounted() {
          let self = this,timers = null
          timers = setInterval(()=>{
            if(self.numberData<self.statis.data){
              self.numberData+=1
            }else{
              clearInterval(timers)
            }
          },1)
        }
    }
</script>

<style lang="scss">
  @import "@/assets/css/index/statistics.scss";
</style>
