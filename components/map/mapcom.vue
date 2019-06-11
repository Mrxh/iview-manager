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
          self.map = map
          window.AMap.plugin('AMap.ToolBar',()=>{
            map.addControl(new window.AMap.ToolBar());
          })
        }
        let url = `https://webapi.amap.com/maps?v=1.4.14&key=${self.key}&callback=onmapload`;
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
