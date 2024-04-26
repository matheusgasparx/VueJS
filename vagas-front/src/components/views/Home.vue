<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <PesquisarVaga></PesquisarVaga>
      </div>
    </div>

    <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
      <div class="col">
        <Vaga v-bind="vaga"></Vaga>
        <!-- :titulo="vaga.titulo"
        :descricao="vaga.descricao"
        :salario="vaga.salario"
        :modalidade="vaga.modalidade"
        :tipo="vaga.tipo"
        :publicacao="vaga.publicacao" -->
      </div>
    </div>

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
import Indicador from "@/components/comuns/Indicador.vue";
import PesquisarVaga from "@/components/comuns/PesquisarVaga.vue";
import Vaga from "@/components/comuns/Vaga.vue";

export default {
  name: "Home",
  components: {
    PesquisarVaga,
    Indicador,
    Vaga,
  },
  data: () => ({
    usuariosOnline: 0,
    vagas: [],
  }),
  methods: {
    getUsuariosOnline() {
      this.usuariosOnline = Math.floor(Math.random() * 101);
    },
  },

  created() {
    setInterval(this.getUsuariosOnline, 3000);
  },
  activated() {
    this.vagas = JSON.parse(localStorage.getItem("vagas"));
  },
  mounted() {
    // transforma a String em array de Objetos
    this.emitter.on("filtrarVagas", (vaga) => {
      const vagas = JSON.parse(localStorage.getItem("vagas"));
      this.vagas = vagas.filter((reg) =>
        reg.titulo.toLowerCase().includes(vaga.titulo.toLowerCase())
      ); // cria um array com todos os elementos
    });
  },
};
</script>
  
  <style></style>