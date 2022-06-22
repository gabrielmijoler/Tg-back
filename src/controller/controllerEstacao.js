const Estacao = require("../model/Estacao");

module.exports = {
    async post(req, res){
        try {
            const response = await Estacao.create(req.body)
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    async get(req, res){
        try {
            const response = await Estacao.findAll()
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    
}
