const TabelaTask = require('./TabelaTask')

class tasks{
    constructor({id, titulo, taskRelevance, completed, dataCriacao, dataAtualizada}){
        
        this.id = id
        this.titulo = titulo
        this.taskRelevance = taskRelevance
        this.completed = completed
        this.dataCriacao = dataCriacao
        this.dataAtualizada = dataAtualizada
    }

    async cadastrar(){
        const resultado = await TabelaTask.inserir({
            titulo: this.titulo,
            taskRelevance:this.taskRelevance,
            completed:this.completed
        })

        this.id = resultado.id
        this.dataCriacao = resultado.dataCriacao
        this.dataAtualizada = resultado.dataAtualizada

    }

    async consultar(){
     
        const encontrado = await TabelaTask.consultarId(this.id)
        this.titulo = encontrado.titulo
        this.taskRelevance = encontrado.taskRelevance
        this.completed = encontrado.completed
        this.dataCriacao = encontrado.dataCriacao
        this.dataAtualizada = encontrado.dataAtualizada
    }

    async atualizar(){
        await TabelaTask.consultarId(this.id)
        const campos = ['titulo', 'taskRelevance', 'completed']
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

        await TabelaTask.atualizar(this.id, atualizarDados)

    }

    async remover(){
        return TabelaTask.remover(this.id)
    }

    validar(){
        const campos = ['titulo', 'taskRelevance', 'completed']

        campos.forEach(campo =>{
            const valor = this[campo]


            if(typeof valor !=='string' || valor.length === 0){
                throw new campoInvalido(campo)
            }

        })
    }















}
