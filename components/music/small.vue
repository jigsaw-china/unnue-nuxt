<template>
  <div class="music">
    <div class="block" @click="pause = !pause">
      <span class="iconfont" :class="pause ? ' icon-m-play' : 'icon-m-pause'"></span>
    </div>
    <div class="block">
      <span class="music-dynamic" :class="{pause: pause}">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'music-small',
    data() {
      return {
        currentPlayIndex: 0,
        pause: true,
        music: {},
        musicList: [
          {
            title: '月光变奏曲',
            url: 'https://api.bzqll.com/music/tencent/url?id=002GrJ771EmliH&key=579621905'
          },
          {
            title: '幻音宝盒',
            url: 'https://api.bzqll.com/music/tencent/url?id=002WtCw213iFz7&key=579621905'
          },
          {
            title: '梦太晚',
            url: 'https://api.bzqll.com/music/tencent/url?id=00301vrC14cTmK&key=579621905'
          },
          {
            title: '心之逆鳞',
            url: 'https://api.bzqll.com/music/tencent/url?id=003Vqd0l1CVgxb&key=579621905'
          },
          {
            title: '我的天空',
            url: 'https://api.bzqll.com/music/tencent/url?id=0043WGTm3kacAQ&key=579621905'
          }
        ]
      }
    },
    mounted () {
      this.random()
      this.init()
    },
    methods: {
      random () {
        this.musicList.sort(_ => {
          return 0.5 - Math.random()
        })
      },
      async init () {
        this.music = new Audio()
        this.music.src = this.musicList[this.currentPlayIndex].url
        // 只加载元数据
        this.music.preload = 'metadata'
        this.music.autoplay = 'autoplay'
        this.music.volume = .5
        // 当媒介数据已开始播放时运行脚本
        this.music.onplay = _ => {
          this.pause = false
        }
        // 当媒介已抵达结尾时运行脚本
        this.music.onended = _ => {
          if (this.currentPlayIndex === this.musicList.length - 1) {
            this.currentPlayIndex = 0
          }
          this.music.src = this.musicList[++this.currentPlayIndex].url
          this.music.play()
        }
      }
    },
    watch: {
      pause (val) {
        if (!val) {
          this.music.play()
        } else {
          this.music.pause()
        }
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
    iframe{
      display: none;
    }
  }
</style>
