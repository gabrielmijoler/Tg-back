const Sono = require("../model/Sono");

module.exports = {
    async post(req, res){
        try {
            const response = await Sono.create(req.body)
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    async get(req, res){
        try {
            const response = await Sono.findAll()
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    
}
