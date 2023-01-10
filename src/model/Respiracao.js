const Sequelize = require('sequelize')
const sequilize = require("../config/database")
 

const Respiracao = sequilize.define ('respiracao',{
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

// Respiracao.sync();

module.exports = Respiracao;