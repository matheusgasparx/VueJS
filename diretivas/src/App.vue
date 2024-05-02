<template>
  <div>
    <p>Sem diretiva</p>
    <h2 v-texto="{ cor: 'red', tamanhoFonte: '200%', totalCaracteres: 15 }">teste de priquito seco e azedo amargo cuscuz</h2>
    <h4 v-texto="configuracaoTexto">Arroz</h4>
    <div v-posicao:absolute="75" v-texto="{ cor: 'green' }">Pega o doido do binding de argumento e valor</div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    configuracaoTexto: { cor: 'lightpink', tamanhoFonte: '300%', totalCaracteres: 5}
  })
}
</script>

<style></style>
 