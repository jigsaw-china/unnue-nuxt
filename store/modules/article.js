import { articleList, articleDetail, articleLike } from '../api/article'

const article = {
  state: {
    list: [],
    bestList: [],
    historyLikes: [],
    pageCount: 1,
    currencyPage: 1,
    where: '',
    detail: {}
  },
  mutations: {
    SET_ARTICLE_LIST: (state, list) => {
      state.list = list
    },
    SET_ARTICLE_PAGE: (state, {currencyPage, pageCount}) => {
      state.currencyPage = currencyPage
      state.pageCount = pageCount
    },
    SET_ARTICLE_WHERE: (state, where) => {
      state.where = where
    },
    SET_ARTICLE_BEST_LIST: (state, list) => {
      state.bestList = list
    },
    SET_ARTICLE_DETAIL: (state, detail) => {
      detail.liked = false
      state.detail = detail
    },
    SET_HISTORY_LIKES: (state, ids) => {
      state.historyLikes = ids
    },
    ARTICLE_LIKE: (state, val) => {
      state.detail.liked = true
      state.detail.likeCount += val
    },
    ARTICLE_COMMENT: (state, val) => {
      state.detail.commentCount += val
    }
  },
  actions: {
    // 列表
    async ArticleList({ commit }, params) {
      const result = await articleList(params)
      if (result.data.code === 1){
        const res = result.data.result
        commit('SET_ARTICLE_LIST', res.list)
        commit('SET_ARTICLE_PAGE', { currencyPage: params ? +params.page : 1, pageCount: res.pageCount })
      }
    },
    // 列表(搜索)
    async SearchArticleList({ state, commit }, params) {
      const result = await articleList(params)
      if (result.data.code === 1){
        const res = result.data.result
        commit('SET_ARTICLE_LIST', res.list)
        commit('SET_ARTICLE_WHERE', `search/${params.keyword}`)
        commit('SET_ARTICLE_PAGE', { currencyPage: params ? +params.page : 1, pageCount: res.pageCount })
      }
    },
    // 列表(标签)
    async TagArticleList({ state, commit, rootState }, params) {
      const tag_id = rootState.tag.map[params.alias]
      const result = await articleList({ tag_id, page: params.page })
      if (result.data.code === 1){
        const res = result.data.result
        commit('SET_ARTICLE_LIST', res.list)
        commit('SET_ARTICLE_WHERE', `tag/${params.alias}`)
        commit('SET_ARTICLE_PAGE', { currencyPage: params ? +params.page : 1, pageCount: res.pageCount })
      }
    },
    // 列表(分类)
    async CategoryArticleList({ state, commit, rootState }, params) {
      const category_id = rootState.category.map[params.alias]
      const result = await articleList({ category_id, page: params.page })
      if (result.data.code === 1){
        const res = result.data.result
        commit('SET_ARTICLE_LIST', res.list)
        commit('SET_ARTICLE_WHERE', `category/${params.alias}`)
        commit('SET_ARTICLE_PAGE', { currencyPage: params ? +params.page : 1, pageCount: res.pageCount })
      }
    },
    // 推荐列表
    async ArticleBestList({ commit }) {
      const result = await articleList({ is_best: true })
      if (result.data.code === 1){
        const res = result.data.result
        commit('SET_ARTICLE_BEST_LIST', res.list)
      }
    },
    // 详情
    async ArticleDetail({ commit }, params) {
      const result = await articleDetail(params.id)
      if (result.data.code === 1){
        const res = result.data.result
        commit('SET_ARTICLE_DETAIL', res)
      }

      return result
    },
    // 清除详情
    async ClearArticleDetail({ commit }) {
      commit('SET_ARTICLE_DETAIL', {})
    },
    // 点赞历史记录
    async HistoryLikes({ commit, state }) {
      const historyLikes = localStorage.getItem('history_like_article')
      if (historyLikes) {
        commit('SET_HISTORY_LIKES', historyLikes)
        if (historyLikes.includes(state.detail.id)){
          commit('ARTICLE_LIKE', 0)
        }
      }
    },
    // 点赞
    async ArticleLike({ commit, state }) {
      if (state.detail.liked) {
        return
      }
      const result = await articleLike({id: state.detail.id})
      if (result.data.code === 1){
        commit('ARTICLE_LIKE', 1)
        localStorage.setItem('history_like_article', [state.historyLikes, state.detail.id])
      }
    },
  }
}

export default article
