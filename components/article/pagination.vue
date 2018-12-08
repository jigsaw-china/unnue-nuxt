<template>
  <ul class="pagination" v-if="pageCount > 1 && currencyPage <= pageCount">
    <!--上一页-->
    <li>
      <nuxt-link v-if="currencyPage > 1"
                 class="link"
                 :to="`/${where}/${currencyPage - 1}`"
                 title="上一页">上一页
      </nuxt-link>
      <span v-else class="link link-disabled">上一页</span>
    </li>
    <!--中间页-->
    <li v-for="page in pageCount" :key="page">
      <nuxt-link v-if="currencyPage !== page"
                 class="link"
                 :to="`/${where}/${page}`"
                 :title="`第${page}页`">{{page}}
      </nuxt-link>
      <span v-else class="link link-active">{{page}}</span>
    </li>
    <!--下一页-->
    <li>
      <nuxt-link v-if="currencyPage < pageCount"
                 class="link"
                 :to="`/${where}/${currencyPage + 1}`"
                 title="下一页">下一页
      </nuxt-link>
      <span v-else class="link link-disabled">下一页</span>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'article-pagination',
    props: {
      pageCount: {
        type: Number
      },
      currencyPage: {
        type: Number,
        default: 1
      },
      where: {
        type: String,
        default: 'article/list'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pagination{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px 0;
    > li .link{
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 30px;
      height: 30px;
      padding: 0 8px;
      margin: auto 2px;
      font-size: 13px;
      color: #777;
      &:hover,
      &.link-active{
        color: $orange;
      }
      &.link-disabled{
        color: #ccc;
      }
    }
  }
</style>
