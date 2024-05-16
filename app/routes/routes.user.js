import { Router } from "express";
import { 
    crearUsuario, 
    eliminarUsuario, 
    listarUsario, 
    modificarUsuario, 
    mostrarUsuario,
    logueoUsuario } from "../controller/controllers.user.js";
import { verifyToken } from "../middlewares/oauth.js";

const rutaUser = Router();

rutaUser.get("/user/:id",mostrarUsuario);

// mostrar todos los usaurios
rutaUser.get("/user",listarUsario);

// post sirve para guradr o crear 
rutaUser.post("/user", verifyToken,crearUsuario);

// modificar
rutaUser.put("/user", verifyToken,modificarUsuario);

// borrar ruta
rutaUser.delete("/user", verifyToken,eliminarUsuario);

// para logearse
rutaUser.post("/login",logueoUsuario);

export default rutaUser;