const Formulario = require("../model/Formulario");

module.exports = {
    async post(req, res) {
        try {
            console.log(req.body);
            const dataToSave = {
                ...req.body,
                createdAt: new Date(),
                updatedAt: new Date()
            };

            // Salvar no banco de dados
            const response = await Formulario.create(dataToSave);
            console.log(response);

            return res.json(response);
        } catch (error) {
            console.log(error)
            res.json({error: error.message})
            return error
        }
    },
    async indexByCliente(req, res){
        try {
            const response = await Formulario.findAll();
            return res.json(response);
        } catch (error) {
            console.log(error);
            res.status(400).json({error: error.message});
            return error;
        }
    },
    async getByID(req, res){
        try {
            const response = await Formulario.findByPk(req.params.id)
            console.log(response)
            console.log(req.params.id)
            return res.json(response)
        } catch (error) {
            console.log(error)
            res.json({error: error.message})
            return error
        }
    },
    async put(req, res){
        try {
        const response = await Formulario.findByPk(req.params.id)
        const newFormulario = {
                lingua: req.body.lingua,
                cor_pele: req.body.cor_pele,
                Nariz: req.body.Nariz,
                Orelhas: req.body.Orelhas,
                Labios_input: req.body.Labios_input,
                Pele: req.body.Pele,
                Fala: req.body.Fala,
                Respiracao: req.body.Respiracao,
                Tranpiracao: req.body.Tranpiracao,
                Sono: req.body.Sono,
                Emocoes: req.body.Emocoes,
                Cor: req.body.Cor,
                Estacao: req.body.Estacao,
                Alimentacao: req.body.Alimentacao,
                Sabores: req.body.Sabores,
                Sede: req.body.Sede,
                Disfuncoes_gastrointestinais: req.body.Disfuncoes_gastrointestinais,
                Excrecoes: req.body.Excrecoes,
                Obs_sono: req.body.Obs_sono,
                Obs_tranpiracao: req.body.Obs_tranpiracao,
                Menstruacao: req.body.Menstruacao,
                Olho_visao: req.body.Olho_visao,
                Ouvidos_audicao: req.body.Ouvidos_audicao,
                Nariz_olfato: req.body.Nariz_olfato,
                Tato: req.body.Tato,
                Boca_gosto: req.body.Boca_gosto,
                Coluna: req.body.Coluna,
                Dores_articulares: req.body.Dores_articulares,
                Abdome: req.body.Abdome,
                Dores_cabeca: req.body.Dores_cabeca,
                Torax: req.body.Torax,
                Escala_analogdor: req.body.Escala_analogdor,
                Diagnostico_teurapeutico: req.body.Diagnostico_teurapeutico,
                Condutas: req.body.Condutas,
                Obs_mentruacao: req.body.Obs_mentruacao,
                Obs_bocagosot: req.body.Obs_bocagosot,
                Obs_abdome: req.body.Obs_abdome,
                Obs_torax: req.body.Obs_torax,
                Objetivo: req.body.Objetivo,
                obs_lingua: req.body.obs_lingua,
                cabeecabelos_input: req.body.cabeecabelos_input,
                obs_fala: req.body.obs_fala,
                Obs_emocoes: req.body.Obs_emocoes,
                idCid: req.body.idCid,
                ItensGeralformpostura: req.body.ItensGeralformpostura,
                createdAt: req.body.createdAt,
                updatedAt: req.body.updatedAt
        }
        Formulario[response] = newFormulario;
        console.log(response)
        console.log(req.params.id)
        return res.json({
            error: false,
            message: "Formulário atualizado com sucesso!"})
        } catch (error) {
            console.log(error)
            res.json({error: error.message})
            return error
        }
    },
    async delete(req, res){
        try {
            const response = await Formulario.destroy({
                where: {
                    id: req.params.id
                },
            })
            console.log(response)
            return res.json({
                error: false,
                message: "Formulário deletado com sucesso!"
            });
        } catch (error) {
            console.log(error)
            res.json({error: error.message})
            return error
        }
    }
}
