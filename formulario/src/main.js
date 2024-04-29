import { createApp } from 'vue'
import App from './App.vue'
import Maska from 'maska'
import moment from 'moment'

// createApp(App).mount('#app')

const app = createApp(App)

app.use(Maska) // plugins ao vue
app.config.globalProperties.$moment = moment // dispõe de forma global o moment
app.config.globalProperties.$moment.locale('pt-br')

app.mount('#app')