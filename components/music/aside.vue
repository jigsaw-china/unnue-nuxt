<template>
  <div class="music-aside">
    <div class="image" :class="[{pause},{reset}]">
      <img :src="music.image" :alt="music.title" :title="music.title"/>
    </div>
    <div class="lyric">
      <ul class="list" :style="{transform: `translateY(${top}px)`}">
        <li v-for="(item, index) of lyricList"
            :key="index"
            :class="{active: curLyricIndex - 1 === index}"
            class="item">
          {{item.value}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Base64 from '~/plugins/base64'

  export default {
    name: "music-aside",
    data () {
      return {
        reset: false
      }
    },
    computed: {
      ...mapState({
        music: state => state.music.music,
        pause: state => state.music.pause,
        curIndex: state => state.music.curIndex,
        currentTime: state => state.music.currentTime
      }),
      curLyricIndex () {
        if (!this.currentTime) {
          return 0
        }
        if (this.currentTime + 300 > this.lyricList[this.lyricList.length - 1].time) {
          return this.lyricList.length
        }
        return this.lyricList.findIndex(item => {
          return item.time - this.currentTime > 300
        })
      },
      top () {
        const index = this.curLyricIndex
        return -32 * (index - 2 > 0 ? index - 2 : 0)
      },
      lyricList () {
        const lyricArr = []
        if (this.music.lyric) {
          const arr = this.music.lyric.fromBase64().split('\n');
          arr.forEach((item) => {
            const time = item.substring(item.indexOf("[") + 1, item.indexOf("]"))
            const value = item.substring(item.indexOf("]") + 1, item.length)
            if (value) {
              lyricArr.push({
                time: (time.split(":")[0] * 60 + parseFloat(time.split(":")[1])).toFixed(3) * 1000,
                value
              })
            }
          })
        }
        return lyricArr
      }
    },
    created () {
      if (Base64.extendString) {
        Base64.extendString();
      }
    },
    watch: {
      curIndex () {
        this.reset = !this.reset
      }
    }
  }
</script>

<style lang="scss" scoped>
  .music-aside{
    width: var(300);
    padding: 15px;
    margin-left: 10px;
    background: #fff;
    .image{
      width: 95%;
      border-radius: 50%;
      margin: auto;
      box-shadow: 5px 5px 10px #999;
      overflow: hidden;
      img{
        width: 100%;
        vertical-align: middle;
        animation: m-rotate 10s linear infinite;
      }
      &.reset img{
        animation: m-rotate-copy 10s linear infinite;
      }
      &.pause img{
        animation-play-state: paused;
      }
    }
    .lyric{
      position: relative;
      height: 190px;
      margin-top: 20px;
      overflow: hidden;
      .list{
        transition: .3s;
        .item{
          font-size: 16px;
          color: #999;
          line-height: 2;
          text-align: center;
          &.active{
            color: $orange;
          }
        }
      }
      &:after{
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 0, rgba(255, 255, 255, 0) 7%, rgba(255, 255, 255, 0) 80%, rgba(255, 255, 255, 1) 100%);
      }
    }
  }

  @keyframes m-rotate{
    from{ transform: rotate(0); }
    to{ transform: rotate(360deg); }
  }
  @keyframes m-rotate-copy{
    from{ transform: rotate(0); }
    to{ transform: rotate(360deg); }
  }
</style>
