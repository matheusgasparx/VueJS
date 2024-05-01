import { createApp } from 'vue'
import App from './App.vue'

const Vue = createApp(App)

Vue.directive('texto', {
    created(el, biding){

    if(biding.value?.cor) el.style.color = biding.value.cor
    if(biding.value?.tamanhofonte) el.style.fontSize = biding.value.tamanhofonte
    
    let totalCaracteres = 20
    if(biding.value?.totalCaracteres) totalCaracteres = biding.value.totalCaracteres

    let textoOriginal = el.innerText
    let tamanhoTextoOriginal = textoOriginal.length
    let textoAjustado = ''

    if(tamanhoTextoOriginal > totalCaracteres) {
        textoAjustado = textoOriginal.substring(0, 22) + '...'
    } else {
        textoAjustado = textoOriginal
    }

    el.innerText = textoAjustado
  }
}) 

Vue.mount('#app')