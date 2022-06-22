const Alimentacao = require("../model/Alimentacao");

module.exports = {
    async post(req, res){
        try {
            const response = await Alimentacao.create(req.body)
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    async get(req, res){
        try {
            const response = await Alimentacao.findAll()
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    
}
