<template>
    <div id="fwbediter">

    </div>
</template>

<script>
    import E from 'wangeditor'
    export default {
        name: "fwbediter",
        mounted() {
          let editer = new E('#fwbediter')
          editer.create()
        }
    }
</script>

<style scoped>

</style>
