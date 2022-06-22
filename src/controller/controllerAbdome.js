const Abdome = require("../model/Abdome");

module.exports = {
    async post(req, res){
        try {
            const response = await Abdome.create(req.body)
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    async get(req, res){
        try {
            const response = await Abdome.findAll()
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    
}
