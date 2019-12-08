<template>
  <div class="mdit" v-html="html">
  </div>
</template>

<script>
  import mdit from '~/plugins/mdit'
  import 'highlight.js/styles/darcula.css';

  export default {
    name: 'markdown-parse',
    props: {
      content: {
        type: String
      },
      htmled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      html() {
        return mdit(this.content || '', this.htmled)
      }
    }
  }
</script>
<style lang="scss">
  .mdit{
    color: #666;
    line-height: 1.6em;
    hr{
      border: none;
      border-top: 1px solid #ccc;
      margin: 10px 0;
    }
    img{
      max-width: 100%;
    }
    li{
      margin-left: 15px;
    }
    ul li {
      list-style: outside;
    }
    ol li {
      list-style: decimal;
    }
    blockquote{
      border-left: 8px solid #dddfe4;
      padding: 5px 15px;
      margin: 10px 0;
      background: #eef0f4;
    }
    .hljs{
      border: 1px solid;
      border-radius: 6px;
      margin: 5px auto;
      white-space: pre-wrap;
      code{
        font-family: Consolas,Inconsolata,Courier,monospace;
        font-size: 14px;
      }
    }
  }
  .mdit >>> .source{
    margin-top: 10px;
    font-size: 14px;
    color: #aaa;
    a {
      color: #aaa;
    }
  }
</style>
