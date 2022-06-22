const Geral = require("../model/Geral");

module.exports = {
    async post(req, res){
        try {
            const response = await Geral.create(req.body)
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    async get(req, res){
        try {
            const response = await Geral.findAll()
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    
}
