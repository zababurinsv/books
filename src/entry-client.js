import { createApp } from './app'
import Vue from 'vue'

const { app, router, store } = createApp()

import firebase from 'firebase/app';
import 'firebase/auth';
import { config } from './config/firebaseConfig.js'

firebase.initializeApp(config)

import { screenControl } from "./util/resize.js"
import { mouseControl } from "./util/mouse.js"
import { keysControl } from "./util/keys.js"

import { auth } from "./util/auth.js"

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

screenControl.set(app.$store)
screenControl.event(app.$store)
mouseControl.scroll(app.$store)
mouseControl.coordinates(app.$store)
keysControl.event(app.$store)

app.$store.commit( 'sysWindowLoaded', true )

auth.changeState(app.$store, this)

Vue.mixin({
  beforeRouteUpdate (to, from, next) {
    const { asyncData } = this.$options
    if (asyncData) {
      asyncData({
        store: this.$store,
        route: to
      }).then(next).catch(next)
    } else {
      next()
    }
  }
})

router.onReady(() => {

  router.beforeResolve((to, from, next) => {

    const componentsMatched = router.getMatchedComponents(to)
    const componentsPrevMatched = router.getMatchedComponents(from)
    let diffed = false

    const activated = componentsMatched.filter((c, i) => {
      return diffed || (diffed = (componentsPrevMatched[i] !== c))
    })
    if (!activated.length) {
      return next()
    }
    Promise.all(activated.map(c => {
      if (c.asyncData) {
        return c.asyncData({ store, route: to })
      }
    }))
    .then(() => {
      next()
    })
    .catch(next)
  })
  app.$mount('#app')
})