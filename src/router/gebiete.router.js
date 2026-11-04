import express from "express"

import { getGebiete, changeOwner } from "../controller/gebiete.controller.js"

export const router = new express.Router()

router.get("/gebiete", getGebiete)

//mit Cookies jetzt
router.put("/region/:id", changeOwner)