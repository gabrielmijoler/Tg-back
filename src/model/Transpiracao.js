const Sequelize = require('sequelize')
const sequilize = require("../config/database")
 

const Transpiracao = sequilize.define ('transpiracao',{
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

// Transpiracao.sync();

module.exports = Transpiracao;