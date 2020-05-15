import Vue from 'vue'
import Router from 'vue-router'
import constantRoutes from './constantRoutes'
import asyncRoutes from './asyncRoutes'
import NProgress from 'nprogress' // 页面加载的进度条
import 'nprogress/nprogress.css'
import { SET_TOKEN } from '@/libraries/store/mutation-types'

Vue.use(Router)

const createRouter = () => new Router({
  mode: 'hash',
  // 当切换到新路由时，页面滚动
  scrollBehavior (to, from, savedPosition) {
    // savedPosition 通过浏览器的 前进/后退 按钮触发
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    ...constantRoutes,
    ...asyncRoutes
  ]
})

const router = createRouter()

// 详情请看: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // 重置路由
}

NProgress.configure({ showSpinner: false }) // NProgress配置

router.beforeEach(async (to, from, next) => {
  // 开始进度条
  NProgress.start()
  if (to.path !== '/login') {
    if (!Vue.ls.get(SET_TOKEN)) {
      next({
        path: '/login'
      })
      NProgress.done()
    } else {
      next()
    }
  } else {
    next()
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})

export default router
