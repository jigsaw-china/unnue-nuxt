<template>
  <div class="aside-block">
    <div class="title">
      <span class="iconfont icon-tags"></span> 标签
    </div>
    <ul class="list">
      <li class="item"
          v-for="(item, index) of tagList"
          :key="index">
        <nuxt-link class="link" :to="`/tag/${item.alias || item.id}`" :title="item.description">
          <span class="iconfont" :class="item.icon ? item.icon : 'icon-tags'"></span> {{item.title}}[{{item.count}}]
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'aside-tags',
    computed: {
      ...mapState({
        tagList: state => state.tag.list
      })
    }
  }
</script>

<style lang="scss" scoped>
  .aside-block{
    margin-bottom: 5px;
  }
  .list{
    display: flex;
    flex-wrap: wrap;
    padding-top: 10px;
    margin: 0 -5px;
    .item{
      margin: 0 5px 10px 5px;
      .link{
        padding: 4px 10px;
        font-family: DINRegular;
        font-size: var(16);
        color: #777;
        background: $bg-body;
        &:hover{
          color: #333;
          background: $bg-navbar;
        }
      }
    }
  }
</style>
