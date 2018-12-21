import { musicList } from "../api/music";

const _music = {
  state: {
    list: [],
    music: {},
    audio: {},
    curIndex: 0,
    pause: true,
    currentTime: 0,
    totalTime: 0,
    bufferedTime: 0,
    noFirst: false
  },
  mutations: {
    SET_MUSIC_LIST: (state, list) => {
      let i = list.length;
      while (i) {
        let j = Math.floor(Math.random() * i--);
        [list[j], list[i]] = [list[i], list[j]];
      }
      state.list = list
    },
    SET_MUSIC: (state) => {
      state.music = state.list[state.curIndex]
    },
    MUSIC_INIT: (state) => {
      if (state.audio.src) {
        return
      }
      state.audio = new Audio()
      state.audio.src = state.music.url

      // 只加载元数据
      state.audio.preload = 'metadata'
      state.audio.autoplay = 'autoplay'
      state.audio.volume = .8

      // 元数据加载后触发
      state.audio.onloadedmetadata = _ => {
        state.totalTime = state.audio.duration.toFixed(3) * 1000
        state.noFirst && state.audio.play()
      }

      // 开始播放时触发
      state.audio.onplay = _ => {
        state.pause = false
      }

      // 暂停时触发
      state.audio.onpause = _ => {
        state.pause = true
      }

      // 播放位置改变时触发
      state.audio.ontimeupdate = _ => {
        state.currentTime = state.audio.currentTime.toFixed(3) * 1000
        if (state.audio.readyState === 4) {
          state.bufferedTime = state.audio.buffered.end(0).toFixed(3) * 1000
        }
      }

      // 结尾时触发
      state.audio.onended = _ => {
        state.noFirst = true
        state.pause = true

        if (state.curIndex === state.list.length - 1) {
          state.curIndex = -1
        }
        state.audio.src = state.list[++state.curIndex].url

        state.music = state.list[state.curIndex]
      }

      // 数据加载期间发生错误
      state.audio.onerror = _ => {
        state.totalTime = 0
        console.warn('数据加载错误 😔')
      }
    },
    MUSIC_PLAY_OR_PAUSE: (state) => {
      if (state.pause) {
        state.audio.play()
      } else {
        state.audio.pause()
      }
    },
    MUSIC_PLAY_PREV: (state) => {
      state.noFirst = true
      state.pause = true

      if (state.curIndex === 0) {
        state.curIndex = state.list.length
      }
      state.audio.src = state.list[--state.curIndex].url

      state.music = state.list[state.curIndex]
    },
    MUSIC_PLAY_NEXT: (state) => {
      state.noFirst = true
      state.pause = true

      if (state.curIndex === state.list.length - 1) {
        state.curIndex = -1
      }
      state.audio.src = state.list[++state.curIndex].url

      state.music = state.list[state.curIndex]
    }
  },
  actions: {
    // 列表
    async MusicList({ commit }) {
      const result = await musicList()
      if (result.data.code === 1){
        const res = result.data.result
        commit('SET_MUSIC_LIST', res.list)
        commit('SET_MUSIC')
      }
    },
    // 初始化
    MusicInit({ commit }) {
      commit('MUSIC_INIT')
    },
    // 播放或暂停
    MusicPlayOrPause({ commit }) {
      commit('MUSIC_PLAY_OR_PAUSE')
    },
    // 上一首
    MusicPlayPrev({ commit }) {
      commit('MUSIC_PLAY_PREV')
    },
    // 下一首
    MusicPlayNext({ commit }) {
      commit('MUSIC_PLAY_NEXT')
    }
  }
}

export default _music
