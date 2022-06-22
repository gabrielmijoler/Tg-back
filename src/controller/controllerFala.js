const Fala = require("../model/Fala");

module.exports = {
    async post(req, res){
        try {
            const response = await Fala.create(req.body)
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    async get(req, res){
        try {
            const response = await Fala.findAll()
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    
}
