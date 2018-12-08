<template>
  <div class="guestbook">
    <comment-list :commentList="guestbookList"/>
    <comment reqType="Guestbook"/>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import CommentList from '~/components/comment/list'
  import Comment from '~/components/comment'

  export default {
    scrollToTop: true,
    components: {
      CommentList,
      Comment
    },
    async fetch({ store }) {
      return store.dispatch('GuestbookList')
    },
    computed: {
      ...mapState({
        guestbookList: state => state.guestbook.list
      })
    },
    head () {
      return {
        title: '留言板'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .guestbook{

  }
</style>
