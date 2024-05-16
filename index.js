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


app.use((res) => {
    res.status(404).json({ error: "Endpoint não encontrado" });
});

app.use((err, res) => {
    console.error(err.stack);
    res.status(500).json({ error: "Ocorreu um erro interno" });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso em ${HOSTNAME}:${PORT}`);
});
