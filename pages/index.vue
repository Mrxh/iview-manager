<template>
  <div class="layout">
    <Layout class="layout-box">
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
          <MenuItem name="1-1">
            <Icon type="ios-navigate"></Icon>
            <span>Option 1</span>
          </MenuItem>
          <MenuItem name="1-2">
            <Icon type="ios-search"></Icon>
            <span>Option 2</span>
          </MenuItem>
          <MenuItem name="1-3">
            <Icon type="ios-settings"></Icon>
            <span>Option 3</span>
          </MenuItem>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-paper" />
              内容管理
            </template>
            <MenuItem name="2-1">文章管理</MenuItem>
            <MenuItem name="2-2">评论管理</MenuItem>
            <MenuItem name="2-3">举报管理</MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
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
        isCollapsed: false
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
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    },
    methods: {
      collapsedSider () {
        this.$refs.side1.toggleCollapse();
      }
    }
  }
</script>

<style lang="scss">
@import "@/assets/css/public/index.scss";
</style>
