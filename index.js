import express from "express"
import cors from "cors"

process.loadEnvFile(".env") //--> wegen Umgebungsvariable
const PORT = process.env.PORT || 8080 //Sicherheits-backup

const app = express() //damit ich meine express ANwenudng nutzen kann

app.use(cors()) //Middleware die sich um das PORT-Problem kümmert
app.use(express.json()) //Middleware die meine Daten richtig umwandelt



app.listen(PORT, () => console.log("Ein Mauzi erscheint in Port", PORT)) //Port starten