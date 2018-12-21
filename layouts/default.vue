<template>
  <div class="default">
    <header-view></header-view>
    <banner></banner>
    <nav-view></nav-view>
    <div class="main container" :class="{'main-music': showMusic}">
      <div class="content">
        <transition name="fade">
          <nuxt/>
        </transition>
      </div>
      <no-ssr v-if="showMusic">
        <aside-music/>
      </no-ssr>
      <aside-view v-else/>
    </div>
  </div>
</template>

<script>
  import { Header, Banner, Nav, Aside } from '~/components/layout'
  import AsideMusic from '~/components/music/aside'

  export default {
    components: {
      HeaderView: Header,
      Banner,
      NavView: Nav,
      AsideView: Aside,
      AsideMusic
    },
    computed: {
      showMusic () {
        return this.$route.name === 'music'
      }
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
    &.main-music{
      padding-bottom: 80px;
    }
  }
</style>
