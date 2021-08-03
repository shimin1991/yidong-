import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// 2. 手动安装 VueRouter 
Vue.use(VueRouter)
import router from './router.js'
Vue.config.productionTip = false
import 'lib-flexible'
new Vue({
  render: h => h(App),
     router
}).$mount('#app')
