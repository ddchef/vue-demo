import Vue from 'vue'
import router from './router/index'
import Router from 'vue-router'
import App from './app.vue'

Vue.use(Router)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
