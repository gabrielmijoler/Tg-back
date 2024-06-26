const Sequelize = require('sequelize')
const sequilize = require("../config/database");
 

const Torax = sequilize.define ('torax',{
    torax: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Tórax null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo torax'
            }
        }
    },
    obs_torax: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Obs_torax null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo torax observação'
            }
        }
    },
    dores_cabeca: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Dores de cabeça null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo dor de cabeça'
            }
        }
    },
    escala_analogdor: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Escala de dor null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo escala analogica de dor'
            }
        }
    },
    diagnostico_clinico: { 
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Diagnóstico clínico null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo diagnostico clinico'
            }
        }
    },
    queixa_prin: { 
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Neuromuscular null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo queixa principal'
            }
        }
    },
})

// Torax.sync();

module.exports = Torax;