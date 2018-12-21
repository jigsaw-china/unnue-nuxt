import Vue from 'vue'
import Vuex from 'vuex'

import tag from './modules/tag'
import category from './modules/category'
import article from './modules/article'
import comment from './modules/comment'
import guestbook from './modules/guestbook'
import profile from './modules/profile'
import music from './modules/music'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    tag,
    category,
    article,
    comment,
    guestbook,
    profile,
    music
  },
  actions: {
    // 初始化，自动执行
    nuxtServerInit (store) {
      return Promise.all([
        store.dispatch('ArticleBestList'),
        store.dispatch('TagList'),
        store.dispatch('CategoryList'),
        store.dispatch('MusicList')
      ])
    }
  }
})

export default store
