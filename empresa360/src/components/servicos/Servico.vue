<template>
    <div class="card">
        <div class="card-header bg-primary text-white">{{ dados.servico }}</div>
        <div class="card-body">
            <p class="card-text">{{ dados.descricao }}</p>
        </div>
    </div>
  </template>
  
  <script>
  import ApiMixin from "../mixins/ApiMixin"
  
  export default {
    name: "Servico",
    mixins: [ApiMixin],
    created() {
      // console.log('Servico', this.$route.params.id)
      this.getDadosApi(`http://localhost:3000/servicos/${this.$route.params.id}`)
    },
    // watch: {                         // metodo 1
    //     $route(to) { // aqui acompanha os cards num ciclo já criado, sem necessidade de recriar
    //         if( to.params.id != undefined ) this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`) 
    //     }
    // }
    beforeRouteUpdate(to, from, next) { // metodo 2
        // to = $route para onde estamos indo
        // from = $route de onde estamos vindo
        // next = faz com que o fluxo de navegação siga em frente
        if( to.params.id != undefined ) this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`)
        next()
    }
  };
  </script>
  
  <style>
  </style>
  