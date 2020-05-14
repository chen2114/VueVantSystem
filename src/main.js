import Vue from 'vue'
import App from './App.vue'
import router from './libraries/router'
import store from './libraries/store'
import './libraries/vant'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
