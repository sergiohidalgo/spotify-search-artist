import Vue from 'vue'
import VueRouter from 'vue-router'

window.EventBus = new Vue;

import App from './App.vue'

import 'vue-awesome/icons/spotify'

// Components
import Icon from 'vue-awesome/components/Icon.vue'
import BtnLogin from './components/btn-login.vue'

// Views:
import Home from './views/home.vue'
import callbackSpotify from './views/search.vue'

Vue.component('icon', Icon)
Vue.component('btn-login', BtnLogin)

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/spotify-callback/', component: callbackSpotify },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

const app = new Vue({
    router
}).$mount('#app')


