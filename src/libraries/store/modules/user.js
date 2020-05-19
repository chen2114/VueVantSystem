import Vue from 'vue'
import { httpGet } from '@/utils/request'
import { Notify } from 'vant'
import router, { resetRouter } from '@/libraries/router'
import {
  SET_TOKEN,
  USER_INFO
} from '../mutation-types'

const state = {
  token: Vue.ls.get(SET_TOKEN),
  userInfo: {}
}

const mutations = {
  [SET_TOKEN]: (state, token) => {
    state.token = token
    Vue.ls.set(SET_TOKEN, token)
  },
  [USER_INFO]: (state, userInfo) => {
    state.userInfo = userInfo
  }
}

const getters = {
  token: state => state.token || Vue.ls.get(SET_TOKEN), // 登录token
  userInfo: state => state.userInfo // 用户信息
}

const actions = {
  // 登录
  login ({ commit, dispatch }, { url, payload }) {
    return new Promise((resolve, reject) => {
      httpGet(url, payload)
        .then(res => {
          if (res.code === 20000) {
            commit(SET_TOKEN, res.data.token)
            router.push({
              name: 'home'
            })
            resolve()
          } else {
            Notify({
              message: res.message || 'Error',
              type: 'danger'
            })
            router.push({
              name: 'login'
            })
            reject(res)
          }
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  // 退出
  logout ({ commit, dispatch }) {
    const url = '/logout'
    return new Promise((resolve, reject) => {
      httpGet(url)
        .then(res => {
          if (res.code === 20000) {
            dispatch('resetToken')
            router.push({
              name: 'login'
            })
            resetRouter()
            resolve()
          } else {
            reject(res)
          }
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  // 获取用户信息
  getUserInfo ({ commit, getters }) {
    return new Promise((resolve, reject) => {
      const url = '/user/getUserInfo'
      const payload = {
        token: getters.token
      }
      httpGet(url, payload).then(res => {
        if (res.code === 20000) {
          commit(USER_INFO, res.data)
          resolve(res.data)
        } else {
          Notify({
            message: res.message || 'Error',
            type: 'danger'
          })
          reject(res)
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 重置
  resetToken ({ commit }) {
    return new Promise(resolve => {
      commit(SET_TOKEN, '')
      commit(USER_INFO, {})
      Vue.ls.clear()
      resolve()
    })
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
