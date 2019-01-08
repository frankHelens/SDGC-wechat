import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/containers/Home'
import CarChange from '@/containers/CarChange'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/carChange',
      name: 'carChange',
      component: CarChange
    }
  ]
})
