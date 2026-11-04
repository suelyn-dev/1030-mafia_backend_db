//Präsentationsschicht
import express from "express" //Referenz da schon im index
import { createNewClan, getClans, setClanCookie } from "../controller/clan.controller.js"

export const router = new express.Router()

router.get("/clan", getClans)
router.get("/clan/set/:id", setClanCookie)


router.post("/clan/new", createNewClan)