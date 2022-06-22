const Sede = require("../model/Sede");

module.exports = {
    async post(req, res){
        try {
            const response = await Sede.create(req.body)
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    async get(req, res){
        try {
            const response = await Sede.findAll()
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    
}
