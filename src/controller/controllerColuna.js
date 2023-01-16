const Coluna = require("../model/Coluna");

module.exports = {
    async post(req, res){
        try {
            const response = await Coluna.create(req.body)
            return res.json(response)
        } catch (error) {
            console.log(error)
            res.json({error: error.message})
            return error
        }
    },
    async get(req, res){
        try {
            const response = await Coluna.findAll()
            return res.json(response)
        } catch (error) {
            console.log(error)
            res.json({error: error.message})
            return error
        }
    },
    
}
