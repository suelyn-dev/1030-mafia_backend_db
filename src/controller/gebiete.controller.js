
import { allGebiete } from "../service/gebiete.service.js";

export async function getGebiete(req, res) {
    const gebiete = await allGebiete()
    res.status(200).json(gebiete)
}


export async function changeOwner(req, res) {
    console.log(req.cookies);
    res.send()
}