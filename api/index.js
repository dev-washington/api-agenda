const bodyParser = require('body-parser')
const express = require('express')
const config = require('config')
const roteador = require('../api/rotas/agenda/agendas')
const conexao = require('./banco-de-dados/conexao')
const app = express()

conexao.connect(erro =>{
        if(erro){
            console.log(erro)
        }else{
            console.log('conectou ao banco')

            app.use('api/rotas/agenda', roteador)

            app.use(bodyParser.json())

            app.listen(config.get('api.porta'), () => console.log('Api Funcinando'))
        }
})


