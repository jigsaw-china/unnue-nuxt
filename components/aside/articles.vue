<template>
  <div class="aside-block">
    <div class="title">
      <span class="iconfont icon-tuijian"></span> 推荐
    </div>
    <ul class="list">
      <li class="item"
          v-for="(item, index) of articleList"
          :key="index">
        <nuxt-link class="link" :to="`/article/${item.id}`" :title="`${item.title} | 浏览量: ${item.visitCount}`">
          {{index+1}}. {{item.title}}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'aside-articles',
    computed: {
      ...mapState({
        articleList: state => state.article.bestList
      })
    }
  }
</script>

<style lang="scss" scoped>
  .aside-block{
    margin-bottom: 5px;
  }
  .list{
    padding-top: 10px;
    margin: 0 -5px;
    .item{
      margin: 0 5px 2px;
      transition: .3s;
      &:hover{
        margin-left: 3px;
      }
      .link{
        display: block;
        padding: 5px 4px;
        font-family: DINRegular;
        font-size: var(16);
        color: #777;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        &:hover{
          color: #333;
          background: $bg-body;
        }
      }
    }
  }
</style>
