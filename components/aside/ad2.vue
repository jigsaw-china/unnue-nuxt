<template>
  <div class="aside-block">
    <div class="title">
      <span class="iconfont icon-ad"></span> 广告
    </div>
    <div id="ad2"></div>
  </div>
</template>

<script>
  import { adId } from '../../app.config'

  export default {
    name: 'aside-ad2',
    mounted() {
      window && (window.slotbydup = window.slotbydup || []).push({
        id: adId,
        container: 'ad2' // id
      });
    }
  }
</script>

<style lang="scss" scoped>
  .aside-block{
    margin-bottom: 5px;
  }
</style>
