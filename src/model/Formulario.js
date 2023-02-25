const Sequelize = require('sequelize')
const db = require("../config/database");
const Cid = require('./Cid');
const Palpacao = require('./Palpacao');
const User = require('./User');

const Formulario = db.define ('formulario',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:true
    },
    lingua: {
        type: Sequelize.TINYINT(1),
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Lingua null")
                }
            }
        }
    },
    cor_pele: {
        type: Sequelize.TINYINT(1),
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Cor da Pele null")
                }
            }
        }
    },
    nariz: {
        type: Sequelize.STRING,
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Nariz null")
                }
            },
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            }
        }
    },
    orelhas: {
        type: Sequelize.STRING,
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Orelhas null")
                }
            },
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            }
        }
    },
    labios_input: {
        type: Sequelize.STRING,
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Labios text null")
                }
            },
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            }
        }
    },
    pele: {
        type: Sequelize.STRING,
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Pele null")
                }
            },
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            }
        }
    },
    fala:{
        type: Sequelize.TINYINT(1),
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Fala null")
                }
            }
        }
    },
    respiracao: {
        type: Sequelize.TINYINT(1),
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Respiracao null")
                }
            }
        }
    },
    tranpiracao: {
        type: Sequelize.TINYINT(1),
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Tranpiracao null")
                }
            }
        }
    },
    sono:{
        type: Sequelize.TINYINT(1),
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Sono null")
                }
            }
        }
    },
    emocoes: {
        type: Sequelize.TINYINT(1),
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Emocoes null")
                }
            }
        }
    },
    cor: {
        type: Sequelize.TINYINT(1),
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Cor null")
                }
            }
        }
    },
    estacao: {
        type: Sequelize.TINYINT(1),
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Estacao null")
                }
            }
        }
    },
    alimentacao: {
        type: Sequelize.TINYINT(1),
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Alimentacao null")
                }
            }
        }
    },
    sabores: {
        type: Sequelize.TINYINT(1),
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Sabores null")
                }
            }
        }
    },
    sede: {
        type: Sequelize.TINYINT(1),
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Sede null")
                }
            }
        }
    },
    disfuncoes_gastrointestinais: {
        type: Sequelize.TINYINT(1),
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Disfunções Gastro-intestinais null")
                }
            }
        }
    },
    excrecoes: {
        type: Sequelize.TINYINT(1),
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Excreções null")
                }
            }
        }
    },
    excrecoes2: {
        type: Sequelize.TINYINT(1),
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Excreções 2 null")
                }
            }
        }
    },
    obs_sono: {
        type: Sequelize.STRING,
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Obs Sono null")
                }
            }
        }
    },
    obs_tranpiracao: {
        type: Sequelize.STRING,
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Obs Tranpiração null")
                }
            }
        }
    },
    menstruacao: {
        type: Sequelize.TINYINT(1),
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Menstruacao null")
                }
            }
        }
    },
    olho_visao: {
        type: Sequelize.TINYINT(1),
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Olhos e visão null")
                }
            }
        }
    },
    ouvidos_audicao: {
        type: Sequelize.TINYINT(1),
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Ouvidos e Audição null")
                }
            }
        }
    },
    nariz_olfato: {
        type: Sequelize.TINYINT(1),
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Nariz e olfato null")
                }
            }
        }
    },
    tato: {
        type: Sequelize.TINYINT(1),
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Tato null")
                }
            }
        }
    },
    boca_gosto: {
        type: Sequelize.TINYINT(1),
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Boca e gosto null")
                }
            }
        }
    },
    coluna: {
        type: Sequelize.TINYINT(1),
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Coluna null")
                }
            }
        }
    },
    dores_musculares: {
        type: Sequelize.TINYINT(1),
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Dores musculares null")
                }
            }
        }
    },
    dores_articulares: {
        type: Sequelize.TINYINT(1),
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Dores Articulares null")
                }
            }
        }
    },
    abdome: {
        type: Sequelize.TINYINT(1),
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Abdome null")
                }
            }
        }
    },
    dores_cabeca: {
        type: Sequelize.TINYINT(1),
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Dores de cabeça null")
                }
            }
        }
    },
    torax: {
        type: Sequelize.TINYINT(1),
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Tórax null")
                }
            }
        }
    },
    escala_analogdor: {
        type: Sequelize.TINYINT(1),
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Escala de dor null")
                }
            }
        }
    },
    diagnostico_teurapeutico: {
        type: Sequelize.TINYINT(1),
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("DIAGNÓSTICO TERAPÊUTICO null")
                }
            }
        }
    },
    condutas: {
        type: Sequelize.TINYINT(1),
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Condutas null")
                }
            },
        }
    },
    obs_mentruacao: {
        type: Sequelize.STRING,
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Obs Mentruação null")
                }
            }
        }
    },
    obs_bocagosot: {
        type: Sequelize.STRING,
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Obs Boca e gosto null")
                }
            }
        }
    },
    obs_abdome: {
        type: Sequelize.STRING,
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Obs_abdome null")
                }
            }
        }
    },
    obs_torax: {
        type: Sequelize.STRING,
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Obs_torax null")
                }
            }
        }
    },
    objetivo: { 
        type: Sequelize.STRING,
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Objetivo final null")
                }
            },
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            }
        }
    },
    medicamento: { 
        type: Sequelize.STRING,
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Medicamento null")
                }
            },
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            }
        }
    },
    patalogia: { 
        type: Sequelize.STRING,
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Patalogia null")
                }
            },
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            }
        }
    },
    neuromuscular: { 
        type: Sequelize.STRING,
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Neuromuscular null")
                }
            },
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            }
        }
    },
    diagnostico_clinico: { 
        type: Sequelize.STRING,
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Diagnóstico clínico null")
                }
            },
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            }
        }
    },
    queixa_prin: { 
        type: Sequelize.STRING,
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Neuromuscular null")
                }
            },
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            }
        }
    },
    obs_lingua: { 
        type: Sequelize.STRING,
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("obs_lingua null")
                }
            }
        }
    },
    cabeecabelos_input: { 
        type: Sequelize.STRING,
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Cabeça e Cabelos null")
                }
            },
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            }
        }
    },
    obs_fala: { 
        type: Sequelize.STRING,
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("obs_fala null")
                }
            }
        }
    },
    obs_emocoes: {
        type: Sequelize.STRING,
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Obs_emocoes null")
                }
            }
        }
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull:true,
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull:true,
    },
    idCid: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {         // User belongsTo Company 1:1
          model: 'cids',
          key: 'id'
        }
      },
    idPalpacao: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {         // User belongsTo Company 1:1
          model: 'palpacaos',
          key: 'id',    
        }
      },
      geralformpostura: {
        type: Sequelize.TINYINT(1),
        allowNull:true,
        validade:{
            customValidator(value){
                if(value == null){
                    throw new Error("Lingua null")
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


// User.findAll({attributes: fn, raw: true,})
//     .then(parent => {console.log(parent)})

// Formulario.sync();

module.exports = Formulario