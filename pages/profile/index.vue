<template>
  <div class="profile">
    <div class="cont">
      <markdown-parse :content="profile" :htmled="true"/>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import MarkdownParse from '~/components/markdown/parse'

  export default {
    scrollToTop: true,
    components: {
      MarkdownParse
    },
    async fetch({ store }) {
      return store.dispatch('Profile')
    },
    computed: {
      ...mapState({
        profile: state => state.profile.profile
      })
    }
  }
</script>

<style lang="scss" scoped>
  .profile{
    padding: 10px 13px;
    background: #fff;
    .cont{
      padding: 5px 2px 10px 2px;
    }
  }
</style>
