import { commentList, comment } from '../api/comment'

const _comment = {
  state: {
    list: []
  },
  mutations: {
    SET_COMMENT_LIST: (state, list) => {
      state.list = list
    }
  },
  actions: {
    // 列表
    async CommentList({ commit }, data) {
      const result = await commentList(data)
      if (result.data.code === 1){
        const res = result.data.result
        commit('SET_COMMENT_LIST', res.list)
      }
    },
    // 评论
    async Comment({ commit, state }, data) {
      const result = await comment(data)
      if (result.data.code === 1){
        commit('SET_COMMENT_LIST', [ result.data.result, ...state.list ])
        commit('ARTICLE_COMMENT', 1)
      }
			return result
    },
  }
}

export default _comment
