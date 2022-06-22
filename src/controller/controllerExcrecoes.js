const Excrecoes = require("../model/Excrecoes");

module.exports = {
    async post(req, res){
        try {
            const response = await Excrecoes.create(req.body)
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    async get(req, res){
        try {
            const response = await Excrecoes.findAll()
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    
}
