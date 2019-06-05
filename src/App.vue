<!--  -->
<template>
  <div id="app">
    <!--显示路由主页-->
    <router-view/>
    <!--显示底部导航，部分页面不需要这个部分，所有设置v-show满足条件才显示
    $route.meta：获取当前路由的meta属性showFooter的值-->
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  //此处引入
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  export default {
    //映射成标签，用的components
    components:{
      FooterGuide
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  .app
    width 100%
    height 100%
    background #f5f5f5
    position relative
</style>