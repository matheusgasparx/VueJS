// --- início rotas
import { createRouter, createWebHistory } from 'vue-router'
//   createWebHasHistory
import Contratos from '@/components/vendas/Contratos.vue'
import Dashboard from '@/components/dashboard/Dashboard.vue'
import DashboardRodape from '@/components/dashboard/DashboardRodape.vue'
import Home from '@/views/Home.vue'
import Indicadores from '@/components/servicos/Indicadores.vue'
import Lead from '@/components/vendas/Lead.vue'
import Leads from '@/components/vendas/Leads.vue'
import Login from '@/views/Login.vue'
import Opcoes from '@/components/servicos/Opcoes.vue'
import Servico from '@/components/servicos/Servico.vue'
import Servicos from '@/components/servicos/Servicos.vue'
import Site from '@/views/Site.vue'
import Vendas from '@/components/vendas/Vendas.vue'
import VendasPadrao from '@/components/vendas/VendasPadrao.vue'

const routes = [
    {
        path: '/home', //localhost:8080/home
        component: Home,
        children: [
            {
                path: 'vendas', component: Vendas, children:
                    [
                        { path: 'leads', component: Leads, name: 'leads' }, //localhost:8080/home/vendas/leads
                        { path: 'leads/:id', component: Lead, name: 'lead' }, //localhost:8080/home/vendas/lead/5
                        { path: 'contratos', component: Contratos, name: 'contratos' }, //localhost:8080/home/vendas/contratos
                        { path: '', component: VendasPadrao } //localhost:8080/home/vendas/
                    ]
            }, //localhost:8080/home/vendas
            { path: 'servicos', component: Servicos, name: 'servicos', children:
                    [
                        { path: ':id', name: 'servico', components:
                            {
                                default: Servico,
                                indicadores: Indicadores,
                                opcoes: Opcoes
                            }
                        } //localhost:8080/home/servicos/5
                    ]
            }, //localhost:8080/home/servicos
            { path: 'dashboard', components: 
                {
                    default: Dashboard,
                    rodape: DashboardRodape
                } 
            } //localhost:8080/home/dashboard
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