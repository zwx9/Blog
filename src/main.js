// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

// var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8081/'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

new Vue({
  el: '#select_sex',
  data:{
    gender: ''
  },
  router,
  components: { Register },
  template: '<Register/>'
})
