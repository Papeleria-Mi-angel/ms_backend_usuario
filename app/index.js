import app from "./app.js";
import {msjConsole, mensa} from "./message/consola.js";
import colors from "colors";

app.listen(app.get("port"), () => {
    msjConsole("puertoSuccess", 
    `${mensa.puerto} ${app.get("port")} http://localhost:${app.get("port")}`);
    
})