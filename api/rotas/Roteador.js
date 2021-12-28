const roteador = require('express').Router()
const TabelaAgenda = require('./agenda/TabelaAgenda')

roteador.get('/', async (requisicao, reposta) => {

try{    
    const resultado = await TabelaAgenda.listar()
    reposta.send(
        JSON.stringify(resultado)
    )
} catch (erro) {
    resposta.send(
        JSON.stringify({
            mensagem: erro.message 
        })
    )
}

}) 

roteador.post('/', async (requisicao, resposta)=>{

try{
    const enviado = requisicao.body
    const agenda = new Agenda(enviado)
    await agenda.cadastrar()
} catch (erro) {
    resposta.send(
        JSON.stringify({
            mensagem: erro.message 
        })
    )
}

})

roteador.get('/:idAgenda', async (requisicao, resposta)=>{


try{
    const id = requisicao.params.idAgenda
    const agenda = new Agenda({id:id})
    await agenda.consultar()

    resposta.send(
        JSON.stringify(agenda)
    )

} catch (erro) {
    resposta.send(
        JSON.stringify({
            mensagem: erro.message 
        })
    )
}


})

roteador.put('/:idAgenda', async(requisicao, resposta) =>{

try{    
    const id = requisicao.params.idAgenda
    const dadosRecebidos = requisicao.body
    const dados = Object.assign({} , dadosRecebidos , {id:id})
    const agenda = new Agenda()
    await agenda.atualizar()
    resposta.end()
} catch (erro) {
    resposta.send(
        JSON.stringify({
            mensagem: erro.message 
        })
    )
}


})

roteador.delete('/:idAgenda', async (requisicao, resposta) =>{

try{
    const id = requisicao.params.idAgeenda
    const agenda = new Agenda({id:id})
    await agenda.consultar()
    await agenda.remover()
    resposta.end()
} catch (erro) {
    resposta.send(
        JSON.stringify({
            mensagem: erro.message 
        })
    )
}

})

module.exports = roteador