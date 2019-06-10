<template>
   <div class="i-statistics">
       <dl>
         <dt :style="{background:statis.bjcolor}">
           <Icon :type="statis.icon" size="36"/>
         </dt>
         <dd>
           <div>{{statis.data}}</div>
           <p>{{statis.name}}</p>
         </dd>
       </dl>
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
        }
    }
</script>

<style lang="scss">
  @import "@/assets/css/index/statistics.scss";
</style>
