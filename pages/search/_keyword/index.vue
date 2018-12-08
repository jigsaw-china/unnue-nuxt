<template>
  <div>
    <article-list :articleList="articleList" :keyword="keyword"/>
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
    validate({ params }) {
      return params.keyword
    },
    fetch({ store, params }) {
      return store.dispatch('SearchArticleList', params)
    },
    computed: {
      ...mapState({
        articleList: state => state.article.list,
        pageCount: state => state.article.pageCount,
        where: state => state.article.where
      }),
      keyword () {
        return this.$route.params.keyword
      }
    },
    head () {
      return {
        title: `搜索 \`${this.keyword}\` 的结果`,
        meta: [
          { hid: 'keywords', name: 'keywords', content: `搜索 \`${this.keyword}\` 的结果` },
          { hid: 'description', name: 'description', content: `搜索 \`${this.keyword}\` 的结果` }
        ]
      }
    }
  }
</script>
