
import express from "express" //Referenz da schon im index

export const router = new express.Router()

router.get("/clan", (req, res) => {
    res.sendStatus(418)
})