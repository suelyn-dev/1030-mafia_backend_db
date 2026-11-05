
import { allGebiete, changeRegionClan, startRegionBattle } from "../service/gebiete.service.js";

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

//Kampf starten

export async function insertNewFight(req, res) {
    try {
        const ids = {
            regionId: req.params.id,
            homeClanId: req.body.homeClanId,
            battleClanId: req.cookies.clan
        }
        if (ids.homeClanId == ids.battleClanId) {
            return res.status(400).json({ error: "Du kannst deinen eigenen Clan nicht angreifen!" });
        }
        const result = await startRegionBattle(ids)
        res.json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Kampf wurde nicht gestartet!" })
    }
}