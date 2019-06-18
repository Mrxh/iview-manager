<template>
    <div class="notifications">
      <div class="notice">
        <h3>普通提示信息</h3>
        <Button type="primary" @click="open(3)">打开提醒</Button>
      </div>
      <div class="notice">
        <h3>带描述信息</h3>
        <Button @click="info(false)">消息</Button>
        <Button @click="success(false)">成功</Button>
        <Button @click="warning(false)">警告</Button>
        <Button @click="error(false)">错误</Button>
      </div>
      <div class="notice">
        <h3>只有标题</h3>
        <Button @click="info(true)">消息</Button>
        <Button @click="success(true)">成功</Button>
        <Button @click="warning(true)">警告</Button>
        <Button @click="error(true)">错误</Button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "notifications",
        methods: {
          open (nodesc) {
            this.$Notice.open({
              title: '新的消息',
              desc: `您还有${nodesc}条信息需要查看`,
              duration:3
            });
          },
          info (nodesc) {
            this.$Notice.info({
              title: '新的消息',
              desc: nodesc?'':'这里是描述内容，这里是描述内容，这里是描述内容，这里是描述内容，这里是描述内容.',
              duration:3
            });
          },
          success (nodesc) {
            this.$Notice.success({
              title: '新的消息',
              desc: nodesc?'':'这里是描述内容，这里是描述内容，这里是描述内容，这里是描述内容，这里是描述内容.',
              duration:3
            });
          },
          warning (nodesc) {
            this.$Notice.warning({
              title: '新的消息',
              desc: nodesc?'':'这里是描述内容，这里是描述内容，这里是描述内容，这里是描述内容，这里是描述内容.',
              duration:3
            });
          },
          error (nodesc) {
            this.$Notice.error({
              title: '新的消息',
              desc: nodesc?'':'这里是描述内容，这里是描述内容，这里是描述内容，这里是描述内容，这里是描述内容.',
              duration:3
            });
          }
        }
    }
</script>

<style lang="scss">
  @import "@/assets/css/notice/index.scss";
</style>
