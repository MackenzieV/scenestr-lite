import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import router from './router/index.js'

Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
