const Sequelize = require('sequelize')
const sequilize = require("../config/database");
 

const Geral = sequilize.define ('geral',{
    lingua: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Lingua null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo lingua'
            }
        }
    },
    obs_lingua: { 
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("obs_lingua null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o cabeça e lingua excrecoes'
            }
        }
    },
    ItensGeralformpostura: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Geral null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo Labios ItensGeralformpostura'
            }
        }
    },
    cor_pele: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Cor da Pele null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo cor da pele'
            }
        }
    },
    cabeecabelos_input: { 
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Cabeça e Cabelos null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o cabeça e cabelos excrecoes'
            }
        }
    },
    nariz: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Nariz null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo nariz'
            }
        }
    },
    orelhas: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Orelhas null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo orelhas'
            }
        }
    },
    labios: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Labios text null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo labios descrição '
            }
        }
    },
    pele: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Pele null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo pele'
            }
        }
    },
})

// Geral.sync();


module.exports = Geral;