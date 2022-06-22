const Sequelize = require('sequelize')
const sequilize = require("../config/database")
 

const Corpele = sequilize.define ('cor_pele',{
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

Corpele.sync();

module.exports = Corpele;