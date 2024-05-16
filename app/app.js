import express from "express";
import { config } from "dotenv";
import ruta from "./routes/index.js";


config();
const app = express();

app.use(express.json());
app.set("port", process.env.PORT || 3000);

// rutas
app.use("/", ruta)


// Export default app
export default app;