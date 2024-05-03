export default {
    data: () => ({
        titulo: 'Lista Padrão',
        itens: [],
        item: ''
    }),
    methods: {
        adicionarFilme(){
            this.itens.push(this.item)
            this.item = ''
        }
    },
    created() {
        console.log('Lista mixin criado')
    }
}