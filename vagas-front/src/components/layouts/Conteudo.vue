<template>
  <div>
    <keep-alive>
      <component :is="conteudo"></component>
    </keep-alive>
  </div>
</template>
  
  <script>
  import Home from '@/components/views/Home.vue';
  import PublicarVaga from '@/components/views/PublicarVaga.vue';

  export default {
    name: "Conteudo",
    props: {
      conteudo: {
        type: String,
        required: true
      }
    },
    components: {
      Home,
      PublicarVaga
    }
    /*
     beforeCreate() {
       console.log('antes de criar')
     },
     created() {
       console.log('criado', this.teste)
     },
     beforeMount() {
       console.log('antes de montar o template')
     },
     mounted() {
       console.log('montado')
     },
     beforeUpdate() {
       console.log('antes de atualizar')
     },
     updated() {
       console.log('atualizado')
     },
     beforeUnmount() {
       console.log('antes de desmontar')
     },
     unmounted() {
       console.log('desmontado')
     },
     errorCaptured() {
       console.log('erro capturado')
     },
     renderTracked() {
       console.log('re-renderização')
     },
     renderTriggered() {
       console.log('re-renderização acionada')
     },
     activated() {
       console.log('componente ativado')
     },
     deactivated() {
       console.log('componente desativado')
     }
    */
  };

</script>
  
  <style></style>
  