const Sequelize = require('sequelize')
const sequilize = require("../config/database")
 

const Excrecoes2 = sequilize.define ('excrecoes2',{
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

// Excrecoes2.sync();

module.exports = Excrecoes2;