import express from "express"
import { getStreuner, getStreunerId } from "../controller/streuner.controller.js"

export const router = new express.Router()

router.get("/streuner", getStreuner)

//Katzen-ID vom Button
router.get("/streuner/:id", getStreunerId)