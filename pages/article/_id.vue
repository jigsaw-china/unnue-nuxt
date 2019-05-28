<template>
  <div class="detail">
    <div class="bg" :style="{backgroundImage: `url(${article.thumb + imageView})`}"></div>
    <article class="article">
      <span class="iconfont icon-top is-top" v-if="article.isTop"></span>
      <div class="article-head">
        <h1 class="title">{{article.title}}</h1>
        <div class="msg">
          <span><i class="iconfont icon-date"></i><i :title="article.publishDate | relativeTime"> {{article.publishDate | ago}}</i></span>
          <span><i class="iconfont icon-watch"></i><i> {{article.visitCount}}</i></span>
          <span v-if="article.tags">
            <i class="iconfont icon-tags"></i>&nbsp;
            <template v-for="(item, index) of article.tags">
              <template v-if="index !== 0">, </template>
              <nuxt-link class="link"
                         :key="index"
                         :to="`/tag/${item.alias || item.id}`"
                         :title="item.description">{{item.title}}</nuxt-link>
            </template>
          </span>
          <span v-if="article.categories">
            <i class="iconfont icon-classify"></i>&nbsp;
            <template v-for="(item, index) of article.categories">
              <template v-if="index !== 0">, </template>
              <nuxt-link class="link"
                         :key="index"
                         :to="`/category/${item.alias || item.id}`"
                         :title="item.description">{{item.title}}</nuxt-link>
            </template>
          </span>
        </div>
      </div>
      <div class="article-body">
        <markdown-parse :content="article.content" :htmled="true"/>
      </div>
      <div class="article-foot">
        <span><i class="iconfont icon-comment"></i><i> 评论 ({{article.commentCount}})</i></span>
        <span class="like"
              :class="{liked: article.liked}"
              @click="clickLike">
          <i class="iconfont icon-like"></i><i> {{article.liked ? '已赞' : '赞'}} ({{article.likeCount}})</i>
        </span>
      </div>
    </article>
    <comment-list :commentList="commentList"/>
    <comment :articleId="article.id"/>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import MarkdownParse from '~/components/markdown/parse'
  import CommentList from '~/components/comment/list'
  import Comment from '~/components/comment'

  export default {
    scrollToTop: true,
    components: {
      MarkdownParse,
      CommentList,
      Comment
    },
    validate({ params }) {
      return /^\d+$/.test(params.id)
    },
    async fetch({ store, params, error }) {
      const result = await store.dispatch('ArticleDetail', params)
      if (result.data.code === 1) {
        await store.dispatch('CommentList', params)
      } else {
        error({ statusCode: 404, message: result.data.message })
      }
    },
    data () {
      return {
        imageView: '?imageView2/1/w/130/h/88/format/webp/interlace/1/q/75|watermark/2/text/dW5udWUuY29t/font/5a6L5L2T/fontsize/12/fill/I0ZGRkZGRg==/dissolve/40/gravity/SouthWest/dx/5/dy/5'
      }
    },
    computed: {
      ...mapState({
        article: state => state.article.detail,
        commentList: state => state.comment.list
      })
    },
    mounted() {
      this.$store.dispatch('HistoryLikes')
    },
    methods: {
      clickLike () {
        this.$store.dispatch('ArticleLike')
      }
    },
    head () {
      return {
        title: this.article.title,
        meta: [
          { hid: 'keywords', name: 'keywords', content: this.article.keyword },
          { hid: 'description', name: 'description', content: this.article.description }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .bg{
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-size: cover;
    filter: blur(10px);
    opacity: .95;
  }
  .article{
    position: relative;
    padding: 10px 13px;
    margin-bottom: 3px;
    background: #fff;
    .article-head{
      position: relative;
      padding: 10px 0;
      &:after{
        content: '';
        position: absolute;
        bottom: 2px;
        left: 0;
        width: 100%;
        height: 1px;
        background: #ccc;
      }
      .title{
        margin: auto;
        font-size: 22px;
        color: #333;
      }
      .msg{
        padding: 10px 0;
        font-family: DINRegular;
        font-size: 14px;
        span{
          display: inline-block;
          margin-left: 40px;
          color: #888;
          &:first-child{
            margin-left: auto;
          }
          .link{
            color: #888;
            &:hover{
              color: $orange;
            }
          }
        }
      }
    }
    .article-body{
      padding: 5px 2px 10px 2px;
    }
    .article-foot{
      border-top: 1px solid #dcdfe6;
      padding-top: 10px;
      font-family: DINRegular;
      font-size: 14px;
      span{
        display: inline-block;
        margin-left: 30px;
        color: #888;
        &:first-child{
          margin-left: auto;
        }
        &.like{
          cursor: pointer;
          &.liked{
            color: #f95050;
            cursor: default;
          }
        }
        .link{
          color: #888;
          &:hover{
            color: $orange;
          }
        }
      }
    }
  }
</style>
