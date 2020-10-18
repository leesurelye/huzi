import Vue from 'vue'
import App from './App.vue'
import router from './router'
import echarts from "echarts"
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import {message} from 'element-ui'
import '@/assets/css/global.css'


Vue.prototype.$message = message
Vue.config.productionTip = false
// 引入echarts
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')