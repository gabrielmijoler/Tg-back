
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("cadastro","gabriel", "Gsm302554", {
    host: 'localhost',
    dialect: 'mysql'
  });


module.exports = sequelize;