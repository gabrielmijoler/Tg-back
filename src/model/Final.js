const Sequelize = require('sequelize')
const sequilize = require("../config/database");
 

const Final = sequilize.define ('final',{
    diagnostico_teurapeutico: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("DIAGNÓSTICO TERAPÊUTICO null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo diagnostico teurapeutico'
            }
        }
    },
    condutas: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Condutas null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo condutas'
            }
        }
    },
    
    objetivo: { 
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Objetivo final null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo objetivo'
            }
        }
    },
    medicamento: { 
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Medicamento null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo medicamento'
            }
        }
    },
    patalogia: { 
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Patalogia null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo patalogia'
            }
        }
    },
    neuromuscular: { 
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Neuromuscular null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo neuromuscular'
            }
        }
    },
})

Final.sync();

module.exports = Final;