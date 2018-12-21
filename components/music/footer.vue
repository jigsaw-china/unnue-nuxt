<template>
  <div class="music-footer">
    <div class="container">
      <div class="left">
        <span class="iconfont icon-m-prev" @click="prev"></span>
        <span class="iconfont btn-play" :class="pause ? 'icon-m-play' : 'icon-m-pause'" @click="play"></span>
        <span class="iconfont icon-m-next" @click="next"></span>
      </div>
      <div class="center">
        <div class="image">
          <img :src="music.image" alt="" title=""/>
        </div>
        <div class="cont">
          <div class="title">{{`${music.title} - ${music.artist}`}}</div>
          <div class="bar">
            <span class="buf" :style="{width: (bufferedTime/totalTime*100).toFixed(2) + '%'}"></span>
            <span class="cur" :style="{width: (currentTime/totalTime*100).toFixed(2) + '%'}">
              <i class="btn"></i>
            </span>
            <span class="time">{{currentTime | formatSeconds}} / {{totalTime | formatSeconds}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { formatSeconds } from '~/plugins/moment'

  export default {
    name: "music-footer",
    computed: {
      ...mapState({
        audio: state => state.music.audio,
        music: state => state.music.music,
        pause: state => state.music.pause,
        bufferedTime: state => state.music.bufferedTime,
        currentTime: state => state.music.currentTime,
        totalTime: state => state.music.totalTime
      })
    },
    methods: {
      async play () {
        this.$store.dispatch('MusicPlayOrPause')
      },
      async prev () {
        this.$store.dispatch('MusicPlayPrev')
      },
      async next () {
        this.$store.dispatch('MusicPlayNext')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .music-footer{
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    @include bg-opacity($orange, .4);
    box-shadow: 0 -2px 4px 0 rgba(255, 0, 0, 0.05);
    .container{
      display: flex;
      align-items: center;
      .iconfont{
        margin: auto 10px;
        font-size: 24px;
        color: rgba(#fff, .8);
        vertical-align: middle;
        cursor: pointer;
        &:hover{
          color: #fff;
        }
      }
      .left{
        .btn-play{
          font-size: 34px;
        }
      }
      .center{
        flex: 1;
        display: flex;
        align-items: center;
        padding: 6px 15px;
        .image{
          width: 38px;
          height: 38px;
          overflow: hidden;
          img{
            width: 100%;
            vertical-align: middle;
          }
        }
        .cont{
          flex: 1;
          margin-left: 10px;
          .title{
            font-size: 14px;
            color: #fff;
          }
          .bar{
            position: relative;
            height: 3px;
            margin-top: 10px;
            background: #fff;
            .buf,
            .cur{
              position: absolute;
              top: 50%;
              left: 0;
              z-index: 1;
              width: 0;
              height: 100%;
              background: #dfdfdf;
              text-align: right;
              transform: translateY(-50%);
            }
            .cur{
              z-index: 2;
              background: #deb0bb;
              .btn{
                position: absolute;
                top: 50%;
                right: 0;
                z-index: 1;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: #fff;
                transform: translateX(50%) translateY(-50%);
              }
            }
            .time{
              position: absolute;
              top: -12px;
              right: 0;
              z-index: 1;
              font-family: 'DINRegular';
              font-size: 14px;
              color: #fff;
              transform: translateY(-50%);
            }
          }
        }
      }
    }
  }
</style>
