<template>
  <div>
    <h5>{{ dados.id }} - {{ dados.nome }}</h5>

    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">ID</label>
      <div class="col-sm-10">
        <input
          type="text"
          readonly
          class="form-control-plaintext"
          v-model="dados.id"
        />
      </div>
    </div>

    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">Nome</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model="dados.nome" />
      </div>
    </div>

    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">Telefone</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model="dados.telefone" />
      </div>
    </div>

    <div class="col-auto">
      <button type="button" class="btn btn-primary m-1">Atualizar</button>
      <button type="button" class="btn btn-warning m-1" @click="$router.push({ name: 'leads' })">Voltar</button>
    </div>
  </div>
</template>

<script>
import ApiMixin from "../mixins/ApiMixin";

export default {
  name: "Lead",
  props: ['id','outroParametro'],
  mixins: [ApiMixin],
  created() {
    this.getDadosApi(`http://localhost:3000/leads/${this.id}`);
  },
  beforeRouteLeave() { // to, from, next
    const confirmar = window.confirm('Não saia antes de confirmar')

    confirmar ? true : false
  }
};
</script>

<style>
</style>
