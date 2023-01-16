const DoresMusculares = require("../model/Dores_Musculares");

module.exports = {
    async post(req, res){
        try {
            const response = await DoresMusculares.create(req.body)
            return res.json(response)
        } catch (error) {
            console.log(error)
            res.json({error: error.message})
            return error
        }
    },
    async get(req, res){
        try {
            const response = await DoresMusculares.findAll()
            return res.json(response)
        } catch (error) {
            console.log(error)
            res.json({error: error.message})
            return error
        }
    },
    
}
