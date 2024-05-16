const Sequelize = require('sequelize')
const sequilize = require("../config/database");
 

const Interrogatorio = sequilize.define ('interrogatorio',{
    disfuncoes_gastrointestinais: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Disfunções Gastro-intestinais null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo disfunções gastrointestinais '
            }
        }
    },
    obs_disfuncoes: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Obs Boca e gosto null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo boca e gosto observação'
            }
        }
    },
    excrecoes: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Excreções null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo excreções '
            }
        }
    },
    
    excrecoes2: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Excreções 2 null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo excreções 2 '
            }
        }
    },
 
    obs_excrecoes: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Obs Boca e gosto null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo boca e gosto observação'
            }
        }
    },
    menstruacao: {
        type: Sequelize.STRING,
        // validate:{
            //     customValidator(value){
                //         if(value == null){
                    //             throw new Error("Menstruacao null")
                    //         }
                    //     },
                    //     notEmpty: {
        //         msg: 'Por favor, informe o valor para o campo mentruação '
        //     }
        // }
    },
    obs_mentruacao: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Obs Mentruação null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo menstruação observação'
            }
        }
    },
    olho_visao: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Olhos e visão null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo olho e visão '
            }
        }
    },
    ouvidos_audicao: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Ouvidos e Audição null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo ouvidos audição '
            }
        }
    },
    nariz_olfato: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Nariz e olfato null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo labios '
            }
        }
    },
    tato: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Tato null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo labios '
            }
        }
    },
    boca_gosto: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Boca e gosto null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo labios '
            }
        }
    },
    obs_bocagosot: {
        type: Sequelize.STRING,
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("Obs Boca e gosto null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo boca e gosto observação'
            }
        }
    },
    
    
})

// Interrogatorio.sync();


module.exports = Interrogatorio;