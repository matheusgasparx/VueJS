import { createApp } from 'vue'
import App from './App.vue'

const Vue = createApp(App)

Vue.directive('texto', {
    created(el, binding){

    if(binding.value?.cor) el.style.color = binding.value.cor
    if(binding.value?.tamanhofonte) el.style.fontSize = binding.value.tamanhofonte
    
    let totalCaracteres = 20
    if(binding.value?.totalCaracteres) totalCaracteres = binding.value.totalCaracteres

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

Vue.directive('posicao', {
    created(el, binding) {
        console.log(el, binding.arg, binding.value)

        const posicoesPossiveis = ['relative', 'fixed', 'absolute']

        if(posicoesPossiveis.includes(binding.arg)) {
            el.style.position = binding.arg
            el.style.top = `${binding.value}px`
        }
    }
})

Vue.mount('#app')