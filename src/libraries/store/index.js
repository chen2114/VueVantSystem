import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import modules from './modules'

Vue.use(Vuex)

const strict = process.env.NODE_ENV !== 'production' // 是否开启严格模式

export default new Vuex.Store({
  getters,
  modules,
  strict
})
