const DoresCabeca = require("../model/Dores_Cabeca");

module.exports = {
    async post(req, res){
        try {
            const response = await DoresCabeca.create(req.body)
            return res.json(response)
        } catch (error) {
            console.log(error)
            res.json({error: error.message})
            return error
        }
    },
    async get(req, res){
        try {
            const response = await DoresCabeca.findAll()
            return res.json(response)
        } catch (error) {
            console.log(error)
            res.json({error: error.message})
            return error
        }
    },
    
}
