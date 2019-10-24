import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout/Layout'
import Login from '@/components/login/Login'

import Test from './test' // 路由分离测试
Vue.use(Router);

const router = new Router({
    mode:'history',
    routes: [
        { 
            path: '/', 
            component: Layout ,
            children:[
                {path: 'main', name:'main',component:() => import('@/components/main/Main.vue')},
            ]
        },
        { 
            path: '/login', 
            name:'login',
            component: Login 
        },
        {...Test},
        { path: '*', redirect: '/' },
    ]
})
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

router.beforeEach((to, from, next) => {
    let token = sessionStorage.getItem('token')
    if (to.path === '/login') {
        next()
    } else {
        if (token == 1) {
            next()
        } else {
            next('/login')
        }
    }
})

export default router