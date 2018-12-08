<template>
  <ul class="article-list">
    <item v-for="(item, index) of articleList"
          :key="index"
          :article="item"
          :keyword="keyword">
    </item>
  </ul>
</template>

<script>
  import Item from './item'

  export default {
    name: 'article-list',
    components: {
      Item
    },
    props: {
      articleList: {
        type: Array
      },
      keyword: {
        type: String
      }
    }
  }
</script>
