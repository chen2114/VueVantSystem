import Vue from 'vue'
import App from './App.vue'

import './libraries/storage' // 本地存储
import router from './libraries/router'
import store from './libraries/store'

import 'lib-flexible' // 用于设置 rem 基准值
import './libraries/vant' // 引入 vant

import './components' // 引入全局组件

// 导入 SVG
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg/', true, /\.svg$/)
requireAll(req)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
