<template>
  <div class="i-home">
    <Row style="margin-left: -0.625rem;margin-right: -0.625rem">
      <Col :xs="24" :sm="24" :md="12" :lg="4" v-for="(item,idx) in statisobj" :key="idx">
        <Statistics :statis="item"></Statistics>
      </Col>
    </Row>
    <Row style="margin-left: -0.625rem;margin-right: -0.625rem">
      <Col :xs="24" :sm="24" :md="24" :lg="8">
        <Pie :options="piedata"></Pie>
      </Col>
      <Col :xs="24" :sm="24" :md="24" :lg="16">
        <Bar :optionsbar="bardata"></Bar>
      </Col>
    </Row>
    <Row style="margin-left: -0.625rem;margin-right: -0.625rem">
      <Col :xs="24" :sm="24" :md="24" :lg="24">
        <Linechart :optionsline="linedata"></Linechart>
      </Col>
    </Row>
  </div>
</template>

<script>
  import Statistics from '@/components/index/statistics.vue'
  import Pie from '@/components/index/pie.vue'
  import Bar from '@/components/index/bar.vue'
  import Linechart from '@/components/index/line.vue'
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
        ],
        piedata:{
          title : {
            text: '用户访问来源',
            x:'center'
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
            color:['#2D8CF0','#19BE6B','#FF9900','#E46CBB','#9A66E4',],
            width:'200px'
          },
          series : [
            {
              name: '访问来源',
              type: 'pie',
              radius : '55%',
              center: ['42%', '60%'],
              data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
              ],
              color:['#2D8CF0','#19BE6B','#FF9900','#E46CBB','#9A66E4',],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        },
        bardata:{
          title : {
            text: '每周用户活跃量',
            x:'center'
          },
          color: ['#3398DB'],
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '20%',
            bottom: '3%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
              name:'直接访问',
              type:'bar',
              data:[10, 52, 200, 334, 390, 330, 220]
            }
          ]
        },
        linedata:{
          tooltip : {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          legend: {
            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
          },
          grid: {
            left: '3%',
            right: '22%',
            bottom: '3%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              boundaryGap : false,
              data : ['周一','周二','周三','周四','周五','周六','周日']
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
              name:'邮件营销',
              type:'line',
              stack: '总量',
              areaStyle: {},
              data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
              name:'联盟广告',
              type:'line',
              stack: '总量',
              areaStyle: {},
              data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
              name:'视频广告',
              type:'line',
              stack: '总量',
              areaStyle: {},
              data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
              name:'直接访问',
              type:'line',
              stack: '总量',
              areaStyle: {normal: {}},
              data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
              name:'搜索引擎',
              type:'line',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              },
              areaStyle: {normal: {}},
              data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        }
      }
    },
    components:{
      Statistics,
      Pie,
      Bar,
      Linechart
    }
  }
</script>

<style lang="scss">
</style>
