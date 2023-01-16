const Palpacao = require("../model/Palpacao");

module.exports = {
    async post(req, res){
        try {
            console.log(response)
            const response = await Palpacao.create(req.body)
            console.log(response)   
            return res.json(response)
        } catch (error) {
            console.log(error)
            res.json({error: error.message})
            return error
        }
    },
    async get(req, res){
        try {
            const response = await Palpacao.findAll()
            return res.json(response)
        } catch (error) {
            console.log(error)
            res.json({error: error.message})
            return error
        }
    },
    
}
