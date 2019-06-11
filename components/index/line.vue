<template>
  <div class="i-line">
    <div class="i-line-con">
      <div id="lineChart"></div>
    </div>
  </div>
</template>

<script>
    import echarts from 'echarts'
    export default {
        name: "line",
        props:{
          optionsline:Object,
          default(){
            return {}
          }
        },
        mounted(){
          console.log(this.optionsline)
          this.drawLine();
        },
        methods: {
          drawLine(){
            let self =  this
            // 基于准备好的dom，初始化echarts实例
            let myChart = echarts.init(document.getElementById('lineChart'))
            // 绘制图表
            myChart.setOption(self.optionsline)

            //图表自适应
            window.onresize = myChart.resize
          }
        }
    }
</script>

<style lang="scss">
  @import "@/assets/css/index/line.scss";
</style>
