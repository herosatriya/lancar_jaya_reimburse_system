import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import Bendahara from './views/bendahara.vue'
import PA_Module from './views/PA_Module.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/bendahara',
    //   name: 'bendahara',
    //   component: Bendahara
    // },
    {
      path: '/',
      name: 'PA_Module',
      component: PA_Module
    }
  ]
})
