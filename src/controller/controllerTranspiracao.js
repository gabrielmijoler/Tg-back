const Transpiracao = require("../model/Transpiracao");

module.exports = {
    async post(req, res){
        try {
            const response = await Transpiracao.create(req.body)
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    async get(req, res){
        try {
            const response = await Transpiracao.findAll()
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    
}
