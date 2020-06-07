import Vue from 'vue'
// eslint-disable-next-line no-unused-vars
import VueRouter, { RouteConfig } from 'vue-router'
import IndexPage from '@/components/pages/IndexPage.vue'
import AtomsPage from '@/components/pages/AtomsPage.vue'
import SamplePage from '@/components/pages/SamplePage.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'IndexPage',
    component: IndexPage
  },
  {
    path: '/atoms',
    name: 'AtomsPage',
    component: AtomsPage
  },
  {
    path: '/sample',
    name: 'SamplePage',
    component: SamplePage
  },
  {
    path: '/about',
    name: 'AboutPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // webpackChunkName: "about"
    component: () => import('@/components/pages/AboutPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
