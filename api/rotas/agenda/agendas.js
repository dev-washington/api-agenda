const TabelaAgenda = require('./TabelaAgenda')

class agendas{
    constructor({id, titulo, descricao, dataCriacao, dataAtualizada}){
       
        this.id = id
        this.titulo = titulo
        this.descricao = descricao
        this.dataCriacao = dataCriacao
        this.dataAtualizada = dataAtualizada


    }

    async cadastrar(){
        const resultado = await TabelaAgenda.inserir({
            titulo: this.titulo,
            descricao:this.descricao
        })

        this.id = resultado.id
        this.dataCriacao = resultado.dataCriacao
        this.dataAtualizada = resultado.dataAtualizada

    }

    async consultar(){
        const encontrado = await TabelaAgenda.consultarId(this.id)
        this.titulo = encontrado.titulo
        this.descricao = encontrado.descricao
        this.dataCriacao = encontrado.dataCriacao
        this.dataAtualizada = encontrado.dataAtualizada
    }

    async atualizar(){
        await TabelaAgenda.consultarId(this.id)
        const campos = ['titulo', 'descricao']
        const atualizarDados = {}

        campos.forEach((campo)=>{
            const valor = this[campo]

            if(typeof valor === 'string' && valor.length > 0){
                atualizarDados[campo] = valor
            }

        })

        if(Object.keys(atualizarDados).length === 0){
            throw new Error('Não foram fornecidos dados para atualizar')
        }

        await TabelaAgenda.atualizar(this.id, atualizarDados)

    }

    async remover(){
        return TabelaAgenda.remover(this.id)
    }

    validar(){
        const campos = ['titulo', 'taskRevelance', 'completed']

        campos.forEach(campo =>{
            const valor = this[campo]


            if(typeof valor !=='string' || valor.length === 0){
                throw new campoInvalido(campo)
            }

        })
    }

}

module.exports = agenda
