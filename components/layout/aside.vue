<template>
  <aside class="aside">
    <search/>
    <articles/>
    <tags/>
    <ad/>
  </aside>
</template>

<script>
  import Search from '../aside/search'
  import Articles from '../aside/articles'
  import Tags from '../aside/tags'
  import Ad from '../aside/ad'

  export default {
    name: 'layout-aside',
    components: {
      Search,
      Articles,
      Tags,
      Ad
    }
  }
</script>

<style lang="scss" scoped>
  .aside{
    width: var(300);
    margin-left: 10px;
  }
</style>
