const Emocoes = require("../model/Emocoes");

module.exports = {
    async post(req, res){
        try {
            const response = await Emocoes.create(req.body)
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    async get(req, res){
        try {
            const response = await Emocoes.findAll()
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    
}
