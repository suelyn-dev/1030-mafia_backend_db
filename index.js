import express from "express"
import cors from "cors"
//Router importieren
import {router as catRouter} from "./src/router/cat.router.js"
import {router as clanRouter} from "./src/router/clan.router.js"



process.loadEnvFile(".env") //--> wegen Umgebungsvariable
const PORT = process.env.PORT || 8080 //Sicherheits-backup

const app = express() //damit ich meine express ANwenudng nutzen kann

app.use(cors()) //Middleware die sich um das PORT-Problem kümmert
app.use(express.json()) //Middleware die meine Daten richtig umwandelt
//Router einbinden
app.use("/api", catRouter)
app.use("/api", clanRouter)



app.listen(PORT, () => console.log("Ein Mauzi erscheint in Port", PORT)) //Port starten