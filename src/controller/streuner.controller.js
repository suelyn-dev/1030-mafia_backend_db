import { allStreuner, allStreunerId } from "../service/streuner.service.js";

export async function getStreuner(req, res) {
    const streuner = await allStreuner()
    res.status(200).json(streuner)
}

//Katzen-ID vom Button
export async function getStreunerId(req, res) {
    try{
        const id = req.params.id //liest ID aus der URL!!!!
        const streuner = await allStreunerId(id)
         res.status(200).json(streuner)
    }catch (error) {
        console.log(error)
        res.status(500).json({ error: "Fehler beim Laden des Streuners" })
    }
}