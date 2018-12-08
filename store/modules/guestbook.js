import { guestbookList, guestbook } from '../api/guestbook'

const _guestbook = {
  state: {
    list: []
  },
  mutations: {
    SET_GUESTBOOK_LIST: (state, list) => {
      state.list = list
    }
  },
  actions: {
    // 列表
    async GuestbookList({ commit }) {
      const result = await guestbookList()
      if (result.data.code === 1){
        const res = result.data.result
        commit('SET_GUESTBOOK_LIST', res.list)
      }
    },
    // 留言
    async Guestbook({ commit, state }, data) {
      const result = await guestbook(data)
      if (result.data.code === 1){
        commit('SET_GUESTBOOK_LIST', [ result.data.result, ...state.list ])
      }
			return result
    },
  }
}

export default _guestbook
