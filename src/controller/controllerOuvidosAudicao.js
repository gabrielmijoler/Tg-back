const OuvidosAudicao = require("../model/Ouvidos_Audicao");

module.exports = {
    async post(req, res){
        try {
            const response = await OuvidosAudicao.create(req.body)
            return res.json(response)
        } catch (error) {
            console.log(error)
            res.json({error: error.message})
            return error
        }
    },
    async get(req, res){
        try {
            const response = await OuvidosAudicao.findAll()
            return res.json(response)
        } catch (error) {
            console.log(error)
            res.json({error: error.message})
            return error
        }
    },
    
}
