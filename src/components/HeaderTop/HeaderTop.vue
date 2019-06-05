<!--首页头部模板-->
<template>
    <header class="header">
        <!--设置左右插槽-->
        <slot name="left"></slot>
        <span class="header_title">
            <!--此处在各页面可能不同，需要接受具体的数据-->
            <span class="header_title_text ellipsis">{{title}}</span>
        </span>
        <slot name="right"></slot>
    </header>
</template>

<script>
  export default {
      //接受属性需要声明，title接受string类型的值
      props:{
          title: String
      }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
    //设置头部样式
    .header
      background-color #02a774
      position fixed
      z-index 100
      left 0
      top 0
      width 100%
      height 45px
      .header_search
        position absolute
        left 15px
        top 50%
        transform translateY(-50%)
        width 10%
        height 50%
        .icon-sousuo
          font-size 25px
          color #fff
      .header_title
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        width 50%
        color #fff
        text-align center
        .header_title_text
          font-size 20px
          color #fff
          display block
      .header_login
        font-size 14px
        color #fff
        position absolute
        right 15px
        top 50%
        transform translateY(-50%)
        .header_login_text
          color #fff
</style>