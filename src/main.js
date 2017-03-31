import jquery from 'jquery'
import tether from 'tether'
import bootstrap from 'bootstrap'
import lodash from 'lodash';

// window._ = window.lodash = lodash;

import './scss/base.scss';
import ga from 'vue-ga'

import VueRouter from 'vue-router'
import routes from './routes.js'
Vue.use(VueRouter)

import Meta from 'vue-meta'
Vue.use(Meta)

import store from '@/feeds';
import VueStash from 'vue-stash';
Vue.use(VueStash)

import Vue from 'vue'
import App from './App'

const router = new VueRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
    linkActiveClass: 'active',
    base: __dirname,
    routes: routes
})

//ga(router, 'UA-10798495-19')




var vue = new Vue({
    el: '#app',
    router,
    data: { store },
    template: '<App/>',
    components: { App }
}).$mount('#app')
