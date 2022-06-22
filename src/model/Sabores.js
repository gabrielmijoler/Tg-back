const Sequelize = require('sequelize')
const sequilize = require("../config/database")
 

const Sabores = sequilize.define ('sabores',{
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

Sabores.sync();

module.exports = Sabores;