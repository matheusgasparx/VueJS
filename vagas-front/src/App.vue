<template>
  <div>
    <TopoPadrao @navegar="componente = $event"></TopoPadrao>
    <Conteudo v-if="visibilidade" :conteudo="componente"></Conteudo>
              <!-- começa como padrão Home, sofre alteração de acordo com o TopoPadrao -->
  </div>
</template>

<script>
import Conteudo from '@/components/layouts/Conteudo.vue'
import TopoPadrao from '@/components/layouts/TopoPadrao.vue'

export default {
  name: 'App',
  data: () => ({
    visibilidade: true,
    componente: 'Home'
  }),
  components: {
    Conteudo,
    TopoPadrao
  }
}
</script>

<style>

</style>
