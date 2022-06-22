const Bocagosto = require("../model/Boca_gosto");

module.exports = {
    async post(req, res){
        try {
            const response = await Bocagosto.create(req.body)
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    async get(req, res){
        try {
            const response = await Bocagosto.findAll()
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    
}
