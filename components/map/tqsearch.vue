<template>
    <div class="s-xzqsearch">
      <p class="title">实时天气情况</p>
      <div class="s-content">
        <p><Icon type="md-locate" size="14"/>城市/区：{{tqdata.city}}</p>
        <p><Icon type="ios-cloudy-night" size="14"/>天气：{{tqdata.weather}}</p>
        <p><Icon type="ios-thermometer-outline" size="14"/>温度：{{tqdata.temperature}} ℃</p>
        <p><Icon type="ios-compass" size="14"/>风向：{{tqdata.windDirection}}</p>
        <p><Icon type="ios-plane" size="14"/>风力：{{tqdata.windPower}}级</p>
        <p><Icon type="ios-water" size="14"/>空气湿度：{{tqdata.humidity}}</p>
        <p><Icon type="ios-time" size="14"/>发布时间：{{tqdata.reportTime?tqdata.reportTime.slice(0,10):tqdata.reportTime}}</p>
      </div>
      <p class="title">天气预报</p>
      <div class="s-content">
        <p v-for="(item,idx) in  tqybdata" :key="idx">
          <span>{{item.date}}</span>
          <span class="s-weather">{{item.dayWeather}}</span>
          <span>{{item.nightTemp}} ℃-{{item.dayTemp}} ℃</span>
        </p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "xzqsearch",
        data(){
          return {
          }
        },
        props:{
          tqdata:{
            type:Object,
            default(){
              return {}
            }
          },
          tqybdata:{
            type:Object,
            default(){
              return {}
            }
          }
        }
    }
</script>

<style lang="scss">
  @import "@/assets/css/map/xzqsearch.scss"
</style>
