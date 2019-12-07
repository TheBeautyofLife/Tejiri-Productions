import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Landscape.vue'

Vue.use(VueRouter)

export default [
  {
    path: '/work/landscape',
    name: 'all',
    component: Home
  }
]
