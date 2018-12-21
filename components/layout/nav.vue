<template>
  <nav class="navar">
    <div class="container">
      <ul class="list">
        <li class="item active">
          <nuxt-link class="link" to="/">主页</nuxt-link>
        </li>
        <li class="item"
            v-for="(item, index) of categoryList"
            :key="index">
          <nuxt-link class="link" :to="`/category/${item.alias || item.id}`" :title="item.description">{{item.title}}</nuxt-link>
        </li>
        <li class="item">
          <nuxt-link class="link" to="/game/gobang">娱乐</nuxt-link>
        </li>
        <li class="item">
          <nuxt-link class="link" to="/guestbook">留言板</nuxt-link>
        </li>
        <li class="item">
          <nuxt-link class="link" to="/music">音乐</nuxt-link>
        </li>
        <li class="item">
          <nuxt-link class="link" to="/profile">个人档</nuxt-link>
        </li>
        <li class="item">
          <nuxt-link class="link" to="/"><s>更多</s></nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'layout-nav',
    computed: {
      ...mapState({
        categoryList: state => state.category.list
      })
    }
  }
</script>

<style lang="scss" scoped>
  .navar{
    background: $bg-navbar;
    .list{
      display: flex;
      padding: 4px 0;
    }
    .item{
      margin-right: 5px;
      .link{
        padding: 10px;
        font-size: var(14);
        color: #fff;
        text-shadow: 0 0 1px $white;
        &:hover{
          color: $gray;
          text-shadow: 0 0 1px $gray;
        }
      }
    }
  }
</style>
