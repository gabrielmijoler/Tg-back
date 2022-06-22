const Sequelize = require('sequelize')
const sequilize = require("../config/database")
 

const User = sequilize.define ('cliente',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull:true
    },
    sexo: {
        type: Sequelize.STRING,
        allowNull:true
    },
    email: {
        type: Sequelize.STRING,
        allowNull:true
    },
    cpf:{
        type: Sequelize.STRING,
        allowNull:true
    },  
    profissao: {
        type: Sequelize.STRING,
        allowNull:true
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull:true
    },
    religiao: {
        type: Sequelize.STRING,
        allowNull:true
    },
    estadocivil: {
        type: Sequelize.STRING,
        allowNull: true
    },
    datanascimento: {
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
    User.associate = function(models) {
        User.belongsTo(Formulario, {foreignKey: 'idFormulario', as: 'formularios'})
    };
User.sync()

module.exports = User