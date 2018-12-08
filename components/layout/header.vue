<template>
  <header class="header">
    <div class="container topbar">
      <div class="topbar-logo">
        <img class="logo" src="/images/logo.svg"/>
        <span class="webfont slogan">开媛 笔记</span>
        <nuxt-link class="link" to="/"></nuxt-link>
      </div>
      <div class="topbar-music">
        <no-ssr>
          <music-small/>
        </no-ssr>
      </div>
    </div>
  </header>
</template>

<script>
  import MusicSmall from '../music/small'

  export default {
    name: 'layout-header',
    components: {
      MusicSmall
    }
  }
</script>

<style lang="scss" scoped>
  header{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    @include bg-opacity;
    box-shadow: 0 2px 4px 0 rgba(255, 0, 0, 0.05);
    .topbar{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .topbar-logo{
        position: relative;
        display: flex;
        align-items: center;
        padding: 5px 0;
        .logo{
          width: var(84);
        }
        .slogan{
          padding-left: 10px;
          font-size: var(21);
        }
        .link{
          @include absolute;
        }
      }
    }
  }
</style>
