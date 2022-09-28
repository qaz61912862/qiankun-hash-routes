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

const isDev = process.env.NODE_ENV === 'development'

startQiankun([
  {
    name: 'vue-hash',
    entry: isDev ? '//localhost:8081' : '/test/sub1/index.html',
    container: '#subContainer',
    activeRule: isDev ? '#/vue-hash' : '/test/main/#/vue-hash/',
  }
])