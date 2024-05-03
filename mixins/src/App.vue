<template>
    <div style="display: flex; flex-direction: row;">
      <ListaFilmes style="flex-basis: 33%"></ListaFilmes>
      <ListaPessoas style="flex-basis: 33%"></ListaPessoas>
      <ListaVideoGames style="flex-basis: 33%"></ListaVideoGames>
    </div>
</template>

<script>
import ListaFilmes from './components/ListaFilmes.vue'
import ListaPessoas from './components/ListaPessoas.vue'
import ListaVideoGames from './components/ListaVideoGames.vue'

export default {
  name: 'App',
  components: {
    ListaFilmes,
    ListaPessoas,
    ListaVideoGames
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
