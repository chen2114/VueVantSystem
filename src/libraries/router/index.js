import Vue from 'vue'
import Router from 'vue-router'
import constantRoutes from './constantRoutes'
import asyncRoutes from './asyncRoutes'
import NProgress from 'nprogress' // 页面加载的进度条
import 'nprogress/nprogress.css'
import store from '@/libraries/store'
import { SET_TOKEN } from '@/libraries/store/mutation-types'

// 对Router原型链上的push、replace方法进行重写，解决控制台 Uncaught (in promise) 报错
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

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
      if (store.getters.userInfo.role) {
        next()
      } else {
        try {
          await store.dispatch('getUserInfo')
          // 设置replace:true，这样导航就不会留下历史记录
          next({ ...to, replace: true })
        } catch (error) {
          await store.dispatch('resetToken')
          next({
            path: '/login'
          })
          NProgress.done()
        }
      }
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
