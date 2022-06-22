const Excrecoes2 = require("../model/Excrecoes2");

module.exports = {
    async post(req, res){
        try {
            const response = await Excrecoes2.create(req.body)
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    async get(req, res){
        try {
            const response = await Excrecoes2.findAll()
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    
}
