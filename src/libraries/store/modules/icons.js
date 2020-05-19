import { ICONS_MAP } from '../mutation-types'

const state = {
  iconsMap: []
}

const getters = {
  iconsMap: state => state.iconsMap.map((i) => {
    return i.default.id.split('-')[1] // svg 数组
  })
}

const mutations = {
  [ICONS_MAP]: (state, iconsMap) => {
    state.iconsMap = iconsMap
  }
}

export default {
  state,
  mutations,
  getters
}
