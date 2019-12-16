<template>
  <li class="article-item">
    <div class="item-thumb">
      <nuxt-link class="link" :to="`/article/${article.id}`" :title="article.title">
        <img class="thumb"
             v-if="article.thumb"
             :src="article.thumb + imageView"
             :alt="article.title"
             :title="article.title"/>
        <span v-else
              class="webfont text"
              :class="Math.random()>.5 ? 'w1' : 'w2'">{{pinyinTwo}}
        </span>
      </nuxt-link>
    </div>
    <div class="item-body">
      <h4 class="title">
        <nuxt-link class="link" :to="`/article/${article.id}`" :title="article.title" v-html="filterKeyword(article.title)"/>
      </h4>
      <p class="desc">
        <nuxt-link class="link" :to="`/article/${article.id}`" :title="article.description" v-html="article.description"/>
      </p>
      <div class="info">
        <span><i class="iconfont icon-date"></i><i :title="article.publishDate | relativeTime"> {{article.publishDate | ago}}</i></span>
        <span><i class="iconfont icon-watch"></i><i> {{article.visitCount}}</i></span>
        <span><i class="iconfont icon-comment"></i><i> {{article.commentCount}}</i></span>
        <span><i class="iconfont icon-like"></i><i> {{article.likeCount}}</i></span>
        <span><i class="iconfont icon-classify"></i><i> {{article.categoryNames}}</i></span>
      </div>
      <span class="iconfont icon-top is-top" v-if="article.isTop"></span>
    </div>
  </li>
</template>

<script>
  import pinyin from '~/plugins/pinyin'

  export default {
    name: 'article-item',
    props: {
      article: {
        type: Object
      },
      keyword: {
        type: String
      }
    },
    data () {
      return {
        imageView: '?imageView2/1/w/130/h/88/format/webp/interlace/1/q/75|watermark/2/text/dW5udWUuY29t/font/5a6L5L2T/fontsize/12/fill/I0ZGRkZGRg==/dissolve/40/gravity/SouthWest/dx/5/dy/5'
      }
    },
    computed: {
      pinyinTwo () {
        const t = pinyin(this.article.title.slice(0, 2), true)
        console.log(t)
        return t
      }
    },
    methods: {
      filterKeyword (title) {
        if (this.keyword) {
          const keywords = this.keyword.trim().split(' ')
          const reg = new RegExp(keywords.join('|'), 'gi')
          const titleArr = title.split(reg)
          const keyArr = title.match(reg)

          return titleArr.map((item, index) => {
            if (index !== titleArr.length - 1) {
              return `${item}<span class="keyword">${keyArr[index]}</span>`
            }
            return item
          }).join('')
        }

        return title
      }
    }
  }
</script>

<style scoped>
  .link >>> .keyword{
    display: inline-block;
    border-radius: 3px;
    padding: 0 4px;
    color: #ff0000;
    background: rgba(0, 0, 0, .1);
  }
  .link:hover >>> .keyword{
    color: inherit;
  }
  .title .link >>> .keyword{
    padding: 0 4px;
  }
</style>
<style lang="scss" scoped>
  .article-item{
    position: relative;
    display: flex;
    padding: 12px 10px;
    margin-bottom: 5px;
    font-family: DINRegular;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(255, 0, 0, 0.05);
    .item-thumb{
      width: var(130);
      .link{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        user-select: none;
      }
      .thumb{
        width: 100%;
        border-radius: 4px;
        overflow: hidden;
      }
      .text{
        font-size: var(50);
        color: #444;
        transition: .6s;
        &:hover{
          color: $orange;
        }
      }
    }
    .item-body{
      flex: 1;
      padding-left: 15px;
      .title{
        max-height: 52px;
        padding: 2px 0 8px 0;
        .link{
          font-size: var(16);
          line-height: 26px;
          @include ellipsis;
        }
      }
      .desc{
        display: block;
        margin-top: 2px;
        height: var(44);
        padding-bottom: 6px;
        .link{
          font-size: var(14);
          color: #888;
          line-height: 1.25;
          @include ellipsis;
        }
      }
      .info{
        font-size: 15px;
        color: #777;
        span{
          display: inline-block;
          min-width: var(60);
          margin-right: 20px;
          &:first-child{
            min-width: var(90);
          }
          &:last-child{
            margin-right: auto;
          }
          i{
            vertical-align: middle;
          }
        }
      }
    }
  }
</style>
