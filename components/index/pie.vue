<template>
    <div class="i-pie">
      <div class="i-pie-con" id="pieChartp">
        <div id="pieChart"></div>
      </div>
    </div>
</template>

<script>
    import echarts from 'echarts'
    export default {
      name: "pie",
      props:{
        options:Object,
        default(){
          return {}
        }
      },
      mounted(){
        this.drawPie();
      },
      methods: {
        drawPie(){
          let self =  this
          // 基于准备好的dom，初始化echarts实例
          let myChart = echarts.init(document.getElementById('pieChart'))
          // 绘制图表
          myChart.setOption(self.options)

          //图表自适应
          window.onresize = myChart.resize
        }
      }
    }
</script>

<style lang="scss">
  @import "@/assets/css/index/pie.scss";
</style>
