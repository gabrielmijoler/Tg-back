const DisfuncoesGastro = require("../model/Disfuncoes_Gastro");

module.exports = {
    async post(req, res){
        try {
            const response = await DisfuncoesGastro.create(req.body)
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    async get(req, res){
        try {
            const response = await DisfuncoesGastro.findAll()
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    
}
