const Cliente = require("../model/Cliente");


module.exports = {
    async post(req, res){
        try {
            console.log(req.body)
            const response = await Cliente.create(req.body)
            return res.json(response);
        } catch (error) {
            console.log(error)
            res.json({error: error.message})
            return error
            //res.data: erro
        }
    },
    async getByID(req, res){
        try {
            const response = await Cliente.findByPk(req.params.id)
            console.log(response)
            console.log(req.params.id)
            return res.json(response)
        } catch (error) {
            console.log(error)
            res.json({error: error.message})
            return error
        }
    }, 
    async getByCpf(req, res){
        try {
            const response = await Cliente.findOne({
                where:{
                cpf: req.params.cpf
            }
        })
            console.log(response, "response")
            console.log(req.params.cpf, "params.cpf")
            return res.json(response)
        } catch (error) {
            console.log(error)
            res.json({error: error.message})
            return error
        }
    },
    async get(req, res){
        try {
            const response = await Cliente.findAll()
            return res.json(response)
        } catch (error) {
            console.log(error)
            res.json({error: error.message})
            return error
        }
    },
    async put(req, res){
        try {
        const response = await Cliente.findByPk(req.params.id)
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
        Cliente[response] = newCliente;
        console.log(response)
        console.log(req.params.id)
        return res.json({
            error: false,
            message: "Usuário atualizado com sucesso!"})
        } catch (error) {
            console.log(error)
            res.json({error: error.message})
            return error
        }
    },
    async delete(req, res){
        try {
            const response = await Cliente.destroy({
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
            res.json({error: error.message})
            return error
        }
    }
}
