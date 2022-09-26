// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import VueRouter from 'vue-router'
import Routes from './routes'
import App from './App'

Vue.config.productionTip = false

Vue.use(VueRouter)
// 自定义指令
Vue.directive('theme', {
  bind(el,binding,vnode){
    if(binding.value=='wide'){
      el.style.maxWidth='800px';
    }
    else if(binding.value=='narrow'){
      el.style.maxWidth='500px';
    }
    if(binding.arg=='column'){
      el.style.border='1px solid #aaa';
      el.style.padding='20px';
    }
  }
})

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
