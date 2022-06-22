const Respiracao = require("../model/Respiracao");

module.exports = {
    async post(req, res){
        try {
            const response = await Respiracao.create(req.body)
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    async get(req, res){
        try {
            const response = await Respiracao.findAll()
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    
}
