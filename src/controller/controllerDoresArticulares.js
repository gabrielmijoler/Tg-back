const DoresArticulares = require("../model/Dores_Articulares");

module.exports = {
    async post(req, res){
        try {
            const response = await DoresArticulares.create(req.body)
            return res.json(response)
        } catch (error) {
            console.log(error)
            res.json({error: error.message})
            return error
        }
    },
    async get(req, res){
        try {
            const response = await DoresArticulares.findAll()
            return res.json(response)
        } catch (error) {
            console.log(error)
            res.json({error: error.message})
            return error
        }
    },
    
}
