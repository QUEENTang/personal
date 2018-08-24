import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Other from '../pages/Other'
import Classic from '../pages/Classic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/other',
      component: Other
    },
    {
      path: '/classic',
      component: Classic
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
