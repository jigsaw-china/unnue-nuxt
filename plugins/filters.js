import Vue from 'vue'
import * as moment from '~/plugins/moment'

const filters = {...moment}

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
