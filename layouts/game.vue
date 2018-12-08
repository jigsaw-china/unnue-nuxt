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
    </div>
  </div>
</template>

<script>
  import { Header, Banner, Nav } from '~/components/layout'

  export default {
    components: {
      HeaderView: Header,
      Banner,
      NavView: Nav
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
