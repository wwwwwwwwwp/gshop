/*
    路由器对象模块
*/

import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
    //配置所有路由
    routes: [
        {
            path: '/msite',
            component: Msite,
            //可以给路由设置属性，这里为了区分是否加footer组件
            meta: {
                showFooter: true
            }
        },
        {
            path: '/order',
            component: Order,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/search',
            component: Search,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/profile',
            component: Profile,
            meta: {
                showFooter: true
            }
        },
        {//设置默认显示页面
            path: '/',
            redirect: '/msite'
        },
        {
            path: '/login',
            component: Login
        },

    ]


})


