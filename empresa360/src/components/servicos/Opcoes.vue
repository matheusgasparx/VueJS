<template>
    <div>
        <h5>Componente Opções</h5>
        <p>Poderiamos recuperar as opções do servico id {{ id }}</p>
    </div>
</template>

<script>
export default {
    name: "Opcoes",
    props: ['id'],
    created() {
        // console.log('Opcoes', this.$route.params.id)
    },
    beforeRouteUpdate() { // to, from
        console.log('Guarda de componente beforeRouteUpdate')
    }
}
</script>

<style>

</style>