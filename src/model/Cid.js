const Sequelize = require('sequelize')
const db = require("../config/database")

const Cid = db.define('cid',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
    },
    cod: {
        type: Sequelize.STRING,
        allowNull:true
    },
    description: {
        type: Sequelize.STRING,
        allowNull:true
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull:true
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull:true
    }  
})

module.exports = Cid