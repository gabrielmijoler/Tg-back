const Sequelize = require('sequelize')
const sequilize = require("../config/database")
const Formulario = require("./Formulario")

const phoneValidationRegex = /\d{3}-\d{3}-\d{4}/;

const User = sequilize.define('cliente', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            },
        },
    },
    sexo: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            },
        },
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            },
            isEmail: {
                msg: "Esse campo precisa ser um e-mail"
            },
        },
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        max: 14,
        validate: {
            
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            },
            len: {
                msg: "Esse campo tem que ter 14 caracteres",
            }
        },
    },
    profissao: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            },
        },
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            validator: function (v) {
                return phoneValidationRegex.test(v);
            },
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            },
        },
    },
    religiao: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            }
        }
    },
    estadocivil: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            }
        },
    },
    datanascimento: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            }
        }
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
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
User.associate = function (models) {
    User.belongsTo(Formulario, { foreignKey: 'idFormulario', as: 'formularios' })
};
// User.sync()

module.exports = User