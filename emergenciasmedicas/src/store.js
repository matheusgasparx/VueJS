import Vuex from 'vuex'

export default new Vuex.Store({
    state: {
        titulo: '## Emergências Medicas ##',
        equipe: {
            enfermeiro: 'Marcos enfermeiro',
            socorrista: 'Marcia socorrista',
            medico: 'Cariani medico',
            carro: 'a688q85',
            telefone: '+55 4002 8922',
            kitDeReanimacao: 'Kit Disgraça'
        }
    }
})