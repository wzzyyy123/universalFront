import {
	//创建路由的api
	createRouter,
	//创建路由的哈希历史模式
	createWebHashHistory
} from 'vue-router'

const routes = [{
		path: '/',
		redirect: '/login'
	},
	{
		name: 'login',
		path: '/login',
		component: () => import('@/views/login/index.vue')
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router