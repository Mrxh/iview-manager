<template>
  <div class="i-home">
    <Row>
      <Col :xs="24" :sm="24" :md="12" :lg="4" v-for="(item,idx) in statisobj">
        <Statistics :statis="item" :key="idx"></Statistics>
      </Col>
    </Row>
    <Row>
      <Col :xs="24" :sm="24" :md="24" :lg="8">Col</Col>
      <Col :xs="24" :sm="24" :md="24" :lg="16">Col</Col>
    </Row>
    <Row>
      <Col :xs="24" :sm="24" :md="24" :lg="24">Col</Col>
      <Col :xs="24" :sm="24" :md="24" :lg="24">Col</Col>
    </Row>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import Statistics from '@/components/index/statistics.vue'
  export default {
    data(){
      return {
        statisobj:[
          {
            name:'新增用户',
            data:800,
            icon:'md-person-add',
            bjcolor:'#2D8CF0'
          },
          {
            name:'累计点击',
            data:212,
            icon:'md-locate',
            bjcolor:'#19BE6B'
          },
          {
            name:'新增问答',
            data:336,
            icon:'md-help-circle',
            bjcolor:'#FF9900'
          },
          {
            name:'分享统计',
            data:663,
            icon:'md-share',
            bjcolor:'#ED3F14'
          },
          {
            name:'新增互动',
            data:123,
            icon:'md-chatbubbles',
            bjcolor:'#E46CBB'
          },
          {
            name:'新增页面',
            data:15,
            icon:'md-map',
            bjcolor:'#9A66E4'
          }
        ]
      }
    },
    components:{
      Statistics
    },
    mounted(){
      this.drawLine();
    },
    methods: {
      drawLine(){
        // // 基于准备好的dom，初始化echarts实例
        // let myChart = echarts.init(document.getElementById('myChart'))
        // // 绘制图表
        // myChart.setOption({
        //   title: { text: '在Vue中使用echarts' },
        //   color: ['#2D8CF0'],
        //   tooltip : {
        //     trigger: 'axis',
        //     axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        //       type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        //     }
        //   },
        //   grid: {
        //     left: '3%',
        //     right: '4%',
        //     bottom: '3%',
        //     containLabel: true
        //   },
        //   xAxis : [
        //     {
        //       type : 'category',
        //       data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        //       axisTick: {
        //         alignWithLabel: true
        //       }
        //     }
        //   ],
        //   yAxis : [
        //     {
        //       type : 'value'
        //     }
        //   ],
        //   series : [
        //     {
        //       name:'直接访问',
        //       type:'bar',
        //       barWidth: '60%',
        //       data:[10, 52, 200, 334, 390, 330, 220]
        //     }
        //   ]
        // });
      }
    }
  }
</script>

<style lang="scss">
</style>
