import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Service from '../views/Services.vue'

/**
* The are are routes modules
**/

// Image categories
import AllImagesRoutes from '../modules/All/router'
import LandImagesRoutes from '../modules/Landscape/router'
import UserRoutes from '../modules/User/router'

Vue.use(VueRouter)

const baseRoutes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/work',
    name: 'work',
    component: () => import('../views/Work.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/service',
    name: 'service',
    component: Service
  },
  {
    path: 'regiter',
    name: 'register',
    component: () => import('../views/Auth/Register.vue')
  }
]

const routes = baseRoutes.concat(AllImagesRoutes, LandImagesRoutes, UserRoutes)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
