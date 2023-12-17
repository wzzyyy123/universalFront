import {
  //创建路由的api
  createRouter,
  //创建路由的哈希历史模式
  createWebHashHistory
} from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/menu'
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    name: 'menu',
    path: '/menu',
    component: () => import('@/views/menu/index.vue'),
    // 嵌套路由 ，所有子页面都嵌套在菜单页面内
    children: [
      {
        name: 'home',
        path: '/home',
        component: () => import('@/views/home/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
