const Sequelize = require('sequelize')
const db = require("../config/database");
const Cid = require('./Cid');
const Palpacao = require('./Palpacao');
const Cliente = require('./Cliente');

const Formulario = db.define ('formulario', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    lingua: {
        type: Sequelize.TINYINT(1),
        validade:{
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
    cor_pele: {
        type: Sequelize.TINYINT(1),
        validade:{
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
    nariz: {
        type: Sequelize.STRING,
        validade:{
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
        validade:{
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
    labios_input: {
        type: Sequelize.STRING,
        validade:{
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
        validade:{
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
    fala:{
        type: Sequelize.TINYINT(1),
        validade:{
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
    respiracao: {
        type: Sequelize.TINYINT(1),
        validade:{
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
        type: Sequelize.TINYINT(1),
        validade:{
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
    sono:{
        type: Sequelize.TINYINT(1),
        validade:{
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
    emocoes: {
        type: Sequelize.TINYINT(1),
        validade:{
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
    cor: {
        type: Sequelize.TINYINT(1),
        validade:{
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
        type: Sequelize.TINYINT(1),
        validade:{
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
        type: Sequelize.TINYINT(1),
        validade:{
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
    sabores: {
        type: Sequelize.TINYINT(1),
        validade:{
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
    sede: {
        type: Sequelize.TINYINT(1),
        validade:{
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
    disfuncoes_gastrointestinais: {
        type: Sequelize.TINYINT(1),
        validade:{
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
    excrecoes: {
        type: Sequelize.TINYINT(1),
        validade:{
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
        type: Sequelize.TINYINT(1),
        validade:{
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
    obs_sono: {
        type: Sequelize.STRING,
        validade:{
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
    obs_tranpiracao: {
        type: Sequelize.STRING,
        validade:{
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
    menstruacao: {
        type: Sequelize.TINYINT(1),
        // validade:{
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
    olho_visao: {
        type: Sequelize.TINYINT(1),
        validade:{
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
        type: Sequelize.TINYINT(1),
        validade:{
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
        type: Sequelize.TINYINT(1),
        validade:{
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
        type: Sequelize.TINYINT(1),
        validade:{
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
        type: Sequelize.TINYINT(1),
        validade:{
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
    coluna: {
        type: Sequelize.TINYINT(1),
        validade:{
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
    dores_musculares: {
        type: Sequelize.TINYINT(1),
        validade:{
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
        type: Sequelize.TINYINT(1),
        validade:{
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
        type: Sequelize.TINYINT(1),
        validade:{
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
    dores_cabeca: {
        type: Sequelize.TINYINT(1),
        validade:{
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
    torax: {
        type: Sequelize.TINYINT(1),
        validade:{
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
    escala_analogdor: {
        type: Sequelize.TINYINT(1),
        validade:{
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
    diagnostico_teurapeutico: {
        type: Sequelize.TINYINT(1),
        validade:{
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
        type: Sequelize.TINYINT(1),
        validade:{
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
    obs_mentruacao: {
        type: Sequelize.STRING,
        validade:{
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
    obs_bocagosot: {
        type: Sequelize.STRING,
        validade:{
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
    obs_abdome: {
        type: Sequelize.STRING,
        validade:{
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
    obs_torax: {
        type: Sequelize.STRING,
        validade:{
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
    objetivo: { 
        type: Sequelize.STRING,
        validade:{
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
        validade:{
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
        validade:{
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
        validade:{
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
    diagnostico_clinico: { 
        type: Sequelize.STRING,
        validade:{
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
        validade:{
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
    obs_lingua: { 
        type: Sequelize.STRING,
        validade:{
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
    cabeecabelos_input: { 
        type: Sequelize.STRING,
        validade:{
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
    obs_fala: { 
        type: Sequelize.STRING,
        validade:{
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
    obs_emocoes: {
        type: Sequelize.STRING,
        validade:{
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
    createdAt: {
        type: Sequelize.DATE,
    },
    updatedAt: {
        type: Sequelize.DATE,
    },
    idCid: {
        type: Sequelize.INTEGER,
        references: {  
          model: 'cids',
          key: 'id'
        }
      },
    idPalpacao: {
        type: Sequelize.INTEGER,
        references: {         // User belongsTo Company 1:1
          model: 'palpacaos',
          key: 'id',    
        }
      },
      geralformpostura: {
        type: Sequelize.TINYINT(1),
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Lingua null")
                }
            },
            notEmpty: {
                msg: 'Por favor, informe o valor para o campo Labios geralformpostura'
            }
        }
    },
    idClient: {
        type: Sequelize.INTEGER,
        references: {
            model: 'clientes',
            key: 'id'
        },
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("idClient null")
                }
            }
        }
    },
})

    Formulario.associate = function() {
        Formulario.belongsTo(Cid, {foreignKey: 'idCid', as: 'cids'})
    };
    Formulario.associate = function() {
        Formulario.belongsTo(Palpacao, {foreignKey: 'idPalpacao', as: 'palpacaos'})
    };
    Formulario.associate = function() {
        Formulario.belongsTo(Cliente, {foreignKey: 'idClient', as: 'clientes'})
    };

// User.findAll({attributes: fn, raw: true,})
//     .then(parent => {console.log(parent)})


Formulario.sync();

module.exports = Formulario