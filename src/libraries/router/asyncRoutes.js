/**
 * asyncRoutes
 * 需要根据用户角色动态加载的路由
 */

/**
 * hidden               如果设置为true，则该路由不会显示在侧边栏中（默认为false）
 * componentName        绑定的组件名称
 * meta: {
 *  icon: 'svg-name'    侧栏中的图标
 *  label: 'label'      侧栏显示的名称
 *  requireAuth: true   如果设置为true，则为用户具有该页面的权限（默认为true）
 * }
 */

const layout = () =>
  import(/* webpackChunkName: "layout" */ '@/layout/index')

// 主页
const home = () =>
  import(/* webpackChunkName: "home" */ '@/views/home/index')

export const componentMap = {
  layout,
  // 主页
  home
}

export default [
  {
    path: '/',
    redirect: '/home',
    component: layout,
    componentName: 'layout',
    children: [
      {
        name: 'home',
        path: 'home',
        component: home,
        componentName: 'home',
        meta: {
          label: '主页',
          icon: 'dashboard',
          requireAuth: true
        }
      }
    ]
  },
  { // 注意：404 页面一定要最后加载，否则后面的所以页面都会被拦截到 404
    path: '*',
    redirect: '/404',
    hidden: true
  }
]
