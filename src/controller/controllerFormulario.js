const Formulario = require("../model/Formulario");
const db = require("../config/database")

module.exports = {
    async post(req, res){
        try {
            const response = await Formulario.create(req.body)
            return res.json(response)
        } catch (error) {
            return error
        }
    }
}
