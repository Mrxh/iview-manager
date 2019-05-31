<template>
  <div class="layout">
    <Layout class="layout-box">
        <Sider width="253" breakpoint="md" ref="side1" hide-trigger collapsible :collapsed-width="65" v-model="isCollapsed"
               style="overflow:hidden">
          <div class="layout-logo-left" :style="{fontSize:logofont+'px'}">
            MyIview
          </div>
          <Menu :active-name="activeName" theme="dark" width="auto" :class="menuitemClasses" v-if="isMenuopen" accordion="true">
            <template v-for="(item,idx) in menu">
              <MenuItem :name="item.name" v-if="!item.child" :key="idx" >
                <Icon :type="item.icon"></Icon>
                <span>{{item.name}}</span>
              </MenuItem>
              <Submenu :name="item.name" v-else :key="idx">
                <template slot="title">
                  <Icon :type="item.icon" />
                  <span>{{item.name}}</span>
                </template>
                <MenuItem v-for="(citem,cidx) in item.child" :name="citem.name" :key="cidx">
                  <Icon :type="citem.icon"></Icon>
                  <span>{{citem.name}}</span>
                </MenuItem>
              </Submenu>
            </template>
          </Menu>
          <div v-else class="menu-collapsed">
            <template v-for="(item,idx) in menu">
              <Tooltip :content="item.name" placement="right" v-if="!item.child" transfer="true">
                <a class="drop-menu-a" @click="selectMenu(item.name)">
                  <Icon :type="item.icon" />
                </a>
              </Tooltip>
              <Dropdown  placement="right-start"  :name="item.name" v-else :key="idx"  transfer="true">
                <a  class="drop-menu-a">
                  <Icon :type="item.icon" />
                </a>
                <DropdownMenu slot="list">
                  <DropdownItem  v-for="(citem,cidx) in item.child" :name="citem.name" :key="cidx">
                    <a  @click="selectMenu(citem.name)" style="color:#515a6e">
                      <Icon :type="citem.icon" size="16"></Icon>
                      <span>{{citem.name}}</span>
                    </a>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </template>
          </div>
        </Sider>

      <Layout>
        <Header :style="{padding: 0}"  class="layout-header-bar">
          <Row>
            <Col span="2">
              <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
            </Col>
            <Col span="6">
              <Breadcrumb>
                <BreadcrumbItem to="/">Home</BreadcrumbItem>
                <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
                <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
              </Breadcrumb>
            </Col>
            <Col span="6" offset="10">col-6</Col>
          </Row>

        </Header>
        <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
          Content
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isCollapsed: false,
        isMenuopen:true,
        logofont:20,
        activeName:'文档',
        menu:[
          {
            name:'文档',
            icon:'ios-book'
          },
          {
            name:'地图',
            icon:'ios-map'
          },
          {
            name:'组件',
            icon:'logo-buffer',
            child:[
              {
                name:'组件',
                icon:'md-arrow-dropdown-circle'
              },
              {
                name:'数字渐变',
                icon:'md-trending-up'
              },
              {
                name:'拖拽列表',
                icon:'ios-infinite'
              },
              {
                name:'可拖动抽屉',
                icon:'md-list'
              },
              {
                name:'组织结构树',
                icon:'ios-people'
              },
              {
                name:'树状表格',
                icon:'md-git-branch'
              },
              {
                name:'图片裁剪',
                icon:'md-crop'
              },
              {
                name:'多功能表格',
                icon:'md-grid'
              },
              {
                name:'分割窗口',
                icon:'ios-pause'
              },
              {
                name:'Markdown编辑器',
                icon:'logo-markdown'
              },
              {
                name:'富文本编辑器',
                icon:'ios-create'
              },
              {
                name:'自定义图标',
                icon:'ios-bonfire'
              }
            ]
          },
          {
            name:'上传数据',
            icon:'md-cloud-upload',
            child:[
              {
                name:'上传CSV文件',
                icon:'md-document'
              },
              {
                name:'粘贴表格数据',
                icon:'md-clipboard'
              }
            ]
          },
          {
            name:'Excel',
            icon:'ios-stats',
            child:[
              {
                name:'上传excel',
                icon:'md-add'
              },
              {
                name:'导出excel',
                icon:'md-download'
              }
            ]
          },
          {
            name:'工具函数',
            icon:'ios-hammer'
          },
          {
            name:'i18n - 多语言',
            icon:'md-planet'
          },
          {
            name:'错误收集',
            icon:'ios-bug'
          },
          {
            name:'指令',
            icon:'ios-navigate'
          },
          {
            name:'多级菜单',
            icon:'md-menu',
            child:[
              {
                name:'Level-2-1',
                icon:'md-funnel'
              },
              {
                name:'Level-2-2',
                icon:'md-funnel',
                child:[
                  {
                    name:'Level-2-2-1',
                    icon:'md-funnel'
                  },
                  {
                    name:'Level-2-2-2',
                    icon:'md-funnel'
                  }
                ]
              },
              {
                name:'Level-2-3',
                icon:'md-funnel'
              }
            ]
          }
        ]
      }
    },
    computed: {
      rotateIcon () {
        return [
          'menu-icon',
          this.isCollapsed ? 'rotate-icon' : ''
        ];
      },
      menuitemClasses () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : 'default-menu'
        ]
      }
    },
    methods: {
      collapsedSider () {
        this.$refs.side1.toggleCollapse();
        this.isMenuopen = this.isMenuopen?false:true
        this.logofont = this.isMenuopen?20:14
      },
      selectMenu(name){
        console.log(name)
        this.activeName = name;
      }
    }
  }
</script>

<style lang="scss">
@import "@/assets/css/public/index.scss";
</style>
