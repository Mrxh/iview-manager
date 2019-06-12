<template>
    <div class="s-xzqsearch">
      <p class="title">行政区边界查询</p>
      <dl>
        <dt>行政级别：</dt>
        <dd>
          <Select v-model="xzqselect" style="width:200px">
             <Option v-for="item in xzqs" :value="item.value" :key="item.value">{{ item.name }}</Option>
          </Select>
        </dd>
      </dl>
      <dl>
        <dt>名称：</dt>
        <dd>
          <Input v-model="dqname" placeholder="请输入名称" style="width: 200px" />
        </dd>
      </dl>
      <Button type="primary" long class="search-btn" @click="searchxzq">查询</Button>
    </div>
</template>

<script>
    export default {
        name: "xzqsearch",
        data(){
          return {
            xzqs:[
              {
                value:'distrct',
                name:'区县 '
              },
              {
                value:'city',
                name:'市 '
              },
              {
                value:'province',
                name:'省'
              }
            ],
            xzqselect:'',
            dqname:''
          }
        },
        methods:{
          searchxzq(){
            let district = null;
            let polygons=[];
            let self = this
            let map = self.$store.state.mapobj
              //加载行政区划插件
            if(!district){
                //实例化DistrictSearch
                var opts = {
                  subdistrict: 0,   //获取边界不需要返回下级行政区
                  extensions: 'all',  //返回行政区边界坐标组等具体信息
                  level: 'district'  //查询行政级别为 市
                };
                district = new AMap.DistrictSearch(opts);
              }
              //行政区查询
              district.setLevel(self.xzqselect)
              district.search(self.dqname, function(status, result) {
                console.log(status,result)
                map.remove(polygons)//清除上次结果
                polygons = [];
                var bounds = result.districtList[0].boundaries;
                if (bounds) {
                  for (var i = 0, l = bounds.length; i < l; i++) {
                    //生成行政区划polygon
                    var polygon = new AMap.Polygon({
                      strokeWeight: 1,
                      path: bounds[i],
                      fillOpacity: 0.4,
                      fillColor: '#80d8ff',
                      strokeColor: '#0091ea'
                    });
                    polygons.push(polygon);
                  }
                }
                map.add(polygons)
                map.setFitView(polygons);//视口自适应
              });
          }
        }
    }
</script>

<style lang="scss">
  @import "@/assets/css/map/xzqsearch.scss"
</style>
