//Geschäftslogik/ Businesslayer

import { getAllCats } from "../repositories/cat.repositories.js";

export async function allCats() {
    const cats = await getAllCats()
    return cats
}