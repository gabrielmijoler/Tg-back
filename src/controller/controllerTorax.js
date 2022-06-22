const Torax = require("../model/Torax");

module.exports = {
    async post(req, res){
        try {
            const response = await Torax.create(req.body)
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    async get(req, res){
        try {
            const response = await Torax.findAll()
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    
}
