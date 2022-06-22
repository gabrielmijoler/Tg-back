const Menstruacao = require("../model/Menstruacao");

module.exports = {
    async post(req, res){
        try {
            const response = await Menstruacao.create(req.body)
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    async get(req, res){
        try {
            const response = await Menstruacao.findAll()
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    
}
