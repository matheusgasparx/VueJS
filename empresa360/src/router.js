// --- início rotas
import { createRouter, createWebHistory } from 'vue-router'
//   createWebHasHistory
import Contratos from '@/components/vendas/Contratos.vue'
import Dashboard from '@/components/dashboard/Dashboard.vue'
import Home from '@/views/Home.vue'
import Leads from '@/components/vendas/Leads.vue'
import Login from '@/views/Login.vue'
import Servicos from '@/components/servicos/Servicos.vue'
import Site from '@/views/Site.vue'
import Vendas from '@/components/vendas/Vendas.vue'

const routes = [
    {
        path: '/home', //localhost:8080/home
        component: Home,
        children: [
            { path: 'vendas', component: Vendas, children: 
                [
                    { path: 'leads', component: Leads}, //localhost:8080/home/vendas/leads
                    { path: 'contratos', component: Contratos} //localhost:8080/home/vendas/contratos
                ]
            }, //localhost:8080/home/vendas
            { path: 'servicos', component: Servicos }, //localhost:8080/home/servicos
            { path: 'dashboard', component: Dashboard } //localhost:8080/home/dashboard
        ]
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