<template>
  <div class="aside-block">
    <div class="title">
      <span class="iconfont icon-xiaochengxu"></span> 支持
    </div>
    <div class="image">
      <img class="img" :src="imgUrl"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'aside-ad3',
    data() {
      return {
        imgUrl: 'https://static.unnue.com/FnfrgPq3pZlnUlUKrViJZPgKE7vM?imageView2/1/w/180/h/180/format/webp/interlace/1/q/75%7Cwatermark/2/text/dW5udWUuY29t/font/5a6L5L2T/fontsize/12/fill/I0ZGRkZGRg==/dissolve/40/gravity/SouthWest/dx/5/dy/5'
      }
    },
  }
</script>

<style lang="scss" scoped>
  .aside-block{
    margin-bottom: 5px;
  }
  .image{
    padding: 10px 0;
    text-align: center;
  }
</style>
