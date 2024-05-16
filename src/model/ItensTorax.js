const Sequelize = require('sequelize')
const sequilize = require("../config/database")
 

const ItensTorax = sequilize.define ('itens_toraxs',{
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

ItensTorax.sync();

module.exports = ItensTorax;