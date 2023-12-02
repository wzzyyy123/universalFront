import { createApp } from 'vue'
import App from './App.vue'
//导入路由
import router from './router/index.js'
//导入element-plus的icon 
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//element-plus 国际化配置
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component)
}
app.use(ElementPlus, { locale: zhCn })

app.use(router).mount('#app')