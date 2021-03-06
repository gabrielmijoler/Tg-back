const Lingua = require("../model/User");
const db = require("../config/database");
const User = require("../model/User");

module.exports = {
    async post(req, res){
        try {
            console.log(req.body)
            const response = await Lingua.create(req.body)
            return res.json(response)
        } catch (error) {
            return error
        }
    },
    async getByID(req, res){
        try {
            const response = await User.findByPk(req.params.id)
            console.log(response)
            console.log(req.params.id)
            return res.json(response)
        } catch (error) {
            console.log(error)
            return error
        }
    },
    async put(req, res){
        try {
        const response = await User.findByPk(req.params.id)
        const newCliente = {
            nome: req.body.nome,
            sexo: req.body.sexo,
            email: req.body.email,
            cpf: req.body.cpf,
            profissao: req.body.profissao,
            telefone: req.body.telefone,
            religiao: req.body.religiao,
            estadocivil: req.body.estadocivil,
            datanascimento: req.body.datanascimento,
            updatedAt: req.body.updatedAt
        }
        User[response] = newCliente;
        console.log(response)
        console.log(req.params.id)
        return res.json({
            error: false,
            message: "Usuário atualizado com sucesso!"})
        } catch (error) {
            console.log(error)
            return error
        }
    },
    async delete(req, res){
        try {
            const response = await User.destroy({
                where: {
                    id: req.params.id
                },
            })
            console.log(response)
            return res.json({
                error: false,
                message: "Usuário deletado com sucesso!"
            });
        } catch (error) {
            console.log(error)
            return error
        }
    }
}
