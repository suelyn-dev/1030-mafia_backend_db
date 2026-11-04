import { allStreuner } from "../service/streuner.service.js";

export async function getStreuner(req, res) {
    const streuner = await allStreuner()
    res.status(200).json(streuner)
}