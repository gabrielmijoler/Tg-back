const Formulario = require("../model/Formulario");
const db = require("../config/database")
module.exports = {
    async post(req, res){
        if(!req.body.lingua || typeof req.body.lingua === undefined || req.body.lingua === null){
            return("Campo Lingua inválido")
        }
        if(!req.body.cor_pele || typeof req.body.cor_pele === undefined || req.body.cor_pele === null){
            return("Campo Cor da Pele inválido")
        }
        if(!req.body.Nariz || typeof req.body.Nariz === undefined || req.body.Nariz === null){
            return("Campo Nariz inválido")
        }
        if(!req.body.Nariz.lenght > 254){
            return ("Excedeu o numero de caracteres de Nariz")
        }
        if(!req.body.Orelhas || typeof req.body.Orelhas === undefined || req.body.Orelhas === null){
            return("Campo Orelhas inválido")
        }
        if(!req.body.Orelhas.lenght > 254){
            return ("Excedeu o numero de caracteres de Orelhas")
        }
        if(!req.body.Labios_input || typeof req.body.Labios_input === undefined || req.body.Labios_input === null){
            return("Campo Lábios inválido")
        }
        if(!req.body.Labios_input.lenght > 254){
            return ("Excedeu o numero de caracteres de Lábios")
        }
        if(!req.body.Pele || typeof req.body.Pele === undefined || req.body.Pele === null){
            return("Campo Pele inválido")
        }
        if(!req.body.Pele.lenght > 254){
            return ("Excedeu o numero de caracteres de Pele")
        }
        if(!req.body.Fala || typeof req.body.Fala === undefined || req.body.Fala === null){
            return("Campo Fala inválido")
        }
        if(!req.body.Respiracao || typeof req.body.Respiracao === undefined || req.body.Respiracao === null){
            return("Campo Respiração inválido")
        }
        if(!req.body.Tranpiracao || typeof req.body.Tranpiracao === undefined || req.body.Tranpiracao === null){
            return("Campo Tranpirção inválido")
        }
        if(!req.body.Sono || typeof req.body.Sono === undefined || req.body.Sono === null){
            return("Campo Sono inválido")
        }
        if(!req.body.Emocoes || typeof req.body.Emocoes === undefined || req.body.Emocoes === null){
            return("Campo Emoções inválido")
        }
        if(!req.body.Cor || typeof req.body.Cor === undefined || req.body.Cor === null){
            return("Campo Cor inválido")
        }
        if(!req.body.Estacao || typeof req.body.Estacao === undefined || req.body.Estacao === null){
            return("Campo Estação inválido")
        }
        if(!req.body.Alimentacao || typeof req.body.Alimentacao === undefined || req.body.Alimentacao === null){
            return("Campo Alimentação inválido")
        }
        if(!req.body.Sabores || typeof req.body.Sabores === undefined || req.body.Sabores === null){
            return("Campo Sabores inválido")
        }
        if(!req.body.Sede || typeof req.body.Sede === undefined || req.body.Sede === null){
            return("Campo Sede inválido")
        }
        if(!req.body.Disfuncoes_gastrointestinais || typeof req.body.Disfuncoes_gastrointestinais === undefined || req.body.Disfuncoes_gastrointestinais === null){
            return("Campo Disfunções Gastro-intestinais inválido")
        }
        if(!req.body.cor_pele || typeof req.body.cor_pele === undefined || req.body.cor_pele === null){
            return("Campo inválido")
        }
        if(!req.body.Excrecoes || typeof req.body.Excrecoes === undefined || req.body.Excrecoes === null){
            return("Campo Excreções inválido")
        }
        // if(!req.body.Excrecoes2 || typeof req.body.Excrecoes2 === undefined || req.body.Excrecoes2 === null){
        //     return("Campo Excreções 2 inválido")
        // }
        if(!req.body.Menstruacao || typeof req.body.Menstruacao === undefined || req.body.Menstruacao === null){
            return("Campo Menstruação inválido")
        }
        if(!req.body.cor_pele || typeof req.body.cor_pele === undefined || req.body.cor_pele === null){
            return("Campo inválido")
        }
        if(!req.body.Olho_visao || typeof req.body.Olho_visao === undefined || req.body.Olho_visao === null){
            return("Campo Olho e Visão inválido")
        }
        if(!req.body.Ouvidos_audicao || typeof req.body.Ouvidos_audicao === undefined || req.body.Ouvidos_audicao === null){
            return("Campo Ouvidos e Audição inválido")
        }
        if(!req.body.Nariz_olfato || typeof req.body.Nariz_olfato === undefined || req.body.Nariz_olfato === null){
            return("Campo Nariz Olfato inválido")
        }
        if(!req.body.Boca_gosto || typeof req.body.Boca_gosto === undefined || req.body.Boca_gosto === null){
            return("Campo Boca e Gosto inválido")
        }
        if(!req.body.Coluna || typeof req.body.Coluna === undefined || req.body.Coluna === null){
            return("Campo Coluna inválido")
        }
        if(!req.body.Dores_musculares || typeof req.body.Dores_musculares === undefined || req.body.Dores_musculares === null){
            return("Campo Dores Musculares inválido")
        }
        if(!req.body.Dores_articulares || typeof req.body.Dores_articulares === undefined || req.body.Dores_articulares === null){
            return("Campo Dores Articulares inválido")
        }
        if(!req.body.Abdome || typeof req.body.Abdome === undefined || req.body.Abdome === null){
            return("Campo Abdome inválido")
        }
        if(!req.body.Dores_cabeca || typeof req.body.Dores_cabeca === undefined || req.body.Dores_cabeca === null){
            return("Campo Dores Cabeça inválido")
        }
        if(!req.body.Torax || typeof req.body.Torax === undefined || req.body.Torax === null){
            return("Campo Torax inválido")
        }
        if(!req.body.Escala_analogdor || typeof req.body.cor_pele === undefined || req.body.cor_pele === null){
            return("Campo Escala Analógica de Dor inválido")
        }
        if(!req.body.cabeecabelos_input || typeof req.body.cabeecabelos_input === undefined || req.body.cabeecabelos_input === null){
            return("Campo Cabeça e Cabelos inválido")
        }
        if(!req.body.cabeecabelos_input.lenght > 254){
            return ("Excedeu o numero de caracteres de Cabeça e Cabelos")
        }
        if(!req.body.Objetivo || typeof req.body.Objetivo === undefined || req.body.Objetivo === null){
            return("Campo Objetivos inválido")
        }
        if(!req.body.Objetivo.lenght > 254){
            return ("Excedeu o numero de caracteres de Objetivos")
        }
        if(!req.body.Condutas || typeof req.body.Condutas === undefined || req.body.Condutas === null){
            return("Campo Condutas inválido")
        }
        if(!req.body.Condutas.lenght > 254){
            return ("Excedeu o numero de caracteres de Condutas")
        }
        if(!req.body.Diagnostico_teurapeutico || typeof req.body.Diagnostico_teurapeutico === undefined || req.body.Diagnostico_teurapeutico === null){
            return("Campo Diagnóstico Teurapêutico inválido")
        }
        if(!req.body.Diagnostico_teurapeutico.lenght > 254){
            return ("Excedeu o numero de caracteres de Diagnóstico Teurapêutico")
        }
        // if(!req.body.Patalogia || typeof req.body.Patalogia === undefined || req.body.Patalogia === null){
        //     return("Campo Patalogia inválido")
        // }
        // if(!req.body.Patalogia.lenght > 254){
        //     return ("Excedeu o numero de caracteres de Patalogia")
        // }
        // if(!req.body.Neuromuscular || typeof req.body.Neuromuscular === undefined || req.body.Neuromuscular === null){
        //     return("Campo Neuromuscular inválido")
        // }
        // if(!req.body.Neuromuscular.lenght > 254){
        //     return ("Excedeu o numero de caracteres de Teste Neuromuscular")
        // }
        // if(!req.body.Medicamento || typeof req.body.Medicamento === undefined || req.body.Medicamento === null){
        //     return("Campo Medicamento inválido")
        // }
        // if(!req.body.Medicamento.lenght > 254){
        //     return ("Excedeu o numero de caracteres de Medicamento")
        // }
        if(!req.body.Obs_sono.lenght > 254){
            return ("Excedeu o numero de caracteres de Observação de sono")
        }
        if(!req.body.Obs_tranpiracao.lenght > 254){
            return ("Excedeu o numero de caracteres de Observação de Tranpiração")
        }
        if(!req.body.Obs_mentruacao.lenght > 254){
            return ("Excedeu o numero de caracteres de Observação de Mentruação")
        }
        if(!req.body.Obs_bocagosot.lenght > 254){
            return ("Excedeu o numero de caracteres de Observação de Boca e Gosto")
        }
        if(!req.body.obs_lingua.lenght > 254){
            return ("Excedeu o numero de caracteres de Observação de Lingua")
        }
        if(!req.body.obs_fala.lenght > 254){
            return ("Excedeu o numero de caracteres de Observação de Fala")
        }
        if(!req.body.Obs_emocoes.lenght > 254){
            return ("Excedeu o numero de caracteres de Observação de Emoções")
        }
        if(!req.body.geralformpostura || typeof req.body.geralformpostura === undefined || req.body.geralformpostura === null){
            return("Campo Aspecto Geral do Corpo inválido")
        }
        if(!req.body.idCid || typeof req.body.idCid === undefined || req.body.idCid === null){
            return("Campo CID inválido")
        }
        
        try {
            // console.log(req.body)
            const response = await Formulario.create(req.body)
            console.log(response)
            return res.json(response)
        } catch (error) {
            console.log(error)
            return error
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
                Dores_musculares: req.body.Dores_musculares,
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
                geralformpostura: req.body.geralformpostura,
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
            return error
        }
    }
}
