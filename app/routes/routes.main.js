import Router from "express";
import { messageBrowse } from "../message/browser.js";

const rutaMain = Router();

rutaMain.get("/", (req, res) => {
    res.json({"respuesta":messageBrowse.principal})
})

// // home
rutaMain.get("/home", (req, res) => {
    res.json({"home":messageBrowse.home})
})

// gallery
rutaMain.get("/gallery", (req, res) => {
    res.json({"gallery":messageBrowse.gallery})
})

//about
rutaMain.get("/about", (req, res) => {
    res.json({"about":messageBrowse.about})
})

// contact
rutaMain.get("/contact", (req, res) => {
    res.json({"contact":messageBrowse.contact})
})


export default rutaMain;