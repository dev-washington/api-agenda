const sequelize = require('sequelize')
const instancia = require('../../banco-de-dados')

const colunas = {
    titulo:{
        type: sequelize.STRING,
        allowNull: false
    },
    taskRelevance:{
        type:sequelize.INTEGER,
        allowNull: false
    },
    completed:{
        type:sequelize.BOOLEAN,
        allowNull: false
    },
    agenda:{
        type: sequelize.INTEGER,
        allowNull: false,
        references:{
            model: require('../agenda/ModeloTabelaAgenda'),
            key: 'id'

        }
    }
}

const opcoes = {
    freezerTableName: true,
    tableName: 'Task',
    timestamps: true,
    createDat: 'dataCriacao',
    updateDat: 'dataAtualizacao'
}

module.exports = instancia.define('Task', colunas, opcoes)