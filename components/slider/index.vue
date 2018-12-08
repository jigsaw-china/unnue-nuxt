<template>
  <div class="slider"
       @mouseenter="stop"
       @mouseleave="slider">
    <ul class="list"
        :style="dataStyle">
      <li class="item"
          v-for="(item, index) of dataList"
          :key="index">
        <a class="link" target="_blank" rel="nofollow" :href="item.url">
          <img :src="item.src" :alt="item.title" :title="item.title"/>
        </a>
      </li>
    </ul>
    <ul class="pages">
      <li class="item"
          v-for="i in dataList.length"
          :key="i"
          :class="{active: page === i - 1}"
          @click="gopage(i - 1)"></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'slider-index',
    props: {
      speed: {
        type: Number,
        default: 3500
      },
      dataList: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
        page: 0,
        st: {}
      }
    },
    computed: {
      dataStyle () {
        return {
          transition: '.5s',
          transform: `translateX(${-10 * this.page}%)`
        }
      }
    },
    mounted () {
      this.slider()
    },
    methods: {
      slider () {
        this.st = setTimeout(_ => {
          if (this.page === this.dataList.length - 1) {
            this.page = 0
          } else {
            this.page++
          }

          this.slider()
        }, this.speed)
      },
      stop () {
        clearTimeout(this.st)
      },
      gopage (page) {
        this.page = page
      }
    }
  }
</script>

<style lang="scss" scoped>
  .slider{
    position: relative;
    overflow: hidden;
    .list{
      width: 1000%;
      &:after{
        content: '';
        display: table;
        clear: both;
      }
      .item{
        float: left;
        width: 10%;
        a{
          display: block;
          img{
            width: 100%;
          }
        }
      }
    }
    .pages{
      position: absolute;
      z-index: 1;
      bottom: 8%;
      left: 50%;
      display: flex;
      transition: .3s;
      transform: translateX(-50%);
      opacity: .4;
      .item{
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin: 0 2px;
        background: rgba(255, 255, 255, .3);
        cursor: pointer;
        &.active{
          background: rgba(255, 255, 255, .8);
        }
      }
    }
    &:hover .pages{
      opacity: 1;
    }
  }
</style>
