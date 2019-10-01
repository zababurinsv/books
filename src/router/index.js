import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/',
        component: resolve => require(['../components/index/index.vue'], resolve),
    },
    {
        path: '/catalog/',
        component: resolve => require(['../components/catalog/index.vue'], resolve),
    },
    {
        path: '/catalog/:one/',
        component: resolve => require(['../components/catalog/index.vue'], resolve),
    },
    {
        path: '*',
        component: resolve => require(['../components/error.vue'], resolve),
    }
]

export function createRouter () {
  return new Router({
    mode: 'history',
  	routes
  })
}