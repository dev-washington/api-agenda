const sequelize = require('sequelize')
const instancia = require('../../banco-de-dados')

const colunas = {
    titulo:{
        type: sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type:sequelize.STRING,
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