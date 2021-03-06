import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from './views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    meta: { title: 'Dashboard', icon: 'example' },
    children: [{
      path: 'dashboard',
      meta: { title: 'Dashboard', icon: 'example' },
      component: () => import('@/views/dashboard/index')
    }]
  },

  {
    path: '/manager',
    component: Layout,
    redirect: '/manager',
    name: 'manager',
    meta: { title: '管理员管理', icon: 'example' },
    children: [{
      path: '',
      name: 'manager-index',
      meta: { title: '管理员列表', icon: 'example' },
      component: () => import('@/views/manager/index')
    }]
  },

  {
    path: '/type',
    component: Layout,
    redirect: '/type',
    name: 'type',
    meta: { title: '分类管理', icon: 'example' },
    children: [{
      path: '',
      name: 'type-index',
      meta: { title: '分类列表', icon: 'example' },
      component: () => import('@/views/type/index')
    }]
  },

  {
    path: '/tag',
    component: Layout,
    redirect: '/tag',
    name: 'tag',
    meta: { title: '标签管理', icon: 'example' },
    children: [{
      path: '',
      name: 'tag-index',
      meta: { title: '标签列表', icon: 'example' },
      component: () => import('@/views/tag/index')
    }]
  },

  {
    path: '/post',
    component: Layout,
    redirect: '/post',
    name: 'post',
    meta: { title: '文章管理', icon: 'example' },
    children: [{
      path: '',
      name: 'post-index',
      meta: { title: '文章列表', icon: 'example' },
      component: () => import('@/views/post/index')
    }, {
      path: 'add',
      name: 'post-add',
      hidden: true,
      meta: { title: '新增文章', icon: 'example' },
      component: () => import('@/views/post/detail')
    }, {
      path: 'edit',
      name: 'post-edit',
      hidden: true,
      meta: { title: '修改文章', icon: 'example' },
      component: () => import('@/views/post/detail')
    }]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  mode: 'history', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
