import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Dashboard.vue'

Vue.use(VueRouter)

export default [
  {
    path: '/user/dashboard',
    name: 'all',
    component: Home
  }

]
