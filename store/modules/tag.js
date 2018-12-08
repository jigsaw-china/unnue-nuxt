import { tagList } from '../api/tag'

const tag = {
  state: {
    list: [],
    map: {}
  },
  mutations: {
    SET_TAG_LIST: (state, list) => {
      state.list = list
      list.forEach(item => {
        state.map[item.alias] = item.id
      })
    }
  },
  actions: {
    // 列表
    async TagList({ commit }, data) {
      const result = await tagList(data)
      if (result.data.code === 1){
        const res = result.data.result
        commit('SET_TAG_LIST', res.list)
      }
    }
  }
}

export default tag
