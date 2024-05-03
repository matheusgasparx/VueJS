<template>

    <div>
        <h3>{{ titulo }}</h3>
        <input type="text" placeholder="Nome do filme" v-model="item">
        <button type="button" @click="adicionarItem">Adicionar</button>
        <br>
        <ul>
            <li v-for="(filme, index) in itens" :key="index">{{ filme }}</li>
        </ul>
        <button type="button" @click="removerItem">Remover</button>
    </div>
</template>

<script>
import ListaMixin from '@/mixins/ListaMixin'
import RemoverItemListaMixin from '@/mixins/RemoverItemListaMixin'

export default {
    name: 'ListaFilme',
    data: () => ({
        titulo: 'Lista Filmes'
    }),
    mixins: [ListaMixin, RemoverItemListaMixin]
}
</script>

<style>

</style>