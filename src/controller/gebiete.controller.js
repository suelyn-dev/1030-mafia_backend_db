
import { allGebiete, changeRegionClan } from "../service/gebiete.service.js";

export async function getGebiete(req, res) {
    const gebiete = await allGebiete()
    res.status(200).json(gebiete)
}


export async function changeOwner(req, res) {
    try {
        const ids = {
            clanId: req.cookies.clan,
            regionId: req.params.id
        }
        const result = await changeRegionClan(ids)
        res.json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Da hat was nicht geklappt!" })
    }
}