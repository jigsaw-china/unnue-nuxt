<template>
  <div class="default">
    <header-view></header-view>
    <banner></banner>
    <nav-view></nav-view>
    <div class="main container">
      <div class="content">
        <transition name="fade">
          <nuxt/>
        </transition>
      </div>
      <aside-view></aside-view>
    </div>
  </div>
</template>

<script>
  import { Header, Banner, Nav, Aside } from '~/components/layout'

  export default {
    components: {
      HeaderView: Header,
      Banner,
      NavView: Nav,
      AsideView: Aside
    }
  }
</script>

<style lang="scss" scoped>
  .main{
    display: flex;
    padding: 15px 0;
    .content{
      flex: 1;
      overflow: hidden;
    }
  }
</style>
