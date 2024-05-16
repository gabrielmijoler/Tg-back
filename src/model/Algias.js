const Sequelize = require('sequelize')
const sequilize = require("../config/database");
 

const Algias = sequilize.define ('algias',{
    coluna: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Coluna null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo coluna'
            }
        }
    },
    obs_coluna: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Obs_abdome null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo abdome observação'
            }
        }
    },
    dores_musculares: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Dores musculares null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo dores musculares'
            }
        }
    },
    dores_articulares: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Dores Articulares null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo dores articulares'
            }
        }
    },
    abdome: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Abdome null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo abdome'
            }
        }
    },
    obs_abdome: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Obs_abdome null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo abdome observação'
            }
        }
    },
    
})

// Algias.sync();


module.exports = Algias;