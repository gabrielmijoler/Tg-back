var express = require("express");
var handlebars = require("express-handlebars");
var routes = require("./routes")
const sql = require("mysql2")
// Porta do servidor
var PORT = process.env.PORT || 3000
// Host do servidor
var HOSTNAME = process.env.HOSTNAME || 'http://localhost'
// App Express
var app = express()
// Config engine
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// JSON
app.use(express.json())
app.use(routes)


app.use((req, res) => {
    res.status(404)
})
// Inicia o sevidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
    })

