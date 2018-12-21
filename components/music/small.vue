<template>
  <div class="music">
    <div class="block" @click="play">
      <span class="iconfont" :class="pause ? ' icon-m-play' : 'icon-m-pause'"></span>
    </div>
    <div class="block">
      <nuxt-link class="music-dynamic" :class="{pause}" to="/music">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'music-small',
    computed: {
      ...mapState({
        pause: state => state.music.pause
      })
    },
    mounted () {
      this.$store.dispatch('MusicInit')
    },
    methods: {
      async play () {
        this.$store.dispatch('MusicPlayOrPause')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .music{
    display: flex;
    align-items: stretch;
    box-shadow: 0 2px 4px #eedcbc;
    .block{
      border-radius: 1px;
      padding: 1px 2px;
      margin-left: 1px;
      font-size: 16px;
      color: #fff;
      background: $orange;
      opacity: .6;
      &:first-child{
        margin-left: auto;
        cursor: pointer;
      }
    }
  }
</style>
