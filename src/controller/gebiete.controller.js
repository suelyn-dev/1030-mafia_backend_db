
import { allGebiete, changeRegionClan, evaluateExpiredFights, startRegionBattle } from "../service/gebiete.service.js";

/* export async function getGebiete(req, res) {
    const gebiete = await allGebiete()
    res.status(200).json(gebiete)
} */

export async function getGebiete(req, res) {
    try {
        //sind Kämpfe gelaufen
        await evaluateExpiredFights();
        //Aktuelle Zuordnung der Regions
        const gebiete = await allGebiete();
        res.status(200).json(gebiete);
    } catch (error) {
        console.error("Fehler bei getGebiete:", error);
        res.status(500).json({ error: "Fehler beim Laden der Gebiete" });
    }
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

//Sieger ermitteln
export async function getBattleResults(req, res) {
    try {
        await evaluateExpiredFights(); //checken ob Kämpfe abgelaufen
        return res.status(200).json({
            success: true,
            message: "Abgelaufene Kämpfe wurden erfolgreich geprüft und ausgewertet."
        });
    } catch (error) {
        console.error("Fehler in getBattleResults:", error);
        return res.status(500).json({
            success: false,
            error: "Fehler bei der Kampfauswertung."
        });
    }
}