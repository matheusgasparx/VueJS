<template>
    <div>
        <!--    
        <slot name="titulo" :dadosTitulo="{ titulo: 'Titulo Lista', nroVagas: 15 }">
            <p>Titulo da Lista de Vagas</p>
        </slot>
         -->
        <slot :vagas="vagas">
            <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
                <div class="col">
                    <Vaga v-bind="vaga"></Vaga>
                </div>
            </div>
        </slot>
    <!--     
        <slot name="rodape" :dadosRodape="{ titulo: 'Rodapé Lista', paginacao: { nroPaginas: 10, paginaAtual: 5 }}">
            <p>O rodapé da lista de vagas</p>
        </slot> 
    -->

    </div>
</template>

<script>
import Vaga from "@/components/comuns/Vaga.vue";

export default {
  name: "ListaVagas",
  data: () => ({
    vagas: []
  }),
  components: {
    Vaga
  },
  activated() {
    this.vagas = JSON.parse(localStorage.getItem("vagas"))
  },
  mounted() {
    // transforma a String em array de Objetos
    this.emitter.on("filtrarVagas", (vaga) => {
      const vagas = JSON.parse(localStorage.getItem("vagas"))
      this.vagas = vagas.filter((reg) =>
        reg.titulo.toLowerCase().includes(vaga.titulo.toLowerCase())
      ); // cria um array com todos os elementos
    });
  },
};
</script>

<style></style>