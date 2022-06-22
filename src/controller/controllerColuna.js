const Coluna = require("../model/Coluna");

module.exports = {
    async post(req, res){
        try {
            const response = await Coluna.create(req.body)
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    async get(req, res){
        try {
            const response = await Coluna.findAll()
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    
}
