/**
 * constantRoutes
 * 无需权限的路由
 */

export default [
  {
    name: 'login',
    path: '/login',
    hidden: true,
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index')
  },
  {
    name: '404',
    path: '/404',
    hidden: true,
    component: () => import(/* webpackChunkName: "404" */ '@/views/error-page/404')
  }
]
