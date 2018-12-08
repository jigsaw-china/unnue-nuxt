<template>
  <div class="default">
    <header-view></header-view>
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
  import { Header } from '~/components/layout'

  export default {
    components: {
      HeaderView: Header
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
