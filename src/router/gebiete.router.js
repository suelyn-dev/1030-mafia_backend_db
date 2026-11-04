import express from "express"

import { getGebiete, changeOwner } from "../controller/gebiete.controller.js"

export const router = new express.Router()

router.get("/gebiete", getGebiete)

//Route mit Cookies 
router.put("/region/:id", changeOwner)
/* • Das :id ist ein dynamischer Platzhalter (Parameter).
• Wenn das Frontend fetch("/region/5", ...) aufruft, weiß das Backend automatisch, dass die ID der Region 5 ist.
• Im Backend ruft man die Zahl über req.params.id auf. */