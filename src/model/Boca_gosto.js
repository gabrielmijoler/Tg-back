const Sequelize = require('sequelize')
const sequilize = require("../config/database")
 

const Bocagosto = sequilize.define ('boca_gosto',{
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

// Bocagosto.sync();

module.exports = Bocagosto;