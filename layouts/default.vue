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
                :class="menuitemClasses" v-if="isMenuopen" :accordion="true"
                @on-select="menuhoverc" :open-names="ActiveSubmenu">
            <template v-for="(item,idx) in menu" v-if="idx!=0">
              <MenuItem :name="item.name" v-if="!item.child"
                        :key="idx">
                <Icon :type="item.icon"></Icon>
                <span>{{item.name}}</span>
              </MenuItem>
              <Submenu :name="item.name" v-else :key="idx">
                <template slot="title">
                  <Icon :type="item.icon" />
                  <span>{{item.name}}</span>
                </template>
                <MenuItem v-for="(citem,cidx) in item.child"
                          :name="citem.name"
                          :key="cidx">
                  <Icon :type="citem.icon"></Icon>
                  <span>{{citem.name}}</span>
                </MenuItem>
              </Submenu>
            </template>
          </Menu>
          <div v-else class="menu-collapsed">
            <template v-for="(item,idx) in menu" v-if="idx!=0">
              <Tooltip :content="item.name" placement="right" v-if="!item.child" :transfer="true" :key="idx">
                  <a class="drop-menu-a">
                    <a @click="menuhover(item.name,item.url)" style="color:#fff">
                      <Icon :type="item.icon" />
                    </a>
                  </a>
              </Tooltip>
              <Dropdown  placement="right-start"  :name="item.name" v-else :key="idx"  :transfer="true">
                <a  class="drop-menu-a">
                  <Icon :type="item.icon" />
                </a>
                <DropdownMenu slot="list">
                  <DropdownItem  v-for="(citem,cidx) in item.child" :name="citem.name" :key="cidx">
                    <a>
                      <a @click="menuhover(citem.name,citem.url)" style="color:#515a6e">
                        <Icon :type="citem.icon" size="16"></Icon>
                        <span>{{citem.name}}</span>
                      </a>
                    </a>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </template>
          </div>
        </Sider>

        <Layout style="position: relative">
          <Header style="padding: 0 40px 0 0"  class="layout-header-bar">
                <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin:'20px'}" type="md-menu" size="24"></Icon>
                <Breadcrumb>
                  <template v-for="(item,idx) in Breadcrumb">
                    <BreadcrumbItem v-if="item.url" :to="item.url" :key="idx">
                      <span @click="changeSel(item.name,item.url)">
                        <Icon :type="item.icon" />
                        {{item.name}}
                      </span>
                    </BreadcrumbItem>
                    <BreadcrumbItem v-else :key="idx">
                      <Icon :type="item.icon" />
                      {{item.name}}
                    </BreadcrumbItem>
                  </template>
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
          <div class="iview-label" id="iviewlabel">
            <div class="btn-con btn-left">
              <Button @click="translateClick('l')">
              <span>
                <Icon type="ios-arrow-back" size="18"/>
              </span>
              </Button>
            </div>
            <div class="btn-con btn-right">
              <Button @click="translateClick('r')">
              <span>
                <Icon type="ios-arrow-forward" size="18"/>
              </span>
              </Button>
            </div>
            <div class="close-con">
              <Dropdown  @on-click="closeTab">
                <Button type="text">
                  <span>
                    <Icon type="ios-close-circle-outline" size="18"/>
                  </span>
                </Button>
                <DropdownMenu slot="list">
                  <DropdownItem name="all">关闭所有</DropdownItem>
                  <DropdownItem name="other">关闭其他</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div class="scroll-outer" id="scrollouter" @mousewheel="mousewheel($event)">
                <div class="scroll-body" id="scrollbody" :style="{ left: leftSize + 'px' }">
                     <Tag type="dot" v-for="(iteml,indexl) in Menulabel"
                          :color="iteml.isActive?'primary':''"
                          v-if="indexl==0"
                          :key="indexl"
                          checkable
                          @on-change="changeSel(iteml.name,iteml.url)">
                    {{iteml.name}}
                    </Tag>
                    <Tag type="dot" closable v-for="(iteme,indexe) in Menulabel"
                         :color="iteme.isActive?'primary':''"
                         v-if="indexe!=0"
                         :key="indexe+1"
                         checkable
                         @on-change="changeSel(iteme.name,iteme.url)"
                         @on-close="handleClose(iteme.name)">
                      {{iteme.name}}
                    </Tag>
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
  import 'babel-polyfill'
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
        ActiveSubmenu:[''],
        leftSize:0,
        Menulabel:[
          {
            name:'主页',
            url:'/',
            isActive:true,
          }
        ],
        Breadcrumb:[
          {
            name:'主页',
            url:'/',
            icon:'md-home'
          }
        ],
        menu:[
          {
            name:'主页',
            url:'/',
            icon:'md-home',
            isActive:true
          },
          {
            name:'文档',
            icon:'ios-book',
            url:'https://www.iviewui.com',
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
                name:'表格和分页',
                icon:'ios-grid',
                url:'/tablepage',
                isActive:false
              },
              {
                name:'通知提醒',
                icon:'ios-notifications',
                url:'/notifications',
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
                url:'/markdown',
                isActive:false
              },
              {
                name:'富文本编辑器',
                icon:'ios-create',
                url:'/fwbediter',
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
    mounted(){
      this.$router.push({
        path:'/'
      })
    },
    methods: {
      collapsedSider () {//收起和打开左侧菜单
        this.$refs.side1.toggleCollapse();
        this.isMenuopen = this.isMenuopen?false:true
        this.logofont = this.isMenuopen?20:14
      },
      tabPos(targetIndex){
          let sbchildDom = document.getElementById('scrollbody').children
          let labelWidth =document.getElementById("iviewlabel").offsetWidth-88
          let targetWidth = 0,targetWidthl=0;
          let gtabWidth = sbchildDom[targetIndex-1].offsetWidth+8
           for(let i=0;i<sbchildDom.length;i++){
             if(i<targetIndex){
               targetWidth+=(sbchildDom[i].offsetWidth+4)
             }
             if(i<targetIndex-1){
               targetWidthl+=(sbchildDom[i].offsetWidth+4)
             }
           }
           targetWidth+=8
           if(targetWidth>labelWidth){//超出右端
             let showWidth = targetWidth+this.leftSize
             if(showWidth!=labelWidth){
               this.leftSize = -(targetWidth-labelWidth)
             }
           }
           if(targetWidthl<=-this.leftSize){//超出左端
             this.leftSize = gtabWidth-targetWidth
           }
          if(targetWidth<labelWidth){//超出右端
              this.leftSize = 0
          }
      },
      changeRouoter(name,url,targetIndex){
        let timer1 = null,self = this;
        clearTimeout(timer1);
        timer1 = setTimeout(function(){
          self.tabPos(targetIndex)
          clearTimeout(timer1);
          timer1 = null;
        },0);
        //跳转路由
        this.$Loading.start();
        this.$router.push({
          path: url,
        });
        this.$Loading.finish();
        //添加面包屑菜单
        let breadArr = this.getcorrectMenup(name)
        this.Breadcrumb.splice(1,2)
        if(breadArr[0] && breadArr[0].name!='主页'){
          this.Breadcrumb.push(breadArr[0])
        }
        if(breadArr[1]){
          this.Breadcrumb.push(breadArr[1])
        }
      },
      changeSel(name,url){
        let mobj = {name:name,isActive:true,url:url}
        let iscz = true;
        let targetIndex = 0
        let self = this
        for(let i=0;i<this.Menulabel.length;i++){
          if(this.Menulabel[i].name!=mobj.name){
            this.Menulabel[i].isActive=false
          }else{
            iscz = false
            this.Menulabel[i].isActive = true
            targetIndex = i+1
          }
        }
        if(iscz){
          this.Menulabel.push(mobj)
          targetIndex = this.Menulabel.length
        }
        this.getcorrectMenu(name)

        this.changeRouoter(name,url,targetIndex)
      },
      menuhover(mname,url){
        this.changeSel(mname,url)
      },
      getcorrectMenup(name){
        let cobj = []
        for(let i=0;i<this.menu.length;i++){
          if(this.menu[i].child && this.menu[i].child.length>0){
            for(let j=0;j<this.menu[i].child.length;j++){
              if(this.menu[i].child[j].name===name){
                cobj.push({name:this.menu[i].name,url:'',icon:this.menu[i].icon})
                cobj.push({name:this.menu[i].child[j].name,url:'',icon:this.menu[i].child[j].icon})
              }
            }
          }else{
            if(this.menu[i].name===name){
              cobj.push({name:this.menu[i].name,url:'',icon:this.menu[i].icon})
            }
          }
        }
        return cobj
      },
      getcorrectMenu(name){
        let cobj
        this.ActiveMenu = name
        for(let i=0;i<this.menu.length;i++){
          if(this.menu[i].child && this.menu[i].child.length>0){
            for(let j=0;j<this.menu[i].child.length;j++){
               if(this.menu[i].child[j].name===name){
                 this.ActiveSubmenu[0] = this.menu[i].name
                 cobj = this.menu[i].child[j]
                 this.menu[i].child[j].isActive = true
               }else{
                 this.menu[i].child[j].isActive = false
               }
            }
          }else{
            if(this.menu[i].name===name){
              cobj = this.menu[i]
              this.menu[i].isActive = true
            }else{
              this.menu[i].isActive = false
            }
          }
        }
        return cobj
      },
      menuhoverc(name){
        let url = this.getcorrectMenu(name).url
        if(name==='文档'){
          window.open(url,'_blank')
        }else{
          this.changeSel(name,url)
        }
      },
      handleClose(name){
        let index = 0,mflag=false,self=this,indexn = 0,newname,url;
        for(let i=0;i<this.Menulabel.length;i++){
          if(this.Menulabel[i].name==name){
            mflag = this.Menulabel[i].isActive;
            this.Menulabel.splice(i,1);
            index = i;
          }
        }
        if(mflag){
          if(this.Menulabel[index]){
            this.Menulabel[index].isActive = true;
            this.ActiveMenu = this.Menulabel[index].name;
            indexn = index
          }else{
            this.Menulabel[index-1].isActive = true;
            this.ActiveMenu = this.Menulabel[index-1].name;
            indexn = index-1
          }
        }
        for(let i=0;i<this.Menulabel.length;i++){
          if(this.Menulabel[i].isActive){
            indexn = i;
            url = this.Menulabel[i].url
          }
        }
        newname = this.ActiveMenu
        this.changeRouoter(newname,url,indexn+1)
      },
      mousewheel(e){
        let labelWidth =document.getElementById("iviewlabel").offsetWidth-88
        let tagslayWidth=document.getElementById("scrollbody").offsetWidth
        let lastWidth = tagslayWidth+this.leftSize-labelWidth
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
          if (e.wheelDelta > 0 && this.leftSize<0) { //当滑轮向上滚动时
            if(this.leftSize>=30) {
              this.leftSize += 30
            }else{
              this.leftSize = 0
            }
          }
          if (e.wheelDelta < 0 && tagslayWidth-labelWidth>0 && this.leftSize>=labelWidth-tagslayWidth) { //当滑轮向下滚动时
            if(lastWidth>=30){
              this.leftSize-=30
            }else{
              this.leftSize-=lastWidth
            }
          }
        } else if (e.detail && this.leftSize<0) {  //Firefox滑轮事件
          if (e.detail > 0) { //当滑轮向上滚动时
            if(this.leftSize>=30) {
              this.leftSize += 30
            }else{
              this.leftSize = 0
            }
          }
          if (e.detail < 0 && tagslayWidth-labelWidth>0 && this.leftSize>=labelWidth-tagslayWidth) { //当滑轮向下滚动时
            if(lastWidth>=30){
              this.leftSize-=30
            }else{
              this.leftSize-=lastWidth
            }
          }
        }
      },
      translateClick(direction){
        let labelWidth =document.getElementById("iviewlabel").offsetWidth-88
        let tagslayWidth=document.getElementById("scrollbody").offsetWidth
        let lastWidth = tagslayWidth+this.leftSize-labelWidth
          if (direction === 'l' && this.leftSize<0) { //当滑轮向上滚动时
            if(this.leftSize>=100) {
              this.leftSize += 100
            }else{
              this.leftSize = 0
            }
          }
          if (direction === 'r' && tagslayWidth-labelWidth>0 && this.leftSize>=labelWidth-tagslayWidth) { //当滑轮向下滚动时
            if(lastWidth>=100){
              this.leftSize-=100
            }else{
              this.leftSize-=lastWidth
            }
          }
      },
      closeTab(name){
        let mobj = {name:'主页',isActive:true,url:'/'}
        let Menulabeln=[]
        if(name==='all'){
          Menulabeln.push(mobj)
          this.changeSel('主页','/')
        }else{
          mobj.isActive = false
          Menulabeln.push(mobj)
          for(let i=0;i<this.Menulabel.length;i++){
            if(this.Menulabel[i].name==this.ActiveMenu){
              Menulabeln.push(this.Menulabel[i])
            }
          }
        }
        this.Menulabel = Menulabeln
        this.leftSize = 0
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
