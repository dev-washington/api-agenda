const Modelo = require('./ModeloTabelaAgenda')

module.exports = {
    
    async listar(){
        return Modelo.findAll()
    },

    async inserir(Agenda){
        return Modelo.create(Agenda)
    },

    async consultarId(id){
        const encontrado = await Modelo.findOne({
            where: {id:id} 
        })  

        if(!encontrado){
            throw new Error('Agenda Não Encontrado')
        }

    },

    async atualizar(id, atualizarDados){
        return Modelo.update(
            atualizarDados,
            {
                where: {id: id}

            }

        )
    },

    async remover(id){
        return Modelo.destroy({
            where: {id:id}
        })
    }
}