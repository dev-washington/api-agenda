const modelos = [
    require('../rotas/agenda/ModeloTabelaAgenda'),
    require('../rotas/task/ModeloTabelaTask')

]

async function criarTabelas () {
    for  (let contador = 0; contador < modelos.length; contador++){
        const modelo = modelos[contador]
        await modelo.sync() 
    }
}

criarTabelas()
