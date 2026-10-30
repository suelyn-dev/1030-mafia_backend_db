//Routen für Katzenendpunkte anlegen
import express from "express" //Referenz da schon im index

export const router = new express.Router()

router.get("/cat", (req, res) => {
    res.sendStatus(418)
})