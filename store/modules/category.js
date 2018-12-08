import { categoryList } from '../api/category'

const category = {
  state: {
    list: [],
    map: {}
  },
  mutations: {
    SET_CATEGORY_LIST: (state, list) => {
      state.list = list
      list.forEach(item => {
        state.map[item.alias] = item.id
      })
    }
  },
  actions: {
    // 列表
    async CategoryList({ commit }, data) {
      const result = await categoryList(data)
      if (result.data.code === 1){
        const res = result.data.result
        commit('SET_CATEGORY_LIST', res.list)
      }
    }
  }
}

export default category
