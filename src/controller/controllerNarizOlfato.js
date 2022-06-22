const NarizOlfato = require("../model/Nariz_Olfato");

module.exports = {
    async post(req, res){
        try {
            const response = await NarizOlfato.create(req.body)
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    async get(req, res){
        try {
            const response = await NarizOlfato.findAll()
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    
}
