import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'

// Import af views til routing

import Start from '@/views/Start.vue'
import Vue from '@/views/Vue.vue'
import Templates from '@/views/Templates.vue'
import Straffeattest from '@/views/Straffeattest.vue'
import Borneattest from '@/views/Borneattest.vue'

// Opsætning af URL routing

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', 
            name: "Start",
            component: Start
        },        
        {
            path: '/vue', 
            name: "Vue",
            component: Vue
        },
        {
            path: '/templates', 
            name: "Templates",
            component: Templates
        },
        {
            path: '/orders/borneattest', 
            name: "Børneattester",
            component: Borneattest
        },
        {
            path: '/orders/straffeattest', 
            name: "Straffeattester",
            component: Straffeattest
        }
    ]
})

createApp(App)
.use(router)
.mount('#app')
