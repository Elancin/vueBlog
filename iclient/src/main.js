// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import App from './App'

Vue.config.productionTip = false

Vue.use(VueRouter)

// 创建路由
const router=new VueRouter({
  routes: Routes,
  mode:'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
