import { getAllGebiete } from "../repositories/gebiete.repositories.js";

export async function allGebiete() {
    const gebiete = await getAllGebiete()
    return gebiete
}

export async function changeRegionClan(data) {
    console.log();
}