"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllersUser = require("../controller/controllers.user.js");
var _oauth = require("../middlewares/oauth.js");
var rutaUser = (0, _express.Router)();
rutaUser.get("/user/:id", _controllersUser.mostrarUsuario);

// mostrar todos los usaurios
rutaUser.get("/user", _controllersUser.listarUsario);

// post sirve para guradr o crear 
rutaUser.post("/user", _oauth.verifyToken, _controllersUser.crearUsuario);

// modificar
rutaUser.put("/user", _oauth.verifyToken, _controllersUser.modificarUsuario);

// borrar ruta
rutaUser["delete"]("/user", _oauth.verifyToken, _controllersUser.eliminarUsuario);

// para logearse
rutaUser.post("/login", _controllersUser.logueoUsuario);
var _default = exports["default"] = rutaUser;