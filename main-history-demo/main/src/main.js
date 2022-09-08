import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import startQiankun from '@/utils/registerMicroApps'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

startQiankun([
  {
    name: 'vue-hash',
    entry: '//localhost:8081',
    container: '#subContainer',
    activeRule: '/vue-hash',
  },
  {
    name: 'vue-history',
    entry: '//localhost:8082',
    container: '#subContainer',
    activeRule: '/vue-history',
  }
])