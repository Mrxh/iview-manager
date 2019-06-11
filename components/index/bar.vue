<template>
    <div class="i-bar">
      <div class="i-bar-con">
        <div id="barChart"></div>
      </div>
    </div>
</template>

<script>
    import echarts from 'echarts'
    export default {
        name: "bar",
      props:{
        optionsbar:Object,
        default(){
          return {}
        }
      },
      mounted(){
        this.drawBar();
      },
      methods: {
        drawBar(){
          let self =  this
          // 基于准备好的dom，初始化echarts实例
          let myChart = echarts.init(document.getElementById('barChart'))
          // 绘制图表
          myChart.setOption(self.optionsbar);

          //图表自适应
          window.onresize = myChart.resize
        }
      }
    }
</script>

<style lang="scss">
  @import "@/assets/css/index/bar.scss";
</style>

