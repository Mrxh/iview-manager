<template>
    <div class="tablepage">
      <Table border :columns="columns5" :data="everypage"></Table>
      <div class="page">
        <Page :total="data5.length" :page-size="pageSize" @on-change="getPagedata" show-elevator />
      </div>
    </div>
</template>

<script>
    export default {
        name: "tablepage",
      data () {
        return {
          everypage:[],
          pageSize:5,
          columns5: [
            {
              title: 'Date',
              key: 'date',
              sortable: true
            },
            {
              title: 'Name',
              key: 'name'
            },
            {
              title: 'Age',
              key: 'age',
              sortable: true
            },
            {
              title: 'Address',
              key: 'address'
            }
          ],
          data5: [
            {
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              date: '2016-10-03'
            },
            {
              name: 'Jim Green1231',
              age: 24,
              address: 'London No. 1 Lake Park',
              date: '2016-10-01'
            },
            {
              name: 'Joe Black121',
              age: 30,
              address: 'Sydney No. 1 Lake Park',
              date: '2016-10-02'
            },
            {
              name: 'Jon Snowsdf',
              age: 26,
              address: 'Ottawa No. 2 Lake Park',
              date: '2016-10-04'
            },
            {
              name: 'John Brownsdfgsdfs',
              age: 18,
              address: 'New York No. 1 Lake Park',
              date: '2016-10-03'
            },
            {
              name: 'Jim Green112',
              age: 24,
              address: 'London No. 1 Lake Park',
              date: '2016-10-01'
            },
            {
              name: 'Joe Blackvbnv',
              age: 30,
              address: 'Sydney No. 1 Lake Park',
              date: '2016-10-02'
            },
            {
              name: 'Jon Snowzxcz',
              age: 26,
              address: 'Ottawa No. 2 Lake Park',
              date: '2016-10-04'
            },
            {
              name: 'John Brownhjklh',
              age: 18,
              address: 'New York No. 1 Lake Park',
              date: '2016-10-03'
            },
            {
              name: 'Jim Greenzxcz',
              age: 24,
              address: 'London No. 1 Lake Park',
              date: '2016-10-01'
            },
            {
              name: 'Joe Blackvbnb',
              age: 30,
              address: 'Sydney No. 1 Lake Park',
              date: '2016-10-02'
            },
            {
              name: 'Jon Snowqweq',
              age: 26,
              address: 'Ottawa No. 2 Lake Park',
              date: '2016-10-04'
            }
            ,{
              name: 'John Brownxcvcx',
              age: 18,
              address: 'New York No. 1 Lake Park',
              date: '2016-10-03'
            },
            {
              name: 'Jim Greenbvbc',
              age: 24,
              address: 'London No. 1 Lake Park',
              date: '2016-10-01'
            },
            {
              name: 'Joe Blacknnmbh',
              age: 30,
              address: 'Sydney No. 1 Lake Park',
              date: '2016-10-02'
            },
            {
              name: 'Jon Snowyoio',
              age: 26,
              address: 'Ottawa No. 2 Lake Park',
              date: '2016-10-04'
            }
          ]
        }
      },
      mounted() {
        let self = this
        self.everypage = self.data5.slice(0,self.pageSize)
      },
      methods:{
          //分页数据
          getPagedata(page){
            let self = this
            self.everypage = self.data5.slice((page-1)*self.pageSize,page*self.pageSize)
          }
      }
    }
</script>

<style lang="scss">
  @import "@/assets/css/tablepage/index.scss";
</style>
