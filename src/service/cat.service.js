//Geschäftslogik/ Businesslayer

import { getAllCats } from "../repositories/cat.repositories.js";

export function allCats() {
    const cats = getAllCats()
    return cats
}