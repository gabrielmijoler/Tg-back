const Cor = require("../model/Cor");

module.exports = {
    async post(req, res){
        try {
            const response = await Cor.create(req.body)
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    async get(req, res){
        try {
            const response = await Cor.findAll()
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    
}
