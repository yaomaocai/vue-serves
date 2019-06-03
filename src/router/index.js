import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home'
import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'
import 'normalize.css'

Vue.use(Router, mandMobile)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
