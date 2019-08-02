import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'
import Mock from './mock/api'

// axios.defaults.baseURL = 'http://127.0.0.1:80';
Vue.prototype.$axios = axios

Mock.init()
Vue.config.productionTip = false
Vue.use(VueCookies)
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')