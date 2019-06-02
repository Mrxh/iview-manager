<template>
  <div class="container">
    <div class="layout">
      <Layout class="layout-box">
        <Sider width="253" breakpoint="md" ref="side1" hide-trigger collapsible :collapsed-width="65" v-model="isCollapsed"
               style="overflow:hidden">
          <div class="layout-logo-left" :style="{fontSize:logofont+'px'}">
            MyIview
          </div>
          <Menu :active-name="activeName" theme="dark" width="auto"
                :class="menuitemClasses" v-if="isMenuopen" accordion="true">
            <template v-for="(item,idx) in menu">
              <MenuItem :name="item.name" v-if="!item.child" :key="idx" :to="item.url">
                <Icon :type="item.icon"></Icon>
                <span>{{item.name}}</span>
              </MenuItem>
              <Submenu :name="item.name" v-else :key="idx">
                <template slot="title">
                  <Icon :type="item.icon" />
                  <span>{{item.name}}</span>
                </template>
                <MenuItem v-for="(citem,cidx) in item.child" :name="citem.name" :key="cidx" :to="citem.url">
                  <Icon :type="citem.icon"></Icon>
                  <span>{{citem.name}}</span>
                </MenuItem>
              </Submenu>
            </template>
          </Menu>
          <div v-else class="menu-collapsed">
            <template v-for="(item,idx) in menu">
              <Tooltip :content="item.name" placement="right" v-if="!item.child" transfer="true">
                  <nuxt-link class="drop-menu-a" :to="item.url">
                    <a @click="selectMenu(item.name)" style="color:#fff">
                      <Icon :type="item.icon" />
                    </a>
                  </nuxt-link>
              </Tooltip>
              <Dropdown  placement="right-start"  :name="item.name" v-else :key="idx"  transfer="true">
                <a  class="drop-menu-a">
                  <Icon :type="item.icon" />
                </a>
                <DropdownMenu slot="list">
                  <DropdownItem  v-for="(citem,cidx) in item.child" :name="citem.name" :key="cidx">
                    <nuxt-link :to="citem.url">
                      <a @click="selectMenu(citem.name)" style="color:#515a6e">
                        <Icon :type="citem.icon" size="16"></Icon>
                        <span>{{citem.name}}</span>
                      </a>
                    </nuxt-link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </template>
          </div>
        </Sider>

        <Layout>
          <Header :style="{padding: 0}"  class="layout-header-bar">
            <Row>
              <Col span="1">
                <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px '}" type="md-menu" size="24"></Icon>
              </Col>
              <Col span="6">
                <Breadcrumb>
                  <BreadcrumbItem to="/">
                    <Icon type="md-home" />
                    主页
                  </BreadcrumbItem>
                  <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
                  <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
                </Breadcrumb>
              </Col>
              <Col span="3" offset="14">
                  <div class="user-content">
                    <Tooltip content="全屏" placement="bottom">
                        <a @click="selectMenu()">
                          <Icon type="md-expand" size="24"/>
                        </a>
                    </Tooltip>
                    <Dropdown>
                      <a href="javascript:void(0)">
                        <Icon type="md-color-fill" size="24"/>
                      </a>
                      <DropdownMenu slot="list">
                        <DropdownItem>light</DropdownItem>
                        <DropdownItem>dark</DropdownItem>
                        <DropdownItem>primary</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    <Dropdown>
                      <a href="javascript:void(0)">
                        语言
                        <Icon type="md-arrow-dropdown" />
                      </a>
                      <DropdownMenu slot="list">
                        <DropdownItem>中文简体</DropdownItem>
                        <DropdownItem>中文繁体</DropdownItem>
                        <DropdownItem>English</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    <Dropdown>
                      <a href="javascript:void(0)">
                        <span class="user-photo">
                          <img src="@/assets/img/user.png">
                        </span>
                        <Icon type="md-arrow-dropdown" />
                      </a>
                      <DropdownMenu slot="list">
                        <DropdownItem>消息中心</DropdownItem>
                        <DropdownItem>退出登录</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
              </Col>
            </Row>

          </Header>
          <div class="iview-label">
            <div class="btn-con btn-left">
              <Button>
              <span>
                <Icon type="ios-arrow-back" size="18"/>
              </span>
              </Button>
            </div>
            <div class="btn-con btn-right">
              <Button>
              <span>
                <Icon type="ios-arrow-forward" size="18"/>
              </span>
              </Button>
            </div>
            <div class="close-con">
              <Dropdown>
                <Button type="text">
                  <span>
                    <Icon type="ios-close-circle-outline" size="18"/>
                  </span>
                </Button>
                <DropdownMenu slot="list">
                  <DropdownItem>关闭所有</DropdownItem>
                  <DropdownItem>关闭其他</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div class="scroll-outer">
                <div class="scroll-body">
                  <Tag type="dot" color="primary">主页</Tag>
                  <Tag type="dot" closable color="primary">标签一</Tag>
                </div>
            </div>
          </div>
          <Content :style="{background: '#fafafa', minHeight: '260px'}">
            <nuxt/>
          </Content>
        </Layout>
      </Layout>
    </div>
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
            icon:'ios-book',
            url:'/file'
          },
          {
            name:'地图',
            icon:'ios-map',
            url:'/map'
          },
          {
            name:'组件',
            icon:'logo-buffer',
            url:'/file',
            child:[
              {
                name:'组件',
                icon:'md-arrow-dropdown-circle',
                url:'/file'
              },
              {
                name:'数字渐变',
                icon:'md-trending-up',
                url:'/number'
              },
              {
                name:'拖拽列表',
                icon:'ios-infinite',
                url:'/file'
              },
              {
                name:'可拖动抽屉',
                icon:'md-list',
                url:'/file'
              },
              {
                name:'组织结构树',
                icon:'ios-people',
                url:'/file'
              },
              {
                name:'树状表格',
                icon:'md-git-branch',
                url:'/file'
              },
              {
                name:'图片裁剪',
                icon:'md-crop',
                url:'/file'
              },
              {
                name:'多功能表格',
                icon:'md-grid',
                url:'/file'
              },
              {
                name:'分割窗口',
                icon:'ios-pause',
                url:'/file'
              },
              {
                name:'Markdown编辑器',
                icon:'logo-markdown',
                url:'/file'
              },
              {
                name:'富文本编辑器',
                icon:'ios-create',
                url:'/file'
              },
              {
                name:'自定义图标',
                icon:'ios-bonfire',
                url:'/file'
              }
            ]
          },
          {
            name:'上传数据',
            icon:'md-cloud-upload',
            url:'/file',
            child:[
              {
                name:'上传CSV文件',
                icon:'md-document',
                url:'/file'
              },
              {
                name:'粘贴表格数据',
                icon:'md-clipboard',
                url:'/file'
              }
            ]
          },
          {
            name:'Excel',
            icon:'ios-stats',
            url:'/file',
            child:[
              {
                name:'上传excel',
                icon:'md-add',
                url:'/file'
              },
              {
                name:'导出excel',
                icon:'md-download',
                url:'/file'
              }
            ]
          },
          {
            name:'工具函数',
            icon:'ios-hammer',
            url:'/file'
          },
          {
            name:'i18n - 多语言',
            icon:'md-planet',
            url:'/file'
          },
          {
            name:'错误收集',
            icon:'ios-bug',
            url:'/file'
          },
          {
            name:'指令',
            icon:'ios-navigate',
            url:'/file'
          },
          {
            name:'多级菜单',
            icon:'md-menu',
            url:'/file',
            child:[
              {
                name:'Level-2-1',
                icon:'md-funnel',
                url:'/file'
              },
              {
                name:'Level-2-2',
                icon:'md-funnel',
                url:'/file',
                child:[
                  {
                    name:'Level-2-2-1',
                    icon:'md-funnel',
                    url:'/file'
                  },
                  {
                    name:'Level-2-2-2',
                    icon:'md-funnel',
                    url:'/file'
                  }
                ]
              },
              {
                name:'Level-2-3',
                icon:'md-funnel',
                url:'/file'
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
        this.activeName = name
      }
    }
  }
</script>

<style lang="scss">
  @import "@/assets/css/public/index.scss";
</style>
