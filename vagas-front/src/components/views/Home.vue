<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <PesquisarVaga></PesquisarVaga>
      </div>
    </div>

    <ListaVagas>

      <!-- <template v-slot:titulo="slotProps">
        {{ slotProps.dadosTitulo.titulo }}
        <hr>
      </template>

      <template v-slot:default="slotProps">
        {{ slotProps.vagas }}
        <hr>
      </template>

      <template v-slot:rodape="slotProps">
        {{ slotProps.dadosRodape.titulo }}
        <hr>
      </template> -->

    </ListaVagas>

    <div class="row mt-5">
      <div class="col-4">
        <Indicador
          titulo="Vagas Abertas"
          indicador="100"
          bg="bg-dark"
          color="text-white"
        ></Indicador>
      </div>

      <div class="col-4">
        <Indicador
          titulo="Profissionais Cadastrados"
          indicador="125"
          bg="bg-dark"
          color="text-white"
        ></Indicador>
      </div>

      <div class="col-4">
        <Indicador
          titulo="Visitantes Online"
          :indicador="usuariosOnline"
          bg="bg-light"
          color="text-dark"
        ></Indicador>
      </div>
    </div>
  </div>
</template>
  
  <script>
import Indicador from "@/components/comuns/Indicador.vue"
import ListaVagas from "../comuns/ListaVagas.vue"
import PesquisarVaga from "@/components/comuns/PesquisarVaga.vue"

export default {
  name: "Home",
  components: {
    PesquisarVaga,
    Indicador,
    ListaVagas
  },
  data: () => ({
    usuariosOnline: 0
  }),
  methods: {
    getUsuariosOnline() {
      this.usuariosOnline = Math.floor(Math.random() * 101);
    },
  },

  created() {
    setInterval(this.getUsuariosOnline, 3000);
  }
};
</script>
  
<style></style>