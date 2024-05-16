const Sequelize = require('sequelize')
const sequilize = require("../config/database");
 

const Auscultacao = sequilize.define ('auscultacao',{
    fala:{
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Fala null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo fala '
            }
        }
    },
    obs_fala: { 
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("obs_fala null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo fala observação'
            }
        }
    },
    respiracao: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Respiracao null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo respiração '
            }
        }
    },
    tranpiracao: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Tranpiracao null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo transpiração '
            }
        }
    },
    obs_tranpiracao: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Obs Tranpiração null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo transpiração oberservação'
            }
        }
    },
    sono:{
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Sono null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo sono '
            }
        }
    },
    obs_sono: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Obs Sono null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo sono oberservação '
            }
        }
    },
    emocoes: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Emocoes null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo emoções '
            }
        }
    },
    obs_emocoes: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Obs_emocoes null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo observação emocoes'
            }
        }
    },
    cor: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Cor null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo cor '
            }
        }
    },
    estacao: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Estacao null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo estação '
            }
        }
    },
    alimentacao: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Alimentacao null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo alimentação '
            }
        }
    },
    obs_alimentacao: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Obs Tranpiração null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo transpiração oberservação'
            }
        }
    },
    sabores: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Sabores null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo sabores '
            }
        }
    },
    obs_sabores: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Obs Tranpiração null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo transpiração oberservação'
            }
        }
    },
    sede: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Sede null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo sede '
            }
        }
    },
    obs_sede: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Obs Tranpiração null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo transpiração oberservação'
            }
        }
    },
    
    
    
})

Auscultacao.sync();


module.exports = Auscultacao;