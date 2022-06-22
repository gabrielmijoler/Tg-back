const Corpele = require("../model/Corpele");

module.exports = {
    async post(req, res){
        try {
            const response = await Corpele.create(req.body)
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    async get(req, res){
        try {
            const response = await Corpele.findAll()
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    
}
