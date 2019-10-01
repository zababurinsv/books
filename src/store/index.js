import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import sys from './sys/index.js'
import user from './user/index.js'
import catalog from './catalog/index.js'

export const createStore = () => {
    const store = new Vuex.Store({
        modules: {
            sys,
            user,
            catalog
        },

    }) 

    return store
}
