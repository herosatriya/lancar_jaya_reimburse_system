import Vue from 'vue'
import App from './App.vue'
// import bendahara from './views/bendahara.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// new Vue({
//   router,
//   render: h => h(bendahara)
// }).$mount('#app')
