const DoresMusculares = require("../model/Dores_Musculares");

module.exports = {
    async post(req, res){
        try {
            const response = await DoresMusculares.create(req.body)
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    async get(req, res){
        try {
            const response = await DoresMusculares.findAll()
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    
}
