const Sequelize = require('sequelize')
const sequilize = require("../config/database")
 

const OuvidosAudicao = sequilize.define ('ouvidos_audicao',{
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

// OuvidosAudicao.sync();

module.exports = OuvidosAudicao;