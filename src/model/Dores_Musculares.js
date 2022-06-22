const Sequelize = require('sequelize')
const sequilize = require("../config/database")
 

const Doresmusculares = sequilize.define ('Dores_musculares',{
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

Doresmusculares.sync();

module.exports = Doresmusculares;