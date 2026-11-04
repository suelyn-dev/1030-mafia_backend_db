import { allClans, newClan } from "../service/clan.service.js";

export async function createNewClan(req, res) {
    const result = await newClan(req.body)
    res.status(202).json(result)

}

export async function getClans(req, res) {
    const clans = await allClans()
    res.status(200).json(clans)
}

export function setClanCookie(req, res) {
    const clanId = req.params.id
    /* params macht aus den Wert hinter : ein JS-Objekt, wenn es im router id heißt, muss es hier auch id heißen. Kann aber auch anders genannt werden */

    /* res.cookie("clan", JSON.stringify([{ beispiel: 7 }, { beispiel: 843954 }]),
        {
            partitioned: true 
            secure: true
            sameSite: "none"
        }) */

    res.cookie("clan", clanId)
    res.sendStatus(200)
}