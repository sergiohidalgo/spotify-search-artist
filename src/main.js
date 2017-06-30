
import Vue from 'vue'
import App from './App.vue'

import 'vue-awesome/icons/spotify'

import Icon from 'vue-awesome/components/Icon.vue'
Vue.component('icon', Icon)


new Vue({
  el: '#app',
  render: h => h(App)
})

