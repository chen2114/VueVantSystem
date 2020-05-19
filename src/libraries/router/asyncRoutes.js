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

// 图标
const icons = () =>
  import(/* webpackChunkName: "icons" */ '@/views/icons/index')

// 用户
const user = () =>
  import(/* webpackChunkName: "user" */ '@/views/user/index')

// 表单
const form = () =>
  import(/* webpackChunkName: "form" */ '@/views/form/index')

export default [
  {
    path: '/',
    redirect: '/home',
    component: layout,
    children: [
      {
        name: 'home',
        path: 'home',
        component: home,
        meta: {
          label: '主页',
          icon: 'dashboard',
          requireAuth: true
        }
      }
    ]
  },
  {
    path: '/icons',
    redirect: '/icons/index',
    component: layout,
    children: [
      {
        name: 'icons',
        path: 'index',
        component: icons,
        meta: {
          label: '图标',
          icon: 'icon',
          requireAuth: true
        }
      }
    ]
  },
  {
    path: '/user',
    redirect: '/user/index',
    component: layout,
    children: [
      {
        name: 'user',
        path: 'index',
        component: user,
        meta: {
          label: '用户',
          icon: 'user',
          requireAuth: true
        }
      }
    ]
  },
  {
    name: 'form',
    path: '/form',
    component: form,
    hidden: true,
    meta: {
      label: '表单',
      requireAuth: true
    }
  },
  { // 注意：404 页面一定要最后加载，否则后面的所以页面都会被拦截到 404
    path: '*',
    redirect: '/404',
    hidden: true
  }
]
