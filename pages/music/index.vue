<template>
  <div class="music">
    <div class="music-head">
      <div class="number">0.</div>
      <div class="title">歌曲名</div>
      <div class="artist">歌手</div>
    </div>
    <ul class="music-list">
      <li class="item"
          v-for="(item, index) of musicList"
          :key="index"
          :class="[{active: curIndex === index}, {pause}]">
        <div class="number">
          <span class="num">{{index + 1}}.</span>
          <span class="iconfont icon-m-sym sym"></span>
        </div>
        <div class="title">{{item.title}}</div>
        <div class="artist">{{item.artist}}</div>
      </li>
    </ul>
    <no-ssr>
      <music-footer/>
    </no-ssr>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Footer from '~/components/music/footer'

  export default {
    name: 'music-index',
    components: {
      MusicFooter: Footer
    },
    data () {
      return {
      }
    },
    computed: {
      ...mapState({
        musicList: state => state.music.list,
        curIndex: state => state.music.curIndex,
        pause: state => state.music.pause
      })
    },
    head () {
      return {
        title: '音乐'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .music{
    padding: 15px;
    color: #666;
    background: #fff;
    .number{
      min-width: 15px;
      margin-right: 5px;
    }
    .music-head{
      display: flex;
      margin-bottom: 10px;
      font-weight: bold;
      .number{
        visibility: hidden;
      }
      .title{
        width: 70%;
      }
    }
    .music-list{
      .item{
        display: flex;
        border-top: 1px solid #eee;
        padding: 15px 0;
        .number{
          .sym{
            display: none;
          }
        }
        .title{
          width: 70%;
        }
        &.active{
          color: $orange;
          .number{
            .num{
              display: none;
            }
            .sym{
              display: inline-block;
              animation: m-rotate 3s linear infinite;
            }
          }
        }
        &.pause{
          .number .sym{
            animation-play-state: paused;
          }
        }
      }
    }
  }

  @keyframes m-rotate{
    0%{
      color: #00bd00;
      transform: translateX(3px) translateY(-5px) rotate(10deg);
    }
    25%{
      transform: translateX(1px) translateY(3px) rotate(-10deg);
    }
    50%{
      color: lightgreen;
      transform: translateX(1px) translateY(-4px) rotate(20deg);
    }
    75%{
      transform: translateX(5px) translateY(2px) rotate(30deg);
    }
    100%{
      color: #00bd00;
      transform: translateX(3px) translateY(-5px) rotate(10deg);
    }
  }
</style>
