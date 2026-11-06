import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
/* process.loadEnvFile(".env") //--> wegen Umgebungsvariable, funktioniert aber nicht weil imports zuerst aufgeführt werden, daher besser in ein Skript schreiben oder dotenv importieren */
import "dotenv/config"

//Eigene Router importieren
import {router as catRouter} from "./src/router/cat.router.js"
import {router as clanRouter} from "./src/router/clan.router.js"
import {router as gebieteRouter} from "./src/router/gebiete.router.js"
import {router as streunerRouter} from "./src/router/streuner.router.js"



const PORT = process.env.PORT || 8080 //Sicherheits-backup
const app = express() //damit ich meine express Anwendung nutzen kann

//Middlewares
app.use(cors({               //kümmert sich um das PORT-Problem
    origin: "http://127.0.0.1:5501", //spezifiziert, damit Cookies funktionieren
    credentials: true                
})); 
app.use(express.json()) //damit Daten richtig umgewandelt werden
app.use(cookieParser()) //damit Backend Cookies lesen kann, die der Browser bei einer Anfrage mitsendet

//Router einbinden
app.use("/api/v1", catRouter)
app.use("/api/v1", clanRouter)
app.use("/api/v1", gebieteRouter)
app.use("/api/v1", streunerRouter)

app.listen(PORT, () => console.log("Ein Mauzi erscheint in Port", PORT)) //Port starten