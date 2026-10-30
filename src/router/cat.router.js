//Präsentationsschicht

//Routen für Katzenendpunkte anlegen
import express from "express" //Referenz da schon im index
import { getCats } from "../controller/cat.controller.js"

export const router = new express.Router()

router.get("/cat", getCats)