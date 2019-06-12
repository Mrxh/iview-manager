<template>
  <div class="mapbox">
    <div :id="id"></div>
  </div>
</template>

<script>
    export default {
        name: "mapcom",
      data(){
        return {
          id:'map',
          key:'890f6a5552f9c0ebfe7f33bda5f8ed7b',
          point:[104.06,30.67]
        }
      },
      mounted(){
        let self = this
        window.onmapload = ()=>{
          let map = new AMap.Map(self.id,{
            resizeEnable:true,
            zoom: 10,
            center: self.point
          });
          self.$store.state.mapobj = map
          AMap.plugin('AMap.ToolBar',()=>{
            map.addControl(new AMap.ToolBar());
          })
        }
        let url = `https://webapi.amap.com/maps?v=1.4.15&key=${self.key}&callback=onmapload&plugin=AMap.DistrictSearch`;
        let jsapi = document.createElement('script');
        jsapi.charset = 'utf-8';
        jsapi.src = url;
        document.head.appendChild(jsapi);
      }
    }
</script>

<style lang="scss">
  @import "@/assets/css/map/map.scss";
</style>
