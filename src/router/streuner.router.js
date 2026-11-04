import express from "express"
import { getStreuner } from "../controller/streuner.controller.js"

export const router = new express.Router()

router.get("/streuner", getStreuner)