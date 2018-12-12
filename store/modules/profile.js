import { profile } from '../api/profile'

const _profile = {
  state: {
    profile: {}
  },
  mutations: {
    SET_PROFILE: (state, profile) => {
      state.profile = profile
    }
  },
  actions: {
    // 个人档
    async Profile({ commit }) {
      const result = await profile()
      if (result.data.code === 1){
        const res = result.data.result
        commit('SET_PROFILE', res)
      }
    }
  }
}

export default _profile
