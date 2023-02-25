var express = require("express");
var routes = require("./routes")

// Porta do servidor
var PORT = process.env.PORT || 3000
// Host do servidor
var HOSTNAME = process.env.HOSTNAME || 'http://localhost'
// App Express
var app = express()
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

