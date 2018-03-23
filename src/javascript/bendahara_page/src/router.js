import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Admin from './views/admin.vue'
import Bendahara from './views/bendahara.vue'
import BendaharaAdmin from './views/bendaharaadmin.vue'
import Master from './views/master.vue'

Vue.use(Router)

export default new Router({
  routes: [
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
      path: '/bendahara',
      name: 'bendahara',
      component: Bendahara
    },
    {
      path: '/master',
      name: 'master',
      component: Master
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/bendaharaadmin',
      name: 'bendaharaadmin',
      component: BendaharaAdmin
    }
    
  ]
})
