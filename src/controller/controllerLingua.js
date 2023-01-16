const Lingua = require("../model/Lingua");

module.exports = {
    async post(req, res){
        try {
            const response = await Lingua.create(req.body)
            return res.json(response)
        } catch (error) {
            console.log(error)
            res.json({error: error.message})
            return error
        }
    },
    async getByID(req, res){
        try {
            const response = await Lingua.findByPk(req.params.id)
            return res.json(response)
        } catch (error) {
            console.log(error)
            res.json({error: error.message})
            return error
        }
    },
    async get(req, res){
        try {
            const response = await Lingua.findAll()
            return res.json(response)
        } catch (error) {
            console.log(error)
            res.json({error: error.message})
            return error
        }
    },
    async delete(req, res){
        try {
            const response = await Lingua.destroy({
                where: {
                    id: req.params.id
                },
            })
            console.log(response)
            return res.json({
                error: false,
                message: "Lingua apagado com sucesso!"
            });
        } catch (error) {
            console.log(error)
            res.json({error: error.message})
            return error
        }
    }
}
