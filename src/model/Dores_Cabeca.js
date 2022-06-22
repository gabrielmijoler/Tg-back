const Sequelize = require('sequelize')
const sequilize = require("../config/database")
 

const Dorescabeca = sequilize.define ('Dores_cabeca',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
    },
    name: {
        type:Sequelize.STRING,
        allowNull:false
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
    },
})

Dorescabeca.sync();

module.exports = Dorescabeca;