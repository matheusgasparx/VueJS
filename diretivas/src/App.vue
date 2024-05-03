<template>
  <div>
    <p>Sem diretiva</p>
    <h2 v-texto="{ cor: 'red', tamanhoFonte: '200%', totalCaracteres: 15 }">teste de priquito seco e azedo amargo cuscuz</h2>
    <h4 v-texto="configuracaoTexto">Arroz</h4>
    <div v-posicao:absolute="75" v-texto="{ cor: 'green' }">Pega o doido do binding de argumento e valor</div>
    <span>Código A:</span><input type="text"><span v-informacao:simples.umClickMouse.sairAutomaticamente="'Você esta modificando o cod A'">i</span>
    <br>
    <span>Código B:</span><input type="text"><span v-informacao:destacado.doisClickMouse.sairAutomaticamente="'O código B está na parte de trás'">i</span>
    <hr>
    <h1 v-colorir-fundo-texto="'lightgreen'"> Diretiva customizada localmente </h1>
  </div>
</template>

<script>
import colorirFundoTexto from '@/directives/colorirFundoTexto'

export default {
  name: 'App',
  directives: {
    colorirFundoTexto: colorirFundoTexto
  },
  data: () => ({
    configuracaoTexto: { cor: 'lightpink', tamanhoFonte: '300%', totalCaracteres: 5}
  })
}
</script>

<style></style>
 