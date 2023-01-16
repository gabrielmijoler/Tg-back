const DisfuncoesGastro = require("../model/Disfuncoes_Gastro");

module.exports = {
    async post(req, res){
        try {
            const response = await DisfuncoesGastro.create(req.body)
            return res.json(response)
        } catch (error) {
            console.log(error)
            res.json({error: error.message})
            return error
        }
    },
    async get(req, res){
        try {
            const response = await DisfuncoesGastro.findAll()
            return res.json(response)
        } catch (error) {
            console.log(error)
            res.json({error: error.message})
            return error
        }
    },
    
}
