const OlhosVisao = require("../model/Olhos_Visao");

module.exports = {
    async post(req, res){
        try {
            const response = await OlhosVisao.create(req.body)
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    async get(req, res){
        try {
            const response = await OlhosVisao.findAll()
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    
}
