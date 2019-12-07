import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/All.vue'

Vue.use(VueRouter)

export default [
  {
    path: '/work/all',
    name: 'all',
    component: Home
  }

]
