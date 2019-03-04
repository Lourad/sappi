import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Auth from './packages/auth/Auth.js'
import axios from 'axios'
import jQuery from 'jquery'
global.$ = jQuery
// eslint-disable-next-line
let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(Auth)
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://127.0.0.1:8000'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
