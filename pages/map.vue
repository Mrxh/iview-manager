<template>
    <div class="i-map">
      <Mapcom></Mapcom>
      <Search></Search>
    </div>
</template>

<script>
    import Mapcom from '@/components/map/mapcom.vue'
    import Search from '@/components/map/search.vue'
    export default {
        name: "map",
        components:{
          Mapcom,
          Search
        }
    }
</script>

<style lang="scss">
  @import "@/assets/css/map/index.scss";
</style>
