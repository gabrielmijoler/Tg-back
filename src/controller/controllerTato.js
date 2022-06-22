const Tato = require("../model/Tato");

module.exports = {
    async post(req, res){
        try {
            const response = await Tato.create(req.body)
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    async get(req, res){
        try {
            const response = await Tato.findAll()
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    
}
