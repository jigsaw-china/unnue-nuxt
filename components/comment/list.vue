<template>
  <ul class="comment-list">
    <item v-for="(item, index) of commentList"
          :key="index"
          :comment="item">
    </item>
    <li class="comment-item">
    </li>
  </ul>
</template>

<script>
  import Item from './item'

  export default {
    name: 'comment-list',
    components: {
      Item
    },
    props: {
      commentList: {
        type: Array
      }
    }
  }
</script>

<style lang="scss" scoped>
  .comment-list{
    padding: 10px 13px;
    margin-bottom: 2px;
    background: #fff;
  }
</style>
