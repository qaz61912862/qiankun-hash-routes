import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WrapView from '../views/WrapView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/vue-hash',
    redirect: '/vue-hash/home'
  },
  {
    path: '/vue-hash',
    component: WrapView,
    children: [
      {
        path: 'home',
        name: 'home',
        component: HomeView
      },
      {
        path: 'about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      }
    ]
  }
]

export default routes