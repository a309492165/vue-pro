// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入路由/axios（模块）
import store from './store'
import router from './router'
import axios from './request/http-server'
// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(ElementUI);
 
// 指令设置浏览器标题（标签插入时）
Vue.directive('title', {
  inserted: function (el, binding) {
    // console.log(el.dataset);
    // console.log(binding);
    document.title = el.dataset.title
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  store,
  // template: '<App/>'
  render(h) {
    return h('App')
  }
})
