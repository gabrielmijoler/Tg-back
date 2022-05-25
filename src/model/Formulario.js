const Sequelize = require('sequelize')
const db = require("../config/database")

const Formulario = db.define ('formulario',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
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
        allowNull:true
    },
    Nariz: {
        type: Sequelize.TINYINT(1),
        allowNull:true
    },
    Orelhas: {
        type: Sequelize.TINYINT(1),
        allowNull:true
    },
    Labios_input: {
        type: Sequelize.TINYINT(1),
        allowNull:true
    },
    Pele: {
        type: Sequelize.TINYINT(1),
        allowNull:true
    },
    Fala:{
        type: Sequelize.TINYINT(1),
        allowNull:true
    },
    Respiracao: {
        type: Sequelize.TINYINT(1),
        allowNull:true
    },
    Tranpiracao: {
        type: Sequelize.TINYINT(1),
        allowNull:true
    },
    Sono:{
        type: Sequelize.TINYINT(1),
        allowNull:true
    },
    Emocoes: {
        type: Sequelize.TINYINT(1),
        allowNull:true
    },
    Cor: {
        type: Sequelize.TINYINT(1),
        allowNull:true
    },
    Estacao: {
        type: Sequelize.TINYINT(1),
        allowNull:true
    },
    Alimentacao: {
        type: Sequelize.TINYINT(1),
        allowNull:true
    },
    Sabores: {
        type: Sequelize.TINYINT(1),
        allowNull:true
    },
    Sede: {
        type: Sequelize.TINYINT(1),
        allowNull:true
    },
    Disfuncoes_gastrointestinais: {
        type: Sequelize.TINYINT(1),
        allowNull:true
    },
    Excrecoes: {
        type: Sequelize.TINYINT(1),
        allowNull:true
    },
    Casa_sangrar: {
        type: Sequelize.TINYINT(1),
        allowNull:true
    },
    Obs_casasan: {
        type: Sequelize.TINYINT(1),
        allowNull:true
    },
    Menstruacao: {
        type: Sequelize.TINYINT(1),
        allowNull:true
    },
    Olho_visao: {
        type: Sequelize.TINYINT(1),
        allowNull:true
    },
    Ouvidos_audicao: {
        type: Sequelize.TINYINT(1),
        allowNull:true
    },
    Nariz_olfato: {
        type: Sequelize.TINYINT(1),
        allowNull:true
    },
    Tato: {
        type: Sequelize.TINYINT(1),
        allowNull:true
    },
    Boca_gosto: {
        type: Sequelize.TINYINT(1),
        allowNull:true
    },
    Coluna: {
        type: Sequelize.TINYINT(1),
        allowNull:true
    },
    Dores_musculares: {
        type: Sequelize.TINYINT(1),
        allowNull:true
    },
    Dores_articulares: {
        type: Sequelize.TINYINT(1),
        allowNull:true
    },
    Abdome: {
        type: Sequelize.TINYINT(1),
        allowNull:true
    },
    Dores_cabeca: {
        type: Sequelize.TINYINT(1),
        allowNull:true
    },
    Torax: {
        type: Sequelize.TINYINT(1),
        allowNull:true
    },
    Escala_analogdor: {
        type: Sequelize.TINYINT(1),
        allowNull:true
    },
    Diagnostico_teurapeutico: {
        type: Sequelize.TINYINT(1),
        allowNull:true
    },
    Condutas: {
        type: Sequelize.TINYINT(1),
        allowNull:true
    },
    Obs_casa: {
        type: Sequelize.STRING,
        allowNull:true
    },
    Obs_mentruacao: {
        type: Sequelize.STRING,
        allowNull:true
    },
    Obs_bocagosot: {
        type: Sequelize.STRING,
        allowNull:true
    },
    Obs_abdome: {
        type: Sequelize.STRING,
        allowNull:true
    },
    Obs_torax: {
        type: Sequelize.STRING,
        allowNull:true
    },
    Objetivo: { 
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
    }  
})
// Formulario.sync();

module.exports = Formulario