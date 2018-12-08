<template>
  <div class="aside-block">
    <div class="search">
      <input type="text" placeholder="搜索文章" v-model="keyword" @keydown.enter="search"/>
      <button type="button" @click="search">
        <span class="iconfont icon-search"></span>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'aside-search',
    data () {
      return {
        keyword: ''
      }
    },
    methods: {
      search () {
        if (!this.keyword) {
          return
        }
        this.$router.push(`/search/${encodeURIComponent(this.keyword)}`)
        this.keyword = ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .aside-block{
    margin-bottom: 5px;
    .search{
      display: flex;
      align-items: center;
      height: 32px;
      border: 1px solid $border-color;
      font-size: 14px;
      input{
        flex: 1;
        height: 100%;
        border: none;
        padding: 0 4px 0 8px;
        outline: none;
        &::placeholder{
          color: #999;
        }
      }
      button{
        height: 100%;
        border: none;
        padding: 0 10px;
        background: $bg-body;
        outline: none;
        cursor: pointer;
        &:hover{
          background: #ebe3bc;
        }
      }
    }
  }
</style>
