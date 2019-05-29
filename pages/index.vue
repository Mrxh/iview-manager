<template>
  <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
    <Row type="flex layout_box">
      <i-col :span="spanLeft" class="layout-menu-left">
        <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
          <div class="layout-logo-left"></div>
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              导航一
            </template>
            <Menu-item name="1-1">选项 1</Menu-item>
            <Menu-item name="1-2">选项 2</Menu-item>
            <Menu-item name="1-3">选项 3</Menu-item>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>
              导航二
            </template>
            <Menu-item name="2-1">选项 1</Menu-item>
            <Menu-item name="2-2">选项 2</Menu-item>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>
              导航三
            </template>
            <Menu-item name="3-1">选项 1</Menu-item>
            <Menu-item name="3-2">选项 2</Menu-item>
          </Submenu>
        </Menu>
      </i-col>
      <i-col :span="spanRight">
        <div class="layout-header">
          <i-button type="text" @click="toggleClick">
            <Icon type="menu" size="32"></Icon>
          </i-button>
        </div>
        <div class="layout-content">
          <div class="layout-content-main">内容区域</div>
        </div>
        <div class="layout-copy">
          2011-2016 &copy; TalkingData
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      spanLeft: 5,
      spanRight: 19
    }
  },
  computed: {
    iconSize () {
      return this.spanLeft === 5 ? 14 : 24;
    }
  },
  methods: {
    toggleClick () {
      if (this.spanLeft === 5) {
        this.spanLeft = 2;
        this.spanRight = 22;
      } else {
        this.spanLeft = 5;
        this.spanRight = 19;
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/public/index.scss";
</style>
