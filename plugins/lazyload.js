import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'

// Vue.use(VueLazyload)

const loadimage = require('@/assets/icons/logo.webp')
const errorimage = require('@/assets/icons/logo.webp')

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: errorimage,
  loading: loadimage,
  attempt: 1,
})

new Vue({
  el: 'body',
  components: {
    App,
  },
})
