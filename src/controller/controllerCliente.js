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
    async delete(req, res) {
        try {
          const user = await Cliente.findOne({ where: { id: req.params.id } });
          if (!user) {
            console.log("404")
            return res.status(404).json({ error: true, message: 'Usuário não encontrado' });
          }
          await Cliente.destroy({
            where: {
              id: req.params.id,
            },
          });

          return res.status(200).json({
            error: false,
            message: 'Usuário deletado com sucesso!',
          });
        } catch (error) {
            console.error(error);
            let status = 500;
            let message = 'Erro interno do servidor';
            if (error.name === 'SequelizeDatabaseError') {
              status = 400;
              message = 'Erro ao encontrar usuário';
            } else if (error.name === 'SequelizeForeignKeyConstraintError') {
              status = 400;
              message = 'Erro ao excluir usuário: existem registros relacionados';
            } else if (error.name === 'SequelizeUniqueConstraintError') {
              status = 400;
              message = 'Erro ao excluir usuário: violação de restrição de chave única';
            } else if (error.name === 'SequelizeValidationError') {
              status = 400;
              message = 'Erro ao excluir usuário: dados inválidos fornecidos';
            }
            return res.status(status).json({ error: true, message });
          }
      }
}
