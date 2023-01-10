
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("cadastro","gabriel", "Gsm302554", {
    host: 'localhost',
    dialect: 'mysql'
  });
// module.exports = {
//   Sequelize: Sequelize,
//   sequelize: sequilize
// }
// var mysql = require("mysql2")

// var connection = mysql.createConnection({
//   host:"localhost",
//   database:"cadastro",
//   user:"gabriel",
//   password:"Gsm302554"
// })

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

module.exports = sequelize;