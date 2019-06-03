<template>
  <div class="container">
    <div class="layout">
      <Layout class="layout-box">
        <Sider width="253" breakpoint="md" ref="side1" hide-trigger collapsible :collapsed-width="65" v-model="isCollapsed"
               style="overflow:hidden">
          <div class="layout-logo-left" :style="{fontSize:logofont+'px'}">
            MyIview
          </div>
          <Menu :active-name="ActiveMenu" theme="dark" width="auto"
                :class="menuitemClasses" v-if="isMenuopen" accordion="true">
            <template v-for="(item,idx) in menu" v-if="item.url!='/'">
              <MenuItem :name="item.name" v-if="!item.child" :key="idx" :to="item.url" @click="selectMenu(item.name)">
                <Icon :type="item.icon"></Icon>
                <span>{{item.name}}</span>
              </MenuItem>
              <Submenu :name="item.name" v-else :key="idx">
                <template slot="title">
                  <Icon :type="item.icon" />
                  <span>{{item.name}}</span>
                </template>
                <MenuItem v-for="(citem,cidx) in item.child" :name="citem.name" :key="cidx" :to="citem.url" @click="selectMenu(item.name)">
                  <Icon :type="citem.icon"></Icon>
                  <span>{{citem.name}}</span>
                </MenuItem>
              </Submenu>
            </template>
          </Menu>
          <div v-else class="menu-collapsed">
            <template v-for="(item,idx) in menu" v-if="item.url!='/'">
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
          <Header style="padding: 0 40px 0 0"  class="layout-header-bar">
                <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin:'20px'}" type="md-menu" size="24"></Icon>
                <Breadcrumb>
                  <BreadcrumbItem to="/">
                    <Icon type="md-home" />
                    主页
                  </BreadcrumbItem>
                  <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
                  <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
                </Breadcrumb>

                  <div class="user-content">
                    <Tooltip :content="isFullscreen.title" placement="bottom">
                        <a @click="toggleFullScreen($event)">
                          <Icon :type="isFullscreen.icon" size="24"/>
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
          <Content class="main-content">
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
        isFullscreen:{
          isFullScreenflag:true,
          title:'全屏',
          icon:'md-expand'
        },
        ActiveMenu:'主页',
        menu:[
          {
            name:'主页',
            icon:'md-home',
            url:'/',
            isActive:true,
          },
          {
            name:'文档',
            icon:'ios-book',
            url:'/file',
            isActive:false,
          },
          {
            name:'地图',
            icon:'ios-map',
            url:'/map',
            isActive:false,
          },
          {
            name:'组件',
            icon:'logo-buffer',
            url:'/file',
            isActive:false,
            child:[
              {
                name:'组件',
                icon:'md-arrow-dropdown-circle',
                url:'/file',
                isActive:false
              },
              {
                name:'数字渐变',
                icon:'md-trending-up',
                url:'/number',
                isActive:false
              },
              {
                name:'拖拽列表',
                icon:'ios-infinite',
                url:'/file',
                isActive:false
              },
              {
                name:'可拖动抽屉',
                icon:'md-list',
                url:'/file',
                isActive:false
              },
              {
                name:'组织结构树',
                icon:'ios-people',
                url:'/file',
                isActive:false
              },
              {
                name:'树状表格',
                icon:'md-git-branch',
                url:'/file',
                isActive:false
              },
              {
                name:'图片裁剪',
                icon:'md-crop',
                url:'/file',
                isActive:false
              },
              {
                name:'多功能表格',
                icon:'md-grid',
                url:'/file',
                isActive:false
              },
              {
                name:'分割窗口',
                icon:'ios-pause',
                url:'/file',
                isActive:false
              },
              {
                name:'Markdown编辑器',
                icon:'logo-markdown',
                url:'/file',
                isActive:false
              },
              {
                name:'富文本编辑器',
                icon:'ios-create',
                url:'/file',
                isActive:false
              },
              {
                name:'自定义图标',
                icon:'ios-bonfire',
                url:'/file',
                isActive:false
              }
            ]
          },
          {
            name:'上传数据',
            icon:'md-cloud-upload',
            url:'/file',
            isActive:false,
            child:[
              {
                name:'上传CSV文件',
                icon:'md-document',
                url:'/file',
                isActive:false
              },
              {
                name:'粘贴表格数据',
                icon:'md-clipboard',
                url:'/file',
                isActive:false
              }
            ]
          },
          {
            name:'Excel',
            icon:'ios-stats',
            url:'/file',
            isActive:false,
            child:[
              {
                name:'上传excel',
                icon:'md-add',
                url:'/file',
                isActive:false
              },
              {
                name:'导出excel',
                icon:'md-download',
                url:'/file',
                isActive:false
              }
            ]
          },
          {
            name:'工具函数',
            icon:'ios-hammer',
            url:'/file',
            isActive:false
          },
          {
            name:'i18n - 多语言',
            icon:'md-planet',
            url:'/file',
            isActive:false
          },
          {
            name:'错误收集',
            icon:'ios-bug',
            url:'/file',
            isActive:false
          },
          {
            name:'指令',
            icon:'ios-navigate',
            url:'/file',
            isActive:false
          },
          {
            name:'多级菜单',
            icon:'md-menu',
            url:'/file',
            isActive:false,
            child:[
              {
                name:'Level-2-1',
                icon:'md-funnel',
                url:'/file',
                isActive:false
              },
              {
                name:'Level-2-2',
                icon:'md-funnel',
                url:'/file',
                isActive:false,
                child:[
                  {
                    name:'Level-2-2-1',
                    icon:'md-funnel',
                    url:'/file',
                    isActive:false
                  },
                  {
                    name:'Level-2-2-2',
                    icon:'md-funnel',
                    url:'/file',
                    isActive:false
                  }
                ]
              },
              {
                name:'Level-2-3',
                icon:'md-funnel',
                url:'/file',
                isActive:false
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
      collapsedSider () {//收起和打开左侧菜单
        this.$refs.side1.toggleCollapse();
        this.isMenuopen = this.isMenuopen?false:true
        this.logofont = this.isMenuopen?20:14
      },
      getMenuobj(name){
        let self = this
        for(let i = 0;i<self.menu.length;i++){
          if(self.menu[i].child && self.menu[i].child.length>0){
            let children =  self.menu[i].child
            for(let j = 0;j<children.length;j++){
                children[j].isActive = children[j].name===name?true:false
            }
          }else{
              self.menu[i].isActive = self.menu[i].name === name ? true : false
          }
        }
      },
      selectMenu(name){//菜单选择状态
        let self = this
        self.ActiveMenu = name
        console.log(self.ActiveMenu)
        self.getMenuobj(name)
      },
      FullScreen(el){//全屏代码
        if(this.isFullscreen.isFullScreenflag){//退出全屏
          if(document.exitFullscreen){
            document.exitFullscreen()
          }else if( document.mozCancelFullScreen){
            document.mozCancelFullScreen()
          }else if(document.webkitExitFullscreen){
            //改变平面图在google浏览器上面的样式问题
            document.webkitExitFullscreen()
          }else if(!document.msRequestFullscreen){
            document.msExitFullscreen()
          }
          this.isFullscreen.title = '全屏'
          this.isFullscreen.icon = 'md-expand'
        }else{    //进入全屏
          if(el.requestFullscreen){
            el.requestFullscreen()
          }else if(el.mozRequestFullScreen){
            el.mozRequestFullScreen()
          }else if(el.webkitRequestFullscreen){
            //改变平面图在google浏览器上面的样式问题
            el.webkitRequestFullscreen();
          }else if(el.msRequestFullscreen){
            el.msRequestFullscreen()
          }
          this.isFullscreen.title = '退出全屏'
          this.isFullscreen.icon = 'md-contract'
        }
      },
      toggleFullScreen(e){
        this.isFullscreen.isFullScreenflag=!this.isFullscreen.isFullScreenflag;
        var el=e.srcElement||e.target;//target兼容Firefox
        this.FullScreen(el);
      }
    }
  }
</script>

<style lang="scss">
  @import "@/assets/css/public/index.scss";
</style>
