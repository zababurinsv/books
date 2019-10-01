import Vue from 'vue'
import Meta from 'vue-meta'
import { createRouter } from './router'
import { createStore } from './store'
import { sync } from 'vuex-router-sync'

Vue.use(Meta)

import App from './App.vue'

export function createApp () {

  const router = createRouter()
  const store = createStore()

  sync(store, router)
  const app = new Vue({
    data: {
      name: 'demo'
    },
    router,
    store,
    render: h => h(App)
  })
  return {
    app,
    router,
    store
  }
}