import Vue from 'vue'
import Router from 'vue-router'

import home from '../views/home.vue'

Vue.use(Router)

export const constantRouterMap = [
    { path: '', name: 'home', component: home }
]

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
})