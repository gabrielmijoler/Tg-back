const Sequelize = require('sequelize')
const db = require("../config/database");
const Cid = require('./Cid');
const Palpacao = require('./Palpacao');
const Cliente = require('./Cliente');
const Interrogatorio = require('./Interrogatorio');
const Geral = require('./Geral');
const Algias = require('./Algias');
const Final = require('./Algias');
const Auscultacao = require('./Algias');
const Torax = require('./Algias');

const Formulario = db.define ('formulario', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
    idClient: {
        type: Sequelize.INTEGER,
        references: {
            model: 'clientes',
            key: 'id'
        },
        validate:{
            customValidator(value){
                if(value == null){
                    throw new Error("idClient null")
                }
            }
        }
    },
    idGeral: {
        type: Sequelize.INTEGER,
        references: {  
          model: 'gerals',
          key: 'id'
        }
    },
    idAlgias: {
        type: Sequelize.INTEGER,
        references: {  
            model: 'algias',
            key: 'id'
        }
    },
    idInterrogatorio: {
        type: Sequelize.INTEGER,
        references: {  
            model: 'interrogatorios',
            key: 'id'
        }
    },
    // idFinal: {
    //     type: Sequelize.INTEGER,
    //     references: {  
    //         model: 'finals',
    //         key: 'id'
    //     }
    // },
    // idAuscultacao: {
    //     type: Sequelize.INTEGER,
    //     references: {  
    //         model: 'auscultacaos',
    //         key: 'id'
    //     }
    // },
    idTorax: {
        type: Sequelize.INTEGER,
        references: {  
            model: 'toraxes',
            key: 'id'
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
    Formulario.belongsTo(Geral, { foreignKey: 'geralId', as: 'gerals' });
    Formulario.belongsTo(Algias, { foreignKey: 'algiasId', as: 'algias' });
    Formulario.belongsTo(Interrogatorio, { foreignKey: 'interrogatorioId', as: 'interrogatorios' });
    // Formulario.belongsTo(Final, { foreignKey: 'finalId', as: 'finals' });
    // Formulario.belongsTo(Auscultacao, { foreignKey: 'auscultacaoId', as: 'auscultacaos' });
    Formulario.belongsTo(Torax, { foreignKey: 'toraxId', as: 'toraxes' });


Formulario.sync();

module.exports = Formulario