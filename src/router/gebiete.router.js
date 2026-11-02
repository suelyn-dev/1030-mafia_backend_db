import express from "express"

import { getGebiete } from "../controller/gebiete.controller.js"

export const router = new express.Router()

router.get("/gebiete", getGebiete)