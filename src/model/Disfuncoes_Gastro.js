const Sequelize = require('sequelize')
const sequilize = require("../config/database")
 

const Disfuncoesgastro = sequilize.define ('disfuncoes_gastro',{
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

// Disfuncoesgastro.sync();

module.exports = Disfuncoesgastro;