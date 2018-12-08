<template>
  <div>
    <article-list :articleList="articleList"/>
    <pagination :where="where" :pageCount="pageCount"/>
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
    fetch({ store, params }) {
      return store.dispatch('CategoryArticleList', params)
    },
    computed: {
      ...mapState({
        articleList: state => state.article.list,
        pageCount: state => state.article.pageCount,
        where: state => state.article.where
      }),
      alias () {
        return this.$route.params.alias
      }
    },
    head () {
      return {
        title: `${this.alias} | 分类`,
        meta: [
          { hid: 'keywords', name: 'keywords', content: `${this.alias}` },
          { hid: 'description', name: 'description', content: `${this.alias}` }
        ]
      }
    }
  }
</script>
