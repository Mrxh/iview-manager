<template>
    <div class="i-map">
      <Mapcom></Mapcom>
    </div>
</template>

<script>
    import Mapcom from '@/components/map/mapcom.vue'
    export default {
        name: "map",
        components:{
          Mapcom
        }
    }
</script>

<style lang="scss">
  @import "@/assets/css/map/index.scss";
</style>
