var express = require("express");
var CidController = require("./src/controller/controllerCid");
var FormularioController = require("./src/controller/controllerFormulario");
var UserController = require("./src/controller/controllerUser");
var routes = express.Router();

routes.get("/cid", CidController.get);
routes.post("/formulario", FormularioController.post);
routes.post("/user", UserController.post);

module.exports = routes;