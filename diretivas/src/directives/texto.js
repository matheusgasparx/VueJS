export default {
    created(el, binding) {

        if (binding.value?.cor) el.style.color = binding.value.cor
        if (binding.value?.tamanhofonte) el.style.fontSize = binding.value.tamanhofonte

        let totalCaracteres = 20
        if (binding.value?.totalCaracteres) totalCaracteres = binding.value.totalCaracteres

        let textoOriginal = el.innerText
        let tamanhoTextoOriginal = textoOriginal.length
        let textoAjustado = ''

        if (tamanhoTextoOriginal > totalCaracteres) {
            textoAjustado = textoOriginal.substring(0, 22) + '...'
        } else {
            textoAjustado = textoOriginal
        }

        el.innerText = textoAjustado
    }
}