const sequelize = require('sequelize')
const instancia = require('../../banco-de-dados/criarTabela')

const colunas = {
    title:{
        type: sequelize.STRING,
        allowNull: false
    },
    description:{
        type:sequelize.STRING,
        allowNull: false
    },
    task:{
        type:sequelize.ARRAY,
        allowNull: false
    }
}

const opcoes = {
    freezerTableName: true,
    tableName: 'Agenda',
    timestamps: true,
    createDat: 'dataCriacao',
    updateDat: 'dataAtualizacao'
}

module.exports = instancia.define('Agenda', colunas, opcoes)