<template>
  <div>
    <article-list :articleList="articleList"/>
    <pagination :pageCount="pageCount" :currencyPage="currencyPage"/>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import ArticleList from '~/components/article/list'
  import Pagination from '~/components/article/pagination'

  export default {
    components: {
      ArticleList,
      Pagination
    },
    validate({ params }) {
      return /^\d+$/.test(params.page)
    },
    async fetch({ store, params }) {
      return store.dispatch('ArticleList', params)
    },
    computed: {
      ...mapState({
        articleList: state => state.article.list,
        pageCount: state => state.article.pageCount,
        currencyPage: state => state.article.currencyPage
      })
    }
  }
</script>
