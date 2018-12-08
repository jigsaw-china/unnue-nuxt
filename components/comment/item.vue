<template>
  <li class="comment-item">
    <div class="item-thumb">
      <a class="link"
         target="_blank"
         rel="external nofollow noopener"
         :href="comment.site">
        <img class="thumb"
             v-if="comment.avatar"
             :src="comment.avatar"
             :alt="comment.nickname"
             :title="comment.nickname"/>
        <span v-else class="iconfont icon-watch"></span>
      </a>
    </div>
    <div class="item-body">
      <div class="link">
        <a class="title"
           target="_blank"
           rel="external nofollow noopener"
           :href="comment.site">{{comment.nickname}}</a>
      </div>
      <div class="content">
        <markdown-parse :content="comment.content"/>
      </div>
      <div class="msg">
        <span :title="comment.createdDate | relativeTime">{{comment.createdDate | ago}}</span>
      </div>
    </div>
  </li>
</template>

<script>
  import MarkdownParse from '~/components/markdown/parse'

  export default {
    name: 'comment-item',
    components: {
      MarkdownParse
    },
    props: {
      comment: {
        type: Object
      }
    },
  }
</script>

<style lang="scss" scoped>
  .comment-item{
    display: flex;
    border-bottom: 1px solid #dcdfe6;
    padding-bottom: 10px;
    margin-bottom: 10px;
    .item-thumb{
      width: 50px;
      height: 50px;
      border-radius: 4px;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .item-body{
      flex: 1;
      padding-left: 10px;
      .title{
        font-size: 16px;
        color: $orange;
      }
      .content{
        padding: 6px 0 10px 0;
      }
      .msg{
        font-size: 14px;
        color: #888;
      }
    }
  }
</style>
