const OuvidosAudicao = require("../model/Ouvidos_Audicao");

module.exports = {
    async post(req, res){
        try {
            const response = await OuvidosAudicao.create(req.body)
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    async get(req, res){
        try {
            const response = await OuvidosAudicao.findAll()
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    
}
