import bcrypt, { hash } from "bcrypt";
import {success, error} from "../message/browser.js";
import pool from "../config/db.myql.js"
import { config }  from "dotenv";
import jwt from "jsonwebtoken";
config();

export const  crearUsuario = async(req, res) =>{
    const nombre = req.body.nombre;
    const usuario = req.body.usuario;
    const contrasenasincifrar = req.body.contrasena;
    try {
        const hash =  await bcrypt.hash(contrasenasincifrar, 2)
        const contrasena = hash;
        const respuesta = await pool.query(`CALL sp_crear_usuarios('${nombre}','${usuario}','${contrasena}');`);
        if(respuesta[0].affectedRows == 1){
            success(req, res, 201, "usuario creado");
        }else{
            error(req, res, 400, "no se pudo agregar el nuevo");
        }
    } catch (err) {
        error(req, res, 400, err);
    }
    
};
export const mostrarUsuario = async(req, res) =>{
    let id = req.params['id'];
    try {
        const respuesta = await pool.query(`CALL sp_mostrar_usuario(${id});`);
        success(req, res, 200, respuesta[0]);
    } catch (err) {
        error(req, res, 500, err)
    }
    
};

export const listarUsario = async(req, res)=>{
    try {
        const respuesta = await pool.query(`CALL sp_listar_usuarios();`);
        success(req, res, 200, respuesta[0]);
    } catch (err) {
        error(req, res, 500, err)
    }
};
export const modificarUsuario = async(req, res) =>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const usuario = req.body.usuario;
    const contrasenasincifrar = req.body.contrasena;
    const contrasena = contrasenasincifrar;
    // como cifrar la contraseña
    try {
        const respuesta = await pool.query(`CALL sp_modificar_usuarios(${id},'${nombre}','${usuario}','${contrasena}');`);
        if(respuesta[0].affectedRows == 1){
            success(req, res, 201, "usuario modificado:  " +usuario);
        }else{
            error(req, res, 400, "no se pudo modificar");
        }
    } catch (err) {
        error(req, res, 400, err);
    }
};
export const eliminarUsuario = async(req, res) =>{
    const id = req.body.id;
    
    try {
        const respuesta = await pool.query(`CALL sp_eliminar_usuarios(${id});`);
        if(respuesta[0].affectedRows == 1){
            success(req, res, 201, "usuario ha sido eliminado  ");
        }else{
            error(req, res, 400, "no se pudo eliminar el usuario");
        }
    } catch (err) {
        error(req, res, 400, err);
    }
};

export const logueoUsuario = async(req, res)  => {
    const { usuario, contrasena } = req.body;
    const hash =  await bcrypt.hash(contrasena, 2)
    try {
        const respuesta = await pool.query(`CALL SP_BUSCAR_USUARIO('${usuario}')`);
        if(respuesta[0][0]== 0){
            error(req, res, 404, "usaurio no existe");
            return;
        }
        const match = await bcrypt.compare(contrasena, respuesta[0][0][0].contrasena);
        if(!match){
            error(req, res, 401, "clave errada");
            return;
        }
        let payload = {
            "usuario": usuario,
            "nombre":  respuesta[0][0][0].nombre
        };
        let token = await jwt.sign(
            payload,
            process.env.TOKEN_PRIVATEKEY,
            {
                expiresIn : process.env.TOKEN_EXPIRES_IN
            });

        success(req, res, 200,token);


    } catch (e) {
        console.error("Error en el servidor:", e);
        error(req, res, 500, "error en el servidor, porfavor intente nuevamente");
    }
    
};