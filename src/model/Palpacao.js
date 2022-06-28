const Sequelize = require('sequelize')
const sequilize = require("../config/database")
 

const Palpacao = sequilize.define ('palpacao',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
    },
    name: {
        type:Sequelize.STRING,
        allowNull:false // vai ser o ig
    },
    obs_palpa: {
        type:Sequelize.STRING, // o q o cara escrever
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
    idFormulario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // User belongsTo Company 1:1
          model: 'formularios',
          key: 'id'
        }
      },
})
Palpacao.associate = function(models) {
    Palpacao.belongsTo(Formulario, {foreignKey: 'idFormulario', as: 'formularios'})
};

Palpacao.sync();

module.exports = Palpacao;