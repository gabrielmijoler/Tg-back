var express = require("express");

var CidController = require("./src/controller/controllerCid");
var FormularioController = require("./src/controller/controllerFormulario");
var UserController = require("./src/controller/controllerCliente");
var LinguaController = require("./src/controller/controllerLingua")
var GeralController = require("./src/controller/controllerGeral")
var AbdomeController = require("./src/controller/controllerAbdome")
var AlimentacaoController = require("./src/controller/controllerAlimentacao")
var BocagostoController = require("./src/controller/controllerBoca_gosto")
var ColunaController = require("./src/controller/controllerColuna")
var CorController = require("./src/controller/controllerCor")
var CorpeleController = require("./src/controller/controllerCorpele")
var DisfuncoesGastroController = require("./src/controller/controllerDisfuncoesGastro")
var DoresArticularesController = require("./src/controller/controllerDoresArticulares")
var DoresCabecaController = require("./src/controller/controllerDoresCabeca")
var EmocoesController = require("./src/controller/controllerEmocoes")
var EstacaoController = require("./src/controller/controllerEstacao")
var ExcrecoesController = require("./src/controller/controllerExcrecoes")
var Excrecoes2Controller = require("./src/controller/controllerExcrecoes2")
var FalaController = require("./src/controller/controllerFala")
var MenstruacaoController = require("./src/controller/controllerMenstruacao")
var NarizOlfatoController = require("./src/controller/controllerNarizOlfato")
var OlhosVisaoController = require("./src/controller/controllerOlhosVisao")
var OuvidosAudicaoController = require("./src/controller/controllerOuvidosAudicao")
var PalpacaoController = require("./src/controller/controllerPalpacao")
var RespiracaoController = require("./src/controller/controllerRespiracao")
var SaboresController = require("./src/controller/controllerSabores")
var SedeController = require("./src/controller/controllerSede")
var SonoController = require("./src/controller/controllerSono")
var TatoController = require("./src/controller/controllerTato")
var ToraxController = require("./src/controller/controllerTorax")
var TranspiracaoController = require("./src/controller/controllerTranspiracao")
var DoresMuscularesController = require("./src/controller/controllerDoresMusculares")

var routes = express.Router();

    

routes.get("/cid", CidController.get);

routes.post("/formulario", FormularioController.post);
routes.get("/formulario/:id", FormularioController.getByID);
routes.get("/formulario", FormularioController.indexByCliente);
routes.put("/formulario/:id", FormularioController.put);

routes.post("/cliente", UserController.post);
routes.get("/cliente/:id", UserController.getByID);
routes.get("/cliente", UserController.get);
routes.get("/cliente/:cpf", UserController.getByCpf);
routes.post('/cliente/formulario', UserController.criarClienteEFormulario);

routes.post("/lingua",LinguaController.post);
routes.get("/lingua/:id",LinguaController.getByID);
routes.get("/lingua",LinguaController.get);
routes.delete("/lingua/:id",LinguaController.delete);

routes.post("/geral",GeralController.post);
routes.get("/geral",GeralController.get);

routes.post("/abdome",AbdomeController.post);
routes.get("/abdome",AbdomeController.get);


routes.post("/alimentacao",AlimentacaoController.post);
routes.get("/alimentacao",AlimentacaoController.get);

routes.post("/bocagosto",BocagostoController.post);
routes.get("/bocagosto",BocagostoController.get);

routes.post("/coluna",ColunaController.post);
routes.get("/coluna",ColunaController.get);

routes.post("/cor",CorController.post);
routes.get("/cor",CorController.get);

routes.post("/corpele",CorpeleController.post);
routes.get("/corpele",CorpeleController.get);

routes.post("/disfuncoesGastro",DisfuncoesGastroController.post);
routes.get("/disfuncoesGastro",DisfuncoesGastroController.get);

routes.post("/doresarticulare",DoresArticularesController.post);
routes.get("/doresarticulare",DoresArticularesController.get);

routes.post("/doresmusculares",DoresMuscularesController.post);
routes.get("/doresmusculares",DoresMuscularesController.get);

routes.post("/dorescabeca",DoresCabecaController.post);
routes.get("/dorescabeca",DoresCabecaController.get);

routes.post("/emocoes",EmocoesController.post);
routes.get("/emocoes",EmocoesController.get);

routes.post("/estacao",EstacaoController.post);
routes.get("/estacao",EstacaoController.get);

routes.post("/excrecoes",ExcrecoesController.post);
routes.get("/excrecoes",ExcrecoesController.get);

routes.post("/excrecoest2",Excrecoes2Controller.post);
routes.get("/excrecoest2",Excrecoes2Controller.get);

routes.post("/fala",FalaController.post);
routes.get("/fala",FalaController.get);

routes.post("/menstruacao",MenstruacaoController.post);
routes.get("/menstruacao",MenstruacaoController.get);

routes.post("/narizolfato",NarizOlfatoController.post);
routes.get("/narizolfato",NarizOlfatoController.get);

routes.post("/olhovisao",OlhosVisaoController.post);
routes.get("/olhovisao",OlhosVisaoController.get);

routes.post("/ouvidosaudicao",OuvidosAudicaoController.post);
routes.get("/ouvidosaudicao",OuvidosAudicaoController.get);

routes.post("/palpacao",PalpacaoController.post);
routes.get("/palpacao",PalpacaoController.get);

routes.post("/respiracao",RespiracaoController.post);
routes.get("/respiracao",RespiracaoController.get);

routes.post("/sabores",SaboresController.post);
routes.get("/sabores",SaboresController.get);

routes.post("/sede",SedeController.post);
routes.get("/sede",SedeController.get);

routes.post("/sono",SonoController.post);
routes.get("/sono",SonoController.get);

routes.post("/tato",TatoController.post);
routes.get("/tato",TatoController.get);

routes.post("/torax",ToraxController.post);
routes.get("/torax",ToraxController.get);

routes.post("/transpiracao",TranspiracaoController.post);
routes.get("/transpiracao",TranspiracaoController.get);


module.exports = routes;