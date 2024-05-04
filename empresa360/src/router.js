// --- início rotas
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Site from '@/views/Site.vue'

const routes = [
    {
        path: '/home', //localhost:8080/home
        component: Home
    },
    {
        path: '/', //localhost:8080/site
        component: Site
    },
    {
        path: '/login', //localhost:8080/login
        component: Login
    }
] 

const router = createRouter({
    history: createWebHistory(),
    routes //routes: routes
})

// --- fim rotas

export default router