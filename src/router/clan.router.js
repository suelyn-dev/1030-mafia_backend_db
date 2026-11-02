//Präsentationsschicht
import express from "express" //Referenz da schon im index
import { createNewClan } from "../controller/clan.controller.js"

export const router = new express.Router()

router.get("/clan", (req, res) => {
    res.sendStatus(418)
})

router.post("/clan/new", createNewClan)