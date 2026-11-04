import { changeClanId, getAllGebiete } from "../repositories/gebiete.repositories.js";

export async function allGebiete() {
    const gebiete = await getAllGebiete()
    return gebiete
}

export async function changeRegionClan(data) {
    const result = await changeClanId(data)
    return result
}