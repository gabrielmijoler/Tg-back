const Sabores = require("../model/Sabores");

module.exports = {
    async post(req, res){
        try {
            const response = await Sabores.create(req.body)
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    async get(req, res){
        try {
            const response = await Sabores.findAll()
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    
}
