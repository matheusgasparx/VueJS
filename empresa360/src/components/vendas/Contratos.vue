<template>
  <div>
    <div class="card mb-4">
      <div class="card-header">Contratos</div>
      <div class="card-body">
        <div class="row">
          <div class="col-6">
            <label class="form-label">ID Contrato:</label>
            <input type="text" class="form-control" v-model="formPesquisa.id_like" />
          </div>
          <div class="col-6">
            <label class="form-label">Data início:</label>
            <div class="input-group">
              <input type="date" class="form-control" v-model="formPesquisa.data_inicio_gte"/>
              <input type="date" class="form-control" v-model="formPesquisa.data_inicio_lte"/>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-primary" @click="pesquisar">Pesquisar</button>
      </div>
    </div>
    <!-- 
    <router-link class="btn btn-primary m-1" :to="{ name: 'contratos', query: { leadId_like: 1 } }">LeadId = 1</router-link>
                   ou 
    <router-link class="btn btn-primary m-1" to="/home/vendas/contratos?servicoId_like=2">ServicoId = 2</router-link>
    //
    <router-link class="btn btn-success m-1" :to="{ name: 'contratos', query: { leadId_like: 1, servicoId_like: 2 } }">Lead = 1 e servicoId = 2</router-link>
                   ou 
    <router-link class="btn btn-success m-1" to="/home/vendas/contratos?servicoId_like=2&leadId_like=2">ServicoId = 2 e leadId = 2</router-link> 
-->

    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">LEAD</th>
          <th scope="col">SERVIÇO</th>
          <th scope="col">DATA INICIO</th>
          <th scope="col">DATA FIM</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="d in dados" :key="d.id">
          <td>{{ d.id }}</td>
          <td>{{ d.lead.nome }}</td>
          <td>{{ d.servico.servico }}</td>
          <td>{{ d.data_inicio }}</td>
          <td>{{ d.data_fim }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
<script>
import ApiMixin from "../mixins/ApiMixin";

export default {
  name: "Leads",
  mixins: [ApiMixin],
  data: () => ({
    parametrosDeRelacioamento: "_expand=lead&_expand=servico",
    formPesquisa: {
      id_like: '',
      data_inicio_gte: '',
      data_inicio_lte: ''
    }
  }),
  methods: {
    pesquisar() {
      const url = `http://localhost:3000/contratos?${this.parametrosDeRelacioamento}`;
      this.getDadosApi(url, this.formPesquisa);
    }
  },
  created() {
      const url = `http://localhost:3000/contratos?${this.parametrosDeRelacioamento}`;
      this.getDadosApi(url, this.$route.query); // chama o método getDadosApi() ao criar o componente
  },
  beforeRouteUpdate(to, from, next) {
    // console.log(to.query) //objeto => URLSearchParams
    const url = `http://localhost:3000/contratos?${this.parametrosDeRelacioamento}`;
    this.getDadosApi(url, to.query);
    next();
  },
};
</script>
  
<style>
</style>
