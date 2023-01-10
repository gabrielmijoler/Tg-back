const Sequelize = require('sequelize')
const sequilize = require("../config/database")
 

const Narizolfato = sequilize.define ('nariz_olfato',{
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

// Narizolfato.sync();

module.exports = Narizolfato;