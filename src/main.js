import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.withCredentials = true


Vue.config.productionTip = false
Vue.prototype.$axios = axios;
// axios.defaults.baseURL = "/api"
// axios.defaults.baseURL = "http://159.138.11.4:8081"


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
