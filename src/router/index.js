import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/jurisdiction',
    component: Layout,
    redirect: '/jurisdiction/table',
    name: 'Gurisdiction',
    meta: { title: '权限管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '角色管理', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '用户管理', icon: 'tree' }
      }
    ]
  },
  {
    path: '/fill',
    component: Layout,
    redirect: '/fill',
    name: 'Fill',
    meta: { title: '数据录入', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'sala',
        name: 'Sala',
        component: () => import('@/views/Fill/Sale'),
        meta: { title: '销售分析', icon: 'table' }
      },
      {
        path: 'purchase',
        name: 'Purchase',
        component: () => import('@/views/Fill/Purchase'),
        meta: { title: '采购分析', icon: 'tree' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: '其他',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: '类目1' }
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: '类目2' }
      }
    ]
  },
  {
    path: '/log',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Log',
        component: () => import('@/views/form/index'),
        meta: { title: '操作日志', icon: 'form' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
