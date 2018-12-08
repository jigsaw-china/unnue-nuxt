<template>
  <div>
    <article-list :articleList="articleList"/>
    <pagination :pageCount="pageCount"/>
    <console/>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import ArticleList from '~/components/article/list'
  import Pagination from '~/components/article/pagination'
  import Console from '~/components/console'

  export default {
    components: {
      ArticleList,
      Pagination,
      Console
    },
    fetch({ store }) {
      return store.dispatch('ArticleList')
    },
    computed: {
      ...mapState({
        articleList: state => state.article.list,
        pageCount: state => state.article.pageCount
      })
    }
  }
</script>
